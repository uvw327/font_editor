import { s as f } from "./_plugin-vue_export-helper.0519c48a.js";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const m = () => {};
function h(n, r) {
	function t(...e) {
		return new Promise((i, o) => {
			Promise.resolve(
				n(() => r.apply(this, e), { fn: r, thisArg: this, args: e }),
			)
				.then(i)
				.catch(o);
		});
	}
	return t;
}
function T(n, r = {}) {
	let t,
		e,
		i = m;
	const o = (l) => {
		clearTimeout(l), i(), (i = m);
	};
	let c;
	return (l) => {
		const s = f(n),
			u = f(r.maxWait);
		return (
			t && o(t),
			s <= 0 || (u !== void 0 && u <= 0)
				? (e && (o(e), (e = null)), Promise.resolve(l()))
				: new Promise((a, p) => {
						(i = r.rejectOnCancel ? p : a),
							(c = l),
							u &&
								!e &&
								(e = setTimeout(() => {
									t && o(t), (e = null), a(c());
								}, u)),
							(t = setTimeout(() => {
								e && o(e), (e = null), a(l());
							}, s));
					})
		);
	};
}
function x(n, r = 200, t = {}) {
	return h(T(r, t), n);
}
export { x as u };
