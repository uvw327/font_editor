import { w as p } from "./runtime-dom.esm-bundler.270ff2dc.js"; /* empty css                           */
import {
	_ as w,
	r as h,
	a8 as g,
	a9 as v,
	o as f,
	c as u,
	a as y,
	a5 as B,
	t as b,
	d as m,
	n as k,
	h as S,
} from "./_plugin-vue_export-helper.0519c48a.js";
let i = 0,
	a = 0,
	n = null,
	r = "";
function x() {
	if (!(typeof window > "u" || typeof document > "u")) {
		if (i === 0) {
			const e = document.body,
				o = document.documentElement;
			a = window.scrollY || o.scrollTop || 0;
			const l = Math.max(0, window.innerWidth - o.clientWidth);
			(n = {
				overflow: e.style.overflow,
				position: e.style.position,
				top: e.style.top,
				width: e.style.width,
				paddingRight: e.style.paddingRight,
			}),
				(r = o.style.overflow),
				(o.style.overflow = "hidden"),
				(e.style.overflow = "hidden"),
				(e.style.position = "fixed"),
				(e.style.top = `-${a}px`),
				(e.style.width = "100%"),
				l > 0 && (e.style.paddingRight = `${l}px`);
		}
		i += 1;
	}
}
function _() {
	if (
		typeof window > "u" ||
		typeof document > "u" ||
		((i = Math.max(0, i - 1)), i !== 0 || !n)
	)
		return;
	const e = document.body;
	(document.documentElement.style.overflow = r),
		(e.style.overflow = n.overflow),
		(e.style.position = n.position),
		(e.style.top = n.top),
		(e.style.width = n.width),
		(e.style.paddingRight = n.paddingRight),
		window.scrollTo(0, a),
		(n = null),
		(r = "");
}
const C = {
		name: "DialogComponent",
		props: {
			modelValue: { type: Boolean, default: !1 },
			disableCloseBtn: { type: Boolean, default: !1 },
			maxWidth: { type: Number, default: 400 },
			fullScreenInMobile: { type: Boolean, default: !1 },
		},
		setup(e, { emit: o }) {
			const l = h(null);
			let t = !1;
			const c = () => {
					e.disableCloseBtn || o("update:modelValue", !1);
				},
				s = (d) => {
					d && !t ? (x(), (t = !0)) : !d && t && (_(), (t = !1));
				};
			return (
				g(() => e.modelValue, s, { immediate: !0 }),
				v(() => {
					s(!1);
				}),
				{ dialogRef: l, close: c }
			);
		},
	},
	M = { class: "dialog-content" };
function R(e, o, l, t, c, s) {
	return l.modelValue
		? (f(),
			u(
				"div",
				{
					key: 0,
					class: "dialog-overlay",
					onClick:
						o[1] || (o[1] = p((...d) => t.close && t.close(...d), ["self"])),
				},
				[
					y(
						"div",
						{
							class: k([
								"mydialog",
								{ "full-screen-mobile": l.fullScreenInMobile },
							]),
							ref: "dialogRef",
							style: S({ maxWidth: l.maxWidth + "px" }),
						},
						[
							y("div", M, [B(e.$slots, "default", {}, void 0, !0)]),
							l.disableCloseBtn
								? m("", !0)
								: (f(),
									u(
										"p",
										{
											key: 0,
											onClick:
												o[0] || (o[0] = (...d) => t.close && t.close(...d)),
											class: "dialog-close",
										},
										b(e.$t("components.utils.dialog_new.x_guan_bi")),
										1,
									)),
						],
						6,
					),
				],
			))
		: m("", !0);
}
const E = w(C, [
	["render", R],
	["__scopeId", "data-v-df9fde6a"],
]);
export { E as M };
