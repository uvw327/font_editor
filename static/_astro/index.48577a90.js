import { A as r, a as i } from "./index.e05af36c.js";
const _ = "locale",
	h = {
		"zh-cn": "zh-CN",
		"zh-hans": "zh-CN",
		"zh-sg": "zh-CN",
		zh: "zh-CN",
		"zh-tw": "zh-TW",
		"zh-hant": "zh-TW",
		"zh-hk": "zh-TW",
		"zh-mo": "zh-TW",
	},
	l = (e) => {
		if (!e) return null;
		const n = e.trim().replace(/_/g, "-").toLowerCase(),
			o = h[n];
		return o || (i.find((c) => c.toLowerCase() === n) ?? null);
	},
	a = () => {
		const e =
			typeof globalThis < "u" &&
			typeof globalThis.__ASTRO_LOCALE__ == "function"
				? globalThis.__ASTRO_LOCALE__?.()
				: null;
		if (e) return e;
		if (typeof document > "u") return r;
		const t = window.__LOCALE__;
		return l(t) || l(document.documentElement?.getAttribute("lang")) || r;
	};
export { _ as L, a as g };
