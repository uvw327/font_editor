import { u as ye } from "./vue-i18n.a5d54a73.js";
import { a as hc } from "./_commonjsHelpers.23102255.js";
import { B as Oo, p as Is, h as Us } from "./pathUtils.eaad3f61.js";
import {
	v as Me,
	w as Nt,
	e as qt,
	c as gc,
} from "./runtime-dom.esm-bundler.270ff2dc.js";
import {
	_ as Le,
	r as H,
	a8 as pe,
	a9 as Gt,
	o as O,
	c as L,
	a as g,
	t as w,
	w as Oe,
	n as We,
	d as he,
	ab as D,
	q as an,
	f as bt,
	l as Ce,
	m as ut,
	ad as Mo,
	p as Ye,
	j as Ze,
	b as Ge,
	h as mc,
	F as De,
	e as jt,
	g as ho,
	ac as Zn,
	an as yc,
	k as vc,
	ak as bc,
	ao as xc,
} from "./_plugin-vue_export-helper.0519c48a.js";
import { N as Sc } from "./Notification.521d3b70.js";
import { u as Ps } from "./index.4e4f2876.js";
import { S as _c } from "./SvgPathEditor.f969fac2.js";
import { _ as kc } from "./preload-helper.cf010ec4.js";
import { M as fa } from "./dialog_new.97ae782c.js";
import {
	i as Fc,
	f as Er,
	F as As,
} from "./index.e05af36c.js"; /* empty css                              */ /* empty css                           */
var pa = { exports: {} },
	ha = Object,
	wc = Error,
	Tc = EvalError,
	Cc = RangeError,
	Ec = ReferenceError,
	ga = SyntaxError,
	ft = TypeError,
	Oc = URIError,
	Mc = Math.abs,
	Ic = Math.floor,
	Uc = Math.max,
	Pc = Math.min,
	Ac = Math.pow,
	Dc = Math.round,
	Lc =
		Number.isNaN ||
		function (t) {
			return t !== t;
		},
	Rc = Lc,
	Bc = function (t) {
		return Rc(t) || t === 0 ? t : t < 0 ? -1 : 1;
	},
	Nc = Object.getOwnPropertyDescriptor,
	zn = Nc;
if (zn)
	try {
		zn([], "length");
	} catch {
		zn = null;
	}
var ir = zn,
	$n = Object.defineProperty || !1;
if ($n)
	try {
		$n({}, "a", { value: 1 });
	} catch {
		$n = !1;
	}
var ar = $n,
	Or,
	Ds;
function ma() {
	return (
		Ds ||
			((Ds = 1),
			(Or = function () {
				if (
					typeof Symbol != "function" ||
					typeof Object.getOwnPropertySymbols != "function"
				)
					return !1;
				if (typeof Symbol.iterator == "symbol") return !0;
				var t = {},
					r = Symbol("test"),
					n = Object(r);
				if (
					typeof r == "string" ||
					Object.prototype.toString.call(r) !== "[object Symbol]" ||
					Object.prototype.toString.call(n) !== "[object Symbol]"
				)
					return !1;
				var o = 42;
				t[r] = o;
				for (var s in t) return !1;
				if (
					(typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
					(typeof Object.getOwnPropertyNames == "function" &&
						Object.getOwnPropertyNames(t).length !== 0)
				)
					return !1;
				var i = Object.getOwnPropertySymbols(t);
				if (
					i.length !== 1 ||
					i[0] !== r ||
					!Object.prototype.propertyIsEnumerable.call(t, r)
				)
					return !1;
				if (typeof Object.getOwnPropertyDescriptor == "function") {
					var a = Object.getOwnPropertyDescriptor(t, r);
					if (a.value !== o || a.enumerable !== !0) return !1;
				}
				return !0;
			})),
		Or
	);
}
var Mr, Ls;
function ya() {
	if (Ls) return Mr;
	Ls = 1;
	var e = typeof Symbol < "u" && Symbol,
		t = ma();
	return (
		(Mr = function () {
			return typeof e != "function" ||
				typeof Symbol != "function" ||
				typeof e("foo") != "symbol" ||
				typeof Symbol("bar") != "symbol"
				? !1
				: t();
		}),
		Mr
	);
}
var Ir, Rs;
function va() {
	return (
		Rs ||
			((Rs = 1),
			(Ir = (typeof Reflect < "u" && Reflect.getPrototypeOf) || null)),
		Ir
	);
}
var Ur, Bs;
function ba() {
	if (Bs) return Ur;
	Bs = 1;
	var e = ha;
	return (Ur = e.getPrototypeOf || null), Ur;
}
var Gc = "Function.prototype.bind called on incompatible ",
	jc = Object.prototype.toString,
	Hc = Math.max,
	Wc = "[object Function]",
	Ns = function (t, r) {
		for (var n = [], o = 0; o < t.length; o += 1) n[o] = t[o];
		for (var s = 0; s < r.length; s += 1) n[s + t.length] = r[s];
		return n;
	},
	zc = function (t, r) {
		for (var n = [], o = r || 0, s = 0; o < t.length; o += 1, s += 1)
			n[s] = t[o];
		return n;
	},
	$c = function (e, t) {
		for (var r = "", n = 0; n < e.length; n += 1)
			(r += e[n]), n + 1 < e.length && (r += t);
		return r;
	},
	Vc = function (t) {
		var r = this;
		if (typeof r != "function" || jc.apply(r) !== Wc)
			throw new TypeError(Gc + r);
		for (
			var n = zc(arguments, 1),
				o,
				s = function () {
					if (this instanceof o) {
						var d = r.apply(this, Ns(n, arguments));
						return Object(d) === d ? d : this;
					}
					return r.apply(t, Ns(n, arguments));
				},
				i = Hc(0, r.length - n.length),
				a = [],
				l = 0;
			l < i;
			l++
		)
			a[l] = "$" + l;
		if (
			((o = Function(
				"binder",
				"return function (" +
					$c(a, ",") +
					"){ return binder.apply(this,arguments); }",
			)(s)),
			r.prototype)
		) {
			var u = function () {};
			(u.prototype = r.prototype),
				(o.prototype = new u()),
				(u.prototype = null);
		}
		return o;
	},
	qc = Vc,
	pn = Function.prototype.bind || qc,
	Io = Function.prototype.call,
	Uo = Function.prototype.apply,
	Xc = typeof Reflect < "u" && Reflect && Reflect.apply,
	Yc = pn,
	Zc = Uo,
	Kc = Io,
	Jc = Xc,
	xa = Jc || Yc.call(Kc, Zc),
	Qc = pn,
	eu = ft,
	tu = Io,
	nu = xa,
	Sa = function (t) {
		if (t.length < 1 || typeof t[0] != "function")
			throw new eu("a function is required");
		return nu(Qc, tu, t);
	},
	Pr,
	Gs;
function ru() {
	if (Gs) return Pr;
	Gs = 1;
	var e = Sa,
		t = ir,
		r;
	try {
		r = [].__proto__ === Array.prototype;
	} catch (i) {
		if (
			!i ||
			typeof i != "object" ||
			!("code" in i) ||
			i.code !== "ERR_PROTO_ACCESS"
		)
			throw i;
	}
	var n = !!r && t && t(Object.prototype, "__proto__"),
		o = Object,
		s = o.getPrototypeOf;
	return (
		(Pr =
			n && typeof n.get == "function"
				? e([n.get])
				: typeof s == "function"
					? function (a) {
							return s(a == null ? a : o(a));
						}
					: !1),
		Pr
	);
}
var Ar, js;
function ou() {
	if (js) return Ar;
	js = 1;
	var e = va(),
		t = ba(),
		r = ru();
	return (
		(Ar = e
			? function (o) {
					return e(o);
				}
			: t
				? function (o) {
						if (!o || (typeof o != "object" && typeof o != "function"))
							throw new TypeError("getProto: not an object");
						return t(o);
					}
				: r
					? function (o) {
							return r(o);
						}
					: null),
		Ar
	);
}
var Dr, Hs;
function su() {
	if (Hs) return Dr;
	Hs = 1;
	var e = Function.prototype.call,
		t = Object.prototype.hasOwnProperty,
		r = pn;
	return (Dr = r.call(e, t)), Dr;
}
var ce,
	iu = ha,
	au = wc,
	lu = Tc,
	cu = Cc,
	uu = Ec,
	Kt = ga,
	Xt = ft,
	du = Oc,
	fu = Mc,
	pu = Ic,
	hu = Uc,
	gu = Pc,
	mu = Ac,
	yu = Dc,
	vu = Bc,
	_a = Function,
	Lr = function (e) {
		try {
			return _a('"use strict"; return (' + e + ").constructor;")();
		} catch {}
	},
	ln = ir,
	bu = ar,
	Rr = function () {
		throw new Xt();
	},
	xu = ln
		? (function () {
				try {
					return arguments.callee, Rr;
				} catch {
					try {
						return ln(arguments, "callee").get;
					} catch {
						return Rr;
					}
				}
			})()
		: Rr,
	zt = ya()(),
	Ie = ou(),
	Su = ba(),
	_u = va(),
	ka = Uo,
	hn = Io,
	Vt = {},
	ku = typeof Uint8Array > "u" || !Ie ? ce : Ie(Uint8Array),
	Bt = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? ce : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? ce : ArrayBuffer,
		"%ArrayIteratorPrototype%": zt && Ie ? Ie([][Symbol.iterator]()) : ce,
		"%AsyncFromSyncIteratorPrototype%": ce,
		"%AsyncFunction%": Vt,
		"%AsyncGenerator%": Vt,
		"%AsyncGeneratorFunction%": Vt,
		"%AsyncIteratorPrototype%": Vt,
		"%Atomics%": typeof Atomics > "u" ? ce : Atomics,
		"%BigInt%": typeof BigInt > "u" ? ce : BigInt,
		"%BigInt64Array%": typeof BigInt64Array > "u" ? ce : BigInt64Array,
		"%BigUint64Array%": typeof BigUint64Array > "u" ? ce : BigUint64Array,
		"%Boolean%": Boolean,
		"%DataView%": typeof DataView > "u" ? ce : DataView,
		"%Date%": Date,
		"%decodeURI%": decodeURI,
		"%decodeURIComponent%": decodeURIComponent,
		"%encodeURI%": encodeURI,
		"%encodeURIComponent%": encodeURIComponent,
		"%Error%": au,
		"%eval%": eval,
		"%EvalError%": lu,
		"%Float16Array%": typeof Float16Array > "u" ? ce : Float16Array,
		"%Float32Array%": typeof Float32Array > "u" ? ce : Float32Array,
		"%Float64Array%": typeof Float64Array > "u" ? ce : Float64Array,
		"%FinalizationRegistry%":
			typeof FinalizationRegistry > "u" ? ce : FinalizationRegistry,
		"%Function%": _a,
		"%GeneratorFunction%": Vt,
		"%Int8Array%": typeof Int8Array > "u" ? ce : Int8Array,
		"%Int16Array%": typeof Int16Array > "u" ? ce : Int16Array,
		"%Int32Array%": typeof Int32Array > "u" ? ce : Int32Array,
		"%isFinite%": isFinite,
		"%isNaN%": isNaN,
		"%IteratorPrototype%": zt && Ie ? Ie(Ie([][Symbol.iterator]())) : ce,
		"%JSON%": typeof JSON == "object" ? JSON : ce,
		"%Map%": typeof Map > "u" ? ce : Map,
		"%MapIteratorPrototype%":
			typeof Map > "u" || !zt || !Ie ? ce : Ie(new Map()[Symbol.iterator]()),
		"%Math%": Math,
		"%Number%": Number,
		"%Object%": iu,
		"%Object.getOwnPropertyDescriptor%": ln,
		"%parseFloat%": parseFloat,
		"%parseInt%": parseInt,
		"%Promise%": typeof Promise > "u" ? ce : Promise,
		"%Proxy%": typeof Proxy > "u" ? ce : Proxy,
		"%RangeError%": cu,
		"%ReferenceError%": uu,
		"%Reflect%": typeof Reflect > "u" ? ce : Reflect,
		"%RegExp%": RegExp,
		"%Set%": typeof Set > "u" ? ce : Set,
		"%SetIteratorPrototype%":
			typeof Set > "u" || !zt || !Ie ? ce : Ie(new Set()[Symbol.iterator]()),
		"%SharedArrayBuffer%":
			typeof SharedArrayBuffer > "u" ? ce : SharedArrayBuffer,
		"%String%": String,
		"%StringIteratorPrototype%": zt && Ie ? Ie(""[Symbol.iterator]()) : ce,
		"%Symbol%": zt ? Symbol : ce,
		"%SyntaxError%": Kt,
		"%ThrowTypeError%": xu,
		"%TypedArray%": ku,
		"%TypeError%": Xt,
		"%Uint8Array%": typeof Uint8Array > "u" ? ce : Uint8Array,
		"%Uint8ClampedArray%":
			typeof Uint8ClampedArray > "u" ? ce : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? ce : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? ce : Uint32Array,
		"%URIError%": du,
		"%WeakMap%": typeof WeakMap > "u" ? ce : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? ce : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? ce : WeakSet,
		"%Function.prototype.call%": hn,
		"%Function.prototype.apply%": ka,
		"%Object.defineProperty%": bu,
		"%Object.getPrototypeOf%": Su,
		"%Math.abs%": fu,
		"%Math.floor%": pu,
		"%Math.max%": hu,
		"%Math.min%": gu,
		"%Math.pow%": mu,
		"%Math.round%": yu,
		"%Math.sign%": vu,
		"%Reflect.getPrototypeOf%": _u,
	};
if (Ie)
	try {
		null.error;
	} catch (e) {
		var Fu = Ie(Ie(e));
		Bt["%Error.prototype%"] = Fu;
	}
var wu = function e(t) {
		var r;
		if (t === "%AsyncFunction%") r = Lr("async function () {}");
		else if (t === "%GeneratorFunction%") r = Lr("function* () {}");
		else if (t === "%AsyncGeneratorFunction%") r = Lr("async function* () {}");
		else if (t === "%AsyncGenerator%") {
			var n = e("%AsyncGeneratorFunction%");
			n && (r = n.prototype);
		} else if (t === "%AsyncIteratorPrototype%") {
			var o = e("%AsyncGenerator%");
			o && Ie && (r = Ie(o.prototype));
		}
		return (Bt[t] = r), r;
	},
	Ws = {
		__proto__: null,
		"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
		"%ArrayPrototype%": ["Array", "prototype"],
		"%ArrayProto_entries%": ["Array", "prototype", "entries"],
		"%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
		"%ArrayProto_keys%": ["Array", "prototype", "keys"],
		"%ArrayProto_values%": ["Array", "prototype", "values"],
		"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
		"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
		"%AsyncGeneratorPrototype%": [
			"AsyncGeneratorFunction",
			"prototype",
			"prototype",
		],
		"%BooleanPrototype%": ["Boolean", "prototype"],
		"%DataViewPrototype%": ["DataView", "prototype"],
		"%DatePrototype%": ["Date", "prototype"],
		"%ErrorPrototype%": ["Error", "prototype"],
		"%EvalErrorPrototype%": ["EvalError", "prototype"],
		"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
		"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
		"%FunctionPrototype%": ["Function", "prototype"],
		"%Generator%": ["GeneratorFunction", "prototype"],
		"%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
		"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
		"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
		"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
		"%JSONParse%": ["JSON", "parse"],
		"%JSONStringify%": ["JSON", "stringify"],
		"%MapPrototype%": ["Map", "prototype"],
		"%NumberPrototype%": ["Number", "prototype"],
		"%ObjectPrototype%": ["Object", "prototype"],
		"%ObjProto_toString%": ["Object", "prototype", "toString"],
		"%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
		"%PromisePrototype%": ["Promise", "prototype"],
		"%PromiseProto_then%": ["Promise", "prototype", "then"],
		"%Promise_all%": ["Promise", "all"],
		"%Promise_reject%": ["Promise", "reject"],
		"%Promise_resolve%": ["Promise", "resolve"],
		"%RangeErrorPrototype%": ["RangeError", "prototype"],
		"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
		"%RegExpPrototype%": ["RegExp", "prototype"],
		"%SetPrototype%": ["Set", "prototype"],
		"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
		"%StringPrototype%": ["String", "prototype"],
		"%SymbolPrototype%": ["Symbol", "prototype"],
		"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
		"%TypedArrayPrototype%": ["TypedArray", "prototype"],
		"%TypeErrorPrototype%": ["TypeError", "prototype"],
		"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
		"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
		"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
		"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
		"%URIErrorPrototype%": ["URIError", "prototype"],
		"%WeakMapPrototype%": ["WeakMap", "prototype"],
		"%WeakSetPrototype%": ["WeakSet", "prototype"],
	},
	gn = pn,
	Kn = su(),
	Tu = gn.call(hn, Array.prototype.concat),
	Cu = gn.call(ka, Array.prototype.splice),
	zs = gn.call(hn, String.prototype.replace),
	Jn = gn.call(hn, String.prototype.slice),
	Eu = gn.call(hn, RegExp.prototype.exec),
	Ou =
		/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
	Mu = /\\(\\)?/g,
	Iu = function (t) {
		var r = Jn(t, 0, 1),
			n = Jn(t, -1);
		if (r === "%" && n !== "%")
			throw new Kt("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && r !== "%")
			throw new Kt("invalid intrinsic syntax, expected opening `%`");
		var o = [];
		return (
			zs(t, Ou, function (s, i, a, l) {
				o[o.length] = a ? zs(l, Mu, "$1") : i || s;
			}),
			o
		);
	},
	Uu = function (t, r) {
		var n = t,
			o;
		if ((Kn(Ws, n) && ((o = Ws[n]), (n = "%" + o[0] + "%")), Kn(Bt, n))) {
			var s = Bt[n];
			if ((s === Vt && (s = wu(n)), typeof s > "u" && !r))
				throw new Xt(
					"intrinsic " +
						t +
						" exists, but is not available. Please file an issue!",
				);
			return { alias: o, name: n, value: s };
		}
		throw new Kt("intrinsic " + t + " does not exist!");
	},
	mn = function (t, r) {
		if (typeof t != "string" || t.length === 0)
			throw new Xt("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof r != "boolean")
			throw new Xt('"allowMissing" argument must be a boolean');
		if (Eu(/^%?[^%]*%?$/, t) === null)
			throw new Kt(
				"`%` may not be present anywhere but at the beginning and end of the intrinsic name",
			);
		var n = Iu(t),
			o = n.length > 0 ? n[0] : "",
			s = Uu("%" + o + "%", r),
			i = s.name,
			a = s.value,
			l = !1,
			u = s.alias;
		u && ((o = u[0]), Cu(n, Tu([0, 1], u)));
		for (var d = 1, p = !0; d < n.length; d += 1) {
			var h = n[d],
				f = Jn(h, 0, 1),
				v = Jn(h, -1);
			if (
				(f === '"' ||
					f === "'" ||
					f === "`" ||
					v === '"' ||
					v === "'" ||
					v === "`") &&
				f !== v
			)
				throw new Kt("property names with quotes must have matching quotes");
			if (
				((h === "constructor" || !p) && (l = !0),
				(o += "." + h),
				(i = "%" + o + "%"),
				Kn(Bt, i))
			)
				a = Bt[i];
			else if (a != null) {
				if (!(h in a)) {
					if (!r)
						throw new Xt(
							"base intrinsic for " +
								t +
								" exists, but the property is not available.",
						);
					return;
				}
				if (ln && d + 1 >= n.length) {
					var S = ln(a, h);
					(p = !!S),
						p && "get" in S && !("originalValue" in S.get)
							? (a = S.get)
							: (a = a[h]);
				} else (p = Kn(a, h)), (a = a[h]);
				p && !l && (Bt[i] = a);
			}
		}
		return a;
	},
	$s = ar,
	Pu = ga,
	$t = ft,
	Vs = ir,
	Fa = function (t, r, n) {
		if (!t || (typeof t != "object" && typeof t != "function"))
			throw new $t("`obj` must be an object or a function`");
		if (typeof r != "string" && typeof r != "symbol")
			throw new $t("`property` must be a string or a symbol`");
		if (
			arguments.length > 3 &&
			typeof arguments[3] != "boolean" &&
			arguments[3] !== null
		)
			throw new $t("`nonEnumerable`, if provided, must be a boolean or null");
		if (
			arguments.length > 4 &&
			typeof arguments[4] != "boolean" &&
			arguments[4] !== null
		)
			throw new $t("`nonWritable`, if provided, must be a boolean or null");
		if (
			arguments.length > 5 &&
			typeof arguments[5] != "boolean" &&
			arguments[5] !== null
		)
			throw new $t("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] != "boolean")
			throw new $t("`loose`, if provided, must be a boolean");
		var o = arguments.length > 3 ? arguments[3] : null,
			s = arguments.length > 4 ? arguments[4] : null,
			i = arguments.length > 5 ? arguments[5] : null,
			a = arguments.length > 6 ? arguments[6] : !1,
			l = !!Vs && Vs(t, r);
		if ($s)
			$s(t, r, {
				configurable: i === null && l ? l.configurable : !i,
				enumerable: o === null && l ? l.enumerable : !o,
				value: n,
				writable: s === null && l ? l.writable : !s,
			});
		else if (a || (!o && !s && !i)) t[r] = n;
		else
			throw new Pu(
				"This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
			);
	},
	go = ar,
	wa = function () {
		return !!go;
	};
wa.hasArrayLengthDefineBug = function () {
	if (!go) return null;
	try {
		return go([], "length", { value: 1 }).length !== 1;
	} catch {
		return !0;
	}
};
var Ta = wa,
	Au = mn,
	qs = Fa,
	Du = Ta(),
	Xs = ir,
	Ys = ft,
	Lu = Au("%Math.floor%"),
	Ru = function (t, r) {
		if (typeof t != "function") throw new Ys("`fn` is not a function");
		if (typeof r != "number" || r < 0 || r > 4294967295 || Lu(r) !== r)
			throw new Ys("`length` must be a positive 32-bit integer");
		var n = arguments.length > 2 && !!arguments[2],
			o = !0,
			s = !0;
		if ("length" in t && Xs) {
			var i = Xs(t, "length");
			i && !i.configurable && (o = !1), i && !i.writable && (s = !1);
		}
		return (
			(o || s || !n) && (Du ? qs(t, "length", r, !0, !0) : qs(t, "length", r)),
			t
		);
	},
	Bu = pn,
	Nu = Uo,
	Gu = xa,
	ju = function () {
		return Gu(Bu, Nu, arguments);
	};
(function (e) {
	var t = Ru,
		r = ar,
		n = Sa,
		o = ju;
	(e.exports = function (i) {
		var a = n(arguments),
			l = i.length - (arguments.length - 1);
		return t(a, 1 + (l > 0 ? l : 0), !0);
	}),
		r ? r(e.exports, "apply", { value: o }) : (e.exports.apply = o);
})(pa);
var Po = pa.exports,
	Hu = Po,
	Zs = Object.prototype.toString,
	Ca = function (t) {
		var r = Zs.call(t),
			n = r === "[object Arguments]";
		return (
			n ||
				(n =
					r !== "[object Array]" &&
					t !== null &&
					typeof t == "object" &&
					typeof t.length == "number" &&
					t.length >= 0 &&
					Zs.call(t.callee) === "[object Function]"),
			n
		);
	},
	Br,
	Ks;
function Wu() {
	if (Ks) return Br;
	Ks = 1;
	var e;
	if (!Object.keys) {
		var t = Object.prototype.hasOwnProperty,
			r = Object.prototype.toString,
			n = Ca,
			o = Object.prototype.propertyIsEnumerable,
			s = !o.call({ toString: null }, "toString"),
			i = o.call(function () {}, "prototype"),
			a = [
				"toString",
				"toLocaleString",
				"valueOf",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"constructor",
			],
			l = function (h) {
				var f = h.constructor;
				return f && f.prototype === h;
			},
			u = {
				$applicationCache: !0,
				$console: !0,
				$external: !0,
				$frame: !0,
				$frameElement: !0,
				$frames: !0,
				$innerHeight: !0,
				$innerWidth: !0,
				$onmozfullscreenchange: !0,
				$onmozfullscreenerror: !0,
				$outerHeight: !0,
				$outerWidth: !0,
				$pageXOffset: !0,
				$pageYOffset: !0,
				$parent: !0,
				$scrollLeft: !0,
				$scrollTop: !0,
				$scrollX: !0,
				$scrollY: !0,
				$self: !0,
				$webkitIndexedDB: !0,
				$webkitStorageInfo: !0,
				$window: !0,
			},
			d = (function () {
				if (typeof window > "u") return !1;
				for (var h in window)
					try {
						if (
							!u["$" + h] &&
							t.call(window, h) &&
							window[h] !== null &&
							typeof window[h] == "object"
						)
							try {
								l(window[h]);
							} catch {
								return !0;
							}
					} catch {
						return !0;
					}
				return !1;
			})(),
			p = function (h) {
				if (typeof window > "u" || !d) return l(h);
				try {
					return l(h);
				} catch {
					return !1;
				}
			};
		e = function (f) {
			var v = f !== null && typeof f == "object",
				S = r.call(f) === "[object Function]",
				b = n(f),
				I = v && r.call(f) === "[object String]",
				P = [];
			if (!v && !S && !b)
				throw new TypeError("Object.keys called on a non-object");
			var M = i && S;
			if (I && f.length > 0 && !t.call(f, 0))
				for (var j = 0; j < f.length; ++j) P.push(String(j));
			if (b && f.length > 0)
				for (var re = 0; re < f.length; ++re) P.push(String(re));
			else
				for (var _ in f)
					!(M && _ === "prototype") && t.call(f, _) && P.push(String(_));
			if (s)
				for (var k = p(f), C = 0; C < a.length; ++C)
					!(k && a[C] === "constructor") && t.call(f, a[C]) && P.push(a[C]);
			return P;
		};
	}
	return (Br = e), Br;
}
var zu = Array.prototype.slice,
	$u = Ca,
	Js = Object.keys,
	Vn = Js
		? function (t) {
				return Js(t);
			}
		: Wu(),
	Qs = Object.keys;
Vn.shim = function () {
	if (Object.keys) {
		var t = (function () {
			var r = Object.keys(arguments);
			return r && r.length === arguments.length;
		})(1, 2);
		t ||
			(Object.keys = function (n) {
				return $u(n) ? Qs(zu.call(n)) : Qs(n);
			});
	} else Object.keys = Vn;
	return Object.keys || Vn;
};
var Vu = Vn,
	qu = Vu,
	Xu = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
	Yu = Object.prototype.toString,
	Zu = Array.prototype.concat,
	ei = Fa,
	Ku = function (e) {
		return typeof e == "function" && Yu.call(e) === "[object Function]";
	},
	Ea = Ta(),
	Ju = function (e, t, r, n) {
		if (t in e) {
			if (n === !0) {
				if (e[t] === r) return;
			} else if (!Ku(n) || !n()) return;
		}
		Ea ? ei(e, t, r, !0) : ei(e, t, r);
	},
	Oa = function (e, t) {
		var r = arguments.length > 2 ? arguments[2] : {},
			n = qu(t);
		Xu && (n = Zu.call(n, Object.getOwnPropertySymbols(t)));
		for (var o = 0; o < n.length; o += 1) Ju(e, n[o], t[n[o]], r[n[o]]);
	};
Oa.supportsDescriptors = !!Ea;
var lr = Oa,
	Ma = mn,
	Ia = Po,
	Qu = Ia(Ma("String.prototype.indexOf")),
	yn = function (t, r) {
		var n = Ma(t, !!r);
		return typeof n == "function" && Qu(t, ".prototype.") > -1 ? Ia(n) : n;
	},
	ed = ft,
	Ao = function (t) {
		if (t == null)
			throw new ed(
				(arguments.length > 0 && arguments[1]) || "Cannot call method on " + t,
			);
		return t;
	},
	td = Ao,
	nd = mn,
	rd = nd("%String%"),
	od = ft,
	Ua = function (t) {
		if (typeof t == "symbol")
			throw new od("Cannot convert a Symbol value to a string");
		return rd(t);
	},
	Nr,
	ti;
function sd() {
	return (
		ti ||
			((ti = 1),
			(Nr = function (t) {
				return t === null || (typeof t != "function" && typeof t != "object");
			})),
		Nr
	);
}
var Gr, ni;
function id() {
	return (
		ni ||
			((ni = 1),
			(Gr = function (t) {
				return t === null || (typeof t != "function" && typeof t != "object");
			})),
		Gr
	);
}
var jr, ri;
function ad() {
	if (ri) return jr;
	ri = 1;
	var e = Function.prototype.toString,
		t = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
		r,
		n;
	if (typeof t == "function" && typeof Object.defineProperty == "function")
		try {
			(r = Object.defineProperty({}, "length", {
				get: function () {
					throw n;
				},
			})),
				(n = {}),
				t(
					function () {
						throw 42;
					},
					null,
					r,
				);
		} catch (P) {
			P !== n && (t = null);
		}
	else t = null;
	var o = /^\s*class\b/,
		s = function (M) {
			try {
				var j = e.call(M);
				return o.test(j);
			} catch {
				return !1;
			}
		},
		i = function (M) {
			try {
				return s(M) ? !1 : (e.call(M), !0);
			} catch {
				return !1;
			}
		},
		a = Object.prototype.toString,
		l = "[object Object]",
		u = "[object Function]",
		d = "[object GeneratorFunction]",
		p = "[object HTMLAllCollection]",
		h = "[object HTML document.all class]",
		f = "[object HTMLCollection]",
		v = typeof Symbol == "function" && !!Symbol.toStringTag,
		S = !(0 in [,]),
		b = function () {
			return !1;
		};
	if (typeof document == "object") {
		var I = document.all;
		a.call(I) === a.call(document.all) &&
			(b = function (M) {
				if ((S || !M) && (typeof M > "u" || typeof M == "object"))
					try {
						var j = a.call(M);
						return (j === p || j === h || j === f || j === l) && M("") == null;
					} catch {}
				return !1;
			});
	}
	return (
		(jr = t
			? function (M) {
					if (b(M)) return !0;
					if (!M || (typeof M != "function" && typeof M != "object")) return !1;
					try {
						t(M, null, r);
					} catch (j) {
						if (j !== n) return !1;
					}
					return !s(M) && i(M);
				}
			: function (M) {
					if (b(M)) return !0;
					if (!M || (typeof M != "function" && typeof M != "object")) return !1;
					if (v) return i(M);
					if (s(M)) return !1;
					var j = a.call(M);
					return j !== u && j !== d && !/^\[object HTML/.test(j) ? !1 : i(M);
				}),
		jr
	);
}
var Hr, oi;
function Pa() {
	if (oi) return Hr;
	oi = 1;
	var e = ma();
	return (
		(Hr = function () {
			return e() && !!Symbol.toStringTag;
		}),
		Hr
	);
}
var Wr, si;
function ld() {
	if (si) return Wr;
	si = 1;
	var e = Date.prototype.getDay,
		t = function (i) {
			try {
				return e.call(i), !0;
			} catch {
				return !1;
			}
		},
		r = Object.prototype.toString,
		n = "[object Date]",
		o = Pa()();
	return (
		(Wr = function (i) {
			return typeof i != "object" || i === null
				? !1
				: o
					? t(i)
					: r.call(i) === n;
		}),
		Wr
	);
}
var Un = { exports: {} },
	ii;
function cd() {
	if (ii) return Un.exports;
	ii = 1;
	var e = Object.prototype.toString,
		t = ya()();
	if (t) {
		var r = Symbol.prototype.toString,
			n = /^Symbol\(.*\)$/,
			o = function (i) {
				return typeof i.valueOf() != "symbol" ? !1 : n.test(r.call(i));
			};
		Un.exports = function (i) {
			if (typeof i == "symbol") return !0;
			if (e.call(i) !== "[object Symbol]") return !1;
			try {
				return o(i);
			} catch {
				return !1;
			}
		};
	} else
		Un.exports = function (i) {
			return !1;
		};
	return Un.exports;
}
var zr, ai;
function ud() {
	if (ai) return zr;
	ai = 1;
	var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol",
		t = id(),
		r = ad(),
		n = ld(),
		o = cd(),
		s = function (l, u) {
			if (typeof l > "u" || l === null)
				throw new TypeError("Cannot call method on " + l);
			if (typeof u != "string" || (u !== "number" && u !== "string"))
				throw new TypeError('hint must be "string" or "number"');
			var d =
					u === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"],
				p,
				h,
				f;
			for (f = 0; f < d.length; ++f)
				if (((p = l[d[f]]), r(p) && ((h = p.call(l)), t(h)))) return h;
			throw new TypeError("No default value");
		},
		i = function (l, u) {
			var d = l[u];
			if (d !== null && typeof d < "u") {
				if (!r(d))
					throw new TypeError(
						d +
							" returned for property " +
							u +
							" of object " +
							l +
							" is not a function",
					);
				return d;
			}
		};
	return (
		(zr = function (l) {
			if (t(l)) return l;
			var u = "default";
			arguments.length > 1 &&
				(arguments[1] === String
					? (u = "string")
					: arguments[1] === Number && (u = "number"));
			var d;
			if (
				(e &&
					(Symbol.toPrimitive
						? (d = i(l, Symbol.toPrimitive))
						: o(l) && (d = Symbol.prototype.valueOf)),
				typeof d < "u")
			) {
				var p = d.call(l, u);
				if (t(p)) return p;
				throw new TypeError("unable to convert exotic object to primitive");
			}
			return (
				u === "default" && (n(l) || o(l)) && (u = "string"),
				s(l, u === "default" ? "number" : u)
			);
		}),
		zr
	);
}
var $r, li;
function dd() {
	if (li) return $r;
	li = 1;
	var e = ud();
	return (
		($r = function (r) {
			return arguments.length > 1 ? e(r, arguments[1]) : e(r);
		}),
		$r
	);
}
var Vr, ci;
function fd() {
	if (ci) return Vr;
	ci = 1;
	var e = yn,
		t = Pa()(),
		r,
		n,
		o,
		s;
	if (t) {
		(r = e("Object.prototype.hasOwnProperty")),
			(n = e("RegExp.prototype.exec")),
			(o = {});
		var i = function () {
			throw o;
		};
		(s = { toString: i, valueOf: i }),
			typeof Symbol.toPrimitive == "symbol" && (s[Symbol.toPrimitive] = i);
	}
	var a = e("Object.prototype.toString"),
		l = Object.getOwnPropertyDescriptor,
		u = "[object RegExp]";
	return (
		(Vr = t
			? function (p) {
					if (!p || typeof p != "object") return !1;
					var h = l(p, "lastIndex"),
						f = h && r(h, "value");
					if (!f) return !1;
					try {
						n(p, s);
					} catch (v) {
						return v === o;
					}
				}
			: function (p) {
					return !p || (typeof p != "object" && typeof p != "function")
						? !1
						: a(p) === u;
				}),
		Vr
	);
}
var qr, ui;
function pd() {
	if (ui) return qr;
	ui = 1;
	var e = yn,
		t = fd(),
		r = e("RegExp.prototype.exec"),
		n = ft;
	return (
		(qr = function (s) {
			if (!t(s)) throw new n("`regex` must be a RegExp");
			return function (a) {
				return r(s, a) !== null;
			};
		}),
		qr
	);
}
var Xr, di;
function Aa() {
	if (di) return Xr;
	di = 1;
	var e = Ao,
		t = Ua,
		r = yn,
		n = r("String.prototype.replace"),
		o = /^\s$/.test("᠎"),
		s = o
			? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
			: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
		i = o
			? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
			: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
	return (
		(Xr = function () {
			var l = t(e(this));
			return n(n(l, s, ""), i, "");
		}),
		Xr
	);
}
var Yr, fi;
function Da() {
	if (fi) return Yr;
	fi = 1;
	var e = Aa(),
		t = "​",
		r = "᠎";
	return (
		(Yr = function () {
			return String.prototype.trim &&
				t.trim() === t &&
				r.trim() === r &&
				("_" + r).trim() === "_" + r &&
				(r + "_").trim() === r + "_"
				? String.prototype.trim
				: e;
		}),
		Yr
	);
}
var Zr, pi;
function hd() {
	if (pi) return Zr;
	pi = 1;
	var e = lr,
		t = Da();
	return (
		(Zr = function () {
			var n = t();
			return (
				e(
					String.prototype,
					{ trim: n },
					{
						trim: function () {
							return String.prototype.trim !== n;
						},
					},
				),
				n
			);
		}),
		Zr
	);
}
var Kr, hi;
function gd() {
	if (hi) return Kr;
	hi = 1;
	var e = Po,
		t = lr,
		r = Ao,
		n = Aa(),
		o = Da(),
		s = hd(),
		i = e(o()),
		a = function (u) {
			return r(u), i(u);
		};
	return t(a, { getPolyfill: o, implementation: n, shim: s }), (Kr = a), Kr;
}
var Jr, gi;
function md() {
	if (gi) return Jr;
	gi = 1;
	var e = mn,
		t = e("%Number%"),
		r = e("%RegExp%"),
		n = ft,
		o = e("%parseInt%"),
		s = yn,
		i = pd(),
		a = s("String.prototype.slice"),
		l = i(/^0b[01]+$/i),
		u = i(/^0o[0-7]+$/i),
		d = i(/^[-+]0x[0-9a-f]+$/i),
		p = ["", "​", "￾"].join(""),
		h = new r("[" + p + "]", "g"),
		f = i(h),
		v = gd();
	return (
		(Jr = function S(b) {
			if (typeof b != "string")
				throw new n("Assertion failed: `argument` is not a String");
			if (l(b)) return t(o(a(b, 2), 2));
			if (u(b)) return t(o(a(b, 2), 8));
			if (f(b) || d(b)) return NaN;
			var I = v(b);
			return I !== b ? S(I) : t(b);
		}),
		Jr
	);
}
var yd = mn,
	mi = ft,
	yi = yd("%Number%"),
	vd = sd(),
	bd = dd(),
	xd = md(),
	Sd = function (t) {
		var r = vd(t) ? t : bd(t, yi);
		if (typeof r == "symbol")
			throw new mi("Cannot convert a Symbol value to a number");
		if (typeof r == "bigint")
			throw new mi("Conversion from 'BigInt' to 'number' is not allowed.");
		return typeof r == "string" ? xd(r) : yi(r);
	},
	_d = Math.floor,
	kd = function (t) {
		return typeof t == "bigint" ? t : _d(t);
	},
	vi = kd,
	Fd = ft,
	wd = function (t) {
		if (typeof t != "number" && typeof t != "bigint")
			throw new Fd("argument must be a Number or a BigInt");
		var r = t < 0 ? -vi(-t) : vi(t);
		return r === 0 ? 0 : r;
	},
	La =
		Number.isNaN ||
		function (t) {
			return t !== t;
		},
	Td = La,
	Cd = function (e) {
		return (
			(typeof e == "number" || typeof e == "bigint") &&
			!Td(e) &&
			e !== 1 / 0 &&
			e !== -1 / 0
		);
	},
	Ed = Sd,
	Od = wd,
	Md = La,
	Id = Cd,
	Ud = function (t) {
		var r = Ed(t);
		return Md(r) || r === 0 ? 0 : Id(r) ? Od(r) : r;
	}; /*! https://mths.be/codepointat v1.0.0 by @mathias */
var Pd = yn,
	Ad = td,
	Dd = Ua,
	Ld = Ud,
	bi = Pd("String.prototype.charCodeAt"),
	Ra = function (t) {
		var r = Ad(this),
			n = Dd(r),
			o = n.length,
			s = Ld(t);
		if (!(s < 0 || s >= o)) {
			var i = bi(n, s),
				a;
			return i >= 55296 &&
				i <= 56319 &&
				o > s + 1 &&
				((a = bi(n, s + 1)), a >= 56320 && a <= 57343)
				? (i - 55296) * 1024 + a - 56320 + 65536
				: i;
		}
	}; /*! https://mths.be/codepointat v1.0.0 by @mathias */
var Rd = Ra,
	Ba = function () {
		return String.prototype.codePointAt || Rd;
	}; /*! https://mths.be/codepointat v1.0.0 by @mathias */
var Bd = lr,
	Nd = Ba,
	Gd = function () {
		var t = Nd();
		return (
			String.prototype.codePointAt !== t &&
				Bd(String.prototype, { codePointAt: t }),
			t
		);
	}; /*! https://mths.be/codepointat v1.0.0 by @mathias */
var jd = Hu,
	Hd = lr,
	Wd = Ra,
	Na = Ba,
	zd = Gd,
	$d = jd(Na());
Hd($d, { getPolyfill: Na, implementation: Wd, shim: zd });
var Do = 0,
	Ga = -3;
function cn() {
	(this.table = new Uint16Array(16)), (this.trans = new Uint16Array(288));
}
function Vd(e, t) {
	(this.source = e),
		(this.sourceIndex = 0),
		(this.tag = 0),
		(this.bitcount = 0),
		(this.dest = t),
		(this.destLen = 0),
		(this.ltree = new cn()),
		(this.dtree = new cn());
}
var ja = new cn(),
	Ha = new cn(),
	Lo = new Uint8Array(30),
	Ro = new Uint16Array(30),
	Wa = new Uint8Array(30),
	za = new Uint16Array(30),
	qd = new Uint8Array([
		16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
	]),
	xi = new cn(),
	at = new Uint8Array(288 + 32);
function $a(e, t, r, n) {
	var o, s;
	for (o = 0; o < r; ++o) e[o] = 0;
	for (o = 0; o < 30 - r; ++o) e[o + r] = (o / r) | 0;
	for (s = n, o = 0; o < 30; ++o) (t[o] = s), (s += 1 << e[o]);
}
function Xd(e, t) {
	var r;
	for (r = 0; r < 7; ++r) e.table[r] = 0;
	for (e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, r = 0; r < 24; ++r)
		e.trans[r] = 256 + r;
	for (r = 0; r < 144; ++r) e.trans[24 + r] = r;
	for (r = 0; r < 8; ++r) e.trans[24 + 144 + r] = 280 + r;
	for (r = 0; r < 112; ++r) e.trans[24 + 144 + 8 + r] = 144 + r;
	for (r = 0; r < 5; ++r) t.table[r] = 0;
	for (t.table[5] = 32, r = 0; r < 32; ++r) t.trans[r] = r;
}
var Si = new Uint16Array(16);
function Qr(e, t, r, n) {
	var o, s;
	for (o = 0; o < 16; ++o) e.table[o] = 0;
	for (o = 0; o < n; ++o) e.table[t[r + o]]++;
	for (e.table[0] = 0, s = 0, o = 0; o < 16; ++o)
		(Si[o] = s), (s += e.table[o]);
	for (o = 0; o < n; ++o) t[r + o] && (e.trans[Si[t[r + o]]++] = o);
}
function Yd(e) {
	e.bitcount-- || ((e.tag = e.source[e.sourceIndex++]), (e.bitcount = 7));
	var t = e.tag & 1;
	return (e.tag >>>= 1), t;
}
function lt(e, t, r) {
	if (!t) return r;
	for (; e.bitcount < 24; )
		(e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
	var n = e.tag & (65535 >>> (16 - t));
	return (e.tag >>>= t), (e.bitcount -= t), n + r;
}
function mo(e, t) {
	for (; e.bitcount < 24; )
		(e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
	var r = 0,
		n = 0,
		o = 0,
		s = e.tag;
	do
		(n = 2 * n + (s & 1)),
			(s >>>= 1),
			++o,
			(r += t.table[o]),
			(n -= t.table[o]);
	while (n >= 0);
	return (e.tag = s), (e.bitcount -= o), t.trans[r + n];
}
function Zd(e, t, r) {
	var n, o, s, i, a, l;
	for (n = lt(e, 5, 257), o = lt(e, 5, 1), s = lt(e, 4, 4), i = 0; i < 19; ++i)
		at[i] = 0;
	for (i = 0; i < s; ++i) {
		var u = lt(e, 3, 0);
		at[qd[i]] = u;
	}
	for (Qr(xi, at, 0, 19), a = 0; a < n + o; ) {
		var d = mo(e, xi);
		switch (d) {
			case 16:
				var p = at[a - 1];
				for (l = lt(e, 2, 3); l; --l) at[a++] = p;
				break;
			case 17:
				for (l = lt(e, 3, 3); l; --l) at[a++] = 0;
				break;
			case 18:
				for (l = lt(e, 7, 11); l; --l) at[a++] = 0;
				break;
			default:
				at[a++] = d;
				break;
		}
	}
	Qr(t, at, 0, n), Qr(r, at, n, o);
}
function _i(e, t, r) {
	for (;;) {
		var n = mo(e, t);
		if (n === 256) return Do;
		if (n < 256) e.dest[e.destLen++] = n;
		else {
			var o, s, i, a;
			for (
				n -= 257,
					o = lt(e, Lo[n], Ro[n]),
					s = mo(e, r),
					i = e.destLen - lt(e, Wa[s], za[s]),
					a = i;
				a < i + o;
				++a
			)
				e.dest[e.destLen++] = e.dest[a];
		}
	}
}
function Kd(e) {
	for (var t, r, n; e.bitcount > 8; ) e.sourceIndex--, (e.bitcount -= 8);
	if (
		((t = e.source[e.sourceIndex + 1]),
		(t = 256 * t + e.source[e.sourceIndex]),
		(r = e.source[e.sourceIndex + 3]),
		(r = 256 * r + e.source[e.sourceIndex + 2]),
		t !== (~r & 65535))
	)
		return Ga;
	for (e.sourceIndex += 4, n = t; n; --n)
		e.dest[e.destLen++] = e.source[e.sourceIndex++];
	return (e.bitcount = 0), Do;
}
function Jd(e, t) {
	var r = new Vd(e, t),
		n,
		o,
		s;
	do {
		switch (((n = Yd(r)), (o = lt(r, 2, 0)), o)) {
			case 0:
				s = Kd(r);
				break;
			case 1:
				s = _i(r, ja, Ha);
				break;
			case 2:
				Zd(r, r.ltree, r.dtree), (s = _i(r, r.ltree, r.dtree));
				break;
			default:
				s = Ga;
		}
		if (s !== Do) throw new Error("Data error");
	} while (!n);
	return r.destLen < r.dest.length
		? typeof r.dest.slice == "function"
			? r.dest.slice(0, r.destLen)
			: r.dest.subarray(0, r.destLen)
		: r.dest;
}
Xd(ja, Ha);
$a(Lo, Ro, 4, 3);
$a(Wa, za, 2, 1);
Lo[28] = 0;
Ro[28] = 258;
var Qd = Jd;
const ef = hc(Qd);
function Ee() {
	(this.commands = []),
		(this.fill = "black"),
		(this.stroke = null),
		(this.strokeWidth = 1);
}
Ee.prototype.moveTo = function (e, t) {
	this.commands.push({ type: "M", x: e, y: t });
};
Ee.prototype.lineTo = function (e, t) {
	this.commands.push({ type: "L", x: e, y: t });
};
Ee.prototype.curveTo = Ee.prototype.bezierCurveTo = function (
	e,
	t,
	r,
	n,
	o,
	s,
) {
	this.commands.push({ type: "C", x1: e, y1: t, x2: r, y2: n, x: o, y: s });
};
Ee.prototype.quadTo = Ee.prototype.quadraticCurveTo = function (e, t, r, n) {
	this.commands.push({ type: "Q", x1: e, y1: t, x: r, y: n });
};
Ee.prototype.close = Ee.prototype.closePath = function () {
	this.commands.push({ type: "Z" });
};
Ee.prototype.extend = function (e) {
	if (e.commands) e = e.commands;
	else if (e instanceof Oo) {
		const t = e;
		this.moveTo(t.x1, t.y1),
			this.lineTo(t.x2, t.y1),
			this.lineTo(t.x2, t.y2),
			this.lineTo(t.x1, t.y2),
			this.close();
		return;
	}
	Array.prototype.push.apply(this.commands, e);
};
Ee.prototype.getBoundingBox = function () {
	const e = new Oo();
	let t = 0,
		r = 0,
		n = 0,
		o = 0;
	for (let s = 0; s < this.commands.length; s++) {
		const i = this.commands[s];
		switch (i.type) {
			case "M":
				e.addPoint(i.x, i.y), (t = n = i.x), (r = o = i.y);
				break;
			case "L":
				e.addPoint(i.x, i.y), (n = i.x), (o = i.y);
				break;
			case "Q":
				e.addQuad(n, o, i.x1, i.y1, i.x, i.y), (n = i.x), (o = i.y);
				break;
			case "C":
				e.addBezier(n, o, i.x1, i.y1, i.x2, i.y2, i.x, i.y),
					(n = i.x),
					(o = i.y);
				break;
			case "Z":
				(n = t), (o = r);
				break;
			default:
				throw new Error("Unexpected path command " + i.type);
		}
	}
	return e.isEmpty() && e.addPoint(0, 0), e;
};
Ee.prototype.draw = function (e) {
	e.beginPath();
	for (let t = 0; t < this.commands.length; t += 1) {
		const r = this.commands[t];
		r.type === "M"
			? e.moveTo(r.x, r.y)
			: r.type === "L"
				? e.lineTo(r.x, r.y)
				: r.type === "C"
					? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y)
					: r.type === "Q"
						? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y)
						: r.type === "Z" && e.closePath();
	}
	this.fill && ((e.fillStyle = this.fill), e.fill()),
		this.stroke &&
			((e.strokeStyle = this.stroke),
			(e.lineWidth = this.strokeWidth),
			e.stroke());
};
Ee.prototype.toPathData = function (e) {
	e = e !== void 0 ? e : 2;
	function t(o) {
		return Math.round(o) === o ? "" + Math.round(o) : o.toFixed(e);
	}
	function r() {
		let o = "";
		for (let s = 0; s < arguments.length; s += 1) {
			const i = arguments[s];
			i >= 0 && s > 0 && (o += " "), (o += t(i));
		}
		return o;
	}
	let n = "";
	for (let o = 0; o < this.commands.length; o += 1) {
		const s = this.commands[o];
		s.type === "M"
			? (n += "M" + r(s.x, s.y))
			: s.type === "L"
				? (n += "L" + r(s.x, s.y))
				: s.type === "C"
					? (n += "C" + r(s.x1, s.y1, s.x2, s.y2, s.x, s.y))
					: s.type === "Q"
						? (n += "Q" + r(s.x1, s.y1, s.x, s.y))
						: s.type === "Z" && (n += "Z");
	}
	return n;
};
Ee.prototype.toSVG = function (e) {
	let t = '<path d="';
	return (
		(t += this.toPathData(e)),
		(t += '"'),
		this.fill &&
			this.fill !== "black" &&
			(this.fill === null
				? (t += ' fill="none"')
				: (t += ' fill="' + this.fill + '"')),
		this.stroke &&
			(t +=
				' stroke="' +
				this.stroke +
				'" stroke-width="' +
				this.strokeWidth +
				'"'),
		(t += "/>"),
		t
	);
};
Ee.prototype.toDOMElement = function (e) {
	const t = this.toPathData(e),
		r = document.createElementNS("http://www.w3.org/2000/svg", "path");
	return r.setAttribute("d", t), r;
};
function Va(e) {
	throw new Error(e);
}
function ki(e, t) {
	e || Va(t);
}
const ne = { fail: Va, argument: ki, assert: ki },
	Fi = 32768,
	wi = 2147483648,
	Jt = {},
	G = {},
	se = {};
function nt(e) {
	return function () {
		return e;
	};
}
G.BYTE = function (e) {
	return (
		ne.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."),
		[e]
	);
};
se.BYTE = nt(1);
G.CHAR = function (e) {
	return [e.charCodeAt(0)];
};
se.CHAR = nt(1);
G.CHARARRAY = function (e) {
	typeof e > "u" &&
		((e = ""),
		console.warn(
			"Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name.",
		));
	const t = [];
	for (let r = 0; r < e.length; r += 1) t[r] = e.charCodeAt(r);
	return t;
};
se.CHARARRAY = function (e) {
	return typeof e > "u" ? 0 : e.length;
};
G.USHORT = function (e) {
	return [(e >> 8) & 255, e & 255];
};
se.USHORT = nt(2);
G.SHORT = function (e) {
	return e >= Fi && (e = -(2 * Fi - e)), [(e >> 8) & 255, e & 255];
};
se.SHORT = nt(2);
G.UINT24 = function (e) {
	return [(e >> 16) & 255, (e >> 8) & 255, e & 255];
};
se.UINT24 = nt(3);
G.ULONG = function (e) {
	return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255];
};
se.ULONG = nt(4);
G.LONG = function (e) {
	return (
		e >= wi && (e = -(2 * wi - e)),
		[(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255]
	);
};
se.LONG = nt(4);
G.FIXED = G.ULONG;
se.FIXED = se.ULONG;
G.FWORD = G.SHORT;
se.FWORD = se.SHORT;
G.UFWORD = G.USHORT;
se.UFWORD = se.USHORT;
G.LONGDATETIME = function (e) {
	return [
		0,
		0,
		0,
		0,
		(e >> 24) & 255,
		(e >> 16) & 255,
		(e >> 8) & 255,
		e & 255,
	];
};
se.LONGDATETIME = nt(8);
G.TAG = function (e) {
	return (
		ne.argument(e.length === 4, "Tag should be exactly 4 ASCII characters."),
		[e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]
	);
};
se.TAG = nt(4);
G.Card8 = G.BYTE;
se.Card8 = se.BYTE;
G.Card16 = G.USHORT;
se.Card16 = se.USHORT;
G.OffSize = G.BYTE;
se.OffSize = se.BYTE;
G.SID = G.USHORT;
se.SID = se.USHORT;
G.NUMBER = function (e) {
	return e >= -107 && e <= 107
		? [e + 139]
		: e >= 108 && e <= 1131
			? ((e = e - 108), [(e >> 8) + 247, e & 255])
			: e >= -1131 && e <= -108
				? ((e = -e - 108), [(e >> 8) + 251, e & 255])
				: e >= -32768 && e <= 32767
					? G.NUMBER16(e)
					: G.NUMBER32(e);
};
se.NUMBER = function (e) {
	return G.NUMBER(e).length;
};
G.NUMBER16 = function (e) {
	return [28, (e >> 8) & 255, e & 255];
};
se.NUMBER16 = nt(3);
G.NUMBER32 = function (e) {
	return [29, (e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255];
};
se.NUMBER32 = nt(5);
G.REAL = function (e) {
	let t = e.toString();
	const r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
	if (r) {
		const s = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
		t = (Math.round(e * s) / s).toString();
	}
	let n = "";
	for (let s = 0, i = t.length; s < i; s += 1) {
		const a = t[s];
		a === "e"
			? (n += t[++s] === "-" ? "c" : "b")
			: a === "."
				? (n += "a")
				: a === "-"
					? (n += "e")
					: (n += a);
	}
	n += n.length & 1 ? "f" : "ff";
	const o = [30];
	for (let s = 0, i = n.length; s < i; s += 2)
		o.push(parseInt(n.substr(s, 2), 16));
	return o;
};
se.REAL = function (e) {
	return G.REAL(e).length;
};
G.NAME = G.CHARARRAY;
se.NAME = se.CHARARRAY;
G.STRING = G.CHARARRAY;
se.STRING = se.CHARARRAY;
Jt.UTF8 = function (e, t, r) {
	const n = [],
		o = r;
	for (let s = 0; s < o; s++, t += 1) n[s] = e.getUint8(t);
	return String.fromCharCode.apply(null, n);
};
Jt.UTF16 = function (e, t, r) {
	const n = [],
		o = r / 2;
	for (let s = 0; s < o; s++, t += 2) n[s] = e.getUint16(t);
	return String.fromCharCode.apply(null, n);
};
G.UTF16 = function (e) {
	const t = [];
	for (let r = 0; r < e.length; r += 1) {
		const n = e.charCodeAt(r);
		(t[t.length] = (n >> 8) & 255), (t[t.length] = n & 255);
	}
	return t;
};
se.UTF16 = function (e) {
	return e.length * 2;
};
const yo = {
	"x-mac-croatian":
		"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
	"x-mac-cyrillic":
		"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
	"x-mac-gaelic":
		"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
	"x-mac-greek":
		"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
	"x-mac-icelandic":
		"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
	"x-mac-inuit":
		"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
	"x-mac-ce":
		"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
	macintosh:
		"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
	"x-mac-romanian":
		"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
	"x-mac-turkish":
		"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ",
};
Jt.MACSTRING = function (e, t, r, n) {
	const o = yo[n];
	if (o === void 0) return;
	let s = "";
	for (let i = 0; i < r; i++) {
		const a = e.getUint8(t + i);
		a <= 127 ? (s += String.fromCharCode(a)) : (s += o[a & 127]);
	}
	return s;
};
const Pn = typeof WeakMap == "function" && new WeakMap();
let An;
const tf = function (e) {
	if (!An) {
		An = {};
		for (let o in yo) An[o] = new String(o);
	}
	const t = An[e];
	if (t === void 0) return;
	if (Pn) {
		const o = Pn.get(t);
		if (o !== void 0) return o;
	}
	const r = yo[e];
	if (r === void 0) return;
	const n = {};
	for (let o = 0; o < r.length; o++) n[r.charCodeAt(o)] = o + 128;
	return Pn && Pn.set(t, n), n;
};
G.MACSTRING = function (e, t) {
	const r = tf(t);
	if (r === void 0) return;
	const n = [];
	for (let o = 0; o < e.length; o++) {
		let s = e.charCodeAt(o);
		if (s >= 128 && ((s = r[s]), s === void 0)) return;
		n[o] = s;
	}
	return n;
};
se.MACSTRING = function (e, t) {
	const r = G.MACSTRING(e, t);
	return r !== void 0 ? r.length : 0;
};
function vo(e) {
	return e >= -128 && e <= 127;
}
function nf(e, t, r) {
	let n = 0;
	const o = e.length;
	for (; t < o && n < 64 && e[t] === 0; ) ++t, ++n;
	return r.push(128 | (n - 1)), t;
}
function rf(e, t, r) {
	let n = 0;
	const o = e.length;
	let s = t;
	for (; s < o && n < 64; ) {
		const i = e[s];
		if (!vo(i) || (i === 0 && s + 1 < o && e[s + 1] === 0)) break;
		++s, ++n;
	}
	r.push(n - 1);
	for (let i = t; i < s; ++i) r.push((e[i] + 256) & 255);
	return s;
}
function of(e, t, r) {
	let n = 0;
	const o = e.length;
	let s = t;
	for (; s < o && n < 64; ) {
		const i = e[s];
		if (i === 0 || (vo(i) && s + 1 < o && vo(e[s + 1]))) break;
		++s, ++n;
	}
	r.push(64 | (n - 1));
	for (let i = t; i < s; ++i) {
		const a = e[i];
		r.push(((a + 65536) >> 8) & 255, (a + 256) & 255);
	}
	return s;
}
G.VARDELTAS = function (e) {
	let t = 0;
	const r = [];
	for (; t < e.length; ) {
		const n = e[t];
		n === 0
			? (t = nf(e, t, r))
			: n >= -128 && n <= 127
				? (t = rf(e, t, r))
				: (t = of(e, t, r));
	}
	return r;
};
G.INDEX = function (e) {
	let t = 1;
	const r = [t],
		n = [];
	for (let a = 0; a < e.length; a += 1) {
		const l = G.OBJECT(e[a]);
		Array.prototype.push.apply(n, l), (t += l.length), r.push(t);
	}
	if (n.length === 0) return [0, 0];
	const o = [],
		s = (1 + Math.floor(Math.log(t) / Math.log(2)) / 8) | 0,
		i = [void 0, G.BYTE, G.USHORT, G.UINT24, G.ULONG][s];
	for (let a = 0; a < r.length; a += 1) {
		const l = i(r[a]);
		Array.prototype.push.apply(o, l);
	}
	return Array.prototype.concat(G.Card16(e.length), G.OffSize(s), o, n);
};
se.INDEX = function (e) {
	return G.INDEX(e).length;
};
G.DICT = function (e) {
	let t = [];
	const r = Object.keys(e),
		n = r.length;
	for (let o = 0; o < n; o += 1) {
		const s = parseInt(r[o], 0),
			i = e[s];
		(t = t.concat(G.OPERAND(i.value, i.type))), (t = t.concat(G.OPERATOR(s)));
	}
	return t;
};
se.DICT = function (e) {
	return G.DICT(e).length;
};
G.OPERATOR = function (e) {
	return e < 1200 ? [e] : [12, e - 1200];
};
G.OPERAND = function (e, t) {
	let r = [];
	if (Array.isArray(t))
		for (let n = 0; n < t.length; n += 1)
			ne.argument(
				e.length === t.length,
				"Not enough arguments given for type" + t,
			),
				(r = r.concat(G.OPERAND(e[n], t[n])));
	else if (t === "SID") r = r.concat(G.NUMBER(e));
	else if (t === "offset") r = r.concat(G.NUMBER32(e));
	else if (t === "number") r = r.concat(G.NUMBER(e));
	else if (t === "real") r = r.concat(G.REAL(e));
	else throw new Error("Unknown operand type " + t);
	return r;
};
G.OP = G.BYTE;
se.OP = se.BYTE;
const Dn = typeof WeakMap == "function" && new WeakMap();
G.CHARSTRING = function (e) {
	if (Dn) {
		const n = Dn.get(e);
		if (n !== void 0) return n;
	}
	let t = [];
	const r = e.length;
	for (let n = 0; n < r; n += 1) {
		const o = e[n];
		t = t.concat(G[o.type](o.value));
	}
	return Dn && Dn.set(e, t), t;
};
se.CHARSTRING = function (e) {
	return G.CHARSTRING(e).length;
};
G.OBJECT = function (e) {
	const t = G[e.type];
	return (
		ne.argument(t !== void 0, "No encoding function for type " + e.type),
		t(e.value)
	);
};
se.OBJECT = function (e) {
	const t = se[e.type];
	return (
		ne.argument(t !== void 0, "No sizeOf function for type " + e.type),
		t(e.value)
	);
};
G.TABLE = function (e) {
	let t = [];
	const r = e.fields.length,
		n = [],
		o = [];
	for (let s = 0; s < r; s += 1) {
		const i = e.fields[s],
			a = G[i.type];
		ne.argument(
			a !== void 0,
			"No encoding function for field type " + i.type + " (" + i.name + ")",
		);
		let l = e[i.name];
		l === void 0 && (l = i.value);
		const u = a(l);
		i.type === "TABLE"
			? (o.push(t.length), (t = t.concat([0, 0])), n.push(u))
			: (t = t.concat(u));
	}
	for (let s = 0; s < n.length; s += 1) {
		const i = o[s],
			a = t.length;
		ne.argument(a < 65536, "Table " + e.tableName + " too big."),
			(t[i] = a >> 8),
			(t[i + 1] = a & 255),
			(t = t.concat(n[s]));
	}
	return t;
};
se.TABLE = function (e) {
	let t = 0;
	const r = e.fields.length;
	for (let n = 0; n < r; n += 1) {
		const o = e.fields[n],
			s = se[o.type];
		ne.argument(
			s !== void 0,
			"No sizeOf function for field type " + o.type + " (" + o.name + ")",
		);
		let i = e[o.name];
		i === void 0 && (i = o.value), (t += s(i)), o.type === "TABLE" && (t += 2);
	}
	return t;
};
G.RECORD = G.TABLE;
se.RECORD = se.TABLE;
G.LITERAL = function (e) {
	return e;
};
se.LITERAL = function (e) {
	return e.length;
};
function Ue(e, t, r) {
	if (t.length && (t[0].name !== "coverageFormat" || t[0].value === 1))
		for (let n = 0; n < t.length; n += 1) {
			const o = t[n];
			this[o.name] = o.value;
		}
	if (((this.tableName = e), (this.fields = t), r)) {
		const n = Object.keys(r);
		for (let o = 0; o < n.length; o += 1) {
			const s = n[o],
				i = r[s];
			this[s] !== void 0 && (this[s] = i);
		}
	}
}
Ue.prototype.encode = function () {
	return G.TABLE(this);
};
Ue.prototype.sizeOf = function () {
	return se.TABLE(this);
};
function un(e, t, r) {
	r === void 0 && (r = t.length);
	const n = new Array(t.length + 1);
	n[0] = { name: e + "Count", type: "USHORT", value: r };
	for (let o = 0; o < t.length; o++)
		n[o + 1] = { name: e + o, type: "USHORT", value: t[o] };
	return n;
}
function bo(e, t, r) {
	const n = t.length,
		o = new Array(n + 1);
	o[0] = { name: e + "Count", type: "USHORT", value: n };
	for (let s = 0; s < n; s++)
		o[s + 1] = { name: e + s, type: "TABLE", value: r(t[s], s) };
	return o;
}
function dn(e, t, r) {
	const n = t.length;
	let o = [];
	o[0] = { name: e + "Count", type: "USHORT", value: n };
	for (let s = 0; s < n; s++) o = o.concat(r(t[s], s));
	return o;
}
function Qn(e) {
	e.format === 1
		? Ue.call(
				this,
				"coverageTable",
				[{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(
					un("glyph", e.glyphs),
				),
			)
		: e.format === 2
			? Ue.call(
					this,
					"coverageTable",
					[{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(
						dn("rangeRecord", e.ranges, function (t) {
							return [
								{ name: "startGlyphID", type: "USHORT", value: t.start },
								{ name: "endGlyphID", type: "USHORT", value: t.end },
								{ name: "startCoverageIndex", type: "USHORT", value: t.index },
							];
						}),
					),
				)
			: ne.assert(!1, "Coverage format must be 1 or 2.");
}
Qn.prototype = Object.create(Ue.prototype);
Qn.prototype.constructor = Qn;
function er(e) {
	Ue.call(
		this,
		"scriptListTable",
		dn("scriptRecord", e, function (t, r) {
			const n = t.script;
			let o = n.defaultLangSys;
			return (
				ne.assert(
					!!o,
					"Unable to write GSUB: script " +
						t.tag +
						" has no default language system.",
				),
				[
					{ name: "scriptTag" + r, type: "TAG", value: t.tag },
					{
						name: "script" + r,
						type: "TABLE",
						value: new Ue(
							"scriptTable",
							[
								{
									name: "defaultLangSys",
									type: "TABLE",
									value: new Ue(
										"defaultLangSys",
										[
											{ name: "lookupOrder", type: "USHORT", value: 0 },
											{
												name: "reqFeatureIndex",
												type: "USHORT",
												value: o.reqFeatureIndex,
											},
										].concat(un("featureIndex", o.featureIndexes)),
									),
								},
							].concat(
								dn("langSys", n.langSysRecords, function (s, i) {
									const a = s.langSys;
									return [
										{ name: "langSysTag" + i, type: "TAG", value: s.tag },
										{
											name: "langSys" + i,
											type: "TABLE",
											value: new Ue(
												"langSys",
												[
													{ name: "lookupOrder", type: "USHORT", value: 0 },
													{
														name: "reqFeatureIndex",
														type: "USHORT",
														value: a.reqFeatureIndex,
													},
												].concat(un("featureIndex", a.featureIndexes)),
											),
										},
									];
								}),
							),
						),
					},
				]
			);
		}),
	);
}
er.prototype = Object.create(Ue.prototype);
er.prototype.constructor = er;
function tr(e) {
	Ue.call(
		this,
		"featureListTable",
		dn("featureRecord", e, function (t, r) {
			const n = t.feature;
			return [
				{ name: "featureTag" + r, type: "TAG", value: t.tag },
				{
					name: "feature" + r,
					type: "TABLE",
					value: new Ue(
						"featureTable",
						[
							{ name: "featureParams", type: "USHORT", value: n.featureParams },
						].concat(un("lookupListIndex", n.lookupListIndexes)),
					),
				},
			];
		}),
	);
}
tr.prototype = Object.create(Ue.prototype);
tr.prototype.constructor = tr;
function nr(e, t) {
	Ue.call(
		this,
		"lookupListTable",
		bo("lookup", e, function (r) {
			let n = t[r.lookupType];
			return (
				ne.assert(
					!!n,
					"Unable to write GSUB lookup type " + r.lookupType + " tables.",
				),
				new Ue(
					"lookupTable",
					[
						{ name: "lookupType", type: "USHORT", value: r.lookupType },
						{ name: "lookupFlag", type: "USHORT", value: r.lookupFlag },
					].concat(bo("subtable", r.subtables, n)),
				)
			);
		}),
	);
}
nr.prototype = Object.create(Ue.prototype);
nr.prototype.constructor = nr;
const W = {
	Table: Ue,
	Record: Ue,
	Coverage: Qn,
	ScriptList: er,
	FeatureList: tr,
	LookupList: nr,
	ushortList: un,
	tableList: bo,
	recordList: dn,
};
function Ti(e, t) {
	return e.getUint8(t);
}
function rr(e, t) {
	return e.getUint16(t, !1);
}
function sf(e, t) {
	return e.getInt16(t, !1);
}
function Bo(e, t) {
	return e.getUint32(t, !1);
}
function qa(e, t) {
	const r = e.getInt16(t, !1),
		n = e.getUint16(t + 2, !1);
	return r + n / 65535;
}
function af(e, t) {
	let r = "";
	for (let n = t; n < t + 4; n += 1) r += String.fromCharCode(e.getInt8(n));
	return r;
}
function lf(e, t, r) {
	let n = 0;
	for (let o = 0; o < r; o += 1) (n <<= 8), (n += e.getUint8(t + o));
	return n;
}
function cf(e, t, r) {
	const n = [];
	for (let o = t; o < r; o += 1) n.push(e.getUint8(o));
	return n;
}
function uf(e) {
	let t = "";
	for (let r = 0; r < e.length; r += 1) t += String.fromCharCode(e[r]);
	return t;
}
const df = {
	byte: 1,
	uShort: 2,
	short: 2,
	uLong: 4,
	fixed: 4,
	longDateTime: 8,
	tag: 4,
};
function x(e, t) {
	(this.data = e), (this.offset = t), (this.relativeOffset = 0);
}
x.prototype.parseByte = function () {
	const e = this.data.getUint8(this.offset + this.relativeOffset);
	return (this.relativeOffset += 1), e;
};
x.prototype.parseChar = function () {
	const e = this.data.getInt8(this.offset + this.relativeOffset);
	return (this.relativeOffset += 1), e;
};
x.prototype.parseCard8 = x.prototype.parseByte;
x.prototype.parseUShort = function () {
	const e = this.data.getUint16(this.offset + this.relativeOffset);
	return (this.relativeOffset += 2), e;
};
x.prototype.parseCard16 = x.prototype.parseUShort;
x.prototype.parseSID = x.prototype.parseUShort;
x.prototype.parseOffset16 = x.prototype.parseUShort;
x.prototype.parseShort = function () {
	const e = this.data.getInt16(this.offset + this.relativeOffset);
	return (this.relativeOffset += 2), e;
};
x.prototype.parseF2Dot14 = function () {
	const e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
	return (this.relativeOffset += 2), e;
};
x.prototype.parseULong = function () {
	const e = Bo(this.data, this.offset + this.relativeOffset);
	return (this.relativeOffset += 4), e;
};
x.prototype.parseOffset32 = x.prototype.parseULong;
x.prototype.parseFixed = function () {
	const e = qa(this.data, this.offset + this.relativeOffset);
	return (this.relativeOffset += 4), e;
};
x.prototype.parseString = function (e) {
	const t = this.data,
		r = this.offset + this.relativeOffset;
	let n = "";
	this.relativeOffset += e;
	for (let o = 0; o < e; o++) n += String.fromCharCode(t.getUint8(r + o));
	return n;
};
x.prototype.parseTag = function () {
	return this.parseString(4);
};
x.prototype.parseLongDateTime = function () {
	let e = Bo(this.data, this.offset + this.relativeOffset + 4);
	return (e -= 2082844800), (this.relativeOffset += 8), e;
};
x.prototype.parseVersion = function (e) {
	const t = rr(this.data, this.offset + this.relativeOffset),
		r = rr(this.data, this.offset + this.relativeOffset + 2);
	return (this.relativeOffset += 4), e === void 0 && (e = 4096), t + r / e / 10;
};
x.prototype.skip = function (e, t) {
	t === void 0 && (t = 1), (this.relativeOffset += df[e] * t);
};
x.prototype.parseULongList = function (e) {
	e === void 0 && (e = this.parseULong());
	const t = new Array(e),
		r = this.data;
	let n = this.offset + this.relativeOffset;
	for (let o = 0; o < e; o++) (t[o] = r.getUint32(n)), (n += 4);
	return (this.relativeOffset += e * 4), t;
};
x.prototype.parseOffset16List = x.prototype.parseUShortList = function (e) {
	e === void 0 && (e = this.parseUShort());
	const t = new Array(e),
		r = this.data;
	let n = this.offset + this.relativeOffset;
	for (let o = 0; o < e; o++) (t[o] = r.getUint16(n)), (n += 2);
	return (this.relativeOffset += e * 2), t;
};
x.prototype.parseShortList = function (e) {
	const t = new Array(e),
		r = this.data;
	let n = this.offset + this.relativeOffset;
	for (let o = 0; o < e; o++) (t[o] = r.getInt16(n)), (n += 2);
	return (this.relativeOffset += e * 2), t;
};
x.prototype.parseByteList = function (e) {
	const t = new Array(e),
		r = this.data;
	let n = this.offset + this.relativeOffset;
	for (let o = 0; o < e; o++) t[o] = r.getUint8(n++);
	return (this.relativeOffset += e), t;
};
x.prototype.parseList = function (e, t) {
	t || ((t = e), (e = this.parseUShort()));
	const r = new Array(e);
	for (let n = 0; n < e; n++) r[n] = t.call(this);
	return r;
};
x.prototype.parseList32 = function (e, t) {
	t || ((t = e), (e = this.parseULong()));
	const r = new Array(e);
	for (let n = 0; n < e; n++) r[n] = t.call(this);
	return r;
};
x.prototype.parseRecordList = function (e, t) {
	t || ((t = e), (e = this.parseUShort()));
	const r = new Array(e),
		n = Object.keys(t);
	for (let o = 0; o < e; o++) {
		const s = {};
		for (let i = 0; i < n.length; i++) {
			const a = n[i],
				l = t[a];
			s[a] = l.call(this);
		}
		r[o] = s;
	}
	return r;
};
x.prototype.parseRecordList32 = function (e, t) {
	t || ((t = e), (e = this.parseULong()));
	const r = new Array(e),
		n = Object.keys(t);
	for (let o = 0; o < e; o++) {
		const s = {};
		for (let i = 0; i < n.length; i++) {
			const a = n[i],
				l = t[a];
			s[a] = l.call(this);
		}
		r[o] = s;
	}
	return r;
};
x.prototype.parseStruct = function (e) {
	if (typeof e == "function") return e.call(this);
	{
		const t = Object.keys(e),
			r = {};
		for (let n = 0; n < t.length; n++) {
			const o = t[n],
				s = e[o];
			r[o] = s.call(this);
		}
		return r;
	}
};
x.prototype.parseValueRecord = function (e) {
	if ((e === void 0 && (e = this.parseUShort()), e === 0)) return;
	const t = {};
	return (
		e & 1 && (t.xPlacement = this.parseShort()),
		e & 2 && (t.yPlacement = this.parseShort()),
		e & 4 && (t.xAdvance = this.parseShort()),
		e & 8 && (t.yAdvance = this.parseShort()),
		e & 16 && ((t.xPlaDevice = void 0), this.parseShort()),
		e & 32 && ((t.yPlaDevice = void 0), this.parseShort()),
		e & 64 && ((t.xAdvDevice = void 0), this.parseShort()),
		e & 128 && ((t.yAdvDevice = void 0), this.parseShort()),
		t
	);
};
x.prototype.parseValueRecordList = function () {
	const e = this.parseUShort(),
		t = this.parseUShort(),
		r = new Array(t);
	for (let n = 0; n < t; n++) r[n] = this.parseValueRecord(e);
	return r;
};
x.prototype.parsePointer = function (e) {
	const t = this.parseOffset16();
	if (t > 0) return new x(this.data, this.offset + t).parseStruct(e);
};
x.prototype.parsePointer32 = function (e) {
	const t = this.parseOffset32();
	if (t > 0) return new x(this.data, this.offset + t).parseStruct(e);
};
x.prototype.parseListOfLists = function (e) {
	const t = this.parseOffset16List(),
		r = t.length,
		n = this.relativeOffset,
		o = new Array(r);
	for (let s = 0; s < r; s++) {
		const i = t[s];
		if (i === 0) {
			o[s] = void 0;
			continue;
		}
		if (((this.relativeOffset = i), e)) {
			const a = this.parseOffset16List(),
				l = new Array(a.length);
			for (let u = 0; u < a.length; u++)
				(this.relativeOffset = i + a[u]), (l[u] = e.call(this));
			o[s] = l;
		} else o[s] = this.parseUShortList();
	}
	return (this.relativeOffset = n), o;
};
x.prototype.parseCoverage = function () {
	const e = this.offset + this.relativeOffset,
		t = this.parseUShort(),
		r = this.parseUShort();
	if (t === 1) return { format: 1, glyphs: this.parseUShortList(r) };
	if (t === 2) {
		const n = new Array(r);
		for (let o = 0; o < r; o++)
			n[o] = {
				start: this.parseUShort(),
				end: this.parseUShort(),
				index: this.parseUShort(),
			};
		return { format: 2, ranges: n };
	}
	throw new Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");
};
x.prototype.parseClassDef = function () {
	const e = this.offset + this.relativeOffset,
		t = this.parseUShort();
	return t === 1
		? {
				format: 1,
				startGlyph: this.parseUShort(),
				classes: this.parseUShortList(),
			}
		: t === 2
			? {
					format: 2,
					ranges: this.parseRecordList({
						start: x.uShort,
						end: x.uShort,
						classId: x.uShort,
					}),
				}
			: (console.warn(
					`0x${e.toString(16)}: This font file uses an invalid ClassDef format of ${t}. It might be corrupted and should be reacquired if it doesn't display as intended.`,
				),
				{ format: t });
};
x.list = function (e, t) {
	return function () {
		return this.parseList(e, t);
	};
};
x.list32 = function (e, t) {
	return function () {
		return this.parseList32(e, t);
	};
};
x.recordList = function (e, t) {
	return function () {
		return this.parseRecordList(e, t);
	};
};
x.recordList32 = function (e, t) {
	return function () {
		return this.parseRecordList32(e, t);
	};
};
x.pointer = function (e) {
	return function () {
		return this.parsePointer(e);
	};
};
x.pointer32 = function (e) {
	return function () {
		return this.parsePointer32(e);
	};
};
x.tag = x.prototype.parseTag;
x.byte = x.prototype.parseByte;
x.uShort = x.offset16 = x.prototype.parseUShort;
x.uShortList = x.prototype.parseUShortList;
x.uLong = x.offset32 = x.prototype.parseULong;
x.uLongList = x.prototype.parseULongList;
x.struct = x.prototype.parseStruct;
x.coverage = x.prototype.parseCoverage;
x.classDef = x.prototype.parseClassDef;
const Ci = {
	reserved: x.uShort,
	reqFeatureIndex: x.uShort,
	featureIndexes: x.uShortList,
};
x.prototype.parseScriptList = function () {
	return (
		this.parsePointer(
			x.recordList({
				tag: x.tag,
				script: x.pointer({
					defaultLangSys: x.pointer(Ci),
					langSysRecords: x.recordList({ tag: x.tag, langSys: x.pointer(Ci) }),
				}),
			}),
		) || []
	);
};
x.prototype.parseFeatureList = function () {
	return (
		this.parsePointer(
			x.recordList({
				tag: x.tag,
				feature: x.pointer({
					featureParams: x.offset16,
					lookupListIndexes: x.uShortList,
				}),
			}),
		) || []
	);
};
x.prototype.parseLookupList = function (e) {
	return (
		this.parsePointer(
			x.list(
				x.pointer(function () {
					const t = this.parseUShort();
					ne.argument(
						1 <= t && t <= 9,
						"GPOS/GSUB lookup type " + t + " unknown.",
					);
					const r = this.parseUShort(),
						n = r & 16;
					return {
						lookupType: t,
						lookupFlag: r,
						subtables: this.parseList(x.pointer(e[t])),
						markFilteringSet: n ? this.parseUShort() : void 0,
					};
				}),
			),
		) || []
	);
};
x.prototype.parseFeatureVariationsList = function () {
	return (
		this.parsePointer32(function () {
			const e = this.parseUShort(),
				t = this.parseUShort();
			return (
				ne.argument(
					e === 1 && t < 1,
					"GPOS/GSUB feature variations table unknown.",
				),
				this.parseRecordList32({
					conditionSetOffset: x.offset32,
					featureTableSubstitutionOffset: x.offset32,
				})
			);
		}) || []
	);
};
const q = {
	getByte: Ti,
	getCard8: Ti,
	getUShort: rr,
	getCard16: rr,
	getShort: sf,
	getULong: Bo,
	getFixed: qa,
	getTag: af,
	getOffset: lf,
	getBytes: cf,
	bytesToString: uf,
	Parser: x,
};
function ff(e, t) {
	t.parseUShort(), (e.length = t.parseULong()), (e.language = t.parseULong());
	let r;
	(e.groupCount = r = t.parseULong()), (e.glyphIndexMap = {});
	for (let n = 0; n < r; n += 1) {
		const o = t.parseULong(),
			s = t.parseULong();
		let i = t.parseULong();
		for (let a = o; a <= s; a += 1) (e.glyphIndexMap[a] = i), i++;
	}
}
function pf(e, t, r, n, o) {
	(e.length = t.parseUShort()), (e.language = t.parseUShort());
	let s;
	(e.segCount = s = t.parseUShort() >> 1),
		t.skip("uShort", 3),
		(e.glyphIndexMap = {});
	const i = new q.Parser(r, n + o + 14),
		a = new q.Parser(r, n + o + 16 + s * 2),
		l = new q.Parser(r, n + o + 16 + s * 4),
		u = new q.Parser(r, n + o + 16 + s * 6);
	let d = n + o + 16 + s * 8;
	for (let p = 0; p < s - 1; p += 1) {
		let h;
		const f = i.parseUShort(),
			v = a.parseUShort(),
			S = l.parseShort(),
			b = u.parseUShort();
		for (let I = v; I <= f; I += 1)
			b !== 0
				? ((d = u.offset + u.relativeOffset - 2),
					(d += b),
					(d += (I - v) * 2),
					(h = q.getUShort(r, d)),
					h !== 0 && (h = (h + S) & 65535))
				: (h = (I + S) & 65535),
				(e.glyphIndexMap[I] = h);
	}
}
function hf(e, t) {
	const r = {};
	(r.version = q.getUShort(e, t)),
		ne.argument(r.version === 0, "cmap table version should be 0."),
		(r.numTables = q.getUShort(e, t + 2));
	let n = -1;
	for (let s = r.numTables - 1; s >= 0; s -= 1) {
		const i = q.getUShort(e, t + 4 + s * 8),
			a = q.getUShort(e, t + 4 + s * 8 + 2);
		if (
			(i === 3 && (a === 0 || a === 1 || a === 10)) ||
			(i === 0 && (a === 0 || a === 1 || a === 2 || a === 3 || a === 4))
		) {
			n = q.getULong(e, t + 4 + s * 8 + 4);
			break;
		}
	}
	if (n === -1) throw new Error("No valid cmap sub-tables found.");
	const o = new q.Parser(e, t + n);
	if (((r.format = o.parseUShort()), r.format === 12)) ff(r, o);
	else if (r.format === 4) pf(r, o, e, t, n);
	else
		throw new Error(
			"Only format 4 and 12 cmap tables are supported (found format " +
				r.format +
				").",
		);
	return r;
}
function gf(e, t, r) {
	e.segments.push({
		end: t,
		start: t,
		delta: -(t - r),
		offset: 0,
		glyphIndex: r,
	});
}
function mf(e) {
	e.segments.push({ end: 65535, start: 65535, delta: 1, offset: 0 });
}
function yf(e) {
	let t = !0,
		r;
	for (r = e.length - 1; r > 0; r -= 1)
		if (e.get(r).unicode > 65535) {
			console.log("Adding CMAP format 12 (needed!)"), (t = !1);
			break;
		}
	let n = [
		{ name: "version", type: "USHORT", value: 0 },
		{ name: "numTables", type: "USHORT", value: t ? 1 : 2 },
		{ name: "platformID", type: "USHORT", value: 3 },
		{ name: "encodingID", type: "USHORT", value: 1 },
		{ name: "offset", type: "ULONG", value: t ? 12 : 12 + 8 },
	];
	t ||
		(n = n.concat([
			{ name: "cmap12PlatformID", type: "USHORT", value: 3 },
			{ name: "cmap12EncodingID", type: "USHORT", value: 10 },
			{ name: "cmap12Offset", type: "ULONG", value: 0 },
		])),
		(n = n.concat([
			{ name: "format", type: "USHORT", value: 4 },
			{ name: "cmap4Length", type: "USHORT", value: 0 },
			{ name: "language", type: "USHORT", value: 0 },
			{ name: "segCountX2", type: "USHORT", value: 0 },
			{ name: "searchRange", type: "USHORT", value: 0 },
			{ name: "entrySelector", type: "USHORT", value: 0 },
			{ name: "rangeShift", type: "USHORT", value: 0 },
		]));
	const o = new W.Table("cmap", n);
	for (o.segments = [], r = 0; r < e.length; r += 1) {
		const f = e.get(r);
		for (let v = 0; v < f.unicodes.length; v += 1) gf(o, f.unicodes[v], r);
		o.segments = o.segments.sort(function (v, S) {
			return v.start - S.start;
		});
	}
	mf(o);
	const s = o.segments.length;
	let i = 0,
		a = [],
		l = [],
		u = [],
		d = [],
		p = [],
		h = [];
	for (r = 0; r < s; r += 1) {
		const f = o.segments[r];
		f.end <= 65535 && f.start <= 65535
			? ((a = a.concat({ name: "end_" + r, type: "USHORT", value: f.end })),
				(l = l.concat({ name: "start_" + r, type: "USHORT", value: f.start })),
				(u = u.concat({ name: "idDelta_" + r, type: "SHORT", value: f.delta })),
				(d = d.concat({
					name: "idRangeOffset_" + r,
					type: "USHORT",
					value: f.offset,
				})),
				f.glyphId !== void 0 &&
					(p = p.concat({
						name: "glyph_" + r,
						type: "USHORT",
						value: f.glyphId,
					})))
			: (i += 1),
			!t &&
				f.glyphIndex !== void 0 &&
				((h = h.concat({
					name: "cmap12Start_" + r,
					type: "ULONG",
					value: f.start,
				})),
				(h = h.concat({ name: "cmap12End_" + r, type: "ULONG", value: f.end })),
				(h = h.concat({
					name: "cmap12Glyph_" + r,
					type: "ULONG",
					value: f.glyphIndex,
				})));
	}
	if (
		((o.segCountX2 = (s - i) * 2),
		(o.searchRange =
			Math.pow(2, Math.floor(Math.log(s - i) / Math.log(2))) * 2),
		(o.entrySelector = Math.log(o.searchRange / 2) / Math.log(2)),
		(o.rangeShift = o.segCountX2 - o.searchRange),
		(o.fields = o.fields.concat(a)),
		o.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }),
		(o.fields = o.fields.concat(l)),
		(o.fields = o.fields.concat(u)),
		(o.fields = o.fields.concat(d)),
		(o.fields = o.fields.concat(p)),
		(o.cmap4Length =
			14 +
			a.length * 2 +
			2 +
			l.length * 2 +
			u.length * 2 +
			d.length * 2 +
			p.length * 2),
		!t)
	) {
		const f = 16 + h.length * 4;
		(o.cmap12Offset = 12 + 2 * 2 + 4 + o.cmap4Length),
			(o.fields = o.fields.concat([
				{ name: "cmap12Format", type: "USHORT", value: 12 },
				{ name: "cmap12Reserved", type: "USHORT", value: 0 },
				{ name: "cmap12Length", type: "ULONG", value: f },
				{ name: "cmap12Language", type: "ULONG", value: 0 },
				{ name: "cmap12nGroups", type: "ULONG", value: h.length / 3 },
			])),
			(o.fields = o.fields.concat(h));
	}
	return o;
}
const Xa = { parse: hf, make: yf },
	qn = [
		".notdef",
		"space",
		"exclam",
		"quotedbl",
		"numbersign",
		"dollar",
		"percent",
		"ampersand",
		"quoteright",
		"parenleft",
		"parenright",
		"asterisk",
		"plus",
		"comma",
		"hyphen",
		"period",
		"slash",
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"colon",
		"semicolon",
		"less",
		"equal",
		"greater",
		"question",
		"at",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"bracketleft",
		"backslash",
		"bracketright",
		"asciicircum",
		"underscore",
		"quoteleft",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"braceleft",
		"bar",
		"braceright",
		"asciitilde",
		"exclamdown",
		"cent",
		"sterling",
		"fraction",
		"yen",
		"florin",
		"section",
		"currency",
		"quotesingle",
		"quotedblleft",
		"guillemotleft",
		"guilsinglleft",
		"guilsinglright",
		"fi",
		"fl",
		"endash",
		"dagger",
		"daggerdbl",
		"periodcentered",
		"paragraph",
		"bullet",
		"quotesinglbase",
		"quotedblbase",
		"quotedblright",
		"guillemotright",
		"ellipsis",
		"perthousand",
		"questiondown",
		"grave",
		"acute",
		"circumflex",
		"tilde",
		"macron",
		"breve",
		"dotaccent",
		"dieresis",
		"ring",
		"cedilla",
		"hungarumlaut",
		"ogonek",
		"caron",
		"emdash",
		"AE",
		"ordfeminine",
		"Lslash",
		"Oslash",
		"OE",
		"ordmasculine",
		"ae",
		"dotlessi",
		"lslash",
		"oslash",
		"oe",
		"germandbls",
		"onesuperior",
		"logicalnot",
		"mu",
		"trademark",
		"Eth",
		"onehalf",
		"plusminus",
		"Thorn",
		"onequarter",
		"divide",
		"brokenbar",
		"degree",
		"thorn",
		"threequarters",
		"twosuperior",
		"registered",
		"minus",
		"eth",
		"multiply",
		"threesuperior",
		"copyright",
		"Aacute",
		"Acircumflex",
		"Adieresis",
		"Agrave",
		"Aring",
		"Atilde",
		"Ccedilla",
		"Eacute",
		"Ecircumflex",
		"Edieresis",
		"Egrave",
		"Iacute",
		"Icircumflex",
		"Idieresis",
		"Igrave",
		"Ntilde",
		"Oacute",
		"Ocircumflex",
		"Odieresis",
		"Ograve",
		"Otilde",
		"Scaron",
		"Uacute",
		"Ucircumflex",
		"Udieresis",
		"Ugrave",
		"Yacute",
		"Ydieresis",
		"Zcaron",
		"aacute",
		"acircumflex",
		"adieresis",
		"agrave",
		"aring",
		"atilde",
		"ccedilla",
		"eacute",
		"ecircumflex",
		"edieresis",
		"egrave",
		"iacute",
		"icircumflex",
		"idieresis",
		"igrave",
		"ntilde",
		"oacute",
		"ocircumflex",
		"odieresis",
		"ograve",
		"otilde",
		"scaron",
		"uacute",
		"ucircumflex",
		"udieresis",
		"ugrave",
		"yacute",
		"ydieresis",
		"zcaron",
		"exclamsmall",
		"Hungarumlautsmall",
		"dollaroldstyle",
		"dollarsuperior",
		"ampersandsmall",
		"Acutesmall",
		"parenleftsuperior",
		"parenrightsuperior",
		"266 ff",
		"onedotenleader",
		"zerooldstyle",
		"oneoldstyle",
		"twooldstyle",
		"threeoldstyle",
		"fouroldstyle",
		"fiveoldstyle",
		"sixoldstyle",
		"sevenoldstyle",
		"eightoldstyle",
		"nineoldstyle",
		"commasuperior",
		"threequartersemdash",
		"periodsuperior",
		"questionsmall",
		"asuperior",
		"bsuperior",
		"centsuperior",
		"dsuperior",
		"esuperior",
		"isuperior",
		"lsuperior",
		"msuperior",
		"nsuperior",
		"osuperior",
		"rsuperior",
		"ssuperior",
		"tsuperior",
		"ff",
		"ffi",
		"ffl",
		"parenleftinferior",
		"parenrightinferior",
		"Circumflexsmall",
		"hyphensuperior",
		"Gravesmall",
		"Asmall",
		"Bsmall",
		"Csmall",
		"Dsmall",
		"Esmall",
		"Fsmall",
		"Gsmall",
		"Hsmall",
		"Ismall",
		"Jsmall",
		"Ksmall",
		"Lsmall",
		"Msmall",
		"Nsmall",
		"Osmall",
		"Psmall",
		"Qsmall",
		"Rsmall",
		"Ssmall",
		"Tsmall",
		"Usmall",
		"Vsmall",
		"Wsmall",
		"Xsmall",
		"Ysmall",
		"Zsmall",
		"colonmonetary",
		"onefitted",
		"rupiah",
		"Tildesmall",
		"exclamdownsmall",
		"centoldstyle",
		"Lslashsmall",
		"Scaronsmall",
		"Zcaronsmall",
		"Dieresissmall",
		"Brevesmall",
		"Caronsmall",
		"Dotaccentsmall",
		"Macronsmall",
		"figuredash",
		"hypheninferior",
		"Ogoneksmall",
		"Ringsmall",
		"Cedillasmall",
		"questiondownsmall",
		"oneeighth",
		"threeeighths",
		"fiveeighths",
		"seveneighths",
		"onethird",
		"twothirds",
		"zerosuperior",
		"foursuperior",
		"fivesuperior",
		"sixsuperior",
		"sevensuperior",
		"eightsuperior",
		"ninesuperior",
		"zeroinferior",
		"oneinferior",
		"twoinferior",
		"threeinferior",
		"fourinferior",
		"fiveinferior",
		"sixinferior",
		"seveninferior",
		"eightinferior",
		"nineinferior",
		"centinferior",
		"dollarinferior",
		"periodinferior",
		"commainferior",
		"Agravesmall",
		"Aacutesmall",
		"Acircumflexsmall",
		"Atildesmall",
		"Adieresissmall",
		"Aringsmall",
		"AEsmall",
		"Ccedillasmall",
		"Egravesmall",
		"Eacutesmall",
		"Ecircumflexsmall",
		"Edieresissmall",
		"Igravesmall",
		"Iacutesmall",
		"Icircumflexsmall",
		"Idieresissmall",
		"Ethsmall",
		"Ntildesmall",
		"Ogravesmall",
		"Oacutesmall",
		"Ocircumflexsmall",
		"Otildesmall",
		"Odieresissmall",
		"OEsmall",
		"Oslashsmall",
		"Ugravesmall",
		"Uacutesmall",
		"Ucircumflexsmall",
		"Udieresissmall",
		"Yacutesmall",
		"Thornsmall",
		"Ydieresissmall",
		"001.000",
		"001.001",
		"001.002",
		"001.003",
		"Black",
		"Bold",
		"Book",
		"Light",
		"Medium",
		"Regular",
		"Roman",
		"Semibold",
	],
	vf = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"space",
		"exclam",
		"quotedbl",
		"numbersign",
		"dollar",
		"percent",
		"ampersand",
		"quoteright",
		"parenleft",
		"parenright",
		"asterisk",
		"plus",
		"comma",
		"hyphen",
		"period",
		"slash",
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"colon",
		"semicolon",
		"less",
		"equal",
		"greater",
		"question",
		"at",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"bracketleft",
		"backslash",
		"bracketright",
		"asciicircum",
		"underscore",
		"quoteleft",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"braceleft",
		"bar",
		"braceright",
		"asciitilde",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"exclamdown",
		"cent",
		"sterling",
		"fraction",
		"yen",
		"florin",
		"section",
		"currency",
		"quotesingle",
		"quotedblleft",
		"guillemotleft",
		"guilsinglleft",
		"guilsinglright",
		"fi",
		"fl",
		"",
		"endash",
		"dagger",
		"daggerdbl",
		"periodcentered",
		"",
		"paragraph",
		"bullet",
		"quotesinglbase",
		"quotedblbase",
		"quotedblright",
		"guillemotright",
		"ellipsis",
		"perthousand",
		"",
		"questiondown",
		"",
		"grave",
		"acute",
		"circumflex",
		"tilde",
		"macron",
		"breve",
		"dotaccent",
		"dieresis",
		"",
		"ring",
		"cedilla",
		"",
		"hungarumlaut",
		"ogonek",
		"caron",
		"emdash",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"AE",
		"",
		"ordfeminine",
		"",
		"",
		"",
		"",
		"Lslash",
		"Oslash",
		"OE",
		"ordmasculine",
		"",
		"",
		"",
		"",
		"",
		"ae",
		"",
		"",
		"",
		"dotlessi",
		"",
		"",
		"lslash",
		"oslash",
		"oe",
		"germandbls",
	],
	bf = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"space",
		"exclamsmall",
		"Hungarumlautsmall",
		"",
		"dollaroldstyle",
		"dollarsuperior",
		"ampersandsmall",
		"Acutesmall",
		"parenleftsuperior",
		"parenrightsuperior",
		"twodotenleader",
		"onedotenleader",
		"comma",
		"hyphen",
		"period",
		"fraction",
		"zerooldstyle",
		"oneoldstyle",
		"twooldstyle",
		"threeoldstyle",
		"fouroldstyle",
		"fiveoldstyle",
		"sixoldstyle",
		"sevenoldstyle",
		"eightoldstyle",
		"nineoldstyle",
		"colon",
		"semicolon",
		"commasuperior",
		"threequartersemdash",
		"periodsuperior",
		"questionsmall",
		"",
		"asuperior",
		"bsuperior",
		"centsuperior",
		"dsuperior",
		"esuperior",
		"",
		"",
		"isuperior",
		"",
		"",
		"lsuperior",
		"msuperior",
		"nsuperior",
		"osuperior",
		"",
		"",
		"rsuperior",
		"ssuperior",
		"tsuperior",
		"",
		"ff",
		"fi",
		"fl",
		"ffi",
		"ffl",
		"parenleftinferior",
		"",
		"parenrightinferior",
		"Circumflexsmall",
		"hyphensuperior",
		"Gravesmall",
		"Asmall",
		"Bsmall",
		"Csmall",
		"Dsmall",
		"Esmall",
		"Fsmall",
		"Gsmall",
		"Hsmall",
		"Ismall",
		"Jsmall",
		"Ksmall",
		"Lsmall",
		"Msmall",
		"Nsmall",
		"Osmall",
		"Psmall",
		"Qsmall",
		"Rsmall",
		"Ssmall",
		"Tsmall",
		"Usmall",
		"Vsmall",
		"Wsmall",
		"Xsmall",
		"Ysmall",
		"Zsmall",
		"colonmonetary",
		"onefitted",
		"rupiah",
		"Tildesmall",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"exclamdownsmall",
		"centoldstyle",
		"Lslashsmall",
		"",
		"",
		"Scaronsmall",
		"Zcaronsmall",
		"Dieresissmall",
		"Brevesmall",
		"Caronsmall",
		"",
		"Dotaccentsmall",
		"",
		"",
		"Macronsmall",
		"",
		"",
		"figuredash",
		"hypheninferior",
		"",
		"",
		"Ogoneksmall",
		"Ringsmall",
		"Cedillasmall",
		"",
		"",
		"",
		"onequarter",
		"onehalf",
		"threequarters",
		"questiondownsmall",
		"oneeighth",
		"threeeighths",
		"fiveeighths",
		"seveneighths",
		"onethird",
		"twothirds",
		"",
		"",
		"zerosuperior",
		"onesuperior",
		"twosuperior",
		"threesuperior",
		"foursuperior",
		"fivesuperior",
		"sixsuperior",
		"sevensuperior",
		"eightsuperior",
		"ninesuperior",
		"zeroinferior",
		"oneinferior",
		"twoinferior",
		"threeinferior",
		"fourinferior",
		"fiveinferior",
		"sixinferior",
		"seveninferior",
		"eightinferior",
		"nineinferior",
		"centinferior",
		"dollarinferior",
		"periodinferior",
		"commainferior",
		"Agravesmall",
		"Aacutesmall",
		"Acircumflexsmall",
		"Atildesmall",
		"Adieresissmall",
		"Aringsmall",
		"AEsmall",
		"Ccedillasmall",
		"Egravesmall",
		"Eacutesmall",
		"Ecircumflexsmall",
		"Edieresissmall",
		"Igravesmall",
		"Iacutesmall",
		"Icircumflexsmall",
		"Idieresissmall",
		"Ethsmall",
		"Ntildesmall",
		"Ogravesmall",
		"Oacutesmall",
		"Ocircumflexsmall",
		"Otildesmall",
		"Odieresissmall",
		"OEsmall",
		"Oslashsmall",
		"Ugravesmall",
		"Uacutesmall",
		"Ucircumflexsmall",
		"Udieresissmall",
		"Yacutesmall",
		"Thornsmall",
		"Ydieresissmall",
	],
	Lt = [
		".notdef",
		".null",
		"nonmarkingreturn",
		"space",
		"exclam",
		"quotedbl",
		"numbersign",
		"dollar",
		"percent",
		"ampersand",
		"quotesingle",
		"parenleft",
		"parenright",
		"asterisk",
		"plus",
		"comma",
		"hyphen",
		"period",
		"slash",
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"colon",
		"semicolon",
		"less",
		"equal",
		"greater",
		"question",
		"at",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"bracketleft",
		"backslash",
		"bracketright",
		"asciicircum",
		"underscore",
		"grave",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"braceleft",
		"bar",
		"braceright",
		"asciitilde",
		"Adieresis",
		"Aring",
		"Ccedilla",
		"Eacute",
		"Ntilde",
		"Odieresis",
		"Udieresis",
		"aacute",
		"agrave",
		"acircumflex",
		"adieresis",
		"atilde",
		"aring",
		"ccedilla",
		"eacute",
		"egrave",
		"ecircumflex",
		"edieresis",
		"iacute",
		"igrave",
		"icircumflex",
		"idieresis",
		"ntilde",
		"oacute",
		"ograve",
		"ocircumflex",
		"odieresis",
		"otilde",
		"uacute",
		"ugrave",
		"ucircumflex",
		"udieresis",
		"dagger",
		"degree",
		"cent",
		"sterling",
		"section",
		"bullet",
		"paragraph",
		"germandbls",
		"registered",
		"copyright",
		"trademark",
		"acute",
		"dieresis",
		"notequal",
		"AE",
		"Oslash",
		"infinity",
		"plusminus",
		"lessequal",
		"greaterequal",
		"yen",
		"mu",
		"partialdiff",
		"summation",
		"product",
		"pi",
		"integral",
		"ordfeminine",
		"ordmasculine",
		"Omega",
		"ae",
		"oslash",
		"questiondown",
		"exclamdown",
		"logicalnot",
		"radical",
		"florin",
		"approxequal",
		"Delta",
		"guillemotleft",
		"guillemotright",
		"ellipsis",
		"nonbreakingspace",
		"Agrave",
		"Atilde",
		"Otilde",
		"OE",
		"oe",
		"endash",
		"emdash",
		"quotedblleft",
		"quotedblright",
		"quoteleft",
		"quoteright",
		"divide",
		"lozenge",
		"ydieresis",
		"Ydieresis",
		"fraction",
		"currency",
		"guilsinglleft",
		"guilsinglright",
		"fi",
		"fl",
		"daggerdbl",
		"periodcentered",
		"quotesinglbase",
		"quotedblbase",
		"perthousand",
		"Acircumflex",
		"Ecircumflex",
		"Aacute",
		"Edieresis",
		"Egrave",
		"Iacute",
		"Icircumflex",
		"Idieresis",
		"Igrave",
		"Oacute",
		"Ocircumflex",
		"apple",
		"Ograve",
		"Uacute",
		"Ucircumflex",
		"Ugrave",
		"dotlessi",
		"circumflex",
		"tilde",
		"macron",
		"breve",
		"dotaccent",
		"ring",
		"cedilla",
		"hungarumlaut",
		"ogonek",
		"caron",
		"Lslash",
		"lslash",
		"Scaron",
		"scaron",
		"Zcaron",
		"zcaron",
		"brokenbar",
		"Eth",
		"eth",
		"Yacute",
		"yacute",
		"Thorn",
		"thorn",
		"minus",
		"multiply",
		"onesuperior",
		"twosuperior",
		"threesuperior",
		"onehalf",
		"onequarter",
		"threequarters",
		"franc",
		"Gbreve",
		"gbreve",
		"Idotaccent",
		"Scedilla",
		"scedilla",
		"Cacute",
		"cacute",
		"Ccaron",
		"ccaron",
		"dcroat",
	];
function Ya(e) {
	this.font = e;
}
Ya.prototype.charToGlyphIndex = function (e) {
	const t = e.codePointAt(0),
		r = this.font.glyphs;
	if (r)
		for (let n = 0; n < r.length; n += 1) {
			const o = r.get(n);
			for (let s = 0; s < o.unicodes.length; s += 1)
				if (o.unicodes[s] === t) return n;
		}
	return null;
};
function Za(e) {
	this.cmap = e;
}
Za.prototype.charToGlyphIndex = function (e) {
	return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
};
function or(e, t) {
	(this.encoding = e), (this.charset = t);
}
or.prototype.charToGlyphIndex = function (e) {
	const t = e.codePointAt(0),
		r = this.encoding[t];
	return this.charset.indexOf(r);
};
function No(e) {
	switch (e.version) {
		case 1:
			this.names = Lt.slice();
			break;
		case 2:
			this.names = new Array(e.numberOfGlyphs);
			for (let t = 0; t < e.numberOfGlyphs; t++)
				e.glyphNameIndex[t] < Lt.length
					? (this.names[t] = Lt[e.glyphNameIndex[t]])
					: (this.names[t] = e.names[e.glyphNameIndex[t] - Lt.length]);
			break;
		case 2.5:
			this.names = new Array(e.numberOfGlyphs);
			for (let t = 0; t < e.numberOfGlyphs; t++)
				this.names[t] = Lt[t + e.glyphNameIndex[t]];
			break;
		case 3:
			this.names = [];
			break;
		default:
			this.names = [];
			break;
	}
}
No.prototype.nameToGlyphIndex = function (e) {
	return this.names.indexOf(e);
};
No.prototype.glyphIndexToName = function (e) {
	return this.names[e];
};
function xf(e) {
	let t;
	const r = e.tables.cmap.glyphIndexMap,
		n = Object.keys(r);
	for (let o = 0; o < n.length; o += 1) {
		const s = n[o],
			i = r[s];
		(t = e.glyphs.get(i)), t.addUnicode(parseInt(s));
	}
	for (let o = 0; o < e.glyphs.length; o += 1)
		(t = e.glyphs.get(o)),
			e.cffEncoding
				? e.isCIDFont
					? (t.name = "gid" + o)
					: (t.name = e.cffEncoding.charset[o])
				: e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(o));
}
function Sf(e) {
	e._IndexToUnicodeMap = {};
	const t = e.tables.cmap.glyphIndexMap,
		r = Object.keys(t);
	for (let n = 0; n < r.length; n += 1) {
		const o = r[n];
		let s = t[o];
		e._IndexToUnicodeMap[s] === void 0
			? (e._IndexToUnicodeMap[s] = { unicodes: [parseInt(o)] })
			: e._IndexToUnicodeMap[s].unicodes.push(parseInt(o));
	}
}
function _f(e, t) {
	t.lowMemory ? Sf(e) : xf(e);
}
function kf(e, t, r, n, o) {
	e.beginPath(), e.moveTo(t, r), e.lineTo(n, o), e.stroke();
}
const At = { line: kf };
function Ff(e, t) {
	let r = t || new Ee();
	return {
		configurable: !0,
		get: function () {
			return typeof r == "function" && (r = r()), r;
		},
		set: function (n) {
			r = n;
		},
	};
}
function ze(e) {
	this.bindConstructorValues(e);
}
ze.prototype.bindConstructorValues = function (e) {
	(this.index = e.index || 0),
		(this.name = e.name || null),
		(this.unicode = e.unicode || void 0),
		(this.unicodes = e.unicodes || (e.unicode !== void 0 ? [e.unicode] : [])),
		"xMin" in e && (this.xMin = e.xMin),
		"yMin" in e && (this.yMin = e.yMin),
		"xMax" in e && (this.xMax = e.xMax),
		"yMax" in e && (this.yMax = e.yMax),
		"advanceWidth" in e && (this.advanceWidth = e.advanceWidth),
		Object.defineProperty(this, "path", Ff(this, e.path));
};
ze.prototype.addUnicode = function (e) {
	this.unicodes.length === 0 && (this.unicode = e), this.unicodes.push(e);
};
ze.prototype.getBoundingBox = function () {
	return this.path.getBoundingBox();
};
ze.prototype.getPath = function (e, t, r, n, o) {
	(e = e !== void 0 ? e : 0),
		(t = t !== void 0 ? t : 0),
		(r = r !== void 0 ? r : 72);
	let s, i;
	n || (n = {});
	let a = n.xScale,
		l = n.yScale;
	if (
		(n.hinting && o && o.hinting && (i = this.path && o.hinting.exec(this, r)),
		i)
	)
		(s = o.hinting.getCommands(i)),
			(e = Math.round(e)),
			(t = Math.round(t)),
			(a = l = 1);
	else {
		s = this.path.commands;
		const d = (1 / (this.path.unitsPerEm || 1e3)) * r;
		a === void 0 && (a = d), l === void 0 && (l = d);
	}
	const u = new Ee();
	for (let d = 0; d < s.length; d += 1) {
		const p = s[d];
		p.type === "M"
			? u.moveTo(e + p.x * a, t + -p.y * l)
			: p.type === "L"
				? u.lineTo(e + p.x * a, t + -p.y * l)
				: p.type === "Q"
					? u.quadraticCurveTo(
							e + p.x1 * a,
							t + -p.y1 * l,
							e + p.x * a,
							t + -p.y * l,
						)
					: p.type === "C"
						? u.curveTo(
								e + p.x1 * a,
								t + -p.y1 * l,
								e + p.x2 * a,
								t + -p.y2 * l,
								e + p.x * a,
								t + -p.y * l,
							)
						: p.type === "Z" && u.closePath();
	}
	return u;
};
ze.prototype.getContours = function () {
	if (this.points === void 0) return [];
	const e = [];
	let t = [];
	for (let r = 0; r < this.points.length; r += 1) {
		const n = this.points[r];
		t.push(n), n.lastPointOfContour && (e.push(t), (t = []));
	}
	return (
		ne.argument(
			t.length === 0,
			"There are still points left in the current contour.",
		),
		e
	);
};
ze.prototype.getMetrics = function () {
	const e = this.path.commands,
		t = [],
		r = [];
	for (let o = 0; o < e.length; o += 1) {
		const s = e[o];
		s.type !== "Z" && (t.push(s.x), r.push(s.y)),
			(s.type === "Q" || s.type === "C") && (t.push(s.x1), r.push(s.y1)),
			s.type === "C" && (t.push(s.x2), r.push(s.y2));
	}
	const n = {
		xMin: Math.min.apply(null, t),
		yMin: Math.min.apply(null, r),
		xMax: Math.max.apply(null, t),
		yMax: Math.max.apply(null, r),
		leftSideBearing: this.leftSideBearing,
	};
	return (
		isFinite(n.xMin) || (n.xMin = 0),
		isFinite(n.xMax) || (n.xMax = this.advanceWidth),
		isFinite(n.yMin) || (n.yMin = 0),
		isFinite(n.yMax) || (n.yMax = 0),
		(n.rightSideBearing =
			this.advanceWidth - n.leftSideBearing - (n.xMax - n.xMin)),
		n
	);
};
ze.prototype.draw = function (e, t, r, n, o) {
	this.getPath(t, r, n, o).draw(e);
};
ze.prototype.drawPoints = function (e, t, r, n) {
	function o(u, d, p, h) {
		e.beginPath();
		for (let f = 0; f < u.length; f += 1)
			e.moveTo(d + u[f].x * h, p + u[f].y * h),
				e.arc(d + u[f].x * h, p + u[f].y * h, 2, 0, Math.PI * 2, !1);
		e.closePath(), e.fill();
	}
	(t = t !== void 0 ? t : 0),
		(r = r !== void 0 ? r : 0),
		(n = n !== void 0 ? n : 24);
	const s = (1 / this.path.unitsPerEm) * n,
		i = [],
		a = [],
		l = this.path;
	for (let u = 0; u < l.commands.length; u += 1) {
		const d = l.commands[u];
		d.x !== void 0 && i.push({ x: d.x, y: -d.y }),
			d.x1 !== void 0 && a.push({ x: d.x1, y: -d.y1 }),
			d.x2 !== void 0 && a.push({ x: d.x2, y: -d.y2 });
	}
	(e.fillStyle = "blue"), o(i, t, r, s), (e.fillStyle = "red"), o(a, t, r, s);
};
ze.prototype.drawMetrics = function (e, t, r, n) {
	let o;
	(t = t !== void 0 ? t : 0),
		(r = r !== void 0 ? r : 0),
		(n = n !== void 0 ? n : 24),
		(o = (1 / this.path.unitsPerEm) * n),
		(e.lineWidth = 1),
		(e.strokeStyle = "black"),
		At.line(e, t, -1e4, t, 1e4),
		At.line(e, -1e4, r, 1e4, r);
	const s = this.xMin || 0;
	let i = this.yMin || 0;
	const a = this.xMax || 0;
	let l = this.yMax || 0;
	const u = this.advanceWidth || 0;
	(e.strokeStyle = "blue"),
		At.line(e, t + s * o, -1e4, t + s * o, 1e4),
		At.line(e, t + a * o, -1e4, t + a * o, 1e4),
		At.line(e, -1e4, r + -i * o, 1e4, r + -i * o),
		At.line(e, -1e4, r + -l * o, 1e4, r + -l * o),
		(e.strokeStyle = "green"),
		At.line(e, t + u * o, -1e4, t + u * o, 1e4);
};
function Ln(e, t, r) {
	Object.defineProperty(e, t, {
		get: function () {
			return e.path, e[r];
		},
		set: function (n) {
			e[r] = n;
		},
		enumerable: !0,
		configurable: !0,
	});
}
function Go(e, t) {
	if (((this.font = e), (this.glyphs = {}), Array.isArray(t)))
		for (let r = 0; r < t.length; r++) {
			const n = t[r];
			(n.path.unitsPerEm = e.unitsPerEm), (this.glyphs[r] = n);
		}
	this.length = (t && t.length) || 0;
}
Go.prototype.get = function (e) {
	if (this.glyphs[e] === void 0) {
		this.font._push(e),
			typeof this.glyphs[e] == "function" &&
				(this.glyphs[e] = this.glyphs[e]());
		let t = this.glyphs[e],
			r = this.font._IndexToUnicodeMap[e];
		if (r)
			for (let n = 0; n < r.unicodes.length; n++) t.addUnicode(r.unicodes[n]);
		this.font.cffEncoding
			? this.font.isCIDFont
				? (t.name = "gid" + e)
				: (t.name = this.font.cffEncoding.charset[e])
			: this.font.glyphNames.names &&
				(t.name = this.font.glyphNames.glyphIndexToName(e)),
			(this.glyphs[e].advanceWidth = this.font._hmtxTableData[e].advanceWidth),
			(this.glyphs[e].leftSideBearing =
				this.font._hmtxTableData[e].leftSideBearing);
	} else
		typeof this.glyphs[e] == "function" && (this.glyphs[e] = this.glyphs[e]());
	return this.glyphs[e];
};
Go.prototype.push = function (e, t) {
	(this.glyphs[e] = t), this.length++;
};
function wf(e, t) {
	return new ze({ index: t, font: e });
}
function Tf(e, t, r, n, o, s) {
	return function () {
		const i = new ze({ index: t, font: e });
		return (
			(i.path = function () {
				r(i, n, o);
				const a = s(e.glyphs, i);
				return (a.unitsPerEm = e.unitsPerEm), a;
			}),
			Ln(i, "xMin", "_xMin"),
			Ln(i, "xMax", "_xMax"),
			Ln(i, "yMin", "_yMin"),
			Ln(i, "yMax", "_yMax"),
			i
		);
	};
}
function Cf(e, t, r, n) {
	return function () {
		const o = new ze({ index: t, font: e });
		return (
			(o.path = function () {
				const s = r(e, o, n);
				return (s.unitsPerEm = e.unitsPerEm), s;
			}),
			o
		);
	};
}
const dt = {
	GlyphSet: Go,
	glyphLoader: wf,
	ttfGlyphLoader: Tf,
	cffGlyphLoader: Cf,
};
function Ka(e, t) {
	if (e === t) return !0;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let r = 0; r < e.length; r += 1) if (!Ka(e[r], t[r])) return !1;
		return !0;
	} else return !1;
}
function xo(e) {
	let t;
	return (
		e.length < 1240 ? (t = 107) : e.length < 33900 ? (t = 1131) : (t = 32768), t
	);
}
function Tt(e, t, r) {
	const n = [],
		o = [],
		s = q.getCard16(e, t);
	let i, a;
	if (s !== 0) {
		const l = q.getByte(e, t + 2);
		i = t + (s + 1) * l + 2;
		let u = t + 3;
		for (let d = 0; d < s + 1; d += 1) n.push(q.getOffset(e, u, l)), (u += l);
		a = i + n[s];
	} else a = t + 2;
	for (let l = 0; l < n.length - 1; l += 1) {
		let u = q.getBytes(e, i + n[l], i + n[l + 1]);
		r && (u = r(u)), o.push(u);
	}
	return { objects: o, startOffset: t, endOffset: a };
}
function Ef(e, t) {
	const r = [],
		n = q.getCard16(e, t);
	let o, s;
	if (n !== 0) {
		const i = q.getByte(e, t + 2);
		o = t + (n + 1) * i + 2;
		let a = t + 3;
		for (let l = 0; l < n + 1; l += 1) r.push(q.getOffset(e, a, i)), (a += i);
		s = o + r[n];
	} else s = t + 2;
	return { offsets: r, startOffset: t, endOffset: s };
}
function Of(e, t, r, n, o) {
	const s = q.getCard16(r, n);
	let i = 0;
	if (s !== 0) {
		const l = q.getByte(r, n + 2);
		i = n + (s + 1) * l + 2;
	}
	let a = q.getBytes(r, i + t[e], i + t[e + 1]);
	return o && (a = o(a)), a;
}
function Mf(e) {
	let t = "";
	const n = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		".",
		"E",
		"E-",
		null,
		"-",
	];
	for (;;) {
		const o = e.parseByte(),
			s = o >> 4,
			i = o & 15;
		if (s === 15 || ((t += n[s]), i === 15)) break;
		t += n[i];
	}
	return parseFloat(t);
}
function If(e, t) {
	let r, n, o, s;
	if (t === 28) return (r = e.parseByte()), (n = e.parseByte()), (r << 8) | n;
	if (t === 29)
		return (
			(r = e.parseByte()),
			(n = e.parseByte()),
			(o = e.parseByte()),
			(s = e.parseByte()),
			(r << 24) | (n << 16) | (o << 8) | s
		);
	if (t === 30) return Mf(e);
	if (t >= 32 && t <= 246) return t - 139;
	if (t >= 247 && t <= 250)
		return (r = e.parseByte()), (t - 247) * 256 + r + 108;
	if (t >= 251 && t <= 254)
		return (r = e.parseByte()), -(t - 251) * 256 - r - 108;
	throw new Error("Invalid b0 " + t);
}
function Uf(e) {
	const t = {};
	for (let r = 0; r < e.length; r += 1) {
		const n = e[r][0],
			o = e[r][1];
		let s;
		if (
			(o.length === 1 ? (s = o[0]) : (s = o),
			t.hasOwnProperty(n) && !isNaN(t[n]))
		)
			throw new Error("Object " + t + " already has key " + n);
		t[n] = s;
	}
	return t;
}
function Ja(e, t, r) {
	t = t !== void 0 ? t : 0;
	const n = new q.Parser(e, t),
		o = [];
	let s = [];
	for (r = r !== void 0 ? r : e.length; n.relativeOffset < r; ) {
		let i = n.parseByte();
		i <= 21
			? (i === 12 && (i = 1200 + n.parseByte()), o.push([i, s]), (s = []))
			: s.push(If(n, i));
	}
	return Uf(o);
}
function sn(e, t) {
	return t <= 390 ? (t = qn[t]) : (t = e[t - 391]), t;
}
function Qa(e, t, r) {
	const n = {};
	let o;
	for (let s = 0; s < t.length; s += 1) {
		const i = t[s];
		if (Array.isArray(i.type)) {
			const a = [];
			a.length = i.type.length;
			for (let l = 0; l < i.type.length; l++)
				(o = e[i.op] !== void 0 ? e[i.op][l] : void 0),
					o === void 0 &&
						(o =
							i.value !== void 0 && i.value[l] !== void 0 ? i.value[l] : null),
					i.type[l] === "SID" && (o = sn(r, o)),
					(a[l] = o);
			n[i.name] = a;
		} else
			(o = e[i.op]),
				o === void 0 && (o = i.value !== void 0 ? i.value : null),
				i.type === "SID" && (o = sn(r, o)),
				(n[i.name] = o);
	}
	return n;
}
function Pf(e, t) {
	const r = {};
	return (
		(r.formatMajor = q.getCard8(e, t)),
		(r.formatMinor = q.getCard8(e, t + 1)),
		(r.size = q.getCard8(e, t + 2)),
		(r.offsetSize = q.getCard8(e, t + 3)),
		(r.startOffset = t),
		(r.endOffset = t + 4),
		r
	);
}
const el = [
		{ name: "version", op: 0, type: "SID" },
		{ name: "notice", op: 1, type: "SID" },
		{ name: "copyright", op: 1200, type: "SID" },
		{ name: "fullName", op: 2, type: "SID" },
		{ name: "familyName", op: 3, type: "SID" },
		{ name: "weight", op: 4, type: "SID" },
		{ name: "isFixedPitch", op: 1201, type: "number", value: 0 },
		{ name: "italicAngle", op: 1202, type: "number", value: 0 },
		{ name: "underlinePosition", op: 1203, type: "number", value: -100 },
		{ name: "underlineThickness", op: 1204, type: "number", value: 50 },
		{ name: "paintType", op: 1205, type: "number", value: 0 },
		{ name: "charstringType", op: 1206, type: "number", value: 2 },
		{
			name: "fontMatrix",
			op: 1207,
			type: ["real", "real", "real", "real", "real", "real"],
			value: [0.001, 0, 0, 0.001, 0, 0],
		},
		{ name: "uniqueId", op: 13, type: "number" },
		{
			name: "fontBBox",
			op: 5,
			type: ["number", "number", "number", "number"],
			value: [0, 0, 0, 0],
		},
		{ name: "strokeWidth", op: 1208, type: "number", value: 0 },
		{ name: "xuid", op: 14, type: [], value: null },
		{ name: "charset", op: 15, type: "offset", value: 0 },
		{ name: "encoding", op: 16, type: "offset", value: 0 },
		{ name: "charStrings", op: 17, type: "offset", value: 0 },
		{ name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
		{ name: "ros", op: 1230, type: ["SID", "SID", "number"] },
		{ name: "cidFontVersion", op: 1231, type: "number", value: 0 },
		{ name: "cidFontRevision", op: 1232, type: "number", value: 0 },
		{ name: "cidFontType", op: 1233, type: "number", value: 0 },
		{ name: "cidCount", op: 1234, type: "number", value: 8720 },
		{ name: "uidBase", op: 1235, type: "number" },
		{ name: "fdArray", op: 1236, type: "offset" },
		{ name: "fdSelect", op: 1237, type: "offset" },
		{ name: "fontName", op: 1238, type: "SID" },
	],
	tl = [
		{ name: "subrs", op: 19, type: "offset", value: 0 },
		{ name: "defaultWidthX", op: 20, type: "number", value: 0 },
		{ name: "nominalWidthX", op: 21, type: "number", value: 0 },
	];
function Af(e, t) {
	const r = Ja(e, 0, e.byteLength);
	return Qa(r, el, t);
}
function nl(e, t, r, n) {
	const o = Ja(e, t, r);
	return Qa(o, tl, n);
}
function Ei(e, t, r, n) {
	const o = [];
	for (let s = 0; s < r.length; s += 1) {
		const i = new DataView(new Uint8Array(r[s]).buffer),
			a = Af(i, n);
		(a._subrs = []),
			(a._subrsBias = 0),
			(a._defaultWidthX = 0),
			(a._nominalWidthX = 0);
		const l = a.private[0],
			u = a.private[1];
		if (l !== 0 && u !== 0) {
			const d = nl(e, u + t, l, n);
			if (
				((a._defaultWidthX = d.defaultWidthX),
				(a._nominalWidthX = d.nominalWidthX),
				d.subrs !== 0)
			) {
				const p = u + d.subrs,
					h = Tt(e, p + t);
				(a._subrs = h.objects), (a._subrsBias = xo(a._subrs));
			}
			a._privateDict = d;
		}
		o.push(a);
	}
	return o;
}
function Df(e, t, r, n) {
	let o, s;
	const i = new q.Parser(e, t);
	r -= 1;
	const a = [".notdef"],
		l = i.parseCard8();
	if (l === 0)
		for (let u = 0; u < r; u += 1) (o = i.parseSID()), a.push(sn(n, o));
	else if (l === 1)
		for (; a.length <= r; ) {
			(o = i.parseSID()), (s = i.parseCard8());
			for (let u = 0; u <= s; u += 1) a.push(sn(n, o)), (o += 1);
		}
	else if (l === 2)
		for (; a.length <= r; ) {
			(o = i.parseSID()), (s = i.parseCard16());
			for (let u = 0; u <= s; u += 1) a.push(sn(n, o)), (o += 1);
		}
	else throw new Error("Unknown charset format " + l);
	return a;
}
function Lf(e, t, r) {
	let n;
	const o = {},
		s = new q.Parser(e, t),
		i = s.parseCard8();
	if (i === 0) {
		const a = s.parseCard8();
		for (let l = 0; l < a; l += 1) (n = s.parseCard8()), (o[n] = l);
	} else if (i === 1) {
		const a = s.parseCard8();
		n = 1;
		for (let l = 0; l < a; l += 1) {
			const u = s.parseCard8(),
				d = s.parseCard8();
			for (let p = u; p <= u + d; p += 1) (o[p] = n), (n += 1);
		}
	} else throw new Error("Unknown encoding format " + i);
	return new or(o, r);
}
function Oi(e, t, r) {
	let n, o, s, i;
	const a = new Ee(),
		l = [];
	let u = 0,
		d = !1,
		p = !1,
		h = 0,
		f = 0,
		v,
		S,
		b,
		I;
	if (e.isCIDFont) {
		const _ = e.tables.cff.topDict._fdSelect[t.index],
			k = e.tables.cff.topDict._fdArray[_];
		(v = k._subrs),
			(S = k._subrsBias),
			(b = k._defaultWidthX),
			(I = k._nominalWidthX);
	} else
		(v = e.tables.cff.topDict._subrs),
			(S = e.tables.cff.topDict._subrsBias),
			(b = e.tables.cff.topDict._defaultWidthX),
			(I = e.tables.cff.topDict._nominalWidthX);
	let P = b;
	function M(_, k) {
		p && a.closePath(), a.moveTo(_, k), (p = !0);
	}
	function j() {
		let _;
		(_ = l.length % 2 !== 0),
			_ && !d && (P = l.shift() + I),
			(u += l.length >> 1),
			(l.length = 0),
			(d = !0);
	}
	function re(_) {
		let k,
			C,
			N,
			ae,
			ee,
			T,
			z,
			F,
			B,
			R,
			Z,
			ie,
			U = 0;
		for (; U < _.length; ) {
			let X = _[U];
			switch (((U += 1), X)) {
				case 1:
					j();
					break;
				case 3:
					j();
					break;
				case 4:
					l.length > 1 && !d && ((P = l.shift() + I), (d = !0)),
						(f += l.pop()),
						M(h, f);
					break;
				case 5:
					for (; l.length > 0; )
						(h += l.shift()), (f += l.shift()), a.lineTo(h, f);
					break;
				case 6:
					for (
						;
						l.length > 0 && ((h += l.shift()), a.lineTo(h, f), l.length !== 0);
					)
						(f += l.shift()), a.lineTo(h, f);
					break;
				case 7:
					for (
						;
						l.length > 0 && ((f += l.shift()), a.lineTo(h, f), l.length !== 0);
					)
						(h += l.shift()), a.lineTo(h, f);
					break;
				case 8:
					for (; l.length > 0; )
						(n = h + l.shift()),
							(o = f + l.shift()),
							(s = n + l.shift()),
							(i = o + l.shift()),
							(h = s + l.shift()),
							(f = i + l.shift()),
							a.curveTo(n, o, s, i, h, f);
					break;
				case 10:
					(ee = l.pop() + S), (T = v[ee]), T && re(T);
					break;
				case 11:
					return;
				case 12:
					switch (((X = _[U]), (U += 1), X)) {
						case 35:
							(n = h + l.shift()),
								(o = f + l.shift()),
								(s = n + l.shift()),
								(i = o + l.shift()),
								(z = s + l.shift()),
								(F = i + l.shift()),
								(B = z + l.shift()),
								(R = F + l.shift()),
								(Z = B + l.shift()),
								(ie = R + l.shift()),
								(h = Z + l.shift()),
								(f = ie + l.shift()),
								l.shift(),
								a.curveTo(n, o, s, i, z, F),
								a.curveTo(B, R, Z, ie, h, f);
							break;
						case 34:
							(n = h + l.shift()),
								(o = f),
								(s = n + l.shift()),
								(i = o + l.shift()),
								(z = s + l.shift()),
								(F = i),
								(B = z + l.shift()),
								(R = i),
								(Z = B + l.shift()),
								(ie = f),
								(h = Z + l.shift()),
								a.curveTo(n, o, s, i, z, F),
								a.curveTo(B, R, Z, ie, h, f);
							break;
						case 36:
							(n = h + l.shift()),
								(o = f + l.shift()),
								(s = n + l.shift()),
								(i = o + l.shift()),
								(z = s + l.shift()),
								(F = i),
								(B = z + l.shift()),
								(R = i),
								(Z = B + l.shift()),
								(ie = R + l.shift()),
								(h = Z + l.shift()),
								a.curveTo(n, o, s, i, z, F),
								a.curveTo(B, R, Z, ie, h, f);
							break;
						case 37:
							(n = h + l.shift()),
								(o = f + l.shift()),
								(s = n + l.shift()),
								(i = o + l.shift()),
								(z = s + l.shift()),
								(F = i + l.shift()),
								(B = z + l.shift()),
								(R = F + l.shift()),
								(Z = B + l.shift()),
								(ie = R + l.shift()),
								Math.abs(Z - h) > Math.abs(ie - f)
									? (h = Z + l.shift())
									: (f = ie + l.shift()),
								a.curveTo(n, o, s, i, z, F),
								a.curveTo(B, R, Z, ie, h, f);
							break;
						default:
							console.log("Glyph " + t.index + ": unknown operator 1200" + X),
								(l.length = 0);
					}
					break;
				case 14:
					l.length > 0 && !d && ((P = l.shift() + I), (d = !0)),
						p && (a.closePath(), (p = !1));
					break;
				case 18:
					j();
					break;
				case 19:
				case 20:
					j(), (U += (u + 7) >> 3);
					break;
				case 21:
					l.length > 2 && !d && ((P = l.shift() + I), (d = !0)),
						(f += l.pop()),
						(h += l.pop()),
						M(h, f);
					break;
				case 22:
					l.length > 1 && !d && ((P = l.shift() + I), (d = !0)),
						(h += l.pop()),
						M(h, f);
					break;
				case 23:
					j();
					break;
				case 24:
					for (; l.length > 2; )
						(n = h + l.shift()),
							(o = f + l.shift()),
							(s = n + l.shift()),
							(i = o + l.shift()),
							(h = s + l.shift()),
							(f = i + l.shift()),
							a.curveTo(n, o, s, i, h, f);
					(h += l.shift()), (f += l.shift()), a.lineTo(h, f);
					break;
				case 25:
					for (; l.length > 6; )
						(h += l.shift()), (f += l.shift()), a.lineTo(h, f);
					(n = h + l.shift()),
						(o = f + l.shift()),
						(s = n + l.shift()),
						(i = o + l.shift()),
						(h = s + l.shift()),
						(f = i + l.shift()),
						a.curveTo(n, o, s, i, h, f);
					break;
				case 26:
					for (l.length % 2 && (h += l.shift()); l.length > 0; )
						(n = h),
							(o = f + l.shift()),
							(s = n + l.shift()),
							(i = o + l.shift()),
							(h = s),
							(f = i + l.shift()),
							a.curveTo(n, o, s, i, h, f);
					break;
				case 27:
					for (l.length % 2 && (f += l.shift()); l.length > 0; )
						(n = h + l.shift()),
							(o = f),
							(s = n + l.shift()),
							(i = o + l.shift()),
							(h = s + l.shift()),
							(f = i),
							a.curveTo(n, o, s, i, h, f);
					break;
				case 28:
					(k = _[U]),
						(C = _[U + 1]),
						l.push(((k << 24) | (C << 16)) >> 16),
						(U += 2);
					break;
				case 29:
					(ee = l.pop() + e.gsubrsBias), (T = e.gsubrs[ee]), T && re(T);
					break;
				case 30:
					for (
						;
						l.length > 0 &&
						((n = h),
						(o = f + l.shift()),
						(s = n + l.shift()),
						(i = o + l.shift()),
						(h = s + l.shift()),
						(f = i + (l.length === 1 ? l.shift() : 0)),
						a.curveTo(n, o, s, i, h, f),
						l.length !== 0);
					)
						(n = h + l.shift()),
							(o = f),
							(s = n + l.shift()),
							(i = o + l.shift()),
							(f = i + l.shift()),
							(h = s + (l.length === 1 ? l.shift() : 0)),
							a.curveTo(n, o, s, i, h, f);
					break;
				case 31:
					for (
						;
						l.length > 0 &&
						((n = h + l.shift()),
						(o = f),
						(s = n + l.shift()),
						(i = o + l.shift()),
						(f = i + l.shift()),
						(h = s + (l.length === 1 ? l.shift() : 0)),
						a.curveTo(n, o, s, i, h, f),
						l.length !== 0);
					)
						(n = h),
							(o = f + l.shift()),
							(s = n + l.shift()),
							(i = o + l.shift()),
							(h = s + l.shift()),
							(f = i + (l.length === 1 ? l.shift() : 0)),
							a.curveTo(n, o, s, i, h, f);
					break;
				default:
					X < 32
						? console.log("Glyph " + t.index + ": unknown operator " + X)
						: X < 247
							? l.push(X - 139)
							: X < 251
								? ((k = _[U]), (U += 1), l.push((X - 247) * 256 + k + 108))
								: X < 255
									? ((k = _[U]), (U += 1), l.push(-(X - 251) * 256 - k - 108))
									: ((k = _[U]),
										(C = _[U + 1]),
										(N = _[U + 2]),
										(ae = _[U + 3]),
										(U += 4),
										l.push(((k << 24) | (C << 16) | (N << 8) | ae) / 65536));
			}
		}
	}
	return re(r), (t.advanceWidth = P), a;
}
function Rf(e, t, r, n) {
	const o = [];
	let s;
	const i = new q.Parser(e, t),
		a = i.parseCard8();
	if (a === 0)
		for (let l = 0; l < r; l++) {
			if (((s = i.parseCard8()), s >= n))
				throw new Error(
					"CFF table CID Font FDSelect has bad FD index value " +
						s +
						" (FD count " +
						n +
						")",
				);
			o.push(s);
		}
	else if (a === 3) {
		const l = i.parseCard16();
		let u = i.parseCard16();
		if (u !== 0)
			throw new Error(
				"CFF Table CID Font FDSelect format 3 range has bad initial GID " + u,
			);
		let d;
		for (let p = 0; p < l; p++) {
			if (((s = i.parseCard8()), (d = i.parseCard16()), s >= n))
				throw new Error(
					"CFF table CID Font FDSelect has bad FD index value " +
						s +
						" (FD count " +
						n +
						")",
				);
			if (d > r)
				throw new Error(
					"CFF Table CID Font FDSelect format 3 range has bad GID " + d,
				);
			for (; u < d; u++) o.push(s);
			u = d;
		}
		if (d !== r)
			throw new Error(
				"CFF Table CID Font FDSelect format 3 range has bad final GID " + d,
			);
	} else
		throw new Error(
			"CFF Table CID Font FDSelect table has unsupported format " + a,
		);
	return o;
}
function Bf(e, t, r, n) {
	r.tables.cff = {};
	const o = Pf(e, t),
		s = Tt(e, o.endOffset, q.bytesToString),
		i = Tt(e, s.endOffset),
		a = Tt(e, i.endOffset, q.bytesToString),
		l = Tt(e, a.endOffset);
	(r.gsubrs = l.objects), (r.gsubrsBias = xo(r.gsubrs));
	const u = Ei(e, t, i.objects, a.objects);
	if (u.length !== 1)
		throw new Error(
			"CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " +
				u.length,
		);
	const d = u[0];
	if (
		((r.tables.cff.topDict = d),
		d._privateDict &&
			((r.defaultWidthX = d._privateDict.defaultWidthX),
			(r.nominalWidthX = d._privateDict.nominalWidthX)),
		d.ros[0] !== void 0 && d.ros[1] !== void 0 && (r.isCIDFont = !0),
		r.isCIDFont)
	) {
		let S = d.fdArray,
			b = d.fdSelect;
		if (S === 0 || b === 0)
			throw new Error(
				"Font is marked as a CID font, but FDArray and/or FDSelect information is missing",
			);
		S += t;
		const I = Tt(e, S),
			P = Ei(e, t, I.objects, a.objects);
		(d._fdArray = P), (b += t), (d._fdSelect = Rf(e, b, r.numGlyphs, P.length));
	}
	const p = t + d.private[1],
		h = nl(e, p, d.private[0], a.objects);
	if (
		((r.defaultWidthX = h.defaultWidthX),
		(r.nominalWidthX = h.nominalWidthX),
		h.subrs !== 0)
	) {
		const S = p + h.subrs,
			b = Tt(e, S);
		(r.subrs = b.objects), (r.subrsBias = xo(r.subrs));
	} else (r.subrs = []), (r.subrsBias = 0);
	let f;
	n.lowMemory
		? ((f = Ef(e, t + d.charStrings)), (r.nGlyphs = f.offsets.length))
		: ((f = Tt(e, t + d.charStrings)), (r.nGlyphs = f.objects.length));
	const v = Df(e, t + d.charset, r.nGlyphs, a.objects);
	if (
		(d.encoding === 0
			? (r.cffEncoding = new or(vf, v))
			: d.encoding === 1
				? (r.cffEncoding = new or(bf, v))
				: (r.cffEncoding = Lf(e, t + d.encoding, v)),
		(r.encoding = r.encoding || r.cffEncoding),
		(r.glyphs = new dt.GlyphSet(r)),
		n.lowMemory)
	)
		r._push = function (S) {
			const b = Of(S, f.offsets, e, t + d.charStrings);
			r.glyphs.push(S, dt.cffGlyphLoader(r, S, Oi, b));
		};
	else
		for (let S = 0; S < r.nGlyphs; S += 1) {
			const b = f.objects[S];
			r.glyphs.push(S, dt.cffGlyphLoader(r, S, Oi, b));
		}
}
function rl(e, t) {
	let r,
		n = qn.indexOf(e);
	return (
		n >= 0 && (r = n),
		(n = t.indexOf(e)),
		n >= 0 ? (r = n + qn.length) : ((r = qn.length + t.length), t.push(e)),
		r
	);
}
function Nf() {
	return new W.Record("Header", [
		{ name: "major", type: "Card8", value: 1 },
		{ name: "minor", type: "Card8", value: 0 },
		{ name: "hdrSize", type: "Card8", value: 4 },
		{ name: "major", type: "Card8", value: 1 },
	]);
}
function Gf(e) {
	const t = new W.Record("Name INDEX", [
		{ name: "names", type: "INDEX", value: [] },
	]);
	t.names = [];
	for (let r = 0; r < e.length; r += 1)
		t.names.push({ name: "name_" + r, type: "NAME", value: e[r] });
	return t;
}
function ol(e, t, r) {
	const n = {};
	for (let o = 0; o < e.length; o += 1) {
		const s = e[o];
		let i = t[s.name];
		i !== void 0 &&
			!Ka(i, s.value) &&
			(s.type === "SID" && (i = rl(i, r)),
			(n[s.op] = { name: s.name, type: s.type, value: i }));
	}
	return n;
}
function Mi(e, t) {
	const r = new W.Record("Top DICT", [
		{ name: "dict", type: "DICT", value: {} },
	]);
	return (r.dict = ol(el, e, t)), r;
}
function Ii(e) {
	const t = new W.Record("Top DICT INDEX", [
		{ name: "topDicts", type: "INDEX", value: [] },
	]);
	return (t.topDicts = [{ name: "topDict_0", type: "TABLE", value: e }]), t;
}
function jf(e) {
	const t = new W.Record("String INDEX", [
		{ name: "strings", type: "INDEX", value: [] },
	]);
	t.strings = [];
	for (let r = 0; r < e.length; r += 1)
		t.strings.push({ name: "string_" + r, type: "STRING", value: e[r] });
	return t;
}
function Hf() {
	return new W.Record("Global Subr INDEX", [
		{ name: "subrs", type: "INDEX", value: [] },
	]);
}
function Wf(e, t) {
	const r = new W.Record("Charsets", [
		{ name: "format", type: "Card8", value: 0 },
	]);
	for (let n = 0; n < e.length; n += 1) {
		const o = e[n],
			s = rl(o, t);
		r.fields.push({ name: "glyph_" + n, type: "SID", value: s });
	}
	return r;
}
function zf(e) {
	const t = [],
		r = e.path;
	t.push({ name: "width", type: "NUMBER", value: e.advanceWidth });
	let n = 0,
		o = 0;
	for (let s = 0; s < r.commands.length; s += 1) {
		let i,
			a,
			l = r.commands[s];
		if (l.type === "Q") {
			const u = 0.3333333333333333,
				d = 2 / 3;
			l = {
				type: "C",
				x: l.x,
				y: l.y,
				x1: Math.round(u * n + d * l.x1),
				y1: Math.round(u * o + d * l.y1),
				x2: Math.round(u * l.x + d * l.x1),
				y2: Math.round(u * l.y + d * l.y1),
			};
		}
		if (l.type === "M")
			(i = Math.round(l.x - n)),
				(a = Math.round(l.y - o)),
				t.push({ name: "dx", type: "NUMBER", value: i }),
				t.push({ name: "dy", type: "NUMBER", value: a }),
				t.push({ name: "rmoveto", type: "OP", value: 21 }),
				(n = Math.round(l.x)),
				(o = Math.round(l.y));
		else if (l.type === "L")
			(i = Math.round(l.x - n)),
				(a = Math.round(l.y - o)),
				t.push({ name: "dx", type: "NUMBER", value: i }),
				t.push({ name: "dy", type: "NUMBER", value: a }),
				t.push({ name: "rlineto", type: "OP", value: 5 }),
				(n = Math.round(l.x)),
				(o = Math.round(l.y));
		else if (l.type === "C") {
			const u = Math.round(l.x1 - n),
				d = Math.round(l.y1 - o),
				p = Math.round(l.x2 - l.x1),
				h = Math.round(l.y2 - l.y1);
			(i = Math.round(l.x - l.x2)),
				(a = Math.round(l.y - l.y2)),
				t.push({ name: "dx1", type: "NUMBER", value: u }),
				t.push({ name: "dy1", type: "NUMBER", value: d }),
				t.push({ name: "dx2", type: "NUMBER", value: p }),
				t.push({ name: "dy2", type: "NUMBER", value: h }),
				t.push({ name: "dx", type: "NUMBER", value: i }),
				t.push({ name: "dy", type: "NUMBER", value: a }),
				t.push({ name: "rrcurveto", type: "OP", value: 8 }),
				(n = Math.round(l.x)),
				(o = Math.round(l.y));
		}
	}
	return t.push({ name: "endchar", type: "OP", value: 14 }), t;
}
function $f(e) {
	const t = new W.Record("CharStrings INDEX", [
		{ name: "charStrings", type: "INDEX", value: [] },
	]);
	for (let r = 0; r < e.length; r += 1) {
		const n = e.get(r),
			o = zf(n);
		t.charStrings.push({ name: n.name, type: "CHARSTRING", value: o });
	}
	return t;
}
function Vf(e, t) {
	const r = new W.Record("Private DICT", [
		{ name: "dict", type: "DICT", value: {} },
	]);
	return (r.dict = ol(tl, e, t)), r;
}
function qf(e, t) {
	const r = new W.Table("CFF ", [
			{ name: "header", type: "RECORD" },
			{ name: "nameIndex", type: "RECORD" },
			{ name: "topDictIndex", type: "RECORD" },
			{ name: "stringIndex", type: "RECORD" },
			{ name: "globalSubrIndex", type: "RECORD" },
			{ name: "charsets", type: "RECORD" },
			{ name: "charStringsIndex", type: "RECORD" },
			{ name: "privateDict", type: "RECORD" },
		]),
		n = 1 / t.unitsPerEm,
		o = {
			version: t.version,
			fullName: t.fullName,
			familyName: t.familyName,
			weight: t.weightName,
			fontBBox: t.fontBBox || [0, 0, 0, 0],
			fontMatrix: [n, 0, 0, n, 0, 0],
			charset: 999,
			encoding: 0,
			charStrings: 999,
			private: [0, 999],
		},
		s = {},
		i = [];
	let a;
	for (let p = 1; p < e.length; p += 1) (a = e.get(p)), i.push(a.name);
	const l = [];
	(r.header = Nf()), (r.nameIndex = Gf([t.postScriptName]));
	let u = Mi(o, l);
	(r.topDictIndex = Ii(u)),
		(r.globalSubrIndex = Hf()),
		(r.charsets = Wf(i, l)),
		(r.charStringsIndex = $f(e)),
		(r.privateDict = Vf(s, l)),
		(r.stringIndex = jf(l));
	const d =
		r.header.sizeOf() +
		r.nameIndex.sizeOf() +
		r.topDictIndex.sizeOf() +
		r.stringIndex.sizeOf() +
		r.globalSubrIndex.sizeOf();
	return (
		(o.charset = d),
		(o.encoding = 0),
		(o.charStrings = o.charset + r.charsets.sizeOf()),
		(o.private[1] = o.charStrings + r.charStringsIndex.sizeOf()),
		(u = Mi(o, l)),
		(r.topDictIndex = Ii(u)),
		r
	);
}
const sl = { parse: Bf, make: qf };
function Xf(e, t) {
	const r = {},
		n = new q.Parser(e, t);
	return (
		(r.version = n.parseVersion()),
		(r.fontRevision = Math.round(n.parseFixed() * 1e3) / 1e3),
		(r.checkSumAdjustment = n.parseULong()),
		(r.magicNumber = n.parseULong()),
		ne.argument(
			r.magicNumber === 1594834165,
			"Font header has wrong magic number.",
		),
		(r.flags = n.parseUShort()),
		(r.unitsPerEm = n.parseUShort()),
		(r.created = n.parseLongDateTime()),
		(r.modified = n.parseLongDateTime()),
		(r.xMin = n.parseShort()),
		(r.yMin = n.parseShort()),
		(r.xMax = n.parseShort()),
		(r.yMax = n.parseShort()),
		(r.macStyle = n.parseUShort()),
		(r.lowestRecPPEM = n.parseUShort()),
		(r.fontDirectionHint = n.parseShort()),
		(r.indexToLocFormat = n.parseShort()),
		(r.glyphDataFormat = n.parseShort()),
		r
	);
}
function Yf(e) {
	const t = Math.round(new Date().getTime() / 1e3) + 2082844800;
	let r = t;
	return (
		e.createdTimestamp && (r = e.createdTimestamp + 2082844800),
		new W.Table(
			"head",
			[
				{ name: "version", type: "FIXED", value: 65536 },
				{ name: "fontRevision", type: "FIXED", value: 65536 },
				{ name: "checkSumAdjustment", type: "ULONG", value: 0 },
				{ name: "magicNumber", type: "ULONG", value: 1594834165 },
				{ name: "flags", type: "USHORT", value: 0 },
				{ name: "unitsPerEm", type: "USHORT", value: 1e3 },
				{ name: "created", type: "LONGDATETIME", value: r },
				{ name: "modified", type: "LONGDATETIME", value: t },
				{ name: "xMin", type: "SHORT", value: 0 },
				{ name: "yMin", type: "SHORT", value: 0 },
				{ name: "xMax", type: "SHORT", value: 0 },
				{ name: "yMax", type: "SHORT", value: 0 },
				{ name: "macStyle", type: "USHORT", value: 0 },
				{ name: "lowestRecPPEM", type: "USHORT", value: 0 },
				{ name: "fontDirectionHint", type: "SHORT", value: 2 },
				{ name: "indexToLocFormat", type: "SHORT", value: 0 },
				{ name: "glyphDataFormat", type: "SHORT", value: 0 },
			],
			e,
		)
	);
}
const il = { parse: Xf, make: Yf };
function Zf(e, t) {
	const r = {},
		n = new q.Parser(e, t);
	return (
		(r.version = n.parseVersion()),
		(r.ascender = n.parseShort()),
		(r.descender = n.parseShort()),
		(r.lineGap = n.parseShort()),
		(r.advanceWidthMax = n.parseUShort()),
		(r.minLeftSideBearing = n.parseShort()),
		(r.minRightSideBearing = n.parseShort()),
		(r.xMaxExtent = n.parseShort()),
		(r.caretSlopeRise = n.parseShort()),
		(r.caretSlopeRun = n.parseShort()),
		(r.caretOffset = n.parseShort()),
		(n.relativeOffset += 8),
		(r.metricDataFormat = n.parseShort()),
		(r.numberOfHMetrics = n.parseUShort()),
		r
	);
}
function Kf(e) {
	return new W.Table(
		"hhea",
		[
			{ name: "version", type: "FIXED", value: 65536 },
			{ name: "ascender", type: "FWORD", value: 0 },
			{ name: "descender", type: "FWORD", value: 0 },
			{ name: "lineGap", type: "FWORD", value: 0 },
			{ name: "advanceWidthMax", type: "UFWORD", value: 0 },
			{ name: "minLeftSideBearing", type: "FWORD", value: 0 },
			{ name: "minRightSideBearing", type: "FWORD", value: 0 },
			{ name: "xMaxExtent", type: "FWORD", value: 0 },
			{ name: "caretSlopeRise", type: "SHORT", value: 1 },
			{ name: "caretSlopeRun", type: "SHORT", value: 0 },
			{ name: "caretOffset", type: "SHORT", value: 0 },
			{ name: "reserved1", type: "SHORT", value: 0 },
			{ name: "reserved2", type: "SHORT", value: 0 },
			{ name: "reserved3", type: "SHORT", value: 0 },
			{ name: "reserved4", type: "SHORT", value: 0 },
			{ name: "metricDataFormat", type: "SHORT", value: 0 },
			{ name: "numberOfHMetrics", type: "USHORT", value: 0 },
		],
		e,
	);
}
const al = { parse: Zf, make: Kf };
function Jf(e, t, r, n, o) {
	let s, i;
	const a = new q.Parser(e, t);
	for (let l = 0; l < n; l += 1) {
		l < r && ((s = a.parseUShort()), (i = a.parseShort()));
		const u = o.get(l);
		(u.advanceWidth = s), (u.leftSideBearing = i);
	}
}
function Qf(e, t, r, n, o) {
	e._hmtxTableData = {};
	let s, i;
	const a = new q.Parser(t, r);
	for (let l = 0; l < o; l += 1)
		l < n && ((s = a.parseUShort()), (i = a.parseShort())),
			(e._hmtxTableData[l] = { advanceWidth: s, leftSideBearing: i });
}
function ep(e, t, r, n, o, s, i) {
	i.lowMemory ? Qf(e, t, r, n, o) : Jf(t, r, n, o, s);
}
function tp(e) {
	const t = new W.Table("hmtx", []);
	for (let r = 0; r < e.length; r += 1) {
		const n = e.get(r),
			o = n.advanceWidth || 0,
			s = n.leftSideBearing || 0;
		t.fields.push({ name: "advanceWidth_" + r, type: "USHORT", value: o }),
			t.fields.push({ name: "leftSideBearing_" + r, type: "SHORT", value: s });
	}
	return t;
}
const ll = { parse: ep, make: tp };
function np(e) {
	const t = new W.Table("ltag", [
		{ name: "version", type: "ULONG", value: 1 },
		{ name: "flags", type: "ULONG", value: 0 },
		{ name: "numTags", type: "ULONG", value: e.length },
	]);
	let r = "";
	const n = 12 + e.length * 4;
	for (let o = 0; o < e.length; ++o) {
		let s = r.indexOf(e[o]);
		s < 0 && ((s = r.length), (r += e[o])),
			t.fields.push({ name: "offset " + o, type: "USHORT", value: n + s }),
			t.fields.push({
				name: "length " + o,
				type: "USHORT",
				value: e[o].length,
			});
	}
	return t.fields.push({ name: "stringPool", type: "CHARARRAY", value: r }), t;
}
function rp(e, t) {
	const r = new q.Parser(e, t),
		n = r.parseULong();
	ne.argument(n === 1, "Unsupported ltag table version."), r.skip("uLong", 1);
	const o = r.parseULong(),
		s = [];
	for (let i = 0; i < o; i++) {
		let a = "";
		const l = t + r.parseUShort(),
			u = r.parseUShort();
		for (let d = l; d < l + u; ++d) a += String.fromCharCode(e.getInt8(d));
		s.push(a);
	}
	return s;
}
const cl = { make: np, parse: rp };
function op(e, t) {
	const r = {},
		n = new q.Parser(e, t);
	return (
		(r.version = n.parseVersion()),
		(r.numGlyphs = n.parseUShort()),
		r.version === 1 &&
			((r.maxPoints = n.parseUShort()),
			(r.maxContours = n.parseUShort()),
			(r.maxCompositePoints = n.parseUShort()),
			(r.maxCompositeContours = n.parseUShort()),
			(r.maxZones = n.parseUShort()),
			(r.maxTwilightPoints = n.parseUShort()),
			(r.maxStorage = n.parseUShort()),
			(r.maxFunctionDefs = n.parseUShort()),
			(r.maxInstructionDefs = n.parseUShort()),
			(r.maxStackElements = n.parseUShort()),
			(r.maxSizeOfInstructions = n.parseUShort()),
			(r.maxComponentElements = n.parseUShort()),
			(r.maxComponentDepth = n.parseUShort())),
		r
	);
}
function sp(e) {
	return new W.Table("maxp", [
		{ name: "version", type: "FIXED", value: 20480 },
		{ name: "numGlyphs", type: "USHORT", value: e },
	]);
}
const ul = { parse: op, make: sp },
	dl = [
		"copyright",
		"fontFamily",
		"fontSubfamily",
		"uniqueID",
		"fullName",
		"version",
		"postScriptName",
		"trademark",
		"manufacturer",
		"designer",
		"description",
		"manufacturerURL",
		"designerURL",
		"license",
		"licenseURL",
		"reserved",
		"preferredFamily",
		"preferredSubfamily",
		"compatibleFullName",
		"sampleText",
		"postScriptFindFontName",
		"wwsFamily",
		"wwsSubfamily",
	],
	fl = {
		0: "en",
		1: "fr",
		2: "de",
		3: "it",
		4: "nl",
		5: "sv",
		6: "es",
		7: "da",
		8: "pt",
		9: "no",
		10: "he",
		11: "ja",
		12: "ar",
		13: "fi",
		14: "el",
		15: "is",
		16: "mt",
		17: "tr",
		18: "hr",
		19: "zh-Hant",
		20: "ur",
		21: "hi",
		22: "th",
		23: "ko",
		24: "lt",
		25: "pl",
		26: "hu",
		27: "es",
		28: "lv",
		29: "se",
		30: "fo",
		31: "fa",
		32: "ru",
		33: "zh",
		34: "nl-BE",
		35: "ga",
		36: "sq",
		37: "ro",
		38: "cz",
		39: "sk",
		40: "si",
		41: "yi",
		42: "sr",
		43: "mk",
		44: "bg",
		45: "uk",
		46: "be",
		47: "uz",
		48: "kk",
		49: "az-Cyrl",
		50: "az-Arab",
		51: "hy",
		52: "ka",
		53: "mo",
		54: "ky",
		55: "tg",
		56: "tk",
		57: "mn-CN",
		58: "mn",
		59: "ps",
		60: "ks",
		61: "ku",
		62: "sd",
		63: "bo",
		64: "ne",
		65: "sa",
		66: "mr",
		67: "bn",
		68: "as",
		69: "gu",
		70: "pa",
		71: "or",
		72: "ml",
		73: "kn",
		74: "ta",
		75: "te",
		76: "si",
		77: "my",
		78: "km",
		79: "lo",
		80: "vi",
		81: "id",
		82: "tl",
		83: "ms",
		84: "ms-Arab",
		85: "am",
		86: "ti",
		87: "om",
		88: "so",
		89: "sw",
		90: "rw",
		91: "rn",
		92: "ny",
		93: "mg",
		94: "eo",
		128: "cy",
		129: "eu",
		130: "ca",
		131: "la",
		132: "qu",
		133: "gn",
		134: "ay",
		135: "tt",
		136: "ug",
		137: "dz",
		138: "jv",
		139: "su",
		140: "gl",
		141: "af",
		142: "br",
		143: "iu",
		144: "gd",
		145: "gv",
		146: "ga",
		147: "to",
		148: "el-polyton",
		149: "kl",
		150: "az",
		151: "nn",
	},
	ip = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 5,
		11: 1,
		12: 4,
		13: 0,
		14: 6,
		15: 0,
		16: 0,
		17: 0,
		18: 0,
		19: 2,
		20: 4,
		21: 9,
		22: 21,
		23: 3,
		24: 29,
		25: 29,
		26: 29,
		27: 29,
		28: 29,
		29: 0,
		30: 0,
		31: 4,
		32: 7,
		33: 25,
		34: 0,
		35: 0,
		36: 0,
		37: 0,
		38: 29,
		39: 29,
		40: 0,
		41: 5,
		42: 7,
		43: 7,
		44: 7,
		45: 7,
		46: 7,
		47: 7,
		48: 7,
		49: 7,
		50: 4,
		51: 24,
		52: 23,
		53: 7,
		54: 7,
		55: 7,
		56: 7,
		57: 27,
		58: 7,
		59: 4,
		60: 4,
		61: 4,
		62: 4,
		63: 26,
		64: 9,
		65: 9,
		66: 9,
		67: 13,
		68: 13,
		69: 11,
		70: 10,
		71: 12,
		72: 17,
		73: 16,
		74: 14,
		75: 15,
		76: 18,
		77: 19,
		78: 20,
		79: 22,
		80: 30,
		81: 0,
		82: 0,
		83: 0,
		84: 4,
		85: 28,
		86: 28,
		87: 28,
		88: 0,
		89: 0,
		90: 0,
		91: 0,
		92: 0,
		93: 0,
		94: 0,
		128: 0,
		129: 0,
		130: 0,
		131: 0,
		132: 0,
		133: 0,
		134: 0,
		135: 7,
		136: 4,
		137: 26,
		138: 0,
		139: 0,
		140: 0,
		141: 0,
		142: 0,
		143: 28,
		144: 0,
		145: 0,
		146: 0,
		147: 0,
		148: 6,
		149: 0,
		150: 0,
		151: 0,
	},
	pl = {
		1078: "af",
		1052: "sq",
		1156: "gsw",
		1118: "am",
		5121: "ar-DZ",
		15361: "ar-BH",
		3073: "ar",
		2049: "ar-IQ",
		11265: "ar-JO",
		13313: "ar-KW",
		12289: "ar-LB",
		4097: "ar-LY",
		6145: "ary",
		8193: "ar-OM",
		16385: "ar-QA",
		1025: "ar-SA",
		10241: "ar-SY",
		7169: "aeb",
		14337: "ar-AE",
		9217: "ar-YE",
		1067: "hy",
		1101: "as",
		2092: "az-Cyrl",
		1068: "az",
		1133: "ba",
		1069: "eu",
		1059: "be",
		2117: "bn",
		1093: "bn-IN",
		8218: "bs-Cyrl",
		5146: "bs",
		1150: "br",
		1026: "bg",
		1027: "ca",
		3076: "zh-HK",
		5124: "zh-MO",
		2052: "zh",
		4100: "zh-SG",
		1028: "zh-TW",
		1155: "co",
		1050: "hr",
		4122: "hr-BA",
		1029: "cs",
		1030: "da",
		1164: "prs",
		1125: "dv",
		2067: "nl-BE",
		1043: "nl",
		3081: "en-AU",
		10249: "en-BZ",
		4105: "en-CA",
		9225: "en-029",
		16393: "en-IN",
		6153: "en-IE",
		8201: "en-JM",
		17417: "en-MY",
		5129: "en-NZ",
		13321: "en-PH",
		18441: "en-SG",
		7177: "en-ZA",
		11273: "en-TT",
		2057: "en-GB",
		1033: "en",
		12297: "en-ZW",
		1061: "et",
		1080: "fo",
		1124: "fil",
		1035: "fi",
		2060: "fr-BE",
		3084: "fr-CA",
		1036: "fr",
		5132: "fr-LU",
		6156: "fr-MC",
		4108: "fr-CH",
		1122: "fy",
		1110: "gl",
		1079: "ka",
		3079: "de-AT",
		1031: "de",
		5127: "de-LI",
		4103: "de-LU",
		2055: "de-CH",
		1032: "el",
		1135: "kl",
		1095: "gu",
		1128: "ha",
		1037: "he",
		1081: "hi",
		1038: "hu",
		1039: "is",
		1136: "ig",
		1057: "id",
		1117: "iu",
		2141: "iu-Latn",
		2108: "ga",
		1076: "xh",
		1077: "zu",
		1040: "it",
		2064: "it-CH",
		1041: "ja",
		1099: "kn",
		1087: "kk",
		1107: "km",
		1158: "quc",
		1159: "rw",
		1089: "sw",
		1111: "kok",
		1042: "ko",
		1088: "ky",
		1108: "lo",
		1062: "lv",
		1063: "lt",
		2094: "dsb",
		1134: "lb",
		1071: "mk",
		2110: "ms-BN",
		1086: "ms",
		1100: "ml",
		1082: "mt",
		1153: "mi",
		1146: "arn",
		1102: "mr",
		1148: "moh",
		1104: "mn",
		2128: "mn-CN",
		1121: "ne",
		1044: "nb",
		2068: "nn",
		1154: "oc",
		1096: "or",
		1123: "ps",
		1045: "pl",
		1046: "pt",
		2070: "pt-PT",
		1094: "pa",
		1131: "qu-BO",
		2155: "qu-EC",
		3179: "qu",
		1048: "ro",
		1047: "rm",
		1049: "ru",
		9275: "smn",
		4155: "smj-NO",
		5179: "smj",
		3131: "se-FI",
		1083: "se",
		2107: "se-SE",
		8251: "sms",
		6203: "sma-NO",
		7227: "sms",
		1103: "sa",
		7194: "sr-Cyrl-BA",
		3098: "sr",
		6170: "sr-Latn-BA",
		2074: "sr-Latn",
		1132: "nso",
		1074: "tn",
		1115: "si",
		1051: "sk",
		1060: "sl",
		11274: "es-AR",
		16394: "es-BO",
		13322: "es-CL",
		9226: "es-CO",
		5130: "es-CR",
		7178: "es-DO",
		12298: "es-EC",
		17418: "es-SV",
		4106: "es-GT",
		18442: "es-HN",
		2058: "es-MX",
		19466: "es-NI",
		6154: "es-PA",
		15370: "es-PY",
		10250: "es-PE",
		20490: "es-PR",
		3082: "es",
		1034: "es",
		21514: "es-US",
		14346: "es-UY",
		8202: "es-VE",
		2077: "sv-FI",
		1053: "sv",
		1114: "syr",
		1064: "tg",
		2143: "tzm",
		1097: "ta",
		1092: "tt",
		1098: "te",
		1054: "th",
		1105: "bo",
		1055: "tr",
		1090: "tk",
		1152: "ug",
		1058: "uk",
		1070: "hsb",
		1056: "ur",
		2115: "uz-Cyrl",
		1091: "uz",
		1066: "vi",
		1106: "cy",
		1160: "wo",
		1157: "sah",
		1144: "ii",
		1130: "yo",
	};
function ap(e, t, r) {
	switch (e) {
		case 0:
			if (t === 65535) return "und";
			if (r) return r[t];
			break;
		case 1:
			return fl[t];
		case 3:
			return pl[t];
	}
}
const So = "utf-16",
	lp = {
		0: "macintosh",
		1: "x-mac-japanese",
		2: "x-mac-chinesetrad",
		3: "x-mac-korean",
		6: "x-mac-greek",
		7: "x-mac-cyrillic",
		9: "x-mac-devanagai",
		10: "x-mac-gurmukhi",
		11: "x-mac-gujarati",
		12: "x-mac-oriya",
		13: "x-mac-bengali",
		14: "x-mac-tamil",
		15: "x-mac-telugu",
		16: "x-mac-kannada",
		17: "x-mac-malayalam",
		18: "x-mac-sinhalese",
		19: "x-mac-burmese",
		20: "x-mac-khmer",
		21: "x-mac-thai",
		22: "x-mac-lao",
		23: "x-mac-georgian",
		24: "x-mac-armenian",
		25: "x-mac-chinesesimp",
		26: "x-mac-tibetan",
		27: "x-mac-mongolian",
		28: "x-mac-ethiopic",
		29: "x-mac-ce",
		30: "x-mac-vietnamese",
		31: "x-mac-extarabic",
	},
	cp = {
		15: "x-mac-icelandic",
		17: "x-mac-turkish",
		18: "x-mac-croatian",
		24: "x-mac-ce",
		25: "x-mac-ce",
		26: "x-mac-ce",
		27: "x-mac-ce",
		28: "x-mac-ce",
		30: "x-mac-icelandic",
		37: "x-mac-romanian",
		38: "x-mac-ce",
		39: "x-mac-ce",
		40: "x-mac-ce",
		143: "x-mac-inuit",
		146: "x-mac-gaelic",
	};
function hl(e, t, r) {
	switch (e) {
		case 0:
			return So;
		case 1:
			return cp[r] || lp[t];
		case 3:
			if (t === 1 || t === 10) return So;
			break;
	}
}
function up(e, t, r) {
	const n = {},
		o = new q.Parser(e, t),
		s = o.parseUShort(),
		i = o.parseUShort(),
		a = o.offset + o.parseUShort();
	for (let l = 0; l < i; l++) {
		const u = o.parseUShort(),
			d = o.parseUShort(),
			p = o.parseUShort(),
			h = o.parseUShort(),
			f = dl[h] || h,
			v = o.parseUShort(),
			S = o.parseUShort(),
			b = ap(u, p, r),
			I = hl(u, d, p);
		if (I !== void 0 && b !== void 0) {
			let P;
			if (
				(I === So
					? (P = Jt.UTF16(e, a + S, v))
					: (P = Jt.MACSTRING(e, a + S, v, I)),
				P)
			) {
				let M = n[f];
				M === void 0 && (M = n[f] = {}), (M[b] = P);
			}
		}
	}
	return s === 1 && o.parseUShort(), n;
}
function eo(e) {
	const t = {};
	for (let r in e) t[e[r]] = parseInt(r);
	return t;
}
function Ui(e, t, r, n, o, s) {
	return new W.Record("NameRecord", [
		{ name: "platformID", type: "USHORT", value: e },
		{ name: "encodingID", type: "USHORT", value: t },
		{ name: "languageID", type: "USHORT", value: r },
		{ name: "nameID", type: "USHORT", value: n },
		{ name: "length", type: "USHORT", value: o },
		{ name: "offset", type: "USHORT", value: s },
	]);
}
function dp(e, t) {
	const r = e.length,
		n = t.length - r + 1;
	e: for (let o = 0; o < n; o++)
		for (; o < n; o++) {
			for (let s = 0; s < r; s++) if (t[o + s] !== e[s]) continue e;
			return o;
		}
	return -1;
}
function Pi(e, t) {
	let r = dp(e, t);
	if (r < 0) {
		r = t.length;
		let n = 0;
		const o = e.length;
		for (; n < o; ++n) t.push(e[n]);
	}
	return r;
}
function fp(e, t) {
	let r;
	const n = [],
		o = {},
		s = eo(dl);
	for (let p in e) {
		let h = s[p];
		if ((h === void 0 && (h = p), (r = parseInt(h)), isNaN(r)))
			throw new Error(
				'Name table entry "' +
					p +
					'" does not exist, see nameTableNames for complete list.',
			);
		(o[r] = e[p]), n.push(r);
	}
	const i = eo(fl),
		a = eo(pl),
		l = [],
		u = [];
	for (let p = 0; p < n.length; p++) {
		r = n[p];
		const h = o[r];
		for (let f in h) {
			const v = h[f];
			let S = 1,
				b = i[f],
				I = ip[b];
			const P = hl(S, I, b);
			let M = G.MACSTRING(v, P);
			M === void 0 &&
				((S = 0),
				(b = t.indexOf(f)),
				b < 0 && ((b = t.length), t.push(f)),
				(I = 4),
				(M = G.UTF16(v)));
			const j = Pi(M, u);
			l.push(Ui(S, I, b, r, M.length, j));
			const re = a[f];
			if (re !== void 0) {
				const _ = G.UTF16(v),
					k = Pi(_, u);
				l.push(Ui(3, 1, re, r, _.length, k));
			}
		}
	}
	l.sort(function (p, h) {
		return (
			p.platformID - h.platformID ||
			p.encodingID - h.encodingID ||
			p.languageID - h.languageID ||
			p.nameID - h.nameID
		);
	});
	const d = new W.Table("name", [
		{ name: "format", type: "USHORT", value: 0 },
		{ name: "count", type: "USHORT", value: l.length },
		{ name: "stringOffset", type: "USHORT", value: 6 + l.length * 12 },
	]);
	for (let p = 0; p < l.length; p++)
		d.fields.push({ name: "record_" + p, type: "RECORD", value: l[p] });
	return d.fields.push({ name: "strings", type: "LITERAL", value: u }), d;
}
const gl = { parse: up, make: fp },
	_o = [
		{ begin: 0, end: 127 },
		{ begin: 128, end: 255 },
		{ begin: 256, end: 383 },
		{ begin: 384, end: 591 },
		{ begin: 592, end: 687 },
		{ begin: 688, end: 767 },
		{ begin: 768, end: 879 },
		{ begin: 880, end: 1023 },
		{ begin: 11392, end: 11519 },
		{ begin: 1024, end: 1279 },
		{ begin: 1328, end: 1423 },
		{ begin: 1424, end: 1535 },
		{ begin: 42240, end: 42559 },
		{ begin: 1536, end: 1791 },
		{ begin: 1984, end: 2047 },
		{ begin: 2304, end: 2431 },
		{ begin: 2432, end: 2559 },
		{ begin: 2560, end: 2687 },
		{ begin: 2688, end: 2815 },
		{ begin: 2816, end: 2943 },
		{ begin: 2944, end: 3071 },
		{ begin: 3072, end: 3199 },
		{ begin: 3200, end: 3327 },
		{ begin: 3328, end: 3455 },
		{ begin: 3584, end: 3711 },
		{ begin: 3712, end: 3839 },
		{ begin: 4256, end: 4351 },
		{ begin: 6912, end: 7039 },
		{ begin: 4352, end: 4607 },
		{ begin: 7680, end: 7935 },
		{ begin: 7936, end: 8191 },
		{ begin: 8192, end: 8303 },
		{ begin: 8304, end: 8351 },
		{ begin: 8352, end: 8399 },
		{ begin: 8400, end: 8447 },
		{ begin: 8448, end: 8527 },
		{ begin: 8528, end: 8591 },
		{ begin: 8592, end: 8703 },
		{ begin: 8704, end: 8959 },
		{ begin: 8960, end: 9215 },
		{ begin: 9216, end: 9279 },
		{ begin: 9280, end: 9311 },
		{ begin: 9312, end: 9471 },
		{ begin: 9472, end: 9599 },
		{ begin: 9600, end: 9631 },
		{ begin: 9632, end: 9727 },
		{ begin: 9728, end: 9983 },
		{ begin: 9984, end: 10175 },
		{ begin: 12288, end: 12351 },
		{ begin: 12352, end: 12447 },
		{ begin: 12448, end: 12543 },
		{ begin: 12544, end: 12591 },
		{ begin: 12592, end: 12687 },
		{ begin: 43072, end: 43135 },
		{ begin: 12800, end: 13055 },
		{ begin: 13056, end: 13311 },
		{ begin: 44032, end: 55215 },
		{ begin: 55296, end: 57343 },
		{ begin: 67840, end: 67871 },
		{ begin: 19968, end: 40959 },
		{ begin: 57344, end: 63743 },
		{ begin: 12736, end: 12783 },
		{ begin: 64256, end: 64335 },
		{ begin: 64336, end: 65023 },
		{ begin: 65056, end: 65071 },
		{ begin: 65040, end: 65055 },
		{ begin: 65104, end: 65135 },
		{ begin: 65136, end: 65279 },
		{ begin: 65280, end: 65519 },
		{ begin: 65520, end: 65535 },
		{ begin: 3840, end: 4095 },
		{ begin: 1792, end: 1871 },
		{ begin: 1920, end: 1983 },
		{ begin: 3456, end: 3583 },
		{ begin: 4096, end: 4255 },
		{ begin: 4608, end: 4991 },
		{ begin: 5024, end: 5119 },
		{ begin: 5120, end: 5759 },
		{ begin: 5760, end: 5791 },
		{ begin: 5792, end: 5887 },
		{ begin: 6016, end: 6143 },
		{ begin: 6144, end: 6319 },
		{ begin: 10240, end: 10495 },
		{ begin: 40960, end: 42127 },
		{ begin: 5888, end: 5919 },
		{ begin: 66304, end: 66351 },
		{ begin: 66352, end: 66383 },
		{ begin: 66560, end: 66639 },
		{ begin: 118784, end: 119039 },
		{ begin: 119808, end: 120831 },
		{ begin: 1044480, end: 1048573 },
		{ begin: 65024, end: 65039 },
		{ begin: 917504, end: 917631 },
		{ begin: 6400, end: 6479 },
		{ begin: 6480, end: 6527 },
		{ begin: 6528, end: 6623 },
		{ begin: 6656, end: 6687 },
		{ begin: 11264, end: 11359 },
		{ begin: 11568, end: 11647 },
		{ begin: 19904, end: 19967 },
		{ begin: 43008, end: 43055 },
		{ begin: 65536, end: 65663 },
		{ begin: 65856, end: 65935 },
		{ begin: 66432, end: 66463 },
		{ begin: 66464, end: 66527 },
		{ begin: 66640, end: 66687 },
		{ begin: 66688, end: 66735 },
		{ begin: 67584, end: 67647 },
		{ begin: 68096, end: 68191 },
		{ begin: 119552, end: 119647 },
		{ begin: 73728, end: 74751 },
		{ begin: 119648, end: 119679 },
		{ begin: 7040, end: 7103 },
		{ begin: 7168, end: 7247 },
		{ begin: 7248, end: 7295 },
		{ begin: 43136, end: 43231 },
		{ begin: 43264, end: 43311 },
		{ begin: 43312, end: 43359 },
		{ begin: 43520, end: 43615 },
		{ begin: 65936, end: 65999 },
		{ begin: 66e3, end: 66047 },
		{ begin: 66208, end: 66271 },
		{ begin: 127024, end: 127135 },
	];
function pp(e) {
	for (let t = 0; t < _o.length; t += 1) {
		const r = _o[t];
		if (e >= r.begin && e < r.end) return t;
	}
	return -1;
}
function hp(e, t) {
	const r = {},
		n = new q.Parser(e, t);
	(r.version = n.parseUShort()),
		(r.xAvgCharWidth = n.parseShort()),
		(r.usWeightClass = n.parseUShort()),
		(r.usWidthClass = n.parseUShort()),
		(r.fsType = n.parseUShort()),
		(r.ySubscriptXSize = n.parseShort()),
		(r.ySubscriptYSize = n.parseShort()),
		(r.ySubscriptXOffset = n.parseShort()),
		(r.ySubscriptYOffset = n.parseShort()),
		(r.ySuperscriptXSize = n.parseShort()),
		(r.ySuperscriptYSize = n.parseShort()),
		(r.ySuperscriptXOffset = n.parseShort()),
		(r.ySuperscriptYOffset = n.parseShort()),
		(r.yStrikeoutSize = n.parseShort()),
		(r.yStrikeoutPosition = n.parseShort()),
		(r.sFamilyClass = n.parseShort()),
		(r.panose = []);
	for (let o = 0; o < 10; o++) r.panose[o] = n.parseByte();
	return (
		(r.ulUnicodeRange1 = n.parseULong()),
		(r.ulUnicodeRange2 = n.parseULong()),
		(r.ulUnicodeRange3 = n.parseULong()),
		(r.ulUnicodeRange4 = n.parseULong()),
		(r.achVendID = String.fromCharCode(
			n.parseByte(),
			n.parseByte(),
			n.parseByte(),
			n.parseByte(),
		)),
		(r.fsSelection = n.parseUShort()),
		(r.usFirstCharIndex = n.parseUShort()),
		(r.usLastCharIndex = n.parseUShort()),
		(r.sTypoAscender = n.parseShort()),
		(r.sTypoDescender = n.parseShort()),
		(r.sTypoLineGap = n.parseShort()),
		(r.usWinAscent = n.parseUShort()),
		(r.usWinDescent = n.parseUShort()),
		r.version >= 1 &&
			((r.ulCodePageRange1 = n.parseULong()),
			(r.ulCodePageRange2 = n.parseULong())),
		r.version >= 2 &&
			((r.sxHeight = n.parseShort()),
			(r.sCapHeight = n.parseShort()),
			(r.usDefaultChar = n.parseUShort()),
			(r.usBreakChar = n.parseUShort()),
			(r.usMaxContent = n.parseUShort())),
		r
	);
}
function gp(e) {
	return new W.Table(
		"OS/2",
		[
			{ name: "version", type: "USHORT", value: 3 },
			{ name: "xAvgCharWidth", type: "SHORT", value: 0 },
			{ name: "usWeightClass", type: "USHORT", value: 0 },
			{ name: "usWidthClass", type: "USHORT", value: 0 },
			{ name: "fsType", type: "USHORT", value: 0 },
			{ name: "ySubscriptXSize", type: "SHORT", value: 650 },
			{ name: "ySubscriptYSize", type: "SHORT", value: 699 },
			{ name: "ySubscriptXOffset", type: "SHORT", value: 0 },
			{ name: "ySubscriptYOffset", type: "SHORT", value: 140 },
			{ name: "ySuperscriptXSize", type: "SHORT", value: 650 },
			{ name: "ySuperscriptYSize", type: "SHORT", value: 699 },
			{ name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
			{ name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
			{ name: "yStrikeoutSize", type: "SHORT", value: 49 },
			{ name: "yStrikeoutPosition", type: "SHORT", value: 258 },
			{ name: "sFamilyClass", type: "SHORT", value: 0 },
			{ name: "bFamilyType", type: "BYTE", value: 0 },
			{ name: "bSerifStyle", type: "BYTE", value: 0 },
			{ name: "bWeight", type: "BYTE", value: 0 },
			{ name: "bProportion", type: "BYTE", value: 0 },
			{ name: "bContrast", type: "BYTE", value: 0 },
			{ name: "bStrokeVariation", type: "BYTE", value: 0 },
			{ name: "bArmStyle", type: "BYTE", value: 0 },
			{ name: "bLetterform", type: "BYTE", value: 0 },
			{ name: "bMidline", type: "BYTE", value: 0 },
			{ name: "bXHeight", type: "BYTE", value: 0 },
			{ name: "ulUnicodeRange1", type: "ULONG", value: 0 },
			{ name: "ulUnicodeRange2", type: "ULONG", value: 0 },
			{ name: "ulUnicodeRange3", type: "ULONG", value: 0 },
			{ name: "ulUnicodeRange4", type: "ULONG", value: 0 },
			{ name: "achVendID", type: "CHARARRAY", value: "XXXX" },
			{ name: "fsSelection", type: "USHORT", value: 0 },
			{ name: "usFirstCharIndex", type: "USHORT", value: 0 },
			{ name: "usLastCharIndex", type: "USHORT", value: 0 },
			{ name: "sTypoAscender", type: "SHORT", value: 0 },
			{ name: "sTypoDescender", type: "SHORT", value: 0 },
			{ name: "sTypoLineGap", type: "SHORT", value: 0 },
			{ name: "usWinAscent", type: "USHORT", value: 0 },
			{ name: "usWinDescent", type: "USHORT", value: 0 },
			{ name: "ulCodePageRange1", type: "ULONG", value: 0 },
			{ name: "ulCodePageRange2", type: "ULONG", value: 0 },
			{ name: "sxHeight", type: "SHORT", value: 0 },
			{ name: "sCapHeight", type: "SHORT", value: 0 },
			{ name: "usDefaultChar", type: "USHORT", value: 0 },
			{ name: "usBreakChar", type: "USHORT", value: 0 },
			{ name: "usMaxContext", type: "USHORT", value: 0 },
		],
		e,
	);
}
const ko = { parse: hp, make: gp, unicodeRanges: _o, getUnicodeRange: pp };
function mp(e, t) {
	const r = {},
		n = new q.Parser(e, t);
	switch (
		((r.version = n.parseVersion()),
		(r.italicAngle = n.parseFixed()),
		(r.underlinePosition = n.parseShort()),
		(r.underlineThickness = n.parseShort()),
		(r.isFixedPitch = n.parseULong()),
		(r.minMemType42 = n.parseULong()),
		(r.maxMemType42 = n.parseULong()),
		(r.minMemType1 = n.parseULong()),
		(r.maxMemType1 = n.parseULong()),
		r.version)
	) {
		case 1:
			r.names = Lt.slice();
			break;
		case 2:
			(r.numberOfGlyphs = n.parseUShort()),
				(r.glyphNameIndex = new Array(r.numberOfGlyphs));
			for (let o = 0; o < r.numberOfGlyphs; o++)
				r.glyphNameIndex[o] = n.parseUShort();
			r.names = [];
			for (let o = 0; o < r.numberOfGlyphs; o++)
				if (r.glyphNameIndex[o] >= Lt.length) {
					const s = n.parseChar();
					r.names.push(n.parseString(s));
				}
			break;
		case 2.5:
			(r.numberOfGlyphs = n.parseUShort()),
				(r.offset = new Array(r.numberOfGlyphs));
			for (let o = 0; o < r.numberOfGlyphs; o++) r.offset[o] = n.parseChar();
			break;
	}
	return r;
}
function yp() {
	return new W.Table("post", [
		{ name: "version", type: "FIXED", value: 196608 },
		{ name: "italicAngle", type: "FIXED", value: 0 },
		{ name: "underlinePosition", type: "FWORD", value: 0 },
		{ name: "underlineThickness", type: "FWORD", value: 0 },
		{ name: "isFixedPitch", type: "ULONG", value: 0 },
		{ name: "minMemType42", type: "ULONG", value: 0 },
		{ name: "maxMemType42", type: "ULONG", value: 0 },
		{ name: "minMemType1", type: "ULONG", value: 0 },
		{ name: "maxMemType1", type: "ULONG", value: 0 },
	]);
}
const ml = { parse: mp, make: yp },
	Qe = new Array(9);
Qe[1] = function () {
	const t = this.offset + this.relativeOffset,
		r = this.parseUShort();
	if (r === 1)
		return {
			substFormat: 1,
			coverage: this.parsePointer(x.coverage),
			deltaGlyphId: this.parseUShort(),
		};
	if (r === 2)
		return {
			substFormat: 2,
			coverage: this.parsePointer(x.coverage),
			substitute: this.parseOffset16List(),
		};
	ne.assert(
		!1,
		"0x" + t.toString(16) + ": lookup type 1 format must be 1 or 2.",
	);
};
Qe[2] = function () {
	const t = this.parseUShort();
	return (
		ne.argument(
			t === 1,
			"GSUB Multiple Substitution Subtable identifier-format must be 1",
		),
		{
			substFormat: t,
			coverage: this.parsePointer(x.coverage),
			sequences: this.parseListOfLists(),
		}
	);
};
Qe[3] = function () {
	const t = this.parseUShort();
	return (
		ne.argument(
			t === 1,
			"GSUB Alternate Substitution Subtable identifier-format must be 1",
		),
		{
			substFormat: t,
			coverage: this.parsePointer(x.coverage),
			alternateSets: this.parseListOfLists(),
		}
	);
};
Qe[4] = function () {
	const t = this.parseUShort();
	return (
		ne.argument(t === 1, "GSUB ligature table identifier-format must be 1"),
		{
			substFormat: t,
			coverage: this.parsePointer(x.coverage),
			ligatureSets: this.parseListOfLists(function () {
				return {
					ligGlyph: this.parseUShort(),
					components: this.parseUShortList(this.parseUShort() - 1),
				};
			}),
		}
	);
};
const Yt = { sequenceIndex: x.uShort, lookupListIndex: x.uShort };
Qe[5] = function () {
	const t = this.offset + this.relativeOffset,
		r = this.parseUShort();
	if (r === 1)
		return {
			substFormat: r,
			coverage: this.parsePointer(x.coverage),
			ruleSets: this.parseListOfLists(function () {
				const n = this.parseUShort(),
					o = this.parseUShort();
				return {
					input: this.parseUShortList(n - 1),
					lookupRecords: this.parseRecordList(o, Yt),
				};
			}),
		};
	if (r === 2)
		return {
			substFormat: r,
			coverage: this.parsePointer(x.coverage),
			classDef: this.parsePointer(x.classDef),
			classSets: this.parseListOfLists(function () {
				const n = this.parseUShort(),
					o = this.parseUShort();
				return {
					classes: this.parseUShortList(n - 1),
					lookupRecords: this.parseRecordList(o, Yt),
				};
			}),
		};
	if (r === 3) {
		const n = this.parseUShort(),
			o = this.parseUShort();
		return {
			substFormat: r,
			coverages: this.parseList(n, x.pointer(x.coverage)),
			lookupRecords: this.parseRecordList(o, Yt),
		};
	}
	ne.assert(
		!1,
		"0x" + t.toString(16) + ": lookup type 5 format must be 1, 2 or 3.",
	);
};
Qe[6] = function () {
	const t = this.offset + this.relativeOffset,
		r = this.parseUShort();
	if (r === 1)
		return {
			substFormat: 1,
			coverage: this.parsePointer(x.coverage),
			chainRuleSets: this.parseListOfLists(function () {
				return {
					backtrack: this.parseUShortList(),
					input: this.parseUShortList(this.parseShort() - 1),
					lookahead: this.parseUShortList(),
					lookupRecords: this.parseRecordList(Yt),
				};
			}),
		};
	if (r === 2)
		return {
			substFormat: 2,
			coverage: this.parsePointer(x.coverage),
			backtrackClassDef: this.parsePointer(x.classDef),
			inputClassDef: this.parsePointer(x.classDef),
			lookaheadClassDef: this.parsePointer(x.classDef),
			chainClassSet: this.parseListOfLists(function () {
				return {
					backtrack: this.parseUShortList(),
					input: this.parseUShortList(this.parseShort() - 1),
					lookahead: this.parseUShortList(),
					lookupRecords: this.parseRecordList(Yt),
				};
			}),
		};
	if (r === 3)
		return {
			substFormat: 3,
			backtrackCoverage: this.parseList(x.pointer(x.coverage)),
			inputCoverage: this.parseList(x.pointer(x.coverage)),
			lookaheadCoverage: this.parseList(x.pointer(x.coverage)),
			lookupRecords: this.parseRecordList(Yt),
		};
	ne.assert(
		!1,
		"0x" + t.toString(16) + ": lookup type 6 format must be 1, 2 or 3.",
	);
};
Qe[7] = function () {
	const t = this.parseUShort();
	ne.argument(
		t === 1,
		"GSUB Extension Substitution subtable identifier-format must be 1",
	);
	const r = this.parseUShort(),
		n = new x(this.data, this.offset + this.parseULong());
	return { substFormat: 1, lookupType: r, extension: Qe[r].call(n) };
};
Qe[8] = function () {
	const t = this.parseUShort();
	return (
		ne.argument(
			t === 1,
			"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1",
		),
		{
			substFormat: t,
			coverage: this.parsePointer(x.coverage),
			backtrackCoverage: this.parseList(x.pointer(x.coverage)),
			lookaheadCoverage: this.parseList(x.pointer(x.coverage)),
			substitutes: this.parseUShortList(),
		}
	);
};
function vp(e, t) {
	t = t || 0;
	const r = new x(e, t),
		n = r.parseVersion(1);
	return (
		ne.argument(n === 1 || n === 1.1, "Unsupported GSUB table version."),
		n === 1
			? {
					version: n,
					scripts: r.parseScriptList(),
					features: r.parseFeatureList(),
					lookups: r.parseLookupList(Qe),
				}
			: {
					version: n,
					scripts: r.parseScriptList(),
					features: r.parseFeatureList(),
					lookups: r.parseLookupList(Qe),
					variations: r.parseFeatureVariationsList(),
				}
	);
}
const Qt = new Array(9);
Qt[1] = function (t) {
	return t.substFormat === 1
		? new W.Table("substitutionTable", [
				{ name: "substFormat", type: "USHORT", value: 1 },
				{ name: "coverage", type: "TABLE", value: new W.Coverage(t.coverage) },
				{ name: "deltaGlyphID", type: "USHORT", value: t.deltaGlyphId },
			])
		: new W.Table(
				"substitutionTable",
				[
					{ name: "substFormat", type: "USHORT", value: 2 },
					{
						name: "coverage",
						type: "TABLE",
						value: new W.Coverage(t.coverage),
					},
				].concat(W.ushortList("substitute", t.substitute)),
			);
};
Qt[2] = function (t) {
	return (
		ne.assert(t.substFormat === 1, "Lookup type 2 substFormat must be 1."),
		new W.Table(
			"substitutionTable",
			[
				{ name: "substFormat", type: "USHORT", value: 1 },
				{ name: "coverage", type: "TABLE", value: new W.Coverage(t.coverage) },
			].concat(
				W.tableList("seqSet", t.sequences, function (r) {
					return new W.Table("sequenceSetTable", W.ushortList("sequence", r));
				}),
			),
		)
	);
};
Qt[3] = function (t) {
	return (
		ne.assert(t.substFormat === 1, "Lookup type 3 substFormat must be 1."),
		new W.Table(
			"substitutionTable",
			[
				{ name: "substFormat", type: "USHORT", value: 1 },
				{ name: "coverage", type: "TABLE", value: new W.Coverage(t.coverage) },
			].concat(
				W.tableList("altSet", t.alternateSets, function (r) {
					return new W.Table("alternateSetTable", W.ushortList("alternate", r));
				}),
			),
		)
	);
};
Qt[4] = function (t) {
	return (
		ne.assert(t.substFormat === 1, "Lookup type 4 substFormat must be 1."),
		new W.Table(
			"substitutionTable",
			[
				{ name: "substFormat", type: "USHORT", value: 1 },
				{ name: "coverage", type: "TABLE", value: new W.Coverage(t.coverage) },
			].concat(
				W.tableList("ligSet", t.ligatureSets, function (r) {
					return new W.Table(
						"ligatureSetTable",
						W.tableList("ligature", r, function (n) {
							return new W.Table(
								"ligatureTable",
								[
									{ name: "ligGlyph", type: "USHORT", value: n.ligGlyph },
								].concat(
									W.ushortList(
										"component",
										n.components,
										n.components.length + 1,
									),
								),
							);
						}),
					);
				}),
			),
		)
	);
};
Qt[6] = function (t) {
	if (t.substFormat === 1)
		return new W.Table(
			"chainContextTable",
			[
				{ name: "substFormat", type: "USHORT", value: t.substFormat },
				{ name: "coverage", type: "TABLE", value: new W.Coverage(t.coverage) },
			].concat(
				W.tableList("chainRuleSet", t.chainRuleSets, function (n) {
					return new W.Table(
						"chainRuleSetTable",
						W.tableList("chainRule", n, function (o) {
							let s = W.ushortList(
								"backtrackGlyph",
								o.backtrack,
								o.backtrack.length,
							)
								.concat(W.ushortList("inputGlyph", o.input, o.input.length + 1))
								.concat(
									W.ushortList(
										"lookaheadGlyph",
										o.lookahead,
										o.lookahead.length,
									),
								)
								.concat(
									W.ushortList("substitution", [], o.lookupRecords.length),
								);
							return (
								o.lookupRecords.forEach((i, a) => {
									s = s
										.concat({
											name: "sequenceIndex" + a,
											type: "USHORT",
											value: i.sequenceIndex,
										})
										.concat({
											name: "lookupListIndex" + a,
											type: "USHORT",
											value: i.lookupListIndex,
										});
								}),
								new W.Table("chainRuleTable", s)
							);
						}),
					);
				}),
			),
		);
	if (t.substFormat === 2)
		ne.assert(!1, "lookup type 6 format 2 is not yet supported.");
	else if (t.substFormat === 3) {
		let r = [{ name: "substFormat", type: "USHORT", value: t.substFormat }];
		return (
			r.push({
				name: "backtrackGlyphCount",
				type: "USHORT",
				value: t.backtrackCoverage.length,
			}),
			t.backtrackCoverage.forEach((o, s) => {
				r.push({
					name: "backtrackCoverage" + s,
					type: "TABLE",
					value: new W.Coverage(o),
				});
			}),
			r.push({
				name: "inputGlyphCount",
				type: "USHORT",
				value: t.inputCoverage.length,
			}),
			t.inputCoverage.forEach((o, s) => {
				r.push({
					name: "inputCoverage" + s,
					type: "TABLE",
					value: new W.Coverage(o),
				});
			}),
			r.push({
				name: "lookaheadGlyphCount",
				type: "USHORT",
				value: t.lookaheadCoverage.length,
			}),
			t.lookaheadCoverage.forEach((o, s) => {
				r.push({
					name: "lookaheadCoverage" + s,
					type: "TABLE",
					value: new W.Coverage(o),
				});
			}),
			r.push({
				name: "substitutionCount",
				type: "USHORT",
				value: t.lookupRecords.length,
			}),
			t.lookupRecords.forEach((o, s) => {
				r = r
					.concat({
						name: "sequenceIndex" + s,
						type: "USHORT",
						value: o.sequenceIndex,
					})
					.concat({
						name: "lookupListIndex" + s,
						type: "USHORT",
						value: o.lookupListIndex,
					});
			}),
			new W.Table("chainContextTable", r)
		);
	}
	ne.assert(!1, "lookup type 6 format must be 1, 2 or 3.");
};
function bp(e) {
	return new W.Table("GSUB", [
		{ name: "version", type: "ULONG", value: 65536 },
		{ name: "scripts", type: "TABLE", value: new W.ScriptList(e.scripts) },
		{ name: "features", type: "TABLE", value: new W.FeatureList(e.features) },
		{ name: "lookups", type: "TABLE", value: new W.LookupList(e.lookups, Qt) },
	]);
}
const yl = { parse: vp, make: bp };
function xp(e, t) {
	const r = new q.Parser(e, t),
		n = r.parseULong();
	ne.argument(n === 1, "Unsupported META table version."),
		r.parseULong(),
		r.parseULong();
	const o = r.parseULong(),
		s = {};
	for (let i = 0; i < o; i++) {
		const a = r.parseTag(),
			l = r.parseULong(),
			u = r.parseULong(),
			d = Jt.UTF8(e, t + l, u);
		s[a] = d;
	}
	return s;
}
function Sp(e) {
	const t = Object.keys(e).length;
	let r = "";
	const n = 16 + t * 12,
		o = new W.Table("meta", [
			{ name: "version", type: "ULONG", value: 1 },
			{ name: "flags", type: "ULONG", value: 0 },
			{ name: "offset", type: "ULONG", value: n },
			{ name: "numTags", type: "ULONG", value: t },
		]);
	for (let s in e) {
		const i = r.length;
		(r += e[s]),
			o.fields.push({ name: "tag " + s, type: "TAG", value: s }),
			o.fields.push({ name: "offset " + s, type: "ULONG", value: n + i }),
			o.fields.push({ name: "length " + s, type: "ULONG", value: e[s].length });
	}
	return o.fields.push({ name: "stringPool", type: "CHARARRAY", value: r }), o;
}
const vl = { parse: xp, make: Sp };
function Ai(e) {
	return (Math.log(e) / Math.log(2)) | 0;
}
function jo(e) {
	for (; e.length % 4 !== 0; ) e.push(0);
	let t = 0;
	for (let r = 0; r < e.length; r += 4)
		t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
	return (t %= Math.pow(2, 32)), t;
}
function Di(e, t, r, n) {
	return new W.Record("Table Record", [
		{ name: "tag", type: "TAG", value: e !== void 0 ? e : "" },
		{ name: "checkSum", type: "ULONG", value: t !== void 0 ? t : 0 },
		{ name: "offset", type: "ULONG", value: r !== void 0 ? r : 0 },
		{ name: "length", type: "ULONG", value: n !== void 0 ? n : 0 },
	]);
}
function bl(e) {
	const t = new W.Table("sfnt", [
		{ name: "version", type: "TAG", value: "OTTO" },
		{ name: "numTables", type: "USHORT", value: 0 },
		{ name: "searchRange", type: "USHORT", value: 0 },
		{ name: "entrySelector", type: "USHORT", value: 0 },
		{ name: "rangeShift", type: "USHORT", value: 0 },
	]);
	(t.tables = e), (t.numTables = e.length);
	const r = Math.pow(2, Ai(t.numTables));
	(t.searchRange = 16 * r),
		(t.entrySelector = Ai(r)),
		(t.rangeShift = t.numTables * 16 - t.searchRange);
	const n = [],
		o = [];
	let s = t.sizeOf() + Di().sizeOf() * t.numTables;
	for (; s % 4 !== 0; )
		(s += 1), o.push({ name: "padding", type: "BYTE", value: 0 });
	for (let i = 0; i < e.length; i += 1) {
		const a = e[i];
		ne.argument(
			a.tableName.length === 4,
			"Table name" + a.tableName + " is invalid.",
		);
		const l = a.sizeOf(),
			u = Di(a.tableName, jo(a.encode()), s, l);
		for (
			n.push({ name: u.tag + " Table Record", type: "RECORD", value: u }),
				o.push({ name: a.tableName + " table", type: "RECORD", value: a }),
				s += l,
				ne.argument(!isNaN(s), "Something went wrong calculating the offset.");
			s % 4 !== 0;
		)
			(s += 1), o.push({ name: "padding", type: "BYTE", value: 0 });
	}
	return (
		n.sort(function (i, a) {
			return i.value.tag > a.value.tag ? 1 : -1;
		}),
		(t.fields = t.fields.concat(n)),
		(t.fields = t.fields.concat(o)),
		t
	);
}
function Li(e, t, r) {
	for (let n = 0; n < t.length; n += 1) {
		const o = e.charToGlyphIndex(t[n]);
		if (o > 0) return e.glyphs.get(o).getMetrics();
	}
	return r;
}
function _p(e) {
	let t = 0;
	for (let r = 0; r < e.length; r += 1) t += e[r];
	return t / e.length;
}
function kp(e) {
	const t = [],
		r = [],
		n = [],
		o = [],
		s = [],
		i = [],
		a = [];
	let l,
		u = 0,
		d = 0,
		p = 0,
		h = 0,
		f = 0;
	for (let oe = 0; oe < e.glyphs.length; oe += 1) {
		const ue = e.glyphs.get(oe),
			ve = ue.unicode | 0;
		if (isNaN(ue.advanceWidth))
			throw new Error(
				"Glyph " + ue.name + " (" + oe + "): advanceWidth is not a number.",
			);
		(l > ve || l === void 0) && ve > 0 && (l = ve), u < ve && (u = ve);
		const de = ko.getUnicodeRange(ve);
		if (de < 32) d |= 1 << de;
		else if (de < 64) p |= 1 << (de - 32);
		else if (de < 96) h |= 1 << (de - 64);
		else if (de < 123) f |= 1 << (de - 96);
		else
			throw new Error(
				"Unicode ranges bits > 123 are reserved for internal usage",
			);
		if (ue.name === ".notdef") continue;
		const me = ue.getMetrics();
		t.push(me.xMin),
			r.push(me.yMin),
			n.push(me.xMax),
			o.push(me.yMax),
			i.push(me.leftSideBearing),
			a.push(me.rightSideBearing),
			s.push(ue.advanceWidth);
	}
	function v(oe) {
		return oe.reduce((ue, ve) => (ue >= ve ? ue : ve), -1 / 0);
	}
	function S(oe) {
		return oe.reduce((ue, ve) => (ue <= ve ? ue : ve), 1 / 0);
	}
	const b = {
		xMin: e.xMin || S(t),
		yMin: e.yMin || S(r),
		xMax: e.xMax || v(n),
		yMax: e.yMax || v(o),
		advanceWidthMax: e.advanceWidthMax || v(s),
		advanceWidthAvg: _p(s),
		minLeftSideBearing: e.minLeftSideBearing || S(i),
		maxLeftSideBearing: v(i),
		minRightSideBearing: S(a),
	};
	(b.ascender = e.ascender), (b.descender = e.descender);
	const I = il.make({
			flags: 3,
			unitsPerEm: e.unitsPerEm,
			xMin: b.xMin,
			yMin: b.yMin,
			xMax: b.xMax,
			yMax: b.yMax,
			lowestRecPPEM: 3,
			createdTimestamp: e.createdTimestamp,
		}),
		P = al.make({
			ascender: b.ascender,
			descender: b.descender,
			advanceWidthMax: b.advanceWidthMax,
			minLeftSideBearing: b.minLeftSideBearing,
			minRightSideBearing: b.minRightSideBearing,
			xMaxExtent: b.maxLeftSideBearing + (b.xMax - b.xMin),
			numberOfHMetrics: e.glyphs.length,
		}),
		M = ul.make(e.glyphs.length),
		j = ko.make(
			Object.assign(
				{
					version: e.tables.os2.version,
					xAvgCharWidth: Math.round(b.advanceWidthAvg),
					usFirstCharIndex: l,
					usLastCharIndex: u,
					ulUnicodeRange1: d,
					ulUnicodeRange2: p,
					ulUnicodeRange3: h,
					ulUnicodeRange4: f,
					sTypoAscender: b.ascender,
					sTypoDescender: b.descender,
					sTypoLineGap: 0,
					usWinAscent: b.yMax,
					usWinDescent: Math.abs(b.yMin),
					ulCodePageRange1: 1,
					sxHeight: Li(e, "xyvw", { yMax: Math.round(b.ascender / 2) }).yMax,
					sCapHeight: Li(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", b).yMax,
					usDefaultChar: e.hasChar(" ") ? 32 : 0,
					usBreakChar: e.hasChar(" ") ? 32 : 0,
				},
				e.tables.os2,
			),
		),
		re = ll.make(e.glyphs),
		_ = Xa.make(e.glyphs),
		k = e.getEnglishName("fontFamily"),
		C = e.getEnglishName("fontSubfamily"),
		N = k + " " + C;
	let ae = e.getEnglishName("postScriptName");
	ae || (ae = k.replace(/\s/g, "") + "-" + C);
	const ee = {};
	for (let oe in e.names) ee[oe] = e.names[oe];
	ee.uniqueID ||
		(ee.uniqueID = { en: e.getEnglishName("manufacturer") + ":" + N }),
		ee.postScriptName || (ee.postScriptName = { en: ae }),
		ee.preferredFamily || (ee.preferredFamily = e.names.fontFamily),
		ee.preferredSubfamily || (ee.preferredSubfamily = e.names.fontSubfamily);
	const T = [],
		z = gl.make(ee, T),
		F = T.length > 0 ? cl.make(T) : void 0,
		B = ml.make(),
		R = sl.make(e.glyphs, {
			version: e.getEnglishName("version"),
			fullName: N,
			familyName: k,
			weightName: C,
			postScriptName: ae,
			unitsPerEm: e.unitsPerEm,
			fontBBox: [0, b.yMin, b.ascender, b.advanceWidthMax],
		}),
		Z = e.metas && Object.keys(e.metas).length > 0 ? vl.make(e.metas) : void 0,
		ie = [I, P, M, j, z, _, B, R, re];
	F && ie.push(F),
		e.tables.gsub && ie.push(yl.make(e.tables.gsub)),
		Z && ie.push(Z);
	const U = bl(ie),
		X = U.encode(),
		K = jo(X),
		le = U.fields;
	let xe = !1;
	for (let oe = 0; oe < le.length; oe += 1)
		if (le[oe].name === "head table") {
			(le[oe].value.checkSumAdjustment = 2981146554 - K), (xe = !0);
			break;
		}
	if (!xe)
		throw new Error("Could not find head table with checkSum to adjust.");
	return U;
}
const Fp = { make: bl, fontToTable: kp, computeCheckSum: jo };
function to(e, t) {
	let r = 0,
		n = e.length - 1;
	for (; r <= n; ) {
		const o = (r + n) >>> 1,
			s = e[o].tag;
		if (s === t) return o;
		s < t ? (r = o + 1) : (n = o - 1);
	}
	return -r - 1;
}
function Ri(e, t) {
	let r = 0,
		n = e.length - 1;
	for (; r <= n; ) {
		const o = (r + n) >>> 1,
			s = e[o];
		if (s === t) return o;
		s < t ? (r = o + 1) : (n = o - 1);
	}
	return -r - 1;
}
function Bi(e, t) {
	let r,
		n = 0,
		o = e.length - 1;
	for (; n <= o; ) {
		const s = (n + o) >>> 1;
		r = e[s];
		const i = r.start;
		if (i === t) return r;
		i < t ? (n = s + 1) : (o = s - 1);
	}
	if (n > 0) return (r = e[n - 1]), t > r.end ? 0 : r;
}
function vn(e, t) {
	(this.font = e), (this.tableName = t);
}
vn.prototype = {
	searchTag: to,
	binSearch: Ri,
	getTable: function (e) {
		let t = this.font.tables[this.tableName];
		return (
			!t &&
				e &&
				(t = this.font.tables[this.tableName] = this.createDefaultTable()),
			t
		);
	},
	getScriptNames: function () {
		let e = this.getTable();
		return e
			? e.scripts.map(function (t) {
					return t.tag;
				})
			: [];
	},
	getDefaultScriptName: function () {
		let e = this.getTable();
		if (!e) return;
		let t = !1;
		for (let r = 0; r < e.scripts.length; r++) {
			const n = e.scripts[r].tag;
			if (n === "DFLT") return n;
			n === "latn" && (t = !0);
		}
		if (t) return "latn";
	},
	getScriptTable: function (e, t) {
		const r = this.getTable(t);
		if (r) {
			e = e || "DFLT";
			const n = r.scripts,
				o = to(r.scripts, e);
			if (o >= 0) return n[o].script;
			if (t) {
				const s = {
					tag: e,
					script: {
						defaultLangSys: {
							reserved: 0,
							reqFeatureIndex: 65535,
							featureIndexes: [],
						},
						langSysRecords: [],
					},
				};
				return n.splice(-1 - o, 0, s), s.script;
			}
		}
	},
	getLangSysTable: function (e, t, r) {
		const n = this.getScriptTable(e, r);
		if (n) {
			if (!t || t === "dflt" || t === "DFLT") return n.defaultLangSys;
			const o = to(n.langSysRecords, t);
			if (o >= 0) return n.langSysRecords[o].langSys;
			if (r) {
				const s = {
					tag: t,
					langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
				};
				return n.langSysRecords.splice(-1 - o, 0, s), s.langSys;
			}
		}
	},
	getFeatureTable: function (e, t, r, n) {
		const o = this.getLangSysTable(e, t, n);
		if (o) {
			let s;
			const i = o.featureIndexes,
				a = this.font.tables[this.tableName].features;
			for (let l = 0; l < i.length; l++)
				if (((s = a[i[l]]), s.tag === r)) return s.feature;
			if (n) {
				const l = a.length;
				return (
					ne.assert(
						l === 0 || r >= a[l - 1].tag,
						"Features must be added in alphabetical order.",
					),
					(s = { tag: r, feature: { params: 0, lookupListIndexes: [] } }),
					a.push(s),
					i.push(l),
					s.feature
				);
			}
		}
	},
	getLookupTables: function (e, t, r, n, o) {
		const s = this.getFeatureTable(e, t, r, o),
			i = [];
		if (s) {
			let a;
			const l = s.lookupListIndexes,
				u = this.font.tables[this.tableName].lookups;
			for (let d = 0; d < l.length; d++)
				(a = u[l[d]]), a.lookupType === n && i.push(a);
			if (i.length === 0 && o) {
				a = {
					lookupType: n,
					lookupFlag: 0,
					subtables: [],
					markFilteringSet: void 0,
				};
				const d = u.length;
				return u.push(a), l.push(d), [a];
			}
		}
		return i;
	},
	getGlyphClass: function (e, t) {
		switch (e.format) {
			case 1:
				return e.startGlyph <= t && t < e.startGlyph + e.classes.length
					? e.classes[t - e.startGlyph]
					: 0;
			case 2:
				const r = Bi(e.ranges, t);
				return r ? r.classId : 0;
		}
	},
	getCoverageIndex: function (e, t) {
		switch (e.format) {
			case 1:
				const r = Ri(e.glyphs, t);
				return r >= 0 ? r : -1;
			case 2:
				const n = Bi(e.ranges, t);
				return n ? n.index + t - n.start : -1;
		}
	},
	expandCoverage: function (e) {
		if (e.format === 1) return e.glyphs;
		{
			const t = [],
				r = e.ranges;
			for (let n = 0; n < r.length; n++) {
				const o = r[n],
					s = o.start,
					i = o.end;
				for (let a = s; a <= i; a++) t.push(a);
			}
			return t;
		}
	},
};
function bn(e) {
	vn.call(this, e, "gpos");
}
bn.prototype = vn.prototype;
bn.prototype.init = function () {
	const e = this.getDefaultScriptName();
	this.defaultKerningTables = this.getKerningTables(e);
};
bn.prototype.getKerningValue = function (e, t, r) {
	for (let n = 0; n < e.length; n++) {
		const o = e[n].subtables;
		for (let s = 0; s < o.length; s++) {
			const i = o[s],
				a = this.getCoverageIndex(i.coverage, t);
			if (!(a < 0))
				switch (i.posFormat) {
					case 1:
						let l = i.pairSets[a];
						for (let h = 0; h < l.length; h++) {
							let f = l[h];
							if (f.secondGlyph === r)
								return (f.value1 && f.value1.xAdvance) || 0;
						}
						break;
					case 2:
						const u = this.getGlyphClass(i.classDef1, t),
							d = this.getGlyphClass(i.classDef2, r),
							p = i.classRecords[u][d];
						return (p.value1 && p.value1.xAdvance) || 0;
				}
		}
	}
	return 0;
};
bn.prototype.getKerningTables = function (e, t) {
	if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2);
};
function $e(e) {
	vn.call(this, e, "gsub");
}
function wp(e, t) {
	const r = e.length;
	if (r !== t.length) return !1;
	for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Ho(e, t, r) {
	const n = e.subtables;
	for (let o = 0; o < n.length; o++) {
		const s = n[o];
		if (s.substFormat === t) return s;
	}
	if (r) return n.push(r), r;
}
$e.prototype = vn.prototype;
$e.prototype.createDefaultTable = function () {
	return {
		version: 1,
		scripts: [
			{
				tag: "DFLT",
				script: {
					defaultLangSys: {
						reserved: 0,
						reqFeatureIndex: 65535,
						featureIndexes: [],
					},
					langSysRecords: [],
				},
			},
		],
		features: [],
		lookups: [],
	};
};
$e.prototype.getSingle = function (e, t, r) {
	const n = [],
		o = this.getLookupTables(t, r, e, 1);
	for (let s = 0; s < o.length; s++) {
		const i = o[s].subtables;
		for (let a = 0; a < i.length; a++) {
			const l = i[a],
				u = this.expandCoverage(l.coverage);
			let d;
			if (l.substFormat === 1) {
				const p = l.deltaGlyphId;
				for (d = 0; d < u.length; d++) {
					const h = u[d];
					n.push({ sub: h, by: h + p });
				}
			} else {
				const p = l.substitute;
				for (d = 0; d < u.length; d++) n.push({ sub: u[d], by: p[d] });
			}
		}
	}
	return n;
};
$e.prototype.getMultiple = function (e, t, r) {
	const n = [],
		o = this.getLookupTables(t, r, e, 2);
	for (let s = 0; s < o.length; s++) {
		const i = o[s].subtables;
		for (let a = 0; a < i.length; a++) {
			const l = i[a],
				u = this.expandCoverage(l.coverage);
			let d;
			for (d = 0; d < u.length; d++) {
				const p = u[d],
					h = l.sequences[d];
				n.push({ sub: p, by: h });
			}
		}
	}
	return n;
};
$e.prototype.getAlternates = function (e, t, r) {
	const n = [],
		o = this.getLookupTables(t, r, e, 3);
	for (let s = 0; s < o.length; s++) {
		const i = o[s].subtables;
		for (let a = 0; a < i.length; a++) {
			const l = i[a],
				u = this.expandCoverage(l.coverage),
				d = l.alternateSets;
			for (let p = 0; p < u.length; p++) n.push({ sub: u[p], by: d[p] });
		}
	}
	return n;
};
$e.prototype.getLigatures = function (e, t, r) {
	const n = [],
		o = this.getLookupTables(t, r, e, 4);
	for (let s = 0; s < o.length; s++) {
		const i = o[s].subtables;
		for (let a = 0; a < i.length; a++) {
			const l = i[a],
				u = this.expandCoverage(l.coverage),
				d = l.ligatureSets;
			for (let p = 0; p < u.length; p++) {
				const h = u[p],
					f = d[p];
				for (let v = 0; v < f.length; v++) {
					const S = f[v];
					n.push({ sub: [h].concat(S.components), by: S.ligGlyph });
				}
			}
		}
	}
	return n;
};
$e.prototype.addSingle = function (e, t, r, n) {
	const o = this.getLookupTables(r, n, e, 1, !0)[0],
		s = Ho(o, 2, {
			substFormat: 2,
			coverage: { format: 1, glyphs: [] },
			substitute: [],
		});
	ne.assert(
		s.coverage.format === 1,
		"Single: unable to modify coverage table format " + s.coverage.format,
	);
	const i = t.sub;
	let a = this.binSearch(s.coverage.glyphs, i);
	a < 0 &&
		((a = -1 - a),
		s.coverage.glyphs.splice(a, 0, i),
		s.substitute.splice(a, 0, 0)),
		(s.substitute[a] = t.by);
};
$e.prototype.addMultiple = function (e, t, r, n) {
	ne.assert(
		t.by instanceof Array && t.by.length > 1,
		'Multiple: "by" must be an array of two or more ids',
	);
	const o = this.getLookupTables(r, n, e, 2, !0)[0],
		s = Ho(o, 1, {
			substFormat: 1,
			coverage: { format: 1, glyphs: [] },
			sequences: [],
		});
	ne.assert(
		s.coverage.format === 1,
		"Multiple: unable to modify coverage table format " + s.coverage.format,
	);
	const i = t.sub;
	let a = this.binSearch(s.coverage.glyphs, i);
	a < 0 &&
		((a = -1 - a),
		s.coverage.glyphs.splice(a, 0, i),
		s.sequences.splice(a, 0, 0)),
		(s.sequences[a] = t.by);
};
$e.prototype.addAlternate = function (e, t, r, n) {
	const o = this.getLookupTables(r, n, e, 3, !0)[0],
		s = Ho(o, 1, {
			substFormat: 1,
			coverage: { format: 1, glyphs: [] },
			alternateSets: [],
		});
	ne.assert(
		s.coverage.format === 1,
		"Alternate: unable to modify coverage table format " + s.coverage.format,
	);
	const i = t.sub;
	let a = this.binSearch(s.coverage.glyphs, i);
	a < 0 &&
		((a = -1 - a),
		s.coverage.glyphs.splice(a, 0, i),
		s.alternateSets.splice(a, 0, 0)),
		(s.alternateSets[a] = t.by);
};
$e.prototype.addLigature = function (e, t, r, n) {
	const o = this.getLookupTables(r, n, e, 4, !0)[0];
	let s = o.subtables[0];
	s ||
		((s = {
			substFormat: 1,
			coverage: { format: 1, glyphs: [] },
			ligatureSets: [],
		}),
		(o.subtables[0] = s)),
		ne.assert(
			s.coverage.format === 1,
			"Ligature: unable to modify coverage table format " + s.coverage.format,
		);
	const i = t.sub[0],
		a = t.sub.slice(1),
		l = { ligGlyph: t.by, components: a };
	let u = this.binSearch(s.coverage.glyphs, i);
	if (u >= 0) {
		const d = s.ligatureSets[u];
		for (let p = 0; p < d.length; p++) if (wp(d[p].components, a)) return;
		d.push(l);
	} else
		(u = -1 - u),
			s.coverage.glyphs.splice(u, 0, i),
			s.ligatureSets.splice(u, 0, [l]);
};
$e.prototype.getFeature = function (e, t, r) {
	if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);
	switch (e) {
		case "aalt":
		case "salt":
			return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));
		case "dlig":
		case "liga":
		case "rlig":
			return this.getLigatures(e, t, r);
		case "ccmp":
			return this.getMultiple(e, t, r).concat(this.getLigatures(e, t, r));
		case "stch":
			return this.getMultiple(e, t, r);
	}
};
$e.prototype.add = function (e, t, r, n) {
	if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, n);
	switch (e) {
		case "aalt":
		case "salt":
			return typeof t.by == "number"
				? this.addSingle(e, t, r, n)
				: this.addAlternate(e, t, r, n);
		case "dlig":
		case "liga":
		case "rlig":
			return this.addLigature(e, t, r, n);
		case "ccmp":
			return t.by instanceof Array
				? this.addMultiple(e, t, r, n)
				: this.addLigature(e, t, r, n);
	}
};
function Tp() {
	return typeof window < "u";
}
function xl(e) {
	const t = new ArrayBuffer(e.length),
		r = new Uint8Array(t);
	for (let n = 0; n < e.length; ++n) r[n] = e[n];
	return t;
}
function Cp(e) {
	const t = new Buffer(e.byteLength),
		r = new Uint8Array(e);
	for (let n = 0; n < t.length; ++n) t[n] = r[n];
	return t;
}
function nn(e, t) {
	if (!e) throw t;
}
function Ni(e, t, r, n, o) {
	let s;
	return (
		(t & n) > 0
			? ((s = e.parseByte()), t & o || (s = -s), (s = r + s))
			: (t & o) > 0
				? (s = r)
				: (s = r + e.parseShort()),
		s
	);
}
function Sl(e, t, r) {
	const n = new q.Parser(t, r);
	(e.numberOfContours = n.parseShort()),
		(e._xMin = n.parseShort()),
		(e._yMin = n.parseShort()),
		(e._xMax = n.parseShort()),
		(e._yMax = n.parseShort());
	let o, s;
	if (e.numberOfContours > 0) {
		const i = (e.endPointIndices = []);
		for (let l = 0; l < e.numberOfContours; l += 1) i.push(n.parseUShort());
		(e.instructionLength = n.parseUShort()), (e.instructions = []);
		for (let l = 0; l < e.instructionLength; l += 1)
			e.instructions.push(n.parseByte());
		const a = i[i.length - 1] + 1;
		o = [];
		for (let l = 0; l < a; l += 1)
			if (((s = n.parseByte()), o.push(s), (s & 8) > 0)) {
				const u = n.parseByte();
				for (let d = 0; d < u; d += 1) o.push(s), (l += 1);
			}
		if ((ne.argument(o.length === a, "Bad flags."), i.length > 0)) {
			const l = [];
			let u;
			if (a > 0) {
				for (let h = 0; h < a; h += 1)
					(s = o[h]),
						(u = {}),
						(u.onCurve = !!(s & 1)),
						(u.lastPointOfContour = i.indexOf(h) >= 0),
						l.push(u);
				let d = 0;
				for (let h = 0; h < a; h += 1)
					(s = o[h]), (u = l[h]), (u.x = Ni(n, s, d, 2, 16)), (d = u.x);
				let p = 0;
				for (let h = 0; h < a; h += 1)
					(s = o[h]), (u = l[h]), (u.y = Ni(n, s, p, 4, 32)), (p = u.y);
			}
			e.points = l;
		} else e.points = [];
	} else if (e.numberOfContours === 0) e.points = [];
	else {
		(e.isComposite = !0), (e.points = []), (e.components = []);
		let i = !0;
		for (; i; ) {
			o = n.parseUShort();
			const a = {
				glyphIndex: n.parseUShort(),
				xScale: 1,
				scale01: 0,
				scale10: 0,
				yScale: 1,
				dx: 0,
				dy: 0,
			};
			(o & 1) > 0
				? (o & 2) > 0
					? ((a.dx = n.parseShort()), (a.dy = n.parseShort()))
					: (a.matchedPoints = [n.parseUShort(), n.parseUShort()])
				: (o & 2) > 0
					? ((a.dx = n.parseChar()), (a.dy = n.parseChar()))
					: (a.matchedPoints = [n.parseByte(), n.parseByte()]),
				(o & 8) > 0
					? (a.xScale = a.yScale = n.parseF2Dot14())
					: (o & 64) > 0
						? ((a.xScale = n.parseF2Dot14()), (a.yScale = n.parseF2Dot14()))
						: (o & 128) > 0 &&
							((a.xScale = n.parseF2Dot14()),
							(a.scale01 = n.parseF2Dot14()),
							(a.scale10 = n.parseF2Dot14()),
							(a.yScale = n.parseF2Dot14())),
				e.components.push(a),
				(i = !!(o & 32));
		}
		if (o & 256) {
			(e.instructionLength = n.parseUShort()), (e.instructions = []);
			for (let a = 0; a < e.instructionLength; a += 1)
				e.instructions.push(n.parseByte());
		}
	}
}
function no(e, t) {
	const r = [];
	for (let n = 0; n < e.length; n += 1) {
		const o = e[n],
			s = {
				x: t.xScale * o.x + t.scale01 * o.y + t.dx,
				y: t.scale10 * o.x + t.yScale * o.y + t.dy,
				onCurve: o.onCurve,
				lastPointOfContour: o.lastPointOfContour,
			};
		r.push(s);
	}
	return r;
}
function Ep(e) {
	const t = [];
	let r = [];
	for (let n = 0; n < e.length; n += 1) {
		const o = e[n];
		r.push(o), o.lastPointOfContour && (t.push(r), (r = []));
	}
	return (
		ne.argument(
			r.length === 0,
			"There are still points left in the current contour.",
		),
		t
	);
}
function _l(e) {
	const t = new Ee();
	if (!e) return t;
	const r = Ep(e);
	for (let n = 0; n < r.length; ++n) {
		const o = r[n];
		let s = null,
			i = o[o.length - 1],
			a = o[0];
		if (i.onCurve) t.moveTo(i.x, i.y);
		else if (a.onCurve) t.moveTo(a.x, a.y);
		else {
			const l = { x: (i.x + a.x) * 0.5, y: (i.y + a.y) * 0.5 };
			t.moveTo(l.x, l.y);
		}
		for (let l = 0; l < o.length; ++l)
			if (((s = i), (i = a), (a = o[(l + 1) % o.length]), i.onCurve))
				t.lineTo(i.x, i.y);
			else {
				let u = a;
				s.onCurve || ((i.x + s.x) * 0.5, (i.y + s.y) * 0.5),
					a.onCurve || (u = { x: (i.x + a.x) * 0.5, y: (i.y + a.y) * 0.5 }),
					t.quadraticCurveTo(i.x, i.y, u.x, u.y);
			}
		t.closePath();
	}
	return t;
}
function kl(e, t) {
	if (t.isComposite)
		for (let r = 0; r < t.components.length; r += 1) {
			const n = t.components[r],
				o = e.get(n.glyphIndex);
			if ((o.getPath(), o.points)) {
				let s;
				if (n.matchedPoints === void 0) s = no(o.points, n);
				else {
					if (
						n.matchedPoints[0] > t.points.length - 1 ||
						n.matchedPoints[1] > o.points.length - 1
					)
						throw Error("Matched points out of range in " + t.name);
					const i = t.points[n.matchedPoints[0]];
					let a = o.points[n.matchedPoints[1]];
					const l = {
						xScale: n.xScale,
						scale01: n.scale01,
						scale10: n.scale10,
						yScale: n.yScale,
						dx: 0,
						dy: 0,
					};
					(a = no([a], l)[0]),
						(l.dx = i.x - a.x),
						(l.dy = i.y - a.y),
						(s = no(o.points, l));
				}
				t.points = t.points.concat(s);
			}
		}
	return _l(t.points);
}
function Op(e, t, r, n) {
	const o = new dt.GlyphSet(n);
	for (let s = 0; s < r.length - 1; s += 1) {
		const i = r[s],
			a = r[s + 1];
		i !== a
			? o.push(s, dt.ttfGlyphLoader(n, s, Sl, e, t + i, kl))
			: o.push(s, dt.glyphLoader(n, s));
	}
	return o;
}
function Mp(e, t, r, n) {
	const o = new dt.GlyphSet(n);
	return (
		(n._push = function (s) {
			const i = r[s],
				a = r[s + 1];
			i !== a
				? o.push(s, dt.ttfGlyphLoader(n, s, Sl, e, t + i, kl))
				: o.push(s, dt.glyphLoader(n, s));
		}),
		o
	);
}
function Ip(e, t, r, n, o) {
	return o.lowMemory ? Mp(e, t, r, n) : Op(e, t, r, n);
}
const Fl = { getPath: _l, parse: Ip };
let wl, Ht, Tl, Fo;
function Cl(e) {
	(this.font = e),
		(this.getCommands = function (t) {
			return Fl.getPath(t).commands;
		}),
		(this._fpgmState = this._prepState = void 0),
		(this._errorState = 0);
}
function Up(e) {
	return e;
}
function El(e) {
	return Math.sign(e) * Math.round(Math.abs(e));
}
function Pp(e) {
	return (Math.sign(e) * Math.round(Math.abs(e * 2))) / 2;
}
function Ap(e) {
	return Math.sign(e) * (Math.round(Math.abs(e) + 0.5) - 0.5);
}
function Dp(e) {
	return Math.sign(e) * Math.ceil(Math.abs(e));
}
function Lp(e) {
	return Math.sign(e) * Math.floor(Math.abs(e));
}
const Ol = function (e) {
		const t = this.srPeriod;
		let r = this.srPhase;
		const n = this.srThreshold;
		let o = 1;
		return (
			e < 0 && ((e = -e), (o = -1)),
			(e += n - r),
			(e = Math.trunc(e / t) * t),
			(e += r),
			e < 0 ? r * o : e * o
		);
	},
	ct = {
		x: 1,
		y: 0,
		axis: "x",
		distance: function (e, t, r, n) {
			return (r ? e.xo : e.x) - (n ? t.xo : t.x);
		},
		interpolate: function (e, t, r, n) {
			let o, s, i, a, l, u, d;
			if (!n || n === this) {
				if (
					((o = e.xo - t.xo),
					(s = e.xo - r.xo),
					(l = t.x - t.xo),
					(u = r.x - r.xo),
					(i = Math.abs(o)),
					(a = Math.abs(s)),
					(d = i + a),
					d === 0)
				) {
					e.x = e.xo + (l + u) / 2;
					return;
				}
				e.x = e.xo + (l * a + u * i) / d;
				return;
			}
			if (
				((o = n.distance(e, t, !0, !0)),
				(s = n.distance(e, r, !0, !0)),
				(l = n.distance(t, t, !1, !0)),
				(u = n.distance(r, r, !1, !0)),
				(i = Math.abs(o)),
				(a = Math.abs(s)),
				(d = i + a),
				d === 0)
			) {
				ct.setRelative(e, e, (l + u) / 2, n, !0);
				return;
			}
			ct.setRelative(e, e, (l * a + u * i) / d, n, !0);
		},
		normalSlope: Number.NEGATIVE_INFINITY,
		setRelative: function (e, t, r, n, o) {
			if (!n || n === this) {
				e.x = (o ? t.xo : t.x) + r;
				return;
			}
			const s = o ? t.xo : t.x,
				i = o ? t.yo : t.y,
				a = s + r * n.x,
				l = i + r * n.y;
			e.x = a + (e.y - l) / n.normalSlope;
		},
		slope: 0,
		touch: function (e) {
			e.xTouched = !0;
		},
		touched: function (e) {
			return e.xTouched;
		},
		untouch: function (e) {
			e.xTouched = !1;
		},
	},
	xt = {
		x: 0,
		y: 1,
		axis: "y",
		distance: function (e, t, r, n) {
			return (r ? e.yo : e.y) - (n ? t.yo : t.y);
		},
		interpolate: function (e, t, r, n) {
			let o, s, i, a, l, u, d;
			if (!n || n === this) {
				if (
					((o = e.yo - t.yo),
					(s = e.yo - r.yo),
					(l = t.y - t.yo),
					(u = r.y - r.yo),
					(i = Math.abs(o)),
					(a = Math.abs(s)),
					(d = i + a),
					d === 0)
				) {
					e.y = e.yo + (l + u) / 2;
					return;
				}
				e.y = e.yo + (l * a + u * i) / d;
				return;
			}
			if (
				((o = n.distance(e, t, !0, !0)),
				(s = n.distance(e, r, !0, !0)),
				(l = n.distance(t, t, !1, !0)),
				(u = n.distance(r, r, !1, !0)),
				(i = Math.abs(o)),
				(a = Math.abs(s)),
				(d = i + a),
				d === 0)
			) {
				xt.setRelative(e, e, (l + u) / 2, n, !0);
				return;
			}
			xt.setRelative(e, e, (l * a + u * i) / d, n, !0);
		},
		normalSlope: 0,
		setRelative: function (e, t, r, n, o) {
			if (!n || n === this) {
				e.y = (o ? t.yo : t.y) + r;
				return;
			}
			const s = o ? t.xo : t.x,
				i = o ? t.yo : t.y,
				a = s + r * n.x,
				l = i + r * n.y;
			e.y = l + n.normalSlope * (e.x - a);
		},
		slope: Number.POSITIVE_INFINITY,
		touch: function (e) {
			e.yTouched = !0;
		},
		touched: function (e) {
			return e.yTouched;
		},
		untouch: function (e) {
			e.yTouched = !1;
		},
	};
Object.freeze(ct);
Object.freeze(xt);
function xn(e, t) {
	(this.x = e),
		(this.y = t),
		(this.axis = void 0),
		(this.slope = t / e),
		(this.normalSlope = -e / t),
		Object.freeze(this);
}
xn.prototype.distance = function (e, t, r, n) {
	return this.x * ct.distance(e, t, r, n) + this.y * xt.distance(e, t, r, n);
};
xn.prototype.interpolate = function (e, t, r, n) {
	let o, s, i, a, l, u, d;
	if (
		((i = n.distance(e, t, !0, !0)),
		(a = n.distance(e, r, !0, !0)),
		(o = n.distance(t, t, !1, !0)),
		(s = n.distance(r, r, !1, !0)),
		(l = Math.abs(i)),
		(u = Math.abs(a)),
		(d = l + u),
		d === 0)
	) {
		this.setRelative(e, e, (o + s) / 2, n, !0);
		return;
	}
	this.setRelative(e, e, (o * u + s * l) / d, n, !0);
};
xn.prototype.setRelative = function (e, t, r, n, o) {
	n = n || this;
	const s = o ? t.xo : t.x,
		i = o ? t.yo : t.y,
		a = s + r * n.x,
		l = i + r * n.y,
		u = n.normalSlope,
		d = this.slope,
		p = e.x,
		h = e.y;
	(e.x = (d * p - u * a + l - h) / (d - u)), (e.y = d * (e.x - p) + h);
};
xn.prototype.touch = function (e) {
	(e.xTouched = !0), (e.yTouched = !0);
};
function Sn(e, t) {
	const r = Math.sqrt(e * e + t * t);
	return (
		(e /= r),
		(t /= r),
		e === 1 && t === 0 ? ct : e === 0 && t === 1 ? xt : new xn(e, t)
	);
}
function St(e, t, r, n) {
	(this.x = this.xo = Math.round(e * 64) / 64),
		(this.y = this.yo = Math.round(t * 64) / 64),
		(this.lastPointOfContour = r),
		(this.onCurve = n),
		(this.prevPointOnContour = void 0),
		(this.nextPointOnContour = void 0),
		(this.xTouched = !1),
		(this.yTouched = !1),
		Object.preventExtensions(this);
}
St.prototype.nextTouched = function (e) {
	let t = this.nextPointOnContour;
	for (; !e.touched(t) && t !== this; ) t = t.nextPointOnContour;
	return t;
};
St.prototype.prevTouched = function (e) {
	let t = this.prevPointOnContour;
	for (; !e.touched(t) && t !== this; ) t = t.prevPointOnContour;
	return t;
};
const fn = Object.freeze(new St(0, 0)),
	Rp = {
		cvCutIn: 17 / 16,
		deltaBase: 9,
		deltaShift: 0.125,
		loop: 1,
		minDis: 1,
		autoFlip: !0,
	};
function Ct(e, t) {
	switch (((this.env = e), (this.stack = []), (this.prog = t), e)) {
		case "glyf":
			(this.zp0 = this.zp1 = this.zp2 = 1),
				(this.rp0 = this.rp1 = this.rp2 = 0);
		case "prep":
			(this.fv = this.pv = this.dpv = ct), (this.round = El);
	}
}
Cl.prototype.exec = function (e, t) {
	if (typeof t != "number") throw new Error("Point size is not a number!");
	if (this._errorState > 2) return;
	const r = this.font;
	let n = this._prepState;
	if (!n || n.ppem !== t) {
		let o = this._fpgmState;
		if (!o) {
			(Ct.prototype = Rp),
				(o = this._fpgmState = new Ct("fpgm", r.tables.fpgm)),
				(o.funcs = []),
				(o.font = r),
				exports.DEBUG && (console.log("---EXEC FPGM---"), (o.step = -1));
			try {
				Ht(o);
			} catch (i) {
				console.log("Hinting error in FPGM:" + i), (this._errorState = 3);
				return;
			}
		}
		(Ct.prototype = o),
			(n = this._prepState = new Ct("prep", r.tables.prep)),
			(n.ppem = t);
		const s = r.tables.cvt;
		if (s) {
			const i = (n.cvt = new Array(s.length)),
				a = t / r.unitsPerEm;
			for (let l = 0; l < s.length; l++) i[l] = s[l] * a;
		} else n.cvt = [];
		exports.DEBUG && (console.log("---EXEC PREP---"), (n.step = -1));
		try {
			Ht(n);
		} catch (i) {
			this._errorState < 2 && console.log("Hinting error in PREP:" + i),
				(this._errorState = 2);
		}
	}
	if (!(this._errorState > 1))
		try {
			return Tl(e, n);
		} catch (o) {
			this._errorState < 1 &&
				(console.log("Hinting error:" + o),
				console.log("Note: further hinting errors are silenced")),
				(this._errorState = 1);
			return;
		}
};
Tl = function (e, t) {
	const r = t.ppem / t.font.unitsPerEm,
		n = r;
	let o = e.components,
		s,
		i,
		a;
	if (((Ct.prototype = t), !o))
		(a = new Ct("glyf", e.instructions)),
			exports.DEBUG && (console.log("---EXEC GLYPH---"), (a.step = -1)),
			Fo(e, a, r, n),
			(i = a.gZone);
	else {
		const l = t.font;
		(i = []), (s = []);
		for (let u = 0; u < o.length; u++) {
			const d = o[u],
				p = l.glyphs.get(d.glyphIndex);
			(a = new Ct("glyf", p.instructions)),
				exports.DEBUG &&
					(console.log("---EXEC COMP " + u + "---"), (a.step = -1)),
				Fo(p, a, r, n);
			const h = Math.round(d.dx * r),
				f = Math.round(d.dy * n),
				v = a.gZone,
				S = a.contours;
			for (let I = 0; I < v.length; I++) {
				const P = v[I];
				(P.xTouched = P.yTouched = !1),
					(P.xo = P.x = P.x + h),
					(P.yo = P.y = P.y + f);
			}
			const b = i.length;
			i.push.apply(i, v);
			for (let I = 0; I < S.length; I++) s.push(S[I] + b);
		}
		e.instructions &&
			!a.inhibitGridFit &&
			((a = new Ct("glyf", e.instructions)),
			(a.gZone = a.z0 = a.z1 = a.z2 = i),
			(a.contours = s),
			i.push(new St(0, 0), new St(Math.round(e.advanceWidth * r), 0)),
			exports.DEBUG && (console.log("---EXEC COMPOSITE---"), (a.step = -1)),
			Ht(a),
			(i.length -= 2));
	}
	return i;
};
Fo = function (e, t, r, n) {
	const o = e.points || [],
		s = o.length,
		i = (t.gZone = t.z0 = t.z1 = t.z2 = []),
		a = (t.contours = []);
	let l;
	for (let p = 0; p < s; p++)
		(l = o[p]),
			(i[p] = new St(l.x * r, l.y * n, l.lastPointOfContour, l.onCurve));
	let u, d;
	for (let p = 0; p < s; p++)
		(l = i[p]),
			u || ((u = l), a.push(p)),
			l.lastPointOfContour
				? ((l.nextPointOnContour = u), (u.prevPointOnContour = l), (u = void 0))
				: ((d = i[p + 1]),
					(l.nextPointOnContour = d),
					(d.prevPointOnContour = l));
	if (!t.inhibitGridFit) {
		if (exports.DEBUG) {
			console.log("PROCESSING GLYPH", t.stack);
			for (let p = 0; p < s; p++) console.log(p, i[p].x, i[p].y);
		}
		if (
			(i.push(new St(0, 0), new St(Math.round(e.advanceWidth * r), 0)),
			Ht(t),
			(i.length -= 2),
			exports.DEBUG)
		) {
			console.log("FINISHED GLYPH", t.stack);
			for (let p = 0; p < s; p++) console.log(p, i[p].x, i[p].y);
		}
	}
};
Ht = function (e) {
	let t = e.prog;
	if (!t) return;
	const r = t.length;
	let n;
	for (e.ip = 0; e.ip < r; e.ip++) {
		if ((exports.DEBUG && e.step++, (n = wl[t[e.ip]]), !n))
			throw new Error("unknown instruction: 0x" + Number(t[e.ip]).toString(16));
		n(e);
	}
};
function cr(e) {
	const t = (e.tZone = new Array(e.gZone.length));
	for (let r = 0; r < t.length; r++) t[r] = new St(0, 0);
}
function Ml(e, t) {
	const r = e.prog;
	let n = e.ip,
		o = 1,
		s;
	do
		if (((s = r[++n]), s === 88)) o++;
		else if (s === 89) o--;
		else if (s === 64) n += r[n + 1] + 1;
		else if (s === 65) n += 2 * r[n + 1] + 1;
		else if (s >= 176 && s <= 183) n += s - 176 + 1;
		else if (s >= 184 && s <= 191) n += (s - 184 + 1) * 2;
		else if (t && o === 1 && s === 27) break;
	while (o > 0);
	e.ip = n;
}
function Gi(e, t) {
	exports.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"),
		(t.fv = t.pv = t.dpv = e);
}
function ji(e, t) {
	exports.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"),
		(t.pv = t.dpv = e);
}
function Hi(e, t) {
	exports.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), (t.fv = e);
}
function Wi(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = r.pop(),
		s = t.z2[n],
		i = t.z1[o];
	exports.DEBUG && console.log("SPVTL[" + e + "]", n, o);
	let a, l;
	e ? ((a = s.y - i.y), (l = i.x - s.x)) : ((a = i.x - s.x), (l = i.y - s.y)),
		(t.pv = t.dpv = Sn(a, l));
}
function zi(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = r.pop(),
		s = t.z2[n],
		i = t.z1[o];
	exports.DEBUG && console.log("SFVTL[" + e + "]", n, o);
	let a, l;
	e ? ((a = s.y - i.y), (l = i.x - s.x)) : ((a = i.x - s.x), (l = i.y - s.y)),
		(t.fv = Sn(a, l));
}
function Bp(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "SPVFS[]", r, n),
		(e.pv = e.dpv = Sn(n, r));
}
function Np(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "SPVFS[]", r, n), (e.fv = Sn(n, r));
}
function Gp(e) {
	const t = e.stack,
		r = e.pv;
	exports.DEBUG && console.log(e.step, "GPV[]"),
		t.push(r.x * 16384),
		t.push(r.y * 16384);
}
function jp(e) {
	const t = e.stack,
		r = e.fv;
	exports.DEBUG && console.log(e.step, "GFV[]"),
		t.push(r.x * 16384),
		t.push(r.y * 16384);
}
function Hp(e) {
	(e.fv = e.pv), exports.DEBUG && console.log(e.step, "SFVTPV[]");
}
function Wp(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop(),
		o = t.pop(),
		s = t.pop(),
		i = t.pop(),
		a = e.z0,
		l = e.z1,
		u = a[r],
		d = a[n],
		p = l[o],
		h = l[s],
		f = e.z2[i];
	exports.DEBUG && console.log("ISECT[], ", r, n, o, s, i);
	const v = u.x,
		S = u.y,
		b = d.x,
		I = d.y,
		P = p.x,
		M = p.y,
		j = h.x,
		re = h.y,
		_ = (v - b) * (M - re) - (S - I) * (P - j),
		k = v * I - S * b,
		C = P * re - M * j;
	(f.x = (k * (P - j) - C * (v - b)) / _),
		(f.y = (k * (M - re) - C * (S - I)) / _);
}
function zp(e) {
	(e.rp0 = e.stack.pop()),
		exports.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
}
function $p(e) {
	(e.rp1 = e.stack.pop()),
		exports.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
}
function Vp(e) {
	(e.rp2 = e.stack.pop()),
		exports.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
}
function qp(e) {
	const t = e.stack.pop();
	switch ((exports.DEBUG && console.log(e.step, "SZP0[]", t), (e.zp0 = t), t)) {
		case 0:
			e.tZone || cr(e), (e.z0 = e.tZone);
			break;
		case 1:
			e.z0 = e.gZone;
			break;
		default:
			throw new Error("Invalid zone pointer");
	}
}
function Xp(e) {
	const t = e.stack.pop();
	switch ((exports.DEBUG && console.log(e.step, "SZP1[]", t), (e.zp1 = t), t)) {
		case 0:
			e.tZone || cr(e), (e.z1 = e.tZone);
			break;
		case 1:
			e.z1 = e.gZone;
			break;
		default:
			throw new Error("Invalid zone pointer");
	}
}
function Yp(e) {
	const t = e.stack.pop();
	switch ((exports.DEBUG && console.log(e.step, "SZP2[]", t), (e.zp2 = t), t)) {
		case 0:
			e.tZone || cr(e), (e.z2 = e.tZone);
			break;
		case 1:
			e.z2 = e.gZone;
			break;
		default:
			throw new Error("Invalid zone pointer");
	}
}
function Zp(e) {
	const t = e.stack.pop();
	switch (
		(exports.DEBUG && console.log(e.step, "SZPS[]", t),
		(e.zp0 = e.zp1 = e.zp2 = t),
		t)
	) {
		case 0:
			e.tZone || cr(e), (e.z0 = e.z1 = e.z2 = e.tZone);
			break;
		case 1:
			e.z0 = e.z1 = e.z2 = e.gZone;
			break;
		default:
			throw new Error("Invalid zone pointer");
	}
}
function Kp(e) {
	(e.loop = e.stack.pop()),
		exports.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
}
function Jp(e) {
	exports.DEBUG && console.log(e.step, "RTG[]"), (e.round = El);
}
function Qp(e) {
	exports.DEBUG && console.log(e.step, "RTHG[]"), (e.round = Ap);
}
function eh(e) {
	const t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SMD[]", t), (e.minDis = t / 64);
}
function th(e) {
	exports.DEBUG && console.log(e.step, "ELSE[]"), Ml(e, !1);
}
function nh(e) {
	const t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "JMPR[]", t), (e.ip += t - 1);
}
function rh(e) {
	const t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SCVTCI[]", t), (e.cvCutIn = t / 64);
}
function oh(e) {
	const t = e.stack;
	exports.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1]);
}
function ro(e) {
	exports.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
}
function sh(e) {
	exports.DEBUG && console.log(e.step, "CLEAR[]"), (e.stack.length = 0);
}
function ih(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(n);
}
function ah(e) {
	const t = e.stack;
	exports.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
}
function lh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "LOOPCALL[]", r, n);
	const o = e.ip,
		s = e.prog;
	e.prog = e.funcs[r];
	for (let i = 0; i < n; i++)
		Ht(e),
			exports.DEBUG &&
				console.log(++e.step, i + 1 < n ? "next loopcall" : "done loopcall", i);
	(e.ip = o), (e.prog = s);
}
function ch(e) {
	const t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "CALL[]", t);
	const r = e.ip,
		n = e.prog;
	(e.prog = e.funcs[t]),
		Ht(e),
		(e.ip = r),
		(e.prog = n),
		exports.DEBUG && console.log(++e.step, "returning from", t);
}
function uh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r]);
}
function dh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "MINDEX[]", r),
		t.push(t.splice(t.length - r, 1)[0]);
}
function fh(e) {
	if (e.env !== "fpgm") throw new Error("FDEF not allowed here");
	const t = e.stack,
		r = e.prog;
	let n = e.ip;
	const o = t.pop(),
		s = n;
	for (exports.DEBUG && console.log(e.step, "FDEF[]", o); r[++n] !== 45; );
	(e.ip = n), (e.funcs[o] = r.slice(s + 1, n));
}
function $i(e, t) {
	const r = t.stack.pop(),
		n = t.z0[r],
		o = t.fv,
		s = t.pv;
	exports.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
	let i = s.distance(n, fn);
	e && (i = t.round(i)),
		o.setRelative(n, fn, i, s),
		o.touch(n),
		(t.rp0 = t.rp1 = r);
}
function Vi(e, t) {
	const r = t.z2,
		n = r.length - 2;
	let o, s, i;
	exports.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");
	for (let a = 0; a < n; a++)
		(o = r[a]),
			!e.touched(o) &&
				((s = o.prevTouched(e)),
				s !== o &&
					((i = o.nextTouched(e)),
					s === i && e.setRelative(o, o, e.distance(s, s, !1, !0), e, !0),
					e.interpolate(o, s, i, e)));
}
function qi(e, t) {
	const r = t.stack,
		n = e ? t.rp1 : t.rp2,
		o = (e ? t.z0 : t.z1)[n],
		s = t.fv,
		i = t.pv;
	let a = t.loop;
	const l = t.z2;
	for (; a--; ) {
		const u = r.pop(),
			d = l[u],
			p = i.distance(o, o, !1, !0);
		s.setRelative(d, d, p, i),
			s.touch(d),
			exports.DEBUG &&
				console.log(
					t.step,
					(t.loop > 1 ? "loop " + (t.loop - a) + ": " : "") +
						"SHP[" +
						(e ? "rp1" : "rp2") +
						"]",
					u,
				);
	}
	t.loop = 1;
}
function Xi(e, t) {
	const r = t.stack,
		n = e ? t.rp1 : t.rp2,
		o = (e ? t.z0 : t.z1)[n],
		s = t.fv,
		i = t.pv,
		a = r.pop(),
		l = t.z2[t.contours[a]];
	let u = l;
	exports.DEBUG && console.log(t.step, "SHC[" + e + "]", a);
	const d = i.distance(o, o, !1, !0);
	do u !== o && s.setRelative(u, u, d, i), (u = u.nextPointOnContour);
	while (u !== l);
}
function Yi(e, t) {
	const r = t.stack,
		n = e ? t.rp1 : t.rp2,
		o = (e ? t.z0 : t.z1)[n],
		s = t.fv,
		i = t.pv,
		a = r.pop();
	exports.DEBUG && console.log(t.step, "SHZ[" + e + "]", a);
	let l;
	switch (a) {
		case 0:
			l = t.tZone;
			break;
		case 1:
			l = t.gZone;
			break;
		default:
			throw new Error("Invalid zone");
	}
	let u;
	const d = i.distance(o, o, !1, !0),
		p = l.length - 2;
	for (let h = 0; h < p; h++) (u = l[h]), s.setRelative(u, u, d, i);
}
function ph(e) {
	const t = e.stack;
	let r = e.loop;
	const n = e.fv,
		o = t.pop() / 64,
		s = e.z2;
	for (; r--; ) {
		const i = t.pop(),
			a = s[i];
		exports.DEBUG &&
			console.log(
				e.step,
				(e.loop > 1 ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]",
				i,
				o,
			),
			n.setRelative(a, a, o),
			n.touch(a);
	}
	e.loop = 1;
}
function hh(e) {
	const t = e.stack,
		r = e.rp1,
		n = e.rp2;
	let o = e.loop;
	const s = e.z0[r],
		i = e.z1[n],
		a = e.fv,
		l = e.dpv,
		u = e.z2;
	for (; o--; ) {
		const d = t.pop(),
			p = u[d];
		exports.DEBUG &&
			console.log(
				e.step,
				(e.loop > 1 ? "loop " + (e.loop - o) + ": " : "") + "IP[]",
				d,
				r,
				"<->",
				n,
			),
			a.interpolate(p, s, i, l),
			a.touch(p);
	}
	e.loop = 1;
}
function Zi(e, t) {
	const r = t.stack,
		n = r.pop() / 64,
		o = r.pop(),
		s = t.z1[o],
		i = t.z0[t.rp0],
		a = t.fv,
		l = t.pv;
	a.setRelative(s, i, n, l),
		a.touch(s),
		exports.DEBUG && console.log(t.step, "MSIRP[" + e + "]", n, o),
		(t.rp1 = t.rp0),
		(t.rp2 = o),
		e && (t.rp0 = o);
}
function gh(e) {
	const t = e.stack,
		r = e.rp0,
		n = e.z0[r];
	let o = e.loop;
	const s = e.fv,
		i = e.pv,
		a = e.z1;
	for (; o--; ) {
		const l = t.pop(),
			u = a[l];
		exports.DEBUG &&
			console.log(
				e.step,
				(e.loop > 1 ? "loop " + (e.loop - o) + ": " : "") + "ALIGNRP[]",
				l,
			),
			s.setRelative(u, n, 0, i),
			s.touch(u);
	}
	e.loop = 1;
}
function mh(e) {
	exports.DEBUG && console.log(e.step, "RTDG[]"), (e.round = Pp);
}
function Ki(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = r.pop(),
		s = t.z0[o],
		i = t.fv,
		a = t.pv;
	let l = t.cvt[n];
	exports.DEBUG && console.log(t.step, "MIAP[" + e + "]", n, "(", l, ")", o);
	let u = a.distance(s, fn);
	e && (Math.abs(u - l) < t.cvCutIn && (u = l), (u = t.round(u))),
		i.setRelative(s, fn, u, a),
		t.zp0 === 0 && ((s.xo = s.x), (s.yo = s.y)),
		i.touch(s),
		(t.rp0 = t.rp1 = o);
}
function yh(e) {
	const t = e.prog;
	let r = e.ip;
	const n = e.stack,
		o = t[++r];
	exports.DEBUG && console.log(e.step, "NPUSHB[]", o);
	for (let s = 0; s < o; s++) n.push(t[++r]);
	e.ip = r;
}
function vh(e) {
	let t = e.ip;
	const r = e.prog,
		n = e.stack,
		o = r[++t];
	exports.DEBUG && console.log(e.step, "NPUSHW[]", o);
	for (let s = 0; s < o; s++) {
		let i = (r[++t] << 8) | r[++t];
		i & 32768 && (i = -((i ^ 65535) + 1)), n.push(i);
	}
	e.ip = t;
}
function bh(e) {
	const t = e.stack;
	let r = e.store;
	r || (r = e.store = []);
	const n = t.pop(),
		o = t.pop();
	exports.DEBUG && console.log(e.step, "WS", n, o), (r[o] = n);
}
function xh(e) {
	const t = e.stack,
		r = e.store,
		n = t.pop();
	exports.DEBUG && console.log(e.step, "RS", n);
	const o = (r && r[n]) || 0;
	t.push(o);
}
function Sh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "WCVTP", r, n), (e.cvt[n] = r / 64);
}
function _h(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "RCVT", r), t.push(e.cvt[r] * 64);
}
function Ji(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = t.z2[n];
	exports.DEBUG && console.log(t.step, "GC[" + e + "]", n),
		r.push(t.dpv.distance(o, fn, e, !1) * 64);
}
function Qi(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = r.pop(),
		s = t.z1[n],
		i = t.z0[o],
		a = t.dpv.distance(i, s, e, e);
	exports.DEBUG && console.log(t.step, "MD[" + e + "]", n, o, "->", a),
		t.stack.push(Math.round(a * 64));
}
function kh(e) {
	exports.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
}
function Fh(e) {
	exports.DEBUG && console.log(e.step, "FLIPON[]"), (e.autoFlip = !0);
}
function wh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "LT[]", r, n), t.push(n < r ? 1 : 0);
}
function Th(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "LTEQ[]", r, n), t.push(n <= r ? 1 : 0);
}
function Ch(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "GT[]", r, n), t.push(n > r ? 1 : 0);
}
function Eh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "GTEQ[]", r, n), t.push(n >= r ? 1 : 0);
}
function Oh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "EQ[]", r, n), t.push(r === n ? 1 : 0);
}
function Mh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "NEQ[]", r, n), t.push(r !== n ? 1 : 0);
}
function Ih(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "ODD[]", r),
		t.push(Math.trunc(r) % 2 ? 1 : 0);
}
function Uh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "EVEN[]", r),
		t.push(Math.trunc(r) % 2 ? 0 : 1);
}
function Ph(e) {
	let t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "IF[]", t),
		t || (Ml(e, !0), exports.DEBUG && console.log(e.step, "EIF[]"));
}
function Ah(e) {
	exports.DEBUG && console.log(e.step, "EIF[]");
}
function Dh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "AND[]", r, n), t.push(r && n ? 1 : 0);
}
function Lh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "OR[]", r, n), t.push(r || n ? 1 : 0);
}
function Rh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
}
function oo(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = t.fv,
		s = t.pv,
		i = t.ppem,
		a = t.deltaBase + (e - 1) * 16,
		l = t.deltaShift,
		u = t.z0;
	exports.DEBUG && console.log(t.step, "DELTAP[" + e + "]", n, r);
	for (let d = 0; d < n; d++) {
		const p = r.pop(),
			h = r.pop();
		if (a + ((h & 240) >> 4) !== i) continue;
		let v = (h & 15) - 8;
		v >= 0 && v++,
			exports.DEBUG && console.log(t.step, "DELTAPFIX", p, "by", v * l);
		const S = u[p];
		o.setRelative(S, S, v * l, s);
	}
}
function Bh(e) {
	const r = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SDB[]", r), (e.deltaBase = r);
}
function Nh(e) {
	const r = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SDS[]", r),
		(e.deltaShift = Math.pow(0.5, r));
}
function Gh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "ADD[]", r, n), t.push(n + r);
}
function jh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "SUB[]", r, n), t.push(n - r);
}
function Hh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "DIV[]", r, n), t.push((n * 64) / r);
}
function Wh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "MUL[]", r, n), t.push((n * r) / 64);
}
function zh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r));
}
function $h(e) {
	const t = e.stack;
	let r = t.pop();
	exports.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
}
function Vh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "FLOOR[]", r),
		t.push(Math.floor(r / 64) * 64);
}
function qh(e) {
	const t = e.stack,
		r = t.pop();
	exports.DEBUG && console.log(e.step, "CEILING[]", r),
		t.push(Math.ceil(r / 64) * 64);
}
function Rn(e, t) {
	const r = t.stack,
		n = r.pop();
	exports.DEBUG && console.log(t.step, "ROUND[]"), r.push(t.round(n / 64) * 64);
}
function Xh(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "WCVTF[]", r, n),
		(e.cvt[n] = (r * e.ppem) / e.font.unitsPerEm);
}
function so(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = t.ppem,
		s = t.deltaBase + (e - 1) * 16,
		i = t.deltaShift;
	exports.DEBUG && console.log(t.step, "DELTAC[" + e + "]", n, r);
	for (let a = 0; a < n; a++) {
		const l = r.pop(),
			u = r.pop();
		if (s + ((u & 240) >> 4) !== o) continue;
		let p = (u & 15) - 8;
		p >= 0 && p++;
		const h = p * i;
		exports.DEBUG && console.log(t.step, "DELTACFIX", l, "by", h),
			(t.cvt[l] += h);
	}
}
function Yh(e) {
	let t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SROUND[]", t), (e.round = Ol);
	let r;
	switch (t & 192) {
		case 0:
			r = 0.5;
			break;
		case 64:
			r = 1;
			break;
		case 128:
			r = 2;
			break;
		default:
			throw new Error("invalid SROUND value");
	}
	switch (((e.srPeriod = r), t & 48)) {
		case 0:
			e.srPhase = 0;
			break;
		case 16:
			e.srPhase = 0.25 * r;
			break;
		case 32:
			e.srPhase = 0.5 * r;
			break;
		case 48:
			e.srPhase = 0.75 * r;
			break;
		default:
			throw new Error("invalid SROUND value");
	}
	(t &= 15),
		t === 0 ? (e.srThreshold = 0) : (e.srThreshold = (t / 8 - 0.5) * r);
}
function Zh(e) {
	let t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "S45ROUND[]", t), (e.round = Ol);
	let r;
	switch (t & 192) {
		case 0:
			r = Math.sqrt(2) / 2;
			break;
		case 64:
			r = Math.sqrt(2);
			break;
		case 128:
			r = 2 * Math.sqrt(2);
			break;
		default:
			throw new Error("invalid S45ROUND value");
	}
	switch (((e.srPeriod = r), t & 48)) {
		case 0:
			e.srPhase = 0;
			break;
		case 16:
			e.srPhase = 0.25 * r;
			break;
		case 32:
			e.srPhase = 0.5 * r;
			break;
		case 48:
			e.srPhase = 0.75 * r;
			break;
		default:
			throw new Error("invalid S45ROUND value");
	}
	(t &= 15),
		t === 0 ? (e.srThreshold = 0) : (e.srThreshold = (t / 8 - 0.5) * r);
}
function Kh(e) {
	exports.DEBUG && console.log(e.step, "ROFF[]"), (e.round = Up);
}
function Jh(e) {
	exports.DEBUG && console.log(e.step, "RUTG[]"), (e.round = Dp);
}
function Qh(e) {
	exports.DEBUG && console.log(e.step, "RDTG[]"), (e.round = Lp);
}
function eg(e) {
	const t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SCANCTRL[]", t);
}
function ea(e, t) {
	const r = t.stack,
		n = r.pop(),
		o = r.pop(),
		s = t.z2[n],
		i = t.z1[o];
	exports.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", n, o);
	let a, l;
	e ? ((a = s.y - i.y), (l = i.x - s.x)) : ((a = i.x - s.x), (l = i.y - s.y)),
		(t.dpv = Sn(a, l));
}
function tg(e) {
	const t = e.stack,
		r = t.pop();
	let n = 0;
	exports.DEBUG && console.log(e.step, "GETINFO[]", r),
		r & 1 && (n = 35),
		r & 32 && (n |= 4096),
		t.push(n);
}
function ng(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop(),
		o = t.pop();
	exports.DEBUG && console.log(e.step, "ROLL[]"),
		t.push(n),
		t.push(r),
		t.push(o);
}
function rg(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "MAX[]", r, n), t.push(Math.max(n, r));
}
function og(e) {
	const t = e.stack,
		r = t.pop(),
		n = t.pop();
	exports.DEBUG && console.log(e.step, "MIN[]", r, n), t.push(Math.min(n, r));
}
function sg(e) {
	const t = e.stack.pop();
	exports.DEBUG && console.log(e.step, "SCANTYPE[]", t);
}
function ig(e) {
	const t = e.stack.pop();
	let r = e.stack.pop();
	switch ((exports.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t)) {
		case 1:
			e.inhibitGridFit = !!r;
			return;
		case 2:
			e.ignoreCvt = !!r;
			return;
		default:
			throw new Error("invalid INSTCTRL[] selector");
	}
}
function Ft(e, t) {
	const r = t.stack,
		n = t.prog;
	let o = t.ip;
	exports.DEBUG && console.log(t.step, "PUSHB[" + e + "]");
	for (let s = 0; s < e; s++) r.push(n[++o]);
	t.ip = o;
}
function wt(e, t) {
	let r = t.ip;
	const n = t.prog,
		o = t.stack;
	exports.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");
	for (let s = 0; s < e; s++) {
		let i = (n[++r] << 8) | n[++r];
		i & 32768 && (i = -((i ^ 65535) + 1)), o.push(i);
	}
	t.ip = r;
}
function V(e, t, r, n, o, s) {
	const i = s.stack,
		a = e && i.pop(),
		l = i.pop(),
		u = s.rp0,
		d = s.z0[u],
		p = s.z1[l],
		h = s.minDis,
		f = s.fv,
		v = s.dpv;
	let S, b, I, P;
	(b = S = v.distance(p, d, !0, !0)),
		(I = b >= 0 ? 1 : -1),
		(b = Math.abs(b)),
		e && ((P = s.cvt[a]), n && Math.abs(b - P) < s.cvCutIn && (b = P)),
		r && b < h && (b = h),
		n && (b = s.round(b)),
		f.setRelative(p, d, I * b, v),
		f.touch(p),
		exports.DEBUG &&
			console.log(
				s.step,
				(e ? "MIRP[" : "MDRP[") +
					(t ? "M" : "m") +
					(r ? ">" : "_") +
					(n ? "R" : "_") +
					(o === 0 ? "Gr" : o === 1 ? "Bl" : o === 2 ? "Wh" : "") +
					"]",
				e ? a + "(" + s.cvt[a] + "," + P + ")" : "",
				l,
				"(d =",
				S,
				"->",
				I * b,
				")",
			),
		(s.rp1 = s.rp0),
		(s.rp2 = l),
		t && (s.rp0 = l);
}
wl = [
	Gi.bind(void 0, xt),
	Gi.bind(void 0, ct),
	ji.bind(void 0, xt),
	ji.bind(void 0, ct),
	Hi.bind(void 0, xt),
	Hi.bind(void 0, ct),
	Wi.bind(void 0, 0),
	Wi.bind(void 0, 1),
	zi.bind(void 0, 0),
	zi.bind(void 0, 1),
	Bp,
	Np,
	Gp,
	jp,
	Hp,
	Wp,
	zp,
	$p,
	Vp,
	qp,
	Xp,
	Yp,
	Zp,
	Kp,
	Jp,
	Qp,
	eh,
	th,
	nh,
	rh,
	void 0,
	void 0,
	oh,
	ro,
	sh,
	ih,
	ah,
	uh,
	dh,
	void 0,
	void 0,
	void 0,
	lh,
	ch,
	fh,
	void 0,
	$i.bind(void 0, 0),
	$i.bind(void 0, 1),
	Vi.bind(void 0, xt),
	Vi.bind(void 0, ct),
	qi.bind(void 0, 0),
	qi.bind(void 0, 1),
	Xi.bind(void 0, 0),
	Xi.bind(void 0, 1),
	Yi.bind(void 0, 0),
	Yi.bind(void 0, 1),
	ph,
	hh,
	Zi.bind(void 0, 0),
	Zi.bind(void 0, 1),
	gh,
	mh,
	Ki.bind(void 0, 0),
	Ki.bind(void 0, 1),
	yh,
	vh,
	bh,
	xh,
	Sh,
	_h,
	Ji.bind(void 0, 0),
	Ji.bind(void 0, 1),
	void 0,
	Qi.bind(void 0, 0),
	Qi.bind(void 0, 1),
	kh,
	void 0,
	Fh,
	void 0,
	void 0,
	wh,
	Th,
	Ch,
	Eh,
	Oh,
	Mh,
	Ih,
	Uh,
	Ph,
	Ah,
	Dh,
	Lh,
	Rh,
	oo.bind(void 0, 1),
	Bh,
	Nh,
	Gh,
	jh,
	Hh,
	Wh,
	zh,
	$h,
	Vh,
	qh,
	Rn.bind(void 0, 0),
	Rn.bind(void 0, 1),
	Rn.bind(void 0, 2),
	Rn.bind(void 0, 3),
	void 0,
	void 0,
	void 0,
	void 0,
	Xh,
	oo.bind(void 0, 2),
	oo.bind(void 0, 3),
	so.bind(void 0, 1),
	so.bind(void 0, 2),
	so.bind(void 0, 3),
	Yh,
	Zh,
	void 0,
	void 0,
	Kh,
	void 0,
	Jh,
	Qh,
	ro,
	ro,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	eg,
	ea.bind(void 0, 0),
	ea.bind(void 0, 1),
	tg,
	void 0,
	ng,
	rg,
	og,
	sg,
	ig,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	void 0,
	Ft.bind(void 0, 1),
	Ft.bind(void 0, 2),
	Ft.bind(void 0, 3),
	Ft.bind(void 0, 4),
	Ft.bind(void 0, 5),
	Ft.bind(void 0, 6),
	Ft.bind(void 0, 7),
	Ft.bind(void 0, 8),
	wt.bind(void 0, 1),
	wt.bind(void 0, 2),
	wt.bind(void 0, 3),
	wt.bind(void 0, 4),
	wt.bind(void 0, 5),
	wt.bind(void 0, 6),
	wt.bind(void 0, 7),
	wt.bind(void 0, 8),
	V.bind(void 0, 0, 0, 0, 0, 0),
	V.bind(void 0, 0, 0, 0, 0, 1),
	V.bind(void 0, 0, 0, 0, 0, 2),
	V.bind(void 0, 0, 0, 0, 0, 3),
	V.bind(void 0, 0, 0, 0, 1, 0),
	V.bind(void 0, 0, 0, 0, 1, 1),
	V.bind(void 0, 0, 0, 0, 1, 2),
	V.bind(void 0, 0, 0, 0, 1, 3),
	V.bind(void 0, 0, 0, 1, 0, 0),
	V.bind(void 0, 0, 0, 1, 0, 1),
	V.bind(void 0, 0, 0, 1, 0, 2),
	V.bind(void 0, 0, 0, 1, 0, 3),
	V.bind(void 0, 0, 0, 1, 1, 0),
	V.bind(void 0, 0, 0, 1, 1, 1),
	V.bind(void 0, 0, 0, 1, 1, 2),
	V.bind(void 0, 0, 0, 1, 1, 3),
	V.bind(void 0, 0, 1, 0, 0, 0),
	V.bind(void 0, 0, 1, 0, 0, 1),
	V.bind(void 0, 0, 1, 0, 0, 2),
	V.bind(void 0, 0, 1, 0, 0, 3),
	V.bind(void 0, 0, 1, 0, 1, 0),
	V.bind(void 0, 0, 1, 0, 1, 1),
	V.bind(void 0, 0, 1, 0, 1, 2),
	V.bind(void 0, 0, 1, 0, 1, 3),
	V.bind(void 0, 0, 1, 1, 0, 0),
	V.bind(void 0, 0, 1, 1, 0, 1),
	V.bind(void 0, 0, 1, 1, 0, 2),
	V.bind(void 0, 0, 1, 1, 0, 3),
	V.bind(void 0, 0, 1, 1, 1, 0),
	V.bind(void 0, 0, 1, 1, 1, 1),
	V.bind(void 0, 0, 1, 1, 1, 2),
	V.bind(void 0, 0, 1, 1, 1, 3),
	V.bind(void 0, 1, 0, 0, 0, 0),
	V.bind(void 0, 1, 0, 0, 0, 1),
	V.bind(void 0, 1, 0, 0, 0, 2),
	V.bind(void 0, 1, 0, 0, 0, 3),
	V.bind(void 0, 1, 0, 0, 1, 0),
	V.bind(void 0, 1, 0, 0, 1, 1),
	V.bind(void 0, 1, 0, 0, 1, 2),
	V.bind(void 0, 1, 0, 0, 1, 3),
	V.bind(void 0, 1, 0, 1, 0, 0),
	V.bind(void 0, 1, 0, 1, 0, 1),
	V.bind(void 0, 1, 0, 1, 0, 2),
	V.bind(void 0, 1, 0, 1, 0, 3),
	V.bind(void 0, 1, 0, 1, 1, 0),
	V.bind(void 0, 1, 0, 1, 1, 1),
	V.bind(void 0, 1, 0, 1, 1, 2),
	V.bind(void 0, 1, 0, 1, 1, 3),
	V.bind(void 0, 1, 1, 0, 0, 0),
	V.bind(void 0, 1, 1, 0, 0, 1),
	V.bind(void 0, 1, 1, 0, 0, 2),
	V.bind(void 0, 1, 1, 0, 0, 3),
	V.bind(void 0, 1, 1, 0, 1, 0),
	V.bind(void 0, 1, 1, 0, 1, 1),
	V.bind(void 0, 1, 1, 0, 1, 2),
	V.bind(void 0, 1, 1, 0, 1, 3),
	V.bind(void 0, 1, 1, 1, 0, 0),
	V.bind(void 0, 1, 1, 1, 0, 1),
	V.bind(void 0, 1, 1, 1, 0, 2),
	V.bind(void 0, 1, 1, 1, 0, 3),
	V.bind(void 0, 1, 1, 1, 1, 0),
	V.bind(void 0, 1, 1, 1, 1, 1),
	V.bind(void 0, 1, 1, 1, 1, 2),
	V.bind(void 0, 1, 1, 1, 1, 3),
];
function en(e) {
	(this.char = e), (this.state = {}), (this.activeState = null);
}
function Wo(e, t, r) {
	(this.contextName = r), (this.startIndex = e), (this.endOffset = t);
}
function ag(e, t, r) {
	(this.contextName = e),
		(this.openRange = null),
		(this.ranges = []),
		(this.checkStart = t),
		(this.checkEnd = r);
}
function et(e, t) {
	(this.context = e),
		(this.index = t),
		(this.length = e.length),
		(this.current = e[t]),
		(this.backtrack = e.slice(0, t)),
		(this.lookahead = e.slice(t + 1));
}
function ur(e) {
	(this.eventId = e), (this.subscribers = []);
}
function lg(e) {
	const t = [
		"start",
		"end",
		"next",
		"newToken",
		"contextStart",
		"contextEnd",
		"insertToken",
		"removeToken",
		"removeRange",
		"replaceToken",
		"replaceRange",
		"composeRUD",
		"updateContextsRanges",
	];
	t.forEach((n) => {
		Object.defineProperty(this.events, n, { value: new ur(n) });
	}),
		e &&
			t.forEach((n) => {
				const o = e[n];
				typeof o == "function" && this.events[n].subscribe(o);
			}),
		[
			"insertToken",
			"removeToken",
			"removeRange",
			"replaceToken",
			"replaceRange",
			"composeRUD",
		].forEach((n) => {
			this.events[n].subscribe(this.updateContextsRanges);
		});
}
function Fe(e) {
	(this.tokens = []),
		(this.registeredContexts = {}),
		(this.contextCheckers = []),
		(this.events = {}),
		(this.registeredModifiers = []),
		lg.call(this, e);
}
en.prototype.setState = function (e, t) {
	return (
		(this.state[e] = t),
		(this.activeState = { key: e, value: this.state[e] }),
		this.activeState
	);
};
en.prototype.getState = function (e) {
	return this.state[e] || null;
};
Fe.prototype.inboundIndex = function (e) {
	return e >= 0 && e < this.tokens.length;
};
Fe.prototype.composeRUD = function (e) {
	const r = e.map((o) => this[o[0]].apply(this, o.slice(1).concat(!0))),
		n = (o) => typeof o == "object" && o.hasOwnProperty("FAIL");
	if (r.every(n))
		return {
			FAIL: "composeRUD: one or more operations hasn't completed successfully",
			report: r.filter(n),
		};
	this.dispatch("composeRUD", [r.filter((o) => !n(o))]);
};
Fe.prototype.replaceRange = function (e, t, r, n) {
	t = t !== null ? t : this.tokens.length;
	const o = r.every((s) => s instanceof en);
	if (!isNaN(e) && this.inboundIndex(e) && o) {
		const s = this.tokens.splice.apply(this.tokens, [e, t].concat(r));
		return n || this.dispatch("replaceToken", [e, t, r]), [s, r];
	} else return { FAIL: "replaceRange: invalid tokens or startIndex." };
};
Fe.prototype.replaceToken = function (e, t, r) {
	if (!isNaN(e) && this.inboundIndex(e) && t instanceof en) {
		const n = this.tokens.splice(e, 1, t);
		return r || this.dispatch("replaceToken", [e, t]), [n[0], t];
	} else return { FAIL: "replaceToken: invalid token or index." };
};
Fe.prototype.removeRange = function (e, t, r) {
	t = isNaN(t) ? this.tokens.length : t;
	const n = this.tokens.splice(e, t);
	return r || this.dispatch("removeRange", [n, e, t]), n;
};
Fe.prototype.removeToken = function (e, t) {
	if (!isNaN(e) && this.inboundIndex(e)) {
		const r = this.tokens.splice(e, 1);
		return t || this.dispatch("removeToken", [r, e]), r;
	} else return { FAIL: "removeToken: invalid token index." };
};
Fe.prototype.insertToken = function (e, t, r) {
	return e.every((o) => o instanceof en)
		? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)),
			r || this.dispatch("insertToken", [e, t]),
			e)
		: { FAIL: "insertToken: invalid token(s)." };
};
Fe.prototype.registerModifier = function (e, t, r) {
	this.events.newToken.subscribe(function (n, o) {
		const s = [n, o],
			i = t === null || t.apply(this, s) === !0,
			a = [n, o];
		if (i) {
			let l = r.apply(this, a);
			n.setState(e, l);
		}
	}),
		this.registeredModifiers.push(e);
};
ur.prototype.subscribe = function (e) {
	return typeof e == "function"
		? this.subscribers.push(e) - 1
		: { FAIL: `invalid '${this.eventId}' event handler` };
};
ur.prototype.unsubscribe = function (e) {
	this.subscribers.splice(e, 1);
};
et.prototype.setCurrentIndex = function (e) {
	(this.index = e),
		(this.current = this.context[e]),
		(this.backtrack = this.context.slice(0, e)),
		(this.lookahead = this.context.slice(e + 1));
};
et.prototype.get = function (e) {
	switch (!0) {
		case e === 0:
			return this.current;
		case e < 0 && Math.abs(e) <= this.backtrack.length:
			return this.backtrack.slice(e)[0];
		case e > 0 && e <= this.lookahead.length:
			return this.lookahead[e - 1];
		default:
			return null;
	}
};
Fe.prototype.rangeToText = function (e) {
	if (e instanceof Wo)
		return this.getRangeTokens(e)
			.map((t) => t.char)
			.join("");
};
Fe.prototype.getText = function () {
	return this.tokens.map((e) => e.char).join("");
};
Fe.prototype.getContext = function (e) {
	let t = this.registeredContexts[e];
	return t || null;
};
Fe.prototype.on = function (e, t) {
	const r = this.events[e];
	return r ? r.subscribe(t) : null;
};
Fe.prototype.dispatch = function (e, t) {
	const r = this.events[e];
	r instanceof ur &&
		r.subscribers.forEach((n) => {
			n.apply(this, t || []);
		});
};
Fe.prototype.registerContextChecker = function (e, t, r) {
	if (this.getContext(e))
		return { FAIL: `context name '${e}' is already registered.` };
	if (typeof t != "function") return { FAIL: "missing context start check." };
	if (typeof r != "function") return { FAIL: "missing context end check." };
	const n = new ag(e, t, r);
	return (this.registeredContexts[e] = n), this.contextCheckers.push(n), n;
};
Fe.prototype.getRangeTokens = function (e) {
	const t = e.startIndex + e.endOffset;
	return [].concat(this.tokens.slice(e.startIndex, t));
};
Fe.prototype.getContextRanges = function (e) {
	const t = this.getContext(e);
	return t ? t.ranges : { FAIL: `context checker '${e}' is not registered.` };
};
Fe.prototype.resetContextsRanges = function () {
	const e = this.registeredContexts;
	for (const t in e)
		if (e.hasOwnProperty(t)) {
			const r = e[t];
			r.ranges = [];
		}
};
Fe.prototype.updateContextsRanges = function () {
	this.resetContextsRanges();
	const e = this.tokens.map((t) => t.char);
	for (let t = 0; t < e.length; t++) {
		const r = new et(e, t);
		this.runContextCheck(r);
	}
	this.dispatch("updateContextsRanges", [this.registeredContexts]);
};
Fe.prototype.setEndOffset = function (e, t) {
	const r = this.getContext(t).openRange.startIndex;
	let n = new Wo(r, e, t);
	const o = this.getContext(t).ranges;
	return (
		(n.rangeId = `${t}.${o.length}`),
		o.push(n),
		(this.getContext(t).openRange = null),
		n
	);
};
Fe.prototype.runContextCheck = function (e) {
	const t = e.index;
	this.contextCheckers.forEach((r) => {
		let n = r.contextName,
			o = this.getContext(n).openRange;
		if (
			(!o &&
				r.checkStart(e) &&
				((o = new Wo(t, null, n)),
				(this.getContext(n).openRange = o),
				this.dispatch("contextStart", [n, t])),
			o && r.checkEnd(e))
		) {
			const s = t - o.startIndex + 1,
				i = this.setEndOffset(s, n);
			this.dispatch("contextEnd", [n, i]);
		}
	});
};
Fe.prototype.tokenize = function (e) {
	(this.tokens = []), this.resetContextsRanges();
	let t = Array.from(e);
	this.dispatch("start");
	for (let r = 0; r < t.length; r++) {
		const n = t[r],
			o = new et(t, r);
		this.dispatch("next", [o]), this.runContextCheck(o);
		let s = new en(n);
		this.tokens.push(s), this.dispatch("newToken", [s, o]);
	}
	return this.dispatch("end", [this.tokens]), this.tokens;
};
function Et(e) {
	return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e);
}
function Il(e) {
	return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(
		e,
	);
}
function Ot(e) {
	return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(
		e,
	);
}
function Xn(e) {
	return /[A-z]/.test(e);
}
function cg(e) {
	return /\s/.test(e);
}
function Ve(e) {
	(this.font = e), (this.features = {});
}
function Rt(e) {
	(this.id = e.id), (this.tag = e.tag), (this.substitution = e.substitution);
}
function _n(e, t) {
	if (!e) return -1;
	switch (t.format) {
		case 1:
			return t.glyphs.indexOf(e);
		case 2:
			let r = t.ranges;
			for (let n = 0; n < r.length; n++) {
				const o = r[n];
				if (e >= o.start && e <= o.end) {
					let s = e - o.start;
					return o.index + s;
				}
			}
			break;
		default:
			return -1;
	}
	return -1;
}
function ug(e, t) {
	return _n(e, t.coverage) === -1 ? null : e + t.deltaGlyphId;
}
function dg(e, t) {
	let r = _n(e, t.coverage);
	return r === -1 ? null : t.substitute[r];
}
function io(e, t) {
	let r = [];
	for (let n = 0; n < e.length; n++) {
		const o = e[n];
		let s = t.current;
		s = Array.isArray(s) ? s[0] : s;
		const i = _n(s, o);
		i !== -1 && r.push(i);
	}
	return r.length !== e.length ? -1 : r;
}
function fg(e, t) {
	const r =
		t.inputCoverage.length +
		t.lookaheadCoverage.length +
		t.backtrackCoverage.length;
	if (e.context.length < r) return [];
	let n = io(t.inputCoverage, e);
	if (n === -1) return [];
	const o = t.inputCoverage.length - 1;
	if (e.lookahead.length < t.lookaheadCoverage.length) return [];
	let s = e.lookahead.slice(o);
	for (; s.length && Ot(s[0].char); ) s.shift();
	const i = new et(s, 0);
	let a = io(t.lookaheadCoverage, i),
		l = [].concat(e.backtrack);
	for (l.reverse(); l.length && Ot(l[0].char); ) l.shift();
	if (l.length < t.backtrackCoverage.length) return [];
	const u = new et(l, 0);
	let d = io(t.backtrackCoverage, u);
	const p =
		n.length === t.inputCoverage.length &&
		a.length === t.lookaheadCoverage.length &&
		d.length === t.backtrackCoverage.length;
	let h = [];
	if (p)
		for (let f = 0; f < t.lookupRecords.length; f++) {
			const S = t.lookupRecords[f].lookupListIndex,
				b = this.getLookupByIndex(S);
			for (let I = 0; I < b.subtables.length; I++) {
				const P = b.subtables[I],
					M = this.getLookupMethod(b, P);
				if (this.getSubstitutionType(b, P) === "12")
					for (let re = 0; re < n.length; re++) {
						const _ = e.get(re),
							k = M(_);
						k && h.push(k);
					}
			}
		}
	return h;
}
function pg(e, t) {
	let r = e.current,
		n = _n(r, t.coverage);
	if (n === -1) return null;
	let o,
		s = t.ligatureSets[n];
	for (let i = 0; i < s.length; i++) {
		o = s[i];
		for (let a = 0; a < o.components.length; a++) {
			const l = e.lookahead[a],
				u = o.components[a];
			if (l !== u) break;
			if (a === o.components.length - 1) return o;
		}
	}
	return null;
}
function hg(e, t) {
	let r = _n(e, t.coverage);
	return r === -1 ? null : t.sequences[r];
}
Ve.prototype.getDefaultScriptFeaturesIndexes = function () {
	const e = this.font.tables.gsub.scripts;
	for (let t = 0; t < e.length; t++) {
		const r = e[t];
		if (r.tag === "DFLT") return r.script.defaultLangSys.featureIndexes;
	}
	return [];
};
Ve.prototype.getScriptFeaturesIndexes = function (e) {
	if (!this.font.tables.gsub) return [];
	if (!e) return this.getDefaultScriptFeaturesIndexes();
	const r = this.font.tables.gsub.scripts;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.tag === e && o.script.defaultLangSys)
			return o.script.defaultLangSys.featureIndexes;
		{
			let s = o.langSysRecords;
			if (s)
				for (let i = 0; i < s.length; i++) {
					const a = s[i];
					if (a.tag === e) return a.langSys.featureIndexes;
				}
		}
	}
	return this.getDefaultScriptFeaturesIndexes();
};
Ve.prototype.mapTagsToFeatures = function (e, t) {
	let r = {};
	for (let n = 0; n < e.length; n++) {
		const o = e[n].tag,
			s = e[n].feature;
		r[o] = s;
	}
	this.features[t].tags = r;
};
Ve.prototype.getScriptFeatures = function (e) {
	let t = this.features[e];
	if (this.features.hasOwnProperty(e)) return t;
	const r = this.getScriptFeaturesIndexes(e);
	if (!r) return null;
	const n = this.font.tables.gsub;
	return (
		(t = r.map((o) => n.features[o])),
		(this.features[e] = t),
		this.mapTagsToFeatures(t, e),
		t
	);
};
Ve.prototype.getSubstitutionType = function (e, t) {
	const r = e.lookupType.toString(),
		n = t.substFormat.toString();
	return r + n;
};
Ve.prototype.getLookupMethod = function (e, t) {
	switch (this.getSubstitutionType(e, t)) {
		case "11":
			return (n) => ug.apply(this, [n, t]);
		case "12":
			return (n) => dg.apply(this, [n, t]);
		case "63":
			return (n) => fg.apply(this, [n, t]);
		case "41":
			return (n) => pg.apply(this, [n, t]);
		case "21":
			return (n) => hg.apply(this, [n, t]);
		default:
			throw new Error(
				`lookupType: ${e.lookupType} - substFormat: ${t.substFormat} is not yet supported`,
			);
	}
};
Ve.prototype.lookupFeature = function (e) {
	let t = e.contextParams,
		r = t.index;
	const n = this.getFeature({ tag: e.tag, script: e.script });
	if (!n)
		return new Error(
			`font '${this.font.names.fullName.en}' doesn't support feature '${e.tag}' for script '${e.script}'.`,
		);
	const o = this.getFeatureLookups(n),
		s = [].concat(t.context);
	for (let i = 0; i < o.length; i++) {
		const a = o[i],
			l = this.getLookupSubtables(a);
		for (let u = 0; u < l.length; u++) {
			const d = l[u],
				p = this.getSubstitutionType(a, d),
				h = this.getLookupMethod(a, d);
			let f;
			switch (p) {
				case "11":
					(f = h(t.current)),
						f &&
							s.splice(r, 1, new Rt({ id: 11, tag: e.tag, substitution: f }));
					break;
				case "12":
					(f = h(t.current)),
						f &&
							s.splice(r, 1, new Rt({ id: 12, tag: e.tag, substitution: f }));
					break;
				case "63":
					(f = h(t)),
						Array.isArray(f) &&
							f.length &&
							s.splice(r, 1, new Rt({ id: 63, tag: e.tag, substitution: f }));
					break;
				case "41":
					(f = h(t)),
						f &&
							s.splice(r, 1, new Rt({ id: 41, tag: e.tag, substitution: f }));
					break;
				case "21":
					(f = h(t.current)),
						f &&
							s.splice(r, 1, new Rt({ id: 21, tag: e.tag, substitution: f }));
					break;
			}
			(t = new et(s, r)), !(Array.isArray(f) && !f.length) && (f = null);
		}
	}
	return s.length ? s : null;
};
Ve.prototype.supports = function (e) {
	if (!e.script) return !1;
	this.getScriptFeatures(e.script);
	const t = this.features.hasOwnProperty(e.script);
	if (!e.tag) return t;
	const r = this.features[e.script].some((n) => n.tag === e.tag);
	return t && r;
};
Ve.prototype.getLookupSubtables = function (e) {
	return e.subtables || null;
};
Ve.prototype.getLookupByIndex = function (e) {
	return this.font.tables.gsub.lookups[e] || null;
};
Ve.prototype.getFeatureLookups = function (e) {
	return e.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
Ve.prototype.getFeature = function (t) {
	if (!this.font) return { FAIL: "No font was found" };
	this.features.hasOwnProperty(t.script) || this.getScriptFeatures(t.script);
	const r = this.features[t.script];
	return r
		? r.tags[t.tag]
			? this.features[t.script].tags[t.tag]
			: null
		: { FAIL: `No feature for script ${t.script}` };
};
function gg(e) {
	const t = e.current,
		r = e.get(-1);
	return (r === null && Et(t)) || (!Et(r) && Et(t));
}
function mg(e) {
	const t = e.get(1);
	return t === null || !Et(t);
}
const yg = { startCheck: gg, endCheck: mg };
function vg(e) {
	const t = e.current,
		r = e.get(-1);
	return (Et(t) || Ot(t)) && !Et(r);
}
function bg(e) {
	const t = e.get(1);
	switch (!0) {
		case t === null:
			return !0;
		case !Et(t) && !Ot(t):
			const r = cg(t);
			if (!r) return !0;
			if (r) {
				let n = !1;
				if (((n = e.lookahead.some((o) => Et(o) || Ot(o))), !n)) return !0;
			}
			break;
		default:
			return !1;
	}
}
const xg = { startCheck: vg, endCheck: bg };
function Sg(e, t, r) {
	t[r].setState(e.tag, e.substitution);
}
function _g(e, t, r) {
	t[r].setState(e.tag, e.substitution);
}
function kg(e, t, r) {
	e.substitution.forEach((n, o) => {
		t[r + o].setState(e.tag, n);
	});
}
function Fg(e, t, r) {
	let n = t[r];
	n.setState(e.tag, e.substitution.ligGlyph);
	const o = e.substitution.components.length;
	for (let s = 0; s < o; s++) (n = t[r + s + 1]), n.setState("deleted", !0);
}
const ta = { 11: Sg, 12: _g, 63: kg, 41: Fg };
function zo(e, t, r) {
	e instanceof Rt && ta[e.id] && ta[e.id](e, t, r);
}
function wg(e) {
	let t = [].concat(e.backtrack);
	for (let r = t.length - 1; r >= 0; r--) {
		const n = t[r],
			o = Il(n),
			s = Ot(n);
		if (!o && !s) return !0;
		if (o) return !1;
	}
	return !1;
}
function Tg(e) {
	if (Il(e.current)) return !1;
	for (let t = 0; t < e.lookahead.length; t++) {
		const r = e.lookahead[t];
		if (!Ot(r)) return !0;
	}
	return !1;
}
function Cg(e) {
	const t = "arab",
		r = this.featuresTags[t],
		n = this.tokenizer.getRangeTokens(e);
	if (n.length === 1) return;
	let o = new et(
		n.map((i) => i.getState("glyphIndex")),
		0,
	);
	const s = new et(
		n.map((i) => i.char),
		0,
	);
	n.forEach((i, a) => {
		if (Ot(i.char)) return;
		o.setCurrentIndex(a), s.setCurrentIndex(a);
		let l = 0;
		wg(s) && (l |= 1), Tg(s) && (l |= 2);
		let u;
		switch (l) {
			case 1:
				u = "fina";
				break;
			case 2:
				u = "init";
				break;
			case 3:
				u = "medi";
				break;
		}
		if (r.indexOf(u) === -1) return;
		let d = this.query.lookupFeature({ tag: u, script: t, contextParams: o });
		if (d instanceof Error) return console.info(d.message);
		d.forEach((p, h) => {
			p instanceof Rt && (zo(p, n, h), (o.context[h] = p.substitution));
		});
	});
}
function na(e, t) {
	const r = e.map((n) => n.activeState.value);
	return new et(r, t || 0);
}
function Eg(e) {
	const t = "arab";
	let r = this.tokenizer.getRangeTokens(e),
		n = na(r);
	n.context.forEach((o, s) => {
		n.setCurrentIndex(s);
		let i = this.query.lookupFeature({
			tag: "rlig",
			script: t,
			contextParams: n,
		});
		i.length && (i.forEach((a) => zo(a, r, s)), (n = na(r)));
	});
}
function Og(e) {
	const t = e.current,
		r = e.get(-1);
	return (r === null && Xn(t)) || (!Xn(r) && Xn(t));
}
function Mg(e) {
	const t = e.get(1);
	return t === null || !Xn(t);
}
const Ig = { startCheck: Og, endCheck: Mg };
function ra(e, t) {
	const r = e.map((n) => n.activeState.value);
	return new et(r, t || 0);
}
function Ug(e) {
	const t = "latn";
	let r = this.tokenizer.getRangeTokens(e),
		n = ra(r);
	n.context.forEach((o, s) => {
		n.setCurrentIndex(s);
		let i = this.query.lookupFeature({
			tag: "liga",
			script: t,
			contextParams: n,
		});
		i.length && (i.forEach((a) => zo(a, r, s)), (n = ra(r)));
	});
}
function rt(e) {
	(this.baseDir = e || "ltr"),
		(this.tokenizer = new Fe()),
		(this.featuresTags = {});
}
rt.prototype.setText = function (e) {
	this.text = e;
};
rt.prototype.contextChecks = {
	latinWordCheck: Ig,
	arabicWordCheck: yg,
	arabicSentenceCheck: xg,
};
function ao(e) {
	const t = this.contextChecks[`${e}Check`];
	return this.tokenizer.registerContextChecker(e, t.startCheck, t.endCheck);
}
function Pg() {
	return (
		ao.call(this, "latinWord"),
		ao.call(this, "arabicWord"),
		ao.call(this, "arabicSentence"),
		this.tokenizer.tokenize(this.text)
	);
}
function Ag() {
	this.tokenizer.getContextRanges("arabicSentence").forEach((t) => {
		let r = this.tokenizer.getRangeTokens(t);
		this.tokenizer.replaceRange(t.startIndex, t.endOffset, r.reverse());
	});
}
rt.prototype.registerFeatures = function (e, t) {
	const r = t.filter((n) => this.query.supports({ script: e, tag: n }));
	this.featuresTags.hasOwnProperty(e)
		? (this.featuresTags[e] = this.featuresTags[e].concat(r))
		: (this.featuresTags[e] = r);
};
rt.prototype.applyFeatures = function (e, t) {
	if (!e) throw new Error("No valid font was provided to apply features");
	this.query || (this.query = new Ve(e));
	for (let r = 0; r < t.length; r++) {
		const n = t[r];
		this.query.supports({ script: n.script }) &&
			this.registerFeatures(n.script, n.tags);
	}
};
rt.prototype.registerModifier = function (e, t, r) {
	this.tokenizer.registerModifier(e, t, r);
};
function $o() {
	if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1)
		throw new Error(
			"glyphIndex modifier is required to apply arabic presentation features.",
		);
}
function Dg() {
	const e = "arab";
	if (!this.featuresTags.hasOwnProperty(e)) return;
	$o.call(this),
		this.tokenizer.getContextRanges("arabicWord").forEach((r) => {
			Cg.call(this, r);
		});
}
function Lg() {
	const e = "arab";
	if (
		!this.featuresTags.hasOwnProperty(e) ||
		this.featuresTags[e].indexOf("rlig") === -1
	)
		return;
	$o.call(this),
		this.tokenizer.getContextRanges("arabicWord").forEach((n) => {
			Eg.call(this, n);
		});
}
function Rg() {
	const e = "latn";
	if (
		!this.featuresTags.hasOwnProperty(e) ||
		this.featuresTags[e].indexOf("liga") === -1
	)
		return;
	$o.call(this),
		this.tokenizer.getContextRanges("latinWord").forEach((n) => {
			Ug.call(this, n);
		});
}
rt.prototype.checkContextReady = function (e) {
	return !!this.tokenizer.getContext(e);
};
rt.prototype.applyFeaturesToContexts = function () {
	this.checkContextReady("arabicWord") && (Dg.call(this), Lg.call(this)),
		this.checkContextReady("latinWord") && Rg.call(this),
		this.checkContextReady("arabicSentence") && Ag.call(this);
};
rt.prototype.processText = function (e) {
	(!this.text || this.text !== e) &&
		(this.setText(e), Pg.call(this), this.applyFeaturesToContexts());
};
rt.prototype.getBidiText = function (e) {
	return this.processText(e), this.tokenizer.getText();
};
rt.prototype.getTextGlyphs = function (e) {
	this.processText(e);
	let t = [];
	for (let r = 0; r < this.tokenizer.tokens.length; r++) {
		const n = this.tokenizer.tokens[r];
		if (n.state.deleted) continue;
		const o = n.activeState.value;
		t.push(Array.isArray(o) ? o[0] : o);
	}
	return t;
};
function be(e) {
	(e = e || {}),
		(e.tables = e.tables || {}),
		e.empty ||
			(nn(
				e.familyName,
				"When creating a new Font object, familyName is required.",
			),
			nn(
				e.styleName,
				"When creating a new Font object, styleName is required.",
			),
			nn(
				e.unitsPerEm,
				"When creating a new Font object, unitsPerEm is required.",
			),
			nn(e.ascender, "When creating a new Font object, ascender is required."),
			nn(
				e.descender <= 0,
				"When creating a new Font object, negative descender value is required.",
			),
			(this.names = {
				fontFamily: { en: e.familyName || " " },
				fontSubfamily: { en: e.styleName || " " },
				fullName: { en: e.fullName || e.familyName + " " + e.styleName },
				postScriptName: {
					en:
						e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, ""),
				},
				designer: { en: e.designer || " " },
				designerURL: { en: e.designerURL || " " },
				manufacturer: { en: e.manufacturer || " " },
				manufacturerURL: { en: e.manufacturerURL || " " },
				license: { en: e.license || " " },
				licenseURL: { en: e.licenseURL || " " },
				version: { en: e.version || "Version 0.1" },
				description: { en: e.description || " " },
				copyright: { en: e.copyright || " " },
				trademark: { en: e.trademark || " " },
			}),
			(this.unitsPerEm = e.unitsPerEm || 1e3),
			(this.ascender = e.ascender),
			(this.descender = e.descender),
			(this.createdTimestamp = e.createdTimestamp),
			(this.tables = Object.assign(e.tables, {
				os2: Object.assign(
					{
						usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
						usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
						fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR,
					},
					e.tables.os2,
				),
			}))),
		(this.supported = !0),
		(this.glyphs = new dt.GlyphSet(this, e.glyphs || [])),
		(this.encoding = new Ya(this)),
		(this.position = new bn(this)),
		(this.substitution = new $e(this)),
		(this.tables = this.tables || {}),
		(this._push = null),
		(this._hmtxTableData = {}),
		Object.defineProperty(this, "hinting", {
			get: function () {
				if (this._hinting) return this._hinting;
				if (this.outlinesFormat === "truetype")
					return (this._hinting = new Cl(this));
			},
		});
}
be.prototype.hasChar = function (e) {
	return this.encoding.charToGlyphIndex(e) !== null;
};
be.prototype.charToGlyphIndex = function (e) {
	return this.encoding.charToGlyphIndex(e);
};
be.prototype.charToGlyph = function (e) {
	const t = this.charToGlyphIndex(e);
	let r = this.glyphs.get(t);
	return r || (r = this.glyphs.get(0)), r;
};
be.prototype.updateFeatures = function (e) {
	return this.defaultRenderOptions.features.map((t) =>
		t.script === "latn"
			? { script: "latn", tags: t.tags.filter((r) => e[r]) }
			: t,
	);
};
be.prototype.stringToGlyphs = function (e, t) {
	const r = new rt(),
		n = (u) => this.charToGlyphIndex(u.char);
	r.registerModifier("glyphIndex", null, n);
	let o = t
		? this.updateFeatures(t.features)
		: this.defaultRenderOptions.features;
	r.applyFeatures(this, o);
	const s = r.getTextGlyphs(e);
	let i = s.length;
	const a = new Array(i),
		l = this.glyphs.get(0);
	for (let u = 0; u < i; u += 1) a[u] = this.glyphs.get(s[u]) || l;
	return a;
};
be.prototype.nameToGlyphIndex = function (e) {
	return this.glyphNames.nameToGlyphIndex(e);
};
be.prototype.nameToGlyph = function (e) {
	const t = this.nameToGlyphIndex(e);
	let r = this.glyphs.get(t);
	return r || (r = this.glyphs.get(0)), r;
};
be.prototype.glyphIndexToName = function (e) {
	return this.glyphNames.glyphIndexToName
		? this.glyphNames.glyphIndexToName(e)
		: "";
};
be.prototype.getKerningValue = function (e, t) {
	(e = e.index || e), (t = t.index || t);
	const r = this.position.defaultKerningTables;
	return r
		? this.position.getKerningValue(r, e, t)
		: this.kerningPairs[e + "," + t] || 0;
};
be.prototype.defaultRenderOptions = {
	kerning: !0,
	features: [
		{ script: "arab", tags: ["init", "medi", "fina", "rlig"] },
		{ script: "latn", tags: ["liga", "rlig"] },
	],
};
be.prototype.forEachGlyph = function (e, t, r, n, o, s) {
	(t = t !== void 0 ? t : 0),
		(r = r !== void 0 ? r : 0),
		(n = n !== void 0 ? n : 72),
		(o = Object.assign({}, this.defaultRenderOptions, o));
	const i = (1 / this.unitsPerEm) * n,
		a = this.stringToGlyphs(e, o);
	let l;
	if (o.kerning) {
		const u = o.script || this.position.getDefaultScriptName();
		l = this.position.getKerningTables(u, o.language);
	}
	for (let u = 0; u < a.length; u += 1) {
		const d = a[u];
		if (
			(s.call(this, d, t, r, n, o),
			d.advanceWidth && (t += d.advanceWidth * i),
			o.kerning && u < a.length - 1)
		) {
			const p = l
				? this.position.getKerningValue(l, d.index, a[u + 1].index)
				: this.getKerningValue(d, a[u + 1]);
			t += p * i;
		}
		o.letterSpacing
			? (t += o.letterSpacing * n)
			: o.tracking && (t += (o.tracking / 1e3) * n);
	}
	return t;
};
be.prototype.getPath = function (e, t, r, n, o) {
	const s = new Ee();
	return (
		this.forEachGlyph(e, t, r, n, o, function (i, a, l, u) {
			const d = i.getPath(a, l, u, o, this);
			s.extend(d);
		}),
		s
	);
};
be.prototype.getPaths = function (e, t, r, n, o) {
	const s = [];
	return (
		this.forEachGlyph(e, t, r, n, o, function (i, a, l, u) {
			const d = i.getPath(a, l, u, o, this);
			s.push(d);
		}),
		s
	);
};
be.prototype.getAdvanceWidth = function (e, t, r) {
	return this.forEachGlyph(e, 0, 0, t, r, function () {});
};
be.prototype.draw = function (e, t, r, n, o, s) {
	this.getPath(t, r, n, o, s).draw(e);
};
be.prototype.drawPoints = function (e, t, r, n, o, s) {
	this.forEachGlyph(t, r, n, o, s, function (i, a, l, u) {
		i.drawPoints(e, a, l, u);
	});
};
be.prototype.drawMetrics = function (e, t, r, n, o, s) {
	this.forEachGlyph(t, r, n, o, s, function (i, a, l, u) {
		i.drawMetrics(e, a, l, u);
	});
};
be.prototype.getEnglishName = function (e) {
	const t = this.names[e];
	if (t) return t.en;
};
be.prototype.validate = function () {
	const e = this;
	function t(n, o) {}
	function r(n) {
		const o = e.getEnglishName(n);
		o && o.trim().length > 0;
	}
	r("fontFamily"),
		r("weightName"),
		r("manufacturer"),
		r("copyright"),
		r("version"),
		this.unitsPerEm > 0;
};
be.prototype.toTables = function () {
	return Fp.fontToTable(this);
};
be.prototype.toBuffer = function () {
	return (
		console.warn(
			"Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.",
		),
		this.toArrayBuffer()
	);
};
be.prototype.toArrayBuffer = function () {
	const t = this.toTables().encode(),
		r = new ArrayBuffer(t.length),
		n = new Uint8Array(r);
	for (let o = 0; o < t.length; o++) n[o] = t[o];
	return r;
};
be.prototype.download = function (e) {
	const t = this.getEnglishName("fontFamily"),
		r = this.getEnglishName("fontSubfamily");
	e = e || t.replace(/\s/g, "") + "-" + r + ".otf";
	const n = this.toArrayBuffer();
	if (Tp())
		if (((window.URL = window.URL || window.webkitURL), window.URL)) {
			const o = new DataView(n),
				s = new Blob([o], { type: "font/opentype" });
			let i = document.createElement("a");
			(i.href = window.URL.createObjectURL(s)), (i.download = e);
			let a = document.createEvent("MouseEvents");
			a.initEvent("click", !0, !1), i.dispatchEvent(a);
		} else
			console.warn(
				"Font file could not be downloaded. Try using a different browser.",
			);
	else {
		const o = require("fs"),
			s = Cp(n);
		o.writeFileSync(e, s);
	}
};
be.prototype.fsSelectionValues = {
	ITALIC: 1,
	UNDERSCORE: 2,
	NEGATIVE: 4,
	OUTLINED: 8,
	STRIKEOUT: 16,
	BOLD: 32,
	REGULAR: 64,
	USER_TYPO_METRICS: 128,
	WWS: 256,
	OBLIQUE: 512,
};
be.prototype.usWidthClasses = {
	ULTRA_CONDENSED: 1,
	EXTRA_CONDENSED: 2,
	CONDENSED: 3,
	SEMI_CONDENSED: 4,
	MEDIUM: 5,
	SEMI_EXPANDED: 6,
	EXPANDED: 7,
	EXTRA_EXPANDED: 8,
	ULTRA_EXPANDED: 9,
};
be.prototype.usWeightClasses = {
	THIN: 100,
	EXTRA_LIGHT: 200,
	LIGHT: 300,
	NORMAL: 400,
	MEDIUM: 500,
	SEMI_BOLD: 600,
	BOLD: 700,
	EXTRA_BOLD: 800,
	BLACK: 900,
};
function Ul(e, t) {
	const r = JSON.stringify(e);
	let n = 256;
	for (let o in t) {
		let s = parseInt(o);
		if (!(!s || s < 256)) {
			if (JSON.stringify(t[o]) === r) return s;
			n <= s && (n = s + 1);
		}
	}
	return (t[n] = e), n;
}
function Bg(e, t, r) {
	const n = Ul(t.name, r);
	return [
		{ name: "tag_" + e, type: "TAG", value: t.tag },
		{ name: "minValue_" + e, type: "FIXED", value: t.minValue << 16 },
		{ name: "defaultValue_" + e, type: "FIXED", value: t.defaultValue << 16 },
		{ name: "maxValue_" + e, type: "FIXED", value: t.maxValue << 16 },
		{ name: "flags_" + e, type: "USHORT", value: 0 },
		{ name: "nameID_" + e, type: "USHORT", value: n },
	];
}
function Ng(e, t, r) {
	const n = {},
		o = new q.Parser(e, t);
	return (
		(n.tag = o.parseTag()),
		(n.minValue = o.parseFixed()),
		(n.defaultValue = o.parseFixed()),
		(n.maxValue = o.parseFixed()),
		o.skip("uShort", 1),
		(n.name = r[o.parseUShort()] || {}),
		n
	);
}
function Gg(e, t, r, n) {
	const o = Ul(t.name, n),
		s = [
			{ name: "nameID_" + e, type: "USHORT", value: o },
			{ name: "flags_" + e, type: "USHORT", value: 0 },
		];
	for (let i = 0; i < r.length; ++i) {
		const a = r[i].tag;
		s.push({
			name: "axis_" + e + " " + a,
			type: "FIXED",
			value: t.coordinates[a] << 16,
		});
	}
	return s;
}
function jg(e, t, r, n) {
	const o = {},
		s = new q.Parser(e, t);
	(o.name = n[s.parseUShort()] || {}),
		s.skip("uShort", 1),
		(o.coordinates = {});
	for (let i = 0; i < r.length; ++i) o.coordinates[r[i].tag] = s.parseFixed();
	return o;
}
function Hg(e, t) {
	const r = new W.Table("fvar", [
		{ name: "version", type: "ULONG", value: 65536 },
		{ name: "offsetToData", type: "USHORT", value: 0 },
		{ name: "countSizePairs", type: "USHORT", value: 2 },
		{ name: "axisCount", type: "USHORT", value: e.axes.length },
		{ name: "axisSize", type: "USHORT", value: 20 },
		{ name: "instanceCount", type: "USHORT", value: e.instances.length },
		{ name: "instanceSize", type: "USHORT", value: 4 + e.axes.length * 4 },
	]);
	r.offsetToData = r.sizeOf();
	for (let n = 0; n < e.axes.length; n++)
		r.fields = r.fields.concat(Bg(n, e.axes[n], t));
	for (let n = 0; n < e.instances.length; n++)
		r.fields = r.fields.concat(Gg(n, e.instances[n], e.axes, t));
	return r;
}
function Wg(e, t, r) {
	const n = new q.Parser(e, t),
		o = n.parseULong();
	ne.argument(o === 65536, "Unsupported fvar table version.");
	const s = n.parseOffset16();
	n.skip("uShort", 1);
	const i = n.parseUShort(),
		a = n.parseUShort(),
		l = n.parseUShort(),
		u = n.parseUShort(),
		d = [];
	for (let f = 0; f < i; f++) d.push(Ng(e, t + s + f * a, r));
	const p = [],
		h = t + s + i * a;
	for (let f = 0; f < l; f++) p.push(jg(e, h + f * u, d, r));
	return { axes: d, instances: p };
}
const zg = { make: Hg, parse: Wg };
var $g = function () {
		return {
			coverage: this.parsePointer(x.coverage),
			attachPoints: this.parseList(x.pointer(x.uShortList)),
		};
	},
	Vg = function () {
		var e = this.parseUShort();
		if (
			(ne.argument(
				e === 1 || e === 2 || e === 3,
				"Unsupported CaretValue table version.",
			),
			e === 1)
		)
			return { coordinate: this.parseShort() };
		if (e === 2) return { pointindex: this.parseShort() };
		if (e === 3) return { coordinate: this.parseShort() };
	},
	qg = function () {
		return this.parseList(x.pointer(Vg));
	},
	Xg = function () {
		return {
			coverage: this.parsePointer(x.coverage),
			ligGlyphs: this.parseList(x.pointer(qg)),
		};
	},
	Yg = function () {
		return this.parseUShort(), this.parseList(x.pointer(x.coverage));
	};
function Zg(e, t) {
	t = t || 0;
	const r = new x(e, t),
		n = r.parseVersion(1);
	ne.argument(
		n === 1 || n === 1.2 || n === 1.3,
		"Unsupported GDEF table version.",
	);
	var o = {
		version: n,
		classDef: r.parsePointer(x.classDef),
		attachList: r.parsePointer($g),
		ligCaretList: r.parsePointer(Xg),
		markAttachClassDef: r.parsePointer(x.classDef),
	};
	return n >= 1.2 && (o.markGlyphSets = r.parsePointer(Yg)), o;
}
const Kg = { parse: Zg },
	tt = new Array(10);
tt[1] = function () {
	const t = this.offset + this.relativeOffset,
		r = this.parseUShort();
	if (r === 1)
		return {
			posFormat: 1,
			coverage: this.parsePointer(x.coverage),
			value: this.parseValueRecord(),
		};
	if (r === 2)
		return {
			posFormat: 2,
			coverage: this.parsePointer(x.coverage),
			values: this.parseValueRecordList(),
		};
	ne.assert(
		!1,
		"0x" + t.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.",
	);
};
tt[2] = function () {
	const t = this.offset + this.relativeOffset,
		r = this.parseUShort();
	ne.assert(
		r === 1 || r === 2,
		"0x" + t.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.",
	);
	const n = this.parsePointer(x.coverage),
		o = this.parseUShort(),
		s = this.parseUShort();
	if (r === 1)
		return {
			posFormat: r,
			coverage: n,
			valueFormat1: o,
			valueFormat2: s,
			pairSets: this.parseList(
				x.pointer(
					x.list(function () {
						return {
							secondGlyph: this.parseUShort(),
							value1: this.parseValueRecord(o),
							value2: this.parseValueRecord(s),
						};
					}),
				),
			),
		};
	if (r === 2) {
		const i = this.parsePointer(x.classDef),
			a = this.parsePointer(x.classDef),
			l = this.parseUShort(),
			u = this.parseUShort();
		return {
			posFormat: r,
			coverage: n,
			valueFormat1: o,
			valueFormat2: s,
			classDef1: i,
			classDef2: a,
			class1Count: l,
			class2Count: u,
			classRecords: this.parseList(
				l,
				x.list(u, function () {
					return {
						value1: this.parseValueRecord(o),
						value2: this.parseValueRecord(s),
					};
				}),
			),
		};
	}
};
tt[3] = function () {
	return { error: "GPOS Lookup 3 not supported" };
};
tt[4] = function () {
	return { error: "GPOS Lookup 4 not supported" };
};
tt[5] = function () {
	return { error: "GPOS Lookup 5 not supported" };
};
tt[6] = function () {
	return { error: "GPOS Lookup 6 not supported" };
};
tt[7] = function () {
	return { error: "GPOS Lookup 7 not supported" };
};
tt[8] = function () {
	return { error: "GPOS Lookup 8 not supported" };
};
tt[9] = function () {
	return { error: "GPOS Lookup 9 not supported" };
};
function Jg(e, t) {
	t = t || 0;
	const r = new x(e, t),
		n = r.parseVersion(1);
	return (
		ne.argument(n === 1 || n === 1.1, "Unsupported GPOS table version " + n),
		n === 1
			? {
					version: n,
					scripts: r.parseScriptList(),
					features: r.parseFeatureList(),
					lookups: r.parseLookupList(tt),
				}
			: {
					version: n,
					scripts: r.parseScriptList(),
					features: r.parseFeatureList(),
					lookups: r.parseLookupList(tt),
					variations: r.parseFeatureVariationsList(),
				}
	);
}
const Qg = new Array(10);
function e0(e) {
	return new W.Table("GPOS", [
		{ name: "version", type: "ULONG", value: 65536 },
		{ name: "scripts", type: "TABLE", value: new W.ScriptList(e.scripts) },
		{ name: "features", type: "TABLE", value: new W.FeatureList(e.features) },
		{ name: "lookups", type: "TABLE", value: new W.LookupList(e.lookups, Qg) },
	]);
}
const t0 = { parse: Jg, make: e0 };
function n0(e) {
	const t = {};
	e.skip("uShort");
	const r = e.parseUShort();
	ne.argument(r === 0, "Unsupported kern sub-table version."),
		e.skip("uShort", 2);
	const n = e.parseUShort();
	e.skip("uShort", 3);
	for (let o = 0; o < n; o += 1) {
		const s = e.parseUShort(),
			i = e.parseUShort(),
			a = e.parseShort();
		t[s + "," + i] = a;
	}
	return t;
}
function r0(e) {
	const t = {};
	e.skip("uShort"),
		e.parseULong() > 1 &&
			console.warn("Only the first kern subtable is supported."),
		e.skip("uLong");
	const o = e.parseUShort() & 255;
	if ((e.skip("uShort"), o === 0)) {
		const s = e.parseUShort();
		e.skip("uShort", 3);
		for (let i = 0; i < s; i += 1) {
			const a = e.parseUShort(),
				l = e.parseUShort(),
				u = e.parseShort();
			t[a + "," + l] = u;
		}
	}
	return t;
}
function o0(e, t) {
	const r = new q.Parser(e, t),
		n = r.parseUShort();
	if (n === 0) return n0(r);
	if (n === 1) return r0(r);
	throw new Error("Unsupported kern table version (" + n + ").");
}
const s0 = { parse: o0 };
function i0(e, t, r, n) {
	const o = new q.Parser(e, t),
		s = n ? o.parseUShort : o.parseULong,
		i = [];
	for (let a = 0; a < r + 1; a += 1) {
		let l = s.call(o);
		n && (l *= 2), i.push(l);
	}
	return i;
}
const a0 = { parse: i0 };
function l0(e, t) {
	require("fs").readFile(e, function (n, o) {
		if (n) return t(n.message);
		t(null, xl(o));
	});
}
function c0(e, t) {
	const r = new XMLHttpRequest();
	r.open("get", e, !0),
		(r.responseType = "arraybuffer"),
		(r.onload = function () {
			return r.response
				? t(null, r.response)
				: t("Font could not be loaded: " + r.statusText);
		}),
		(r.onerror = function () {
			t("Font could not be loaded");
		}),
		r.send();
}
function oa(e, t) {
	const r = [];
	let n = 12;
	for (let o = 0; o < t; o += 1) {
		const s = q.getTag(e, n),
			i = q.getULong(e, n + 4),
			a = q.getULong(e, n + 8),
			l = q.getULong(e, n + 12);
		r.push({ tag: s, checksum: i, offset: a, length: l, compression: !1 }),
			(n += 16);
	}
	return r;
}
function u0(e, t) {
	const r = [];
	let n = 44;
	for (let o = 0; o < t; o += 1) {
		const s = q.getTag(e, n),
			i = q.getULong(e, n + 4),
			a = q.getULong(e, n + 8),
			l = q.getULong(e, n + 12);
		let u;
		a < l ? (u = "WOFF") : (u = !1),
			r.push({
				tag: s,
				offset: i,
				compression: u,
				compressedLength: a,
				length: l,
			}),
			(n += 20);
	}
	return r;
}
function Te(e, t) {
	if (t.compression === "WOFF") {
		const r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
			n = new Uint8Array(t.length);
		if ((ef(r, n), n.byteLength !== t.length))
			throw new Error(
				"Decompression error: " +
					t.tag +
					" decompressed length doesn't match recorded length",
			);
		return { data: new DataView(n.buffer, 0), offset: 0 };
	} else return { data: e, offset: t.offset };
}
function Vo(e, t) {
	t = t ?? {};
	let r, n;
	const o = new be({ empty: !0 }),
		s = new DataView(e, 0);
	let i,
		a = [];
	const l = q.getTag(s, 0);
	if (l === String.fromCharCode(0, 1, 0, 0) || l === "true" || l === "typ1")
		(o.outlinesFormat = "truetype"), (i = q.getUShort(s, 4)), (a = oa(s, i));
	else if (l === "OTTO")
		(o.outlinesFormat = "cff"), (i = q.getUShort(s, 4)), (a = oa(s, i));
	else if (l === "wOFF") {
		const k = q.getTag(s, 4);
		if (k === String.fromCharCode(0, 1, 0, 0)) o.outlinesFormat = "truetype";
		else if (k === "OTTO") o.outlinesFormat = "cff";
		else throw new Error("Unsupported OpenType flavor " + l);
		(i = q.getUShort(s, 12)), (a = u0(s, i));
	} else throw new Error("Unsupported OpenType signature " + l);
	let u, d, p, h, f, v, S, b, I, P, M, j;
	for (let k = 0; k < i; k += 1) {
		const C = a[k];
		let N;
		switch (C.tag) {
			case "cmap":
				(N = Te(s, C)),
					(o.tables.cmap = Xa.parse(N.data, N.offset)),
					(o.encoding = new Za(o.tables.cmap));
				break;
			case "cvt ":
				(N = Te(s, C)),
					(j = new q.Parser(N.data, N.offset)),
					(o.tables.cvt = j.parseShortList(C.length / 2));
				break;
			case "fvar":
				d = C;
				break;
			case "fpgm":
				(N = Te(s, C)),
					(j = new q.Parser(N.data, N.offset)),
					(o.tables.fpgm = j.parseByteList(C.length));
				break;
			case "head":
				(N = Te(s, C)),
					(o.tables.head = il.parse(N.data, N.offset)),
					(o.unitsPerEm = o.tables.head.unitsPerEm),
					(r = o.tables.head.indexToLocFormat);
				break;
			case "hhea":
				(N = Te(s, C)),
					(o.tables.hhea = al.parse(N.data, N.offset)),
					(o.ascender = o.tables.hhea.ascender),
					(o.descender = o.tables.hhea.descender),
					(o.numberOfHMetrics = o.tables.hhea.numberOfHMetrics);
				break;
			case "hmtx":
				S = C;
				break;
			case "ltag":
				(N = Te(s, C)), (n = cl.parse(N.data, N.offset));
				break;
			case "maxp":
				(N = Te(s, C)),
					(o.tables.maxp = ul.parse(N.data, N.offset)),
					(o.numGlyphs = o.tables.maxp.numGlyphs);
				break;
			case "name":
				P = C;
				break;
			case "OS/2":
				(N = Te(s, C)), (o.tables.os2 = ko.parse(N.data, N.offset));
				break;
			case "post":
				(N = Te(s, C)),
					(o.tables.post = ml.parse(N.data, N.offset)),
					(o.glyphNames = new No(o.tables.post));
				break;
			case "prep":
				(N = Te(s, C)),
					(j = new q.Parser(N.data, N.offset)),
					(o.tables.prep = j.parseByteList(C.length));
				break;
			case "glyf":
				p = C;
				break;
			case "loca":
				I = C;
				break;
			case "CFF ":
				u = C;
				break;
			case "kern":
				b = C;
				break;
			case "GDEF":
				h = C;
				break;
			case "GPOS":
				f = C;
				break;
			case "GSUB":
				v = C;
				break;
			case "meta":
				M = C;
				break;
		}
	}
	const re = Te(s, P);
	if (
		((o.tables.name = gl.parse(re.data, re.offset, n)),
		(o.names = o.tables.name),
		p && I)
	) {
		const k = r === 0,
			C = Te(s, I),
			N = a0.parse(C.data, C.offset, o.numGlyphs, k),
			ae = Te(s, p);
		o.glyphs = Fl.parse(ae.data, ae.offset, N, o, t);
	} else if (u) {
		const k = Te(s, u);
		sl.parse(k.data, k.offset, o, t);
	} else throw new Error("Font doesn't contain TrueType or CFF outlines.");
	const _ = Te(s, S);
	if (
		(ll.parse(
			o,
			_.data,
			_.offset,
			o.numberOfHMetrics,
			o.numGlyphs,
			o.glyphs,
			t,
		),
		_f(o, t),
		b)
	) {
		const k = Te(s, b);
		o.kerningPairs = s0.parse(k.data, k.offset);
	} else o.kerningPairs = {};
	if (h) {
		const k = Te(s, h);
		o.tables.gdef = Kg.parse(k.data, k.offset);
	}
	if (f) {
		const k = Te(s, f);
		(o.tables.gpos = t0.parse(k.data, k.offset)), o.position.init();
	}
	if (v) {
		const k = Te(s, v);
		o.tables.gsub = yl.parse(k.data, k.offset);
	}
	if (d) {
		const k = Te(s, d);
		o.tables.fvar = zg.parse(k.data, k.offset, o.names);
	}
	if (M) {
		const k = Te(s, M);
		(o.tables.meta = vl.parse(k.data, k.offset)), (o.metas = o.tables.meta);
	}
	return o;
}
function d0(e, t, r) {
	r = r ?? {};
	const o = typeof window > "u" && !r.isUrl ? l0 : c0;
	return new Promise((s, i) => {
		o(e, function (a, l) {
			if (a) {
				if (t) return t(a);
				i(a);
			}
			let u;
			try {
				u = Vo(l, r);
			} catch (d) {
				if (t) return t(d, null);
				i(d);
			}
			if (t) return t(null, u);
			s(u);
		});
	});
}
function f0(e, t) {
	const n = require("fs").readFileSync(e);
	return Vo(xl(n), t);
}
const p0 = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				BoundingBox: Oo,
				Font: be,
				Glyph: ze,
				Path: Ee,
				_parse: q,
				load: d0,
				loadSync: f0,
				parse: Vo,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	h0 = 40 * 1024 * 1024,
	sr = "40MB",
	sa = (e) =>
		new Promise((t, r) => {
			const n = new FileReader();
			(n.onload = (o) => t(o.target.result)),
				(n.onerror = () => r(new Error("文件读取失败"))),
				n.readAsArrayBuffer(e);
		}),
	g0 = (e) => {
		const t = { en: {}, zh: {} };
		return (
			Object.entries(e.names).forEach(([r, n]) => {
				n?.en && (t.en[r] = n.en), n?.zh && (t.zh[r] = n.zh);
			}),
			t
		);
	},
	m0 = (e) => {
		const t = new ArrayBuffer(e.byteLength);
		return new Uint8Array(t).set(new Uint8Array(e)), t;
	},
	y0 = async (e, t) => {
		const r = document.createElement("a");
		(r.href = e),
			(r.download = `edit_${t}`),
			document.body.appendChild(r),
			r.click(),
			document.body.removeChild(r);
	},
	ia = (e, t) =>
		e.size > h0
			? typeof t == "function"
				? t("file_is_too_large_please_upload_fonts_under_size", { size: sr })
				: `文件太大，请上传小于${sr}的字体文件`
			: null,
	v0 = (e) => JSON.parse(JSON.stringify({ en: e.en || {}, zh: e.zh || {} })),
	b0 = (e) => {
		if (!e || typeof e != "object") return [];
		const t = [],
			r = (a, l = null) => (Number.isFinite(a) || typeof a == "number" ? a : l),
			n = (a) => (typeof a == "string" ? a.trim() : (a == null, "")),
			o = (a) => {
				if (!a || typeof a != "object") return;
				const l = n(a.path);
				t.push({
					action: "modify",
					index: Number.isInteger(a.index) ? a.index : (a.index ?? null),
					name: a.name ?? null,
					unicode: Number.isInteger(a.unicode)
						? a.unicode
						: (a.unicode ?? null),
					path: l,
					advanceWidth: r(a.advanceWidth),
					leftSideBearing: r(a.leftSideBearing),
				});
			},
			s = (a) => {
				if (!a || typeof a != "object") return;
				const l = n(a.path);
				t.push({
					action: "add",
					id: a.id ?? null,
					name: a.name ?? null,
					unicode: Number.isInteger(a.unicode)
						? a.unicode
						: (a.unicode ?? null),
					character: a.character ?? "",
					path: l,
					advanceWidth: r(a.advanceWidth),
					leftSideBearing: r(a.leftSideBearing),
				});
			},
			i = (a) => {
				if (!a || typeof a != "object") return;
				const l = Number.isInteger(a.index) || a.index === 0 ? a.index : null,
					u = Number.isInteger(a.unicode) ? a.unicode : (a.unicode ?? null),
					d = a.name ?? null;
				(l === null && u === null && !d) ||
					t.push({ action: "delete", index: l, unicode: u, name: d });
			};
		return (
			e.edits &&
				typeof e.edits == "object" &&
				Object.values(e.edits).forEach(o),
			e.additions &&
				typeof e.additions == "object" &&
				Object.values(e.additions).forEach(s),
			e.deletions &&
				typeof e.deletions == "object" &&
				Object.values(e.deletions).forEach(i),
			t
		);
	},
	lo = (e, t) => {
		const r = (s) => (typeof t == "function" ? t(s) : s);
		return e
			? e.length > 63
				? r("postscript_name不能超过63个character")
				: /[\[\](){}<>/%]/.test(e)
					? r("the_following_characters_are_not_allowed")
					: /^[\x21-\x7E]+$/.test(e)
						? !0
						: r("only_ascii_letters_and_numbers_are_allowed")
			: !0;
	};
const x0 = {
		__name: "FontInfoForm",
		props: {
			fontInfo: Object,
			isBrowserSupported: { type: Boolean, default: !0 },
			lang: { type: String, required: !0 },
		},
		emits: ["update:fontInfo"],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				{ t: s } = ye(),
				i = H({ en: {}, zh: {} }),
				a = H("");
			let l = null;
			pe(
				() => n.fontInfo,
				(f) => {
					if (f) {
						i.value = JSON.parse(
							JSON.stringify({
								en: {
									fontFamily: f?.en?.fontFamily || "",
									fontSubfamily: f?.en?.fontSubfamily || "",
									fullName: f?.en?.fullName || "",
									version: f?.en?.version || "",
									copyright: f?.en?.copyright || "",
									trademark: f?.en?.trademark || "",
									manufacturer: f?.en?.manufacturer || "",
									designer: f?.en?.designer || "",
									designerURL: f?.en?.designerURL || "",
									description: f?.en?.description || "",
									licenseURL: f?.en?.licenseURL || "",
									license: f?.en?.license || "",
									manufacturerURL: f?.en?.manufacturerURL || "",
									postScriptName: f?.en?.postScriptName || "",
									uniqueID: f?.en?.uniqueID || "",
								},
								zh: {
									fontFamily: f?.zh?.fontFamily || "",
									fontSubfamily: f?.zh?.fontSubfamily || "",
									fullName: f?.zh?.fullName || "",
									version: f?.zh?.version || "",
									copyright: f?.zh?.copyright || "",
									trademark: f?.zh?.trademark || "",
									manufacturer: f?.zh?.manufacturer || "",
									designer: f?.zh?.designer || "",
									designerURL: f?.zh?.designerURL || "",
									description: f?.zh?.description || "",
									licenseURL: f?.zh?.licenseURL || "",
									license: f?.zh?.license || "",
									manufacturerURL: f?.zh?.manufacturerURL || "",
								},
							}),
						);
						const v = lo(i.value.en.postScriptName || "", s);
						a.value = v === !0 ? "" : v;
					}
				},
				{ deep: !0, immediate: !0 },
			);
			const u = () => {
					l && clearTimeout(l),
						(l = setTimeout(() => {
							o("update:fontInfo", { en: i.value.en, zh: i.value.zh });
						}, 300));
				},
				d = () => {
					u();
				};
			Gt(() => {
				l && clearTimeout(l);
			});
			const h = {
				props: n,
				emit: o,
				t: s,
				localInfo: i,
				postScriptNameError: a,
				get updateTimeout() {
					return l;
				},
				set updateTimeout(f) {
					l = f;
				},
				updateFontInfo: u,
				handleInput: d,
				validateAndUpdatePostScriptName: (f) => {
					const v = lo(f.target.value, s);
					v !== !0 ? (a.value = v) : (a.value = ""), d();
				},
				ref: H,
				watch: pe,
				onUnmounted: Gt,
				get useI18n() {
					return ye;
				},
				get validatePostScriptName() {
					return lo;
				},
			};
			return (
				Object.defineProperty(h, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				h
			);
		},
	},
	S0 = { class: "font-info-form" },
	_0 = { class: "form-grid" },
	k0 = { class: "form-group" },
	F0 = ["disabled"],
	w0 = { class: "form-group" },
	T0 = ["disabled"],
	C0 = { class: "form-group" },
	E0 = ["disabled"],
	O0 = { class: "form-group" },
	M0 = ["disabled"],
	I0 = { class: "form-group full-width" },
	U0 = ["disabled"],
	P0 = { class: "form-group full-width" },
	A0 = ["disabled"],
	D0 = { class: "form-group full-width" },
	L0 = ["disabled"],
	R0 = { class: "form-group full-width" },
	B0 = ["disabled"],
	N0 = { class: "form-group full-width" },
	G0 = ["disabled"],
	j0 = { class: "form-group full-width" },
	H0 = ["disabled"],
	W0 = { class: "form-group full-width" },
	z0 = ["disabled"],
	$0 = { class: "form-group full-width" },
	V0 = ["disabled"],
	q0 = { class: "form-group full-width" },
	X0 = ["disabled"],
	Y0 = { class: "form-group" },
	Z0 = ["disabled"],
	K0 = { key: 0, class: "error-message" },
	J0 = { class: "form-group" },
	Q0 = ["disabled"];
function em(e, t, r, n, o, s) {
	return (
		O(),
		L("div", S0, [
			g("div", _0, [
				g("div", k0, [
					g("label", null, w(n.t("font_name")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[0] || (t[0] = (i) => (n.localInfo[r.lang].fontFamily = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							F0,
						),
						[[Me, n.localInfo[r.lang].fontFamily]],
					),
				]),
				g("div", w0, [
					g("label", null, w(n.t("font_style")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[1] ||
									(t[1] = (i) => (n.localInfo[r.lang].fontSubfamily = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							T0,
						),
						[[Me, n.localInfo[r.lang].fontSubfamily]],
					),
				]),
				g("div", C0, [
					g("label", null, w(n.t("full_name")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[2] || (t[2] = (i) => (n.localInfo[r.lang].fullName = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							E0,
						),
						[[Me, n.localInfo[r.lang].fullName]],
					),
				]),
				g("div", O0, [
					g("label", null, w(n.t("version")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[3] || (t[3] = (i) => (n.localInfo[r.lang].version = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							M0,
						),
						[[Me, n.localInfo[r.lang].version]],
					),
				]),
				g("div", I0, [
					g("label", null, w(n.t("copyright")), 1),
					Oe(
						g(
							"textarea",
							{
								type: "text",
								"onUpdate:modelValue":
									t[4] || (t[4] = (i) => (n.localInfo[r.lang].copyright = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
								rows: "3",
							},
							null,
							40,
							U0,
						),
						[[Me, n.localInfo[r.lang].copyright]],
					),
				]),
				g("div", P0, [
					g("label", null, w(n.t("manufacturer")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[5] ||
									(t[5] = (i) => (n.localInfo[r.lang].manufacturer = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							A0,
						),
						[[Me, n.localInfo[r.lang].manufacturer]],
					),
				]),
				g("div", D0, [
					g("label", null, w(n.t("manufacturer_url")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[6] ||
									(t[6] = (i) => (n.localInfo[r.lang].manufacturerURL = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							L0,
						),
						[[Me, n.localInfo[r.lang].manufacturerURL]],
					),
				]),
				g("div", R0, [
					g("label", null, w(n.t("designer")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[7] || (t[7] = (i) => (n.localInfo[r.lang].designer = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							B0,
						),
						[[Me, n.localInfo[r.lang].designer]],
					),
				]),
				g("div", N0, [
					g("label", null, w(n.t("designer_url")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[8] || (t[8] = (i) => (n.localInfo[r.lang].designerURL = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							G0,
						),
						[[Me, n.localInfo[r.lang].designerURL]],
					),
				]),
				g("div", j0, [
					g("label", null, w(n.t("trademark")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[9] || (t[9] = (i) => (n.localInfo[r.lang].trademark = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							H0,
						),
						[[Me, n.localInfo[r.lang].trademark]],
					),
				]),
				g("div", W0, [
					g("label", null, w(n.t("description")), 1),
					Oe(
						g(
							"textarea",
							{
								"onUpdate:modelValue":
									t[10] ||
									(t[10] = (i) => (n.localInfo[r.lang].description = i)),
								rows: "3",
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							z0,
						),
						[[Me, n.localInfo[r.lang].description]],
					),
				]),
				g("div", $0, [
					g("label", null, w(n.t("license")), 1),
					Oe(
						g(
							"textarea",
							{
								"onUpdate:modelValue":
									t[11] || (t[11] = (i) => (n.localInfo[r.lang].license = i)),
								rows: "3",
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							V0,
						),
						[[Me, n.localInfo[r.lang].license]],
					),
				]),
				g("div", q0, [
					g("label", null, w(n.t("license_url")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[12] ||
									(t[12] = (i) => (n.localInfo[r.lang].licenseURL = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							X0,
						),
						[[Me, n.localInfo[r.lang].licenseURL]],
					),
				]),
				g("div", Y0, [
					g("label", null, w(n.t("postscript_name")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[13] || (t[13] = (i) => (n.localInfo.en.postScriptName = i)),
								onInput: n.validateAndUpdatePostScriptName,
								class: We({ error: n.postScriptNameError }),
								disabled: !r.isBrowserSupported,
							},
							null,
							42,
							Z0,
						),
						[[Me, n.localInfo.en.postScriptName]],
					),
					n.postScriptNameError
						? (O(), L("span", K0, w(n.t(n.postScriptNameError)), 1))
						: he("", !0),
				]),
				g("div", J0, [
					g("label", null, w(n.t("unique_id")), 1),
					Oe(
						g(
							"input",
							{
								type: "text",
								"onUpdate:modelValue":
									t[14] || (t[14] = (i) => (n.localInfo.en.uniqueID = i)),
								onInput: n.handleInput,
								disabled: !r.isBrowserSupported,
							},
							null,
							40,
							Q0,
						),
						[[Me, n.localInfo.en.uniqueID]],
					),
				]),
			]),
		])
	);
}
const tm = Le(x0, [
	["render", em],
	["__scopeId", "data-v-e827d63f"],
]);
const nm = {
		__name: "FontPreview",
		props: {
			currentFont: Object,
			previewSize: { type: Number, default: 36 },
			customPreviewText: { type: String, default: "" },
			glyphEdits: {
				type: Object,
				default: () => ({ edits: {}, additions: {}, deletions: {} }),
			},
		},
		emits: ["update:previewSize", "update:customPreviewText"],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = r,
				o = e,
				{ t: s } = ye(),
				i = H(o.previewSize),
				a = H(o.customPreviewText),
				l = H(null),
				u = H(800),
				d = H(!1),
				p = H(null),
				h = H(null),
				f = H({}),
				v = D(() => o.glyphEdits?.edits || {}),
				S = D(() => o.glyphEdits?.additions || {}),
				b = D(() => {
					const T = {},
						z = S.value;
					if (z && typeof z == "object")
						for (const F of Object.values(z)) {
							if (!F || typeof F != "object") continue;
							const B = F.unicode;
							Number.isFinite(B) && (T[B] = F);
						}
					return T;
				}),
				I = D(() => o.glyphEdits?.deletions || {}),
				P = D(() => {
					const T = new Set();
					return (
						Object.values(I.value || {}).forEach((z) => {
							if (z && typeof z == "object") {
								const F = z.unicode;
								Number.isInteger(F) && T.add(F);
							}
						}),
						T
					);
				}),
				M = () => {
					if (((d.value = !d.value), d.value)) {
						const T = window.scrollY;
						(document.body.style.position = "fixed"),
							(document.body.style.top = `-${T}px`),
							(document.body.style.width = "100%");
					} else {
						const T = document.body.style.top;
						(document.body.style.position = ""),
							(document.body.style.top = ""),
							(document.body.style.width = ""),
							window.scrollTo(0, parseInt(T || "0") * -1);
					}
				},
				j = () => {
					if (!l.value) return;
					const T = l.value.clientWidth;
					T > 0 && (u.value = T - 40);
				},
				re = (T) => (typeof T != "string" ? "" : T.trim()),
				_ = (T, z, F) => {
					const B = T?.advanceWidth;
					return Number.isFinite(B)
						? B
						: Number.isFinite(z?.advanceWidth)
							? z.advanceWidth
							: F?.unitsPerEm || 0;
				},
				k = (T, z = 0) => {
					const F = o.currentFont;
					if (!F) return { segments: [], width: 0 };
					try {
						if (!T) return { segments: [], width: 0 };
						const B = F.unitsPerEm || 1,
							R = i.value / B;
						if (!Number.isFinite(R) || R <= 0)
							return { segments: [], width: 0 };
						const Z = F.ascender * R,
							ie = z + Z;
						let U = 0;
						const X = [],
							K = Array.from(T);
						for (let le = 0; le < K.length; le += 1) {
							const xe = K[le],
								oe = xe.codePointAt(0);
							if (Number.isInteger(oe) && P.value.has(oe)) continue;
							const ue = F.charToGlyph(xe),
								ve = Number.isFinite(oe) && b.value[oe] ? b.value[oe] : null;
							let de = "",
								me = 0,
								we = 0;
							if (
								ve &&
								(!ue || !ue.path || ue.unicode === void 0 || ue.index === 0)
							)
								(de = re(ve.path)), (me = _(ve, null, F));
							else if (ue) {
								const Re = v.value && ue ? v.value[ue.index] : null;
								de =
									re(Re?.path) ||
									(ue.path?.toPathData ? ue.path.toPathData() : "");
								const ot = K[le + 1],
									_t =
										ot && typeof F.charToGlyph == "function"
											? F.charToGlyph(ot)
											: null;
								(we =
									(_t &&
										typeof F.getKerningValue == "function" &&
										F.getKerningValue(ue, _t)) ||
									0),
									(me = _(Re, ue, F));
							} else continue;
							if (de) {
								const Re = `matrix(${R} 0 0 ${-R} ${U} ${ie})`;
								X.push(
									`<g transform="${Re}"><path d="${de}" fill="currentColor"/></g>`,
								);
							}
							U += (me + we) * R;
						}
						return { segments: X, width: U };
					} catch (B) {
						return (
							console.error("生成预览失败:", B), { segments: [], width: 0 }
						);
					}
				},
				C = D(() => {
					if (!o.currentFont || !a.value) return "";
					try {
						const T = o.currentFont,
							z = T.unitsPerEm || 1,
							F = i.value / z,
							B = T.ascender * F,
							R = T.descender * F,
							Z = (B - R) * 1.2,
							ie = a.value.split(`
`),
							U = ie.map((oe, ue) => k(oe, ue * Z)),
							K =
								(U.length ? Math.max(...U.map((oe) => oe.width)) : 0) ||
								u.value,
							le = Math.max(Z * Math.max(ie.length, 1), 1),
							xe = U.map((oe) => oe.segments.join("")).join("");
						return `
				<svg 
					class="preview-svg"
					width="${K}" 
					height="${le}" 
					viewBox="0 0 ${K} ${le}"
					xmlns="http://www.w3.org/2000/svg"
				>
					${xe}
				</svg>
			`;
					} catch (T) {
						return console.error("生成预览失败:", T), "";
					}
				});
			an(() => {
				window.addEventListener("resize", j), j();
			}),
				Gt(() => {
					window.removeEventListener("resize", j),
						d.value &&
							((document.body.style.position = ""),
							(document.body.style.top = ""),
							(document.body.style.width = ""));
				}),
				pe(i, (T) => {
					n("update:previewSize", T), j();
				}),
				pe(a, (T) => {
					n("update:customPreviewText", T);
				}),
				pe(
					() => o.previewSize,
					(T) => {
						i.value = T;
					},
				),
				pe(
					() => o.customPreviewText,
					(T) => {
						a.value = T;
					},
				),
				pe(
					() => o.currentFont,
					() => {
						o.currentFont && j();
					},
					{ immediate: !0 },
				);
			const ee = {
				emit: n,
				props: o,
				t: s,
				localPreviewSize: i,
				localCustomPreviewText: a,
				previewContainer: l,
				svgWidth: u,
				isFullscreen: d,
				previewRect: p,
				fullscreenContent: h,
				animationStyles: f,
				glyphOverrides: v,
				addedGlyphs: S,
				additionsByUnicode: b,
				deletedGlyphs: I,
				deletedUnicodeSet: P,
				toggleFullscreen: M,
				updateSvgWidth: j,
				sanitizePathData: re,
				resolveAdvanceWidth: _,
				generateLineSegments: k,
				previewPath: C,
				handleModalClick: (T) => {
					T.target.classList.contains("fullscreen-modal") && M();
				},
				handleDownload: () => {
					try {
						const z = new DOMParser().parseFromString(
								C.value,
								"image/svg+xml",
							).documentElement,
							F = parseFloat(z.getAttribute("width")) * 2,
							B = parseFloat(z.getAttribute("height")) * 2,
							R = document.createElement("canvas");
						(R.width = F), (R.height = B);
						const Z = R.getContext("2d");
						(Z.fillStyle = "#FFFFFF"), Z.fillRect(0, 0, F, B), Z.scale(2, 2);
						const ie = new Blob([C.value], {
								type: "image/svg+xml;charset=utf-8",
							}),
							U = window.URL || window.webkitURL || window,
							X = U.createObjectURL(ie),
							K = new Image();
						(K.onload = () => {
							Z.drawImage(K, 0, 0),
								R.toBlob((le) => {
									const xe = U.createObjectURL(le),
										oe = document.createElement("a");
									(oe.href = xe),
										(oe.download = "font-preview.png"),
										document.body.appendChild(oe),
										oe.click(),
										document.body.removeChild(oe),
										U.revokeObjectURL(xe),
										U.revokeObjectURL(X);
								}, "image/png");
						}),
							(K.src = X);
					} catch (T) {
						console.error("下载失败:", T);
					}
				},
				ref: H,
				computed: D,
				watch: pe,
				onMounted: an,
				onUnmounted: Gt,
				get useI18n() {
					return ye;
				},
			};
			return (
				Object.defineProperty(ee, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				ee
			);
		},
	},
	dr = (e) => (Ye("data-v-6db3ba24"), (e = e()), Ze(), e),
	rm = { class: "font-preview" },
	om = { class: "preview-header" },
	sm = { style: { "margin-top": "0" } },
	im = { class: "preview-controls" },
	am = { class: "control-group size-control" },
	lm = { class: "size-slider" },
	cm = { class: "size-display" },
	um = { class: "preview-content" },
	dm = { class: "preview-custom-container" },
	fm = ["placeholder"],
	pm = { class: "preview-samples-wrapper" },
	hm = { key: 0, class: "preview-controls-overlay" },
	gm = dr(() => g("i", { class: "fas fa-expand" }, null, -1)),
	mm = [gm],
	ym = { class: "preview-samples", ref: "previewContainer" },
	vm = { key: 0, class: "preview-empty-state" },
	bm = dr(() => g("i", { class: "fas fa-font empty-icon" }, null, -1)),
	xm = { class: "empty-text" },
	Sm = ["innerHTML"],
	_m = dr(() => g("i", { class: "fas fa-download" }, null, -1)),
	km = [_m],
	Fm = dr(() => g("i", { class: "fas fa-times" }, null, -1)),
	wm = [Fm],
	Tm = ["innerHTML"];
function Cm(e, t, r, n, o, s) {
	return (
		O(),
		L("div", rm, [
			g("div", om, [
				g("h3", sm, w(n.t("font_preview")), 1),
				g("div", im, [
					g("div", am, [
						g("label", null, w(n.t("font_size")), 1),
						g("div", lm, [
							Oe(
								g(
									"input",
									{
										type: "range",
										"onUpdate:modelValue":
											t[0] || (t[0] = (i) => (n.localPreviewSize = i)),
										min: "12",
										max: "72",
										step: "1",
									},
									null,
									512,
								),
								[[Me, n.localPreviewSize]],
							),
							g("span", cm, w(n.localPreviewSize) + "px", 1),
						]),
					]),
				]),
			]),
			g("div", um, [
				g("div", dm, [
					Oe(
						g(
							"textarea",
							{
								class: "preview-custom",
								"onUpdate:modelValue":
									t[1] || (t[1] = (i) => (n.localCustomPreviewText = i)),
								placeholder: n.t("type_preview_text"),
								rows: "3",
							},
							null,
							8,
							fm,
						),
						[[Me, n.localCustomPreviewText]],
					),
					g("div", pm, [
						n.localCustomPreviewText
							? (O(),
								L("div", hm, [
									g(
										"button",
										{ class: "expand-button", onClick: n.toggleFullscreen },
										mm,
									),
								]))
							: he("", !0),
						g(
							"div",
							ym,
							[
								n.localCustomPreviewText
									? (O(),
										L(
											"div",
											{
												key: 1,
												class: "preview-item",
												innerHTML: n.previewPath,
											},
											null,
											8,
											Sm,
										))
									: (O(),
										L("div", vm, [
											bm,
											g("p", xm, w(n.t("enter_text_above_to_preview")), 1),
										])),
							],
							512,
						),
					]),
				]),
			]),
			(O(),
			bt(Mo, { to: "body" }, [
				Ce(
					qt,
					{ name: "fade" },
					{
						default: ut(() => [
							n.isFullscreen
								? (O(),
									L(
										"div",
										{
											key: 0,
											class: "fullscreen-modal",
											onClick: n.handleModalClick,
										},
										[
											g(
												"div",
												{
													class: "fullscreen-content",
													onClick: t[2] || (t[2] = Nt(() => {}, ["stop"])),
												},
												[
													g("div", { class: "modal-buttons" }, [
														g(
															"button",
															{
																class: "action-button download-button",
																onClick: n.handleDownload,
															},
															km,
														),
														g(
															"button",
															{
																class: "close-button",
																onClick: n.toggleFullscreen,
															},
															wm,
														),
													]),
													g(
														"div",
														{ class: "preview-item", innerHTML: n.previewPath },
														null,
														8,
														Tm,
													),
												],
											),
										],
									))
								: he("", !0),
						]),
						_: 1,
					},
				),
			])),
		])
	);
}
const Em = Le(nm, [
	["render", Cm],
	["__scopeId", "data-v-6db3ba24"],
]);
const Om = {
		__name: "FileInfo",
		props: { fontFile: Object, fontObject: Object },
		setup(e, { expose: t }) {
			t();
			const { t: r } = ye(),
				s = {
					t: r,
					formatFileSize: (i) => {
						if (i === 0) return "0 B";
						const a = 1024,
							l = ["B", "KB", "MB", "GB"],
							u = Math.floor(Math.log(i) / Math.log(a));
						return parseFloat((i / Math.pow(a, u)).toFixed(2)) + " " + l[u];
					},
					formatDate: (i) =>
						i
							? new Date(i).toLocaleDateString("zh-CN", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
								})
							: null,
					get useI18n() {
						return ye;
					},
				};
			return (
				Object.defineProperty(s, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				s
			);
		},
	},
	Mm = { class: "font-info" },
	Im = { class: "info-item" },
	Um = ["title"],
	Pm = { class: "info-item" },
	Am = { class: "info-item" },
	Dm = { key: 0, class: "info-item" };
function Lm(e, t, r, n, o, s) {
	return (
		O(),
		L("div", Mm, [
			g("div", Im, [
				g("label", null, w(n.t("file_name")), 1),
				g(
					"span",
					{ class: "filename", title: r.fontFile.name },
					w(r.fontFile.name),
					9,
					Um,
				),
			]),
			g("div", Pm, [
				g("label", null, w(n.t("size")), 1),
				g("span", null, w(n.formatFileSize(r.fontFile.size)), 1),
			]),
			g("div", Am, [
				g("label", null, w(n.t("format")), 1),
				g("span", null, w(r.fontFile.name.split(".").pop().toUpperCase()), 1),
			]),
			r.fontObject
				? (O(),
					L("div", Dm, [
						g("label", null, w(n.t("character_count")), 1),
						g("span", null, w(r.fontObject.numGlyphs || n.t("unknown")), 1),
					]))
				: he("", !0),
		])
	);
}
const Rm = Le(Om, [
	["render", Lm],
	["__scopeId", "data-v-81330e22"],
]);
const Bm = {
		__name: "UploadZone",
		emits: ["file-drop", "trigger-upload"],
		setup(e, { expose: t }) {
			t();
			const r = H(!1),
				n = sr,
				{ t: o } = ye(),
				a = {
					isDragging: r,
					maxFontSizeText: n,
					t: o,
					handleDragEnter: (l) => {
						l.preventDefault(), (r.value = !0);
					},
					handleDragLeave: (l) => {
						l.preventDefault(),
							l.currentTarget.contains(l.relatedTarget) || (r.value = !1);
					},
					ref: H,
					get useI18n() {
						return ye;
					},
					get MAX_FONT_SIZE_TEXT() {
						return sr;
					},
				};
			return (
				Object.defineProperty(a, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				a
			);
		},
	},
	Pl = (e) => (Ye("data-v-de5af0b9"), (e = e()), Ze(), e),
	Nm = { class: "empty-state" },
	Gm = { class: "upload-content" },
	jm = Pl(() =>
		g(
			"div",
			{ class: "upload-icon" },
			[g("i", { class: "fas fa-file-upload" })],
			-1,
		),
	),
	Hm = { class: "upload-text" },
	Wm = { class: "primary-text" },
	zm = { class: "secondary-text" },
	$m = { class: "upload-hint" },
	Vm = Pl(() => g("i", { class: "fas fa-shield-alt" }, null, -1));
function qm(e, t, r, n, o, s) {
	return (
		O(),
		L("div", Nm, [
			g(
				"div",
				{
					class: We(["upload-zone", { dragging: n.isDragging }]),
					onDragover: t[0] || (t[0] = Nt(() => {}, ["prevent"])),
					onDrop:
						t[1] || (t[1] = Nt((i) => e.$emit("file-drop", i), ["prevent"])),
					onDragenter: n.handleDragEnter,
					onDragleave: n.handleDragLeave,
					onClick: t[2] || (t[2] = (i) => e.$emit("trigger-upload")),
				},
				[
					g("div", Gm, [
						jm,
						g("div", Hm, [
							g("p", Wm, w(n.t("drag_a_font_file_here_or_click_to_upload")), 1),
							g(
								"p",
								zm,
								w(n.t("supports_ttf_otf_woff_limit")) +
									" " +
									w(n.maxFontSizeText),
								1,
							),
						]),
						g("div", $m, [
							Vm,
							Ge(
								" " +
									w(
										n.t(
											"everything_runs_locally_performance_depends_on_your_device",
										),
									),
								1,
							),
						]),
					]),
				],
				34,
			),
		])
	);
}
const Xm = Le(Bm, [
	["render", qm],
	["__scopeId", "data-v-de5af0b9"],
]);
const Ym = {
		__name: "Header",
		props: { fontFile: Object },
		setup(e, { expose: t }) {
			t();
			const { t: r } = ye(),
				n = {
					t: r,
					get useI18n() {
						return ye;
					},
				};
			return (
				Object.defineProperty(n, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				n
			);
		},
	},
	fr = (e) => (Ye("data-v-ff5564ed"), (e = e()), Ze(), e),
	Zm = { class: "header" },
	Km = { class: "header-content" },
	Jm = { class: "header-main" },
	Qm = { class: "header-left" },
	ey = fr(() =>
		g(
			"div",
			{ class: "icon-wrapper" },
			[
				g("img", {
					src: "./font_editor_logo.png",
					style: { "max-width": "100%" },
				}),
			],
			-1,
		),
	),
	ty = { class: "text-content" },
	ny = fr(() => g("span", { class: "version-tag" }, "v1.0", -1)),
	ry = { class: "subtitle" },
	oy = { class: "header-actions" },
	sy = fr(() => g("i", { class: "fas fa-upload" }, null, -1)),
	iy = fr(() => g("i", { class: "fas fa-times" }, null, -1));
function ay(e, t, r, n, o, s) {
	return (
		O(),
		L("header", Zm, [
			g("div", Km, [
				g("div", Jm, [
					g("div", Qm, [
						ey,
						g("div", ty, [
							g("h1", null, [Ge(w(n.t("online_font_editor")) + " ", 1), ny]),
							g(
								"p",
								ry,
								w(
									n.t(
										"upload_ttf_otf_fonts_adjust_glyphs_and_edit_metadata_online",
									),
								),
								1,
							),
						]),
					]),
					g("div", oy, [
						r.fontFile
							? he("", !0)
							: (O(),
								L(
									"button",
									{
										key: 0,
										class: "action-btn upload-btn",
										onClick: t[0] || (t[0] = (i) => e.$emit("trigger-upload")),
									},
									[sy, Ge(" " + w(n.t("upload_font")), 1)],
								)),
						r.fontFile
							? (O(),
								L(
									"button",
									{
										key: 1,
										class: "action-btn clear-btn",
										onClick: t[1] || (t[1] = (i) => e.$emit("clear")),
									},
									[iy, Ge(" " + w(n.t("exit_editor")), 1)],
								))
							: he("", !0),
					]),
				]),
			]),
		])
	);
}
const ly = Le(Ym, [
	["render", ay],
	["__scopeId", "data-v-ff5564ed"],
]);
const cy = {
		__name: "ProgressBar",
		props: { isProcessing: { type: Boolean, required: !0 } },
		setup(e, { expose: t }) {
			t();
			const r = e,
				n = H(0),
				o = H(!1),
				s = H(null),
				{ t: i } = ye(),
				a = D(() => 2 * Math.PI * 52),
				l = D(() => a.value - (n.value / 100) * a.value),
				u = D(() =>
					n.value < 30
						? i("preparing")
						: n.value < 60
							? i("processing")
							: n.value < 99
								? i("almost_done")
								: i("finished"),
				),
				d = () => {
					s.value && clearInterval(s.value), (o.value = !0);
					let f = 0;
					const v = 100;
					s.value = setInterval(() => {
						if (((f += v), n.value < 95)) {
							let S;
							f < 10 * 1e3
								? (S = Math.random() * 0.5 + 0.5)
								: f < 30 * 1e3
									? (S = Math.random() * 0.3 + 0.2)
									: (S = Math.random() * 0.1 + 0.1),
								(n.value = Math.min(95, n.value + S));
						}
					}, v);
				},
				p = () => {
					s.value && clearInterval(s.value);
					const f = setInterval(() => {
						n.value < 100
							? (n.value = Math.min(100, n.value + 5))
							: (clearInterval(f),
								setTimeout(() => {
									o.value = !1;
								}, 500));
					}, 50);
				};
			pe(
				() => r.isProcessing,
				(f) => {
					f ? ((n.value = 0), d()) : p();
				},
			),
				Gt(() => {
					s.value && clearInterval(s.value);
				});
			const h = {
				props: r,
				progress: n,
				isVisible: o,
				progressTimer: s,
				t: i,
				circumference: a,
				dashOffset: l,
				progressStatus: u,
				startFakeProgress: d,
				complete: p,
				ref: H,
				computed: D,
				watch: pe,
				onUnmounted: Gt,
				get useI18n() {
					return ye;
				},
			};
			return (
				Object.defineProperty(h, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				h
			);
		},
	},
	uy = (e) => (Ye("data-v-98d70e34"), (e = e()), Ze(), e),
	dy = { key: 0, class: "progress-overlay" },
	fy = { class: "progress-modal" },
	py = { class: "progress-content" },
	hy = { class: "circular-progress" },
	gy = { class: "progress-ring", width: "120", height: "120" },
	my = uy(() =>
		g(
			"circle",
			{
				class: "progress-ring-circle-bg",
				"stroke-width": "4",
				fill: "transparent",
				r: "52",
				cx: "60",
				cy: "60",
			},
			null,
			-1,
		),
	),
	yy = { class: "progress-number" },
	vy = { class: "progress-status" };
function by(e, t, r, n, o, s) {
	return (
		O(),
		bt(
			qt,
			{ name: "fade" },
			{
				default: ut(() => [
					n.isVisible
						? (O(),
							L("div", dy, [
								g("div", fy, [
									g("div", py, [
										g("div", hy, [
											(O(),
											L("svg", gy, [
												my,
												g(
													"circle",
													{
														class: "progress-ring-circle",
														"stroke-width": "4",
														fill: "transparent",
														r: "52",
														cx: "60",
														cy: "60",
														style: mc({
															strokeDasharray: `${n.circumference} ${n.circumference}`,
															strokeDashoffset: n.dashOffset,
														}),
													},
													null,
													4,
												),
											])),
											g("div", yy, w(Math.round(n.progress)) + "%", 1),
										]),
										g("div", vy, w(n.progressStatus), 1),
									]),
								]),
							]))
						: he("", !0),
				]),
				_: 1,
			},
		)
	);
}
const xy = Le(cy, [
	["render", by],
	["__scopeId", "data-v-98d70e34"],
]);
const Sy = {
		__name: "GlyphToolbar",
		props: {
			search: { type: String, default: "" },
			category: { type: String, default: "all" },
			categories: { type: Array, default: () => [] },
			totalGlyphs: { type: Number, default: 0 },
			filteredGlyphsCount: { type: Number, default: 0 },
			toolbarMessage: { type: String, default: "" },
		},
		emits: ["update:search", "update:category", "add"],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				{ t: s } = ye(),
				i = H(null),
				a = H(n.search),
				l = Ps((v) => {
					o("update:search", v || "");
				}, 600),
				u = D({
					get: () => a.value,
					set: (v) => {
						(a.value = v), l(v);
					},
				});
			pe(
				() => n.search,
				(v) => {
					v !== a.value && (a.value = v);
				},
			);
			const d = D(() => (Array.isArray(n.categories) ? n.categories : [])),
				p = D({ get: () => n.category, set: (v) => o("update:category", v) }),
				f = {
					props: n,
					emit: o,
					t: s,
					searchInputRef: i,
					localSearch: a,
					debouncedEmitSearch: l,
					searchModel: u,
					normalizedCategories: d,
					categoryModel: p,
					clearSearch: () => {
						(a.value = ""),
							o("update:search", ""),
							ho(() => {
								i.value?.focus();
							});
					},
					computed: D,
					nextTick: ho,
					ref: H,
					watch: pe,
					get useI18n() {
						return ye;
					},
					get useDebounceFn() {
						return Ps;
					},
				};
			return (
				Object.defineProperty(f, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				f
			);
		},
	},
	pr = (e) => (Ye("data-v-9364e43f"), (e = e()), Ze(), e),
	_y = { class: "glyph-toolbar" },
	ky = { class: "glyph-controls" },
	Fy = { class: "search-box" },
	wy = ["placeholder"],
	Ty = pr(() => g("i", { class: "fas fa-search search-icon" }, null, -1)),
	Cy = ["aria-label"],
	Ey = pr(() => g("i", { class: "fas fa-times" }, null, -1)),
	Oy = [Ey],
	My = { class: "glyph-count" },
	Iy = { key: 0 },
	Uy = { key: 1 },
	Py = pr(() => g("i", { class: "fas fa-plus" }, null, -1)),
	Ay = { key: 0, class: "glyph-toolbar-message" },
	Dy = { key: 1, class: "glyph-category-select" },
	Ly = ["aria-label"],
	Ry = ["value"],
	By = pr(() => g("i", { class: "fas fa-chevron-down select-icon" }, null, -1));
function Ny(e, t, r, n, o, s) {
	return (
		O(),
		L("div", _y, [
			g("div", ky, [
				g("div", Fy, [
					Oe(
						g(
							"input",
							{
								ref: "searchInputRef",
								name: "search",
								type: "text",
								"onUpdate:modelValue":
									t[0] || (t[0] = (i) => (n.searchModel = i)),
								placeholder: n.t("search_multiple_characters"),
							},
							null,
							8,
							wy,
						),
						[[Me, n.searchModel]],
					),
					Ty,
					n.searchModel
						? (O(),
							L(
								"button",
								{
									key: 0,
									type: "button",
									class: "clear-button",
									onClick: n.clearSearch,
									onMousedown: t[1] || (t[1] = Nt(() => {}, ["prevent"])),
									"aria-label": n.t("clear_search"),
								},
								Oy,
								40,
								Cy,
							))
						: he("", !0),
				]),
				g("div", My, [
					n.searchModel
						? (O(),
							L(
								"span",
								Iy,
								w(
									n.t("found_count_characters", {
										count: r.filteredGlyphsCount,
									}),
								),
								1,
							))
						: (O(),
							L(
								"span",
								Uy,
								w(n.t("count_characters_in_total", { count: r.totalGlyphs })),
								1,
							)),
				]),
				g(
					"button",
					{
						type: "button",
						class: "glyph-action-button",
						onClick: t[2] || (t[2] = (i) => e.$emit("add")),
					},
					[Py, g("span", null, w(n.t("add_character")), 1)],
				),
				r.toolbarMessage
					? (O(), L("div", Ay, w(r.toolbarMessage), 1))
					: he("", !0),
				n.normalizedCategories.length
					? (O(),
						L("div", Dy, [
							Oe(
								g(
									"select",
									{
										"onUpdate:modelValue":
											t[3] || (t[3] = (i) => (n.categoryModel = i)),
										class: "glyph-category-dropdown",
										"aria-label": n.t("choose_category"),
									},
									[
										(O(!0),
										L(
											De,
											null,
											jt(
												n.normalizedCategories,
												(i) => (
													O(),
													L(
														"option",
														{ key: i.id, value: i.id },
														w(n.t(i.label)) + "（" + w(i.count) + "） ",
														9,
														Ry,
													)
												),
											),
											128,
										)),
									],
									8,
									Ly,
								),
								[[gc, n.categoryModel]],
							),
							By,
						]))
					: he("", !0),
			]),
		])
	);
}
const Gy = Le(Sy, [
	["render", Ny],
	["__scopeId", "data-v-9364e43f"],
]);
const jy = {
		__name: "GlyphGrid",
		props: { items: { type: Array, default: () => [] } },
		emits: ["select", "add-missing"],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				{ t: s } = ye(),
				a = {
					props: n,
					emit: o,
					t: s,
					handleClick: (l) => {
						l.isMissing ? o("add-missing", l.character) : o("select", l.glyph);
					},
					get useI18n() {
						return ye;
					},
				};
			return (
				Object.defineProperty(a, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				a
			);
		},
	},
	Hy = (e) => (Ye("data-v-96630bfd"), (e = e()), Ze(), e),
	Wy = { class: "glyph-grid" },
	zy = ["onClick"],
	$y = { key: 0, class: "glyph-status-flag missing-flag" },
	Vy = { key: 1, class: "glyph-status-flag addition-flag" },
	qy = { key: 2, class: "glyph-status-flag delete-flag" },
	Xy = { key: 3, class: "glyph-status-flag edit-flag" },
	Yy = ["innerHTML"],
	Zy = { key: 5, class: "glyph-preview missing-preview" },
	Ky = { class: "missing-char" },
	Jy = Hy(() =>
		g("i", { class: "fas fa-plus-circle missing-add-icon" }, null, -1),
	),
	Qy = { class: "glyph-info" },
	ev = { class: "unicode" },
	tv = { class: "name" };
function nv(e, t, r, n, o, s) {
	return (
		O(),
		L("div", Wy, [
			(O(!0),
			L(
				De,
				null,
				jt(
					r.items,
					(i) => (
						O(),
						L(
							"button",
							{
								key: i.key,
								type: "button",
								class: We([
									"glyph-item",
									{
										active: i.isActive,
										edited: i.isEdited,
										addition: i.isAddition,
										deleted: i.isDeleted,
										missing: i.isMissing,
									},
								]),
								onClick: (a) => n.handleClick(i),
							},
							[
								i.isMissing
									? (O(), L("span", $y, w(n.t("click_to_add")), 1))
									: i.isAddition
										? (O(), L("span", Vy, w(n.t("add")), 1))
										: i.isDeleted
											? (O(), L("span", qy, w(n.t("delete")), 1))
											: i.isEdited
												? (O(), L("span", Xy, w(n.t("edited")), 1))
												: he("", !0),
								i.isMissing
									? (O(), L("div", Zy, [g("span", Ky, w(i.character), 1), Jy]))
									: (O(),
										L(
											"div",
											{ key: 4, class: "glyph-preview", innerHTML: i.preview },
											null,
											8,
											Yy,
										)),
								g("div", Qy, [
									g("span", ev, w(i.unicodeLabel), 1),
									g("span", tv, w(i.nameLabel), 1),
								]),
							],
							10,
							zy,
						)
					),
				),
				128,
			)),
		])
	);
}
const rv = Le(jy, [
	["render", nv],
	["__scopeId", "data-v-96630bfd"],
]);
const ov = {
		__name: "GlyphPagination",
		props: {
			currentPage: { type: Number, default: 1 },
			totalPages: { type: Number, default: 1 },
		},
		emits: ["update:currentPage"],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				i = {
					props: n,
					emit: o,
					updatePage: (a) => {
						const l = Math.min(Math.max(a, 1), n.totalPages || 1);
						l !== n.currentPage && o("update:currentPage", l);
					},
				};
			return (
				Object.defineProperty(i, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				i
			);
		},
	},
	hr = (e) => (Ye("data-v-7a315fd1"), (e = e()), Ze(), e),
	sv = { class: "pagination" },
	iv = ["disabled"],
	av = hr(() => g("i", { class: "fas fa-angle-double-left" }, null, -1)),
	lv = [av],
	cv = ["disabled"],
	uv = hr(() => g("i", { class: "fas fa-angle-left" }, null, -1)),
	dv = [uv],
	fv = { class: "page-info" },
	pv = ["disabled"],
	hv = hr(() => g("i", { class: "fas fa-angle-right" }, null, -1)),
	gv = [hv],
	mv = ["disabled"],
	yv = hr(() => g("i", { class: "fas fa-angle-double-right" }, null, -1)),
	vv = [yv];
function bv(e, t, r, n, o, s) {
	return (
		O(),
		L("div", sv, [
			g(
				"button",
				{
					onClick: t[0] || (t[0] = (i) => n.updatePage(1)),
					disabled: r.currentPage === 1,
					class: "page-button",
				},
				lv,
				8,
				iv,
			),
			g(
				"button",
				{
					onClick: t[1] || (t[1] = (i) => n.updatePage(r.currentPage - 1)),
					disabled: r.currentPage === 1,
					class: "page-button",
				},
				dv,
				8,
				cv,
			),
			g("span", fv, w(r.currentPage) + " / " + w(r.totalPages), 1),
			g(
				"button",
				{
					onClick: t[2] || (t[2] = (i) => n.updatePage(r.currentPage + 1)),
					disabled: r.currentPage === r.totalPages,
					class: "page-button",
				},
				gv,
				8,
				pv,
			),
			g(
				"button",
				{
					onClick: t[3] || (t[3] = (i) => n.updatePage(r.totalPages)),
					disabled: r.currentPage === r.totalPages,
					class: "page-button",
				},
				vv,
				8,
				mv,
			),
		])
	);
}
const xv = Le(ov, [
	["render", bv],
	["__scopeId", "data-v-7a315fd1"],
]);
const Sv = {
		__name: "GlyphEditorDialog",
		props: {
			visible: { type: Boolean, default: !1 },
			glyph: { type: Object, default: null },
			dialogViewMode: { type: String, default: "preview" },
			canEditGlyph: { type: Boolean, default: !1 },
			editorPath: { type: String, default: "" },
			hasUnsavedChanges: { type: Boolean, default: !1 },
			hasSavedEdit: { type: Boolean, default: !1 },
			canCommit: { type: Boolean, default: !1 },
			canReset: { type: Boolean, default: !1 },
			showMoreInfo: { type: Boolean, default: !1 },
			showUndoButton: { type: Boolean, default: !1 },
			showDeleteInMoreInfo: { type: Boolean, default: !1 },
			deleteButtonLabel: { type: String, default: "" },
			deleteButtonIcon: { type: String, default: "fas fa-trash" },
			canDeleteGlyph: { type: Boolean, default: !1 },
			previewSvg: { type: String, default: "" },
			glyphInfo: { type: Array, default: () => [] },
			clipboard: { type: [Array, Object], default: null },
			showVisualBounds: { type: Boolean, default: !1 },
			visualBounds: { type: Object, default: null },
			strokeWeightState: { type: Object, default: null },
		},
		emits: [
			"close",
			"commit",
			"reset",
			"delete",
			"update:dialogViewMode",
			"update:showMoreInfo",
			"update:editorPath",
			"update:strokeWeightState",
			"copy",
		],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				{ t: s } = ye(),
				i = Object.freeze({
					fillColor: "#000000",
					fillOpacity: 1,
					strokeColor: "#ffffff",
					transformBoxColor: "#2563eb",
					transformHandleStrokeColor: "#0f172a",
					transformHandleHoverStrokeColor: "#1d4ed8",
					transformCornerColor: "#ffffff",
					transformCornerHoverColor: "#1d4ed8",
					transformEdgeColor: "#bfdbfe",
					transformEdgeHoverColor: "#1d4ed8",
					dark: {
						fillColor: "#000000",
						fillOpacity: 1,
						strokeColor: "#ffffff",
						transformBoxColor: "#3b82f6",
						transformHandleStrokeColor: "#020617",
						transformHandleHoverStrokeColor: "#60a5fa",
						transformCornerColor: "#f8fafc",
						transformCornerHoverColor: "#60a5fa",
						transformEdgeColor: "#1e3a8a",
						transformEdgeHoverColor: "#60a5fa",
					},
				}),
				a = D({
					get: () => n.editorPath,
					set: (_) => o("update:editorPath", _),
				}),
				l = D({
					get: () => n.strokeWeightState,
					set: (_) => o("update:strokeWeightState", _),
				}),
				u = D(() => {
					const _ = n.glyph;
					if (!_) return "";
					const k = typeof _.character == "string" ? _.character : "";
					if (k) return k;
					const C = Number.isFinite(_.unicode) ? _.unicode : null;
					if (C === null) return "";
					try {
						return String.fromCodePoint(C);
					} catch {
						return "";
					}
				}),
				d = D(() => {
					const _ = u.value;
					if (_) return _;
					const k = n.glyph,
						C = k?.name,
						N = Number.isFinite(k?.unicode) ? k.unicode : null;
					return N !== null
						? `U+${N.toString(16).toUpperCase().padStart(4, "0")}`
						: typeof C == "string"
							? C
							: "";
				}),
				p = D(() => n.deleteButtonLabel || s("delete_character")),
				h = D(() => [
					{ value: "preview", labelKey: "preview", requiresEdit: !1 },
					{ value: "editor", labelKey: "edit_2", requiresEdit: !0 },
				]),
				f = D({
					get: () => n.dialogViewMode,
					set: (_) => o("update:dialogViewMode", _),
				}),
				v = H("");
			let S = null;
			const b = D({
				get: () => n.showMoreInfo,
				set: (_) => o("update:showMoreInfo", _),
			});
			pe(
				() => n.dialogViewMode,
				(_, k) => {
					_ !== k &&
						((v.value = _),
						S && clearTimeout(S),
						(S = setTimeout(() => {
							v.value = "";
						}, 260)));
				},
			);
			const I = (_) => {
					(_ === "editor" && !n.canEditGlyph) ||
						(f.value !== _ &&
							((f.value = _), _ !== "preview" && (b.value = !1)));
				},
				P = () => {
					b.value = !b.value;
				},
				M = () => {
					n.canEditGlyph && I("editor");
				},
				j = () => {
					n.canCommit && (o("commit"), o("close"));
				};
			Zn(() => {
				S && clearTimeout(S);
			});
			const re = {
				props: n,
				emit: o,
				t: s,
				svgEditorStyleOptions: i,
				editorPathModel: a,
				strokeWeightStateModel: l,
				glyphCharacter: u,
				glyphTitleLabel: d,
				deleteButtonLabelText: p,
				viewModeOptions: h,
				viewModeModel: f,
				toggleAnimationTarget: v,
				get toggleAnimationTimer() {
					return S;
				},
				set toggleAnimationTimer(_) {
					S = _;
				},
				showMoreInfoModel: b,
				setViewMode: I,
				toggleMoreInfo: P,
				handlePreviewDoubleClick: M,
				handleSave: j,
				computed: D,
				onBeforeUnmount: Zn,
				ref: H,
				watch: pe,
				get useI18n() {
					return ye;
				},
				SvgPathEditor: _c,
			};
			return (
				Object.defineProperty(re, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				re
			);
		},
	},
	Al = (e) => (Ye("data-v-9937cb9a"), (e = e()), Ze(), e),
	_v = { key: 0, class: "editor-modal" },
	kv = { class: "editor-modal-header" },
	Fv = { class: "modal-header-title" },
	wv = { key: 0, class: "glyph-title-label" },
	Tv = { class: "modal-header-center" },
	Cv = { key: 0, class: "modal-view-toggle" },
	Ev = ["onClick", "disabled"],
	Ov = { class: "modal-header-actions" },
	Mv = ["disabled"],
	Iv = ["aria-label"],
	Uv = Al(() => g("i", { class: "fas fa-times" }, null, -1)),
	Pv = { key: 0, class: "editor-modal-body" },
	Av = { class: "modal-preview-canvas" },
	Dv = ["innerHTML"],
	Lv = { key: 1, class: "modal-preview-empty" },
	Rv = Al(() => g("i", { class: "fas fa-box-open" }, null, -1)),
	Bv = ["aria-expanded"],
	Nv = { key: 0, class: "modal-preview-info" },
	Gv = { class: "label" },
	jv = { class: "value" },
	Hv = { key: 0, class: "modal-info-actions" },
	Wv = ["disabled"],
	zv = { key: 0, class: "preview-hint" },
	$v = { key: "editor", class: "modal-editor" },
	Vv = { key: 0 },
	qv = { key: 1 },
	Xv = { key: 2 },
	Yv = { class: "editor-modal-actions" },
	Zv = ["disabled"],
	Kv = ["disabled"];
function Jv(e, t, r, n, o, s) {
	return (
		O(),
		bt(Mo, { to: "body" }, [
			Ce(
				qt,
				{ name: "fade" },
				{
					default: ut(() => [
						r.visible
							? (O(),
								L("div", _v, [
									g(
										"div",
										{
											class: "editor-modal-content",
											onClick: t[7] || (t[7] = Nt(() => {}, ["stop"])),
										},
										[
											g("div", kv, [
												g("div", Fv, [
													n.glyphTitleLabel
														? (O(), L("span", wv, w(n.glyphTitleLabel), 1))
														: he("", !0),
												]),
												g("div", Tv, [
													r.glyph
														? (O(),
															L("div", Cv, [
																(O(!0),
																L(
																	De,
																	null,
																	jt(
																		n.viewModeOptions,
																		(i) => (
																			O(),
																			L(
																				"button",
																				{
																					key: i.value,
																					class: We([
																						"modal-toggle-button",
																						{
																							active:
																								n.viewModeModel === i.value,
																							"toggle-animating":
																								n.toggleAnimationTarget ===
																									i.value &&
																								n.viewModeModel === i.value,
																						},
																					]),
																					onClick: (a) =>
																						n.setViewMode(i.value),
																					disabled:
																						i.requiresEdit && !r.canEditGlyph,
																				},
																				w(n.t(i.labelKey)),
																				11,
																				Ev,
																			)
																		),
																	),
																	128,
																)),
															]))
														: he("", !0),
												]),
												g("div", Ov, [
													r.showUndoButton
														? (O(),
															L(
																"button",
																{
																	key: 0,
																	class: "modal-delete-button",
																	onClick:
																		t[0] || (t[0] = (i) => e.$emit("delete")),
																	disabled: !r.canDeleteGlyph,
																},
																[
																	g(
																		"i",
																		{ class: We(r.deleteButtonIcon) },
																		null,
																		2,
																	),
																	g(
																		"span",
																		null,
																		w(n.deleteButtonLabelText),
																		1,
																	),
																],
																8,
																Mv,
															))
														: he("", !0),
													g(
														"button",
														{
															class: "modal-close-button",
															type: "button",
															onClick: t[1] || (t[1] = (i) => e.$emit("close")),
															"aria-label": n.t("close_glyph_editor"),
														},
														[Uv, g("span", null, w(n.t("close")), 1)],
														8,
														Iv,
													),
												]),
											]),
											r.glyph
												? (O(),
													L("div", Pv, [
														Ce(
															qt,
															{ name: "view-mode-fade", mode: "out-in" },
															{
																default: ut(() => [
																	n.viewModeModel === "preview"
																		? (O(),
																			L(
																				"div",
																				{
																					key: "preview",
																					class: "modal-preview",
																					onDblclick:
																						n.handlePreviewDoubleClick,
																				},
																				[
																					g("div", Av, [
																						r.previewSvg
																							? (O(),
																								L(
																									"div",
																									{
																										key: 0,
																										class: "modal-preview-svg",
																										innerHTML: r.previewSvg,
																									},
																									null,
																									8,
																									Dv,
																								))
																							: (O(),
																								L("div", Lv, [
																									Rv,
																									g(
																										"span",
																										null,
																										w(
																											n.t(
																												"this_glyph_has_no_outline",
																											),
																										),
																										1,
																									),
																								])),
																					]),
																					g(
																						"button",
																						{
																							type: "button",
																							class: "modal-info-toggle",
																							onClick: n.toggleMoreInfo,
																							"aria-expanded":
																								n.showMoreInfoModel,
																						},
																						[
																							Ge(
																								w(
																									n.showMoreInfoModel
																										? n.t("hide_details")
																										: n.t("more_info"),
																								) + " ",
																								1,
																							),
																							g(
																								"i",
																								{
																									class: We([
																										"fas",
																										n.showMoreInfoModel
																											? "fa-chevron-up"
																											: "fa-chevron-down",
																									]),
																								},
																								null,
																								2,
																							),
																						],
																						8,
																						Bv,
																					),
																					Ce(
																						qt,
																						{ name: "collapse" },
																						{
																							default: ut(() => [
																								n.showMoreInfoModel
																									? (O(),
																										L("div", Nv, [
																											(O(!0),
																											L(
																												De,
																												null,
																												jt(
																													r.glyphInfo,
																													(i) => (
																														O(),
																														L(
																															"div",
																															{
																																key: i.label,
																																class:
																																	"modal-info-row",
																															},
																															[
																																g(
																																	"span",
																																	Gv,
																																	w(i.label),
																																	1,
																																),
																																g(
																																	"span",
																																	jv,
																																	w(i.value),
																																	1,
																																),
																															],
																														)
																													),
																												),
																												128,
																											)),
																											r.showDeleteInMoreInfo
																												? (O(),
																													L("div", Hv, [
																														g(
																															"button",
																															{
																																class:
																																	"modal-delete-button modal-delete-button--subtle",
																																onClick:
																																	t[2] ||
																																	(t[2] = (i) =>
																																		e.$emit(
																																			"delete",
																																		)),
																																disabled:
																																	!r.canDeleteGlyph,
																															},
																															[
																																g(
																																	"i",
																																	{
																																		class: We(
																																			r.deleteButtonIcon,
																																		),
																																	},
																																	null,
																																	2,
																																),
																																g(
																																	"span",
																																	null,
																																	w(
																																		n.deleteButtonLabelText,
																																	),
																																	1,
																																),
																															],
																															8,
																															Wv,
																														),
																													]))
																												: he("", !0),
																										]))
																									: he("", !0),
																							]),
																							_: 1,
																						},
																					),
																					r.canEditGlyph
																						? he("", !0)
																						: (O(),
																							L(
																								"p",
																								zv,
																								w(
																									n.t(
																										"this_glyph_has_no_editable_path",
																									),
																								),
																								1,
																							)),
																				],
																				32,
																			))
																		: n.viewModeModel === "editor"
																			? (O(),
																				L("div", $v, [
																					Ce(
																						n.SvgPathEditor,
																						{
																							modelValue: n.editorPathModel,
																							"onUpdate:modelValue":
																								t[3] ||
																								(t[3] = (i) =>
																									(n.editorPathModel = i)),
																							strokeWeightState:
																								n.strokeWeightStateModel,
																							"onUpdate:strokeWeightState":
																								t[4] ||
																								(t[4] = (i) =>
																									(n.strokeWeightStateModel =
																										i)),
																							width: 560,
																							height: 560,
																							"show-handles": !0,
																							"show-controls": !0,
																							"allow-create-from-empty":
																								r.canEditGlyph,
																							"show-axis": !0,
																							"show-axis-labels": !0,
																							"show-mouse-coords": !0,
																							"style-options":
																								n.svgEditorStyleOptions,
																							"axis-label-step": 100,
																							"init-clipboard": r.clipboard,
																							"show-visual-bounds":
																								r.showVisualBounds,
																							"visual-bounds": r.visualBounds,
																							onCopy:
																								t[5] ||
																								(t[5] = (i) =>
																									n.emit("copy", i)),
																						},
																						null,
																						8,
																						[
																							"modelValue",
																							"strokeWeightState",
																							"allow-create-from-empty",
																							"style-options",
																							"init-clipboard",
																							"show-visual-bounds",
																							"visual-bounds",
																						],
																					),
																					g(
																						"p",
																						{
																							class: We([
																								"edit-status",
																								{
																									modified: r.hasUnsavedChanges,
																								},
																							]),
																						},
																						[
																							r.hasUnsavedChanges
																								? (O(),
																									L(
																										"span",
																										Vv,
																										w(
																											n.t(
																												"you_have_unsaved_changes",
																											),
																										),
																										1,
																									))
																								: r.hasSavedEdit
																									? (O(),
																										L(
																											"span",
																											qv,
																											w(
																												n.t(
																													"saved_edits_will_be_exported_with_the_font",
																												),
																											),
																											1,
																										))
																									: (O(),
																										L(
																											"span",
																											Xv,
																											w(
																												n.t(
																													"save_to_apply_the_changes_to_the_font",
																												),
																											),
																											1,
																										)),
																						],
																						2,
																					),
																					g("div", Yv, [
																						g(
																							"button",
																							{
																								class: "editor-button primary",
																								onClick: n.handleSave,
																								disabled: !r.canCommit,
																							},
																							w(n.t("save_close")),
																							9,
																							Zv,
																						),
																						g(
																							"button",
																							{
																								class: "editor-button",
																								onClick:
																									t[6] ||
																									(t[6] = (i) =>
																										e.$emit("reset")),
																								disabled: !r.canReset,
																							},
																							w(n.t("reset")),
																							9,
																							Kv,
																						),
																					]),
																				]))
																			: he("", !0),
																]),
																_: 1,
															},
														),
													]))
												: he("", !0),
										],
									),
								]))
							: he("", !0),
					]),
					_: 1,
				},
			),
		])
	);
}
const Qv = Le(Sv, [
	["render", Jv],
	["__scopeId", "data-v-9937cb9a"],
]);
const eb = {
		__name: "AddGlyphDialog",
		props: {
			visible: { type: Boolean, default: !1 },
			character: { type: String, default: "" },
			name: { type: String, default: "" },
			useFallbackOutline: { type: Boolean, default: !0 },
			error: { type: String, default: "" },
		},
		emits: [
			"close",
			"confirm",
			"update:character",
			"update:name",
			"character-input",
			"name-input",
			"update:useFallbackOutline",
		],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				{ t: s } = ye(),
				u = {
					props: n,
					emit: o,
					t: s,
					onCharacterInput: (d) => {
						o("update:character", d), o("character-input", d);
					},
					onNameInput: (d) => {
						o("update:name", d), o("name-input", d);
					},
					onFallbackToggle: (d) => {
						o("update:useFallbackOutline", !!d);
					},
					get useI18n() {
						return ye;
					},
				};
			return (
				Object.defineProperty(u, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				u
			);
		},
	},
	tb = (e) => (Ye("data-v-e5d22872"), (e = e()), Ze(), e),
	nb = { class: "add-modal-header" },
	rb = tb(() => g("i", { class: "fas fa-times" }, null, -1)),
	ob = [rb],
	sb = { class: "form-row" },
	ib = ["value", "placeholder"],
	ab = { class: "form-row" },
	lb = ["value", "placeholder"],
	cb = { class: "form-option" },
	ub = { class: "option-label" },
	db = ["checked"],
	fb = { class: "option-copy" },
	pb = { class: "option-title" },
	hb = { key: 0, class: "add-modal-error" },
	gb = { class: "add-modal-actions" },
	mb = { type: "submit", class: "modal-primary" };
function yb(e, t, r, n, o, s) {
	return (
		O(),
		bt(Mo, { to: "body" }, [
			Ce(
				qt,
				{ name: "fade" },
				{
					default: ut(() => [
						r.visible
							? (O(),
								L(
									"div",
									{
										key: 0,
										class: "add-glyph-modal",
										onClick: t[7] || (t[7] = (i) => e.$emit("close")),
									},
									[
										g(
											"div",
											{
												class: "add-glyph-modal-content",
												onClick: t[6] || (t[6] = Nt(() => {}, ["stop"])),
											},
											[
												g("div", nb, [
													g("h3", null, w(n.t("add_character")), 1),
													g(
														"button",
														{
															class: "modal-close-button",
															onClick: t[0] || (t[0] = (i) => e.$emit("close")),
														},
														ob,
													),
												]),
												g(
													"form",
													{
														class: "add-modal-body",
														onSubmit:
															t[5] ||
															(t[5] = Nt(
																(i) => e.$emit("confirm"),
																["prevent"],
															)),
													},
													[
														g("div", sb, [
															g("label", null, w(n.t("character")), 1),
															g(
																"input",
																{
																	value: r.character,
																	maxlength: "2",
																	placeholder: n.t("example"),
																	onInput:
																		t[1] ||
																		(t[1] = (i) =>
																			n.onCharacterInput(i.target.value)),
																},
																null,
																40,
																ib,
															),
														]),
														g("div", ab, [
															g("label", null, w(n.t("name")), 1),
															g(
																"input",
																{
																	value: r.name,
																	placeholder: n.t("default_to_unixxxx"),
																	onInput:
																		t[2] ||
																		(t[2] = (i) =>
																			n.onNameInput(i.target.value)),
																},
																null,
																40,
																lb,
															),
														]),
														g("div", cb, [
															g("label", ub, [
																g(
																	"input",
																	{
																		type: "checkbox",
																		class: "quiet-checkbox",
																		checked: r.useFallbackOutline,
																		onChange:
																			t[3] ||
																			(t[3] = (i) =>
																				n.onFallbackToggle(i.target.checked)),
																	},
																	null,
																	40,
																	db,
																),
																g("div", fb, [
																	g(
																		"span",
																		pb,
																		w(
																			n.t(
																				"use_the_browser_default_font_to_create_the_initial_outline",
																			),
																		),
																		1,
																	),
																]),
															]),
														]),
														r.error
															? (O(), L("p", hb, w(n.t(r.error)), 1))
															: he("", !0),
														g("div", gb, [
															g(
																"button",
																{
																	type: "button",
																	class: "modal-secondary",
																	onClick:
																		t[4] || (t[4] = (i) => e.$emit("close")),
																},
																w(n.t("cancel")),
																1,
															),
															g("button", mb, w(n.t("confirm_edit")), 1),
														]),
													],
													32,
												),
											],
										),
									],
								))
							: he("", !0),
					]),
					_: 1,
				},
			),
		])
	);
}
const vb = Le(eb, [
		["render", yb],
		["__scopeId", "data-v-e5d22872"],
	]),
	wo = (e) => typeof e == "number" && Number.isFinite(e),
	To = (e) => e >= 32 && e <= 126,
	Co = (e) =>
		(e >= 13312 && e <= 19903) ||
		(e >= 19968 && e <= 40959) ||
		(e >= 131072 && e <= 173791) ||
		(e >= 173824 && e <= 177983) ||
		(e >= 177984 && e <= 178207) ||
		(e >= 178208 && e <= 183983) ||
		(e >= 183984 && e <= 191471) ||
		(e >= 196608 && e <= 201551) ||
		(e >= 201552 && e <= 205743);
function Bn(e) {
	const t = [];
	wo(e?.unicode) && t.push(e.unicode);
	const r = [e?.unicodes, e?.original?.unicodes];
	for (const n of r)
		if (Array.isArray(n)) for (const o of n) wo(o) && t.push(o);
	return Array.from(new Set(t)).sort((n, o) => n - o);
}
function co(e) {
	if (!Array.isArray(e) || e.length === 0) return null;
	const t = Array.from(new Set(e.filter(wo))).sort((r, n) => r - n);
	return t.length === 0 ? null : (t.find(Co) ?? t.find(To) ?? t[0]);
}
const Dl = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 },
	Ll = {
		M: [1],
		L: [1],
		H: [],
		V: [0],
		C: [1, 3, 5],
		S: [1, 3],
		Q: [1, 3],
		T: [1],
		A: [1, 6],
		Z: [],
	},
	bb = {
		M: [0],
		L: [0],
		H: [0],
		V: [],
		C: [0, 2, 4],
		S: [0, 2],
		Q: [0, 2],
		T: [0],
		A: [5],
		Z: [],
	},
	xb = /^[a-zA-Z]$/,
	qo = /[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g,
	Xo = (e) => xb.test(e),
	Je = (e) => {
		if (!Number.isFinite(e) || Object.is(e, -0)) return "0";
		let t = e.toString();
		return (
			t.includes("e") && (t = e.toFixed(8)),
			(t = t
				.replace(/\.0+$/, "")
				.replace(/(\.\d*?)0+$/, "$1")
				.replace(/\.$/, "")),
			t || "0"
		);
	},
	Rl = (e, t = -1) => {
		if (!e || typeof e != "string") return "";
		const r = e.match(qo);
		if (!r) return e;
		const n = [];
		let o = "",
			s = [],
			i = 0;
		for (const a of r) {
			if (Xo(a)) {
				(o = a), (s = []), (i = Dl[a.toUpperCase()]), n.push(a);
				continue;
			}
			if (!o) {
				n.push(a);
				continue;
			}
			s.push(a);
			const l = o.toUpperCase();
			if (!i || s.length < i) continue;
			const u = Ll[l] || [],
				d = s.map((p, h) => {
					if (!u.includes(h)) return p;
					const f = parseFloat(p);
					return Number.isFinite(f) ? Je(f * t) : p;
				});
			n.push(...d), (s = []);
		}
		return n.join(" ");
	},
	rn = (e) => Rl(e, -1),
	Yn = (e) => Rl(e, -1),
	Sb = (e, t = {}) => {
		if (!e || typeof e != "string") return "";
		const r = e.match(qo);
		if (!r) return e;
		const {
				translateX: n = 0,
				translateY: o = 0,
				scaleX: s = 1,
				scaleY: i = 1,
			} = t || {},
			a = [];
		let l = "",
			u = [],
			d = 0;
		for (const p of r) {
			if (Xo(p)) {
				(l = p), (u = []), (d = Dl[p.toUpperCase()]), a.push(p);
				continue;
			}
			if (!l) {
				a.push(p);
				continue;
			}
			if ((u.push(p), !d || u.length < d)) continue;
			const h = l.toUpperCase(),
				f = l !== h,
				v = bb[h] || [],
				S = Ll[h] || [],
				b = u.map((I, P) => {
					const M = Number.parseFloat(I);
					if (!Number.isFinite(M)) return I;
					if (h === "A")
						switch (P) {
							case 0:
								return Je(Math.abs(M * s));
							case 1:
								return Je(Math.abs(M * i));
							case 2:
								return Je(M);
							case 3:
							case 4:
								return I;
							case 5: {
								const j = M + (f ? 0 : n);
								return Je(j * s);
							}
							case 6: {
								const j = M + (f ? 0 : o);
								return Je(j * i);
							}
							default:
								return Je(M);
						}
					if (v.includes(P)) {
						const j = M + (f ? 0 : n);
						return Je(j * s);
					}
					if (S.includes(P)) {
						const j = M + (f ? 0 : o);
						return Je(j * i);
					}
					return Je(M);
				});
			a.push(...b), (u = []);
		}
		return a.join(" ");
	},
	on = (e) => {
		if (!e || typeof e != "string") return "";
		const t = e.match(qo);
		return t
			? t
					.map((r) => {
						if (Xo(r)) return r;
						const n = parseFloat(r);
						return Number.isFinite(n) ? Je(n) : r.trim();
					})
					.join(" ")
			: "";
	},
	_b = /[a-zA-Z][^a-zA-Z]*/g,
	aa = (e) =>
		!e || typeof e != "string"
			? ""
			: e.replace(/,/g, " ").replace(/\s+/g, " ").trim(),
	kb = (e) => {
		if (!e || typeof e != "string") return "";
		const t = e.match(_b);
		if (!t) return aa(e);
		const r = [];
		let n = !1,
			o = !1;
		return (
			t.forEach((s) => {
				const i = s[0],
					a = aa(s);
				if (a) {
					if (i === "M" || i === "m") {
						n && o && r.push("Z"), r.push(a), (n = !0), (o = !1);
						return;
					}
					if (i === "Z" || i === "z") {
						n && o && r.push("Z"), (n = !1), (o = !1);
						return;
					}
					r.push(a), n && (o = !0);
				}
			}),
			n && o && r.push("Z"),
			r.join(" ").replace(/\s+/g, " ").trim()
		);
	},
	Fb = (e) =>
		!e || typeof e != "string" ? "" : kb(e).replace(/\s+/g, " ").trim(),
	gr = typeof window < "u",
	wb =
		"system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Microsoft JhengHei', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Source Han Sans SC', 'Source Han Sans TC', 'WenQuanYi Micro Hei', 'SimSun', 'SimHei', 'Helvetica Neue', Arial, sans-serif",
	Tb = 400,
	Cb = 0.18,
	Eb = "#000000",
	Ob = "#ffffff";
let Nn = null,
	uo = null,
	fo = Promise.resolve("");
const Gn = new Map(),
	Mb = async () =>
		gr
			? Nn ||
				(uo ||
					(uo = (async () => {
						try {
							const t =
								(
									await kc(
										() =>
											import("./SvgPathEditor.f969fac2.js").then((r) => r.p),
										[
											"_astro/SvgPathEditor.f969fac2.js",
											"_astro/runtime-dom.esm-bundler.270ff2dc.js",
											"_astro/_plugin-vue_export-helper.0519c48a.js",
											"_astro/pathUtils.eaad3f61.js",
											"_astro/vue-i18n.a5d54a73.js",
											"_astro/SvgPathEditor.cbaa7451.css",
										],
									)
								)?.default ?? null;
							return (Nn = t), t;
						} catch (e) {
							throw (
								(console.error("加载默认字形轮廓转换工具失败:", e),
								(Nn = null),
								e)
							);
						}
					})()),
				uo)
			: null,
	Ib = (e) => `${e}px ${wb}`,
	Ub = (e) => {
		if (!gr) return null;
		const t = document.createElement("canvas"),
			r = t.getContext("2d");
		if (!r) return null;
		const n = Tb,
			o = Ib(n);
		(r.font = o), (r.textBaseline = "alphabetic"), (r.textAlign = "left");
		const s = r.measureText(e),
			i = Number.isFinite(s.width) ? s.width : n,
			a = Number.isFinite(s.actualBoundingBoxLeft)
				? s.actualBoundingBoxLeft
				: 0,
			l = Number.isFinite(s.actualBoundingBoxRight)
				? s.actualBoundingBoxRight
				: i,
			u = Number.isFinite(s.actualBoundingBoxAscent)
				? s.actualBoundingBoxAscent
				: Number.isFinite(s.emHeightAscent)
					? s.emHeightAscent
					: n * 0.75,
			d = Number.isFinite(s.actualBoundingBoxDescent)
				? s.actualBoundingBoxDescent
				: Number.isFinite(s.emHeightDescent)
					? s.emHeightDescent
					: n * 0.25,
			p = Math.max(16, Math.ceil(n * Cb)),
			h = Math.max(1, Math.ceil(a + l + p * 2)),
			f = Math.max(1, Math.ceil(u + d + p * 2));
		(t.width = h), (t.height = f);
		const v = t.getContext("2d");
		if (!v) return null;
		(v.fillStyle = Ob),
			v.fillRect(0, 0, h, f),
			(v.fillStyle = Eb),
			(v.font = o),
			(v.textBaseline = "alphabetic"),
			(v.textAlign = "left"),
			(v.imageSmoothingEnabled = !0);
		const S = p + a,
			b = p + u;
		return (
			v.fillText(e, S, b),
			{
				canvas: t,
				fontSize: n,
				originX: S,
				baselineY: b,
				metrics: {
					width: i,
					actualBoundingBoxLeft: a,
					actualBoundingBoxRight: l,
					actualBoundingBoxAscent: u,
					actualBoundingBoxDescent: d,
				},
			}
		);
	},
	Pb = async (e) => {
		const t = await Mb();
		if (!t) return "";
		const r = e.toDataURL("image/png"),
			n = () =>
				new Promise((o) => {
					try {
						t.loadImageFromUrl(r),
							t.process(() => {
								let s = "";
								try {
									s = Fb(t.getPath(1));
								} catch (i) {
									console.error("生成默认字形路径失败:", i);
								}
								o(s);
							});
					} catch (s) {
						console.error("处理默认字形位图失败:", s), o("");
					}
				});
		return (fo = fo.then(n, n).catch(() => "")), fo;
	},
	Ab = async ({ unicodeValue: e, character: t, unitsPerEm: r }) => {
		if (!gr) return null;
		const n = Number.isFinite(r) ? r : 1e3,
			o = t || (Number.isFinite(e) ? String.fromCodePoint(e) : "");
		if (!o) return null;
		const s = Ub(o);
		if (!s) return null;
		const { canvas: i, fontSize: a, originX: l, baselineY: u, metrics: d } = s,
			p = a ? n / a : 1,
			h = await Pb(i);
		let f = "";
		if (h) {
			const j = Sb(h, { translateX: -l, translateY: -u, scaleX: p, scaleY: p });
			f = Yn(j).trim();
		}
		const v = Number.isFinite(d.width) ? d.width * p : n,
			S = Number.isFinite(d.actualBoundingBoxLeft)
				? d.actualBoundingBoxLeft * p
				: 0,
			b = -S,
			I = Number.isFinite(d.actualBoundingBoxRight)
				? d.actualBoundingBoxRight * p
				: v,
			P = Number.isFinite(d.actualBoundingBoxAscent)
				? d.actualBoundingBoxAscent * p
				: n / 2,
			M = Number.isFinite(d.actualBoundingBoxDescent)
				? -d.actualBoundingBoxDescent * p
				: -n / 4;
		return {
			path: f,
			advanceWidth: v,
			leftSideBearing: S,
			xMin: b,
			xMax: I,
			yMin: M,
			yMax: P,
		};
	},
	la = async ({
		unicodeValue: e = null,
		character: t = "",
		unitsPerEm: r = 1e3,
	} = {}) => {
		if (!gr) return null;
		const n = Number.isFinite(e) ? `u-${e}` : `c-${t || ""}`;
		if (Gn.has(n)) return Gn.get(n);
		try {
			const o = await Ab({ unicodeValue: e, character: t, unitsPerEm: r });
			return Gn.set(n, o), o;
		} catch (o) {
			return console.error("构建默认字形失败:", o), Gn.set(n, null), null;
		}
	};
const jn = 102,
	po = "this_character_already_exists",
	ca = 1200,
	Dt = "tight",
	Db = {
		__name: "GlyphList",
		props: {
			fontData: { type: Object, required: !0 },
			glyphEdits: { type: Object, default: () => ({}) },
		},
		emits: ["update:glyph-edits"],
		async setup(e, { expose: t, emit: r }) {
			let n, o;
			const s = (c, m) => {
					let y = null;
					return (...E) => {
						y && clearTimeout(y),
							(y = setTimeout(() => {
								c(...E);
							}, m));
					};
				},
				i = r,
				{ t: a } = ye(),
				l = e;
			([n, o] = yc(() => new Promise((c) => setTimeout(c, 0)))), await n, o();
			const u = H(""),
				d = H(null),
				p = H(1),
				h = H(""),
				f = H(""),
				v = H(null),
				S = H({}),
				b = H({}),
				I = H({}),
				P = H(!1),
				M = H("editor"),
				j = H(!1),
				re = H(!1),
				_ = H(!1),
				k = H(""),
				C = D(() => (k.value ? a(k.value) : "")),
				N = H(null),
				ae = [
					{ id: "all", label: "all" },
					{ id: "english", label: "english" },
					{ id: "chinese", label: "chinese" },
					{ id: "others", label: "others" },
				],
				ee = H(ae[0].id),
				T = (c) => {
					if (!Array.isArray(c) || c.length === 0) return null;
					const m = c.filter(
						(y) =>
							y &&
							typeof y == "object" &&
							typeof y.type == "string" &&
							Array.isArray(y.points),
					);
					if (!m.length) return null;
					try {
						return structuredClone(m);
					} catch {
						return m.map((E) => ({ type: E.type, points: E.points.slice() }));
					}
				},
				z = (c) => {
					if (!c) return null;
					if (Array.isArray(c)) return T(c);
					if (typeof c != "object") return null;
					const m = T(c.commands);
					if (!m) return null;
					const y =
						c.anchorOffset &&
						Number.isFinite(c.anchorOffset.dx) &&
						Number.isFinite(c.anchorOffset.dy)
							? { dx: c.anchorOffset.dx, dy: c.anchorOffset.dy }
							: null;
					return { commands: m, anchorOffset: y };
				},
				F = (c) => {
					N.value = z(c);
				},
				B = (c) => {
					if (typeof structuredClone == "function")
						try {
							return structuredClone(c);
						} catch {}
					return JSON.parse(JSON.stringify(c));
				},
				R = new Map(),
				Z = (c, m, y, E = "default") =>
					`${c?.__key ?? "unknown"}::${y}::${E}::${m}`,
				ie = () => {
					R.size >= ca && R.clear();
				},
				U = (c) => {
					if (!c) return;
					const m = `${c.__key ?? "unknown"}::`;
					for (const y of Array.from(R.keys())) y.startsWith(m) && R.delete(y);
				},
				X = () => {
					k.value === po && (k.value = "");
				},
				K = H({
					character: "",
					unicode: "",
					name: "",
					advanceWidth: 0,
					leftSideBearing: 0,
					useFallbackOutline: !0,
				}),
				le = H(!1),
				xe = D(() => (K.value?.character ?? "").trim()),
				oe = D(() => {
					const c = xe.value;
					if (!c) return null;
					const [m] = Array.from(c);
					if (!m) return null;
					const y = m.codePointAt(0);
					return Number.isFinite(y) ? y : null;
				}),
				ue = D(() => {
					const c = oe.value;
					return c === null
						? ""
						: c.toString(16).toUpperCase().padStart(4, "0");
				}),
				ve = H("");
			let de = null;
			const me = D(() => {
					const c = l.fontData?.unitsPerEm;
					return Number.isFinite(c) ? c : 1e3;
				}),
				we = (...c) => {
					for (const m of c) if (Number.isFinite(m)) return Number(m);
					return null;
				},
				Ne = D(() => {
					const c = l.fontData,
						m = me.value || 1e3;
					return (
						we(
							c?.ascender,
							c?.tables?.os2?.sTypoAscender,
							c?.tables?.hhea?.ascender,
						) ?? m
					);
				}),
				Re = D(() => {
					const c = l.fontData,
						m = -(me.value || 1e3) * 0.2;
					return (
						we(
							c?.descender,
							c?.tables?.os2?.sTypoDescender,
							c?.tables?.hhea?.descender,
						) ?? m
					);
				}),
				ot = D(() => {
					const c = l.fontData,
						m = Ne.value * 0.7;
					return we(c?.tables?.os2?.sCapHeight) ?? m;
				}),
				_t = D(() => {
					const c = l.fontData,
						m = Ne.value * 0.5;
					return we(c?.tables?.os2?.sxHeight) ?? m;
				}),
				je = D(() => {
					const c = l.fontData;
					return (
						we(
							c?.tables?.vhea?.vertTypoAscender,
							c?.tables?.os2?.sTypoAscender,
							c?.ascender,
						) ?? Ne.value
					);
				}),
				Y = D(() => {
					const c = l.fontData,
						m =
							Number.isFinite(Ne.value) && Number.isFinite(Re.value)
								? Ne.value - Re.value
								: me.value;
					return we(c?.tables?.vhea?.advanceHeightMax) ?? m ?? me.value;
				});
			pe(
				() => K.value.character,
				() => {
					const c = ue.value;
					(K.value.unicode = c),
						le.value || (K.value.name = c ? `uni${c}` : "");
				},
			);
			const _e = (c) => {
					le.value = !!(c || "").trim();
				},
				Ke = (c) => {
					const m = (c || "").trim();
					if (!m) {
						(K.value.character = ""), X();
						return;
					}
					const [y] = Array.from(m);
					(K.value.character = y || ""), X();
				},
				He = (c) => {
					(K.value.name = c), _e(c);
				};
			pe(
				() => K.value.name,
				(c) => {
					(c || "").trim() || (le.value = !1);
				},
			);
			const st = D(() =>
					l.fontData?.glyphs?.glyphs
						? Object.values(l.fontData.glyphs.glyphs)
								.map((c, m) => {
									const y = Array.isArray(c?.unicodes)
											? c.unicodes.filter((Q) => typeof Q == "number")
											: [],
										E = co(y),
										A =
											typeof c.index == "number" ? c.index : (c.index ?? null),
										J = (() =>
											A != null
												? `idx-${A}`
												: c.name
													? `name-${c.name}`
													: c.unicode !== null && c.unicode !== void 0
														? `unicode-${c.unicode}`
														: `seq-${m}`)(),
										$ = A == null ? J : String(A);
									return {
										__key: `existing-${J}`,
										__source: "existing",
										index: A,
										indexKey: $,
										unicode: Number.isFinite(E) ? E : (c.unicode ?? null),
										unicodes: y,
										name: c.name ?? null,
										advanceWidth: c.advanceWidth ?? null,
										leftSideBearing: c.leftSideBearing ?? null,
										xMin: c.xMin ?? null,
										xMax: c.xMax ?? null,
										yMin: c.yMin ?? null,
										yMax: c.yMax ?? null,
										original: c,
									};
								})
								.sort((c, m) => (c.unicode || 0) - (m.unicode || 0))
						: [],
				),
				kt = D(() => {
					const c = b.value || {};
					return Object.entries(c).map(([m, y]) => ({
						__key: m,
						__source: "addition",
						index: null,
						indexKey: m,
						unicode: y?.unicode ?? null,
						name: y?.name ?? null,
						advanceWidth: y?.advanceWidth ?? null,
						leftSideBearing: y?.leftSideBearing ?? null,
						xMin: y?.xMin ?? null,
						xMax: y?.xMax ?? null,
						yMin: y?.yMin ?? null,
						yMax: y?.yMax ?? null,
						character: y?.character ?? "",
					}));
				}),
				kn = D(() => st.value),
				Be = D(() => {
					const c = kt.value.slice().sort((m, y) => {
						const E = Number.isFinite(m.unicode)
								? m.unicode
								: Number.MAX_SAFE_INTEGER,
							A = Number.isFinite(y.unicode)
								? y.unicode
								: Number.MAX_SAFE_INTEGER;
						return E !== A ? E - A : m.__key.localeCompare(y.__key);
					});
					return [...kn.value, ...c];
				}),
				Mt = (c) => {
					if (c == null) return null;
					if (typeof c == "string") {
						const m = c.trim();
						if (!m) return null;
						const y = Number(m);
						return Number.isFinite(y) ? Math.trunc(y) : null;
					}
					return typeof c == "number" && Number.isFinite(c)
						? Math.trunc(c)
						: null;
				},
				Nl = (c) => (Number.isFinite(c?.unicode) ? Number(c.unicode) : null),
				Zo = (c) => To(c),
				Ko = (c) => Co(c),
				mr = (c) => {
					const m = Bn(c),
						y = co(m);
					return y === null
						? "others"
						: Zo(y)
							? "english"
							: Ko(y)
								? "chinese"
								: "others";
				},
				Jo = D(() =>
					ee.value === "all"
						? Be.value
						: Be.value.filter((c) => mr(c) === ee.value),
				),
				tn = D(() => {
					const c = Jo.value;
					if (!u.value) return c;
					const m = Array.from(u.value);
					if (m.length === 0) return c;
					if (m.length === 1) {
						const A = u.value.toLowerCase();
						return c.filter((J) => {
							const $ = Bn(J),
								Q = $.map((ke) => {
									try {
										return String.fromCodePoint(ke);
									} catch {
										return "";
									}
								}).filter(Boolean),
								fe = (J.name || "").toLowerCase(),
								ge = $.map((ke) => ke.toString(16).toLowerCase());
							return (
								Q.some((ke) => ke.toLowerCase().includes(A)) ||
								(fe && fe.includes(A)) ||
								ge.some((ke) => ke.includes(A))
							);
						});
					}
					const y = [],
						E = new Set();
					return (
						m.forEach((A) => {
							if (E.has(A)) return;
							E.add(A);
							const J = A.codePointAt(0);
							if (!Number.isFinite(J)) return;
							let $ = !1;
							for (const Q of c)
								Bn(Q).includes(J) &&
									(y.some((ge) => ge.__key === Q.__key) || y.push(Q), ($ = !0));
							if (!$ && A.trim()) {
								const Q = J;
								if (
									Number.isFinite(Q) &&
									!y.some((ge) => (ge.__source === "missing", ge.unicode === Q))
								) {
									const ge = Q.toString(16).toUpperCase().padStart(4, "0");
									y.push({
										__key: `missing-${Q}`,
										__source: "missing",
										index: null,
										indexKey: `missing-${Q}`,
										unicode: Q,
										name: `uni${ge}`,
										character: A,
										advanceWidth: null,
										leftSideBearing: null,
										xMin: null,
										xMax: null,
										yMin: null,
										yMax: null,
									});
								}
							}
						}),
						y
					);
				}),
				Gl = D(() => tn.value.length === 0),
				yr = D(() => {
					const c = tn.value.length;
					return c ? Math.ceil(c / jn) : 1;
				}),
				Qo = D(() => {
					const c = (p.value - 1) * jn,
						m = c + jn;
					return tn.value.slice(c, m);
				}),
				Fn = D(() => {
					if (!d.value) return null;
					if (d.value.__source === "addition") return It(d.value);
					const c = pt(d.value);
					return (c && S.value[c]) || null;
				}),
				vr = D(() => on(h.value)),
				es = D(() => {
					if (!d.value) return "";
					const c = Fn.value;
					if (c && Object.prototype.hasOwnProperty.call(c, "path")) {
						const m = rn((c.path ?? "").trim());
						return on(m);
					}
					return on(f.value);
				}),
				ts = D(() => on(f.value)),
				br = D(() => (d.value ? vr.value !== es.value : !1)),
				pt = (c) =>
					c
						? c.indexKey
							? c.indexKey
							: typeof c.index == "number"
								? String(c.index)
								: null
						: null,
				wn = (c) => {
					const m = pt(c);
					return (m && S.value[m]) || null;
				},
				It = (c) =>
					!c || c.__source !== "addition" ? null : b.value[c.__key] || null,
				ns = D(() => {
					const c = d.value;
					if (!c) return null;
					const m = kr(c),
						y = Wt(m);
					return Fr(c, y, [Fn.value]);
				}),
				it = (c) => {
					if (!c || c.__source !== "existing") return !1;
					const m = pt(c);
					return m ? !!I.value[m] : !1;
				},
				Tn = D(() =>
					d.value ? (d.value.__source === "addition" ? !0 : !it(d.value)) : !1,
				),
				jl = D(() =>
					!d.value || (d.value.__source !== "addition" && it(d.value))
						? !1
						: br.value,
				),
				Hl = D(() => (d.value ? vr.value !== ts.value : !1)),
				rs = () => {
					typeof document > "u" ||
						re.value ||
						(document.documentElement?.classList.add("glyph-scroll-locked"),
						document.body?.classList.add("glyph-scroll-locked"),
						(re.value = !0));
				},
				xr = () => {
					typeof document > "u" ||
						!re.value ||
						(document.documentElement?.classList.remove("glyph-scroll-locked"),
						document.body?.classList.remove("glyph-scroll-locked"),
						(re.value = !1));
				},
				os = (c) => {
					const m = c && typeof c == "object" ? c : {},
						y = (E) => {
							const A = {};
							if (!E || typeof E != "object") return A;
							for (const [J, $] of Object.entries(E))
								!$ ||
									typeof $ != "object" ||
									(A[J] = {
										...$,
										path:
											typeof $.path == "string"
												? $.path.trim()
												: ($.path ?? ""),
									});
							return A;
						};
					(S.value = y(m.edits)),
						(b.value = y(m.additions)),
						(I.value = y(m.deletions)),
						R.clear();
				},
				ss = () => ({
					edits: B(S.value || {}),
					additions: B(b.value || {}),
					deletions: B(I.value || {}),
				}),
				ht = () => {
					i("update:glyph-edits", ss());
				},
				Ut = (c) => {
					de && (clearTimeout(de), (de = null));
					const m = c ? a(c) : "";
					(ve.value = m),
						m &&
							(de = setTimeout(() => {
								(ve.value = ""), (de = null);
							}, 3e3));
				},
				is = () => {
					(K.value = {
						character: "",
						unicode: "",
						name: "",
						advanceWidth: me.value,
						leftSideBearing: 0,
						useFallbackOutline: !0,
					}),
						(k.value = ""),
						(le.value = !1);
				},
				Cn = (c = "") => {
					is(), c && Ke(c), (_.value = !0);
				},
				Sr = D(() => (u.value || "").trim()),
				Wl = D(() => ee.value !== ae[0].id),
				zl = () => {
					if (!Sr.value) {
						Cn();
						return;
					}
					Cn(Sr.value);
				},
				$l = (c) => {
					c && Cn(c);
				},
				Vl = () => {
					(_.value = !1), (k.value = "");
				},
				as = () => {
					const c = new Set();
					return (
						st.value.forEach((m) => {
							const y = (m.name || "").trim();
							y && c.add(y);
						}),
						Object.values(b.value || {}).forEach((m) => {
							const y = (m?.name || "").trim();
							y && c.add(y);
						}),
						c
					);
				},
				ls = (c) => {
					const m = (c || "").trim();
					return m ? as().has(m) : !1;
				},
				ql = async () => {
					const c = K.value || {},
						m = oe.value;
					if (m === null) {
						k.value = "enter_the_character_you_want_to_add";
						return;
					}
					if (
						st.value.some((Xe) => {
							const yt = Number.isFinite(Xe.unicode) ? Xe.unicode : null;
							return yt !== null && yt === m;
						})
					) {
						k.value = po;
						return;
					}
					if (
						Object.values(b.value || {}).some((Xe) => {
							const yt = Number.isFinite(Xe?.unicode) ? Xe.unicode : null;
							return yt !== null && yt === m;
						})
					) {
						k.value = "this_character_is_already_queued";
						return;
					}
					const A = (() => {
							const Xe = xe.value;
							if (!Xe) return "";
							const [yt] = Array.from(Xe);
							return yt || "";
						})(),
						J = ue.value,
						$ = (c.name || "").trim() || (J ? `uni${J}` : "");
					if (!$) {
						k.value = "please_name_the_character";
						return;
					}
					if (ls($)) {
						k.value = "name_already_exists_please_change_it";
						return;
					}
					const Q = $,
						fe = Number.parseFloat(c.advanceWidth),
						ge = Number.parseFloat(c.leftSideBearing),
						ke = Number.isFinite(fe) ? fe : me.value,
						Ae = Number.isFinite(ge) ? ge : 0;
					let Se = null;
					if (c.useFallbackOutline && Number.isFinite(m))
						try {
							Se = await la({
								unicodeValue: m,
								character: A,
								unitsPerEm: me.value,
							});
						} catch (Xe) {
							console.error("加载默认字形失败:", Xe);
						}
					const te = {
						path: "",
						advanceWidth: ke,
						leftSideBearing: Ae,
						xMin: null,
						xMax: null,
						yMin: null,
						yMax: null,
					};
					c.useFallbackOutline && Se
						? ((te.path = (Se.path || "").trim()),
							(te.advanceWidth = Number.isFinite(Se.advanceWidth)
								? Se.advanceWidth
								: te.advanceWidth),
							(te.leftSideBearing = Number.isFinite(Se.leftSideBearing)
								? Se.leftSideBearing
								: te.leftSideBearing),
							(te.xMin = Number.isFinite(Se.xMin) ? Se.xMin : te.xMin),
							(te.xMax = Number.isFinite(Se.xMax) ? Se.xMax : te.xMax),
							(te.yMin = Number.isFinite(Se.yMin) ? Se.yMin : te.yMin),
							(te.yMax = Number.isFinite(Se.yMax) ? Se.yMax : te.yMax))
						: c.useFallbackOutline &&
							console.warn("默认字体没有提供该字符，使用空白轮廓");
					const qe = te.path,
						gt = qe
							? Wt(qe)
							: { xMin: te.xMin, xMax: te.xMax, yMin: te.yMin, yMax: te.yMax };
					(te.xMin = Number.isFinite(te.xMin) ? te.xMin : gt.xMin),
						(te.xMax = Number.isFinite(te.xMax) ? te.xMax : gt.xMax),
						(te.yMin = Number.isFinite(te.yMin) ? te.yMin : gt.yMin),
						(te.yMax = Number.isFinite(te.yMax) ? te.yMax : gt.yMax);
					const mt = `addition-${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 8)}`,
						Tr = {
							action: "add",
							id: mt,
							unicode: m,
							name: Q,
							character: A,
							path: qe,
							advanceWidth: te.advanceWidth,
							leftSideBearing: te.leftSideBearing,
							xMin: te.xMin,
							xMax: te.xMax,
							yMin: te.yMin,
							yMax: te.yMax,
						};
					b.value = { ...b.value, [mt]: Tr };
					const In = {
						__key: mt,
						__source: "addition",
						index: null,
						indexKey: mt,
						unicode: m,
						name: Q,
						advanceWidth: te.advanceWidth,
						leftSideBearing: te.leftSideBearing,
						xMin: te.xMin,
						xMax: te.xMax,
						yMin: te.yMin,
						yMax: te.yMax,
					};
					(_.value = !1),
						(k.value = ""),
						(le.value = !1),
						(d.value = In),
						(M.value = "editor"),
						(P.value = !0),
						(p.value = 1),
						ht();
					const Cr = !!c.useFallbackOutline;
					Ut(
						Cr
							? !!qe
								? "character_added"
								: "default_font_lacked_this_character_added_a_blank_glyph"
							: "character_added",
					),
						Pt(In);
				},
				Xl = D(() => {
					if (!d.value) return !1;
					if (d.value.__source === "addition") return !0;
					const c = pt(d.value);
					return !(!c || (c === "0" && !it(d.value)));
				}),
				Yl = D(() =>
					d.value
						? d.value.__source === "addition"
							? a("remove_addition")
							: it(d.value)
								? a("undo_delete")
								: a("delete_character")
						: a("delete_character"),
				),
				Zl = D(() =>
					d.value
						? d.value.__source === "addition"
							? "fas fa-xmark"
							: it(d.value)
								? "fas fa-rotate-left"
								: "fas fa-trash"
						: "fas fa-trash",
				),
				Kl = D(() => {
					const c = d.value;
					return !c || c.__source === "addition" ? !1 : it(c);
				}),
				Jl = D(() => {
					const c = d.value;
					return c ? (c.__source === "addition" ? !0 : !it(c)) : !1;
				}),
				Ql = () => {
					const c = d.value;
					if (!c) return;
					if (c.__source === "addition") {
						const E = c.__key;
						if (!E) return;
						const A = { ...b.value };
						delete A[E],
							(b.value = A),
							U(c),
							d.value?.__key === E && xs(!0),
							ht(),
							Ut("new_glyph_removed");
						return;
					}
					const m = pt(c);
					if (!m) return;
					if (it(c)) {
						const E = { ...I.value };
						delete E[m], (I.value = E), U(c), Ut("deletion_reverted"), ht();
						return;
					}
					if (m === "0") {
						Ut("cannot_delete_the_notdef_glyph");
						return;
					}
					const y = {
						...I.value,
						[m]: {
							action: "delete",
							index: c.index ?? null,
							name: c.name ?? null,
							unicode: c.unicode ?? null,
						},
					};
					if (
						((I.value = y), Object.prototype.hasOwnProperty.call(S.value, m))
					) {
						const E = { ...S.value };
						delete E[m], (S.value = E);
					}
					U(c), ht(), Ut("marked_as_deleted");
				},
				cs = (c) =>
					(c ?? "")
						.toString()
						.replace(/&/g, "&amp;")
						.replace(/"/g, "&quot;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;"),
				us = (c) => {
					const m = Number.isFinite(c?.xMin) ? Number(c.xMin) : null,
						y = Number.isFinite(c?.xMax) ? Number(c.xMax) : null,
						E = Number.isFinite(c?.yMin) ? Number(c.yMin) : null,
						A = Number.isFinite(c?.yMax) ? Number(c.yMax) : null;
					if (m === null || y === null || E === null || A === null) return null;
					const J = Math.max(Math.abs(y - m), 1),
						$ = Math.max(Math.abs(A - E), 1),
						Q = 0.04,
						fe = J * Q,
						ge = $ * Q;
					return { xMin: m - fe, xMax: y + fe, yMin: E - ge, yMax: A + ge };
				},
				ds = (c, m, y, E = void 0) => {
					const A = me.value || 1e3,
						J = Wt(m),
						$ = Fr(c, J),
						Q = E?.renderMode === Dt ? Dt : "default",
						fe = (Q === Dt ? us(J) : null) || ms(c, $, J),
						ge = (fc, pc) => {
							const Ms = fe?.[fc];
							return Number.isFinite(Ms) ? Number(Ms) : pc;
						},
						ke = ge("xMin", -A / 2),
						Ae = ge("xMax", A / 2),
						Se = ge("yMin", -A / 2),
						te = ge("yMax", A / 2),
						qe = Math.max(Math.abs(Ae - ke), 1),
						gt = Math.max(Math.abs(te - Se), 1),
						mt = y / qe,
						Tr = y / gt,
						In = Math.min(mt, Tr) * (Q === Dt ? 1 : 0.8),
						Cr = y / 2,
						Os = y / 2,
						Xe = (ke + Ae) / 2,
						yt = (Se + te) / 2;
					return {
						centerX: Cr,
						centerY: Os,
						finalScale: In,
						glyphCenterX: Xe,
						glyphCenterY: yt,
						pathData: m,
						renderMode: Q,
						size: y,
					};
				},
				fs = (c, m, y, E = void 0) => {
					const A = ds(c, m, y, E),
						J = cs(A?.pathData ?? "");
					return !A || !J
						? ""
						: `
			<svg 
				width="${A.size}" 
				height="${A.size}" 
				viewBox="0 0 ${A.size} ${A.size}"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g transform="
					translate(${A.centerX}, ${A.centerY})
					scale(${A.finalScale}, ${-A.finalScale})
					translate(${-A.glyphCenterX}, ${-A.glyphCenterY})
				">
					<path d="${J}" fill="currentColor"/>
				</g>
			</svg>
		`;
				},
				En = (c, m = 80, y = void 0) => {
					if (!c) return "";
					try {
						const E = y ?? {},
							A = E.renderMode === Dt ? Dt : "default",
							J = Object.prototype.hasOwnProperty.call(E, "pathOverride"),
							$ = J ? (E.pathOverride ?? "") : void 0,
							fe = ((J ? $ : kr(c)) || "").trim();
						if (!fe) return "";
						const ge = !J;
						let ke = null;
						if (ge) {
							ke = Z(c, fe, m, A);
							const Se = R.get(ke);
							if (Se) return Se;
						}
						const Ae = fs(c, fe, m, E);
						return Ae ? (ge && ke && (ie(), R.set(ke, Ae)), Ae) : "";
					} catch (E) {
						return console.error("生成SVG失败:", E), "";
					}
				},
				ps = s(() => {
					(d.value = null), (p.value = 1);
				}, 300);
			pe(u, () => {
				ps();
			}),
				pe(
					ee,
					() => {
						(d.value = null), (p.value = 1);
					},
					{ flush: "sync" },
				);
			const ec = (c) => {
				if (!c) return;
				if (d.value?.__key === c.__key) {
					Pt(c),
						(M.value = Tn.value ? "editor" : "preview"),
						(j.value = !1),
						(P.value = !0);
					return;
				}
				d.value = c;
			};
			function _r(c) {
				if (!c) return "";
				if (c.__source === "addition") return (It(c)?.path ?? "").trim();
				try {
					return c.original?.path?.toPathData
						? c.original.path.toPathData()
						: "";
				} catch (m) {
					return console.error("读取字形路径失败:", m), "";
				}
			}
			const kr = (c) => {
					if (!c) return "";
					if (c.__source === "addition") return (It(c)?.path ?? "").trim();
					const m = wn(c);
					return m && Object.prototype.hasOwnProperty.call(m, "path")
						? (m.path ?? "").trim()
						: _r(c);
				},
				Pt = (c) => {
					if (((v.value = null), !c)) {
						(h.value = ""), (f.value = "");
						return;
					}
					const m = _r(c),
						y = (rn(m) || "").trim();
					f.value = y;
					const E = wn(c);
					if (E && Object.prototype.hasOwnProperty.call(E, "path")) {
						const A = (rn(E.path) || "").trim();
						h.value = A;
					} else c.__source, (h.value = y);
				},
				On = { xMin: null, xMax: null, yMin: null, yMax: null },
				Wt = (c) => {
					if (!c || !c.trim()) return { ...On };
					try {
						const m = Is(c),
							y = Us(m);
						return y
							? {
									xMin: Number.isFinite(y.minX) ? y.minX : null,
									xMax: Number.isFinite(y.maxX) ? y.maxX : null,
									yMin: Number.isFinite(y.minY) ? y.minY : null,
									yMax: Number.isFinite(y.maxY) ? y.maxY : null,
								}
							: { ...On };
					} catch (m) {
						return console.error("计算边界框失败:", m), { ...On };
					}
				},
				hs = (c, m = []) => {
					const y = [];
					if (
						(m.forEach((E) => {
							E && y.push(E);
						}),
						!c)
					)
						return y;
					if (c.__source === "addition") {
						const E = It(c);
						E && y.push(E);
					}
					if (c.__source === "existing") {
						const E = wn(c);
						E && y.push(E);
					}
					return (
						y.push(c),
						c.__source === "existing" && c.original && y.push(c.original),
						y
					);
				},
				Fr = (c, m = null, y = []) => {
					if (!c) return null;
					const E = hs(c, y),
						A = (Ae, Se) => {
							for (const te of E) {
								const qe = te?.[Ae];
								if (Number.isFinite(qe)) return Number(qe);
							}
							return m && Number.isFinite(m?.[Ae]) ? Number(m[Ae]) : Se;
						},
						J = A("advanceWidth", me.value),
						$ = A("leftSideBearing", 0),
						Q = A("xMin", Number.isFinite($) ? $ : null),
						fe = A(
							"xMax",
							Number.isFinite(Q) && Number.isFinite(J) ? Q + J : null,
						),
						ge = A("yMin", null),
						ke = A("yMax", null);
					return {
						advanceWidth: J,
						leftSideBearing: $,
						xMin: Q,
						xMax: fe,
						yMin: ge,
						yMax: ke,
					};
				},
				gs = (c) => {
					if (!c) return null;
					const m = (ge) => (Number.isFinite(ge) ? -Number(ge) : null),
						y = Number.isFinite(me.value) ? me.value : 0,
						E = Number.isFinite(c?.xMin)
							? c.xMin
							: Number.isFinite(c?.leftSideBearing)
								? c.leftSideBearing
								: null,
						A = Number.isFinite(c?.xMax)
							? c.xMax
							: Number.isFinite(E) && Number.isFinite(c?.advanceWidth)
								? E + c.advanceWidth
								: null,
						J = Number.isFinite(c?.leftSideBearing) ? c.leftSideBearing : E,
						$ = Number.isFinite(J) ? J : 0,
						Q = Number.isFinite(c?.advanceWidth) ? c.advanceWidth : y,
						fe =
							Number.isFinite(je.value) && Number.isFinite(Y.value)
								? je.value - Y.value
								: null;
					return {
						glyphTop: m(c?.yMax),
						glyphBottom: m(c?.yMin),
						glyphLeft: E,
						glyphRight: A,
						fontAscender: m(Ne.value),
						fontDescender: m(Re.value),
						capHeight: m(ot.value),
						xHeight: m(_t.value),
						verticalOrigin: m(je.value),
						verticalAdvance: m(fe),
						baseline: 0,
						leftSideBearing: $,
						advanceWidth: Q,
						originX: 0,
					};
				},
				ms = (c, m, y) => {
					const E = me.value || 1e3,
						J =
							(Number.isFinite(m?.leftSideBearing)
								? Number(m.leftSideBearing)
								: null) ??
							(Number.isFinite(m?.xMin)
								? Number(m.xMin)
								: Number.isFinite(y?.xMin)
									? Number(y.xMin)
									: -E / 2),
						$ = Number.isFinite(m?.advanceWidth) ? Number(m.advanceWidth) : E,
						Q = Number.isFinite(m?.xMax)
							? Number(m.xMax)
							: Number.isFinite(y?.xMax)
								? Number(y.xMax)
								: J + $,
						fe = Number.isFinite(J) ? J + $ : $,
						ge = Math.max(Q, fe),
						ke = Number.isFinite(m?.yMin)
							? Number(m.yMin)
							: Number.isFinite(y?.yMin)
								? Number(y.yMin)
								: -E / 2,
						Ae = Number.isFinite(m?.yMax)
							? Number(m.yMax)
							: Number.isFinite(y?.yMax)
								? Number(y.yMax)
								: E / 2,
						Se = Math.max(Math.abs(ge - J), 1),
						te = Math.max(Math.abs(Ae - ke), 1),
						qe = 0.08,
						gt = Se * qe,
						mt = te * qe;
					return { xMin: J - gt, xMax: ge + gt, yMin: ke - mt, yMax: Ae + mt };
				},
				tc = (c) => {
					if (!c) return null;
					const m = [],
						y = [],
						E = (Q) => {
							Number.isFinite(Q) && m.push(Number(Q));
						},
						A = (Q) => {
							Number.isFinite(Q) && y.push(Number(Q));
						},
						J = Number.isFinite(c.originX) ? Number(c.originX) : 0;
					E(c.glyphLeft),
						E(c.glyphRight),
						E(c.leftSideBearing),
						E(J),
						Number.isFinite(c.advanceWidth) && E(J + Number(c.advanceWidth));
					const $ = (Q) => (Number.isFinite(Q) ? -Number(Q) : null);
					return (
						A($(c.glyphTop)),
						A($(c.glyphBottom)),
						A($(c.fontAscender)),
						A($(c.fontDescender)),
						A($(c.capHeight)),
						A($(c.xHeight)),
						A($(c.verticalOrigin)),
						A($(c.verticalAdvance)),
						A($(c.baseline)),
						!m.length && !y.length
							? null
							: {
									xMin: m.length ? Math.min(...m) : null,
									xMax: m.length ? Math.max(...m) : null,
									yMin: y.length ? Math.min(...y) : null,
									yMax: y.length ? Math.max(...y) : null,
								}
					);
				},
				ys = (c, m) => {
					const y = (m ?? "").trim(),
						E = c.original,
						A = Wt(y);
					return {
						index: c.index ?? null,
						name: c.name ?? E?.name ?? null,
						unicode: c.unicode ?? E?.unicode ?? null,
						path: y,
						advanceWidth: Number.isFinite(c.advanceWidth)
							? c.advanceWidth
							: Number.isFinite(E?.advanceWidth)
								? E.advanceWidth
								: me.value,
						leftSideBearing: Number.isFinite(c.leftSideBearing)
							? c.leftSideBearing
							: Number.isFinite(E?.leftSideBearing)
								? E.leftSideBearing
								: 0,
						xMin: A.xMin,
						xMax: A.xMax,
						yMin: A.yMin,
						yMax: A.yMax,
					};
				},
				nc = () => {
					if (!d.value) return;
					const c = d.value,
						m = (h.value ?? "").trim();
					h.value = m;
					const y = Yn(m);
					if (c.__source === "addition") {
						const $ = It(c) || {},
							Q = Wt(y),
							fe = {
								action: "add",
								id: c.__key,
								unicode: c.unicode ?? $.unicode ?? null,
								name: c.name ?? $.name ?? null,
								character: $.character ?? "",
								path: y,
								advanceWidth: Number.isFinite(c.advanceWidth)
									? c.advanceWidth
									: Number.isFinite($.advanceWidth)
										? $.advanceWidth
										: me.value,
								leftSideBearing: Number.isFinite(c.leftSideBearing)
									? c.leftSideBearing
									: Number.isFinite($.leftSideBearing)
										? $.leftSideBearing
										: 0,
								xMin: Q.xMin,
								xMax: Q.xMax,
								yMin: Q.yMin,
								yMax: Q.yMax,
							};
						(b.value = { ...b.value, [c.__key]: fe }),
							(d.value = {
								...d.value,
								advanceWidth: fe.advanceWidth,
								leftSideBearing: fe.leftSideBearing,
								xMin: fe.xMin,
								xMax: fe.xMax,
								yMin: fe.yMin,
								yMax: fe.yMax,
							}),
							U(c),
							ht(),
							Pt(c);
						return;
					}
					const E = pt(c);
					if (!E) return;
					const A = { ...ys(c, y), action: "modify" },
						J = { ...S.value, [E]: A };
					(S.value = J), U(c), ht(), Pt(c);
				},
				rc = () => {
					if (!d.value) return;
					v.value = null;
					const c = d.value;
					if (c.__source === "addition") {
						const E = It(c),
							A = rn((E?.path ?? "").trim());
						h.value = A || "";
						return;
					}
					const m = f.value ?? "";
					h.value = m;
					const y = pt(c);
					if (y && Object.prototype.hasOwnProperty.call(S.value, y)) {
						const E = { ...S.value };
						delete E[y], (S.value = E), ht();
					}
					U(c);
				},
				vs = (c) => {
					if (!c) return !1;
					if (c.__source === "addition") return !0;
					const m = pt(c);
					return m ? !!S.value[m] : !1;
				};
			pe(
				() => l.glyphEdits,
				(c) => {
					os(c || {}), d.value && Pt(d.value);
				},
				{ deep: !0, immediate: !0 },
			),
				pe(d, (c) => {
					Pt(c),
						(M.value = c ? (Tn.value ? "editor" : "preview") : "editor"),
						(j.value = !1),
						(P.value = !!c);
				}),
				pe(P, (c) => {
					c ? rs() : xr();
				}),
				pe(Tn, (c) => {
					!c && M.value === "editor" && (M.value = "preview");
				});
			const bs = (c) => {
					if (!c || !Be.value || !Be.value.length) return;
					if (c.type === "add") {
						const $ = c.additionId || c.id;
						if (!$) return;
						const Q = Be.value.find(
							(fe) => fe.__source === "addition" && fe.__key === $,
						);
						Q && (d.value = Q);
						return;
					}
					const y = Mt(c.index),
						E = Mt(c.unicode),
						A = (c.name || "").trim();
					let J = null;
					y !== null &&
						(J = Be.value.find(
							($) => $.__source === "existing" && $.index === y,
						)),
						!J &&
							E !== null &&
							(J = Be.value.find(
								($) => $.__source === "existing" && $.unicode === E,
							)),
						!J &&
							A &&
							(J = Be.value.find(
								($) => $.__source === "existing" && ($.name || "").trim() === A,
							)),
						J && (d.value = J);
				},
				Mn = () => {
					(u.value = ""),
						(d.value = null),
						(p.value = 1),
						(h.value = ""),
						(f.value = ""),
						(v.value = null),
						(S.value = {}),
						(b.value = {}),
						(I.value = {}),
						R.clear(),
						(P.value = !1),
						(M.value = "editor"),
						(j.value = !1),
						(_.value = !1),
						(le.value = !1),
						ht(),
						de && (clearTimeout(de), (de = null)),
						(ve.value = "");
				},
				xs = (c = !0) => {
					(P.value = !1),
						(M.value = "editor"),
						(j.value = !1),
						c && ((d.value = null), (v.value = null));
				};
			Zn(() => {
				xr(), de && (clearTimeout(de), (de = null));
			}),
				t({ reset: Mn, focusGlyphFromOperation: bs }),
				pe(
					() => l.fontData,
					(c, m) => {
						if (!c) {
							Mn();
							return;
						}
						c !== m && Mn();
					},
				),
				pe(p, (c) => {
					c > yr.value && (p.value = yr.value || 1);
				});
			const Pe = (c) => {
					const m = Number(c);
					return Number.isFinite(m) ? Math.round(m) : 0;
				},
				Ss = (c) => {
					if (!c) return 0;
					const m = Number.isFinite(c.yMax) ? c.yMax : null,
						y = Number.isFinite(c.yMin) ? c.yMin : null;
					return m === null || y === null ? 0 : Pe(m - y);
				},
				_s = (c) => {
					if (!c) return Pe(Ne.value);
					const m = Number.isFinite(c.yMax) ? c.yMax : null,
						y = Ne.value;
					return Pe(m === null ? y : y - m);
				},
				ks = (c) => {
					if (!c) return Pe(-Re.value);
					const m = Number.isFinite(c.yMin) ? c.yMin : null,
						y = Re.value;
					return Pe(m === null ? -y : m - y);
				},
				Fs = (c) => {
					const m = c?.unicode;
					if (m == null) return a("no_codepoint");
					try {
						return String.fromCodePoint(m);
					} catch {
						return a("no_codepoint");
					}
				},
				wr = (c) => {
					const m = c?.unicode;
					return m == null
						? a("none")
						: `U+${m.toString(16).toUpperCase().padStart(4, "0")}`;
				},
				ws = (c) => {
					if (!c) return 0;
					const m = (c.xMax ?? 0) - (c.xMin ?? 0),
						y = (c.advanceWidth ?? 0) - m - (c.leftSideBearing ?? 0);
					return Pe(y);
				},
				Ts = (c) => {
					if (!c) return 0;
					const m = Number.isFinite(c.yMax) ? c.yMax : null,
						y = je.value;
					return !Number.isFinite(y) || m === null ? 0 : Pe(y - m);
				},
				oc = D(() => Be.value.length),
				Cs = D(() => {
					const c = ae.reduce((m, y) => ((m[y.id] = 0), m), {});
					return (
						Be.value.forEach((m) => {
							const y = mr(m),
								E = Object.prototype.hasOwnProperty.call(c, y) ? y : "others";
							c[E] = (c[E] || 0) + 1;
						}),
						(c.all = Be.value.length),
						c
					);
				}),
				sc = D(() =>
					ae.map((c) => ({
						...c,
						count: c.id === "all" ? Be.value.length : Cs.value[c.id] || 0,
					})),
				),
				ic = D(() => tn.value.length),
				ac = D(() =>
					Qo.value.map((c) => {
						const m = c.__source === "addition",
							y = c.__source === "missing",
							E = it(c);
						return {
							key: c.__key,
							glyph: c,
							isActive: d.value?.__key === c.__key,
							isEdited: vs(c),
							isAddition: m,
							isMissing: y,
							isDeleted: E,
							preview: y ? "" : En(c),
							unicodeLabel: wr(c),
							nameLabel: y
								? c.character || a("missing_glyph")
								: c.name || a(m ? "added_glyph" : "untitled"),
							character: c.character || "",
						};
					}),
				),
				lc = D(() => {
					const c = d.value;
					if (!c) return "";
					if (br.value) {
						const m = (h.value ?? "").trim(),
							y = Yn(m);
						return En(c, 520, { pathOverride: y });
					}
					return En(c, 520);
				}),
				cc = D(() => gs(ns.value)),
				uc = D(() => {
					const c = d.value;
					return c
						? [
								{ label: a("character"), value: Fs(c) },
								{ label: "Unicode", value: wr(c) },
								{ label: a("name"), value: c.name || a("untitled") },
								{ label: a("index"), value: c.index ?? "--" },
								{ label: a("width"), value: String(Pe(c.advanceWidth)) },
								{ label: a("height"), value: String(Ss(c)) },
								{ label: a("top_side_bearing_tsb"), value: String(Ts(c)) },
								{
									label: a("side_bearings"),
									value: `${Pe(c.leftSideBearing)} / ${ws(c)}`,
								},
								{
									label: a("vertical_origin"),
									value: Number.isFinite(je.value)
										? String(Pe(je.value))
										: "--",
								},
								{ label: a("vertical_margins"), value: `${_s(c)} / ${ks(c)}` },
								{ label: a("x_range"), value: `${Pe(c.xMin)} ~ ${Pe(c.xMax)}` },
								{ label: a("y_range"), value: `${Pe(c.yMin)} ~ ${Pe(c.yMax)}` },
							]
						: [];
				}),
				dc = D(() => !!Fn.value),
				Es = {
					debounce: s,
					emit: i,
					t: a,
					props: l,
					searchQuery: u,
					selectedGlyph: d,
					currentPage: p,
					itemsPerPage: jn,
					editorPath: h,
					initialEditorPath: f,
					editorStrokeWeightState: v,
					editedGlyphs: S,
					addedGlyphs: b,
					deletedGlyphs: I,
					showEditorDialog: P,
					dialogViewMode: M,
					showMoreInfo: j,
					isBodyScrollLocked: re,
					showAddDialog: _,
					DUPLICATE_GLYPH_ERROR_KEY: po,
					addGlyphErrorKey: k,
					addGlyphError: C,
					editorClipboard: N,
					GLYPH_CATEGORY_RULES: ae,
					selectedCategory: ee,
					cloneClipboardCommands: T,
					cloneClipboardPayload: z,
					updateEditorClipboard: F,
					safeClone: B,
					previewCache: R,
					PREVIEW_CACHE_LIMIT: ca,
					AI_REPAIR_RENDER_MODE: Dt,
					makePreviewCacheKey: Z,
					trimPreviewCacheIfNeeded: ie,
					invalidatePreviewCacheForGlyph: U,
					clearDuplicateGlyphError: X,
					addGlyphForm: K,
					addGlyphNameEdited: le,
					derivedCharacter: xe,
					derivedUnicodeValue: oe,
					derivedUnicodeHex: ue,
					toolbarMessage: ve,
					get toolbarMessageTimer() {
						return de;
					},
					set toolbarMessageTimer(c) {
						de = c;
					},
					unitsPerEm: me,
					pickFontMetric: we,
					fontAscender: Ne,
					fontDescender: Re,
					fontCapHeight: ot,
					fontXHeight: _t,
					fontVerticalOrigin: je,
					fontAdvanceHeight: Y,
					markNameEdited: _e,
					handleAddGlyphCharacterInput: Ke,
					handleAddGlyphNameInput: He,
					existingGlyphs: st,
					additionEntries: kt,
					visibleExistingGlyphs: kn,
					glyphs: Be,
					normalizeIntegerLike: Mt,
					getGlyphUnicodeValue: Nl,
					isEnglishCharacter: Zo,
					isChineseCharacter: Ko,
					getGlyphCategoryId: mr,
					glyphsInSelectedCategory: Jo,
					filteredGlyphs: tn,
					isEmptyResult: Gl,
					totalPages: yr,
					currentPageGlyphs: Qo,
					currentGlyphEdit: Fn,
					normalizedEditorPath: vr,
					normalizedBaselinePath: es,
					normalizedInitialPath: ts,
					hasUnsavedChanges: br,
					getExistingKey: pt,
					getExistingOverride: wn,
					getAdditionRecord: It,
					resolvedGlyphMetrics: ns,
					isGlyphDeleted: it,
					canEditGlyph: Tn,
					canCommit: jl,
					canReset: Hl,
					lockBodyScroll: rs,
					unlockBodyScroll: xr,
					syncGlyphOperations: os,
					getOperationsSnapshot: ss,
					emitGlyphOperations: ht,
					showToolbarMessage: Ut,
					resetAddGlyphForm: is,
					openAddGlyphDialog: Cn,
					normalizedSearchQuery: Sr,
					isCategoryFiltered: Wl,
					quickAddGlyphFromSearch: zl,
					handleAddMissing: $l,
					closeAddGlyphDialog: Vl,
					getExistingNames: as,
					isGlyphNameTaken: ls,
					confirmAddGlyph: ql,
					canDeleteGlyph: Xl,
					deleteButtonLabel: Yl,
					deleteButtonIcon: Zl,
					showUndoButton: Kl,
					showDeleteInMoreInfo: Jl,
					handleDeleteAction: Ql,
					escapePathDataForAttribute: cs,
					buildTightPreviewExtents: us,
					buildGlyphPreviewRenderModel: ds,
					renderGlyphPreviewSvg: fs,
					generateSvgPath: En,
					handleSearch: ps,
					selectGlyph: ec,
					getGlyphBasePath: _r,
					getEffectivePath: kr,
					updateEditorForGlyph: Pt,
					EMPTY_PATH_BOUNDS: On,
					calculatePathBoundingBox: Wt,
					collectGlyphMetricSources: hs,
					resolveGlyphMetricsFromSources: Fr,
					buildVisualBounds: gs,
					buildPreviewExtents: ms,
					visualBoundsToExtents: tc,
					buildGlyphEditPayload: ys,
					commitGlyphEdit: nc,
					resetToOriginal: rc,
					isGlyphEdited: vs,
					focusGlyphFromOperation: bs,
					reset: Mn,
					closeEditorDialog: xs,
					roundValue: Pe,
					getGlyphHeight: Ss,
					getTopMargin: _s,
					getBottomMargin: ks,
					getGlyphCharacter: Fs,
					formatUnicodeLabel: wr,
					getRightSideBearing: ws,
					getTopSideBearing: Ts,
					totalGlyphs: oc,
					categoryCounts: Cs,
					toolbarCategories: sc,
					filteredGlyphsCount: ic,
					gridItems: ac,
					editorPreviewSvg: lc,
					editorVisualBounds: cc,
					glyphInfo: uc,
					hasSavedEdit: dc,
					ref: H,
					computed: D,
					watch: pe,
					onBeforeUnmount: Zn,
					get useI18n() {
						return ye;
					},
					GlyphToolbar: Gy,
					GlyphGrid: rv,
					GlyphPagination: xv,
					GlyphEditorDialog: Qv,
					AddGlyphDialog: vb,
					get getGlyphCodePoints() {
						return Bn;
					},
					get isBasicLatinPrintable() {
						return To;
					},
					get isCjkUnifiedIdeograph() {
						return Co;
					},
					get pickRepresentativeCodePoint() {
						return co;
					},
					get convertGlyphPathToEditorPath() {
						return rn;
					},
					get convertEditorPathToGlyphPath() {
						return Yn;
					},
					get normalizePathForComparison() {
						return on;
					},
					get getFallbackGlyphOutline() {
						return la;
					},
					get parseSvgPath() {
						return Is;
					},
					get computePathBounds() {
						return Us;
					},
				};
			return (
				Object.defineProperty(Es, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				Es
			);
		},
	},
	Bl = (e) => (Ye("data-v-23d92076"), (e = e()), Ze(), e),
	Lb = { class: "glyph-list" },
	Rb = { key: 0, class: "glyph-empty-state" },
	Bb = Bl(() =>
		g("div", { class: "empty-icon" }, [g("i", { class: "fas fa-search" })], -1),
	),
	Nb = { class: "empty-message" },
	Gb = { class: "empty-keyword" },
	jb = { class: "empty-hint" },
	Hb = Bl(() => g("i", { class: "fas fa-plus-circle" }, null, -1));
function Wb(e, t, r, n, o, s) {
	return (
		O(),
		L(
			De,
			null,
			[
				g("div", Lb, [
					Ce(
						n.GlyphToolbar,
						{
							search: n.searchQuery,
							"onUpdate:search": t[0] || (t[0] = (i) => (n.searchQuery = i)),
							category: n.selectedCategory,
							"onUpdate:category":
								t[1] || (t[1] = (i) => (n.selectedCategory = i)),
							"total-glyphs": n.totalGlyphs,
							"filtered-glyphs-count": n.filteredGlyphsCount,
							categories: n.toolbarCategories,
							"toolbar-message": n.toolbarMessage,
							onAdd: n.openAddGlyphDialog,
						},
						null,
						8,
						[
							"search",
							"category",
							"total-glyphs",
							"filtered-glyphs-count",
							"categories",
							"toolbar-message",
						],
					),
					n.isEmptyResult
						? (O(),
							L("div", Rb, [
								Bb,
								g("p", Nb, [
									n.normalizedSearchQuery
										? (O(),
											L(
												De,
												{ key: 0 },
												[
													Ge(w(n.t("no_glyphs_match")) + " ", 1),
													g(
														"span",
														Gb,
														"“" + w(n.normalizedSearchQuery) + "”",
														1,
													),
													Ge(" " + w(n.t("msg")), 1),
												],
												64,
											))
										: n.isCategoryFiltered
											? (O(),
												L(
													De,
													{ key: 1 },
													[Ge(w(n.t("no_glyphs_in_this_category_yet")), 1)],
													64,
												))
											: (O(),
												L(
													De,
													{ key: 2 },
													[
														Ge(
															w(n.t("this_font_has_no_glyphs_to_show_yet")),
															1,
														),
													],
													64,
												)),
								]),
								g("p", jb, [
									n.normalizedSearchQuery
										? (O(),
											L(
												De,
												{ key: 0 },
												[
													Ge(
														w(
															n.t(
																"you_can_add_this_character_to_the_font_directly",
															),
														),
														1,
													),
												],
												64,
											))
										: n.isCategoryFiltered
											? (O(),
												L(
													De,
													{ key: 1 },
													[
														Ge(
															w(
																n.t(
																	"try_another_category_or_add_a_new_character",
																),
															),
															1,
														),
													],
													64,
												))
											: (O(),
												L(
													De,
													{ key: 2 },
													[
														Ge(
															w(
																n.t(
																	"click_add_character_above_to_start_building_your_font",
																),
															),
															1,
														),
													],
													64,
												)),
								]),
								n.normalizedSearchQuery
									? (O(),
										L(
											"button",
											{
												key: 0,
												type: "button",
												class: "empty-action",
												onClick: n.quickAddGlyphFromSearch,
											},
											[Hb, g("span", null, w(n.t("add_this_glyph")), 1)],
										))
									: he("", !0),
							]))
						: (O(),
							L(
								De,
								{ key: 1 },
								[
									Ce(
										n.GlyphGrid,
										{
											items: n.gridItems,
											onSelect: n.selectGlyph,
											onAddMissing: n.handleAddMissing,
										},
										null,
										8,
										["items"],
									),
									Ce(
										n.GlyphPagination,
										{
											currentPage: n.currentPage,
											"onUpdate:currentPage":
												t[2] || (t[2] = (i) => (n.currentPage = i)),
											"total-pages": n.totalPages,
										},
										null,
										8,
										["currentPage", "total-pages"],
									),
								],
								64,
							)),
				]),
				Ce(
					n.GlyphEditorDialog,
					{
						visible: n.showEditorDialog,
						glyph: n.selectedGlyph,
						dialogViewMode: n.dialogViewMode,
						"onUpdate:dialogViewMode":
							t[3] || (t[3] = (i) => (n.dialogViewMode = i)),
						"can-edit-glyph": n.canEditGlyph,
						editorPath: n.editorPath,
						"onUpdate:editorPath": t[4] || (t[4] = (i) => (n.editorPath = i)),
						strokeWeightState: n.editorStrokeWeightState,
						"onUpdate:strokeWeightState":
							t[5] || (t[5] = (i) => (n.editorStrokeWeightState = i)),
						"has-unsaved-changes": n.hasUnsavedChanges,
						"has-saved-edit": n.hasSavedEdit,
						"can-commit": n.canCommit,
						"can-reset": n.canReset,
						showMoreInfo: n.showMoreInfo,
						"onUpdate:showMoreInfo":
							t[6] || (t[6] = (i) => (n.showMoreInfo = i)),
						"show-undo-button": n.showUndoButton,
						"show-delete-in-more-info": n.showDeleteInMoreInfo,
						"delete-button-label": n.deleteButtonLabel,
						"delete-button-icon": n.deleteButtonIcon,
						"can-delete-glyph": n.canDeleteGlyph,
						"preview-svg": n.editorPreviewSvg,
						"glyph-info": n.glyphInfo,
						clipboard: n.editorClipboard,
						"show-visual-bounds": !0,
						"visual-bounds": n.editorVisualBounds,
						onClose: t[7] || (t[7] = (i) => n.closeEditorDialog()),
						onCommit: n.commitGlyphEdit,
						onReset: n.resetToOriginal,
						onDelete: n.handleDeleteAction,
						onCopy: n.updateEditorClipboard,
					},
					null,
					8,
					[
						"visible",
						"glyph",
						"dialogViewMode",
						"can-edit-glyph",
						"editorPath",
						"strokeWeightState",
						"has-unsaved-changes",
						"has-saved-edit",
						"can-commit",
						"can-reset",
						"showMoreInfo",
						"show-undo-button",
						"show-delete-in-more-info",
						"delete-button-label",
						"delete-button-icon",
						"can-delete-glyph",
						"preview-svg",
						"glyph-info",
						"clipboard",
						"visual-bounds",
					],
				),
				Ce(
					n.AddGlyphDialog,
					{
						visible: n.showAddDialog,
						character: n.addGlyphForm.character,
						name: n.addGlyphForm.name,
						"use-fallback-outline": n.addGlyphForm.useFallbackOutline,
						error: n.addGlyphError,
						onClose: n.closeAddGlyphDialog,
						onConfirm: n.confirmAddGlyph,
						"onUpdate:character":
							t[8] || (t[8] = (i) => (n.addGlyphForm.character = i)),
						"onUpdate:name": t[9] || (t[9] = (i) => (n.addGlyphForm.name = i)),
						"onUpdate:useFallbackOutline":
							t[10] || (t[10] = (i) => (n.addGlyphForm.useFallbackOutline = i)),
						onCharacterInput: n.handleAddGlyphCharacterInput,
						onNameInput: n.handleAddGlyphNameInput,
					},
					null,
					8,
					["visible", "character", "name", "use-fallback-outline", "error"],
				),
			],
			64,
		)
	);
}
const zb = Le(Db, [
	["render", Wb],
	["__scopeId", "data-v-23d92076"],
]);
const Hn = 56,
	ua = 1200,
	Wn = 24,
	$b = {
		__name: "ModifiedGlyphsDialog",
		props: {
			modelValue: { type: Boolean, default: !1 },
			glyphEdits: {
				type: Object,
				default: () => ({ edits: {}, additions: {}, deletions: {} }),
			},
			currentFont: { type: Object, default: null },
		},
		emits: ["update:modelValue", "goto-glyph"],
		setup(e, { expose: t, emit: r }) {
			t();
			const n = e,
				o = r,
				{ t: s } = ye(),
				i = D({
					get: () => n.modelValue,
					set: (F) => o("update:modelValue", F),
				}),
				a = () => ({ edits: {}, additions: {}, deletions: {} }),
				l = new Map(),
				u = (F) => {
					if (F == null) return null;
					if (typeof F == "string") {
						const B = F.trim();
						if (!B) return null;
						const R = Number(B);
						return Number.isFinite(R) ? Math.trunc(R) : null;
					}
					return typeof F == "number" && Number.isFinite(F)
						? Math.trunc(F)
						: null;
				},
				d = () => {
					l.size >= ua && l.clear();
				},
				p = D(() => {
					const F = n.currentFont?.unitsPerEm;
					return Number.isFinite(F) ? Number(F) : 1e3;
				}),
				h = (F) =>
					(F ?? "")
						.toString()
						.replace(/&/g, "&amp;")
						.replace(/"/g, "&quot;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;"),
				f = (F, B = {}, R = 80) => {
					const Z = (F || "").trim();
					if (!Z) return "";
					const ie = h(Z),
						U = p.value || 1e3,
						X = (je, Y) => (Number.isFinite(je) ? Number(je) : Y),
						K = X(B.xMin, -U / 2),
						le = X(B.xMax, U / 2),
						xe = X(B.yMin, -U / 2),
						oe = X(B.yMax, U / 2),
						ue = Math.max(Math.abs(le - K), 1),
						ve = Math.max(Math.abs(oe - xe), 1),
						de = R / ue,
						me = R / ve,
						we = Math.min(de, me) * 0.8,
						Ne = R / 2,
						Re = R / 2,
						ot = (K + le) / 2,
						_t = (xe + oe) / 2;
					return `
			<svg
				width="${R}"
				height="${R}"
				viewBox="0 0 ${R} ${R}"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g transform="
					translate(${Ne}, ${Re})
					scale(${we}, ${-we})
					translate(${-ot}, ${-_t})
				">
					<path d="${ie}" fill="currentColor"/>
				</g>
			</svg>
		`;
				},
				v = (F, B = {}, R = 80) => {
					const Z = u(F.index),
						ie = u(F.unicode),
						U = F.id ?? "",
						X = (F.name || "").trim(),
						K = (F.path || "").trim(),
						le = `outline::${R}::${U}::${Z ?? ""}::${ie ?? ""}::${X}::${K}`;
					if (l.has(le)) return l.get(le);
					const xe = f(K, B, R);
					return xe && (d(), l.set(le, xe)), xe;
				},
				S = (F = 80) => {
					const R = F - 20,
						Z = 10,
						ie = 10,
						U = 10 + R,
						X = 10 + R;
					return `
			<svg
				width="${F}"
				height="${F}"
				viewBox="0 0 ${F} ${F}"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="10"
					y="10"
					width="${R}"
					height="${R}"
					rx="8"
					ry="8"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-dasharray="4 3"
				/>
				<line
					x1="${Z}"
					y1="${ie}"
					x2="${U}"
					y2="${X}"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
				/>
				<line
					x1="${U}"
					y1="${ie}"
					x2="${Z}"
					y2="${X}"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
				/>
			</svg>
		`;
				},
				b = (F) => {
					const B = n.currentFont;
					if (!B || !B.glyphs) return null;
					const R = B.glyphs.glyphs || B.glyphs;
					if (!R) return null;
					const Z = Array.isArray(R) ? R : Object.values(R),
						ie = u(F.index);
					if (ie !== null && ie >= 0 && ie < Z.length) {
						const K = Z[ie];
						if (K) return K;
					}
					const U = u(F.unicode);
					if (U !== null) {
						try {
							if (typeof B.charToGlyph == "function") {
								const K = String.fromCodePoint(U),
									le = B.charToGlyph(K);
								if (le && Number.isInteger(le.unicode) && le.unicode === U)
									return le;
							}
						} catch (K) {
							console.warn("根据 Unicode 查找删除字形失败:", K);
						}
						for (const K of Z)
							if (Number.isInteger(K?.unicode) && K.unicode === U) return K;
					}
					const X = (F.name || "").trim();
					if (X) {
						for (const K of Z) if ((K?.name || "").trim() === X) return K;
					}
					return null;
				},
				I = (F, B = 80) => {
					const R = b(F);
					if (!R || !R.path || typeof R.path.toPathData != "function")
						return S(B);
					try {
						const Z = R.path.toPathData();
						return f(Z, R, B);
					} catch (Z) {
						return console.warn("生成删除字形预览失败:", Z), S(B);
					}
				},
				P = (F, B = 80) => {
					const R = u(F.index),
						Z = u(F.unicode),
						ie = (F.name || "").trim(),
						U = `delete::${B}::${R ?? ""}::${Z ?? ""}::${ie}`;
					if (l.has(U)) return l.get(U);
					const X = I(F, B);
					return X && (d(), l.set(U, X)), X;
				},
				M = (F) =>
					Number.isFinite(F)
						? `U+${Number(F).toString(16).toUpperCase().padStart(4, "0")}`
						: s("none"),
				j = (F, B = "") => {
					if (Number.isFinite(F))
						try {
							return String.fromCodePoint(Number(F));
						} catch {
							return B || s("no_codepoint");
						}
					return B || s("no_codepoint");
				},
				re = D(() => {
					const F = n.glyphEdits || a(),
						B = [],
						R = F.edits || {},
						Z = F.additions || {},
						ie = F.deletions || {};
					return (
						Object.values(Z).forEach((U) => {
							const X = u(U.unicode),
								K = j(X, U.character || "");
							B.push({
								id: `add-${U.id || U.unicode || Math.random().toString(16).slice(2)}`,
								type: "add",
								character: K,
								unicode: X,
								index: null,
								additionId: U.id ?? null,
								unicodeLabel: M(X),
								name: U.name || s("added_glyph"),
								preview: v(U, U, Hn),
							});
						}),
						Object.values(R).forEach((U) => {
							const X = u(U.unicode),
								K = j(X, "");
							B.push({
								id: `edit-${U.index ?? U.unicode ?? Math.random().toString(16).slice(2)}`,
								type: "edit",
								character: K,
								unicode: X,
								index: u(U.index),
								additionId: null,
								unicodeLabel: M(X),
								name: U.name || s("edited_glyphs"),
								preview: v(U, U, Hn),
							});
						}),
						Object.values(ie).forEach((U) => {
							const X = u(U.unicode),
								K = j(X, "");
							B.push({
								id: `delete-${U.index ?? U.unicode ?? U.name ?? Math.random().toString(16).slice(2)}`,
								type: "delete",
								character: K,
								unicode: X,
								index: u(U.index),
								additionId: null,
								unicodeLabel: M(X),
								name: U.name || s("delete_glyph"),
								preview: P(U, Hn),
							});
						}),
						B
					);
				}),
				_ = H(1),
				k = D(() => {
					const F = re.value.length;
					return F ? Math.max(1, Math.ceil(F / Wn)) : 1;
				}),
				C = D(() => {
					const F = k.value;
					if (!F) return [];
					const R = (Math.min(Math.max(_.value, 1), F) - 1) * Wn,
						Z = R + Wn;
					return re.value.slice(R, Z);
				}),
				N = (F) => {
					const B = k.value;
					if (!B) return;
					const R = Math.min(Math.max(F, 1), B);
					_.value = R;
				},
				ae = () => {
					N(_.value - 1);
				},
				ee = () => {
					N(_.value + 1);
				},
				T = (F) => {
					F &&
						o("goto-glyph", {
							type: F.type,
							index: F.index ?? null,
							unicode: F.unicode ?? null,
							additionId: F.additionId ?? null,
							name: F.name || "",
						});
				};
			pe(
				() => n.glyphEdits,
				() => {
					l.clear();
				},
				{ deep: !0 },
			),
				pe(
					() => n.currentFont,
					() => {
						l.clear();
					},
				),
				pe(
					() => n.modelValue,
					(F) => {
						F && (_.value = 1);
					},
				);
			const z = {
				props: n,
				emit: o,
				t: s,
				visible: i,
				createEmptyGlyphOperations: a,
				MODIFIED_GLYPH_PREVIEW_SIZE: Hn,
				previewCache: l,
				PREVIEW_CACHE_LIMIT: ua,
				normalizeIntegerLike: u,
				trimPreviewCacheIfNeeded: d,
				fontUnitsPerEm: p,
				escapePathDataForAttribute: h,
				createGlyphOutlinePreview: f,
				getOutlinePreviewFromCache: v,
				createDeletionPlaceholderPreview: S,
				findGlyphForDeletion: b,
				createDeletionPreview: I,
				getDeletionPreviewFromCache: P,
				formatUnicodeLabel: M,
				getGlyphCharacter: j,
				modifiedGlyphs: re,
				modifiedGlyphsPage: _,
				modifiedGlyphsPageSize: Wn,
				modifiedGlyphsTotalPages: k,
				pagedModifiedGlyphs: C,
				goToModifiedGlyphsPage: N,
				goPrevModifiedGlyphsPage: ae,
				goNextModifiedGlyphsPage: ee,
				handleGlyphClick: T,
				computed: D,
				ref: H,
				watch: pe,
				get useI18n() {
					return ye;
				},
				Dialog: fa,
			};
			return (
				Object.defineProperty(z, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				z
			);
		},
	},
	Vb = { class: "modified-glyphs-dialog" },
	qb = { class: "modified-glyphs-title" },
	Xb = { class: "modified-glyphs-subtitle" },
	Yb = { key: 0, class: "modified-glyphs-empty" },
	Zb = { key: 1 },
	Kb = { class: "modified-glyphs-grid" },
	Jb = ["onClick"],
	Qb = ["innerHTML"],
	ex = { class: "modified-glyph-meta" },
	tx = { class: "modified-glyph-char" },
	nx = { class: "modified-glyph-info-row" },
	rx = { class: "modified-glyph-unicode" },
	ox = { class: "modified-glyph-name" },
	sx = { key: 0, class: "modified-glyphs-pagination" },
	ix = ["disabled"],
	ax = { class: "modified-glyphs-page-info" },
	lx = ["disabled"];
function cx(e, t, r, n, o, s) {
	return (
		O(),
		bt(
			n.Dialog,
			{
				modelValue: n.visible,
				"onUpdate:modelValue": t[2] || (t[2] = (i) => (n.visible = i)),
				"max-width": 760,
				"full-screen-in-mobile": !0,
			},
			{
				default: ut(() => [
					g("div", Vb, [
						g(
							"h3",
							qb,
							w(n.t("edited_glyphs")) +
								"（" +
								w(n.modifiedGlyphs.length) +
								"） ",
							1,
						),
						g(
							"p",
							Xb,
							w(
								n.t(
									"shows_all_edited_glyph_outlines_that_will_be_exported_including_added_modified_and_deleted_glyphs",
								),
							),
							1,
						),
						n.modifiedGlyphs.length
							? (O(),
								L("div", Zb, [
									g("div", Kb, [
										(O(!0),
										L(
											De,
											null,
											jt(
												n.pagedModifiedGlyphs,
												(i) => (
													O(),
													L(
														"div",
														{
															key: i.id,
															class: "modified-glyph-item",
															onClick: (a) => n.handleGlyphClick(i),
														},
														[
															g(
																"span",
																{
																	class: We([
																		"modified-glyph-status",
																		[
																			i.type === "add"
																				? "status-add"
																				: i.type === "delete"
																					? "status-delete"
																					: "status-edit",
																		],
																	]),
																},
																w(
																	i.type === "add"
																		? n.t("add")
																		: i.type === "delete"
																			? n.t("delete")
																			: n.t("edit"),
																),
																3,
															),
															g(
																"div",
																{
																	class: "modified-glyph-preview",
																	innerHTML: i.preview,
																},
																null,
																8,
																Qb,
															),
															g("div", ex, [
																g("div", tx, w(i.character), 1),
																g("div", nx, [
																	g("span", rx, w(i.unicodeLabel), 1),
																	g("span", ox, w(i.name), 1),
																]),
															]),
														],
														8,
														Jb,
													)
												),
											),
											128,
										)),
									]),
									n.modifiedGlyphsTotalPages > 1
										? (O(),
											L("div", sx, [
												g(
													"button",
													{
														type: "button",
														class: "modified-glyphs-page-btn",
														disabled: n.modifiedGlyphsPage <= 1,
														onClick:
															t[0] ||
															(t[0] = (i) => n.goPrevModifiedGlyphsPage()),
													},
													w(n.t("previous")),
													9,
													ix,
												),
												g(
													"span",
													ax,
													w(
														n.t("page_page_of_total", {
															page: n.modifiedGlyphsPage,
															total: n.modifiedGlyphsTotalPages,
														}),
													) +
														" " +
														w(
															n.t("edited_count_glyphs", {
																count: n.modifiedGlyphs.length,
															}),
														),
													1,
												),
												g(
													"button",
													{
														type: "button",
														class: "modified-glyphs-page-btn",
														disabled:
															n.modifiedGlyphsPage >=
															n.modifiedGlyphsTotalPages,
														onClick:
															t[1] ||
															(t[1] = (i) => n.goNextModifiedGlyphsPage()),
													},
													w(n.t("next")),
													9,
													lx,
												),
											]))
										: he("", !0),
								]))
							: (O(), L("div", Yb, w(n.t("no_edited_glyphs")), 1)),
					]),
				]),
				_: 1,
			},
			8,
			["modelValue"],
		)
	);
}
const ux = Le($b, [
	["render", cx],
	["__scopeId", "data-v-ebd7a243"],
]);
const vt = 32,
	da = 200,
	dx = {
		__name: "ModifiedGlyphsPreview",
		props: {
			glyphEdits: { type: Object, default: () => ({}) },
			currentFont: { type: Object, default: null },
			glyphEditCount: { type: Number, default: 0 },
			maxPreviewItems: { type: Number, default: 6 },
		},
		emits: ["open"],
		setup(e, { expose: t, emit: r }) {
			t();
			const { t: n } = ye(),
				o = e,
				s = r,
				i = new Map(),
				a = D(() => Number(o.glyphEditCount) > 0),
				l = D(() => {
					const _ = o.currentFont?.unitsPerEm;
					return Number.isFinite(_) ? Number(_) : 1e3;
				}),
				u = (_) => {
					if (_ == null) return null;
					if (typeof _ == "string") {
						const k = _.trim();
						if (!k) return null;
						const C = Number(k);
						return Number.isFinite(C) ? Math.trunc(C) : null;
					}
					return typeof _ == "number" && Number.isFinite(_)
						? Math.trunc(_)
						: null;
				},
				d = (_, k = "") => {
					if (Number.isFinite(_))
						try {
							return String.fromCodePoint(Number(_));
						} catch {
							return k || "";
						}
					return k || "";
				},
				p = () => {
					i.size >= da && i.clear();
				},
				h = (_) =>
					(_ ?? "")
						.toString()
						.replace(/&/g, "&amp;")
						.replace(/"/g, "&quot;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;"),
				f = (_, k = {}, C = vt) => {
					const N = (_ || "").trim();
					if (!N) return "";
					const ae = h(N),
						ee = l.value || 1e3,
						T = (ve, de) => (Number.isFinite(ve) ? Number(ve) : de),
						z = T(k.xMin, -ee / 2),
						F = T(k.xMax, ee / 2),
						B = T(k.yMin, -ee / 2),
						R = T(k.yMax, ee / 2),
						Z = Math.max(Math.abs(F - z), 1),
						ie = Math.max(Math.abs(R - B), 1),
						U = C / Z,
						X = C / ie,
						K = Math.min(U, X) * 0.8,
						le = C / 2,
						xe = C / 2,
						oe = (z + F) / 2,
						ue = (B + R) / 2;
					return `
			<svg
				width="${C}"
				height="${C}"
				viewBox="0 0 ${C} ${C}"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g transform="
					translate(${le}, ${xe})
					scale(${K}, ${-K})
					translate(${-oe}, ${-ue})
				">
					<path d="${ae}" fill="currentColor"/>
				</g>
			</svg>
		`;
				},
				v = (_, k = {}, C = vt) => {
					const N = u(_?.index),
						ae = u(_?.unicode),
						ee = _?.id ?? "",
						T = (_?.name || "").trim(),
						z = (_?.path || "").trim(),
						F = `mini-outline::${C}::${ee}::${N ?? ""}::${ae ?? ""}::${T}::${z}`;
					if (i.has(F)) return i.get(F);
					const B = f(z, k, C);
					return B && (p(), i.set(F, B)), B;
				},
				S = (_ = vt) => {
					const C = _ - 12,
						N = 6,
						ae = 6,
						ee = 6 + C,
						T = 6 + C;
					return `
			<svg
				width="${_}"
				height="${_}"
				viewBox="0 0 ${_} ${_}"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="6"
					y="6"
					width="${C}"
					height="${C}"
					rx="6"
					ry="6"
					fill="none"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-dasharray="4 3"
				/>
				<line
					x1="${N}"
					y1="${ae}"
					x2="${ee}"
					y2="${T}"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
				/>
				<line
					x1="${ee}"
					y1="${ae}"
					x2="${N}"
					y2="${T}"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
				/>
			</svg>
		`;
				},
				b = (_) => {
					const k = o.currentFont;
					if (!k || !k.glyphs) return null;
					const C = k.glyphs.glyphs || k.glyphs;
					if (!C) return null;
					const N = Array.isArray(C) ? C : Object.values(C),
						ae = u(_?.index);
					if (ae !== null && ae >= 0 && ae < N.length) {
						const z = N[ae];
						if (z) return z;
					}
					const ee = u(_?.unicode);
					if (ee !== null) {
						try {
							if (typeof k.charToGlyph == "function") {
								const z = String.fromCodePoint(ee),
									F = k.charToGlyph(z);
								if (F && Number.isInteger(F.unicode) && F.unicode === ee)
									return F;
							}
						} catch (z) {
							console.warn("根据 Unicode 查找删除字形失败:", z);
						}
						for (const z of N)
							if (Number.isInteger(z?.unicode) && z.unicode === ee) return z;
					}
					const T = (_?.name || "").trim();
					if (T) {
						for (const z of N) if ((z?.name || "").trim() === T) return z;
					}
					return null;
				},
				I = (_, k = vt) => {
					const C = b(_ || {});
					if (!C || !C.path || typeof C.path.toPathData != "function")
						return S(k);
					try {
						const N = C.path.toPathData();
						return f(N, C, k);
					} catch (N) {
						return console.warn("生成删除字形预览失败:", N), S(k);
					}
				},
				P = (_, k = vt) => {
					const C = u(_?.index),
						N = u(_?.unicode),
						ae = (_?.name || "").trim(),
						ee = `mini-delete::${k}::${C ?? ""}::${N ?? ""}::${ae}`;
					if (i.has(ee)) return i.get(ee);
					const T = I(_, k);
					return T && (p(), i.set(ee, T)), T;
				},
				M = D(() => {
					if (!a.value) return [];
					const _ = o.glyphEdits || {},
						k = [],
						C = Math.max(1, Number(o.maxPreviewItems) || 6),
						N = (T) => {
							if (!T || k.length >= C) return;
							const z = u(T.unicode),
								F = d(z, T.character || "") || "·";
							k.push({
								id: `mini-add-${T.id || T.unicode || Math.random().toString(16).slice(2)}`,
								type: "add",
								char: F,
								preview: v(T, T, vt),
							});
						},
						ae = (T) => {
							if (!T || k.length >= C) return;
							const z = u(T.unicode),
								F = d(z, "") || "·";
							k.push({
								id: `mini-edit-${T.index ?? T.unicode ?? Math.random().toString(16).slice(2)}`,
								type: "edit",
								char: F,
								preview: v(T, T, vt),
							});
						},
						ee = (T) => {
							if (!T || k.length >= C) return;
							const z = u(T.unicode),
								F = d(z, "□") || "□";
							k.push({
								id: `mini-delete-${T.index ?? T.unicode ?? T.name ?? Math.random().toString(16).slice(2)}`,
								type: "delete",
								char: F,
								preview: P(T, vt),
							});
						};
					return (
						Object.values(_.additions || {}).forEach((T) => N(T)),
						Object.values(_.edits || {}).forEach((T) => ae(T)),
						Object.values(_.deletions || {}).forEach((T) => ee(T)),
						k
					);
				}),
				re = {
					t: n,
					MINI_MODIFIED_PREVIEW_SIZE: vt,
					MINI_PREVIEW_CACHE_LIMIT: da,
					props: o,
					emit: s,
					miniPreviewCache: i,
					hasGlyphEdits: a,
					fontUnitsPerEm: l,
					normalizeIntegerLike: u,
					getGlyphCharacter: d,
					trimMiniPreviewCacheIfNeeded: p,
					escapePathDataForAttribute: h,
					createGlyphOutlinePreview: f,
					getOutlinePreviewFromCache: v,
					createDeletionPlaceholderPreview: S,
					findGlyphForDeletion: b,
					createDeletionPreview: I,
					getDeletionPreviewFromCache: P,
					previewItems: M,
					handleClick: () => {
						a.value && s("open");
					},
					computed: D,
					get useI18n() {
						return ye;
					},
				};
			return (
				Object.defineProperty(re, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				re
			);
		},
	},
	fx = { class: "modified-preview-header" },
	px = { class: "modified-preview-label" },
	hx = { class: "modified-preview-status" },
	gx = { class: "modified-preview-status-text" },
	mx = { key: 0, class: "modified-preview-row" },
	yx = ["innerHTML"],
	vx = { key: 1, class: "modified-preview-fallback" },
	bx = { key: 0, class: "modified-preview-more" };
function xx(e, t, r, n, o, s) {
	return n.hasGlyphEdits
		? (O(),
			L(
				"div",
				{
					key: 0,
					class: We([
						"modified-preview",
						{ "modified-preview--clickable": n.hasGlyphEdits },
					]),
					onClick: n.handleClick,
				},
				[
					g("div", fx, [
						g("span", px, w(n.t("edited_glyphs")), 1),
						g("div", hx, [
							g(
								"span",
								gx,
								w(n.t("count_glyphs", { count: r.glyphEditCount })),
								1,
							),
						]),
					]),
					n.previewItems.length
						? (O(),
							L("div", mx, [
								(O(!0),
								L(
									De,
									null,
									jt(
										n.previewItems,
										(i) => (
											O(),
											L("div", { key: i.id, class: "modified-preview-item" }, [
												i.preview
													? (O(),
														L(
															"div",
															{
																key: 0,
																class: "modified-preview-thumb",
																innerHTML: i.preview,
															},
															null,
															8,
															yx,
														))
													: (O(), L("div", vx, w(i.char), 1)),
											])
										),
									),
									128,
								)),
								r.glyphEditCount > n.previewItems.length
									? (O(), L("span", bx, " … "))
									: he("", !0),
							]))
						: he("", !0),
				],
				2,
			))
		: he("", !0);
}
const Sx = Le(dx, [
		["render", xx],
		["__scopeId", "data-v-002ef42d"],
	]),
	_x = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);
function kx() {
	const e = typeof Worker < "u";
	let t = !1;
	try {
		typeof WebAssembly == "object" &&
			typeof WebAssembly.instantiate == "function" &&
			(t = new WebAssembly.Module(_x) instanceof WebAssembly.Module);
	} catch {
		t = !1;
	}
	return { hasDedicatedWorker: e, hasWebAssembly: t, isSupported: e && t };
}
const Fx = () =>
		typeof URL < "u" && typeof URL.createObjectURL == "function"
			? URL
			: typeof window < "u" &&
					typeof window.webkitURL == "object" &&
					typeof window.webkitURL.createObjectURL == "function"
				? window.webkitURL
				: null,
	wx = (e) => {
		if (typeof Worker > "u" || typeof Blob > "u" || !e) return !1;
		let t = null,
			r = null;
		try {
			const n = new Blob(["self.onmessage = () => {}"], {
				type: "application/javascript",
			});
			(r = e.createObjectURL(n)), (t = new Worker(r));
			const o = new ArrayBuffer(1);
			return t.postMessage(o, [o]), t.terminate(), o.byteLength === 0;
		} catch {
			return !1;
		} finally {
			r && typeof e.revokeObjectURL == "function" && e.revokeObjectURL(r);
		}
	},
	Tx = (e) => {
		if (typeof Worker > "u" || typeof Blob > "u" || !e) return !1;
		let t = null,
			r = null;
		try {
			const n = new Blob(["self.onmessage = () => {}"], {
				type: "application/javascript",
			});
			return (
				(r = e.createObjectURL(n)),
				(t = new Worker(r, { type: "module" })),
				t.terminate(),
				!0
			);
		} catch {
			return !1;
		} finally {
			r && typeof e.revokeObjectURL == "function" && e.revokeObjectURL(r);
		}
	};
function Cx() {
	const e = typeof Worker < "u";
	if (!e) return { hasDedicatedWorker: !1, transferable: !1, moduleWorker: !1 };
	const t = Fx(),
		r = wx(t),
		n = Tx(t);
	return { hasDedicatedWorker: e, transferable: r, moduleWorker: n };
}
const Ex = {
	hasWebAssembly: !1,
	hasDedicatedWorker: !1,
	transferable: !1,
	moduleWorker: !1,
	isSupported: !1,
};
function Eo() {
	try {
		const e = kx(),
			t = Cx();
		return {
			hasWebAssembly: e.hasWebAssembly,
			hasDedicatedWorker: e.hasDedicatedWorker,
			transferable: t.transferable,
			moduleWorker: t.moduleWorker,
			isSupported:
				e.hasWebAssembly &&
				e.hasDedicatedWorker &&
				t.transferable &&
				t.moduleWorker,
		};
	} catch (e) {
		return console.warn("字体编辑器兼容性检测失败:", e), { ...Ex };
	}
}
const Ox = {
		__name: "CompatibilityNotice",
		props: { compatibility: { type: Object, default: null } },
		setup(e, { expose: t }) {
			t();
			const r = e,
				n = H(r.compatibility),
				o = H(!1),
				s = H([]),
				{ t: i, locale: a } = ye(),
				l = {
					webAssembly: "compatibility_feature_webassembly",
					worker: "compatibility_feature_worker",
					transferable: "compatibility_feature_transferable",
					moduleWorker: "compatibility_feature_module_worker",
				},
				u = (v) => {
					if (!v) {
						(o.value = !1), (s.value = []);
						return;
					}
					const S = [];
					v.hasWebAssembly || S.push("webAssembly"),
						v.hasDedicatedWorker || S.push("worker"),
						v.transferable || S.push("transferable"),
						v.moduleWorker || S.push("moduleWorker"),
						(s.value = S),
						(o.value = !v.isSupported && S.length > 0);
				};
			pe(
				() => r.compatibility,
				(v) => {
					v && (n.value = v);
				},
				{ immediate: !0 },
			),
				an(() => {
					n.value || (n.value = Eo());
				}),
				pe(
					() => n.value,
					(v) => u(v),
					{ immediate: !0 },
				);
			const d = D(() => {
					if (typeof Intl > "u" || typeof Intl.ListFormat > "u") return null;
					try {
						return new Intl.ListFormat(a.value, {
							style: "long",
							type: "conjunction",
						});
					} catch {
						return null;
					}
				}),
				p = (v) => {
					const S = d.value;
					if (S && v.length > 0) return S.format(v);
					const b = (a.value || "").startsWith("zh") ? "、" : ", ";
					return v.join(b);
				},
				h = D(() =>
					p(s.value.map((v) => i(l[v] || "compatibility_feature_required"))),
				),
				f = {
					props: r,
					compatibilityState: n,
					showNotice: o,
					missingFeatures: s,
					t: i,
					locale: a,
					friendlyLabelKeys: l,
					refreshNotice: u,
					listFormatter: d,
					formatFriendlyLabels: p,
					missingSummary: h,
					ref: H,
					computed: D,
					watch: pe,
					onMounted: an,
					get useI18n() {
						return ye;
					},
					get getFontEditorCompatibility() {
						return Eo;
					},
				};
			return (
				Object.defineProperty(f, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				f
			);
		},
	},
	Mx = (e) => (Ye("data-v-bec18a1d"), (e = e()), Ze(), e),
	Ix = { key: 0, class: "compat-notice" },
	Ux = Mx(() =>
		g(
			"i",
			{ class: "fas fa-circle-info notice-icon", "aria-hidden": "true" },
			null,
			-1,
		),
	),
	Px = { class: "notice-content" },
	Ax = { class: "notice-text" },
	Dx = { class: "missing" },
	Lx = { class: "notice-hint" };
function Rx(e, t, r, n, o, s) {
	return n.showNotice
		? (O(),
			L("div", Ix, [
				Ux,
				g("div", Px, [
					g("p", Ax, [
						Ge(w(n.t("compatibility_notice_missing_prefix")), 1),
						g("span", Dx, w(n.missingSummary), 1),
						Ge(w(n.t("compatibility_notice_missing_suffix")), 1),
					]),
					g("p", Lx, w(n.t("compatibility_notice_upgrade_hint")), 1),
				]),
			]))
		: he("", !0);
}
const Bx = Le(Ox, [
	["render", Rx],
	["__scopeId", "data-v-bec18a1d"],
]);
let Zt = null;
function Nx() {
	return (
		Zt ||
			(Zt = new Worker(
				new URL("./assets/fontWorker-9a6da9d4.js", self.location),
				{ type: "module" },
			)),
		Zt
	);
}
function Gx() {
	Zt && (Zt.terminate(), (Zt = null));
}
function jx(e, t, r) {
	return new Promise((n, o) => {
		const s = Nx(),
			i = (l) => {
				const { type: u, blobUrl: d, error: p, needsCleanup: h } = l.data;
				u === "complete"
					? n({ blobUrl: d, needsCleanup: h })
					: u === "error" && o(p),
					s.removeEventListener("message", i),
					s.removeEventListener("error", a);
			},
			a = (l) => {
				o(l),
					s.removeEventListener("message", i),
					s.removeEventListener("error", a);
			};
		s.addEventListener("message", i),
			s.addEventListener("error", a),
			s.postMessage({ arrayBuffer: e, fontInfo: t, glyphEdits: r }, [e]);
	});
}
typeof globalThis < "u" &&
	(typeof globalThis.structuredClone != "function" ||
		globalThis.structuredClone === void 0) &&
	(globalThis.structuredClone = function (t) {
		return JSON.parse(JSON.stringify(t));
	});
const Hx = vc({
		__name: "index",
		props: { initialLocale: { type: String, default: void 0 } },
		setup(e, { expose: t }) {
			t();
			const r = e,
				{ t: n, locale: o } = ye();
			Fc(r.initialLocale) && (o.value = r.initialLocale);
			const s = () => ({ edits: {}, additions: {}, deletions: {} }),
				i = (Y) =>
					JSON.parse(
						JSON.stringify({
							edits: Y?.edits || {},
							additions: Y?.additions || {},
							deletions: Y?.deletions || {},
						}),
					),
				a = (Y) =>
					JSON.stringify({
						edits: Y?.edits || {},
						additions: Y?.additions || {},
						deletions: Y?.deletions || {},
					}),
				l = H({ show: !1, message: "", type: "", timer: null }),
				u = (Y, _e = "info") => {
					l.value.timer && clearTimeout(l.value.timer),
						(l.value = {
							show: !0,
							message: Y,
							type: _e,
							timer: setTimeout(() => {
								l.value.show = !1;
							}, 3e3),
						});
				},
				d = () => {
					l.value.timer && clearTimeout(l.value.timer), (l.value.show = !1);
				},
				p = H(null),
				h = H(null),
				f = H(null),
				v = H(null),
				S = H(null),
				b = H(null),
				I = H(!1),
				P = H(s()),
				M = H(s()),
				j = (Y) => {
					const _e = (Y && Er[Y] ? Y : null) || As;
					return (
						Er[_e]?.default_preview_text || Er[As]?.default_preview_text || ""
					);
				},
				re = H(32),
				_ = H(j(o.value)),
				k = H(!1),
				C = H(null),
				N = H(!0);
			pe(o, (Y, _e) => {
				const Ke = j(_e);
				(!_.value || _.value === Ke) && (_.value = j(Y));
			});
			const ae = H(!1),
				ee = H(""),
				T = H(""),
				z = H(0),
				// 兼容性检测结果只用于界面提示，不再直接禁用保存按钮：
				// 若把 !N.value 计入禁用条件，探测一旦误判按钮就会被禁用，
				// handleSaveClick 里针对“浏览器不支持”的提示分支也随之成为死代码，表现为点击完全无反应
				F = D(() => (!f.value ? !0 : I.value)),
				B = D(() => {
					const Y = P.value || s(),
						_e = Object.keys(Y.edits || {}).length,
						Ke = Object.keys(Y.additions || {}).length,
						He = Object.keys(Y.deletions || {}).length;
					return _e + Ke + He;
				}),
				R = D(() => {
					if (!v.value || !S.value) return !1;
					try {
						return JSON.stringify(v.value) !== JSON.stringify(S.value);
					} catch (Y) {
						return console.warn("字体信息对比失败:", Y), !0;
					}
				}),
				Z = D(() => {
					try {
						return a(P.value) !== a(M.value);
					} catch (Y) {
						return console.warn("字形修改对比失败:", Y), !0;
					}
				}),
				ie = () => {
					B.value && (k.value = !0);
				},
				U = async (Y) => {
					Y &&
						((ot.value = "glyphs"),
						await ho(),
						h.value &&
							typeof h.value.focusGlyphFromOperation == "function" &&
							h.value.focusGlyphFromOperation(Y));
				},
				X = D(() => R.value || Z.value),
				K = (Y) => {
					if (X.value)
						return (
							Y.preventDefault(),
							(Y.returnValue = n("unsaved_changes_detected_leave_this_page")),
							Y.returnValue
						);
				},
				le = async (Y) => {
					const _e = Y.target.files[0];
					_e && (await oe(_e));
				},
				xe = async (Y) => {
					const _e = Y.dataTransfer.files[0];
					_e && (await oe(_e));
				},
				oe = async (Y) => {
					if (!/\.ttf$|\.otf$/i.test(Y?.name || "")) {
						u(
							n(
								"sorry_we_couldnt_load_this_font_make_sure_its_a_valid_ttf_otf_or_woff_file",
							),
							"error",
						);
						return;
					}
					we();
					const Ke = ia(Y, n);
					if (Ke) {
						u(Ke, "error");
						return;
					}
					try {
						const He = await sa(Y),
							st = await p0.parse(He, { lowMemory: !1 });
						if (!st?.names) throw new Error(n("invalid_font_file"));
						(f.value = Y), (b.value = st);
						const kt = g0(st);
						(v.value = kt),
							(S.value = JSON.parse(JSON.stringify(kt))),
							(P.value = s()),
							(M.value = s()),
							(He.length = 0);
					} catch (He) {
						console.error("字体读取失败 - 详细错误信息:", {
							message: He.message,
							stack: He.stack,
							name: He.name,
							error: He,
						}),
							(ee.value = n("font_file_failed_to_load")),
							(T.value = n(
								"sorry_we_couldnt_load_this_font_make_sure_its_a_valid_ttf_otf_or_woff_file",
							)),
							(ae.value = !0),
							we();
					}
				},
				ue = (Y) => {
					v.value = Y;
				},
				ve = (Y) => {
					P.value = i(Y);
				},
				de = async () => {
					if (!f.value || !v.value) return !1;
					const Y = ia(f.value, n);
					if (Y) return u(Y, "error"), !1;
					I.value = !0;
					try {
						const _e = await sa(f.value),
							Ke = m0(_e),
							He = v0(v.value),
							st = b0(P.value),
							{ blobUrl: kt, needsCleanup: kn } = await jx(Ke, He, st),
							Be = b.value?.outlinesFormat === "cff";
						let Mt = f.value.name;
						return (
							Be && (Mt = Mt.replace(/\.(otf|ttf|woff2?)$/i, "") + ".ttf"),
							await y0(kt, Mt),
							kn && setTimeout(() => URL.revokeObjectURL(kt), 3e3),
							!0
						);
					} catch (_e) {
						return (
							console.error("字体保存失败:", _e),
							u(_e.message || n("failed_to_save_font_please_retry"), "error"),
							!1
						);
					} finally {
						I.value = !1;
					}
				},
				me = async () => {
					if (!f.value)
						return u(n("upload_a_font_before_saving"), "warning"), !1;
					if (!N.value)
						return (
							u(
								n(
									"your_browser_cannot_save_fonts_please_switch_to_the_latest_chrome_firefox_safari_or_edge",
								),
								"warning",
							),
							!1
						);
					if (!v.value)
						return (
							u(
								n("font_info_is_still_loading_please_try_again_later"),
								"warning",
							),
							!1
						);
					if (I.value) return !1;
					const Y = await de();
					return (
						Y &&
							((S.value = JSON.parse(JSON.stringify(v.value))),
							(M.value = i(P.value))),
						Y
					);
				},
				we = () => {
					if (
						((f.value = null),
						(v.value = null),
						(P.value = s()),
						(S.value = null),
						(M.value = s()),
						b.value &&
							((b.value.glyphs.glyphs = null),
							(b.value.glyphs = null),
							(b.value.tables = null),
							(b.value = null)),
						p.value && (p.value.value = ""),
						z.value++,
						window.gc)
					)
						try {
							window.gc();
						} catch {
							console.log("Manual GC not available");
						}
				},
				Ne = () => {
					p.value.click();
				},
				Re = async () => {
					if (I.value) {
						u(n("font_is_exporting_please_wait_before_leaving"), "info");
						return;
					}
					if (!f.value) {
						we();
						return;
					}
					if (X.value) {
						window.confirm(n("unsaved_changes_detected_exit_anyway")) && we();
						return;
					}
					we();
				};
			an(() => {
				window.addEventListener("beforeunload", K);
				const Y = Eo();
				(C.value = Y), (N.value = Y.isSupported);
			}),
				Gt(() => {
					window.removeEventListener("beforeunload", K), we(), Gx();
				});
			const ot = H("glyphs"),
				je = {
					props: r,
					t: n,
					locale: o,
					createEmptyGlyphOperations: s,
					cloneGlyphOperations: i,
					serializeGlyphOperations: a,
					notification: l,
					showStatus: u,
					closeNotification: d,
					fileInput: p,
					glyphListRef: h,
					fontFile: f,
					fontInfo: v,
					initialFontInfo: S,
					currentFont: b,
					isProcessing: I,
					glyphEdits: P,
					savedGlyphEdits: M,
					getDefaultPreviewText: j,
					previewSize: re,
					customPreviewText: _,
					showModifiedGlyphsDialog: k,
					compatibilityDetails: C,
					isBrowserSupported: N,
					showErrorDialog: ae,
					errorDialogTitle: ee,
					errorDialogMessage: T,
					fontCacheKey: z,
					isSaveDisabled: F,
					glyphEditCount: B,
					fontInfoChanged: R,
					glyphEditsChanged: Z,
					openModifiedGlyphsDialog: ie,
					handleGotoGlyphFromDialog: U,
					hasUnsavedChanges: X,
					handleBeforeUnload: K,
					handleFileChange: le,
					handleDrop: xe,
					processFile: oe,
					updateFontInfo: ue,
					updateGlyphEdits: ve,
					saveFontInfo: de,
					handleSaveClick: me,
					clearAll: we,
					triggerFileInput: Ne,
					handleExitEdit: Re,
					currentTab: ot,
					tabs: [
						{ value: "glyphs", label: "glyph_list" },
						{ value: "en", label: "english_metadata" },
						{ value: "zh", label: "chinese_metadata" },
					],
					FontInfoForm: tm,
					FontPreview: Em,
					FileInfo: Rm,
					UploadZone: Xm,
					Header: ly,
					ProgressBar: xy,
					Notification: Sc,
					GlyphList: zb,
					ModifiedGlyphsDialog: ux,
					ModifiedGlyphsPreview: Sx,
					FontEditorCompatibilityNotice: Bx,
					Dialog: fa,
				};
			return (
				Object.defineProperty(je, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				je
			);
		},
	}),
	Yo = (e) => (Ye("data-v-03158bdb"), (e = e()), Ze(), e),
	Wx = { class: "font-editor" },
	zx = { key: 0, class: "browser-compatibility-notice" },
	$x = { key: 1, class: "editor-main" },
	Vx = { class: "preview-panel" },
	qx = { class: "edit-panel" },
	Xx = { class: "language-tabs" },
	Yx = ["onClick"],
	Zx = { class: "loading-placeholder" },
	Kx = Yo(() => g("i", { class: "fas fa-spinner fa-spin" }, null, -1)),
	Jx = { key: 2, class: "export-toolbar" },
	Qx = { class: "toolbar-inner" },
	e1 = { class: "toolbar-meta" },
	t1 = ["title"],
	n1 = Yo(() => g("i", { class: "fas fa-file-signature" }, null, -1)),
	r1 = ["title"],
	o1 = { class: "toolbar-actions" },
	s1 = { key: 0, class: "toolbar-hint" },
	i1 = ["disabled"],
	a1 = { key: 0, class: "fas fa-save" },
	l1 = { key: 1, class: "fas fa-spinner fa-spin" },
	c1 = { class: "error-dialog" },
	u1 = Yo(() =>
		g(
			"div",
			{ class: "error-dialog-icon" },
			[g("i", { class: "fas fa-exclamation-triangle" })],
			-1,
		),
	),
	d1 = { class: "error-dialog-title" },
	f1 = { class: "error-dialog-message" };
function p1(e, t, r, n, o, s) {
	return (
		O(),
		L("div", Wx, [
			Ce(
				n.Header,
				{
					fontFile: n.fontFile,
					onTriggerUpload: n.triggerFileInput,
					onClear: n.handleExitEdit,
				},
				null,
				8,
				["fontFile"],
			),
			n.fontFile
				? (O(),
					L("div", $x, [
						g("div", Vx, [
							Ce(
								n.FontPreview,
								{
									currentFont: n.currentFont,
									previewSize: Number(n.previewSize),
									customPreviewText: n.customPreviewText,
									"glyph-edits": n.glyphEdits,
								},
								null,
								8,
								[
									"currentFont",
									"previewSize",
									"customPreviewText",
									"glyph-edits",
								],
							),
							Ce(
								n.FileInfo,
								{ fontFile: n.fontFile, fontObject: n.currentFont },
								null,
								8,
								["fontFile", "fontObject"],
							),
							Ce(
								n.ModifiedGlyphsPreview,
								{
									"glyph-edits": n.glyphEdits,
									"glyph-edit-count": n.glyphEditCount,
									"current-font": n.currentFont,
									onOpen: n.openModifiedGlyphsDialog,
								},
								null,
								8,
								["glyph-edits", "glyph-edit-count", "current-font"],
							),
						]),
						g("div", qx, [
							g("div", Xx, [
								(O(),
								L(
									De,
									null,
									jt(n.tabs, (i) =>
										g(
											"button",
											{
												key: i.value,
												class: We([
													"tab-button",
													{ active: n.currentTab === i.value },
												]),
												onClick: (a) => (n.currentTab = i.value),
											},
											w(n.t(i.label)),
											11,
											Yx,
										),
									),
									64,
								)),
							]),
							(O(),
							bt(
								xc,
								{ key: n.fontCacheKey },
								[
									n.currentTab === "en" || n.currentTab === "zh"
										? (O(),
											bt(
												n.FontInfoForm,
												{
													key: 0,
													fontInfo: n.fontInfo,
													isBrowserSupported: n.isBrowserSupported,
													lang: n.currentTab,
													"onUpdate:fontInfo": n.updateFontInfo,
												},
												null,
												8,
												["fontInfo", "isBrowserSupported", "lang"],
											))
										: n.currentTab === "glyphs"
											? (O(),
												bt(
													bc,
													{ key: 1 },
													{
														default: ut(() => [
															Ce(
																n.GlyphList,
																{
																	ref: "glyphListRef",
																	"font-data": n.currentFont,
																	"glyph-edits": n.glyphEdits,
																	"onUpdate:glyphEdits": n.updateGlyphEdits,
																},
																null,
																8,
																["font-data", "glyph-edits"],
															),
														]),
														fallback: ut(() => [
															g("div", Zx, [
																Kx,
																g(
																	"span",
																	null,
																	w(n.t("loading_glyph_list")),
																	1,
																),
															]),
														]),
														_: 1,
													},
												))
											: he("", !0),
								],
								1024,
							)),
						]),
					]))
				: (O(),
					L(
						De,
						{ key: 0 },
						[
							n.isBrowserSupported
								? he("", !0)
								: (O(),
									L("div", zx, [
										Ce(
											n.FontEditorCompatibilityNotice,
											{ compatibility: n.compatibilityDetails },
											null,
											8,
											["compatibility"],
										),
									])),
							Ce(n.UploadZone, {
								onFileDrop: n.handleDrop,
								onTriggerUpload: n.triggerFileInput,
							}),
						],
						64,
					)),
			g(
				"input",
				{
					type: "file",
					ref: "fileInput",
					onChange: n.handleFileChange,
					accept: ".ttf,.otf",
					class: "hidden",
				},
				null,
				544,
			),
			n.fontFile
				? (O(),
					L("div", Jx, [
						g("div", Qx, [
							g("div", e1, [
								g(
									"div",
									{
										class: "meta-item meta-primary",
										title: n.t("current_font_file"),
									},
									[n1, g("span", null, w(n.fontFile?.name), 1)],
									8,
									t1,
								),
								g(
									"div",
									{
										class: We(["meta-item", { active: n.glyphEditCount > 0 }]),
										title: n.glyphEditCount
											? n.t("view_edited_glyphs")
											: n.t("no_edited_glyphs"),
										onClick:
											t[0] ||
											(t[0] = (i) =>
												n.glyphEditCount > 0 && n.openModifiedGlyphsDialog()),
									},
									[
										g(
											"i",
											{
												class: We(
													n.glyphEditCount
														? "fas fa-highlighter"
														: "fas fa-pen-to-square",
												),
											},
											null,
											2,
										),
										g(
											"span",
											null,
											w(
												n.glyphEditCount
													? n.t("edited_count_glyphs", {
															count: n.glyphEditCount,
														})
													: n.t("no_edited_glyphs"),
											),
											1,
										),
									],
									10,
									r1,
								),
							]),
							g("div", o1, [
								n.isBrowserSupported
									? he("", !0)
									: (O(),
										L(
											"span",
											s1,
											w(
												n.t(
													"your_browser_cannot_save_fonts_please_use_the_latest_chrome",
												),
											),
											1,
										)),
								g(
									"button",
									{
										class: "export-button",
										disabled: n.isSaveDisabled,
										onClick: n.handleSaveClick,
									},
									[
										n.isProcessing ? (O(), L("i", l1)) : (O(), L("i", a1)),
										g(
											"span",
											null,
											w(n.isProcessing ? n.t("exporting") : n.t("save_export")),
											1,
										),
									],
									8,
									i1,
								),
							]),
						]),
					]))
				: he("", !0),
			Ce(n.ProgressBar, { "is-processing": n.isProcessing }, null, 8, [
				"is-processing",
			]),
			n.notification.show
				? (O(),
					bt(
						n.Notification,
						{
							key: 3,
							message: n.notification.message,
							type: n.notification.type,
							onClose: n.closeNotification,
						},
						null,
						8,
						["message", "type"],
					))
				: he("", !0),
			Ce(
				n.ModifiedGlyphsDialog,
				{
					modelValue: n.showModifiedGlyphsDialog,
					"onUpdate:modelValue":
						t[1] || (t[1] = (i) => (n.showModifiedGlyphsDialog = i)),
					"glyph-edits": n.glyphEdits,
					"current-font": n.currentFont,
					onGotoGlyph: n.handleGotoGlyphFromDialog,
				},
				null,
				8,
				["modelValue", "glyph-edits", "current-font"],
			),
			Ce(
				n.Dialog,
				{
					modelValue: n.showErrorDialog,
					"onUpdate:modelValue":
						t[2] || (t[2] = (i) => (n.showErrorDialog = i)),
					"max-width": 480,
				},
				{
					default: ut(() => [
						g("div", c1, [
							u1,
							g("h3", d1, w(n.errorDialogTitle), 1),
							g("p", f1, w(n.errorDialogMessage), 1),
						]),
					]),
					_: 1,
				},
				8,
				["modelValue"],
			),
		])
	);
}
const C1 = Le(Hx, [
	["render", p1],
	["__scopeId", "data-v-03158bdb"],
]);
export { C1 as default };
