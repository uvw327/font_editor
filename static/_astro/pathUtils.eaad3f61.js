function B(t, n, e, o, s) {
	return (
		Math.pow(1 - s, 3) * t +
		3 * Math.pow(1 - s, 2) * s * n +
		3 * (1 - s) * Math.pow(s, 2) * e +
		Math.pow(s, 3) * o
	);
}
function Y() {
	(this.x1 = Number.NaN),
		(this.y1 = Number.NaN),
		(this.x2 = Number.NaN),
		(this.y2 = Number.NaN);
}
Y.prototype.isEmpty = function () {
	return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
};
Y.prototype.addPoint = function (t, n) {
	typeof t == "number" &&
		((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
		t < this.x1 && (this.x1 = t),
		t > this.x2 && (this.x2 = t)),
		typeof n == "number" &&
			((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = n), (this.y2 = n)),
			n < this.y1 && (this.y1 = n),
			n > this.y2 && (this.y2 = n));
};
Y.prototype.addX = function (t) {
	this.addPoint(t, null);
};
Y.prototype.addY = function (t) {
	this.addPoint(null, t);
};
Y.prototype.addBezier = function (t, n, e, o, s, y, h, u) {
	const l = [t, n],
		a = [e, o],
		r = [s, y],
		i = [h, u];
	this.addPoint(t, n), this.addPoint(h, u);
	for (let c = 0; c <= 1; c++) {
		const p = 6 * l[c] - 12 * a[c] + 6 * r[c],
			f = -3 * l[c] + 9 * a[c] - 9 * r[c] + 3 * i[c],
			d = 3 * a[c] - 3 * l[c];
		if (f === 0) {
			if (p === 0) continue;
			const g = -d / p;
			0 < g &&
				g < 1 &&
				(c === 0 && this.addX(B(l[c], a[c], r[c], i[c], g)),
				c === 1 && this.addY(B(l[c], a[c], r[c], i[c], g)));
			continue;
		}
		const m = Math.pow(p, 2) - 4 * d * f;
		if (m < 0) continue;
		const b = (-p + Math.sqrt(m)) / (2 * f);
		0 < b &&
			b < 1 &&
			(c === 0 && this.addX(B(l[c], a[c], r[c], i[c], b)),
			c === 1 && this.addY(B(l[c], a[c], r[c], i[c], b)));
		const x = (-p - Math.sqrt(m)) / (2 * f);
		0 < x &&
			x < 1 &&
			(c === 0 && this.addX(B(l[c], a[c], r[c], i[c], x)),
			c === 1 && this.addY(B(l[c], a[c], r[c], i[c], x)));
	}
};
Y.prototype.addQuad = function (t, n, e, o, s, y) {
	const h = t + 0.6666666666666666 * (e - t),
		u = n + (2 / 3) * (o - n),
		l = h + (1 / 3) * (s - t),
		a = u + (1 / 3) * (y - n);
	this.addBezier(t, n, h, u, l, a, s, y);
};
const bt = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
function ut(t) {
	return t
		.map((n) => {
			const { type: e, points: o } = n;
			if (e === "Z") return "Z";
			const s = [];
			for (let y = 0; y < o.length; y += 1) s.push(Tt(o[y]));
			return o.length ? `${e} ${s.join(" ")}` : e;
		})
		.join(" ");
}
const mt = 0.14,
	gt = 0.985;
