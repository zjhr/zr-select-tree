(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["zr-select-tree"] = factory(require("vue"));
	else
		root["zr-select-tree"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1e15":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "33cc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d574a9b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1e15");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d574a9b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d574a9b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d574a9b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45d9bdfa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zrSelectTree/src/index.vue?vue&type=template&id=d574a9b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-popover',{attrs:{"disabled":_vm.disabled,"placement":"bottom-start"},on:{"show":function($event){return _vm.$emit('show')},"after-enter":function($event){return _vm.$emit('after-enter')},"hide":function($event){return _vm.$emit('hide')},"after-leave":function($event){return _vm.$emit('after-leave')}},model:{value:(_vm.isShowSelect),callback:function ($$v) {_vm.isShowSelect=$$v},expression:"isShowSelect"}},[_c('el-input',{staticClass:"s_cpointer",style:(_vm.inputStyle),attrs:{"slot":"reference","size":_vm.csize,"placeholder":_vm.placeholder,"value":_vm.value,"readonly":"readonly","disabled":_vm.disabled,"suffix-icon":"el-icon-arrow-down"},on:{"click":function($event){_vm.isShowSelect = !_vm.isShowSelect},"input":function($event){return _vm.$emit('input',_vm.value)}},slot:"reference"}),_c('el-scrollbar',{style:({height:_vm.treeHeight}),attrs:{"wrapStyle":"overflow: auto;"}},[_c('div',{staticStyle:{"padding-right":"25px"}},[_c('el-tree',_vm._g(_vm._b({ref:"tree",attrs:{"node-key":_vm.nodeKey,"data":_vm.data,"default-checked-keys":_vm.defaultCheckedKeys,"current-node-key":_vm.currentNodeKey,"highlight-current":_vm.radio,"props":_vm.props},on:{"check-change":_vm.checkChangeFun,"current-change":_vm.currentChangeFun}},'el-tree',_vm.$attrs,false),_vm.$listeners))],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/zrSelectTree/src/index.vue?vue&type=template&id=d574a9b4&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zrSelectTree/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
	name: 'zr-select-tree',
	inheritAttrs: false,
	props: {
		props: {
			type: Object,
			default () {
				return ({})
			}
		},
		nodeKey: {
			type: String,
			default: 'id'
		},
		data: {
			type: Array,
			default () {
				return []
			}
		}, // 传入tree数据
		value: String,
		inputStyle: String,
		defaultCheckedKeys: Array, // 默认勾选的节点的 key 的数组
		size: {
			type: String,
			default: ''
		},
		treeHeight: {
			type: String,
			default: '200px'
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		disabled: Boolean, // 是否禁用
		currentNodeKey: [String, Number], // 默认选中key
		radio: Boolean, // 单选
		radioP: Boolean// 单选模式，可以选中父级
	},
	data () {
		return {
			inputval: '',
			defaultprops: {
				'label': 'label',
				'children': 'children',
				...this.props
			},
			isShowSelect: false,
			oldId: this.currentNodeKey,
			oldData: {}, // 缓存记录
			multiples: [] // 多选缓存数据
		}
	},
	computed: {
		csize () {
			return this.size || external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$ELEMENT ? external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$ELEMENT.size :  false || 'medium'
		}
	},
	mounted () {
		this.$nextTick(() => {
			this.loadMultiples()
		})
	},
	methods: {
		loadMultiples () { // 多选时候，回填数据
			if (!this.radio && this.defaultCheckedKeys.length && this.data.length) {
				const findTreeItem = (list) => {
					list.forEach(v => {
						if (this.defaultCheckedKeys.includes(v[this.nodeKey])) {
							this.multiples.push(v)
						}
						if (v.children && v.children.length) {
							findTreeItem(v.children)
						}
					})
				}
				findTreeItem(this.data)
				const keys = []
				const labels = []
				this.multiples.forEach(v => {
					keys.push(v[this.nodeKey])
					labels.push(v[this.defaultprops.label])
				})
				this.$emit('input', labels.join(','))
				this.$emit('checkedChange', this.multiples[0], this.multiples, keys)
			}
		},
		checkChangeFun (data, checked) {
			if (this.radio) { // 单选
				if (checked) {
					this.oldData = data
					this.$refs.tree.setCheckedNodes([data])
					this.$emit('input', data[this.defaultprops.label])
					this.isShowSelect = false
					this.$emit('checkedChange', data)
				} else if (this.oldData[this.nodeKey] === data[this.nodeKey]) {
					this.$emit('input', '')
					this.$emit('unCheckedChange', data)
				}
			} else { // 多选
				if (checked) {
					this.multiples.push(data)
				} else {
					const index = this.multiples.findIndex(v => v[this.nodeKey] === data[this.nodeKey])
					this.multiples.splice(index, 1)
				}
				const keys = []
				const labels = []
				this.multiples.forEach(v => {
					keys.push(v[this.nodeKey])
					labels.push(v[this.defaultprops.label])
				})
				this.$emit('input', labels.join(','))
				this.$emit(checked ? 'checkedChange' : 'unCheckedChange', data, this.multiples, keys)
			}
		},
		currentChangeFun (data, node) {
			if (this.radioP || this.radio) {
				if (!this.radioP) {
					if (data[this.defaultprops.children] && data[this.defaultprops.children].length) {
						this.$refs.tree.setCurrentKey(this.oldId || null)
						return
					}
				}
				this.oldId = data[this.nodeKey]
				this.isShowSelect = false
				this.$emit('input', data[this.defaultprops.label])
				this.$emit('currentChange', data, node)
				return
			}
			this.$emit('currentChange', data, node)
		},
		getNodeDataFun () { // 获取选择节点数据
			return this.radio ? this.$refs.tree.getCurrentNode() : this.$refs.tree.getCheckedNodes()
		}
	},
	watch: {
		data () {
			this.$nextTick(() => {
				this.loadMultiples()
			})
		}
	}
});

// CONCATENATED MODULE: ./packages/zrSelectTree/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var zrSelectTree_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/zrSelectTree/src/index.vue?vue&type=style&index=0&id=d574a9b4&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_d574a9b4_lang_scss_scoped_true_ = __webpack_require__("33cc");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/zrSelectTree/src/index.vue






/* normalize component */

var component = normalizeComponent(
  zrSelectTree_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d574a9b4",
  null
  
)

/* harmony default export */ var zrSelectTree_src = (component.exports);
// CONCATENATED MODULE: ./packages/zrSelectTree/index.js


// 为组件提供 install 安装方法，供按需引入
zrSelectTree_src.install = function (Vue) {
  Vue.component(zrEditTable.name, zrSelectTree_src)
}

// 默认导出组件
/* harmony default export */ var zrSelectTree = (zrSelectTree_src);
// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [
  zrSelectTree
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install,
  zrSelectTree: zrSelectTree
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=zr-select-tree.umd.js.map