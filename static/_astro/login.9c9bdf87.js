import { v as S, b as Ve } from "./runtime-dom.esm-bundler.270ff2dc.js";
import { u as xe } from "./vue-i18n.a5d54a73.js";
import {
	ab as tn,
	s as a,
	h as N,
	ac as ln,
	ad as Le,
	ae as ze,
	G as Se,
	C as qe,
	af as Te,
	ag as Ie,
	ah as Pe,
	ai as je,
	aj as De,
	ak as Ue,
} from "./api.25177dcb.js";
import {
	c as ee,
	b as ce,
	g as de,
	s as ue,
	a as Ee,
	d as Be,
} from "./auth.ed1b67ca.js";
import { g as Me } from "./index.48577a90.js";
import { M as an } from "./dialog_new.97ae782c.js";
import {
	_ as Je,
	aa as sn,
	w as p,
	o as h,
	c as m,
	a as i,
	t as s,
	F as rn,
	d as k,
	ab as B,
	r,
	a8 as Z,
	q as Ne,
	ac as Ae,
	b as _e,
	l as M,
	m as $,
	n as Oe,
} from "./_plugin-vue_export-helper.0519c48a.js";
import "./index.a309bbc7.js";
import "./index.e05af36c.js"; /* empty css                           */
const dn = {
		name: "PhoneVerification",
		data() {
			return {
				phoneNumber: "",
				verificationCode: "",
				isSendingVerificationCode: !1,
				showVerificationCodeInput: !1,
				showConflict: !1,
				countdown: 60,
				loading: !1,
			};
		},
		computed: {
			buttonLabel() {
				return this.isSendingVerificationCode
					? this.$t(
							"components.utils.phone_valid.zhong_fa_yan_zheng_ma_this_countdowns",
							{ countdown: this.countdown },
						)
					: this.$t("components.utils.phone_valid.fa_song_yan_zheng_ma");
			},
		},
		methods: {
			logout() {
				ee(), ce();
				let d = window.location.href;
				if (d.indexOf("ztj_token") !== -1) {
					let t = d.split("?"),
						e = t[1].split("&"),
						g = [];
					e.forEach((l) => {
						l.indexOf("ztj_token") === -1 && g.push(l);
					});
					let u = t[0] + (g.length > 0 ? "?" + g.join("&") : "");
					window.location.href = u;
					return;
				} else window.location.reload();
			},
			usePhoneLogin() {
				this.$emit("conflict", this.phoneNumber);
			},
			sendVerificationCode() {
				this.loading ||
					(this.phoneNumber
						? ((this.isSendingVerificationCode = !0),
							(this.loading = !0),
							tn(this.phoneNumber)
								.then((d) => {
									let o = d.message || "",
										t = d.code != null ? String(d.code) : "-1";
									if (t !== "0" && o.includes("手机号已存在")) {
										(this.showConflict = !0),
											(this.isSendingVerificationCode = !1);
										return;
									}
									if (t !== "0") {
										a(o), (this.isSendingVerificationCode = !1);
										return;
									}
									this.startCountdown(),
										(this.showVerificationCodeInput = !0),
										N(
											this.$t(
												"components.utils.phone_valid.fa_song_cheng_gong_qing_cha_kan_shou",
											),
										);
								})
								.finally(() => {
									this.loading = !1;
								}))
						: a(
								this.$t("components.utils.phone_valid.qing_shu_ru_shou_ji_hao"),
							));
			},
			startCountdown() {
				let d = setInterval(() => {
					this.countdown--,
						this.countdown <= 0 &&
							(clearInterval(d), (this.isSendingVerificationCode = !1));
				}, 1e3);
			},
			verifyCode() {
				let d = localStorage.getItem("cps_uid");
				this.loading ||
					(this.verificationCode
						? ((this.loading = !0),
							ln(this.phoneNumber, this.verificationCode, parseInt(d))
								.then((o) => {
									let t = o.message || "",
										e = o.code != null ? String(o.code) : "-1";
									if (e !== "0" && t.includes("手机号已存在")) {
										this.showConflict = !0;
										return;
									}
									if (e !== "0") {
										a(
											this.$t(
												"components.utils.phone_valid.yan_zheng_ma_cuo_wu",
											),
										);
										return;
									}
									N(
										this.$t(
											"components.utils.phone_valid.yan_zheng_cheng_gong",
										),
									),
										this.$emit("complete");
								})
								.finally(() => {
									this.loading = !1;
								}))
						: a(
								this.$t(
									"components.utils.phone_valid.qing_shu_ru_yan_zheng_ma",
								),
							));
			},
		},
	},
	un = { class: "phone-verification" },
	_n = { style: { margin: "10px 0" } },
	cn = { key: 0, class: "conflict-block" },
	gn = { class: "conflict-message" },
	hn = { style: { display: "flex" } },
	mn = ["placeholder"],
	fn = ["disabled"],
	vn = ["placeholder"],
	pn = { key: 1 },
	Cn = { style: { "font-size": "12px", color: "#5f6b7c" } };
