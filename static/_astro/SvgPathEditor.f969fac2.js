import { w as Ne } from "./runtime-dom.esm-bundler.270ff2dc.js";
import {
	r as S,
	c as Me,
	a as Wo,
	b as Fo,
	d as Xo,
	f as Vt,
	e as mn,
	g as ko,
	h as Yn,
	p as Re,
	i as Yo,
	o as Ho,
} from "./pathUtils.eaad3f61.js";
import {
	ab as dt,
	r as Ct,
	a8 as ye,
	af as Je,
	al as No,
	a9 as to,
	q as So,
	g as Ke,
	ac as Vn,
	_ as no,
	k as oo,
	o as mt,
	c as yt,
	a as ot,
	F as ce,
	e as xe,
	n as we,
	d as ne,
	f as Hn,
	a3 as Vo,
	t as Qt,
	h as _e,
	a5 as Oo,
	ad as _o,
	ae as Po,
	p as Mo,
	j as To,
	m as Uo,
	l as zo,
} from "./_plugin-vue_export-helper.0519c48a.js";
import { u as ro } from "./vue-i18n.a5d54a73.js";
function kn(o) {
	return o.map((n) => ({ type: n.type, points: [...n.points] }));
}
function Io(o, n, i) {
	const t = [...o.points];
	switch (o.type) {
		case "M":
		case "L":
			t.length >= 2 && ((t[0] = S(t[0] + n)), (t[1] = S(t[1] + i)));
			break;
		case "C":
			for (let s = 0; s + 1 < t.length && s <= 4; s += 2)
				(t[s] = S(t[s] + n)), (t[s + 1] = S(t[s + 1] + i));
			break;
		case "Q":
			for (let s = 0; s + 1 < t.length && s <= 2; s += 2)
				(t[s] = S(t[s] + n)), (t[s + 1] = S(t[s + 1] + i));
			break;
		case "A":
			t.length >= 7 && ((t[5] = S(t[5] + n)), (t[6] = S(t[6] + i)));
			break;
	}
	return t;
}
function Bo(o, n, i, t) {
	const s = t && t.length ? new Set(t) : null;
	return o.map((p, e) => ({
		type: p.type,
		points: s && !s.has(e) ? [...p.points] : Io(p, n, i),
	}));
}
function Ko(o, n, i) {
	switch (o.type) {
		case "L":
			return qo(o, n, i);
		case "C":
			return Go(o, n, i);
		case "Q":
			return Zo(o, n, i);
		default:
			return null;
	}
}
function qo(o, n, i) {
	if (n.type !== "L") return null;
	const t = o.start,
		s = o.end,
		p = s.x - t.x,
		e = s.y - t.y,
		u = p * p + e * e;
	if (u <= 1e-9) return null;
	let y = ((i.x - t.x) * p + (i.y - t.y) * e) / u;
	if (((y = Nn(y)), !On(y))) return null;
	const c = { x: t.x + p * y, y: t.y + e * y },
		B = { x: n.points[0], y: n.points[1] },
		X = { type: "L", points: [S(c.x), S(c.y)] },
		H = { type: "L", points: [S(B.x), S(B.y)] };
	return { first: X, second: H };
}
function Zo(o, n, i) {
	if (n.type !== "Q") return null;
	const t = o.controls;
	if (!t || t.length < 1) return null;
	const s = o.start,
		p = t[0],
		e = o.end,
		u = Ao(o, i);
	if (!On(u)) return null;
	const y = je(s, p, u),
		c = je(p, e, u),
		B = je(y, c, u),
		X = { type: "Q", points: [S(y.x), S(y.y), S(B.x), S(B.y)] },
		H = { type: "Q", points: [S(c.x), S(c.y), S(e.x), S(e.y)] };
	return { first: X, second: H };
}
function Go(o, n, i) {
	if (n.type !== "C") return null;
	const t = o.controls;
	if (!t || t.length < 2) return null;
	const s = o.start,
		p = t[0],
		e = t[1],
		u = o.end,
		y = Ao(o, i);
	if (!On(y)) return null;
	const c = je(s, p, y),
		B = je(p, e, y),
		X = je(e, u, y),
		H = je(c, B, y),
		q = je(B, X, y),
		v = je(H, q, y),
		W = { type: "C", points: [S(c.x), S(c.y), S(H.x), S(H.y), S(v.x), S(v.y)] },
		M = { type: "C", points: [S(q.x), S(q.y), S(X.x), S(X.y), S(u.x), S(u.y)] };
	return { first: W, second: M };
}
function Ao(o, n) {
	let t = 0,
		s = Number.POSITIVE_INFINITY;
	for (let e = 0; e <= 48; e += 1) {
		const u = e / 48,
			y = go(o, u);
		if (!y) continue;
		const c = yo(y, n);
		c < s && ((s = c), (t = u));
	}
	let p = 0.08;
	for (let e = 0; e < 4; e += 1) {
		let u = t,
			y = s;
		for (let c = -p; c <= p; c += p / 4) {
			const B = Nn(t + c),
				X = go(o, B);
			if (!X) continue;
			const H = yo(X, n);
			H < y && ((y = H), (u = B));
		}
		(t = u), (s = y), (p /= 2);
	}
	return Nn(t);
}
function go(o, n) {
	const i = o.start,
		t = o.end;
	switch (o.type) {
		case "L":
			return { x: i.x + (t.x - i.x) * n, y: i.y + (t.y - i.y) * n };
		case "Q": {
			if (!o.controls || !o.controls[0]) return null;
			const s = o.controls[0],
				p = 1 - n;
			return {
				x: p * p * i.x + 2 * p * n * s.x + n * n * t.x,
				y: p * p * i.y + 2 * p * n * s.y + n * n * t.y,
			};
		}
		case "C": {
			if (!o.controls || o.controls.length < 2) return null;
			const [s, p] = o.controls,
				e = 1 - n;
			return {
				x:
					e * e * e * i.x +
					3 * e * e * n * s.x +
					3 * e * n * n * p.x +
					n * n * n * t.x,
				y:
					e * e * e * i.y +
					3 * e * e * n * s.y +
					3 * e * n * n * p.y +
					n * n * n * t.y,
			};
		}
		default:
			return null;
	}
}
function je(o, n, i) {
	return { x: o.x + (n.x - o.x) * i, y: o.y + (n.y - o.y) * i };
}
function yo(o, n) {
	const i = o.x - n.x,
		t = o.y - n.y;
	return i * i + t * t;
}
function Nn(o) {
	return Number.isFinite(o) ? Me(o, 0, 1) : 0.5;
}
function On(o) {
	return o > 0.002 && o < 0.998;
}
function Qo(o) {
	const {
			internalCommands: n,
			padding: i,
			width: t,
			height: s,
			showGrid: p,
			gridStep: e,
			gridBackgroundColor: u,
			gridBackgroundColorDark: y,
			gridLineColor: c,
			gridLineColorDark: B,
			fillOpacity: X,
			showControls: H,
			selectedCommandIndex: q,
			viewport: v,
			svgScreenSize: W,
			prefersDarkMode: M,
			showVisualBounds: b,
			visualBounds: x,
			strokeWidth: E,
		} = o,
		V = (h) => typeof h == "number" && Number.isFinite(h),
		d = dt(() => {
			const h = s.value ?? 0;
			if (h > 0) {
				const f = (t.value ?? 0) / h;
				return Number.isFinite(f) && f > 0 ? f : 1.6;
			}
			return 1.6;
		}),
		_ = dt(() => Wo(n.value)),
		O = dt(() => Fo(_.value)),
		L = b ?? Ct(!1),
		$ = dt(() => {
			if (!L.value || !x?.value) return null;
			const h = x.value,
				f = (nt) => {
					const ct = [];
					for (const J of nt) {
						const j = h?.[J];
						V(j) && ct.push(j);
					}
					return ct;
				},
				et = f(["originX", "advanceWidth"]),
				R = f([
					"glyphLeft",
					"glyphRight",
					"leftSideBearing",
					"advanceWidth",
					"originX",
				]),
				a = f(["fontAscender", "fontDescender"]),
				C = f([
					"glyphTop",
					"glyphBottom",
					"capHeight",
					"xHeight",
					"verticalOrigin",
					"verticalAdvance",
					"baseline",
				]),
				P = et.length ? et : R,
				K = a.length ? a : C;
			return !P.length && !K.length
				? null
				: {
						minX: P.length ? Math.min(...P) : null,
						maxX: P.length ? Math.max(...P) : null,
						minY: K.length ? Math.min(...K) : null,
						maxY: K.length ? Math.max(...K) : null,
					};
		}),
		at = (h) => {
			const f = $.value;
			if (!f) return h;
			let et = h.minX,
				R = h.minX + h.width,
				a = h.minY,
				C = h.minY + h.height;
			V(f.minX) && (et = Math.min(et, f.minX)),
				V(f.maxX) && (R = Math.max(R, f.maxX)),
				V(f.minY) && (a = Math.min(a, f.minY)),
				V(f.maxY) && (C = Math.max(C, f.maxY));
			const P = Math.max(R - et, 1),
				K = Math.max(C - a, 1);
			return { minX: et, minY: a, width: P, height: K };
		},
		pt = (h) => {
			const f = d.value;
			if (
				!Number.isFinite(f) ||
				f <= 0 ||
				!Number.isFinite(h.width) ||
				!Number.isFinite(h.height) ||
				h.height === 0
			)
				return h;
			const et = h.width / h.height,
				R = 1e-6;
			if (Math.abs(et - f) <= R) return h;
			if (et < f) {
				const K = h.height * f,
					ct = (K - h.width) / 2;
				return { minX: h.minX - ct, minY: h.minY, width: K, height: h.height };
			}
			const a = h.width / f,
				P = (a - h.height) / 2;
			return { minX: h.minX, minY: h.minY - P, width: h.width, height: a };
		},
		G = dt(() => {
			const h = O.value;
			let f;
			if (!h)
				f = {
					minX: -(i.value ?? 0),
					minY: -(i.value ?? 0),
					width: t.value ?? 0,
					height: s.value ?? 0,
				};
			else {
				const R = h.width || 1,
					a = h.height || 1;
				f = {
					minX: h.minX - (i.value ?? 0),
					minY: h.minY - (i.value ?? 0),
					width: R + (i.value ?? 0) * 2,
					height: a + (i.value ?? 0) * 2,
				};
			}
			const et = at(f);
			return pt(et);
		}),
		Z = dt(() => {
			const h = O.value;
			return h
				? { minX: h.minX, minY: h.minY, width: h.width, height: h.height }
				: null;
		}),
		k = dt(() => {
			const h = v.value ?? G.value;
			if (!h) return `0 0 ${t.value ?? 0} ${s.value ?? 0}`;
			const { minX: f, minY: et, width: R, height: a } = h;
			return `${f} ${et} ${R} ${a}`;
		}),
		w = dt(
			() =>
				v.value ??
				G.value ?? {
					minX: 0,
					minY: 0,
					width: t.value || 1,
					height: s.value || 1,
				},
		),
		Y = dt(() => {
			const h = w.value,
				f = W.value;
			return !h || !f.width || !f.height
				? { x: 1, y: 1 }
				: { x: h.width / f.width, y: h.height / f.height };
		}),
		F = dt(() => {
			const { x: h, y: f } = Y.value,
				et = Math.max(h, f);
			if (!Number.isFinite(et) || et <= 0) return 1;
			const R = W.value;
			return !(R.width > 50 && R.height > 50) && et > 10 ? 10 : et;
		}),
		Q = dt(() => {
			const h = W.value,
				et = Math.min(h.width, h.height) / 90;
			return Me(et, 3, 6);
		}),
		rt = Ct(1);
	ye(
		[F, w, G],
		([h, f, et]) => {
			if (!Number.isFinite(h) || !h) return;
			if (!f) {
				rt.value = h;
				return;
			}
			if (!et) {
				rt.value = h;
				return;
			}
			const R = Math.abs(f.width - et.width),
				a = Math.abs(f.height - et.height),
				C = Math.max(et.width, 1) * 0.001,
				P = Math.max(et.height, 1) * 0.001;
			R <= C && a <= P && (rt.value = h);
		},
		{ immediate: !0 },
	);
	const ft = dt(() => {
			const h = F.value,
				f = rt.value;
			if (!Number.isFinite(h) || h <= 0 || !Number.isFinite(f) || f <= 0)
				return 1;
			const et = f / h;
			return Me(et, 0.25, 4);
		}),
		bt = dt(() => {
			const h = Math.pow(ft.value, 0.4);
			return Me(h, 0.8, 1.8);
		}),
		wt = dt(() => F.value * Q.value * bt.value),
		ut = dt(() => F.value * Q.value * bt.value * 1.4),
		xt = dt(() => ut.value / 2),
		Pt = dt(() => F.value * bt.value * Me(Q.value / 3, 1, 2)),
		Ot = dt(() => F.value * bt.value * Me(Q.value / 4, 0.75, 1.5)),
		Zt = dt(() => {
			const h = E.value,
				f = wt.value * 1.5;
			return Math.max(h, f);
		}),
		At = dt(() => {
			const h = Xo(X.value);
			return M.value ? Math.min(h * 1.3, 0.8) : h;
		}),
		Dt = dt(() => d.value),
		Nt = dt(() => {
			const h = u.value,
				f = y.value,
				et = c.value,
				R = B.value;
			if (!p.value) return { backgroundColor: M.value ? f : h };
			const a = Math.max(e.value ?? 0, 2),
				C = M.value,
				P = C ? f : h,
				K = C ? R : et,
				nt = `linear-gradient(0deg, transparent calc(100% - 1px), ${K} calc(100% - 1px)), linear-gradient(90deg, transparent calc(100% - 1px), ${K} calc(100% - 1px))`;
			return {
				backgroundColor: P,
				backgroundImage: nt,
				backgroundSize: `${a}px ${a}px`,
			};
		}),
		A = dt(() => {
			const h = [];
			return (
				n.value.forEach((f, et) => {
					switch (f.type) {
						case "M":
						case "L": {
							h.push({
								id: `${et}-anchor`,
								commandIndex: et,
								coordIndex: 0,
								role: "anchor",
								x: f.points[0],
								y: f.points[1],
							});
							break;
						}
						case "C": {
							h.push(
								{
									id: `${et}-c1`,
									commandIndex: et,
									coordIndex: 0,
									role: "control1",
									x: f.points[0],
									y: f.points[1],
								},
								{
									id: `${et}-c2`,
									commandIndex: et,
									coordIndex: 2,
									role: "control2",
									x: f.points[2],
									y: f.points[3],
								},
								{
									id: `${et}-anchor`,
									commandIndex: et,
									coordIndex: 4,
									role: "anchor",
									x: f.points[4],
									y: f.points[5],
								},
							);
							break;
						}
						case "Q": {
							h.push(
								{
									id: `${et}-qc`,
									commandIndex: et,
									coordIndex: 0,
									role: "control",
									x: f.points[0],
									y: f.points[1],
								},
								{
									id: `${et}-anchor`,
									commandIndex: et,
									coordIndex: 2,
									role: "anchor",
									x: f.points[2],
									y: f.points[3],
								},
							);
							break;
						}
					}
				}),
				h
			);
		}),
		U = dt(() => A.value.filter((h) => h.role === "anchor")),
		m = dt(() => A.value.filter((h) => h.role !== "anchor")),
		z = dt(() => {
			const h = [];
			return (
				_.value.forEach((f) => {
					f.type === "C" &&
						f.controls &&
						h.push(
							{
								id: `${f.commandIndex}-line-0`,
								commandIndex: f.commandIndex,
								x1: f.start.x,
								y1: f.start.y,
								x2: f.controls[0].x,
								y2: f.controls[0].y,
							},
							{
								id: `${f.commandIndex}-line-1`,
								commandIndex: f.commandIndex,
								x1: f.end.x,
								y1: f.end.y,
								x2: f.controls[1].x,
								y2: f.controls[1].y,
							},
						),
						f.type === "Q" &&
							f.controls &&
							h.push({
								id: `${f.commandIndex}-line-q`,
								commandIndex: f.commandIndex,
								x1: f.start.x,
								y1: f.start.y,
								x2: f.controls[0].x,
								y2: f.controls[0].y,
							});
				}),
				h
			);
		}),
		I = dt(() => {
			const h = [];
			return (
				_.value.forEach((f) => {
					if (f.type === "M") return;
					const et = `M ${Vt(f.start.x)} ${Vt(f.start.y)}`;
					let R = null;
					switch (f.type) {
						case "C":
							f.controls &&
								f.controls.length >= 2 &&
								(R = `C ${Vt(f.controls[0].x)} ${Vt(f.controls[0].y)} ${Vt(f.controls[1].x)} ${Vt(f.controls[1].y)} ${Vt(f.end.x)} ${Vt(f.end.y)}`);
							break;
						case "Q":
							f.controls &&
								f.controls.length >= 1 &&
								(R = `Q ${Vt(f.controls[0].x)} ${Vt(f.controls[0].y)} ${Vt(f.end.x)} ${Vt(f.end.y)}`);
							break;
						case "L":
						case "Z":
							R = `L ${Vt(f.end.x)} ${Vt(f.end.y)}`;
							break;
					}
					if (!R) return;
					const a = `${et} ${R}`.trim();
					h.push({
						id: `segment-${f.commandIndex}-${f.type}`,
						commandIndex: f.commandIndex,
						d: a,
						segment: f,
					});
				}),
				h
			);
		}),
		ht = dt(() => {
			const h = n.value,
				f = [];
			let et = [],
				R = null,
				a = !1;
			const C = () => {
				if (!et.length || R === null) {
					(et = []), (a = !1);
					return;
				}
				const P = et.length > 1;
				if (a || P) {
					const K = et.join(" ").trim(),
						nt = a ? K : `${K} Z`;
					f.push({ id: `subpath-${R}`, commandIndex: R, d: nt });
				}
				(et = []), (a = !1), (R = null);
			};
			return (
				h.forEach((P, K) => {
					if ((P.type === "M" && (C(), (R = K)), R === null)) return;
					const nt = P.type;
					switch (P.type) {
						case "M":
						case "L": {
							P.points.length >= 2 &&
								et.push(`${nt} ${Vt(P.points[0])} ${Vt(P.points[1])}`);
							break;
						}
						case "C":
							P.points.length >= 6 &&
								et.push(
									`${nt} ${Vt(P.points[0])} ${Vt(P.points[1])} ${Vt(P.points[2])} ${Vt(P.points[3])} ${Vt(P.points[4])} ${Vt(P.points[5])}`,
								);
							break;
						case "Q":
							P.points.length >= 4 &&
								et.push(
									`${nt} ${Vt(P.points[0])} ${Vt(P.points[1])} ${Vt(P.points[2])} ${Vt(P.points[3])}`,
								);
							break;
						case "A":
							P.points.length >= 7 &&
								et.push(
									`${nt} ${Vt(P.points[0])} ${Vt(P.points[1])} ${Vt(P.points[2])} ${Vt(P.points[3])} ${Vt(P.points[4])} ${Vt(P.points[5])} ${Vt(P.points[6])}`,
								);
							break;
						case "Z":
							et.push("Z"), (a = !0), C();
							break;
					}
				}),
				C(),
				f
			);
		}),
		lt = dt(() =>
			!H.value || q.value === null
				? []
				: m.value.filter((h) => h.commandIndex === q.value),
		),
		gt = dt(() =>
			!H.value || q.value === null
				? []
				: z.value.filter((h) => h.commandIndex === q.value),
		);
	return {
		segments: _,
		contentBounds: Z,
		viewBoxParts: G,
		viewBox: k,
		activeViewport: w,
		unitsPerPixel: Y,
		uniformUnitsPerPixel: F,
		baseHandlePixels: Q,
		zoomMagnitude: ft,
		zoomCompensation: bt,
		anchorRadius: wt,
		controlSize: ut,
		controlHalfSize: xt,
		handleStrokeWidth: Pt,
		controlLineWidth: Ot,
		segmentHitWidth: Zt,
		displayFillOpacity: At,
		gridBackgroundStyle: Nt,
		interactivePoints: A,
		anchorPoints: U,
		visibleControlPoints: lt,
		visibleControlLines: gt,
		bezierSegments: I,
		closedSubpathAreas: ht,
		aspectRatio: Dt,
	};
}
function jo(o) {
	const { internalCommands: n, showHandles: i, dragging: t } = o,
		s = Ct(null),
		p = Ct(null);
	ye(i, (v) => {
		v || ((s.value = null), (p.value = null));
	}),
		ye(
			n,
			() => {
				s.value !== null && !n.value[s.value] && (s.value = null),
					p.value !== null &&
						(!n.value[p.value.commandIndex] ||
							!B(n.value[p.value.commandIndex])) &&
						(p.value = null);
			},
			{ deep: !0 },
		);
	function e(v) {
		if (!i.value) {
			(s.value = null), (p.value = null);
			return;
		}
		if (((p.value = null), v === null)) {
			s.value = null;
			return;
		}
		n.value[v] && (s.value = v);
	}
	function u(v) {
		const W = n.value;
		if (v < 0 || v >= W.length) {
			p.value = null;
			return;
		}
		const M = W[v];
		if (!M) {
			p.value = null;
			return;
		}
		if (M.type !== "Z") {
			if (M.type === "M") {
				y(v);
				return;
			}
			W.splice(v, 1), c(v);
		}
	}
	function y(v) {
		const W = n.value,
			M = W[v + 1];
		if (!M) {
			W.splice(v, 1), c(v);
			return;
		}
		if (M.type === "Z") {
			W.splice(v, 2), c(v);
			return;
		}
		if (M.type !== "M") {
			const b = X(M);
			if (!(!!b && b.every((E) => Number.isFinite(E)))) {
				W.splice(v, 2), c(v);
				return;
			}
			W.splice(v, 1), (M.type = "M"), (M.points = b), c(v);
			return;
		}
		W.splice(v, 1), c(v);
	}
	function c(v) {
		const W = n.value;
		if (!W.length) {
			(s.value = null), (p.value = null);
			return;
		}
		if (!i.value) {
			(s.value = null), (p.value = null);
			return;
		}
		const M = Me(v, 0, W.length - 1);
		(s.value = M), B(W[M]) ? (p.value = { commandIndex: M }) : (p.value = null);
	}
	function B(v) {
		return v ? v.type !== "Z" : !1;
	}
	function X(v) {
		switch (v.type) {
			case "M":
			case "L":
				return [v.points[0], v.points[1]];
			case "C":
				return [v.points[4], v.points[5]];
			case "Q":
				return [v.points[2], v.points[3]];
			case "A":
				return [v.points[5], v.points[6]];
			default:
				return null;
		}
	}
	function H(v) {
		(v.key !== "Delete" && v.key !== "Backspace") ||
			(i.value &&
				(t.point ||
					(p.value &&
						(q(v.target) || (v.preventDefault(), u(p.value.commandIndex))))));
	}
	function q(v) {
		if (!v || !(v instanceof HTMLElement)) return !1;
		const W = v.tagName;
		return W === "INPUT" || W === "TEXTAREA" || W === "SELECT"
			? !0
			: v.isContentEditable;
	}
	return {
		selectedCommandIndex: s,
		selectedAnchorInfo: p,
		selectCommand: e,
		removeAnchorCommand: u,
		handleKeydown: H,
	};
}
function Jo(o) {
	const {
			svgRef: n,
			viewport: i,
			viewBoxParts: t,
			selectCommand: s,
			selectedAnchorInfo: p,
			updatePoint: e,
			dragging: u,
		} = o,
		y = Je({
			pointerId: null,
			element: null,
			startPoint: null,
			startViewport: null,
			initialCTMInverse: null,
		}),
		c = new Map(),
		B = Je({
			pointerIds: [],
			initialDistance: 0,
			initialCenter: null,
			initialViewport: null,
		});
	function X(L) {
		const $ = n.value;
		if (!$) return null;
		const at = $.createSVGPoint();
		(at.x = L.clientX), (at.y = L.clientY);
		const pt = $.getScreenCTM();
		if (!pt) return null;
		const G = pt.inverse(),
			Z = at.matrixTransform(G);
		if (
			(c.set(L.pointerId, {
				x: Z.x,
				y: Z.y,
				clientX: L.clientX,
				clientY: L.clientY,
				pointerType: L.pointerType,
			}),
			y.pointerId !== null &&
				y.pointerId === L.pointerId &&
				y.initialCTMInverse)
		) {
			const k = at.matrixTransform(y.initialCTMInverse);
			return { x: k.x, y: k.y };
		}
		return { x: Z.x, y: Z.y };
	}
	function H(L, $) {
		const at = L.x - $.x,
			pt = L.y - $.y;
		return Math.sqrt(at * at + pt * pt);
	}
	function q() {
		(B.pointerIds = []),
			(B.initialDistance = 0),
			(B.initialCenter = null),
			(B.initialViewport = null);
	}
	function v() {
		if (y.pointerId !== null && y.element)
			try {
				y.element.releasePointerCapture(y.pointerId);
			} catch {}
		(y.pointerId = null),
			(y.element = null),
			(y.startPoint = null),
			(y.startViewport = null),
			(y.initialCTMInverse = null);
	}
	function W(L) {
		if (u.point || B.pointerIds.length === 2) return;
		const $ = i.value ?? t.value;
		if (!$) return;
		const at = Array.from(c.entries()).filter(
			([, F]) => F.pointerType === "touch",
		);
		if (at.length < 2) return;
		const [pt, G] = at.slice(0, 2),
			Z = pt[1],
			k = G[1],
			w = H(Z, k);
		if (!w || w <= 0) return;
		const Y = { x: (Z.x + k.x) / 2, y: (Z.y + k.y) / 2 };
		(B.pointerIds = [pt[0], G[0]]),
			(B.initialDistance = w),
			(B.initialCenter = Y),
			(B.initialViewport = { ...$ });
		try {
			L.setPointerCapture(pt[0]), L.setPointerCapture(G[0]);
		} catch {}
	}
	function M() {
		if (B.pointerIds.length !== 2) return;
		const L = B.initialViewport,
			$ = B.initialCenter,
			at = t.value;
		if (!L || !$ || !at) return;
		const [pt, G] = B.pointerIds,
			Z = c.get(pt),
			k = c.get(G);
		if (!Z || !k) return;
		const w = H(Z, k);
		if (!w || w <= 0) return;
		const Y = B.initialDistance / w,
			F = Math.max(at.width * 0.05, 0.5),
			Q = Math.max(at.width * 10, F),
			rt = Me(L.width * Y, F, Q),
			ft = rt / L.width,
			bt = L.height * ft,
			wt = { x: (Z.x + k.x) / 2, y: (Z.y + k.y) / 2 },
			ut = wt.x - $.x,
			xt = wt.y - $.y,
			Pt = $.x - ($.x - L.minX) * ft - ut,
			Ot = $.y - ($.y - L.minY) * ft - xt;
		i.value = { minX: Pt, minY: Ot, width: rt, height: bt };
	}
	function b(L) {
		if (!c.has(L) || (c.delete(L), !B.pointerIds.includes(L))) return;
		q();
		const $ = n.value;
		if (!$ || u.point) return;
		const at = Array.from(c.entries()).filter(
			([, F]) => F.pointerType === "touch",
		);
		if (at.length !== 1) return;
		const [pt, G] = at[0],
			Z = i.value ?? t.value;
		if (!Z) return;
		const k = $.getScreenCTM();
		if (!k) return;
		const w = k.inverse(),
			Y = (() => {
				const F = $.createSVGPoint();
				(F.x = G.clientX), (F.y = G.clientY);
				const Q = F.matrixTransform(w);
				return { x: Q.x, y: Q.y };
			})();
		(y.pointerId = pt),
			(y.element = $),
			(y.startPoint = Y),
			(y.startViewport = { ...Z }),
			(y.initialCTMInverse = w);
		try {
			$.setPointerCapture(pt);
		} catch {}
	}
	function x(L) {
		const $ = n.value,
			at = L.target;
		if (!at || !$) return;
		const pt = X(L);
		if (!at.closest(".segment-hit, .handle")) {
			if (
				(s(null),
				!(
					L.button === 0 ||
					L.pointerType === "touch" ||
					L.pointerType === "pen"
				))
			)
				return;
			if (L.pointerType === "touch" && (v(), W($), B.pointerIds.length === 2)) {
				L.preventDefault();
				return;
			}
			const k = i.value ?? t.value;
			if (!k || !pt) return;
			const w = $.getScreenCTM();
			if (!w) return;
			(y.pointerId = L.pointerId),
				(y.element = $),
				(y.startPoint = { x: pt.x, y: pt.y }),
				(y.startViewport = { ...k }),
				(y.initialCTMInverse = w.inverse());
			try {
				$.setPointerCapture(L.pointerId);
			} catch {}
		}
	}
	function E(L) {
		const $ = n.value,
			at = t.value;
		if (!$ || !at) return;
		const pt = $.createSVGPoint();
		(pt.x = L.clientX), (pt.y = L.clientY);
		const G = $.getScreenCTM();
		if (!G) return;
		const Z = pt.matrixTransform(G.inverse()),
			k = i.value ?? at,
			w = L.deltaY < 0 ? -1 : 1,
			F = Math.exp(w * 0.18),
			Q = Math.max(at.width * 0.05, 0.5),
			rt = Math.max(at.width * 10, Q),
			ft = Me(k.width * F, Q, rt);
		if (Math.abs(ft - k.width) < 1e-6) return;
		const bt = ft / k.width,
			wt = k.height * bt,
			ut = Z.x - (Z.x - k.minX) * bt,
			xt = Z.y - (Z.y - k.minY) * bt;
		i.value = { minX: ut, minY: xt, width: ft, height: wt };
	}
	function V(L, $) {
		const at = n.value;
		if (at) {
			if (typeof at.focus == "function")
				try {
					at.focus({ preventScroll: !0 });
				} catch {
					at.focus();
				}
			B.pointerIds.length && q(),
				v(),
				s($.commandIndex),
				$.role === "anchor" && (p.value = { commandIndex: $.commandIndex }),
				(u.point = $),
				(u.pointerId = L.pointerId),
				(u.element = L.target),
				u.element.setPointerCapture(L.pointerId),
				L.preventDefault();
		}
	}
	function d(L) {
		if (u.pointerId !== null && u.element)
			try {
				u.element.releasePointerCapture(u.pointerId);
			} catch {}
		(u.point = null),
			(u.pointerId = null),
			(u.element = null),
			y.pointerId !== null && L.pointerId === y.pointerId && v(),
			(L.type === "pointerup" ||
				L.type === "pointercancel" ||
				L.type === "pointerleave") &&
				b(L.pointerId);
	}
	function _(L) {
		const $ = X(L);
		if (B.pointerIds.length === 2 && B.pointerIds.includes(L.pointerId)) {
			M(), L.preventDefault();
			return;
		}
		if (y.pointerId !== null && L.pointerId === y.pointerId) {
			const at = y.startViewport,
				pt = y.startPoint;
			if (!at || !pt || !$) return;
			const G = $.x - pt.x,
				Z = $.y - pt.y;
			i.value = {
				minX: at.minX - G,
				minY: at.minY - Z,
				width: at.width,
				height: at.height,
			};
			return;
		}
		!u.point || u.pointerId !== L.pointerId || !$ || e(u.point, $.x, $.y);
	}
	function O() {
		v(), q(), c.clear();
	}
	return {
		handleCanvasPointerDown: x,
		onPointerMove: _,
		finishDrag: d,
		startDrag: V,
		onWheel: E,
		resetState: O,
	};
}
const $o = 1e-9;
function on(o, n, i) {
	return { x: o.x + (n.x - o.x) * i, y: o.y + (n.y - o.y) * i };
}
function tr(o) {
	return o.type === "L"
		? { type: "L", start: { ...o.start }, end: { ...o.end } }
		: {
				type: "C",
				start: { ...o.start },
				c1: { ...o.c1 },
				c2: { ...o.c2 },
				end: { ...o.end },
			};
}
function dn(o, n) {
	if (o.type === "L") return on(o.start, o.end, n);
	const i = 1 - n,
		t = i * i * i,
		s = 3 * i * i * n,
		p = 3 * i * n * n,
		e = n * n * n;
	return {
		x: t * o.start.x + s * o.c1.x + p * o.c2.x + e * o.end.x,
		y: t * o.start.y + s * o.c1.y + p * o.c2.y + e * o.end.y,
	};
}
function vo(o, n) {
	if (o.type === "L") {
		const y = on(o.start, o.end, n);
		return [
			{ type: "L", start: o.start, end: y },
			{ type: "L", start: y, end: o.end },
		];
	}
	const i = on(o.start, o.c1, n),
		t = on(o.c1, o.c2, n),
		s = on(o.c2, o.end, n),
		p = on(i, t, n),
		e = on(t, s, n),
		u = on(p, e, n);
	return [
		{ type: "C", start: o.start, c1: i, c2: p, end: u },
		{ type: "C", start: u, c1: e, c2: s, end: o.end },
	];
}
function er(o, n, i) {
	if (i - n >= 1 - 1e-9) return tr(o);
	let t = o;
	if (n > 1e-9) {
		const [, e] = vo(t, n);
		t = e;
	}
	const s = (i - n) / (1 - n),
		[p] = vo(t, s);
	return p;
}
function nr(o) {
	const n = [];
	if (!o.length) return n;
	const i = o[0];
	n.push({ type: "M", points: [S(i.start.x), S(i.start.y)] });
	for (const t of o)
		t.type === "L"
			? n.push({ type: "L", points: [S(t.end.x), S(t.end.y)] })
			: n.push({
					type: "C",
					points: [
						S(t.c1.x),
						S(t.c1.y),
						S(t.c2.x),
						S(t.c2.y),
						S(t.end.x),
						S(t.end.y),
					],
				});
	return n.push({ type: "Z", points: [] }), n;
}
function or(o) {
	const n = [];
	let i = { x: 0, y: 0 },
		t = { x: 0, y: 0 },
		s = [],
		p = [],
		e = !1,
		u = !1;
	const y = () => {
		if (u && s.length) {
			let c = e;
			if (!c) {
				const B = Eo(s),
					X = Math.max(B * 1e-4, 1e-6);
				c = Math.hypot(i.x - t.x, i.y - t.y) <= X;
			}
			n.push({ segs: s, closed: c, commands: p });
		}
		(s = []), (p = []), (e = !1), (u = !1);
	};
	for (const c of o) {
		if (c.type === "M") {
			y(),
				(i = { x: c.points[0], y: c.points[1] }),
				(t = { ...i }),
				(u = !0),
				(p = [c]);
			continue;
		}
		if (u)
			switch ((p.push(c), c.type)) {
				case "L": {
					const B = { x: c.points[0], y: c.points[1] };
					s.push({ type: "L", start: i, end: B }), (i = B);
					break;
				}
				case "Q": {
					const B = { x: c.points[0], y: c.points[1] },
						X = { x: c.points[2], y: c.points[3] },
						H = {
							x: i.x + (2 / 3) * (B.x - i.x),
							y: i.y + (2 / 3) * (B.y - i.y),
						},
						q = {
							x: X.x + (2 / 3) * (B.x - X.x),
							y: X.y + (2 / 3) * (B.y - X.y),
						};
					s.push({ type: "C", start: i, c1: H, c2: q, end: X }), (i = X);
					break;
				}
				case "C": {
					const B = { x: c.points[4], y: c.points[5] };
					s.push({
						type: "C",
						start: i,
						c1: { x: c.points[0], y: c.points[1] },
						c2: { x: c.points[2], y: c.points[3] },
						end: B,
					}),
						(i = B);
					break;
				}
				case "A": {
					const [B, X, H, q, v, W, M] = c.points,
						b = ko(i.x, i.y, B, X, H, q, v, W, M);
					if (b.length)
						for (const [x, E, V, d, _, O] of b) {
							const L = { x: _, y: O };
							s.push({
								type: "C",
								start: i,
								c1: { x, y: E },
								c2: { x: V, y: d },
								end: L,
							}),
								(i = L);
						}
					else {
						const x = { x: W, y: M };
						s.push({ type: "L", start: i, end: x }), (i = x);
					}
					break;
				}
				case "Z": {
					Math.hypot(t.x - i.x, t.y - i.y) > 1e-6 &&
						s.push({ type: "L", start: i, end: t }),
						(e = !0),
						(i = { ...t }),
						y();
					break;
				}
			}
	}
	return y(), n;
}
function rr(o, n, i, t, s) {
	const p = [],
		e = o.length,
		u = s,
		y = (c, B) => {
			const X = i(B);
			X < -u || X > t + u || p.push({ gp: c, point: B });
		};
	o.forEach((c, B) => {
		if (c.type === "L") {
			const q = n(c.start),
				v = n(c.end);
			if ((q < 0 && v > 0) || (q > 0 && v < 0)) {
				const W = q / (q - v);
				y(B + W, dn(c, W));
			}
			return;
		}
		const X = 48;
		let H = n(dn(c, 0));
		for (let q = 1; q <= X; q += 1) {
			const v = q / X,
				W = n(dn(c, v));
			if ((H < 0 && W > 0) || (H > 0 && W < 0)) {
				let M = (q - 1) / X,
					b = v,
					x = H;
				for (let V = 0; V < 40; V += 1) {
					const d = (M + b) / 2,
						_ = n(dn(c, d));
					(x < 0 && _ > 0) || (x > 0 && _ < 0) ? (b = d) : ((M = d), (x = _));
				}
				const E = (M + b) / 2;
				y(B + E, dn(c, E));
			}
			H = W;
		}
	});
	for (let c = 0; c < e; c += 1) {
		const B = o[c].start;
		if (Math.abs(n(B)) >= s) continue;
		const X = n(dn(o[(c - 1 + e) % e], 0.98)),
			H = n(dn(o[c], 0.02));
		((X < 0 && H > 0) || (X > 0 && H < 0)) && y(c, B);
	}
	return p;
}
function ir(o, n, i, t, s) {
	if (o.length < 2) return null;
	const e = rr(o, n, i, t, s);
	if (e.length < 2) return null;
	e.sort((y, c) => y.gp - c.gp);
	const u = [];
	for (const y of e) {
		const c = u[u.length - 1];
		(c && Math.hypot(y.point.x - c.point.x, y.point.y - c.point.y) < s) ||
			u.push(y);
	}
	return u.length < 2
		? null
		: (u.length % 2 !== 0 && u.pop(), u.length >= 2 ? u : null);
}
function ar(o, n, i, t) {
	const s = [];
	let p = i,
		e = 0;
	for (; p < t - 1e-9 && e++ <= n + 1; ) {
		const u = Math.floor(p) % n,
			y = p - Math.floor(p),
			c = o[u],
			B = Math.min(1, t - Math.floor(p));
		B - y > 1e-9 && s.push(er(c, y, B)), (p = Math.floor(p) + 1);
	}
	return s;
}
function Eo(o) {
	let n = 1 / 0,
		i = 1 / 0,
		t = -1 / 0,
		s = -1 / 0;
	for (const p of o)
		for (const e of [p.start, p.end])
			(n = Math.min(n, e.x)),
				(i = Math.min(i, e.y)),
				(t = Math.max(t, e.x)),
				(s = Math.max(s, e.y));
	return Math.hypot(t - n, s - i) || 1;
}
function sr(o, n, i) {
	if (!o.length) return null;
	const t = i.x - n.x,
		s = i.y - n.y,
		p = Math.hypot(t, s);
	if (p < $o) return null;
	const e = t / p,
		u = s / p,
		y = (E) => (t * (E.y - n.y) - s * (E.x - n.x)) / p,
		c = (E) => (E.x - n.x) * e + (E.y - n.y) * u,
		B = or(o);
	if (!B.length) return null;
	const X = [],
		H = new Set();
	if (
		(B.forEach((E, V) => {
			if (!E.closed) return;
			const d = Math.max(Eo(E.segs) * 1e-4, 1e-6),
				_ = ir(E.segs, y, c, p, d);
			if (!_) return;
			H.add(V);
			const O = X.length,
				L = _.length;
			for (let $ = 0; $ < L; $ += 1)
				X.push({
					point: _[$].point,
					subpath: V,
					u: c(_[$].point),
					outArc: [],
					outTo: -1,
					pair: -1,
				});
			for (let $ = 0; $ < L; $ += 1) {
				const at = _[$],
					pt = _[($ + 1) % L],
					G = pt.gp > at.gp + 1e-9 ? pt.gp : pt.gp + E.segs.length;
				(X[O + $].outArc = ar(E.segs, E.segs.length, at.gp, G)),
					(X[O + $].outTo = O + (($ + 1) % L));
			}
		}),
		X.length < 2 || X.length % 2 !== 0)
	)
		return null;
	const q = X.map((E, V) => V).sort((E, V) => X[E].u - X[V].u);
	for (let E = 0; E + 1 < q.length; E += 2) {
		const V = q[E],
			d = q[E + 1];
		(X[V].pair = d), (X[d].pair = V);
	}
	const v = new Array(X.length).fill(!1),
		W = new Array(X.length).fill(!1),
		M = [];
	for (let E = 0; E < X.length; E += 1) {
		if (v[E]) continue;
		const V = [];
		let d = E,
			_ = !0,
			O = 0;
		for (; O++ <= X.length + 1 && !v[d]; ) {
			if (((v[d] = !0), V.push(...X[d].outArc), (d = X[d].outTo), W[d])) {
				_ = !1;
				break;
			}
			W[d] = !0;
			const L = X[d].pair;
			if (
				(V.push({ type: "L", start: X[d].point, end: X[L].point }),
				(d = L),
				d === E)
			)
				break;
		}
		_ && V.length && M.push(V);
	}
	if (!M.length) return null;
	const b = [],
		x = [];
	for (const E of M) {
		const V = nr(E);
		V.length && (b.push(...V), x.push(mn(V)));
	}
	return (
		B.forEach((E, V) => {
			H.has(V) ||
				b.push(
					...E.commands.map((d) => ({ type: d.type, points: [...d.points] })),
				);
		}),
		x.length ? { commands: b, piecePaths: x } : null
	);
}
function lr(o, n) {
	const i = Ct("select"),
		t = Je({
			tool: "select",
			isDrawing: !1,
			startPoint: null,
			previewPath: "",
			tempPoints: [],
		});
	ye(i, (H, q) => {
		n?.onBeforeToolChange && n.onBeforeToolChange(H, q), (t.tool = H), s();
	});
	function s() {
		(t.isDrawing = !1),
			(t.startPoint = null),
			(t.previewPath = ""),
			(t.tempPoints = []);
	}
	function p(H) {
		const q = t.tool;
		return (
			q === "select" ||
				q === "strokeWeight" ||
				((t.isDrawing = !0),
				(t.startPoint = { x: S(H.x), y: S(H.y) }),
				(t.tempPoints = [t.startPoint])),
			null
		);
	}
	function e(H) {
		if (!t.isDrawing || !t.startPoint) return;
		const q = t.tool,
			v = t.startPoint,
			W = { x: S(H.x), y: S(H.y) };
		let M = [];
		switch (q) {
			case "rect":
				M = [
					{ type: "M", points: [v.x, v.y] },
					{ type: "L", points: [W.x, v.y] },
					{ type: "L", points: [W.x, W.y] },
					{ type: "L", points: [v.x, W.y] },
					{ type: "Z", points: [] },
				];
				break;
			case "ellipse":
				const b = (v.x + W.x) / 2,
					x = (v.y + W.y) / 2,
					E = Math.abs(W.x - v.x) / 2,
					V = Math.abs(W.y - v.y) / 2,
					d = 0.5522847498;
				M = [
					{ type: "M", points: [S(b - E), S(x)] },
					{
						type: "C",
						points: [
							S(b - E),
							S(x - V * d),
							S(b - E * d),
							S(x - V),
							S(b),
							S(x - V),
						],
					},
					{
						type: "C",
						points: [
							S(b + E * d),
							S(x - V),
							S(b + E),
							S(x - V * d),
							S(b + E),
							S(x),
						],
					},
					{
						type: "C",
						points: [
							S(b + E),
							S(x + V * d),
							S(b + E * d),
							S(x + V),
							S(b),
							S(x + V),
						],
					},
					{
						type: "C",
						points: [
							S(b - E * d),
							S(x + V),
							S(b - E),
							S(x + V * d),
							S(b - E),
							S(x),
						],
					},
					{ type: "Z", points: [] },
				];
				break;
			case "triangle":
				M = c(v, W);
				break;
			case "cut":
				M = [
					{ type: "M", points: [v.x, v.y] },
					{ type: "L", points: [W.x, W.y] },
				];
				break;
			default:
				return;
		}
		t.previewPath = mn(M);
	}
	function u(H, q) {
		if (!t.isDrawing || !t.startPoint) return null;
		const v = t.tool,
			W = t.startPoint,
			M = { x: S(H.x), y: S(H.y) };
		if (v === "cut") {
			const x = sr(q, W, M);
			return (
				s(),
				x && x.commands.length
					? ((i.value = "select"),
						{ commands: x.commands, cutPiecePaths: x.piecePaths })
					: null
			);
		}
		let b = [];
		switch (v) {
			case "pen":
			case "select":
			case "strokeWeight":
				return null;
			case "rect":
				b = [
					{ type: "M", points: [W.x, W.y] },
					{ type: "L", points: [M.x, W.y] },
					{ type: "L", points: [M.x, M.y] },
					{ type: "L", points: [W.x, M.y] },
					{ type: "Z", points: [] },
				];
				break;
			case "ellipse":
				const x = (W.x + M.x) / 2,
					E = (W.y + M.y) / 2,
					V = Math.abs(M.x - W.x) / 2,
					d = Math.abs(M.y - W.y) / 2,
					_ = 0.5522847498;
				b = [
					{ type: "M", points: [S(x - V), S(E)] },
					{
						type: "C",
						points: [
							S(x - V),
							S(E - d * _),
							S(x - V * _),
							S(E - d),
							S(x),
							S(E - d),
						],
					},
					{
						type: "C",
						points: [
							S(x + V * _),
							S(E - d),
							S(x + V),
							S(E - d * _),
							S(x + V),
							S(E),
						],
					},
					{
						type: "C",
						points: [
							S(x + V),
							S(E + d * _),
							S(x + V * _),
							S(E + d),
							S(x),
							S(E + d),
						],
					},
					{
						type: "C",
						points: [
							S(x - V * _),
							S(E + d),
							S(x - V),
							S(E + d * _),
							S(x - V),
							S(E),
						],
					},
					{ type: "Z", points: [] },
				];
				break;
			case "triangle":
				b = c(W, M);
				break;
		}
		return (
			s(),
			b.length &&
				(v === "rect" || v === "ellipse" || v === "triangle") &&
				(i.value = "select"),
			{ commands: [...q, ...b], cutPiecePaths: [] }
		);
	}
	function y(H, q) {
		const v = { x: S(H.x), y: S(H.y) },
			W = [...q],
			M = t.tempPoints;
		if (M.length === 0)
			return (
				(t.isDrawing = !0),
				(t.tempPoints = [v]),
				W.push({ type: "M", points: [v.x, v.y] }),
				W
			);
		const b = M[0],
			x = M[M.length - 1],
			E = 8,
			V = v.x - b.x,
			d = v.y - b.y;
		return M.length >= 2 && V * V + d * d <= E * E
			? (W.push({ type: "C", points: [x.x, x.y, b.x, b.y, b.x, b.y] }),
				W.push({ type: "Z", points: [] }),
				(i.value = "select"),
				s(),
				W)
			: (W.push({ type: "C", points: [x.x, x.y, v.x, v.y, v.x, v.y] }),
				(t.tempPoints = [...M, v]),
				W);
	}
	function c(H, q) {
		const v = Math.min(H.x, q.x),
			W = Math.max(H.x, q.x),
			M = Math.min(H.y, q.y),
			b = Math.max(H.y, q.y);
		return [
			{ type: "M", points: [S((v + W) / 2), S(M)] },
			{ type: "L", points: [S(W), S(b)] },
			{ type: "L", points: [S(v), S(b)] },
			{ type: "Z", points: [] },
		];
	}
	function B() {
		s();
	}
	function X(H) {
		if (t.tempPoints.length >= 2) {
			const q = [...H],
				v = t.tempPoints,
				W = v[0],
				M = v[v.length - 1],
				b = q[q.length - 1];
			return (
				(b?.type === "C" && b.points[4] === W.x && b.points[5] === W.y) ||
					q.push({ type: "C", points: [M.x, M.y, W.x, W.y, W.x, W.y] }),
				q.push({ type: "Z", points: [] }),
				(i.value = "select"),
				s(),
				q
			);
		}
		return null;
	}
	return {
		currentTool: i,
		drawingState: t,
		resetDrawingState: s,
		startDrawing: p,
		updateDrawingPreview: e,
		finishDrawing: u,
		addPenPoint: y,
		finishPenDrawing: B,
		closePenPath: X,
	};
}
function cr(o = "") {
	const n = Je({ past: [], future: [] }),
		i = dt(() => n.past.length > 0),
		t = dt(() => n.future.length > 0);
	function s(y) {
		if (n.past[n.past.length - 1] === y) return;
		n.past.push(y), (n.future = []);
		const B = 50;
		n.past.length > B && n.past.shift();
	}
	function p(y) {
		return i.value ? (n.future.push(y), n.past.pop()) : null;
	}
	function e(y) {
		return t.value ? (n.past.push(y), n.future.pop()) : null;
	}
	function u() {
		(n.past = []), (n.future = []);
	}
	return {
		history: n,
		canUndo: i,
		canRedo: t,
		pushState: s,
		undo: p,
		redo: e,
		reset: u,
	};
}
function ur(o) {
	const {
			internalCommands: n,
			selectedCommandIndex: i,
			selectedAnchorInfo: t,
			showHandles: s,
			dragging: p,
			shapeDragging: e,
			saveHistory: u,
			translateCommandPoints: y,
			baseSelectCommand: c,
			mousePosition: B,
		} = o,
		X = Ct(null),
		H = Ct([]),
		q = Ct(null),
		v = Ct(null);
	let W = !1;
	function M(k, w) {
		if (k === w) return !0;
		if (!k || !w || k.length !== w.length) return !1;
		for (let Y = 0; Y < k.length; Y += 1) {
			const F = k[Y],
				Q = w[Y];
			if (F?.type !== Q?.type) return !1;
			const rt = Array.isArray(F?.points) ? F.points : [],
				ft = Array.isArray(Q?.points) ? Q.points : [];
			if (rt.length !== ft.length) return !1;
			for (let bt = 0; bt < rt.length; bt += 1)
				if (rt[bt] !== ft[bt]) return !1;
		}
		return !0;
	}
	function b(k, w) {
		(W = !0),
			(q.value = k),
			(v.value = k ? (w ?? null) : null),
			queueMicrotask(() => {
				W = !1;
			});
	}
	function x(k) {
		if (!k) {
			b(null, null);
			return;
		}
		if (Array.isArray(k)) {
			b(k, null);
			return;
		}
		const w = k,
			Y = Array.isArray(w.commands) ? w.commands : [],
			F =
				w.anchorOffset &&
				Number.isFinite(w.anchorOffset.dx) &&
				Number.isFinite(w.anchorOffset.dy)
					? { dx: w.anchorOffset.dx, dy: w.anchorOffset.dy }
					: null;
		b(Y.length ? Y : null, F);
	}
	ye(q, (k, w) => {
		W || M(k, w) || (v.value = null);
	});
	function E() {
		(!H.value.length && X.value === null) || ((X.value = null), (H.value = []));
	}
	function V(k) {
		const w = n.value;
		if (!w.length || k === null || k < 0 || k >= w.length) return null;
		let Y = k;
		for (; Y > 0 && w[Y].type !== "M"; ) Y -= 1;
		return w[Y]?.type === "M" ? Y : null;
	}
	function d(k) {
		const w = n.value;
		if (!w.length) return [];
		if (k === null || k < 0 || k >= w.length) return [];
		let Y = k;
		for (; Y > 0 && w[Y].type !== "M"; ) Y -= 1;
		w[Y]?.type !== "M" && (Y = Math.max(0, Math.min(Y, w.length - 1)));
		const F = [];
		for (let Q = Y; Q < w.length; Q += 1) {
			const rt = w[Q].type;
			if ((Q !== Y && rt === "M") || (F.push(Q), rt === "Z")) break;
		}
		return F;
	}
	function _(k, w) {
		if (w?.source === "subpath" && k !== null) {
			const Y = V(k);
			if (Y === null) {
				E(), c(null);
				return;
			}
			const F = H.value.includes(Y);
			if (w.additive) {
				const Q = new Set(H.value);
				if (F) {
					Q.delete(Y);
					const rt = Array.from(Q).sort((wt, ut) => wt - ut);
					if (((H.value = rt), !rt.length)) {
						(X.value = null), c(null);
						return;
					}
					const ft =
						typeof X.value == "number" && rt.includes(X.value)
							? X.value
							: rt[rt.length - 1];
					X.value = ft;
					const bt = d(ft);
					c(bt[0] ?? ft);
					return;
				}
				Q.add(Y), (H.value = Array.from(Q).sort((rt, ft) => rt - ft));
			} else (w.preserve && F) || (H.value = [Y]);
			(X.value = Y), c(k);
			return;
		}
		E(), c(k);
	}
	ye(i, (k) => {
		if (k === null) {
			E();
			return;
		}
		if (!H.value.length) return;
		const w = V(k);
		(w === null || !H.value.includes(w)) && E();
	});
	function O(k) {
		if (H.value.length) return [...H.value];
		const w = V(typeof k == "number" ? k : i.value);
		return w === null ? [] : [w];
	}
	function L(k) {
		if (t.value) return !1;
		let w = H.value.length
			? [...H.value]
			: typeof X.value == "number"
				? [X.value]
				: [];
		if (!w.length) {
			const Q = V(i.value);
			Q !== null && (w = [Q]);
		}
		if (
			!w.length ||
			!s.value ||
			p.point ||
			e.pointerId !== null ||
			wn(k.target)
		)
			return !1;
		const Y = Array.from(new Set(w.flatMap((Q) => d(Q))));
		if (!Y.length) return !1;
		k.preventDefault(), u();
		const F = n.value;
		if (
			(Y.filter((Q) => Q >= 0 && Q < F.length)
				.sort((Q, rt) => rt - Q)
				.forEach((Q) => {
					F.splice(Q, 1);
				}),
			E(),
			(t.value = null),
			F.length)
		) {
			const Q = Math.min(...w),
				rt = Math.min(Q, F.length - 1);
			F[rt] ? _(rt) : _(null);
		} else _(null);
		return !0;
	}
	function $(k) {
		if (wn(k.target)) return null;
		const w = n.value;
		if (!w.length) return null;
		const Y = O();
		if (!Y.length) return null;
		const F = Y.flatMap((wt) => d(wt));
		if (!F.length) return null;
		const Q = [];
		for (const wt of F) {
			const ut = w[wt];
			ut && Q.push({ type: ut.type, points: [...ut.points] });
		}
		if (!Q.length) return null;
		const rt = B.value,
			ft = Yn(Q),
			bt =
				rt && ft
					? {
							dx: rt.x - (ft.minX + ft.width / 2),
							dy: rt.y - (ft.minY + ft.height / 2),
						}
					: null;
		return b(Q, bt), { commands: Q, anchorOffset: bt };
	}
	function at(k) {
		const w = q.value;
		if (!w || !w.length || wn(k.target) || p.point || e.pointerId !== null)
			return !1;
		const Y = n.value,
			F = O();
		let Q = Y.length;
		if (F.length) {
			const xt = F.map((Pt) => d(Pt))
				.filter((Pt) => Pt.length)
				.map((Pt) => Pt[Pt.length - 1]);
			xt.length && (Q = Math.max(...xt) + 1);
		}
		const rt = B.value;
		let ft = 10,
			bt = 10;
		if (rt) {
			const xt = Yn(w),
				Pt = v.value;
			if (xt && Pt) {
				const Ot = xt.minX + xt.width / 2,
					Zt = xt.minY + xt.height / 2,
					At = rt.x - Pt.dx,
					Dt = rt.y - Pt.dy;
				(ft = At - Ot), (bt = Dt - Zt);
			} else {
				let Ot = null;
				for (const Zt of w)
					if (Zt.type === "M" && Zt.points.length >= 2) {
						Ot = { x: Zt.points[0], y: Zt.points[1] };
						break;
					}
				Ot && ((ft = rt.x - Ot.x), (bt = rt.y - Ot.y));
			}
		}
		const wt = w.map((xt) =>
			xt.type === "Z"
				? { type: xt.type, points: [...xt.points] }
				: { type: xt.type, points: y(xt, ft, bt) },
		);
		if (!wt.length) return !1;
		const ut = [];
		if (
			(wt.forEach((xt, Pt) => {
				xt.type === "M" && ut.push(Pt);
			}),
			u(),
			Y.splice(Q, 0, ...wt),
			_(Q, { source: "subpath" }),
			ut.length > 1)
		) {
			const xt = ut.map((Pt) => Q + Pt);
			(X.value = xt[0] ?? null), (H.value = xt);
		}
		return !0;
	}
	function pt(k) {
		const w = O(k);
		if (!w.length) return [];
		const Y = new Set();
		return (
			w.forEach((F) => {
				d(F).forEach((Q) => Y.add(Q));
			}),
			Array.from(Y).sort((F, Q) => F - Q)
		);
	}
	function G(k) {
		if ((k && wn(k.target)) || !s.value) return !1;
		const w = n.value;
		if (!w.length) return !1;
		const Y = new Set();
		w.forEach((rt, ft) => {
			rt.type === "M" && Y.add(ft);
		}),
			!Y.size && w.length && Y.add(0);
		const F = Array.from(Y).sort((rt, ft) => rt - ft);
		if (!F.length) return !1;
		H.value = F;
		const Q =
			typeof X.value == "number" && F.includes(X.value)
				? X.value
				: (F[0] ?? null);
		return (
			(X.value = Q), c(typeof Q == "number" ? Q : null), (t.value = null), !0
		);
	}
	function Z(k) {
		if (wn(k.target) || p.point || e.pointerId !== null) return !1;
		const w = n.value;
		if (!w.length) return !1;
		const Y = O();
		if (!Y.length) return !1;
		const F = [];
		return (
			Y.forEach((Q) => {
				const rt = d(Q);
				if (!rt.length) return;
				const ft = rt.map((wt) => w[wt]).filter((wt) => !!wt);
				if (ft.length !== rt.length) return;
				const bt = dr(ft);
				bt && bt.length === ft.length && F.push({ indices: rt, commands: bt });
			}),
			F.length
				? (k.preventDefault(),
					u(),
					F.forEach(({ indices: Q, commands: rt }) => {
						Q.forEach((ft, bt) => {
							const wt = rt[bt];
							n.value[ft] = { type: wt.type, points: [...wt.points] };
						});
					}),
					(t.value = null),
					!0)
				: !1
		);
	}
	return {
		activeSubpathRoot: X,
		activeSubpathRoots: H,
		clipboardSubpath: q,
		importClipboard: x,
		selectCommand: _,
		tryDeleteActiveSubpath: L,
		copyActiveSubpath: $,
		pasteCopiedSubpath: at,
		findSubpathRootIndex: V,
		getSubpathIndices: d,
		getSelectedSubpathIndices: pt,
		selectAllSubpaths: G,
		reverseSelectedSubpaths: Z,
	};
}
function wn(o) {
	if (!o || !(o instanceof HTMLElement)) return !1;
	const n = o.tagName;
	return n === "INPUT" || n === "TEXTAREA" || n === "SELECT"
		? !0
		: o.isContentEditable;
}
function dr(o) {
	if (!o.length) return null;
	const n = o[0];
	if (n.type !== "M" || n.points.length < 2) return null;
	const i = { x: n.points[0], y: n.points[1] };
	let t = { ...i };
	const s = [],
		p = o[o.length - 1]?.type === "Z";
	for (let y = 1; y < o.length; y += 1) {
		const c = o[y];
		switch (c.type) {
			case "L": {
				if (c.points.length < 2) return null;
				const B = { x: c.points[0], y: c.points[1] };
				s.push({ command: c, type: c.type, start: { ...t }, end: B }), (t = B);
				break;
			}
			case "C": {
				if (c.points.length < 6) return null;
				const B = { x: c.points[4], y: c.points[5] };
				s.push({ command: c, type: c.type, start: { ...t }, end: B }), (t = B);
				break;
			}
			case "Q": {
				if (c.points.length < 4) return null;
				const B = { x: c.points[2], y: c.points[3] };
				s.push({ command: c, type: c.type, start: { ...t }, end: B }), (t = B);
				break;
			}
			case "A": {
				if (c.points.length < 7) return null;
				const B = { x: c.points[5], y: c.points[6] };
				s.push({ command: c, type: c.type, start: { ...t }, end: B }), (t = B);
				break;
			}
			case "Z": {
				t = { ...i };
				break;
			}
			case "M":
				return null;
			default:
				return null;
		}
	}
	if (!s.length) return o.map(fr);
	const e = { ...s[s.length - 1].end },
		u = [{ type: "M", points: [S(e.x), S(e.y)] }];
	for (let y = s.length - 1; y >= 0; y -= 1) {
		const c = s[y],
			B = c.start;
		switch (c.type) {
			case "L":
				u.push({ type: "L", points: [S(B.x), S(B.y)] });
				break;
			case "Q": {
				const [X, H] = c.command.points;
				u.push({ type: "Q", points: [S(X), S(H), S(B.x), S(B.y)] });
				break;
			}
			case "C": {
				const [X, H, q, v] = c.command.points;
				u.push({ type: "C", points: [S(q), S(v), S(X), S(H), S(B.x), S(B.y)] });
				break;
			}
			case "A": {
				const [X, H, q, v, W] = c.command.points;
				u.push({
					type: "A",
					points: [X, H, q, v, W === 0 ? 1 : 0, S(B.x), S(B.y)],
				});
				break;
			}
		}
	}
	return p && u.push({ type: "Z", points: [] }), u;
}
function fr(o) {
	return { type: o.type, points: [...o.points] };
}
function hr(o, n, i, t, s) {
	const p = Ct(null),
		e = dt(() => Math.max(t.value ?? 50, 1)),
		u = dt(() => {
			const M = o.value;
			if (
				!M ||
				!Number.isFinite(M.width) ||
				!Number.isFinite(M.height) ||
				M.width <= 0 ||
				M.height <= 0
			)
				return null;
			const b = s.value,
				x = Math.max(b.width, 0),
				E = Math.max(b.height, 0);
			if (!x || !E) return null;
			const V = Math.min(x / M.width, E / M.height);
			if (!Number.isFinite(V) || V <= 0) return null;
			const d = M.width * V,
				_ = M.height * V,
				O = (x - d) / 2,
				L = (E - _) / 2;
			return {
				canvasWidth: x,
				canvasHeight: E,
				drawWidth: d,
				drawHeight: _,
				offsetX: O,
				offsetY: L,
			};
		}),
		y = (M) => {
			const b = Me(M, 0, 1),
				x = u.value;
			if (!x || !x.canvasWidth || !x.drawWidth) return b;
			const E = x.offsetX + b * x.drawWidth;
			return Number.isFinite(E)
				? Me(x.canvasWidth ? E / x.canvasWidth : b, 0, 1)
				: b;
		},
		c = (M) => {
			const b = Me(M, 0, 1),
				x = u.value;
			if (!x || !x.canvasHeight || !x.drawHeight) return b;
			const E = x.offsetY + b * x.drawHeight;
			return Number.isFinite(E)
				? Me(x.canvasHeight ? E / x.canvasHeight : b, 0, 1)
				: b;
		},
		B = dt(() => {
			if (!n.value || !o.value) return [];
			const { minX: M, width: b } = o.value;
			if (!Number.isFinite(b) || b <= 0) return [];
			const x = e.value,
				E = [],
				V = Math.floor(M / x) * x,
				d = Math.ceil((M + b) / x) * x;
			for (let _ = V; _ <= d; _ += x) {
				const O = (_ - M) / b;
				if (O < 0 || O > 1) continue;
				const L = y(O);
				E.push({ value: S(_), position: L, isOrigin: Math.abs(_) < x * 0.01 });
			}
			return E;
		}),
		X = dt(() => {
			if (!n.value || !o.value) return [];
			const { minY: M, height: b } = o.value;
			if (!Number.isFinite(b) || b <= 0) return [];
			const x = e.value,
				E = [],
				V = Math.floor(M / x) * x,
				d = Math.ceil((M + b) / x) * x;
			for (let _ = V; _ <= d; _ += x) {
				const O = (_ - M) / b;
				if (O < 0 || O > 1) continue;
				const L = c(O);
				E.push({ value: S(_), position: L, isOrigin: Math.abs(_) < x * 0.01 });
			}
			return E;
		}),
		H = dt(() => {
			if (!n.value || !i.value || !o.value) return [];
			const { minX: M, width: b } = o.value;
			if (!Number.isFinite(b) || b <= 0) return [];
			const x = e.value,
				E = [],
				V = Math.floor(M / x) * x,
				d = Math.ceil((M + b) / x) * x;
			for (let _ = V; _ <= d; _ += x) {
				const O = (_ - M) / b;
				if (O < 0 || O > 1) continue;
				const L = y(O);
				E.push({ value: S(_), position: L, text: String(S(_)) });
			}
			return E;
		}),
		q = dt(() => {
			if (!n.value || !i.value || !o.value) return [];
			const { minY: M, height: b } = o.value;
			if (!Number.isFinite(b) || b <= 0) return [];
			const x = e.value,
				E = [],
				V = Math.floor(M / x) * x,
				d = Math.ceil((M + b) / x) * x;
			for (let _ = V; _ <= d; _ += x) {
				const O = (_ - M) / b;
				if (O < 0 || O > 1) continue;
				const L = c(O);
				E.push({ value: S(_), position: L, text: String(S(-_)) });
			}
			return E;
		});
	function v(M, b) {
		M === null || b === null ? (p.value = null) : (p.value = { x: M, y: b });
	}
	const W = dt(() => {
		if (!p.value) return "";
		const { x: M, y: b } = p.value;
		return `X: ${Math.round(M)}, Y: ${Math.round(-b)}`;
	});
	return {
		xAxisTicks: B,
		yAxisTicks: X,
		xAxisLabels: H,
		yAxisLabels: q,
		mousePosition: p,
		mouseCoordinatesText: W,
		updateMousePosition: v,
	};
}
function pr(o) {
	const {
			internalCommands: n,
			activeSubpathRoots: i,
			getSubpathIndices: t,
			saveHistory: s,
			convertEventToLocalPoint: p,
		} = o,
		e = Je({
			pointerId: null,
			element: null,
			handle: null,
			initialBounds: null,
			initialOriginalBounds: null,
			initialCommands: [],
			affectedIndices: [],
			startPoint: null,
			startLocalPoint: null,
			hasMoved: !1,
			rotationBoxSnapshot: null,
		}),
		u = Ct(0),
		y = dt(() => i.value.length > 0),
		c = dt(() => {
			if (!y.value) return null;
			const b = n.value;
			if (!b.length) return null;
			const x = [];
			if (
				(i.value.forEach((Z) => {
					const k = t(Z);
					x.push(...k);
				}),
				!x.length)
			)
				return null;
			const E = x.map((Z) => b[Z]).filter((Z) => !!Z);
			if (!E.length) return null;
			const V = Yn(E);
			if (!V) return null;
			const d = 0.08,
				_ = V.width * d,
				O = V.height * d,
				L = {
					minX: V.minX - _,
					minY: V.minY - O,
					width: V.width + _ * 2,
					height: V.height + O * 2,
				},
				$ = (Z) => {
					const k = Math.max(
						10,
						Math.min(48, Math.max(Z.width, Z.height) * 0.05),
					);
					return {
						type: "rotation",
						position: "rotation",
						x: Z.minX + Z.width / 2,
						y: Z.minY - k,
						cursor: "grab",
					};
				},
				at = (Z) => {
					const { minX: k, minY: w, width: Y, height: F } = Z,
						Q = k + Y,
						rt = w + F,
						ft = k + Y / 2,
						bt = w + F / 2;
					return [
						{
							type: "corner",
							position: "nw",
							x: k,
							y: w,
							cursor: "nwse-resize",
						},
						{
							type: "corner",
							position: "ne",
							x: Q,
							y: w,
							cursor: "nesw-resize",
						},
						{
							type: "corner",
							position: "sw",
							x: k,
							y: rt,
							cursor: "nesw-resize",
						},
						{
							type: "corner",
							position: "se",
							x: Q,
							y: rt,
							cursor: "nwse-resize",
						},
						{ type: "edge", position: "n", x: ft, y: w, cursor: "ns-resize" },
						{ type: "edge", position: "e", x: Q, y: bt, cursor: "ew-resize" },
						{ type: "edge", position: "s", x: ft, y: rt, cursor: "ns-resize" },
						{ type: "edge", position: "w", x: k, y: bt, cursor: "ew-resize" },
					];
				},
				pt = e.rotationBoxSnapshot;
			return Math.abs(u.value) > 0 &&
				pt !== null &&
				e.handle?.type === "rotation" &&
				pt
				? {
						bounds: pt.bounds,
						originalBounds: pt.originalBounds,
						handles: at(pt.bounds),
						rotation: $(pt.bounds),
						angle: u.value,
					}
				: {
						bounds: L,
						originalBounds: V,
						handles: at(L),
						rotation: $(L),
						angle: 0,
					};
		});
	function B(b = !0) {
		if (b && e.pointerId !== null && e.element)
			try {
				e.element.releasePointerCapture(e.pointerId);
			} catch {}
		(e.pointerId = null),
			(e.element = null),
			(e.handle = null),
			(e.initialBounds = null),
			(e.initialOriginalBounds = null),
			(e.initialCommands = []),
			(e.affectedIndices = []),
			(e.startPoint = null),
			(e.startLocalPoint = null),
			(e.hasMoved = !1),
			(e.rotationBoxSnapshot = null),
			(u.value = 0);
	}
	function X(b, x, E, V) {
		if (!b.isPrimary || (b.pointerType !== "touch" && b.button !== 0))
			return !1;
		const d = n.value;
		if (!d.length) return !1;
		const _ = [];
		if (
			(i.value.forEach((O) => {
				const L = t(O);
				_.push(...L);
			}),
			!_.length)
		)
			return !1;
		B(),
			(e.pointerId = b.pointerId),
			(e.element = b.target),
			(e.handle = x),
			(e.initialBounds = { ...E }),
			(e.initialOriginalBounds = { ...V }),
			(e.initialCommands = kn(d)),
			(e.affectedIndices = _),
			(e.startPoint = { x: b.clientX, y: b.clientY }),
			(e.startLocalPoint = p?.(b) ?? null),
			(e.hasMoved = !1),
			(e.rotationBoxSnapshot =
				x.type === "rotation"
					? { bounds: { ...E }, originalBounds: { ...V } }
					: null),
			(u.value = 0);
		try {
			e.element?.setPointerCapture(b.pointerId);
		} catch {}
		return !0;
	}
	function H(b, x = !1) {
		if (
			!e.handle ||
			!e.initialBounds ||
			!e.initialOriginalBounds ||
			!e.initialCommands.length ||
			!e.affectedIndices.length
		)
			return !1;
		const E = e.handle,
			V = e.initialBounds,
			d = e.initialOriginalBounds,
			{ minX: _, minY: O, width: L, height: $ } = V,
			{ minX: at, minY: pt, width: G, height: Z } = d,
			k = at + G / 2,
			w = pt + Z / 2;
		if (E.type === "rotation") {
			let wt = -Math.PI / 2;
			const ut = e.startLocalPoint;
			ut && (wt = Math.atan2(ut.y - w, ut.x - k));
			const xt = Math.atan2(b.y - w, b.x - k);
			let Pt = Math.atan2(Math.sin(xt - wt), Math.cos(xt - wt));
			if (x) {
				const Nt = Math.PI / 12;
				Pt = Math.round(Pt / Nt) * Nt;
			}
			const Ot = Math.cos(Pt),
				Zt = Math.sin(Pt),
				At = (Pt * 180) / Math.PI;
			u.value = Pt;
			const Dt = e.initialCommands.map((Nt, A) => {
				if (!e.affectedIndices.includes(A)) return Nt;
				if (Nt.type === "Z" || Nt.points.length === 0) return { ...Nt };
				const U = [];
				if (Nt.type === "A") {
					const [m, z, I, ht, lt, gt, h] = Nt.points,
						f = gt - k,
						et = h - w;
					U.push(
						S(m),
						S(z),
						S((((I + At) % 360) + 360) % 360),
						ht,
						lt,
						S(k + f * Ot - et * Zt),
						S(w + f * Zt + et * Ot),
					);
				} else
					for (let m = 0; m < Nt.points.length; m += 2) {
						const z = Nt.points[m] - k,
							I = Nt.points[m + 1] - w;
						U.push(S(k + z * Ot - I * Zt), S(w + z * Zt + I * Ot));
					}
				return { type: Nt.type, points: U };
			});
			return (n.value = Dt), !0;
		}
		let Y = 1,
			F = 1,
			Q = at,
			rt = pt;
		if (E.type === "corner") {
			const wt = _ + L / 2,
				ut = O + $ / 2,
				xt = Math.abs(E.x - wt),
				Pt = Math.abs(E.y - ut),
				Ot = Math.abs(b.x - wt),
				Zt = Math.abs(b.y - ut),
				At = xt > 0.001 ? Ot / xt : 1,
				Dt = Pt > 0.001 ? Zt / Pt : 1;
			(Y = F = (At + Dt) / 2), (Q = k - (G * Y) / 2), (rt = w - (Z * F) / 2);
		} else if (E.type === "edge")
			switch (E.position) {
				case "n":
					(F = $ > 0.001 ? (O + $ - b.y) / $ : 1), (rt = pt + Z - Z * F);
					break;
				case "s":
					F = $ > 0.001 ? (b.y - O) / $ : 1;
					break;
				case "w":
					(Y = L > 0.001 ? (_ + L - b.x) / L : 1), (Q = at + G - G * Y);
					break;
				case "e":
					Y = L > 0.001 ? (b.x - _) / L : 1;
					break;
			}
		const ft = 0.01;
		(Y = Math.max(Y, ft)), (F = Math.max(F, ft));
		const bt = e.initialCommands.map((wt, ut) => {
			if (!e.affectedIndices.includes(ut)) return wt;
			if (wt.type === "Z" || wt.points.length === 0) return { ...wt };
			const xt = [];
			for (let Pt = 0; Pt < wt.points.length; Pt += 2) {
				const Ot = wt.points[Pt],
					Zt = wt.points[Pt + 1],
					At = (Ot - at) * Y,
					Dt = (Zt - pt) * F;
				xt.push(Q + At), xt.push(rt + Dt);
			}
			return { type: wt.type, points: xt };
		});
		return (n.value = bt), !0;
	}
	function q() {
		B();
	}
	function v(b, x, E, V) {
		b.preventDefault(), b.stopPropagation(), X(b, x, E, V);
	}
	function W(b, x) {
		if (e.pointerId === null || e.pointerId !== b.pointerId) return !1;
		const E = x(b);
		if (!E) return !1;
		if (!e.hasMoved) {
			const V = b.clientX - (e.startPoint?.x ?? 0),
				d = b.clientY - (e.startPoint?.y ?? 0);
			if (Math.abs(V) > 2 || Math.abs(d) > 2) s(), (e.hasMoved = !0);
			else return !1;
		}
		return b.preventDefault(), H(E, b.shiftKey), !0;
	}
	function M(b) {
		return e.pointerId === null || e.pointerId !== b.pointerId ? !1 : (q(), !0);
	}
	return {
		showTransformBox: y,
		transformBox: c,
		transformAngle: u,
		transformDragging: e,
		handleTransformHandlePointerDown: v,
		onTransformPointerMove: W,
		onTransformPointerUp: M,
		resetTransformDragState: B,
	};
}
const Dn = 12,
	eo = 32,
	Wn = 1e-6,
	mr = 1e-4,
	gr = 1e-6;
