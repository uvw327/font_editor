const n = "aiid",
	r = "uid";
function l(e, t) {
	if (!e || !t) return "";
	const o = `${t}=`,
		i = e
			.split(";")
			.map((c) => c.trim())
			.find((c) => c.startsWith(o));
	if (!i) return "";
	try {
		return decodeURIComponent(i.slice(o.length));
	} catch {
		return i.slice(o.length);
	}
}
function a() {
	return typeof window < "u" ? null : globalThis.__ASTRO_AUTH__?.() || null;
}
function u(e) {
	return typeof document > "u" ? "" : l(document.cookie, e);
}
function d(e, t) {
	if (typeof document > "u") return !1;
	const o = window.location.protocol === "https:" ? "; Secure" : "";
	return (
		(document.cookie = `${e}=${encodeURIComponent(t)}; Path=/; Max-Age=31536000; SameSite=Lax${o}`),
		u(e) === String(t)
	);
}
function f(e) {
	if (typeof document > "u") return;
	const t = window.location.protocol === "https:" ? "; Secure" : "";
	document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax${t}`;
}
function s(e, t) {
	if (typeof window > "u") return "";
	let o = "";
	try {
		o = window.localStorage.getItem(e) || "";
	} catch {
		return "";
	}
	return o ? (d(t, o) && window.localStorage.removeItem(e), o) : "";
}
function w() {
	const e = a();
	if (e) return e.aiid || "";
	const t = u(n);
	if (t) {
		try {
			window.localStorage.removeItem("token");
		} catch {}
		return t;
	}
	return s("token", n);
}
function m(e) {
	if (!(!e || typeof window > "u") && d(n, e))
		try {
			window.localStorage.removeItem("token");
		} catch {}
}
function g() {
	if ((f(n), typeof window < "u"))
		try {
			window.localStorage.removeItem("token");
		} catch {}
}
function h() {
	const e = a();
	if (e) return e.uid || "";
	const t = u(r);
	if (t) {
		try {
			window.localStorage.removeItem("uid");
		} catch {}
		return t;
	}
	return s("uid", r);
}
function p(e) {
	if (!(!e || typeof window > "u") && d(r, String(e)))
		try {
			window.localStorage.removeItem("uid");
		} catch {}
}
function y() {
	if ((f(r), typeof window < "u"))
		try {
			window.localStorage.removeItem("uid");
		} catch {}
}
export { h as a, y as b, g as c, p as d, w as g, m as s };