function bn(d, o, t, e, g, u) {
	const l = sn("cb-loading");
	return p(
		(h(),
		m("div", un, [
			i(
				"h3",
				_n,
				s(d.$t("components.utils.phone_valid.yan_zheng_shou_ji_hao")),
				1,
			),
			g.showConflict
				? (h(),
					m("div", cn, [
						i(
							"p",
							gn,
							s(d.$t("components.utils.phone_valid.shou_ji_hao_yi_zhu_ce")),
							1,
						),
						i(
							"button",
							{
								onClick:
									o[0] ||
									(o[0] = (..._) => u.usePhoneLogin && u.usePhoneLogin(..._)),
								class: "valid-button",
								style: { width: "100%" },
							},
							s(
								d.$t(
									"components.utils.phone_valid.shi_yong_shou_ji_hao_deng_lu",
								),
							),
							1,
						),
					]))
				: (h(),
					m(
						rn,
						{ key: 1 },
						[
							i("div", hn, [
								p(
									i(
										"input",
										{
											"onUpdate:modelValue":
												o[1] || (o[1] = (_) => (g.phoneNumber = _)),
											placeholder: d.$t(
												"components.utils.phone_valid.qing_shu_ru_shou_ji_hao",
											),
											class: "input-field",
											style: { width: "70%", "box-sizing": "border-box" },
										},
										null,
										8,
										mn,
									),
									[[S, g.phoneNumber]],
								),
								i(
									"button",
									{
										disabled: g.isSendingVerificationCode,
										onClick:
											o[2] ||
											(o[2] = (..._) =>
												u.sendVerificationCode && u.sendVerificationCode(..._)),
										class: "valid-button",
										style: { width: "30%", "margin-left": "10px" },
									},
									s(u.buttonLabel),
									9,
									fn,
								),
							]),
							g.isSendingVerificationCode
								? p(
										(h(),
										m(
											"input",
											{
												key: 0,
												"onUpdate:modelValue":
													o[3] || (o[3] = (_) => (g.verificationCode = _)),
												placeholder: d.$t(
													"components.utils.phone_valid.qing_shu_ru_6_wei_yan_zheng_ma",
												),
												class: "input-field",
											},
											null,
											8,
											vn,
										)),
										[[S, g.verificationCode]],
									)
								: k("", !0),
							g.showVerificationCodeInput
								? (h(),
									m("div", pn, [
										i(
											"button",
											{
												onClick:
													o[4] ||
													(o[4] = (..._) => u.verifyCode && u.verifyCode(..._)),
												class: "valid-button",
												style: { width: "100%" },
											},
											s(d.$t("components.utils.phone_valid.wan_cheng")),
											1,
										),
									]))
								: k("", !0),
							i(
								"p",
								Cn,
								s(
									d.$t(
										"components.utils.phone_valid.an_zhao_guo_jia_xiang_guan_fa_lv_fa_gui",
									),
								),
								1,
							),
						],
						64,
					)),
			i(
				"button",
				{
					onClick: o[5] || (o[5] = (..._) => u.logout && u.logout(..._)),
					class: "valid-button cancle_btn",
					style: { width: "100%", "margin-bottom": "10px" },
				},
				s(d.$t("components.utils.phone_valid.qu_xiao_deng_lu")),
				1,
			),
		])),
		[[l, g.loading]],
	);
}
const yn = Je(dn, [
	["render", bn],
	["__scopeId", "data-v-15140bc2"],
]);
const Re = 800,
	wn = {
		__name: "login",
		setup(d, { expose: o }) {
			o();
			const { t } = xe(),
				e = B(
					() =>
						window.location.pathname === "/console" ||
						window.location.pathname.startsWith("/console/"),
				),
				g = B(() => e.value && !v.value),
				u = r(!1),
				l = r("zh-CN"),
				_ = r(!1),
				A = r(!1),
				x = r(!1),
				ge = r(!1),
				he = r(""),
				O = r("");
			let q = "";
			const R = r(!1),
				J = r("qr"),
				v = r(!1),
				We = r(!0),
				me = r(!1),
				fe = r(0),
				V = r(""),
				T = r(""),
				C = r(0),
				I = r(!1),
				W = r(!1),
				b = r(""),
				P = r(""),
				y = r(0),
				j = r(!1),
				F = r(!1);
			let L = null,
				z = null,
				f = null,
				G = 0,
				Q = 0;
			const Fe = B(() =>
					I.value
						? t("components.login.fa_song_zhong")
						: C.value > 0
							? t("components.login.zhong_fa_yan_zheng_ma_this_countdowns", {
									countdown: C.value,
								})
							: t("components.login.fa_song_yan_zheng_ma"),
				),
				Ge = B(() =>
					j.value
						? t("components.login.fa_song_zhong")
						: y.value > 0
							? t("components.login.zhong_fa_yan_zheng_ma_this_countdowns", {
									countdown: y.value,
								})
							: t("components.login.fa_song_yan_zheng_ma"),
				),
				ve = (n) => "https://www.zitijia.com/qrCode?s=" + encodeURIComponent(n),
				pe = () =>
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent,
					),
				ne = (n) => /^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(n),
				oe = (n) => /^1\d{10}$/.test(n),
				te = (n) => Date.now() - n < Re,
				H = () => {
					L && (clearInterval(L), (L = null)), (C.value = 0);
				},
				Ce = () => {
					H(),
						(C.value = 60),
						(L = setInterval(() => {
							(C.value -= 1), C.value <= 0 && H();
						}, 1e3));
				},
				K = () => {
					z && (clearInterval(z), (z = null)), (y.value = 0);
				},
				be = () => {
					K(),
						(y.value = 60),
						(z = setInterval(() => {
							(y.value -= 1), y.value <= 0 && K();
						}, 1e3));
				},
				X = (n) =>
					n
						? typeof n.data == "string"
							? n.data
							: n.data && typeof n.data.token == "string"
								? n.data.token
								: ""
						: "",
				Y = (n, c = "wx") => {
					if (!n) {
						a(t("components.login.xi_tong_cuo_wu"));
						return;
					}
					if (
						((q = n),
						ue(q),
						f && clearInterval(f),
						(v.value = !0),
						(_.value = !1),
						(A.value = !1),
						(x.value = !1),
						e.value)
					) {
						window.location.reload();
						return;
					}
					setTimeout(() => {
						c === "wx" && le(), ae(), U();
					}, 300);
				},
				ye = () => {
					O.value &&
						je(O.value)
							.then((n) => {
								if (n.code != 0) return;
								const c = X(n);
								Y(c, "wx");
							})
							.catch((n) => {
								console.error(n), a(t("components.login.xi_tong_shi_bai"));
							});
				},
				ie = () => {
					f && (clearInterval(f), (f = null)),
						(me.value = !1),
						Pe()
							.then((n) => {
								if (n.code != 0) {
									a(n.message);
									return;
								}
								(he.value = ve(n.wxLoginUrl2)),
									(O.value = n.wxLoginToken),
									(f = setInterval(() => {
										ye();
									}, 1e3));
							})
							.catch((n) => {
								console.error(n), a(t("components.login.xi_tong_cuo_wu"));
							});
				},
				Qe = (n) => {
					if (((J.value = n), n === "qr")) {
						ie();
						return;
					}
					f && (clearInterval(f), (f = null));
				},
				He = () => {
					if (!(j.value || y.value > 0) && !te(Q)) {
						if (((Q = Date.now()), !b.value)) {
							a(t("components.login.qing_shu_ru_shou_ji_hao"));
							return;
						}
						if (!oe(b.value)) {
							a(t("components.login.shou_ji_hao_ge_shi_cuo_wu"));
							return;
						}
						(j.value = !0),
							De(b.value)
								.then((n) => {
									if (n.code != 0) {
										a(n.message || t("components.login.xi_tong_cuo_wu"));
										return;
									}
									N(t("components.login.yan_zheng_ma_yi_fa_song_shou_ji")),
										be();
								})
								.catch((n) => {
									console.error(n), a(t("components.login.xi_tong_shi_bai"));
								})
								.finally(() => {
									j.value = !1;
								});
					}
				},
				Ke = () => {
					if (!F.value) {
						if (!b.value) {
							a(t("components.login.qing_shu_ru_shou_ji_hao"));
							return;
						}
						if (!oe(b.value)) {
							a(t("components.login.shou_ji_hao_ge_shi_cuo_wu"));
							return;
						}
						if (!P.value || P.value.length !== 6) {
							a(t("components.login.qing_shu_ru_shou_ji_yan_zheng_ma"));
							return;
						}
						(F.value = !0),
							Ue(b.value, P.value)
								.then((n) => {
									if (n.code != 0) {
										a(
											n.message ||
												t("components.login.yan_zheng_ma_cuo_wu_huo_yi_guo_qi"),
										);
										return;
									}
									const c = X(n);
									Y(c, "phone");
								})
								.catch((n) => {
									console.error(n), a(t("components.login.xi_tong_shi_bai"));
								})
								.finally(() => {
									F.value = !1;
								});
					}
				},
				Xe = () => {
					if (!(I.value || C.value > 0) && !te(G)) {
						if (((G = Date.now()), !V.value)) {
							a(t("components.login.qing_shu_ru_you_xiang"));
							return;
						}
						if (!ne(V.value)) {
							a(t("components.login.you_xiang_ge_shi_cuo_wu"));
							return;
						}
						(I.value = !0),
							Te(V.value, l.value)
								.then((n) => {
									if (n.code != 0) {
										a(n.message || t("components.login.xi_tong_cuo_wu"));
										return;
									}
									N(t("components.login.yan_zheng_ma_yi_fa_song")), Ce();
								})
								.catch((n) => {
									console.error(n), a(t("components.login.xi_tong_shi_bai"));
								})
								.finally(() => {
									I.value = !1;
								});
					}
				},
				Ye = () => {
					if (!W.value) {
						if (!V.value) {
							a(t("components.login.qing_shu_ru_you_xiang"));
							return;
						}
						if (!ne(V.value)) {
							a(t("components.login.you_xiang_ge_shi_cuo_wu"));
							return;
						}
						if (!T.value || T.value.length !== 6) {
							a(t("components.login.qing_shu_ru_you_xiang_yan_zheng_ma"));
							return;
						}
						(W.value = !0),
							Ie(V.value, T.value)
								.then((n) => {
									if (n.code != 0) {
										a(
											n.message ||
												t("components.login.yan_zheng_ma_cuo_wu_huo_yi_guo_qi"),
										);
										return;
									}
									const c = X(n);
									Y(c, "email");
								})
								.catch((n) => {
									console.error(n), a(t("components.login.xi_tong_shi_bai"));
								})
								.finally(() => {
									W.value = !1;
								});
					}
				},
				D = () => {
					if (!v.value) {
						if (u.value) {
							A.value = !0;
							return;
						}
						(J.value = R.value ? "phone" : "qr"),
							(_.value = !0),
							R.value || ie();
					}
				},
				Ze = () => {
					D();
				},
				le = () => {
					Le().then((n) => {
						if (typeof n.data != "number") return;
						n.data || 0 || (x.value = !0);
					});
				},
				$e = () => {
					(x.value = !1), (v.value = !0);
				},
				en = (n) => {
					(x.value = !1),
						ee(),
						(q = ""),
						(v.value = !1),
						(b.value = n || ""),
						(J.value = "phone"),
						(_.value = !0);
				},
				ae = () => {
					let n = localStorage.getItem("model_history");
					n = n ? JSON.parse(n) : [];
					let c = new Date().getTime();
					if (
						((n = n.filter((w) => c - w.time < 24 * 60 * 60 * 1e3)),
						localStorage.setItem("model_history", JSON.stringify(n)),
						v.value && n.length > 0)
					) {
						let w = n.map((E) => E.id);
						ze(w).then((E) => {
							E.code == 0 &&
								localStorage.setItem("model_history", JSON.stringify([]));
						});
					}
				},
				nn = () => {
					ee(), ce();
					let n = window.location.href;
					if (n.indexOf("ztj_token") !== -1) {
						let w = n.split("?"),
							E = w[1].split("&"),
							re = [];
						E.forEach((ke) => {
							ke.indexOf("ztj_token") === -1 && re.push(ke);
						});
						let on = w[0] + (re.length > 0 ? "?" + re.join("&") : "");
						window.location.href = on;
						return;
					} else window.location.reload();
				},
				U = () => {
					Se().then((n) => {
						if (n.code != 0) {
							n.data && n.data.is_block === !0 && (ge.value = !0);
							return;
						}
						let c = n.data || {};
						c.uid && Be(c.uid), e.value || se();
					});
				},
				se = () => {
					e.value ||
						qe().then((n) => {
							fe.value = n.data;
						});
				};
			Z(
				() => _.value,
				(n) => {
					n || (clearInterval(f), (P.value = ""));
				},
			),
				Z(
					() => A.value,
					(n) => {
						n || (T.value = "");
					},
				),
				Z(
					() => x.value,
					(n) => {},
				),
				Ne(() => {
					(l.value = Me()),
						(u.value = l.value.toLowerCase() === "zh-tw"),
						(R.value = pe());
					const n = document.getElementById("loginSkeleton");
					n && (n.style.display = "none"), de() && ((v.value = !0), U());
					let c = new URLSearchParams(window.location.search);
					if (c.has("ztj_token")) {
						let w = c.get("ztj_token");
						ue(w), (v.value = !0), U();
					}
					v.value && (u.value || le(), Ee() ? e.value || se() : U()),
						setTimeout(() => {
							ae();
						}, 0),
						window.addEventListener("ztj:require-login", D),
						e.value && !de() && D();
				}),
				Ae(() => {
					window.removeEventListener("ztj:require-login", D),
						clearInterval(f),
						H(),
						K();
				});
			const we = {
				t,
				isConsolePage: e,
				isConsoleLoginRequired: g,
				isTraditionalLocale: u,
				currentLocale: l,
				dialog: _,
				emailDialog: A,
				phoneDialog: x,
				banDialog: ge,
				url: he,
				accessToken: O,
				get token() {
					return q;
				},
				set token(n) {
					q = n;
				},
				isMobileDevice: R,
				activeLoginTab: J,
				isLogin: v,
				showDiscountMsg: We,
				qrLoaded: me,
				unreadCount: fe,
				email: V,
				emailCode: T,
				emailCountdown: C,
				isSendingEmailCode: I,
				isVerifyingEmailCode: W,
				phone: b,
				phoneCode: P,
				phoneCountdown: y,
				isSendingPhoneCode: j,
				isVerifyingPhoneCode: F,
				get emailTimer() {
					return L;
				},
				set emailTimer(n) {
					L = n;
				},
				get phoneTimer() {
					return z;
				},
				set phoneTimer(n) {
					z = n;
				},
				get timer() {
					return f;
				},
				set timer(n) {
					f = n;
				},
				get lastEmailCodeSendAt() {
					return G;
				},
				set lastEmailCodeSendAt(n) {
					G = n;
				},
				get lastPhoneCodeSendAt() {
					return Q;
				},
				set lastPhoneCodeSendAt(n) {
					Q = n;
				},
				sendClickDebounceMs: Re,
				emailSendBtnText: Fe,
				phoneSendBtnText: Ge,
				getQr: ve,
				checkIsMobile: pe,
				isEmail: ne,
				isPhone: oe,
				isSendClickTooSoon: te,
				clearEmailCountdown: H,
				startEmailCountdown: Ce,
				clearPhoneCountdown: K,
				startPhoneCountdown: be,
				extractLoginToken: X,
				handleLoginSuccess: Y,
				checkLogin: ye,
				initLogin: ie,
				selectLoginTab: Qe,
				sendPhoneVerificationCode: He,
				verifyPhoneLogin: Ke,
				sendEmailVerificationCode: Xe,
				verifyEmailLogin: Ye,
				openLoginDialog: D,
				loginClick: Ze,
				openDialogWhenPhoneIsNotValid: le,
				onPhoneValidComplete: $e,
				onPhoneConflict: en,
				processModelTransfer: ae,
				logout: nn,
				processUser: U,
				loadUnreadCount: se,
				computed: B,
				onBeforeUnmount: Ae,
				onMounted: Ne,
				ref: r,
				watch: Z,
				get useI18n() {
					return xe;
				},
				get emailLoginCodeSend() {
					return Te;
				},
				get emailLoginCodeVerify() {
					return Ie;
				},
				get getUnreadNotificationCount() {
					return qe;
				},
				get getUserInfo() {
					return Se;
				},
				get login() {
					return Pe;
				},
				get login_check() {
					return je;
				},
				get modelTransfer() {
					return ze;
				},
				get PhoneValid() {
					return Le;
				},
				get phoneLoginCodeSend() {
					return De;
				},
				get phoneLoginCodeVerify() {
					return Ue;
				},
				get clearAuthToken() {
					return ee;
				},
				get clearUserId() {
					return ce;
				},
				get getAuthToken() {
					return de;
				},
				get getUserId() {
					return Ee;
				},
				get setAuthToken() {
					return ue;
				},
				get setUserId() {
					return Be;
				},
				get getClientLocale() {
					return Me;
				},
				get showError() {
					return a;
				},
				get showSuccess() {
					return N;
				},
				MyDialog: an,
				PhoneValidComponent: yn,
			};
			return (
				Object.defineProperty(we, "__isScriptSetup", {
					enumerable: !1,
					value: !0,
				}),
				we
			);
		},
	},
	kn = { class: "login-container" },
	Vn = ["title"],
	xn = { class: "benefit-tag" },
	Ln = ["title"],
	zn = { class: "benefit-tag" },
	Sn = ["title"],
	qn = { key: 0, class: "unread-badge" },
	Tn = { class: "dialog-content login-dialog-content" },
	In = { key: 0, class: "login-tabs" },
	Pn = { class: "login-methods" },
	jn = { key: 0, class: "qr-login-panel" },
	Dn = { class: "qr-wrapper" },
	Un = ["src"],
	En = { class: "qr-placeholder" },
	Bn = { key: 1, class: "phone-login-panel" },
	Mn = ["placeholder"],
	Nn = { class: "email-code-row" },
	An = ["placeholder"],
	On = ["disabled"],
	Rn = ["disabled"],
	Jn = { key: 1, class: "discount-msg discount-msg-no-margin" },
	Wn = { class: "dialog-content email-dialog-content" },
	Fn = { class: "discount-msg discount-msg-with-gap" },
	Gn = ["placeholder"],
	Qn = { class: "email-code-row" },
	Hn = ["placeholder"],
	Kn = ["disabled"],
	Xn = ["disabled"],
	Yn = { class: "dialog-content ban-dialog-content" },
	Zn = { class: "ban-title" };