function Zt(t) {
	const n = [];
	let e = { x: 0, y: 0 },
		o = { x: 0, y: 0 };
	return (
		t.forEach((s, y) => {
			switch (s.type) {
				case "M": {
					const [h, u] = s.points;
					(e = { x: h, y: u }),
						(o = { x: h, y: u }),
						n.push({
							type: "M",
							start: { ...e },
							end: { ...e },
							commandIndex: y,
						});
					break;
				}
				case "L": {
					const [h, u] = s.points;
					n.push({
						type: "L",
						start: { ...e },
						end: { x: h, y: u },
						commandIndex: y,
					}),
						(e = { x: h, y: u });
					break;
				}
				case "C": {
					const [h, u, l, a, r, i] = s.points;
					n.push({
						type: "C",
						start: { ...e },
						end: { x: r, y: i },
						controls: [
							{ x: h, y: u },
							{ x: l, y: a },
						],
						commandIndex: y,
					}),
						(e = { x: r, y: i });
					break;
				}
				case "Q": {
					const [h, u, l, a] = s.points;
					n.push({
						type: "Q",
						start: { ...e },
						end: { x: l, y: a },
						controls: [{ x: h, y: u }],
						commandIndex: y,
					}),
						(e = { x: l, y: a });
					break;
				}
				case "A": {
					const [, , , , , h, u] = s.points;
					n.push({
						type: "A",
						start: { ...e },
						end: { x: h, y: u },
						commandIndex: y,
					}),
						(e = { x: h, y: u });
					break;
				}
				case "Z": {
					n.push({
						type: "Z",
						start: { ...e },
						end: { ...o },
						commandIndex: y,
					}),
						(e = { ...o });
					break;
				}
			}
		}),
		n
	);
}
function Mt(t, n, e) {
	const o = Number(n),
		s = Number(e);
	if (
		!Number.isFinite(o) ||
		!Number.isFinite(s) ||
		(Math.abs(o) < 1e-9 && Math.abs(s) < 1e-9)
	)
		return t;
	const y = kt(W(t));
	if (!y.length) return t;
	let h = 0;
	for (const r of y) for (const i of r.curves) h += wt(i);
	const u = h >= 0 ? -1 : 1,
		l = St(y),
		a = [];
	for (const r of y) {
		const i = r.curves.length;
		if (!i) continue;
		const c = r.closed ? i : i + 1,
			p = r.curves.map(ft),
			f = r.curves.map((x) => Ot(x, l, u)),
			d = [];
		for (let x = 0; x < c; x += 1) {
			const g = r.closed ? (x - 1 + i) % i : Math.max(x - 1, 0),
				M = r.closed ? x % i : Math.min(x, i - 1),
				N = r.curves[g],
				k = r.curves[M];
			let P = lt(N),
				A = H(k);
			r.closed || (x === 0 && (P = A), x === c - 1 && (A = P));
			const L = I(P, f[g]),
				O = I(A, f[M]),
				S = { x: L.x + O.x, y: L.y + O.y },
				w = Math.hypot(S.x, S.y);
			let F = L,
				X = 1;
			if (w > 1e-6) {
				(S.x /= w), (S.y /= w);
				const q = L.x * S.x + L.y * S.y;
				Math.abs(q) > 1e-4 && ((X = xt(1 / q, -10, 10)), (F = S));
			}
			const Z = F.x * X * o,
				_ = F.y * X * s;
			d.push({ x: rt(Z, o), y: rt(_, s) });
		}
		At(r, p, f, d, s);
		const m = r.curves[0],
			b = d[0];
		a.push({ type: "M", points: [C(m.start.x + b.x), C(m.start.y + b.y)] });
		for (let x = 0; x < i; x += 1) {
			const g = r.curves[x],
				M = d[x],
				N = r.closed ? d[(x + 1) % i] : d[x + 1];
			g.type === "L"
				? a.push({ type: "L", points: [C(g.end.x + N.x), C(g.end.y + N.y)] })
				: a.push({
						type: "C",
						points: [
							C(g.c1.x + M.x),
							C(g.c1.y + M.y),
							C(g.c2.x + N.x),
							C(g.c2.y + N.y),
							C(g.end.x + N.x),
							C(g.end.y + N.y),
						],
					});
		}
		r.closed && a.push({ type: "Z", points: [] });
	}
	return ut(a);
}
function Qt(t, n, e) {
	const o = Math.abs(Number(n)),
		s = Math.abs(Number(e));
	if (!Number.isFinite(o) || !Number.isFinite(s) || (o < 1e-9 && s < 1e-9))
		return t;
	const y = Mt(t, -o, -s);
	if (y.trim() === t.trim()) return t;
	const h = W(t),
		u = Nt(W(y));
	return !h.length || !u.length ? t : ut([...h, ...u]);
}
function Nt(t) {
	const n = [];
	let e = [];
	for (const o of t) {
		if (o.type === "M") {
			e.length && n.push(e), (e = [U(o)]);
			continue;
		}
		e.length && e.push(U(o));
	}
	return e.length && n.push(e), n.flatMap((o) => Ct(o) ?? []);
}
function Ct(t) {
	if (!t.length) return null;
	const n = t[0];
	if (n.type !== "M" || n.points.length < 2) return null;
	const e = { x: n.points[0], y: n.points[1] };
	let o = { ...e };
	const s = [],
		y = t[t.length - 1]?.type === "Z";
	for (let l = 1; l < t.length; l += 1) {
		const a = t[l];
		switch (a.type) {
			case "L": {
				if (a.points.length < 2) return null;
				const r = { x: a.points[0], y: a.points[1] };
				s.push({ command: a, type: a.type, start: { ...o }, end: r }), (o = r);
				break;
			}
			case "C": {
				if (a.points.length < 6) return null;
				const r = { x: a.points[4], y: a.points[5] };
				s.push({ command: a, type: a.type, start: { ...o }, end: r }), (o = r);
				break;
			}
			case "Q": {
				if (a.points.length < 4) return null;
				const r = { x: a.points[2], y: a.points[3] };
				s.push({ command: a, type: a.type, start: { ...o }, end: r }), (o = r);
				break;
			}
			case "A": {
				if (a.points.length < 7) return null;
				const r = { x: a.points[5], y: a.points[6] };
				s.push({ command: a, type: a.type, start: { ...o }, end: r }), (o = r);
				break;
			}
			case "Z":
				o = { ...e };
				break;
			default:
				return null;
		}
	}
	if (!s.length) return t.map(U);
	const h = { ...s[s.length - 1].end },
		u = [{ type: "M", points: [C(h.x), C(h.y)] }];
	for (let l = s.length - 1; l >= 0; l -= 1) {
		const a = s[l],
			r = a.start;
		switch (a.type) {
			case "L":
				u.push({ type: "L", points: [C(r.x), C(r.y)] });
				break;
			case "Q": {
				const [i, c] = a.command.points;
				u.push({ type: "Q", points: [C(i), C(c), C(r.x), C(r.y)] });
				break;
			}
			case "C": {
				const [i, c, p, f] = a.command.points;
				u.push({ type: "C", points: [C(p), C(f), C(i), C(c), C(r.x), C(r.y)] });
				break;
			}
			case "A": {
				const [i, c, p, f, d] = a.command.points;
				u.push({
					type: "A",
					points: [i, c, p, f, d === 0 ? 1 : 0, C(r.x), C(r.y)],
				});
				break;
			}
		}
	}
	return y && u.push({ type: "Z", points: [] }), u;
}
function U(t) {
	return { type: t.type, points: [...t.points] };
}
function kt(t) {
	const n = [];
	let e = null,
		o = { x: 0, y: 0 },
		s = { x: 0, y: 0 };
	const y = () => (e || (e = { closed: !1, curves: [] }), e),
		h = () => {
			e && e.curves.length && n.push(e), (e = null);
		},
		u = (a, r) => {
			Math.hypot(r.x - a.x, r.y - a.y) <= 1e-5 ||
				y().curves.push({ type: "L", start: { ...a }, end: { ...r } });
		},
		l = (a, r, i, c) => {
			(Math.hypot(c.x - a.x, c.y - a.y) <= 1e-5 &&
				Math.hypot(r.x - a.x, r.y - a.y) <= 1e-5) ||
				y().curves.push({
					type: "C",
					start: { ...a },
					c1: { ...r },
					c2: { ...i },
					end: { ...c },
				});
		};
	for (const a of t) {
		const r = a.points;
		switch (a.type) {
			case "M": {
				h();
				const [i, c] = r;
				if (!Number.isFinite(i) || !Number.isFinite(c)) break;
				(o = { x: i, y: c }),
					(s = { x: i, y: c }),
					(e = { closed: !1, curves: [] });
				break;
			}
			case "L": {
				const [i, c] = r;
				if (!Number.isFinite(i) || !Number.isFinite(c)) break;
				const p = { x: i, y: c };
				u(o, p), (o = p);
				break;
			}
			case "C": {
				const [i, c, p, f, d, m] = r;
				if (![i, c, p, f, d, m].every((x) => Number.isFinite(x))) break;
				const b = { x: d, y: m };
				l(o, { x: i, y: c }, { x: p, y: f }, b), (o = b);
				break;
			}
			case "Q": {
				const [i, c, p, f] = r;
				if (![i, c, p, f].every((x) => Number.isFinite(x))) break;
				const d = { x: p, y: f };
				if (Pt(o, d)) {
					o = d;
					break;
				}
				const m = {
						x: o.x + (2 / 3) * (i - o.x),
						y: o.y + (2 / 3) * (c - o.y),
					},
					b = { x: d.x + (2 / 3) * (i - d.x), y: d.y + (2 / 3) * (c - d.y) };
				l(o, m, b, d), (o = d);
				break;
			}
			case "A": {
				const [i, c, p = 0, f = 0, d = 0, m, b] = r;
				if (![i, c, p, f, d, m, b].every((M) => Number.isFinite(M))) break;
				const x = { x: m, y: b },
					g = dt(o.x, o.y, i, c, p, f, d, m, b);
				if (g.length)
					for (const [M, N, k, P, A, L] of g) {
						const O = { x: A, y: L };
						l(o, { x: M, y: N }, { x: k, y: P }, O), (o = O);
					}
				else u(o, x), (o = x);
				break;
			}
			case "Z": {
				if (e) {
					e.closed = !0;
					const i = e.curves[0]?.start ?? s;
					u(o, i), e.curves.length && n.push(e), (e = null);
				}
				o = { ...s };
				break;
			}
		}
	}
	return h(), n;
}
function rt(t, n) {
	const e = Math.abs(n);
	return e <= 1e-9 ? 0 : xt(t, -e, e);
}
function Pt(t, n) {
	return Math.hypot(t.x - n.x, t.y - n.y) <= 1e-5;
}
function I(t, n) {
	return { x: -t.y * n, y: t.x * n };
}
function At(t, n, e, o, s) {
	const y = Math.abs(s),
		h = t.curves.length;
	if (!t.closed || h < 3 || y <= 1e-9) return;
	const u = Lt(t);
	if (!u || u.height <= 1e-6) return;
	const l = u.height * 0.08;
	for (let a = 0; a < h; a += 1) {
		const r = (a - 1 + h) % h,
			i = (a + 1) % h,
			c = n[a],
			p = Math.min(n[r], n[i]);
		if (c > p * 0.2) continue;
		const f = z(t.curves[a], 0.5);
		if (f.y <= u.minY + l || f.y >= u.maxY - l) continue;
		const d = I(lt(t.curves[r]), e[r]),
			m = I(H(t.curves[i]), e[i]),
			b = d.y + m.y;
		if (
			Math.abs(d.y) <= 0.05 ||
			Math.abs(m.y) <= 0.05 ||
			d.y * m.y <= 0 ||
			Math.abs(b) <= 1e-6
		)
			continue;
		const x = Math.sign(b) * y * Math.sign(s),
			g = (a + 1) % h;
		ct(o[a], x), ct(o[g], x);
	}
}
function ct(t, n) {
	Math.abs(n) <= 1e-9 ||
		((Math.sign(t.y) !== Math.sign(n) || Math.abs(t.y) < Math.abs(n)) &&
			(t.y = n));
}
function Lt(t) {
	const n = [];
	for (const l of t.curves)
		n.push(l.start, l.end), l.type === "C" && n.push(l.c1, l.c2);
	if (!n.length) return null;
	const e = n.map((l) => l.x),
		o = n.map((l) => l.y),
		s = Math.min(...e),
		y = Math.min(...o),
		h = Math.max(...e),
		u = Math.max(...o);
	return { minX: s, minY: y, maxX: h, maxY: u, width: h - s, height: u - y };
}
function Ot(t, n, e) {
	if (!n.length) return e;
	const o = z(t, 0.5),
		s = Et(t, 0.5),
		y = I(s, 1),
		h = 0.75,
		u = { x: o.x + y.x * h, y: o.y + y.y * h },
		l = { x: o.x - y.x * h, y: o.y - y.y * h },
		a = at(u, n),
		r = at(l, n);
	return a !== r ? (a ? -1 : 1) : e;
}
function St(t) {
	const n = [];
	for (const e of t)
		for (const o of e.curves) {
			if (o.type === "L") {
				n.push({ start: o.start, end: o.end });
				continue;
			}
			let s = o.start;
			for (let y = 1; y <= 16; y += 1) {
				const h = z(o, y / 16);
				n.push({ start: s, end: h }), (s = h);
			}
		}
	return n;
}
function at(t, n) {
	let e = !1;
	for (const o of n) {
		const { start: s, end: y } = o;
		if (s.y > t.y == y.y > t.y) continue;
		const h = ((y.x - s.x) * (t.y - s.y)) / (y.y - s.y) + s.x;
		t.x < h && (e = !e);
	}
	return e;
}
function wt(t) {
	if (t.type === "L") return (t.start.x * t.end.y - t.end.x * t.start.y) / 2;
	let n = 0,
		e = t.start;
	for (let o = 1; o <= 10; o += 1) {
		const s = o / 10,
			y = 1 - s,
			h =
				y * y * y * t.start.x +
				3 * y * y * s * t.c1.x +
				3 * y * s * s * t.c2.x +
				s * s * s * t.end.x,
			u =
				y * y * y * t.start.y +
				3 * y * y * s * t.c1.y +
				3 * y * s * s * t.c2.y +
				s * s * s * t.end.y;
		(n += e.x * u - h * e.y), (e = { x: h, y: u });
	}
	return n / 2;
}
function z(t, n) {
	if (t.type === "L")
		return {
			x: t.start.x + (t.end.x - t.start.x) * n,
			y: t.start.y + (t.end.y - t.start.y) * n,
		};
	const e = 1 - n;
	return {
		x:
			e * e * e * t.start.x +
			3 * e * e * n * t.c1.x +
			3 * e * n * n * t.c2.x +
			n * n * n * t.end.x,
		y:
			e * e * e * t.start.y +
			3 * e * e * n * t.c1.y +
			3 * e * n * n * t.c2.y +
			n * n * n * t.end.y,
	};
}
function ft(t) {
	if (t.type === "L")
		return Math.hypot(t.end.x - t.start.x, t.end.y - t.start.y);
	let n = 0,
		e = t.start;
	for (let o = 1; o <= 16; o += 1) {
		const s = z(t, o / 16);
		(n += Math.hypot(s.x - e.x, s.y - e.y)), (e = s);
	}
	return n;
}
function Et(t, n) {
	if (t.type === "L") return H(t);
	const e = ht(t, n);
	return e || H(t);
}
function ht(t, n) {
	const e = 1 - n,
		o =
			3 * e * e * (t.c1.x - t.start.x) +
			6 * e * n * (t.c2.x - t.c1.x) +
			3 * n * n * (t.end.x - t.c2.x),
		s =
			3 * e * e * (t.c1.y - t.start.y) +
			6 * e * n * (t.c2.y - t.c1.y) +
			3 * n * n * (t.end.y - t.c2.y),
		y = Math.hypot(o, s);
	return y <= 1e-6 ? null : { x: o / y, y: s / y };
}
function T(t, n) {
	const e = Math.hypot(n.x - t.x, n.y - t.y);
	return e <= 1e-6 ? null : { x: (n.x - t.x) / e, y: (n.y - t.y) / e };
}
function H(t) {
	return t.type === "C"
		? pt(t, "start") || T(t.start, t.c2) || T(t.start, t.end) || { x: 1, y: 0 }
		: T(t.start, t.end) || { x: 1, y: 0 };
}
function lt(t) {
	return t.type === "C"
		? pt(t, "end") || T(t.c1, t.end) || T(t.start, t.end) || { x: 1, y: 0 }
		: T(t.start, t.end) || { x: 1, y: 0 };
}
function pt(t, n) {
	const e = n === "start" ? T(t.start, t.c1) : T(t.c2, t.end);
	if (!e) return null;
	const o =
			n === "start"
				? Math.hypot(t.c1.x - t.start.x, t.c1.y - t.start.y)
				: Math.hypot(t.end.x - t.c2.x, t.end.y - t.c2.y),
		s = ft(t);
	if (s <= 1e-6 || o / s > mt) return e;
	const y = ht(t, n === "start" ? 0.2 : 0.8);
	return y && e.x * y.x + e.y * y.y < gt ? y : e;
}
function Bt(t) {
	if (!t.length) return null;
	const n = [],
		e = [];
	t.forEach((u) => {
		n.push(u.start.x, u.end.x),
			e.push(u.start.y, u.end.y),
			u.controls?.forEach((l) => {
				n.push(l.x), e.push(l.y);
			});
	});
	const o = Math.min(...n),
		s = Math.max(...n),
		y = Math.min(...e),
		h = Math.max(...e);
	return { minX: o, minY: y, maxX: s, maxY: h, width: s - o, height: h - y };
}
function It(t) {
	if (!t.length) return null;
	const n = new Y();
	let e = 0,
		o = 0,
		s = 0,
		y = 0,
		h = !1;
	const u = (a, r) =>
			typeof a == "number" && typeof r == "number"
				? (n.addPoint(a, r), (h = !0), !0)
				: !1,
		l = (a, r, i, c, p, f) => {
			n.addBezier(e, o, a, r, i, c, p, f), (h = !0), (e = p), (o = f);
		};
	return (
		t.forEach((a) => {
			const r = Array.isArray(a.points) ? a.points : [];
			switch (a.type) {
				case "M": {
					const [i, c] = r;
					u(i, c) && ((e = i), (o = c), (s = i), (y = c));
					break;
				}
				case "L": {
					const [i, c] = r;
					u(e, o) && u(i, c) && ((e = i), (o = c));
					break;
				}
				case "Q": {
					const [i, c, p, f] = r;
					[e, o, i, c, p, f].every((d) => Number.isFinite(d)) &&
						(n.addQuad(e, o, i, c, p, f), (h = !0), (e = p), (o = f));
					break;
				}
				case "C": {
					const [i, c, p, f, d, m] = r;
					[e, o, i, c, p, f, d, m].every((b) => Number.isFinite(b)) &&
						l(i, c, p, f, d, m);
					break;
				}
				case "A": {
					const [i, c, p = 0, f = 0, d = 0, m, b] = r,
						x = dt(e, o, i, c, p, f, d, m, b);
					x.length
						? x.forEach(([g, M, N, k, P, A]) => {
								l(g, M, N, k, P, A);
							})
						: u(m, b) && ((e = m), (o = b));
					break;
				}
				case "Z": {
					u(s, y), (e = s), (o = y);
					break;
				}
			}
		}),
		n.isEmpty() || !h
			? null
			: {
					minX: n.x1,
					minY: n.y1,
					maxX: n.x2,
					maxY: n.y2,
					width: n.x2 - n.x1,
					height: n.y2 - n.y1,
				}
	);
}
function W(t) {
	const n = [];
	if (!t.trim()) return n;
	const e = Ft(t);
	let o = 0,
		s = { x: 0, y: 0 },
		y = { x: 0, y: 0 },
		h = "",
		u = null,
		l = "";
	for (; o < e.length; ) {
		let a = e[o];
		if (G(a)) (h = a), (o += 1);
		else if (h) {
			if (Number.isNaN(Number(a))) {
				o += 1;
				continue;
			}
		} else {
			o += 1;
			continue;
		}
		const r = h.toUpperCase(),
			i = h === h.toLowerCase(),
			c = bt[r];
		if (c === void 0) continue;
		const p = [];
		for (; p.length < c && o < e.length && ((a = e[o]), !G(a)); ) {
			const f = Number(a);
			if (Number.isNaN(f)) break;
			p.push(f), (o += 1);
		}
		if (!(p.length < c)) {
			switch (r) {
				case "M":
				case "L": {
					for (let f = 0; f < p.length; f += 2) {
						const d = p[f],
							m = p[f + 1],
							b = i ? s.x + d : d,
							x = i ? s.y + m : m;
						r === "M" && f === 0
							? (n.push({ type: "M", points: [b, x] }),
								(s = { x: b, y: x }),
								(y = { ...s }),
								(l = "M"))
							: (n.push({ type: "L", points: [b, x] }),
								(s = { x: b, y: x }),
								(l = "L")),
							(u = null);
					}
					break;
				}
				case "H": {
					p.forEach((f) => {
						(s = { x: i ? s.x + f : f, y: s.y }),
							n.push({ type: "L", points: [s.x, s.y] });
					}),
						(u = null),
						(l = "L");
					break;
				}
				case "V": {
					p.forEach((f) => {
						const d = i ? s.y + f : f;
						(s = { x: s.x, y: d }), n.push({ type: "L", points: [s.x, s.y] });
					}),
						(u = null),
						(l = "L");
					break;
				}
				case "C": {
					for (let f = 0; f < p.length; f += 6) {
						const [d, m, b, x, g, M] = p.slice(f, f + 6),
							N = i ? s.x + d : d,
							k = i ? s.y + m : m,
							P = i ? s.x + b : b,
							A = i ? s.y + x : x,
							L = i ? s.x + g : g,
							O = i ? s.y + M : M;
						n.push({ type: "C", points: [N, k, P, A, L, O] }),
							(s = { x: L, y: O }),
							(u = { x: P, y: A }),
							(l = "C");
					}
					break;
				}
				case "S": {
					for (let f = 0; f < p.length; f += 4) {
						const [d, m, b, x] = p.slice(f, f + 4);
						let g = s.x,
							M = s.y;
						(l === "C" || l === "S") &&
							u &&
							((g = s.x * 2 - u.x), (M = s.y * 2 - u.y));
						const N = i ? s.x + d : d,
							k = i ? s.y + m : m,
							P = i ? s.x + b : b,
							A = i ? s.y + x : x;
						n.push({ type: "C", points: [g, M, N, k, P, A] }),
							(s = { x: P, y: A }),
							(u = { x: N, y: k }),
							(l = "S");
					}
					break;
				}
				case "Q": {
					for (let f = 0; f < p.length; f += 4) {
						const [d, m, b, x] = p.slice(f, f + 4),
							g = i ? s.x + d : d,
							M = i ? s.y + m : m,
							N = i ? s.x + b : b,
							k = i ? s.y + x : x;
						n.push({ type: "Q", points: [g, M, N, k] }),
							(s = { x: N, y: k }),
							(u = { x: g, y: M }),
							(l = "Q");
					}
					break;
				}
				case "T": {
					p.forEach((f, d) => {
						if (d % 2 === 1) return;
						const m = f,
							b = p[d + 1];
						let x = s.x,
							g = s.y;
						(l === "Q" || l === "T") &&
							u &&
							((x = s.x * 2 - u.x), (g = s.y * 2 - u.y));
						const M = i ? s.x + m : m,
							N = i ? s.y + b : b;
						n.push({ type: "Q", points: [x, g, M, N] }),
							(s = { x: M, y: N }),
							(u = { x, y: g }),
							(l = "T");
					});
					break;
				}
				case "A": {
					for (let f = 0; f < p.length; f += 7) {
						const [d, m, b, x, g, M, N] = p.slice(f, f + 7),
							k = i ? s.x + M : M,
							P = i ? s.y + N : N;
						n.push({ type: "A", points: [d, m, b, x, g, k, P] }),
							(s = { x: k, y: P }),
							(u = null),
							(l = "A");
					}
					break;
				}
				case "Z": {
					n.push({ type: "Z", points: [] }),
						(s = { ...y }),
						(u = null),
						(l = "Z");
					break;
				}
			}
			(o < e.length && !G(e[o])) || (h = "");
		}
	}
	return n;
}
function C(t) {
	return Math.round(t * 1e3) / 1e3;
}
function xt(t, n, e) {
	return t < n ? n : t > e ? e : t;
}
function _t(t) {
	return typeof t != "number" || Number.isNaN(t) || t < 0 ? 0 : t > 1 ? 1 : t;
}
function Tt(t) {
	const n = C(t);
	return Number.isInteger(n), n.toString();
}
function Ft(t) {
	const n = t.match(Xt);
	return n ? n.map((e) => e.trim()).filter(Boolean) : [];
}
function G(t) {
	return /^[a-zA-Z]$/.test(t);
}
const Xt = /[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+)(?:e[-+]?\d+)?/g;
function Yt(t) {
	return (t * Math.PI) / 180;
}
function K(t, n, e, o, s, y, h, u) {
	const l = t * e,
		a = n * o;
	return [s * l - y * a + h, y * l + s * a + u];
}
function yt(t, n, e, o) {
	const s = t * e + n * o,
		y = Math.sqrt(t * t + n * n) * Math.sqrt(e * e + o * o);
	if (!Number.isFinite(y) || y === 0) return 0;
	let h = Math.acos(Math.min(Math.max(s / y, -1), 1));
	return t * o - n * e < 0 && (h = -h), h;
}
function dt(t, n, e, o, s, y, h, u, l) {
	if (![t, n, e, o, s, u, l].every((E) => Number.isFinite(E))) return [];
	if (e === 0 || o === 0) return [];
	if (t === u && n === l) return [];
	let r = Math.abs(e),
		i = Math.abs(o);
	const c = Yt(s),
		p = Math.sin(c),
		f = Math.cos(c),
		d = (t - u) / 2,
		m = (n - l) / 2,
		b = f * d + p * m,
		x = -p * d + f * m;
	let g = (b * b) / (r * r) + (x * x) / (i * i);
	if (g > 1) {
		const E = Math.sqrt(g);
		(r *= E), (i *= E);
	}
	const M = r * r,
		N = i * i,
		k = b * b,
		P = x * x,
		A = M * N - M * P - N * k,
		L = M * P + N * k;
	if (L === 0) return [];
	let O = Math.sqrt(Math.max(0, A / L));
	y === h && (O = -O);
	const S = (O * r * x) / i,
		w = (-O * i * b) / r,
		F = f * S - p * w + (t + u) / 2,
		X = p * S + f * w + (n + l) / 2,
		Z = [(b - S) / r, (x - w) / i],
		_ = [(-b - S) / r, (-x - w) / i];
	let q = yt(1, 0, Z[0], Z[1]),
		Q = yt(Z[0], Z[1], _[0], _[1]);
	!h && Q > 0 ? (Q -= Math.PI * 2) : h && Q < 0 && (Q += Math.PI * 2);
	const J = Math.max(Math.ceil(Math.abs(Q / (Math.PI / 2))), 1),
		R = Q / J,
		D = (4 / 3) * Math.tan(R / 4),
		v = [];
	for (let E = 0; E < J; E += 1) {
		const j = q + E * R,
			tt = j + R,
			nt = Math.cos(j),
			et = Math.sin(j),
			V = Math.cos(tt),
			$ = Math.sin(tt),
			st = K(V, $, r, i, f, p, F, X),
			ot = K(nt - D * et, et + D * nt, r, i, f, p, F, X),
			it = K(V + D * $, $ - D * V, r, i, f, p, F, X);
		v.push([ot[0], ot[1], it[0], it[1], st[0], st[1]]);
	}
	return v;
}
export {
	Y as B,
	Zt as a,
	Bt as b,
	xt as c,
	_t as d,
	ut as e,
	Tt as f,
	dt as g,
	It as h,
	Qt as i,
	Mt as o,
	W as p,
	C as r,
};
