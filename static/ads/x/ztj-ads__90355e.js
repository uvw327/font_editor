(function () {
	const script =
		document.currentScript ||
		Array.from(document.scripts).find(function (item) {
			return /\/ztj-ads\.js(?:\?|$)/.test(item.src || "");
		});
	const configuredBase =
		window.ZTJ_ADS_BASE_URL ||
		(script && script.dataset && script.dataset.baseUrl);
	const scriptURL = new URL(
		configuredBase || (script && script.src ? script.src : "../../ztj-ads.js"),
		window.location.href,
	);
	const baseOrigin = scriptURL.origin;
	const basePath = scriptURL.pathname.replace(/\/[^/]*$/, "");
	const baseURL = baseOrigin + basePath;
	const seenAdvertisers = window.__ztjAdsSeenAdvertisers || new Set();
	const queue = window.__ztjAdsQueue || Promise.resolve();
	const reportedRisks = window.__ztjAdsReportedRisks || new Set();
	const loadObservers = window.__ztjAdsLoadObservers || new WeakMap();
	let fingerprintPromise = window.__ztjAdsFingerprintPromise || null;
	let currentPageURL = window.location.href;
	let bootTimer = 0;
	const fpVendorURL = `${baseURL}/ztj-ads-static/vendor/fingerprintjs.min.js`;
	window.__ztjAdsSeenAdvertisers = seenAdvertisers;
	window.__ztjAdsQueue = queue;
	window.__ztjAdsReportedRisks = reportedRisks;
	window.__ztjAdsLoadObservers = loadObservers;
	window.__ztjAdsFingerprintPromise = fingerprintPromise;

	// 手动排除的广告商 id。可在 JS 中配置：
	//   - 全局：window.ZTJ_ADS_EXCLUDE_ADVERTISERS = [1, 2, 3]（或逗号字符串 "1,2,3"）
	//   - 脚本标签：<script src=".../ztj-ads.js" data-exclude-advertisers="1,2">
	//   - 单个广告位：<div data-ztj-ad data-slot-id="x" data-exclude-advertisers="1,2">
	function parseIdList(raw) {
		if (!raw) return [];
		return String(raw)
			.split(",")
			.map(function (x) {
				return Number(String(x).trim());
			})
			.filter(function (n) {
				return n > 0;
			});
	}
	const manualExclude = new Set(
		parseIdList(
			window.ZTJ_ADS_EXCLUDE_ADVERTISERS ||
				(script && script.dataset && script.dataset.excludeAdvertisers),
		),
	);
	function containerExcludes(container) {
		return parseIdList(
			container.dataset.excludeAdvertisers ||
				container.getAttribute("data-exclude-advertisers"),
		);
	}
	function isExcluded(container, advertiserID) {
		if (manualExclude.has(advertiserID)) return true;
		return containerExcludes(container).indexOf(advertiserID) !== -1;
	}

	function platform() {
		const ua = navigator.userAgent || "";
		if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return "MOBILE";
		if (
			navigator.maxTouchPoints > 1 &&
			Math.min(window.innerWidth, window.innerHeight) < 900
		)
			return "MOBILE";
		return "DESKTOP";
	}

	function loadScript(src) {
		return new Promise(function (resolve, reject) {
			const existing = document.querySelector(`script[src="${src}"]`);
			if (existing) {
				existing.addEventListener("load", resolve, { once: true });
				existing.addEventListener("error", reject, { once: true });
				if (window.FingerprintJS) resolve();
				return;
			}
			const tag = document.createElement("script");
			tag.async = true;
			tag.src = src;
			tag.onload = resolve;
			tag.onerror = reject;
			document.head.appendChild(tag);
		});
	}

	async function fingerprint() {
		if (!fingerprintPromise) {
			fingerprintPromise = (async function () {
				try {
					if (!window.FingerprintJS) {
						await loadScript(fpVendorURL);
					}
					const fp = await window.FingerprintJS.load();
					const result = await fp.get();
					return result.visitorId || "";
				} catch (_) {
					return "";
				}
			})();
			window.__ztjAdsFingerprintPromise = fingerprintPromise;
		}
		return fingerprintPromise;
	}

	function likelyAutomation() {
		const ua = navigator.userAgent || "";
		return Boolean(
			navigator.webdriver ||
				window._phantom ||
				window.__nightmare ||
				window.Cypress ||
				!ua ||
				/HeadlessChrome|PhantomJS|Selenium|Nightmare|Cypress|bot|crawler|crawl|spider|slurp|curl|wget|mediapartners/i.test(
					ua,
				),
		);
	}

	function reportRisk(reason, fp, baitPayload) {
		const adID =
			baitPayload && baitPayload.ad_id ? String(baitPayload.ad_id) : "";
		const impID =
			baitPayload && baitPayload.imp_id ? String(baitPayload.imp_id) : "";
		const key = `${reason}:${fp || ""}:${adID}:${impID}:${window.location.href}`;
		if (reportedRisks.has(key)) return;
		reportedRisks.add(key);
		const payload = {
			reason,
			fingerprint: fp || "",
			page_url: window.location.href,
		};
		if (baitPayload) {
			payload.ad_id = baitPayload.ad_id;
			payload.imp_id = baitPayload.imp_id;
			payload.slot_id = baitPayload.slot_id;
			payload.token = baitPayload.token;
		}
		postJSON("/api/v1/ad/click/bait", payload).catch(function () {});
	}

	function postJSON(path, body) {
		return fetch(`${baseURL}${path}`, {
			method: "POST",
			mode: "cors",
			keepalive: true,
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
		});
	}

	function clickURLWithFingerprint(path, fp) {
		const next = new URL(baseURL + path);
		if (fp && !next.searchParams.get("fingerprint")) {
			next.searchParams.set("fingerprint", fp);
		}
		return next.toString();
	}

	function render(container, ad, fp) {
		if (ad.is_fill_ad) {
			renderFillAd(container, ad);
			return;
		}
		// 不展示手动排除的广告商。
		// 同页面去重交给服务端处理：已展示的广告主会被放进 seenAdvertisers，
		// 并在后续广告位的请求里通过 exclude_advertiser_ids 传给服务端（服务端对内部账户 id=1 允许重复展示）。
		// 前端不再对已展示的广告主做硬性拦截，否则会和服务端“允许重复展示”的策略冲突，
		// 导致首个广告位渲染后，其余广告位即使拿到了广告也不会渲染。
		if (isExcluded(container, ad.advertiser_id)) {
			container.innerHTML = "";
			return;
		}
		seenAdvertisers.add(ad.advertiser_id);

		const baitPayload = ad.bait_payload || null;
		const bait = document.createElement("a");
		const baitURL = new URL(baseURL + "/api/v1/ad/click/bait");
		baitURL.searchParams.set("reason", "hidden_bait");
		baitURL.searchParams.set("page_url", window.location.href);
		if (fp) baitURL.searchParams.set("fingerprint", fp);
		if (baitPayload) {
			baitURL.searchParams.set("ad_id", baitPayload.ad_id);
			baitURL.searchParams.set("imp_id", baitPayload.imp_id);
			baitURL.searchParams.set("slot_id", baitPayload.slot_id);
			baitURL.searchParams.set("token", baitPayload.token);
		}
		bait.href = baitURL.toString();
		bait.target = "_blank";
		bait.rel = "nofollow noopener noreferrer";
		bait.referrerPolicy = "no-referrer";
		bait.style.cssText = "display:none !important";
		bait.setAttribute("aria-hidden", "true");
		bait.tabIndex = -1;

		const link = document.createElement("a");
		link.className = "ztj-ad-link";
		link.href = clickURLWithFingerprint(ad.click_url, fp);
		link.target = "_blank";
		link.rel = "nofollow noopener noreferrer";
		link.referrerPolicy = "no-referrer";
		link.style.cssText = [
			"display:block",
			"width:100%",
			"max-width:100%",
			"aspect-ratio:" + ad.width + "/" + ad.height,
			"line-height:0",
			"text-decoration:none",
			"overflow:hidden",
			"position:relative",
		].join(";");

		const img = document.createElement("img");
		img.src = ad.image_url;
		img.alt = ad.title || "advertisement";
		img.loading = "lazy";
		img.referrerPolicy = "no-referrer";
		img.style.cssText = [
			"display:block",
			"width:100%",
			"height:100%",
			"object-fit:contain",
			"border:0",
		].join(";");

		link.appendChild(img);

		// 广告标识
		const adLabel = document.createElement("a");
		adLabel.href = "https://www.zitijia.com/ads/portal/";
		adLabel.target = "_blank";
		adLabel.rel = "nofollow noopener noreferrer";
		adLabel.style.cssText = [
			"position:absolute",
			"bottom:0px",
			"left:0px",
			"background:rgba(0,0,0,0.1)",
			"color:rgba(255,255,255,0.5)",
			"font-size:12px",
			"line-height:1.2",
			"padding:2px 6px",
			"border-radius:2px",
			"z-index:1",
			"white-space:nowrap",
			"text-decoration:none",
			"cursor:pointer",
		].join(";");
		adLabel.textContent = "广告";
		adLabel.addEventListener("mouseenter", function () {
			adLabel.style.background = "rgba(0,0,0,0.6)";
			adLabel.style.color = "#fff";
		});
		adLabel.addEventListener("mouseleave", function () {
			adLabel.style.background = "rgba(0,0,0,0.1)";
			adLabel.style.color = "rgba(255,255,255,0.5)";
		});
		link.appendChild(adLabel);
		container.innerHTML = "";
		container.appendChild(bait);
		container.appendChild(link);

		let visible = false;
		let impressionSent = false;
		let visibleTimer = 0;

		function sendImpression() {
			// 只有广告进入可视区域并停留一小段时间后才回传曝光，避免刚渲染就被滚走的广告计费。
			if (impressionSent) return;
			if (likelyAutomation()) {
				reportRisk("automation", fp, baitPayload);
				return;
			}
			impressionSent = true;
			postJSON(ad.impression_url, {
				...ad.impression_payload,
				fingerprint: fp,
			}).catch(function () {});
		}

		const observer = new IntersectionObserver(
			function (entries) {
				const entry = entries[0];
				visible = Boolean(
					entry && entry.isIntersecting && entry.intersectionRatio >= 0.5,
				);
				if (visible && !impressionSent) {
					window.clearTimeout(visibleTimer);
					visibleTimer = window.setTimeout(function () {
						if (visible) sendImpression();
					}, 600);
				}
			},
			{ threshold: [0, 0.5, 1] },
		);
		observer.observe(container);

		link.addEventListener("click", function (event) {
			if (!event.isTrusted) {
				reportRisk("untrusted_click", fp, baitPayload);
				event.preventDefault();
				return;
			}
			if (likelyAutomation()) {
				reportRisk("automation", fp, baitPayload);
				event.preventDefault();
				return;
			}
			if (!impressionSent) {
				event.preventDefault();
				return;
			}
			link.href = clickURLWithFingerprint(ad.click_url, fp);
		});
	}

	function renderFillAd(container, ad) {
		const link = document.createElement("a");
		link.className = "ztj-ad-link";
		link.href = ad.target_url;
		link.target = "_blank";
		link.rel = "nofollow noopener noreferrer";
		link.referrerPolicy = "no-referrer";
		link.style.cssText = [
			"display:block",
			"width:100%",
			"max-width:100%",
			"aspect-ratio:" + ad.width + "/" + ad.height,
			"line-height:0",
			"text-decoration:none",
			"overflow:hidden",
			"position:relative",
		].join(";");

		const img = document.createElement("img");
		img.src = ad.image_url;
		img.alt = ad.title || "advertisement";
		img.loading = "lazy";
		img.referrerPolicy = "no-referrer";
		img.style.cssText = [
			"display:block",
			"width:100%",
			"height:100%",
			"object-fit:contain",
			"border:0",
		].join(";");

		link.appendChild(img);

		const adLabel = document.createElement("a");
		adLabel.href = "https://www.zitijia.com/ads/portal/";
		adLabel.target = "_blank";
		adLabel.rel = "nofollow noopener noreferrer";
		adLabel.style.cssText = [
			"position:absolute",
			"bottom:0px",
			"left:0px",
			"background:rgba(0,0,0,0.1)",
			"color:rgba(255,255,255,0.5)",
			"font-size:12px",
			"line-height:1.2",
			"padding:2px 6px",
			"border-radius:2px",
			"z-index:1",
			"white-space:nowrap",
			"text-decoration:none",
			"cursor:pointer",
		].join(";");
		adLabel.textContent = "广告";
		adLabel.addEventListener("mouseenter", function () {
			adLabel.style.background = "rgba(0,0,0,0.6)";
			adLabel.style.color = "#fff";
		});
		adLabel.addEventListener("mouseleave", function () {
			adLabel.style.background = "rgba(0,0,0,0.1)";
			adLabel.style.color = "rgba(255,255,255,0.5)";
		});
		link.appendChild(adLabel);
		container.innerHTML = "";
		container.appendChild(link);
	}

	function staleLoad(container, loadID) {
		return loadID && container.dataset.ztjLoadId !== loadID;
	}

	function parseAdSizes(container, plat) {
		// 移动端优先用 data-size-mob，桌面端优先用 data-size-desk；
		// 二者都回退到兼容用的 data-size。
		var platRaw =
			plat === "MOBILE"
				? container.dataset.sizeMob
				: container.dataset.sizeDesk;
		var raw = (platRaw || container.dataset.size || "").trim();
		if (raw) {
			var parts = raw.split(",");
			var sizes = [];
			for (var i = 0; i < parts.length; i++) {
				var pair = parts[i].trim().split("x");
				var w = Number(pair[0]);
				var h = Number(pair[1]);
				if (w > 0 && h > 0) sizes.push({ w: w, h: h });
			}
			if (sizes.length > 0) return sizes;
		}
		var dw = Number(
			container.dataset.width || container.getAttribute("data-width"),
		);
		var dh = Number(
			container.dataset.height || container.getAttribute("data-height"),
		);
		if (dw > 0 && dh > 0) return [{ w: dw, h: dh }];
		return [
			{ w: 1200, h: 90 },
			{ w: 600, h: 90 },
			{ w: 500, h: 400 },
		];
	}

	function filterSizes(sizes, containerWidth) {
		if (sizes.length <= 1) return sizes;
		var filtered = [];
		for (var i = 0; i < sizes.length; i++) {
			var size = sizes[i];
			if (size.w >= 1200) {
				if (containerWidth > 700) filtered.push(size);
			} else if (size.w >= 600) {
				if (containerWidth >= 550) filtered.push(size);
			} else {
				filtered.push(size);
			}
		}
		return filtered;
	}

	async function requestAd(
		container,
		loadID,
		width,
		height,
		forcedPlatform,
		fp,
	) {
		var params = new URLSearchParams({
			slot_id:
				container.dataset.slotId || container.getAttribute("data-slot-id"),
			width: String(width),
			height: String(height),
			platform: forcedPlatform || platform(),
			page_url: window.location.href,
			fingerprint: fp,
		});
		// 合并：运行时已展示的广告主 + 手动全局排除 + 本广告位排除
		var excludes = new Set(manualExclude);
		seenAdvertisers.forEach(function (id) {
			excludes.add(id);
		});
		containerExcludes(container).forEach(function (id) {
			excludes.add(id);
		});
		if (excludes.size > 0) {
			params.set("exclude_advertiser_ids", Array.from(excludes).join(","));
		}
		var res = await fetch(baseURL + "/api/v1/ad/request?" + params.toString(), {
			mode: "cors",
			credentials: "omit",
		});
		if (staleLoad(container, loadID)) return null;
		if (res.status === 204) return null;
		if (!res.ok) return null;
		return await res.json();
	}

	async function load(container, loadID) {
		if (staleLoad(container, loadID)) return;
		var slotID =
			container.dataset.slotId || container.getAttribute("data-slot-id");
		if (!slotID) return;

		var fp = await fingerprint();
		if (staleLoad(container, loadID)) return;
		if (likelyAutomation()) {
			reportRisk("automation", fp);
			container.innerHTML = "";
			return;
		}

		var forcedPlatform = container.dataset.platform;
		var plat = forcedPlatform || platform();
		var sizes = parseAdSizes(container, plat);
		var containerWidth = container.clientWidth || 0;
		var candidates = filterSizes(sizes, containerWidth);

		var firstFillAd = null;

		for (var i = 0; i < candidates.length; i++) {
			var size = candidates[i];
			var ad = await requestAd(
				container,
				loadID,
				size.w,
				size.h,
				forcedPlatform,
				fp,
			);
			if (ad) {
				if (ad.is_fill_ad) {
					if (!firstFillAd) firstFillAd = ad;
					if (staleLoad(container, loadID)) return;
					continue;
				}
				if (staleLoad(container, loadID)) return;
				render(container, ad, fp);
				return;
			}
			if (staleLoad(container, loadID)) return;
		}

		if (firstFillAd) {
			render(container, firstFillAd, fp);
			return;
		}
		container.innerHTML = "";
	}

	function enqueueLoad(container, loadID) {
		// 广告请求仍然串行执行。第一个广告位展示后，第二个广告位请求时就能带上
		// exclude_advertiser_ids，避免同页面并发请求拿到同一广告主。
		window.__ztjAdsQueue = window.__ztjAdsQueue
			.then(function () {
				return load(container, loadID);
			})
			.catch(function () {});
	}

	function disconnectLoadObserver(container) {
		const observer = loadObservers.get(container);
		if (!observer) return;
		observer.disconnect();
		loadObservers.delete(container);
	}

	function scheduleLoad(container) {
		disconnectLoadObserver(container);
		const loadID = String(Number(container.dataset.ztjLoadId || 0) + 1);
		container.dataset.ztjLoadId = loadID;
		if (!("IntersectionObserver" in window)) {
			enqueueLoad(container, loadID);
			return;
		}
		const observer = new IntersectionObserver(
			function (entries) {
				const entry = entries[0];
				if (!entry || !entry.isIntersecting) return;
				observer.disconnect();
				if (loadObservers.get(container) === observer) {
					loadObservers.delete(container);
				}
				if (
					container.dataset.ztjLoadId !== loadID ||
					container.dataset.ztjLoaded !== "1"
				)
					return;
				enqueueLoad(container, loadID);
			},
			{ root: null, rootMargin: "200px 0px", threshold: 0.01 },
		);
		loadObservers.set(container, observer);
		observer.observe(container);
	}

	function resetPageStateIfNeeded() {
		if (window.location.href === currentPageURL) return;
		currentPageURL = window.location.href;
		seenAdvertisers.clear();
		document.querySelectorAll("[data-ztj-ad]").forEach(function (container) {
			disconnectLoadObserver(container);
			container.dataset.ztjLoadId = String(
				Number(container.dataset.ztjLoadId || 0) + 1,
			);
			delete container.dataset.ztjLoaded;
			container.innerHTML = "";
		});
	}

	function boot() {
		resetPageStateIfNeeded();
		const nodes = document.querySelectorAll("[data-ztj-ad]");
		nodes.forEach(function (container) {
			if (container.dataset.ztjLoaded === "1") return;
			container.dataset.ztjLoaded = "1";
			scheduleLoad(container);
		});
	}

	function scheduleBoot() {
		window.clearTimeout(bootTimer);
		bootTimer = window.setTimeout(boot, 30);
	}

	function observe() {
		if (!window.MutationObserver || !document.documentElement) return;
		const observer = new MutationObserver(function () {
			scheduleBoot();
		});
		observer.observe(document.documentElement, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: [
				"data-ztj-ad",
				"data-slot-id",
				"data-size",
				"data-width",
				"data-height",
				"data-platform",
			],
		});
	}

	// 给 React/Vue 等复杂渲染场景留一个主动刷新入口；通常不需要调用，
	// MutationObserver 已经可以覆盖动态插入广告位的情况。
	window.ZTJ_ADS_REFRESH = scheduleBoot;

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", function () {
			boot();
			observe();
		});
	} else {
		boot();
		observe();
	}
})();