function $n(d, o, t, e, g, u) {
	return (
		h(),
		m("div", kn, [
			e.isTraditionalLocale && !e.isLogin
				? (h(),
					m(
						"a",
						{
							key: 0,
							class: "loginBtn login-btn-rel",
							id: "globalLoginBtn",
							onClick: e.loginClick,
							title: e.t("components.login.email_deng_lu"),
						},
						[
							i("span", xn, s(e.t("components.login.fu_li")), 1),
							_e(" " + s(e.t("components.login.email_deng_lu")), 1),
						],
						8,
						Vn,
					))
				: !e.isTraditionalLocale && !e.isLogin
					? (h(),
						m(
							"a",
							{
								key: 1,
								class: "loginBtn login-btn-rel",
								id: "globalLoginBtn",
								onClick: e.loginClick,
								title: e.t("components.login.deng_lu_zhu_ce"),
							},
							[
								i("span", zn, s(e.t("components.login.fu_li")), 1),
								_e(" " + s(e.t("components.login.deng_lu_zhu_ce")), 1),
							],
							8,
							Ln,
						))
					: e.isLogin
						? (h(),
							m(
								"a",
								{
									key: 2,
									class: "loginBtn",
									href: "/console",
									title: e.t("components.login.kong_zhi_mian_ban"),
								},
								[
									_e(s(e.t("components.login.kong_zhi_mian_ban")) + " ", 1),
									!e.isConsolePage && e.unreadCount > 0
										? (h(), m("span", qn, s(e.unreadCount), 1))
										: k("", !0),
								],
								8,
								Sn,
							))
						: k("", !0),
			M(
				e.MyDialog,
				{
					modelValue: e.dialog,
					"onUpdate:modelValue": o[5] || (o[5] = (l) => (e.dialog = l)),
					disableCloseBtn: e.isConsoleLoginRequired,
					maxWidth: 480,
				},
				{
					default: $(() => [
						i("div", Tn, [
							i("h3", null, s(e.t("components.login.yong_hu_deng_lu")), 1),
							e.isMobileDevice
								? k("", !0)
								: (h(),
									m("div", In, [
										i(
											"button",
											{
												type: "button",
												class: Oe([
													"login-tab-btn",
													{ active: e.activeLoginTab === "qr" },
												]),
												onClick: o[0] || (o[0] = (l) => e.selectLoginTab("qr")),
											},
											s(e.t("components.login.sao_ma_deng_lu")),
											3,
										),
										i(
											"button",
											{
												type: "button",
												class: Oe([
													"login-tab-btn",
													{ active: e.activeLoginTab === "phone" },
												]),
												onClick:
													o[1] || (o[1] = (l) => e.selectLoginTab("phone")),
											},
											s(e.t("components.login.shou_ji_hao_deng_lu")),
											3,
										),
									])),
							i("div", Pn, [
								!e.isMobileDevice && e.activeLoginTab === "qr"
									? (h(),
										m("div", jn, [
											i("div", Dn, [
												p(
													i(
														"img",
														{
															class: "qr-image",
															src: e.url,
															onLoad: o[2] || (o[2] = (l) => (e.qrLoaded = !0)),
														},
														null,
														40,
														Un,
													),
													[[Ve, e.qrLoaded]],
												),
												p(i("div", En, null, 512), [[Ve, !e.qrLoaded]]),
											]),
											i(
												"p",
												null,
												s(
													e.t(
														"components.login.wei_xin_sao_miao_er_wei_ma_guan",
													),
												),
												1,
											),
										]))
									: k("", !0),
								e.isMobileDevice || e.activeLoginTab === "phone"
									? (h(),
										m("div", Bn, [
											p(
												i(
													"input",
													{
														"onUpdate:modelValue":
															o[3] || (o[3] = (l) => (e.phone = l)),
														type: "tel",
														inputmode: "numeric",
														maxlength: "11",
														placeholder: e.t(
															"components.login.qing_shu_ru_shou_ji_hao",
														),
														class: "email-input",
													},
													null,
													8,
													Mn,
												),
												[[S, e.phone, void 0, { trim: !0 }]],
											),
											i("div", Nn, [
												p(
													i(
														"input",
														{
															"onUpdate:modelValue":
																o[4] || (o[4] = (l) => (e.phoneCode = l)),
															type: "text",
															inputmode: "numeric",
															maxlength: "6",
															placeholder: e.t(
																"components.login.qing_shu_ru_shou_ji_yan_zheng_ma",
															),
															class: "email-code-input",
														},
														null,
														8,
														An,
													),
													[[S, e.phoneCode, void 0, { trim: !0 }]],
												),
												i(
													"button",
													{
														onClick: e.sendPhoneVerificationCode,
														disabled:
															e.isSendingPhoneCode || e.phoneCountdown > 0,
														class: "email-send-btn",
													},
													s(e.phoneSendBtnText),
													9,
													On,
												),
											]),
											i(
												"button",
												{
													onClick: e.verifyPhoneLogin,
													disabled: e.isVerifyingPhoneCode,
													class: "email-login-btn",
												},
												s(e.t("components.login.yan_zheng_ma_deng_lu")),
												9,
												Rn,
											),
										]))
									: k("", !0),
							]),
							e.showDiscountMsg
								? (h(),
									m(
										"p",
										Jn,
										s(
											e.t(
												"components.login.xin_yong_hu_shou_ci_zhu_ce_zeng_song_you_hui_quan",
											),
										),
										1,
									))
								: k("", !0),
						]),
					]),
					_: 1,
				},
				8,
				["modelValue", "disableCloseBtn"],
			),
			M(
				e.MyDialog,
				{
					modelValue: e.emailDialog,
					"onUpdate:modelValue": o[8] || (o[8] = (l) => (e.emailDialog = l)),
					disableCloseBtn: e.isConsoleLoginRequired,
				},
				{
					default: $(() => [
						i("div", Wn, [
							i("h3", null, s(e.t("components.login.email_deng_lu")), 1),
							i(
								"p",
								Fn,
								s(
									e.t(
										"components.login.xin_yong_hu_shou_ci_zhu_ce_zeng_song_you_hui_quan",
									),
								),
								1,
							),
							p(
								i(
									"input",
									{
										"onUpdate:modelValue":
											o[6] || (o[6] = (l) => (e.email = l)),
										type: "email",
										placeholder: e.t("components.login.qing_shu_ru_you_xiang"),
										class: "email-input",
									},
									null,
									8,
									Gn,
								),
								[[S, e.email, void 0, { trim: !0 }]],
							),
							i("div", Qn, [
								p(
									i(
										"input",
										{
											"onUpdate:modelValue":
												o[7] || (o[7] = (l) => (e.emailCode = l)),
											type: "text",
											inputmode: "numeric",
											maxlength: "6",
											placeholder: e.t(
												"components.login.qing_shu_ru_you_xiang_yan_zheng_ma",
											),
											class: "email-code-input",
										},
										null,
										8,
										Hn,
									),
									[[S, e.emailCode, void 0, { trim: !0 }]],
								),
								i(
									"button",
									{
										onClick: e.sendEmailVerificationCode,
										disabled: e.isSendingEmailCode || e.emailCountdown > 0,
										class: "email-send-btn",
									},
									s(e.emailSendBtnText),
									9,
									Kn,
								),
							]),
							i(
								"button",
								{
									onClick: e.verifyEmailLogin,
									disabled: e.isVerifyingEmailCode,
									class: "email-login-btn",
								},
								s(e.t("components.login.yan_zheng_ma_deng_lu")),
								9,
								Xn,
							),
						]),
					]),
					_: 1,
				},
				8,
				["modelValue", "disableCloseBtn"],
			),
			M(
				e.MyDialog,
				{
					modelValue: e.phoneDialog,
					"onUpdate:modelValue": o[9] || (o[9] = (l) => (e.phoneDialog = l)),
					disableCloseBtn: !1,
				},
				{
					default: $(() => [
						M(e.PhoneValidComponent, {
							onComplete: e.onPhoneValidComplete,
							onConflict: e.onPhoneConflict,
						}),
					]),
					_: 1,
				},
				8,
				["modelValue"],
			),
			M(
				e.MyDialog,
				{
					modelValue: e.banDialog,
					"onUpdate:modelValue": o[10] || (o[10] = (l) => (e.banDialog = l)),
					disableCloseBtn: !0,
				},
				{
					default: $(() => [
						i("div", Yn, [
							i("h3", Zn, s(e.t("components.login.yong_hu_bei_feng_jin")), 1),
							i(
								"p",
								null,
								s(e.t("components.login.nin_de_zhang_hao_yi_bei_feng_jin")),
								1,
							),
							i(
								"button",
								{ onClick: e.logout, class: "ban-logout-btn" },
								s(e.t("components.login.tui_chu_deng_lu")),
								1,
							),
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
const _o = Je(wn, [
	["render", $n],
	["__scopeId", "data-v-65b4847b"],
]);
export { _o as default };
