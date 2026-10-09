import { p as y } from "./index.a309bbc7.js";
import { g as j } from "./auth.ed1b67ca.js";
const { useToast: h } = y;
function N(e) {
	let a = document.createElement("a");
	(a.href = e), a.click();
}
function v(e) {
	if (window.screen.width < 768) {
		alert(e);
		return;
	}
	const a = h();
	let t = {
		position: "bottom-center",
		timeout: 4e3,
		closeOnClick: !0,
		pauseOnFocusLoss: !0,
		pauseOnHover: !0,
		draggable: !0,
		draggablePercent: 0.6,
		showCloseButtonOnHover: !0,
		hideProgressBar: !0,
		closeButton: "button",
		icon: !0,
		rtl: !1,
	};
	return a.error(e, t);
}
function G(e) {
	if (typeof e == "string" && window.screen.width < 768) {
		alert(e);
		return;
	}
	const a = h();
	let t = {
		position: "top-center",
		timeout: 1e4,
		closeOnClick: !1,
		pauseOnFocusLoss: !0,
		pauseOnHover: !0,
		draggable: !1,
		draggablePercent: 0.6,
		showCloseButtonOnHover: !0,
		hideProgressBar: !1,
		closeButton: "button",
		icon: !0,
		rtl: !1,
	};
	return a.error(e, t);
}
function F(e) {
	const a = h();
	let t = {
		position: "bottom-center",
		timeout: 1968,
		closeOnClick: !0,
		pauseOnFocusLoss: !0,
		pauseOnHover: !0,
		draggable: !0,
		draggablePercent: 0.6,
		showCloseButtonOnHover: !0,
		hideProgressBar: !0,
		closeButton: "button",
		icon: !0,
		rtl: !1,
	};
	return a.success(e, t);
}
function k(e) {
	var a;
	e.split(",")[0].indexOf("base64") >= 0
		? (a = atob(e.split(",")[1]))
		: (a = unescape(e.split(",")[1]));
	for (
		var t = e.split(",")[0].split(":")[1].split(";")[0],
			r = new Uint8Array(a.length),
			s = 0;
		s < a.length;
		s++
	)
		r[s] = a.charCodeAt(s);
	return new Blob([r], { type: t });
}
function T() {
	return typeof window > "u";
}
function S() {
	return typeof window < "u";
}
function J(e, a) {
	let t;
	return function (...r) {
		clearTimeout(t), (t = setTimeout(() => e.apply(this, r), a));
	};
}
const i = "https://www.zitijia.com",
	g = "https://www.zitijia.com",
	m = "https://ai.zitijia.com/split_api";