function nn(o, n) {
	return (
		typeof o == "number" &&
		typeof n == "number" &&
		Number.isFinite(o) &&
		Number.isFinite(n)
	);
}
function yr(o, n) {
	if (!o.length || n < 0 || n >= o.length) return null;
	let i = n;
	for (; i > 0 && o[i].type !== "M"; ) i -= 1;
	return o[i]?.type === "M" ? i : null;
}
function vr(o) {
	const n = [];
	return (
		o.forEach((i, t) => {
			i.type === "M" && n.push(t);
		}),
		n
	);
}
function Lo(o, n) {
	const i = [];
	if (n < 0 || n >= o.length || o[n]?.type !== "M") return i;
	for (let t = n; t < o.length; t += 1) {
		const s = o[t].type;
		if ((t !== n && s === "M") || (i.push(t), s === "Z")) break;
	}
	return i;
}
function xr(o, n, i, t, s) {
	const p = 1 - s,
		e = p * p * p,
		u = 3 * p * p * s,
		y = 3 * p * s * s,
		c = s * s * s;
	return {
		x: e * o.x + u * n.x + y * i.x + c * t.x,
		y: e * o.y + u * n.y + y * i.y + c * t.y,
	};
}
function br(o, n, i, t) {
	const s = 1 - t,
		p = s * s,
		e = 2 * s * t,
		u = t * t;
	return { x: p * o.x + e * n.x + u * i.x, y: p * o.y + e * n.y + u * i.y };
}
function wr(o, n) {
	const i = Lo(o, n),
		t = i.length ? o[i[0]] : void 0;
	if (!t || t.type !== "M" || !nn(t.points[0], t.points[1])) return null;
	const s = { x: t.points[0], y: t.points[1] };
	let p = { ...s };
	const e = [{ ...s }];
	let u = !1;
	const y = (X, H) => {
			nn(X, H) && e.push({ x: X, y: H });
		},
		c = (X, H, q) => {
			for (let v = 1; v <= Dn; v += 1) {
				const W = xr(p, X, H, q, v / Dn);
				y(W.x, W.y);
			}
		};
	for (const X of i.slice(1)) {
		const H = o[X];
		if (!H) continue;
		const q = H.points;
		switch (H.type) {
			case "L": {
				const v = q[0],
					W = q[1];
				if (!nn(v, W)) break;
				y(v, W), (p = { x: v, y: W });
				break;
			}
			case "C": {
				const v = { x: q[0], y: q[1] },
					W = { x: q[2], y: q[3] },
					M = { x: q[4], y: q[5] };
				if (!nn(v.x, v.y) || !nn(W.x, W.y) || !nn(M.x, M.y)) break;
				c(v, W, M), (p = M);
				break;
			}
			case "Q": {
				const v = { x: q[0], y: q[1] },
					W = { x: q[2], y: q[3] };
				if (!nn(v.x, v.y) || !nn(W.x, W.y)) break;
				for (let M = 1; M <= Dn; M += 1) {
					const b = br(p, v, W, M / Dn);
					y(b.x, b.y);
				}
				p = W;
				break;
			}
			case "A": {
				const [v, W, M = 0, b = 0, x = 0, E, V] = q;
				if (![v, W, M, b, x, E, V].every((_) => Number.isFinite(_))) break;
				const d = ko(p.x, p.y, v, W, M, b, x, E, V);
				if (d.length)
					for (const [_, O, L, $, at, pt] of d)
						c({ x: _, y: O }, { x: L, y: $ }, { x: at, y: pt }),
							(p = { x: at, y: pt });
				else y(E, V), (p = { x: E, y: V });
				break;
			}
			case "Z": {
				(u = !0), e.push({ ...s }), (p = { ...s });
				break;
			}
		}
	}
	if (e.length < 2) return null;
	const B = e.reduce(
		(X, H) => ({
			minX: Math.min(X.minX, H.x),
			minY: Math.min(X.minY, H.y),
			maxX: Math.max(X.maxX, H.x),
			maxY: Math.max(X.maxY, H.y),
		}),
		{ minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 },
	);
	if (!u) {
		const X = e[e.length - 1],
			H = Sr(B);
		Math.abs(X.x - s.x) <= H &&
			Math.abs(X.y - s.y) <= H &&
			((u = !0), (X.x !== s.x || X.y !== s.y) && e.push({ ...s }));
	}
	return { closed: u, points: e, bounds: B };
}
function Cr(o, n) {
	if (n.length < 3) return !1;
	let i = !1;
	for (let t = 0, s = n.length - 1; t < n.length; s = t++) {
		const p = n[t],
			e = n[s];
		if (p.y > o.y == e.y > o.y) continue;
		const u = ((e.x - p.x) * (o.y - p.y)) / (e.y - p.y) + p.x;
		o.x < u && (i = !i);
	}
	return i;
}
function kr(o, n) {
	return (
		n.minX >= o.minX - Wn &&
		n.maxX <= o.maxX + Wn &&
		n.minY >= o.minY - Wn &&
		n.maxY <= o.maxY + Wn
	);
}
function Sr(o) {
	const n = Math.hypot(o.maxX - o.minX, o.maxY - o.minY);
	return Math.max(gr, n * mr);
}
function _r(o) {
	const n = o.points;
	if (n.length <= eo) return n;
	const i = [];
	for (let t = 0; t < eo; t += 1) {
		const s = Math.floor((t * n.length) / eo);
		i.push(n[s]);
	}
	return i;
}
function Pr(o, n) {
	if (!n.closed || !kr(n.bounds, o.bounds)) return !1;
	const i = _r(o);
	if (!i.length) return !1;
	let t = 0;
	for (const s of i) Cr(s, n.points) && (t += 1);
	return t / i.length > 0.5;
}
function Mr(o, n) {
	if (!o.length || !n.length) return [...n];
	const i = new Set();
	for (const u of n) {
		const y = yr(o, u);
		y !== null && i.add(y);
	}
	if (!i.size) return [...n];
	const t = new Map(),
		s = (u) => (t.has(u) || t.set(u, wr(o, u)), t.get(u) ?? null),
		p = new Set();
	for (const u of i) {
		const y = s(u);
		if (!(!y || !y.closed))
			for (const c of vr(o)) {
				if (c === u || i.has(c) || p.has(c)) continue;
				const B = s(c);
				B && Pr(B, y) && p.add(c);
			}
	}
	if (!p.size) return [...n];
	const e = new Set(n);
	for (const u of p) for (const y of Lo(o, u)) e.add(y);
	return Array.from(e).sort((u, y) => u - y);
}
function Tr(o, n, i) {
	const {
			modelValue: t,
			width: s,
			height: p,
			showGrid: e,
			showHandles: u,
			showAnchors: y,
			showControls: c,
			allowCreateFromEmpty: B,
			showToolbar: X,
			defaultTool: H,
			enableUndo: q,
			showAxis: v,
			showAxisLabels: W,
			showMouseCoords: M,
			axisLabelStep: b,
			initClipboard: x,
			syncViewportToContent: E,
			showVisualBounds: V,
			visualBounds: d,
		} = No(o),
		_ = dt(() => n.value.light),
		O = dt(() => n.value.dark),
		L = Ct(!1);
	if (typeof window < "u" && typeof window.matchMedia == "function") {
		const r = window.matchMedia("(prefers-color-scheme: dark)"),
			g = (N) => {
				L.value = N;
			};
		g(r.matches);
		const T = (N) => g(N.matches);
		typeof r.addEventListener == "function"
			? (r.addEventListener("change", T),
				to(() => r.removeEventListener("change", T)))
			: typeof r.addListener == "function" &&
				(r.addListener(T), to(() => r.removeListener(T)));
	}
	function $(r) {
		return dt(() => {
			const g = _.value[r],
				T = O.value[r];
			return L.value ? (T ?? g) : g;
		});
	}
	const at = dt(() => _.value.padding),
		pt = dt(() => _.value.gridStep),
		G = $("strokeWidth"),
		Z = $("fillColor"),
		k = $("fillOpacity"),
		w = $("strokeColor"),
		Y = dt(() => _.value.gridBackgroundColor),
		F = dt(() => O.value.gridBackgroundColor),
		Q = dt(() => _.value.gridLineColor),
		rt = dt(() => O.value.gridLineColor),
		ft = Ct(null),
		bt = Ct({
			width: Math.max(s.value ?? 0, 1),
			height: Math.max(p.value ?? 0, 1),
		});
	let wt = null;
	const ut = Ct([]),
		xt = Ct(""),
		Pt = Ct(null),
		Ot = Ct(null),
		Zt = Je({ point: null, pointerId: null, element: null }),
		At = Je({
			pointerId: null,
			element: null,
			startPoint: null,
			initialCommands: [],
			affectedIndices: [],
			hasMoved: !1,
		}),
		Dt = Je({
			isActive: !1,
			startPoint: null,
			currentPoint: null,
			pointerId: null,
			element: null,
		}),
		Nt = Ct([]),
		A = Ct(null),
		U = Ct(null),
		m = Ct(null),
		z = dt(() => E?.value !== !1),
		I = lr(i, { onBeforeToolChange: gn }),
		ht = dt(() => I.currentTool.value === "select");
	H?.value && (I.currentTool.value = H.value);
	const lt = q?.value ? cr(t.value) : null;
	function gt() {
		lt && xt.value && lt.pushState(xt.value);
	}
	const {
			selectedCommandIndex: h,
			selectedAnchorInfo: f,
			selectCommand: et,
			handleKeydown: R,
		} = jo({ internalCommands: ut, showHandles: u, dragging: Zt }),
		{
			activeSubpathRoot: a,
			activeSubpathRoots: C,
			clipboardSubpath: P,
			importClipboard: K,
			selectCommand: nt,
			tryDeleteActiveSubpath: ct,
			copyActiveSubpath: J,
			pasteCopiedSubpath: j,
			findSubpathRootIndex: It,
			getSubpathIndices: vt,
			getSelectedSubpathIndices: Xt,
			selectAllSubpaths: te,
			reverseSelectedSubpaths: ee,
		} = ur({
			internalCommands: ut,
			selectedCommandIndex: h,
			selectedAnchorInfo: f,
			showHandles: u,
			dragging: Zt,
			shapeDragging: At,
			saveHistory: gt,
			translateCommandPoints: Io,
			baseSelectCommand: et,
			mousePosition: m,
		});
	ye(
		x,
		(r) => {
			if (!r) {
				K(null);
				return;
			}
			if (Array.isArray(r)) {
				K(r.length ? kn(r) : null);
				return;
			}
			const g = r,
				T = Array.isArray(g.commands) ? g.commands : [];
			K(
				T.length
					? { commands: kn(T), anchorOffset: g.anchorOffset ?? null }
					: null,
			);
		},
		{ immediate: !0 },
	);
	const Ft = dt(() => (C.value.length && !f.value ? null : h.value)),
		kt = Qo({
			internalCommands: ut,
			padding: at,
			width: s,
			height: p,
			showGrid: e,
			gridStep: pt,
			gridBackgroundColor: Y,
			gridBackgroundColorDark: F,
			gridLineColor: Q,
			gridLineColorDark: rt,
			fillOpacity: k,
			showControls: c,
			selectedCommandIndex: Ft,
			viewport: Pt,
			svgScreenSize: bt,
			prefersDarkMode: L,
			showVisualBounds: V,
			visualBounds: d,
			strokeWidth: G,
		}),
		Et = Ct(!1);
	ye(y, (r) => {
		r === !1 && (Et.value = !1);
	}),
		ye(u, (r) => {
			r === !1 && (Et.value = !1);
		}),
		ye(Et, (r) => {
			r || (U.value = null);
		});
	const Se = dt(() => {
			if (!u.value || y.value === !1 || Et.value) return [];
			if (C.value.length && !f.value) return [];
			const r = f.value ? f.value.commandIndex : Ft.value;
			return typeof r == "number" ? Ee(r) : [];
		}),
		ue = dt(() => {
			if (!u.value || y.value === !1 || Et.value || U.value === null) return [];
			const r = U.value;
			return typeof r == "number" ? Ee(r) : [];
		}),
		se = dt(() => {
			if (!u.value || y.value === !1) return [];
			if (Et.value) return kt.anchorPoints.value;
			const r = new Set();
			return (
				Se.value.forEach((g) => r.add(g)),
				ue.value.forEach((g) => r.add(g)),
				r.size ? kt.anchorPoints.value.filter((g) => r.has(g.commandIndex)) : []
			);
		});
	function oe(r) {
		if (!r) return null;
		const g = r.getAttribute("data-command-index");
		if (g === null) return null;
		const T = Number(g);
		return Number.isFinite(T) ? T : null;
	}
	function Ut(r) {
		const g = ft.value;
		if (!g) return [];
		const T = g.ownerDocument ?? document;
		if (typeof T.elementsFromPoint != "function") {
			const N = T.elementFromPoint(r.clientX, r.clientY);
			return N && N instanceof SVGPathElement ? [N] : [];
		}
		return T.elementsFromPoint(r.clientX, r.clientY).filter(
			(N) =>
				N instanceof SVGPathElement &&
				N.classList.contains("subpath-hit") &&
				g.contains(N),
		);
	}
	function Mt(r, g) {
		const T = Ut(r);
		if (!T.length) return g;
		const N = new Set(),
			tt = T.map((Rt) => ({ el: Rt, commandIndex: oe(Rt) }))
				.filter((Rt) => typeof Rt.commandIndex == "number")
				.filter((Rt) =>
					N.has(Rt.commandIndex) ? !1 : (N.add(Rt.commandIndex), !0),
				);
		if (!tt.length) return g;
		if (r.altKey) {
			const Rt = C.value.length ? C.value[0] : null,
				qt =
					typeof Rt == "number"
						? tt.findIndex((D) => D.commandIndex === Rt)
						: -1;
			return tt[(qt + 1) % tt.length]?.commandIndex ?? g;
		}
		let it = tt[0],
			Bt = Number.POSITIVE_INFINITY;
		for (const Rt of tt)
			try {
				const qt = Rt.el.getBBox(),
					l = Math.max(0, qt.width) * Math.max(0, qt.height);
				l > 0 && l < Bt && ((Bt = l), (it = Rt));
			} catch {}
		return it.commandIndex;
	}
	function Tt(r, g) {
		if (!g.length) return !1;
		const T = r.relatedTarget instanceof Element ? r.relatedTarget : null;
		if (!T) return !1;
		const N = T.closest(".handle.anchor");
		if (N) {
			const it = oe(N);
			if (it !== null && g.includes(it)) return !0;
		}
		const tt = T.closest(".segment-hit");
		if (tt) {
			const it = oe(tt);
			if (it !== null) return Ee(it).some((Rt) => g.includes(Rt));
		}
		return !1;
	}
	const Lt = hr(Pt, v ?? Ct(!1), W ?? Ct(!0), b ?? Ct(50), bt),
		re = pr({
			internalCommands: ut,
			activeSubpathRoots: C,
			getSubpathIndices: vt,
			saveHistory: gt,
			convertEventToLocalPoint: Ye,
		}),
		{
			handleCanvasPointerDown: Te,
			onPointerMove: pe,
			finishDrag: We,
			startDrag: me,
			onWheel: ie,
			resetState: zt,
		} = Jo({
			svgRef: ft,
			viewport: Pt,
			viewBoxParts: kt.viewBoxParts,
			selectCommand: nt,
			selectedAnchorInfo: f,
			updatePoint: Ve,
			dragging: Zt,
		});
	function Kt() {
		const r = ft.value;
		if (
			!(!r || typeof r.focus != "function") &&
			r.ownerDocument?.activeElement !== r
		)
			try {
				r.focus({ preventScroll: !0 });
			} catch {
				r.focus();
			}
	}
	function ve(r) {
		if (!r.ctrlKey && !r.metaKey && !r.altKey) {
			const g = r.key.toUpperCase();
			if (r.shiftKey && g === "R" && ee(r)) return;
			const T = {
				V: "select",
				P: "pen",
				R: "rect",
				E: "ellipse",
				T: "triangle",
				W: "strokeWeight",
				X: "cut",
			};
			if (!r.shiftKey && T[g]) {
				r.preventDefault(), (I.currentTool.value = T[g]);
				return;
			}
			if (g === "ESCAPE") {
				r.preventDefault();
				const N = an();
				(I.currentTool.value = "select"), N || I.resetDrawingState();
				return;
			}
			if (
				r.key === "Enter" &&
				I.currentTool.value === "pen" &&
				I.drawingState.isDrawing &&
				(r.preventDefault(), an())
			)
				return;
		}
		if (lt && (r.ctrlKey || r.metaKey)) {
			if (r.shiftKey && (r.key === "Z" || r.key === "z")) {
				r.preventDefault(), Yt();
				return;
			} else if (r.key === "Z" || r.key === "z") {
				r.preventDefault(), Ht();
				return;
			}
		}
		if ((r.ctrlKey || r.metaKey) && !r.altKey) {
			if ((r.key === "a" || r.key === "A") && te(r)) {
				r.preventDefault();
				return;
			}
			if (r.key === "c" || r.key === "C") {
				const g = J(r);
				if (g && g.commands.length) {
					i("copy", {
						commands: kn(g.commands),
						anchorOffset: g.anchorOffset ?? null,
					}),
						r.preventDefault();
					return;
				}
			}
			if ((r.key === "v" || r.key === "V") && j(r)) {
				r.preventDefault();
				return;
			}
		}
		((r.key === "Delete" || r.key === "Backspace") && ct(r)) || R(r);
	}
	function Ht() {
		if (!lt) return;
		const r = lt.undo(xt.value);
		r !== null && (ut.value = Re(r));
	}
	function Yt() {
		if (!lt) return;
		const r = lt.redo(xt.value);
		r !== null && (ut.value = Re(r));
	}
	function Gt(r = !0) {
		if (r && At.pointerId !== null && At.element)
			try {
				At.element.releasePointerCapture(At.pointerId);
			} catch {}
		(At.pointerId = null),
			(At.element = null),
			(At.startPoint = null),
			(At.initialCommands = []),
			(At.affectedIndices = []),
			(At.hasMoved = !1);
	}
	function de(r = !0) {
		if (r && Dt.pointerId !== null && Dt.element)
			try {
				Dt.element.releasePointerCapture(Dt.pointerId);
			} catch {}
		(Dt.isActive = !1),
			(Dt.startPoint = null),
			(Dt.currentPoint = null),
			(Dt.pointerId = null),
			(Dt.element = null),
			(Nt.value = []);
	}
	function Ce(r) {
		if (
			I.currentTool.value !== "select" ||
			!r.shiftKey ||
			!r.isPrimary ||
			(r.pointerType !== "touch" && r.button !== 0)
		)
			return !1;
		const g = Ye(r);
		if (!g) return !1;
		de(),
			(Dt.isActive = !0),
			(Dt.startPoint = { x: g.x, y: g.y }),
			(Dt.currentPoint = { x: g.x, y: g.y }),
			(Dt.pointerId = r.pointerId),
			(Dt.element = r.target);
		try {
			Dt.element?.setPointerCapture(r.pointerId);
		} catch {}
		return !0;
	}
	function Ie() {
		if (!Dt.startPoint || !Dt.currentPoint) return null;
		const { startPoint: r, currentPoint: g } = Dt,
			T = Math.min(r.x, g.x),
			N = Math.min(r.y, g.y),
			tt = Math.max(r.x, g.x),
			it = Math.max(r.y, g.y);
		return { minX: T, minY: N, width: tt - T, height: it - N };
	}
	function jt(r, g, T) {
		const N = T.minX + T.width,
			tt = T.minY + T.height;
		return r >= T.minX && r <= N && g >= T.minY && g <= tt;
	}
	function be(r, g, T, N, tt) {
		const it = tt.minX,
			Bt = tt.minY,
			Rt = tt.minX + tt.width,
			qt = tt.minY + tt.height;
		return !!(
			jt(r, g, tt) ||
			jt(T, N, tt) ||
			Le(r, g, T, N, it, Bt, it, qt) ||
			Le(r, g, T, N, Rt, Bt, Rt, qt) ||
			Le(r, g, T, N, it, Bt, Rt, Bt) ||
			Le(r, g, T, N, it, qt, Rt, qt)
		);
	}
	function Le(r, g, T, N, tt, it, Bt, Rt) {
		const qt = Ze(tt, it, Bt, Rt, r, g),
			l = Ze(tt, it, Bt, Rt, T, N),
			D = Ze(r, g, T, N, tt, it),
			st = Ze(r, g, T, N, Bt, Rt);
		return !!(
			(((qt > 0 && l < 0) || (qt < 0 && l > 0)) &&
				((D > 0 && st < 0) || (D < 0 && st > 0))) ||
			(qt === 0 && Be(tt, it, Bt, Rt, r, g)) ||
			(l === 0 && Be(tt, it, Bt, Rt, T, N)) ||
			(D === 0 && Be(r, g, T, N, tt, it)) ||
			(st === 0 && Be(r, g, T, N, Bt, Rt))
		);
	}
	function Ze(r, g, T, N, tt, it) {
		return (tt - r) * (N - g) - (it - g) * (T - r);
	}
	function Be(r, g, T, N, tt, it) {
		return (
			Math.min(r, T) <= tt &&
			tt <= Math.max(r, T) &&
			Math.min(g, N) <= it &&
			it <= Math.max(g, N)
		);
	}
	function ae(r, g, T, N, tt, it = 10) {
		if (jt(r, g, tt)) return !0;
		let Bt = r,
			Rt = g;
		for (let qt = 1; qt <= it; qt++) {
			const l = qt / it;
			let D, st;
			if (N === "C" && T.length >= 6) {
				const [St, _t, Wt, fe, $t, ge] = T,
					Jt = 1 - l;
				(D =
					Jt * Jt * Jt * r +
					3 * Jt * Jt * l * St +
					3 * Jt * l * l * Wt +
					l * l * l * $t),
					(st =
						Jt * Jt * Jt * g +
						3 * Jt * Jt * l * _t +
						3 * Jt * l * l * fe +
						l * l * l * ge);
			} else if (N === "Q" && T.length >= 4) {
				const [St, _t, Wt, fe] = T,
					$t = 1 - l;
				(D = $t * $t * r + 2 * $t * l * St + l * l * Wt),
					(st = $t * $t * g + 2 * $t * l * _t + l * l * fe);
			} else break;
			if (jt(D, st, tt) || be(Bt, Rt, D, st, tt)) return !0;
			(Bt = D), (Rt = st);
		}
		return !1;
	}
	function Un(r, g) {
		const T = vt(r);
		if (!T.length) return !1;
		const N = ut.value;
		let tt = 0,
			it = 0,
			Bt = 0,
			Rt = 0;
		for (const qt of T) {
			const l = N[qt];
			if (!l) continue;
			const { type: D, points: st } = l;
			switch (D) {
				case "M":
					if (
						st.length >= 2 &&
						((tt = st[0]), (it = st[1]), (Bt = tt), (Rt = it), jt(tt, it, g))
					)
						return !0;
					break;
				case "L":
					if (st.length >= 2) {
						const St = st[0],
							_t = st[1];
						if (be(tt, it, St, _t, g)) return !0;
						(tt = St), (it = _t);
					}
					break;
				case "C":
					if (st.length >= 6) {
						if (ae(tt, it, st, "C", g)) return !0;
						(tt = st[4]), (it = st[5]);
					}
					break;
				case "Q":
					if (st.length >= 4) {
						if (ae(tt, it, st, "Q", g)) return !0;
						(tt = st[2]), (it = st[3]);
					}
					break;
				case "Z":
					if (be(tt, it, Bt, Rt, g)) return !0;
					(tt = Bt), (it = Rt);
					break;
				case "A":
					if (st.length >= 7) {
						const St = st[5],
							_t = st[6],
							Wt = (tt + St) / 2,
							fe = (it + _t) / 2;
						if (jt(St, _t, g) || jt(Wt, fe, g) || be(tt, it, St, _t, g))
							return !0;
						(tt = St), (it = _t);
					}
					break;
			}
		}
		return !1;
	}
	function Sn(r) {
		const g = ut.value;
		if (!g.length) return [];
		const T = [];
		g.forEach((tt, it) => {
			tt.type === "M" && T.push(it);
		}),
			!T.length && g.length && T.push(0);
		const N = [];
		for (const tt of T) Un(tt, r) && N.push(tt);
		return N;
	}
	function zn() {
		if (!Dt.isActive) return !1;
		const r = Ie();
		if (!r || (r.width < 1 && r.height < 1)) return de(), !1;
		const g = Sn(r);
		return (
			de(),
			g.length
				? ((C.value = g.sort((T, N) => T - N)),
					(a.value = g[0] ?? null),
					typeof g[0] == "number" && et(g[0]),
					(f.value = null),
					!0)
				: !1
		);
	}
	const Ae = dt(() => (Dt.isActive ? Ie() : null));
	function rn(r, g) {
		if (
			I.currentTool.value !== "select" ||
			!ut.value.length ||
			!r.isPrimary ||
			(r.pointerType !== "touch" && r.button !== 0)
		)
			return !1;
		const T = typeof g == "number" ? g : h.value !== null ? h.value : null,
			N = Xt(T);
		if (!N.length) return !1;
		const tt = Ye(r);
		if (!tt) return !1;
		Gt(),
			(At.pointerId = r.pointerId),
			(At.element = r.target),
			(At.startPoint = tt),
			(At.initialCommands = kn(ut.value)),
			(At.affectedIndices = Mr(ut.value, N)),
			(At.hasMoved = !1);
		try {
			At.element?.setPointerCapture(r.pointerId);
		} catch {}
		return !0;
	}
	function Ee(r) {
		const g = ut.value;
		if (!g.length) return [];
		const T = g[r];
		if (!T) return [];
		const N = new Set();
		if ((N.add(r), T.type === "Z")) {
			const it = It(r);
			it !== null && N.add(it);
		}
		let tt = r - 1;
		for (; tt >= 0; ) {
			const it = g[tt];
			if (!it) {
				tt -= 1;
				continue;
			}
			if (it.type === "Z") {
				const Bt = It(r);
				Bt !== null && N.add(Bt);
				break;
			}
			if (
				it.type === "M" ||
				it.type === "L" ||
				it.type === "C" ||
				it.type === "Q" ||
				it.type === "A"
			) {
				N.add(tt);
				break;
			}
			tt -= 1;
		}
		return Array.from(N).sort((it, Bt) => it - Bt);
	}
	function _n(r) {
		Kt(), (A.value = null);
		const g = I.currentTool.value;
		if (g === "select") {
			const N = r.target,
				tt = !!(N && N.closest(".editable-path"));
			if (
				r.shiftKey &&
				!tt &&
				!!!(
					N &&
					N.closest(".segment-hit, .handle, .subpath-hit, .transform-handle")
				) &&
				Ce(r)
			) {
				r.preventDefault();
				return;
			}
			if (tt && rn(r, h.value)) {
				r.preventDefault();
				return;
			}
			Te(r);
			return;
		}
		if (g === "strokeWeight" || r.button !== 0 || !r.isPrimary) return;
		const T = Ye(r);
		if (T)
			if (((m.value = { x: T.x, y: T.y }), r.preventDefault(), g === "pen")) {
				const N = I.addPenPoint(T, ut.value);
				N && (gt(), (ut.value = N));
			} else I.startDrawing(T);
	}
	function Pn(r) {
		I.currentTool.value === "pen" &&
			I.drawingState.isDrawing &&
			(r.preventDefault(), an());
	}
	function an(r) {
		if (
			((r?.requirePenTool ?? !0) && I.currentTool.value !== "pen") ||
			!I.drawingState.isDrawing
		)
			return !1;
		const T = I.closePenPath(ut.value);
		return T ? (gt(), (ut.value = T), !0) : !1;
	}
	function gn(r, g) {
		g === "pen" && r !== "pen" && an({ requirePenTool: !1 });
	}
	function sn(r) {
		const g = I.currentTool.value,
			T = Ye(r);
		if (
			(T
				? (m.value = { x: T.x, y: T.y })
				: m.value !== null && (m.value = null),
			M?.value && T && Lt.updateMousePosition(T.x, T.y),
			g === "select")
		) {
			if (Dt.isActive && Dt.pointerId === r.pointerId && T) {
				Dt.currentPoint = { x: T.x, y: T.y };
				const tt = Ie();
				tt && (tt.width > 1 || tt.height > 1)
					? (Nt.value = Sn(tt))
					: (Nt.value = []),
					r.preventDefault();
				return;
			}
			if (re.onTransformPointerMove(r, Ye)) return;
			if (At.pointerId !== null && At.pointerId === r.pointerId) {
				if (
					!T ||
					!At.startPoint ||
					!At.initialCommands.length ||
					!At.affectedIndices.length
				)
					return;
				const tt = T.x - At.startPoint.x,
					it = T.y - At.startPoint.y,
					Bt = Math.abs(tt) > 1e-6 || Math.abs(it) > 1e-6;
				if (!At.hasMoved) {
					if (!Bt) return;
					gt(), (At.hasMoved = !0);
				}
				(ut.value = Bo(At.initialCommands, tt, it, At.affectedIndices)),
					r.preventDefault();
				return;
			}
			pe(r);
			const N = A.value;
			if (N && N.pointerId === r.pointerId) {
				const tt = ut.value[N.commandIndex];
				if (tt && tt.points.length >= 2) {
					const [it, Bt] = tt.points,
						{ initialPoint: Rt } = N;
					(Math.abs(it - Rt.x) > 1e-6 || Math.abs(Bt - Rt.y) > 1e-6) &&
						(N.moved = !0);
				}
			}
			return;
		}
		I.drawingState.isDrawing && T && I.updateDrawingPreview(T);
	}
	function yn() {
		M?.value && Lt.updateMousePosition(null, null),
			(m.value = null),
			(U.value = null);
	}
	const fn = Ct(null);
	let ln = 0;
	function Mn(r) {
		const g = I.currentTool.value;
		if (g === "select") {
			if (Dt.isActive && Dt.pointerId === r.pointerId) {
				zn();
				return;
			}
			if (re.onTransformPointerUp(r)) return;
			At.pointerId !== null && At.pointerId === r.pointerId && Gt();
			const N = A.value,
				tt = N && N.pointerId === r.pointerId,
				it = !!(tt && !N?.moved);
			We(r),
				it && ((ut.value = []), nt(null), (f.value = null)),
				tt && (A.value = null);
			return;
		}
		if (I.drawingState.isDrawing && g !== "pen") {
			const T = Ye(r);
			if (T) {
				const N = I.finishDrawing(T, ut.value);
				N
					? (gt(),
						(ut.value = N.commands),
						g === "cut" &&
							((ln += 1),
							(fn.value = {
								status: "success",
								paths: N.cutPiecePaths,
								nonce: ln,
							})))
					: g === "cut" &&
						((ln += 1),
						(fn.value = { status: "failed", paths: [], nonce: ln }));
			}
		}
	}
	function vn() {
		if (
			(Gt(), de(), re.resetTransformDragState(), !ut.value.length && !xt.value)
		) {
			I.resetDrawingState(), nt(null), (A.value = null);
			return;
		}
		gt(),
			(ut.value = []),
			I.resetDrawingState(),
			nt(null),
			zt(),
			(A.value = null);
	}
	let Fe = null,
		cn = !1;
	const hn = () => {
			(cn = !1), (Fe = null);
			const r = mn(ut.value);
			r !== xt.value &&
				((xt.value = r), i("update:modelValue", r), i("change", r));
		},
		Tn = () => {
			if (!cn)
				if (
					((cn = !0),
					typeof window < "u" &&
						typeof window.requestAnimationFrame == "function")
				) {
					const r = window.requestAnimationFrame(() => {
						hn();
					});
					Fe = () => window.cancelAnimationFrame(r);
				} else {
					const r = setTimeout(() => {
						hn();
					}, 16);
					Fe = () => clearTimeout(r);
				}
		};
	ye(
		t,
		(r) => {
			const g = r ?? "";
			if (
				!(g === xt.value && ut.value.length) &&
				((xt.value = g), (ut.value = Re(g)), !Pt.value)
			) {
				const T = kt.viewBoxParts.value;
				T && ((Pt.value = { ...T }), (Ot.value = { ...T }));
			}
		},
		{ immediate: !0 },
	),
		ye(
			ut,
			() => {
				Tn();
			},
			{ deep: !0 },
		),
		ye([kt.viewBoxParts, z], ([r, g]) => {
			if (!r) {
				(Pt.value = null), (Ot.value = null);
				return;
			}
			if (!Pt.value) {
				(Pt.value = { ...r }), (Ot.value = { ...r });
				return;
			}
			const T = Pt.value,
				N = Ot.value ?? r,
				tt = r.width * 0.05,
				it = r.width * 10,
				Bt = Me(T.width, tt, it),
				Rt = Bt / T.width,
				qt = T.height * Rt,
				l = T.minX + T.width / 2,
				D = T.minY + T.height / 2,
				st = N.minX + N.width / 2,
				St = N.minY + N.height / 2,
				_t = r.minX + r.width / 2,
				Wt = r.minY + r.height / 2,
				fe = g ? _t - st : 0,
				$t = g ? Wt - St : 0,
				ge = l + fe,
				Jt = D + $t;
			(Pt.value = {
				minX: ge - Bt / 2,
				minY: Jt - qt / 2,
				width: Bt,
				height: qt,
			}),
				(Ot.value = { ...r });
		});
	function Xe(r) {
		const g = r ?? kt.viewBoxParts.value;
		g && ((Pt.value = { ...g }), (Ot.value = { ...g }));
	}
	function Ve(r, g, T) {
		const N = ut.value[r.commandIndex];
		if (!N) return;
		const tt = S(g),
			it = S(T);
		switch (N.type) {
			case "M":
			case "L": {
				r.coordIndex === 0 && ((N.points[0] = tt), (N.points[1] = it));
				break;
			}
			case "C":
			case "Q": {
				const Bt = r.coordIndex;
				typeof Bt == "number" &&
					Bt >= 0 &&
					Bt < N.points.length &&
					((N.points[Bt] = tt), (N.points[Bt + 1] = it));
				break;
			}
		}
	}
	function pn() {
		const r = ft.value;
		if (!r) return;
		const g = r.getBoundingClientRect();
		bt.value = { width: Math.max(g.width, 1), height: Math.max(g.height, 1) };
	}
	So(() => {
		typeof window < "u" && window.addEventListener("keydown", ve),
			Ke(() => {
				pn(),
					ft.value &&
						typeof window < "u" &&
						"ResizeObserver" in window &&
						((wt = new ResizeObserver(() => pn())), wt.observe(ft.value));
			});
	}),
		to(() => {
			typeof window < "u" && window.removeEventListener("keydown", ve),
				wt && (wt.disconnect(), (wt = null)),
				Gt(),
				re.resetTransformDragState(),
				zt();
		}),
		Vn(() => {
			Fe && (Fe(), (Fe = null)), cn && hn();
		}),
		ye([s, p], () => {
			Ke(() => pn());
		});
	function In(r, g) {
		Kt(), r.preventDefault(), nt(g.commandIndex), rn(r, g.commandIndex);
	}
	function Kn(r) {
		U.value = r.commandIndex;
	}
	function Bn(r, g) {
		if (Et.value) return;
		const T = Ee(g.commandIndex);
		Tt(r, T) || (U.value === g.commandIndex && (U.value = null));
	}
	function qn(r, g) {
		if (Et.value) return;
		const T = U.value ?? g.commandIndex,
			N = Ee(T);
		Tt(r, N) ||
			(U.value !== null &&
				Ee(U.value).includes(g.commandIndex) &&
				(U.value = null));
	}
	function Zn(r) {
		if (y.value === !1 || u.value === !1) {
			Et.value = !1;
			return;
		}
		(Et.value = r), r || (U.value = null);
	}
	function xn(r, g) {
		Kt(), r.preventDefault();
		const T = Mt(r, g),
			N = It(T),
			tt =
				!r.shiftKey && N !== null && C.value.length > 1 && C.value.includes(N);
		nt(T, { source: "subpath", additive: r.shiftKey, preserve: tt }), rn(r, T);
	}
	function An(r, g) {
		g.preventDefault();
		const T = Ye(g);
		T && Gn(r, T);
	}
	function Ye(r) {
		const g = ft.value;
		if (!g) return null;
		const T = g.createSVGPoint();
		(T.x = r.clientX), (T.y = r.clientY);
		const N = g.getScreenCTM();
		if (!N) return null;
		const tt = T.matrixTransform(N.inverse());
		return { x: tt.x, y: tt.y };
	}
	function Gn(r, g) {
		const T = ut.value,
			N = r.commandIndex,
			tt = T[N];
		if (!tt) return;
		if (r.type === "Z") {
			Qn(r, N, g);
			return;
		}
		const it = Ko(r, tt, g);
		it &&
			((T[N] = { type: it.first.type, points: [...it.first.points] }),
			T.splice(N + 1, 0, {
				type: it.second.type,
				points: [...it.second.points],
			}),
			nt(N),
			u.value && (f.value = { commandIndex: N }));
	}
	function Qn(r, g, T) {
		const N = r.start,
			tt = r.end,
			it = tt.x - N.x,
			Bt = tt.y - N.y,
			Rt = it * it + Bt * Bt;
		if (Rt <= 1e-9) return;
		let qt = ((T.x - N.x) * it + (T.y - N.y) * Bt) / Rt;
		if (((qt = Nn(qt)), !On(qt))) return;
		const l = S(N.x + it * qt),
			D = S(N.y + Bt * qt);
		ut.value.splice(g, 0, { type: "L", points: [l, D] }),
			nt(g),
			u.value && (f.value = { commandIndex: g });
	}
	const En = dt(() => {
			const r = Z.value || "#000000";
			return L.value
				? r === "#000000" || r === "black"
					? "#fff"
					: r === "#1d4ed8" || r === "blue"
						? "#3b82f6"
						: r
				: r;
		}),
		jn = dt(() => I.drawingState.previewPath);
	return {
		width: s,
		height: p,
		padding: at,
		showGrid: e,
		gridStep: pt,
		fillColor: En,
		fillOpacity: k,
		strokeColor: w,
		strokeWidth: G,
		showHandles: u,
		showAnchors: y,
		showAllAnchors: Et,
		showControls: c,
		svgRef: ft,
		contentBounds: kt.contentBounds,
		viewBoxParts: kt.viewBoxParts,
		activeViewport: kt.activeViewport,
		gridBackgroundStyle: kt.gridBackgroundStyle,
		viewBox: kt.viewBox,
		aspectRatio: kt.aspectRatio,
		handleCanvasPointerDown: _n,
		onPointerMove: sn,
		onPointerLeave: yn,
		finishDrag: Mn,
		onWheel: ie,
		currentPath: xt,
		displayFillOpacity: kt.displayFillOpacity,
		bezierSegments: kt.bezierSegments,
		closedSubpathAreas: kt.closedSubpathAreas,
		selectedCommandIndex: h,
		activeSubpathRoot: a,
		activeSubpathRoots: C,
		selectCommand: nt,
		visibleControlLines: kt.visibleControlLines,
		controlLineWidth: kt.controlLineWidth,
		segmentHitWidth: kt.segmentHitWidth,
		anchorPoints: se,
		anchorRadius: kt.anchorRadius,
		handleStrokeWidth: kt.handleStrokeWidth,
		startDrag: me,
		visibleControlPoints: kt.visibleControlPoints,
		controlHalfSize: kt.controlHalfSize,
		controlSize: kt.controlSize,
		handleSegmentPointerDown: In,
		handleSegmentPointerEnter: Kn,
		handleSegmentPointerLeave: Bn,
		handleAnchorPointerLeave: qn,
		handleSegmentDoubleClick: An,
		handleSubpathPointerDown: xn,
		setShowAllAnchors: Zn,
		focusViewportOnContent: Xe,
		currentTool: I.currentTool,
		drawingState: I.drawingState,
		previewPath: jn,
		handleCanvasDoubleClick: Pn,
		isSelectMode: ht,
		canUndo: dt(() => lt?.canUndo.value ?? !1),
		canRedo: dt(() => lt?.canRedo.value ?? !1),
		saveHistory: gt,
		performUndo: Ht,
		performRedo: Yt,
		clearPath: vn,
		showAxis: v,
		showMouseCoords: M,
		xAxisTicks: Lt.xAxisTicks,
		yAxisTicks: Lt.yAxisTicks,
		xAxisLabels: Lt.xAxisLabels,
		yAxisLabels: Lt.yAxisLabels,
		mouseCoordinatesText: Lt.mouseCoordinatesText,
		showTransformBox: re.showTransformBox,
		transformBox: re.transformBox,
		transformAngle: re.transformAngle,
		handleTransformHandlePointerDown: re.handleTransformHandlePointerDown,
		marqueeRect: Ae,
		marqueePreviewRoots: Nt,
		cutFeedback: fn,
	};
}
const Ir = oo({
		__name: "EditorToolbar",
		props: {
			modelValue: {},
			canUndo: { type: Boolean },
			canRedo: { type: Boolean },
			showUndoRedo: { type: Boolean },
			canClear: { type: Boolean },
			showAllAnchors: { type: Boolean },
			anchorsToggleDisabled: { type: Boolean },
			showImageUpload: { type: Boolean },
			showStrokeWeightTool: { type: Boolean },
			showToolPopover: { type: Boolean },
		},
		emits: [
			"update:modelValue",
			"undo",
			"redo",
			"clear",
			"toggle-anchors",
			"upload-image",
		],
		setup(o, { expose: n, emit: i }) {
			n();
			const t = o,
				s = i,
				{ t: p } = ro(),
				e = Ct(null),
				u = Ct(null),
				y = Ct(!1),
				c = Ct({}),
				B = Ct(null),
				X = Ct(null),
				H = Ct({}),
				q = new Map(),
				v = (G, Z) => {
					Z instanceof HTMLButtonElement ? q.set(G, Z) : q.delete(G);
				},
				W = () => {
					const G = B.value,
						Z = q.get(t.modelValue);
					if (!G || !Z) {
						H.value = {};
						return;
					}
					const k = G.getBoundingClientRect(),
						w = Z.getBoundingClientRect();
					H.value = {
						left: `${w.left - k.left + w.width / 2}px`,
						top: `${k.height + 8}px`,
						transform: "translateX(-50%)",
					};
				},
				M = (G) => {
					s("update:modelValue", G), Ke(W);
				},
				b = (G) => {
					if (!t.showToolPopover) return;
					const Z = X.value,
						k = G.target instanceof Node ? G.target : null;
					(Z && k && Z.contains(k)) || s("update:modelValue", "select");
				},
				x = () => {
					if (!u.value) return;
					const G = u.value.getBoundingClientRect();
					c.value = {
						position: "fixed",
						left: `${G.left + G.width / 2}px`,
						top: `${G.top - 8}px`,
						transform: "translate(-50%, -100%)",
					};
				},
				E = () => {
					(y.value = !0), x();
				},
				V = () => {
					y.value = !1;
				},
				d = () => {
					e.value?.click();
				},
				_ = (G) => {
					const Z = G.target,
						k = Z?.files?.[0];
					k && (s("upload-image", k), Z && (Z.value = ""));
				},
				O = [
					{
						value: "select",
						labelKey: "select",
						icon: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
						shortcut: "V",
					},
					{
						value: "pen",
						labelKey: "pen",
						icon: "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586",
						shortcut: "P",
					},
					{
						value: "rect",
						labelKey: "rectangle",
						icon: "M3 3h18v18H3z",
						shortcut: "R",
					},
					{
						value: "ellipse",
						labelKey: "ellipse",
						icon: "M12 2C6.5 2 2 7 2 12s4.5 10 10 10 10-5 10-10S17.5 2 12 2z",
						shortcut: "E",
					},
					{
						value: "triangle",
						labelKey: "triangle",
						icon: "M12 4l8 16H4L12 4z",
						shortcut: "T",
					},
					{
						value: "cut",
						labelKey: "cut",
						icon: "M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12",
						shortcut: "X",
					},
					{
						value: "strokeWeight",
						labelKey: "effects",
						icon: "M12 3l1.7 5.2L19 10l-5.3 1.8L12 18l-1.7-5.2L5 10l5.3-1.8L12 3z M19 14l0.9 2.6L22 17.5l-2.1 0.9L19 21l-0.9-2.6L16 17.5l2.1-0.9L19 14z",
						shortcut: "W",
					},
				],
				L = dt(() =>
					t.showStrokeWeightTool === !1
						? O.filter((G) => G.value !== "strokeWeight")
						: O,
				),
				$ = new Date("2026-10-25T00:00:00+08:00").getTime(),
				at = Date.now() < $;
			ye(
				() => [t.modelValue, t.showToolPopover, L.value.length],
				() => {
					Ke(W);
				},
				{ immediate: !0 },
			),
				So(() => {
					W(),
						typeof window < "u" && window.addEventListener("resize", W),
						typeof document < "u" &&
							document.addEventListener("pointerdown", b);
				}),
				Vn(() => {
					typeof window < "u" && window.removeEventListener("resize", W),
						typeof document < "u" &&
							document.removeEventListener("pointerdown", b);
				});
			const pt = {
				props: t,
				emit: s,
				t: p,
				fileInputRef: e,
				imageUploadButtonRef: u,
				showImageUploadTooltip: y,
				tooltipStyle: c,
				toolbarRef: B,
				popoverRef: X,
				popoverStyle: H,
				toolButtonRefs: q,
				setToolButtonRef: v,
				updatePopoverPosition: W,
				handleToolClick: M,
				handleDocumentPointerDown: b,
				updateTooltipPosition: x,
				handleTooltipShow: E,
				handleTooltipHide: V,
				triggerImagePicker: d,
				handleFileSelection: _,
				tools: O,
				visibleTools: L,
				CUT_TOOL_BADGE_EXPIRES_AT: $,
				showCutToolBadge: at,
			};
			return (
				Object.defineProperty(pt, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				pt
			);
		},
	}),
	io = (o) => (Mo("data-v-d8071a29"), (o = o()), To(), o),
	Br = { class: "editor-toolbar-container" },
	Ar = { class: "toolbar-group" },
	Er = ["title", "onClick"],
	Lr = { key: 0, class: "tool-badge", "aria-hidden": "true" },
	Rr = {
		key: 1,
		class: "tool-icon",
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "2",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
	},
	Dr = { class: "tool-label" },
	Wr = { key: 0, class: "toolbar-group toolbar-image-upload" },
	Fr = { class: "image-upload-wrapper" },
	Xr = io(() =>
		ot(
			"svg",
			{
				class: "action-icon",
				width: "18",
				height: "18",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
			},
			[
				ot("rect", {
					x: "3",
					y: "3",
					width: "18",
					height: "18",
					rx: "2",
					ry: "2",
				}),
				ot("circle", { cx: "9", cy: "9", r: "1.5" }),
				ot("path", { d: "M21 15l-4.5-4.5-5.5 6h10z" }),
			],
			-1,
		),
	),
	Yr = [Xr],
	Hr = { class: "toolbar-group toolbar-actions" },
	Nr = ["title", "aria-pressed", "disabled"],
	Vr = Po(
		'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d8071a29><circle cx="12" cy="12" r="3" data-v-d8071a29></circle><path d="M12 3v3" data-v-d8071a29></path><path d="M12 18v3" data-v-d8071a29></path><path d="M3 12h3" data-v-d8071a29></path><path d="M18 12h3" data-v-d8071a29></path></svg>',
		1,
	),
	Or = [Vr],
	Ur = ["disabled", "title"],
	zr = Po(
		'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d8071a29><path d="M3 6h18" data-v-d8071a29></path><path d="M8 6v-1a2 2 0 012-2h4a2 2 0 012 2v1" data-v-d8071a29></path><path d="M19 6l-1.2 13.2A2 2 0 0115.81 21H8.19a2 2 0 01-1.99-1.8L5 6" data-v-d8071a29></path><path d="M10 11v6" data-v-d8071a29></path><path d="M14 11v6" data-v-d8071a29></path></svg>',
		1,
	),
	Kr = [zr],
	qr = ["disabled", "title"],
	Zr = io(() =>
		ot(
			"svg",
			{
				class: "action-icon",
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
			},
			[
				ot("path", { d: "M3 7v6h6" }),
				ot("path", { d: "M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" }),
			],
			-1,
		),
	),
	Gr = [Zr],
	Qr = ["disabled", "title"],
	jr = io(() =>
		ot(
			"svg",
			{
				class: "action-icon",
				width: "18",
				height: "18",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
			},
			[
				ot("path", { d: "M21 7v6h-6" }),
				ot("path", { d: "M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7" }),
			],
			-1,
		),
	),
	Jr = [jr],
	$r = { class: "tooltip-title" },
	ti = { class: "tooltip-description" };
function ei(o, n, i, t, s, p) {
	return (
		mt(),
		yt(
			ce,
			null,
			[
				ot("div", Br, [
					ot(
						"div",
						{
							ref: "toolbarRef",
							class: "editor-toolbar",
							onScroll: t.updatePopoverPosition,
						},
						[
							ot("div", Ar, [
								(mt(!0),
								yt(
									ce,
									null,
									xe(
										t.visibleTools,
										(e) => (
											mt(),
											yt(
												"button",
												{
													key: e.value,
													ref_for: !0,
													ref: (u) => t.setToolButtonRef(e.value, u),
													class: we([
														"tool-button",
														{ active: i.modelValue === e.value },
													]),
													title: `${t.t(e.labelKey)}${e.shortcut ? ` (${e.shortcut})` : ""}`,
													onClick: (u) => t.handleToolClick(e.value),
												},
												[
													e.value === "cut" && t.showCutToolBadge
														? (mt(), yt("span", Lr, "新"))
														: ne("", !0),
													e.icon
														? (mt(),
															yt("svg", Rr, [
																(mt(),
																Hn(Vo("path"), { d: e.icon }, null, 8, ["d"])),
															]))
														: ne("", !0),
													ot("span", Dr, Qt(t.t(e.labelKey)), 1),
												],
												10,
												Er,
											)
										),
									),
									128,
								)),
							]),
							i.showImageUpload !== !1
								? (mt(),
									yt("div", Wr, [
										ot("div", Fr, [
											ot(
												"button",
												{
													ref: "imageUploadButtonRef",
													type: "button",
													class: "action-button image-upload-button",
													onClick: t.triggerImagePicker,
													onMouseenter: t.handleTooltipShow,
													onMouseleave: t.handleTooltipHide,
												},
												Yr,
												544,
											),
											ot(
												"input",
												{
													ref: "fileInputRef",
													class: "file-input",
													type: "file",
													accept: "image/*",
													onChange: t.handleFileSelection,
												},
												null,
												544,
											),
										]),
									]))
								: ne("", !0),
							ot("div", Hr, [
								ot(
									"button",
									{
										class: we([
											"action-button",
											{
												active:
													t.props.showAllAnchors === !0 &&
													!t.props.anchorsToggleDisabled,
											},
										]),
										title: t.props.anchorsToggleDisabled
											? t.t("anchor_toggles_disabled")
											: t.props.showAllAnchors
												? t.t("showing_selected_anchors_only")
												: t.t("show_all_anchors"),
										"aria-pressed":
											t.props.showAllAnchors === !0 &&
											!t.props.anchorsToggleDisabled,
										disabled: t.props.anchorsToggleDisabled,
										onClick:
											n[0] ||
											(n[0] = (e) =>
												o.$emit("toggle-anchors", !t.props.showAllAnchors)),
									},
									Or,
									10,
									Nr,
								),
								ot(
									"button",
									{
										class: "action-button",
										disabled: i.canClear === !1,
										title: t.t("clear"),
										onClick: n[1] || (n[1] = (e) => o.$emit("clear")),
									},
									Kr,
									8,
									Ur,
								),
								i.showUndoRedo
									? (mt(),
										yt(
											ce,
											{ key: 0 },
											[
												ot(
													"button",
													{
														class: "action-button",
														disabled: !i.canUndo,
														title: t.t("undo_ctrl_z"),
														onClick: n[2] || (n[2] = (e) => o.$emit("undo")),
													},
													Gr,
													8,
													qr,
												),
												ot(
													"button",
													{
														class: "action-button",
														disabled: !i.canRedo,
														title: t.t("redo_ctrl_shift_z"),
														onClick: n[3] || (n[3] = (e) => o.$emit("redo")),
													},
													Jr,
													8,
													Qr,
												),
											],
											64,
										))
									: ne("", !0),
							]),
						],
						544,
					),
					t.props.showToolPopover && o.$slots["tool-popover"]
						? (mt(),
							yt(
								"div",
								{
									key: 0,
									ref: "popoverRef",
									class: "toolbar-popover",
									style: _e(t.popoverStyle),
								},
								[Oo(o.$slots, "tool-popover", {}, void 0, !0)],
								4,
							))
						: ne("", !0),
				]),
				(mt(),
				Hn(_o, { to: "body" }, [
					t.showImageUploadTooltip
						? (mt(),
							yt(
								"div",
								{
									key: 0,
									class: "image-upload-tooltip",
									style: _e(t.tooltipStyle),
								},
								[
									ot("div", $r, Qt(t.t("trace_image_to_path")), 1),
									ot(
										"div",
										ti,
										Qt(t.t("upload_a_black_glyph_on_a_white_background")),
										1,
									),
								],
								4,
							))
						: ne("", !0),
				])),
			],
			64,
		)
	);
}
const ni = no(Ir, [
	["render", ei],
	["__scopeId", "data-v-d8071a29"],
]);
var Xn = (function () {
	function o(d, _) {
		(this.x = d), (this.y = _);
	}
	o.prototype.copy = function () {
		return new o(this.x, this.y);
	};
	function n(d, _) {
		(this.w = d),
			(this.h = _),
			(this.size = d * _),
			(this.arraybuffer = new ArrayBuffer(this.size)),
			(this.data = new Int8Array(this.arraybuffer));
	}
	(n.prototype.at = function (d, _) {
		return (
			d >= 0 &&
			d < this.w &&
			_ >= 0 &&
			_ < this.h &&
			this.data[this.w * _ + d] === 1
		);
	}),
		(n.prototype.index = function (d) {
			var _ = new o();
			return (_.y = Math.floor(d / this.w)), (_.x = d - _.y * this.w), _;
		}),
		(n.prototype.flip = function (d, _) {
			this.at(d, _)
				? (this.data[this.w * _ + d] = 0)
				: (this.data[this.w * _ + d] = 1);
		}),
		(n.prototype.copy = function () {
			var d = new n(this.w, this.h),
				_;
			for (_ = 0; _ < this.size; _++) d.data[_] = this.data[_];
			return d;
		});
	function i() {
		(this.area = 0),
			(this.len = 0),
			(this.curve = {}),
			(this.pt = []),
			(this.minX = 1e5),
			(this.minY = 1e5),
			(this.maxX = -1),
			(this.maxY = -1);
	}
	function t(d) {
		(this.n = d),
			(this.tag = new Array(d)),
			(this.c = new Array(d * 3)),
			(this.alphaCurve = 0),
			(this.vertex = new Array(d)),
			(this.alpha = new Array(d)),
			(this.alpha0 = new Array(d)),
			(this.beta = new Array(d));
	}
	var s = document.createElement("img"),
		p = document.createElement("canvas"),
		e = null,
		u = [],
		y,
		c = {
			isReady: !1,
			turnpolicy: "minority",
			turdsize: 2,
			optcurve: !0,
			alphamax: 1,
			opttolerance: 0.2,
		};
	s.onload = function () {
		q(), v();
	};
	function B(d) {
		c.isReady && x(), (s.file = d);
		var _ = new FileReader();
		(_.onload = (function (O) {
			return function (L) {
				O.src = L.target.result;
			};
		})(s)),
			_.readAsDataURL(d);
	}
	function X(d) {
		c.isReady && x(), (s.src = d);
	}
	function H(d) {
		var _;
		for (_ in d) d.hasOwnProperty(_) && (c[_] = d[_]);
	}
	function q() {
		(p.width = s.width), (p.height = s.height);
		var d = p.getContext("2d");
		d.drawImage(s, 0, 0);
	}
	function v() {
		var d = p.getContext("2d");
		e = new n(p.width, p.height);
		var _ = d.getImageData(0, 0, e.w, e.h),
			O = _.data.length,
			L,
			$,
			at;
		for (L = 0, $ = 0; L < O; L += 4, $++)
			(at =
				0.2126 * _.data[L] + 0.7153 * _.data[L + 1] + 0.0721 * _.data[L + 2]),
				(e.data[$] = at < 128 ? 1 : 0);
		c.isReady = !0;
	}
	function W() {
		var d = e.copy(),
			_ = new o(0, 0),
			O;
		function L(G) {
			for (var Z = d.w * G.y + G.x; Z < d.size && d.data[Z] !== 1; ) Z++;
			return Z < d.size && d.index(Z);
		}
		function $(G, Z) {
			var k, w, Y;
			for (k = 2; k < 5; k++) {
				for (Y = 0, w = -k + 1; w <= k - 1; w++)
					(Y += d.at(G + w, Z + k - 1) ? 1 : -1),
						(Y += d.at(G + k - 1, Z + w - 1) ? 1 : -1),
						(Y += d.at(G + w - 1, Z - k) ? 1 : -1),
						(Y += d.at(G - k, Z + w) ? 1 : -1);
				if (Y > 0) return 1;
				if (Y < 0) return 0;
			}
			return 0;
		}
		function at(G) {
			var Z = new i(),
				k = G.x,
				w = G.y,
				Y = 0,
				F = 1,
				Q;
			for (
				Z.sign = e.at(G.x, G.y) ? "+" : "-";
				Z.pt.push(new o(k, w)),
					k > Z.maxX && (Z.maxX = k),
					k < Z.minX && (Z.minX = k),
					w > Z.maxY && (Z.maxY = w),
					w < Z.minY && (Z.minY = w),
					Z.len++,
					(k += Y),
					(w += F),
					(Z.area -= k * F),
					!(k === G.x && w === G.y);
			) {
				var rt = d.at(k + (Y + F - 1) / 2, w + (F - Y - 1) / 2),
					ft = d.at(k + (Y - F - 1) / 2, w + (F + Y - 1) / 2);
				ft && !rt
					? c.turnpolicy === "right" ||
						(c.turnpolicy === "black" && Z.sign === "+") ||
						(c.turnpolicy === "white" && Z.sign === "-") ||
						(c.turnpolicy === "majority" && $(k, w)) ||
						(c.turnpolicy === "minority" && !$(k, w))
						? ((Q = Y), (Y = -F), (F = Q))
						: ((Q = Y), (Y = F), (F = -Q))
					: ft
						? ((Q = Y), (Y = -F), (F = Q))
						: rt || ((Q = Y), (Y = F), (F = -Q));
			}
			return Z;
		}
		function pt(G) {
			var Z = G.pt[0].y,
				k = G.len,
				w,
				Y,
				F,
				Q,
				rt,
				ft;
			for (rt = 1; rt < k; rt++)
				if (((w = G.pt[rt].x), (Y = G.pt[rt].y), Y !== Z)) {
					for (Q = Z < Y ? Z : Y, F = G.maxX, ft = w; ft < F; ft++)
						d.flip(ft, Q);
					Z = Y;
				}
		}
		for (; (_ = L(_)); ) (O = at(_)), pt(O), O.area > c.turdsize && u.push(O);
	}
	function M() {
		function d() {
			this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		d.prototype.at = function (A, U) {
			return this.data[A * 3 + U];
		};
		function _(A, U, m, z, I) {
			(this.x = A), (this.y = U), (this.xy = m), (this.x2 = z), (this.y2 = I);
		}
		function O(A, U) {
			return A >= U ? A % U : A >= 0 ? A : U - 1 - ((-1 - A) % U);
		}
		function L(A, U) {
			return A.x * U.y - A.y * U.x;
		}
		function $(A, U, m) {
			return A <= m ? A <= U && U < m : A <= U || U < m;
		}
		function at(A) {
			return A > 0 ? 1 : A < 0 ? -1 : 0;
		}
		function pt(A, U) {
			var m = new Array(3),
				z,
				I,
				ht;
			for (m[0] = U.x, m[1] = U.y, m[2] = 1, ht = 0, z = 0; z < 3; z++)
				for (I = 0; I < 3; I++) ht += m[z] * A.at(z, I) * m[I];
			return ht;
		}
		function G(A, U, m) {
			var z = new o();
			return (z.x = U.x + A * (m.x - U.x)), (z.y = U.y + A * (m.y - U.y)), z;
		}
		function Z(A, U) {
			var m = new o();
			return (m.y = at(U.x - A.x)), (m.x = -at(U.y - A.y)), m;
		}
		function k(A, U) {
			var m = Z(A, U);
			return m.y * (U.x - A.x) - m.x * (U.y - A.y);
		}
		function w(A, U, m) {
			var z, I, ht, lt;
			return (
				(z = U.x - A.x),
				(I = U.y - A.y),
				(ht = m.x - A.x),
				(lt = m.y - A.y),
				z * lt - ht * I
			);
		}
		function Y(A, U, m, z) {
			var I, ht, lt, gt;
			return (
				(I = U.x - A.x),
				(ht = U.y - A.y),
				(lt = z.x - m.x),
				(gt = z.y - m.y),
				I * gt - lt * ht
			);
		}
		function F(A, U, m) {
			var z, I, ht, lt;
			return (
				(z = U.x - A.x),
				(I = U.y - A.y),
				(ht = m.x - A.x),
				(lt = m.y - A.y),
				z * ht + I * lt
			);
		}
		function Q(A, U, m, z) {
			var I, ht, lt, gt;
			return (
				(I = U.x - A.x),
				(ht = U.y - A.y),
				(lt = z.x - m.x),
				(gt = z.y - m.y),
				I * lt + ht * gt
			);
		}
		function rt(A, U) {
			return Math.sqrt((A.x - U.x) * (A.x - U.x) + (A.y - U.y) * (A.y - U.y));
		}
		function ft(A, U, m, z, I) {
			var ht = 1 - A,
				lt = new o();
			return (
				(lt.x =
					ht * ht * ht * U.x +
					3 * (ht * ht * A) * m.x +
					3 * (A * A * ht) * z.x +
					A * A * A * I.x),
				(lt.y =
					ht * ht * ht * U.y +
					3 * (ht * ht * A) * m.y +
					3 * (A * A * ht) * z.y +
					A * A * A * I.y),
				lt
			);
		}
		function bt(A, U, m, z, I, ht) {
			var lt, gt, h, f, et, R, a, C, P, K;
			return (
				(lt = Y(A, U, I, ht)),
				(gt = Y(U, m, I, ht)),
				(h = Y(m, z, I, ht)),
				(f = lt - 2 * gt + h),
				(et = -2 * lt + 2 * gt),
				(R = lt),
				(a = et * et - 4 * f * R),
				f === 0 || a < 0
					? -1
					: ((C = Math.sqrt(a)),
						(P = (-et + C) / (2 * f)),
						(K = (-et - C) / (2 * f)),
						P >= 0 && P <= 1 ? P : K >= 0 && K <= 1 ? K : -1)
			);
		}
		function wt(A) {
			var U, m, z;
			(A.x0 = A.pt[0].x), (A.y0 = A.pt[0].y), (A.sums = []);
			var I = A.sums;
			for (I.push(new _(0, 0, 0, 0, 0)), U = 0; U < A.len; U++)
				(m = A.pt[U].x - A.x0),
					(z = A.pt[U].y - A.y0),
					I.push(
						new _(
							I[U].x + m,
							I[U].y + z,
							I[U].xy + m * z,
							I[U].x2 + m * m,
							I[U].y2 + z * z,
						),
					);
		}
		function ut(A) {
			var U = A.len,
				m = A.pt,
				z,
				I = new Array(U),
				ht = new Array(U),
				lt = new Array(4);
			A.lon = new Array(U);
			var gt = [new o(), new o()],
				h = new o(),
				f = new o(),
				et = new o(),
				R,
				a,
				C,
				P,
				K,
				nt,
				ct,
				J,
				j = 0;
			for (a = U - 1; a >= 0; a--)
				m[a].x != m[j].x && m[a].y != m[j].y && (j = a + 1), (ht[a] = j);
			for (a = U - 1; a >= 0; a--) {
				for (
					lt[0] = lt[1] = lt[2] = lt[3] = 0,
						z =
							(3 +
								3 * (m[O(a + 1, U)].x - m[a].x) +
								(m[O(a + 1, U)].y - m[a].y)) /
							2,
						lt[z]++,
						gt[0].x = 0,
						gt[0].y = 0,
						gt[1].x = 0,
						gt[1].y = 0,
						j = ht[a],
						P = a;
					;
				) {
					if (
						((R = 0),
						(z = (3 + 3 * at(m[j].x - m[P].x) + at(m[j].y - m[P].y)) / 2),
						lt[z]++,
						lt[0] && lt[1] && lt[2] && lt[3])
					) {
						(I[a] = P), (R = 1);
						break;
					}
					if (
						((h.x = m[j].x - m[a].x),
						(h.y = m[j].y - m[a].y),
						L(gt[0], h) < 0 ||
							L(gt[1], h) > 0 ||
							((Math.abs(h.x) <= 1 && Math.abs(h.y) <= 1) ||
								((f.x = h.x + (h.y >= 0 && (h.y > 0 || h.x < 0) ? 1 : -1)),
								(f.y = h.y + (h.x <= 0 && (h.x < 0 || h.y < 0) ? 1 : -1)),
								L(gt[0], f) >= 0 && ((gt[0].x = f.x), (gt[0].y = f.y)),
								(f.x = h.x + (h.y <= 0 && (h.y < 0 || h.x < 0) ? 1 : -1)),
								(f.y = h.y + (h.x >= 0 && (h.x > 0 || h.y < 0) ? 1 : -1)),
								L(gt[1], f) <= 0 && ((gt[1].x = f.x), (gt[1].y = f.y))),
							(P = j),
							(j = ht[P]),
							!$(j, a, P)))
					)
						break;
				}
				R === 0 &&
					((et.x = at(m[j].x - m[P].x)),
					(et.y = at(m[j].y - m[P].y)),
					(h.x = m[P].x - m[a].x),
					(h.y = m[P].y - m[a].y),
					(K = L(gt[0], h)),
					(nt = L(gt[0], et)),
					(ct = L(gt[1], h)),
					(J = L(gt[1], et)),
					(C = 1e7),
					nt < 0 && (C = Math.floor(K / -nt)),
					J > 0 && (C = Math.min(C, Math.floor(-ct / J))),
					(I[a] = O(P + C, U)));
			}
			for (C = I[U - 1], A.lon[U - 1] = C, a = U - 2; a >= 0; a--)
				$(a + 1, I[a], C) && (C = I[a]), (A.lon[a] = C);
			for (a = U - 1; $(O(a + 1, U), C, A.lon[a]); a--) A.lon[a] = C;
		}
		function xt(A) {
			function U(nt, ct, J) {
				var j = nt.len,
					It = nt.pt,
					vt = nt.sums,
					Xt,
					te,
					ee,
					Ft,
					kt,
					Et,
					Se,
					ue,
					se,
					oe,
					Ut,
					Mt,
					Tt,
					Lt,
					re = 0;
				return (
					J >= j && ((J -= j), (re = 1)),
					re === 0
						? ((Xt = vt[J + 1].x - vt[ct].x),
							(te = vt[J + 1].y - vt[ct].y),
							(Ft = vt[J + 1].x2 - vt[ct].x2),
							(ee = vt[J + 1].xy - vt[ct].xy),
							(kt = vt[J + 1].y2 - vt[ct].y2),
							(Et = J + 1 - ct))
						: ((Xt = vt[J + 1].x - vt[ct].x + vt[j].x),
							(te = vt[J + 1].y - vt[ct].y + vt[j].y),
							(Ft = vt[J + 1].x2 - vt[ct].x2 + vt[j].x2),
							(ee = vt[J + 1].xy - vt[ct].xy + vt[j].xy),
							(kt = vt[J + 1].y2 - vt[ct].y2 + vt[j].y2),
							(Et = J + 1 - ct + j)),
					(Ut = (It[ct].x + It[J].x) / 2 - It[0].x),
					(Mt = (It[ct].y + It[J].y) / 2 - It[0].y),
					(Lt = It[J].x - It[ct].x),
					(Tt = -(It[J].y - It[ct].y)),
					(Se = (Ft - 2 * Xt * Ut) / Et + Ut * Ut),
					(ue = (ee - Xt * Mt - te * Ut) / Et + Ut * Mt),
					(se = (kt - 2 * te * Mt) / Et + Mt * Mt),
					(oe = Tt * Tt * Se + 2 * Tt * Lt * ue + Lt * Lt * se),
					Math.sqrt(oe)
				);
			}
			var m,
				z,
				I,
				ht,
				lt = A.len,
				gt = new Array(lt + 1),
				h = new Array(lt + 1),
				f = new Array(lt),
				et = new Array(lt + 1),
				R = new Array(lt + 1),
				a = new Array(lt + 1),
				C,
				P,
				K;
			for (m = 0; m < lt; m++)
				(K = O(A.lon[O(m - 1, lt)] - 1, lt)),
					K == m && (K = O(m + 1, lt)),
					K < m ? (f[m] = lt) : (f[m] = K);
			for (z = 1, m = 0; m < lt; m++) for (; z <= f[m]; ) (et[z] = m), z++;
			for (m = 0, z = 0; m < lt; z++) (R[z] = m), (m = f[m]);
			for (R[z] = lt, I = z, m = lt, z = I; z > 0; z--) (a[z] = m), (m = et[m]);
			for (a[0] = 0, gt[0] = 0, z = 1; z <= I; z++)
				for (m = a[z]; m <= R[z]; m++) {
					for (P = -1, ht = R[z - 1]; ht >= et[m]; ht--)
						(C = U(A, ht, m) + gt[ht]),
							(P < 0 || C < P) && ((h[m] = ht), (P = C));
					gt[m] = P;
				}
			for (A.m = I, A.po = new Array(I), m = lt, z = I - 1; m > 0; z--)
				(m = h[m]), (A.po[z] = m);
		}
		function Pt(A) {
			function U(Se, ue, se, oe, Ut) {
				for (
					var Mt = Se.len,
						Tt = Se.sums,
						Lt,
						re,
						Te,
						pe,
						We,
						me,
						ie,
						zt,
						Kt,
						ve,
						Ht,
						Yt = 0;
					se >= Mt;
				)
					(se -= Mt), (Yt += 1);
				for (; ue >= Mt; ) (ue -= Mt), (Yt -= 1);
				for (; se < 0; ) (se += Mt), (Yt -= 1);
				for (; ue < 0; ) (ue += Mt), (Yt += 1);
				(Lt = Tt[se + 1].x - Tt[ue].x + Yt * Tt[Mt].x),
					(re = Tt[se + 1].y - Tt[ue].y + Yt * Tt[Mt].y),
					(Te = Tt[se + 1].x2 - Tt[ue].x2 + Yt * Tt[Mt].x2),
					(pe = Tt[se + 1].xy - Tt[ue].xy + Yt * Tt[Mt].xy),
					(We = Tt[se + 1].y2 - Tt[ue].y2 + Yt * Tt[Mt].y2),
					(me = se + 1 - ue + Yt * Mt),
					(oe.x = Lt / me),
					(oe.y = re / me),
					(ie = (Te - (Lt * Lt) / me) / me),
					(zt = (pe - (Lt * re) / me) / me),
					(Kt = (We - (re * re) / me) / me),
					(ve = (ie + Kt + Math.sqrt((ie - Kt) * (ie - Kt) + 4 * zt * zt)) / 2),
					(ie -= ve),
					(Kt -= ve),
					Math.abs(ie) >= Math.abs(Kt)
						? ((Ht = Math.sqrt(ie * ie + zt * zt)),
							Ht !== 0 && ((Ut.x = -zt / Ht), (Ut.y = ie / Ht)))
						: ((Ht = Math.sqrt(Kt * Kt + zt * zt)),
							Ht !== 0 && ((Ut.x = -Kt / Ht), (Ut.y = zt / Ht))),
					Ht === 0 && (Ut.x = Ut.y = 0);
			}
			var m = A.m,
				z = A.po,
				I = A.len,
				ht = A.pt,
				lt = A.x0,
				gt = A.y0,
				h = new Array(m),
				f = new Array(m),
				et = new Array(m),
				R = new Array(3),
				a,
				C,
				P,
				K,
				nt,
				ct = new o();
			for (A.curve = new t(m), C = 0; C < m; C++)
				(P = z[O(C + 1, m)]),
					(P = O(P - z[C], I) + z[C]),
					(h[C] = new o()),
					(f[C] = new o()),
					U(A, z[C], P, h[C], f[C]);
			for (C = 0; C < m; C++)
				if (
					((et[C] = new d()), (a = f[C].x * f[C].x + f[C].y * f[C].y), a === 0)
				)
					for (P = 0; P < 3; P++)
						for (K = 0; K < 3; K++) et[C].data[P * 3 + K] = 0;
				else
					for (
						R[0] = f[C].y,
							R[1] = -f[C].x,
							R[2] = -R[1] * h[C].y - R[0] * h[C].x,
							nt = 0;
						nt < 3;
						nt++
					)
						for (K = 0; K < 3; K++) et[C].data[nt * 3 + K] = (R[nt] * R[K]) / a;
			var J, j, It, vt, Xt, te, ee, Ft, kt, Et;
			for (C = 0; C < m; C++) {
				for (
					J = new d(),
						j = new o(),
						ct.x = ht[z[C]].x - lt,
						ct.y = ht[z[C]].y - gt,
						P = O(C - 1, m),
						nt = 0;
					nt < 3;
					nt++
				)
					for (K = 0; K < 3; K++)
						J.data[nt * 3 + K] = et[P].at(nt, K) + et[C].at(nt, K);
				for (;;) {
					if (
						((Xt = J.at(0, 0) * J.at(1, 1) - J.at(0, 1) * J.at(1, 0)), Xt !== 0)
					) {
						(j.x = (-J.at(0, 2) * J.at(1, 1) + J.at(1, 2) * J.at(0, 1)) / Xt),
							(j.y = (J.at(0, 2) * J.at(1, 0) - J.at(1, 2) * J.at(0, 0)) / Xt);
						break;
					}
					for (
						J.at(0, 0) > J.at(1, 1)
							? ((R[0] = -J.at(0, 1)), (R[1] = J.at(0, 0)))
							: J.at(1, 1)
								? ((R[0] = -J.at(1, 1)), (R[1] = J.at(1, 0)))
								: ((R[0] = 1), (R[1] = 0)),
							a = R[0] * R[0] + R[1] * R[1],
							R[2] = -R[1] * ct.y - R[0] * ct.x,
							nt = 0;
						nt < 3;
						nt++
					)
						for (K = 0; K < 3; K++) J.data[nt * 3 + K] += (R[nt] * R[K]) / a;
				}
				if (
					((It = Math.abs(j.x - ct.x)),
					(vt = Math.abs(j.y - ct.y)),
					It <= 0.5 && vt <= 0.5)
				) {
					A.curve.vertex[C] = new o(j.x + lt, j.y + gt);
					continue;
				}
				if (((te = pt(J, ct)), (Ft = ct.x), (kt = ct.y), J.at(0, 0) !== 0))
					for (Et = 0; Et < 2; Et++)
						(j.y = ct.y - 0.5 + Et),
							(j.x = -(J.at(0, 1) * j.y + J.at(0, 2)) / J.at(0, 0)),
							(It = Math.abs(j.x - ct.x)),
							(ee = pt(J, j)),
							It <= 0.5 && ee < te && ((te = ee), (Ft = j.x), (kt = j.y));
				if (J.at(1, 1) !== 0)
					for (Et = 0; Et < 2; Et++)
						(j.x = ct.x - 0.5 + Et),
							(j.y = -(J.at(1, 0) * j.x + J.at(1, 2)) / J.at(1, 1)),
							(vt = Math.abs(j.y - ct.y)),
							(ee = pt(J, j)),
							vt <= 0.5 && ee < te && ((te = ee), (Ft = j.x), (kt = j.y));
				for (nt = 0; nt < 2; nt++)
					for (K = 0; K < 2; K++)
						(j.x = ct.x - 0.5 + nt),
							(j.y = ct.y - 0.5 + K),
							(ee = pt(J, j)),
							ee < te && ((te = ee), (Ft = j.x), (kt = j.y));
				A.curve.vertex[C] = new o(Ft + lt, kt + gt);
			}
		}
		function Ot(A) {
			var U = A.curve,
				m = U.n,
				z = U.vertex,
				I,
				ht,
				lt;
			for (I = 0, ht = m - 1; I < ht; I++, ht--)
				(lt = z[I]), (z[I] = z[ht]), (z[ht] = lt);
		}
		function Zt(A) {
			var U = A.curve.n,
				m = A.curve,
				z,
				I,
				ht,
				lt,
				gt,
				h,
				f,
				et,
				R;
			for (z = 0; z < U; z++)
				(I = O(z + 1, U)),
					(ht = O(z + 2, U)),
					(R = G(1 / 2, m.vertex[ht], m.vertex[I])),
					(gt = k(m.vertex[z], m.vertex[ht])),
					gt !== 0
						? ((lt = w(m.vertex[z], m.vertex[I], m.vertex[ht]) / gt),
							(lt = Math.abs(lt)),
							(h = lt > 1 ? 1 - 1 / lt : 0),
							(h = h / 0.75))
						: (h = 4 / 3),
					(m.alpha0[I] = h),
					h >= c.alphamax
						? ((m.tag[I] = "CORNER"),
							(m.c[3 * I + 1] = m.vertex[I]),
							(m.c[3 * I + 2] = R))
						: (h < 0.55 ? (h = 0.55) : h > 1 && (h = 1),
							(f = G(0.5 + 0.5 * h, m.vertex[z], m.vertex[I])),
							(et = G(0.5 + 0.5 * h, m.vertex[ht], m.vertex[I])),
							(m.tag[I] = "CURVE"),
							(m.c[3 * I + 0] = f),
							(m.c[3 * I + 1] = et),
							(m.c[3 * I + 2] = R)),
					(m.alpha[I] = h),
					(m.beta[I] = 0.5);
			m.alphacurve = 1;
		}
		function At(A) {
			function U() {
				(this.pen = 0),
					(this.c = [new o(), new o()]),
					(this.t = 0),
					(this.s = 0),
					(this.alpha = 0);
			}
			function m(ee, Ft, kt, Et, Se, ue, se) {
				var oe = ee.curve.n,
					Ut = ee.curve,
					Mt = Ut.vertex,
					Tt,
					Lt,
					re,
					Te,
					pe,
					We,
					me,
					ie,
					zt,
					Kt,
					ve,
					Ht,
					Yt,
					Gt,
					de,
					Ce,
					Ie,
					jt,
					be,
					Le,
					Ze,
					Be,
					ae;
				if (
					Ft == kt ||
					((Tt = Ft),
					(pe = O(Ft + 1, oe)),
					(Lt = O(Tt + 1, oe)),
					(Te = ue[Lt]),
					Te === 0)
				)
					return 1;
				for (ie = rt(Mt[Ft], Mt[pe]), Tt = Lt; Tt != kt; Tt = Lt)
					if (
						((Lt = O(Tt + 1, oe)),
						(re = O(Tt + 2, oe)),
						ue[Lt] != Te ||
							at(Y(Mt[Ft], Mt[pe], Mt[Lt], Mt[re])) != Te ||
							Q(Mt[Ft], Mt[pe], Mt[Lt], Mt[re]) <
								ie * rt(Mt[Lt], Mt[re]) * -0.999847695156)
					)
						return 1;
				if (
					((ve = Ut.c[O(Ft, oe) * 3 + 2].copy()),
					(Ht = Mt[O(Ft + 1, oe)].copy()),
					(Yt = Mt[O(kt, oe)].copy()),
					(Gt = Ut.c[O(kt, oe) * 3 + 2].copy()),
					(We = se[kt] - se[Ft]),
					(We -= w(Mt[0], Ut.c[Ft * 3 + 2], Ut.c[kt * 3 + 2]) / 2),
					Ft >= kt && (We += se[oe]),
					(jt = w(ve, Ht, Yt)),
					(be = w(ve, Ht, Gt)),
					(Le = w(ve, Yt, Gt)),
					(Ze = jt + Le - be),
					be == jt ||
						((ae = Le / (Le - Ze)),
						(Be = be / (be - jt)),
						(Ce = (be * ae) / 2),
						Ce === 0))
				)
					return 1;
				for (
					Ie = We / Ce,
						me = 2 - Math.sqrt(4 - Ie / 0.3),
						Et.c[0] = G(ae * me, ve, Ht),
						Et.c[1] = G(Be * me, Gt, Yt),
						Et.alpha = me,
						Et.t = ae,
						Et.s = Be,
						Ht = Et.c[0].copy(),
						Yt = Et.c[1].copy(),
						Et.pen = 0,
						Tt = O(Ft + 1, oe);
					Tt != kt;
					Tt = Lt
				) {
					if (
						((Lt = O(Tt + 1, oe)),
						(ae = bt(ve, Ht, Yt, Gt, Mt[Tt], Mt[Lt])),
						ae < -0.5 ||
							((de = ft(ae, ve, Ht, Yt, Gt)),
							(ie = rt(Mt[Tt], Mt[Lt])),
							ie === 0) ||
							((zt = w(Mt[Tt], Mt[Lt], de) / ie), Math.abs(zt) > Se) ||
							F(Mt[Tt], Mt[Lt], de) < 0 ||
							F(Mt[Lt], Mt[Tt], de) < 0)
					)
						return 1;
					Et.pen += zt * zt;
				}
				for (Tt = Ft; Tt != kt; Tt = Lt) {
					if (
						((Lt = O(Tt + 1, oe)),
						(ae = bt(ve, Ht, Yt, Gt, Ut.c[Tt * 3 + 2], Ut.c[Lt * 3 + 2])),
						ae < -0.5 ||
							((de = ft(ae, ve, Ht, Yt, Gt)),
							(ie = rt(Ut.c[Tt * 3 + 2], Ut.c[Lt * 3 + 2])),
							ie === 0) ||
							((zt = w(Ut.c[Tt * 3 + 2], Ut.c[Lt * 3 + 2], de) / ie),
							(Kt = w(Ut.c[Tt * 3 + 2], Ut.c[Lt * 3 + 2], Mt[Lt]) / ie),
							(Kt *= 0.75 * Ut.alpha[Lt]),
							Kt < 0 && ((zt = -zt), (Kt = -Kt)),
							zt < Kt - Se))
					)
						return 1;
					zt < Kt && (Et.pen += (zt - Kt) * (zt - Kt));
				}
				return 0;
			}
			var z = A.curve,
				I = z.n,
				ht = z.vertex,
				lt = new Array(I + 1),
				gt = new Array(I + 1),
				h = new Array(I + 1),
				f = new Array(I + 1),
				et,
				R,
				a,
				C,
				P = new U(),
				K,
				nt,
				ct,
				J,
				j,
				It,
				vt,
				Xt = new Array(I),
				te = new Array(I + 1);
			for (R = 0; R < I; R++)
				z.tag[R] == "CURVE"
					? (Xt[R] = at(w(ht[O(R - 1, I)], ht[R], ht[O(R + 1, I)])))
					: (Xt[R] = 0);
			for (ct = 0, te[0] = 0, K = z.vertex[0], R = 0; R < I; R++)
				(nt = O(R + 1, I)),
					z.tag[nt] == "CURVE" &&
						((J = z.alpha[nt]),
						(ct +=
							(0.3 * J * (4 - J) * w(z.c[R * 3 + 2], ht[nt], z.c[nt * 3 + 2])) /
							2),
						(ct += w(K, z.c[R * 3 + 2], z.c[nt * 3 + 2]) / 2)),
					(te[R + 1] = ct);
			for (lt[0] = -1, gt[0] = 0, h[0] = 0, a = 1; a <= I; a++)
				for (
					lt[a] = a - 1, gt[a] = gt[a - 1], h[a] = h[a - 1] + 1, R = a - 2;
					R >= 0 && ((C = m(A, R, O(a, I), P, c.opttolerance, Xt, te)), !C);
					R--
				)
					(h[a] > h[R] + 1 || (h[a] == h[R] + 1 && gt[a] > gt[R] + P.pen)) &&
						((lt[a] = R),
						(gt[a] = gt[R] + P.pen),
						(h[a] = h[R] + 1),
						(f[a] = P),
						(P = new U()));
			for (
				et = h[I],
					j = new t(et),
					It = new Array(et),
					vt = new Array(et),
					a = I,
					R = et - 1;
				R >= 0;
				R--
			)
				lt[a] == a - 1
					? ((j.tag[R] = z.tag[O(a, I)]),
						(j.c[R * 3 + 0] = z.c[O(a, I) * 3 + 0]),
						(j.c[R * 3 + 1] = z.c[O(a, I) * 3 + 1]),
						(j.c[R * 3 + 2] = z.c[O(a, I) * 3 + 2]),
						(j.vertex[R] = z.vertex[O(a, I)]),
						(j.alpha[R] = z.alpha[O(a, I)]),
						(j.alpha0[R] = z.alpha0[O(a, I)]),
						(j.beta[R] = z.beta[O(a, I)]),
						(It[R] = vt[R] = 1))
					: ((j.tag[R] = "CURVE"),
						(j.c[R * 3 + 0] = f[a].c[0]),
						(j.c[R * 3 + 1] = f[a].c[1]),
						(j.c[R * 3 + 2] = z.c[O(a, I) * 3 + 2]),
						(j.vertex[R] = G(f[a].s, z.c[O(a, I) * 3 + 2], ht[O(a, I)])),
						(j.alpha[R] = f[a].alpha),
						(j.alpha0[R] = f[a].alpha),
						(It[R] = f[a].s),
						(vt[R] = f[a].t)),
					(a = lt[a]);
			for (R = 0; R < et; R++)
				(nt = O(R + 1, et)), (j.beta[R] = It[R] / (It[R] + vt[nt]));
			(j.alphacurve = 1), (A.curve = j);
		}
		for (var Dt = 0; Dt < u.length; Dt++) {
			var Nt = u[Dt];
			wt(Nt),
				ut(Nt),
				xt(Nt),
				Pt(Nt),
				Nt.sign === "-" && Ot(Nt),
				Zt(Nt),
				c.optcurve && At(Nt);
		}
	}
	function b(d) {
		if ((d && (y = d), !c.isReady)) {
			setTimeout(b, 100);
			return;
		}
		W(), M(), y(), (y = null);
	}
	function x() {
		(e = null), (u = []), (y = null), (c.isReady = !1);
	}
	function E(d, _) {
		function O(F) {
			function Q(ut) {
				var xt =
					"C " +
					(F.c[ut * 3 + 0].x * d).toFixed(3) +
					" " +
					(F.c[ut * 3 + 0].y * d).toFixed(3) +
					",";
				return (
					(xt +=
						(F.c[ut * 3 + 1].x * d).toFixed(3) +
						" " +
						(F.c[ut * 3 + 1].y * d).toFixed(3) +
						","),
					(xt +=
						(F.c[ut * 3 + 2].x * d).toFixed(3) +
						" " +
						(F.c[ut * 3 + 2].y * d).toFixed(3) +
						" "),
					xt
				);
			}
			function rt(ut) {
				var xt =
					"L " +
					(F.c[ut * 3 + 1].x * d).toFixed(3) +
					" " +
					(F.c[ut * 3 + 1].y * d).toFixed(3) +
					" ";
				return (
					(xt +=
						(F.c[ut * 3 + 2].x * d).toFixed(3) +
						" " +
						(F.c[ut * 3 + 2].y * d).toFixed(3) +
						" "),
					xt
				);
			}
			var ft = F.n,
				bt,
				wt =
					"M" +
					(F.c[(ft - 1) * 3 + 2].x * d).toFixed(3) +
					" " +
					(F.c[(ft - 1) * 3 + 2].y * d).toFixed(3) +
					" ";
			for (bt = 0; bt < ft; bt++)
				F.tag[bt] === "CURVE"
					? (wt += Q(bt))
					: F.tag[bt] === "CORNER" && (wt += rt(bt));
			return wt;
		}
		var L = e.w * d,
			$ = e.h * d,
			at = u.length,
			pt,
			G,
			Z,
			k,
			w,
			Y =
				'<svg id="svg" version="1.1" width="' +
				L +
				'" height="' +
				$ +
				'" xmlns="http://www.w3.org/2000/svg">';
		for (Y += '<path d="', G = 0; G < at; G++) (pt = u[G].curve), (Y += O(pt));
		return (
			_ === "curve"
				? ((Z = "black"), (k = "none"), (w = ""))
				: ((Z = "none"), (k = "black"), (w = ' fill-rule="evenodd"')),
			(Y += '" stroke="' + Z + '" fill="' + k + '"' + w + "/></svg>"),
			Y
		);
	}
	function V(d, _) {
		function O(G) {
			function Z(Q) {
				var rt =
					"C " +
					(G.c[Q * 3 + 0].x * d).toFixed(3) +
					" " +
					(G.c[Q * 3 + 0].y * d).toFixed(3) +
					",";
				return (
					(rt +=
						(G.c[Q * 3 + 1].x * d).toFixed(3) +
						" " +
						(G.c[Q * 3 + 1].y * d).toFixed(3) +
						","),
					(rt +=
						(G.c[Q * 3 + 2].x * d).toFixed(3) +
						" " +
						(G.c[Q * 3 + 2].y * d).toFixed(3) +
						" "),
					rt
				);
			}
			function k(Q) {
				var rt =
					"L " +
					(G.c[Q * 3 + 1].x * d).toFixed(3) +
					" " +
					(G.c[Q * 3 + 1].y * d).toFixed(3) +
					" ";
				return (
					(rt +=
						(G.c[Q * 3 + 2].x * d).toFixed(3) +
						" " +
						(G.c[Q * 3 + 2].y * d).toFixed(3) +
						" "),
					rt
				);
			}
			var w = G.n,
				Y,
				F =
					"M" +
					(G.c[(w - 1) * 3 + 2].x * d).toFixed(3) +
					" " +
					(G.c[(w - 1) * 3 + 2].y * d).toFixed(3) +
					" ";
			for (Y = 0; Y < w; Y++)
				G.tag[Y] === "CURVE"
					? (F += Z(Y))
					: G.tag[Y] === "CORNER" && (F += k(Y));
			return F;
		}
		var L = u.length,
			$,
			at,
			pt = "";
		for (at = 0; at < L; at++) ($ = u[at].curve), (pt += O($));
		return pt;
	}
	return {
		loadImageFromFile: B,
		loadImageFromUrl: X,
		setParameter: H,
		process: b,
		getSVG: E,
		getPath: V,
		img: s,
	};
})();
const fs = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: Xn },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Pe = (o, n, i) => Math.min(Math.max(o, n), i),
	De = (o) => (Number.isFinite(o) && o > 0 ? o : 1),
	ze = (o) => (Number.isFinite(o) ? o : 0),
	xo = (o) => (Number.isFinite(o) ? o : 0),
	bo = (o, n, i) => {
		const t = De(o.width),
			s = De(o.height),
			p = De(n),
			e = De(i),
			u = ze(o.left),
			y = ze(o.top);
		if (p === t && e === s) return { left: u, top: y, width: t, height: s };
		const c = t / s,
			B = p / e,
			X = 1e-4;
		let H = t,
			q = s,
			v = 0,
			W = 0;
		return (
			Math.abs(c - B) <= X ||
				(B > c
					? ((q = t / B), (W = (s - q) / 2))
					: ((H = s * B), (v = (t - H) / 2))),
			{ left: u + v, top: y + W, width: H, height: q }
		);
	},
	oi = (o, n, i) => {
		const t = ze(o.left),
			s = ze(o.top),
			p = Math.max(0, ze(i?.stageClientLeft ?? 0)),
			e = Math.max(0, ze(i?.stageClientTop ?? 0)),
			u = Math.max(0, xo(i?.stageScrollLeft ?? 0)),
			y = Math.max(0, xo(i?.stageScrollTop ?? 0)),
			c = t + p - u,
			B = s + e - y;
		return {
			offsetX: ze(n.left - c),
			offsetY: ze(n.top - B),
			width: De(n.width),
			height: De(n.height),
		};
	},
	ri = (o, n) => {
		const i = De(n.width),
			t = De(n.height),
			s = ze(n.offsetX),
			p = ze(n.offsetY),
			e = Pe(o.left - s, 0, i),
			u = Pe(o.top - p, 0, t),
			y = i - e,
			c = t - u;
		return {
			left: e,
			top: u,
			width: Pe(o.width, 0, y),
			height: Pe(o.height, 0, c),
		};
	},
	ii = (o, n, i, t) => {
		const s = ri(o, n),
			p = De(i),
			e = De(t),
			u = p / De(n.width),
			y = e / De(n.height);
		let c = Pe(Math.round(s.left * u), 0, Math.max(p - 1, 0)),
			B = Pe(Math.round(s.top * y), 0, Math.max(e - 1, 0)),
			X = Math.max(1, Math.round(s.width * u)),
			H = Math.max(1, Math.round(s.height * y));
		return (
			(X = Pe(X, 1, p - c)),
			(H = Pe(H, 1, e - B)),
			{ cropX: c, cropY: B, cropWidth: X, cropHeight: H }
		);
	};
const Ge = 12,
	ai = oo({
		__name: "ImageTraceWorkflow",
		props: { width: {}, height: {} },
		emits: ["status", "traced", "workflow-finished"],
		setup(o, { expose: n, emit: i }) {
			const t = o,
				{ t: s } = ro(),
				p = i,
				e = (a, C) => {
					p("status", { status: a, duration: C });
				},
				u = (a) =>
					new Promise((C, P) => {
						const K = new FileReader();
						(K.onload = () => {
							typeof K.result == "string" ? C(K.result) : C("");
						}),
							(K.onerror = () =>
								P(K.error ?? new Error(s("failed_to_read_image")))),
							K.readAsDataURL(a);
					}),
				y = (a) =>
					new Promise((C, P) => {
						if (typeof Image > "u") {
							P(
								new Error(
									s("image_processing_is_not_supported_in_this_environment"),
								),
							);
							return;
						}
						const K = new Image();
						(K.crossOrigin = "anonymous"),
							(K.onload = () => C(K)),
							(K.onerror = () => P(new Error(s("failed_to_load_image")))),
							(K.src = a);
					}),
				c = Ct(null),
				B = Ct(null),
				X = Ct(null),
				H = Ct(null),
				q = Ct(null),
				v = Ct(null),
				W = Ct(null),
				M = Ct(null),
				b = [
					"top-left",
					"top",
					"top-right",
					"right",
					"bottom-right",
					"bottom",
					"bottom-left",
					"left",
				],
				x = Je({
					mode: "idle",
					handle: null,
					pointerId: null,
					startPointerX: 0,
					startPointerY: 0,
					startRect: null,
				}),
				E = Ct(!1),
				V = dt(() => !!q.value),
				d = [
					"a[href]",
					"button:not([disabled])",
					"textarea:not([disabled])",
					"input:not([disabled])",
					"select:not([disabled])",
					"[tabindex]:not([tabindex='-1'])",
				],
				_ = d.join(",");
			let O = !1;
			const L = () => {
					const a = X.value;
					return a ? Array.from(a.querySelectorAll(_)) : [];
				},
				$ = () => {
					if (typeof document > "u") return;
					(H.value ?? L()[0] ?? X.value)?.focus();
				},
				at = (a) => {
					if (!V.value) return;
					const C = X.value;
					C && (C.contains(a.target) || (a.stopPropagation(), $()));
				},
				pt = () => {
					O ||
						typeof document > "u" ||
						(document.addEventListener("focusin", at), (O = !0));
				},
				G = () => {
					!O ||
						typeof document > "u" ||
						(document.removeEventListener("focusin", at), (O = !1));
				};
			ye(V, (a) => {
				typeof document > "u" ||
					(a
						? ((W.value =
								document.activeElement instanceof HTMLElement
									? document.activeElement
									: null),
							pt(),
							Ke(() => {
								$();
							}))
						: (G(),
							Ke(() => {
								W.value?.focus?.(), (W.value = null);
							})));
			});
			const Z = () => {
					const a = c.value;
					if (!a) return null;
					const C = a.getBoundingClientRect(),
						P = Number.isFinite(a.clientLeft) ? a.clientLeft : 0,
						K = Number.isFinite(a.clientTop) ? a.clientTop : 0,
						nt = Number.isFinite(a.scrollLeft) ? a.scrollLeft : 0,
						ct = Number.isFinite(a.scrollTop) ? a.scrollTop : 0,
						J = B.value;
					let j = J?.getBoundingClientRect();
					(!j ||
						!Number.isFinite(j.width) ||
						j.width <= 0 ||
						!Number.isFinite(j.height) ||
						j.height <= 0) &&
						(j = C);
					const It = Math.max(J?.naturalWidth || J?.width || 0, 0),
						vt = Math.max(J?.naturalHeight || J?.height || 0, 0);
					let Xt = j;
					return (
						It > 0 && vt > 0 && (Xt = bo(j, It, vt)),
						{
							stageRect: C,
							imageRect: j,
							renderRect: Xt,
							stageClientLeft: P,
							stageClientTop: K,
							stageScrollLeft: nt,
							stageScrollTop: ct,
							naturalWidth: It,
							naturalHeight: vt,
						}
					);
				},
				k = dt(() =>
					M.value
						? {
								left: `${M.value.left}px`,
								top: `${M.value.top}px`,
								width: `${M.value.width}px`,
								height: `${M.value.height}px`,
							}
						: null,
				),
				w = dt(() => !!M.value),
				Y = () => {
					const a = Z();
					if (!a) return null;
					const {
							stageRect: C,
							renderRect: P,
							imageRect: K,
							stageClientLeft: nt,
							stageClientTop: ct,
						} = a,
						J = P ?? K,
						j = C.left + nt,
						It = C.top + ct;
					return {
						left: J.left - j,
						top: J.top - It,
						width: J.width,
						height: J.height,
					};
				},
				F = (a, C) => {
					const P = C ?? Y();
					if (!P)
						return {
							left: Math.max(0, a.left),
							top: Math.max(0, a.top),
							width: Math.max(Ge, a.width),
							height: Math.max(Ge, a.height),
						};
					const K = Math.min(Ge, P.width),
						nt = Math.min(Ge, P.height),
						ct = Pe(a.width, K, P.width),
						J = Pe(a.height, nt, P.height),
						j = P.left + P.width - ct,
						It = P.top + P.height - J,
						vt = Pe(a.left, P.left, j),
						Xt = Pe(a.top, P.top, It);
					return { left: vt, top: Xt, width: ct, height: J };
				},
				Q = () => {
					const a = Y();
					if (!a) {
						M.value = null;
						return;
					}
					M.value = F(a, a);
				},
				rt = () => {
					Ke(() => {
						Q();
					});
				},
				ft = () => {
					M.value = null;
				},
				bt = (a) => {
					const C = Z();
					if (!C) return { x: 0, y: 0 };
					const {
							stageRect: P,
							renderRect: K,
							stageClientLeft: nt,
							stageClientTop: ct,
						} = C,
						J = K ?? C.imageRect,
						j = Pe(a.clientX, J.left, J.left + J.width),
						It = Pe(a.clientY, J.top, J.top + J.height),
						vt = P.left + nt,
						Xt = P.top + ct;
					return { x: j - vt, y: It - Xt };
				},
				wt = (a) => b.includes(a),
				ut = (a, C, P) => {
					if (!M.value) return;
					const K = c.value;
					if (!K) return;
					const { x: nt, y: ct } = bt(C);
					(x.mode = a),
						(x.handle = P),
						(x.pointerId = C.pointerId),
						(x.startPointerX = nt),
						(x.startPointerY = ct),
						(x.startRect = { ...M.value }),
						K.setPointerCapture?.(C.pointerId);
				},
				xt = (a) => {
					if (!V.value || !M.value) return;
					const C = a.target,
						P = C?.closest("[data-cropper-handle]");
					if (P) {
						const nt = P.dataset.cropperHandle ?? "";
						wt(nt) && ut("resize", a, nt);
						return;
					}
					C?.closest("[data-cropper-role='selection']") && ut("move", a, null);
				},
				Pt = (a, C, P, K) => {
					let { left: nt, top: ct, width: J, height: j } = a;
					if (C.includes("left")) {
						const It = nt + P,
							vt = nt + J - Ge,
							Xt = Math.min(It, vt);
						(J = J + (nt - Xt)), (nt = Xt);
					}
					if (
						(C.includes("right") && (J = Math.max(Ge, J + P)),
						C.includes("top"))
					) {
						const It = ct + K,
							vt = ct + j - Ge,
							Xt = Math.min(It, vt);
						(j = j + (ct - Xt)), (ct = Xt);
					}
					return (
						C.includes("bottom") && (j = Math.max(Ge, j + K)),
						{ left: nt, top: ct, width: J, height: j }
					);
				},
				Ot = (a) => {
					if (x.mode === "idle" || !x.startRect) return;
					const { x: C, y: P } = bt(a),
						K = C - x.startPointerX,
						nt = P - x.startPointerY;
					let ct = { ...x.startRect };
					x.mode === "move"
						? ((ct.left += K), (ct.top += nt))
						: x.mode === "resize" &&
							x.handle &&
							(ct = Pt(x.startRect, x.handle, K, nt)),
						(M.value = F(ct));
				},
				Zt = () => {
					x.pointerId !== null &&
						c.value &&
						c.value.releasePointerCapture?.(x.pointerId),
						(x.mode = "idle"),
						(x.handle = null),
						(x.pointerId = null),
						(x.startRect = null);
				},
				At = () => {
					Zt();
				},
				Dt = () => {
					x.mode !== "idle" && Zt();
				},
				Nt = () => {
					rt();
				},
				A = (a) => {
					v.value?.(a), (v.value = null), (q.value = null), ft();
				},
				U = (a) =>
					typeof window > "u"
						? Promise.resolve(a)
						: (v.value && v.value(null),
							(q.value = a),
							ft(),
							rt(),
							new Promise((C) => {
								v.value = C;
							})),
				m = () => {
					A(null);
				},
				z = () => {
					m();
				},
				I = (a) => {
					if (!V.value) return;
					if (a.key === "Escape") {
						a.preventDefault(), m();
						return;
					}
					if (a.key !== "Tab" || typeof document > "u") return;
					const C = X.value;
					if (!C) return;
					const P = L();
					if (!P.length) {
						a.preventDefault(), C.focus();
						return;
					}
					const K = P[0],
						nt = P[P.length - 1],
						ct = document.activeElement;
					if (!!!(ct && C.contains(ct))) {
						a.preventDefault(), K.focus();
						return;
					}
					if (a.shiftKey && ct === K) {
						a.preventDefault(), nt.focus();
						return;
					}
					!a.shiftKey && ct === nt && (a.preventDefault(), K.focus());
				},
				ht = async () => {
					if (!q.value || !M.value || typeof document > "u") return q.value;
					const a = Z();
					if (!a) return q.value;
					const C = await y(q.value),
						P = Math.max(C.naturalWidth || C.width || 1, 1),
						K = Math.max(C.naturalHeight || C.height || 1, 1),
						{
							stageRect: nt,
							imageRect: ct,
							renderRect: J,
							stageClientLeft: j,
							stageClientTop: It,
							stageScrollLeft: vt,
							stageScrollTop: Xt,
						} = a,
						te = J ?? bo(ct, P, K),
						ee = oi(nt, te, {
							stageClientLeft: j,
							stageClientTop: It,
							stageScrollLeft: vt,
							stageScrollTop: Xt,
						}),
						Ft = ii(M.value, ee, P, K),
						kt = document.createElement("canvas");
					(kt.width = Math.max(1, Math.round(Ft.cropWidth))),
						(kt.height = Math.max(1, Math.round(Ft.cropHeight)));
					const Et = kt.getContext("2d");
					if (!Et) throw new Error(s("unable_to_create_crop_canvas"));
					return (
						(Et.imageSmoothingEnabled = !0),
						(Et.imageSmoothingQuality = "high"),
						Et.drawImage(
							C,
							Ft.cropX,
							Ft.cropY,
							Ft.cropWidth,
							Ft.cropHeight,
							0,
							0,
							kt.width,
							kt.height,
						),
						kt.toDataURL("image/png")
					);
				},
				lt = async () => {
					if (!q.value) {
						m();
						return;
					}
					try {
						const a = (await ht()) ?? q.value;
						A(a);
					} catch (a) {
						console.error("Failed to crop image:", a), A(q.value);
					}
				},
				gt = async (a) => {
					if (typeof document > "u" || typeof Image > "u") return a;
					const C = await y(a),
						P = Math.max(C.naturalWidth || C.width || 256, 1),
						K = Math.max(C.naturalHeight || C.height || P, 1),
						nt = Number(t.width ?? P) || P,
						ct = Number(t.height ?? K) || K,
						J = Math.max(Math.round(nt), 1),
						j = Math.max(Math.round(ct), 1),
						It = document.createElement("canvas");
					(It.width = J), (It.height = j);
					const vt = It.getContext("2d");
					if (!vt) throw new Error(s("unable_to_create_canvas_context"));
					vt.clearRect(0, 0, J, j),
						(vt.fillStyle = "#ffffff"),
						vt.fillRect(0, 0, J, j);
					const Xt = Math.max(C.naturalWidth || C.width || 1, 1),
						te = Math.max(C.naturalHeight || C.height || 1, 1),
						ee = Math.min(J / Xt, j / te) || 1,
						Ft = Xt * ee,
						kt = te * ee,
						Et = (J - Ft) / 2,
						Se = (j - kt) / 2;
					return vt.drawImage(C, Et, Se, Ft, kt), It.toDataURL("image/png");
				},
				h = (a) =>
					new Promise((C, P) => {
						try {
							Xn.loadImageFromUrl(a),
								Xn.process(() => {
									try {
										C((Xn.getPath(1) ?? "").trim());
									} catch (K) {
										P(K);
									}
								});
						} catch (K) {
							P(K);
						}
					}),
				f = async (a) => {
					let C = !1;
					const P = (nt) => {
						C || ((C = !0), p("workflow-finished", { reason: nt }));
					};
					let K = null;
					try {
						const nt = await u(a);
						K = await U(nt);
					} catch (nt) {
						console.error("Failed to load image file:", nt),
							e(
								{
									icon: "!",
									message: s("image_failed_to_load"),
									tone: "error",
								},
								2600,
							),
							P("error");
						return;
					}
					if (!K) {
						P("cancelled");
						return;
					}
					(E.value = !0),
						e(
							{ icon: "⏳", message: s("converting_image"), tone: "info" },
							3e3,
						);
					try {
						const nt = await gt(K),
							ct = await h(nt);
						if (!ct) {
							e(
								{
									icon: "!",
									message: s("no_usable_paths_detected"),
									tone: "warning",
								},
								2500,
							),
								P("empty");
							return;
						}
						p("traced", ct), P("success");
					} catch (nt) {
						console.error("Failed to convert image via potrace:", nt),
							e(
								{
									icon: "!",
									message: s("image_conversion_failed"),
									tone: "error",
								},
								2600,
							),
							P("error");
					} finally {
						E.value = !1;
					}
				},
				et = (a) =>
					a
						? E.value || V.value
							? (e(
									{
										icon: "⏳",
										message: s("previous_image_is_still_processing"),
										tone: "info",
									},
									2e3,
								),
								!1)
							: (f(a), !0)
						: !1;
			Vn(() => {
				G(), v.value && A(null);
			}),
				n({ processImageFile: et });
			const R = {
				props: t,
				t: s,
				emit: p,
				emitStatus: e,
				readFileAsDataUrl: u,
				loadImageFromDataUrl: y,
				imageCropperStageRef: c,
				imageCropperImageRef: B,
				imageCropperModalRef: X,
				imageCropperCloseButtonRef: H,
				imageCropperSource: q,
				pendingCropperResolve: v,
				previouslyFocusedElement: W,
				cropperSelectionRect: M,
				cropperHandles: b,
				MIN_CROPPER_SIZE: Ge,
				cropperInteraction: x,
				isTracingImage: E,
				isImageCropperVisible: V,
				focusableSelectors: d,
				focusableSelector: _,
				get isFocusTrapActive() {
					return O;
				},
				set isFocusTrapActive(a) {
					O = a;
				},
				getModalFocusableElements: L,
				focusFirstModalElement: $,
				handleDocumentFocus: at,
				activateFocusTrap: pt,
				deactivateFocusTrap: G,
				getStageAndImageMetrics: Z,
				cropperSelectionStyle: k,
				hasCropperSelection: w,
				getSelectionBounds: Y,
				clampSelectionRect: F,
				setSelectionToBounds: Q,
				initializeCropperSelection: rt,
				clearCropperSelection: ft,
				getPointerPositionWithinStage: bt,
				isCropperHandle: wt,
				beginCropperInteraction: ut,
				handleCropperPointerDown: xt,
				resizeSelectionByHandle: Pt,
				handleCropperPointerMove: Ot,
				finishCropperPointer: Zt,
				handleCropperPointerUp: At,
				handleCropperPointerLeave: Dt,
				handleCropperImageLoad: Nt,
				resolveCropperRequest: A,
				requestImageCropping: U,
				cancelImageCropping: m,
				handleBackdropClick: z,
				handleModalKeydown: I,
				generateCroppedImageDataUrl: ht,
				confirmImageCropping: lt,
				normalizeImageForTracing: gt,
				traceImageWithPotrace: h,
				runImageTraceWorkflow: f,
				processImageFile: et,
			};
			return (
				Object.defineProperty(R, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				R
			);
		},
	}),
	si = {
		ref: "imageCropperModalRef",
		class: "image-cropper-modal",
		role: "document",
		tabindex: "-1",
	},
	li = { class: "image-cropper-header" },
	ci = { class: "image-cropper-title" },
	ui = { class: "image-cropper-subtitle" },
	di = ["aria-label"],
	fi = { class: "image-cropper-body" },
	hi = ["onPointerdown", "onPointermove", "onPointerup"],
	pi = ["src", "alt"],
	mi = { class: "image-cropper-selection-label" },
	gi = ["data-cropper-handle"],
	yi = { class: "image-cropper-actions" },
	vi = ["disabled"];
function xi(o, n, i, t, s, p) {
	return (
		mt(),
		Hn(_o, { to: "body" }, [
			t.isImageCropperVisible
				? (mt(),
					yt(
						"div",
						{
							key: 0,
							class: "image-cropper-overlay",
							role: "dialog",
							"aria-modal": "true",
							onKeydownCapture: t.handleModalKeydown,
						},
						[
							ot("div", {
								class: "image-cropper-backdrop",
								onClick: t.handleBackdropClick,
							}),
							ot(
								"div",
								si,
								[
									ot("header", li, [
										ot("div", null, [
											ot("h3", ci, Qt(t.t("crop_image")), 1),
											ot(
												"p",
												ui,
												Qt(t.t("drag_the_selection_to_keep_the_desired_area")),
												1,
											),
										]),
										ot(
											"button",
											{
												type: "button",
												class: "image-cropper-close",
												ref: "imageCropperCloseButtonRef",
												onClick: t.cancelImageCropping,
												"aria-label": t.t("close_crop_dialog"),
											},
											" × ",
											8,
											di,
										),
									]),
									ot("div", fi, [
										ot(
											"div",
											{
												ref: "imageCropperStageRef",
												class: "image-cropper-stage",
												onPointerdown: Ne(t.handleCropperPointerDown, [
													"prevent",
												]),
												onPointermove: Ne(t.handleCropperPointerMove, [
													"prevent",
												]),
												onPointerup: Ne(t.handleCropperPointerUp, ["prevent"]),
												onPointerleave: t.handleCropperPointerLeave,
												onPointercancel: t.handleCropperPointerUp,
											},
											[
												ot(
													"img",
													{
														ref: "imageCropperImageRef",
														src: t.imageCropperSource ?? "",
														alt: t.t("image_to_crop"),
														onLoad: t.handleCropperImageLoad,
														draggable: "false",
													},
													null,
													40,
													pi,
												),
												t.cropperSelectionStyle
													? (mt(),
														yt(
															"div",
															{
																key: 0,
																class: "image-cropper-selection",
																style: _e(t.cropperSelectionStyle),
																"data-cropper-role": "selection",
															},
															[
																ot("span", mi, Qt(t.t("selection")), 1),
																(mt(),
																yt(
																	ce,
																	null,
																	xe(t.cropperHandles, (e) =>
																		ot(
																			"div",
																			{
																				key: e,
																				class: we([
																					"image-cropper-handle",
																					[`image-cropper-handle--${e}`],
																				]),
																				"data-cropper-handle": e,
																			},
																			null,
																			10,
																			gi,
																		),
																	),
																	64,
																)),
															],
															4,
														))
													: ne("", !0),
											],
											40,
											hi,
										),
									]),
									ot("div", yi, [
										ot(
											"button",
											{
												type: "button",
												class: "image-cropper-action",
												onClick: t.cancelImageCropping,
											},
											Qt(t.t("cancel")),
											1,
										),
										ot(
											"button",
											{
												type: "button",
												class: "image-cropper-action primary",
												onClick: t.confirmImageCropping,
												disabled: !t.hasCropperSelection,
											},
											Qt(t.t("confirm")),
											9,
											vi,
										),
									]),
								],
								512,
							),
						],
						32,
					))
				: ne("", !0),
		])
	);
}
const bi = no(ai, [
		["render", xi],
		["__scopeId", "data-v-61b472cb"],
	]),
	wi = {
		handleColor: "#ffffff",
		anchorColor: "#ffffff",
		controlColor: "#bfdbfe",
		segmentSelectedColor: "rgba(29, 78, 216, 0.35)",
		anchorHoverColor: "#1d4ed8",
		anchorActiveColor: "#1d4ed8",
		controlHoverColor: "#1d4ed8",
		axisColor: "#64748b",
		gridBackgroundColor: "#f9fafb",
		gridLineColor: "#d0d7de",
		pathCanvasBorderColor: "#e5e7eb",
		controlLineColor: "#0f172a",
		axisLabelBackgroundColor: "rgba(255, 255, 255, 0.7)",
		axisLabelTextColor: "#64748b",
		axisLayerColor: "#64748b",
		mouseCoordinatesBackgroundColor: "rgba(15, 23, 42, 0.75)",
		mouseCoordinatesTextColor: "#ffffff",
		toolbarBackgroundColor: "#ffffff",
		toolbarBorderColor: "#e5e7eb",
		toolbarShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
		toolbarGroupDividerColor: "#e5e7eb",
		toolbarButtonTextColor: "#64748b",
		toolbarButtonHoverBackgroundColor: "#f1f5f9",
		toolbarButtonHoverTextColor: "#1d4ed8",
		toolbarButtonHoverBorderColor: "#e2e8f0",
		toolbarButtonActiveBackgroundColor: "#dbeafe",
		toolbarButtonActiveTextColor: "#1d4ed8",
		toolbarButtonActiveBorderColor: "#93c5fd",
		toolbarButtonDisabledOpacity: 0.4,
		fillColor: "#000000",
		fillOpacity: 0.18,
		strokeColor: "#ffffff",
		strokeWidth: 0.5,
		padding: 24,
		gridStep: 20,
		visualBoundsColor: "#f97316",
		transformBoxColor: "rgba(29, 78, 216, 0.35)",
		transformCornerColor: "#ffffff",
		transformCornerHoverColor: "#1d4ed8",
		transformEdgeColor: "#bfdbfe",
		transformEdgeHoverColor: "#1d4ed8",
		transformHandleStrokeColor: "#0f172a",
		transformHandleHoverStrokeColor: "#1d4ed8",
	},
	Ci = {
		handleColor: "rgba(148, 163, 184, 0.35)",
		anchorColor: "#cbd5f5",
		controlColor: "#60a5fa",
		segmentSelectedColor: "rgba(59, 130, 246, 0.35)",
		anchorHoverColor: "#93c5fd",
		anchorActiveColor: "#60a5fa",
		controlHoverColor: "#60a5fa",
		axisColor: "#cbd5f5",
		gridBackgroundColor: "#0f172a",
		gridLineColor: "rgba(148, 163, 184, 0.18)",
		pathCanvasBorderColor: "#1f2937",
		controlLineColor: "#bfdbfe",
		axisLabelBackgroundColor: "rgba(15, 23, 42, 0.88)",
		axisLabelTextColor: "#e2e8f0",
		axisLayerColor: "#9ca3af",
		mouseCoordinatesBackgroundColor: "rgba(15, 23, 42, 0.85)",
		mouseCoordinatesTextColor: "#e2e8f0",
		toolbarBackgroundColor: "#111827",
		toolbarBorderColor: "#1f2937",
		toolbarShadow: "0 1px 3px rgba(8, 25, 61, 0.45)",
		toolbarGroupDividerColor: "#1f2937",
		toolbarButtonTextColor: "#cbd5f5",
		toolbarButtonHoverBackgroundColor: "rgba(59, 130, 246, 0.18)",
		toolbarButtonHoverTextColor: "#bfdbfe",
		toolbarButtonHoverBorderColor: "rgba(59, 130, 246, 0.35)",
		toolbarButtonActiveBackgroundColor: "rgba(29, 78, 216, 0.35)",
		toolbarButtonActiveTextColor: "#bfdbfe",
		toolbarButtonActiveBorderColor: "#60a5fa",
		toolbarButtonDisabledOpacity: 0.45,
		fillColor: "#ffffff",
		fillOpacity: 0.24,
		strokeColor: "#ffffff",
		strokeWidth: 0.5,
		visualBoundsColor: "#fbbf24",
		transformBoxColor: "rgba(59, 130, 246, 0.35)",
		transformCornerColor: "#cbd5f5",
		transformCornerHoverColor: "#93c5fd",
		transformEdgeColor: "#60a5fa",
		transformEdgeHoverColor: "#93c5fd",
		transformHandleStrokeColor: "#bfdbfe",
		transformHandleHoverStrokeColor: "#60a5fa",
	},
	ki =
		"M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z",
	Si = 512,
	_i = (o) => Math.max(o * 0.8, 1.5),
	Pi = (o, n, i) => {
		if (!Number.isFinite(i) || i <= 0) return "scale(0)";
		const t = i / Si,
			s = (p) => Math.round(p * 1e3) / 1e3;
		return `translate(${s(o - i / 2)} ${s(n - i / 2)}) scale(${s(t * 1e3) / 1e3})`;
	},
	Mi = (o) => {
		const n = (o.angle * 180) / Math.PI;
		if (!Number.isFinite(n)) return "";
		const i = o.bounds.minX + o.bounds.width / 2,
			t = o.bounds.minY + o.bounds.height / 2;
		return `rotate(${Math.round(n * 100) / 100} ${i} ${t})`;
	};
function Ti(o) {
	return {
		rotationKnobRadius: dt(() => _i(o.value)),
		buildRotationIconTransform: Pi,
		buildBoxRotationTransform: Mi,
	};
}
const wo = 800,
	Co = 70,
	Fn = 0,
	Cn = 10,
	Ii = 1,
	Qe = 0.001,
	Bi = oo({
		__name: "SvgPathEditor",
		props: {
			modelValue: { default: "" },
			width: { default: 400 },
			height: { default: 300 },
			showGrid: { type: Boolean, default: !0 },
			showHandles: { type: Boolean, default: !0 },
			showAnchors: { type: Boolean, default: !0 },
			showControls: { type: Boolean, default: !0 },
			styleOptions: {},
			allowCreateFromEmpty: { type: Boolean, default: !1 },
			showToolbar: { type: Boolean, default: !0 },
			showImageUpload: { type: Boolean, default: !0 },
			defaultTool: { default: "select" },
			enableUndo: { type: Boolean, default: !0 },
			showAxis: { type: Boolean, default: !1 },
			showAxisLabels: { type: Boolean, default: !0 },
			showMouseCoords: { type: Boolean, default: !1 },
			axisLabelStep: { default: 50 },
			initClipboard: { default: null },
			syncViewportToContent: { type: Boolean, default: !1 },
			showVisualBounds: { type: Boolean, default: !1 },
			visualBounds: { default: null },
			showStrokeWeightTool: { type: Boolean, default: !0 },
			strokeWeightState: { default: null },
		},
		emits: ["update:modelValue", "change", "copy", "update:strokeWeightState"],
		setup(o, { expose: n, emit: i }) {
			const t = o,
				s = dt(() => {
					const { dark: l, ...D } = t.styleOptions ?? {};
					return { light: { ...wi, ...D }, dark: { ...Ci, ...(l ?? {}) } };
				}),
				p = i,
				{ t: e } = ro(),
				u = Ct(null);
			let y = null;
			function c(l, D = 2e3) {
				(u.value = l),
					y !== null && clearTimeout(y),
					(y = setTimeout(() => {
						(u.value = null), (y = null);
					}, D));
			}
			const B = (l, D) => {
					if (l === "copy") {
						c({
							icon: "✓",
							message: e("copied_to_clipboard"),
							tone: "success",
						}),
							p("copy", D);
						return;
					}
					if (l === "update:strokeWeightState") {
						p("update:strokeWeightState", D);
						return;
					}
					const st = D;
					if (l === "change") {
						p("change", st);
						return;
					}
					p("update:modelValue", st);
				},
				X = Tr(t, s, B),
				{
					width: H,
					height: q,
					fillColor: v,
					strokeColor: W,
					strokeWidth: M,
					showHandles: b,
					showAnchors: x,
					showAllAnchors: E,
					setShowAllAnchors: V,
					svgRef: d,
					contentBounds: _,
					viewBoxParts: O,
					activeViewport: L,
					gridBackgroundStyle: $,
					viewBox: at,
					aspectRatio: pt,
					handleCanvasPointerDown: G,
					onPointerMove: Z,
					onPointerLeave: k,
					finishDrag: w,
					onWheel: Y,
					currentPath: F,
					displayFillOpacity: Q,
					bezierSegments: rt,
					closedSubpathAreas: ft,
					selectedCommandIndex: bt,
					activeSubpathRoots: wt,
					selectCommand: ut,
					visibleControlLines: xt,
					controlLineWidth: Pt,
					segmentHitWidth: Ot,
					anchorPoints: Zt,
					anchorRadius: At,
					handleStrokeWidth: Dt,
					startDrag: Nt,
					visibleControlPoints: A,
					controlHalfSize: U,
					controlSize: m,
					handleSegmentPointerDown: z,
					handleSegmentPointerEnter: I,
					handleSegmentPointerLeave: ht,
					handleAnchorPointerLeave: lt,
					handleSegmentDoubleClick: gt,
					handleSubpathPointerDown: h,
					currentTool: f,
					drawingState: et,
					isSelectMode: R,
					previewPath: a,
					handleCanvasDoubleClick: C,
					canUndo: P,
					canRedo: K,
					performUndo: nt,
					performRedo: ct,
					saveHistory: J,
					showAxis: j,
					showMouseCoords: It,
					xAxisLabels: vt,
					yAxisLabels: Xt,
					xAxisTicks: te,
					yAxisTicks: ee,
					mouseCoordinatesText: Ft,
					clearPath: kt,
					focusViewportOnContent: Et,
					showTransformBox: Se,
					transformBox: ue,
					handleTransformHandlePointerDown: se,
					marqueeRect: oe,
					marqueePreviewRoots: Ut,
					cutFeedback: Mt,
				} = X,
				{
					rotationKnobRadius: Tt,
					buildRotationIconTransform: Lt,
					buildBoxRotationTransform: re,
				} = Ti(m),
				Te = Ct([]);
			let pe = null;
			ye(Mt, (l) => {
				if (!l) return;
				if (l.status === "failed") {
					c({ icon: "✕", message: e("cut_failed"), tone: "warning" });
					return;
				}
				(Te.value = l.paths), pe !== null && clearTimeout(pe);
				const D = wo + l.paths.length * Co + 120;
				pe = setTimeout(() => {
					(Te.value = []), (pe = null);
				}, D);
			});
			const We = dt(() =>
					f.value !== "pen" ||
					b.value === !1 ||
					x.value === !1 ||
					!et.tempPoints.length
						? []
						: et.tempPoints.map((l, D) => ({
								id: `pen-anchor-${D}`,
								x: l.x,
								y: l.y,
							})),
				),
				me = -Cn,
				ie = Cn,
				zt = Ct("strokeWeight"),
				Kt = Ct("increase"),
				ve = Array.from({ length: Cn - Fn + 1 }, (l, D) => Fn + D),
				Ht = Ct(0),
				Yt = Ct(0),
				Gt = Ct(null),
				de = Ct(!1),
				Ce = Ct(!1),
				Ie = Ct(!1),
				jt = Ct(null),
				be = Ct(!1),
				Le = dt(() => t.showStrokeWeightTool !== !1),
				Ze = dt(() => Le.value && f.value === "strokeWeight"),
				Be = dt(() => !!F.value),
				ae = dt(() => Ht.value !== 0 || Yt.value !== 0),
				Un = dt(() => Math.abs(Ht.value)),
				Sn = dt(() => Math.abs(Yt.value)),
				zn = (l) => (l === 0 ? e("effect_disabled") : String(l)),
				Ae = (l) => (typeof l == "string" ? l.trim() : ""),
				rn = (l) =>
					Number.isFinite(l) ? Math.min(Cn, Math.max(Fn, Math.round(l))) : 0,
				Ee = (l) =>
					Number.isFinite(l) ? Math.min(ie, Math.max(me, Math.round(l))) : 0,
				_n = (l, D = Kt.value) => {
					const st = rn(l);
					return D === "decrease" ? -st : st;
				},
				Pn = (l, D = Kt.value) => {
					const st = Math.abs(Ee(l));
					return zt.value === "hollow" ? rn(st) : _n(st, D);
				},
				an = (l, D) => {
					const st = Math.max(0, l) + Math.max(0, D);
					return Math.abs(Math.min(0, l)) + Math.abs(Math.min(0, D)) > st
						? "decrease"
						: "increase";
				},
				gn = (l) => {
					switch (l.type) {
						case "M":
						case "L":
							return l.points.length >= 2 ? [0] : [];
						case "C":
							return l.points.length >= 6 ? [0, 2, 4] : [];
						case "Q":
							return l.points.length >= 4 ? [0, 2] : [];
						case "A":
							return l.points.length >= 7 ? [5] : [];
						case "Z":
						default:
							return [];
					}
				},
				sn = (l, D) =>
					l.length !== D.length
						? !1
						: l.every((st, St) => {
								const _t = D[St];
								return (
									!!_t &&
									st.type === _t.type &&
									st.points.length === _t.points.length
								);
							}),
				yn = (l, D) => {
					const st = Ae(l),
						St = Ae(D);
					if (st === St) return !0;
					try {
						const _t = Re(st),
							Wt = Re(St);
						if (!sn(_t, Wt)) return !1;
						const fe = 0.001;
						return _t.every(($t, ge) => {
							const Jt = Wt[ge];
							return $t.points.every((le, ke) => {
								const he = Jt.points[ke];
								return !Number.isFinite(le) || !Number.isFinite(he)
									? le === he
									: Math.abs(le - he) <= fe;
							});
						});
					} catch {
						return !1;
					}
				},
				fn = (l, D) => {
					try {
						const st = Re(l),
							St = Re(D);
						if (!sn(st, St)) return null;
						let _t = null,
							Wt = null;
						const fe = 0.001;
						for (let $t = 0; $t < st.length; $t += 1) {
							const ge = st[$t],
								Jt = St[$t];
							if (ge.type === "A") {
								for (const le of [0, 1, 2, 3, 4])
									if (
										Math.abs((ge.points[le] ?? 0) - (Jt.points[le] ?? 0)) > fe
									)
										return null;
							}
							for (const le of gn(ge)) {
								const ke = Jt.points[le] - ge.points[le],
									he = Jt.points[le + 1] - ge.points[le + 1];
								if (!Number.isFinite(ke) || !Number.isFinite(he)) return null;
								if (_t === null || Wt === null) {
									(_t = ke), (Wt = he);
									continue;
								}
								if (Math.abs(ke - _t) > fe || Math.abs(he - Wt) > fe)
									return null;
							}
						}
						return _t === null || Wt === null ? null : { x: _t, y: Wt };
					} catch {
						return null;
					}
				},
				ln = (l, D, st) => mn(Bo(Re(l), D, st)),
				Mn = (l, D, st) => {
					try {
						const St = Re(l),
							_t = Re(D),
							Wt = Re(st);
						if (!sn(St, _t) || !sn(_t, Wt)) return null;
						const fe = St.map(($t, ge) => {
							const Jt = _t[ge],
								le = Wt[ge],
								ke = $t.points.slice();
							for (const he of gn($t)) {
								const Oe = le.points[he] - Jt.points[he],
									un = le.points[he + 1] - Jt.points[he + 1];
								if (!Number.isFinite(Oe) || !Number.isFinite(un)) return null;
								(ke[he] = S(ke[he] + Oe)), (ke[he + 1] = S(ke[he + 1] + un));
							}
							return { type: $t.type, points: ke };
						});
						return fe.some(($t) => $t === null) ? null : mn(fe);
					} catch {
						return null;
					}
				},
				vn = (l) =>
					ae.value
						? zt.value === "hollow"
							? Yo(l, Math.abs(Ht.value), Math.abs(Yt.value))
							: Ho(l, Ht.value, Yt.value)
						: l,
				Fe = (l, D) => {
					if (!ae.value) return !0;
					try {
						const st = vn(l);
						return yn(st, D);
					} catch {
						return !1;
					}
				},
				cn = (l, D) => {
					const st = Gt.value;
					if (!st || !ae.value) return null;
					const St = fn(l, D);
					if (St) {
						const Wt = ln(st, St.x, St.y);
						if (Fe(Wt, D)) return Wt;
					}
					const _t = Mn(st, l, D);
					return _t && Fe(_t, D) ? _t : null;
				},
				hn = () =>
					ae.value
						? {
								x: Ht.value,
								y: Yt.value,
								effect: zt.value,
								basePath: Gt.value ?? null,
								appliedPath: jt.value ?? F.value ?? null,
							}
						: { x: 0, y: 0, basePath: null, appliedPath: null },
				Tn = (l, D) => {
					const st = (Wt) => ({
							x: Ee(Number(Wt?.x ?? 0)),
							y: Ee(Number(Wt?.y ?? 0)),
							effect: Wt?.effect ?? "strokeWeight",
							basePath: Ae(Wt?.basePath),
							appliedPath: Ae(Wt?.appliedPath),
						}),
						St = st(l),
						_t = st(D);
					return (
						St.x === _t.x &&
						St.y === _t.y &&
						St.effect === _t.effect &&
						St.basePath === _t.basePath &&
						St.appliedPath === _t.appliedPath
					);
				},
				Xe = () => {
					if (be.value) return;
					const l = hn();
					Tn(t.strokeWeightState, l) || B("update:strokeWeightState", l);
				},
				Ve = (l = !0) => {
					const D =
						Ht.value !== 0 || Yt.value !== 0 || !!Gt.value || !!jt.value;
					(Ht.value = 0),
						(Yt.value = 0),
						(Gt.value = null),
						(de.value = !1),
						(Ce.value = !1),
						(jt.value = null),
						l && D && Xe();
				};
			function pn() {
				Be.value &&
					((!Gt.value || (F.value !== Gt.value && F.value !== jt.value)) &&
						(Gt.value = F.value),
					(de.value = !0),
					(Ce.value = !1));
			}
			function In() {
				if (!Be.value) return;
				de.value || pn();
				const l = Gt.value ?? F.value;
				if (!l) return;
				let D = l;
				if (ae.value)
					try {
						D = vn(l);
					} catch {
						c({
							icon: "!",
							message: e("effect_adjustment_failed"),
							tone: "error",
						});
						return;
					}
				if (D === F.value) {
					(jt.value = D), Xe();
					return;
				}
				Ce.value || (J(), (Ce.value = !0)),
					(jt.value = D),
					(Ie.value = !0),
					B("update:modelValue", D),
					B("change", D),
					Xe(),
					Ke(() => {
						Ie.value = !1;
					});
			}
			function Kn() {
				if (((de.value = !1), (Ce.value = !1), !ae.value)) {
					Ve();
					return;
				}
				Xe();
			}
			function Bn() {
				const l = Gt.value;
				if (ae.value) {
					if (
						((Ht.value = 0),
						(Yt.value = 0),
						(de.value = !1),
						(Ce.value = !1),
						!l || !Be.value)
					) {
						(Gt.value = null), (jt.value = null), Xe();
						return;
					}
					if (l === F.value) {
						(Gt.value = null), (jt.value = null), Xe();
						return;
					}
					J(),
						(Gt.value = null),
						(jt.value = l),
						(Ie.value = !0),
						B("update:modelValue", l),
						B("change", l),
						Xe(),
						Ke(() => {
							Ie.value = !1;
						});
				}
			}
			function qn(l, D = Kt.value) {
				(zt.value === l && (l === "hollow" || Kt.value === D)) ||
					((zt.value = l), l === "strokeWeight" && (Kt.value = D), Bn());
			}
			function Zn(l, D) {
				const st = D.target,
					St = Pn(Number(st?.value ?? 0));
				l === "x" ? (Ht.value = St) : (Yt.value = St), In();
			}
			ye(
				() => t.strokeWeightState,
				(l) => {
					be.value = !0;
					try {
						const D = Ee(Number(l?.x ?? 0)),
							st = Ee(Number(l?.y ?? 0));
						if (D === 0 && st === 0) {
							Ve(!1);
							return;
						}
						const St = Ae(l?.basePath),
							_t = Ae(l?.appliedPath),
							Wt = Ae(F.value);
						if (!St || !Wt) {
							Ve(!1);
							return;
						}
						if (
							((zt.value = l?.effect === "hollow" ? "hollow" : "strokeWeight"),
							(Kt.value = an(D, st)),
							(Ht.value = D),
							(Yt.value = st),
							(Gt.value = St),
							(jt.value = _t || Wt),
							_t && !yn(_t, Wt) && !Fe(St, Wt))
						) {
							Ve(!1);
							return;
						}
						(jt.value = Wt), (de.value = !1), (Ce.value = !1);
					} finally {
						be.value = !1;
					}
				},
				{ immediate: !0, deep: !0 },
			),
				ye(F, (l, D) => {
					if (Ie.value || l === jt.value) return;
					if (!ae.value) {
						Ve();
						return;
					}
					const st = Ae(l),
						St = Ae(D) || Ae(jt.value);
					if (!st || !St) {
						Ve();
						return;
					}
					const _t = cn(St, st);
					if (!_t) {
						Ve();
						return;
					}
					(Gt.value = _t),
						(jt.value = st),
						(de.value = !1),
						(Ce.value = !1),
						Xe();
				});
			const xn = (l) =>
					l
						? Number.isFinite(l.width) &&
							Number.isFinite(l.height) &&
							Math.abs(l.width) > Qe &&
							Math.abs(l.height) > Qe
						: !1,
				An = () => {
					if (xn(_.value)) return { ..._.value };
					const l = Number(H?.value ?? 0),
						D = Number(q?.value ?? 0);
					return Number.isFinite(l) && Number.isFinite(D) && l > Qe && D > Qe
						? { minX: 0, minY: 0, width: l, height: D }
						: null;
				},
				Ye = (l, D) => {
					const st = Re(l);
					if (!st.length) return l;
					const St = Yn(st);
					if (!St) return l;
					const _t = Math.max(Math.abs(St.width), Qe),
						Wt = Math.max(Math.abs(St.height), Qe),
						fe = Math.max(Math.abs(D.width), Qe),
						$t = Math.max(Math.abs(D.height), Qe),
						ge = fe / _t,
						Jt = $t / Wt,
						le = D.minX - St.minX * ge,
						ke = D.minY - St.minY * Jt,
						he = st.map((Oe) => {
							if (!Oe.points.length) return { type: Oe.type, points: [] };
							const un = [];
							for (let $e = 0; $e < Oe.points.length; $e += 1) {
								const bn = Oe.points[$e],
									Rn = $e % 2 === 0 ? bn * ge + le : bn * Jt + ke;
								un.push(S(Rn));
							}
							return { type: Oe.type, points: un };
						});
					return mn(he);
				};
			function Gn() {
				kt(), c({ icon: "✓", message: e("path_cleared"), tone: "success" });
			}
			Vn(() => {
				y !== null && (clearTimeout(y), (y = null)),
					pe !== null && (clearTimeout(pe), (pe = null));
			});
			const Qn = dt(() => {
					const l = { lines: [], areas: [] };
					if (!t.showVisualBounds || !t.visualBounds) return l;
					const D = L?.value ?? O?.value;
					if (!D) return l;
					const { minX: st, minY: St, width: _t, height: Wt } = D,
						fe = st,
						$t = st + _t,
						ge = St,
						Jt = St + Wt,
						le = Math.max(_t, Wt, 1) * 100,
						ke = fe - le,
						he = $t + le,
						Oe = ge - le,
						un = Jt + le,
						$e = [],
						bn = [],
						Ln = (tn, en) => {
							if (!Number.isFinite(tn)) return;
							const Ue = Number(tn);
							$e.push({
								id: `visual-h-${en}-${Ue}`,
								orientation: "horizontal",
								x1: ke,
								y1: Ue,
								x2: he,
								y2: Ue,
								role: en,
							});
						},
						Rn = (tn, en) => {
							if (!Number.isFinite(tn)) return;
							const Ue = Number(tn);
							$e.push({
								id: `visual-v-${en}-${Ue}`,
								orientation: "vertical",
								x1: Ue,
								y1: Oe,
								x2: Ue,
								y2: un,
								role: en,
							});
						},
						Ro = (tn, en, Ue, so, lo) => {
							if (
								!Number.isFinite(tn) ||
								!Number.isFinite(en) ||
								!Number.isFinite(Ue) ||
								!Number.isFinite(so)
							)
								return;
							const co = Number(tn),
								uo = Number(en),
								fo = Number(Ue),
								ho = Number(so),
								Jn = Math.min(fo, ho),
								po = Math.max(fo, ho) - Jn,
								$n = Math.min(co, uo),
								mo = Math.max(co, uo) - $n;
							po <= 0 ||
								mo <= 0 ||
								bn.push({
									id: `visual-area-${lo}-${Jn}-${$n}`,
									x: Jn,
									y: $n,
									width: po,
									height: mo,
									role: lo,
								});
						},
						He = t.visualBounds;
					Ln(He.fontAscender, "font-ascender"),
						Ln(He.baseline ?? 0, "baseline"),
						Ln(He.fontDescender, "font-descender"),
						Rn(He.originX ?? 0, "origin"),
						Rn(He.advanceWidth, "advance-width");
					const ao = Number.isFinite(He.originX) ? Number(He.originX) : 0,
						Do = Number.isFinite(He.advanceWidth)
							? Number(He.advanceWidth)
							: ao;
					return (
						Ro(He.fontAscender, He.fontDescender, ao, Do, "glyph-cell"),
						{ lines: $e, areas: bn }
					);
				}),
				En = dt(() => {
					const { light: l, dark: D } = s.value;
					return {
						"--anchor-color": l.anchorColor,
						"--anchor-color-dark": D.anchorColor,
						"--control-color": l.controlColor,
						"--control-color-dark": D.controlColor,
						"--segment-selected-color": l.segmentSelectedColor,
						"--segment-selected-color-dark": D.segmentSelectedColor,
						"--transform-box-color": l.transformBoxColor,
						"--transform-box-color-dark": D.transformBoxColor,
						"--transform-corner-color": l.transformCornerColor,
						"--transform-corner-color-dark": D.transformCornerColor,
						"--transform-corner-hover-color": l.transformCornerHoverColor,
						"--transform-corner-hover-color-dark": D.transformCornerHoverColor,
						"--transform-edge-color": l.transformEdgeColor,
						"--transform-edge-color-dark": D.transformEdgeColor,
						"--transform-edge-hover-color": l.transformEdgeHoverColor,
						"--transform-edge-hover-color-dark": D.transformEdgeHoverColor,
						"--transform-handle-stroke-color": l.transformHandleStrokeColor,
						"--transform-handle-stroke-color-dark":
							D.transformHandleStrokeColor,
						"--transform-handle-hover-stroke-color":
							l.transformHandleHoverStrokeColor,
						"--transform-handle-hover-stroke-color-dark":
							D.transformHandleHoverStrokeColor,
						"--handle-color": l.handleColor,
						"--handle-color-dark": D.handleColor,
						"--anchor-hover-color": l.anchorHoverColor,
						"--anchor-hover-color-dark": D.anchorHoverColor,
						"--anchor-active-color": l.anchorActiveColor,
						"--anchor-active-color-dark": D.anchorActiveColor,
						"--control-hover-color": l.controlHoverColor,
						"--control-hover-color-dark": D.controlHoverColor,
						"--axis-color": l.axisColor,
						"--axis-color-dark": D.axisColor,
						"--axis-layer-color": l.axisLayerColor,
						"--axis-layer-color-dark": D.axisLayerColor,
						"--axis-label-bg-color": l.axisLabelBackgroundColor,
						"--axis-label-bg-color-dark": D.axisLabelBackgroundColor,
						"--axis-label-text-color": l.axisLabelTextColor,
						"--axis-label-text-color-dark": D.axisLabelTextColor,
						"--path-canvas-border-color": l.pathCanvasBorderColor,
						"--path-canvas-border-color-dark": D.pathCanvasBorderColor,
						"--control-line-color": l.controlLineColor,
						"--control-line-color-dark": D.controlLineColor,
						"--visual-bounds-color": l.visualBoundsColor,
						"--visual-bounds-color-dark": D.visualBoundsColor,
						"--mouse-coordinates-bg": l.mouseCoordinatesBackgroundColor,
						"--mouse-coordinates-bg-dark": D.mouseCoordinatesBackgroundColor,
						"--mouse-coordinates-text": l.mouseCoordinatesTextColor,
						"--mouse-coordinates-text-dark": D.mouseCoordinatesTextColor,
						"--toolbar-bg": l.toolbarBackgroundColor,
						"--toolbar-bg-dark": D.toolbarBackgroundColor,
						"--toolbar-border-color": l.toolbarBorderColor,
						"--toolbar-border-color-dark": D.toolbarBorderColor,
						"--toolbar-shadow": l.toolbarShadow,
						"--toolbar-shadow-dark": D.toolbarShadow,
						"--toolbar-divider-color": l.toolbarGroupDividerColor,
						"--toolbar-divider-color-dark": D.toolbarGroupDividerColor,
						"--toolbar-button-text-color": l.toolbarButtonTextColor,
						"--toolbar-button-text-color-dark": D.toolbarButtonTextColor,
						"--toolbar-button-hover-bg": l.toolbarButtonHoverBackgroundColor,
						"--toolbar-button-hover-bg-dark":
							D.toolbarButtonHoverBackgroundColor,
						"--toolbar-button-hover-text-color": l.toolbarButtonHoverTextColor,
						"--toolbar-button-hover-text-color-dark":
							D.toolbarButtonHoverTextColor,
						"--toolbar-button-hover-border-color":
							l.toolbarButtonHoverBorderColor,
						"--toolbar-button-hover-border-color-dark":
							D.toolbarButtonHoverBorderColor,
						"--toolbar-button-active-bg": l.toolbarButtonActiveBackgroundColor,
						"--toolbar-button-active-bg-dark":
							D.toolbarButtonActiveBackgroundColor,
						"--toolbar-button-active-text-color":
							l.toolbarButtonActiveTextColor,
						"--toolbar-button-active-text-color-dark":
							D.toolbarButtonActiveTextColor,
						"--toolbar-button-active-border-color":
							l.toolbarButtonActiveBorderColor,
						"--toolbar-button-active-border-color-dark":
							D.toolbarButtonActiveBorderColor,
						"--toolbar-button-disabled-opacity": String(
							l.toolbarButtonDisabledOpacity,
						),
						"--toolbar-button-disabled-opacity-dark": String(
							D.toolbarButtonDisabledOpacity,
						),
					};
				}),
				jn = dt(() => ({ ...($.value ?? {}), ...En.value })),
				r = Ct(null),
				g = Ct(null),
				T = (l) => {
					c(l.status, l.duration);
				},
				N = async (l) => {
					const D = g.value,
						st = D && xn(D) ? Ye(l, D) : l;
					J(),
						B("update:modelValue", st),
						B("change", st),
						await Ke(),
						Et(D ?? null),
						ut(null),
						V(!1),
						c(
							{
								icon: "✓",
								message: e("path_generated_from_image"),
								tone: "success",
							},
							2400,
						),
						(g.value = null);
				},
				tt = (l) => {
					l.reason !== "success" && (g.value = null);
				},
				it = (l) =>
					l
						? (r.value?.processImageFile(l) ?? !1)
							? ((g.value = An()), !0)
							: ((g.value = null), !1)
						: !1,
				Bt = (l) => {
					it(l);
				},
				Rt = (l) => it(l);
			n({ traceImageFile: Rt });
			const qt = {
				props: t,
				resolvedStyleOptions: s,
				emit: p,
				t: e,
				editorStatus: u,
				get statusTimer() {
					return y;
				},
				set statusTimer(l) {
					y = l;
				},
				showEditorStatus: c,
				emitWithFeedback: B,
				editorContext: X,
				width: H,
				height: q,
				fillColor: v,
				strokeColor: W,
				strokeWidth: M,
				showHandles: b,
				showAnchors: x,
				showAllAnchors: E,
				setShowAllAnchors: V,
				svgRef: d,
				contentBounds: _,
				viewBoxParts: O,
				activeViewport: L,
				gridBackgroundStyle: $,
				viewBox: at,
				aspectRatio: pt,
				handleCanvasPointerDown: G,
				onPointerMove: Z,
				onPointerLeave: k,
				finishDrag: w,
				onWheel: Y,
				currentPath: F,
				displayFillOpacity: Q,
				bezierSegments: rt,
				closedSubpathAreas: ft,
				selectedCommandIndex: bt,
				activeSubpathRoots: wt,
				selectCommand: ut,
				visibleControlLines: xt,
				controlLineWidth: Pt,
				segmentHitWidth: Ot,
				anchorPoints: Zt,
				anchorRadius: At,
				handleStrokeWidth: Dt,
				startDrag: Nt,
				visibleControlPoints: A,
				controlHalfSize: U,
				controlSize: m,
				handleSegmentPointerDown: z,
				handleSegmentPointerEnter: I,
				handleSegmentPointerLeave: ht,
				handleAnchorPointerLeave: lt,
				handleSegmentDoubleClick: gt,
				handleSubpathPointerDown: h,
				currentTool: f,
				drawingState: et,
				isSelectMode: R,
				previewPath: a,
				handleCanvasDoubleClick: C,
				canUndo: P,
				canRedo: K,
				performUndo: nt,
				performRedo: ct,
				saveHistory: J,
				showAxis: j,
				showMouseCoords: It,
				xAxisLabels: vt,
				yAxisLabels: Xt,
				xAxisTicks: te,
				yAxisTicks: ee,
				mouseCoordinatesText: Ft,
				clearPathInternal: kt,
				focusViewportOnContent: Et,
				showTransformBox: Se,
				transformBox: ue,
				handleTransformHandlePointerDown: se,
				marqueeRect: oe,
				marqueePreviewRoots: Ut,
				cutFeedback: Mt,
				rotationKnobRadius: Tt,
				buildRotationIconTransform: Lt,
				buildBoxRotationTransform: re,
				CUT_FLASH_ANIM_MS: wo,
				CUT_FLASH_STAGGER_MS: Co,
				cutFlashPaths: Te,
				get cutFlashTimer() {
					return pe;
				},
				set cutFlashTimer(l) {
					pe = l;
				},
				penAnchorPoints: We,
				STROKE_EFFECT_MIN: Fn,
				STROKE_EFFECT_MAX: Cn,
				STROKE_EFFECT_STEP: Ii,
				STROKE_WEIGHT_MIN: me,
				STROKE_WEIGHT_MAX: ie,
				activeEffectCategory: zt,
				strokeWeightMode: Kt,
				strokeWeightTickValues: ve,
				strokeWeightX: Ht,
				strokeWeightY: Yt,
				strokeWeightBasePath: Gt,
				strokeWeightInteractionActive: de,
				strokeWeightHistorySaved: Ce,
				isApplyingStrokeWeight: Ie,
				lastAppliedStrokeWeightPath: jt,
				isHydratingStrokeWeightState: be,
				showStrokeWeightTool: Le,
				showStrokeWeightControls: Ze,
				canAdjustStrokeWeight: Be,
				hasStrokeWeightAdjustment: ae,
				strokeWeightDisplayX: Un,
				strokeWeightDisplayY: Sn,
				getStrokeEffectDisplayValue: zn,
				normalizeStrokeWeightPath: Ae,
				clampStrokeEffectValue: rn,
				clampStrokeWeightValue: Ee,
				toStrokeWeightValueForMode: _n,
				clampStrokeWeightValueForMode: Pn,
				inferStrokeWeightMode: an,
				getCoordinatePairs: gn,
				commandsHaveSameShape: sn,
				pathsApproximatelyEqual: yn,
				getUniformPathTranslation: fn,
				translatePathData: ln,
				applyPointDeltasToBasePath: Mn,
				buildCurrentEffectPath: vn,
				isConsistentStrokeWeightBasePath: Fe,
				rebaseStrokeWeightBasePath: cn,
				buildStrokeWeightState: hn,
				areStrokeWeightStatesEqual: Tn,
				emitStrokeWeightStateUpdate: Xe,
				resetStrokeWeightState: Ve,
				beginStrokeWeightAdjustment: pn,
				applyStrokeWeightAdjustment: In,
				finishStrokeWeightAdjustment: Kn,
				restoreCurrentEffectToBasePath: Bn,
				setEffectSelection: qn,
				handleStrokeWeightInput: Zn,
				MIN_BOUNDS_SIZE: Qe,
				hasUsableBounds: xn,
				snapshotGlyphBounds: An,
				fitPathToBounds: Ye,
				clearPath: Gn,
				visualGuides: Qn,
				editorCssVariables: En,
				editorCanvasStyle: jn,
				imageTraceWorkflowRef: r,
				pendingTraceBounds: g,
				handleImageTraceStatus: T,
				handleImageTraceResult: N,
				handleImageTraceWorkflowFinished: tt,
				startImageTraceWorkflow: it,
				handleToolbarImageUpload: Bt,
				traceImageFile: Rt,
				EditorToolbar: ni,
				ImageTraceWorkflow: bi,
				get rotationIconPath() {
					return ki;
				},
			};
			return (
				Object.defineProperty(qt, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				qt
			);
		},
	}),
	qe = (o) => (Mo("data-v-cd34588d"), (o = o()), To(), o),
	Ai = { key: 0, class: "effects-popover" },
	Ei = ["aria-label"],
	Li = ["aria-checked"],
	Ri = ["aria-checked"],
	Di = ["aria-checked"],
	Wi = { class: "stroke-weight-controls" },
	Fi = { class: "stroke-weight-sliders" },
	Xi = { class: "stroke-weight-slider" },
	Yi = { class: "stroke-weight-label" },
	Hi = { class: "stroke-effect-slider-control" },
	Ni = ["value", "disabled", "aria-label"],
	Vi = { class: "stroke-effect-slider-ticks", "aria-hidden": "true" },
	Oi = qe(() => ot("span", { class: "stroke-effect-slider-mark" }, null, -1)),
	Ui = { class: "stroke-effect-slider-tick-label" },
	zi = { class: "stroke-weight-value" },
	Ki = { class: "stroke-weight-slider" },
	qi = { class: "stroke-weight-label" },
	Zi = { class: "stroke-effect-slider-control" },
	Gi = ["value", "disabled", "aria-label"],
	Qi = { class: "stroke-effect-slider-ticks", "aria-hidden": "true" },
	ji = qe(() => ot("span", { class: "stroke-effect-slider-mark" }, null, -1)),
	Ji = { class: "stroke-effect-slider-tick-label" },
	$i = { class: "stroke-weight-value" },
	ta = { class: "canvas-shell" },
	ea = ["width", "height", "viewBox"],
	na = ["d", "fill", "fill-opacity", "stroke", "stroke-width"],
	oa = { key: 0, class: "cut-flash", "pointer-events": "none" },
	ra = ["d"],
	ia = { key: 1, class: "subpath-hit-areas" },
	aa = ["data-command-index", "d", "onPointerdown"],
	sa = ["d", "fill", "fill-opacity", "stroke", "stroke-width"],
	la = { key: 3, class: "visual-bounds", "pointer-events": "none" },
	ca = ["x", "y", "width", "height"],
	ua = ["x1", "y1", "x2", "y2"],
	da = { key: 4, class: "segment-hit-areas" },
	fa = [
		"data-command-index",
		"d",
		"stroke-width",
		"onPointerdown",
		"onPointerenter",
		"onPointerleave",
		"onDblclick",
	],
	ha = { key: 5, class: "transform-controls" },
	pa = ["transform"],
	ma = ["x", "y", "width", "height", "stroke-width"],
	ga = { class: "transform-handles" },
	ya = ["cx", "cy", "r", "stroke-width", "onPointerdown"],
	va = ["x", "y", "width", "height", "stroke-width", "onPointerdown"],
	xa = { class: "transform-rotation" },
	ba = ["x1", "y1", "x2", "y2", "stroke-width"],
	wa = ["cx", "cy", "r", "stroke-width"],
	Ca = ["d", "transform"],
	ka = ["cx", "cy", "r"],
	Sa = { key: 6, class: "pen-anchors", "pointer-events": "none" },
	_a = ["cx", "cy", "r", "stroke", "stroke-width"],
	Pa = { key: 7, class: "control-lines" },
	Ma = ["x1", "y1", "x2", "y2", "stroke-width"],
	Ta = { key: 8, class: "handles anchors" },
	Ia = [
		"data-command-index",
		"cx",
		"cy",
		"r",
		"stroke",
		"stroke-width",
		"onPointerdown",
		"onPointerleave",
	],
	Ba = { key: 9, class: "handles controls" },
	Aa = ["x", "y", "width", "height", "stroke", "stroke-width", "onPointerdown"],
	Ea = ["x", "y", "width", "height", "stroke-width"],
	La = { key: 0, class: "axis-layer" },
	Ra = { class: "axis axis-y" },
	Da = qe(() => ot("div", { class: "axis-line" }, null, -1)),
	Wa = { class: "axis axis-x" },
	Fa = qe(() => ot("div", { class: "axis-line" }, null, -1)),
	Xa = { key: 1, class: "mouse-coordinates" },
	Ya = { key: 0, class: "editor-status-icon" },
	Ha = { class: "editor-status-text" },
	Na = { class: "editor-shortcut-hints" },
	Va = { class: "shortcut-hint-title" },
	Oa = { class: "shortcut-hint" },
	Ua = qe(() => ot("kbd", null, "Ctrl+C", -1)),
	za = { class: "shortcut-hint-label" },
	Ka = { class: "shortcut-hint" },
	qa = qe(() => ot("kbd", null, "Ctrl+V", -1)),
	Za = { class: "shortcut-hint-label" },
	Ga = { class: "shortcut-hint" },
	Qa = qe(() => ot("kbd", null, "Ctrl+A", -1)),
	ja = { class: "shortcut-hint-label" },
	Ja = { class: "shortcut-hint" },
	$a = qe(() => ot("kbd", null, "Del", -1)),
	ts = { class: "shortcut-hint-label" },
	es = { class: "shortcut-hint" },
	ns = qe(() => ot("kbd", null, "Ctrl+Z", -1)),
	os = { class: "shortcut-hint-label" },
	rs = { class: "shortcut-hint" },
	is = qe(() => ot("kbd", null, "Ctrl+⇧+Z", -1)),
	as = { class: "shortcut-hint-label" };
function ss(o, n, i, t, s, p) {
	return (
		mt(),
		yt(
			"div",
			{ class: "svg-path-editor-container", style: _e(t.editorCssVariables) },
			[
				i.showToolbar
					? (mt(),
						Hn(
							t.EditorToolbar,
							{
								key: 0,
								modelValue: t.currentTool,
								"onUpdate:modelValue":
									n[5] || (n[5] = (e) => (t.currentTool = e)),
								"can-undo": t.canUndo,
								"can-redo": t.canRedo,
								"show-undo-redo": i.enableUndo,
								"can-clear": !!t.currentPath,
								"show-all-anchors": t.showAllAnchors,
								"anchors-toggle-disabled": !t.showHandles || !t.showAnchors,
								"show-image-upload": i.showImageUpload,
								"show-stroke-weight-tool": t.showStrokeWeightTool,
								"show-tool-popover": t.showStrokeWeightControls,
								onUndo: t.performUndo,
								onRedo: t.performRedo,
								onClear: t.clearPath,
								onToggleAnchors: t.setShowAllAnchors,
								onUploadImage: t.handleToolbarImageUpload,
							},
							{
								"tool-popover": Uo(() => [
									t.showStrokeWeightControls
										? (mt(),
											yt("div", Ai, [
												ot(
													"div",
													{
														class: "effects-mode-switch",
														role: "radiogroup",
														"aria-label": t.t("effects"),
													},
													[
														ot(
															"button",
															{
																type: "button",
																class: we([
																	"effects-mode-button",
																	{
																		active:
																			t.activeEffectCategory ===
																				"strokeWeight" &&
																			t.strokeWeightMode === "increase",
																	},
																]),
																role: "radio",
																"aria-checked":
																	t.activeEffectCategory === "strokeWeight" &&
																	t.strokeWeightMode === "increase",
																onClick:
																	n[0] ||
																	(n[0] = (e) =>
																		t.setEffectSelection(
																			"strokeWeight",
																			"increase",
																		)),
															},
															Qt(t.t("stroke_weight_increase")),
															11,
															Li,
														),
														ot(
															"button",
															{
																type: "button",
																class: we([
																	"effects-mode-button",
																	{
																		active:
																			t.activeEffectCategory ===
																				"strokeWeight" &&
																			t.strokeWeightMode === "decrease",
																	},
																]),
																role: "radio",
																"aria-checked":
																	t.activeEffectCategory === "strokeWeight" &&
																	t.strokeWeightMode === "decrease",
																onClick:
																	n[1] ||
																	(n[1] = (e) =>
																		t.setEffectSelection(
																			"strokeWeight",
																			"decrease",
																		)),
															},
															Qt(t.t("stroke_weight_decrease")),
															11,
															Ri,
														),
														ot(
															"button",
															{
																type: "button",
																class: we([
																	"effects-mode-button",
																	{
																		active: t.activeEffectCategory === "hollow",
																	},
																]),
																role: "radio",
																"aria-checked":
																	t.activeEffectCategory === "hollow",
																onClick:
																	n[2] ||
																	(n[2] = (e) =>
																		t.setEffectSelection("hollow")),
															},
															Qt(t.t("hollow_effect")),
															11,
															Di,
														),
													],
													8,
													Ei,
												),
												ot("div", Wi, [
													ot("div", Fi, [
														ot("label", Xi, [
															ot(
																"span",
																Yi,
																Qt(t.t("vertical_stroke_weight")),
																1,
															),
															ot("div", Hi, [
																ot(
																	"input",
																	{
																		type: "range",
																		min: t.STROKE_EFFECT_MIN,
																		max: t.STROKE_EFFECT_MAX,
																		step: t.STROKE_EFFECT_STEP,
																		value: t.strokeWeightDisplayY,
																		disabled: !t.canAdjustStrokeWeight,
																		"aria-label": t.t("vertical_stroke_weight"),
																		onFocus: t.beginStrokeWeightAdjustment,
																		onPointerdown:
																			t.beginStrokeWeightAdjustment,
																		onInput:
																			n[3] ||
																			(n[3] = (e) =>
																				t.handleStrokeWeightInput("y", e)),
																		onChange: t.finishStrokeWeightAdjustment,
																	},
																	null,
																	40,
																	Ni,
																),
																ot("div", Vi, [
																	(mt(!0),
																	yt(
																		ce,
																		null,
																		xe(
																			t.strokeWeightTickValues,
																			(e) => (
																				mt(),
																				yt(
																					"span",
																					{
																						key: `y-${e}`,
																						class: "stroke-effect-slider-tick",
																					},
																					[Oi, ot("span", Ui, Qt(e), 1)],
																				)
																			),
																		),
																		128,
																	)),
																]),
															]),
															ot(
																"output",
																zi,
																Qt(
																	t.getStrokeEffectDisplayValue(
																		t.strokeWeightDisplayY,
																	),
																),
																1,
															),
														]),
														ot("label", Ki, [
															ot(
																"span",
																qi,
																Qt(t.t("horizontal_stroke_weight")),
																1,
															),
															ot("div", Zi, [
																ot(
																	"input",
																	{
																		type: "range",
																		min: t.STROKE_EFFECT_MIN,
																		max: t.STROKE_EFFECT_MAX,
																		step: t.STROKE_EFFECT_STEP,
																		value: t.strokeWeightDisplayX,
																		disabled: !t.canAdjustStrokeWeight,
																		"aria-label": t.t(
																			"horizontal_stroke_weight",
																		),
																		onFocus: t.beginStrokeWeightAdjustment,
																		onPointerdown:
																			t.beginStrokeWeightAdjustment,
																		onInput:
																			n[4] ||
																			(n[4] = (e) =>
																				t.handleStrokeWeightInput("x", e)),
																		onChange: t.finishStrokeWeightAdjustment,
																	},
																	null,
																	40,
																	Gi,
																),
																ot("div", Qi, [
																	(mt(!0),
																	yt(
																		ce,
																		null,
																		xe(
																			t.strokeWeightTickValues,
																			(e) => (
																				mt(),
																				yt(
																					"span",
																					{
																						key: `x-${e}`,
																						class: "stroke-effect-slider-tick",
																					},
																					[ji, ot("span", Ji, Qt(e), 1)],
																				)
																			),
																		),
																		128,
																	)),
																]),
															]),
															ot(
																"output",
																$i,
																Qt(
																	t.getStrokeEffectDisplayValue(
																		t.strokeWeightDisplayX,
																	),
																),
																1,
															),
														]),
													]),
												]),
											]))
										: ne("", !0),
								]),
								_: 1,
							},
							8,
							[
								"modelValue",
								"can-undo",
								"can-redo",
								"show-undo-redo",
								"can-clear",
								"show-all-anchors",
								"anchors-toggle-disabled",
								"show-image-upload",
								"show-stroke-weight-tool",
								"show-tool-popover",
								"onUndo",
								"onRedo",
								"onToggleAnchors",
							],
						))
					: ne("", !0),
				zo(
					t.ImageTraceWorkflow,
					{
						ref: "imageTraceWorkflowRef",
						width: t.width,
						height: t.height,
						onStatus: t.handleImageTraceStatus,
						onTraced: t.handleImageTraceResult,
						onWorkflowFinished: t.handleImageTraceWorkflowFinished,
					},
					null,
					8,
					["width", "height"],
				),
				ot(
					"div",
					{ class: "svg-path-editor", style: _e(t.editorCanvasStyle) },
					[
						ot("div", ta, [
							(mt(),
							yt(
								"svg",
								{
									ref: "svgRef",
									class: "path-canvas",
									width: t.width,
									height: t.height,
									viewBox: t.viewBox,
									style: _e({ width: "100%", aspectRatio: t.aspectRatio }),
									tabindex: "0",
									onPointerdown:
										n[7] ||
										(n[7] = (...e) =>
											t.handleCanvasPointerDown &&
											t.handleCanvasPointerDown(...e)),
									onPointermove:
										n[8] ||
										(n[8] = (...e) => t.onPointerMove && t.onPointerMove(...e)),
									onPointerup:
										n[9] ||
										(n[9] = (...e) => t.finishDrag && t.finishDrag(...e)),
									onPointercancel:
										n[10] ||
										(n[10] = (...e) => t.finishDrag && t.finishDrag(...e)),
									onPointerleave:
										n[11] ||
										(n[11] = (...e) =>
											t.onPointerLeave && t.onPointerLeave(...e)),
									onWheel:
										n[12] ||
										(n[12] = Ne(
											(...e) => t.onWheel && t.onWheel(...e),
											["prevent"],
										)),
									onDblclick:
										n[13] ||
										(n[13] = Ne(
											(...e) =>
												t.handleCanvasDoubleClick &&
												t.handleCanvasDoubleClick(...e),
											["stop", "prevent"],
										)),
								},
								[
									ot(
										"path",
										{
											class: "editable-path",
											d: t.currentPath,
											fill: t.fillColor,
											"fill-opacity": t.displayFillOpacity,
											stroke: t.strokeColor,
											"stroke-width": t.strokeWidth,
										},
										null,
										8,
										na,
									),
									t.cutFlashPaths.length
										? (mt(),
											yt("g", oa, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.cutFlashPaths,
														(e, u) => (
															mt(),
															yt(
																"path",
																{
																	key: `cut-flash-${u}`,
																	class: "cut-flash-shape",
																	d: e,
																	style: _e({ animationDelay: `${u * 70}ms` }),
																},
																null,
																12,
																ra,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.isSelectMode
										? (mt(),
											yt("g", ia, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.closedSubpathAreas,
														(e) => (
															mt(),
															yt(
																"path",
																{
																	key: e.id,
																	class: we([
																		"subpath-hit",
																		{
																			selected: t.activeSubpathRoots?.includes(
																				e.commandIndex,
																			),
																			"marquee-preview":
																				t.marqueePreviewRoots?.includes(
																					e.commandIndex,
																				),
																		},
																	]),
																	"data-command-index": e.commandIndex,
																	d: e.d,
																	onPointerdown: Ne(
																		(u) =>
																			t.handleSubpathPointerDown(
																				u,
																				e.commandIndex,
																			),
																		["stop", "prevent"],
																	),
																},
																null,
																42,
																aa,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.previewPath
										? (mt(),
											yt(
												"path",
												{
													key: 2,
													class: we([
														"preview-path",
														{ "cut-preview": t.currentTool === "cut" },
													]),
													d: t.previewPath,
													fill: t.currentTool === "cut" ? "none" : t.fillColor,
													"fill-opacity": t.currentTool === "cut" ? 0 : 0.3,
													stroke:
														t.currentTool === "cut" ? void 0 : t.strokeColor,
													"stroke-width": t.strokeWidth,
													"stroke-dasharray": "5 5",
												},
												null,
												10,
												sa,
											))
										: ne("", !0),
									t.visualGuides.lines.length || t.visualGuides.areas.length
										? (mt(),
											yt("g", la, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.visualGuides.areas,
														(e) => (
															mt(),
															yt(
																"rect",
																{
																	key: e.id,
																	x: e.x,
																	y: e.y,
																	width: e.width,
																	height: e.height,
																	class: we([
																		"visual-bound-area",
																		e.role
																			? `visual-bound-area--${e.role}`
																			: null,
																	]),
																},
																null,
																10,
																ca,
															)
														),
													),
													128,
												)),
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.visualGuides.lines,
														(e) => (
															mt(),
															yt(
																"line",
																{
																	key: e.id,
																	x1: e.x1,
																	y1: e.y1,
																	x2: e.x2,
																	y2: e.y2,
																	class: we([
																		"visual-bound-line",
																		e.orientation,
																		e.role
																			? `visual-bound-line--${e.role}`
																			: null,
																	]),
																},
																null,
																10,
																ua,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.isSelectMode
										? (mt(),
											yt("g", da, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.bezierSegments,
														(e) => (
															mt(),
															yt(
																"path",
																{
																	key: e.id,
																	class: we([
																		"segment-hit",
																		{
																			selected:
																				t.selectedCommandIndex ===
																				e.commandIndex,
																		},
																	]),
																	"data-command-index": e.commandIndex,
																	d: e.d,
																	"stroke-width": t.segmentHitWidth,
																	onPointerdown: Ne(
																		(u) =>
																			t.handleSegmentPointerDown(u, e.segment),
																		["stop", "prevent"],
																	),
																	onPointerenter: (u) =>
																		t.handleSegmentPointerEnter(e.segment),
																	onPointerleave: (u) =>
																		t.handleSegmentPointerLeave(u, e.segment),
																	onDblclick: Ne(
																		(u) =>
																			t.handleSegmentDoubleClick(e.segment, u),
																		["stop", "prevent"],
																	),
																},
																null,
																42,
																fa,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.showTransformBox && t.transformBox
										? (mt(),
											yt("g", ha, [
												ot(
													"g",
													{
														class: we([
															"transform-rotated",
															{ "is-rotating": t.transformBox.angle !== 0 },
														]),
														transform: t.buildBoxRotationTransform(
															t.transformBox,
														),
													},
													[
														ot(
															"rect",
															{
																class: "transform-box",
																x: t.transformBox.bounds.minX,
																y: t.transformBox.bounds.minY,
																width: t.transformBox.bounds.width,
																height: t.transformBox.bounds.height,
																"stroke-width": t.controlLineWidth,
															},
															null,
															8,
															ma,
														),
														ot("g", ga, [
															(mt(!0),
															yt(
																ce,
																null,
																xe(
																	t.transformBox.handles,
																	(e) => (
																		mt(),
																		yt(
																			ce,
																			{ key: e.position },
																			[
																				e.type === "corner"
																					? (mt(),
																						yt(
																							"circle",
																							{
																								key: 0,
																								class:
																									"transform-handle corner-handle",
																								cx: e.x,
																								cy: e.y,
																								r: t.anchorRadius * 1,
																								"stroke-width":
																									t.handleStrokeWidth,
																								style: _e({ cursor: e.cursor }),
																								onPointerdown: Ne(
																									(u) =>
																										t.handleTransformHandlePointerDown(
																											u,
																											e,
																											t.transformBox.bounds,
																											t.transformBox
																												.originalBounds,
																										),
																									["stop", "prevent"],
																								),
																							},
																							null,
																							44,
																							ya,
																						))
																					: (mt(),
																						yt(
																							"rect",
																							{
																								key: 1,
																								class:
																									"transform-handle edge-handle",
																								x: e.x - t.controlHalfSize * 1,
																								y: e.y - t.controlHalfSize * 1,
																								width: t.controlSize * 1,
																								height: t.controlSize * 1,
																								"stroke-width":
																									t.handleStrokeWidth,
																								rx: "1",
																								ry: "1",
																								style: _e({ cursor: e.cursor }),
																								onPointerdown: Ne(
																									(u) =>
																										t.handleTransformHandlePointerDown(
																											u,
																											e,
																											t.transformBox.bounds,
																											t.transformBox
																												.originalBounds,
																										),
																									["stop", "prevent"],
																								),
																							},
																							null,
																							44,
																							va,
																						)),
																			],
																			64,
																		)
																	),
																),
																128,
															)),
														]),
														ot("g", xa, [
															ot(
																"line",
																{
																	class: "transform-rotation-stem",
																	x1: t.transformBox.rotation.x,
																	y1: t.transformBox.bounds.minY,
																	x2: t.transformBox.rotation.x,
																	y2: t.transformBox.rotation.y,
																	"stroke-width": t.controlLineWidth,
																},
																null,
																8,
																ba,
															),
															ot(
																"g",
																{
																	class:
																		"transform-handle transform-handle-rotation",
																	style: _e({
																		cursor: t.transformBox.rotation.cursor,
																	}),
																	onPointerdown:
																		n[6] ||
																		(n[6] = Ne(
																			(e) =>
																				t.handleTransformHandlePointerDown(
																					e,
																					t.transformBox.rotation,
																					t.transformBox.bounds,
																					t.transformBox.originalBounds,
																				),
																			["stop", "prevent"],
																		)),
																},
																[
																	ot(
																		"circle",
																		{
																			class: "rotation-knob",
																			cx: t.transformBox.rotation.x,
																			cy: t.transformBox.rotation.y,
																			r: t.rotationKnobRadius,
																			"stroke-width": t.handleStrokeWidth,
																		},
																		null,
																		8,
																		wa,
																	),
																	ot(
																		"path",
																		{
																			class: "rotation-icon",
																			d: t.rotationIconPath,
																			transform: t.buildRotationIconTransform(
																				t.transformBox.rotation.x,
																				t.transformBox.rotation.y,
																				t.rotationKnobRadius * 1.4,
																			),
																		},
																		null,
																		8,
																		Ca,
																	),
																	ot(
																		"circle",
																		{
																			class: "rotation-hit",
																			cx: t.transformBox.rotation.x,
																			cy: t.transformBox.rotation.y,
																			r: t.rotationKnobRadius * 1.8,
																		},
																		null,
																		8,
																		ka,
																	),
																],
																36,
															),
														]),
													],
													10,
													pa,
												),
											]))
										: ne("", !0),
									t.currentTool === "pen" && t.penAnchorPoints.length
										? (mt(),
											yt("g", Sa, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.penAnchorPoints,
														(e) => (
															mt(),
															yt(
																"circle",
																{
																	key: e.id,
																	class: "pen-anchor",
																	cx: e.x,
																	cy: e.y,
																	r: t.anchorRadius,
																	stroke: t.strokeColor,
																	"stroke-width": t.handleStrokeWidth,
																},
																null,
																8,
																_a,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.isSelectMode &&
									t.showHandles &&
									t.visibleControlLines.length
										? (mt(),
											yt("g", Pa, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.visibleControlLines,
														(e) => (
															mt(),
															yt(
																"line",
																{
																	key: e.id,
																	x1: e.x1,
																	y1: e.y1,
																	x2: e.x2,
																	y2: e.y2,
																	"stroke-width": t.controlLineWidth,
																	"stroke-dasharray": "4 4",
																},
																null,
																8,
																Ma,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.isSelectMode &&
									t.showHandles &&
									t.showAnchors &&
									t.anchorPoints.length
										? (mt(),
											yt("g", Ta, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.anchorPoints,
														(e) => (
															mt(),
															yt(
																"circle",
																{
																	key: e.id,
																	"data-command-index": e.commandIndex,
																	class: we([
																		"handle",
																		"anchor",
																		{
																			active:
																				t.selectedCommandIndex ===
																				e.commandIndex,
																		},
																	]),
																	cx: e.x,
																	cy: e.y,
																	r: t.anchorRadius,
																	stroke: t.strokeColor,
																	"stroke-width": t.handleStrokeWidth,
																	onPointerdown: (u) => t.startDrag(u, e),
																	onPointerleave: (u) =>
																		t.handleAnchorPointerLeave(u, e),
																},
																null,
																42,
																Ia,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.isSelectMode &&
									t.showHandles &&
									t.visibleControlPoints.length
										? (mt(),
											yt("g", Ba, [
												(mt(!0),
												yt(
													ce,
													null,
													xe(
														t.visibleControlPoints,
														(e) => (
															mt(),
															yt(
																"rect",
																{
																	key: e.id,
																	class: "handle control",
																	x: e.x - t.controlHalfSize,
																	y: e.y - t.controlHalfSize,
																	width: t.controlSize,
																	height: t.controlSize,
																	rx: "0",
																	ry: "0",
																	stroke: t.strokeColor,
																	"stroke-width": t.handleStrokeWidth,
																	onPointerdown: (u) => t.startDrag(u, e),
																},
																null,
																40,
																Aa,
															)
														),
													),
													128,
												)),
											]))
										: ne("", !0),
									t.marqueeRect
										? (mt(),
											yt(
												"rect",
												{
													key: 10,
													class: "marquee-selection",
													x: t.marqueeRect.minX,
													y: t.marqueeRect.minY,
													width: t.marqueeRect.width,
													height: t.marqueeRect.height,
													"stroke-width": t.controlLineWidth,
													"pointer-events": "none",
												},
												null,
												8,
												Ea,
											))
										: ne("", !0),
								],
								44,
								ea,
							)),
							t.showAxis
								? (mt(),
									yt("div", La, [
										ot("div", Ra, [
											Da,
											(mt(!0),
											yt(
												ce,
												null,
												xe(
													t.yAxisTicks,
													(e) => (
														mt(),
														yt(
															"div",
															{
																key: `axis-y-tick-${e.value}`,
																class: we([
																	"axis-tick axis-y-tick",
																	{ origin: e.isOrigin },
																]),
																style: _e({ top: `${e.position * 100}%` }),
															},
															null,
															6,
														)
													),
												),
												128,
											)),
											(mt(!0),
											yt(
												ce,
												null,
												xe(
													t.yAxisLabels,
													(e) => (
														mt(),
														yt(
															"div",
															{
																key: `axis-y-label-${e.value}`,
																class: "axis-label axis-y-label",
																style: _e({ top: `${e.position * 100}%` }),
															},
															Qt(e.text),
															5,
														)
													),
												),
												128,
											)),
										]),
										ot("div", Wa, [
											Fa,
											(mt(!0),
											yt(
												ce,
												null,
												xe(
													t.xAxisTicks,
													(e) => (
														mt(),
														yt(
															"div",
															{
																key: `axis-x-tick-${e.value}`,
																class: we([
																	"axis-tick axis-x-tick",
																	{ origin: e.isOrigin },
																]),
																style: _e({ left: `${e.position * 100}%` }),
															},
															null,
															6,
														)
													),
												),
												128,
											)),
											(mt(!0),
											yt(
												ce,
												null,
												xe(
													t.xAxisLabels,
													(e) => (
														mt(),
														yt(
															"div",
															{
																key: `axis-x-label-${e.value}`,
																class: "axis-label axis-x-label",
																style: _e({ left: `${e.position * 100}%` }),
															},
															Qt(e.text),
															5,
														)
													),
												),
												128,
											)),
										]),
									]))
								: ne("", !0),
							t.showMouseCoords && t.mouseCoordinatesText
								? (mt(), yt("div", Xa, Qt(t.mouseCoordinatesText), 1))
								: ne("", !0),
						]),
						t.editorStatus
							? (mt(),
								yt(
									"div",
									{
										key: 0,
										class: we([
											"editor-status",
											t.editorStatus.tone
												? `editor-status--${t.editorStatus.tone}`
												: null,
										]),
										role: "status",
										"aria-live": "polite",
									},
									[
										t.editorStatus.icon
											? (mt(), yt("span", Ya, Qt(t.editorStatus.icon), 1))
											: ne("", !0),
										ot("span", Ha, Qt(t.editorStatus.message), 1),
									],
									2,
								))
							: ne("", !0),
					],
					4,
				),
				ot("div", Na, [
					ot("span", Va, Qt(t.t("shortcut_hint")), 1),
					ot("span", Oa, [
						Ua,
						ot("span", za, Qt(t.t("shortcut_hint_copy")), 1),
					]),
					ot("span", Ka, [
						qa,
						ot("span", Za, Qt(t.t("shortcut_hint_paste")), 1),
					]),
					ot("span", Ga, [
						Qa,
						ot("span", ja, Qt(t.t("shortcut_hint_select_all")), 1),
					]),
					ot("span", Ja, [
						$a,
						ot("span", ts, Qt(t.t("shortcut_hint_delete")), 1),
					]),
					ot("span", es, [
						ns,
						ot("span", os, Qt(t.t("shortcut_hint_undo")), 1),
					]),
					ot("span", rs, [
						is,
						ot("span", as, Qt(t.t("shortcut_hint_redo")), 1),
					]),
				]),
			],
			4,
		)
	);
}
const hs = no(Bi, [
	["render", ss],
	["__scopeId", "data-v-cd34588d"],
]);
export { Xn as P, hs as S, fs as p };
