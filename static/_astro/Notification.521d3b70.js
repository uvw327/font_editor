/* empty css                              */ import {
	_ as a,
	o as n,
	c,
	a as s,
	t as i,
	n as _,
	p as r,
	j as p,
} from "./_plugin-vue_export-helper.0519c48a.js";
const d = {
		__name: "Notification",
		props: { message: String, type: { type: String, default: "info" } },
		emits: ["close"],
		setup(e, { expose: o }) {
			o();
			const t = {};
			return (
				Object.defineProperty(t, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				t
			);
		},
	},
	l = (e) => (r("data-v-a7977c7c"), (e = e()), p(), e),
	f = { class: "notification-content" },
	u = { class: "notification-icon" },
	m = { class: "notification-message" },
	h = l(() =>
		s(
			"svg",
			{ viewBox: "0 0 24 24", width: "14", height: "14" },
			[
				s("path", {
					d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
				}),
			],
			-1,
		),
	),
	g = [h];
function v(e, o, t, S, y, x) {
	return (
		n(),
		c(
			"div",
			{ class: _(["notification", t.type]) },
			[
				s("div", f, [
					s(
						"span",
						u,
						i(t.type === "success" ? "✓" : t.type === "error" ? "✕" : "ℹ"),
						1,
					),
					s("span", m, i(t.message), 1),
					s(
						"button",
						{
							class: "notification-close",
							onClick: o[0] || (o[0] = (B) => e.$emit("close")),
						},
						g,
					),
				]),
			],
			2,
		)
	);
}
const b = a(d, [
	["render", v],
	["__scopeId", "data-v-a7977c7c"],
]);
export { b as N };