let l = null;
const _ = new Set(["completed", "failed", "expired", "unavailable"]);
function n(e, a) {
	return fetch(e, a).then((t) => t.json());
}
function o(e, a = {}) {
	const t = j();
	if (t) return e(t);
	if (S()) {
		if (
			window.location.pathname === "/console" ||
			window.location.pathname.startsWith("/console/")
		)
			return new Promise(() => {});
		if (l != null) return e(l);
	}
	const r = T() ? globalThis.__ASTRO_AUTH__?.() : null;
	return r?.visitorAiid
		? e(r.visitorAiid)
		: w(a)
				.then((s) => (r ? (r.visitorAiid = s.data) : (l = s.data), e(s.data)))
				.catch((s) => {
					if (s?.name === "AbortError") throw s;
					console.error(s);
				});
}
function U(e, a, t = "", r = 0, s = {}) {
	let c = { Word: a, Version: t, Seed: r };
	return o((p) =>
		n(i + "/ai/model/" + e, {
			headers: {
				accept: "application/json",
				aiid: p,
				"content-type": "application/json",
			},
			method: "PUT",
			body: JSON.stringify(c),
			signal: s.signal,
		}),
	);
}
function L(e) {
	let a = { ImgUrl: e };
	return o((t) =>
		n(i + "/ai/model_from_split", {
			headers: {
				accept: "application/json",
				aiid: t,
				"content-type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(a),
		}),
	);
}
function A(e, a = "", t = {}) {
	let r = new FormData();
	return (
		r.append("file", e),
		r.append("source", a),
		o((s) =>
			n(i + "/ai/paper_design/upload", {
				headers: { accept: "application/json", aiid: s },
				method: "POST",
				body: r,
			}),
		)
	);
}
function D(e, a = "") {
	let t = new FormData();
	for (let d = 1; d <= e.length; d++) {
		var r = e[d - 1],
			s = atob(r.split(",")[1]),
			c = new Uint8Array(s.length);
		for (let u = 0; u < s.length; u++) c[u] = s.charCodeAt(u);
		var p = new Blob([c], { type: "image/png" });
		t.append("file" + d, p, d + ".png");
	}
	return (
		t.append("words", a),
		o((d) =>
			n(i + "/ai/model", {
				headers: { accept: "application/json", aiid: d },
				method: "POST",
				body: t,
			}),
		)
	);
}
function I(e) {
	return o((a) =>
		n(i + "/ai/model/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function f(e, a = {}) {
	return o(
		(t) =>
			n(i + "/ai/model/" + encodeURIComponent(e) + "/demo/status", {
				headers: { accept: "application/json", aiid: t },
				method: "GET",
				...a,
			}),
		a,
	);
}
function b(e) {
	return e?.status || e?.data?.status || "";
}
function O(e) {
	return new Promise((a) => setTimeout(a, e));
}
async function P(e, a) {
	if (typeof AbortController > "u") {
		let s;
		try {
			return await Promise.race([
				f(e),
				new Promise((c, p) => {
					s = setTimeout(() => p(new Error("demo status timeout")), a);
				}),
			]);
		} finally {
			clearTimeout(s);
		}
	}
	const t = new AbortController(),
		r = setTimeout(() => t.abort(), Math.max(1, a));
	try {
		return await f(e, { signal: t.signal });
	} finally {
		clearTimeout(r);
	}
}
async function z(e, { timeoutMs: a = 1e4, pollIntervalMs: t = 1e3 } = {}) {
	const r = Date.now() + Math.max(0, a);
	for (; Date.now() < r; ) {
		const s = r - Date.now();
		let c;
		try {
			c = await P(e, s);
		} catch (u) {
			return u?.name === "AbortError" || Date.now() >= r ? "timeout" : "error";
		}
		if (String(c?.code) !== "0") return "error";
		const p = b(c);
		if (_.has(p)) return p;
		const d = Math.min(Math.max(1, t), r - Date.now());
		if (d <= 0) break;
		await O(d);
	}
	return "timeout";
}
function x(e, a, t) {
	const r = new FormData();
	return (
		r.append("file", t, "style.png"),
		r.append("img_path", a),
		o((s) =>
			n(i + "/ai/user/model/update_img/" + e, {
				headers: { accept: "application/json", aiid: s },
				method: "POST",
				body: r,
			}),
		)
	);
}
function B() {
	return o((e) =>
		n(i + "/ai/quta", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function w(e = {}) {
	return n(i + "/ai/token", {
		headers: { accept: "application/json" },
		method: "GET",
		...e,
	});
}
function M(e, a, t, r, s = "model", c = "1:1") {
	let p = new FormData();
	return (
		p.append("file", e, "input.png"),
		p.append("prompt", a),
		p.append("style", t),
		p.append("modelID", r),
		p.append("origin", s),
		p.append("size", c),
		o((d) =>
			n(i + "/ai/advance/task", {
				headers: { accept: "application/json", aiid: d },
				method: "POST",
				body: p,
			}),
		)
	);
}
function R(e) {
	return o((a) =>
		n(i + "/ai/advance/task/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function H() {
	return n(i + "/ai/advance/prompt", {
		headers: { accept: "application/json" },
		method: "GET",
	});
}
function V(e, a) {
	return o((t) =>
		n(i + "/ai/advance/history?page=" + e + "&pageSize=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function q() {
	return n(i + "/ai/public_model_tags_for_text_generator", {
		headers: { accept: "application/json" },
		method: "GET",
	});
}
function W(e) {
	return n(
		i + "/ai/public_model_tag_rand_model_for_text_generator?tagID=" + e,
		{ headers: { accept: "application/json" }, method: "GET" },
	);
}
function K(e) {
	return o((a) =>
		n(i + "/ai/text_generator/history", {
			headers: {
				accept: "application/json",
				aiid: a,
				"content-type": "application/json",
			},
			method: "POST",
			keepalive: !0,
			body: JSON.stringify({ input_text: e }),
		}),
	);
}
function Q(e = null, a = 100) {
	let t = new FormData();
	return (
		t.append("image", e, "input.png"),
		t.append("threshNum", a),
		t.append("dilateNumW", "20"),
		t.append("dilateNumH", "20"),
		fetch(m + "/thresh_img", {
			headers: { accept: "image/jpeg" },
			method: "POST",
			body: t,
		})
	);
}
function Y(e = null, a = 100) {
	let t = new FormData();
	return (
		t.append("image", e, "input.png"),
		t.append("threshNum", a),
		t.append("dilateNumW", "20"),
		t.append("dilateNumH", "20"),
		fetch(m + "/box_img", {
			headers: { accept: "image/jpeg" },
			method: "POST",
			body: t,
		})
	);
}
function $(e = null, a = 100, t = "true") {
	let r = new FormData();
	return (
		r.append("image", e, "input.png"),
		r.append("threshNum", a),
		r.append("outputBlur", t),
		r.append("dilateNumW", "20"),
		r.append("dilateNumH", "20"),
		n(m + "/split_img", {
			headers: { accept: "application/json" },
			method: "POST",
			body: r,
		})
	);
}
function Z() {
	return n(g + "/wxLoginInit", {
		headers: { accept: "application/json", "content-type": "application/json" },
		method: "POST",
		body: "",
	});
}
function X(e, a = "zh-CN") {
	return n(i + "/ai/email_login_code_send", {
		headers: { accept: "application/json", "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ email: e, locale: a }),
	});
}
function ee(e, a) {
	return n(i + "/ai/email_login_code_verify", {
		headers: { accept: "application/json", "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ email: e, code: a }),
	});
}
function ae(e) {
	return n(i + "/ai/phone_login_code_send", {
		headers: { accept: "application/json", "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ Phone: e }),
	});
}
function te(e, a) {
	return n(i + "/ai/phone_login_code_verify", {
		headers: { accept: "application/json", "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ Phone: e, Code: a }),
	});
}
function ne(e) {
	return n(g + "/wxLoginCheck", {
		credentials: "include",
		headers: { accept: "application/json", "content-type": "application/json" },
		method: "POST",
		body: JSON.stringify({ wxLoginToken: e }),
	});
}
function ie() {
	return o((e) =>
		n(i + "/ai/user/phone_valid", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function oe(e) {
	return o((a) =>
		n(i + "/ai/user/phone_valid/send", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "POST",
			body: JSON.stringify({ Phone: e }),
		}),
	);
}
function re(e, a, t = 0) {
	return o((r) =>
		n(i + "/ai/user/phone_valid/verify", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: r,
			},
			method: "POST",
			body: JSON.stringify({ Phone: e, Code: a, CpsUid: t }),
		}),
	);
}
function se(e) {
	return o((a) =>
		n(i + "/ai/user/phone/change_send", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "POST",
			body: JSON.stringify({ Phone: e }),
		}),
	);
}
function ce(e, a) {
	return o((t) =>
		n(i + "/ai/user/phone/change_verify", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: t,
			},
			method: "POST",
			body: JSON.stringify({ Phone: e, Code: a }),
		}),
	);
}
function pe() {
	return o((e) =>
		n(i + "/ai/user/balance", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function de() {
	return o((e) =>
		n(i + "/ai/user/info", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function ue(e, a, t = "", r = "CNY") {
	return o((s) =>
		n(i + "/ai/user/balance/charge_order", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: s,
			},
			method: "POST",
			body: JSON.stringify({ type: e, coins: a, context: t, currency: r }),
		}),
	);
}
function le(e = "CNY") {
	return o((a) =>
		n(
			i +
				"/ai/user/balance/charge_promotions?currency=" +
				encodeURIComponent(e),
			{ headers: { accept: "application/json", aiid: a }, method: "GET" },
		),
	);
}
function he(e = 1, a = 10, t = "") {
	return o((r) =>
		n(
			i +
				"/ai/user/balance/charge_order?page=" +
				e +
				"&pageSize=" +
				a +
				(t ? "&status=" + encodeURIComponent(t) : ""),
			{ headers: { accept: "application/json", aiid: r }, method: "GET" },
		),
	);
}
function me(e, a) {
	return o((t) =>
		n(i + "/ai/user/models?page=" + e + "&pageSize=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function fe(e) {
	return o((a) =>
		n(i + "/ai/user/balance/check_order/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function ge(e) {
	return o((a) =>
		n(i + "/ai/user/model/transfer", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "POST",
			body: JSON.stringify({ model_ids: e }),
		}),
	);
}
function ye(e) {
	return o((a) =>
		n(i + "/ai/user/font", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "POST",
			body: JSON.stringify(e),
		}),
	);
}
function je(e) {
	return o((a) =>
		n(i + "/ai/font/check_name?name=" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function Te(e, a) {
	return o((t) =>
		n(i + "/ai/user/font?page=" + e + "&pageSize=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function Se(e) {
	return o((a) =>
		n(i + "/ai/user/font/progress/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function _e(e) {
	return o((a) =>
		n(i + "/ai/user/font/done/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "PUT",
		}),
	);
}
function be(e) {
	return o((a) =>
		n(i + "/ai/user/font/download/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function Oe(e, a) {
	return o((t) =>
		n(i + "/ai/user/font/sendDownloadEmail/" + e, {
			headers: { accept: "application/json", aiid: t },
			method: "POST",
			body: JSON.stringify({ to: a }),
		}),
	);
}
function Pe(e) {
	return o((a) =>
		n(i + "/ai/user/font/revert_to_edit/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "PUT",
		}),
	);
}
function we(e) {
	return o((a) =>
		n(i + "/ai/user/font/read_basic/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function Ce(e, a) {
	return o((t) =>
		n(i + "/ai/user/font/update_basic/" + e, {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: t,
			},
			method: "PUT",
			body: JSON.stringify(a),
		}),
	);
}
function Ee(e) {
	return o((a) =>
		n(i + "/ai/user/font/read_words/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function Ne(e, a) {
	return o((t) =>
		n(i + "/ai/user/font/read_word/" + e + "?jsonFile=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function ve(e, a) {
	return o((t) =>
		n(i + "/ai/user/font/update_json/" + e, {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: t,
			},
			method: "PUT",
			body: JSON.stringify(a),
		}),
	);
}
function Ge(e = "CNY", a = "", t = "", r = "false") {
	return o((s) =>
		n(
			i +
				"/ai/price?modelID=" +
				a +
				"&couponCode=" +
				t +
				"&addPublicModelSellPrice=" +
				r +
				"&currency=" +
				e,
			{ headers: { accept: "application/json", aiid: s }, method: "GET" },
		),
	);
}
function Fe() {
	return o((e) =>
		n(i + "/ai/cps/join", {
			headers: {
				"content-type": "application/json",
				accept: "application/json",
				aiid: e,
			},
			method: "POST",
			body: JSON.stringify({}),
		}),
	);
}
function ke(e, a, t) {
	return o((r) =>
		n(i + "/ai/user/coupons?page=" + e + "&pageSize=" + a + "&expire=" + t, {
			headers: { accept: "application/json", aiid: r },
			method: "GET",
		}),
	);
}
function Je(e) {
	return o((a) =>
		n(i + "/ai/user/coupon", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "POST",
			body: JSON.stringify(e),
		}),
	);
}
function Ue(e) {
	return o((a) =>
		n(i + "/ai/user/coupon_check?code=" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function Le(e, a) {
	return o((t) =>
		n(i + "/ai/user/coupons/" + e, {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: t,
			},
			method: "PUT",
			body: JSON.stringify(a),
		}),
	);
}
function Ae(e = 1, a = 20) {
	return o((t) =>
		n(i + `/ai/user/notification?page=${e}&pageSize=${a}`, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function De(e) {
	return o((a) =>
		n(i + `/ai/user/notification/set_read/${e}`, {
			headers: { accept: "application/json", aiid: a },
			method: "PUT",
		}),
	);
}
function Ie() {
	return o((e) =>
		n(i + "/ai/user/notification/unread_count", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function ze() {
	return o((e) =>
		n(i + "/ai/user/notification/set_all_read", {
			headers: { accept: "application/json", aiid: e },
			method: "PUT",
		}),
	);
}
function xe(e, a) {
	return o((t) =>
		n(i + "/ai/user/coupons_active/" + e, {
			headers: {
				accept: "application/json",
				aiid: t,
				"content-type": "application/json",
			},
			body: JSON.stringify({ IsActive: a }),
			method: "PUT",
		}),
	);
}
function Be(e, a) {
	return o((t) =>
		n(i + "/ai/cps/orders?page=" + e + "&pageSize=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function Me(e, a) {
	return o((t) =>
		n(i + "/ai/cps/withdrawals?page=" + e + "&pagesize=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function Re(e) {
	return o((a) =>
		n(i + "/ai/user/coupon_expire/" + e, {
			headers: {
				accept: "application/json",
				aiid: a,
				"content-type": "application/json",
			},
			method: "PUT",
		}),
	);
}
function He(e = "", a = "false") {
	return o((t) =>
		n(
			i +
				"/ai/user/account_coupons?modelID=" +
				encodeURIComponent(e) +
				"&addPublicModelSellPrice=" +
				a,
			{ headers: { accept: "application/json", aiid: t }, method: "GET" },
		),
	);
}
function Ve() {
	return o((e) =>
		n(i + "/ai/user/multiple_font_packages", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function qe(e, a) {
	return o((t) =>
		n(i + "/ai/user/account_coupons/list?page=" + e + "&pageSize=" + a, {
			headers: { accept: "application/json", aiid: t },
			method: "GET",
		}),
	);
}
function We(e, a, t) {
	return o((r) =>
		n(i + "/ai/user/coupon_claim_sign", {
			headers: {
				accept: "application/json",
				aiid: r,
				"content-type": "application/json",
			},
			body: JSON.stringify({ code: e, expire_date: a, quantity: t }),
			method: "POST",
		}),
	);
}
function Ke(e) {
	return o((a) =>
		n(i + "/ai/user/account_coupons/claim", {
			headers: {
				accept: "application/json",
				aiid: a,
				"content-type": "application/json",
			},
			body: JSON.stringify({ sign: e }),
			method: "POST",
		}),
	);
}
function Qe(e) {
	return o((a) =>
		n(i + "/ai/user/account_coupons/claim_detail", {
			headers: {
				accept: "application/json",
				aiid: a,
				"content-type": "application/json",
			},
			body: JSON.stringify({ sign: e }),
			method: "POST",
		}),
	);
}
function Ye(e) {
	return n(i + "/ai/account_coupons/claim_detail", {
		headers: { accept: "application/json", "content-type": "application/json" },
		body: JSON.stringify({ sign: e }),
		method: "POST",
	});
}
function $e() {
	return o((e) =>
		n(i + "/ai/cps/dashboard", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function Ze(e) {
	return o((a) =>
		n(i + "/ai/user/publish_model", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "POST",
			body: JSON.stringify(e),
		}),
	);
}
function Xe() {
	return o((e) =>
		n(i + "/ai/user/nav", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: e,
			},
			method: "GET",
		}),
	);
}
function ea() {
	return o((e) =>
		n(i + "/ai/user/creator/stats", {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: e,
			},
			method: "GET",
		}),
	);
}
function aa(e) {
	return o((a) =>
		n(i + "/ai/user/creator/list?page=" + e, {
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				aiid: a,
			},
			method: "GET",
		}),
	);
}
function ta(e) {
	return o((a) =>
		n(i + "/ai/user/model/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "DELETE",
		}),
	);
}
async function na(e, a = 1, t = 0) {
	return o((r) =>
		n(i + "/ai/user/model_history?id=" + e + "&page=" + a + "&day=" + t, {
			headers: { accept: "application/json", aiid: r },
			method: "GET",
		}),
	);
}
async function ia(e, a) {
	return o((t) =>
		n(i + "/ai/model_version_update/" + e, {
			headers: {
				accept: "application/json",
				aiid: t,
				"content-type": "application/json",
			},
			method: "PUT",
			body: JSON.stringify({ version: a }),
		}),
	);
}
async function oa(e) {
	return o(async (a) => {
		const t = await fetch(i + "/ai/user/download/zip_compress", {
			headers: { aiid: a, "content-type": "application/json" },
			method: "POST",
			body: JSON.stringify({ records: e }),
		});
		if (!t.ok) throw new Error(t.status);
		const r = await t.blob();
		return window.URL.createObjectURL(r);
	});
}
function ra(e) {
	return o((a) =>
		n(i + "/ai/user/models/by_copy_from/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "GET",
		}),
	);
}
function sa(e, a) {
	return o((t) =>
		n(i + "/ai/user/model/update_alias/" + e, {
			headers: {
				accept: "application/json",
				aiid: t,
				"content-type": "application/json",
			},
			method: "PUT",
			body: JSON.stringify({ alias: a }),
		}),
	);
}
function ca() {
	return o((e) =>
		n(i + "/ai/ai_sell_models_recommend", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function pa(e, a, t, r) {
	return o((s) =>
		fetch(i + "/ai/dui_liang", {
			headers: {
				accept: "image/png",
				aiid: s,
				"content-type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({
				heng_pi: e,
				shang_lian: a,
				xia_lian: t,
				font_id: r,
			}),
		}).then((c) => c.blob()),
	);
}
function da() {
	return n(i + "/ai/dui_liang/topic", {
		headers: { accept: "application/json" },
		method: "GET",
	});
}
function ua() {
	return n(i + "/ai/dui_liang/fonts", {
		headers: { accept: "application/json" },
		method: "GET",
	});
}
function la() {
	return o((e) =>
		n(i + "/ai/dui_liang/get_limit", {
			headers: { accept: "application/json", aiid: e },
			method: "GET",
		}),
	);
}
function ha(e, a = "") {
	return o((t) =>
		fetch("/api/generate_couplet", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				aiid: t,
				accept: "application/json",
			},
			body: JSON.stringify({ topic: e, name: a }),
		}),
	);
}
async function ma(e = "") {
	return o((a) =>
		fetch("/api/qm_avatar_generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				aiid: a,
				accept: "application/json",
			},
			body: JSON.stringify({ name: e }),
		}),
	);
}
function fa(e) {
	return o((a) =>
		n(i + "/ai/playground/quote", {
			headers: { accept: "application/json", aiid: a, appid: e },
			method: "GET",
		}),
	);
}
function ga(e, a = {}) {
	return o((t) => {
		const r = new FormData();
		r.append("file", e),
			r.append("normalize", a.normalize || ""),
			r.append("max_size", a.maxSize || "1024");
		const s = { method: "POST", headers: { aiid: t }, body: r };
		return (
			a.signal && (s.signal = a.signal),
			fetch("/api/doc-process", s).then((c) => {
				if (!c.ok) throw new Error("处理失败");
				return c.blob();
			})
		);
	});
}
function ya(e, a = {}) {
	return o((t) => {
		const r = new FormData();
		r.append("file", e),
			r.append("normalize", a.normalize || ""),
			r.append("max_size", a.maxSize || "512");
		const s = { method: "POST", headers: { aiid: t }, body: r };
		return (
			a.signal && (s.signal = a.signal),
			fetch("/api/cam_generate_process", s).then((c) => {
				if (!c.ok) throw new Error("处理失败");
				return c.blob();
			})
		);
	});
}
function ja() {
	return o((e) =>
		n(i + "/ai/user/lottery", {
			headers: {
				accept: "application/json",
				aiid: e,
				"content-type": "application/json",
			},
			method: "GET",
		}),
	);
}
function Ta() {
	return o((e) =>
		n(i + "/ai/user/lottery/check", {
			headers: { accept: "application/json", aiid: e },
		}),
	);
}
function Sa() {
	return o((e) =>
		n(i + "/ai/user/lottery/list", {
			headers: { accept: "application/json", aiid: e },
		}),
	);
}
const _a = (e) =>
	o((a) =>
		n(i + "/ai/user/update-name", {
			headers: { accept: "application/json", aiid: a },
			method: "POST",
			body: JSON.stringify({ name: e }),
		}),
	);
function ba(e) {
	return o((a) =>
		n(i + "/ai/user/font/submit_status/" + e, {
			headers: { accept: "application/json", aiid: a },
		}),
	);
}
function Oa(e) {
	const a = new FormData();
	return (
		a.append("fontId", e.fontId),
		a.append("fontName", e.fontName),
		a.append("price", e.price),
		a.append("license", e.license),
		a.append("description", e.description),
		e.copyrightFile && a.append("copyrightFile", e.copyrightFile),
		e.licensePrice && a.append("licensePrice", e.licensePrice),
		o((t) =>
			n(i + "/ai/user/font/submit", {
				headers: { accept: "application/json", aiid: t },
				method: "POST",
				body: a,
			}),
		)
	);
}
function Pa() {
	return o((e) =>
		n(i + "/ai/user/api/console", {
			headers: { accept: "application/json", aiid: e },
		}),
	);
}
function wa() {
	return o((e) =>
		n(i + "/ai/user/api/key/list", {
			headers: { accept: "application/json", aiid: e },
		}),
	);
}
function Ca() {
	return o((e) =>
		n(i + "/ai/user/api/key/new", {
			headers: { accept: "application/json", aiid: e },
			method: "POST",
		}),
	);
}
function Ea(e) {
	return o((a) =>
		n(i + "/ai/user/api/key/" + e, {
			headers: { accept: "application/json", aiid: a },
			method: "DELETE",
		}),
	);
}
function Na(e = 1, a = 30) {
	return o((t) =>
		n(i + "/ai/user/api/bill?page=" + e + "&pageSize=" + a, {
			headers: { accept: "application/json", aiid: t },
		}),
	);
}
async function va(e, a) {
	return fetch("/api/qm_avatar_img", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name: e, first_name: a }),
	});
}
export {
	sa as $,
	Ve as A,
	Ae as B,
	Ie as C,
	De as D,
	ze as E,
	qe as F,
	de as G,
	Fe as H,
	U as I,
	Me as J,
	pe as K,
	ke as L,
	xe as M,
	Je as N,
	Le as O,
	Re as P,
	Ue as Q,
	We as R,
	ye as S,
	Be as T,
	Ce as U,
	je as V,
	ea as W,
	aa as X,
	me as Y,
	He as Z,
	ta as _,
	ma as a,
	$e as a0,
	I as a1,
	Se as a2,
	_e as a3,
	be as a4,
	Oe as a5,
	Pe as a6,
	Te as a7,
	Ee as a8,
	Ne as a9,
	ja as aA,
	Ta as aB,
	Ge as aC,
	se as aD,
	ce as aE,
	_a as aF,
	A as aG,
	L as aH,
	Q as aI,
	Y as aJ,
	$ as aK,
	ya as aL,
	q as aM,
	W as aN,
	K as aO,
	Ze as aP,
	H as aQ,
	V as aR,
	ra as aS,
	oa as aT,
	ve as aa,
	oe as ab,
	re as ac,
	ie as ad,
	ge as ae,
	X as af,
	ee as ag,
	Z as ah,
	ne as ai,
	ae as aj,
	te as ak,
	fa as al,
	ga as am,
	na as an,
	J as ao,
	ia as ap,
	x as aq,
	Na as ar,
	wa as as,
	Ea as at,
	Ca as au,
	Pa as av,
	N as aw,
	D as ax,
	z as ay,
	Sa as az,
	R as b,
	M as c,
	k as d,
	le as e,
	he as f,
	va as g,
	F as h,
	ue as i,
	fe as j,
	da as k,
	ua as l,
	la as m,
	pa as n,
	ha as o,
	G as p,
	B as q,
	Ke as r,
	v as s,
	Qe as t,
	Ye as u,
	we as v,
	ba as w,
	Oa as x,
	ca as y,
	Xe as z,
};
