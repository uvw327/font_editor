import {
	k as Et,
	v as ln,
	L as Te,
	a7 as wn,
	q as Un,
	a9 as Wn,
	ab as Ie,
	a8 as at,
	F as cn,
	ah as $n,
	r as Vn,
	ag as xn,
	ai as Hn,
	l as Yn,
	aj as Gn,
} from "./_plugin-vue_export-helper.0519c48a.js"; /*!
 * shared v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function jn(e, t) {
	typeof console < "u" &&
		(console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ue = typeof window < "u",
	ce = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
	Kn = (e, t, n) => Xn({ l: e, k: t, s: n }),
	Xn = (e) =>
		JSON.stringify(e)
			.replace(/\u2028/g, "\\u2028")
			.replace(/\u2029/g, "\\u2029")
			.replace(/\u0027/g, "\\u0027"),
	j = (e) => typeof e == "number" && isFinite(e),
	Bn = (e) => gt(e) === "[object Date]",
	Le = (e) => gt(e) === "[object RegExp]",
	We = (e) => F(e) && Object.keys(e).length === 0,
	K = Object.assign,
	Jn = Object.create,
	w = (e = null) => Jn(e);
let yt;
const fe = () =>
	yt ||
	(yt =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
				? self
				: typeof window < "u"
					? window
					: typeof global < "u"
						? global
						: w());
function Pt(e) {
	return e
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;")
		.replace(/\//g, "&#x2F;")
		.replace(/=/g, "&#x3D;");
}
function St(e) {
	return e
		.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}
function qn(e) {
	return (
		(e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, a, s) => `${a}="${St(s)}"`)),
		(e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, a, s) => `${a}='${St(s)}'`)),
		/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) &&
			(e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")),
		[
			/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
			/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi,
		].forEach((r) => {
			e = e.replace(r, "$1javascript&#58;");
		}),
		e
	);
}
const Qn = Object.prototype.hasOwnProperty;
function z(e, t) {
	return Qn.call(e, t);
}
const H = Array.isArray,
	$ = (e) => typeof e == "function",
	O = (e) => typeof e == "string",
	D = (e) => typeof e == "boolean",
	v = (e) => e !== null && typeof e == "object",
	Zn = (e) => v(e) && $(e.then) && $(e.catch),
	on = Object.prototype.toString,
	gt = (e) => on.call(e),
	F = (e) => gt(e) === "[object Object]",
	zn = (e) =>
		e == null
			? ""
			: H(e) || (F(e) && e.toString === on)
				? JSON.stringify(e, null, 2)
				: String(e);
function Lt(e, t = "") {
	return e.reduce((n, r, a) => (a === 0 ? n + r : n + t + r), "");
}
const De = (e) => !v(e) || H(e);
function we(e, t) {
	if (De(e) || De(t)) throw new Error("Invalid value");
	const n = [{ src: e, des: t }];
	for (; n.length; ) {
		const { src: r, des: a } = n.pop();
		Object.keys(r).forEach((s) => {
			s !== "__proto__" &&
				(v(r[s]) && !v(a[s]) && (a[s] = Array.isArray(r[s]) ? [] : w()),
				De(a[s]) || De(r[s])
					? (a[s] = r[s])
					: n.push({ src: r[s], des: a[s] }));
		});
	}
} /*!
 * message-compiler v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function er(e, t, n) {
	return { line: e, column: t, offset: n };
}
function st(e, t, n) {
	const r = { start: e, end: t };
	return n != null && (r.source = n), r;
}
const M = {
		EXPECTED_TOKEN: 1,
		INVALID_TOKEN_IN_PLACEHOLDER: 2,
		UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
		UNKNOWN_ESCAPE_SEQUENCE: 4,
		INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
		UNBALANCED_CLOSING_BRACE: 6,
		UNTERMINATED_CLOSING_BRACE: 7,
		EMPTY_PLACEHOLDER: 8,
		NOT_ALLOW_NEST_PLACEHOLDER: 9,
		INVALID_LINKED_FORMAT: 10,
		MUST_HAVE_MESSAGES_IN_PLURAL: 11,
		UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
		UNEXPECTED_EMPTY_LINKED_KEY: 13,
		UNEXPECTED_LEXICAL_ANALYSIS: 14,
		UNHANDLED_CODEGEN_NODE_TYPE: 15,
		UNHANDLED_MINIFIER_NODE_TYPE: 16,
	},
	tr = 17;
function $e(e, t, n = {}) {
	const { domain: r, messages: a, args: s } = n,
		i = e,
		f = new SyntaxError(String(i));
	return (f.code = e), t && (f.location = t), (f.domain = r), f;
}
function nr(e) {
	throw e;
}
const ee = " ",
	rr = "\r",
	X = `
`,
	ar = String.fromCharCode(8232),
	sr = String.fromCharCode(8233);
function lr(e) {
	const t = e;
	let n = 0,
		r = 1,
		a = 1,
		s = 0;
	const i = (b) => t[b] === rr && t[b + 1] === X,
		f = (b) => t[b] === X,
		u = (b) => t[b] === sr,
		g = (b) => t[b] === ar,
		N = (b) => i(b) || f(b) || u(b) || g(b),
		h = () => n,
		p = () => r,
		P = () => a,
		A = () => s,
		S = (b) => (i(b) || u(b) || g(b) ? X : t[b]),
		y = () => S(n),
		o = () => S(n + s);
	function E() {
		return (s = 0), N(n) && (r++, (a = 0)), i(n) && n++, n++, a++, t[n];
	}
	function I() {
		return i(n + s) && s++, s++, t[n + s];
	}
	function m() {
		(n = 0), (r = 1), (a = 1), (s = 0);
	}
	function T(b = 0) {
		s = b;
	}
	function C() {
		const b = n + s;
		for (; b !== n; ) E();
		s = 0;
	}
	return {
		index: h,
		line: p,
		column: P,
		peekOffset: A,
		charAt: S,
		currentChar: y,
		currentPeek: o,
		next: E,
		peek: I,
		reset: m,
		resetPeek: T,
		skipToPeek: C,
	};
}
const ae = void 0,
	cr = ".",
	At = "'",
	ir = "tokenizer";
function or(e, t = {}) {
	const n = t.location !== !1,
		r = lr(e),
		a = () => r.index(),
		s = () => er(r.line(), r.column(), r.index()),
		i = s(),
		f = a(),
		u = {
			currentType: 13,
			offset: f,
			startLoc: i,
			endLoc: i,
			lastType: 13,
			lastOffset: f,
			lastStartLoc: i,
			lastEndLoc: i,
			braceNest: 0,
			inLinked: !1,
			text: "",
		},
		g = () => u,
		{ onError: N } = t;
	function h(l, c, d, ...k) {
		const V = g();
		if (((c.column += d), (c.offset += d), N)) {
			const R = n ? st(V.startLoc, c) : null,
				_ = $e(l, R, { domain: ir, args: k });
			N(_);
		}
	}
	function p(l, c, d) {
		(l.endLoc = s()), (l.currentType = c);
		const k = { type: c };
		return (
			n && (k.loc = st(l.startLoc, l.endLoc)), d != null && (k.value = d), k
		);
	}
	const P = (l) => p(l, 13);
	function A(l, c) {
		return l.currentChar() === c
			? (l.next(), c)
			: (h(M.EXPECTED_TOKEN, s(), 0, c), "");
	}
	function S(l) {
		let c = "";
		for (; l.currentPeek() === ee || l.currentPeek() === X; )
			(c += l.currentPeek()), l.peek();
		return c;
	}
	function y(l) {
		const c = S(l);
		return l.skipToPeek(), c;
	}
	function o(l) {
		if (l === ae) return !1;
		const c = l.charCodeAt(0);
		return (c >= 97 && c <= 122) || (c >= 65 && c <= 90) || c === 95;
	}
	function E(l) {
		if (l === ae) return !1;
		const c = l.charCodeAt(0);
		return c >= 48 && c <= 57;
	}
	function I(l, c) {
		const { currentType: d } = c;
		if (d !== 2) return !1;
		S(l);
		const k = o(l.currentPeek());
		return l.resetPeek(), k;
	}
	function m(l, c) {
		const { currentType: d } = c;
		if (d !== 2) return !1;
		S(l);
		const k = l.currentPeek() === "-" ? l.peek() : l.currentPeek(),
			V = E(k);
		return l.resetPeek(), V;
	}
	function T(l, c) {
		const { currentType: d } = c;
		if (d !== 2) return !1;
		S(l);
		const k = l.currentPeek() === At;
		return l.resetPeek(), k;
	}
	function C(l, c) {
		const { currentType: d } = c;
		if (d !== 7) return !1;
		S(l);
		const k = l.currentPeek() === ".";
		return l.resetPeek(), k;
	}
	function b(l, c) {
		const { currentType: d } = c;
		if (d !== 8) return !1;
		S(l);
		const k = o(l.currentPeek());
		return l.resetPeek(), k;
	}
	function W(l, c) {
		const { currentType: d } = c;
		if (!(d === 7 || d === 11)) return !1;
		S(l);
		const k = l.currentPeek() === ":";
		return l.resetPeek(), k;
	}
	function x(l, c) {
		const { currentType: d } = c;
		if (d !== 9) return !1;
		const k = () => {
				const R = l.currentPeek();
				return R === "{"
					? o(l.peek())
					: R === "@" || R === "|" || R === ":" || R === "." || R === ee || !R
						? !1
						: R === X
							? (l.peek(), k())
							: Z(l, !1);
			},
			V = k();
		return l.resetPeek(), V;
	}
	function J(l) {
		S(l);
		const c = l.currentPeek() === "|";
		return l.resetPeek(), c;
	}
	function Z(l, c = !0) {
		const d = (V = !1, R = "") => {
				const _ = l.currentPeek();
				return _ === "{" || _ === "@" || !_
					? V
					: _ === "|"
						? !(R === ee || R === X)
						: _ === ee
							? (l.peek(), d(!0, ee))
							: _ === X
								? (l.peek(), d(!0, X))
								: !0;
			},
			k = d();
		return c && l.resetPeek(), k;
	}
	function Y(l, c) {
		const d = l.currentChar();
		return d === ae ? ae : c(d) ? (l.next(), d) : null;
	}
	function _e(l) {
		const c = l.charCodeAt(0);
		return (
			(c >= 97 && c <= 122) ||
			(c >= 65 && c <= 90) ||
			(c >= 48 && c <= 57) ||
			c === 95 ||
			c === 36
		);
	}
	function xe(l) {
		return Y(l, _e);
	}
	function He(l) {
		const c = l.charCodeAt(0);
		return (
			(c >= 97 && c <= 122) ||
			(c >= 65 && c <= 90) ||
			(c >= 48 && c <= 57) ||
			c === 95 ||
			c === 36 ||
			c === 45
		);
	}
	function Ye(l) {
		return Y(l, He);
	}
	function Ge(l) {
		const c = l.charCodeAt(0);
		return c >= 48 && c <= 57;
	}
	function je(l) {
		return Y(l, Ge);
	}
	function re(l) {
		const c = l.charCodeAt(0);
		return (
			(c >= 48 && c <= 57) || (c >= 65 && c <= 70) || (c >= 97 && c <= 102)
		);
	}
	function Pe(l) {
		return Y(l, re);
	}
	function Se(l) {
		let c = "",
			d = "";
		for (; (c = je(l)); ) d += c;
		return d;
	}
	function Ke(l) {
		let c = "";
		for (;;) {
			const d = l.currentChar();
			if (d === "{" || d === "}" || d === "@" || d === "|" || !d) break;
			if (d === ee || d === X)
				if (Z(l)) (c += d), l.next();
				else {
					if (J(l)) break;
					(c += d), l.next();
				}
			else (c += d), l.next();
		}
		return c;
	}
	function Xe(l) {
		y(l);
		let c = "",
			d = "";
		for (; (c = Ye(l)); ) d += c;
		const k = l.currentChar();
		if (k && k !== "}" && k !== ae && k !== ee && k !== X && k !== "　") {
			const V = Re(l);
			return h(M.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, d + V), d + V;
		}
		return l.currentChar() === ae && h(M.UNTERMINATED_CLOSING_BRACE, s(), 0), d;
	}
	function Be(l) {
		y(l);
		let c = "";
		return (
			l.currentChar() === "-" ? (l.next(), (c += `-${Se(l)}`)) : (c += Se(l)),
			l.currentChar() === ae && h(M.UNTERMINATED_CLOSING_BRACE, s(), 0),
			c
		);
	}
	function kt(l) {
		return l !== At && l !== X;
	}
	function Je(l) {
		y(l), A(l, "'");
		let c = "",
			d = "";
		for (; (c = Y(l, kt)); ) c === "\\" ? (d += qe(l)) : (d += c);
		const k = l.currentChar();
		return k === X || k === ae
			? (h(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0),
				k === X && (l.next(), A(l, "'")),
				d)
			: (A(l, "'"), d);
	}
	function qe(l) {
		const c = l.currentChar();
		switch (c) {
			case "\\":
			case "'":
				return l.next(), `\\${c}`;
			case "u":
				return Ae(l, c, 4);
			case "U":
				return Ae(l, c, 6);
			default:
				return h(M.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, c), "";
		}
	}
	function Ae(l, c, d) {
		A(l, c);
		let k = "";
		for (let V = 0; V < d; V++) {
			const R = Pe(l);
			if (!R) {
				h(
					M.INVALID_UNICODE_ESCAPE_SEQUENCE,
					s(),
					0,
					`\\${c}${k}${l.currentChar()}`,
				);
				break;
			}
			k += R;
		}
		return `\\${c}${k}`;
	}
	function Qe(l) {
		return l !== "{" && l !== "}" && l !== ee && l !== X;
	}
	function Re(l) {
		y(l);
		let c = "",
			d = "";
		for (; (c = Y(l, Qe)); ) d += c;
		return d;
	}
	function Ze(l) {
		let c = "",
			d = "";
		for (; (c = xe(l)); ) d += c;
		return d;
	}
	function ze(l) {
		const c = (d) => {
			const k = l.currentChar();
			return k === "{" ||
				k === "@" ||
				k === "|" ||
				k === "(" ||
				k === ")" ||
				!k ||
				k === ee
				? d
				: ((d += k), l.next(), c(d));
		};
		return c("");
	}
	function he(l) {
		y(l);
		const c = A(l, "|");
		return y(l), c;
	}
	function me(l, c) {
		let d = null;
		switch (l.currentChar()) {
			case "{":
				return (
					c.braceNest >= 1 && h(M.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0),
					l.next(),
					(d = p(c, 2, "{")),
					y(l),
					c.braceNest++,
					d
				);
			case "}":
				return (
					c.braceNest > 0 &&
						c.currentType === 2 &&
						h(M.EMPTY_PLACEHOLDER, s(), 0),
					l.next(),
					(d = p(c, 3, "}")),
					c.braceNest--,
					c.braceNest > 0 && y(l),
					c.inLinked && c.braceNest === 0 && (c.inLinked = !1),
					d
				);
			case "@":
				return (
					c.braceNest > 0 && h(M.UNTERMINATED_CLOSING_BRACE, s(), 0),
					(d = de(l, c) || P(c)),
					(c.braceNest = 0),
					d
				);
			default: {
				let V = !0,
					R = !0,
					_ = !0;
				if (J(l))
					return (
						c.braceNest > 0 && h(M.UNTERMINATED_CLOSING_BRACE, s(), 0),
						(d = p(c, 1, he(l))),
						(c.braceNest = 0),
						(c.inLinked = !1),
						d
					);
				if (
					c.braceNest > 0 &&
					(c.currentType === 4 || c.currentType === 5 || c.currentType === 6)
				)
					return (
						h(M.UNTERMINATED_CLOSING_BRACE, s(), 0), (c.braceNest = 0), pe(l, c)
					);
				if ((V = I(l, c))) return (d = p(c, 4, Xe(l))), y(l), d;
				if ((R = m(l, c))) return (d = p(c, 5, Be(l))), y(l), d;
				if ((_ = T(l, c))) return (d = p(c, 6, Je(l))), y(l), d;
				if (!V && !R && !_)
					return (
						(d = p(c, 12, Re(l))),
						h(M.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, d.value),
						y(l),
						d
					);
				break;
			}
		}
		return d;
	}
	function de(l, c) {
		const { currentType: d } = c;
		let k = null;
		const V = l.currentChar();
		switch (
			((d === 7 || d === 8 || d === 11 || d === 9) &&
				(V === X || V === ee) &&
				h(M.INVALID_LINKED_FORMAT, s(), 0),
			V)
		) {
			case "@":
				return l.next(), (k = p(c, 7, "@")), (c.inLinked = !0), k;
			case ".":
				return y(l), l.next(), p(c, 8, ".");
			case ":":
				return y(l), l.next(), p(c, 9, ":");
			default:
				return J(l)
					? ((k = p(c, 1, he(l))), (c.braceNest = 0), (c.inLinked = !1), k)
					: C(l, c) || W(l, c)
						? (y(l), de(l, c))
						: b(l, c)
							? (y(l), p(c, 11, Ze(l)))
							: x(l, c)
								? (y(l), V === "{" ? me(l, c) || k : p(c, 10, ze(l)))
								: (d === 7 && h(M.INVALID_LINKED_FORMAT, s(), 0),
									(c.braceNest = 0),
									(c.inLinked = !1),
									pe(l, c));
		}
	}
	function pe(l, c) {
		let d = { type: 13 };
		if (c.braceNest > 0) return me(l, c) || P(c);
		if (c.inLinked) return de(l, c) || P(c);
		switch (l.currentChar()) {
			case "{":
				return me(l, c) || P(c);
			case "}":
				return h(M.UNBALANCED_CLOSING_BRACE, s(), 0), l.next(), p(c, 3, "}");
			case "@":
				return de(l, c) || P(c);
			default: {
				if (J(l))
					return (d = p(c, 1, he(l))), (c.braceNest = 0), (c.inLinked = !1), d;
				if (Z(l)) return p(c, 0, Ke(l));
				break;
			}
		}
		return d;
	}
	function et() {
		const { currentType: l, offset: c, startLoc: d, endLoc: k } = u;
		return (
			(u.lastType = l),
			(u.lastOffset = c),
			(u.lastStartLoc = d),
			(u.lastEndLoc = k),
			(u.offset = a()),
			(u.startLoc = s()),
			r.currentChar() === ae ? p(u, 13) : pe(r, u)
		);
	}
	return { nextToken: et, currentOffset: a, currentPosition: s, context: g };
}
const ur = "parser",
	fr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function _r(e, t, n) {
	switch (e) {
		case "\\\\":
			return "\\";
		case "\\'":
			return "'";
		default: {
			const r = parseInt(t || n, 16);
			return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
		}
	}
}
function mr(e = {}) {
	const t = e.location !== !1,
		{ onError: n } = e;
	function r(o, E, I, m, ...T) {
		const C = o.currentPosition();
		if (((C.offset += m), (C.column += m), n)) {
			const b = t ? st(I, C) : null,
				W = $e(E, b, { domain: ur, args: T });
			n(W);
		}
	}
	function a(o, E, I) {
		const m = { type: o };
		return t && ((m.start = E), (m.end = E), (m.loc = { start: I, end: I })), m;
	}
	function s(o, E, I, m) {
		t && ((o.end = E), o.loc && (o.loc.end = I));
	}
	function i(o, E) {
		const I = o.context(),
			m = a(3, I.offset, I.startLoc);
		return (m.value = E), s(m, o.currentOffset(), o.currentPosition()), m;
	}
	function f(o, E) {
		const I = o.context(),
			{ lastOffset: m, lastStartLoc: T } = I,
			C = a(5, m, T);
		return (
			(C.index = parseInt(E, 10)),
			o.nextToken(),
			s(C, o.currentOffset(), o.currentPosition()),
			C
		);
	}
	function u(o, E) {
		const I = o.context(),
			{ lastOffset: m, lastStartLoc: T } = I,
			C = a(4, m, T);
		return (
			(C.key = E),
			o.nextToken(),
			s(C, o.currentOffset(), o.currentPosition()),
			C
		);
	}
	function g(o, E) {
		const I = o.context(),
			{ lastOffset: m, lastStartLoc: T } = I,
			C = a(9, m, T);
		return (
			(C.value = E.replace(fr, _r)),
			o.nextToken(),
			s(C, o.currentOffset(), o.currentPosition()),
			C
		);
	}
	function N(o) {
		const E = o.nextToken(),
			I = o.context(),
			{ lastOffset: m, lastStartLoc: T } = I,
			C = a(8, m, T);
		return E.type !== 11
			? (r(o, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0),
				(C.value = ""),
				s(C, m, T),
				{ nextConsumeToken: E, node: C })
			: (E.value == null &&
					r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, te(E)),
				(C.value = E.value || ""),
				s(C, o.currentOffset(), o.currentPosition()),
				{ node: C });
	}
	function h(o, E) {
		const I = o.context(),
			m = a(7, I.offset, I.startLoc);
		return (m.value = E), s(m, o.currentOffset(), o.currentPosition()), m;
	}
	function p(o) {
		const E = o.context(),
			I = a(6, E.offset, E.startLoc);
		let m = o.nextToken();
		if (m.type === 8) {
			const T = N(o);
			(I.modifier = T.node), (m = T.nextConsumeToken || o.nextToken());
		}
		switch (
			(m.type !== 9 &&
				r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(m)),
			(m = o.nextToken()),
			m.type === 2 && (m = o.nextToken()),
			m.type)
		) {
			case 10:
				m.value == null &&
					r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(m)),
					(I.key = h(o, m.value || ""));
				break;
			case 4:
				m.value == null &&
					r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(m)),
					(I.key = u(o, m.value || ""));
				break;
			case 5:
				m.value == null &&
					r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(m)),
					(I.key = f(o, m.value || ""));
				break;
			case 6:
				m.value == null &&
					r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(m)),
					(I.key = g(o, m.value || ""));
				break;
			default: {
				r(o, M.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
				const T = o.context(),
					C = a(7, T.offset, T.startLoc);
				return (
					(C.value = ""),
					s(C, T.offset, T.startLoc),
					(I.key = C),
					s(I, T.offset, T.startLoc),
					{ nextConsumeToken: m, node: I }
				);
			}
		}
		return s(I, o.currentOffset(), o.currentPosition()), { node: I };
	}
	function P(o) {
		const E = o.context(),
			I = E.currentType === 1 ? o.currentOffset() : E.offset,
			m = E.currentType === 1 ? E.endLoc : E.startLoc,
			T = a(2, I, m);
		T.items = [];
		let C = null;
		do {
			const x = C || o.nextToken();
			switch (((C = null), x.type)) {
				case 0:
					x.value == null &&
						r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(x)),
						T.items.push(i(o, x.value || ""));
					break;
				case 5:
					x.value == null &&
						r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(x)),
						T.items.push(f(o, x.value || ""));
					break;
				case 4:
					x.value == null &&
						r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(x)),
						T.items.push(u(o, x.value || ""));
					break;
				case 6:
					x.value == null &&
						r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, te(x)),
						T.items.push(g(o, x.value || ""));
					break;
				case 7: {
					const J = p(o);
					T.items.push(J.node), (C = J.nextConsumeToken || null);
					break;
				}
			}
		} while (E.currentType !== 13 && E.currentType !== 1);
		const b = E.currentType === 1 ? E.lastOffset : o.currentOffset(),
			W = E.currentType === 1 ? E.lastEndLoc : o.currentPosition();
		return s(T, b, W), T;
	}
	function A(o, E, I, m) {
		const T = o.context();
		let C = m.items.length === 0;
		const b = a(1, E, I);
		(b.cases = []), b.cases.push(m);
		do {
			const W = P(o);
			C || (C = W.items.length === 0), b.cases.push(W);
		} while (T.currentType !== 13);
		return (
			C && r(o, M.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0),
			s(b, o.currentOffset(), o.currentPosition()),
			b
		);
	}
	function S(o) {
		const E = o.context(),
			{ offset: I, startLoc: m } = E,
			T = P(o);
		return E.currentType === 13 ? T : A(o, I, m, T);
	}
	function y(o) {
		const E = or(o, K({}, e)),
			I = E.context(),
			m = a(0, I.offset, I.startLoc);
		return (
			t && m.loc && (m.loc.source = o),
			(m.body = S(E)),
			e.onCacheKey && (m.cacheKey = e.onCacheKey(o)),
			I.currentType !== 13 &&
				r(
					E,
					M.UNEXPECTED_LEXICAL_ANALYSIS,
					I.lastStartLoc,
					0,
					o[I.offset] || "",
				),
			s(m, E.currentOffset(), E.currentPosition()),
			m
		);
	}
	return { parse: y };
}
function te(e) {
	if (e.type === 13) return "EOF";
	const t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function dr(e, t = {}) {
	const n = { ast: e, helpers: new Set() };
	return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Rt(e, t) {
	for (let n = 0; n < e.length; n++) bt(e[n], t);
}
function bt(e, t) {
	switch (e.type) {
		case 1:
			Rt(e.cases, t), t.helper("plural");
			break;
		case 2:
			Rt(e.items, t);
			break;
		case 6: {
			bt(e.key, t), t.helper("linked"), t.helper("type");
			break;
		}
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function Er(e, t = {}) {
	const n = dr(e);
	n.helper("normalize"), e.body && bt(e.body, n);
	const r = n.context();
	e.helpers = Array.from(r.helpers);
}
function gr(e) {
	const t = e.body;
	return t.type === 2 ? Ft(t) : t.cases.forEach((n) => Ft(n)), e;
}
function Ft(e) {
	if (e.items.length === 1) {
		const t = e.items[0];
		(t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
	} else {
		const t = [];
		for (let n = 0; n < e.items.length; n++) {
			const r = e.items[n];
			if (!(r.type === 3 || r.type === 9) || r.value == null) break;
			t.push(r.value);
		}
		if (t.length === e.items.length) {
			e.static = Lt(t);
			for (let n = 0; n < e.items.length; n++) {
				const r = e.items[n];
				(r.type === 3 || r.type === 9) && delete r.value;
			}
		}
	}
}
function ge(e) {
	switch (((e.t = e.type), e.type)) {
		case 0: {
			const t = e;
			ge(t.body), (t.b = t.body), delete t.body;
			break;
		}
		case 1: {
			const t = e,
				n = t.cases;
			for (let r = 0; r < n.length; r++) ge(n[r]);
			(t.c = n), delete t.cases;
			break;
		}
		case 2: {
			const t = e,
				n = t.items;
			for (let r = 0; r < n.length; r++) ge(n[r]);
			(t.i = n),
				delete t.items,
				t.static && ((t.s = t.static), delete t.static);
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			const t = e;
			t.value && ((t.v = t.value), delete t.value);
			break;
		}
		case 6: {
			const t = e;
			ge(t.key),
				(t.k = t.key),
				delete t.key,
				t.modifier && (ge(t.modifier), (t.m = t.modifier), delete t.modifier);
			break;
		}
		case 5: {
			const t = e;
			(t.i = t.index), delete t.index;
			break;
		}
		case 4: {
			const t = e;
			(t.k = t.key), delete t.key;
			break;
		}
	}
	delete e.type;
}
function Lr(e, t) {
	const { sourceMap: n, filename: r, breakLineCode: a, needIndent: s } = t,
		i = t.location !== !1,
		f = {
			filename: r,
			code: "",
			column: 1,
			line: 1,
			offset: 0,
			map: void 0,
			breakLineCode: a,
			needIndent: s,
			indentLevel: 0,
		};
	i && e.loc && (f.source = e.loc.source);
	const u = () => f;
	function g(y, o) {
		f.code += y;
	}
	function N(y, o = !0) {
		const E = o ? a : "";
		g(s ? E + "  ".repeat(y) : E);
	}
	function h(y = !0) {
		const o = ++f.indentLevel;
		y && N(o);
	}
	function p(y = !0) {
		const o = --f.indentLevel;
		y && N(o);
	}
	function P() {
		N(f.indentLevel);
	}
	return {
		context: u,
		push: g,
		indent: h,
		deindent: p,
		newline: P,
		helper: (y) => `_${y}`,
		needIndent: () => f.needIndent,
	};
}
function br(e, t) {
	const { helper: n } = e;
	e.push(`${n("linked")}(`),
		be(e, t.key),
		t.modifier
			? (e.push(", "), be(e, t.modifier), e.push(", _type"))
			: e.push(", undefined, _type"),
		e.push(")");
}
function hr(e, t) {
	const { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	const a = t.items.length;
	for (let s = 0; s < a && (be(e, t.items[s]), s !== a - 1); s++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function pr(e, t) {
	const { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		const a = t.cases.length;
		for (let s = 0; s < a && (be(e, t.cases[s]), s !== a - 1); s++)
			e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function Ir(e, t) {
	t.body ? be(e, t.body) : e.push("null");
}
function be(e, t) {
	const { helper: n } = e;
	switch (t.type) {
		case 0:
			Ir(e, t);
			break;
		case 1:
			pr(e, t);
			break;
		case 2:
			hr(e, t);
			break;
		case 6:
			br(e, t);
			break;
		case 8:
			e.push(JSON.stringify(t.value), t);
			break;
		case 7:
			e.push(JSON.stringify(t.value), t);
			break;
		case 5:
			e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
			break;
		case 4:
			e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
			break;
		case 9:
			e.push(JSON.stringify(t.value), t);
			break;
		case 3:
			e.push(JSON.stringify(t.value), t);
			break;
	}
}
const Nr = (e, t = {}) => {
	const n = O(t.mode) ? t.mode : "normal",
		r = O(t.filename) ? t.filename : "message.intl",
		a = !!t.sourceMap,
		s =
			t.breakLineCode != null
				? t.breakLineCode
				: n === "arrow"
					? ";"
					: `
`,
		i = t.needIndent ? t.needIndent : n !== "arrow",
		f = e.helpers || [],
		u = Lr(e, {
			mode: n,
			filename: r,
			sourceMap: a,
			breakLineCode: s,
			needIndent: i,
		});
	u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
		u.indent(i),
		f.length > 0 &&
			(u.push(
				`const { ${Lt(
					f.map((h) => `${h}: _${h}`),
					", ",
				)} } = ctx`,
			),
			u.newline()),
		u.push("return "),
		be(u, e),
		u.deindent(i),
		u.push("}"),
		delete e.helpers;
	const { code: g, map: N } = u.context();
	return { ast: e, code: g, map: N ? N.toJSON() : void 0 };
};
function Tr(e, t = {}) {
	const n = K({}, t),
		r = !!n.jit,
		a = !!n.minify,
		s = n.optimize == null ? !0 : n.optimize,
		f = mr(n).parse(e);
	return r
		? (s && gr(f), a && ge(f), { ast: f, code: "" })
		: (Er(f, n), Nr(f, n));
} /*!
 * core-base v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Or() {
	typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
		(fe().__INTLIFY_PROD_DEVTOOLS__ = !1),
		typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
			(fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ne(e) {
	return v(e) && ht(e) === 0 && (z(e, "b") || z(e, "body"));
}
const un = ["b", "body"];
function Cr(e) {
	return ie(e, un);
}
const fn = ["c", "cases"];
function kr(e) {
	return ie(e, fn, []);
}
const _n = ["s", "static"];
function yr(e) {
	return ie(e, _n);
}
const mn = ["i", "items"];
function Pr(e) {
	return ie(e, mn, []);
}
const dn = ["t", "type"];
function ht(e) {
	return ie(e, dn);
}
const En = ["v", "value"];
function ve(e, t) {
	const n = ie(e, En);
	if (n != null) return n;
	throw Oe(t);
}
const gn = ["m", "modifier"];
function Sr(e) {
	return ie(e, gn);
}
const Ln = ["k", "key"];
function Ar(e) {
	const t = ie(e, Ln);
	if (t) return t;
	throw Oe(6);
}
function ie(e, t, n) {
	for (let r = 0; r < t.length; r++) {
		const a = t[r];
		if (z(e, a) && e[a] != null) return e[a];
	}
	return n;
}
const bn = [...un, ...fn, ..._n, ...mn, ...Ln, ...gn, ...En, ...dn];
function Oe(e) {
	return new Error(`unhandled node type: ${e}`);
}
function tt(e) {
	return (n) => Rr(n, e);
}
function Rr(e, t) {
	const n = Cr(t);
	if (n == null) throw Oe(0);
	if (ht(n) === 1) {
		const s = kr(n);
		return e.plural(s.reduce((i, f) => [...i, Dt(e, f)], []));
	} else return Dt(e, n);
}
function Dt(e, t) {
	const n = yr(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		const r = Pr(t).reduce((a, s) => [...a, lt(e, s)], []);
		return e.normalize(r);
	}
}
function lt(e, t) {
	const n = ht(t);
	switch (n) {
		case 3:
			return ve(t, n);
		case 9:
			return ve(t, n);
		case 4: {
			const r = t;
			if (z(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (z(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw Oe(n);
		}
		case 5: {
			const r = t;
			if (z(r, "i") && j(r.i)) return e.interpolate(e.list(r.i));
			if (z(r, "index") && j(r.index)) return e.interpolate(e.list(r.index));
			throw Oe(n);
		}
		case 6: {
			const r = t,
				a = Sr(r),
				s = Ar(r);
			return e.linked(lt(e, s), a ? lt(e, a) : void 0, e.type);
		}
		case 7:
			return ve(t, n);
		case 8:
			return ve(t, n);
		default:
			throw new Error(`unhandled node on format message part: ${n}`);
	}
}
const Fr = (e) => e;
let Me = w();
function Dr(e, t = {}) {
	let n = !1;
	const r = t.onError || nr;
	return (
		(t.onError = (a) => {
			(n = !0), r(a);
		}),
		{ ...Tr(e, t), detectError: n }
	);
}
function vr(e, t) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && O(e)) {
		D(t.warnHtmlMessage) && t.warnHtmlMessage;
		const r = (t.onCacheKey || Fr)(e),
			a = Me[r];
		if (a) return a;
		const { ast: s, detectError: i } = Dr(e, { ...t, location: !1, jit: !0 }),
			f = tt(s);
		return i ? f : (Me[r] = f);
	} else {
		const n = e.cacheKey;
		if (n) {
			const r = Me[n];
			return r || (Me[n] = tt(e));
		} else return tt(e);
	}
}
let Ce = null;
function Mr(e) {
	Ce = e;
}
function wr(e, t, n) {
	Ce &&
		Ce.emit("i18n:init", {
			timestamp: Date.now(),
			i18n: e,
			version: t,
			meta: n,
		});
}
const Ur = Wr("function:translate");
function Wr(e) {
	return (t) => Ce && Ce.emit(e, t);
}
const se = {
		INVALID_ARGUMENT: tr,
		INVALID_DATE_ARGUMENT: 18,
		INVALID_ISO_DATE_ARGUMENT: 19,
		NOT_SUPPORT_NON_STRING_MESSAGE: 20,
		NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
		NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
		NOT_SUPPORT_LOCALE_TYPE: 23,
	},
	$r = 24;
function le(e) {
	return $e(e, null, void 0);
}
function pt(e, t) {
	return t.locale != null ? vt(t.locale) : vt(e.locale);
}
let nt;
function vt(e) {
	if (O(e)) return e;
	if ($(e)) {
		if (e.resolvedOnce && nt != null) return nt;
		if (e.constructor.name === "Function") {
			const t = e();
			if (Zn(t)) throw le(se.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return (nt = t);
		} else throw le(se.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw le(se.NOT_SUPPORT_LOCALE_TYPE);
}
function Vr(e, t, n) {
	return [
		...new Set([n, ...(H(t) ? t : v(t) ? Object.keys(t) : O(t) ? [t] : [n])]),
	];
}
function hn(e, t, n) {
	const r = O(n) ? n : ke,
		a = e;
	a.__localeChainCache || (a.__localeChainCache = new Map());
	let s = a.__localeChainCache.get(r);
	if (!s) {
		s = [];
		let i = [n];
		for (; H(i); ) i = Mt(s, i, t);
		const f = H(t) || !F(t) ? t : t.default ? t.default : null;
		(i = O(f) ? [f] : f), H(i) && Mt(s, i, !1), a.__localeChainCache.set(r, s);
	}
	return s;
}
function Mt(e, t, n) {
	let r = !0;
	for (let a = 0; a < t.length && D(r); a++) {
		const s = t[a];
		O(s) && (r = xr(e, t[a], n));
	}
	return r;
}
function xr(e, t, n) {
	let r;
	const a = t.split("-");
	do {
		const s = a.join("-");
		(r = Hr(e, s, n)), a.splice(-1, 1);
	} while (a.length && r === !0);
	return r;
}
function Hr(e, t, n) {
	let r = !1;
	if (!e.includes(t) && ((r = !0), t)) {
		r = t[t.length - 1] !== "!";
		const a = t.replace(/!/g, "");
		e.push(a), (H(n) || F(n)) && n[a] && (r = n[a]);
	}
	return r;
}
const oe = [];
oe[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
oe[1] = { w: [1], ".": [2], "[": [4], o: [7] };
oe[2] = { w: [2], i: [3, 0], 0: [3, 0] };
oe[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1],
};
oe[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
oe[5] = { "'": [4, 0], o: 8, l: [5, 0] };
oe[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const Yr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Gr(e) {
	return Yr.test(e);
}
function jr(e) {
	const t = e.charCodeAt(0),
		n = e.charCodeAt(e.length - 1);
	return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Kr(e) {
	if (e == null) return "o";
	switch (e.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39:
			return e;
		case 95:
		case 36:
		case 45:
			return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233:
			return "w";
	}
	return "i";
}
function Xr(e) {
	const t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e))
		? !1
		: Gr(t)
			? jr(t)
			: "*" + t;
}
function Br(e) {
	const t = [];
	let n = -1,
		r = 0,
		a = 0,
		s,
		i,
		f,
		u,
		g,
		N,
		h;
	const p = [];
	(p[0] = () => {
		i === void 0 ? (i = f) : (i += f);
	}),
		(p[1] = () => {
			i !== void 0 && (t.push(i), (i = void 0));
		}),
		(p[2] = () => {
			p[0](), a++;
		}),
		(p[3] = () => {
			if (a > 0) a--, (r = 4), p[0]();
			else {
				if (((a = 0), i === void 0 || ((i = Xr(i)), i === !1))) return !1;
				p[1]();
			}
		});
	function P() {
		const A = e[n + 1];
		if ((r === 5 && A === "'") || (r === 6 && A === '"'))
			return n++, (f = "\\" + A), p[0](), !0;
	}
	for (; r !== null; )
		if ((n++, (s = e[n]), !(s === "\\" && P()))) {
			if (
				((u = Kr(s)),
				(h = oe[r]),
				(g = h[u] || h.l || 8),
				g === 8 ||
					((r = g[0]),
					g[1] !== void 0 && ((N = p[g[1]]), N && ((f = s), N() === !1))))
			)
				return;
			if (r === 7) return t;
		}
}
const wt = new Map();
function Jr(e, t) {
	return v(e) ? e[t] : null;
}
function qr(e, t) {
	if (!v(e)) return null;
	let n = wt.get(t);
	if ((n || ((n = Br(t)), n && wt.set(t, n)), !n)) return null;
	const r = n.length;
	let a = e,
		s = 0;
	for (; s < r; ) {
		const i = n[s];
		if (bn.includes(i) && ne(a)) return null;
		const f = a[i];
		if (f === void 0 || $(a)) return null;
		(a = f), s++;
	}
	return a;
}
const Qr = "11.1.12",
	Ve = -1,
	ke = "en-US",
	Ut = "",
	Wt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Zr() {
	return {
		upper: (e, t) =>
			t === "text" && O(e)
				? e.toUpperCase()
				: t === "vnode" && v(e) && "__v_isVNode" in e
					? e.children.toUpperCase()
					: e,
		lower: (e, t) =>
			t === "text" && O(e)
				? e.toLowerCase()
				: t === "vnode" && v(e) && "__v_isVNode" in e
					? e.children.toLowerCase()
					: e,
		capitalize: (e, t) =>
			t === "text" && O(e)
				? Wt(e)
				: t === "vnode" && v(e) && "__v_isVNode" in e
					? Wt(e.children)
					: e,
	};
}
let pn;
function zr(e) {
	pn = e;
}
let In;
function ea(e) {
	In = e;
}
let Nn;
function ta(e) {
	Nn = e;
}
let Tn = null;
const na = (e) => {
		Tn = e;
	},
	ra = () => Tn;
let On = null;
const $t = (e) => {
		On = e;
	},
	aa = () => On;
let Vt = 0;
function sa(e = {}) {
	const t = $(e.onWarn) ? e.onWarn : jn,
		n = O(e.version) ? e.version : Qr,
		r = O(e.locale) || $(e.locale) ? e.locale : ke,
		a = $(r) ? ke : r,
		s =
			H(e.fallbackLocale) ||
			F(e.fallbackLocale) ||
			O(e.fallbackLocale) ||
			e.fallbackLocale === !1
				? e.fallbackLocale
				: a,
		i = F(e.messages) ? e.messages : rt(a),
		f = F(e.datetimeFormats) ? e.datetimeFormats : rt(a),
		u = F(e.numberFormats) ? e.numberFormats : rt(a),
		g = K(w(), e.modifiers, Zr()),
		N = e.pluralRules || w(),
		h = $(e.missing) ? e.missing : null,
		p = D(e.missingWarn) || Le(e.missingWarn) ? e.missingWarn : !0,
		P = D(e.fallbackWarn) || Le(e.fallbackWarn) ? e.fallbackWarn : !0,
		A = !!e.fallbackFormat,
		S = !!e.unresolving,
		y = $(e.postTranslation) ? e.postTranslation : null,
		o = F(e.processor) ? e.processor : null,
		E = D(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
		I = !!e.escapeParameter,
		m = $(e.messageCompiler) ? e.messageCompiler : pn,
		T = $(e.messageResolver) ? e.messageResolver : In || Jr,
		C = $(e.localeFallbacker) ? e.localeFallbacker : Nn || Vr,
		b = v(e.fallbackContext) ? e.fallbackContext : void 0,
		W = e,
		x = v(W.__datetimeFormatters) ? W.__datetimeFormatters : new Map(),
		J = v(W.__numberFormatters) ? W.__numberFormatters : new Map(),
		Z = v(W.__meta) ? W.__meta : {};
	Vt++;
	const Y = {
		version: n,
		cid: Vt,
		locale: r,
		fallbackLocale: s,
		messages: i,
		modifiers: g,
		pluralRules: N,
		missing: h,
		missingWarn: p,
		fallbackWarn: P,
		fallbackFormat: A,
		unresolving: S,
		postTranslation: y,
		processor: o,
		warnHtmlMessage: E,
		escapeParameter: I,
		messageCompiler: m,
		messageResolver: T,
		localeFallbacker: C,
		fallbackContext: b,
		onWarn: t,
		__meta: Z,
	};
	return (
		(Y.datetimeFormats = f),
		(Y.numberFormats = u),
		(Y.__datetimeFormatters = x),
		(Y.__numberFormatters = J),
		__INTLIFY_PROD_DEVTOOLS__ && wr(Y, n, Z),
		Y
	);
}
const rt = (e) => ({ [e]: w() });
function It(e, t, n, r, a) {
	const { missing: s, onWarn: i } = e;
	if (s !== null) {
		const f = s(e, n, t, a);
		return O(f) ? f : t;
	} else return t;
}
function Ne(e, t, n) {
	const r = e;
	(r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function la(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ca(e, t) {
	const n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (la(e, t[r])) return !0;
	return !1;
}
function xt(e, ...t) {
	const {
			datetimeFormats: n,
			unresolving: r,
			fallbackLocale: a,
			onWarn: s,
			localeFallbacker: i,
		} = e,
		{ __datetimeFormatters: f } = e,
		[u, g, N, h] = ct(...t),
		p = D(N.missingWarn) ? N.missingWarn : e.missingWarn;
	D(N.fallbackWarn) ? N.fallbackWarn : e.fallbackWarn;
	const P = !!N.part,
		A = pt(e, N),
		S = i(e, a, A);
	if (!O(u) || u === "") return new Intl.DateTimeFormat(A, h).format(g);
	let y = {},
		o,
		E = null;
	const I = "datetime format";
	for (
		let C = 0;
		C < S.length && ((o = S[C]), (y = n[o] || {}), (E = y[u]), !F(E));
		C++
	)
		It(e, u, o, p, I);
	if (!F(E) || !O(o)) return r ? Ve : u;
	let m = `${o}__${u}`;
	We(h) || (m = `${m}__${JSON.stringify(h)}`);
	let T = f.get(m);
	return (
		T || ((T = new Intl.DateTimeFormat(o, K({}, E, h))), f.set(m, T)),
		P ? T.formatToParts(g) : T.format(g)
	);
}
const Cn = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits",
];
function ct(...e) {
	const [t, n, r, a] = e,
		s = w();
	let i = w(),
		f;
	if (O(t)) {
		const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!u) throw le(se.INVALID_ISO_DATE_ARGUMENT);
		const g = u[3]
			? u[3].trim().startsWith("T")
				? `${u[1].trim()}${u[3].trim()}`
				: `${u[1].trim()}T${u[3].trim()}`
			: u[1].trim();
		f = new Date(g);
		try {
			f.toISOString();
		} catch {
			throw le(se.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (Bn(t)) {
		if (isNaN(t.getTime())) throw le(se.INVALID_DATE_ARGUMENT);
		f = t;
	} else if (j(t)) f = t;
	else throw le(se.INVALID_ARGUMENT);
	return (
		O(n)
			? (s.key = n)
			: F(n) &&
				Object.keys(n).forEach((u) => {
					Cn.includes(u) ? (i[u] = n[u]) : (s[u] = n[u]);
				}),
		O(r) ? (s.locale = r) : F(r) && (i = r),
		F(a) && (i = a),
		[s.key || "", f, s, i]
	);
}
function Ht(e, t, n) {
	const r = e;
	for (const a in n) {
		const s = `${t}__${a}`;
		r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
	}
}
function Yt(e, ...t) {
	const {
			numberFormats: n,
			unresolving: r,
			fallbackLocale: a,
			onWarn: s,
			localeFallbacker: i,
		} = e,
		{ __numberFormatters: f } = e,
		[u, g, N, h] = it(...t),
		p = D(N.missingWarn) ? N.missingWarn : e.missingWarn;
	D(N.fallbackWarn) ? N.fallbackWarn : e.fallbackWarn;
	const P = !!N.part,
		A = pt(e, N),
		S = i(e, a, A);
	if (!O(u) || u === "") return new Intl.NumberFormat(A, h).format(g);
	let y = {},
		o,
		E = null;
	const I = "number format";
	for (
		let C = 0;
		C < S.length && ((o = S[C]), (y = n[o] || {}), (E = y[u]), !F(E));
		C++
	)
		It(e, u, o, p, I);
	if (!F(E) || !O(o)) return r ? Ve : u;
	let m = `${o}__${u}`;
	We(h) || (m = `${m}__${JSON.stringify(h)}`);
	let T = f.get(m);
	return (
		T || ((T = new Intl.NumberFormat(o, K({}, E, h))), f.set(m, T)),
		P ? T.formatToParts(g) : T.format(g)
	);
}
const kn = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay",
];
function it(...e) {
	const [t, n, r, a] = e,
		s = w();
	let i = w();
	if (!j(t)) throw le(se.INVALID_ARGUMENT);
	const f = t;
	return (
		O(n)
			? (s.key = n)
			: F(n) &&
				Object.keys(n).forEach((u) => {
					kn.includes(u) ? (i[u] = n[u]) : (s[u] = n[u]);
				}),
		O(r) ? (s.locale = r) : F(r) && (i = r),
		F(a) && (i = a),
		[s.key || "", f, s, i]
	);
}
function Gt(e, t, n) {
	const r = e;
	for (const a in n) {
		const s = `${t}__${a}`;
		r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
	}
}
const ia = (e) => e,
	oa = (e) => "",
	ua = "text",
	fa = (e) => (e.length === 0 ? "" : Lt(e)),
	_a = zn;
function jt(e, t) {
	return (
		(e = Math.abs(e)),
		t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
	);
}
function ma(e) {
	const t = j(e.pluralIndex) ? e.pluralIndex : -1;
	return e.named && (j(e.named.count) || j(e.named.n))
		? j(e.named.count)
			? e.named.count
			: j(e.named.n)
				? e.named.n
				: t
		: t;
}
function da(e, t) {
	t.count || (t.count = e), t.n || (t.n = e);
}
function Ea(e = {}) {
	const t = e.locale,
		n = ma(e),
		r = v(e.pluralRules) && O(t) && $(e.pluralRules[t]) ? e.pluralRules[t] : jt,
		a = v(e.pluralRules) && O(t) && $(e.pluralRules[t]) ? jt : void 0,
		s = (o) => o[r(n, o.length, a)],
		i = e.list || [],
		f = (o) => i[o],
		u = e.named || w();
	j(e.pluralIndex) && da(n, u);
	const g = (o) => u[o];
	function N(o, E) {
		const I = $(e.messages)
			? e.messages(o, !!E)
			: v(e.messages)
				? e.messages[o]
				: !1;
		return I || (e.parent ? e.parent.message(o) : oa);
	}
	const h = (o) => (e.modifiers ? e.modifiers[o] : ia),
		p = F(e.processor) && $(e.processor.normalize) ? e.processor.normalize : fa,
		P =
			F(e.processor) && $(e.processor.interpolate)
				? e.processor.interpolate
				: _a,
		A = F(e.processor) && O(e.processor.type) ? e.processor.type : ua,
		y = {
			list: f,
			named: g,
			plural: s,
			linked: (o, ...E) => {
				const [I, m] = E;
				let T = "text",
					C = "";
				E.length === 1
					? v(I)
						? ((C = I.modifier || C), (T = I.type || T))
						: O(I) && (C = I || C)
					: E.length === 2 && (O(I) && (C = I || C), O(m) && (T = m || T));
				const b = N(o, !0)(y),
					W = T === "vnode" && H(b) && C ? b[0] : b;
				return C ? h(C)(W, T) : W;
			},
			message: N,
			type: A,
			interpolate: P,
			normalize: p,
			values: K(w(), i, u),
		};
	return y;
}
const Kt = () => "",
	Q = (e) => $(e);
function Xt(e, ...t) {
	const {
			fallbackFormat: n,
			postTranslation: r,
			unresolving: a,
			messageCompiler: s,
			fallbackLocale: i,
			messages: f,
		} = e,
		[u, g] = ot(...t),
		N = D(g.missingWarn) ? g.missingWarn : e.missingWarn,
		h = D(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn,
		p = D(g.escapeParameter) ? g.escapeParameter : e.escapeParameter,
		P = !!g.resolvedMessage,
		A =
			O(g.default) || D(g.default)
				? D(g.default)
					? s
						? u
						: () => u
					: g.default
				: n
					? s
						? u
						: () => u
					: null,
		S = n || (A != null && (O(A) || $(A))),
		y = pt(e, g);
	p && ga(g);
	let [o, E, I] = P ? [u, y, f[y] || w()] : yn(e, u, y, i, h, N),
		m = o,
		T = u;
	if (
		(!P && !(O(m) || ne(m) || Q(m)) && S && ((m = A), (T = m)),
		!P && (!(O(m) || ne(m) || Q(m)) || !O(E)))
	)
		return a ? Ve : u;
	let C = !1;
	const b = () => {
			C = !0;
		},
		W = Q(m) ? m : Pn(e, u, E, m, T, b);
	if (C) return m;
	const x = ha(e, E, I, g),
		J = Ea(x),
		Z = La(e, W, J);
	let Y = r ? r(Z, u) : Z;
	if ((p && O(Y) && (Y = qn(Y)), __INTLIFY_PROD_DEVTOOLS__)) {
		const _e = {
			timestamp: Date.now(),
			key: O(u) ? u : Q(m) ? m.key : "",
			locale: E || (Q(m) ? m.locale : ""),
			format: O(m) ? m : Q(m) ? m.source : "",
			message: Y,
		};
		(_e.meta = K({}, e.__meta, ra() || {})), Ur(_e);
	}
	return Y;
}
function ga(e) {
	H(e.list)
		? (e.list = e.list.map((t) => (O(t) ? Pt(t) : t)))
		: v(e.named) &&
			Object.keys(e.named).forEach((t) => {
				O(e.named[t]) && (e.named[t] = Pt(e.named[t]));
			});
}
function yn(e, t, n, r, a, s) {
	const { messages: i, onWarn: f, messageResolver: u, localeFallbacker: g } = e,
		N = g(e, r, n);
	let h = w(),
		p,
		P = null;
	const A = "translate";
	for (
		let S = 0;
		S < N.length &&
		((p = N[S]),
		(h = i[p] || w()),
		(P = u(h, t)) === null && (P = h[t]),
		!(O(P) || ne(P) || Q(P)));
		S++
	)
		if (!ca(p, N)) {
			const y = It(e, t, p, s, A);
			y !== t && (P = y);
		}
	return [P, p, h];
}
function Pn(e, t, n, r, a, s) {
	const { messageCompiler: i, warnHtmlMessage: f } = e;
	if (Q(r)) {
		const g = r;
		return (g.locale = g.locale || n), (g.key = g.key || t), g;
	}
	if (i == null) {
		const g = () => r;
		return (g.locale = n), (g.key = t), g;
	}
	const u = i(r, ba(e, n, a, r, f, s));
	return (u.locale = n), (u.key = t), (u.source = r), u;
}
function La(e, t, n) {
	return t(n);
}
function ot(...e) {
	const [t, n, r] = e,
		a = w();
	if (!O(t) && !j(t) && !Q(t) && !ne(t)) throw le(se.INVALID_ARGUMENT);
	const s = j(t) ? String(t) : (Q(t), t);
	return (
		j(n)
			? (a.plural = n)
			: O(n)
				? (a.default = n)
				: F(n) && !We(n)
					? (a.named = n)
					: H(n) && (a.list = n),
		j(r) ? (a.plural = r) : O(r) ? (a.default = r) : F(r) && K(a, r),
		[s, a]
	);
}
function ba(e, t, n, r, a, s) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: a,
		onError: (i) => {
			throw (s && s(i), i);
		},
		onCacheKey: (i) => Kn(t, n, i),
	};
}
function ha(e, t, n, r) {
	const {
			modifiers: a,
			pluralRules: s,
			messageResolver: i,
			fallbackLocale: f,
			fallbackWarn: u,
			missingWarn: g,
			fallbackContext: N,
		} = e,
		p = {
			locale: t,
			modifiers: a,
			pluralRules: s,
			messages: (P, A) => {
				let S = i(n, P);
				if (S == null && (N || A)) {
					const [, , y] = yn(N || e, P, t, f, u, g);
					S = i(y, P);
				}
				if (O(S) || ne(S)) {
					let y = !1;
					const E = Pn(e, P, t, S, P, () => {
						y = !0;
					});
					return y ? Kt : E;
				} else return Q(S) ? S : Kt;
			},
		};
	return (
		e.processor && (p.processor = e.processor),
		r.list && (p.list = r.list),
		r.named && (p.named = r.named),
		j(r.plural) && (p.pluralIndex = r.plural),
		p
	);
}
Or(); /*!
 * vue-i18n v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const pa = "11.1.12";
function Ia() {
	typeof __VUE_I18N_FULL_INSTALL__ != "boolean" &&
		(fe().__VUE_I18N_FULL_INSTALL__ = !0),
		typeof __VUE_I18N_LEGACY_API__ != "boolean" &&
			(fe().__VUE_I18N_LEGACY_API__ = !0),
		typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
			(fe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
		typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
			(fe().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const B = {
	UNEXPECTED_RETURN_TYPE: $r,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
};
function q(e, ...t) {
	return $e(e, null, void 0);
}
const ut = ce("__translateVNode"),
	ft = ce("__datetimeParts"),
	_t = ce("__numberParts"),
	Sn = ce("__setPluralRules"),
	An = ce("__injectWithOption"),
	mt = ce("__dispose");
function ye(e) {
	if (!v(e) || ne(e)) return e;
	for (const t in e)
		if (z(e, t))
			if (!t.includes(".")) v(e[t]) && ye(e[t]);
			else {
				const n = t.split("."),
					r = n.length - 1;
				let a = e,
					s = !1;
				for (let i = 0; i < r; i++) {
					if (n[i] === "__proto__") throw new Error(`unsafe key: ${n[i]}`);
					if ((n[i] in a || (a[n[i]] = w()), !v(a[n[i]]))) {
						s = !0;
						break;
					}
					a = a[n[i]];
				}
				if (
					(s ||
						(ne(a)
							? bn.includes(n[r]) || delete e[t]
							: ((a[n[r]] = e[t]), delete e[t])),
					!ne(a))
				) {
					const i = a[n[r]];
					v(i) && ye(i);
				}
			}
	return e;
}
function Nt(e, t) {
	const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t,
		i = F(n) ? n : H(r) ? w() : { [e]: w() };
	if (
		(H(r) &&
			r.forEach((f) => {
				if ("locale" in f && "resource" in f) {
					const { locale: u, resource: g } = f;
					u ? ((i[u] = i[u] || w()), we(g, i[u])) : we(g, i);
				} else O(f) && we(JSON.parse(f), i);
			}),
		a == null && s)
	)
		for (const f in i) z(i, f) && ye(i[f]);
	return i;
}
function Rn(e) {
	return e.type;
}
function Fn(e, t, n) {
	let r = v(t.messages) ? t.messages : w();
	"__i18nGlobal" in n &&
		(r = Nt(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
	const a = Object.keys(r);
	a.length &&
		a.forEach((s) => {
			e.mergeLocaleMessage(s, r[s]);
		});
	{
		if (v(t.datetimeFormats)) {
			const s = Object.keys(t.datetimeFormats);
			s.length &&
				s.forEach((i) => {
					e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
				});
		}
		if (v(t.numberFormats)) {
			const s = Object.keys(t.numberFormats);
			s.length &&
				s.forEach((i) => {
					e.mergeNumberFormat(i, t.numberFormats[i]);
				});
		}
	}
}
function Bt(e) {
	return Yn(Gn, null, e, 0);
}
const Jt = "__INTLIFY_META__",
	qt = () => [],
	Na = () => !1;
let Qt = 0;
function Zt(e) {
	return (t, n, r, a) => e(n, r, Te() || void 0, a);
}
const Ta = () => {
	const e = Te();
	let t = null;
	return e && (t = Rn(e)[Jt]) ? { [Jt]: t } : null;
};
function Tt(e = {}) {
	const { __root: t, __injectWithOption: n } = e,
		r = t === void 0,
		a = e.flatJson,
		s = Ue ? Vn : xn;
	let i = D(e.inheritLocale) ? e.inheritLocale : !0;
	const f = s(t && i ? t.locale.value : O(e.locale) ? e.locale : ke),
		u = s(
			t && i
				? t.fallbackLocale.value
				: O(e.fallbackLocale) ||
						H(e.fallbackLocale) ||
						F(e.fallbackLocale) ||
						e.fallbackLocale === !1
					? e.fallbackLocale
					: f.value,
		),
		g = s(Nt(f.value, e)),
		N = s(F(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }),
		h = s(F(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
	let p = t
			? t.missingWarn
			: D(e.missingWarn) || Le(e.missingWarn)
				? e.missingWarn
				: !0,
		P = t
			? t.fallbackWarn
			: D(e.fallbackWarn) || Le(e.fallbackWarn)
				? e.fallbackWarn
				: !0,
		A = t ? t.fallbackRoot : D(e.fallbackRoot) ? e.fallbackRoot : !0,
		S = !!e.fallbackFormat,
		y = $(e.missing) ? e.missing : null,
		o = $(e.missing) ? Zt(e.missing) : null,
		E = $(e.postTranslation) ? e.postTranslation : null,
		I = t ? t.warnHtmlMessage : D(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
		m = !!e.escapeParameter;
	const T = t ? t.modifiers : F(e.modifiers) ? e.modifiers : {};
	let C = e.pluralRules || (t && t.pluralRules),
		b;
	(b = (() => {
		r && $t(null);
		const _ = {
			version: pa,
			locale: f.value,
			fallbackLocale: u.value,
			messages: g.value,
			modifiers: T,
			pluralRules: C,
			missing: o === null ? void 0 : o,
			missingWarn: p,
			fallbackWarn: P,
			fallbackFormat: S,
			unresolving: !0,
			postTranslation: E === null ? void 0 : E,
			warnHtmlMessage: I,
			escapeParameter: m,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" },
		};
		(_.datetimeFormats = N.value),
			(_.numberFormats = h.value),
			(_.__datetimeFormatters = F(b) ? b.__datetimeFormatters : void 0),
			(_.__numberFormatters = F(b) ? b.__numberFormatters : void 0);
		const L = sa(_);
		return r && $t(L), L;
	})()),
		Ne(b, f.value, u.value);
	function x() {
		return [f.value, u.value, g.value, N.value, h.value];
	}
	const J = Ie({
			get: () => f.value,
			set: (_) => {
				(b.locale = _), (f.value = _);
			},
		}),
		Z = Ie({
			get: () => u.value,
			set: (_) => {
				(b.fallbackLocale = _), (u.value = _), Ne(b, f.value, _);
			},
		}),
		Y = Ie(() => g.value),
		_e = Ie(() => N.value),
		xe = Ie(() => h.value);
	function He() {
		return $(E) ? E : null;
	}
	function Ye(_) {
		(E = _), (b.postTranslation = _);
	}
	function Ge() {
		return y;
	}
	function je(_) {
		_ !== null && (o = Zt(_)), (y = _), (b.missing = o);
	}
	const re = (_, L, U, G, ue, Fe) => {
		x();
		let Ee;
		try {
			__INTLIFY_PROD_DEVTOOLS__,
				r || (b.fallbackContext = t ? aa() : void 0),
				(Ee = _(b));
		} finally {
			__INTLIFY_PROD_DEVTOOLS__, r || (b.fallbackContext = void 0);
		}
		if (
			(U !== "translate exists" && j(Ee) && Ee === Ve) ||
			(U === "translate exists" && !Ee)
		) {
			const [Mn, Ga] = L();
			return t && A ? G(t) : ue(Mn);
		} else {
			if (Fe(Ee)) return Ee;
			throw q(B.UNEXPECTED_RETURN_TYPE);
		}
	};
	function Pe(..._) {
		return re(
			(L) => Reflect.apply(Xt, null, [L, ..._]),
			() => ot(..._),
			"translate",
			(L) => Reflect.apply(L.t, L, [..._]),
			(L) => L,
			(L) => O(L),
		);
	}
	function Se(..._) {
		const [L, U, G] = _;
		if (G && !v(G)) throw q(B.INVALID_ARGUMENT);
		return Pe(L, U, K({ resolvedMessage: !0 }, G || {}));
	}
	function Ke(..._) {
		return re(
			(L) => Reflect.apply(xt, null, [L, ..._]),
			() => ct(..._),
			"datetime format",
			(L) => Reflect.apply(L.d, L, [..._]),
			() => Ut,
			(L) => O(L) || H(L),
		);
	}
	function Xe(..._) {
		return re(
			(L) => Reflect.apply(Yt, null, [L, ..._]),
			() => it(..._),
			"number format",
			(L) => Reflect.apply(L.n, L, [..._]),
			() => Ut,
			(L) => O(L) || H(L),
		);
	}
	function Be(_) {
		return _.map((L) => (O(L) || j(L) || D(L) ? Bt(String(L)) : L));
	}
	const Je = { normalize: Be, interpolate: (_) => _, type: "vnode" };
	function qe(..._) {
		return re(
			(L) => {
				let U;
				const G = L;
				try {
					(G.processor = Je), (U = Reflect.apply(Xt, null, [G, ..._]));
				} finally {
					G.processor = null;
				}
				return U;
			},
			() => ot(..._),
			"translate",
			(L) => L[ut](..._),
			(L) => [Bt(L)],
			(L) => H(L),
		);
	}
	function Ae(..._) {
		return re(
			(L) => Reflect.apply(Yt, null, [L, ..._]),
			() => it(..._),
			"number format",
			(L) => L[_t](..._),
			qt,
			(L) => O(L) || H(L),
		);
	}
	function Qe(..._) {
		return re(
			(L) => Reflect.apply(xt, null, [L, ..._]),
			() => ct(..._),
			"datetime format",
			(L) => L[ft](..._),
			qt,
			(L) => O(L) || H(L),
		);
	}
	function Re(_) {
		(C = _), (b.pluralRules = C);
	}
	function Ze(_, L) {
		return re(
			() => {
				if (!_) return !1;
				const U = O(L) ? L : f.value,
					G = me(U),
					ue = b.messageResolver(G, _);
				return ne(ue) || Q(ue) || O(ue);
			},
			() => [_],
			"translate exists",
			(U) => Reflect.apply(U.te, U, [_, L]),
			Na,
			(U) => D(U),
		);
	}
	function ze(_) {
		let L = null;
		const U = hn(b, u.value, f.value);
		for (let G = 0; G < U.length; G++) {
			const ue = g.value[U[G]] || {},
				Fe = b.messageResolver(ue, _);
			if (Fe != null) {
				L = Fe;
				break;
			}
		}
		return L;
	}
	function he(_) {
		const L = ze(_);
		return L ?? (t ? t.tm(_) || {} : {});
	}
	function me(_) {
		return g.value[_] || {};
	}
	function de(_, L) {
		if (a) {
			const U = { [_]: L };
			for (const G in U) z(U, G) && ye(U[G]);
			L = U[_];
		}
		(g.value[_] = L), (b.messages = g.value);
	}
	function pe(_, L) {
		g.value[_] = g.value[_] || {};
		const U = { [_]: L };
		if (a) for (const G in U) z(U, G) && ye(U[G]);
		(L = U[_]), we(L, g.value[_]), (b.messages = g.value);
	}
	function et(_) {
		return N.value[_] || {};
	}
	function l(_, L) {
		(N.value[_] = L), (b.datetimeFormats = N.value), Ht(b, _, L);
	}
	function c(_, L) {
		(N.value[_] = K(N.value[_] || {}, L)),
			(b.datetimeFormats = N.value),
			Ht(b, _, L);
	}
	function d(_) {
		return h.value[_] || {};
	}
	function k(_, L) {
		(h.value[_] = L), (b.numberFormats = h.value), Gt(b, _, L);
	}
	function V(_, L) {
		(h.value[_] = K(h.value[_] || {}, L)),
			(b.numberFormats = h.value),
			Gt(b, _, L);
	}
	Qt++,
		t &&
			Ue &&
			(at(t.locale, (_) => {
				i && ((f.value = _), (b.locale = _), Ne(b, f.value, u.value));
			}),
			at(t.fallbackLocale, (_) => {
				i && ((u.value = _), (b.fallbackLocale = _), Ne(b, f.value, u.value));
			}));
	const R = {
		id: Qt,
		locale: J,
		fallbackLocale: Z,
		get inheritLocale() {
			return i;
		},
		set inheritLocale(_) {
			(i = _),
				_ &&
					t &&
					((f.value = t.locale.value),
					(u.value = t.fallbackLocale.value),
					Ne(b, f.value, u.value));
		},
		get availableLocales() {
			return Object.keys(g.value).sort();
		},
		messages: Y,
		get modifiers() {
			return T;
		},
		get pluralRules() {
			return C || {};
		},
		get isGlobal() {
			return r;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(_) {
			(p = _), (b.missingWarn = p);
		},
		get fallbackWarn() {
			return P;
		},
		set fallbackWarn(_) {
			(P = _), (b.fallbackWarn = P);
		},
		get fallbackRoot() {
			return A;
		},
		set fallbackRoot(_) {
			A = _;
		},
		get fallbackFormat() {
			return S;
		},
		set fallbackFormat(_) {
			(S = _), (b.fallbackFormat = S);
		},
		get warnHtmlMessage() {
			return I;
		},
		set warnHtmlMessage(_) {
			(I = _), (b.warnHtmlMessage = _);
		},
		get escapeParameter() {
			return m;
		},
		set escapeParameter(_) {
			(m = _), (b.escapeParameter = _);
		},
		t: Pe,
		getLocaleMessage: me,
		setLocaleMessage: de,
		mergeLocaleMessage: pe,
		getPostTranslationHandler: He,
		setPostTranslationHandler: Ye,
		getMissingHandler: Ge,
		setMissingHandler: je,
		[Sn]: Re,
	};
	return (
		(R.datetimeFormats = _e),
		(R.numberFormats = xe),
		(R.rt = Se),
		(R.te = Ze),
		(R.tm = he),
		(R.d = Ke),
		(R.n = Xe),
		(R.getDateTimeFormat = et),
		(R.setDateTimeFormat = l),
		(R.mergeDateTimeFormat = c),
		(R.getNumberFormat = d),
		(R.setNumberFormat = k),
		(R.mergeNumberFormat = V),
		(R[An] = n),
		(R[ut] = qe),
		(R[ft] = Qe),
		(R[_t] = Ae),
		R
	);
}
function Oa(e) {
	const t = O(e.locale) ? e.locale : ke,
		n =
			O(e.fallbackLocale) ||
			H(e.fallbackLocale) ||
			F(e.fallbackLocale) ||
			e.fallbackLocale === !1
				? e.fallbackLocale
				: t,
		r = $(e.missing) ? e.missing : void 0,
		a =
			D(e.silentTranslationWarn) || Le(e.silentTranslationWarn)
				? !e.silentTranslationWarn
				: !0,
		s =
			D(e.silentFallbackWarn) || Le(e.silentFallbackWarn)
				? !e.silentFallbackWarn
				: !0,
		i = D(e.fallbackRoot) ? e.fallbackRoot : !0,
		f = !!e.formatFallbackMessages,
		u = F(e.modifiers) ? e.modifiers : {},
		g = e.pluralizationRules,
		N = $(e.postTranslation) ? e.postTranslation : void 0,
		h = O(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
		p = !!e.escapeParameterHtml,
		P = D(e.sync) ? e.sync : !0;
	let A = e.messages;
	if (F(e.sharedMessages)) {
		const T = e.sharedMessages;
		A = Object.keys(T).reduce((b, W) => {
			const x = b[W] || (b[W] = {});
			return K(x, T[W]), b;
		}, A || {});
	}
	const { __i18n: S, __root: y, __injectWithOption: o } = e,
		E = e.datetimeFormats,
		I = e.numberFormats,
		m = e.flatJson;
	return {
		locale: t,
		fallbackLocale: n,
		messages: A,
		flatJson: m,
		datetimeFormats: E,
		numberFormats: I,
		missing: r,
		missingWarn: a,
		fallbackWarn: s,
		fallbackRoot: i,
		fallbackFormat: f,
		modifiers: u,
		pluralRules: g,
		postTranslation: N,
		warnHtmlMessage: h,
		escapeParameter: p,
		messageResolver: e.messageResolver,
		inheritLocale: P,
		__i18n: S,
		__root: y,
		__injectWithOption: o,
	};
}
function dt(e = {}) {
	const t = Tt(Oa(e)),
		{ __extender: n } = e,
		r = {
			id: t.id,
			get locale() {
				return t.locale.value;
			},
			set locale(a) {
				t.locale.value = a;
			},
			get fallbackLocale() {
				return t.fallbackLocale.value;
			},
			set fallbackLocale(a) {
				t.fallbackLocale.value = a;
			},
			get messages() {
				return t.messages.value;
			},
			get datetimeFormats() {
				return t.datetimeFormats.value;
			},
			get numberFormats() {
				return t.numberFormats.value;
			},
			get availableLocales() {
				return t.availableLocales;
			},
			get missing() {
				return t.getMissingHandler();
			},
			set missing(a) {
				t.setMissingHandler(a);
			},
			get silentTranslationWarn() {
				return D(t.missingWarn) ? !t.missingWarn : t.missingWarn;
			},
			set silentTranslationWarn(a) {
				t.missingWarn = D(a) ? !a : a;
			},
			get silentFallbackWarn() {
				return D(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
			},
			set silentFallbackWarn(a) {
				t.fallbackWarn = D(a) ? !a : a;
			},
			get modifiers() {
				return t.modifiers;
			},
			get formatFallbackMessages() {
				return t.fallbackFormat;
			},
			set formatFallbackMessages(a) {
				t.fallbackFormat = a;
			},
			get postTranslation() {
				return t.getPostTranslationHandler();
			},
			set postTranslation(a) {
				t.setPostTranslationHandler(a);
			},
			get sync() {
				return t.inheritLocale;
			},
			set sync(a) {
				t.inheritLocale = a;
			},
			get warnHtmlInMessage() {
				return t.warnHtmlMessage ? "warn" : "off";
			},
			set warnHtmlInMessage(a) {
				t.warnHtmlMessage = a !== "off";
			},
			get escapeParameterHtml() {
				return t.escapeParameter;
			},
			set escapeParameterHtml(a) {
				t.escapeParameter = a;
			},
			get pluralizationRules() {
				return t.pluralRules || {};
			},
			__composer: t,
			t(...a) {
				return Reflect.apply(t.t, t, [...a]);
			},
			rt(...a) {
				return Reflect.apply(t.rt, t, [...a]);
			},
			te(a, s) {
				return t.te(a, s);
			},
			tm(a) {
				return t.tm(a);
			},
			getLocaleMessage(a) {
				return t.getLocaleMessage(a);
			},
			setLocaleMessage(a, s) {
				t.setLocaleMessage(a, s);
			},
			mergeLocaleMessage(a, s) {
				t.mergeLocaleMessage(a, s);
			},
			d(...a) {
				return Reflect.apply(t.d, t, [...a]);
			},
			getDateTimeFormat(a) {
				return t.getDateTimeFormat(a);
			},
			setDateTimeFormat(a, s) {
				t.setDateTimeFormat(a, s);
			},
			mergeDateTimeFormat(a, s) {
				t.mergeDateTimeFormat(a, s);
			},
			n(...a) {
				return Reflect.apply(t.n, t, [...a]);
			},
			getNumberFormat(a) {
				return t.getNumberFormat(a);
			},
			setNumberFormat(a, s) {
				t.setNumberFormat(a, s);
			},
			mergeNumberFormat(a, s) {
				t.mergeNumberFormat(a, s);
			},
		};
	return (r.__extender = n), r;
}
function Ca(e, t, n) {
	return {
		beforeCreate() {
			const r = Te();
			if (!r) throw q(B.UNEXPECTED_ERROR);
			const a = this.$options;
			if (a.i18n) {
				const s = a.i18n;
				if (
					(a.__i18n && (s.__i18n = a.__i18n),
					(s.__root = t),
					this === this.$root)
				)
					this.$i18n = zt(e, s);
				else {
					(s.__injectWithOption = !0),
						(s.__extender = n.__vueI18nExtend),
						(this.$i18n = dt(s));
					const i = this.$i18n;
					i.__extender && (i.__disposer = i.__extender(this.$i18n));
				}
			} else if (a.__i18n)
				if (this === this.$root) this.$i18n = zt(e, a);
				else {
					this.$i18n = dt({
						__i18n: a.__i18n,
						__injectWithOption: !0,
						__extender: n.__vueI18nExtend,
						__root: t,
					});
					const s = this.$i18n;
					s.__extender && (s.__disposer = s.__extender(this.$i18n));
				}
			else this.$i18n = e;
			a.__i18nGlobal && Fn(t, a, a),
				(this.$t = (...s) => this.$i18n.t(...s)),
				(this.$rt = (...s) => this.$i18n.rt(...s)),
				(this.$te = (s, i) => this.$i18n.te(s, i)),
				(this.$d = (...s) => this.$i18n.d(...s)),
				(this.$n = (...s) => this.$i18n.n(...s)),
				(this.$tm = (s) => this.$i18n.tm(s)),
				n.__setInstance(r, this.$i18n);
		},
		mounted() {},
		unmounted() {
			const r = Te();
			if (!r) throw q(B.UNEXPECTED_ERROR);
			const a = this.$i18n;
			delete this.$t,
				delete this.$rt,
				delete this.$te,
				delete this.$d,
				delete this.$n,
				delete this.$tm,
				a.__disposer &&
					(a.__disposer(), delete a.__disposer, delete a.__extender),
				n.__deleteInstance(r),
				delete this.$i18n;
		},
	};
}
function zt(e, t) {
	(e.locale = t.locale || e.locale),
		(e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
		(e.missing = t.missing || e.missing),
		(e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
		(e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
		(e.formatFallbackMessages =
			t.formatFallbackMessages || e.formatFallbackMessages),
		(e.postTranslation = t.postTranslation || e.postTranslation),
		(e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
		(e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
		(e.sync = t.sync || e.sync),
		e.__composer[Sn](t.pluralizationRules || e.pluralizationRules);
	const n = Nt(e.locale, { messages: t.messages, __i18n: t.__i18n });
	return (
		Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])),
		t.datetimeFormats &&
			Object.keys(t.datetimeFormats).forEach((r) =>
				e.mergeDateTimeFormat(r, t.datetimeFormats[r]),
			),
		t.numberFormats &&
			Object.keys(t.numberFormats).forEach((r) =>
				e.mergeNumberFormat(r, t.numberFormats[r]),
			),
		e
	);
}
const Ot = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent",
	},
	i18n: { type: Object },
};
function ka({ slots: e }, t) {
	return t.length === 1 && t[0] === "default"
		? (e.default ? e.default() : []).reduce(
				(r, a) => [...r, ...(a.type === cn ? a.children : [a])],
				[],
			)
		: t.reduce((n, r) => {
				const a = e[r];
				return a && (n[r] = a()), n;
			}, w());
}
function Dn() {
	return cn;
}
const ya = Et({
		name: "i18n-t",
		props: K(
			{
				keypath: { type: String, required: !0 },
				plural: { type: [Number, String], validator: (e) => j(e) || !isNaN(e) },
			},
			Ot,
		),
		setup(e, t) {
			const { slots: n, attrs: r } = t,
				a = e.i18n || Ct({ useScope: e.scope, __useComponent: !0 });
			return () => {
				const s = Object.keys(n).filter((h) => h[0] !== "_"),
					i = w();
				e.locale && (i.locale = e.locale),
					e.plural !== void 0 &&
						(i.plural = O(e.plural) ? +e.plural : e.plural);
				const f = ka(t, s),
					u = a[ut](e.keypath, f, i),
					g = K(w(), r),
					N = O(e.tag) || v(e.tag) ? e.tag : Dn();
				return ln(N, g, u);
			};
		},
	}),
	en = ya;
function Pa(e) {
	return H(e) && !O(e[0]);
}
function vn(e, t, n, r) {
	const { slots: a, attrs: s } = t;
	return () => {
		const i = { part: !0 };
		let f = w();
		e.locale && (i.locale = e.locale),
			O(e.format)
				? (i.key = e.format)
				: v(e.format) &&
					(O(e.format.key) && (i.key = e.format.key),
					(f = Object.keys(e.format).reduce(
						(p, P) => (n.includes(P) ? K(w(), p, { [P]: e.format[P] }) : p),
						w(),
					)));
		const u = r(e.value, i, f);
		let g = [i.key];
		H(u)
			? (g = u.map((p, P) => {
					const A = a[p.type],
						S = A ? A({ [p.type]: p.value, index: P, parts: u }) : [p.value];
					return Pa(S) && (S[0].key = `${p.type}-${P}`), S;
				}))
			: O(u) && (g = [u]);
		const N = K(w(), s),
			h = O(e.tag) || v(e.tag) ? e.tag : Dn();
		return ln(h, N, g);
	};
}
const Sa = Et({
		name: "i18n-n",
		props: K(
			{
				value: { type: Number, required: !0 },
				format: { type: [String, Object] },
			},
			Ot,
		),
		setup(e, t) {
			const n = e.i18n || Ct({ useScope: e.scope, __useComponent: !0 });
			return vn(e, t, kn, (...r) => n[_t](...r));
		},
	}),
	tn = Sa;
function Aa(e, t) {
	const n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		const r = n.__getInstance(t);
		return r != null ? r.__composer : e.global.__composer;
	}
}
function Ra(e) {
	const t = (i) => {
		const { instance: f, value: u } = i;
		if (!f || !f.$) throw q(B.UNEXPECTED_ERROR);
		const g = Aa(e, f.$),
			N = nn(u);
		return [Reflect.apply(g.t, g, [...rn(N)]), g];
	};
	return {
		created: (i, f) => {
			const [u, g] = t(f);
			Ue &&
				e.global === g &&
				(i.__i18nWatcher = at(g.locale, () => {
					f.instance && f.instance.$forceUpdate();
				})),
				(i.__composer = g),
				(i.textContent = u);
		},
		unmounted: (i) => {
			Ue &&
				i.__i18nWatcher &&
				(i.__i18nWatcher(), (i.__i18nWatcher = void 0), delete i.__i18nWatcher),
				i.__composer && ((i.__composer = void 0), delete i.__composer);
		},
		beforeUpdate: (i, { value: f }) => {
			if (i.__composer) {
				const u = i.__composer,
					g = nn(f);
				i.textContent = Reflect.apply(u.t, u, [...rn(g)]);
			}
		},
		getSSRProps: (i) => {
			const [f] = t(i);
			return { textContent: f };
		},
	};
}
function nn(e) {
	if (O(e)) return { path: e };
	if (F(e)) {
		if (!("path" in e)) throw q(B.REQUIRED_VALUE, "path");
		return e;
	} else throw q(B.INVALID_VALUE);
}
function rn(e) {
	const { path: t, locale: n, args: r, choice: a, plural: s } = e,
		i = {},
		f = r || {};
	return (
		O(n) && (i.locale = n),
		j(a) && (i.plural = a),
		j(s) && (i.plural = s),
		[t, f, i]
	);
}
function Fa(e, t, ...n) {
	const r = F(n[0]) ? n[0] : {};
	(D(r.globalInstall) ? r.globalInstall : !0) &&
		([en.name, "I18nT"].forEach((s) => e.component(s, en)),
		[tn.name, "I18nN"].forEach((s) => e.component(s, tn)),
		[sn.name, "I18nD"].forEach((s) => e.component(s, sn))),
		e.directive("t", Ra(t));
}
const Da = ce("global-vue-i18n");
function Ka(e = {}) {
	const t =
			__VUE_I18N_LEGACY_API__ && D(e.legacy)
				? e.legacy
				: __VUE_I18N_LEGACY_API__,
		n = D(e.globalInjection) ? e.globalInjection : !0,
		r = new Map(),
		[a, s] = va(e, t),
		i = ce("");
	function f(h) {
		return r.get(h) || null;
	}
	function u(h, p) {
		r.set(h, p);
	}
	function g(h) {
		r.delete(h);
	}
	const N = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
		},
		async install(h, ...p) {
			if (
				((h.__VUE_I18N_SYMBOL__ = i),
				h.provide(h.__VUE_I18N_SYMBOL__, N),
				F(p[0]))
			) {
				const S = p[0];
				(N.__composerExtend = S.__composerExtend),
					(N.__vueI18nExtend = S.__vueI18nExtend);
			}
			let P = null;
			!t && n && (P = Ha(h, N.global)),
				__VUE_I18N_FULL_INSTALL__ && Fa(h, N, ...p),
				__VUE_I18N_LEGACY_API__ && t && h.mixin(Ca(s, s.__composer, N));
			const A = h.unmount;
			h.unmount = () => {
				P && P(), N.dispose(), A();
			};
		},
		get global() {
			return s;
		},
		dispose() {
			a.stop();
		},
		__instances: r,
		__getInstance: f,
		__setInstance: u,
		__deleteInstance: g,
	};
	return N;
}
function Ct(e = {}) {
	const t = Te();
	if (t == null) throw q(B.MUST_BE_CALL_SETUP_TOP);
	if (
		!t.isCE &&
		t.appContext.app != null &&
		!t.appContext.app.__VUE_I18N_SYMBOL__
	)
		throw q(B.NOT_INSTALLED);
	const n = Ma(t),
		r = Ua(n),
		a = Rn(t),
		s = wa(e, a);
	if (s === "global") return Fn(r, e, a), r;
	if (s === "parent") {
		let u = Wa(n, t, e.__useComponent);
		return u == null && (u = r), u;
	}
	const i = n;
	let f = i.__getInstance(t);
	if (f == null) {
		const u = K({}, e);
		"__i18n" in a && (u.__i18n = a.__i18n),
			r && (u.__root = r),
			(f = Tt(u)),
			i.__composerExtend && (f[mt] = i.__composerExtend(f)),
			Va(i, t, f),
			i.__setInstance(t, f);
	}
	return f;
}
function va(e, t) {
	const n = $n(),
		r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => dt(e)) : n.run(() => Tt(e));
	if (r == null) throw q(B.UNEXPECTED_ERROR);
	return [n, r];
}
function Ma(e) {
	const t = wn(e.isCE ? Da : e.appContext.app.__VUE_I18N_SYMBOL__);
	if (!t) throw q(e.isCE ? B.NOT_INSTALLED_WITH_PROVIDE : B.UNEXPECTED_ERROR);
	return t;
}
function wa(e, t) {
	return We(e)
		? "__i18n" in t
			? "local"
			: "global"
		: e.useScope
			? e.useScope
			: "local";
}
function Ua(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Wa(e, t, n = !1) {
	let r = null;
	const a = t.root;
	let s = $a(t, n);
	for (; s != null; ) {
		const i = e;
		if (e.mode === "composition") r = i.__getInstance(s);
		else if (__VUE_I18N_LEGACY_API__) {
			const f = i.__getInstance(s);
			f != null && ((r = f.__composer), n && r && !r[An] && (r = null));
		}
		if (r != null || a === s) break;
		s = s.parent;
	}
	return r;
}
function $a(e, t = !1) {
	return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function Va(e, t, n) {
	Un(() => {}, t),
		Wn(() => {
			const r = n;
			e.__deleteInstance(t);
			const a = r[mt];
			a && (a(), delete r[mt]);
		}, t);
}
const xa = ["locale", "fallbackLocale", "availableLocales"],
	an = ["t", "rt", "d", "n", "tm", "te"];
function Ha(e, t) {
	const n = Object.create(null);
	return (
		xa.forEach((a) => {
			const s = Object.getOwnPropertyDescriptor(t, a);
			if (!s) throw q(B.UNEXPECTED_ERROR);
			const i = Hn(s.value)
				? {
						get() {
							return s.value.value;
						},
						set(f) {
							s.value.value = f;
						},
					}
				: {
						get() {
							return s.get && s.get();
						},
					};
			Object.defineProperty(n, a, i);
		}),
		(e.config.globalProperties.$i18n = n),
		an.forEach((a) => {
			const s = Object.getOwnPropertyDescriptor(t, a);
			if (!s || !s.value) throw q(B.UNEXPECTED_ERROR);
			Object.defineProperty(e.config.globalProperties, `$${a}`, s);
		}),
		() => {
			delete e.config.globalProperties.$i18n,
				an.forEach((a) => {
					delete e.config.globalProperties[`$${a}`];
				});
		}
	);
}
const Ya = Et({
		name: "i18n-d",
		props: K(
			{
				value: { type: [Number, Date], required: !0 },
				format: { type: [String, Object] },
			},
			Ot,
		),
		setup(e, t) {
			const n = e.i18n || Ct({ useScope: e.scope, __useComponent: !0 });
			return vn(e, t, Cn, (...r) => n[ft](...r));
		},
	}),
	sn = Ya;
Ia();
zr(vr);
ea(qr);
ta(hn);
if (__INTLIFY_PROD_DEVTOOLS__) {
	const e = fe();
	(e.__INTLIFY__ = !0), Mr(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
export { Ka as c, Ct as u };
