var de = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var Ee = de((Fe, L) => {
	var pe = Object.defineProperty,
		c = (e, n) => pe(e, "name", { value: n, configurable: !0 }),
		I = ((e) =>
			typeof require < "u"
				? require
				: typeof Proxy < "u"
					? new Proxy(e, {
							get: (n, r) => (typeof require < "u" ? require : n)[r],
						})
					: e)(function (e) {
			if (typeof require < "u") return require.apply(this, arguments);
			throw new Error('Dynamic require of "' + e + '" is not supported');
		});
	function C(e) {
		return !isNaN(parseFloat(e)) && isFinite(e);
	}
	c(C, "_isNumber");
	function u(e) {
		return e.charAt(0).toUpperCase() + e.substring(1);
	}
	c(u, "_capitalize");
	function k(e) {
		return function () {
			return this[e];
		};
	}
	c(k, "_getter");
	var N = ["isConstructor", "isEval", "isNative", "isToplevel"],
		E = ["columnNumber", "lineNumber"],
		S = ["fileName", "functionName", "source"],
		me = ["args"],
		fe = ["evalOrigin"],
		F = N.concat(E, S, me, fe);
	function _(e) {
		if (e)
			for (var n = 0; n < F.length; n++)
				e[F[n]] !== void 0 && this["set" + u(F[n])](e[F[n]]);
	}
	c(_, "StackFrame");
	_.prototype = {
		getArgs: function () {
			return this.args;
		},
		setArgs: function (e) {
			if (Object.prototype.toString.call(e) !== "[object Array]")
				throw new TypeError("Args must be an Array");
			this.args = e;
		},
		getEvalOrigin: function () {
			return this.evalOrigin;
		},
		setEvalOrigin: function (e) {
			if (e instanceof _) this.evalOrigin = e;
			else if (e instanceof Object) this.evalOrigin = new _(e);
			else throw new TypeError("Eval Origin must be an Object or StackFrame");
		},
		toString: function () {
			var e = this.getFileName() || "",
				n = this.getLineNumber() || "",
				r = this.getColumnNumber() || "",
				o = this.getFunctionName() || "";
			return this.getIsEval()
				? e
					? "[eval] (" + e + ":" + n + ":" + r + ")"
					: "[eval]:" + n + ":" + r
				: o
					? o + " (" + e + ":" + n + ":" + r + ")"
					: e + ":" + n + ":" + r;
		},
	};
	_.fromString = c(function (e) {
		var n = e.indexOf("("),
			r = e.lastIndexOf(")"),
			o = e.substring(0, n),
			i = e.substring(n + 1, r).split(","),
			t = e.substring(r + 1);
		if (t.indexOf("@") === 0)
			var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t, ""),
				s = a[1],
				l = a[2],
				d = a[3];
		return new _({
			functionName: o,
			args: i || void 0,
			fileName: s,
			lineNumber: l || void 0,
			columnNumber: d || void 0,
		});
	}, "StackFrame$$fromString");
	for (g = 0; g < N.length; g++)
		(_.prototype["get" + u(N[g])] = k(N[g])),
			(_.prototype["set" + u(N[g])] = (function (e) {
				return function (n) {
					this[e] = !!n;
				};
			})(N[g]));
	var g;
	for (v = 0; v < E.length; v++)
		(_.prototype["get" + u(E[v])] = k(E[v])),
			(_.prototype["set" + u(E[v])] = (function (e) {
				return function (n) {
					if (!C(n)) throw new TypeError(e + " must be a Number");
					this[e] = Number(n);
				};
			})(E[v]));
	var v;
	for (b = 0; b < S.length; b++)
		(_.prototype["get" + u(S[b])] = k(S[b])),
			(_.prototype["set" + u(S[b])] = (function (e) {
				return function (n) {
					this[e] = String(n);
				};
			})(S[b]));
	var b,
		D = _;
	function $() {
		var e = /^\s*at .*(\S+:\d+|\(native\))/m,
			n = /^(eval@)?(\[native code])?$/;
		return {
			parse: c(function (r) {
				if (r.stack && r.stack.match(e)) return this.parseV8OrIE(r);
				if (r.stack) return this.parseFFOrSafari(r);
				throw new Error("Cannot parse given Error object");
			}, "ErrorStackParser$$parse"),
			extractLocation: c(function (r) {
				if (r.indexOf(":") === -1) return [r];
				var o = /(.+?)(?::(\d+))?(?::(\d+))?$/,
					i = o.exec(r.replace(/[()]/g, ""));
				return [i[1], i[2] || void 0, i[3] || void 0];
			}, "ErrorStackParser$$extractLocation"),
			parseV8OrIE: c(function (r) {
				var o = r.stack
					.split(`
`)
					.filter(function (i) {
						return !!i.match(e);
					}, this);
				return o.map(function (i) {
					i.indexOf("(eval ") > -1 &&
						(i = i
							.replace(/eval code/g, "eval")
							.replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
					var t = i
							.replace(/^\s+/, "")
							.replace(/\(eval code/g, "(")
							.replace(/^.*?\s+/, ""),
						a = t.match(/ (\(.+\)$)/);
					t = a ? t.replace(a[0], "") : t;
					var s = this.extractLocation(a ? a[1] : t),
						l = (a && t) || void 0,
						d = ["eval", "<anonymous>"].indexOf(s[0]) > -1 ? void 0 : s[0];
					return new D({
						functionName: l,
						fileName: d,
						lineNumber: s[1],
						columnNumber: s[2],
						source: i,
					});
				}, this);
			}, "ErrorStackParser$$parseV8OrIE"),
			parseFFOrSafari: c(function (r) {
				var o = r.stack
					.split(`
`)
					.filter(function (i) {
						return !i.match(n);
					}, this);
				return o.map(function (i) {
					if (
						(i.indexOf(" > eval") > -1 &&
							(i = i.replace(
								/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
								":$1",
							)),
						i.indexOf("@") === -1 && i.indexOf(":") === -1)
					)
						return new D({ functionName: i });
					var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
						a = i.match(t),
						s = a && a[1] ? a[1] : void 0,
						l = this.extractLocation(i.replace(t, ""));
					return new D({
						functionName: s,
						fileName: l[0],
						lineNumber: l[1],
						columnNumber: l[2],
						source: i,
					});
				}, this);
			}, "ErrorStackParser$$parseFFOrSafari"),
		};
	}
	c($, "ErrorStackParser");
	var _e = new $(),
		he = _e,
		h =
			typeof process == "object" &&
			typeof process.versions == "object" &&
			typeof process.versions.node == "string" &&
			!process.browser,
		H =
			h &&
			typeof L < "u" &&
			typeof L.exports < "u" &&
			typeof I < "u" &&
			typeof __dirname < "u",
		ue = h && !H,
		ye = typeof Deno < "u",
		G = !h && !ye,
		ge =
			G &&
			typeof window == "object" &&
			typeof document == "object" &&
			typeof document.createElement == "function" &&
			typeof sessionStorage == "object" &&
			typeof importScripts != "function",
		ve = G && typeof importScripts == "function" && typeof self == "object";
	typeof navigator == "object" &&
		typeof navigator.userAgent == "string" &&
		navigator.userAgent.indexOf("Chrome") == -1 &&
		navigator.userAgent.indexOf("Safari") > -1;
	var W, j, q, U, R;
	async function M() {
		if (
			!h ||
			((W = (await import("./__vite-browser-external-dfc062b5.js")).default),
			(U = await import("./__vite-browser-external-dfc062b5.js")),
			(R = await import("./__vite-browser-external-dfc062b5.js")),
			(q = (await import("./__vite-browser-external-dfc062b5.js")).default),
			(j = await import("./__vite-browser-external-dfc062b5.js")),
			(z = j.sep),
			typeof I < "u")
		)
			return;
		let e = U,
			n = await import("./__vite-browser-external-dfc062b5.js"),
			r = await import("./__vite-browser-external-dfc062b5.js"),
			o = await import("./__vite-browser-external-dfc062b5.js"),
			i = { fs: e, crypto: n, ws: r, child_process: o };
		globalThis.require = function (t) {
			return i[t];
		};
	}
	c(M, "initNodeModules");
	function B(e, n) {
		return j.resolve(n || ".", e);
	}
	c(B, "node_resolvePath");
	function V(e, n) {
		return n === void 0 && (n = location), new URL(e, n).toString();
	}
	c(V, "browser_resolvePath");
	var P;
	h ? (P = B) : (P = V);
	var z;
	h || (z = "/");
	function Y(e, n) {
		return (
			e.startsWith("file://") && (e = e.slice(7)),
			e.includes("://")
				? { response: fetch(e) }
				: {
						binary: R.readFile(e).then(
							(r) => new Uint8Array(r.buffer, r.byteOffset, r.byteLength),
						),
					}
		);
	}
	c(Y, "node_getBinaryResponse");
	function J(e, n) {
		let r = new URL(e, location);
		return { response: fetch(r, n ? { integrity: n } : {}) };
	}
	c(J, "browser_getBinaryResponse");
	var T;
	h ? (T = Y) : (T = J);
	async function Q(e, n) {
		let { response: r, binary: o } = T(e, n);
		if (o) return o;
		let i = await r;
		if (!i.ok) throw new Error(`Failed to load '${e}': request failed.`);
		return new Uint8Array(await i.arrayBuffer());
	}
	c(Q, "loadBinaryFile");
	var O;
	if (ge) O = c(async (e) => await import(e), "loadScript");
	else if (ve)
		O = c(async (e) => {
			try {
				globalThis.importScripts(e);
			} catch (n) {
				if (n instanceof TypeError) await import(e);
				else throw n;
			}
		}, "loadScript");
	else if (h) O = X;
	else throw new Error("Cannot determine runtime environment");
	async function X(e) {
		e.startsWith("file://") && (e = e.slice(7)),
			e.includes("://")
				? q.runInThisContext(await (await fetch(e)).text())
				: await import(W.pathToFileURL(e).href);
	}
	c(X, "nodeLoadScript");
	async function Z(e) {
		if (h) {
			await M();
			let n = await R.readFile(e, { encoding: "utf8" });
			return JSON.parse(n);
		} else return await (await fetch(e)).json();
	}
	c(Z, "loadLockFile");
	async function K() {
		if (H) return __dirname;
		let e;
		try {
			throw new Error();
		} catch (o) {
			e = o;
		}
		let n = he.parse(e)[0].fileName;
		if ((h && !n.startsWith("file://") && (n = `file://${n}`), ue)) {
			let o = await import("./__vite-browser-external-dfc062b5.js");
			return (
				await import("./__vite-browser-external-dfc062b5.js")
			).fileURLToPath(o.dirname(n));
		}
		let r = n.lastIndexOf(z);
		if (r === -1)
			throw new Error(
				"Could not extract indexURL path from pyodide module location",
			);
		return n.slice(0, r);
	}
	c(K, "calculateDirname");
	function ee(e) {
		let n = e.FS,
			r = e.FS.filesystems.MEMFS,
			o = e.PATH,
			i = {
				DIR_MODE: 16895,
				FILE_MODE: 33279,
				mount: function (t) {
					if (!t.opts.fileSystemHandle)
						throw new Error("opts.fileSystemHandle is required");
					return r.mount.apply(null, arguments);
				},
				syncfs: async (t, a, s) => {
					try {
						let l = i.getLocalSet(t),
							d = await i.getRemoteSet(t),
							p = a ? d : l,
							f = a ? l : d;
						await i.reconcile(t, p, f), s(null);
					} catch (l) {
						s(l);
					}
				},
				getLocalSet: (t) => {
					let a = Object.create(null);
					function s(p) {
						return p !== "." && p !== "..";
					}
					c(s, "isRealDir");
					function l(p) {
						return (f) => o.join2(p, f);
					}
					c(l, "toAbsolute");
					let d = n.readdir(t.mountpoint).filter(s).map(l(t.mountpoint));
					for (; d.length; ) {
						let p = d.pop(),
							f = n.stat(p);
						n.isDir(f.mode) &&
							d.push.apply(d, n.readdir(p).filter(s).map(l(p))),
							(a[p] = { timestamp: f.mtime, mode: f.mode });
					}
					return { type: "local", entries: a };
				},
				getRemoteSet: async (t) => {
					let a = Object.create(null),
						s = await be(t.opts.fileSystemHandle);
					for (let [l, d] of s)
						l !== "." &&
							(a[o.join2(t.mountpoint, l)] = {
								timestamp:
									d.kind === "file"
										? (await d.getFile()).lastModifiedDate
										: new Date(),
								mode: d.kind === "file" ? i.FILE_MODE : i.DIR_MODE,
							});
					return { type: "remote", entries: a, handles: s };
				},
				loadLocalEntry: (t) => {
					let a = n.lookupPath(t).node,
						s = n.stat(t);
					if (n.isDir(s.mode)) return { timestamp: s.mtime, mode: s.mode };
					if (n.isFile(s.mode))
						return (
							(a.contents = r.getFileDataAsTypedArray(a)),
							{ timestamp: s.mtime, mode: s.mode, contents: a.contents }
						);
					throw new Error("node type not supported");
				},
				storeLocalEntry: (t, a) => {
					if (n.isDir(a.mode)) n.mkdirTree(t, a.mode);
					else if (n.isFile(a.mode)) n.writeFile(t, a.contents, { canOwn: !0 });
					else throw new Error("node type not supported");
					n.chmod(t, a.mode), n.utime(t, a.timestamp, a.timestamp);
				},
				removeLocalEntry: (t) => {
					var a = n.stat(t);
					n.isDir(a.mode) ? n.rmdir(t) : n.isFile(a.mode) && n.unlink(t);
				},
				loadRemoteEntry: async (t) => {
					if (t.kind === "file") {
						let a = await t.getFile();
						return {
							contents: new Uint8Array(await a.arrayBuffer()),
							mode: i.FILE_MODE,
							timestamp: a.lastModifiedDate,
						};
					} else {
						if (t.kind === "directory")
							return { mode: i.DIR_MODE, timestamp: new Date() };
						throw new Error("unknown kind: " + t.kind);
					}
				},
				storeRemoteEntry: async (t, a, s) => {
					let l = t.get(o.dirname(a)),
						d = n.isFile(s.mode)
							? await l.getFileHandle(o.basename(a), { create: !0 })
							: await l.getDirectoryHandle(o.basename(a), { create: !0 });
					if (d.kind === "file") {
						let p = await d.createWritable();
						await p.write(s.contents), await p.close();
					}
					t.set(a, d);
				},
				removeRemoteEntry: async (t, a) => {
					await t.get(o.dirname(a)).removeEntry(o.basename(a)), t.delete(a);
				},
				reconcile: async (t, a, s) => {
					let l = 0,
						d = [];
					Object.keys(a.entries).forEach(function (m) {
						let y = a.entries[m],
							x = s.entries[m];
						(!x ||
							(n.isFile(y.mode) &&
								y.timestamp.getTime() > x.timestamp.getTime())) &&
							(d.push(m), l++);
					}),
						d.sort();
					let p = [];
					if (
						(Object.keys(s.entries).forEach(function (m) {
							a.entries[m] || (p.push(m), l++);
						}),
						p.sort().reverse(),
						!l)
					)
						return;
					let f = a.type === "remote" ? a.handles : s.handles;
					for (let m of d) {
						let y = o.normalize(m.replace(t.mountpoint, "/")).substring(1);
						if (s.type === "local") {
							let x = f.get(y),
								ce = await i.loadRemoteEntry(x);
							i.storeLocalEntry(m, ce);
						} else {
							let x = i.loadLocalEntry(m);
							await i.storeRemoteEntry(f, y, x);
						}
					}
					for (let m of p)
						if (s.type === "local") i.removeLocalEntry(m);
						else {
							let y = o.normalize(m.replace(t.mountpoint, "/")).substring(1);
							await i.removeRemoteEntry(f, y);
						}
				},
			};
		e.FS.filesystems.NATIVEFS_ASYNC = i;
	}
	c(ee, "initializeNativeFS");
	var be = c(async (e) => {
		let n = [];
		async function r(i) {
			for await (let t of i.values())
				n.push(t), t.kind === "directory" && (await r(t));
		}
		c(r, "collect"), await r(e);
		let o = new Map();
		o.set(".", e);
		for (let i of n) {
			let t = (await e.resolve(i)).join("/");
			o.set(t, i);
		}
		return o;
	}, "getFsHandles");
	function ne(e) {
		let n = {
			noImageDecoding: !0,
			noAudioDecoding: !0,
			noWasmDecoding: !1,
			preRun: oe(e),
			quit(r, o) {
				throw ((n.exited = { status: r, toThrow: o }), o);
			},
			print: e.stdout,
			printErr: e.stderr,
			arguments: e.args,
			API: { config: e },
			locateFile: (r) => e.indexURL + r,
			instantiateWasm: se(e.indexURL),
		};
		return n;
	}
	c(ne, "createSettings");
	function te(e) {
		return function (n) {
			let r = "/";
			try {
				n.FS.mkdirTree(e);
			} catch (o) {
				console.error(`Error occurred while making a home directory '${e}':`),
					console.error(o),
					console.error(`Using '${r}' for a home directory instead`),
					(e = r);
			}
			n.FS.chdir(e);
		};
	}
	c(te, "createHomeDirectory");
	function re(e) {
		return function (n) {
			Object.assign(n.ENV, e);
		};
	}
	c(re, "setEnvironment");
	function ie(e) {
		return (n) => {
			for (let r of e)
				n.FS.mkdirTree(r), n.FS.mount(n.FS.filesystems.NODEFS, { root: r }, r);
		};
	}
	c(ie, "mountLocalDirectories");
	function ae(e) {
		let n = Q(e);
		return (r) => {
			let o = r._py_version_major(),
				i = r._py_version_minor();
			r.FS.mkdirTree("/lib"),
				r.FS.mkdirTree(`/lib/python${o}.${i}/site-packages`),
				r.addRunDependency("install-stdlib"),
				n
					.then((t) => {
						r.FS.writeFile(`/lib/python${o}${i}.zip`, t);
					})
					.catch((t) => {
						console.error(
							"Error occurred while installing the standard library:",
						),
							console.error(t);
					})
					.finally(() => {
						r.removeRunDependency("install-stdlib");
					});
		};
	}
	c(ae, "installStdlib");
	function oe(e) {
		let n;
		return (
			e.stdLibURL != null
				? (n = e.stdLibURL)
				: (n = e.indexURL + "python_stdlib.zip"),
			[ae(n), te(e.env.HOME), re(e.env), ie(e._node_mounts), ee]
		);
	}
	c(oe, "getFileSystemInitializationFuncs");
	function se(e) {
		let { binary: n, response: r } = T(e + "pyodide.asm.wasm");
		return function (o, i) {
			return (
				(async function () {
					try {
						let t;
						r
							? (t = await WebAssembly.instantiateStreaming(r, o))
							: (t = await WebAssembly.instantiate(await n, o));
						let { instance: a, module: s } = t;
						typeof WasmOffsetConverter < "u" &&
							(wasmOffsetConverter = new WasmOffsetConverter(wasmBinary, s)),
							i(a, s);
					} catch (t) {
						console.warn("wasm instantiation failed!"), console.warn(t);
					}
				})(),
				{}
			);
		};
	}
	c(se, "getInstantiateWasmFunc");
	var A = "0.26.3";
	async function le(e = {}) {
		var n, r;
		await M();
		let o = e.indexURL || (await K());
		(o = P(o)), o.endsWith("/") || (o += "/"), (e.indexURL = o);
		let i = {
				fullStdLib: !1,
				jsglobals: globalThis,
				stdin: globalThis.prompt ? globalThis.prompt : void 0,
				lockFileURL: o + "pyodide-lock.json",
				args: [],
				_node_mounts: [],
				env: {},
				packageCacheDir: o,
				packages: [],
				enableRunUntilComplete: !1,
				checkAPIVersion: !0,
			},
			t = Object.assign(i, e);
		(n = t.env).HOME ?? (n.HOME = "/home/pyodide"),
			(r = t.env).PYTHONINSPECT ?? (r.PYTHONINSPECT = "1");
		let a = ne(t),
			s = a.API;
		if (
			((s.lockFilePromise = Z(t.lockFileURL)),
			typeof _createPyodideModule != "function")
		) {
			let m = `${t.indexURL}pyodide.asm.js`;
			await O(m);
		}
		let l;
		if (e._loadSnapshot) {
			let m = await e._loadSnapshot;
			ArrayBuffer.isView(m) ? (l = m) : (l = new Uint8Array(m)),
				(a.noInitialRun = !0),
				(a.INITIAL_MEMORY = l.length);
		}
		let d = await _createPyodideModule(a);
		if (a.exited) throw a.exited.toThrow;
		if (
			(e.pyproxyToStringRepr && s.setPyProxyToStringMethod(!0),
			s.version !== A && t.checkAPIVersion)
		)
			throw new Error(
				`Pyodide version does not match: '${A}' <==> '${s.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`,
			);
		d.locateFile = (m) => {
			throw new Error("Didn't expect to load any more file_packager files!");
		};
		let p;
		l && (p = s.restoreSnapshot(l));
		let f = s.finalizeBootstrap(p);
		return (
			s.sys.path.insert(0, s.config.env.HOME),
			f.version.includes("dev") ||
				s.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${f.version}/full/`),
			s._pyodide.set_excepthook(),
			await s.packageIndexReady,
			s.initializeStreams(t.stdin, t.stdout, t.stderr),
			f
		);
	}
	c(le, "loadPyodide");
	var xe = `from fontTools import subset
from fontTools.ttLib import TTFont, newTable
from fontTools.ttLib.tables._n_a_m_e import NameRecord
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.svgLib.path import parse_path
from collections import OrderedDict
import json
from pathlib import Path

def convert_cff_to_glyf(font):
    if 'glyf' in font or 'CFF ' not in font:
        return False

    font.sfntVersion = "\\x00\\x01\\x00\\x00"

    glyph_order = font.getGlyphOrder()
    glyph_set = font.getGlyphSet()

    glyf_table = newTable('glyf')
    glyf_table.glyphs = {}
    glyf_table.glyphOrder = glyph_order

    for glyph_name in glyph_order:
        tt_pen = TTGlyphPen(None)
        cu2qu_pen = Cu2QuPen(tt_pen, max_err=1.0, reverse_direction=False)
        try:
            glyph_set[glyph_name].draw(cu2qu_pen)
            glyph = tt_pen.glyph()
        except Exception:
            glyph = TTGlyphPen(None).glyph()
        glyf_table.glyphs[glyph_name] = glyph

    font['glyf'] = glyf_table
    if 'loca' not in font:
        font['loca'] = newTable('loca')

    try:
        maxp = newTable('maxp')
        maxp.tableVersion = 0x00010000
        font['maxp'] = maxp
        try:
            maxp.recalc(font)
        except Exception:
            maxp.numGlyphs = len(glyph_order)

        defaults = {
            'maxPoints': 0,
            'maxContours': 0,
            'maxCompositePoints': 0,
            'maxCompositeContours': 0,
            'maxZones': 2,
            'maxTwilightPoints': 0,
            'maxStorage': 0,
            'maxFunctionDefs': 0,
            'maxInstructionDefs': 0,
            'maxStackElements': 0,
            'maxSizeOfInstructions': 0,
            'maxComponentElements': 0,
            'maxComponentDepth': 0,
        }
        for key, value in defaults.items():
            if not hasattr(maxp, key):
                setattr(maxp, key, value)
    except Exception:
        pass

    if 'head' in font:
        try:
            font['head'].indexToLocFormat = 1
            font['head'].glyphDataFormat = 0
        except Exception:
            pass

    try:
        del font['CFF ']
    except Exception:
        pass

    return True

def add_name_record(name_table, platform_id, plat_enc_id, lang_id, name_id, string):
    if string.strip() == "":
        return
    """
    添加单个名称记录到 name 表
    """
    name_record = NameRecord()
    name_record.platformID = platform_id
    name_record.platEncID = plat_enc_id
    name_record.langID = lang_id
    name_record.nameID = name_id
    name_record.string = string
    name_table.names.append(name_record)

def convert_to_ascii(text):
    """
    将文本转换为纯 ASCII 字符，非 ASCII 字符替换为 '?'
    """
    return ''.join(char if ord(char) < 128 else '?' for char in text)

def modify_font_names(font, name_records):
    """
    修改字体的 name 表信息，只更新提供的记录
    Macintosh 平台(platformID=1)只支持英文记录
    """
    if not name_records:
        return
    # nameID 映射
    name_ids = {
        'copyright': 0,
        'family': 1,
        'subfamily': 2,
        'unique_id': 3,
        'fullname': 4,
        'version': 5,
        'postscript': 6,
        'trademark': 7,
        'manufacturer': 8,
        'designer': 9,
        'description': 10,
        'manufacturer_url': 11,
        'designer_url': 12,
        'license': 13,
        'license_url': 14,
    }
    
    # 语言 ID 映射
    lang_ids = {
        'en': 0x0409,  # English (United States)
        'zh': 0x0804,  # Chinese (Simplified)
    }
    
    # 如果没有 name 表，创建新的
    if 'name' not in font:
        font['name'] = newTable('name')
        
    name_table = font['name']
    
    # 添加或更新记录
    for name_key, name_value in name_records.items():
        if name_key in name_ids:
            name_id = name_ids[name_key]
            
            # 处理单一值字段（如 URL、PostScript 名称）
            if isinstance(name_value, str):
                # Windows 平台记录 (platformID=3)
                existing_win = next((n for n in name_table.names 
                    if n.nameID == name_id and n.platformID == 3 
                    and n.platEncID == 1 and n.langID == lang_ids['en']), None)
                if existing_win:
                    existing_win.string = name_value
                else:
                    add_name_record(name_table, 3, 1, lang_ids['en'], name_id, name_value)
                
                # Macintosh 平台记录 (platformID=1) - 只添加英文
                ascii_value = convert_to_ascii(name_value)
                existing_mac = next((n for n in name_table.names 
                    if n.nameID == name_id and n.platformID == 1 
                    and n.platEncID == 0 and n.langID == 0), None)
                if existing_mac:
                    existing_mac.string = ascii_value
                else:
                    add_name_record(name_table, 1, 0, 0, name_id, ascii_value)
            
            # 处理多语言字段
            elif isinstance(name_value, dict):
                # Windows 平台支持多语言
                for lang, text in name_value.items():
                    if lang in lang_ids:
                        existing_win = next((n for n in name_table.names 
                            if n.nameID == name_id and n.platformID == 3 
                            and n.platEncID == 1 and n.langID == lang_ids[lang]), None)
                        if existing_win:
                            existing_win.string = text
                        else:
                            add_name_record(name_table, 3, 1, lang_ids[lang], name_id, text)
                
                # Macintosh 平台只添加英文记录
                if 'en' in name_value:
                    ascii_text = convert_to_ascii(name_value['en'])
                    existing_mac = next((n for n in name_table.names 
                        if n.nameID == name_id and n.platformID == 1 
                        and n.platEncID == 0 and n.langID == 0), None)
                    if existing_mac:
                        existing_mac.string = ascii_text
                    else:
                        add_name_record(name_table, 1, 0, 0, name_id, ascii_text)

def sanitize_path(path_value):
    if isinstance(path_value, str):
        return path_value.strip()
    return ""

def resolve_existing_glyph_name(font, record):
    glyph_order = font.getGlyphOrder()
    name = record.get('name')
    if isinstance(name, str) and name in glyph_order:
        return name

    index = record.get('index')
    if isinstance(index, int) and 0 <= index < len(glyph_order):
        return glyph_order[index]

    unicode_value = record.get('unicode')
    if isinstance(unicode_value, int):
        cmap = font.getBestCmap()
        if cmap and unicode_value in cmap:
            return cmap[unicode_value]
    return None

def derive_unique_glyph_name(font, record):
    glyph_order = font.getGlyphOrder()
    base_name = None

    name = record.get('name')
    if isinstance(name, str) and name.strip():
        base_name = name.strip()
    elif isinstance(record.get('unicode'), int):
        base_name = f"uni{record['unicode']:04X}"
    else:
        base_name = "glyph"

    candidate = base_name
    suffix = 1
    while candidate in glyph_order:
        candidate = f"{base_name}_{suffix}"
        suffix += 1
    return candidate

def build_glyph_from_path(path_data, glyph_set):
    draw_pen = TTGlyphPen(glyph_set)

    if path_data:
        recording_pen = RecordingPen()
        parse_path(path_data, recording_pen)
        conversion_pen = Cu2QuPen(draw_pen, max_err=1.0, reverse_direction=False)
        recording_pen.replay(conversion_pen)

    return draw_pen.glyph()

def update_hmtx_metrics(font, glyph_name, glyph, record):
    if 'hmtx' not in font:
        return

    hmtx_table = font['hmtx']
    metrics_map = getattr(hmtx_table, 'metrics', {}) or {}
    current_metrics = metrics_map.get(glyph_name)
    current_advance = current_metrics[0] if current_metrics else None
    current_lsb = current_metrics[1] if current_metrics else None

    advance_width = record.get('advanceWidth')
    if advance_width is None:
        advance_width = current_advance
    if advance_width is None and hasattr(glyph, 'width'):
        advance_width = glyph.width
    if advance_width is None and 'hhea' in font:
        advance_width = getattr(font['hhea'], 'advanceWidthMax', None)
    if advance_width is None and 'head' in font:
        advance_width = getattr(font['head'], 'unitsPerEm', None)
    if advance_width is None:
        advance_width = 0

    left_side_bearing = record.get('leftSideBearing')
    if left_side_bearing is None:
        if current_lsb is not None:
            left_side_bearing = current_lsb
        else:
            left_side_bearing = getattr(glyph, 'xMin', 0) or 0

    metrics_entry = (
        int(round(advance_width)),
        int(round(left_side_bearing)),
    )

    if not hasattr(hmtx_table, 'metrics') or hmtx_table.metrics is None:
        hmtx_table.metrics = OrderedDict()

    hmtx_table.metrics[glyph_name] = metrics_entry

    try:
        hmtx_table[glyph_name] = metrics_entry
    except Exception:
        pass

    if hasattr(glyph, 'width'):
        glyph.width = metrics_entry[0]


def update_vmtx_metrics(font, glyph_name, glyph, record):
    if 'vmtx' not in font:
        return

    vmtx_table = font['vmtx']
    metrics_map = getattr(vmtx_table, 'metrics', {}) or {}
    current_metrics = metrics_map.get(glyph_name)
    current_advance = current_metrics[0] if current_metrics else None
    current_tsb = current_metrics[1] if current_metrics else None

    advance_height = record.get('advanceHeight')
    if advance_height is None:
        advance_height = current_advance
    if advance_height is None:
        glyph_height = None
        if getattr(glyph, 'height', None) is not None:
            glyph_height = glyph.height
        elif getattr(glyph, 'yMax', None) is not None and getattr(glyph, 'yMin', None) is not None:
            glyph_height = glyph.yMax - glyph.yMin
        if glyph_height is not None:
            advance_height = glyph_height
    if advance_height is None and 'vhea' in font:
        advance_height = getattr(font['vhea'], 'advanceHeightMax', None)
    if advance_height is None and 'head' in font:
        advance_height = getattr(font['head'], 'unitsPerEm', None)
    if advance_height is None:
        advance_height = 0

    top_side_bearing = record.get('topSideBearing')
    if top_side_bearing is None:
        if current_tsb is not None:
            top_side_bearing = current_tsb
        else:
            top_side_bearing = getattr(glyph, 'yMax', 0) or 0

    metrics_entry = (
        int(round(advance_height)),
        int(round(top_side_bearing)),
    )

    if not hasattr(vmtx_table, 'metrics') or vmtx_table.metrics is None:
        vmtx_table.metrics = OrderedDict()

    vmtx_table.metrics[glyph_name] = metrics_entry

    try:
        vmtx_table[glyph_name] = metrics_entry
    except Exception:
        pass


def ensure_metrics_table(font, table_tag):
    if table_tag not in font:
        return False

    table = font[table_tag]
    glyph_order = font.getGlyphOrder()
    existing_metrics = getattr(table, 'metrics', None)
    metrics_map = existing_metrics or {}

    if not isinstance(metrics_map, dict):
        metrics_map = dict(metrics_map)

    if table_tag == 'hmtx':
        default_primary = getattr(font['hhea'], 'advanceWidthMax', None) if 'hhea' in font else None
    else:
        default_primary = getattr(font['vhea'], 'advanceHeightMax', None) if 'vhea' in font else None

    if default_primary is None and 'head' in font:
        default_primary = getattr(font['head'], 'unitsPerEm', None)
    if default_primary is None:
        default_primary = 0

    glyf_table = font['glyf'] if 'glyf' in font else None

    normalized_metrics = OrderedDict()
    for name in glyph_order:
        entry = metrics_map.get(name)
        primary = None
        secondary = None
        glyph_obj = None

        if glyf_table is not None:
            try:
                glyph_obj = glyf_table[name]
            except Exception:
                glyph_obj = None

        if isinstance(entry, (list, tuple)) and len(entry) >= 2:
            primary, secondary = entry[0], entry[1]
        elif isinstance(entry, dict):
            if table_tag == 'hmtx':
                primary = entry.get('advanceWidth')
                secondary = entry.get('leftSideBearing')
            else:
                primary = entry.get('advanceHeight')
                secondary = entry.get('topSideBearing')

        if primary is None:
            if table_tag == 'hmtx' and glyph_obj is not None and getattr(glyph_obj, 'width', None) is not None:
                primary = glyph_obj.width
            elif table_tag == 'vmtx' and glyph_obj is not None:
                if getattr(glyph_obj, 'height', None) is not None:
                    primary = glyph_obj.height
                elif getattr(glyph_obj, 'yMax', None) is not None and getattr(glyph_obj, 'yMin', None) is not None:
                    primary = glyph_obj.yMax - glyph_obj.yMin
        if primary is None:
            primary = default_primary

        if secondary is None:
            if table_tag == 'hmtx' and glyph_obj is not None and getattr(glyph_obj, 'xMin', None) is not None:
                secondary = glyph_obj.xMin
            elif table_tag == 'vmtx' and glyph_obj is not None and getattr(glyph_obj, 'yMax', None) is not None:
                secondary = glyph_obj.yMax
        if secondary is None:
            secondary = 0

        primary_int = int(round(primary or 0))
        secondary_int = int(round(secondary or 0))

        normalized_metrics[name] = (primary_int, secondary_int)

        if glyph_obj is not None:
            if table_tag == 'hmtx' and hasattr(glyph_obj, 'width'):
                glyph_obj.width = primary_int
            if table_tag == 'vmtx' and hasattr(glyph_obj, 'height'):
                glyph_obj.height = primary_int

    table.metrics = normalized_metrics
    return True

def partition_glyph_records(glyph_records):
    deletions, modifications, additions = [], [], []
    for record in glyph_records:
        if not isinstance(record, dict):
            continue
        action = (record.get('action') or 'modify').lower()
        if action == 'delete':
            deletions.append(record)
        elif action == 'add':
            additions.append(record)
        else:
            modifications.append(record)
    return deletions, modifications, additions

def subset_remove_glyphs(font, deletion_records):
    glyphs_to_remove = set()
    for record in deletion_records:
        glyph_name = resolve_existing_glyph_name(font, record)
        if glyph_name and glyph_name != '.notdef':
            glyphs_to_remove.add(glyph_name)

    if not glyphs_to_remove:
        return False

    glyph_order = font.getGlyphOrder()
    glyphs_to_keep = [name for name in glyph_order if name not in glyphs_to_remove]
    if not glyphs_to_keep:
        return False

    if '.notdef' in glyph_order and '.notdef' not in glyphs_to_keep:
        glyphs_to_keep.insert(0, '.notdef')

    options = subset.Options()
    options.drop_tables = []
    options.name_IDs = ['*']
    options.name_languages = ['*']
    options.layout_features = ['*']
    options.layout_scripts = ['*']
    options.glyph_names = True
    options.hinting = True
    options.ignore_missing_glyphs = True
    options.recalc_bounds = True
    options.recalc_max_context = True
    options.recalc_average_width = True
    options.recalc_timestamp = False

    subsetter = subset.Subsetter(options=options)
    subsetter.populate(glyphs=list(dict.fromkeys(glyphs_to_keep)))
    subsetter.subset(font)
    return True

def update_existing_glyph(font, glyph_set, glyph_name, record, path_data):
    try:
        glyph = build_glyph_from_path(path_data, glyph_set)
    except Exception:
        return False

    glyf_table = font['glyf']
    try:
        glyph.recalcBounds(glyf_table)
    except Exception:
        pass

    glyf_table[glyph_name] = glyph
    update_hmtx_metrics(font, glyph_name, glyph, record)
    update_vmtx_metrics(font, glyph_name, glyph, record)
    return True

def insert_new_glyph(font, glyph_set, record, path_data):
    glyph_name = resolve_existing_glyph_name(font, record)
    if glyph_name:
        return update_existing_glyph(font, glyph_set, glyph_name, record, path_data)

    glyph_name = derive_unique_glyph_name(font, record)
    try:
        glyph = build_glyph_from_path(path_data, glyph_set)
    except Exception:
        return False

    glyf_table = font['glyf']
    try:
        glyph.recalcBounds(glyf_table)
    except Exception:
        pass

    glyph_order = font.getGlyphOrder()
    if glyph_name not in glyph_order:
        glyph_order.append(glyph_name)
        font.setGlyphOrder(glyph_order)

    glyf_table[glyph_name] = glyph
    update_hmtx_metrics(font, glyph_name, glyph, record)
    update_vmtx_metrics(font, glyph_name, glyph, record)

    unicode_value = record.get('unicode')
    if isinstance(unicode_value, int) and 'cmap' in font:
        for table in font['cmap'].tables:
            if getattr(table, 'isUnicode', False) and table.isUnicode():
                table.cmap[unicode_value] = glyph_name

    return True

def finalize_font_metrics(font):
    glyph_count = len(font.getGlyphOrder())

    if 'hmtx' in font:
        metrics_map = getattr(font['hmtx'], 'metrics', {}) or {}
        metrics = list(metrics_map.values())
        if 'hhea' in font:
            try:
                font['hhea'].numberOfHMetrics = max(1, min(len(metrics), glyph_count))
            except Exception:
                font['hhea'].numberOfHMetrics = max(1, glyph_count)
        if metrics and 'OS/2' in font:
            font['OS/2'].xAvgCharWidth = int(
                round(sum(aw for aw, _ in metrics) / len(metrics))
            )
        if metrics and 'hhea' in font:
            try:
                font['hhea'].advanceWidthMax = max(aw for aw, _ in metrics)
            except Exception:
                pass

    if 'vmtx' in font:
        v_metrics_map = getattr(font['vmtx'], 'metrics', {}) or {}
        v_metrics = list(v_metrics_map.values())
        if 'vhea' in font:
            try:
                font['vhea'].numberOfVMetrics = max(1, min(len(v_metrics), glyph_count))
            except Exception:
                font['vhea'].numberOfVMetrics = max(1, glyph_count)
            if v_metrics:
                try:
                    font['vhea'].advanceHeightMax = max(ah for ah, _ in v_metrics)
                except Exception:
                    pass

    if 'glyf' in font:
        try:
            font['glyf'].recalcBounds(font)
        except Exception:
            pass

    if 'maxp' in font:
        try:
            font['maxp'].recalc(font)
        except Exception:
            font['maxp'].numGlyphs = glyph_count

def apply_glyph_edits(font, glyph_records):
    if not glyph_records or 'glyf' not in font or 'hmtx' not in font:
        return

    deletions, modifications, additions = partition_glyph_records(glyph_records)
    updated = False

    if deletions and subset_remove_glyphs(font, deletions):
        updated = True

    if modifications:
        glyph_set = font.getGlyphSet()
        for record in modifications:
            path_data = sanitize_path(record.get('path'))
            glyph_name = resolve_existing_glyph_name(font, record)
            if not glyph_name:
                continue
            if update_existing_glyph(font, glyph_set, glyph_name, record, path_data):
                updated = True
                glyph_set = font.getGlyphSet()

    if additions:
        glyph_set = font.getGlyphSet()
        for record in additions:
            path_data = sanitize_path(record.get('path'))
            if not path_data:
                continue
            if insert_new_glyph(font, glyph_set, record, path_data):
                updated = True
                glyph_set = font.getGlyphSet()

    if ensure_metrics_table(font, 'hmtx'):
        updated = True

    if ensure_metrics_table(font, 'vmtx'):
        updated = True

    if updated:
        finalize_font_metrics(font)

def process(records, glyph_records_path, font_path, save_path):
    with open(Path(records), 'r', encoding='utf-8') as f:
        jsonText = f.read()
    name_records = json.loads(jsonText)
    glyph_records = []

    if glyph_records_path and Path(glyph_records_path).exists():
        raw = Path(glyph_records_path).read_text(encoding='utf-8').strip()
        if raw:
            glyph_records = json.loads(raw)

    font = TTFont(font_path)
    convert_cff_to_glyf(font)
    modify_font_names(font, name_records)
    apply_glyph_edits(font, glyph_records)
    font.save(save_path)
    font.close()
`;
	let w = null;
	async function we() {
		if (w) return w;
		try {
			(w = await le({})),
				await w.loadPackage(
					// 相对 worker 自身位置解析，保证以子路径部署时也能找到本地 whl
					new URL(
						"../font_info_assets/fonttools-4.51.0-py3-none-any.whl",
						self.location,
					).href,
				),
				await w.runPythonAsync(xe);
		} catch (e) {
			throw (console.error("Failed to load Pyodide:", e), e);
		}
		return w;
	}
	addEventListener("message", async function (e) {
		const { arrayBuffer: n, fontInfo: r, glyphEdits: o } = e.data;
		try {
			const i = await we(),
				t = new Uint8Array(n);
			await i.FS.writeFile("../input.ttf", t);
			const a = Ne(r);
			await i.FS.writeFile("../json.json", a, { encoding: "utf8" });
			const s = JSON.stringify(Array.isArray(o) ? o : []);
			await i.FS.writeFile("../glyphs.json", s, { encoding: "utf8" });
			const l =
				'process("../json.json", "../glyphs.json", "../input.ttf", "../output.ttf")';
			await i.runPythonAsync(l);
			const d = i.FS.readFile("../output.ttf", { encoding: "binary" }),
				p = new Blob([d], { type: "application/octet-stream" }),
				f = URL.createObjectURL(p);
			postMessage({ type: "complete", blobUrl: f, needsCleanup: !0 }),
				setTimeout(() => {
					i.FS.unlink("../json.json"),
						i.FS.unlink("../glyphs.json"),
						i.FS.unlink("../input.ttf"),
						i.FS.unlink("../output.ttf");
				}, 1e3);
		} catch (i) {
			postMessage({ type: "error", error: i.message, stack: i.stack });
		}
	});
	function Ne(e) {
		return JSON.stringify({
			family: { en: e.en.fontFamily, zh: e.zh.fontFamily },
			subfamily: { en: e.en.fontSubfamily, zh: e.zh.fontSubfamily },
			fullname: { en: e.en.fullName, zh: e.zh.fullName },
			postscript: e.en.postScriptName,
			unique_id: e.en.uniqueID,
			copyright: { en: e.en.copyright, zh: e.zh.copyright },
			version: { en: e.en.version, zh: e.zh.version },
			trademark: { en: e.en.trademark, zh: e.zh.trademark },
			manufacturer: { en: e.en.manufacturer, zh: e.zh.manufacturer },
			designer: { en: e.en.designer, zh: e.zh.designer },
			description: { en: e.en.description, zh: e.zh.description },
			manufacturer_url: { en: e.en.manufacturerURL, zh: e.zh.manufacturerURL },
			designer_url: { en: e.en.designerURL, zh: e.zh.designerURL },
			license: { en: e.en.license, zh: e.zh.license },
			license_url: { en: e.en.licenseURL, zh: e.zh.licenseURL },
		});
	}
});
export default Ee();
