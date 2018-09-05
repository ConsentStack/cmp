(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(__webpack_require__(/*! ./store.js */ "./src/ui/store.js"));

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  store: _store.default,
  name: 'app',
  mounted: function mounted() {
    var _this = this;

    this.$ready(function () {
      if (_this.getCurrentClientConfig.clientStyle) {
        console.log('[INFO][Module-UI] Custom Styles loading: ', _this.getCurrentClientConfig.clientStyle);

        __webpack_require__("./src/ui/styles/clients sync recursive ^\\.\\/client\\..*\\.css$")("./client." + _this.getCurrentClientConfig.clientId + '.css');
      }
    });
  },
  methods: _objectSpread({}, (0, _vuex.mapActions)(['setFullConsent'])),
  computed: _objectSpread({}, (0, _vuex.mapState)(['isShow', 'currentView', 'clientConfig']), (0, _vuex.mapGetters)(['getCurrentClientConfig']))
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  computed: _objectSpread({}, (0, _vuex.mapState)(['currentView'])),
  methods: _objectSpread({}, (0, _vuex.mapMutations)(['changeCurrentView']))
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Modal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'modal',
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, (0, _vuex.mapGetters)(['getCurrentClientConfig'])),
  methods: _objectSpread({
    fullConsent: function fullConsent() {
      console.log('CMP-UI :: (Entry) Full Consent Given');
      this.setFullConsent({});
    }
  }, (0, _vuex.mapMutations)(['updatePurposes', 'updateVendors', 'changeCurrentView']), (0, _vuex.mapActions)(['setFullConsent']))
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

var _customVendorList = _interopRequireDefault(__webpack_require__(/*! ../../configs/customVendorList */ "./src/configs/customVendorList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'purposes-component',
  data: function data() {
    return {
      vendorList: _customVendorList.default
    };
  },
  computed: _objectSpread({}, (0, _vuex.mapGetters)(['getCurrentClientConfig', 'getUserConsentObject']), {
    purposeType: function purposeType() {
      return this.getCurrentClientConfig.views.purposeView.purposeType;
    },
    purposeView: function purposeView() {
      return this.getCurrentClientConfig.views.purposeView;
    }
  }),
  methods: _objectSpread({}, (0, _vuex.mapActions)(['setFullConsent', 'setPartialConsent']), (0, _vuex.mapMutations)(['changeCurrentView']), {
    toggleValue: function toggleValue(id) {
      return this.getUserConsentObject.purposes.includes(id);
    }
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var constants = {
  colorChecked: '#75C791',
  colorUnchecked: '#bfcbd9',
  cssColors: false,
  labelChecked: 'on',
  labelUnchecked: 'off',
  width: 50,
  height: 22,
  margin: 3,
  switchColor: '#fff'
};

var contains = function contains(object, title) {
  return _typeof(object) === 'object' && object.hasOwnProperty(title);
};

var px = function px(v) {
  return v + 'px';
};

var _default = {
  name: 'ToggleButton',
  props: {
    purposeId: {
      type: Number,
      required: true
    },
    toggleType: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      validator: function validator(value) {
        return _typeof(value) === 'object' ? value.checked || value.unchecked : typeof value === 'string';
      }
    },
    switchColor: {
      type: [String, Object],
      validator: function validator(value) {
        return _typeof(value) === 'object' ? value.checked || value.unchecked : typeof value === 'string';
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator: function validator(value) {
        return _typeof(value) === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
      }
    },
    height: {
      type: Number,
      default: constants.height
    },
    width: {
      type: Number,
      default: constants.width
    }
  },
  computed: {
    className: function className() {
      var toggled = this.toggled,
          disabled = this.disabled;
      return ['vue-js-switch', {
        toggled: toggled,
        disabled: disabled
      }];
    },
    ariaChecked: function ariaChecked() {
      return this.toggled.toString();
    },
    coreStyle: function coreStyle() {
      return {
        width: px(this.width),
        height: px(this.height),
        backgroundColor: this.cssColors ? null : this.colorCurrent,
        borderRadius: px(Math.round(this.height / 2))
      };
    },
    buttonRadius: function buttonRadius() {
      return this.height - constants.margin * 2;
    },
    distance: function distance() {
      return px(this.width - this.height + constants.margin);
    },
    buttonStyle: function buttonStyle() {
      return {
        width: px(this.buttonRadius),
        height: px(this.buttonRadius),
        transition: "transform ".concat(this.speed, "ms"),
        transform: this.toggled ? "translate3d(".concat(this.distance, ", 3px, 0px)") : null,
        background: this.switchColor ? this.switchColorCurrent : undefined
      };
    },
    labelStyle: function labelStyle() {
      return {
        lineHeight: px(this.height)
      };
    },
    colorChecked: function colorChecked() {
      var color = this.color;

      if (_typeof(color) !== 'object') {
        return color || constants.colorChecked;
      }

      return contains(color, 'checked') ? color.checked : constants.colorChecked;
    },
    colorUnchecked: function colorUnchecked() {
      var color = this.color;
      return contains(color, 'unchecked') ? color.unchecked : constants.colorUnchecked;
    },
    colorCurrent: function colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },
    labelChecked: function labelChecked() {
      return contains(this.labels, 'checked') ? this.labels.checked : constants.labelChecked;
    },
    labelUnchecked: function labelUnchecked() {
      return contains(this.labels, 'unchecked') ? this.labels.unchecked : constants.labelUnchecked;
    },
    switchColorChecked: function switchColorChecked() {
      var switchColor = this.switchColor;
      return contains(switchColor, 'checked') ? switchColor.checked : constants.switchColor;
    },
    switchColorUnchecked: function switchColorUnchecked() {
      var switchColor = this.switchColor;
      return contains(switchColor, 'unchecked') ? switchColor.unchecked : constants.switchColor;
    },
    switchColorCurrent: function switchColorCurrent() {
      var switchColor = this.switchColor;

      if (_typeof(switchColor) !== 'object') {
        return switchColor || constants.switchColor;
      }

      return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
    }
  },
  watch: {
    value: function value(_value) {
      if (this.sync) {
        this.toggled = !!_value;
      }
    }
  },
  data: function data() {
    return {
      toggled: !!this.value
    };
  },
  methods: {
    toggle: function toggle(event) {
      this.toggled = !this.toggled;
      this.$emit('input', this.toggled);
      this.$emit('change', {
        value: this.toggled,
        srcEvent: event
      }); // this.$bus.$emit('toggled', {
      //     toggleType : this.toggleType,
      //     toggleValue : this.toggled,
      //     toggleId : this.purposeId
      // })

      this.$store.commit('updateUserConsentObject', {
        toggleType: this.toggleType,
        toggleValue: this.toggled,
        toggleId: this.purposeId
      });
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  data: function data() {
    return {
      pageNumber: 1
    };
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 5
    }
  },
  methods: _objectSpread({}, (0, _vuex.mapActions)(['setFullConsent', 'setPartialConsent']), {
    nextPage: function nextPage() {
      this.pageNumber++;
    },
    prevPage: function prevPage() {
      this.pageNumber--;
    },
    toggleValue: function toggleValue(id) {
      var _this$getUserConsentO = this.getUserConsentObject,
          vendors = _this$getUserConsentO.vendors,
          customVendors = _this$getUserConsentO.customVendors;
      return customVendors.includes(id) || vendors.includes(id);
    }
  }),
  computed: _objectSpread({}, (0, _vuex.mapGetters)(['getCurrentClientConfig', 'getCurrentClientVendorList', 'getUserConsentObject']), {
    totalVendors: function totalVendors() {
      return this.getCurrentClientVendorList.length;
    },
    pageCount: function pageCount() {
      var l = this.getCurrentClientVendorList.length;
      var s = this.size;
      return Math.floor(l / s);
    },
    paginatedData: function paginatedData() {
      var start = (this.pageNumber - 1) * this.size;
      var end = start + this.size;
      return this.getCurrentClientVendorList.slice(start, end);
    }
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=style&index=0&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/App.vue?vue&type=style&index=0&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.uk-scope {\n  /*! UIkit 3.0.0-rc.5 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */\n  /* ========================================================================\n   Component: Base\n ========================================================================== */\n  /*\n * 1. Set `font-size` to support `rem` units\n *    Not using `font` property because a leading hyphen (e.g. -apple-system) causes the font to break in IE11 and Edge\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Style\n */\n  /*\n * Remove the margin in all browsers.\n */\n  /* Links\n ========================================================================== */\n  /*\n * Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n  /*\n * Remove the outline on focused links when they are also active or hovered\n */\n  /*\n * Style\n */\n  /* Text-level semantics\n ========================================================================== */\n  /*\n * 1. Remove the bottom border in Chrome 57-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n  /*\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n  /*\n * 1. Consolas has a better baseline in running text compared to `Courier`\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Style\n */\n  /*\n * Emphasize\n */\n  /*\n * Insert\n */\n  /*\n * Mark\n */\n  /*\n * Quote\n */\n  /*\n * Add the correct font size in all browsers.\n */\n  /*\n * Prevents `sub` and `sup` affecting `line-height` in all browsers.\n */\n  /* Embedded content\n ========================================================================== */\n  /*\n * Remove the gap between embedded content and the bottom of their containers.\n */\n  /*\n * Responsiveness\n * 1. Set a maximum width\n * 2. Auto scale the height. Only needed if `height` attribute is present\n * 2. Corrects `max-width` behavior if padding and border are used\n */\n  /*\n * Hide the overflow in IE.\n */\n  /*\n * Hide `alt` text for lazy load images\n * Selector for background while loading img[data-src*='.jpg'][src*='data:image'] { background: grey; }\n */\n  /* Block elements\n ========================================================================== */\n  /*\n * Margins\n */\n  /* Add margin if adjacent element */\n  /* Headings\n ========================================================================== */\n  /* Add margin if adjacent element */\n  /*\n * Sizes\n */\n  /* Tablet landscape and bigger */\n  /* Lists\n ========================================================================== */\n  /*\n * Reset margin for nested lists\n */\n  /* Description lists\n ========================================================================== */\n  /* Horizontal rules\n ========================================================================== */\n  /*\n * 1. Add the correct box sizing and height in Firefox.\n * 2. Show the overflow in Edge and IE.\n * 3. Add the correct text-align in Edge and IE.\n * 4. Style\n */\n  /* Add margin if adjacent element */\n  /* Address\n ========================================================================== */\n  /* Blockquotes\n ========================================================================== */\n  /* Add margin if adjacent element */\n  /*\n * Content\n */\n  /* Preformatted text\n ========================================================================== */\n  /*\n * 1. Contain overflow in all browsers.\n */\n  /* Selection pseudo-element\n ========================================================================== */\n  /* HTML5 elements\n ========================================================================== */\n  /*\n * 1. Add the correct display in Edge, IE 10+, and Firefox.\n * 2. Add the correct display in IE.\n */\n  /*\n * Add the correct display in all browsers.\n */\n  /*\n * Add the correct display in IE.\n */\n  /* Iframe\n ========================================================================== */\n  /* Prevent the 300ms delay for touchscreen interactions\n ========================================================================== */\n  /*\n * Most browsers prevent the 300ms delay automatically for sites that use the `width=device-width` property.\n * For Safari on iOS 9.3+, IE 11 and Edge on desktops and IE 11 on Windows Phone 8.1 it must be applied manually.\n */\n  /* Pass media breakpoints to JS\n ========================================================================== */\n  /*\n * Breakpoints\n */\n  /* ========================================================================\n   Component: Link\n ========================================================================== */\n  /* Muted\n ========================================================================== */\n  /* Text\n ========================================================================== */\n  /* Heading\n ========================================================================== */\n  /* Reset\n ========================================================================== */\n  /*\n * `!important` needed to override inverse component\n */\n  /* ========================================================================\n   Component: Heading\n ========================================================================== */\n  /* Primary\n ========================================================================== */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Hero\n ========================================================================== */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Divider\n ========================================================================== */\n  /* Bullet\n ========================================================================== */\n  /*\n * 1. Using `inline-block` to make it work with text alignment\n * 2. Center vertically\n * 3. Style\n */\n  /* Line\n ========================================================================== */\n  /*\n * Clip the child element\n */\n  /*\n * Extra markup is needed to make it work with text align\n */\n  /*\n * 1. Center vertically\n * 2. Make the element as large as possible. It's clipped by the container.\n * 3. Style\n */\n  /* ========================================================================\n   Component: Divider\n ========================================================================== */\n  /*\n * 1. Reset default `hr`\n * 2. Set margin if a `div` is used for semantical reason\n */\n  /* Add margin if adjacent element */\n  /* Icon\n ========================================================================== */\n  /* Small\n ========================================================================== */\n  /*\n * Reset child height, caused by `inline-block`\n */\n  /* ========================================================================\n   Component: List\n ========================================================================== */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /*\n * Nested lists\n */\n  /*\n * Style\n */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Divider\n */\n  /*\n * Striped\n */\n  /*\n * Bullet\n */\n  /* Size modifier\n ========================================================================== */\n  /*\n * Divider\n */\n  /*\n * Striped\n */\n  /* ========================================================================\n   Component: Description list\n ========================================================================== */\n  /*\n * Term\n */\n  /*\n * Description\n */\n  /* Style modifier\n ========================================================================== */\n  /*\n * Line\n */\n  /* ========================================================================\n   Component: Table\n ========================================================================== */\n  /*\n * 1. Remove most spacing between table cells.\n * 2. Behave like a block element\n * 3. Style\n */\n  /* Add margin if adjacent element */\n  /* Header cell\n ========================================================================== */\n  /*\n * 1. Style\n */\n  /* Cell\n ========================================================================== */\n  /*\n * Remove margin from the last-child\n */\n  /* Footer\n ========================================================================== */\n  /* Caption\n ========================================================================== */\n  /* Row\n ========================================================================== */\n  /* Alignment modifier\n ========================================================================== */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Divider\n */\n  /*\n * Striped\n */\n  /*\n * Hover\n */\n  /* Size modifier\n ========================================================================== */\n  /* Justify modifier\n ========================================================================== */\n  /* Cell size modifier\n ========================================================================== */\n  /* Cell link modifier\n ========================================================================== */\n  /*\n * Does not work with `uk-table-justify` at the moment\n */\n  /* Responsive table\n ========================================================================== */\n  /* Phone landscape and smaller */\n  /* ========================================================================\n   Component: Icon\n ========================================================================== */\n  /*\n * Note: 1. - 7. is required for `button` elements. Needed for Close and Form Icon component.\n * 1. Remove margins in Chrome, Safari and Opera.\n * 2. Remove borders for `button`.\n * 3. Remove border-radius in Chrome.\n * 4. Address `overflow` set to `hidden` in IE.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 7. Remove default `button` padding and background color\n * 8. Style\n * 9. Fill all SVG elements with the current text color if no `fill` attribute is set\n * 10. Let the container fit the height of the icon\n */\n  /* Required for `button`. */\n  /*\n * Remove the inner border and padding in Firefox.\n */\n  /*\n * Set the fill and stroke color of all SVG elements to the current text color\n * 1. Fix for uppercase attribute names in Edge. Will be fixed in Windows 10 builds 16251+\n */\n  /*\n * Fix Firefox blurry SVG rendering: https://bugzilla.mozilla.org/show_bug.cgi?id=1046835\n */\n  /* Image modifier\n ========================================================================== */\n  /*\n * Display images in icon dimensions\n */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Link\n */\n  /* OnClick + Active */\n  /*\n * Button\n * 1. Center icon vertically and horizontally\n */\n  /* Hover + Focus */\n  /* OnClick + Active */\n  /* ========================================================================\n   Component: Form Range\n ========================================================================== */\n  /*\n * 1. Normalize and defaults\n * 2. Prevent content overflow if a fixed width is used\n * 3. Take the full width\n * 4. Remove default style\n * 5. Remove white background in Chrome\n * 6. Remove padding in IE11\n */\n  /* Focus */\n  /* IE11 Reset */\n  /*\n * Improves consistency of cursor style for clickable elements\n */\n  /* Thumb\n ========================================================================== */\n  /*\n * 1. Reset\n * 2. Style\n */\n  /* Webkit */\n  /* Firefox */\n  /* Edge */\n  /* IE11 */\n  /* Edge + IE11 */\n  /* Track\n ========================================================================== */\n  /*\n * 1. Safari doesn't have a focus state. Using active instead.\n */\n  /* Webkit */\n  /* Firefox */\n  /* Edge */\n  /* ========================================================================\n   Component: Form\n ========================================================================== */\n  /*\n * 1. Define consistent box sizing.\n *    Default is `content-box` with following exceptions set to `border-box`\n *    `select`, `input[type=\"checkbox\"]` and `input[type=\"radio\"]`\n *    `input[type=\"search\"]` in Chrome, Safari and Opera\n *    `input[type=\"color\"]` in Firefox\n * 2. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.\n * 3. Remove `border-radius` in iOS.\n * 4. Change font properties to `inherit` in all browsers.\n */\n  /*\n * Show the overflow in Edge.\n */\n  /*\n * Remove the inheritance of text transform in Firefox.\n */\n  /*\n * 1. Change font properties to `inherit` in all browsers\n * 2. Don't inherit the `font-weight` and use `bold` instead.\n * NOTE: Both declarations don't work in Chrome, Safari and Opera.\n */\n  /*\n * Remove the default vertical scrollbar in IE 10+.\n */\n  /*\n * Remove the inner padding and cancel buttons in Chrome on OS X and Safari on OS X.\n */\n  /*\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n  /*\n * Removes placeholder transparency in Firefox.\n */\n  /*\n * Improves consistency of cursor style for clickable elements\n */\n  /*\n * Define consistent border, margin, and padding.\n */\n  /* Input, select and textarea\n * Allowed: `text`, `password`, `datetime`, `datetime-local`, `date`,  `month`,\n            `time`, `week`, `number`, `email`, `url`, `search`, `tel`, `color`\n * Disallowed: `range`, `radio`, `checkbox`, `file`, `submit`, `reset` and `image`\n ========================================================================== */\n  /*\n * Remove default style in iOS.\n */\n  /*\n * 1. Prevent content overflow if a fixed width is used\n * 2. Take the full width\n * 3. Reset default\n * 4. Style\n */\n  /*\n * Single-line\n * 1. Allow any element to look like an `input` or `select` element\n * 2. Make sure line-height is not larger than height\n *    Also needed to center the text vertically\n */\n  /* 2 */\n  /*\n * Multi-line\n */\n  /* Focus */\n  /* Disabled */\n  /*\n * Placeholder\n */\n  /* Style modifier (`uk-input`, `uk-select` and `uk-textarea`)\n ========================================================================== */\n  /*\n * Small\n */\n  /*\n * Large\n */\n  /* Style modifier (`uk-input`, `uk-select` and `uk-textarea`)\n ========================================================================== */\n  /*\n * Error\n */\n  /*\n * Success\n */\n  /*\n * Blank\n */\n  /* Width modifiers (`uk-input`, `uk-select` and `uk-textarea`)\n ========================================================================== */\n  /*\n * Fixed widths\n * Different widths for mini sized `input` and `select` elements\n */\n  /* Select\n ========================================================================== */\n  /*\n * 1. Remove default style. Also works in Firefox\n * 2. Style\n * 3. Remove default style in IE 10/11\n * 4. Set `color` for options in the select dropdown, because the inherited `color` might be too light.\n */\n  /* 3 */\n  /* 4 */\n  /*\n * Disabled\n */\n  /* Radio and checkbox\n * Note: Does not work in IE11\n ========================================================================== */\n  /*\n * 1. Style\n * 2. Make box more robust so it clips the child element\n * 3. Vertical alignment\n * 4. Remove default style\n * 5. Fix black background on iOS\n * 6. Center icons\n */\n  /* Focus */\n  /*\n * Checked\n */\n  /* Focus */\n  /*\n * Icons\n */\n  /*\n * Disabled\n */\n  /* Legend\n ========================================================================== */\n  /*\n * Legend\n * 1. Behave like block element\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove padding so people aren't caught out if they zero out fieldsets.\n * 4. Style\n */\n  /* Custom controls\n ========================================================================== */\n  /*\n * 1. Container fits its content\n * 2. Create position context\n * 3. Prevent content overflow\n * 4. Behave like most inline-block elements\n */\n  /*\n * 1. Position and resize the form control to always cover its container\n * 2. Required for Firefox for positioning to the left\n * 3. Required for Webkit to make `height` work\n * 4. Hide controle and show cursor\n * 5. Needed for the cursor\n * 6. Clip height caused by 5. Needed for Webkit only\n */\n  /* Label\n ========================================================================== */\n  /* Layout\n ========================================================================== */\n  /*\n * Stacked\n */\n  /*\n * Horizontal\n */\n  /* Tablet portrait and smaller */\n  /* Tablet landscape and bigger */\n  /* Icons\n ========================================================================== */\n  /*\n * 1. Set position\n * 2. Set width\n * 3. Center icon vertically and horizontally\n * 4. Style\n */\n  /*\n * Required for `a`.\n */\n  /*\n * Make `input` element clickable through icon, e.g. if it's a `span`\n */\n  /*\n * Input padding\n */\n  /*\n * Position modifier\n */\n  /* ========================================================================\n   Component: Button\n ========================================================================== */\n  /*\n * 1. Remove margins in Chrome, Safari and Opera.\n * 2. Remove borders for `button`.\n * 3. Remove border-radius in Chrome.\n * 4. Address `overflow` set to `hidden` in IE.\n * 5. Correct `font` properties and `color` not being inherited for `button`.\n * 6. Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 7. Style\n * 8. `line-height` is used to create a height because it also centers the text vertically for `a` elements.\n *    Better would be to use height and flexbox to center the text vertically but flexbox doesn't work in Firefox on `button` elements.\n * 9. Align text if button has a width\n * 10. Required for `a`.\n */\n  /*\n * Remove the inner border and padding in Firefox.\n */\n  /* Hover */\n  /* Focus */\n  /* OnClick + Active */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Default\n */\n  /* Hover + Focus */\n  /* OnClick + Active */\n  /*\n * Primary\n */\n  /* Hover + Focus */\n  /* OnClick + Active */\n  /*\n * Secondary\n */\n  /* Hover + Focus */\n  /* OnClick + Active */\n  /*\n * Danger\n */\n  /* Hover + Focus */\n  /* OnClick + Active */\n  /*\n * Disabled\n * The same for all style modifiers\n */\n  /* Size modifiers\n ========================================================================== */\n  /* Text modifiers\n ========================================================================== */\n  /*\n * Text\n * 1. Reset\n * 2. Style\n */\n  /* Hover + Focus */\n  /* Disabled */\n  /*\n * Link\n * 1. Reset\n * 2. Style\n */\n  /* Hover + Focus */\n  /* Disabled */\n  /* Group\n ========================================================================== */\n  /*\n * 1. Using `flex` instead of `inline-block` to prevent whitespace betweent child elements\n * 2. Behave like button\n * 3. Create position context\n */\n  /* Group\n     ========================================================================== */\n  /*\n     * Collapse border\n     */\n  /*\n     * Create position context to superimpose the successor elements border\n     * Known issue: If you use an `a` element as button and an icon inside,\n     * the active state will not work if you click the icon inside the button\n     * Workaround: Just use a `button` or `input` element as button\n     */\n  /* ========================================================================\n   Component: Section\n ========================================================================== */\n  /*\n * 1. Make it work with `100vh` and height in general\n */\n  /* Desktop and bigger */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Size modifiers\n ========================================================================== */\n  /*\n * XSmall\n */\n  /*\n * Small\n */\n  /*\n * Large\n */\n  /* Tablet landscape and bigger */\n  /*\n * XLarge\n */\n  /* Tablet landscape and bigger */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Default\n */\n  /*\n * Muted\n */\n  /*\n * Primary\n */\n  /*\n * Secondary\n */\n  /* Overlap modifier\n ========================================================================== */\n  /*\n * Reserved modifier to make a section overlap another section with an border image\n * Implemented by the theme\n */\n  /* ========================================================================\n   Component: Container\n ========================================================================== */\n  /*\n * 1. Box sizing has to be `content-box` so the max-width is always the same and\n *    unaffected by the padding on different breakpoints. It's important for the size modifiers.\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /*\n * Remove padding from nested containers\n */\n  /* Size modifier\n ========================================================================== */\n  /* ========================================================================\n   Component: Grid\n ========================================================================== */\n  /*\n * 1. Allow cells to wrap into the next line\n * 2. Reset list\n */\n  /*\n * Grid cell\n * Note: Space is allocated solely based on content dimensions, but shrinks: 0 1 auto\n * Reset margin for e.g. paragraphs\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Gutter\n ========================================================================== */\n  /*\n * Default\n */\n  /* Horizontal */\n  /* Vertical */\n  /* Desktop and bigger */\n  /*\n * Small\n */\n  /* Horizontal */\n  /* Vertical */\n  /*\n * Medium\n */\n  /* Horizontal */\n  /* Vertical */\n  /*\n * Large\n */\n  /* Horizontal */\n  /* Vertical */\n  /* Desktop and bigger */\n  /*\n * Collapse\n */\n  /* Horizontal */\n  /* Vertical */\n  /* Divider\n ========================================================================== */\n  /* Vertical */\n  /*\n * Default\n */\n  /* Horizontal */\n  /* Vertical */\n  /* Desktop and bigger */\n  /*\n * Small\n */\n  /* Horizontal */\n  /* Vertical */\n  /*\n * Medium\n */\n  /* Horizontal */\n  /* Vertical */\n  /*\n * Large\n */\n  /* Horizontal */\n  /* Vertical */\n  /* Desktop and bigger */\n  /* Match child of a grid cell\n ========================================================================== */\n  /*\n * Behave like a block element\n * 1. Wrap into the next line\n * 2. Take the full width, at least 100%. Only if no class from the Width component is set.\n * 3. Expand width even if larger than 100%, e.g. because of negative margin (Needed for nested grids)\n */\n  /* ========================================================================\n   Component: Tile\n ========================================================================== */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Size modifiers\n ========================================================================== */\n  /*\n * XSmall\n */\n  /*\n * Small\n */\n  /*\n * Large\n */\n  /* Tablet landscape and bigger */\n  /*\n * XLarge\n */\n  /* Tablet landscape and bigger */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Default\n */\n  /*\n * Muted\n */\n  /*\n * Primary\n */\n  /*\n * Secondary\n */\n  /* ========================================================================\n   Component: Card\n ========================================================================== */\n  /* Sections\n ========================================================================== */\n  /* Desktop and bigger */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Media\n ========================================================================== */\n  /*\n * Reserved alignment modifier to style the media element, e.g. with `border-radius`\n * Implemented by the theme\n */\n  /* Title\n ========================================================================== */\n  /* Badge\n ========================================================================== */\n  /*\n * Remove margin from adjacent element\n */\n  /* Hover modifier\n ========================================================================== */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Default\n * Note: Header and Footer are only implemented for the default style\n */\n  /*\n * Primary\n */\n  /*\n * Secondary\n */\n  /* Size modifier\n ========================================================================== */\n  /*\n * Small\n */\n  /*\n * Large\n */\n  /* Desktop and bigger */\n  /*\n     * Default\n     */\n  /* Desktop and bigger */\n  /*\n     * Small\n     */\n  /*\n     * Large\n     */\n  /* Desktop and bigger */\n  /* ========================================================================\n   Component: Close\n ========================================================================== */\n  /*\n * Adopts `uk-icon`\n */\n  /* Hover + Focus */\n  /* ========================================================================\n   Component: Spinner\n ========================================================================== */\n  /*\n * Adopts `uk-icon`\n */\n  /* SVG\n ========================================================================== */\n  /*\n * Circle\n */\n  /* ========================================================================\n   Component: Totop\n ========================================================================== */\n  /*\n * Addopts `uk-icon`\n */\n  /* Hover + Focus */\n  /* OnClick */\n  /* ========================================================================\n   Component: Marker\n ========================================================================== */\n  /*\n * Addopts `uk-icon`\n */\n  /* Hover + Focus */\n  /* ========================================================================\n   Component: Alert\n ========================================================================== */\n  /* Add margin if adjacent element */\n  /*\n * Remove margin from the last-child\n */\n  /* Close\n * Adopts `uk-close`\n ========================================================================== */\n  /*\n * Remove margin from adjacent element\n */\n  /*\n * Hover + Focus\n */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Primary\n */\n  /*\n * Success\n */\n  /*\n * Warning\n */\n  /*\n * Danger\n */\n  /*\n     * Content\n     */\n  /* ========================================================================\n   Component: Badge\n ========================================================================== */\n  /*\n * 1. Style\n * 2. Center child vertically and horizontally\n */\n  /*\n * Required for `a`\n */\n  /* ========================================================================\n   Component: Label\n ========================================================================== */\n  /* Color modifiers\n ========================================================================== */\n  /*\n * Success\n */\n  /*\n * Warning\n */\n  /*\n * Danger\n */\n  /* ========================================================================\n   Component: Overlay\n ========================================================================== */\n  /*\n * Remove margin from the last-child\n */\n  /* Icon\n ========================================================================== */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Default\n */\n  /*\n * Primary\n */\n  /* ========================================================================\n   Component: Article\n ========================================================================== */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Adjacent sibling\n ========================================================================== */\n  /* Title\n ========================================================================== */\n  /* Tablet landscape and bigger */\n  /* Meta\n ========================================================================== */\n  /* ========================================================================\n   Component: Comment\n ========================================================================== */\n  /* Sections\n ========================================================================== */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Title\n ========================================================================== */\n  /* Meta\n ========================================================================== */\n  /* Avatar\n ========================================================================== */\n  /* List\n ========================================================================== */\n  /* Adjacent siblings */\n  /*\n * Sublists\n * Note: General sibling selector allows reply block between comment and sublist\n */\n  /* Tablet and bigger */\n  /* Adjacent siblings */\n  /* Style modifier\n ========================================================================== */\n  /* ========================================================================\n   Component: Search\n ========================================================================== */\n  /*\n * 1. Container fits its content\n * 2. Create position context\n * 3. Prevent content overflow\n * 4. Reset `form`\n */\n  /* Input\n ========================================================================== */\n  /*\n * Remove the inner padding and cancel buttons in Chrome on OS X and Safari on OS X.\n */\n  /*\n * Removes placeholder transparency in Firefox.\n */\n  /*\n * 1. Define consistent box sizing.\n * 2. Address margins set differently in Firefox/IE and Chrome/Safari/Opera.\n * 3. Remove `border-radius` in iOS.\n * 4. Change font properties to `inherit` in all browsers\n * 5. Show the overflow in Edge.\n * 6. Remove default style in iOS.\n * 7. Vertical alignment\n * 8. Take the full container width\n * 9. Style\n */\n  /* Placeholder */\n  /* Icon (Adopts `uk-icon`)\n ========================================================================== */\n  /*\n * Remove default focus style\n */\n  /*\n * Position above input\n * 1. Set position\n * 2. Center icon vertically and horizontally\n * 3. Style\n */\n  /*\n * Required for `a`.\n */\n  /*\n * Make `input` element clickable through icon, e.g. if it's a `span`\n */\n  /*\n * Position modifier\n */\n  /* Default modifier\n ========================================================================== */\n  /*\n * Input\n */\n  /* Focus */\n  /*\n * Icon\n */\n  /* Navbar modifier\n ========================================================================== */\n  /*\n * Input\n */\n  /*\n * Icon\n */\n  /* Large modifier\n ========================================================================== */\n  /*\n * Input\n */\n  /*\n * Icon\n */\n  /* Toggle\n ========================================================================== */\n  /* Hover + Focus */\n  /* ========================================================================\n   Component: Nav\n ========================================================================== */\n  /*\n * Reset\n * 1. Prepare lists\n * 2. Prepare links\n * 3. Remove default focus style\n */\n  /* 1 */\n  /* 2 */\n  /* 3 */\n  /*\n * Items\n * Must target `a` elements to exclude other elements (e.g. lists)\n */\n  /* Sublists\n ========================================================================== */\n  /*\n * Level 2\n * `ul` needed for higher specificity to override padding\n */\n  /*\n * Level 3 and deeper\n */\n  /*\n * Items\n */\n  /* Parent icon modifier\n ========================================================================== */\n  /* Header\n ========================================================================== */\n  /* Divider\n ========================================================================== */\n  /* Default modifier\n ========================================================================== */\n  /*\n * Items\n */\n  /* Hover + Focus */\n  /* Active */\n  /*\n * Header\n */\n  /*\n * Divider\n */\n  /*\n * Sublists\n */\n  /* Primary modifier\n ========================================================================== */\n  /*\n * Items\n */\n  /* Hover + Focus */\n  /* Active */\n  /*\n * Header\n */\n  /*\n * Divider\n */\n  /*\n * Sublists\n */\n  /* Alignment modifier\n ========================================================================== */\n  /* Sublists */\n  /* Parent icon modifier  */\n  /* ========================================================================\n   Component: Navbar\n ========================================================================== */\n  /*\n * 1. Create position context to center navbar group\n */\n  /* Container\n ========================================================================== */\n  /*\n * Remove pseudo elements created by micro clearfix as precaution (if Container component is used)\n */\n  /* Groups\n ========================================================================== */\n  /*\n * 1. Align navs and items vertically if they have a different height\n * 2. Note: IE 11 requires an extra `div` which affects the center selector\n */\n  /*\n * Horizontal alignment\n * 1. Create position context for centered navbar with sub groups (left/right)\n * 2. Needed for dropdowns because a new position context is created\n *    `z-index` must be smaller than off-canvas\n * 3. Fix text wrapping if the centered section is larger than 50% of the navbar\n * 4. Align sub groups for centered navbar\n */\n  /* 3 */\n  /* 4 */\n  /* Nav\n ========================================================================== */\n  /*\n * 1. Reset list\n */\n  /*\n * Allow items to wrap into the next line\n * Only not `absolute` positioned groups\n */\n  /*\n * Items\n * 1. Center content vertically and horizontally\n * 2. Dimensions\n * 3. Style\n * 4. Required for `a`\n */\n  /*\n * Nav items\n */\n  /*\n * Hover\n * Apply hover style also to focus state and if dropdown is opened\n */\n  /* OnClick */\n  /* Active */\n  /* Item\n ========================================================================== */\n  /* Toggle\n ========================================================================== */\n  /*\n * Icon\n * Adopts `uk-icon`\n */\n  /* Hover + Focus */\n  /* Subtitle\n ========================================================================== */\n  /* Style modifiers\n ========================================================================== */\n  /* Dropdown\n ========================================================================== */\n  /*\n * Adopts `uk-dropdown`\n * 1. Hide by default\n * 2. Set position\n * 3. Set a default width\n * 4. Style\n */\n  /* Show */\n  /*\n * Direction / Alignment modifiers\n */\n  /* Direction */\n  /*\n * Grid\n * Adopts `uk-grid`\n */\n  /* Gutter Horizontal */\n  /* Gutter Vertical */\n  /* Stack */\n  /*\n * Width modifier\n */\n  /*\n * Dropbar modifier\n */\n  /* Dropdown Nav\n * Adopts `uk-nav`\n ========================================================================== */\n  /*\n * Items\n */\n  /* Hover + Focus */\n  /* Active */\n  /*\n * Header\n */\n  /*\n * Divider\n */\n  /*\n * Sublists\n */\n  /* Dropbar\n ========================================================================== */\n  /*\n * Slide modifier\n */\n  /*\n     * Navbar\n     */\n  /*\n     * Grid Divider\n     */\n  /* Vertical */\n  /* ========================================================================\n   Component: Subnav\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Gutter\n * 3. Reset list\n */\n  /*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n * 3. Create position context for dropdowns\n */\n  /* Items\n ========================================================================== */\n  /*\n * Items must target `a` elements to exclude other elements (e.g. dropdowns)\n * Using `:first-child` instead of `a` to support `span` elements for text\n * 1. Prevent gap if child element is `inline-block`, e.g. an icon\n * 2. Style\n */\n  /* Hover + Focus */\n  /* Active */\n  /* Divider modifier\n ========================================================================== */\n  /*\n * 1. Align items and divider vertically\n */\n  /*\n * Divider\n * `nth-child` makes it also work without JS if it's only one row\n */\n  /* Pill modifier\n ========================================================================== */\n  /* Hover + Focus */\n  /* OnClick */\n  /* Active */\n  /* Disabled\n * The same for all style modifiers\n ========================================================================== */\n  /* ========================================================================\n   Component: Breadcrumb\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n */\n  /*\n * Space is allocated solely based on content dimensions: 0 0 auto\n */\n  /* Items\n ========================================================================== */\n  /* Hover + Focus */\n  /* Disabled */\n  /* Active */\n  /*\n * Divider\n * `nth-child` makes it also work without JS if it's only one row\n */\n  /* ========================================================================\n   Component: Pagination\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Gutter\n * 3. Reset list\n */\n  /*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n * 3. Create position context for dropdowns\n */\n  /* Items\n ========================================================================== */\n  /*\n * 1. Prevent gap if child element is `inline-block`, e.g. an icon\n * 2. Style\n */\n  /* Hover + Focus */\n  /* Active */\n  /* Disabled */\n  /* ========================================================================\n   Component: Tab\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Gutter\n * 3. Reset list\n */\n  /*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n * 3. Create position context for dropdowns\n */\n  /* Items\n ========================================================================== */\n  /*\n * Items must target `a` elements to exclude other elements (e.g. dropdowns)\n * 1. Center text if a width is set\n * 2. Style\n */\n  /* Hover + Focus */\n  /* Active */\n  /* Disabled */\n  /* Position modifier\n ========================================================================== */\n  /*\n * Bottom\n */\n  /*\n * Left + Right\n * 1. Reset Gutter\n */\n  /* 1 */\n  /* ========================================================================\n   Component: Slidenav\n ========================================================================== */\n  /*\n * Adopts `uk-icon`\n */\n  /* Hover + Focus */\n  /* OnClick */\n  /* Icon modifier\n ========================================================================== */\n  /*\n * Previous\n */\n  /*\n * Next\n */\n  /* Size modifier\n ========================================================================== */\n  /* Container\n ========================================================================== */\n  /* ========================================================================\n   Component: Dotnav\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n * 3. Gutter\n */\n  /*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n */\n  /* Items\n ========================================================================== */\n  /*\n * Items\n * 1. Hide text if present\n */\n  /* Hover + Focus */\n  /* OnClick */\n  /* Active */\n  /* Modifier: 'uk-dotnav-vertical'\n ========================================================================== */\n  /*\n * 1. Change direction\n * 2. Gutter\n */\n  /* 2 */\n  /* ========================================================================\n   Component: Thumbnav\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n * 3. Gutter\n */\n  /*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n */\n  /* Items\n ========================================================================== */\n  /*\n * Items\n */\n  /* Hover + Focus */\n  /* Active */\n  /* Modifier: 'uk-thumbnav-vertical'\n ========================================================================== */\n  /*\n * 1. Change direction\n * 2. Gutter\n */\n  /* 2 */\n  /* ========================================================================\n   Component: Accordion\n ========================================================================== */\n  /* Item\n ========================================================================== */\n  /* Title\n ========================================================================== */\n  /* Hover + Focus */\n  /* Content\n ========================================================================== */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* ========================================================================\n   Component: Drop\n ========================================================================== */\n  /*\n * 1. Hide by default\n * 2. Set position\n * 3. Set a default width\n */\n  /* Show */\n  /* Direction / Alignment modifiers\n ========================================================================== */\n  /* Direction */\n  /* Grid modifiers\n ========================================================================== */\n  /* ========================================================================\n   Component: Dropdown\n ========================================================================== */\n  /*\n * 1. Hide by default\n * 2. Set position\n * 3. Set a default width\n * 4. Style\n */\n  /* Show */\n  /* Nav\n * Adopts `uk-nav`\n ========================================================================== */\n  /*\n * Items\n */\n  /* Hover + Focus + Active */\n  /*\n * Header\n */\n  /*\n * Divider\n */\n  /*\n * Sublists\n */\n  /* Direction / Alignment modifiers\n ========================================================================== */\n  /* Direction */\n  /* Grid modifiers\n ========================================================================== */\n  /* ========================================================================\n   Component: Modal\n ========================================================================== */\n  /*\n * 1. Hide by default\n * 2. Set position\n * 3. Allow scrolling for the modal dialog\n * 4. Horizontal padding\n * 5. Mask the background page\n * 6. Fade-in transition\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /*\n * Open\n */\n  /* Page\n ========================================================================== */\n  /*\n * Prevent scrollbars\n */\n  /* Dialog\n ========================================================================== */\n  /*\n * 1. Create position context for spinner and close button\n * 2. Dimensions\n * 3. Fix `max-width: 100%` not working in combination with flex and responsive images in IE11\n *    `!important` needed to overwrite `uk-width-auto`. See `#modal-media-image` in tests\n * 4. Style\n * 5. Slide-in transition\n */\n  /*\n * Open\n */\n  /* Size modifier\n ========================================================================== */\n  /*\n * Container size\n * Take the same size as the Container component\n */\n  /*\n * Full size\n * 1. Remove padding and background from modal\n * 2. Reset all default declarations from modal dialog\n */\n  /* 1 */\n  /* 2 */\n  /* Sections\n ========================================================================== */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Title\n ========================================================================== */\n  /* Close\n * Adopts `uk-close`\n ========================================================================== */\n  /*\n * Remove margin from adjacent element\n */\n  /*\n * Hover\n */\n  /*\n * Default\n */\n  /*\n * Outside\n * 1. Prevent scrollbar on small devices\n */\n  /* Tablet landscape and bigger */\n  /*\n * Full\n */\n  /* ========================================================================\n   Component: Lightbox\n ========================================================================== */\n  /*\n * 1. Hide by default\n * 2. Set position\n * 3. Allow scrolling for the modal dialog\n * 4. Horizontal padding\n * 5. Mask the background page\n * 6. Fade-in transition\n */\n  /*\n * Open\n * 1. Center child\n * 2. Fade-in\n */\n  /* Page\n ========================================================================== */\n  /*\n * Prevent scrollbars\n */\n  /* Item\n ========================================================================== */\n  /*\n * 1. Center child within the viewport\n * 2. Not visible by default\n * 3. Color needed for spinner icon\n * 4. Optimize animation\n * 5. Responsiveness\n *    Using `vh` for `max-height` to fix image proportions after resize in Safari and Opera\n *    Using `vh` and `vw` to make responsive image work in IE11\n */\n  /* 5 */\n  /* Toolbar\n ========================================================================== */\n  /* Toolbar Icon (Close)\n ========================================================================== */\n  /*\n * Hover\n */\n  /* Button (Slidenav)\n ========================================================================== */\n  /*\n * 1. Center icon vertically and horizontally\n */\n  /*\n * Hover\n */\n  /* Caption\n ========================================================================== */\n  /* Iframe\n ========================================================================== */\n  /* ========================================================================\n   Component: Slideshow\n ========================================================================== */\n  /*\n * 1. Prevent tab highlighting on iOS.\n */\n  /* Items\n ========================================================================== */\n  /*\n * 1. Create position and stacking context\n * 2. Reset list\n * 3. Clip child elements\n * 4. Prevent displaying the callout information on iOS.\n */\n  /* Item\n ========================================================================== */\n  /*\n * 1. Position items above each other\n * 2. Take the full width\n * 3. Clip child elements, e.g. for `uk-cover`\n * 4. Optimize animation\n * 5. Disable horizontal panning gestures in IE11 and Edge\n */\n  /*\n * Hide not active items\n */\n  /* ========================================================================\n   Component: Slider\n ========================================================================== */\n  /*\n * 1. Prevent tab highlighting on iOS.\n */\n  /* Container\n ========================================================================== */\n  /*\n * 1. Clip child elements\n */\n  /* Items\n ========================================================================== */\n  /*\n * 1. Optimize animation\n * 2. Create a containing block. In Safari it's neither created by `transform` nor `will-change`.\n */\n  /*\n * 1. Reset list style without interfering with grid\n * 2. Prevent displaying the callout information on iOS.\n */\n  /* Item\n ========================================================================== */\n  /*\n * 1. Let items take content dimensions (0 0 auto)\n * 2. Create position context\n * 3. Disable horizontal panning gestures in IE11 and Edge\n */\n  /* ========================================================================\n   Component: Sticky\n ========================================================================== */\n  /*\n * 1. Resolve frame rate issues on devices with lower frame rates by forcing hardware acceleration\n */\n  /*\n * Faster animations\n */\n  /* ========================================================================\n   Component: Off-canvas\n ========================================================================== */\n  /*\n * 1. Hide by default\n * 2. Set position\n */\n  /*\n * Flip modifier\n */\n  /* Bar\n ========================================================================== */\n  /*\n * 1. Set position\n * 2. Size and style\n * 3. Allow scrolling\n * 4. Transform\n */\n  /* Tablet landscape and bigger */\n  /* Flip modifier */\n  /*\n * Open\n */\n  /*\n * Slide Animation (Used in slide and push mode)\n */\n  /*\n * Reveal Animation\n * 1. Set position\n * 2. Clip the bar\n * 3. Animation\n * 4. Reset transform\n */\n  /* Tablet landscape and bigger */\n  /*\n * Flip modifier\n */\n  /* Close\n * Adopts `uk-close`\n ========================================================================== */\n  /* Overlay\n ========================================================================== */\n  /*\n * Overlay the whole page. Needed for the `::before`\n * 1. Using `100vw` so no modification is needed when off-canvas is flipped\n * 2. Allow for closing with swipe gesture on devices with pointer events.\n */\n  /*\n * 1. Mask the whole page\n * 2. Fade-in transition\n */\n  /* Container\n ========================================================================== */\n  /*\n * Prevent horizontal scrollbar when the content is slide-out\n * Has to be on the `html` element too to make it work on the `body`\n */\n  /*\n * Prevent all scrollbars if overlay is used\n */\n  /* Content\n ========================================================================== */\n  /*\n * Prepare slide-out animation (Used in reveal and push mode)\n * Using `position: left` instead of `transform` because position `fixed` elements like sticky navbars\n * lose their fixed state and behaves like `absolute` within a transformed container\n * Note: JS sets a fixed width and height so the page can slide-out without shrinking\n * 1. Smooth scrolling\n */\n  /* Disable scrolling if overlay mode */\n  /*\n * Activate slide-out animation\n */\n  /* Tablet landscape and bigger */\n  /* ========================================================================\n   Component: Switcher\n ========================================================================== */\n  /*\n * Reset list\n */\n  /* Items\n ========================================================================== */\n  /*\n * Hide not active items\n */\n  /*\n * Remove margin from the last-child\n */\n  /* ========================================================================\n   Component: Leader\n ========================================================================== */\n  /*\n * 1. Place element in text flow\n * 2. Never break into a new line\n * 3. Get a string back with as many repeating characters to fill the container\n * 4. Prevent wrapping. Overflowing characters will be clipped by the container\n */\n  /*\n * Hide if media does not match\n */\n  /* Pass fill character to JS */\n  /* ========================================================================\n   Component: Iconnav\n ========================================================================== */\n  /*\n * 1. Allow items to wrap into the next line\n * 2. Reset list\n * 3. Gutter\n */\n  /*\n * 1. Space is allocated solely based on content dimensions: 0 0 auto\n * 2. Gutter\n */\n  /* Items\n ========================================================================== */\n  /*\n * Items must target `a` elements to exclude other elements (e.g. dropdowns)\n * 1. Prevent gap if child element is `inline-block`, e.g. an icon\n * 2. Style\n */\n  /* Hover + Focus */\n  /* Active */\n  /* Modifier: 'uk-iconnav-vertical'\n ========================================================================== */\n  /*\n * 1. Change direction\n * 2. Gutter\n */\n  /* 2 */\n  /* ========================================================================\n   Component: Notification\n ========================================================================== */\n  /*\n * 1. Set position\n * 2. Dimensions\n */\n  /* Position modifiers\n========================================================================== */\n  /* Responsiveness\n========================================================================== */\n  /* Phones portrait and smaller */\n  /* Message\n========================================================================== */\n  /* Close\n * Adopts `uk-close`\n ========================================================================== */\n  /* Style modifiers\n ========================================================================== */\n  /*\n * Primary\n */\n  /*\n * Success\n */\n  /*\n * Warning\n */\n  /*\n * Danger\n */\n  /* ========================================================================\n   Component: Tooltip\n ========================================================================== */\n  /*\n * 1. Hide by default\n * 2. Position\n * 3. Dimensions\n * 4. Style\n */\n  /* Show */\n  /* Direction / Alignment modifiers\n ========================================================================== */\n  /* Direction */\n  /* ========================================================================\n   Component: Placeholder\n ========================================================================== */\n  /* Add margin if adjacent element */\n  /*\n * Remove margin from the last-child\n */\n  /* ========================================================================\n   Component: Progress\n ========================================================================== */\n  /*\n * 1. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n * 2. Remove default style\n * 3. Behave like a block element\n * 4. Remove borders in Firefox and Edge\n * 5. Set background color for progress container in Firefox, IE11 and Edge\n * 6. Style\n */\n  /* Add margin if adjacent element */\n  /*\n * Remove animated circles for indeterminate state in IE11 and Edge\n */\n  /*\n * Progress container\n * 2. Remove progress bar for indeterminate state in Firefox\n */\n  /* 2 */\n  /*\n * Progress bar\n * 1. Remove right border in IE11 and Edge\n */\n  /* ========================================================================\n   Component: Sortable\n ========================================================================== */\n  /*\n * Deactivate browser touch actions in IE11 and Edge\n */\n  /*\n * Deactivate pointer-events on SVGs in Safari\n */\n  /*\n * Remove margin from the last-child\n */\n  /* Drag\n ========================================================================== */\n  /* Placeholder\n ========================================================================== */\n  /* Empty modifier\n ========================================================================== */\n  /* Handle\n ========================================================================== */\n  /* Hover */\n  /* ========================================================================\n   Component: Countdown\n ========================================================================== */\n  /* Item\n ========================================================================== */\n  /*\n * 1. Center numbers and separators vertically\n */\n  /* Number\n ========================================================================== */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Separator\n ========================================================================== */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Label\n ========================================================================== */\n  /* ========================================================================\n   Component: Animation\n ========================================================================== */\n  /* Direction modifier\n ========================================================================== */\n  /* Animations for scrollspy\n ========================================================================== */\n  /*\n * Fade\n */\n  /*\n * Scale\n */\n  /*\n * Slide\n */\n  /*\n * Slide Small\n */\n  /*\n * Slide Medium\n */\n  /*\n * Kenburns\n */\n  /*\n * Shake\n */\n  /* Duration modifier\n ========================================================================== */\n  /* Enable animation only on hover\n========================================================================== */\n  /*\n * Note: Firefox and IE needs this because animations are not triggered when switching between display `none` and `block`\n */\n  /* Keyframes used by animation classes\n ========================================================================== */\n  /*\n * Fade\n */\n  /*\n * Slide Top\n */\n  /*\n * Slide Bottom\n */\n  /*\n * Slide Left\n */\n  /*\n * Slide Right\n */\n  /*\n * Slide Top Small\n */\n  /*\n * Slide Bottom Small\n */\n  /*\n * Slide Left Small\n */\n  /*\n * Slide Right Small\n */\n  /*\n * Slide Top Medium\n */\n  /*\n * Slide Bottom Medium\n */\n  /*\n * Slide Left Medium\n */\n  /*\n * Slide Right Medium\n */\n  /*\n * Scale Up\n */\n  /*\n * Scale Down\n */\n  /*\n * Kenburns\n */\n  /*\n * Shake\n */\n  /* ========================================================================\n   Component: Width\n ========================================================================== */\n  /* Equal child widths\n ========================================================================== */\n  /*\n *    Instead of 0, 1px is needed to make cell wrap into next row if predecessor is 100% wide\n *    and the grid gutter is 0 pixels wide\n */\n  /*\n * 1. Make `width: 1px` work, because according to the spec flex items won’t shrink\n *    below their minimum content size. To change this, set the min-width.\n *    Only needed for Firefox. All other browsers ignore this.\n *\n * 2. `width` is ignored when wrapping flex items in Safari\n *    https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /* Single Widths\n ========================================================================== */\n  /*\n * 1. `max-width` is needed for the pixel-based classes\n */\n  /* Halves */\n  /* Thirds */\n  /* Quarters */\n  /* Fifths */\n  /* Sixths */\n  /* Pixel */\n  /* Auto */\n  /* Expand */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /* ========================================================================\n   Component: Height\n ========================================================================== */\n  /*\n * Only works if parent element has a height set\n */\n  /*\n * Useful to create image teasers\n */\n  /*\n * Pixel\n * Useful for `overflow: auto`\n */\n  /* ========================================================================\n   Component: Text\n ========================================================================== */\n  /* Style modifiers\n ========================================================================== */\n  /* Size modifiers\n ========================================================================== */\n  /* Weight modifier\n ========================================================================== */\n  /* Transform modifier\n ========================================================================== */\n  /* Color modifiers\n ========================================================================== */\n  /* Background modifier\n ========================================================================== */\n  /*\n * 1. The background clips to the foreground text. Works in Chrome, Firefox, Safari, Edge and Opera\n *    Default color is set to transparent\n * 2. Container fits the text\n * 3. Fallback color for IE11\n */\n  /* Alignment modifiers\n ========================================================================== */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /*\n * Vertical\n */\n  /* Wrap modifiers\n ========================================================================== */\n  /*\n * Prevent text from wrapping onto multiple lines\n */\n  /*\n * 1. Make sure a max-width is set after which truncation can occur\n * 2. Prevent text from wrapping onto multiple lines, and truncate with an ellipsis\n * 3. Fix for table cells\n */\n  /* 2 */\n  /*\n * 1. Wrap long words onto the next line and break them if they are too long to fit\n * 2. Legacy `word-wrap` as fallback for `overflow-wrap`\n * 3. Fix `overflow-wrap` which doesn't work with table cells in Chrome, Opera, IE11 and Edge\n *    Must use `break-all` to support IE11 and Edge\n * Note: Not using `hyphens: auto;` because it hyphenates text even if not needed\n */\n  /* 3 */\n  /* ========================================================================\n   Component: Column\n ========================================================================== */\n  /* Desktop and bigger */\n  /*\n * Fix image 1px line wrapping into the next column in Chrome\n */\n  /* Divider\n ========================================================================== */\n  /*\n * 1. Double the column gap\n */\n  /* Desktop and bigger */\n  /* Width modifiers\n ========================================================================== */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /* Make element span across all columns\n * Does not work in Firefox yet\n ========================================================================== */\n  /* ========================================================================\n   Component: Cover\n ========================================================================== */\n  /*\n * Works with iframes and embedded content\n * 1. Reset responsiveness for embedded content\n * 2. Center object\n * Note: Percent values on the `top` property only works if this element\n *       is absolute positioned or if the container has a height\n */\n  /* Container\n ========================================================================== */\n  /*\n * 1. Parent container which clips resized object\n * 2. Needed if the child is positioned absolute. See note above\n */\n  /* ========================================================================\n   Component: Background\n ========================================================================== */\n  /* Color\n ========================================================================== */\n  /* Size\n ========================================================================== */\n  /* Position\n ========================================================================== */\n  /* Repeat\n ========================================================================== */\n  /* Attachment\n ========================================================================== */\n  /*\n * 1. Fix bug introduced in Chrome 67: the background image is not visible if any element on the page uses `translate3d`\n */\n  /*\n * Exclude touch devices because `fixed` doesn't work on iOS and Android\n */\n  /* Image\n ========================================================================== */\n  /* Phone portrait and smaller */\n  /* Phone landscape and smaller */\n  /* Tablet landscape and smaller */\n  /* Desktop and smaller */\n  /* Blend modes\n ========================================================================== */\n  /* ========================================================================\n   Component: Align\n ========================================================================== */\n  /*\n * Default\n */\n  /*\n * Center\n */\n  /*\n * Left/Right\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /* ========================================================================\n   Component: SVG\n ========================================================================== */\n  /*\n * 1. Fill all SVG elements with the current text color if no `fill` attribute is set\n * 2. Set the fill and stroke color of all SVG elements to the current text color\n * 3. Fix for uppercase attribute names in Edge. Will be fixed in Windows 10 builds 16251+\n */\n  /* 1 */\n  /*\n * Fix Firefox blurry SVG rendering: https://bugzilla.mozilla.org/show_bug.cgi?id=1046835\n */\n  /* ========================================================================\n   Component: Utility\n ========================================================================== */\n  /* Panel\n ========================================================================== */\n  /*\n * Micro clearfix\n */\n  /*\n * Remove margin from the last-child\n */\n  /*\n * Scrollable\n */\n  /* Clearfix\n ========================================================================== */\n  /*\n * 1. `table-cell` is used with `::before` because `table` creates a 1px gap when it becomes a flex item, only in Webkit\n * 2. `table` is used again with `::after` because `clear` only works with block elements.\n * Note: `display: block` with `overflow: hidden` is currently not working in the latest Safari\n */\n  /* 1 */\n  /* 2 */\n  /* Float\n ========================================================================== */\n  /*\n * 1. Prevent content overflow\n */\n  /* 1 */\n  /* Overfow\n ========================================================================== */\n  /*\n * Enable scrollbars if content is clipped\n * Note: Firefox ignores `padding-bottom` for the scrollable overflow https://bugzilla.mozilla.org/show_bug.cgi?id=748518\n */\n  /* Resize\n ========================================================================== */\n  /* Display\n ========================================================================== */\n  /* Inline\n ========================================================================== */\n  /*\n * 1. Container fits its content\n * 2. Create position context\n * 3. Prevent content overflow\n * 4. Behave like most inline-block elements\n * 5. Force hardware acceleration without creating a new stacking context\n *    to fix 1px glitch when combined with overlays and transitions in Webkit\n * 6. Clip child elements\n */\n  /* Responsive objects\n ========================================================================== */\n  /*\n * Preserve original dimensions\n * Because `img, `video`, `canvas` and  `audio` are already responsive by default, see Base component\n */\n  /*\n * Responsiveness\n * Corrects `max-width` and `max-height` behavior if padding and border are used\n */\n  /*\n * 1. Set a maximum width. `important` needed to override `uk-preserve-width img`\n * 2. Auto scale the height. Only needed if `height` attribute is present\n */\n  /*\n * 1. Set a maximum height. Only works if the parent element has a fixed height\n * 2. Auto scale the width. Only needed if `width` attribute is present\n * 3. Reset max-width, which `img, `video`, `canvas` and  `audio` already have by default\n */\n  /* Border\n ========================================================================== */\n  /*\n * Fix `overflow: hidden` to be ignored with border-radius and CSS transforms in Webkit\n */\n  /* Box-shadow\n ========================================================================== */\n  /*\n * Hover\n */\n  /* Box-shadow bottom\n ========================================================================== */\n  /*\n * 1. Set position.\n * 2. Set style\n * 3. Blur doesn't work on pseudo elements with negative `z-index` in Edge.\n *    Solved by using `before` and add position context to child elements.\n */\n  /* Drop cap\n ========================================================================== */\n  /*\n * 1. Firefox doesn't apply `::first-letter` if the first letter is inside child elements\n *    https://bugzilla.mozilla.org/show_bug.cgi?id=214004\n * 2. In Firefox, a floating `::first-letter` doesn't have a line box and there for no `line-height`\n *    https://bugzilla.mozilla.org/show_bug.cgi?id=317933\n * 3. Caused by 1.: Edge creates two nested `::first-letter` containers, one for each selector\n *    This doubles the `font-size` exponential when using the `em` unit.\n */\n  /* 2 */\n  /* 3 */\n  /* Logo\n ========================================================================== */\n  /*\n * 1. Required for `a`\n */\n  /* Hover + Focus */\n  /* Disabled State\n ========================================================================== */\n  /* Drag State\n ========================================================================== */\n  /*\n * 1. Needed if moving over elements with have their own cursor on hover, e.g. links or buttons\n * 2. Fix dragging over iframes\n */\n  /* 2 */\n  /* Dragover State\n ========================================================================== */\n  /*\n * Create a box-shadow when dragging a file over the upload area\n */\n  /* Blend modes\n ========================================================================== */\n  /* Transform\n========================================================================== */\n  /* Transform Origin\n========================================================================== */\n  /* ========================================================================\n   Component: Flex\n ========================================================================== */\n  /*\n * Remove pseudo elements created by micro clearfix as precaution\n */\n  /* Alignment\n ========================================================================== */\n  /*\n * Align items along the main axis of the current line of the flex container\n * Row: Horizontal\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /*\n * Align items in the cross axis of the current line of the flex container\n * Row: Vertical\n */\n  /* Direction\n ========================================================================== */\n  /* Wrap\n ========================================================================== */\n  /*\n * Aligns items within the flex container when there is extra space in the cross-axis\n * Only works if there is more than one line of flex items\n */\n  /* Item ordering\n ========================================================================== */\n  /*\n * Default is 0\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /* Item dimensions\n ========================================================================== */\n  /*\n * Initial: 0 1 auto\n * Content dimensions, but shrinks\n */\n  /*\n * No Flex: 0 0 auto\n * Content dimensions\n */\n  /*\n * Relative Flex: 1 1 auto\n * Space is allocated considering content\n */\n  /*\n * Absolute Flex: 1 1 0%\n * Space is allocated solely based on flex\n */\n  /* ========================================================================\n   Component: Margin\n ========================================================================== */\n  /*\n * Default\n */\n  /* Small\n ========================================================================== */\n  /* Medium\n ========================================================================== */\n  /* Large\n ========================================================================== */\n  /* Desktop and bigger */\n  /* XLarge\n ========================================================================== */\n  /* Desktop and bigger */\n  /* Remove\n ========================================================================== */\n  /* Auto\n ========================================================================== */\n  /* ========================================================================\n   Component: Padding\n ========================================================================== */\n  /* Desktop and bigger */\n  /* Small\n ========================================================================== */\n  /* Large\n ========================================================================== */\n  /* Desktop and bigger */\n  /* Remove\n ========================================================================== */\n  /* ========================================================================\n   Component: Position\n ========================================================================== */\n  /* Directions\n ========================================================================== */\n  /* Edges\n ========================================================================== */\n  /* Don't use `width: 100%` because it is wrong if the parent has padding. */\n  /* Corners\n ========================================================================== */\n  /*\n * Center\n * 1. Fix text wrapping if content is larger than 50% of the container (Not working in Firefox)\n * 2. Fix text wrapping for Firefox\n */\n  /* Vertical */\n  /* Horizontal */\n  /* Cover\n ========================================================================== */\n  /* Utility\n ========================================================================== */\n  /* Margin modifier\n ========================================================================== */\n  /*\n * Small\n */\n  /*\n * Medium\n */\n  /*\n * Large\n */\n  /* Desktop and bigger */\n  /* ========================================================================\n   Component: Transition\n ========================================================================== */\n  /*\n * Using multiple selectors to exclude `uk-transition-toggle`\n * Note: Transitions don't work with `uk-postion-center-*` classes because they also use `transform`\n *       Just put the transition in an extra `div`\n */\n  /*\n * Fade\n */\n  /* Show */\n  /*\n * Scale\n * Note: Using `scale3d` for better image rendering\n */\n  /* Show */\n  /*\n * Slide\n */\n  /* Show */\n  /* Opacity modifier\n========================================================================== */\n  /* Duration modifiers\n========================================================================== */\n  /* ========================================================================\n   Component: Visibility\n ========================================================================== */\n  /*\n * Hidden\n * `hidden` attribute also set here to make it stronger\n */\n  /* Phone landscape and bigger */\n  /* Tablet landscape and bigger */\n  /* Desktop and bigger */\n  /* Large screen and bigger */\n  /*\n * Visible\n */\n  /* Phone portrait and smaller */\n  /* Phone landscape and smaller */\n  /* Tablet landscape and smaller */\n  /* Desktop and smaller */\n  /* Visibility\n ========================================================================== */\n  /* Hover\n ========================================================================== */\n  /*\n * Hidden\n * Can't use `display: hidden` because it's not focusable. This is accessible through keyboard.\n */\n  /*\n * Invisible\n * Can't use `visibility: hidden` because it's not focusable. This is accessible through keyboard.\n */\n  /* Touch\n ========================================================================== */\n  /*\n * Hide if primary pointing device has limited accuracy, e.g. a touch screen.\n * Works on mobile browsers: Safari, Chrome and Android browser\n */\n  /*\n * Hide if primary pointing device is accurate, e.g. mouse.\n * 1. Fallback for IE11 and Firefox, because `pointer` is not supported\n * 2. Reset if supported\n */\n  /* 1 */\n  /* ========================================================================\n   Component: Inverse\n ========================================================================== */\n  /*\n * Implemented class depends on the general theme color\n * `uk-light` is for light colors on dark backgrounds\n * `uk-dark` is or dark colors on light backgrounds\n */\n  /* ========================================================================\n   Component: Print\n ========================================================================== */\n}\n.uk-scope html {\n    /* 1 */\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 1.5;\n    /* 2 */\n    -webkit-text-size-adjust: 100%;\n    /* 3 */\n    background: #fff;\n    color: #666;\n}\n.uk-scope body {\n    margin: 0;\n}\n.uk-scope a {\n    -webkit-text-decoration-skip: objects;\n}\n.uk-scope a:active,\n  .uk-scope a:hover {\n    outline: none;\n}\n.uk-scope a,\n  .uk-scope .uk-link {\n    color: #1e87f0;\n    text-decoration: none;\n    cursor: pointer;\n}\n.uk-scope a:hover,\n  .uk-scope .uk-link:hover {\n    color: #0f6ecd;\n    text-decoration: underline;\n}\n.uk-scope abbr[title] {\n    /* 1 */\n    border-bottom: none;\n    /* 2 */\n    text-decoration: underline;\n    text-decoration: underline dotted;\n}\n.uk-scope b,\n  .uk-scope strong {\n    font-weight: bolder;\n}\n.uk-scope :not(pre) > code,\n  .uk-scope :not(pre) > kbd,\n  .uk-scope :not(pre) > samp {\n    /* 1 */\n    font-family: Consolas, monaco, monospace;\n    /* 2 */\n    font-size: 0.875rem;\n    /* 3 */\n    color: #f0506e;\n    white-space: nowrap;\n    padding: 2px 6px;\n    background: #f8f8f8;\n}\n.uk-scope em {\n    color: #f0506e;\n}\n.uk-scope ins {\n    background: #ffd;\n    color: #666;\n    text-decoration: none;\n}\n.uk-scope mark {\n    background: #ffd;\n    color: #666;\n}\n.uk-scope q {\n    font-style: italic;\n}\n.uk-scope small {\n    font-size: 80%;\n}\n.uk-scope sub,\n  .uk-scope sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n.uk-scope sup {\n    top: -0.5em;\n}\n.uk-scope sub {\n    bottom: -0.25em;\n}\n.uk-scope audio,\n  .uk-scope canvas,\n  .uk-scope iframe,\n  .uk-scope img,\n  .uk-scope svg,\n  .uk-scope video {\n    vertical-align: middle;\n}\n.uk-scope audio,\n  .uk-scope canvas,\n  .uk-scope img,\n  .uk-scope video {\n    /* 1 */\n    max-width: 100%;\n    /* 2 */\n    height: auto;\n    /* 3 */\n    box-sizing: border-box;\n}\n.uk-scope svg:not(:root) {\n    overflow: hidden;\n}\n.uk-scope img:not([src]) {\n    visibility: hidden;\n}\n.uk-scope p,\n  .uk-scope ul,\n  .uk-scope ol,\n  .uk-scope dl,\n  .uk-scope pre,\n  .uk-scope address,\n  .uk-scope fieldset,\n  .uk-scope figure {\n    margin: 0 0 20px 0;\n}\n.uk-scope * + p,\n  .uk-scope * + ul,\n  .uk-scope * + ol,\n  .uk-scope * + dl,\n  .uk-scope * + pre,\n  .uk-scope * + address,\n  .uk-scope * + fieldset,\n  .uk-scope * + figure {\n    margin-top: 20px;\n}\n.uk-scope h1,\n  .uk-scope .uk-h1,\n  .uk-scope h2,\n  .uk-scope .uk-h2,\n  .uk-scope h3,\n  .uk-scope .uk-h3,\n  .uk-scope h4,\n  .uk-scope .uk-h4,\n  .uk-scope h5,\n  .uk-scope .uk-h5,\n  .uk-scope h6,\n  .uk-scope .uk-h6 {\n    margin: 0 0 20px 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    font-weight: normal;\n    color: #333;\n    text-transform: none;\n}\n.uk-scope * + h1,\n  .uk-scope * + .uk-h1,\n  .uk-scope * + h2,\n  .uk-scope * + .uk-h2,\n  .uk-scope * + h3,\n  .uk-scope * + .uk-h3,\n  .uk-scope * + h4,\n  .uk-scope * + .uk-h4,\n  .uk-scope * + h5,\n  .uk-scope * + .uk-h5,\n  .uk-scope * + h6,\n  .uk-scope * + .uk-h6 {\n    margin-top: 40px;\n}\n.uk-scope h1,\n  .uk-scope .uk-h1 {\n    font-size: 2.23125rem;\n    line-height: 1.2;\n}\n.uk-scope h2,\n  .uk-scope .uk-h2 {\n    font-size: 1.7rem;\n    line-height: 1.3;\n}\n.uk-scope h3,\n  .uk-scope .uk-h3 {\n    font-size: 1.5rem;\n    line-height: 1.4;\n}\n.uk-scope h4,\n  .uk-scope .uk-h4 {\n    font-size: 1.25rem;\n    line-height: 1.4;\n}\n.uk-scope h5,\n  .uk-scope .uk-h5 {\n    font-size: 16px;\n    line-height: 1.4;\n}\n.uk-scope h6,\n  .uk-scope .uk-h6 {\n    font-size: 0.875rem;\n    line-height: 1.4;\n}\n@media (min-width: 960px) {\n.uk-scope h1,\n    .uk-scope .uk-h1 {\n      font-size: 2.625rem;\n}\n.uk-scope h2,\n    .uk-scope .uk-h2 {\n      font-size: 2rem;\n}\n}\n.uk-scope ul,\n  .uk-scope ol {\n    padding-left: 30px;\n}\n.uk-scope ul > li > ul,\n  .uk-scope ul > li > ol,\n  .uk-scope ol > li > ol,\n  .uk-scope ol > li > ul {\n    margin: 0;\n}\n.uk-scope dt {\n    font-weight: bold;\n}\n.uk-scope dd {\n    margin-left: 0;\n}\n.uk-scope hr,\n  .uk-scope .uk-hr {\n    /* 1 */\n    box-sizing: content-box;\n    height: 0;\n    /* 2 */\n    overflow: visible;\n    /* 3 */\n    text-align: inherit;\n    /* 4 */\n    margin: 0 0 20px 0;\n    border: 0;\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope * + hr,\n  .uk-scope * + .uk-hr {\n    margin-top: 20px;\n}\n.uk-scope address {\n    font-style: normal;\n}\n.uk-scope blockquote {\n    margin: 0 0 20px 0;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    font-style: italic;\n    color: #333;\n}\n.uk-scope * + blockquote {\n    margin-top: 20px;\n}\n.uk-scope blockquote p:last-of-type {\n    margin-bottom: 0;\n}\n.uk-scope blockquote footer {\n    margin-top: 10px;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    color: #666;\n}\n.uk-scope blockquote footer::before {\n    content: \"\\2014   \";\n}\n.uk-scope pre {\n    font: 0.875rem / 1.5 Consolas, monaco, monospace;\n    color: #666;\n    -moz-tab-size: 4;\n    tab-size: 4;\n    /* 1 */\n    overflow: auto;\n    padding: 10px;\n    border: 1px solid #e5e5e5;\n    border-radius: 3px;\n    background: #fff;\n}\n.uk-scope pre code {\n    font-family: Consolas, monaco, monospace;\n}\n.uk-scope ::-moz-selection {\n    background: #39f;\n    color: #fff;\n    text-shadow: none;\n}\n.uk-scope ::selection {\n    background: #39f;\n    color: #fff;\n    text-shadow: none;\n}\n.uk-scope details,\n  .uk-scope main {\n    /* 2 */\n    display: block;\n}\n.uk-scope summary {\n    display: list-item;\n}\n.uk-scope template {\n    display: none;\n}\n.uk-scope iframe {\n    border: 0;\n}\n.uk-scope a,\n  .uk-scope area,\n  .uk-scope button,\n  .uk-scope input,\n  .uk-scope label,\n  .uk-scope select,\n  .uk-scope summary,\n  .uk-scope textarea {\n    touch-action: manipulation;\n}\n.uk-scope .var-media-s::before {\n    content: '640px';\n}\n.uk-scope .var-media-m::before {\n    content: '960px';\n}\n.uk-scope .var-media-l::before {\n    content: '1200px';\n}\n.uk-scope .var-media-xl::before {\n    content: '1600px';\n}\n.uk-scope a.uk-link-muted,\n  .uk-scope .uk-link-muted a {\n    color: #999;\n}\n.uk-scope a.uk-link-muted:hover,\n  .uk-scope .uk-link-muted a:hover {\n    color: #666;\n}\n.uk-scope a.uk-link-text:not(:hover),\n  .uk-scope .uk-link-text a:not(:hover) {\n    color: inherit;\n}\n.uk-scope a.uk-link-text:hover,\n  .uk-scope .uk-link-text a:hover {\n    color: #999;\n}\n.uk-scope a.uk-link-heading:not(:hover),\n  .uk-scope .uk-link-heading a:not(:hover) {\n    color: inherit;\n}\n.uk-scope a.uk-link-heading:hover,\n  .uk-scope .uk-link-heading a:hover {\n    color: #1e87f0;\n    text-decoration: none;\n}\n.uk-scope a.uk-link-reset,\n  .uk-scope a.uk-link-reset:hover,\n  .uk-scope .uk-link-reset a,\n  .uk-scope .uk-link-reset a:hover {\n    color: inherit !important;\n    text-decoration: none !important;\n}\n.uk-scope .uk-heading-primary {\n    font-size: 3rem;\n    line-height: 1.2;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-heading-primary {\n      font-size: 3.375rem;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-heading-primary {\n      font-size: 3.75rem;\n      line-height: 1.1;\n}\n}\n.uk-scope .uk-heading-hero {\n    font-size: 4rem;\n    line-height: 1.1;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-heading-hero {\n      font-size: 6rem;\n      line-height: 1;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-heading-hero {\n      font-size: 8rem;\n      line-height: 1;\n}\n}\n.uk-scope .uk-heading-divider {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-heading-bullet {\n    position: relative;\n}\n.uk-scope .uk-heading-bullet::before {\n    content: \"\";\n    /* 1 */\n    display: inline-block;\n    /* 2 */\n    position: relative;\n    top: calc(-0.1 * 1em);\n    vertical-align: middle;\n    /* 3 */\n    height: 0.9em;\n    margin-right: 10px;\n    border-left: 5px solid #e5e5e5;\n}\n.uk-scope .uk-heading-line {\n    overflow: hidden;\n}\n.uk-scope .uk-heading-line > * {\n    display: inline-block;\n    position: relative;\n}\n.uk-scope .uk-heading-line > ::before,\n  .uk-scope .uk-heading-line > ::after {\n    content: \"\";\n    /* 1 */\n    position: absolute;\n    top: calc(50% - (1px / 2));\n    /* 2 */\n    width: 2000px;\n    /* 3 */\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-heading-line > ::before {\n    right: 100%;\n    margin-right: 0.6em;\n}\n.uk-scope .uk-heading-line > ::after {\n    left: 100%;\n    margin-left: 0.6em;\n}\n.uk-scope [class*='uk-divider'] {\n    /* 1 */\n    border: none;\n    /* 2 */\n    margin-bottom: 20px;\n}\n.uk-scope * + [class*='uk-divider'] {\n    margin-top: 20px;\n}\n.uk-scope .uk-divider-icon {\n    position: relative;\n    height: 20px;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22%23e5e5e5%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n.uk-scope .uk-divider-icon::before,\n  .uk-scope .uk-divider-icon::after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    max-width: calc(50% - (50px / 2));\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-divider-icon::before {\n    right: calc(50% + (50px / 2));\n    width: 100%;\n}\n.uk-scope .uk-divider-icon::after {\n    left: calc(50% + (50px / 2));\n    width: 100%;\n}\n.uk-scope .uk-divider-small {\n    line-height: 0;\n}\n.uk-scope .uk-divider-small::after {\n    content: \"\";\n    display: inline-block;\n    width: 100px;\n    max-width: 100%;\n    border-top: 1px solid #e5e5e5;\n    vertical-align: top;\n}\n.uk-scope .uk-list {\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-list > li::before,\n  .uk-scope .uk-list > li::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-list > li::after {\n    clear: both;\n}\n.uk-scope .uk-list > li > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-list ul {\n    margin: 0;\n    padding-left: 30px;\n    list-style: none;\n}\n.uk-scope .uk-list > li:nth-child(n+2),\n  .uk-scope .uk-list > li > ul {\n    margin-top: 10px;\n}\n.uk-scope .uk-list-divider > li:nth-child(n+2) {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-list-striped > li {\n    padding: 10px 10px;\n}\n.uk-scope .uk-list-striped > li:nth-of-type(odd) {\n    border-top: 1px solid #e5e5e5;\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-list-striped > li:nth-of-type(odd) {\n    background: #f8f8f8;\n}\n.uk-scope .uk-list-striped > li:nth-child(n+2) {\n    margin-top: 0;\n}\n.uk-scope .uk-list-bullet > li {\n    position: relative;\n    padding-left: calc(1.5em + 10px);\n}\n.uk-scope .uk-list-bullet > li::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 1.5em;\n    height: 1.5em;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    float: left;\n}\n.uk-scope .uk-list-large > li:nth-child(n+2),\n  .uk-scope .uk-list-large > li > ul {\n    margin-top: 20px;\n}\n.uk-scope .uk-list-large.uk-list-divider > li:nth-child(n+2) {\n    margin-top: 20px;\n    padding-top: 20px;\n}\n.uk-scope .uk-list-large.uk-list-striped > li {\n    padding: 20px 10px;\n}\n.uk-scope .uk-list-large.uk-list-striped > li:nth-of-type(odd) {\n    border-top: 1px solid #e5e5e5;\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-list-large.uk-list-striped > li:nth-child(n+2) {\n    margin-top: 0;\n}\n.uk-scope .uk-description-list > dt {\n    color: #333;\n    font-size: 0.875rem;\n    font-weight: normal;\n    text-transform: uppercase;\n}\n.uk-scope .uk-description-list > dt:nth-child(n+2) {\n    margin-top: 20px;\n}\n.uk-scope .uk-description-list-divider > dt:nth-child(n+2) {\n    margin-top: 20px;\n    padding-top: 20px;\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-table {\n    /* 1 */\n    border-collapse: collapse;\n    border-spacing: 0;\n    /* 2 */\n    width: 100%;\n    /* 3 */\n    margin-bottom: 20px;\n}\n.uk-scope * + .uk-table {\n    margin-top: 20px;\n}\n.uk-scope .uk-table th {\n    padding: 16px 12px;\n    text-align: left;\n    vertical-align: bottom;\n    /* 1 */\n    font-size: 0.875rem;\n    font-weight: normal;\n    color: #999;\n    text-transform: uppercase;\n}\n.uk-scope .uk-table td {\n    padding: 16px 12px;\n    vertical-align: top;\n}\n.uk-scope .uk-table td > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-table tfoot {\n    font-size: 0.875rem;\n}\n.uk-scope .uk-table caption {\n    font-size: 0.875rem;\n    text-align: left;\n    color: #999;\n}\n.uk-scope .uk-table > tr.uk-active,\n  .uk-scope .uk-table tbody tr.uk-active {\n    background: #ffd;\n}\n.uk-scope .uk-table-middle,\n  .uk-scope .uk-table-middle td {\n    vertical-align: middle !important;\n}\n.uk-scope .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-table-divider > :first-child > tr:not(:first-child) {\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-table-striped tbody tr:nth-of-type(odd) {\n    background: #f8f8f8;\n    border-top: 1px solid #e5e5e5;\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-table-hover > tr:hover,\n  .uk-scope .uk-table-hover tbody tr:hover {\n    background: #ffd;\n}\n.uk-scope .uk-table-small th,\n  .uk-scope .uk-table-small td {\n    padding: 10px 12px;\n}\n.uk-scope .uk-table-large th,\n  .uk-scope .uk-table-large td {\n    padding: 22px 12px;\n}\n.uk-scope .uk-table-justify th:first-child,\n  .uk-scope .uk-table-justify td:first-child {\n    padding-left: 0;\n}\n.uk-scope .uk-table-justify th:last-child,\n  .uk-scope .uk-table-justify td:last-child {\n    padding-right: 0;\n}\n.uk-scope .uk-table-shrink {\n    width: 1px;\n}\n.uk-scope .uk-table-expand {\n    min-width: 150px;\n}\n.uk-scope .uk-table-link {\n    padding: 0 !important;\n}\n.uk-scope .uk-table-link > a {\n    display: block;\n    padding: 16px 12px;\n}\n.uk-scope .uk-table-small .uk-table-link > a {\n    padding: 10px 12px;\n}\n@media (max-width: 959px) {\n.uk-scope .uk-table-responsive,\n    .uk-scope .uk-table-responsive tbody,\n    .uk-scope .uk-table-responsive th,\n    .uk-scope .uk-table-responsive td,\n    .uk-scope .uk-table-responsive tr {\n      display: block;\n}\n.uk-scope .uk-table-responsive thead {\n      display: none;\n}\n.uk-scope .uk-table-responsive th,\n    .uk-scope .uk-table-responsive td {\n      width: auto !important;\n      max-width: none !important;\n      min-width: 0 !important;\n      overflow: visible !important;\n      white-space: normal !important;\n}\n.uk-scope .uk-table-responsive th:not(:first-child):not(.uk-table-link),\n    .uk-scope .uk-table-responsive td:not(:first-child):not(.uk-table-link),\n    .uk-scope .uk-table-responsive .uk-table-link:not(:first-child) > a {\n      padding-top: 5px !important;\n}\n.uk-scope .uk-table-responsive th:not(:last-child):not(.uk-table-link),\n    .uk-scope .uk-table-responsive td:not(:last-child):not(.uk-table-link),\n    .uk-scope .uk-table-responsive .uk-table-link:not(:last-child) > a {\n      padding-bottom: 5px !important;\n}\n.uk-scope .uk-table-justify.uk-table-responsive th,\n    .uk-scope .uk-table-justify.uk-table-responsive td {\n      padding-left: 0;\n      padding-right: 0;\n}\n}\n.uk-scope .uk-table tbody tr {\n    transition: background-color 0.1s linear;\n}\n.uk-scope .uk-icon {\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    border: none;\n    /* 3 */\n    border-radius: 0;\n    /* 4 */\n    overflow: visible;\n    /* 5 */\n    font: inherit;\n    color: inherit;\n    /* 6 */\n    text-transform: none;\n    /* 7. */\n    padding: 0;\n    background-color: transparent;\n    /* 8 */\n    display: inline-block;\n    /* 9 */\n    fill: currentcolor;\n    /* 10 */\n    line-height: 0;\n}\n.uk-scope button.uk-icon:not(:disabled) {\n    cursor: pointer;\n}\n.uk-scope .uk-icon::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n.uk-scope .uk-icon [fill*='#']:not(.uk-preserve),\n  .uk-scope .uk-icon [FILL*='#']:not(.uk-preserve) {\n    fill: currentcolor;\n}\n.uk-scope .uk-icon [stroke*='#']:not(.uk-preserve),\n  .uk-scope .uk-icon [STROKE*='#']:not(.uk-preserve) {\n    stroke: currentcolor;\n}\n.uk-scope .uk-icon > * {\n    transform: translate(0, 0);\n}\n.uk-scope .uk-icon-image {\n    width: 20px;\n    height: 20px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    vertical-align: middle;\n}\n.uk-scope .uk-icon-link {\n    color: #999;\n}\n.uk-scope .uk-icon-link:hover,\n  .uk-scope .uk-icon-link:focus {\n    color: #666;\n    outline: none;\n}\n.uk-scope .uk-icon-link:active,\n  .uk-scope .uk-active > .uk-icon-link {\n    color: #595959;\n}\n.uk-scope .uk-icon-button {\n    box-sizing: border-box;\n    width: 36px;\n    height: 36px;\n    border-radius: 500px;\n    background: #f8f8f8;\n    color: #999;\n    vertical-align: middle;\n    /* 1 */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s ease-in-out;\n    transition-property: color, background-color;\n}\n.uk-scope .uk-icon-button:hover,\n  .uk-scope .uk-icon-button:focus {\n    background-color: #ebebeb;\n    color: #666;\n    outline: none;\n}\n.uk-scope .uk-icon-button:active,\n  .uk-scope .uk-active > .uk-icon-button {\n    background-color: #dfdfdf;\n    color: #666;\n}\n.uk-scope .uk-range {\n    /* 1 */\n    box-sizing: border-box;\n    margin: 0;\n    vertical-align: middle;\n    /* 2 */\n    max-width: 100%;\n    /* 3 */\n    width: 100%;\n    /* 4 */\n    -webkit-appearance: none;\n    /* 5 */\n    background: transparent;\n    /* 6 */\n    padding: 0;\n}\n.uk-scope .uk-range:focus {\n    outline: none;\n}\n.uk-scope .uk-range::-moz-focus-outer {\n    border: none;\n}\n.uk-scope .uk-range::-ms-track {\n    height: 15px;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\n.uk-scope .uk-range:not(:disabled)::-webkit-slider-thumb {\n    cursor: pointer;\n}\n.uk-scope .uk-range:not(:disabled)::-moz-range-thumb {\n    cursor: pointer;\n}\n.uk-scope .uk-range:not(:disabled)::-ms-thumb {\n    cursor: pointer;\n}\n.uk-scope .uk-range::-webkit-slider-thumb {\n    /* 1 */\n    -webkit-appearance: none;\n    margin-top: -7px;\n    /* 2 */\n    height: 15px;\n    width: 15px;\n    border-radius: 500px;\n    background: #fff;\n    border: 1px solid #cccccc;\n}\n.uk-scope .uk-range::-moz-range-thumb {\n    /* 1 */\n    border: none;\n    /* 2 */\n    height: 15px;\n    width: 15px;\n    border-radius: 500px;\n    background: #fff;\n    border: 1px solid #cccccc;\n}\n.uk-scope .uk-range::-ms-thumb {\n    /* 1 */\n    margin-top: 0;\n}\n.uk-scope .uk-range::-ms-thumb {\n    /* 1 */\n    border: none;\n    /* 2 */\n    height: 15px;\n    width: 15px;\n    border-radius: 500px;\n    background: #fff;\n    border: 1px solid #cccccc;\n}\n.uk-scope .uk-range::-ms-tooltip {\n    display: none;\n}\n.uk-scope .uk-range::-webkit-slider-runnable-track {\n    height: 3px;\n    background: #ebebeb;\n    border-radius: 500px;\n}\n.uk-scope .uk-range:focus::-webkit-slider-runnable-track,\n  .uk-scope .uk-range:active::-webkit-slider-runnable-track {\n    background: #d2d2d2;\n}\n.uk-scope .uk-range::-moz-range-track {\n    height: 3px;\n    background: #ebebeb;\n    border-radius: 500px;\n}\n.uk-scope .uk-range:focus::-moz-range-track {\n    background: #d2d2d2;\n}\n.uk-scope .uk-range::-ms-fill-lower,\n  .uk-scope .uk-range::-ms-fill-upper {\n    height: 3px;\n    background: #ebebeb;\n    border-radius: 500px;\n}\n.uk-scope .uk-range:focus::-ms-fill-lower,\n  .uk-scope .uk-range:focus::-ms-fill-upper {\n    background: #d2d2d2;\n}\n.uk-scope .uk-input,\n  .uk-scope .uk-select,\n  .uk-scope .uk-textarea,\n  .uk-scope .uk-radio,\n  .uk-scope .uk-checkbox {\n    /* 1 */\n    box-sizing: border-box;\n    /* 2 */\n    margin: 0;\n    /* 3 */\n    border-radius: 0;\n    /* 4 */\n    font: inherit;\n}\n.uk-scope .uk-input {\n    overflow: visible;\n}\n.uk-scope .uk-select {\n    text-transform: none;\n}\n.uk-scope .uk-select optgroup {\n    /* 1 */\n    font: inherit;\n    /* 2 */\n    font-weight: bold;\n}\n.uk-scope .uk-textarea {\n    overflow: auto;\n}\n.uk-scope .uk-input[type=\"search\"]::-webkit-search-cancel-button,\n  .uk-scope .uk-input[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n.uk-scope .uk-input[type=\"number\"]::-webkit-inner-spin-button,\n  .uk-scope .uk-input[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n.uk-scope .uk-input::-moz-placeholder,\n  .uk-scope .uk-textarea::-moz-placeholder {\n    opacity: 1;\n}\n.uk-scope .uk-radio:not(:disabled),\n  .uk-scope .uk-checkbox:not(:disabled) {\n    cursor: pointer;\n}\n.uk-scope .uk-fieldset {\n    border: none;\n    margin: 0;\n    padding: 0;\n}\n.uk-scope .uk-input,\n  .uk-scope .uk-textarea {\n    -webkit-appearance: none;\n}\n.uk-scope .uk-input,\n  .uk-scope .uk-select,\n  .uk-scope .uk-textarea {\n    /* 1 */\n    max-width: 100%;\n    /* 2 */\n    width: 100%;\n    /* 3 */\n    border: 0 none;\n    /* 4 */\n    padding: 0 10px;\n    background: #fff;\n    color: #666;\n    border: 1px solid #e5e5e5;\n    transition: 0.2s ease-in-out;\n    transition-property: color, background-color, border;\n}\n.uk-scope .uk-input,\n  .uk-scope .uk-select:not([multiple]):not([size]) {\n    height: 40px;\n    vertical-align: middle;\n    /* 1 */\n    display: inline-block;\n}\n.uk-scope .uk-input:not(input),\n  .uk-scope .uk-select:not(select) {\n    line-height: 38px;\n}\n.uk-scope .uk-select[multiple],\n  .uk-scope .uk-select[size],\n  .uk-scope .uk-textarea {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    vertical-align: top;\n}\n.uk-scope .uk-input:focus,\n  .uk-scope .uk-select:focus,\n  .uk-scope .uk-textarea:focus {\n    outline: none;\n    background-color: #fff;\n    color: #666;\n    border-color: #1e87f0;\n}\n.uk-scope .uk-input:disabled,\n  .uk-scope .uk-select:disabled,\n  .uk-scope .uk-textarea:disabled {\n    background-color: #f8f8f8;\n    color: #999;\n    border-color: #e5e5e5;\n}\n.uk-scope .uk-input:-ms-input-placeholder {\n    color: #999 !important;\n}\n.uk-scope .uk-input::placeholder {\n    color: #999;\n}\n.uk-scope .uk-textarea:-ms-input-placeholder {\n    color: #999 !important;\n}\n.uk-scope .uk-textarea::placeholder {\n    color: #999;\n}\n.uk-scope .uk-form-small {\n    font-size: 0.875rem;\n}\n.uk-scope .uk-form-small:not(textarea):not([multiple]):not([size]) {\n    height: 30px;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n.uk-scope .uk-form-small:not(select):not(input):not(textarea) {\n    line-height: 28px;\n}\n.uk-scope .uk-form-large {\n    font-size: 1.25rem;\n}\n.uk-scope .uk-form-large:not(textarea):not([multiple]):not([size]) {\n    height: 55px;\n    padding-left: 12px;\n    padding-right: 12px;\n}\n.uk-scope .uk-form-large:not(select):not(input):not(textarea) {\n    line-height: 53px;\n}\n.uk-scope .uk-form-danger,\n  .uk-scope .uk-form-danger:focus {\n    color: #f0506e;\n    border-color: #f0506e;\n}\n.uk-scope .uk-form-success,\n  .uk-scope .uk-form-success:focus {\n    color: #32d296;\n    border-color: #32d296;\n}\n.uk-scope .uk-form-blank {\n    background: none;\n    border-color: transparent;\n}\n.uk-scope .uk-form-blank:focus {\n    border-color: #e5e5e5;\n    border-style: dashed;\n}\n.uk-scope input.uk-form-width-xsmall {\n    width: 50px;\n}\n.uk-scope select.uk-form-width-xsmall {\n    width: 75px;\n}\n.uk-scope .uk-form-width-small {\n    width: 130px;\n}\n.uk-scope .uk-form-width-medium {\n    width: 200px;\n}\n.uk-scope .uk-form-width-large {\n    width: 500px;\n}\n.uk-scope .uk-select:not([multiple]):not([size]) {\n    /* 1 */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    /* 2 */\n    padding-right: 20px;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n    background-repeat: no-repeat;\n    background-position: 100% 50%;\n}\n.uk-scope .uk-select:not([multiple]):not([size])::-ms-expand {\n    display: none;\n}\n.uk-scope .uk-select:not([multiple]):not([size]) option {\n    color: #444;\n}\n.uk-scope .uk-select:not([multiple]):not([size]):disabled {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-scope .uk-radio,\n  .uk-scope .uk-checkbox {\n    /* 1 */\n    display: inline-block;\n    height: 16px;\n    width: 16px;\n    /* 2 */\n    overflow: hidden;\n    /* 3 */\n    margin-top: -4px;\n    vertical-align: middle;\n    /* 4 */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    /* 5 */\n    background-color: transparent;\n    /* 6 */\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    border: 1px solid #cccccc;\n    transition: 0.2s ease-in-out;\n    transition-property: background-color, border;\n}\n.uk-scope .uk-radio {\n    border-radius: 50%;\n}\n.uk-scope .uk-radio:focus,\n  .uk-scope .uk-checkbox:focus {\n    outline: none;\n    border-color: #1e87f0;\n}\n.uk-scope .uk-radio:checked,\n  .uk-scope .uk-checkbox:checked,\n  .uk-scope .uk-checkbox:indeterminate {\n    background-color: #1e87f0;\n    border-color: transparent;\n}\n.uk-scope .uk-radio:checked:focus,\n  .uk-scope .uk-checkbox:checked:focus,\n  .uk-scope .uk-checkbox:indeterminate:focus {\n    background-color: #0e6dcd;\n}\n.uk-scope .uk-radio:checked {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-checkbox:checked {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-scope .uk-checkbox:indeterminate {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23fff%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-radio:disabled,\n  .uk-scope .uk-checkbox:disabled {\n    background-color: #f8f8f8;\n    border-color: #e5e5e5;\n}\n.uk-scope .uk-radio:disabled:checked {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23999%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-checkbox:disabled:checked {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23999%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-scope .uk-checkbox:disabled:indeterminate {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23999%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-legend {\n    /* 1 */\n    width: 100%;\n    /* 2 */\n    color: inherit;\n    /* 3 */\n    padding: 0;\n    /* 4 */\n    font-size: 1.5rem;\n    line-height: 1.4;\n}\n.uk-scope .uk-form-custom {\n    /* 1 */\n    display: inline-block;\n    /* 2 */\n    position: relative;\n    /* 3 */\n    max-width: 100%;\n    /* 4 */\n    vertical-align: middle;\n}\n.uk-scope .uk-form-custom select,\n  .uk-scope .uk-form-custom input[type=\"file\"] {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    /* 2 */\n    left: 0;\n    /* 3 */\n    -webkit-appearance: none;\n    /* 4 */\n    opacity: 0;\n    cursor: pointer;\n}\n.uk-scope .uk-form-custom input[type=\"file\"] {\n    /* 5 */\n    font-size: 500px;\n    /* 6 */\n    overflow: hidden;\n}\n.uk-scope .uk-form-label {\n    color: #333;\n    font-size: 0.875rem;\n}\n.uk-scope .uk-form-stacked .uk-form-label {\n    display: block;\n    margin-bottom: 5px;\n}\n@media (max-width: 959px) {\n.uk-scope {\n      /* Behave like `uk-form-stacked` */\n}\n.uk-scope .uk-form-horizontal .uk-form-label {\n        display: block;\n        margin-bottom: 5px;\n}\n}\n@media (min-width: 960px) {\n.uk-scope {\n      /* Better vertical alignment if controls are checkboxes and radio buttons with text */\n}\n.uk-scope .uk-form-horizontal .uk-form-label {\n        width: 200px;\n        margin-top: 7px;\n        float: left;\n}\n.uk-scope .uk-form-horizontal .uk-form-controls {\n        margin-left: 215px;\n}\n.uk-scope .uk-form-horizontal .uk-form-controls-text {\n        padding-top: 7px;\n}\n}\n.uk-scope .uk-form-icon {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    /* 2 */\n    width: 40px;\n    /* 3 */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    /* 4 */\n    color: #999;\n}\n.uk-scope .uk-form-icon:hover {\n    color: #666;\n}\n.uk-scope .uk-form-icon:not(a):not(button):not(input) {\n    pointer-events: none;\n}\n.uk-scope .uk-form-icon:not(.uk-form-icon-flip) ~ .uk-input {\n    padding-left: 40px !important;\n}\n.uk-scope .uk-form-icon-flip {\n    right: 0;\n    left: auto;\n}\n.uk-scope .uk-form-icon-flip ~ .uk-input {\n    padding-right: 40px !important;\n}\n.uk-scope .uk-button {\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    border: none;\n    /* 3 */\n    border-radius: 0;\n    /* 4 */\n    overflow: visible;\n    /* 5 */\n    font: inherit;\n    color: inherit;\n    /* 6 */\n    text-transform: none;\n    /* 7 */\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 0 30px;\n    vertical-align: middle;\n    font-size: 0.875rem;\n    /* 8 */\n    line-height: 38px;\n    /* 9 */\n    text-align: center;\n    /* 10 */\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: 0.1s ease-in-out;\n    transition-property: color, background-color, border-color;\n}\n.uk-scope .uk-button:not(:disabled) {\n    cursor: pointer;\n}\n.uk-scope .uk-button::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n.uk-scope .uk-button:hover {\n    /* 8 */\n    text-decoration: none;\n}\n.uk-scope .uk-button:focus {\n    outline: none;\n}\n.uk-scope .uk-button-default {\n    background-color: transparent;\n    color: #333;\n    border: 1px solid #e5e5e5;\n}\n.uk-scope .uk-button-default:hover,\n  .uk-scope .uk-button-default:focus {\n    background-color: transparent;\n    color: #333;\n    border-color: #b2b2b2;\n}\n.uk-scope .uk-button-default:active,\n  .uk-scope .uk-button-default.uk-active {\n    background-color: transparent;\n    color: #333;\n    border-color: #999999;\n}\n.uk-scope .uk-button-primary {\n    background-color: #1e87f0;\n    color: #fff;\n    border: 1px solid transparent;\n}\n.uk-scope .uk-button-primary:hover,\n  .uk-scope .uk-button-primary:focus {\n    background-color: #0f7ae5;\n    color: #fff;\n}\n.uk-scope .uk-button-primary:active,\n  .uk-scope .uk-button-primary.uk-active {\n    background-color: #0e6dcd;\n    color: #fff;\n}\n.uk-scope .uk-button-secondary {\n    background-color: #222;\n    color: #fff;\n    border: 1px solid transparent;\n}\n.uk-scope .uk-button-secondary:hover,\n  .uk-scope .uk-button-secondary:focus {\n    background-color: #151515;\n    color: #fff;\n}\n.uk-scope .uk-button-secondary:active,\n  .uk-scope .uk-button-secondary.uk-active {\n    background-color: #080808;\n    color: #fff;\n}\n.uk-scope .uk-button-danger {\n    background-color: #f0506e;\n    color: #fff;\n    border: 1px solid transparent;\n}\n.uk-scope .uk-button-danger:hover,\n  .uk-scope .uk-button-danger:focus {\n    background-color: #ee395b;\n    color: #fff;\n}\n.uk-scope .uk-button-danger:active,\n  .uk-scope .uk-button-danger.uk-active {\n    background-color: #ec2147;\n    color: #fff;\n}\n.uk-scope .uk-button-default:disabled,\n  .uk-scope .uk-button-primary:disabled,\n  .uk-scope .uk-button-secondary:disabled,\n  .uk-scope .uk-button-danger:disabled {\n    background-color: transparent;\n    color: #999;\n    border-color: #e5e5e5;\n}\n.uk-scope .uk-button-small {\n    padding: 0 15px;\n    line-height: 28px;\n    font-size: 0.875rem;\n}\n.uk-scope .uk-button-large {\n    padding: 0 40px;\n    line-height: 53px;\n    font-size: 0.875rem;\n}\n.uk-scope .uk-button-text {\n    /* 1 */\n    padding: 0;\n    line-height: 1.5;\n    background: none;\n    /* 2 */\n    color: #333;\n    position: relative;\n}\n.uk-scope .uk-button-text::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 100%;\n    border-bottom: 1px solid #333;\n    transition: right 0.3s ease-out;\n}\n.uk-scope .uk-button-text:hover,\n  .uk-scope .uk-button-text:focus {\n    color: #333;\n}\n.uk-scope .uk-button-text:hover::before,\n  .uk-scope .uk-button-text:focus::before {\n    right: 0;\n}\n.uk-scope .uk-button-text:disabled {\n    color: #999;\n}\n.uk-scope .uk-button-text:disabled::before {\n    display: none;\n}\n.uk-scope .uk-button-link {\n    /* 1 */\n    padding: 0;\n    line-height: 1.5;\n    background: none;\n    /* 2 */\n    color: #1e87f0;\n}\n.uk-scope .uk-button-link:hover,\n  .uk-scope .uk-button-link:focus {\n    color: #0f6ecd;\n    text-decoration: underline;\n}\n.uk-scope .uk-button-link:disabled {\n    color: #999;\n    text-decoration: none;\n}\n.uk-scope .uk-button-group {\n    /* 1 */\n    display: inline-flex;\n    /* 2 */\n    vertical-align: middle;\n    /* 3 */\n    position: relative;\n}\n.uk-scope .uk-button-group > .uk-button:nth-child(n+2),\n  .uk-scope .uk-button-group > div:nth-child(n+2) .uk-button {\n    margin-left: -1px;\n}\n.uk-scope .uk-button-group .uk-button:hover,\n  .uk-scope .uk-button-group .uk-button:focus,\n  .uk-scope .uk-button-group .uk-button:active,\n  .uk-scope .uk-button-group .uk-button.uk-active {\n    position: relative;\n    z-index: 1;\n}\n.uk-scope .uk-section {\n    box-sizing: border-box;\n    /* 1 */\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-section {\n      padding-top: 70px;\n      padding-bottom: 70px;\n}\n}\n.uk-scope .uk-section::before,\n  .uk-scope .uk-section::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-section::after {\n    clear: both;\n}\n.uk-scope .uk-section > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-section-xsmall {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.uk-scope .uk-section-small {\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n.uk-scope .uk-section-large {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-section-large {\n      padding-top: 140px;\n      padding-bottom: 140px;\n}\n}\n.uk-scope .uk-section-xlarge {\n    padding-top: 140px;\n    padding-bottom: 140px;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-section-xlarge {\n      padding-top: 210px;\n      padding-bottom: 210px;\n}\n}\n.uk-scope .uk-section-default {\n    background: #fff;\n}\n.uk-scope .uk-section-muted {\n    background: #f8f8f8;\n}\n.uk-scope .uk-section-primary {\n    background: #1e87f0;\n}\n.uk-scope .uk-section-secondary {\n    background: #222;\n}\n.uk-scope .uk-container {\n    box-sizing: content-box;\n    /* 1 */\n    max-width: 1200px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-container {\n      padding-left: 30px;\n      padding-right: 30px;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-container {\n      padding-left: 40px;\n      padding-right: 40px;\n}\n}\n.uk-scope .uk-container::before,\n  .uk-scope .uk-container::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-container::after {\n    clear: both;\n}\n.uk-scope .uk-container > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-container .uk-container {\n    padding-left: 0;\n    padding-right: 0;\n}\n.uk-scope .uk-container-small {\n    max-width: 900px;\n}\n.uk-scope .uk-container-large {\n    max-width: 1600px;\n}\n.uk-scope .uk-container-expand {\n    max-width: none;\n}\n.uk-scope .uk-grid {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-grid > * {\n    margin: 0;\n}\n.uk-scope .uk-grid > * > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-grid {\n    margin-left: -30px;\n}\n.uk-scope .uk-grid > * {\n    padding-left: 30px;\n}\n.uk-scope .uk-grid + .uk-grid,\n  .uk-scope .uk-grid > .uk-grid-margin,\n  .uk-scope * + .uk-grid-margin {\n    margin-top: 30px;\n}\n@media (min-width: 1200px) {\n.uk-scope {\n      /* Horizontal */\n      /* Vertical */\n}\n.uk-scope .uk-grid {\n        margin-left: -40px;\n}\n.uk-scope .uk-grid > * {\n        padding-left: 40px;\n}\n.uk-scope .uk-grid + .uk-grid,\n      .uk-scope .uk-grid > .uk-grid-margin,\n      .uk-scope * + .uk-grid-margin {\n        margin-top: 40px;\n}\n}\n.uk-scope .uk-grid-small {\n    margin-left: -15px;\n}\n.uk-scope .uk-grid-small > * {\n    padding-left: 15px;\n}\n.uk-scope .uk-grid + .uk-grid-small,\n  .uk-scope .uk-grid-small > .uk-grid-margin,\n  .uk-scope * + .uk-grid-margin-small {\n    margin-top: 15px;\n}\n.uk-scope .uk-grid-medium {\n    margin-left: -30px;\n}\n.uk-scope .uk-grid-medium > * {\n    padding-left: 30px;\n}\n.uk-scope .uk-grid + .uk-grid-medium,\n  .uk-scope .uk-grid-medium > .uk-grid-margin,\n  .uk-scope * + .uk-grid-margin-medium {\n    margin-top: 30px;\n}\n.uk-scope .uk-grid-large {\n    margin-left: -40px;\n}\n.uk-scope .uk-grid-large > * {\n    padding-left: 40px;\n}\n.uk-scope .uk-grid + .uk-grid-large,\n  .uk-scope .uk-grid-large > .uk-grid-margin,\n  .uk-scope * + .uk-grid-margin-large {\n    margin-top: 40px;\n}\n@media (min-width: 1200px) {\n.uk-scope {\n      /* Horizontal */\n      /* Vertical */\n}\n.uk-scope .uk-grid-large {\n        margin-left: -70px;\n}\n.uk-scope .uk-grid-large > * {\n        padding-left: 70px;\n}\n.uk-scope .uk-grid + .uk-grid-large,\n      .uk-scope .uk-grid-large > .uk-grid-margin,\n      .uk-scope * + .uk-grid-margin-large {\n        margin-top: 70px;\n}\n}\n.uk-scope .uk-grid-collapse {\n    margin-left: 0;\n}\n.uk-scope .uk-grid-collapse > * {\n    padding-left: 0;\n}\n.uk-scope .uk-grid + .uk-grid-collapse,\n  .uk-scope .uk-grid-collapse > .uk-grid-margin {\n    margin-top: 0;\n}\n.uk-scope .uk-grid-divider > * {\n    position: relative;\n}\n.uk-scope .uk-grid-divider > :not(.uk-first-column)::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    border-left: 1px solid #e5e5e5;\n}\n.uk-scope .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-grid-divider {\n    margin-left: -60px;\n}\n.uk-scope .uk-grid-divider > * {\n    padding-left: 60px;\n}\n.uk-scope .uk-grid-divider > :not(.uk-first-column)::before {\n    left: 30px;\n}\n.uk-scope .uk-grid-divider.uk-grid-stack > .uk-grid-margin {\n    margin-top: 60px;\n}\n.uk-scope .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n    top: -30px;\n    left: 60px;\n}\n@media (min-width: 1200px) {\n.uk-scope {\n      /* Horizontal */\n      /* Vertical */\n}\n.uk-scope .uk-grid-divider {\n        margin-left: -80px;\n}\n.uk-scope .uk-grid-divider > * {\n        padding-left: 80px;\n}\n.uk-scope .uk-grid-divider > :not(.uk-first-column)::before {\n        left: 40px;\n}\n.uk-scope .uk-grid-divider.uk-grid-stack > .uk-grid-margin {\n        margin-top: 80px;\n}\n.uk-scope .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n        top: -40px;\n        left: 80px;\n}\n}\n.uk-scope .uk-grid-divider.uk-grid-small {\n    margin-left: -30px;\n}\n.uk-scope .uk-grid-divider.uk-grid-small > * {\n    padding-left: 30px;\n}\n.uk-scope .uk-grid-divider.uk-grid-small > :not(.uk-first-column)::before {\n    left: 15px;\n}\n.uk-scope .uk-grid-divider.uk-grid-small.uk-grid-stack > .uk-grid-margin {\n    margin-top: 30px;\n}\n.uk-scope .uk-grid-divider.uk-grid-small.uk-grid-stack > .uk-grid-margin::before {\n    top: -15px;\n    left: 30px;\n}\n.uk-scope .uk-grid-divider.uk-grid-medium {\n    margin-left: -60px;\n}\n.uk-scope .uk-grid-divider.uk-grid-medium > * {\n    padding-left: 60px;\n}\n.uk-scope .uk-grid-divider.uk-grid-medium > :not(.uk-first-column)::before {\n    left: 30px;\n}\n.uk-scope .uk-grid-divider.uk-grid-medium.uk-grid-stack > .uk-grid-margin {\n    margin-top: 60px;\n}\n.uk-scope .uk-grid-divider.uk-grid-medium.uk-grid-stack > .uk-grid-margin::before {\n    top: -30px;\n    left: 60px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large {\n    margin-left: -80px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large > * {\n    padding-left: 80px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large > :not(.uk-first-column)::before {\n    left: 40px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin {\n    margin-top: 80px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin::before {\n    top: -40px;\n    left: 80px;\n}\n@media (min-width: 1200px) {\n.uk-scope {\n      /* Horizontal */\n      /* Vertical */\n}\n.uk-scope .uk-grid-divider.uk-grid-large {\n        margin-left: -140px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large > * {\n        padding-left: 140px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large > :not(.uk-first-column)::before {\n        left: 70px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin {\n        margin-top: 140px;\n}\n.uk-scope .uk-grid-divider.uk-grid-large.uk-grid-stack > .uk-grid-margin::before {\n        top: -70px;\n        left: 140px;\n}\n}\n.uk-scope .uk-grid-match > *,\n  .uk-scope .uk-grid-item-match {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n}\n.uk-scope .uk-grid-match > * > :not([class*='uk-width']),\n  .uk-scope .uk-grid-item-match > :not([class*='uk-width']) {\n    /* 2 */\n    box-sizing: border-box;\n    width: 100%;\n    /* 3 */\n    flex: auto;\n}\n.uk-scope .uk-tile {\n    position: relative;\n    box-sizing: border-box;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-tile {\n      padding-left: 30px;\n      padding-right: 30px;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-tile {\n      padding-left: 40px;\n      padding-right: 40px;\n      padding-top: 70px;\n      padding-bottom: 70px;\n}\n}\n.uk-scope .uk-tile::before,\n  .uk-scope .uk-tile::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-tile::after {\n    clear: both;\n}\n.uk-scope .uk-tile > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-tile-xsmall {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.uk-scope .uk-tile-small {\n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n.uk-scope .uk-tile-large {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-tile-large {\n      padding-top: 140px;\n      padding-bottom: 140px;\n}\n}\n.uk-scope .uk-tile-xlarge {\n    padding-top: 140px;\n    padding-bottom: 140px;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-tile-xlarge {\n      padding-top: 210px;\n      padding-bottom: 210px;\n}\n}\n.uk-scope .uk-tile-default {\n    background: #fff;\n}\n.uk-scope .uk-tile-muted {\n    background: #f8f8f8;\n}\n.uk-scope .uk-tile-primary {\n    background: #1e87f0;\n}\n.uk-scope .uk-tile-secondary {\n    background: #222;\n}\n.uk-scope .uk-card {\n    position: relative;\n    box-sizing: border-box;\n    transition: box-shadow 0.1s ease-in-out;\n}\n.uk-scope .uk-card-body {\n    padding: 30px 30px;\n}\n.uk-scope .uk-card-header {\n    padding: 15px 30px;\n}\n.uk-scope .uk-card-footer {\n    padding: 15px 30px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-card-body {\n      padding: 40px 40px;\n}\n.uk-scope .uk-card-header {\n      padding: 20px 40px;\n}\n.uk-scope .uk-card-footer {\n      padding: 20px 40px;\n}\n}\n.uk-scope .uk-card-body::before,\n  .uk-scope .uk-card-body::after,\n  .uk-scope .uk-card-header::before,\n  .uk-scope .uk-card-header::after,\n  .uk-scope .uk-card-footer::before,\n  .uk-scope .uk-card-footer::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-card-body::after,\n  .uk-scope .uk-card-header::after,\n  .uk-scope .uk-card-footer::after {\n    clear: both;\n}\n.uk-scope .uk-card-body > :last-child,\n  .uk-scope .uk-card-header > :last-child,\n  .uk-scope .uk-card-footer > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-card-title {\n    font-size: 1.5rem;\n    line-height: 1.4;\n}\n.uk-scope .uk-card-badge {\n    position: absolute;\n    top: 30px;\n    right: 30px;\n    z-index: 1;\n}\n.uk-scope .uk-card-badge:first-child + * {\n    margin-top: 0;\n}\n.uk-scope .uk-card-hover:not(.uk-card-default):not(.uk-card-primary):not(.uk-card-secondary):hover {\n    background: #fff;\n    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n.uk-scope .uk-card-default {\n    background: #fff;\n    color: #666;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-card-default .uk-card-title {\n    color: #333;\n}\n.uk-scope .uk-card-default.uk-card-hover:hover {\n    background-color: #fff;\n    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n.uk-scope .uk-card-default .uk-card-header {\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-card-default .uk-card-footer {\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-card-primary {\n    background: #1e87f0;\n    color: #fff;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-card-primary .uk-card-title {\n    color: #fff;\n}\n.uk-scope .uk-card-primary.uk-card-hover:hover {\n    background-color: #1e87f0;\n    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n.uk-scope .uk-card-secondary {\n    background: #222;\n    color: #fff;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-card-secondary .uk-card-title {\n    color: #fff;\n}\n.uk-scope .uk-card-secondary.uk-card-hover:hover {\n    background-color: #222;\n    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n.uk-scope .uk-card-small.uk-card-body,\n  .uk-scope .uk-card-small .uk-card-body {\n    padding: 20px 20px;\n}\n.uk-scope .uk-card-small .uk-card-header {\n    padding: 13px 20px;\n}\n.uk-scope .uk-card-small .uk-card-footer {\n    padding: 13px 20px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-card-large.uk-card-body,\n    .uk-scope .uk-card-large .uk-card-body {\n      padding: 70px 70px;\n}\n.uk-scope .uk-card-large .uk-card-header {\n      padding: 35px 70px;\n}\n.uk-scope .uk-card-large .uk-card-footer {\n      padding: 35px 70px;\n}\n}\n.uk-scope .uk-card-body > .uk-nav-default {\n    margin-left: -30px;\n    margin-right: -30px;\n}\n.uk-scope .uk-card-body > .uk-nav-default:only-child {\n    margin-top: -15px;\n    margin-bottom: -15px;\n}\n.uk-scope .uk-card-body .uk-nav-default > li > a,\n  .uk-scope .uk-card-body .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-card-body .uk-nav-default .uk-nav-divider {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.uk-scope .uk-card-body .uk-nav-default .uk-nav-sub {\n    padding-left: 45px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-card-body > .uk-nav-default {\n      margin-left: -40px;\n      margin-right: -40px;\n}\n.uk-scope .uk-card-body > .uk-nav-default:only-child {\n      margin-top: -25px;\n      margin-bottom: -25px;\n}\n.uk-scope .uk-card-body .uk-nav-default > li > a,\n    .uk-scope .uk-card-body .uk-nav-default .uk-nav-header,\n    .uk-scope .uk-card-body .uk-nav-default .uk-nav-divider {\n      padding-left: 40px;\n      padding-right: 40px;\n}\n.uk-scope .uk-card-body .uk-nav-default .uk-nav-sub {\n      padding-left: 55px;\n}\n}\n.uk-scope .uk-card-small > .uk-nav-default {\n    margin-left: -20px;\n    margin-right: -20px;\n}\n.uk-scope .uk-card-small > .uk-nav-default:only-child {\n    margin-top: -5px;\n    margin-bottom: -5px;\n}\n.uk-scope .uk-card-small .uk-nav-default > li > a,\n  .uk-scope .uk-card-small .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-card-small .uk-nav-default .uk-nav-divider {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.uk-scope .uk-card-small .uk-nav-default .uk-nav-sub {\n    padding-left: 35px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-card-large > .uk-nav-default {\n      margin: 0;\n}\n.uk-scope .uk-card-large > .uk-nav-default:only-child {\n      margin: 0;\n}\n.uk-scope .uk-card-large .uk-nav-default > li > a,\n    .uk-scope .uk-card-large .uk-nav-default .uk-nav-header,\n    .uk-scope .uk-card-large .uk-nav-default .uk-nav-divider {\n      padding-left: 0;\n      padding-right: 0;\n}\n.uk-scope .uk-card-large .uk-nav-default .uk-nav-sub {\n      padding-left: 15px;\n}\n}\n.uk-scope .uk-close {\n    color: #999;\n    transition: 0.1s ease-in-out;\n    transition-property: color, opacity;\n}\n.uk-scope .uk-close:hover,\n  .uk-scope .uk-close:focus {\n    color: #666;\n    outline: none;\n}\n.uk-scope .uk-spinner > * {\n    animation: uk-spinner-rotate 1.4s linear infinite;\n}\n@keyframes uk-spinner-rotate {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(270deg);\n}\n}\n.uk-scope .uk-spinner > * > * {\n    stroke-dasharray: 88px;\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: uk-spinner-dash 1.4s ease-in-out infinite;\n    stroke-width: 1;\n    stroke-linecap: round;\n}\n@keyframes uk-spinner-dash {\n0% {\n    stroke-dashoffset: 88px;\n}\n50% {\n    stroke-dashoffset: 22px;\n    transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 88px;\n    transform: rotate(450deg);\n}\n}\n.uk-scope .uk-totop {\n    padding: 5px;\n    color: #999;\n    transition: color 0.1s ease-in-out;\n}\n.uk-scope .uk-totop:hover,\n  .uk-scope .uk-totop:focus {\n    color: #666;\n    outline: none;\n}\n.uk-scope .uk-totop:active {\n    color: #333;\n}\n.uk-scope .uk-marker {\n    padding: 5px;\n    background: #222;\n    color: #fff;\n    border-radius: 500px;\n}\n.uk-scope .uk-marker:hover,\n  .uk-scope .uk-marker:focus {\n    color: #fff;\n    outline: none;\n}\n.uk-scope .uk-alert {\n    position: relative;\n    margin-bottom: 20px;\n    padding: 15px 29px 15px 15px;\n    background: #f8f8f8;\n    color: #666;\n}\n.uk-scope * + .uk-alert {\n    margin-top: 20px;\n}\n.uk-scope .uk-alert > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-alert-close {\n    position: absolute;\n    top: 20px;\n    right: 15px;\n    color: inherit;\n    opacity: 0.4;\n}\n.uk-scope .uk-alert-close:first-child + * {\n    margin-top: 0;\n}\n.uk-scope .uk-alert-close:hover,\n  .uk-scope .uk-alert-close:focus {\n    color: inherit;\n    opacity: 0.8;\n}\n.uk-scope .uk-alert-primary {\n    background: #d8eafc;\n    color: #1e87f0;\n}\n.uk-scope .uk-alert-success {\n    background: #edfbf6;\n    color: #32d296;\n}\n.uk-scope .uk-alert-warning {\n    background: #fff6ee;\n    color: #faa05a;\n}\n.uk-scope .uk-alert-danger {\n    background: #fef4f6;\n    color: #f0506e;\n}\n.uk-scope .uk-alert h1,\n  .uk-scope .uk-alert h2,\n  .uk-scope .uk-alert h3,\n  .uk-scope .uk-alert h4,\n  .uk-scope .uk-alert h5,\n  .uk-scope .uk-alert h6 {\n    color: inherit;\n}\n.uk-scope .uk-alert a:not([class]) {\n    color: inherit;\n    text-decoration: underline;\n}\n.uk-scope .uk-alert a:not([class]):hover {\n    color: inherit;\n    text-decoration: underline;\n}\n.uk-scope .uk-badge {\n    box-sizing: border-box;\n    min-width: 22px;\n    height: 22px;\n    padding: 0 5px;\n    border-radius: 500px;\n    vertical-align: middle;\n    /* 1 */\n    background: #1e87f0;\n    color: #fff;\n    font-size: 0.875rem;\n    /* 2 */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n.uk-scope .uk-badge:hover,\n  .uk-scope .uk-badge:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: none;\n}\n.uk-scope .uk-label {\n    display: inline-block;\n    padding: 0 10px;\n    background: #1e87f0;\n    line-height: 1.5;\n    font-size: 0.875rem;\n    color: #fff;\n    vertical-align: middle;\n    white-space: nowrap;\n    border-radius: 2px;\n    text-transform: uppercase;\n}\n.uk-scope .uk-label-success {\n    background-color: #32d296;\n    color: #fff;\n}\n.uk-scope .uk-label-warning {\n    background-color: #faa05a;\n    color: #fff;\n}\n.uk-scope .uk-label-danger {\n    background-color: #f0506e;\n    color: #fff;\n}\n.uk-scope .uk-overlay {\n    padding: 30px 30px;\n}\n.uk-scope .uk-overlay > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-overlay-default {\n    background: rgba(255, 255, 255, 0.8);\n}\n.uk-scope .uk-overlay-primary {\n    background: rgba(34, 34, 34, 0.8);\n}\n.uk-scope .uk-article::before,\n  .uk-scope .uk-article::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-article::after {\n    clear: both;\n}\n.uk-scope .uk-article > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-article + .uk-article {\n    margin-top: 70px;\n}\n.uk-scope .uk-article-title {\n    font-size: 2.23125rem;\n    line-height: 1.2;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-article-title {\n      font-size: 2.625rem;\n}\n}\n.uk-scope .uk-article-meta {\n    font-size: 0.875rem;\n    line-height: 1.4;\n    color: #999;\n}\n.uk-scope .uk-article-meta a {\n    color: #999;\n}\n.uk-scope .uk-article-meta a:hover {\n    color: #666;\n    text-decoration: none;\n}\n.uk-scope .uk-comment-body {\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n}\n.uk-scope .uk-comment-header {\n    margin-bottom: 20px;\n}\n.uk-scope .uk-comment-body::before,\n  .uk-scope .uk-comment-body::after,\n  .uk-scope .uk-comment-header::before,\n  .uk-scope .uk-comment-header::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-comment-body::after,\n  .uk-scope .uk-comment-header::after {\n    clear: both;\n}\n.uk-scope .uk-comment-body > :last-child,\n  .uk-scope .uk-comment-header > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-comment-title {\n    font-size: 1.25rem;\n    line-height: 1.4;\n}\n.uk-scope .uk-comment-meta {\n    font-size: 0.875rem;\n    line-height: 1.4;\n    color: #999;\n}\n.uk-scope .uk-comment-list {\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-comment-list > :nth-child(n+2) {\n    margin-top: 70px;\n}\n.uk-scope .uk-comment-list .uk-comment ~ ul {\n    margin: 70px 0 0 0;\n    padding-left: 30px;\n    list-style: none;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-comment-list .uk-comment ~ ul {\n      padding-left: 100px;\n}\n}\n.uk-scope .uk-comment-list .uk-comment ~ ul > :nth-child(n+2) {\n    margin-top: 70px;\n}\n.uk-scope .uk-comment-primary {\n    padding: 30px;\n    background-color: #f8f8f8;\n}\n.uk-scope .uk-search {\n    /* 1 */\n    display: inline-block;\n    /* 2 */\n    position: relative;\n    /* 3 */\n    max-width: 100%;\n    /* 4 */\n    margin: 0;\n}\n.uk-scope .uk-search-input::-webkit-search-cancel-button,\n  .uk-scope .uk-search-input::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n.uk-scope .uk-search-input::-moz-placeholder {\n    opacity: 1;\n}\n.uk-scope .uk-search-input {\n    /* 1 */\n    box-sizing: border-box;\n    /* 2 */\n    margin: 0;\n    /* 3 */\n    border-radius: 0;\n    /* 4 */\n    font: inherit;\n    /* 5 */\n    overflow: visible;\n    /* 6 */\n    -webkit-appearance: none;\n    /* 7 */\n    vertical-align: middle;\n    /* 8 */\n    width: 100%;\n    /* 9 */\n    border: none;\n    color: #666;\n}\n.uk-scope .uk-search-input:focus {\n    outline: none;\n}\n.uk-scope .uk-search-input:-ms-input-placeholder {\n    color: #999 !important;\n}\n.uk-scope .uk-search-input::placeholder {\n    color: #999;\n}\n.uk-scope .uk-search-icon:focus {\n    outline: none;\n}\n.uk-scope .uk-search .uk-search-icon {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    /* 2 */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    /* 3 */\n    color: #999;\n}\n.uk-scope .uk-search .uk-search-icon:hover {\n    color: #999;\n}\n.uk-scope .uk-search .uk-search-icon:not(a):not(button):not(input) {\n    pointer-events: none;\n}\n.uk-scope .uk-search .uk-search-icon-flip {\n    right: 0;\n    left: auto;\n}\n.uk-scope .uk-search-default {\n    width: 180px;\n}\n.uk-scope .uk-search-default .uk-search-input {\n    height: 40px;\n    padding-left: 6px;\n    padding-right: 6px;\n    background: transparent;\n    border: 1px solid #e5e5e5;\n}\n.uk-scope .uk-search-default .uk-search-input:focus {\n    background-color: transparent;\n}\n.uk-scope .uk-search-default .uk-search-icon {\n    width: 40px;\n}\n.uk-scope .uk-search-default .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input {\n    padding-left: 40px;\n}\n.uk-scope .uk-search-default .uk-search-icon-flip ~ .uk-search-input {\n    padding-right: 40px;\n}\n.uk-scope .uk-search-navbar {\n    width: 400px;\n}\n.uk-scope .uk-search-navbar .uk-search-input {\n    height: 40px;\n    background: transparent;\n    font-size: 1.5rem;\n}\n.uk-scope .uk-search-navbar .uk-search-icon {\n    width: 40px;\n}\n.uk-scope .uk-search-navbar .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input {\n    padding-left: 40px;\n}\n.uk-scope .uk-search-navbar .uk-search-icon-flip ~ .uk-search-input {\n    padding-right: 40px;\n}\n.uk-scope .uk-search-large {\n    width: 500px;\n}\n.uk-scope .uk-search-large .uk-search-input {\n    height: 80px;\n    background: transparent;\n    font-size: 2.625rem;\n}\n.uk-scope .uk-search-large .uk-search-icon {\n    width: 80px;\n}\n.uk-scope .uk-search-large .uk-search-icon:not(.uk-search-icon-flip) ~ .uk-search-input {\n    padding-left: 80px;\n}\n.uk-scope .uk-search-large .uk-search-icon-flip ~ .uk-search-input {\n    padding-right: 80px;\n}\n.uk-scope .uk-search-toggle {\n    color: #999;\n}\n.uk-scope .uk-search-toggle:hover,\n  .uk-scope .uk-search-toggle:focus {\n    color: #666;\n}\n.uk-scope .uk-nav,\n  .uk-scope .uk-nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-nav li > a {\n    display: block;\n    text-decoration: none;\n}\n.uk-scope .uk-nav li > a:focus {\n    outline: none;\n}\n.uk-scope .uk-nav > li > a {\n    padding: 5px 0;\n}\n.uk-scope ul.uk-nav-sub {\n    padding: 5px 0 5px 15px;\n}\n.uk-scope .uk-nav-sub ul {\n    padding-left: 15px;\n}\n.uk-scope .uk-nav-sub a {\n    padding: 2px 0;\n}\n.uk-scope .uk-nav-parent-icon > .uk-parent > a::after {\n    content: \"\";\n    width: 1.5em;\n    height: 1.5em;\n    float: right;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n.uk-scope .uk-nav-parent-icon > .uk-parent.uk-open > a::after {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-nav-header {\n    padding: 5px 0;\n    text-transform: uppercase;\n    font-size: 0.875rem;\n}\n.uk-scope .uk-nav-header:not(:first-child) {\n    margin-top: 20px;\n}\n.uk-scope .uk-nav-divider {\n    margin: 5px 0;\n}\n.uk-scope .uk-nav-default {\n    font-size: 0.875rem;\n}\n.uk-scope .uk-nav-default > li > a {\n    color: #999;\n}\n.uk-scope .uk-nav-default > li > a:hover,\n  .uk-scope .uk-nav-default > li > a:focus {\n    color: #666;\n}\n.uk-scope .uk-nav-default > li.uk-active > a {\n    color: #333;\n}\n.uk-scope .uk-nav-default .uk-nav-header {\n    color: #333;\n}\n.uk-scope .uk-nav-default .uk-nav-divider {\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-nav-default .uk-nav-sub a {\n    color: #999;\n}\n.uk-scope .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-nav-default .uk-nav-sub a:focus {\n    color: #666;\n}\n.uk-scope .uk-nav-primary > li > a {\n    font-size: 1.5rem;\n    line-height: 1.5;\n    color: #999;\n}\n.uk-scope .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-nav-primary > li > a:focus {\n    color: #666;\n}\n.uk-scope .uk-nav-primary > li.uk-active > a {\n    color: #333;\n}\n.uk-scope .uk-nav-primary .uk-nav-header {\n    color: #333;\n}\n.uk-scope .uk-nav-primary .uk-nav-divider {\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-nav-primary .uk-nav-sub a {\n    color: #999;\n}\n.uk-scope .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-nav-primary .uk-nav-sub a:focus {\n    color: #666;\n}\n.uk-scope .uk-nav-center {\n    text-align: center;\n}\n.uk-scope .uk-nav-center .uk-nav-sub,\n  .uk-scope .uk-nav-center .uk-nav-sub ul {\n    padding-left: 0;\n}\n.uk-scope .uk-nav-center.uk-nav-parent-icon > .uk-parent > a::after {\n    position: absolute;\n}\n.uk-scope .uk-navbar {\n    display: flex;\n    /* 1 */\n    position: relative;\n}\n.uk-scope .uk-navbar-container:not(.uk-navbar-transparent) {\n    background: #f8f8f8;\n}\n.uk-scope .uk-navbar-container > ::before,\n  .uk-scope .uk-navbar-container > ::after {\n    display: none !important;\n}\n.uk-scope .uk-navbar-left,\n  .uk-scope .uk-navbar-right,\n  .uk-scope .uk-navbar-center,\n  .uk-scope .uk-navbar-center-left > *,\n  .uk-scope .uk-navbar-center-right > * {\n    display: flex;\n    /* 1 */\n    align-items: center;\n}\n.uk-scope .uk-navbar-right {\n    margin-left: auto;\n}\n.uk-scope .uk-navbar-center:only-child {\n    margin-left: auto;\n    margin-right: auto;\n    /* 1 */\n    position: relative;\n}\n.uk-scope .uk-navbar-center:not(:only-child) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    /* 2 */\n    z-index: 990;\n}\n.uk-scope .uk-navbar-center:not(:only-child) .uk-navbar-nav > li > a,\n  .uk-scope .uk-navbar-center:not(:only-child) .uk-navbar-item,\n  .uk-scope .uk-navbar-center:not(:only-child) .uk-navbar-toggle {\n    white-space: nowrap;\n}\n.uk-scope .uk-navbar-center-left,\n  .uk-scope .uk-navbar-center-right {\n    position: absolute;\n    top: 0;\n}\n.uk-scope .uk-navbar-center-left {\n    right: 100%;\n}\n.uk-scope .uk-navbar-center-right {\n    left: 100%;\n}\n.uk-scope [class*='uk-navbar-center-'] .uk-navbar-nav > li > a,\n  .uk-scope [class*='uk-navbar-center-'] .uk-navbar-item,\n  .uk-scope [class*='uk-navbar-center-'] .uk-navbar-toggle {\n    white-space: nowrap;\n}\n.uk-scope .uk-navbar-nav {\n    display: flex;\n    /* 1 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-navbar-left,\n  .uk-scope .uk-navbar-right,\n  .uk-scope .uk-navbar-center:only-child {\n    flex-wrap: wrap;\n}\n.uk-scope .uk-navbar-nav > li > a,\n  .uk-scope .uk-navbar-item,\n  .uk-scope .uk-navbar-toggle {\n    /* 1 */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* 2 */\n    box-sizing: border-box;\n    height: 80px;\n    padding: 0 15px;\n    /* 3 */\n    font-size: 0.875rem;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    /* 4 */\n    text-decoration: none;\n}\n.uk-scope .uk-navbar-nav > li > a {\n    color: #999;\n    text-transform: uppercase;\n    transition: 0.1s ease-in-out;\n    transition-property: color, background-color;\n}\n.uk-scope .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-navbar-nav > li > a.uk-open {\n    color: #666;\n    outline: none;\n}\n.uk-scope .uk-navbar-nav > li > a:active {\n    color: #333;\n}\n.uk-scope .uk-navbar-nav > li.uk-active > a {\n    color: #333;\n}\n.uk-scope .uk-navbar-item {\n    color: #666;\n}\n.uk-scope .uk-navbar-toggle {\n    color: #999;\n}\n.uk-scope .uk-navbar-toggle:hover,\n  .uk-scope .uk-navbar-toggle:focus,\n  .uk-scope .uk-navbar-toggle.uk-open {\n    color: #666;\n    outline: none;\n    text-decoration: none;\n}\n.uk-scope .uk-navbar-subtitle {\n    font-size: 0.875rem;\n}\n.uk-scope .uk-navbar-dropdown {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: absolute;\n    z-index: 1020;\n    /* 3 */\n    box-sizing: border-box;\n    width: 200px;\n    /* 4 */\n    padding: 25px;\n    background: #fff;\n    color: #666;\n    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);\n}\n.uk-scope .uk-navbar-dropdown.uk-open {\n    display: block;\n}\n.uk-scope [class*='uk-navbar-dropdown-top'] {\n    margin-top: -15px;\n}\n.uk-scope [class*='uk-navbar-dropdown-bottom'] {\n    margin-top: 15px;\n}\n.uk-scope [class*='uk-navbar-dropdown-left'] {\n    margin-left: -15px;\n}\n.uk-scope [class*='uk-navbar-dropdown-right'] {\n    margin-left: 15px;\n}\n.uk-scope .uk-navbar-dropdown-grid {\n    margin-left: -50px;\n}\n.uk-scope .uk-navbar-dropdown-grid > * {\n    padding-left: 50px;\n}\n.uk-scope .uk-navbar-dropdown-grid > .uk-grid-margin {\n    margin-top: 50px;\n}\n.uk-scope .uk-navbar-dropdown-stack .uk-navbar-dropdown-grid > * {\n    width: 100% !important;\n}\n.uk-scope .uk-navbar-dropdown-width-2:not(.uk-navbar-dropdown-stack) {\n    width: 400px;\n}\n.uk-scope .uk-navbar-dropdown-width-3:not(.uk-navbar-dropdown-stack) {\n    width: 600px;\n}\n.uk-scope .uk-navbar-dropdown-width-4:not(.uk-navbar-dropdown-stack) {\n    width: 800px;\n}\n.uk-scope .uk-navbar-dropdown-width-5:not(.uk-navbar-dropdown-stack) {\n    width: 1000px;\n}\n.uk-scope .uk-navbar-dropdown-dropbar {\n    margin-top: 0;\n    margin-bottom: 0;\n    box-shadow: none;\n}\n.uk-scope .uk-navbar-dropdown-nav {\n    font-size: 0.875rem;\n}\n.uk-scope .uk-navbar-dropdown-nav > li > a {\n    color: #999;\n}\n.uk-scope .uk-navbar-dropdown-nav > li > a:hover,\n  .uk-scope .uk-navbar-dropdown-nav > li > a:focus {\n    color: #666;\n}\n.uk-scope .uk-navbar-dropdown-nav > li.uk-active > a {\n    color: #333;\n}\n.uk-scope .uk-navbar-dropdown-nav .uk-nav-header {\n    color: #333;\n}\n.uk-scope .uk-navbar-dropdown-nav .uk-nav-divider {\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-navbar-dropdown-nav .uk-nav-sub a {\n    color: #999;\n}\n.uk-scope .uk-navbar-dropdown-nav .uk-nav-sub a:hover,\n  .uk-scope .uk-navbar-dropdown-nav .uk-nav-sub a:focus {\n    color: #666;\n}\n.uk-scope .uk-navbar-dropbar {\n    background: #fff;\n}\n.uk-scope .uk-navbar-dropbar-slide {\n    position: absolute;\n    z-index: 980;\n    left: 0;\n    right: 0;\n    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.05);\n}\n.uk-scope .uk-navbar-container > .uk-container .uk-navbar-left {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.uk-scope .uk-navbar-container > .uk-container .uk-navbar-right {\n    margin-right: -15px;\n}\n.uk-scope .uk-navbar-dropdown-grid > * {\n    position: relative;\n}\n.uk-scope .uk-navbar-dropdown-grid > :not(.uk-first-column)::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 25px;\n    border-left: 1px solid #e5e5e5;\n}\n.uk-scope .uk-navbar-dropdown-grid.uk-grid-stack > .uk-grid-margin::before {\n    content: \"\";\n    position: absolute;\n    top: -25px;\n    left: 50px;\n    right: 0;\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-subnav {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin-left: -20px;\n    /* 3 */\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-subnav > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    padding-left: 20px;\n    /* 3 */\n    position: relative;\n}\n.uk-scope .uk-subnav > * > :first-child {\n    /* 1 */\n    display: block;\n    /* 2 */\n    color: #999;\n    font-size: 0.875rem;\n    text-transform: uppercase;\n    transition: 0.1s ease-in-out;\n    transition-property: color, background-color;\n}\n.uk-scope .uk-subnav > * > a:hover,\n  .uk-scope .uk-subnav > * > a:focus {\n    color: #666;\n    text-decoration: none;\n    outline: none;\n}\n.uk-scope .uk-subnav > .uk-active > a {\n    color: #333;\n}\n.uk-scope .uk-subnav-divider > * {\n    /* 1 */\n    display: flex;\n    align-items: center;\n}\n.uk-scope .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before {\n    content: \"\";\n    height: 1.5em;\n    margin-left: 0px;\n    margin-right: 20px;\n    border-left: 1px solid #e5e5e5;\n}\n.uk-scope .uk-subnav-pill > * > :first-child {\n    padding: 5px 10px;\n    background: transparent;\n    color: #999;\n}\n.uk-scope .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-subnav-pill > * > a:focus {\n    background-color: #f8f8f8;\n    color: #666;\n}\n.uk-scope .uk-subnav-pill > * > a:active {\n    background-color: #f8f8f8;\n    color: #666;\n}\n.uk-scope .uk-subnav-pill > .uk-active > a {\n    background-color: #1e87f0;\n    color: #fff;\n}\n.uk-scope .uk-subnav > .uk-disabled > a {\n    color: #999;\n}\n.uk-scope .uk-breadcrumb {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-breadcrumb > * {\n    flex: none;\n}\n.uk-scope .uk-breadcrumb > * > * {\n    display: inline-block;\n    font-size: 0.875rem;\n    color: #999;\n}\n.uk-scope .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-breadcrumb > * > :focus {\n    color: #666;\n    text-decoration: none;\n}\n.uk-scope .uk-breadcrumb > :last-child > * {\n    color: #666;\n}\n.uk-scope .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before {\n    content: \"/\";\n    display: inline-block;\n    margin: 0 20px;\n    color: #999;\n}\n.uk-scope .uk-pagination {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin-left: -20px;\n    /* 3 */\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-pagination > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    padding-left: 20px;\n    /* 3 */\n    position: relative;\n}\n.uk-scope .uk-pagination > * > * {\n    /* 1 */\n    display: block;\n    /* 2 */\n    color: #999;\n    transition: color 0.1s ease-in-out;\n}\n.uk-scope .uk-pagination > * > :hover,\n  .uk-scope .uk-pagination > * > :focus {\n    color: #666;\n    text-decoration: none;\n}\n.uk-scope .uk-pagination > .uk-active > * {\n    color: #666;\n}\n.uk-scope .uk-pagination > .uk-disabled > * {\n    color: #999;\n}\n.uk-scope .uk-tab {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin-left: -20px;\n    /* 3 */\n    padding: 0;\n    list-style: none;\n    position: relative;\n}\n.uk-scope .uk-tab::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 20px;\n    right: 0;\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-tab > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    padding-left: 20px;\n    /* 3 */\n    position: relative;\n}\n.uk-scope .uk-tab > * > a {\n    /* 1 */\n    display: block;\n    text-align: center;\n    /* 2 */\n    padding: 5px 10px;\n    color: #999;\n    border-bottom: 1px solid transparent;\n    font-size: 0.875rem;\n    text-transform: uppercase;\n    transition: color 0.1s ease-in-out;\n}\n.uk-scope .uk-tab > * > a:hover,\n  .uk-scope .uk-tab > * > a:focus {\n    color: #666;\n    text-decoration: none;\n}\n.uk-scope .uk-tab > .uk-active > a {\n    color: #333;\n    border-color: #1e87f0;\n}\n.uk-scope .uk-tab > .uk-disabled > a {\n    color: #999;\n}\n.uk-scope .uk-tab-bottom::before {\n    top: 0;\n    bottom: auto;\n}\n.uk-scope .uk-tab-bottom > * > a {\n    border-top: 1px solid transparent;\n    border-bottom: none;\n}\n.uk-scope .uk-tab-left,\n  .uk-scope .uk-tab-right {\n    flex-direction: column;\n    /* 1 */\n    margin-left: 0;\n}\n.uk-scope .uk-tab-left > *,\n  .uk-scope .uk-tab-right > * {\n    padding-left: 0;\n}\n.uk-scope .uk-tab-left::before {\n    top: 0;\n    bottom: 0;\n    left: auto;\n    right: 0;\n    border-left: 1px solid #e5e5e5;\n    border-bottom: none;\n}\n.uk-scope .uk-tab-right::before {\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: auto;\n    border-left: 1px solid #e5e5e5;\n    border-bottom: none;\n}\n.uk-scope .uk-tab-left > * > a {\n    text-align: left;\n    border-right: 1px solid transparent;\n    border-bottom: none;\n}\n.uk-scope .uk-tab-right > * > a {\n    text-align: left;\n    border-left: 1px solid transparent;\n    border-bottom: none;\n}\n.uk-scope .uk-tab .uk-dropdown {\n    margin-left: 30px;\n}\n.uk-scope .uk-slidenav {\n    padding: 5px 10px;\n    color: rgba(102, 102, 102, 0.5);\n    transition: color 0.1s ease-in-out;\n}\n.uk-scope .uk-slidenav:hover,\n  .uk-scope .uk-slidenav:focus {\n    color: rgba(102, 102, 102, 0.9);\n    outline: none;\n}\n.uk-scope .uk-slidenav:active {\n    color: rgba(102, 102, 102, 0.5);\n}\n.uk-scope .uk-slidenav-large {\n    padding: 10px 10px;\n}\n.uk-scope .uk-slidenav-container {\n    display: flex;\n}\n.uk-scope .uk-dotnav {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    /* 3 */\n    margin-left: -12px;\n}\n.uk-scope .uk-dotnav > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    padding-left: 12px;\n}\n.uk-scope .uk-dotnav > * > * {\n    display: block;\n    box-sizing: border-box;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: transparent;\n    /* 1 */\n    text-indent: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    border: 1px solid rgba(102, 102, 102, 0.4);\n    transition: 0.2s ease-in-out;\n    transition-property: background-color, border-color;\n}\n.uk-scope .uk-dotnav > * > :hover,\n  .uk-scope .uk-dotnav > * > :focus {\n    background-color: rgba(102, 102, 102, 0.6);\n    outline: none;\n    border-color: transparent;\n}\n.uk-scope .uk-dotnav > * > :active {\n    background-color: rgba(102, 102, 102, 0.2);\n    border-color: transparent;\n}\n.uk-scope .uk-dotnav > .uk-active > * {\n    background-color: rgba(102, 102, 102, 0.6);\n    border-color: transparent;\n}\n.uk-scope .uk-dotnav-vertical {\n    /* 1 */\n    flex-direction: column;\n    /* 2 */\n    margin-left: 0;\n    margin-top: -12px;\n}\n.uk-scope .uk-dotnav-vertical > * {\n    padding-left: 0;\n    padding-top: 12px;\n}\n.uk-scope .uk-thumbnav {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    /* 3 */\n    margin-left: -15px;\n}\n.uk-scope .uk-thumbnav > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    padding-left: 15px;\n}\n.uk-scope .uk-thumbnav > * > * {\n    display: inline-block;\n    position: relative;\n}\n.uk-scope .uk-thumbnav > * > *::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.4);\n    transition: background-color 0.1s ease-in-out;\n}\n.uk-scope .uk-thumbnav > * > :hover,\n  .uk-scope .uk-thumbnav > * > :focus {\n    outline: none;\n}\n.uk-scope .uk-thumbnav > * > :hover::after,\n  .uk-scope .uk-thumbnav > * > :focus::after {\n    background-color: transparent;\n}\n.uk-scope .uk-thumbnav > .uk-active > *::after {\n    background-color: transparent;\n}\n.uk-scope .uk-thumbnav-vertical {\n    /* 1 */\n    flex-direction: column;\n    /* 2 */\n    margin-left: 0;\n    margin-top: -15px;\n}\n.uk-scope .uk-thumbnav-vertical > * {\n    padding-left: 0;\n    padding-top: 15px;\n}\n.uk-scope .uk-accordion {\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-accordion > :nth-child(n+2) {\n    margin-top: 20px;\n}\n.uk-scope .uk-accordion-title {\n    display: block;\n    font-size: 1.25rem;\n    line-height: 1.4;\n    color: #333;\n    overflow: hidden;\n}\n.uk-scope .uk-accordion-title::after {\n    content: \"\";\n    width: 1.4em;\n    height: 1.4em;\n    float: right;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n}\n.uk-scope .uk-open > .uk-accordion-title::after {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-accordion-title:hover,\n  .uk-scope .uk-accordion-title:focus {\n    color: #666;\n    text-decoration: none;\n    outline: none;\n}\n.uk-scope .uk-accordion-content {\n    margin-top: 20px;\n}\n.uk-scope .uk-accordion-content::before,\n  .uk-scope .uk-accordion-content::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-accordion-content::after {\n    clear: both;\n}\n.uk-scope .uk-accordion-content > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-drop {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: absolute;\n    z-index: 1020;\n    /* 3 */\n    box-sizing: border-box;\n    width: 300px;\n}\n.uk-scope .uk-drop.uk-open {\n    display: block;\n}\n.uk-scope [class*='uk-drop-top'] {\n    margin-top: -20px;\n}\n.uk-scope [class*='uk-drop-bottom'] {\n    margin-top: 20px;\n}\n.uk-scope [class*='uk-drop-left'] {\n    margin-left: -20px;\n}\n.uk-scope [class*='uk-drop-right'] {\n    margin-left: 20px;\n}\n.uk-scope .uk-drop-stack .uk-drop-grid > * {\n    width: 100% !important;\n}\n.uk-scope .uk-dropdown {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: absolute;\n    z-index: 1020;\n    /* 3 */\n    box-sizing: border-box;\n    min-width: 200px;\n    /* 4 */\n    padding: 25px;\n    background: #fff;\n    color: #666;\n    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);\n}\n.uk-scope .uk-dropdown.uk-open {\n    display: block;\n}\n.uk-scope .uk-dropdown-nav {\n    white-space: nowrap;\n    font-size: 0.875rem;\n}\n.uk-scope .uk-dropdown-nav > li > a {\n    color: #999;\n}\n.uk-scope .uk-dropdown-nav > li > a:hover,\n  .uk-scope .uk-dropdown-nav > li > a:focus,\n  .uk-scope .uk-dropdown-nav > li.uk-active > a {\n    color: #666;\n}\n.uk-scope .uk-dropdown-nav .uk-nav-header {\n    color: #333;\n}\n.uk-scope .uk-dropdown-nav .uk-nav-divider {\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-dropdown-nav .uk-nav-sub a {\n    color: #999;\n}\n.uk-scope .uk-dropdown-nav .uk-nav-sub a:hover,\n  .uk-scope .uk-dropdown-nav .uk-nav-sub a:focus {\n    color: #666;\n}\n.uk-scope [class*='uk-dropdown-top'] {\n    margin-top: -10px;\n}\n.uk-scope [class*='uk-dropdown-bottom'] {\n    margin-top: 10px;\n}\n.uk-scope [class*='uk-dropdown-left'] {\n    margin-left: -10px;\n}\n.uk-scope [class*='uk-dropdown-right'] {\n    margin-left: 10px;\n}\n.uk-scope .uk-dropdown-stack .uk-dropdown-grid > * {\n    width: 100% !important;\n}\n.uk-scope .uk-modal {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1010;\n    /* 3 */\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    /* 4 */\n    padding: 15px 15px;\n    /* 5 */\n    background: rgba(0, 0, 0, 0.6);\n    /* 6 */\n    opacity: 0;\n    transition: opacity 0.15s linear;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-modal {\n      padding: 50px 30px;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-modal {\n      padding-left: 40px;\n      padding-right: 40px;\n}\n}\n.uk-scope .uk-modal.uk-open {\n    opacity: 1;\n}\n.uk-scope .uk-modal-page {\n    overflow: hidden;\n}\n.uk-scope .uk-modal-dialog {\n    /* 1 */\n    position: relative;\n    /* 2 */\n    box-sizing: border-box;\n    margin: 0 auto;\n    width: 600px;\n    /* 3 */\n    max-width: calc(100% - 0.01px) !important;\n    /* 4 */\n    background: #fff;\n    /* 5 */\n    opacity: 0;\n    transform: translateY(-100px);\n    transition: 0.3s linear;\n    transition-property: opacity, transform;\n}\n.uk-scope .uk-open > .uk-modal-dialog {\n    opacity: 1;\n    transform: translateY(0);\n}\n.uk-scope .uk-modal-container .uk-modal-dialog {\n    width: 1200px;\n}\n.uk-scope .uk-modal-full {\n    padding: 0;\n    background: none;\n}\n.uk-scope .uk-modal-full .uk-modal-dialog {\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    transform: translateY(0);\n}\n.uk-scope .uk-modal-body {\n    padding: 30px 30px;\n}\n.uk-scope .uk-modal-header {\n    padding: 15px 30px;\n    background: #fff;\n    border-bottom: 1px solid #e5e5e5;\n}\n.uk-scope .uk-modal-footer {\n    padding: 15px 30px;\n    background: #fff;\n    border-top: 1px solid #e5e5e5;\n}\n.uk-scope .uk-modal-body::before,\n  .uk-scope .uk-modal-body::after,\n  .uk-scope .uk-modal-header::before,\n  .uk-scope .uk-modal-header::after,\n  .uk-scope .uk-modal-footer::before,\n  .uk-scope .uk-modal-footer::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-modal-body::after,\n  .uk-scope .uk-modal-header::after,\n  .uk-scope .uk-modal-footer::after {\n    clear: both;\n}\n.uk-scope .uk-modal-body > :last-child,\n  .uk-scope .uk-modal-header > :last-child,\n  .uk-scope .uk-modal-footer > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-modal-title {\n    font-size: 2rem;\n    line-height: 1.3;\n}\n.uk-scope [class*='uk-modal-close-'] {\n    position: absolute;\n    z-index: 1010;\n    top: 10px;\n    right: 10px;\n    padding: 5px;\n}\n.uk-scope [class*='uk-modal-close-']:first-child + * {\n    margin-top: 0;\n}\n.uk-scope .uk-modal-close-outside {\n    top: 0;\n    /* 1 */\n    right: -5px;\n    transform: translate(0, -100%);\n    color: #ffffff;\n}\n.uk-scope .uk-modal-close-outside:hover {\n    color: #fff;\n}\n@media (min-width: 960px) {\n.uk-scope {\n      /* 1 */\n}\n.uk-scope .uk-modal-close-outside {\n        right: 0;\n        transform: translate(100%, -100%);\n}\n}\n.uk-scope .uk-modal-close-full {\n    top: 0;\n    right: 0;\n    padding: 20px;\n    background: #fff;\n}\n.uk-scope .uk-lightbox {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1010;\n    /* 5 */\n    background: #000;\n    /* 6 */\n    opacity: 0;\n    transition: opacity 0.15s linear;\n}\n.uk-scope .uk-lightbox.uk-open {\n    display: block;\n    /* 2 */\n    opacity: 1;\n}\n.uk-scope .uk-lightbox-page {\n    overflow: hidden;\n}\n.uk-scope .uk-lightbox-items > * {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* 2 */\n    display: none;\n    justify-content: center;\n    align-items: center;\n    /* 3 */\n    color: rgba(255, 255, 255, 0.7);\n    /* 4 */\n    will-change: transform, opacity;\n}\n.uk-scope .uk-lightbox-items > * > * {\n    max-width: 100vw;\n    max-height: 100vh;\n}\n.uk-scope .uk-lightbox-items > * > :not(iframe) {\n    width: auto;\n    height: auto;\n}\n.uk-scope .uk-lightbox-items > .uk-active {\n    display: flex;\n}\n.uk-scope .uk-lightbox-toolbar {\n    padding: 10px 10px;\n    background: rgba(0, 0, 0, 0.3);\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-lightbox-toolbar * {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-lightbox-toolbar-icon {\n    padding: 5px;\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-lightbox-toolbar-icon:hover {\n    color: #fff;\n}\n.uk-scope .uk-lightbox-button {\n    box-sizing: border-box;\n    width: 50px;\n    height: 50px;\n    background: rgba(0, 0, 0, 0.3);\n    color: rgba(255, 255, 255, 0.7);\n    /* 1 */\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n.uk-scope .uk-lightbox-button:hover {\n    color: #fff;\n}\n.uk-scope .uk-lightbox-iframe {\n    width: 80%;\n    height: 80%;\n}\n.uk-scope .uk-slideshow {\n    /* 1 */\n    -webkit-tap-highlight-color: transparent;\n}\n.uk-scope .uk-slideshow-items {\n    /* 1 */\n    position: relative;\n    z-index: 0;\n    /* 2 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    /* 3 */\n    overflow: hidden;\n    /* 4 */\n    -webkit-touch-callout: none;\n}\n.uk-scope .uk-slideshow-items > * {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* 2 */\n    right: 0;\n    bottom: 0;\n    /* 3 */\n    overflow: hidden;\n    /* 4 */\n    will-change: transform, opacity;\n    /* 5 */\n    touch-action: pan-y;\n}\n.uk-scope .uk-slideshow-items > :not(.uk-active) {\n    display: none;\n}\n.uk-scope .uk-slider {\n    /* 1 */\n    -webkit-tap-highlight-color: transparent;\n}\n.uk-scope .uk-slider-container {\n    /* 1 */\n    overflow: hidden;\n}\n.uk-scope .uk-slider-items {\n    /* 1 */\n    will-change: transform;\n    /* 2 */\n    position: relative;\n}\n.uk-scope .uk-slider-items:not(.uk-grid) {\n    display: flex;\n    /* 1 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    /* 2 */\n    -webkit-touch-callout: none;\n}\n.uk-scope .uk-slider-items.uk-grid {\n    flex-wrap: nowrap;\n}\n.uk-scope .uk-slider-items > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    position: relative;\n    /* 3 */\n    touch-action: pan-y;\n}\n.uk-scope .uk-sticky-fixed {\n    z-index: 980;\n    box-sizing: border-box;\n    margin: 0 !important;\n    /* 1 */\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n.uk-scope .uk-sticky[class*='uk-animation-'] {\n    animation-duration: 0.2s;\n}\n.uk-scope .uk-sticky.uk-animation-reverse {\n    animation-duration: 0.2s;\n}\n.uk-scope .uk-offcanvas {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n}\n.uk-scope .uk-offcanvas-flip .uk-offcanvas {\n    right: 0;\n    left: auto;\n}\n.uk-scope .uk-offcanvas-bar {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    /* 2 */\n    box-sizing: border-box;\n    width: 270px;\n    padding: 20px 20px;\n    background: #222;\n    /* 3 */\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    /* 4 */\n    transform: translateX(-100%);\n}\n@media (min-width: 960px) {\n.uk-scope .uk-offcanvas-bar {\n      width: 350px;\n      padding: 40px 40px;\n}\n}\n.uk-scope .uk-offcanvas-flip .uk-offcanvas-bar {\n    left: auto;\n    right: 0;\n    transform: translateX(100%);\n}\n.uk-scope .uk-open > .uk-offcanvas-bar {\n    transform: translateX(0);\n}\n.uk-scope .uk-offcanvas-bar-animation {\n    transition: transform 0.3s ease-out;\n}\n.uk-scope .uk-offcanvas-reveal {\n    /* 1 */\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    /* 2 */\n    width: 0;\n    overflow: hidden;\n    /* 3 */\n    transition: width 0.3s ease-out;\n}\n.uk-scope .uk-offcanvas-reveal .uk-offcanvas-bar {\n    /* 4 */\n    transform: translateX(0);\n}\n.uk-scope .uk-open > .uk-offcanvas-reveal {\n    width: 270px;\n}\n@media (min-width: 960px) {\n.uk-scope .uk-open > .uk-offcanvas-reveal {\n      width: 350px;\n}\n}\n.uk-scope .uk-offcanvas-flip .uk-offcanvas-reveal {\n    right: 0;\n    left: auto;\n}\n.uk-scope .uk-offcanvas-close {\n    position: absolute;\n    z-index: 1000;\n    top: 20px;\n    right: 20px;\n    padding: 5px;\n}\n.uk-scope .uk-offcanvas-overlay {\n    /* 1 */\n    width: 100vw;\n    /* 2 */\n    touch-action: none;\n}\n.uk-scope .uk-offcanvas-overlay::before {\n    /* 1 */\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.1);\n    /* 2 */\n    opacity: 0;\n    transition: opacity 0.15s linear;\n}\n.uk-scope .uk-offcanvas-overlay.uk-open::before {\n    opacity: 1;\n}\n.uk-scope .uk-offcanvas-page,\n  .uk-scope .uk-offcanvas-container {\n    overflow-x: hidden;\n}\n.uk-scope .uk-offcanvas-container-overlay {\n    overflow: hidden;\n}\n.uk-scope .uk-offcanvas-container .uk-offcanvas-content {\n    position: relative;\n    left: 0;\n    transition: left 0.3s ease-out;\n    /* 1 */\n    -webkit-overflow-scrolling: touch;\n}\n.uk-scope .uk-offcanvas-overlay .uk-offcanvas-content {\n    overflow-y: hidden;\n}\n.uk-scope :not(.uk-offcanvas-flip) > .uk-offcanvas-content-animation {\n    left: 270px;\n}\n.uk-scope .uk-offcanvas-flip > .uk-offcanvas-content-animation {\n    left: -270px;\n}\n@media (min-width: 960px) {\n.uk-scope :not(.uk-offcanvas-flip) > .uk-offcanvas-content-animation {\n      left: 350px;\n}\n.uk-scope .uk-offcanvas-flip > .uk-offcanvas-content-animation {\n      left: -350px;\n}\n}\n.uk-scope .uk-switcher {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.uk-scope .uk-switcher > :not(.uk-active) {\n    display: none;\n}\n.uk-scope .uk-switcher > * > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-leader {\n    overflow: hidden;\n}\n.uk-scope .uk-leader-fill::after {\n    /* 1 */\n    display: inline-block;\n    margin-left: 15px;\n    /* 2 */\n    width: 0;\n    /* 3 */\n    content: attr(data-fill);\n    /* 4 */\n    white-space: nowrap;\n}\n.uk-scope .uk-leader-fill.uk-leader-hide::after {\n    display: none;\n}\n.uk-scope .var-leader-fill::before {\n    content: '.';\n}\n.uk-scope .uk-iconnav {\n    display: flex;\n    /* 1 */\n    flex-wrap: wrap;\n    /* 2 */\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    /* 3 */\n    margin-left: -10px;\n}\n.uk-scope .uk-iconnav > * {\n    /* 1 */\n    flex: none;\n    /* 2 */\n    padding-left: 10px;\n}\n.uk-scope .uk-iconnav > * > a {\n    /* 1 */\n    display: block;\n    /* 2 */\n    color: #999;\n}\n.uk-scope .uk-iconnav > * > a:hover,\n  .uk-scope .uk-iconnav > * > a:focus {\n    color: #666;\n    outline: none;\n}\n.uk-scope .uk-iconnav > .uk-active > a {\n    color: #666;\n}\n.uk-scope .uk-iconnav-vertical {\n    /* 1 */\n    flex-direction: column;\n    /* 2 */\n    margin-left: 0;\n    margin-top: -10px;\n}\n.uk-scope .uk-iconnav-vertical > * {\n    padding-left: 0;\n    padding-top: 10px;\n}\n.uk-scope .uk-notification {\n    /* 1 */\n    position: fixed;\n    top: 10px;\n    left: 10px;\n    z-index: 1040;\n    /* 2 */\n    box-sizing: border-box;\n    width: 350px;\n}\n.uk-scope .uk-notification-top-right,\n  .uk-scope .uk-notification-bottom-right {\n    left: auto;\n    right: 10px;\n}\n.uk-scope .uk-notification-top-center,\n  .uk-scope .uk-notification-bottom-center {\n    left: 50%;\n    margin-left: -175px;\n}\n.uk-scope .uk-notification-bottom-left,\n  .uk-scope .uk-notification-bottom-right,\n  .uk-scope .uk-notification-bottom-center {\n    top: auto;\n    bottom: 10px;\n}\n@media (max-width: 639px) {\n.uk-scope .uk-notification {\n      left: 10px;\n      right: 10px;\n      width: auto;\n      margin: 0;\n}\n}\n.uk-scope .uk-notification-message {\n    position: relative;\n    margin-bottom: 10px;\n    padding: 15px;\n    background: #f8f8f8;\n    color: #666;\n    font-size: 1.25rem;\n    line-height: 1.4;\n    cursor: pointer;\n}\n.uk-scope .uk-notification-close {\n    display: none;\n    position: absolute;\n    top: 20px;\n    right: 15px;\n}\n.uk-scope .uk-notification-message:hover .uk-notification-close {\n    display: block;\n}\n.uk-scope .uk-notification-message-primary {\n    color: #1e87f0;\n}\n.uk-scope .uk-notification-message-success {\n    color: #32d296;\n}\n.uk-scope .uk-notification-message-warning {\n    color: #faa05a;\n}\n.uk-scope .uk-notification-message-danger {\n    color: #f0506e;\n}\n.uk-scope .uk-tooltip {\n    /* 1 */\n    display: none;\n    /* 2 */\n    position: absolute;\n    z-index: 1030;\n    /* 3 */\n    box-sizing: border-box;\n    max-width: 200px;\n    padding: 3px 6px;\n    /* 4 */\n    background: #666;\n    border-radius: 2px;\n    color: #fff;\n    font-size: 12px;\n}\n.uk-scope .uk-tooltip.uk-active {\n    display: block;\n}\n.uk-scope [class*='uk-tooltip-top'] {\n    margin-top: -10px;\n}\n.uk-scope [class*='uk-tooltip-bottom'] {\n    margin-top: 10px;\n}\n.uk-scope [class*='uk-tooltip-left'] {\n    margin-left: -10px;\n}\n.uk-scope [class*='uk-tooltip-right'] {\n    margin-left: 10px;\n}\n.uk-scope .uk-placeholder {\n    margin-bottom: 20px;\n    padding: 30px 30px;\n    background: transparent;\n    border: 1px dashed #e5e5e5;\n}\n.uk-scope * + .uk-placeholder {\n    margin-top: 20px;\n}\n.uk-scope .uk-placeholder > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-progress {\n    /* 1 */\n    vertical-align: baseline;\n    /* 2 */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    /* 3 */\n    display: block;\n    width: 100%;\n    /* 4 */\n    border: 0;\n    /* 5 */\n    background-color: #f8f8f8;\n    /* 6 */\n    margin-bottom: 20px;\n    height: 15px;\n    border-radius: 500px;\n    overflow: hidden;\n}\n.uk-scope * + .uk-progress {\n    margin-top: 20px;\n}\n.uk-scope .uk-progress:indeterminate {\n    color: transparent;\n}\n.uk-scope .uk-progress::-webkit-progress-bar {\n    background-color: #f8f8f8;\n    border-radius: 500px;\n    overflow: hidden;\n}\n.uk-scope .uk-progress:indeterminate::-moz-progress-bar {\n    width: 0;\n}\n.uk-scope .uk-progress::-webkit-progress-value {\n    background-color: #1e87f0;\n    transition: width 0.6s ease;\n}\n.uk-scope .uk-progress::-moz-progress-bar {\n    background-color: #1e87f0;\n}\n.uk-scope .uk-progress::-ms-fill {\n    background-color: #1e87f0;\n    transition: width 0.6s ease;\n    /* 1 */\n    border: 0;\n}\n.uk-scope .uk-sortable {\n    position: relative;\n}\n.uk-scope .uk-sortable > * {\n    touch-action: none;\n}\n.uk-scope .uk-sortable svg {\n    pointer-events: none;\n}\n.uk-scope .uk-sortable > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-sortable-drag {\n    position: absolute !important;\n    z-index: 1050 !important;\n    pointer-events: none;\n}\n.uk-scope .uk-sortable-placeholder {\n    opacity: 0;\n}\n.uk-scope .uk-sortable-empty {\n    min-height: 50px;\n}\n.uk-scope .uk-sortable-handle:hover {\n    cursor: move;\n}\n.uk-scope .uk-countdown-number,\n  .uk-scope .uk-countdown-separator {\n    /* 1 */\n    line-height: 70px;\n}\n.uk-scope .uk-countdown-number {\n    font-size: 2rem;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-countdown-number {\n      font-size: 4rem;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-countdown-number {\n      font-size: 6rem;\n}\n}\n.uk-scope .uk-countdown-separator {\n    font-size: 1rem;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-countdown-separator {\n      font-size: 2rem;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-countdown-separator {\n      font-size: 3rem;\n}\n}\n.uk-scope [class*='uk-animation-'] {\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: both;\n}\n.uk-scope .uk-animation-reverse {\n    animation-direction: reverse;\n    animation-timing-function: ease-in;\n}\n.uk-scope .uk-animation-fade {\n    animation-name: uk-fade;\n    animation-duration: 0.8s;\n    animation-timing-function: linear;\n}\n.uk-scope .uk-animation-scale-up {\n    animation-name: uk-fade-scale-02;\n}\n.uk-scope .uk-animation-scale-down {\n    animation-name: uk-fade-scale-18;\n}\n.uk-scope .uk-animation-slide-top {\n    animation-name: uk-fade-top;\n}\n.uk-scope .uk-animation-slide-bottom {\n    animation-name: uk-fade-bottom;\n}\n.uk-scope .uk-animation-slide-left {\n    animation-name: uk-fade-left;\n}\n.uk-scope .uk-animation-slide-right {\n    animation-name: uk-fade-right;\n}\n.uk-scope .uk-animation-slide-top-small {\n    animation-name: uk-fade-top-small;\n}\n.uk-scope .uk-animation-slide-bottom-small {\n    animation-name: uk-fade-bottom-small;\n}\n.uk-scope .uk-animation-slide-left-small {\n    animation-name: uk-fade-left-small;\n}\n.uk-scope .uk-animation-slide-right-small {\n    animation-name: uk-fade-right-small;\n}\n.uk-scope .uk-animation-slide-top-medium {\n    animation-name: uk-fade-top-medium;\n}\n.uk-scope .uk-animation-slide-bottom-medium {\n    animation-name: uk-fade-bottom-medium;\n}\n.uk-scope .uk-animation-slide-left-medium {\n    animation-name: uk-fade-left-medium;\n}\n.uk-scope .uk-animation-slide-right-medium {\n    animation-name: uk-fade-right-medium;\n}\n.uk-scope .uk-animation-kenburns {\n    animation-name: uk-scale-kenburns;\n    animation-duration: 15s;\n}\n.uk-scope .uk-animation-shake {\n    animation-name: uk-shake;\n}\n.uk-scope .uk-animation-fast {\n    animation-duration: 0.1s;\n}\n.uk-scope .uk-animation-toggle:not(:hover):not(.uk-hover) [class*='uk-animation-'] {\n    animation-name: none;\n}\n@keyframes uk-fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes uk-fade-top {\n0% {\n    opacity: 0;\n    transform: translateY(-100%);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes uk-fade-bottom {\n0% {\n    opacity: 0;\n    transform: translateY(100%);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes uk-fade-left {\n0% {\n    opacity: 0;\n    transform: translateX(-100%);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes uk-fade-right {\n0% {\n    opacity: 0;\n    transform: translateX(100%);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes uk-fade-top-small {\n0% {\n    opacity: 0;\n    transform: translateY(-10px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes uk-fade-bottom-small {\n0% {\n    opacity: 0;\n    transform: translateY(10px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes uk-fade-left-small {\n0% {\n    opacity: 0;\n    transform: translateX(-10px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes uk-fade-right-small {\n0% {\n    opacity: 0;\n    transform: translateX(10px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes uk-fade-top-medium {\n0% {\n    opacity: 0;\n    transform: translateY(-50px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes uk-fade-bottom-medium {\n0% {\n    opacity: 0;\n    transform: translateY(50px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes uk-fade-left-medium {\n0% {\n    opacity: 0;\n    transform: translateX(-50px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes uk-fade-right-medium {\n0% {\n    opacity: 0;\n    transform: translateX(50px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes uk-fade-scale-02 {\n0% {\n    opacity: 0;\n    transform: scale(0.2);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes uk-fade-scale-18 {\n0% {\n    opacity: 0;\n    transform: scale(1.8);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes uk-scale-kenburns {\n0% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1.2);\n}\n}\n@keyframes uk-shake {\n0%,\n  100% {\n    transform: translateX(0);\n}\n10% {\n    transform: translateX(-9px);\n}\n20% {\n    transform: translateX(8px);\n}\n30% {\n    transform: translateX(-7px);\n}\n40% {\n    transform: translateX(6px);\n}\n50% {\n    transform: translateX(-5px);\n}\n60% {\n    transform: translateX(4px);\n}\n70% {\n    transform: translateX(-3px);\n}\n80% {\n    transform: translateX(2px);\n}\n90% {\n    transform: translateX(-1px);\n}\n}\n.uk-scope [class*='uk-child-width'] > * {\n    box-sizing: border-box;\n    width: 100%;\n}\n.uk-scope .uk-child-width-1-2 > * {\n    width: 50%;\n}\n.uk-scope .uk-child-width-1-3 > * {\n    width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-child-width-1-4 > * {\n    width: 25%;\n}\n.uk-scope .uk-child-width-1-5 > * {\n    width: 20%;\n}\n.uk-scope .uk-child-width-1-6 > * {\n    width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-child-width-auto > * {\n    width: auto;\n}\n.uk-scope .uk-child-width-expand > * {\n    width: 1px;\n}\n.uk-scope .uk-child-width-expand > :not([class*='uk-width']) {\n    flex: 1;\n    /* 1 */\n    min-width: 0;\n    /* 2 */\n    flex-basis: 1px;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-child-width-1-1\\@s > * {\n      width: 100%;\n}\n.uk-scope .uk-child-width-1-2\\@s > * {\n      width: 50%;\n}\n.uk-scope .uk-child-width-1-3\\@s > * {\n      width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-child-width-1-4\\@s > * {\n      width: 25%;\n}\n.uk-scope .uk-child-width-1-5\\@s > * {\n      width: 20%;\n}\n.uk-scope .uk-child-width-1-6\\@s > * {\n      width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-child-width-auto\\@s > * {\n      width: auto;\n}\n.uk-scope .uk-child-width-expand\\@s > * {\n      width: 1px;\n}\n.uk-scope .uk-child-width-expand\\@s > :not([class*='uk-width']) {\n      flex: 1;\n      min-width: 0;\n      flex-basis: 1px;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-child-width-1-1\\@m > * {\n      width: 100%;\n}\n.uk-scope .uk-child-width-1-2\\@m > * {\n      width: 50%;\n}\n.uk-scope .uk-child-width-1-3\\@m > * {\n      width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-child-width-1-4\\@m > * {\n      width: 25%;\n}\n.uk-scope .uk-child-width-1-5\\@m > * {\n      width: 20%;\n}\n.uk-scope .uk-child-width-1-6\\@m > * {\n      width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-child-width-auto\\@m > * {\n      width: auto;\n}\n.uk-scope .uk-child-width-expand\\@m > * {\n      width: 1px;\n}\n.uk-scope .uk-child-width-expand\\@m > :not([class*='uk-width']) {\n      flex: 1;\n      min-width: 0;\n      flex-basis: 1px;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-child-width-1-1\\@l > * {\n      width: 100%;\n}\n.uk-scope .uk-child-width-1-2\\@l > * {\n      width: 50%;\n}\n.uk-scope .uk-child-width-1-3\\@l > * {\n      width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-child-width-1-4\\@l > * {\n      width: 25%;\n}\n.uk-scope .uk-child-width-1-5\\@l > * {\n      width: 20%;\n}\n.uk-scope .uk-child-width-1-6\\@l > * {\n      width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-child-width-auto\\@l > * {\n      width: auto;\n}\n.uk-scope .uk-child-width-expand\\@l > * {\n      width: 1px;\n}\n.uk-scope .uk-child-width-expand\\@l > :not([class*='uk-width']) {\n      flex: 1;\n      min-width: 0;\n      flex-basis: 1px;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-child-width-1-1\\@xl > * {\n      width: 100%;\n}\n.uk-scope .uk-child-width-1-2\\@xl > * {\n      width: 50%;\n}\n.uk-scope .uk-child-width-1-3\\@xl > * {\n      width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-child-width-1-4\\@xl > * {\n      width: 25%;\n}\n.uk-scope .uk-child-width-1-5\\@xl > * {\n      width: 20%;\n}\n.uk-scope .uk-child-width-1-6\\@xl > * {\n      width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-child-width-auto\\@xl > * {\n      width: auto;\n}\n.uk-scope .uk-child-width-expand\\@xl > * {\n      width: 1px;\n}\n.uk-scope .uk-child-width-expand\\@xl > :not([class*='uk-width']) {\n      flex: 1;\n      min-width: 0;\n      flex-basis: 1px;\n}\n}\n.uk-scope [class*='uk-width'] {\n    box-sizing: border-box;\n    width: 100%;\n    /* 1 */\n    max-width: 100%;\n}\n.uk-scope .uk-width-1-2 {\n    width: 50%;\n}\n.uk-scope .uk-width-1-3 {\n    width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-width-2-3 {\n    width: calc(100% * 2 / 3.001);\n}\n.uk-scope .uk-width-1-4 {\n    width: 25%;\n}\n.uk-scope .uk-width-3-4 {\n    width: 75%;\n}\n.uk-scope .uk-width-1-5 {\n    width: 20%;\n}\n.uk-scope .uk-width-2-5 {\n    width: 40%;\n}\n.uk-scope .uk-width-3-5 {\n    width: 60%;\n}\n.uk-scope .uk-width-4-5 {\n    width: 80%;\n}\n.uk-scope .uk-width-1-6 {\n    width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-width-5-6 {\n    width: calc(100% * 5 / 6.001);\n}\n.uk-scope .uk-width-small {\n    width: 150px;\n}\n.uk-scope .uk-width-medium {\n    width: 300px;\n}\n.uk-scope .uk-width-large {\n    width: 450px;\n}\n.uk-scope .uk-width-xlarge {\n    width: 600px;\n}\n.uk-scope .uk-width-xxlarge {\n    width: 750px;\n}\n.uk-scope .uk-width-auto {\n    width: auto;\n}\n.uk-scope .uk-width-expand {\n    width: 1px;\n    flex: 1;\n    min-width: 0;\n    flex-basis: 1px;\n}\n@media (min-width: 640px) {\n.uk-scope {\n      /* Whole */\n      /* Halves */\n      /* Thirds */\n      /* Quarters */\n      /* Fifths */\n      /* Sixths */\n      /* Pixel */\n      /* Auto */\n      /* Expand */\n}\n.uk-scope .uk-width-1-1\\@s {\n        width: 100%;\n}\n.uk-scope .uk-width-1-2\\@s {\n        width: 50%;\n}\n.uk-scope .uk-width-1-3\\@s {\n        width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-width-2-3\\@s {\n        width: calc(100% * 2 / 3.001);\n}\n.uk-scope .uk-width-1-4\\@s {\n        width: 25%;\n}\n.uk-scope .uk-width-3-4\\@s {\n        width: 75%;\n}\n.uk-scope .uk-width-1-5\\@s {\n        width: 20%;\n}\n.uk-scope .uk-width-2-5\\@s {\n        width: 40%;\n}\n.uk-scope .uk-width-3-5\\@s {\n        width: 60%;\n}\n.uk-scope .uk-width-4-5\\@s {\n        width: 80%;\n}\n.uk-scope .uk-width-1-6\\@s {\n        width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-width-5-6\\@s {\n        width: calc(100% * 5 / 6.001);\n}\n.uk-scope .uk-width-small\\@s {\n        width: 150px;\n}\n.uk-scope .uk-width-medium\\@s {\n        width: 300px;\n}\n.uk-scope .uk-width-large\\@s {\n        width: 450px;\n}\n.uk-scope .uk-width-xlarge\\@s {\n        width: 600px;\n}\n.uk-scope .uk-width-xxlarge\\@s {\n        width: 750px;\n}\n.uk-scope .uk-width-auto\\@s {\n        width: auto;\n}\n.uk-scope .uk-width-expand\\@s {\n        width: 1px;\n        flex: 1;\n        min-width: 0;\n        flex-basis: 1px;\n}\n}\n@media (min-width: 960px) {\n.uk-scope {\n      /* Whole */\n      /* Halves */\n      /* Thirds */\n      /* Quarters */\n      /* Fifths */\n      /* Sixths */\n      /* Pixel */\n      /* Auto */\n      /* Expand */\n}\n.uk-scope .uk-width-1-1\\@m {\n        width: 100%;\n}\n.uk-scope .uk-width-1-2\\@m {\n        width: 50%;\n}\n.uk-scope .uk-width-1-3\\@m {\n        width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-width-2-3\\@m {\n        width: calc(100% * 2 / 3.001);\n}\n.uk-scope .uk-width-1-4\\@m {\n        width: 25%;\n}\n.uk-scope .uk-width-3-4\\@m {\n        width: 75%;\n}\n.uk-scope .uk-width-1-5\\@m {\n        width: 20%;\n}\n.uk-scope .uk-width-2-5\\@m {\n        width: 40%;\n}\n.uk-scope .uk-width-3-5\\@m {\n        width: 60%;\n}\n.uk-scope .uk-width-4-5\\@m {\n        width: 80%;\n}\n.uk-scope .uk-width-1-6\\@m {\n        width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-width-5-6\\@m {\n        width: calc(100% * 5 / 6.001);\n}\n.uk-scope .uk-width-small\\@m {\n        width: 150px;\n}\n.uk-scope .uk-width-medium\\@m {\n        width: 300px;\n}\n.uk-scope .uk-width-large\\@m {\n        width: 450px;\n}\n.uk-scope .uk-width-xlarge\\@m {\n        width: 600px;\n}\n.uk-scope .uk-width-xxlarge\\@m {\n        width: 750px;\n}\n.uk-scope .uk-width-auto\\@m {\n        width: auto;\n}\n.uk-scope .uk-width-expand\\@m {\n        width: 1px;\n        flex: 1;\n        min-width: 0;\n        flex-basis: 1px;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope {\n      /* Whole */\n      /* Halves */\n      /* Thirds */\n      /* Quarters */\n      /* Fifths */\n      /* Sixths */\n      /* Pixel */\n      /* Auto */\n      /* Expand */\n}\n.uk-scope .uk-width-1-1\\@l {\n        width: 100%;\n}\n.uk-scope .uk-width-1-2\\@l {\n        width: 50%;\n}\n.uk-scope .uk-width-1-3\\@l {\n        width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-width-2-3\\@l {\n        width: calc(100% * 2 / 3.001);\n}\n.uk-scope .uk-width-1-4\\@l {\n        width: 25%;\n}\n.uk-scope .uk-width-3-4\\@l {\n        width: 75%;\n}\n.uk-scope .uk-width-1-5\\@l {\n        width: 20%;\n}\n.uk-scope .uk-width-2-5\\@l {\n        width: 40%;\n}\n.uk-scope .uk-width-3-5\\@l {\n        width: 60%;\n}\n.uk-scope .uk-width-4-5\\@l {\n        width: 80%;\n}\n.uk-scope .uk-width-1-6\\@l {\n        width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-width-5-6\\@l {\n        width: calc(100% * 5 / 6.001);\n}\n.uk-scope .uk-width-small\\@l {\n        width: 150px;\n}\n.uk-scope .uk-width-medium\\@l {\n        width: 300px;\n}\n.uk-scope .uk-width-large\\@l {\n        width: 450px;\n}\n.uk-scope .uk-width-xlarge\\@l {\n        width: 600px;\n}\n.uk-scope .uk-width-xxlarge\\@l {\n        width: 750px;\n}\n.uk-scope .uk-width-auto\\@l {\n        width: auto;\n}\n.uk-scope .uk-width-expand\\@l {\n        width: 1px;\n        flex: 1;\n        min-width: 0;\n        flex-basis: 1px;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope {\n      /* Whole */\n      /* Halves */\n      /* Thirds */\n      /* Quarters */\n      /* Fifths */\n      /* Sixths */\n      /* Pixel */\n      /* Auto */\n      /* Expand */\n}\n.uk-scope .uk-width-1-1\\@xl {\n        width: 100%;\n}\n.uk-scope .uk-width-1-2\\@xl {\n        width: 50%;\n}\n.uk-scope .uk-width-1-3\\@xl {\n        width: calc(100% * 1 / 3.001);\n}\n.uk-scope .uk-width-2-3\\@xl {\n        width: calc(100% * 2 / 3.001);\n}\n.uk-scope .uk-width-1-4\\@xl {\n        width: 25%;\n}\n.uk-scope .uk-width-3-4\\@xl {\n        width: 75%;\n}\n.uk-scope .uk-width-1-5\\@xl {\n        width: 20%;\n}\n.uk-scope .uk-width-2-5\\@xl {\n        width: 40%;\n}\n.uk-scope .uk-width-3-5\\@xl {\n        width: 60%;\n}\n.uk-scope .uk-width-4-5\\@xl {\n        width: 80%;\n}\n.uk-scope .uk-width-1-6\\@xl {\n        width: calc(100% * 1 / 6.001);\n}\n.uk-scope .uk-width-5-6\\@xl {\n        width: calc(100% * 5 / 6.001);\n}\n.uk-scope .uk-width-small\\@xl {\n        width: 150px;\n}\n.uk-scope .uk-width-medium\\@xl {\n        width: 300px;\n}\n.uk-scope .uk-width-large\\@xl {\n        width: 450px;\n}\n.uk-scope .uk-width-xlarge\\@xl {\n        width: 600px;\n}\n.uk-scope .uk-width-xxlarge\\@xl {\n        width: 750px;\n}\n.uk-scope .uk-width-auto\\@xl {\n        width: auto;\n}\n.uk-scope .uk-width-expand\\@xl {\n        width: 1px;\n        flex: 1;\n        min-width: 0;\n        flex-basis: 1px;\n}\n}\n.uk-scope [class*='uk-height'] {\n    box-sizing: border-box;\n}\n.uk-scope .uk-height-1-1 {\n    height: 100%;\n}\n.uk-scope .uk-height-viewport {\n    min-height: 100vh;\n}\n.uk-scope .uk-height-small {\n    height: 150px;\n}\n.uk-scope .uk-height-medium {\n    height: 300px;\n}\n.uk-scope .uk-height-large {\n    height: 450px;\n}\n.uk-scope .uk-height-max-small {\n    max-height: 150px;\n}\n.uk-scope .uk-height-max-medium {\n    max-height: 300px;\n}\n.uk-scope .uk-height-max-large {\n    max-height: 450px;\n}\n.uk-scope .uk-text-lead {\n    font-size: 1.5rem;\n    line-height: 1.5;\n    color: #333;\n}\n.uk-scope .uk-text-meta {\n    font-size: 0.875rem;\n    line-height: 1.4;\n    color: #999;\n}\n.uk-scope .uk-text-meta a {\n    color: #999;\n}\n.uk-scope .uk-text-meta a:hover {\n    color: #666;\n    text-decoration: none;\n}\n.uk-scope .uk-text-small {\n    font-size: 0.875rem;\n    line-height: 1.5;\n}\n.uk-scope .uk-text-large {\n    font-size: 1.5rem;\n    line-height: 1.5;\n}\n.uk-scope .uk-text-bold {\n    font-weight: bolder;\n}\n.uk-scope .uk-text-uppercase {\n    text-transform: uppercase !important;\n}\n.uk-scope .uk-text-capitalize {\n    text-transform: capitalize !important;\n}\n.uk-scope .uk-text-lowercase {\n    text-transform: lowercase !important;\n}\n.uk-scope .uk-text-muted {\n    color: #999 !important;\n}\n.uk-scope .uk-text-primary {\n    color: #1e87f0 !important;\n}\n.uk-scope .uk-text-success {\n    color: #32d296 !important;\n}\n.uk-scope .uk-text-warning {\n    color: #faa05a !important;\n}\n.uk-scope .uk-text-danger {\n    color: #f0506e !important;\n}\n.uk-scope .uk-text-background {\n    /* 1 */\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    /* 2 */\n    display: inline-block;\n    /* 3 */\n    color: #1e87f0 !important;\n}\n@supports (-webkit-background-clip: text) {\n.uk-scope .uk-text-background {\n      background-color: #1e87f0;\n}\n}\n.uk-scope .uk-text-left {\n    text-align: left !important;\n}\n.uk-scope .uk-text-right {\n    text-align: right !important;\n}\n.uk-scope .uk-text-center {\n    text-align: center !important;\n}\n.uk-scope .uk-text-justify {\n    text-align: justify !important;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-text-left\\@s {\n      text-align: left !important;\n}\n.uk-scope .uk-text-right\\@s {\n      text-align: right !important;\n}\n.uk-scope .uk-text-center\\@s {\n      text-align: center !important;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-text-left\\@m {\n      text-align: left !important;\n}\n.uk-scope .uk-text-right\\@m {\n      text-align: right !important;\n}\n.uk-scope .uk-text-center\\@m {\n      text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-text-left\\@l {\n      text-align: left !important;\n}\n.uk-scope .uk-text-right\\@l {\n      text-align: right !important;\n}\n.uk-scope .uk-text-center\\@l {\n      text-align: center !important;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-text-left\\@xl {\n      text-align: left !important;\n}\n.uk-scope .uk-text-right\\@xl {\n      text-align: right !important;\n}\n.uk-scope .uk-text-center\\@xl {\n      text-align: center !important;\n}\n}\n.uk-scope .uk-text-top {\n    vertical-align: top !important;\n}\n.uk-scope .uk-text-middle {\n    vertical-align: middle !important;\n}\n.uk-scope .uk-text-bottom {\n    vertical-align: bottom !important;\n}\n.uk-scope .uk-text-baseline {\n    vertical-align: baseline !important;\n}\n.uk-scope .uk-text-nowrap {\n    white-space: nowrap;\n}\n.uk-scope .uk-text-truncate {\n    /* 1 */\n    max-width: 100%;\n    /* 2 */\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.uk-scope th.uk-text-truncate,\n  .uk-scope td.uk-text-truncate {\n    max-width: 0;\n}\n.uk-scope .uk-text-break {\n    /* 1 */\n    overflow-wrap: break-word;\n    /* 2 */\n    word-wrap: break-word;\n}\n.uk-scope th.uk-text-break,\n  .uk-scope td.uk-text-break {\n    word-break: break-all;\n}\n.uk-scope [class*='uk-column-'] {\n    column-gap: 30px;\n}\n@media (min-width: 1200px) {\n.uk-scope [class*='uk-column-'] {\n      column-gap: 40px;\n}\n}\n.uk-scope [class*='uk-column-'] img {\n    transform: translate3d(0, 0, 0);\n}\n.uk-scope .uk-column-divider {\n    column-rule: 1px solid #e5e5e5;\n    /* 1 */\n    column-gap: 60px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-column-divider {\n      column-gap: 80px;\n}\n}\n.uk-scope .uk-column-1-2 {\n    column-count: 2;\n}\n.uk-scope .uk-column-1-3 {\n    column-count: 3;\n}\n.uk-scope .uk-column-1-4 {\n    column-count: 4;\n}\n.uk-scope .uk-column-1-5 {\n    column-count: 5;\n}\n.uk-scope .uk-column-1-6 {\n    column-count: 6;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-column-1-2\\@s {\n      column-count: 2;\n}\n.uk-scope .uk-column-1-3\\@s {\n      column-count: 3;\n}\n.uk-scope .uk-column-1-4\\@s {\n      column-count: 4;\n}\n.uk-scope .uk-column-1-5\\@s {\n      column-count: 5;\n}\n.uk-scope .uk-column-1-6\\@s {\n      column-count: 6;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-column-1-2\\@m {\n      column-count: 2;\n}\n.uk-scope .uk-column-1-3\\@m {\n      column-count: 3;\n}\n.uk-scope .uk-column-1-4\\@m {\n      column-count: 4;\n}\n.uk-scope .uk-column-1-5\\@m {\n      column-count: 5;\n}\n.uk-scope .uk-column-1-6\\@m {\n      column-count: 6;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-column-1-2\\@l {\n      column-count: 2;\n}\n.uk-scope .uk-column-1-3\\@l {\n      column-count: 3;\n}\n.uk-scope .uk-column-1-4\\@l {\n      column-count: 4;\n}\n.uk-scope .uk-column-1-5\\@l {\n      column-count: 5;\n}\n.uk-scope .uk-column-1-6\\@l {\n      column-count: 6;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-column-1-2\\@xl {\n      column-count: 2;\n}\n.uk-scope .uk-column-1-3\\@xl {\n      column-count: 3;\n}\n.uk-scope .uk-column-1-4\\@xl {\n      column-count: 4;\n}\n.uk-scope .uk-column-1-5\\@xl {\n      column-count: 5;\n}\n.uk-scope .uk-column-1-6\\@xl {\n      column-count: 6;\n}\n}\n.uk-scope .uk-column-span {\n    column-span: all;\n}\n.uk-scope .uk-cover {\n    /* 1 */\n    max-width: none;\n    /* 2 */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n.uk-scope iframe.uk-cover {\n    pointer-events: none;\n}\n.uk-scope .uk-cover-container {\n    /* 1 */\n    overflow: hidden;\n    /* 2 */\n    position: relative;\n}\n.uk-scope .uk-background-default {\n    background-color: #fff;\n}\n.uk-scope .uk-background-muted {\n    background-color: #f8f8f8;\n}\n.uk-scope .uk-background-primary {\n    background-color: #1e87f0;\n}\n.uk-scope .uk-background-secondary {\n    background-color: #222;\n}\n.uk-scope .uk-background-cover,\n  .uk-scope .uk-background-contain {\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n}\n.uk-scope .uk-background-cover {\n    background-size: cover;\n}\n.uk-scope .uk-background-contain {\n    background-size: contain;\n}\n.uk-scope .uk-background-top-left {\n    background-position: 0 0;\n}\n.uk-scope .uk-background-top-center {\n    background-position: 50% 0;\n}\n.uk-scope .uk-background-top-right {\n    background-position: 100% 0;\n}\n.uk-scope .uk-background-center-left {\n    background-position: 0 50%;\n}\n.uk-scope .uk-background-center-center {\n    background-position: 50% 50%;\n}\n.uk-scope .uk-background-center-right {\n    background-position: 100% 50%;\n}\n.uk-scope .uk-background-bottom-left {\n    background-position: 0 100%;\n}\n.uk-scope .uk-background-bottom-center {\n    background-position: 50% 100%;\n}\n.uk-scope .uk-background-bottom-right {\n    background-position: 100% 100%;\n}\n.uk-scope .uk-background-norepeat {\n    background-repeat: no-repeat;\n}\n.uk-scope .uk-background-fixed {\n    background-attachment: fixed;\n    /* 1 */\n    backface-visibility: hidden;\n}\n@media (pointer: coarse) {\n.uk-scope .uk-background-fixed {\n      background-attachment: scroll;\n}\n}\n@media (max-width: 639px) {\n.uk-scope .uk-background-image\\@s {\n      background-image: none !important;\n}\n}\n@media (max-width: 959px) {\n.uk-scope .uk-background-image\\@m {\n      background-image: none !important;\n}\n}\n@media (max-width: 1199px) {\n.uk-scope .uk-background-image\\@l {\n      background-image: none !important;\n}\n}\n@media (max-width: 1599px) {\n.uk-scope .uk-background-image\\@xl {\n      background-image: none !important;\n}\n}\n.uk-scope .uk-background-blend-multiply {\n    background-blend-mode: multiply;\n}\n.uk-scope .uk-background-blend-screen {\n    background-blend-mode: screen;\n}\n.uk-scope .uk-background-blend-overlay {\n    background-blend-mode: overlay;\n}\n.uk-scope .uk-background-blend-darken {\n    background-blend-mode: darken;\n}\n.uk-scope .uk-background-blend-lighten {\n    background-blend-mode: lighten;\n}\n.uk-scope .uk-background-blend-color-dodge {\n    background-blend-mode: color-dodge;\n}\n.uk-scope .uk-background-blend-color-burn {\n    background-blend-mode: color-burn;\n}\n.uk-scope .uk-background-blend-hard-light {\n    background-blend-mode: hard-light;\n}\n.uk-scope .uk-background-blend-soft-light {\n    background-blend-mode: soft-light;\n}\n.uk-scope .uk-background-blend-difference {\n    background-blend-mode: difference;\n}\n.uk-scope .uk-background-blend-exclusion {\n    background-blend-mode: exclusion;\n}\n.uk-scope .uk-background-blend-hue {\n    background-blend-mode: hue;\n}\n.uk-scope .uk-background-blend-saturation {\n    background-blend-mode: saturation;\n}\n.uk-scope .uk-background-blend-color {\n    background-blend-mode: color;\n}\n.uk-scope .uk-background-blend-luminosity {\n    background-blend-mode: luminosity;\n}\n.uk-scope [class*='uk-align'] {\n    display: block;\n    margin-bottom: 30px;\n}\n.uk-scope * + [class*='uk-align'] {\n    margin-top: 30px;\n}\n.uk-scope .uk-align-center {\n    margin-left: auto;\n    margin-right: auto;\n}\n.uk-scope .uk-align-left {\n    margin-top: 0;\n    margin-right: 30px;\n    float: left;\n}\n.uk-scope .uk-align-right {\n    margin-top: 0;\n    margin-left: 30px;\n    float: right;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-align-left\\@s {\n      margin-top: 0;\n      margin-right: 30px;\n      float: left;\n}\n.uk-scope .uk-align-right\\@s {\n      margin-top: 0;\n      margin-left: 30px;\n      float: right;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-align-left\\@m {\n      margin-top: 0;\n      margin-right: 30px;\n      float: left;\n}\n.uk-scope .uk-align-right\\@m {\n      margin-top: 0;\n      margin-left: 30px;\n      float: right;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-align-left\\@l {\n      margin-top: 0;\n      float: left;\n}\n.uk-scope .uk-align-right\\@l {\n      margin-top: 0;\n      float: right;\n}\n.uk-scope .uk-align-left,\n    .uk-scope .uk-align-left\\@s,\n    .uk-scope .uk-align-left\\@m,\n    .uk-scope .uk-align-left\\@l {\n      margin-right: 40px;\n}\n.uk-scope .uk-align-right,\n    .uk-scope .uk-align-right\\@s,\n    .uk-scope .uk-align-right\\@m,\n    .uk-scope .uk-align-right\\@l {\n      margin-left: 40px;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-align-left\\@xl {\n      margin-top: 0;\n      margin-right: 40px;\n      float: left;\n}\n.uk-scope .uk-align-right\\@xl {\n      margin-top: 0;\n      margin-left: 40px;\n      float: right;\n}\n}\n.uk-scope .uk-svg,\n  .uk-scope .uk-svg:not(.uk-preserve) [fill*='#']:not(.uk-preserve),\n  .uk-scope .uk-svg:not(.uk-preserve) [FILL*='#']:not(.uk-preserve) {\n    fill: currentcolor;\n}\n.uk-scope .uk-svg:not(.uk-preserve) [stroke*='#']:not(.uk-preserve),\n  .uk-scope .uk-svg:not(.uk-preserve) [STROKE*='#']:not(.uk-preserve) {\n    stroke: currentcolor;\n}\n.uk-scope .uk-svg {\n    transform: translate(0, 0);\n}\n.uk-scope .uk-panel {\n    position: relative;\n    box-sizing: border-box;\n}\n.uk-scope .uk-panel::before,\n  .uk-scope .uk-panel::after {\n    content: \"\";\n    display: table;\n}\n.uk-scope .uk-panel::after {\n    clear: both;\n}\n.uk-scope .uk-panel > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-panel-scrollable {\n    height: 170px;\n    padding: 10px;\n    border: 1px solid #e5e5e5;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    resize: both;\n}\n.uk-scope .uk-clearfix::before {\n    content: \"\";\n    display: table-cell;\n}\n.uk-scope .uk-clearfix::after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.uk-scope .uk-float-left {\n    float: left;\n}\n.uk-scope .uk-float-right {\n    float: right;\n}\n.uk-scope [class*='uk-float-'] {\n    max-width: 100%;\n}\n.uk-scope .uk-overflow-hidden {\n    overflow: hidden;\n}\n.uk-scope .uk-overflow-auto {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.uk-scope .uk-overflow-auto > :last-child {\n    margin-bottom: 0;\n}\n.uk-scope .uk-resize {\n    resize: both;\n}\n.uk-scope .uk-resize-vertical {\n    resize: vertical;\n}\n.uk-scope .uk-display-block {\n    display: block !important;\n}\n.uk-scope .uk-display-inline {\n    display: inline !important;\n}\n.uk-scope .uk-display-inline-block {\n    display: inline-block !important;\n}\n.uk-scope [class*='uk-inline'] {\n    /* 1 */\n    display: inline-block;\n    /* 2 */\n    position: relative;\n    /* 3 */\n    max-width: 100%;\n    /* 4 */\n    vertical-align: middle;\n    /* 5 */\n    -webkit-backface-visibility: hidden;\n}\n.uk-scope .uk-inline-clip {\n    /* 6 */\n    overflow: hidden;\n}\n.uk-scope .uk-preserve-width,\n  .uk-scope .uk-preserve-width audio,\n  .uk-scope .uk-preserve-width canvas,\n  .uk-scope .uk-preserve-width img,\n  .uk-scope .uk-preserve-width svg,\n  .uk-scope .uk-preserve-width video {\n    max-width: none;\n}\n.uk-scope .uk-responsive-width,\n  .uk-scope .uk-responsive-height {\n    box-sizing: border-box;\n}\n.uk-scope .uk-responsive-width {\n    /* 1 */\n    max-width: 100% !important;\n    /* 2 */\n    height: auto;\n}\n.uk-scope .uk-responsive-height {\n    /* 1 */\n    max-height: 100%;\n    /* 2 */\n    width: auto;\n    /* 3 */\n    max-width: none;\n}\n.uk-scope .uk-border-circle {\n    border-radius: 50%;\n}\n.uk-scope .uk-border-rounded {\n    border-radius: 5px;\n}\n.uk-scope .uk-inline-clip[class*='uk-border-'] {\n    -webkit-transform: translateZ(0);\n}\n.uk-scope .uk-box-shadow-small {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-box-shadow-medium {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-box-shadow-large {\n    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n.uk-scope .uk-box-shadow-xlarge {\n    box-shadow: 0 28px 50px rgba(0, 0, 0, 0.16);\n}\n.uk-scope [class*='uk-box-shadow-hover'] {\n    transition: box-shadow 0.1s ease-in-out;\n}\n.uk-scope .uk-box-shadow-hover-small:hover {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-box-shadow-hover-medium:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n.uk-scope .uk-box-shadow-hover-large:hover {\n    box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);\n}\n.uk-scope .uk-box-shadow-hover-xlarge:hover {\n    box-shadow: 0 28px 50px rgba(0, 0, 0, 0.16);\n}\n@supports (filter: blur(0)) {\n.uk-scope {\n      /* 3 */\n}\n.uk-scope .uk-box-shadow-bottom {\n        display: inline-block;\n        position: relative;\n        max-width: 100%;\n        vertical-align: middle;\n}\n.uk-scope .uk-box-shadow-bottom::before {\n        content: '';\n        /* 1 */\n        position: absolute;\n        bottom: -30px;\n        left: 0;\n        right: 0;\n        /* 2 */\n        height: 30px;\n        border-radius: 100%;\n        background: #444;\n        filter: blur(20px);\n}\n.uk-scope .uk-box-shadow-bottom > * {\n        position: relative;\n}\n}\n.uk-scope .uk-dropcap::first-letter,\n  .uk-scope .uk-dropcap > p:first-of-type::first-letter {\n    display: block;\n    margin-right: 10px;\n    float: left;\n    font-size: 4.5em;\n    line-height: 1;\n    margin-bottom: -2px;\n}\n@-moz-document url-prefix() {\n.uk-scope .uk-dropcap::first-letter,\n  .uk-scope .uk-dropcap > p:first-of-type::first-letter {\n    margin-top: 1.1%;\n}\n}\n@supports (-ms-ime-align: auto) {\n.uk-scope .uk-dropcap > p:first-of-type::first-letter {\n      font-size: 1em;\n}\n}\n.uk-scope .uk-logo {\n    font-size: 1.5rem;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    color: #666;\n    /* 1 */\n    text-decoration: none;\n}\n.uk-scope .uk-logo:hover,\n  .uk-scope .uk-logo:focus {\n    color: #666;\n    outline: none;\n    /* 1 */\n    text-decoration: none;\n}\n.uk-scope .uk-logo-inverse {\n    display: none;\n}\n.uk-scope .uk-disabled {\n    pointer-events: none;\n}\n.uk-scope .uk-drag,\n  .uk-scope .uk-drag * {\n    cursor: move;\n}\n.uk-scope .uk-drag iframe {\n    pointer-events: none;\n}\n.uk-scope .uk-dragover {\n    box-shadow: 0 0 20px rgba(100, 100, 100, 0.3);\n}\n.uk-scope .uk-blend-multiply {\n    mix-blend-mode: multiply;\n}\n.uk-scope .uk-blend-screen {\n    mix-blend-mode: screen;\n}\n.uk-scope .uk-blend-overlay {\n    mix-blend-mode: overlay;\n}\n.uk-scope .uk-blend-darken {\n    mix-blend-mode: darken;\n}\n.uk-scope .uk-blend-lighten {\n    mix-blend-mode: lighten;\n}\n.uk-scope .uk-blend-color-dodge {\n    mix-blend-mode: color-dodge;\n}\n.uk-scope .uk-blend-color-burn {\n    mix-blend-mode: color-burn;\n}\n.uk-scope .uk-blend-hard-light {\n    mix-blend-mode: hard-light;\n}\n.uk-scope .uk-blend-soft-light {\n    mix-blend-mode: soft-light;\n}\n.uk-scope .uk-blend-difference {\n    mix-blend-mode: difference;\n}\n.uk-scope .uk-blend-exclusion {\n    mix-blend-mode: exclusion;\n}\n.uk-scope .uk-blend-hue {\n    mix-blend-mode: hue;\n}\n.uk-scope .uk-blend-saturation {\n    mix-blend-mode: saturation;\n}\n.uk-scope .uk-blend-color {\n    mix-blend-mode: color;\n}\n.uk-scope .uk-blend-luminosity {\n    mix-blend-mode: luminosity;\n}\n.uk-scope .uk-transform-center {\n    transform: translate(-50%, -50%);\n}\n.uk-scope .uk-transform-origin-top-left {\n    transform-origin: 0 0;\n}\n.uk-scope .uk-transform-origin-top-center {\n    transform-origin: 50% 0;\n}\n.uk-scope .uk-transform-origin-top-right {\n    transform-origin: 100% 0;\n}\n.uk-scope .uk-transform-origin-center-left {\n    transform-origin: 0 50%;\n}\n.uk-scope .uk-transform-origin-center-right {\n    transform-origin: 100% 50%;\n}\n.uk-scope .uk-transform-origin-bottom-left {\n    transform-origin: 0 100%;\n}\n.uk-scope .uk-transform-origin-bottom-center {\n    transform-origin: 50% 100%;\n}\n.uk-scope .uk-transform-origin-bottom-right {\n    transform-origin: 100% 100%;\n}\n.uk-scope .uk-flex {\n    display: flex;\n}\n.uk-scope .uk-flex-inline {\n    display: inline-flex;\n}\n.uk-scope .uk-flex::before,\n  .uk-scope .uk-flex::after,\n  .uk-scope .uk-flex-inline::before,\n  .uk-scope .uk-flex-inline::after {\n    display: none;\n}\n.uk-scope .uk-flex-left {\n    justify-content: flex-start;\n}\n.uk-scope .uk-flex-center {\n    justify-content: center;\n}\n.uk-scope .uk-flex-right {\n    justify-content: flex-end;\n}\n.uk-scope .uk-flex-between {\n    justify-content: space-between;\n}\n.uk-scope .uk-flex-around {\n    justify-content: space-around;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-flex-left\\@s {\n      justify-content: flex-start;\n}\n.uk-scope .uk-flex-center\\@s {\n      justify-content: center;\n}\n.uk-scope .uk-flex-right\\@s {\n      justify-content: flex-end;\n}\n.uk-scope .uk-flex-between\\@s {\n      justify-content: space-between;\n}\n.uk-scope .uk-flex-around\\@s {\n      justify-content: space-around;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-flex-left\\@m {\n      justify-content: flex-start;\n}\n.uk-scope .uk-flex-center\\@m {\n      justify-content: center;\n}\n.uk-scope .uk-flex-right\\@m {\n      justify-content: flex-end;\n}\n.uk-scope .uk-flex-between\\@m {\n      justify-content: space-between;\n}\n.uk-scope .uk-flex-around\\@m {\n      justify-content: space-around;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-flex-left\\@l {\n      justify-content: flex-start;\n}\n.uk-scope .uk-flex-center\\@l {\n      justify-content: center;\n}\n.uk-scope .uk-flex-right\\@l {\n      justify-content: flex-end;\n}\n.uk-scope .uk-flex-between\\@l {\n      justify-content: space-between;\n}\n.uk-scope .uk-flex-around\\@l {\n      justify-content: space-around;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-flex-left\\@xl {\n      justify-content: flex-start;\n}\n.uk-scope .uk-flex-center\\@xl {\n      justify-content: center;\n}\n.uk-scope .uk-flex-right\\@xl {\n      justify-content: flex-end;\n}\n.uk-scope .uk-flex-between\\@xl {\n      justify-content: space-between;\n}\n.uk-scope .uk-flex-around\\@xl {\n      justify-content: space-around;\n}\n}\n.uk-scope .uk-flex-stretch {\n    align-items: stretch;\n}\n.uk-scope .uk-flex-top {\n    align-items: flex-start;\n}\n.uk-scope .uk-flex-middle {\n    align-items: center;\n}\n.uk-scope .uk-flex-bottom {\n    align-items: flex-end;\n}\n.uk-scope .uk-flex-row {\n    flex-direction: row;\n}\n.uk-scope .uk-flex-row-reverse {\n    flex-direction: row-reverse;\n}\n.uk-scope .uk-flex-column {\n    flex-direction: column;\n}\n.uk-scope .uk-flex-column-reverse {\n    flex-direction: column-reverse;\n}\n.uk-scope .uk-flex-nowrap {\n    flex-wrap: nowrap;\n}\n.uk-scope .uk-flex-wrap {\n    flex-wrap: wrap;\n}\n.uk-scope .uk-flex-wrap-reverse {\n    flex-wrap: wrap-reverse;\n}\n.uk-scope .uk-flex-wrap-stretch {\n    align-content: stretch;\n}\n.uk-scope .uk-flex-wrap-top {\n    align-content: flex-start;\n}\n.uk-scope .uk-flex-wrap-middle {\n    align-content: center;\n}\n.uk-scope .uk-flex-wrap-bottom {\n    align-content: flex-end;\n}\n.uk-scope .uk-flex-wrap-between {\n    align-content: space-between;\n}\n.uk-scope .uk-flex-wrap-around {\n    align-content: space-around;\n}\n.uk-scope .uk-flex-first {\n    order: -1;\n}\n.uk-scope .uk-flex-last {\n    order: 99;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-flex-first\\@s {\n      order: -1;\n}\n.uk-scope .uk-flex-last\\@s {\n      order: 99;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-flex-first\\@m {\n      order: -1;\n}\n.uk-scope .uk-flex-last\\@m {\n      order: 99;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-flex-first\\@l {\n      order: -1;\n}\n.uk-scope .uk-flex-last\\@l {\n      order: 99;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-flex-first\\@xl {\n      order: -1;\n}\n.uk-scope .uk-flex-last\\@xl {\n      order: 99;\n}\n}\n.uk-scope .uk-flex-none {\n    flex: none;\n}\n.uk-scope .uk-flex-auto {\n    flex: auto;\n}\n.uk-scope .uk-flex-1 {\n    flex: 1;\n}\n.uk-scope .uk-margin {\n    margin-bottom: 20px;\n}\n.uk-scope * + .uk-margin {\n    margin-top: 20px !important;\n}\n.uk-scope .uk-margin-top {\n    margin-top: 20px !important;\n}\n.uk-scope .uk-margin-bottom {\n    margin-bottom: 20px !important;\n}\n.uk-scope .uk-margin-left {\n    margin-left: 20px !important;\n}\n.uk-scope .uk-margin-right {\n    margin-right: 20px !important;\n}\n.uk-scope .uk-margin-small {\n    margin-bottom: 10px;\n}\n.uk-scope * + .uk-margin-small {\n    margin-top: 10px !important;\n}\n.uk-scope .uk-margin-small-top {\n    margin-top: 10px !important;\n}\n.uk-scope .uk-margin-small-bottom {\n    margin-bottom: 10px !important;\n}\n.uk-scope .uk-margin-small-left {\n    margin-left: 10px !important;\n}\n.uk-scope .uk-margin-small-right {\n    margin-right: 10px !important;\n}\n.uk-scope .uk-margin-medium {\n    margin-bottom: 40px;\n}\n.uk-scope * + .uk-margin-medium {\n    margin-top: 40px !important;\n}\n.uk-scope .uk-margin-medium-top {\n    margin-top: 40px !important;\n}\n.uk-scope .uk-margin-medium-bottom {\n    margin-bottom: 40px !important;\n}\n.uk-scope .uk-margin-medium-left {\n    margin-left: 40px !important;\n}\n.uk-scope .uk-margin-medium-right {\n    margin-right: 40px !important;\n}\n.uk-scope .uk-margin-large {\n    margin-bottom: 40px;\n}\n.uk-scope * + .uk-margin-large {\n    margin-top: 40px !important;\n}\n.uk-scope .uk-margin-large-top {\n    margin-top: 40px !important;\n}\n.uk-scope .uk-margin-large-bottom {\n    margin-bottom: 40px !important;\n}\n.uk-scope .uk-margin-large-left {\n    margin-left: 40px !important;\n}\n.uk-scope .uk-margin-large-right {\n    margin-right: 40px !important;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-margin-large {\n      margin-bottom: 70px;\n}\n.uk-scope * + .uk-margin-large {\n      margin-top: 70px !important;\n}\n.uk-scope .uk-margin-large-top {\n      margin-top: 70px !important;\n}\n.uk-scope .uk-margin-large-bottom {\n      margin-bottom: 70px !important;\n}\n.uk-scope .uk-margin-large-left {\n      margin-left: 70px !important;\n}\n.uk-scope .uk-margin-large-right {\n      margin-right: 70px !important;\n}\n}\n.uk-scope .uk-margin-xlarge {\n    margin-bottom: 70px;\n}\n.uk-scope * + .uk-margin-xlarge {\n    margin-top: 70px !important;\n}\n.uk-scope .uk-margin-xlarge-top {\n    margin-top: 70px !important;\n}\n.uk-scope .uk-margin-xlarge-bottom {\n    margin-bottom: 70px !important;\n}\n.uk-scope .uk-margin-xlarge-left {\n    margin-left: 70px !important;\n}\n.uk-scope .uk-margin-xlarge-right {\n    margin-right: 70px !important;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-margin-xlarge {\n      margin-bottom: 140px;\n}\n.uk-scope * + .uk-margin-xlarge {\n      margin-top: 140px !important;\n}\n.uk-scope .uk-margin-xlarge-top {\n      margin-top: 140px !important;\n}\n.uk-scope .uk-margin-xlarge-bottom {\n      margin-bottom: 140px !important;\n}\n.uk-scope .uk-margin-xlarge-left {\n      margin-left: 140px !important;\n}\n.uk-scope .uk-margin-xlarge-right {\n      margin-right: 140px !important;\n}\n}\n.uk-scope .uk-margin-remove {\n    margin: 0 !important;\n}\n.uk-scope .uk-margin-remove-top {\n    margin-top: 0 !important;\n}\n.uk-scope .uk-margin-remove-bottom {\n    margin-bottom: 0 !important;\n}\n.uk-scope .uk-margin-remove-left {\n    margin-left: 0 !important;\n}\n.uk-scope .uk-margin-remove-right {\n    margin-right: 0 !important;\n}\n.uk-scope .uk-margin-remove-vertical {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n}\n.uk-scope .uk-margin-remove-adjacent + * {\n    margin-top: 0 !important;\n}\n.uk-scope .uk-margin-auto {\n    margin-left: auto !important;\n    margin-right: auto !important;\n}\n.uk-scope .uk-margin-auto-top {\n    margin-top: auto !important;\n}\n.uk-scope .uk-margin-auto-bottom {\n    margin-bottom: auto !important;\n}\n.uk-scope .uk-margin-auto-left {\n    margin-left: auto !important;\n}\n.uk-scope .uk-margin-auto-right {\n    margin-right: auto !important;\n}\n.uk-scope .uk-margin-auto-vertical {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n}\n.uk-scope .uk-padding {\n    padding: 30px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-padding {\n      padding: 40px;\n}\n}\n.uk-scope .uk-padding-small {\n    padding: 15px;\n}\n.uk-scope .uk-padding-large {\n    padding: 30px;\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-padding-large {\n      padding: 70px;\n}\n}\n.uk-scope .uk-padding-remove {\n    padding: 0 !important;\n}\n.uk-scope .uk-padding-remove-top {\n    padding-top: 0 !important;\n}\n.uk-scope .uk-padding-remove-bottom {\n    padding-bottom: 0 !important;\n}\n.uk-scope .uk-padding-remove-left {\n    padding-left: 0 !important;\n}\n.uk-scope .uk-padding-remove-right {\n    padding-right: 0 !important;\n}\n.uk-scope .uk-padding-remove-vertical {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n}\n.uk-scope .uk-padding-remove-horizontal {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n}\n.uk-scope [class*='uk-position-top'],\n  .uk-scope [class*='uk-position-bottom'],\n  .uk-scope [class*='uk-position-left'],\n  .uk-scope [class*='uk-position-right'],\n  .uk-scope [class*='uk-position-center'] {\n    position: absolute !important;\n}\n.uk-scope .uk-position-top {\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.uk-scope .uk-position-bottom {\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.uk-scope .uk-position-left {\n    top: 0;\n    bottom: 0;\n    left: 0;\n}\n.uk-scope .uk-position-right {\n    top: 0;\n    bottom: 0;\n    right: 0;\n}\n.uk-scope .uk-position-top-left {\n    top: 0;\n    left: 0;\n}\n.uk-scope .uk-position-top-right {\n    top: 0;\n    right: 0;\n}\n.uk-scope .uk-position-bottom-left {\n    bottom: 0;\n    left: 0;\n}\n.uk-scope .uk-position-bottom-right {\n    bottom: 0;\n    right: 0;\n}\n.uk-scope .uk-position-center {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    /* 1 */\n    display: table;\n    /* 2 */\n    width: -moz-max-content;\n    max-width: 100%;\n    box-sizing: border-box;\n}\n.uk-scope [class*='uk-position-center-left'],\n  .uk-scope [class*='uk-position-center-right'] {\n    top: 50%;\n    transform: translateY(-50%);\n}\n.uk-scope .uk-position-center-left {\n    left: 0;\n}\n.uk-scope .uk-position-center-right {\n    right: 0;\n}\n.uk-scope .uk-position-center-left-out {\n    right: 100%;\n    width: max-content;\n}\n.uk-scope .uk-position-center-right-out {\n    left: 100%;\n    width: max-content;\n}\n.uk-scope .uk-position-top-center,\n  .uk-scope .uk-position-bottom-center {\n    left: 50%;\n    transform: translateX(-50%);\n    /* 1 */\n    display: table;\n    /* 2 */\n    width: -moz-max-content;\n    max-width: 100%;\n    box-sizing: border-box;\n}\n.uk-scope .uk-position-top-center {\n    top: 0;\n}\n.uk-scope .uk-position-bottom-center {\n    bottom: 0;\n}\n.uk-scope .uk-position-cover {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.uk-scope .uk-position-relative {\n    position: relative !important;\n}\n.uk-scope .uk-position-absolute {\n    position: absolute !important;\n}\n.uk-scope .uk-position-fixed {\n    position: fixed !important;\n}\n.uk-scope .uk-position-z-index {\n    z-index: 1;\n}\n.uk-scope .uk-position-small {\n    margin: 15px;\n}\n.uk-scope .uk-position-small.uk-position-center {\n    transform: translate(-50%, -50%) translate(-15px, -15px);\n}\n.uk-scope .uk-position-small[class*='uk-position-center-left'],\n  .uk-scope .uk-position-small[class*='uk-position-center-right'] {\n    transform: translateY(-50%) translateY(-15px);\n}\n.uk-scope .uk-position-small.uk-position-top-center,\n  .uk-scope .uk-position-small.uk-position-bottom-center {\n    transform: translateX(-50%) translateX(-15px);\n}\n.uk-scope .uk-position-medium {\n    margin: 30px;\n}\n.uk-scope .uk-position-medium.uk-position-center {\n    transform: translate(-50%, -50%) translate(-30px, -30px);\n}\n.uk-scope .uk-position-medium[class*='uk-position-center-left'],\n  .uk-scope .uk-position-medium[class*='uk-position-center-right'] {\n    transform: translateY(-50%) translateY(-30px);\n}\n.uk-scope .uk-position-medium.uk-position-top-center,\n  .uk-scope .uk-position-medium.uk-position-bottom-center {\n    transform: translateX(-50%) translateX(-30px);\n}\n.uk-scope .uk-position-large {\n    margin: 30px;\n}\n.uk-scope .uk-position-large.uk-position-center {\n    transform: translate(-50%, -50%) translate(-30px, -30px);\n}\n.uk-scope .uk-position-large[class*='uk-position-center-left'],\n  .uk-scope .uk-position-large[class*='uk-position-center-right'] {\n    transform: translateY(-50%) translateY(-30px);\n}\n.uk-scope .uk-position-large.uk-position-top-center,\n  .uk-scope .uk-position-large.uk-position-bottom-center {\n    transform: translateX(-50%) translateX(-30px);\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-position-large {\n      margin: 50px;\n}\n.uk-scope .uk-position-large.uk-position-center {\n      transform: translate(-50%, -50%) translate(-50px, -50px);\n}\n.uk-scope .uk-position-large[class*='uk-position-center-left'],\n    .uk-scope .uk-position-large[class*='uk-position-center-right'] {\n      transform: translateY(-50%) translateY(-50px);\n}\n.uk-scope .uk-position-large.uk-position-top-center,\n    .uk-scope .uk-position-large.uk-position-bottom-center {\n      transform: translateX(-50%) translateX(-50px);\n}\n}\n.uk-scope .uk-transition-fade,\n  .uk-scope [class*='uk-transition-scale'],\n  .uk-scope [class*='uk-transition-slide'] {\n    transition: 0.3s ease-out;\n    transition-property: opacity, transform, filter;\n}\n.uk-scope .uk-transition-toggle:focus {\n    outline: none;\n}\n.uk-scope .uk-transition-fade {\n    opacity: 0;\n}\n.uk-scope .uk-transition-toggle:hover [class*='uk-transition-fade'],\n  .uk-scope .uk-transition-toggle.uk-hover [class*='uk-transition-fade'],\n  .uk-scope .uk-transition-toggle:focus [class*='uk-transition-fade'],\n  .uk-scope .uk-transition-active.uk-active [class*='uk-transition-fade'] {\n    opacity: 1;\n}\n.uk-scope [class*='uk-transition-scale'] {\n    opacity: 0;\n}\n.uk-scope .uk-transition-scale-up {\n    transform: scale3d(1, 1, 1);\n}\n.uk-scope .uk-transition-scale-down {\n    transform: scale3d(1.1, 1.1, 1);\n}\n.uk-scope .uk-transition-toggle:hover .uk-transition-scale-up,\n  .uk-scope .uk-transition-toggle.uk-hover .uk-transition-scale-up,\n  .uk-scope .uk-transition-toggle:focus .uk-transition-scale-up,\n  .uk-scope .uk-transition-active.uk-active .uk-transition-scale-up {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1);\n}\n.uk-scope .uk-transition-toggle:hover .uk-transition-scale-down,\n  .uk-scope .uk-transition-toggle.uk-hover .uk-transition-scale-down,\n  .uk-scope .uk-transition-toggle:focus .uk-transition-scale-down,\n  .uk-scope .uk-transition-active.uk-active .uk-transition-scale-down {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n}\n.uk-scope [class*='uk-transition-slide'] {\n    opacity: 0;\n}\n.uk-scope .uk-transition-slide-top {\n    transform: translateY(-100%);\n}\n.uk-scope .uk-transition-slide-bottom {\n    transform: translateY(100%);\n}\n.uk-scope .uk-transition-slide-left {\n    transform: translateX(-100%);\n}\n.uk-scope .uk-transition-slide-right {\n    transform: translateX(100%);\n}\n.uk-scope .uk-transition-slide-top-small {\n    transform: translateY(-10px);\n}\n.uk-scope .uk-transition-slide-bottom-small {\n    transform: translateY(10px);\n}\n.uk-scope .uk-transition-slide-left-small {\n    transform: translateX(-10px);\n}\n.uk-scope .uk-transition-slide-right-small {\n    transform: translateX(10px);\n}\n.uk-scope .uk-transition-slide-top-medium {\n    transform: translateY(-50px);\n}\n.uk-scope .uk-transition-slide-bottom-medium {\n    transform: translateY(50px);\n}\n.uk-scope .uk-transition-slide-left-medium {\n    transform: translateX(-50px);\n}\n.uk-scope .uk-transition-slide-right-medium {\n    transform: translateX(50px);\n}\n.uk-scope .uk-transition-toggle:hover [class*='uk-transition-slide'],\n  .uk-scope .uk-transition-toggle.uk-hover [class*='uk-transition-slide'],\n  .uk-scope .uk-transition-toggle:focus [class*='uk-transition-slide'],\n  .uk-scope .uk-transition-active.uk-active [class*='uk-transition-slide'] {\n    opacity: 1;\n    transform: translateX(0) translateY(0);\n}\n.uk-scope .uk-transition-opaque {\n    opacity: 1;\n}\n.uk-scope .uk-transition-slow {\n    transition-duration: 0.7s;\n}\n.uk-scope [hidden],\n  .uk-scope .uk-hidden {\n    display: none !important;\n}\n@media (min-width: 640px) {\n.uk-scope .uk-hidden\\@s {\n      display: none !important;\n}\n}\n@media (min-width: 960px) {\n.uk-scope .uk-hidden\\@m {\n      display: none !important;\n}\n}\n@media (min-width: 1200px) {\n.uk-scope .uk-hidden\\@l {\n      display: none !important;\n}\n}\n@media (min-width: 1600px) {\n.uk-scope .uk-hidden\\@xl {\n      display: none !important;\n}\n}\n@media (max-width: 639px) {\n.uk-scope .uk-visible\\@s {\n      display: none !important;\n}\n}\n@media (max-width: 959px) {\n.uk-scope .uk-visible\\@m {\n      display: none !important;\n}\n}\n@media (max-width: 1199px) {\n.uk-scope .uk-visible\\@l {\n      display: none !important;\n}\n}\n@media (max-width: 1599px) {\n.uk-scope .uk-visible\\@xl {\n      display: none !important;\n}\n}\n.uk-scope .uk-invisible {\n    visibility: hidden !important;\n}\n.uk-scope .uk-visible-toggle:not(:hover):not(.uk-hover) .uk-hidden-hover:not(:focus) {\n    position: absolute !important;\n    width: 0 !important;\n    height: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n}\n.uk-scope .uk-visible-toggle:not(:hover):not(.uk-hover) .uk-invisible-hover:not(:focus) {\n    opacity: 0 !important;\n}\n@media (pointer: coarse) {\n.uk-scope .uk-hidden-touch {\n      display: none !important;\n}\n}\n.uk-scope .uk-hidden-notouch {\n    display: none !important;\n}\n@media (pointer: coarse) {\n.uk-scope .uk-hidden-notouch {\n      display: block !important;\n}\n}\n.uk-scope .uk-light,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color),\n  .uk-scope .uk-card-primary.uk-card-body,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']),\n  .uk-scope .uk-card-secondary.uk-card-body,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']),\n  .uk-scope .uk-overlay-primary,\n  .uk-scope .uk-offcanvas-bar {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light a,\n  .uk-scope .uk-light .uk-link,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-link,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-link,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-link,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-link,\n  .uk-scope .uk-card-primary.uk-card-body a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-link,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-link,\n  .uk-scope .uk-card-secondary.uk-card-body a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-link,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-link,\n  .uk-scope .uk-overlay-primary a,\n  .uk-scope .uk-overlay-primary .uk-link,\n  .uk-scope .uk-offcanvas-bar a,\n  .uk-scope .uk-offcanvas-bar .uk-link {\n    color: #fff;\n}\n.uk-scope .uk-light a:hover,\n  .uk-scope .uk-light .uk-link:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-link:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-link:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-link:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-link:hover,\n  .uk-scope .uk-card-primary.uk-card-body a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-link:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-link:hover,\n  .uk-scope .uk-card-secondary.uk-card-body a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-link:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-link:hover,\n  .uk-scope .uk-overlay-primary a:hover,\n  .uk-scope .uk-overlay-primary .uk-link:hover,\n  .uk-scope .uk-offcanvas-bar a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-link:hover {\n    color: #fff;\n}\n.uk-scope .uk-light :not(pre) > code,\n  .uk-scope .uk-light :not(pre) > kbd,\n  .uk-scope .uk-light :not(pre) > samp,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) :not(pre) > code,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) :not(pre) > kbd,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) :not(pre) > samp,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) :not(pre) > code,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) :not(pre) > kbd,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) :not(pre) > samp,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) :not(pre) > code,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) :not(pre) > kbd,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) :not(pre) > samp,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) :not(pre) > code,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) :not(pre) > kbd,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) :not(pre) > samp,\n  .uk-scope .uk-card-primary.uk-card-body :not(pre) > code,\n  .uk-scope .uk-card-primary.uk-card-body :not(pre) > kbd,\n  .uk-scope .uk-card-primary.uk-card-body :not(pre) > samp,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) :not(pre) > code,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) :not(pre) > kbd,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) :not(pre) > samp,\n  .uk-scope .uk-card-secondary.uk-card-body :not(pre) > code,\n  .uk-scope .uk-card-secondary.uk-card-body :not(pre) > kbd,\n  .uk-scope .uk-card-secondary.uk-card-body :not(pre) > samp,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) :not(pre) > code,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) :not(pre) > kbd,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) :not(pre) > samp,\n  .uk-scope .uk-overlay-primary :not(pre) > code,\n  .uk-scope .uk-overlay-primary :not(pre) > kbd,\n  .uk-scope .uk-overlay-primary :not(pre) > samp,\n  .uk-scope .uk-offcanvas-bar :not(pre) > code,\n  .uk-scope .uk-offcanvas-bar :not(pre) > kbd,\n  .uk-scope .uk-offcanvas-bar :not(pre) > samp {\n    color: rgba(255, 255, 255, 0.7);\n    background: rgba(255, 255, 255, 0.1);\n}\n.uk-scope .uk-light em,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) em,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) em,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) em,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) em,\n  .uk-scope .uk-card-primary.uk-card-body em,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) em,\n  .uk-scope .uk-card-secondary.uk-card-body em,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) em,\n  .uk-scope .uk-overlay-primary em,\n  .uk-scope .uk-offcanvas-bar em {\n    color: #fff;\n}\n.uk-scope .uk-light h1,\n  .uk-scope .uk-light .uk-h1,\n  .uk-scope .uk-light h2,\n  .uk-scope .uk-light .uk-h2,\n  .uk-scope .uk-light h3,\n  .uk-scope .uk-light .uk-h3,\n  .uk-scope .uk-light h4,\n  .uk-scope .uk-light .uk-h4,\n  .uk-scope .uk-light h5,\n  .uk-scope .uk-light .uk-h5,\n  .uk-scope .uk-light h6,\n  .uk-scope .uk-light .uk-h6,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) h1,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-h1,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) h2,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-h2,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) h3,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-h3,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) h4,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-h4,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) h5,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-h5,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) h6,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-h6,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) h1,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-h1,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) h2,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-h2,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) h3,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-h3,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) h4,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-h4,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) h5,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-h5,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) h6,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-h6,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) h1,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-h1,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) h2,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-h2,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) h3,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-h3,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) h4,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-h4,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) h5,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-h5,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) h6,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-h6,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) h1,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-h1,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) h2,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-h2,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) h3,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-h3,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) h4,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-h4,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) h5,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-h5,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) h6,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-h6,\n  .uk-scope .uk-card-primary.uk-card-body h1,\n  .uk-scope .uk-card-primary.uk-card-body .uk-h1,\n  .uk-scope .uk-card-primary.uk-card-body h2,\n  .uk-scope .uk-card-primary.uk-card-body .uk-h2,\n  .uk-scope .uk-card-primary.uk-card-body h3,\n  .uk-scope .uk-card-primary.uk-card-body .uk-h3,\n  .uk-scope .uk-card-primary.uk-card-body h4,\n  .uk-scope .uk-card-primary.uk-card-body .uk-h4,\n  .uk-scope .uk-card-primary.uk-card-body h5,\n  .uk-scope .uk-card-primary.uk-card-body .uk-h5,\n  .uk-scope .uk-card-primary.uk-card-body h6,\n  .uk-scope .uk-card-primary.uk-card-body .uk-h6,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) h1,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-h1,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) h2,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-h2,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) h3,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-h3,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) h4,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-h4,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) h5,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-h5,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) h6,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-h6,\n  .uk-scope .uk-card-secondary.uk-card-body h1,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-h1,\n  .uk-scope .uk-card-secondary.uk-card-body h2,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-h2,\n  .uk-scope .uk-card-secondary.uk-card-body h3,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-h3,\n  .uk-scope .uk-card-secondary.uk-card-body h4,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-h4,\n  .uk-scope .uk-card-secondary.uk-card-body h5,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-h5,\n  .uk-scope .uk-card-secondary.uk-card-body h6,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-h6,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) h1,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-h1,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) h2,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-h2,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) h3,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-h3,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) h4,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-h4,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) h5,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-h5,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) h6,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-h6,\n  .uk-scope .uk-overlay-primary h1,\n  .uk-scope .uk-overlay-primary .uk-h1,\n  .uk-scope .uk-overlay-primary h2,\n  .uk-scope .uk-overlay-primary .uk-h2,\n  .uk-scope .uk-overlay-primary h3,\n  .uk-scope .uk-overlay-primary .uk-h3,\n  .uk-scope .uk-overlay-primary h4,\n  .uk-scope .uk-overlay-primary .uk-h4,\n  .uk-scope .uk-overlay-primary h5,\n  .uk-scope .uk-overlay-primary .uk-h5,\n  .uk-scope .uk-overlay-primary h6,\n  .uk-scope .uk-overlay-primary .uk-h6,\n  .uk-scope .uk-offcanvas-bar h1,\n  .uk-scope .uk-offcanvas-bar .uk-h1,\n  .uk-scope .uk-offcanvas-bar h2,\n  .uk-scope .uk-offcanvas-bar .uk-h2,\n  .uk-scope .uk-offcanvas-bar h3,\n  .uk-scope .uk-offcanvas-bar .uk-h3,\n  .uk-scope .uk-offcanvas-bar h4,\n  .uk-scope .uk-offcanvas-bar .uk-h4,\n  .uk-scope .uk-offcanvas-bar h5,\n  .uk-scope .uk-offcanvas-bar .uk-h5,\n  .uk-scope .uk-offcanvas-bar h6,\n  .uk-scope .uk-offcanvas-bar .uk-h6 {\n    color: #fff;\n}\n.uk-scope .uk-light blockquote,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) blockquote,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) blockquote,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) blockquote,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) blockquote,\n  .uk-scope .uk-card-primary.uk-card-body blockquote,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) blockquote,\n  .uk-scope .uk-card-secondary.uk-card-body blockquote,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) blockquote,\n  .uk-scope .uk-overlay-primary blockquote,\n  .uk-scope .uk-offcanvas-bar blockquote {\n    color: #fff;\n}\n.uk-scope .uk-light blockquote footer,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) blockquote footer,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) blockquote footer,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) blockquote footer,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) blockquote footer,\n  .uk-scope .uk-card-primary.uk-card-body blockquote footer,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) blockquote footer,\n  .uk-scope .uk-card-secondary.uk-card-body blockquote footer,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) blockquote footer,\n  .uk-scope .uk-overlay-primary blockquote footer,\n  .uk-scope .uk-offcanvas-bar blockquote footer {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light hr,\n  .uk-scope .uk-light .uk-hr,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) hr,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-hr,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) hr,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-hr,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) hr,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-hr,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) hr,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-hr,\n  .uk-scope .uk-card-primary.uk-card-body hr,\n  .uk-scope .uk-card-primary.uk-card-body .uk-hr,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) hr,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-hr,\n  .uk-scope .uk-card-secondary.uk-card-body hr,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-hr,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) hr,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-hr,\n  .uk-scope .uk-overlay-primary hr,\n  .uk-scope .uk-overlay-primary .uk-hr,\n  .uk-scope .uk-offcanvas-bar hr,\n  .uk-scope .uk-offcanvas-bar .uk-hr {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light a.uk-link-muted,\n  .uk-scope .uk-light .uk-link-muted a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) a.uk-link-muted,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-link-muted a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) a.uk-link-muted,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) a.uk-link-muted,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) a.uk-link-muted,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a,\n  .uk-scope .uk-card-primary.uk-card-body a.uk-link-muted,\n  .uk-scope .uk-card-primary.uk-card-body .uk-link-muted a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) a.uk-link-muted,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-link-muted a,\n  .uk-scope .uk-card-secondary.uk-card-body a.uk-link-muted,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-link-muted a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) a.uk-link-muted,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-link-muted a,\n  .uk-scope .uk-overlay-primary a.uk-link-muted,\n  .uk-scope .uk-overlay-primary .uk-link-muted a,\n  .uk-scope .uk-offcanvas-bar a.uk-link-muted,\n  .uk-scope .uk-offcanvas-bar .uk-link-muted a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light a.uk-link-muted:hover,\n  .uk-scope .uk-light .uk-link-muted a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) a.uk-link-muted:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-link-muted a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) a.uk-link-muted:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) a.uk-link-muted:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-link-muted a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) a.uk-link-muted:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-link-muted a:hover,\n  .uk-scope .uk-card-primary.uk-card-body a.uk-link-muted:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-link-muted a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) a.uk-link-muted:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-link-muted a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body a.uk-link-muted:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-link-muted a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) a.uk-link-muted:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-link-muted a:hover,\n  .uk-scope .uk-overlay-primary a.uk-link-muted:hover,\n  .uk-scope .uk-overlay-primary .uk-link-muted a:hover,\n  .uk-scope .uk-offcanvas-bar a.uk-link-muted:hover,\n  .uk-scope .uk-offcanvas-bar .uk-link-muted a:hover {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light a.uk-link-text:hover,\n  .uk-scope .uk-light .uk-link-text a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) a.uk-link-text:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-link-text a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) a.uk-link-text:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-link-text a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) a.uk-link-text:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-link-text a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) a.uk-link-text:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-link-text a:hover,\n  .uk-scope .uk-card-primary.uk-card-body a.uk-link-text:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-link-text a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) a.uk-link-text:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-link-text a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body a.uk-link-text:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-link-text a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) a.uk-link-text:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-link-text a:hover,\n  .uk-scope .uk-overlay-primary a.uk-link-text:hover,\n  .uk-scope .uk-overlay-primary .uk-link-text a:hover,\n  .uk-scope .uk-offcanvas-bar a.uk-link-text:hover,\n  .uk-scope .uk-offcanvas-bar .uk-link-text a:hover {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light a.uk-link-heading:hover,\n  .uk-scope .uk-light .uk-link-heading a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) a.uk-link-heading:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-link-heading a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) a.uk-link-heading:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-link-heading a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) a.uk-link-heading:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-link-heading a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) a.uk-link-heading:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-link-heading a:hover,\n  .uk-scope .uk-card-primary.uk-card-body a.uk-link-heading:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-link-heading a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) a.uk-link-heading:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-link-heading a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body a.uk-link-heading:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-link-heading a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) a.uk-link-heading:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-link-heading a:hover,\n  .uk-scope .uk-overlay-primary a.uk-link-heading:hover,\n  .uk-scope .uk-overlay-primary .uk-link-heading a:hover,\n  .uk-scope .uk-offcanvas-bar a.uk-link-heading:hover,\n  .uk-scope .uk-offcanvas-bar .uk-link-heading a:hover {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-heading-divider,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-heading-divider,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-heading-divider,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-heading-divider,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-divider,\n  .uk-scope .uk-card-primary.uk-card-body .uk-heading-divider,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-heading-divider,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-heading-divider,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-heading-divider,\n  .uk-scope .uk-overlay-primary .uk-heading-divider,\n  .uk-scope .uk-offcanvas-bar .uk-heading-divider {\n    border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-heading-bullet::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-heading-bullet::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-heading-bullet::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-heading-bullet::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-bullet::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-heading-bullet::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-heading-bullet::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-heading-bullet::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-heading-bullet::before,\n  .uk-scope .uk-overlay-primary .uk-heading-bullet::before,\n  .uk-scope .uk-offcanvas-bar .uk-heading-bullet::before {\n    border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-heading-line > ::before,\n  .uk-scope .uk-light .uk-heading-line > ::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-heading-line > ::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-heading-line > ::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-heading-line > ::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-heading-line > ::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-heading-line > ::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-heading-line > ::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line > ::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-line > ::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-heading-line > ::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-heading-line > ::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-heading-line > ::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-heading-line > ::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-heading-line > ::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-heading-line > ::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-heading-line > ::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-heading-line > ::after,\n  .uk-scope .uk-overlay-primary .uk-heading-line > ::before,\n  .uk-scope .uk-overlay-primary .uk-heading-line > ::after,\n  .uk-scope .uk-offcanvas-bar .uk-heading-line > ::before,\n  .uk-scope .uk-offcanvas-bar .uk-heading-line > ::after {\n    border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-divider-icon,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-divider-icon,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon,\n  .uk-scope .uk-card-primary.uk-card-body .uk-divider-icon,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-divider-icon,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-divider-icon,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-divider-icon,\n  .uk-scope .uk-overlay-primary .uk-divider-icon,\n  .uk-scope .uk-offcanvas-bar .uk-divider-icon {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.2%29%22%20stroke-width%3D%222%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%227%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-scope .uk-light .uk-divider-icon::before,\n  .uk-scope .uk-light .uk-divider-icon::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-divider-icon::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-divider-icon::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-divider-icon::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-icon::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-divider-icon::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-divider-icon::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-divider-icon::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-divider-icon::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-divider-icon::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-divider-icon::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-divider-icon::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-divider-icon::after,\n  .uk-scope .uk-overlay-primary .uk-divider-icon::before,\n  .uk-scope .uk-overlay-primary .uk-divider-icon::after,\n  .uk-scope .uk-offcanvas-bar .uk-divider-icon::before,\n  .uk-scope .uk-offcanvas-bar .uk-divider-icon::after {\n    border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-divider-small::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-divider-small::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-divider-small::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-divider-small::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-divider-small::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-divider-small::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-divider-small::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-divider-small::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-divider-small::after,\n  .uk-scope .uk-overlay-primary .uk-divider-small::after,\n  .uk-scope .uk-offcanvas-bar .uk-divider-small::after {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-card-primary.uk-card-body .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-overlay-primary .uk-list-divider > li:nth-child(n+2),\n  .uk-scope .uk-offcanvas-bar .uk-list-divider > li:nth-child(n+2) {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-primary.uk-card-body .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-overlay-primary .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-offcanvas-bar .uk-list-striped > li:nth-of-type(odd) {\n    border-top-color: rgba(255, 255, 255, 0.2);\n    border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-primary.uk-card-body .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-overlay-primary .uk-list-striped > li:nth-of-type(odd),\n  .uk-scope .uk-offcanvas-bar .uk-list-striped > li:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.uk-scope .uk-light .uk-list-bullet > li::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-list-bullet > li::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-list-bullet > li::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-list-bullet > li::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-list-bullet > li::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-list-bullet > li::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-list-bullet > li::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-list-bullet > li::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-list-bullet > li::before,\n  .uk-scope .uk-overlay-primary .uk-list-bullet > li::before,\n  .uk-scope .uk-offcanvas-bar .uk-list-bullet > li::before {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-light .uk-table th,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table th,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table th,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table th,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table th,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table th,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table th,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table th,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table th,\n  .uk-scope .uk-overlay-primary .uk-table th,\n  .uk-scope .uk-offcanvas-bar .uk-table th {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-table caption,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table caption,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table caption,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table caption,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table caption,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table caption,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table caption,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table caption,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table caption,\n  .uk-scope .uk-overlay-primary .uk-table caption,\n  .uk-scope .uk-offcanvas-bar .uk-table caption {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-table > tr.uk-active,\n  .uk-scope .uk-light .uk-table tbody tr.uk-active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table > tr.uk-active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table > tr.uk-active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table > tr.uk-active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table > tr.uk-active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table tbody tr.uk-active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table > tr.uk-active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table tbody tr.uk-active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table > tr.uk-active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table tbody tr.uk-active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table > tr.uk-active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table tbody tr.uk-active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table > tr.uk-active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table tbody tr.uk-active,\n  .uk-scope .uk-overlay-primary .uk-table > tr.uk-active,\n  .uk-scope .uk-overlay-primary .uk-table tbody tr.uk-active,\n  .uk-scope .uk-offcanvas-bar .uk-table > tr.uk-active,\n  .uk-scope .uk-offcanvas-bar .uk-table tbody tr.uk-active {\n    background: rgba(255, 255, 255, 0.08);\n}\n.uk-scope .uk-light .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-light .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-light .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-overlay-primary .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-overlay-primary .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-overlay-primary .uk-table-divider > :first-child > tr:not(:first-child),\n  .uk-scope .uk-offcanvas-bar .uk-table-divider > tr:not(:first-child),\n  .uk-scope .uk-offcanvas-bar .uk-table-divider > :not(:first-child) > tr,\n  .uk-scope .uk-offcanvas-bar .uk-table-divider > :first-child > tr:not(:first-child) {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-light .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-overlay-primary .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-overlay-primary .uk-table-striped tbody tr:nth-of-type(odd),\n  .uk-scope .uk-offcanvas-bar .uk-table-striped > tr:nth-of-type(odd),\n  .uk-scope .uk-offcanvas-bar .uk-table-striped tbody tr:nth-of-type(odd) {\n    background: rgba(255, 255, 255, 0.1);\n    border-top-color: rgba(255, 255, 255, 0.2);\n    border-bottom-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-table-hover > tr:hover,\n  .uk-scope .uk-light .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-hover > tr:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-hover > tr:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-hover > tr:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-hover > tr:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-hover > tr:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-hover > tr:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-hover > tr:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-hover > tr:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-overlay-primary .uk-table-hover > tr:hover,\n  .uk-scope .uk-overlay-primary .uk-table-hover tbody tr:hover,\n  .uk-scope .uk-offcanvas-bar .uk-table-hover > tr:hover,\n  .uk-scope .uk-offcanvas-bar .uk-table-hover tbody tr:hover {\n    background: rgba(255, 255, 255, 0.08);\n}\n.uk-scope .uk-light .uk-icon-link,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-link,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-link,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-link,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-link,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-link,\n  .uk-scope .uk-overlay-primary .uk-icon-link,\n  .uk-scope .uk-offcanvas-bar .uk-icon-link {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-icon-link:hover,\n  .uk-scope .uk-light .uk-icon-link:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-link:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-link:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-link:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-link:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-link:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-link:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-link:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-link:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-link:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-link:focus,\n  .uk-scope .uk-overlay-primary .uk-icon-link:hover,\n  .uk-scope .uk-overlay-primary .uk-icon-link:focus,\n  .uk-scope .uk-offcanvas-bar .uk-icon-link:hover,\n  .uk-scope .uk-offcanvas-bar .uk-icon-link:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-icon-link:active,\n  .uk-scope .uk-light .uk-active > .uk-icon-link,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-link:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-link:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-link:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-link:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-active > .uk-icon-link,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-link:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-active > .uk-icon-link,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-link:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-active > .uk-icon-link,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-link:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-active > .uk-icon-link,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-link:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-active > .uk-icon-link,\n  .uk-scope .uk-overlay-primary .uk-icon-link:active,\n  .uk-scope .uk-overlay-primary .uk-active > .uk-icon-link,\n  .uk-scope .uk-offcanvas-bar .uk-icon-link:active,\n  .uk-scope .uk-offcanvas-bar .uk-active > .uk-icon-link {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-icon-button,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-button,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-button,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-button,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-button,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-button,\n  .uk-scope .uk-overlay-primary .uk-icon-button,\n  .uk-scope .uk-offcanvas-bar .uk-icon-button {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-icon-button:hover,\n  .uk-scope .uk-light .uk-icon-button:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-button:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-button:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-button:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-button:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-button:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-button:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-button:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-button:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-button:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-button:focus,\n  .uk-scope .uk-overlay-primary .uk-icon-button:hover,\n  .uk-scope .uk-overlay-primary .uk-icon-button:focus,\n  .uk-scope .uk-offcanvas-bar .uk-icon-button:hover,\n  .uk-scope .uk-offcanvas-bar .uk-icon-button:focus {\n    background-color: rgba(242, 242, 242, 0.1);\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-icon-button:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-icon-button:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-icon-button:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-icon-button:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-icon-button:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-icon-button:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-icon-button:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-icon-button:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-icon-button:active,\n  .uk-scope .uk-overlay-primary .uk-icon-button:active,\n  .uk-scope .uk-offcanvas-bar .uk-icon-button:active {\n    background-color: rgba(230, 230, 230, 0.1);\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-input,\n  .uk-scope .uk-light .uk-select,\n  .uk-scope .uk-light .uk-textarea,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-input,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-select,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-textarea,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-input,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-select,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-textarea,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-input,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-select,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-textarea,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-input,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-select,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea,\n  .uk-scope .uk-card-primary.uk-card-body .uk-input,\n  .uk-scope .uk-card-primary.uk-card-body .uk-select,\n  .uk-scope .uk-card-primary.uk-card-body .uk-textarea,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-input,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-select,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-textarea,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-input,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-select,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-textarea,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-input,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-select,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-textarea,\n  .uk-scope .uk-overlay-primary .uk-input,\n  .uk-scope .uk-overlay-primary .uk-select,\n  .uk-scope .uk-overlay-primary .uk-textarea,\n  .uk-scope .uk-offcanvas-bar .uk-input,\n  .uk-scope .uk-offcanvas-bar .uk-select,\n  .uk-scope .uk-offcanvas-bar .uk-textarea {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.7);\n    background-clip: padding-box;\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-input:focus,\n  .uk-scope .uk-light .uk-select:focus,\n  .uk-scope .uk-light .uk-textarea:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-input:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-select:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-textarea:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-input:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-select:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-textarea:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-input:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-select:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-textarea:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-input:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-select:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-input:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-select:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-textarea:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-input:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-select:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-textarea:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-input:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-select:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-textarea:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-input:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-select:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-textarea:focus,\n  .uk-scope .uk-overlay-primary .uk-input:focus,\n  .uk-scope .uk-overlay-primary .uk-select:focus,\n  .uk-scope .uk-overlay-primary .uk-textarea:focus,\n  .uk-scope .uk-offcanvas-bar .uk-input:focus,\n  .uk-scope .uk-offcanvas-bar .uk-select:focus,\n  .uk-scope .uk-offcanvas-bar .uk-textarea:focus {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-card-primary.uk-card-body .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-overlay-primary .uk-input:-ms-input-placeholder,\n  .uk-scope .uk-offcanvas-bar .uk-input:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-scope .uk-light .uk-input::placeholder,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-input::placeholder,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-input::placeholder,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-input::placeholder,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-input::placeholder,\n  .uk-scope .uk-card-primary.uk-card-body .uk-input::placeholder,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-input::placeholder,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-input::placeholder,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-input::placeholder,\n  .uk-scope .uk-overlay-primary .uk-input::placeholder,\n  .uk-scope .uk-offcanvas-bar .uk-input::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-card-primary.uk-card-body .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-overlay-primary .uk-textarea:-ms-input-placeholder,\n  .uk-scope .uk-offcanvas-bar .uk-textarea:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-scope .uk-light .uk-textarea::placeholder,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-textarea::placeholder,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-textarea::placeholder,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-textarea::placeholder,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-textarea::placeholder,\n  .uk-scope .uk-card-primary.uk-card-body .uk-textarea::placeholder,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-textarea::placeholder,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-textarea::placeholder,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-textarea::placeholder,\n  .uk-scope .uk-overlay-primary .uk-textarea::placeholder,\n  .uk-scope .uk-offcanvas-bar .uk-textarea::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-card-primary.uk-card-body .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-overlay-primary .uk-select:not([multiple]):not([size]),\n  .uk-scope .uk-offcanvas-bar .uk-select:not([multiple]):not([size]) {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-scope .uk-light .uk-radio,\n  .uk-scope .uk-light .uk-checkbox,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-radio,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-radio,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-radio,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-radio,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox,\n  .uk-scope .uk-card-primary.uk-card-body .uk-radio,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-radio,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-radio,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-radio,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox,\n  .uk-scope .uk-overlay-primary .uk-radio,\n  .uk-scope .uk-overlay-primary .uk-checkbox,\n  .uk-scope .uk-offcanvas-bar .uk-radio,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox {\n    background-color: rgba(242, 242, 242, 0.1);\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-radio:focus,\n  .uk-scope .uk-light .uk-checkbox:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-radio:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-radio:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-radio:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-radio:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-radio:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-radio:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-radio:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:focus,\n  .uk-scope .uk-overlay-primary .uk-radio:focus,\n  .uk-scope .uk-overlay-primary .uk-checkbox:focus,\n  .uk-scope .uk-offcanvas-bar .uk-radio:focus,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:focus {\n    border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-radio:checked,\n  .uk-scope .uk-light .uk-checkbox:checked,\n  .uk-scope .uk-light .uk-checkbox:indeterminate,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-primary.uk-card-body .uk-radio:checked,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:checked,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-radio:checked,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:checked,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-radio:checked,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:checked,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-radio:checked,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:checked,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:indeterminate,\n  .uk-scope .uk-overlay-primary .uk-radio:checked,\n  .uk-scope .uk-overlay-primary .uk-checkbox:checked,\n  .uk-scope .uk-overlay-primary .uk-checkbox:indeterminate,\n  .uk-scope .uk-offcanvas-bar .uk-radio:checked,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:checked,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:indeterminate {\n    background-color: #fff;\n    border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-radio:checked:focus,\n  .uk-scope .uk-light .uk-checkbox:checked:focus,\n  .uk-scope .uk-light .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-radio:checked:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-radio:checked:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:checked:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-radio:checked:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:checked:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-radio:checked:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:checked:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-radio:checked:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:checked:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-overlay-primary .uk-radio:checked:focus,\n  .uk-scope .uk-overlay-primary .uk-checkbox:checked:focus,\n  .uk-scope .uk-overlay-primary .uk-checkbox:indeterminate:focus,\n  .uk-scope .uk-offcanvas-bar .uk-radio:checked:focus,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:checked:focus,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:indeterminate:focus {\n    background-color: #e6e6e6;\n}\n.uk-scope .uk-light .uk-radio:checked,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-radio:checked,\n  .uk-scope .uk-card-primary.uk-card-body .uk-radio:checked,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-radio:checked,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-radio:checked,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-radio:checked,\n  .uk-scope .uk-overlay-primary .uk-radio:checked,\n  .uk-scope .uk-offcanvas-bar .uk-radio:checked {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23666%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%222%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-light .uk-checkbox:checked,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:checked,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:checked,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:checked,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:checked,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:checked,\n  .uk-scope .uk-overlay-primary .uk-checkbox:checked,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:checked {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A\");\n}\n.uk-scope .uk-light .uk-checkbox:indeterminate,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-primary.uk-card-body .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-checkbox:indeterminate,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-checkbox:indeterminate,\n  .uk-scope .uk-overlay-primary .uk-checkbox:indeterminate,\n  .uk-scope .uk-offcanvas-bar .uk-checkbox:indeterminate {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23666%22%20x%3D%223%22%20y%3D%228%22%20width%3D%2210%22%20height%3D%221%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-light .uk-form-label,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-form-label,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-form-label,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-form-label,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-form-label,\n  .uk-scope .uk-card-primary.uk-card-body .uk-form-label,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-form-label,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-form-label,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-form-label,\n  .uk-scope .uk-overlay-primary .uk-form-label,\n  .uk-scope .uk-offcanvas-bar .uk-form-label {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-form-icon,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-form-icon,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-form-icon,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-form-icon,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-form-icon,\n  .uk-scope .uk-card-primary.uk-card-body .uk-form-icon,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-form-icon,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-form-icon,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-form-icon,\n  .uk-scope .uk-overlay-primary .uk-form-icon,\n  .uk-scope .uk-offcanvas-bar .uk-form-icon {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-form-icon:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-form-icon:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-form-icon:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-form-icon:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-form-icon:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-form-icon:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-form-icon:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-form-icon:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-form-icon:hover,\n  .uk-scope .uk-overlay-primary .uk-form-icon:hover,\n  .uk-scope .uk-offcanvas-bar .uk-form-icon:hover {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-button-default,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-default,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-default,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-default,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-default,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-default,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-default,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-default,\n  .uk-scope .uk-overlay-primary .uk-button-default,\n  .uk-scope .uk-offcanvas-bar .uk-button-default {\n    background-color: transparent;\n    color: #fff;\n    border-color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-button-default:hover,\n  .uk-scope .uk-light .uk-button-default:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-default:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-default:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-default:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-default:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-default:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-default:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-default:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-default:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-default:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-default:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-default:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-default:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-default:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-default:focus,\n  .uk-scope .uk-overlay-primary .uk-button-default:hover,\n  .uk-scope .uk-overlay-primary .uk-button-default:focus,\n  .uk-scope .uk-offcanvas-bar .uk-button-default:hover,\n  .uk-scope .uk-offcanvas-bar .uk-button-default:focus {\n    background-color: transparent;\n    color: #fff;\n    border-color: #fff;\n}\n.uk-scope .uk-light .uk-button-default:active,\n  .uk-scope .uk-light .uk-button-default.uk-active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-default:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-default.uk-active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-default:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-default:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-default.uk-active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-default.uk-active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-default:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-default.uk-active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-default:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-default.uk-active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-default:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-default.uk-active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-default:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-default.uk-active,\n  .uk-scope .uk-overlay-primary .uk-button-default:active,\n  .uk-scope .uk-overlay-primary .uk-button-default.uk-active,\n  .uk-scope .uk-offcanvas-bar .uk-button-default:active,\n  .uk-scope .uk-offcanvas-bar .uk-button-default.uk-active {\n    background-color: transparent;\n    color: #fff;\n    border-color: #fff;\n}\n.uk-scope .uk-light .uk-button-primary,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-primary,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-primary,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-primary,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-primary,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-primary,\n  .uk-scope .uk-overlay-primary .uk-button-primary,\n  .uk-scope .uk-offcanvas-bar .uk-button-primary {\n    background-color: #fff;\n    color: #666;\n}\n.uk-scope .uk-light .uk-button-primary:hover,\n  .uk-scope .uk-light .uk-button-primary:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-primary:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-primary:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-primary:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-primary:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-primary:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-primary:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-primary:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-primary:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-primary:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-primary:focus,\n  .uk-scope .uk-overlay-primary .uk-button-primary:hover,\n  .uk-scope .uk-overlay-primary .uk-button-primary:focus,\n  .uk-scope .uk-offcanvas-bar .uk-button-primary:hover,\n  .uk-scope .uk-offcanvas-bar .uk-button-primary:focus {\n    background-color: #f2f2f2;\n    color: #666;\n}\n.uk-scope .uk-light .uk-button-primary:active,\n  .uk-scope .uk-light .uk-button-primary.uk-active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-primary:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-primary.uk-active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-primary:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-primary.uk-active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-primary:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-primary.uk-active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-primary:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-primary.uk-active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-primary:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-primary.uk-active,\n  .uk-scope .uk-overlay-primary .uk-button-primary:active,\n  .uk-scope .uk-overlay-primary .uk-button-primary.uk-active,\n  .uk-scope .uk-offcanvas-bar .uk-button-primary:active,\n  .uk-scope .uk-offcanvas-bar .uk-button-primary.uk-active {\n    background-color: #e6e6e6;\n    color: #666;\n}\n.uk-scope .uk-light .uk-button-secondary,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-secondary,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-secondary,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-secondary,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-secondary,\n  .uk-scope .uk-overlay-primary .uk-button-secondary,\n  .uk-scope .uk-offcanvas-bar .uk-button-secondary {\n    background-color: #fff;\n    color: #666;\n}\n.uk-scope .uk-light .uk-button-secondary:hover,\n  .uk-scope .uk-light .uk-button-secondary:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-secondary:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-secondary:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-secondary:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-secondary:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-secondary:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-secondary:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-secondary:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-secondary:focus,\n  .uk-scope .uk-overlay-primary .uk-button-secondary:hover,\n  .uk-scope .uk-overlay-primary .uk-button-secondary:focus,\n  .uk-scope .uk-offcanvas-bar .uk-button-secondary:hover,\n  .uk-scope .uk-offcanvas-bar .uk-button-secondary:focus {\n    background-color: #f2f2f2;\n    color: #666;\n}\n.uk-scope .uk-light .uk-button-secondary:active,\n  .uk-scope .uk-light .uk-button-secondary.uk-active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-secondary.uk-active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-secondary:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-secondary.uk-active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-secondary:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-secondary.uk-active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-secondary:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-secondary.uk-active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-secondary:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-secondary.uk-active,\n  .uk-scope .uk-overlay-primary .uk-button-secondary:active,\n  .uk-scope .uk-overlay-primary .uk-button-secondary.uk-active,\n  .uk-scope .uk-offcanvas-bar .uk-button-secondary:active,\n  .uk-scope .uk-offcanvas-bar .uk-button-secondary.uk-active {\n    background-color: #e6e6e6;\n    color: #666;\n}\n.uk-scope .uk-light .uk-button-text,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-text,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-text,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-text,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-text,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-text,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-text,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-text,\n  .uk-scope .uk-overlay-primary .uk-button-text,\n  .uk-scope .uk-offcanvas-bar .uk-button-text {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-button-text::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-text::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-text::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-text::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-text::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-text::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-text::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-text::before,\n  .uk-scope .uk-overlay-primary .uk-button-text::before,\n  .uk-scope .uk-offcanvas-bar .uk-button-text::before {\n    border-bottom-color: #fff;\n}\n.uk-scope .uk-light .uk-button-text:hover,\n  .uk-scope .uk-light .uk-button-text:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-text:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-text:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-text:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-text:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-text:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-text:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-text:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-text:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-text:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-text:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-text:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-text:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-text:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-text:focus,\n  .uk-scope .uk-overlay-primary .uk-button-text:hover,\n  .uk-scope .uk-overlay-primary .uk-button-text:focus,\n  .uk-scope .uk-offcanvas-bar .uk-button-text:hover,\n  .uk-scope .uk-offcanvas-bar .uk-button-text:focus {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-button-text:disabled,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-text:disabled,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-text:disabled,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-text:disabled,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-text:disabled,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-text:disabled,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-text:disabled,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-text:disabled,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-text:disabled,\n  .uk-scope .uk-overlay-primary .uk-button-text:disabled,\n  .uk-scope .uk-offcanvas-bar .uk-button-text:disabled {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-button-link,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-link,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-link,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-link,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-link,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-link,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-link,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-link,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-link,\n  .uk-scope .uk-overlay-primary .uk-button-link,\n  .uk-scope .uk-offcanvas-bar .uk-button-link {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-button-link:hover,\n  .uk-scope .uk-light .uk-button-link:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-link:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-button-link:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-link:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-button-link:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-link:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-button-link:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-link:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-button-link:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-link:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-button-link:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-link:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-button-link:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-link:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-button-link:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-link:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-button-link:focus,\n  .uk-scope .uk-overlay-primary .uk-button-link:hover,\n  .uk-scope .uk-overlay-primary .uk-button-link:focus,\n  .uk-scope .uk-offcanvas-bar .uk-button-link:hover,\n  .uk-scope .uk-offcanvas-bar .uk-button-link:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-overlay-primary .uk-grid-divider > :not(.uk-first-column)::before,\n  .uk-scope .uk-offcanvas-bar .uk-grid-divider > :not(.uk-first-column)::before {\n    border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-overlay-primary .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before,\n  .uk-scope .uk-offcanvas-bar .uk-grid-divider.uk-grid-stack > .uk-grid-margin::before {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-close,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-close,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-close,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-close,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-close,\n  .uk-scope .uk-card-primary.uk-card-body .uk-close,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-close,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-close,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-close,\n  .uk-scope .uk-overlay-primary .uk-close,\n  .uk-scope .uk-offcanvas-bar .uk-close {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-close:hover,\n  .uk-scope .uk-light .uk-close:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-close:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-close:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-close:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-close:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-close:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-close:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-close:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-close:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-close:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-close:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-close:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-close:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-close:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-close:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-close:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-close:focus,\n  .uk-scope .uk-overlay-primary .uk-close:hover,\n  .uk-scope .uk-overlay-primary .uk-close:focus,\n  .uk-scope .uk-offcanvas-bar .uk-close:hover,\n  .uk-scope .uk-offcanvas-bar .uk-close:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-totop,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-totop,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-totop,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-totop,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-totop,\n  .uk-scope .uk-card-primary.uk-card-body .uk-totop,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-totop,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-totop,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-totop,\n  .uk-scope .uk-overlay-primary .uk-totop,\n  .uk-scope .uk-offcanvas-bar .uk-totop {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-totop:hover,\n  .uk-scope .uk-light .uk-totop:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-totop:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-totop:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-totop:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-totop:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-totop:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-totop:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-totop:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-totop:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-totop:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-totop:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-totop:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-totop:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-totop:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-totop:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-totop:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-totop:focus,\n  .uk-scope .uk-overlay-primary .uk-totop:hover,\n  .uk-scope .uk-overlay-primary .uk-totop:focus,\n  .uk-scope .uk-offcanvas-bar .uk-totop:hover,\n  .uk-scope .uk-offcanvas-bar .uk-totop:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-totop:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-totop:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-totop:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-totop:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-totop:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-totop:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-totop:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-totop:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-totop:active,\n  .uk-scope .uk-overlay-primary .uk-totop:active,\n  .uk-scope .uk-offcanvas-bar .uk-totop:active {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-marker,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-marker,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-marker,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-marker,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-marker,\n  .uk-scope .uk-card-primary.uk-card-body .uk-marker,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-marker,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-marker,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-marker,\n  .uk-scope .uk-overlay-primary .uk-marker,\n  .uk-scope .uk-offcanvas-bar .uk-marker {\n    background: #f8f8f8;\n    color: #666;\n}\n.uk-scope .uk-light .uk-marker:hover,\n  .uk-scope .uk-light .uk-marker:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-marker:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-marker:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-marker:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-marker:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-marker:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-marker:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-marker:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-marker:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-marker:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-marker:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-marker:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-marker:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-marker:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-marker:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-marker:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-marker:focus,\n  .uk-scope .uk-overlay-primary .uk-marker:hover,\n  .uk-scope .uk-overlay-primary .uk-marker:focus,\n  .uk-scope .uk-offcanvas-bar .uk-marker:hover,\n  .uk-scope .uk-offcanvas-bar .uk-marker:focus {\n    color: #666;\n}\n.uk-scope .uk-light .uk-badge,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-badge,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-badge,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-badge,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-badge,\n  .uk-scope .uk-card-primary.uk-card-body .uk-badge,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-badge,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-badge,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-badge,\n  .uk-scope .uk-overlay-primary .uk-badge,\n  .uk-scope .uk-offcanvas-bar .uk-badge {\n    background-color: #fff;\n    color: #666;\n}\n.uk-scope .uk-light .uk-badge:hover,\n  .uk-scope .uk-light .uk-badge:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-badge:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-badge:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-badge:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-badge:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-badge:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-badge:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-badge:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-badge:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-badge:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-badge:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-badge:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-badge:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-badge:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-badge:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-badge:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-badge:focus,\n  .uk-scope .uk-overlay-primary .uk-badge:hover,\n  .uk-scope .uk-overlay-primary .uk-badge:focus,\n  .uk-scope .uk-offcanvas-bar .uk-badge:hover,\n  .uk-scope .uk-offcanvas-bar .uk-badge:focus {\n    color: #666;\n}\n.uk-scope .uk-light .uk-label,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-label,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-label,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-label,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-label,\n  .uk-scope .uk-card-primary.uk-card-body .uk-label,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-label,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-label,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-label,\n  .uk-scope .uk-overlay-primary .uk-label,\n  .uk-scope .uk-offcanvas-bar .uk-label {\n    background-color: #fff;\n    color: #666;\n}\n.uk-scope .uk-light .uk-article-meta,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-article-meta,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-article-meta,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-article-meta,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-article-meta,\n  .uk-scope .uk-card-primary.uk-card-body .uk-article-meta,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-article-meta,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-article-meta,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-article-meta,\n  .uk-scope .uk-overlay-primary .uk-article-meta,\n  .uk-scope .uk-offcanvas-bar .uk-article-meta {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-search-input,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-input,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-input,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-input,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-input,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-input,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-input,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-input,\n  .uk-scope .uk-overlay-primary .uk-search-input,\n  .uk-scope .uk-offcanvas-bar .uk-search-input {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-overlay-primary .uk-search-input:-ms-input-placeholder,\n  .uk-scope .uk-offcanvas-bar .uk-search-input:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-scope .uk-light .uk-search-input::placeholder,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-input::placeholder,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-input::placeholder,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-input::placeholder,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-input::placeholder,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-input::placeholder,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-input::placeholder,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-input::placeholder,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-input::placeholder,\n  .uk-scope .uk-overlay-primary .uk-search-input::placeholder,\n  .uk-scope .uk-offcanvas-bar .uk-search-input::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-search .uk-search-icon,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search .uk-search-icon,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search .uk-search-icon,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search .uk-search-icon,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search .uk-search-icon,\n  .uk-scope .uk-overlay-primary .uk-search .uk-search-icon,\n  .uk-scope .uk-offcanvas-bar .uk-search .uk-search-icon {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-overlay-primary .uk-search .uk-search-icon:hover,\n  .uk-scope .uk-offcanvas-bar .uk-search .uk-search-icon:hover {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-search-default .uk-search-input,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-default .uk-search-input,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-default .uk-search-input,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-default .uk-search-input,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-default .uk-search-input,\n  .uk-scope .uk-overlay-primary .uk-search-default .uk-search-input,\n  .uk-scope .uk-offcanvas-bar .uk-search-default .uk-search-input {\n    background-color: transparent;\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-overlay-primary .uk-search-default .uk-search-input:focus,\n  .uk-scope .uk-offcanvas-bar .uk-search-default .uk-search-input:focus {\n    background-color: transparent;\n}\n.uk-scope .uk-light .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-overlay-primary .uk-search-navbar .uk-search-input,\n  .uk-scope .uk-offcanvas-bar .uk-search-navbar .uk-search-input {\n    background-color: transparent;\n}\n.uk-scope .uk-light .uk-search-large .uk-search-input,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-large .uk-search-input,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-large .uk-search-input,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-large .uk-search-input,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-large .uk-search-input,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-large .uk-search-input,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-large .uk-search-input,\n  .uk-scope .uk-overlay-primary .uk-search-large .uk-search-input,\n  .uk-scope .uk-offcanvas-bar .uk-search-large .uk-search-input {\n    background-color: transparent;\n}\n.uk-scope .uk-light .uk-search-toggle,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-toggle,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-toggle,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-toggle,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-toggle,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-toggle,\n  .uk-scope .uk-overlay-primary .uk-search-toggle,\n  .uk-scope .uk-offcanvas-bar .uk-search-toggle {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-search-toggle:hover,\n  .uk-scope .uk-light .uk-search-toggle:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-search-toggle:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-search-toggle:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-search-toggle:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-toggle:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-search-toggle:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-toggle:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-search-toggle:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-toggle:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-search-toggle:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-toggle:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-search-toggle:focus,\n  .uk-scope .uk-overlay-primary .uk-search-toggle:hover,\n  .uk-scope .uk-overlay-primary .uk-search-toggle:focus,\n  .uk-scope .uk-offcanvas-bar .uk-search-toggle:hover,\n  .uk-scope .uk-offcanvas-bar .uk-search-toggle:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-overlay-primary .uk-nav-parent-icon > .uk-parent > a::after,\n  .uk-scope .uk-offcanvas-bar .uk-nav-parent-icon > .uk-parent > a::after {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20stroke-width%3D%221.1%22%20points%3D%2210%201%204%207%2010%2013%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-light .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-overlay-primary .uk-nav-parent-icon > .uk-parent.uk-open > a::after,\n  .uk-scope .uk-offcanvas-bar .uk-nav-parent-icon > .uk-parent.uk-open > a::after {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20stroke-width%3D%221.1%22%20points%3D%221%204%207%2010%2013%204%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-light .uk-nav-default > li > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default > li > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default > li > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default > li > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default > li > a,\n  .uk-scope .uk-overlay-primary .uk-nav-default > li > a,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default > li > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-nav-default > li > a:hover,\n  .uk-scope .uk-light .uk-nav-default > li > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li > a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li > a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default > li > a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default > li > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default > li > a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default > li > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default > li > a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default > li > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default > li > a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default > li > a:focus,\n  .uk-scope .uk-overlay-primary .uk-nav-default > li > a:hover,\n  .uk-scope .uk-overlay-primary .uk-nav-default > li > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default > li > a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default > li > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-nav-default > li.uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default > li.uk-active > a {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-overlay-primary .uk-nav-default .uk-nav-header,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default .uk-nav-header {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-overlay-primary .uk-nav-default .uk-nav-divider,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default .uk-nav-divider {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-overlay-primary .uk-nav-default .uk-nav-sub a,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default .uk-nav-sub a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-light .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-overlay-primary .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-overlay-primary .uk-nav-default .uk-nav-sub a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-nav-default .uk-nav-sub a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-nav-primary > li > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary > li > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary > li > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary > li > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary > li > a,\n  .uk-scope .uk-overlay-primary .uk-nav-primary > li > a,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary > li > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-light .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-overlay-primary .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-overlay-primary .uk-nav-primary > li > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary > li > a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary > li > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-nav-primary > li.uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary > li.uk-active > a {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-overlay-primary .uk-nav-primary .uk-nav-header,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary .uk-nav-header {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-overlay-primary .uk-nav-primary .uk-nav-divider,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary .uk-nav-divider {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-overlay-primary .uk-nav-primary .uk-nav-sub a,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-light .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-overlay-primary .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-overlay-primary .uk-nav-primary .uk-nav-sub a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-nav-primary .uk-nav-sub a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-navbar-nav > li > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-nav > li > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-nav > li > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a,\n  .uk-scope .uk-overlay-primary .uk-navbar-nav > li > a,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-nav > li > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-light .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-light .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-overlay-primary .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-overlay-primary .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-overlay-primary .uk-navbar-nav > li > a.uk-open,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-nav > li:hover > a,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-nav > li > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-nav > li > a.uk-open {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-overlay-primary .uk-navbar-nav > li > a:active,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-nav > li > a:active {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-navbar-nav > li.uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-nav > li.uk-active > a {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-navbar-item,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-item,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-item,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-item,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-item,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-item,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-item,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-item,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-item,\n  .uk-scope .uk-overlay-primary .uk-navbar-item,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-item {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-navbar-toggle,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-toggle,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-toggle,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-toggle,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-toggle,\n  .uk-scope .uk-overlay-primary .uk-navbar-toggle,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-toggle {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-navbar-toggle:hover,\n  .uk-scope .uk-light .uk-navbar-toggle:focus,\n  .uk-scope .uk-light .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-toggle:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-toggle:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-toggle:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-toggle:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-toggle:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-toggle:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-toggle:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-toggle:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-overlay-primary .uk-navbar-toggle:hover,\n  .uk-scope .uk-overlay-primary .uk-navbar-toggle:focus,\n  .uk-scope .uk-overlay-primary .uk-navbar-toggle.uk-open,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-toggle:hover,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-toggle:focus,\n  .uk-scope .uk-offcanvas-bar .uk-navbar-toggle.uk-open {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-subnav > * > :first-child,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav > * > :first-child,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > * > :first-child,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > * > :first-child,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > * > :first-child,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav > * > :first-child,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav > * > :first-child,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav > * > :first-child,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav > * > :first-child,\n  .uk-scope .uk-overlay-primary .uk-subnav > * > :first-child,\n  .uk-scope .uk-offcanvas-bar .uk-subnav > * > :first-child {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-subnav > * > a:hover,\n  .uk-scope .uk-light .uk-subnav > * > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav > * > a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > * > a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > * > a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > * > a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > * > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav > * > a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav > * > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav > * > a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav > * > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav > * > a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav > * > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav > * > a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav > * > a:focus,\n  .uk-scope .uk-overlay-primary .uk-subnav > * > a:hover,\n  .uk-scope .uk-overlay-primary .uk-subnav > * > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-subnav > * > a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-subnav > * > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-subnav > .uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav > .uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > .uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > .uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > .uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav > .uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav > .uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav > .uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav > .uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-subnav > .uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-subnav > .uk-active > a {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-overlay-primary .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-offcanvas-bar .uk-subnav-divider > :nth-child(n+2):not(.uk-first-column)::before {\n    border-left-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-overlay-primary .uk-subnav-pill > * > :first-child,\n  .uk-scope .uk-offcanvas-bar .uk-subnav-pill > * > :first-child {\n    background-color: transparent;\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-light .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-overlay-primary .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-overlay-primary .uk-subnav-pill > * > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-subnav-pill > * > a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-subnav-pill > * > a:focus {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-overlay-primary .uk-subnav-pill > * > a:active,\n  .uk-scope .uk-offcanvas-bar .uk-subnav-pill > * > a:active {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-subnav-pill > .uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-subnav-pill > .uk-active > a {\n    background-color: #fff;\n    color: #666;\n}\n.uk-scope .uk-light .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-overlay-primary .uk-subnav > .uk-disabled > a,\n  .uk-scope .uk-offcanvas-bar .uk-subnav > .uk-disabled > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-breadcrumb > * > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > * > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > * > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-breadcrumb > * > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-breadcrumb > * > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-breadcrumb > * > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-breadcrumb > * > *,\n  .uk-scope .uk-overlay-primary .uk-breadcrumb > * > *,\n  .uk-scope .uk-offcanvas-bar .uk-breadcrumb > * > * {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-light .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-overlay-primary .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-overlay-primary .uk-breadcrumb > * > :focus,\n  .uk-scope .uk-offcanvas-bar .uk-breadcrumb > * > :hover,\n  .uk-scope .uk-offcanvas-bar .uk-breadcrumb > * > :focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-overlay-primary .uk-breadcrumb > :last-child > *,\n  .uk-scope .uk-offcanvas-bar .uk-breadcrumb > :last-child > * {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-overlay-primary .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before,\n  .uk-scope .uk-offcanvas-bar .uk-breadcrumb > :nth-child(n+2):not(.uk-first-column)::before {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-pagination > * > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-pagination > * > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > * > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > * > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > * > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-pagination > * > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-pagination > * > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-pagination > * > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-pagination > * > *,\n  .uk-scope .uk-overlay-primary .uk-pagination > * > *,\n  .uk-scope .uk-offcanvas-bar .uk-pagination > * > * {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-pagination > * > :hover,\n  .uk-scope .uk-light .uk-pagination > * > :focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-pagination > * > :hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > * > :hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > * > :hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > * > :hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > * > :focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-pagination > * > :hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-pagination > * > :focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-pagination > * > :hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-pagination > * > :focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-pagination > * > :hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-pagination > * > :focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-pagination > * > :hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-pagination > * > :focus,\n  .uk-scope .uk-overlay-primary .uk-pagination > * > :hover,\n  .uk-scope .uk-overlay-primary .uk-pagination > * > :focus,\n  .uk-scope .uk-offcanvas-bar .uk-pagination > * > :hover,\n  .uk-scope .uk-offcanvas-bar .uk-pagination > * > :focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-pagination > .uk-active > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-pagination > .uk-active > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > .uk-active > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > .uk-active > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > .uk-active > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-pagination > .uk-active > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-pagination > .uk-active > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-pagination > .uk-active > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-pagination > .uk-active > *,\n  .uk-scope .uk-overlay-primary .uk-pagination > .uk-active > *,\n  .uk-scope .uk-offcanvas-bar .uk-pagination > .uk-active > * {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-overlay-primary .uk-pagination > .uk-disabled > *,\n  .uk-scope .uk-offcanvas-bar .uk-pagination > .uk-disabled > * {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-tab::before,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-tab::before,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-tab::before,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-tab::before,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-tab::before,\n  .uk-scope .uk-card-primary.uk-card-body .uk-tab::before,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-tab::before,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-tab::before,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-tab::before,\n  .uk-scope .uk-overlay-primary .uk-tab::before,\n  .uk-scope .uk-offcanvas-bar .uk-tab::before {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-tab > * > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-tab > * > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-tab > * > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-tab > * > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > * > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-tab > * > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-tab > * > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-tab > * > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-tab > * > a,\n  .uk-scope .uk-overlay-primary .uk-tab > * > a,\n  .uk-scope .uk-offcanvas-bar .uk-tab > * > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-tab > * > a:hover,\n  .uk-scope .uk-light .uk-tab > * > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-tab > * > a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-tab > * > a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-tab > * > a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > * > a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > * > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-tab > * > a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-tab > * > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-tab > * > a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-tab > * > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-tab > * > a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-tab > * > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-tab > * > a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-tab > * > a:focus,\n  .uk-scope .uk-overlay-primary .uk-tab > * > a:hover,\n  .uk-scope .uk-overlay-primary .uk-tab > * > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-tab > * > a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-tab > * > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-tab > .uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-tab > .uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-tab > .uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-tab > .uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > .uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-tab > .uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-tab > .uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-tab > .uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-tab > .uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-tab > .uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-tab > .uk-active > a {\n    color: #fff;\n    border-color: #fff;\n}\n.uk-scope .uk-light .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-overlay-primary .uk-tab > .uk-disabled > a,\n  .uk-scope .uk-offcanvas-bar .uk-tab > .uk-disabled > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-slidenav,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-slidenav,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav,\n  .uk-scope .uk-card-primary.uk-card-body .uk-slidenav,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-slidenav,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-slidenav,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-slidenav,\n  .uk-scope .uk-overlay-primary .uk-slidenav,\n  .uk-scope .uk-offcanvas-bar .uk-slidenav {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-slidenav:hover,\n  .uk-scope .uk-light .uk-slidenav:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-slidenav:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-slidenav:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-slidenav:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-slidenav:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-slidenav:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-slidenav:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-slidenav:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-slidenav:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-slidenav:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-slidenav:focus,\n  .uk-scope .uk-overlay-primary .uk-slidenav:hover,\n  .uk-scope .uk-overlay-primary .uk-slidenav:focus,\n  .uk-scope .uk-offcanvas-bar .uk-slidenav:hover,\n  .uk-scope .uk-offcanvas-bar .uk-slidenav:focus {\n    color: rgba(255, 255, 255, 0.95);\n}\n.uk-scope .uk-light .uk-slidenav:active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-slidenav:active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-slidenav:active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-slidenav:active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-slidenav:active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-slidenav:active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-slidenav:active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-slidenav:active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-slidenav:active,\n  .uk-scope .uk-overlay-primary .uk-slidenav:active,\n  .uk-scope .uk-offcanvas-bar .uk-slidenav:active {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-dotnav > * > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-dotnav > * > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-dotnav > * > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-dotnav > * > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-dotnav > * > *,\n  .uk-scope .uk-overlay-primary .uk-dotnav > * > *,\n  .uk-scope .uk-offcanvas-bar .uk-dotnav > * > * {\n    background-color: transparent;\n    border-color: rgba(255, 255, 255, 0.9);\n}\n.uk-scope .uk-light .uk-dotnav > * > :hover,\n  .uk-scope .uk-light .uk-dotnav > * > :focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > :hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > :hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > :hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > :hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > :focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-dotnav > * > :hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-dotnav > * > :focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-dotnav > * > :hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-dotnav > * > :focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-dotnav > * > :hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-dotnav > * > :focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-dotnav > * > :hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-dotnav > * > :focus,\n  .uk-scope .uk-overlay-primary .uk-dotnav > * > :hover,\n  .uk-scope .uk-overlay-primary .uk-dotnav > * > :focus,\n  .uk-scope .uk-offcanvas-bar .uk-dotnav > * > :hover,\n  .uk-scope .uk-offcanvas-bar .uk-dotnav > * > :focus {\n    background-color: rgba(255, 255, 255, 0.9);\n    border-color: transparent;\n}\n.uk-scope .uk-light .uk-dotnav > * > :active,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > * > :active,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > * > :active,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > * > :active,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > * > :active,\n  .uk-scope .uk-card-primary.uk-card-body .uk-dotnav > * > :active,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-dotnav > * > :active,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-dotnav > * > :active,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-dotnav > * > :active,\n  .uk-scope .uk-overlay-primary .uk-dotnav > * > :active,\n  .uk-scope .uk-offcanvas-bar .uk-dotnav > * > :active {\n    background-color: rgba(255, 255, 255, 0.5);\n    border-color: transparent;\n}\n.uk-scope .uk-light .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-card-primary.uk-card-body .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-overlay-primary .uk-dotnav > .uk-active > *,\n  .uk-scope .uk-offcanvas-bar .uk-dotnav > .uk-active > * {\n    background-color: rgba(255, 255, 255, 0.9);\n    border-color: transparent;\n}\n.uk-scope .uk-light .uk-accordion-title,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-accordion-title,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title,\n  .uk-scope .uk-card-primary.uk-card-body .uk-accordion-title,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-accordion-title,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-accordion-title,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-accordion-title,\n  .uk-scope .uk-overlay-primary .uk-accordion-title,\n  .uk-scope .uk-offcanvas-bar .uk-accordion-title {\n    color: #fff;\n}\n.uk-scope .uk-light .uk-accordion-title:hover,\n  .uk-scope .uk-light .uk-accordion-title:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-accordion-title:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-accordion-title:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-accordion-title:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-accordion-title:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-accordion-title:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-accordion-title:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-accordion-title:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-accordion-title:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-accordion-title:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-accordion-title:focus,\n  .uk-scope .uk-overlay-primary .uk-accordion-title:hover,\n  .uk-scope .uk-overlay-primary .uk-accordion-title:focus,\n  .uk-scope .uk-offcanvas-bar .uk-accordion-title:hover,\n  .uk-scope .uk-offcanvas-bar .uk-accordion-title:focus {\n    color: #666;\n}\n.uk-scope .uk-light .uk-iconnav > * > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > * > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > * > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > * > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > * > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-iconnav > * > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-iconnav > * > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-iconnav > * > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-iconnav > * > a,\n  .uk-scope .uk-overlay-primary .uk-iconnav > * > a,\n  .uk-scope .uk-offcanvas-bar .uk-iconnav > * > a {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-iconnav > * > a:hover,\n  .uk-scope .uk-light .uk-iconnav > * > a:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > * > a:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > * > a:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > * > a:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-iconnav > * > a:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-iconnav > * > a:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-iconnav > * > a:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-iconnav > * > a:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-iconnav > * > a:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-iconnav > * > a:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-iconnav > * > a:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-iconnav > * > a:focus,\n  .uk-scope .uk-overlay-primary .uk-iconnav > * > a:hover,\n  .uk-scope .uk-overlay-primary .uk-iconnav > * > a:focus,\n  .uk-scope .uk-offcanvas-bar .uk-iconnav > * > a:hover,\n  .uk-scope .uk-offcanvas-bar .uk-iconnav > * > a:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-card-primary.uk-card-body .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-overlay-primary .uk-iconnav > .uk-active > a,\n  .uk-scope .uk-offcanvas-bar .uk-iconnav > .uk-active > a {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-text-lead,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-text-lead,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-text-lead,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-text-lead,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-text-lead,\n  .uk-scope .uk-card-primary.uk-card-body .uk-text-lead,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-text-lead,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-text-lead,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-text-lead,\n  .uk-scope .uk-overlay-primary .uk-text-lead,\n  .uk-scope .uk-offcanvas-bar .uk-text-lead {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-text-meta,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-text-meta,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-text-meta,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-text-meta,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-text-meta,\n  .uk-scope .uk-card-primary.uk-card-body .uk-text-meta,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-text-meta,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-text-meta,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-text-meta,\n  .uk-scope .uk-overlay-primary .uk-text-meta,\n  .uk-scope .uk-offcanvas-bar .uk-text-meta {\n    color: rgba(255, 255, 255, 0.5);\n}\n.uk-scope .uk-light .uk-text-muted,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-text-muted,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-text-muted,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-text-muted,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-text-muted,\n  .uk-scope .uk-card-primary.uk-card-body .uk-text-muted,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-text-muted,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-text-muted,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-text-muted,\n  .uk-scope .uk-overlay-primary .uk-text-muted,\n  .uk-scope .uk-offcanvas-bar .uk-text-muted {\n    color: rgba(255, 255, 255, 0.5) !important;\n}\n.uk-scope .uk-light .uk-text-primary,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-text-primary,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-text-primary,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-text-primary,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-text-primary,\n  .uk-scope .uk-card-primary.uk-card-body .uk-text-primary,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-text-primary,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-text-primary,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-text-primary,\n  .uk-scope .uk-overlay-primary .uk-text-primary,\n  .uk-scope .uk-offcanvas-bar .uk-text-primary {\n    color: rgba(255, 255, 255, 0.7) !important;\n}\n.uk-scope .uk-light .uk-column-divider,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-column-divider,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-column-divider,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-column-divider,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-column-divider,\n  .uk-scope .uk-card-primary.uk-card-body .uk-column-divider,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-column-divider,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-column-divider,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-column-divider,\n  .uk-scope .uk-overlay-primary .uk-column-divider,\n  .uk-scope .uk-offcanvas-bar .uk-column-divider {\n    column-rule-color: rgba(255, 255, 255, 0.2);\n}\n.uk-scope .uk-light .uk-logo,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-logo,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-logo,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-logo,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-logo,\n  .uk-scope .uk-card-primary.uk-card-body .uk-logo,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-logo,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-logo,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-logo,\n  .uk-scope .uk-overlay-primary .uk-logo,\n  .uk-scope .uk-offcanvas-bar .uk-logo {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-logo:hover,\n  .uk-scope .uk-light .uk-logo:focus,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-logo:hover,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-logo:focus,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-logo:hover,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-logo:focus,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-logo:hover,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-logo:focus,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-logo:hover,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-logo:focus,\n  .uk-scope .uk-card-primary.uk-card-body .uk-logo:hover,\n  .uk-scope .uk-card-primary.uk-card-body .uk-logo:focus,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-logo:hover,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-logo:focus,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-logo:hover,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-logo:focus,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-logo:hover,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-logo:focus,\n  .uk-scope .uk-overlay-primary .uk-logo:hover,\n  .uk-scope .uk-overlay-primary .uk-logo:focus,\n  .uk-scope .uk-offcanvas-bar .uk-logo:hover,\n  .uk-scope .uk-offcanvas-bar .uk-logo:focus {\n    color: rgba(255, 255, 255, 0.7);\n}\n.uk-scope .uk-light .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-card-primary.uk-card-body .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-card-secondary.uk-card-body .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-overlay-primary .uk-logo > :not(.uk-logo-inverse):not(:only-of-type),\n  .uk-scope .uk-offcanvas-bar .uk-logo > :not(.uk-logo-inverse):not(:only-of-type) {\n    display: none;\n}\n.uk-scope .uk-light .uk-logo-inverse,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-logo-inverse,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-logo-inverse,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-logo-inverse,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-logo-inverse,\n  .uk-scope .uk-card-primary.uk-card-body .uk-logo-inverse,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-logo-inverse,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-logo-inverse,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-logo-inverse,\n  .uk-scope .uk-overlay-primary .uk-logo-inverse,\n  .uk-scope .uk-offcanvas-bar .uk-logo-inverse {\n    display: inline;\n}\n.uk-scope .uk-light .uk-accordion-title::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-accordion-title::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-accordion-title::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-accordion-title::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-accordion-title::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-accordion-title::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-accordion-title::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-accordion-title::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-accordion-title::after,\n  .uk-scope .uk-overlay-primary .uk-accordion-title::after,\n  .uk-scope .uk-offcanvas-bar .uk-accordion-title::after {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%221%22%20height%3D%2213%22%20x%3D%226%22%20y%3D%220%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n.uk-scope .uk-light .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-section-primary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-section-secondary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-tile-primary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-tile-secondary:not(.uk-preserve-color) .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-card-primary.uk-card-body .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-card-primary > :not([class*='uk-card-media']) .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-card-secondary.uk-card-body .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-card-secondary > :not([class*='uk-card-media']) .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-overlay-primary .uk-open > .uk-accordion-title::after,\n  .uk-scope .uk-offcanvas-bar .uk-open > .uk-accordion-title::after {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Crect%20fill%3D%22rgba%28255,%20255,%20255,%200.7%29%22%20width%3D%2213%22%20height%3D%221%22%20x%3D%220%22%20y%3D%226%22%20%2F%3E%0A%3C%2Fsvg%3E\");\n}\n@media print {\n.uk-scope *,\n    .uk-scope *::before,\n    .uk-scope *::after {\n      background: transparent !important;\n      color: black !important;\n      box-shadow: none !important;\n      text-shadow: none !important;\n}\n.uk-scope a,\n    .uk-scope a:visited {\n      text-decoration: underline;\n}\n.uk-scope pre,\n    .uk-scope blockquote {\n      border: 1px solid #999;\n      page-break-inside: avoid;\n}\n.uk-scope thead {\n      display: table-header-group;\n}\n.uk-scope tr,\n    .uk-scope img {\n      page-break-inside: avoid;\n}\n.uk-scope img {\n      max-width: 100% !important;\n}\n@page {\n.uk-scope {\n        margin: 0.5cm;\n}\n}\n.uk-scope p,\n    .uk-scope h2,\n    .uk-scope h3 {\n      orphans: 3;\n      widows: 3;\n}\n.uk-scope h2,\n    .uk-scope h3 {\n      page-break-after: avoid;\n}\n}\n.uk-scope * {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n}\n.uk-scope li, .uk-scope td {\n    color: #666;\n}\n.uk-scope p {\n    /* 1 */\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 1.5;\n    /* 2 */\n    -webkit-text-size-adjust: 100%;\n    /* 3 */\n    background: #fff;\n    color: #666;\n}\n@media only screen and (max-width: 767px) {\n.uk-scope .uk-button {\n      padding: 0px 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.logo-image[data-v-60df72a6] {\n  max-height: 150px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.purpose-header[data-v-2fd24bac] {\n  margin-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-js-switch[data-v-3dff87aa] {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  font-size: 10px;\n  cursor: pointer;\n}\n.vue-js-switch .v-switch-input[data-v-3dff87aa] {\n  display: none;\n}\n.vue-js-switch .v-switch-label[data-v-3dff87aa] {\n  position: absolute;\n  top: 0;\n  font-weight: 600;\n  color: white;\n}\n.vue-js-switch .v-switch-label.v-left[data-v-3dff87aa] {\n  left: 10px;\n}\n.vue-js-switch .v-switch-label.v-right[data-v-3dff87aa] {\n  right: 10px;\n}\n.vue-js-switch .v-switch-core[data-v-3dff87aa] {\n  display: block;\n  position: relative;\n  box-sizing: border-box;\n  outline: 0;\n  margin: 0;\n  transition: border-color 0.3s, background-color 0.3s;\n  user-select: none;\n}\n.vue-js-switch .v-switch-core .v-switch-button[data-v-3dff87aa] {\n  display: block;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  transform: translate3d(3px, 3px, 0);\n  border-radius: 100%;\n  background-color: #fff;\n}\n.vue-js-switch.disabled[data-v-3dff87aa] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/ui/styles/clients/client.3.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/ui/styles/clients/client.3.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.uk-modal-body {\n  background-color: #3D3C3A;\n}\n\nh1.client-styles {\n  font-family: Replica-Regular, sans-serif;\n  background-color: #3D3C3A;\n  color: #FFF;\n}\n\nh4.client-styles {\n  font-family: Replica-Regular, sans-serif;\n  font-weight: 600;\n  background-color: #3D3C3A;\n  color: #FFF;\n}\n\np.client-styles {\n  font-family: Replica-Regular, sans-serif;\n  background-color: #3D3C3A;\n  color: #FFF;\n}\n\nbutton.client-styles.uk-button-default {\n  color: #FFF !important;\n  background-color: #3D3C3A !important;\n}\n\nbutton.client-styles.uk-button-secondary {\n  color: black !important;\n  background-color: #FFF !important;\n}\n\nspan.client-styles {\n  color: #FFF !important;\n}\n\ntable.client-styles td {\n  color: #FFF !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=template&id=d5b033c2":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/App.vue?vue&type=template&id=d5b033c2 ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-scope" },
    [
      _vm.clientConfig
        ? _c(
            "vk-modal",
            { attrs: { show: _vm.isShow } },
            [
              _c("element-modal-close", {
                attrs: { large: "" },
                on: { click: _vm.setFullConsent }
              }),
              _vm._v(" "),
              _c("app-breadcrumb", {
                attrs: { "current-view": _vm.currentView }
              }),
              _vm._v(" "),
              _c(_vm.currentView, { tag: "component" })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vk-breadcrumb",
        [
          _c(
            "vk-breadcrumb-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.currentView === "Modal" || "Purposes" || "Vendors",
                  expression:
                    "currentView === 'Modal' || 'Purposes' || 'Vendors'"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  _vm.changeCurrentView("Modal")
                }
              }
            },
            [_vm._v("\n          Home\n        ")]
          ),
          _vm._v(" "),
          _c(
            "vk-breadcrumb-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.currentView !== "Modal",
                  expression: "currentView !== 'Modal'"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  _vm.changeCurrentView("Purposes")
                }
              }
            },
            [_vm._v("\n          Purposes\n        ")]
          ),
          _vm._v(" "),
          _c(
            "vk-breadcrumb-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.currentView === "Vendors",
                  expression: "currentView === 'Vendors'"
                }
              ],
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  _vm.changeCurrentView("Vendors")
                }
              }
            },
            [_vm._v("\n          Partners\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=template&id=60df72a6&scoped=true":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Modal.vue?vue&type=template&id=60df72a6&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("img", {
      staticClass: "logo-image",
      attrs: { src: _vm.getCurrentClientConfig.clientLogo }
    }),
    _vm._v(" "),
    _c("h1", { staticClass: "client-styles" }, [
      _vm._v(_vm._s(_vm.getCurrentClientConfig.views.homeView.title))
    ]),
    _vm._v(" "),
    _c("p", {
      staticClass: "client-styles",
      domProps: {
        innerHTML: _vm._s(_vm.getCurrentClientConfig.views.homeView.body)
      }
    }),
    _vm._v(" "),
    _c(
      "p",
      { staticClass: "uk-text-right client-styles" },
      [
        _c(
          "vk-button",
          {
            staticClass: "client-styles",
            on: {
              click: function($event) {
                _vm.changeCurrentView("Purposes")
              }
            }
          },
          [_vm._v("\n          More Information\n        ")]
        ),
        _vm._v(" "),
        _c(
          "vk-button",
          {
            staticClass: "client-styles",
            attrs: { type: "secondary" },
            on: { click: _vm.fullConsent }
          },
          [_vm._v("\n          I Agree\n        ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=template&id=2fd24bac&scoped=true":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=template&id=2fd24bac&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", { staticClass: "client-styles" }, [
        _vm._v(_vm._s(_vm.purposeView.title))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "client-styles" }, [
        _vm._v(_vm._s(_vm.purposeView.body))
      ]),
      _vm._v(" "),
      !_vm.purposeType || _vm.purposeType === "iab"
        ? _c(
            "vk-table",
            { attrs: { data: _vm.purposeView.purposeText, narrowed: "" } },
            [
              _c("vk-table-column", {
                attrs: { title: "Purpose", cell: "purpose" }
              }),
              _vm._v(" "),
              _c("vk-table-column", {
                attrs: { title: "Allow" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var row = ref.row
                      return _c("cmp-toggle", {
                        attrs: {
                          toggleType: "purposes",
                          purposeId: row.id,
                          value: _vm.toggleValue(row.id),
                          labels: { checked: "on", unchecked: "off" }
                        }
                      })
                    }
                  }
                ])
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.purposeType === "default"
        ? _c(
            "vk-table",
            { attrs: { data: _vm.vendorList.purposes, narrowed: "" } },
            [
              _c("vk-table-column", {
                attrs: { title: "Purpose" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var row = ref.row
                      return _c("div", {}, [
                        _c(
                          "h4",
                          { staticClass: "purpose-header client-styles" },
                          [_vm._v(_vm._s(row.name))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "client-styles" }, [
                          _vm._v(_vm._s(row.description))
                        ])
                      ])
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("vk-table-column", {
                attrs: { title: "Allow" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var row = ref.row
                      return _c("cmp-toggle", {
                        attrs: {
                          toggleType: "purposes",
                          purposeId: row.id,
                          disabled: row.disabled,
                          value: _vm.toggleValue(row.id),
                          labels: { checked: "on", unchecked: "off" }
                        }
                      })
                    }
                  }
                ])
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("p", { staticClass: "client-styles" }, [
        _vm._v(_vm._s(_vm.purposeView.vendorsText) + "\n    "),
        _c(
          "a",
          {
            attrs: { href: "#" },
            on: {
              click: function($event) {
                _vm.changeCurrentView("Vendors")
              }
            }
          },
          [_vm._v("PARTNERS")]
        )
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "uk-text-right client-styles" },
        [
          _c(
            "vk-button",
            {
              staticClass: "client-styles",
              on: { click: _vm.setPartialConsent }
            },
            [_vm._v("Accept Selected")]
          ),
          _vm._v(" "),
          _c(
            "vk-button",
            {
              staticClass: "client-styles",
              attrs: { type: "secondary" },
              on: { click: _vm.setFullConsent }
            },
            [_vm._v("Accept All")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=template&id=3dff87aa&scoped=true":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=template&id=3dff87aa&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      class: _vm.className,
      attrs: { role: "checkbox", "aria-checked": _vm.ariaChecked }
    },
    [
      _c("input", {
        staticClass: "v-switch-input",
        attrs: { type: "checkbox" },
        on: {
          change: function($event) {
            $event.stopPropagation()
            return _vm.toggle($event)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "v-switch-core", style: _vm.coreStyle }, [
        _c("div", { staticClass: "v-switch-button", style: _vm.buttonStyle })
      ]),
      _vm._v(" "),
      _vm.labels
        ? [
            _vm.toggled
              ? _c("span", {
                  staticClass: "v-switch-label v-left",
                  style: _vm.labelStyle,
                  domProps: { innerHTML: _vm._s(_vm.labelChecked) }
                })
              : _c("span", {
                  staticClass: "v-switch-label v-right",
                  style: _vm.labelStyle,
                  domProps: { innerHTML: _vm._s(_vm.labelUnchecked) }
                })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", { staticClass: "client-styles" }, [
        _vm._v(_vm._s(_vm.getCurrentClientConfig.views.vendorView.title))
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "client-styles" }, [
        _vm._v(_vm._s(_vm.getCurrentClientConfig.views.vendorView.body))
      ]),
      _vm._v(" "),
      _c(
        "vk-table",
        {
          staticClass: "client-styles",
          attrs: { data: _vm.paginatedData, narrowed: "" }
        },
        [
          _c("vk-table-column", {
            staticClass: "client-styles",
            attrs: { title: "Vendor Name", cell: "name" }
          }),
          _vm._v(" "),
          _c("vk-table-column", {
            attrs: { title: "Policy Link" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return _c(
                    "a",
                    { attrs: { href: row.policyUrl, target: "_blank" } },
                    [_vm._v("Link")]
                  )
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("vk-table-column", {
            attrs: { title: "Allow" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return _c("cmp-toggle", {
                    key: row.id,
                    attrs: {
                      toggleType: "vendors",
                      purposeId: row.id,
                      value: _vm.toggleValue(row.id),
                      labels: { checked: "on", unchecked: "off" }
                    }
                  })
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vk-pagination",
        {
          attrs: {
            page: _vm.pageNumber,
            perPage: _vm.size,
            total: _vm.totalVendors,
            align: "center"
          },
          on: {
            "update:page": function($event) {
              _vm.pageNumber = $event
            }
          }
        },
        [
          _c("vk-pagination-page-prev"),
          _vm._v(" "),
          _c("vk-pagination-pages"),
          _vm._v(" "),
          _c("vk-pagination-page-next")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "uk-text-right client-styles" },
        [
          _c(
            "vk-button",
            {
              staticClass: "client-styles",
              on: { click: _vm.setPartialConsent }
            },
            [_vm._v("Accept Selected")]
          ),
          _vm._v(" "),
          _c(
            "vk-button",
            {
              staticClass: "client-styles",
              attrs: { type: "secondary" },
              on: { click: _vm.setFullConsent }
            },
            [_vm._v("Accept All")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=style&index=0&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=style&index=0&lang=scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ad152b24", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/configs eager recursive ^\\.\\/client\\..*\\.js$":
/*!*****************************************************************!*\
  !*** ./src/configs eager ^\.\/client\..*\.js$ namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./client.0.js": "./src/configs/client.0.js",
	"./client.1.js": "./src/configs/client.1.js",
	"./client.2.js": "./src/configs/client.2.js",
	"./client.3.js": "./src/configs/client.3.js",
	"./client.4.js": "./src/configs/client.4.js",
	"./client.5.js": "./src/configs/client.5.js",
	"./client.6.js": "./src/configs/client.6.js",
	"./client.7.js": "./src/configs/client.7.js",
	"./client.8.js": "./src/configs/client.8.js",
	"./client.9.js": "./src/configs/client.9.js"
};


function webpackAsyncContext(req) {
	return webpackAsyncContextResolve(req).then(function(id) {
	var module = __webpack_require__(id);
	return (typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }));
});
}
function webpackAsyncContextResolve(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var id = map[req];
		if(!(id + 1)) { // check for number or string
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}
		return id;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.resolve = webpackAsyncContextResolve;
webpackAsyncContext.id = "./src/configs eager recursive ^\\.\\/client\\..*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/configs/client.0.js":
/*!*********************************!*\
  !*** ./src/configs/client.0.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 0,
  clientName: 'demo',
  clientLogo: '',
  defaults: {
    purposes: [1, 2, 3, 4, 5],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    customVendors: []
  },
  views: {
    homeView: {
      title: 'We use cookies...',
      body: "And you should be able to take control over your personal data. Therefore we are providing you with new controls to manage your data, to give you a better internet experience.\n              If you click Accept all below you consent to us and all the third-parties mentioned in our Privacy and Cookie Notice setting cookies and processing your personal data for the purposes of analytics and advertising."
    },
    purposeView: {
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n            Below you can find all the purposes for which we collect your device data.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below are a list of our partners, please explore each vendors policy and remove any\n                    which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.1.js":
/*!*********************************!*\
  !*** ./src/configs/client.1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 1,
  clientName: 'MiQ',
  clientLogo: __webpack_require__.p + '/assets/logo-miq.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [32, 101],
    customVendors: [1001, 1002, 1003, 1004]
  },
  views: {
    homeView: {
      title: 'We are MiQ!',
      body: "MiQ and our partners use technology such as cookies on our site for analytics and advertising purposes. \n      By clicking '<b>I Agree</b>' you consent to use of this technology across the web by us and the third-parties mentioned in our <a href=\"http://wearemiq.com/privacy-policy/\">Privacy Policy</a>. \n      You can change your mind and revisit your consent choices at anytime by returning to this site."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n            which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.2.js":
/*!*********************************!*\
  !*** ./src/configs/client.2.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 2,
  clientName: 'The Independent',
  clientLogo: __webpack_require__.p + '/assets/logo-independent.svg',
  defaults: {
    purposes: [1, 2, 3, 4, 5],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    customVendors: []
  },
  views: {
    homeView: {
      title: 'Dear Reader,',
      body: "In order to run a successful online newspaper, The Independent and third parties are storing and accessing information on your device with cookies and other technologies. \n              Several third parties are also processing personal data to show you personalised content and ads. \n              This can also be on websites that are not just ours. Under new <a href=\"https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/\">EU Regulation</a>, your consent is needed for both setting cookies and processing your personal data.\n              You can view our privacy policy <a href=\"https://www.independent.co.uk/service/privacy-policy-a6184181.html\">here</a>."
    },
    purposeView: {
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.3.js":
/*!*********************************!*\
  !*** ./src/configs/client.3.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 3,
  clientName: 'Habito',
  clientLogo: __webpack_require__.p + '/assets/logo-habito.svg',
  clientStyle: true,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    customVendors: []
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: "You have control over your personal data. \n            We use technology to create a personalised experience for our users, for analytics and for advertising. \n            Please click <b>\"I agree\"</b> to provide consent to us and third parties mentioned in our <a href=\"https://www.habito.com/privacy\">Privacy & Cookie Policy</a> to process your data for these purposes. \n            You can change your settings at any time."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.4.js":
/*!*********************************!*\
  !*** ./src/configs/client.4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 4,
  clientName: 'Custom Purpose Client',
  clientLogo: 'https://upload.wikimedia.org/wikipedia/fi/a/ab/The_Independent_logo.svg',
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // customPurposes: [11, 12, 13],
    customVendors: []
  },
  views: {
    homeView: {
      title: 'Dear Reader,',
      body: "In order to run a successful online newspaper, The Independent and third parties are storing and accessing information on your device with cookies and other technologies. \n              Several third parties are also processing personal data to show you personalised content and ads. \n              This can also be on websites that are not just ours. Under new <a href=\"https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/\">EU Regulation</a>, your consent is needed for both setting cookies and processing your personal data.\n              You can view our privacy policy <a href=\"https://www.independent.co.uk/service/privacy-policy-a6184181.html\">here</a>."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.5.js":
/*!*********************************!*\
  !*** ./src/configs/client.5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 5,
  clientName: 'Noma',
  clientLogo: __webpack_require__.p + 'assets/logo-noma.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [101],
    customVendors: [1001, 1003]
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: "We and our partners use cookies on our site for analytics and advertising purposes. \n            By selecting <b>\"I agree\"</b> you are consenting to use of this technology across the web by us and our ad partners.  \n            More information can be found in our <a href=\"https://www.noma-westminster.com/privacy-policy\">privacy policy</a>.\n            If you change your mind, you can change your preferences at anytime when returning to this site."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.6.js":
/*!*********************************!*\
  !*** ./src/configs/client.6.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 6,
  clientName: 'Conningbrook Lakes',
  clientLogo: __webpack_require__.p + 'assets/logo-conningbrooks.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [101],
    customVendors: [1001, 1003]
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: "We and our partners use cookies on our site for analytics and advertising purposes. \n            By selecting <b>\"I agree\"</b> you are consenting to use of this technology across the web by us and our ad partners.  \n            More information can be found in our <a href=\"https://www.conningbrooklakes.com/privacy-policy\">privacy policy</a>.\n            If you change your mind, you can change your preferences at anytime when returning to this site."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.7.js":
/*!*********************************!*\
  !*** ./src/configs/client.7.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 7,
  clientName: 'Dewynters',
  clientLogo: __webpack_require__.p + 'assets/logo-dewynters.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [101],
    customVendors: [1001, 1003]
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: "We and our partners use cookies on our site for analytics and advertising purposes. \n            By selecting <b>\"I agree\"</b> you are consenting to use of this technology across the web by us and our ad partners.  \n            More information can be found in our <a href=\"https://www.dewynters.com/privacy/\">privacy policy</a>.\n            If you change your mind, you can change your preferences at anytime when returning to this site."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.8.js":
/*!*********************************!*\
  !*** ./src/configs/client.8.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 8,
  clientName: 'Dewynters - The Bodyguard',
  clientLogo: __webpack_require__.p + 'assets/logo-dewynters.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [101],
    customVendors: [1001, 1003]
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: "We and our partners use cookies on our site for analytics and advertising purposes. \n            By selecting <b>\"I agree\"</b> you are consenting to use of this technology across the web by us and our ad partners.  \n            More information can be found in our <a href=\"https://www.dewynters.com/privacy/\">privacy policy</a>.\n            If you change your mind, you can change your preferences at anytime when returning to this site."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/client.9.js":
/*!*********************************!*\
  !*** ./src/configs/client.9.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var clientConfig = {
  clientId: 9,
  clientName: 'Dewynters - Bat Out Of Hell',
  clientLogo: __webpack_require__.p + 'assets/logo-dewynters.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [101],
    customVendors: [1001, 1003]
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: "We and our partners use cookies on our site for analytics and advertising purposes. \n            By selecting <b>\"I agree\"</b> you are consenting to use of this technology across the web by us and our ad partners.  \n            More information can be found in our <a href=\"https://www.dewynters.com/privacy/\">privacy policy</a>.\n            If you change your mind, you can change your preferences at anytime when returning to this site."
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: "We use cookies and work with various partners to create a tailored experience for our users. \n      Below you can find all the purposes for which we collect data from your device.",
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information'
      }, {
        id: 2,
        purpose: 'Personalisation'
      }, {
        id: 3,
        purpose: 'Ad selection, delivery, reporting'
      }, {
        id: 4,
        purpose: 'Measurement'
      }, {
        id: 5,
        purpose: 'Content selection, delivery, reporting'
      }]
    },
    vendorView: {
      title: 'Our Partners',
      body: "Below is a list of our technology partners, please explore each partners policy and remove any\n          which do not conform to your privacy standards."
    }
  }
};
var _default = clientConfig;
exports.default = _default;

/***/ }),

/***/ "./src/configs/customVendorList.js":
/*!*****************************************!*\
  !*** ./src/configs/customVendorList.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var customVendorList = {
  "vendorListVersion": 1,
  "lastUpdated": "2018-05-31T16:43:19Z",
  "vendors": [{
    "id": 1001,
    "name": "Google Analytics",
    "policyUrl": "https://policies.google.com/privacy",
    "purposeIds": [],
    "legIntPurposeIds": [],
    "featureIds": []
  }, {
    "id": 1002,
    "name": "Google Tag Manager",
    "policyUrl": "https://policies.google.com/privacy",
    "purposeIds": [],
    "legIntPurposeIds": [],
    "featureIds": []
  }, {
    "id": 1003,
    "name": "DoubleClick",
    "policyUrl": "https://policies.google.com/technologies/ads",
    "purposeIds": [],
    "legIntPurposeIds": [],
    "featureIds": []
  }, {
    "id": 1004,
    "name": "Facebook",
    "policyUrl": "https://www.facebook.com/full_data_use_policy",
    "purposeIds": [],
    "legIntPurposeIds": [],
    "featureIds": []
  }, {
    "id": 1999,
    "name": "PLACEHOLDER",
    "policyUrl": "PLACEHOLDER",
    "purposeIds": [],
    "legIntPurposeIds": [],
    "featureIds": []
  }],
  "purposes": [{
    "id": 11,
    "name": "Functional",
    "description": "These cookies are required to enable core site functionality.",
    "disabled": true
  }, {
    "id": 12,
    "name": "Analytics",
    "description": "These cookies allow us to analyse the site usage so we can measure and improve performance."
  }, {
    "id": 13,
    "name": "Marketing",
    "description": "These cookies are used by our advertising partners to serve you ads relevant to your interests."
  }]
};
var _default = customVendorList;
exports.default = _default;

/***/ }),

/***/ "./src/ui/App.vue":
/*!************************!*\
  !*** ./src/ui/App.vue ***!
  \************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_d5b033c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d5b033c2 */ "./src/ui/App.vue?vue&type=template&id=d5b033c2");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./src/ui/App.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ "./src/ui/App.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_d5b033c2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_d5b033c2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/App.vue?vue&type=script&lang=js":
/*!************************************************!*\
  !*** ./src/ui/App.vue?vue&type=script&lang=js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/App.vue?vue&type=style&index=0&lang=scss":
/*!*********************************************************!*\
  !*** ./src/ui/App.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/App.vue?vue&type=template&id=d5b033c2":
/*!******************************************************!*\
  !*** ./src/ui/App.vue?vue&type=template&id=d5b033c2 ***!
  \******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d5b033c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=d5b033c2 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/App.vue?vue&type=template&id=d5b033c2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d5b033c2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d5b033c2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/Breadcrumb.vue":
/*!******************************************!*\
  !*** ./src/ui/components/Breadcrumb.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_cf26ec4c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true */ "./src/ui/components/Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js */ "./src/ui/components/Breadcrumb.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css */ "./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumb_vue_vue_type_template_id_cf26ec4c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumb_vue_vue_type_template_id_cf26ec4c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cf26ec4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/Breadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/Breadcrumb.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/ui/components/Breadcrumb.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=style&index=0&id=cf26ec4c&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_style_index_0_id_cf26ec4c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/ui/components/Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_cf26ec4c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Breadcrumb.vue?vue&type=template&id=cf26ec4c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_cf26ec4c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_cf26ec4c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/Modal.vue":
/*!*************************************!*\
  !*** ./src/ui/components/Modal.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_60df72a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=60df72a6&scoped=true */ "./src/ui/components/Modal.vue?vue&type=template&id=60df72a6&scoped=true");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./src/ui/components/Modal.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css */ "./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_60df72a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_60df72a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60df72a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/Modal.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/ui/components/Modal.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=style&index=0&id=60df72a6&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_60df72a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Modal.vue?vue&type=template&id=60df72a6&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/ui/components/Modal.vue?vue&type=template&id=60df72a6&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_60df72a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=60df72a6&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Modal.vue?vue&type=template&id=60df72a6&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_60df72a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_60df72a6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/Purposes.vue":
/*!****************************************!*\
  !*** ./src/ui/components/Purposes.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Purposes_vue_vue_type_template_id_2fd24bac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Purposes.vue?vue&type=template&id=2fd24bac&scoped=true */ "./src/ui/components/Purposes.vue?vue&type=template&id=2fd24bac&scoped=true");
/* harmony import */ var _Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Purposes.vue?vue&type=script&lang=js */ "./src/ui/components/Purposes.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css */ "./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Purposes_vue_vue_type_template_id_2fd24bac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Purposes_vue_vue_type_template_id_2fd24bac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fd24bac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/Purposes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/Purposes.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/ui/components/Purposes.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Purposes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=style&index=0&id=2fd24bac&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_style_index_0_id_2fd24bac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Purposes.vue?vue&type=template&id=2fd24bac&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/ui/components/Purposes.vue?vue&type=template&id=2fd24bac&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_template_id_2fd24bac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Purposes.vue?vue&type=template&id=2fd24bac&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Purposes.vue?vue&type=template&id=2fd24bac&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_template_id_2fd24bac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Purposes_vue_vue_type_template_id_2fd24bac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/Toggle.vue":
/*!**************************************!*\
  !*** ./src/ui/components/Toggle.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toggle_vue_vue_type_template_id_3dff87aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggle.vue?vue&type=template&id=3dff87aa&scoped=true */ "./src/ui/components/Toggle.vue?vue&type=template&id=3dff87aa&scoped=true");
/* harmony import */ var _Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.vue?vue&type=script&lang=js */ "./src/ui/components/Toggle.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css */ "./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Toggle_vue_vue_type_template_id_3dff87aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Toggle_vue_vue_type_template_id_3dff87aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3dff87aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/Toggle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/Toggle.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/ui/components/Toggle.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Toggle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=style&index=0&id=3dff87aa&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_style_index_0_id_3dff87aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Toggle.vue?vue&type=template&id=3dff87aa&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/ui/components/Toggle.vue?vue&type=template&id=3dff87aa&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_template_id_3dff87aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Toggle.vue?vue&type=template&id=3dff87aa&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Toggle.vue?vue&type=template&id=3dff87aa&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_template_id_3dff87aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggle_vue_vue_type_template_id_3dff87aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/Vendors.vue":
/*!***************************************!*\
  !*** ./src/ui/components/Vendors.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vendors_vue_vue_type_template_id_6cbb18e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true */ "./src/ui/components/Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true");
/* harmony import */ var _Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vendors.vue?vue&type=script&lang=js */ "./src/ui/components/Vendors.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css */ "./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vendors_vue_vue_type_template_id_6cbb18e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Vendors_vue_vue_type_template_id_6cbb18e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6cbb18e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/Vendors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/Vendors.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/ui/components/Vendors.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Vendors.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=style&index=0&id=6cbb18e4&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_style_index_0_id_6cbb18e4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/ui/components/Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_template_id_6cbb18e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/Vendors.vue?vue&type=template&id=6cbb18e4&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_template_id_6cbb18e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vendors_vue_vue_type_template_id_6cbb18e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/eventBus.js":
/*!****************************!*\
  !*** ./src/ui/eventBus.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _vue.default();

exports.default = _default;

/***/ }),

/***/ "./src/ui/main.js":
/*!************************!*\
  !*** ./src/ui/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));

var _vuikit = _interopRequireDefault(__webpack_require__(/*! vuikit */ "./node_modules/vuikit/dist/vuikit.esm.js"));

var _modal = __webpack_require__(/*! vuikit/lib/modal */ "./node_modules/vuikit/lib/modal.js");

var _eventBus = _interopRequireDefault(__webpack_require__(/*! ./eventBus */ "./src/ui/eventBus.js"));

var _App = _interopRequireDefault(__webpack_require__(/*! ./App.vue */ "./src/ui/App.vue"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! ./components/Modal.vue */ "./src/ui/components/Modal.vue"));

var _Purposes = _interopRequireDefault(__webpack_require__(/*! ./components/Purposes.vue */ "./src/ui/components/Purposes.vue"));

var _Vendors = _interopRequireDefault(__webpack_require__(/*! ./components/Vendors.vue */ "./src/ui/components/Vendors.vue"));

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! ./components/Breadcrumb.vue */ "./src/ui/components/Breadcrumb.vue"));

var _Toggle = _interopRequireDefault(__webpack_require__(/*! ./components/Toggle.vue */ "./src/ui/components/Toggle.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import and make global all components
_vue.default.use(_vuikit.default); // registering all components globally


_vue.default.component('CmpApp', _App.default);

_vue.default.component('Modal', _Modal.default);

_vue.default.component('Purposes', _Purposes.default);

_vue.default.component('Vendors', _Vendors.default);

_vue.default.component('AppBreadcrumb', _Breadcrumb.default);

_vue.default.component('CmpToggle', _Toggle.default);

_vue.default.component('ElementModalClose', _modal.ElementModalClose);

_vue.default.mixin({
  methods: {
    $ready: function $ready(fn) {
      var _this = this;

      if (false) {}

      setTimeout(function () {
        _this.$nextTick(fn);
      });
    }
  }
}); // creating a root in the DOM for the app to attach to, when called


var divToAttachApp = document.createElement('div');
divToAttachApp.setAttribute('id', 'cmp-app');
document.body.appendChild(divToAttachApp); // create the app instance and attach it to the DOM in a hidden state

var vm = new _vue.default(_App.default).$mount('#cmp-app'); // this function is called to load the UI, it accepts the clientId

function renderVueApp(clientId) {
  return new Promise(function (resolve, reject) {
    if (vm) {
      vm.$store.commit('setClientId', parseInt(clientId, 10));
      vm.$store.dispatch('setClientId', parseInt(clientId, 10));
      vm.$store.commit('changeShowState', true);

      _eventBus.default.$on('save-selection', function (value) {
        console.log('[INFO][CMP-UI] Resolving Promise (save-selection):', value);
        resolve(value);
      });
    } else {
      console.error('CMP-UI :: No App Present');
      reject();
    }
  });
}

var _default = renderVueApp;
exports.default = _default;

/***/ }),

/***/ "./src/ui/store.js":
/*!*************************!*\
  !*** ./src/ui/store.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));

var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));

var _logger = _interopRequireDefault(__webpack_require__(/*! vuex/dist/logger */ "./node_modules/vuex/dist/logger.js"));

var _eventBus = _interopRequireDefault(__webpack_require__(/*! ./eventBus */ "./src/ui/eventBus.js"));

var _iabVendorList = _interopRequireDefault(__webpack_require__(/*! ../configs/iabVendorList */ "./src/configs/iabVendorList.js"));

var _customVendorList = _interopRequireDefault(__webpack_require__(/*! ../configs/customVendorList */ "./src/configs/customVendorList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue.default.use(_vuex.default);

var debug = "development" !== 'production';

var _default = new _vuex.default.Store({
  // strict: true, // TODO: this should bet set in dev ONLY!
  plugins: debug ? [(0, _logger.default)()] : [],
  state: {
    isShow: false,
    currentView: 'Modal',
    clientId: null,
    vendorsList: _iabVendorList.default.vendors.concat((_customVendorList.default.vendors || []).map(function (vendor) {
      return _objectSpread({}, vendor, {
        isCustom: true
      });
    })),
    userConsentObject: {
      purposes: [],
      vendors: [],
      customVendors: [] // customPurposes: [],

    },
    clientConfig: null
  },
  getters: {
    getUserConsentObject: function getUserConsentObject(state) {
      return state.userConsentObject;
    },
    getCurrentClientConfig: function getCurrentClientConfig(state) {
      return state.clientConfig;
    },
    getCurrentClientVendorList: function getCurrentClientVendorList(state, getters) {
      // first we fetch the IAB, and filter the IAB vendors
      if (!getters.getCurrentClientConfig) {
        return [];
      }

      var _getters$getCurrentCl = getters.getCurrentClientConfig.defaults,
          vendors = _getters$getCurrentCl.vendors,
          customVendors = _getters$getCurrentCl.customVendors;

      var configVendors = _toConsumableArray(vendors).concat(_toConsumableArray(customVendors));

      return state.vendorsList.filter(function (vendor) {
        return configVendors.includes(vendor.id);
      });
    }
  },
  mutations: {
    setClientId: function setClientId(state, clientId) {
      state.clientId = clientId;
    },
    setClientConfig: function setClientConfig(state, clientConfig) {
      state.clientConfig = clientConfig;
    },
    updateUserConsentObject: function updateUserConsentObject(state, payload) {
      var toggleType = payload.toggleType,
          toggleValue = payload.toggleValue,
          toggleId = payload.toggleId;

      if (!['purposes', 'vendors'].includes(toggleType)) {
        console.log('CMP-UI :: Unknown Toggle Type', toggleType);
        return;
      }

      var attr = toggleType === 'purposes' ? 'purposes' : toggleId <= 1000 ? 'vendors' : 'customVendors';
      var arrayValue = state.userConsentObject[attr];

      if (attr === 'purposes' && toggleId === 13) {
        if (toggleValue) {
          arrayValue.push(1, 2, 3, 4, 5);
        } else {
          arrayValue = arrayValue.filter(function (a) {
            return a > 5;
          });
        }
      }

      if (toggleValue) {
        if (!arrayValue.includes(toggleId)) {
          arrayValue.push(toggleId);
        }
      } else {
        arrayValue = arrayValue.filter(function (id) {
          return id !== toggleId;
        });
      }

      state.userConsentObject = _objectSpread({}, state.userConsentObject, _defineProperty({}, attr, arrayValue));
    },
    // this mutation is called right after setting the clientId, so we can use the getter
    // to fetch the correct client config object
    syncClientDefaultsToUserObject: function syncClientDefaultsToUserObject(state, payload) {
      state.userConsentObject = {
        purposes: _toConsumableArray(payload.purposes),
        vendors: _toConsumableArray(payload.vendors),
        customVendors: _toConsumableArray(payload.customVendors) // customPurposes: [...payload.customPurposes],

      };
    },
    changeShowState: function changeShowState(state, payload) {
      state.isShow = payload;
    },
    changeCurrentView: function changeCurrentView(state, payload) {
      state.currentView = payload;
    }
  },
  actions: {
    setFullConsent: function setFullConsent(_ref, payload) {
      var commit = _ref.commit,
          getters = _ref.getters;
      console.log("CMP-UI :: full-consent Event: ".concat(payload));
      var defaultConfig = getters.getCurrentClientConfig.defaults;

      _eventBus.default.$emit('save-selection', defaultConfig);

      commit('syncClientDefaultsToUserObject', defaultConfig);
      commit('changeShowState', false);
      commit('changeCurrentView', 'Modal');
    },
    setPartialConsent: function setPartialConsent(_ref2, payload) {
      var commit = _ref2.commit,
          getters = _ref2.getters;
      console.log("CMP-UI :: partial-consent Event: ".concat(payload));
      var config = getters.getUserConsentObject;

      _eventBus.default.$emit('save-selection', config);

      commit('changeShowState', false);
      commit('changeCurrentView', 'Modal');
    },
    setClientId: function setClientId(_ref3, clientId) {
      var commit = _ref3.commit;
      return __webpack_require__("./src/configs eager recursive ^\\.\\/client\\..*\\.js$")("./client.".concat(clientId, ".js")).then(function (configImport) {
        var config = configImport.default;
        commit('setClientConfig', config);
        commit('syncClientDefaultsToUserObject', config.defaults);
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "./src/ui/styles/clients sync recursive ^\\.\\/client\\..*\\.css$":
/*!**********************************************************!*\
  !*** ./src/ui/styles/clients sync ^\.\/client\..*\.css$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./client.3.css": "./src/ui/styles/clients/client.3.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/ui/styles/clients sync recursive ^\\.\\/client\\..*\\.css$";

/***/ }),

/***/ "./src/ui/styles/clients/client.3.css":
/*!********************************************!*\
  !*** ./src/ui/styles/clients/client.3.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./client.3.css */ "./node_modules/css-loader/index.js!./src/ui/styles/clients/client.3.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=ui.chunk.bundle.js.map