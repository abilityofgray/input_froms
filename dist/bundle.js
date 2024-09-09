/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/locutus/php/_helpers/_phpCastString.js":
/*!**************************************************************!*\
  !*** ../node_modules/locutus/php/_helpers/_phpCastString.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _phpCastString(value) {
  // original by: Rafał Kukawski
  //   example 1: _phpCastString(true)
  //   returns 1: '1'
  //   example 2: _phpCastString(false)
  //   returns 2: ''
  //   example 3: _phpCastString('foo')
  //   returns 3: 'foo'
  //   example 4: _phpCastString(0/0)
  //   returns 4: 'NAN'
  //   example 5: _phpCastString(1/0)
  //   returns 5: 'INF'
  //   example 6: _phpCastString(-1/0)
  //   returns 6: '-INF'
  //   example 7: _phpCastString(null)
  //   returns 7: ''
  //   example 8: _phpCastString(undefined)
  //   returns 8: ''
  //   example 9: _phpCastString([])
  //   returns 9: 'Array'
  //   example 10: _phpCastString({})
  //   returns 10: 'Object'
  //   example 11: _phpCastString(0)
  //   returns 11: '0'
  //   example 12: _phpCastString(1)
  //   returns 12: '1'
  //   example 13: _phpCastString(3.14)
  //   returns 13: '3.14'

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'boolean':
      return value ? '1' : '';
    case 'string':
      return value;
    case 'number':
      if (isNaN(value)) {
        return 'NAN';
      }

      if (!isFinite(value)) {
        return (value < 0 ? '-' : '') + 'INF';
      }

      return value + '';
    case 'undefined':
      return '';
    case 'object':
      if (Array.isArray(value)) {
        return 'Array';
      }

      if (value !== null) {
        return 'Object';
      }

      return '';
    case 'function':
    // fall through
    default:
      throw new Error('Unsupported value type');
  }
};
//# sourceMappingURL=_phpCastString.js.map

/***/ }),

/***/ "../node_modules/locutus/php/_helpers/_php_cast_float.js":
/*!***************************************************************!*\
  !*** ../node_modules/locutus/php/_helpers/_php_cast_float.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _php_cast_float(value) {
  // original by: Rafał Kukawski
  //   example 1: _php_cast_float(false)
  //   returns 1: 0
  //   example 2: _php_cast_float(true)
  //   returns 2: 1
  //   example 3: _php_cast_float(0)
  //   returns 3: 0
  //   example 4: _php_cast_float(1)
  //   returns 4: 1
  //   example 5: _php_cast_float(3.14)
  //   returns 5: 3.14
  //   example 6: _php_cast_float('')
  //   returns 6: 0
  //   example 7: _php_cast_float('0')
  //   returns 7: 0
  //   example 8: _php_cast_float('abc')
  //   returns 8: 0
  //   example 9: _php_cast_float(null)
  //   returns 9: 0
  //  example 10: _php_cast_float(undefined)
  //  returns 10: 0
  //  example 11: _php_cast_float('123abc')
  //  returns 11: 123
  //  example 12: _php_cast_float('123e4')
  //  returns 12: 1230000
  //  example 13: _php_cast_float(0x200000001)
  //  returns 13: 8589934593
  //  example 14: _php_cast_float('3.14abc')
  //  returns 14: 3.14

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'number':
      return value;
    case 'string':
      return parseFloat(value) || 0;
    case 'boolean':
    // fall through
    default:
      // PHP docs state, that for types other than string
      // conversion is {input type}->int->float
      return __webpack_require__(/*! ./_php_cast_int */ "../node_modules/locutus/php/_helpers/_php_cast_int.js")(value);
  }
};
//# sourceMappingURL=_php_cast_float.js.map

/***/ }),

/***/ "../node_modules/locutus/php/_helpers/_php_cast_int.js":
/*!*************************************************************!*\
  !*** ../node_modules/locutus/php/_helpers/_php_cast_int.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _php_cast_int(value) {
  // original by: Rafał Kukawski
  //   example 1: _php_cast_int(false)
  //   returns 1: 0
  //   example 2: _php_cast_int(true)
  //   returns 2: 1
  //   example 3: _php_cast_int(0)
  //   returns 3: 0
  //   example 4: _php_cast_int(1)
  //   returns 4: 1
  //   example 5: _php_cast_int(3.14)
  //   returns 5: 3
  //   example 6: _php_cast_int('')
  //   returns 6: 0
  //   example 7: _php_cast_int('0')
  //   returns 7: 0
  //   example 8: _php_cast_int('abc')
  //   returns 8: 0
  //   example 9: _php_cast_int(null)
  //   returns 9: 0
  //  example 10: _php_cast_int(undefined)
  //  returns 10: 0
  //  example 11: _php_cast_int('123abc')
  //  returns 11: 123
  //  example 12: _php_cast_int('123e4')
  //  returns 12: 123
  //  example 13: _php_cast_int(0x200000001)
  //  returns 13: 8589934593

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'number':
      if (isNaN(value) || !isFinite(value)) {
        // from PHP 7, NaN and Infinity are casted to 0
        return 0;
      }

      return value < 0 ? Math.ceil(value) : Math.floor(value);
    case 'string':
      return parseInt(value, 10) || 0;
    case 'boolean':
    // fall through
    default:
      // Behaviour for types other than float, string, boolean
      // is undefined and can change any time.
      // To not invent complex logic
      // that mimics PHP 7.0 behaviour
      // casting value->bool->number is used
      return +!!value;
  }
};
//# sourceMappingURL=_php_cast_int.js.map

/***/ }),

/***/ "../node_modules/locutus/php/datetime/date.js":
/*!****************************************************!*\
  !*** ../node_modules/locutus/php/datetime/date.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function date(format, timestamp) {
  //  discuss at: https://locutus.io/php/date/
  // original by: Carlos R. L. Rodrigues (https://www.jsfromhell.com)
  // original by: gettimeofday
  //    parts by: Peter-Paul Koch (https://www.quirksmode.org/js/beat.html)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: MeEtc (https://yass.meetcweb.com)
  // improved by: Brad Touesnard
  // improved by: Tim Wiel
  // improved by: Bryan Elliott
  // improved by: David Randall
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Brett Zamir (https://brett-zamir.me)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Thomas Beaucourt (https://www.webapp.fr)
  // improved by: JT
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Rafał Kukawski (https://blog.kukawski.pl)
  // improved by: Theriault (https://github.com/Theriault)
  //    input by: Brett Zamir (https://brett-zamir.me)
  //    input by: majak
  //    input by: Alex
  //    input by: Martin
  //    input by: Alex Wilson
  //    input by: Haravikk
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: majak
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  // bugfixed by: omid (https://locutus.io/php/380:380#comment_137122)
  // bugfixed by: Chris (https://www.devotis.nl/)
  //      note 1: Uses global: locutus to store the default timezone
  //      note 1: Although the function potentially allows timezone info
  //      note 1: (see notes), it currently does not set
  //      note 1: per a timezone specified by date_default_timezone_set(). Implementers might use
  //      note 1: $locutus.currentTimezoneOffset and
  //      note 1: $locutus.currentTimezoneDST set by that function
  //      note 1: in order to adjust the dates in this function
  //      note 1: (or our other date functions!) accordingly
  //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
  //   returns 1: '07:09:40 m is month'
  //   example 2: date('F j, Y, g:i a', 1062462400)
  //   returns 2: 'September 2, 2003, 12:26 am'
  //   example 3: date('Y W o', 1062462400)
  //   returns 3: '2003 36 2003'
  //   example 4: var $x = date('Y m d', (new Date()).getTime() / 1000)
  //   example 4: $x = $x + ''
  //   example 4: var $result = $x.length // 2009 01 09
  //   returns 4: 10
  //   example 5: date('W', 1104534000)
  //   returns 5: '52'
  //   example 6: date('B t', 1104534000)
  //   returns 6: '999 31'
  //   example 7: date('W U', 1293750000.82); // 2010-12-31
  //   returns 7: '52 1293750000'
  //   example 8: date('W', 1293836400); // 2011-01-01
  //   returns 8: '52'
  //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
  //   returns 9: '52 2011-01-02'
  //        test: skip-1 skip-2 skip-5

  var jsdate = void 0,
      f = void 0;
  // Keep this here (works, but for code commented-out below for file size reasons)
  // var tal= [];
  var txtWords = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // trailing backslash -> (dropped)
  // a backslash followed by any character (including backslash) -> the character
  // empty string -> empty string
  var formatChr = /\\?(.?)/gi;
  var formatChrCb = function formatChrCb(t, s) {
    return f[t] ? f[t]() : s;
  };
  var _pad = function _pad(n, c) {
    n = String(n);
    while (n.length < c) {
      n = '0' + n;
    }
    return n;
  };
  f = {
    // Day
    d: function d() {
      // Day of month w/leading 0; 01..31
      return _pad(f.j(), 2);
    },
    D: function D() {
      // Shorthand day name; Mon...Sun
      return f.l().slice(0, 3);
    },
    j: function j() {
      // Day of month; 1..31
      return jsdate.getDate();
    },
    l: function l() {
      // Full day name; Monday...Sunday
      return txtWords[f.w()] + 'day';
    },
    N: function N() {
      // ISO-8601 day of week; 1[Mon]..7[Sun]
      return f.w() || 7;
    },
    S: function S() {
      // Ordinal suffix for day of month; st, nd, rd, th
      var j = f.j();
      var i = j % 10;
      if (i <= 3 && parseInt(j % 100 / 10, 10) === 1) {
        i = 0;
      }
      return ['st', 'nd', 'rd'][i - 1] || 'th';
    },
    w: function w() {
      // Day of week; 0[Sun]..6[Sat]
      return jsdate.getDay();
    },
    z: function z() {
      // Day of year; 0..365
      var a = new Date(f.Y(), f.n() - 1, f.j());
      var b = new Date(f.Y(), 0, 1);
      return Math.round((a - b) / 864e5);
    },

    // Week
    W: function W() {
      // ISO-8601 week number
      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
      var b = new Date(a.getFullYear(), 0, 4);
      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
    },

    // Month
    F: function F() {
      // Full month name; January...December
      return txtWords[6 + f.n()];
    },
    m: function m() {
      // Month w/leading 0; 01...12
      return _pad(f.n(), 2);
    },
    M: function M() {
      // Shorthand month name; Jan...Dec
      return f.F().slice(0, 3);
    },
    n: function n() {
      // Month; 1...12
      return jsdate.getMonth() + 1;
    },
    t: function t() {
      // Days in month; 28...31
      return new Date(f.Y(), f.n(), 0).getDate();
    },

    // Year
    L: function L() {
      // Is leap year?; 0 or 1
      var j = f.Y();
      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
    },
    o: function o() {
      // ISO-8601 year
      var n = f.n();
      var W = f.W();
      var Y = f.Y();
      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
    },
    Y: function Y() {
      // Full year; e.g. 1980...2010
      return jsdate.getFullYear();
    },
    y: function y() {
      // Last two digits of year; 00...99
      return f.Y().toString().slice(-2);
    },

    // Time
    a: function a() {
      // am or pm
      return jsdate.getHours() > 11 ? 'pm' : 'am';
    },
    A: function A() {
      // AM or PM
      return f.a().toUpperCase();
    },
    B: function B() {
      // Swatch Internet time; 000..999
      var H = jsdate.getUTCHours() * 36e2;
      // Hours
      var i = jsdate.getUTCMinutes() * 60;
      // Minutes
      // Seconds
      var s = jsdate.getUTCSeconds();
      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
    },
    g: function g() {
      // 12-Hours; 1..12
      return f.G() % 12 || 12;
    },
    G: function G() {
      // 24-Hours; 0..23
      return jsdate.getHours();
    },
    h: function h() {
      // 12-Hours w/leading 0; 01..12
      return _pad(f.g(), 2);
    },
    H: function H() {
      // 24-Hours w/leading 0; 00..23
      return _pad(f.G(), 2);
    },
    i: function i() {
      // Minutes w/leading 0; 00..59
      return _pad(jsdate.getMinutes(), 2);
    },
    s: function s() {
      // Seconds w/leading 0; 00..59
      return _pad(jsdate.getSeconds(), 2);
    },
    u: function u() {
      // Microseconds; 000000-999000
      return _pad(jsdate.getMilliseconds() * 1000, 6);
    },

    // Timezone
    e: function e() {
      // Timezone identifier; e.g. Atlantic/Azores, ...
      // The following works, but requires inclusion of the very large
      // timezone_abbreviations_list() function.
      /*              return that.date_default_timezone_get();
       */
      var msg = 'Not supported (see source code of date() for timezone on how to add support)';
      throw new Error(msg);
    },
    I: function I() {
      // DST observed?; 0 or 1
      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
      // If they are not equal, then DST is observed.
      var a = new Date(f.Y(), 0);
      // Jan 1
      var c = Date.UTC(f.Y(), 0);
      // Jan 1 UTC
      var b = new Date(f.Y(), 6);
      // Jul 1
      // Jul 1 UTC
      var d = Date.UTC(f.Y(), 6);
      return a - c !== b - d ? 1 : 0;
    },
    O: function O() {
      // Difference to GMT in hour format; e.g. +0200
      var tzo = jsdate.getTimezoneOffset();
      var a = Math.abs(tzo);
      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
    },
    P: function P() {
      // Difference to GMT w/colon; e.g. +02:00
      var O = f.O();
      return O.substr(0, 3) + ':' + O.substr(3, 2);
    },
    T: function T() {
      // The following works, but requires inclusion of the very
      // large timezone_abbreviations_list() function.
      /*              var abbr, i, os, _default;
      if (!tal.length) {
        tal = that.timezone_abbreviations_list();
      }
      if ($locutus && $locutus.default_timezone) {
        _default = $locutus.default_timezone;
        for (abbr in tal) {
          for (i = 0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].timezone_id === _default) {
              return abbr.toUpperCase();
            }
          }
        }
      }
      for (abbr in tal) {
        for (i = 0; i < tal[abbr].length; i++) {
          os = -jsdate.getTimezoneOffset() * 60;
          if (tal[abbr][i].offset === os) {
            return abbr.toUpperCase();
          }
        }
      }
      */
      return 'UTC';
    },
    Z: function Z() {
      // Timezone offset in seconds (-43200...50400)
      return -jsdate.getTimezoneOffset() * 60;
    },

    // Full Date/Time
    c: function c() {
      // ISO-8601 date.
      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
    },
    r: function r() {
      // RFC 2822
      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
    },
    U: function U() {
      // Seconds since UNIX epoch
      return jsdate / 1000 | 0;
    }
  };

  var _date = function _date(format, timestamp) {
    jsdate = timestamp === undefined ? new Date() // Not provided
    : timestamp instanceof Date ? new Date(timestamp) // JS Date()
    : new Date(timestamp * 1000); // UNIX timestamp (auto-convert to int)
    return format.replace(formatChr, formatChrCb);
  };

  return _date(format, timestamp);
};
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "../node_modules/locutus/php/datetime/strtotime.js":
/*!*********************************************************!*\
  !*** ../node_modules/locutus/php/datetime/strtotime.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


var reSpace = '[ \\t]+';
var reSpaceOpt = '[ \\t]*';
var reMeridian = '(?:([ap])\\.?m\\.?([\\t ]|$))';
var reHour24 = '(2[0-4]|[01]?[0-9])';
var reHour24lz = '([01][0-9]|2[0-4])';
var reHour12 = '(0?[1-9]|1[0-2])';
var reMinute = '([0-5]?[0-9])';
var reMinutelz = '([0-5][0-9])';
var reSecond = '(60|[0-5]?[0-9])';
var reSecondlz = '(60|[0-5][0-9])';
var reFrac = '(?:\\.([0-9]+))';

var reDayfull = 'sunday|monday|tuesday|wednesday|thursday|friday|saturday';
var reDayabbr = 'sun|mon|tue|wed|thu|fri|sat';
var reDaytext = reDayfull + '|' + reDayabbr + '|weekdays?';

var reReltextnumber = 'first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth';
var reReltexttext = 'next|last|previous|this';
var reReltextunit = '(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|' + reDaytext;

var reYear = '([0-9]{1,4})';
var reYear2 = '([0-9]{2})';
var reYear4 = '([0-9]{4})';
var reYear4withSign = '([+-]?[0-9]{4})';
var reMonth = '(1[0-2]|0?[0-9])';
var reMonthlz = '(0[0-9]|1[0-2])';
var reDay = '(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)';
var reDaylz = '(0[0-9]|[1-2][0-9]|3[01])';

var reMonthFull = 'january|february|march|april|may|june|july|august|september|october|november|december';
var reMonthAbbr = 'jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec';
var reMonthroman = 'i[vx]|vi{0,3}|xi{0,2}|i{1,3}';
var reMonthText = '(' + reMonthFull + '|' + reMonthAbbr + '|' + reMonthroman + ')';

var reTzCorrection = '((?:GMT)?([+-])' + reHour24 + ':?' + reMinute + '?)';
var reTzAbbr = '\\(?([a-zA-Z]{1,6})\\)?';
var reDayOfYear = '(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])';
var reWeekOfYear = '(0[1-9]|[1-4][0-9]|5[0-3])';

var reDateNoYear = reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]*';

function processMeridian(hour, meridian) {
  meridian = meridian && meridian.toLowerCase();

  switch (meridian) {
    case 'a':
      hour += hour === 12 ? -12 : 0;
      break;
    case 'p':
      hour += hour !== 12 ? 12 : 0;
      break;
  }

  return hour;
}

function processYear(yearStr) {
  var year = +yearStr;

  if (yearStr.length < 4 && year < 100) {
    year += year < 70 ? 2000 : 1900;
  }

  return year;
}

function lookupMonth(monthStr) {
  return {
    jan: 0,
    january: 0,
    i: 0,
    feb: 1,
    february: 1,
    ii: 1,
    mar: 2,
    march: 2,
    iii: 2,
    apr: 3,
    april: 3,
    iv: 3,
    may: 4,
    v: 4,
    jun: 5,
    june: 5,
    vi: 5,
    jul: 6,
    july: 6,
    vii: 6,
    aug: 7,
    august: 7,
    viii: 7,
    sep: 8,
    sept: 8,
    september: 8,
    ix: 8,
    oct: 9,
    october: 9,
    x: 9,
    nov: 10,
    november: 10,
    xi: 10,
    dec: 11,
    december: 11,
    xii: 11
  }[monthStr.toLowerCase()];
}

function lookupWeekday(dayStr) {
  var desiredSundayNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var dayNumbers = {
    mon: 1,
    monday: 1,
    tue: 2,
    tuesday: 2,
    wed: 3,
    wednesday: 3,
    thu: 4,
    thursday: 4,
    fri: 5,
    friday: 5,
    sat: 6,
    saturday: 6,
    sun: 0,
    sunday: 0
  };

  return dayNumbers[dayStr.toLowerCase()] || desiredSundayNumber;
}

function lookupRelative(relText) {
  var relativeNumbers = {
    last: -1,
    previous: -1,
    this: 0,
    first: 1,
    next: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eight: 8,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12
  };

  var relativeBehavior = {
    this: 1
  };

  var relTextLower = relText.toLowerCase();

  return {
    amount: relativeNumbers[relTextLower],
    behavior: relativeBehavior[relTextLower] || 0
  };
}

function processTzCorrection(tzOffset, oldValue) {
  var reTzCorrectionLoose = /(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i;
  tzOffset = tzOffset && tzOffset.match(reTzCorrectionLoose);

  if (!tzOffset) {
    return oldValue;
  }

  var sign = tzOffset[1] === '-' ? -1 : 1;
  var hours = +tzOffset[2];
  var minutes = +tzOffset[4];

  if (!tzOffset[4] && !tzOffset[3]) {
    minutes = Math.floor(hours % 100);
    hours = Math.floor(hours / 100);
  }

  // timezone offset in seconds
  return sign * (hours * 60 + minutes) * 60;
}

// tz abbrevation : tz offset in seconds
var tzAbbrOffsets = {
  acdt: 37800,
  acst: 34200,
  addt: -7200,
  adt: -10800,
  aedt: 39600,
  aest: 36000,
  ahdt: -32400,
  ahst: -36000,
  akdt: -28800,
  akst: -32400,
  amt: -13840,
  apt: -10800,
  ast: -14400,
  awdt: 32400,
  awst: 28800,
  awt: -10800,
  bdst: 7200,
  bdt: -36000,
  bmt: -14309,
  bst: 3600,
  cast: 34200,
  cat: 7200,
  cddt: -14400,
  cdt: -18000,
  cemt: 10800,
  cest: 7200,
  cet: 3600,
  cmt: -15408,
  cpt: -18000,
  cst: -21600,
  cwt: -18000,
  chst: 36000,
  dmt: -1521,
  eat: 10800,
  eddt: -10800,
  edt: -14400,
  eest: 10800,
  eet: 7200,
  emt: -26248,
  ept: -14400,
  est: -18000,
  ewt: -14400,
  ffmt: -14660,
  fmt: -4056,
  gdt: 39600,
  gmt: 0,
  gst: 36000,
  hdt: -34200,
  hkst: 32400,
  hkt: 28800,
  hmt: -19776,
  hpt: -34200,
  hst: -36000,
  hwt: -34200,
  iddt: 14400,
  idt: 10800,
  imt: 25025,
  ist: 7200,
  jdt: 36000,
  jmt: 8440,
  jst: 32400,
  kdt: 36000,
  kmt: 5736,
  kst: 30600,
  lst: 9394,
  mddt: -18000,
  mdst: 16279,
  mdt: -21600,
  mest: 7200,
  met: 3600,
  mmt: 9017,
  mpt: -21600,
  msd: 14400,
  msk: 10800,
  mst: -25200,
  mwt: -21600,
  nddt: -5400,
  ndt: -9052,
  npt: -9000,
  nst: -12600,
  nwt: -9000,
  nzdt: 46800,
  nzmt: 41400,
  nzst: 43200,
  pddt: -21600,
  pdt: -25200,
  pkst: 21600,
  pkt: 18000,
  plmt: 25590,
  pmt: -13236,
  ppmt: -17340,
  ppt: -25200,
  pst: -28800,
  pwt: -25200,
  qmt: -18840,
  rmt: 5794,
  sast: 7200,
  sdmt: -16800,
  sjmt: -20173,
  smt: -13884,
  sst: -39600,
  tbmt: 10751,
  tmt: 12344,
  uct: 0,
  utc: 0,
  wast: 7200,
  wat: 3600,
  wemt: 7200,
  west: 3600,
  wet: 0,
  wib: 25200,
  wita: 28800,
  wit: 32400,
  wmt: 5040,
  yddt: -25200,
  ydt: -28800,
  ypt: -28800,
  yst: -32400,
  ywt: -28800,
  a: 3600,
  b: 7200,
  c: 10800,
  d: 14400,
  e: 18000,
  f: 21600,
  g: 25200,
  h: 28800,
  i: 32400,
  k: 36000,
  l: 39600,
  m: 43200,
  n: -3600,
  o: -7200,
  p: -10800,
  q: -14400,
  r: -18000,
  s: -21600,
  t: -25200,
  u: -28800,
  v: -32400,
  w: -36000,
  x: -39600,
  y: -43200,
  z: 0
};

var formats = {
  yesterday: {
    regex: /^yesterday/i,
    name: 'yesterday',
    callback: function callback() {
      this.rd -= 1;
      return this.resetTime();
    }
  },

  now: {
    regex: /^now/i,
    name: 'now'
    // do nothing
  },

  noon: {
    regex: /^noon/i,
    name: 'noon',
    callback: function callback() {
      return this.resetTime() && this.time(12, 0, 0, 0);
    }
  },

  midnightOrToday: {
    regex: /^(midnight|today)/i,
    name: 'midnight | today',
    callback: function callback() {
      return this.resetTime();
    }
  },

  tomorrow: {
    regex: /^tomorrow/i,
    name: 'tomorrow',
    callback: function callback() {
      this.rd += 1;
      return this.resetTime();
    }
  },

  timestamp: {
    regex: /^@(-?\d+)/i,
    name: 'timestamp',
    callback: function callback(match, timestamp) {
      this.rs += +timestamp;
      this.y = 1970;
      this.m = 0;
      this.d = 1;
      this.dates = 0;

      return this.resetTime() && this.zone(0);
    }
  },

  firstOrLastDay: {
    regex: /^(first|last) day of/i,
    name: 'firstdayof | lastdayof',
    callback: function callback(match, day) {
      if (day.toLowerCase() === 'first') {
        this.firstOrLastDayOfMonth = 1;
      } else {
        this.firstOrLastDayOfMonth = -1;
      }
    }
  },

  backOrFrontOf: {
    regex: RegExp('^(back|front) of ' + reHour24 + reSpaceOpt + reMeridian + '?', 'i'),
    name: 'backof | frontof',
    callback: function callback(match, side, hours, meridian) {
      var back = side.toLowerCase() === 'back';
      var hour = +hours;
      var minute = 15;

      if (!back) {
        hour -= 1;
        minute = 45;
      }

      hour = processMeridian(hour, meridian);

      return this.resetTime() && this.time(hour, minute, 0, 0);
    }
  },

  weekdayOf: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reDayfull + '|' + reDayabbr + ')' + reSpace + 'of', 'i'),
    name: 'weekdayof'
    // todo
  },

  mssqltime: {
    regex: RegExp('^' + reHour12 + ':' + reMinutelz + ':' + reSecondlz + '[:.]([0-9]+)' + reMeridian, 'i'),
    name: 'mssqltime',
    callback: function callback(match, hour, minute, second, frac, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, +frac.substr(0, 3));
    }
  },

  oracledate: {
    regex: /^(\d{2})-([A-Z]{3})-(\d{2})$/i,
    name: 'd-M-y',
    callback: function callback(match, day, monthText, year) {
      var month = {
        JAN: 0,
        FEB: 1,
        MAR: 2,
        APR: 3,
        MAY: 4,
        JUN: 5,
        JUL: 6,
        AUG: 7,
        SEP: 8,
        OCT: 9,
        NOV: 10,
        DEC: 11
      }[monthText.toUpperCase()];
      return this.ymd(2000 + parseInt(year, 10), month, parseInt(day, 10));
    }
  },

  timeLong12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'timelong12',
    callback: function callback(match, hour, minute, second, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  timeShort12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'timeshort12',
    callback: function callback(match, hour, minute, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  },

  timeTiny12: {
    regex: RegExp('^' + reHour12 + reSpaceOpt + reMeridian, 'i'),
    name: 'timetiny12',
    callback: function callback(match, hour, meridian) {
      return this.time(processMeridian(+hour, meridian), 0, 0, 0);
    }
  },

  soap: {
    regex: RegExp('^' + reYear4 + '-' + reMonthlz + '-' + reDaylz + 'T' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reFrac + reTzCorrection + '?', 'i'),
    name: 'soap',
    callback: function callback(match, year, month, day, hour, minute, second, frac, tzCorrection) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, +frac.substr(0, 3)) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  wddx: {
    regex: RegExp('^' + reYear4 + '-' + reMonth + '-' + reDay + 'T' + reHour24 + ':' + reMinute + ':' + reSecond),
    name: 'wddx',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  exif: {
    regex: RegExp('^' + reYear4 + ':' + reMonthlz + ':' + reDaylz + ' ' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz, 'i'),
    name: 'exif',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpc: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + 'T' + reHour24 + ':' + reMinutelz + ':' + reSecondlz),
    name: 'xmlrpc',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpcNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + '[Tt]' + reHour24 + reMinutelz + reSecondlz),
    name: 'xmlrpcnocolon',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  clf: {
    regex: RegExp('^' + reDay + '/(' + reMonthAbbr + ')/' + reYear4 + ':' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reSpace + reTzCorrection, 'i'),
    name: 'clf',
    callback: function callback(match, day, month, year, hour, minute, second, tzCorrection) {
      return this.ymd(+year, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  iso8601long: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond + reFrac, 'i'),
    name: 'iso8601long',
    callback: function callback(match, hour, minute, second, frac) {
      return this.time(+hour, +minute, +second, +frac.substr(0, 3));
    }
  },

  dateTextual: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]+' + reYear, 'i'),
    name: 'datetextual',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  pointedDate4: {
    regex: RegExp('^' + reDay + '[.\\t-]' + reMonth + '[.-]' + reYear4),
    name: 'pointeddate4',
    callback: function callback(match, day, month, year) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pointedDate2: {
    regex: RegExp('^' + reDay + '[.\\t]' + reMonth + '\\.' + reYear2),
    name: 'pointeddate2',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  timeLong24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond),
    name: 'timelong24',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  dateNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz),
    name: 'datenocolon',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pgydotd: {
    regex: RegExp('^' + reYear4 + '\\.?' + reDayOfYear),
    name: 'pgydotd',
    callback: function callback(match, year, day) {
      return this.ymd(+year, 0, +day);
    }
  },

  timeShort24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'timeshort24',
    callback: function callback(match, hour, minute) {
      return this.time(+hour, +minute, 0, 0);
    }
  },

  iso8601noColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz + reSecondlz, 'i'),
    name: 'iso8601nocolon',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  iso8601dateSlash: {
    // eventhough the trailing slash is optional in PHP
    // here it's mandatory and inputs without the slash
    // are handled by dateslash
    regex: RegExp('^' + reYear4 + '/' + reMonthlz + '/' + reDaylz + '/'),
    name: 'iso8601dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  dateSlash: {
    regex: RegExp('^' + reYear4 + '/' + reMonth + '/' + reDay),
    name: 'dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  american: {
    regex: RegExp('^' + reMonth + '/' + reDay + '/' + reYear),
    name: 'american',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  americanShort: {
    regex: RegExp('^' + reMonth + '/' + reDay),
    name: 'americanshort',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, month - 1, +day);
    }
  },

  gnuDateShortOrIso8601date2: {
    // iso8601date2 is complete subset of gnudateshort
    regex: RegExp('^' + reYear + '-' + reMonth + '-' + reDay),
    name: 'gnudateshort | iso8601date2',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  iso8601date4: {
    regex: RegExp('^' + reYear4withSign + '-' + reMonthlz + '-' + reDaylz),
    name: 'iso8601date4',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  gnuNoColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz, 'i'),
    name: 'gnunocolon',
    callback: function callback(match, hour, minute) {
      // this rule is a special case
      // if time was already set once by any preceding rule, it sets the captured value as year
      switch (this.times) {
        case 0:
          return this.time(+hour, +minute, 0, this.f);
        case 1:
          this.y = hour * 100 + +minute;
          this.times++;

          return true;
        default:
          return false;
      }
    }
  },

  gnuDateShorter: {
    regex: RegExp('^' + reYear4 + '-' + reMonth),
    name: 'gnudateshorter',
    callback: function callback(match, year, month) {
      return this.ymd(+year, month - 1, 1);
    }
  },

  pgTextReverse: {
    // note: allowed years are from 32-9999
    // years below 32 should be treated as days in datefull
    regex: RegExp('^' + '(\\d{3,4}|[4-9]\\d|3[2-9])-(' + reMonthAbbr + ')-' + reDaylz, 'i'),
    name: 'pgtextreverse',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateFull: {
    regex: RegExp('^' + reDay + '[ \\t.-]*' + reMonthText + '[ \\t.-]*' + reYear, 'i'),
    name: 'datefull',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoDay: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reYear4, 'i'),
    name: 'datenoday',
    callback: function callback(match, month, year) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  dateNoDayRev: {
    regex: RegExp('^' + reYear4 + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenodayrev',
    callback: function callback(match, year, month) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  pgTextShort: {
    regex: RegExp('^(' + reMonthAbbr + ')-' + reDaylz + '-' + reYear, 'i'),
    name: 'pgtextshort',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoYear: {
    regex: RegExp('^' + reDateNoYear, 'i'),
    name: 'datenoyear',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  dateNoYearRev: {
    regex: RegExp('^' + reDay + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenoyearrev',
    callback: function callback(match, day, month) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  isoWeekDay: {
    regex: RegExp('^' + reYear4 + '-?W' + reWeekOfYear + '(?:-?([0-7]))?'),
    name: 'isoweekday | isoweek',
    callback: function callback(match, year, week, day) {
      day = day ? +day : 1;

      if (!this.ymd(+year, 0, 1)) {
        return false;
      }

      // get day of week for Jan 1st
      var dayOfWeek = new Date(this.y, this.m, this.d).getDay();

      // and use the day to figure out the offset for day 1 of week 1
      dayOfWeek = 0 - (dayOfWeek > 4 ? dayOfWeek - 7 : dayOfWeek);

      this.rd += dayOfWeek + (week - 1) * 7 + day;
    }
  },

  relativeText: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reReltextunit + ')', 'i'),
    name: 'relativetext',
    callback: function callback(match, relValue, relUnit) {
      // todo: implement handling of 'this time-unit'
      // eslint-disable-next-line no-unused-vars
      var _lookupRelative = lookupRelative(relValue),
          amount = _lookupRelative.amount,
          behavior = _lookupRelative.behavior;

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':
        case 'monday':
        case 'tue':
        case 'tuesday':
        case 'wed':
        case 'wednesday':
        case 'thu':
        case 'thursday':
        case 'fri':
        case 'friday':
        case 'sat':
        case 'saturday':
        case 'sun':
        case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
        case 'weekday':
        case 'weekdays':
          // todo
          break;
      }
    }
  },

  relative: {
    regex: RegExp('^([+-]*)[ \\t]*(\\d+)' + reSpaceOpt + '(' + reReltextunit + '|week)', 'i'),
    name: 'relative',
    callback: function callback(match, signs, relValue, relUnit) {
      var minuses = signs.replace(/[^-]/g, '').length;

      var amount = +relValue * Math.pow(-1, minuses);

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':
        case 'monday':
        case 'tue':
        case 'tuesday':
        case 'wed':
        case 'wednesday':
        case 'thu':
        case 'thursday':
        case 'fri':
        case 'friday':
        case 'sat':
        case 'saturday':
        case 'sun':
        case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
        case 'weekday':
        case 'weekdays':
          // todo
          break;
      }
    }
  },

  dayText: {
    regex: RegExp('^(' + reDaytext + ')', 'i'),
    name: 'daytext',
    callback: function callback(match, dayText) {
      this.resetTime();
      this.weekday = lookupWeekday(dayText, 0);

      if (this.weekdayBehavior !== 2) {
        this.weekdayBehavior = 1;
      }
    }
  },

  relativeTextWeek: {
    regex: RegExp('^(' + reReltexttext + ')' + reSpace + 'week', 'i'),
    name: 'relativetextweek',
    callback: function callback(match, relText) {
      this.weekdayBehavior = 2;

      switch (relText.toLowerCase()) {
        case 'this':
          this.rd += 0;
          break;
        case 'next':
          this.rd += 7;
          break;
        case 'last':
        case 'previous':
          this.rd -= 7;
          break;
      }

      if (isNaN(this.weekday)) {
        this.weekday = 1;
      }
    }
  },

  monthFullOrMonthAbbr: {
    regex: RegExp('^(' + reMonthFull + '|' + reMonthAbbr + ')', 'i'),
    name: 'monthfull | monthabbr',
    callback: function callback(match, month) {
      return this.ymd(this.y, lookupMonth(month), this.d);
    }
  },

  tzCorrection: {
    regex: RegExp('^' + reTzCorrection, 'i'),
    name: 'tzcorrection',
    callback: function callback(tzCorrection) {
      return this.zone(processTzCorrection(tzCorrection));
    }
  },

  tzAbbr: {
    regex: RegExp('^' + reTzAbbr),
    name: 'tzabbr',
    callback: function callback(match, abbr) {
      var offset = tzAbbrOffsets[abbr.toLowerCase()];

      if (isNaN(offset)) {
        return false;
      }

      return this.zone(offset);
    }
  },

  ago: {
    regex: /^ago/i,
    name: 'ago',
    callback: function callback() {
      this.ry = -this.ry;
      this.rm = -this.rm;
      this.rd = -this.rd;
      this.rh = -this.rh;
      this.ri = -this.ri;
      this.rs = -this.rs;
      this.rf = -this.rf;
    }
  },

  year4: {
    regex: RegExp('^' + reYear4),
    name: 'year4',
    callback: function callback(match, year) {
      this.y = +year;
      return true;
    }
  },

  whitespace: {
    regex: /^[ .,\t]+/,
    name: 'whitespace'
    // do nothing
  },

  dateShortWithTimeLong: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond, 'i'),
    name: 'dateshortwithtimelong',
    callback: function callback(match, month, day, hour, minute, second) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  dateShortWithTimeLong12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimelong12',
    callback: function callback(match, month, day, hour, minute, second, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  dateShortWithTimeShort: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'dateshortwithtimeshort',
    callback: function callback(match, month, day, hour, minute) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, 0, 0);
    }
  },

  dateShortWithTimeShort12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimeshort12',
    callback: function callback(match, month, day, hour, minute, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  }
};

var resultProto = {
  // date
  y: NaN,
  m: NaN,
  d: NaN,
  // time
  h: NaN,
  i: NaN,
  s: NaN,
  f: NaN,

  // relative shifts
  ry: 0,
  rm: 0,
  rd: 0,
  rh: 0,
  ri: 0,
  rs: 0,
  rf: 0,

  // weekday related shifts
  weekday: NaN,
  weekdayBehavior: 0,

  // first or last day of month
  // 0 none, 1 first, -1 last
  firstOrLastDayOfMonth: 0,

  // timezone correction in minutes
  z: NaN,

  // counters
  dates: 0,
  times: 0,
  zones: 0,

  // helper functions
  ymd: function ymd(y, m, d) {
    if (this.dates > 0) {
      return false;
    }

    this.dates++;
    this.y = y;
    this.m = m;
    this.d = d;
    return true;
  },
  time: function time(h, i, s, f) {
    if (this.times > 0) {
      return false;
    }

    this.times++;
    this.h = h;
    this.i = i;
    this.s = s;
    this.f = f;

    return true;
  },
  resetTime: function resetTime() {
    this.h = 0;
    this.i = 0;
    this.s = 0;
    this.f = 0;
    this.times = 0;

    return true;
  },
  zone: function zone(minutes) {
    if (this.zones <= 1) {
      this.zones++;
      this.z = minutes;
      return true;
    }

    return false;
  },
  toDate: function toDate(relativeTo) {
    if (this.dates && !this.times) {
      this.h = this.i = this.s = this.f = 0;
    }

    // fill holes
    if (isNaN(this.y)) {
      this.y = relativeTo.getFullYear();
    }

    if (isNaN(this.m)) {
      this.m = relativeTo.getMonth();
    }

    if (isNaN(this.d)) {
      this.d = relativeTo.getDate();
    }

    if (isNaN(this.h)) {
      this.h = relativeTo.getHours();
    }

    if (isNaN(this.i)) {
      this.i = relativeTo.getMinutes();
    }

    if (isNaN(this.s)) {
      this.s = relativeTo.getSeconds();
    }

    if (isNaN(this.f)) {
      this.f = relativeTo.getMilliseconds();
    }

    // adjust special early
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        this.d = 1;
        break;
      case -1:
        this.d = 0;
        this.m += 1;
        break;
    }

    if (!isNaN(this.weekday)) {
      var date = new Date(relativeTo.getTime());
      date.setFullYear(this.y, this.m, this.d);
      date.setHours(this.h, this.i, this.s, this.f);

      var dow = date.getDay();

      if (this.weekdayBehavior === 2) {
        // To make "this week" work, where the current day of week is a "sunday"
        if (dow === 0 && this.weekday !== 0) {
          this.weekday = -6;
        }

        // To make "sunday this week" work, where the current day of week is not a "sunday"
        if (this.weekday === 0 && dow !== 0) {
          this.weekday = 7;
        }

        this.d -= dow;
        this.d += this.weekday;
      } else {
        var diff = this.weekday - dow;

        // some PHP magic
        if (this.rd < 0 && diff < 0 || this.rd >= 0 && diff <= -this.weekdayBehavior) {
          diff += 7;
        }

        if (this.weekday >= 0) {
          this.d += diff;
        } else {
          this.d -= 7 - (Math.abs(this.weekday) - dow);
        }

        this.weekday = NaN;
      }
    }

    // adjust relative
    this.y += this.ry;
    this.m += this.rm;
    this.d += this.rd;

    this.h += this.rh;
    this.i += this.ri;
    this.s += this.rs;
    this.f += this.rf;

    this.ry = this.rm = this.rd = 0;
    this.rh = this.ri = this.rs = this.rf = 0;

    var result = new Date(relativeTo.getTime());
    // since Date constructor treats years <= 99 as 1900+
    // it can't be used, thus this weird way
    result.setFullYear(this.y, this.m, this.d);
    result.setHours(this.h, this.i, this.s, this.f);

    // note: this is done twice in PHP
    // early when processing special relatives
    // and late
    // todo: check if the logic can be reduced
    // to just one time action
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        result.setDate(1);
        break;
      case -1:
        result.setMonth(result.getMonth() + 1, 0);
        break;
    }

    // adjust timezone
    if (!isNaN(this.z) && result.getTimezoneOffset() !== this.z) {
      result.setUTCFullYear(result.getFullYear(), result.getMonth(), result.getDate());

      result.setUTCHours(result.getHours(), result.getMinutes(), result.getSeconds() - this.z, result.getMilliseconds());
    }

    return result;
  }
};

module.exports = function strtotime(str, now) {
  //       discuss at: https://locutus.io/php/strtotime/
  //      original by: Caio Ariede (https://caioariede.com)
  //      improved by: Kevin van Zonneveld (https://kvz.io)
  //      improved by: Caio Ariede (https://caioariede.com)
  //      improved by: A. Matías Quezada (https://amatiasq.com)
  //      improved by: preuter
  //      improved by: Brett Zamir (https://brett-zamir.me)
  //      improved by: Mirko Faber
  //         input by: David
  //      bugfixed by: Wagner B. Soares
  //      bugfixed by: Artur Tchernychev
  //      bugfixed by: Stephan Bösch-Plepelits (https://github.com/plepe)
  // reimplemented by: Rafał Kukawski
  //           note 1: Examples all have a fixed timestamp to prevent
  //           note 1: tests to fail because of variable time(zones)
  //        example 1: strtotime('+1 day', 1129633200)
  //        returns 1: 1129719600
  //        example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
  //        returns 2: 1130425202
  //        example 3: strtotime('last month', 1129633200)
  //        returns 3: 1127041200
  //        example 4: strtotime('2009-05-04 08:30:00+00')
  //        returns 4: 1241425800
  //        example 5: strtotime('2009-05-04 08:30:00+02:00')
  //        returns 5: 1241418600
  //        example 6: strtotime('2009-05-04 08:30:00 YWT')
  //        returns 6: 1241454600
  //        example 7: strtotime('10-JUL-17')
  //        returns 7: 1499644800

  if (now == null) {
    now = Math.floor(Date.now() / 1000);
  }

  // the rule order is important
  // if multiple rules match, the longest match wins
  // if multiple rules match the same string, the first match wins
  var rules = [formats.yesterday, formats.now, formats.noon, formats.midnightOrToday, formats.tomorrow, formats.timestamp, formats.firstOrLastDay, formats.backOrFrontOf,
  // formats.weekdayOf, // not yet implemented
  formats.timeTiny12, formats.timeShort12, formats.timeLong12, formats.mssqltime, formats.oracledate, formats.timeShort24, formats.timeLong24, formats.iso8601long, formats.gnuNoColon, formats.iso8601noColon, formats.americanShort, formats.american, formats.iso8601date4, formats.iso8601dateSlash, formats.dateSlash, formats.gnuDateShortOrIso8601date2, formats.gnuDateShorter, formats.dateFull, formats.pointedDate4, formats.pointedDate2, formats.dateNoDay, formats.dateNoDayRev, formats.dateTextual, formats.dateNoYear, formats.dateNoYearRev, formats.dateNoColon, formats.xmlRpc, formats.xmlRpcNoColon, formats.soap, formats.wddx, formats.exif, formats.pgydotd, formats.isoWeekDay, formats.pgTextShort, formats.pgTextReverse, formats.clf, formats.year4, formats.ago, formats.dayText, formats.relativeTextWeek, formats.relativeText, formats.monthFullOrMonthAbbr, formats.tzCorrection, formats.tzAbbr, formats.dateShortWithTimeShort12, formats.dateShortWithTimeLong12, formats.dateShortWithTimeShort, formats.dateShortWithTimeLong, formats.relative, formats.whitespace];

  var result = Object.create(resultProto);

  while (str.length) {
    var longestMatch = null;
    var finalRule = null;

    for (var i = 0, l = rules.length; i < l; i++) {
      var format = rules[i];

      var match = str.match(format.regex);

      if (match) {
        if (!longestMatch || match[0].length > longestMatch[0].length) {
          longestMatch = match;
          finalRule = format;
        }
      }
    }

    if (!finalRule || finalRule.callback && finalRule.callback.apply(result, longestMatch) === false) {
      return false;
    }

    str = str.substr(longestMatch[0].length);
    finalRule = null;
    longestMatch = null;
  }

  return Math.floor(result.toDate(new Date(now * 1000)) / 1000);
};
//# sourceMappingURL=strtotime.js.map

/***/ }),

/***/ "../node_modules/locutus/php/math/max.js":
/*!***********************************************!*\
  !*** ../node_modules/locutus/php/math/max.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function max() {
  //  discuss at: https://locutus.io/php/max/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: max(1, 3, 5, 6, 7)
  //   returns 1: 7
  //   example 2: max([2, 4, 5])
  //   returns 2: 5
  //   example 3: max(0, 'hello')
  //   returns 3: 0
  //   example 4: max('hello', 0)
  //   returns 4: 'hello'
  //   example 5: max(-1, 'hello')
  //   returns 5: 'hello'
  //   example 6: max([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 5, 7]

  var ar = void 0;
  var retVal = void 0;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    } else {
      var _ar = [];
      for (var _i in obj) {
        if (obj.hasOwnProperty(_i)) {
          _ar.push(obj[_i]);
        }
      }
      return _ar;
    }
  };
  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to max()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for max()');
    }
    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for max()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];
  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === 1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "../node_modules/locutus/php/math/min.js":
/*!***********************************************!*\
  !*** ../node_modules/locutus/php/math/min.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function min() {
  //  discuss at: https://locutus.io/php/min/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: min(1, 3, 5, 6, 7)
  //   returns 1: 1
  //   example 2: min([2, 4, 5])
  //   returns 2: 2
  //   example 3: min(0, 'hello')
  //   returns 3: 0
  //   example 4: min('hello', 0)
  //   returns 4: 'hello'
  //   example 5: min(-1, 'hello')
  //   returns 5: -1
  //   example 6: min([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 4, 8]

  var ar = void 0;
  var retVal = void 0;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    }
    var ar = [];
    for (var _i in obj) {
      if (obj.hasOwnProperty(_i)) {
        ar.push(obj[_i]);
      }
    }
    return ar;
  };

  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to min()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for min()');
    }

    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for min()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];

  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === -1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "../node_modules/locutus/php/math/round.js":
/*!*************************************************!*\
  !*** ../node_modules/locutus/php/math/round.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function roundToInt(value, mode) {
  var tmp = Math.floor(Math.abs(value) + 0.5);

  if (mode === 'PHP_ROUND_HALF_DOWN' && value === tmp - 0.5 || mode === 'PHP_ROUND_HALF_EVEN' && value === 0.5 + 2 * Math.floor(tmp / 2) || mode === 'PHP_ROUND_HALF_ODD' && value === 0.5 + 2 * Math.floor(tmp / 2) - 1) {
    tmp -= 1;
  }

  return value < 0 ? -tmp : tmp;
}

module.exports = function round(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PHP_ROUND_HALF_UP';

  //  discuss at: https://locutus.io/php/round/
  // original by: Philip Peterson
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: T.Wild
  //  revised by: Rafał Kukawski (https://blog.kukawski.pl)
  //    input by: Greenseed
  //    input by: meo
  //    input by: William
  //    input by: Josep Sanz (https://www.ws3.es/)
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  //  revised by: Rafał Kukawski
  //   example 1: round(1241757, -3)
  //   returns 1: 1242000
  //   example 2: round(3.6)
  //   returns 2: 4
  //   example 3: round(2.835, 2)
  //   returns 3: 2.84
  //   example 4: round(1.1749999999999, 2)
  //   returns 4: 1.17
  //   example 5: round(58551.799999999996, 2)
  //   returns 5: 58551.8
  //   example 6: round(4096.485, 2)
  //   returns 6: 4096.49

  var floatCast = __webpack_require__(/*! ../_helpers/_php_cast_float */ "../node_modules/locutus/php/_helpers/_php_cast_float.js");
  var intCast = __webpack_require__(/*! ../_helpers/_php_cast_int */ "../node_modules/locutus/php/_helpers/_php_cast_int.js");
  var p = void 0;

  // the code is heavily based on the native PHP implementation
  // https://github.com/php/php-src/blob/PHP-7.4/ext/standard/math.c#L355

  value = floatCast(value);
  precision = intCast(precision);
  p = Math.pow(10, precision);

  if (isNaN(value) || !isFinite(value)) {
    return value;
  }

  // if value already integer and positive precision
  // then nothing to do, return early
  if (Math.trunc(value) === value && precision >= 0) {
    return value;
  }

  // PHP does a pre-rounding before rounding to desired precision
  // https://wiki.php.net/rfc/rounding#pre-rounding_to_the_value_s_precision_if_possible
  var preRoundPrecision = 14 - Math.floor(Math.log10(Math.abs(value)));

  if (preRoundPrecision > precision && preRoundPrecision - 15 < precision) {
    value = roundToInt(value * Math.pow(10, preRoundPrecision), mode);
    value /= Math.pow(10, Math.abs(precision - preRoundPrecision));
  } else {
    value *= p;
  }

  value = roundToInt(value, mode);

  return value / p;
};
//# sourceMappingURL=round.js.map

/***/ }),

/***/ "../node_modules/locutus/php/strings/sprintf.js":
/*!******************************************************!*\
  !*** ../node_modules/locutus/php/strings/sprintf.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function sprintf() {
  //  discuss at: https://locutus.io/php/sprintf/
  // original by: Ash Searle (https://hexmen.com/blog/)
  // improved by: Michael White (https://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Dj
  // improved by: Allidylls
  //    input by: Paulo Freitas
  //    input by: Brett Zamir (https://brett-zamir.me)
  // improved by: Rafał Kukawski (https://kukawski.pl)
  //   example 1: sprintf("%01.2f", 123.1)
  //   returns 1: '123.10'
  //   example 2: sprintf("[%10s]", 'monkey')
  //   returns 2: '[    monkey]'
  //   example 3: sprintf("[%'#10s]", 'monkey')
  //   returns 3: '[####monkey]'
  //   example 4: sprintf("%d", 123456789012345)
  //   returns 4: '123456789012345'
  //   example 5: sprintf('%-03s', 'E')
  //   returns 5: 'E00'
  //   example 6: sprintf('%+010d', 9)
  //   returns 6: '+000000009'
  //   example 7: sprintf('%+0\'@10d', 9)
  //   returns 7: '@@@@@@@@+9'
  //   example 8: sprintf('%.f', 3.14)
  //   returns 8: '3.140000'
  //   example 9: sprintf('%% %2$d', 1, 2)
  //   returns 9: '% 2'

  var regex = /%%|%(?:(\d+)\$)?((?:[-+#0 ]|'[\s\S])*)(\d+)?(?:\.(\d*))?([\s\S])/g;
  var args = arguments;
  var i = 0;
  var format = args[i++];

  var _pad = function _pad(str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }
    var padding = str.length >= len ? '' : new Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  var justify = function justify(value, prefix, leftJustify, minWidth, padChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      // when padding with zeros
      // on the left side
      // keep sign (+ or -) in front
      if (!leftJustify && padChar === '0') {
        value = [value.slice(0, prefix.length), _pad('', diff, '0', true), value.slice(prefix.length)].join('');
      } else {
        value = _pad(value, minWidth, padChar, leftJustify);
      }
    }
    return value;
  };

  var _formatBaseX = function _formatBaseX(value, base, leftJustify, minWidth, precision, padChar) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    value = _pad(number.toString(base), precision || 0, '0', false);
    return justify(value, '', leftJustify, minWidth, padChar);
  };

  // _formatString()
  var _formatString = function _formatString(value, leftJustify, minWidth, precision, customPadChar) {
    if (precision !== null && precision !== undefined) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, customPadChar);
  };

  // doFormat()
  var doFormat = function doFormat(substring, argIndex, modifiers, minWidth, precision, specifier) {
    var number = void 0,
        prefix = void 0,
        method = void 0,
        textTransform = void 0,
        value = void 0;

    if (substring === '%%') {
      return '%';
    }

    // parse modifiers
    var padChar = ' '; // pad with spaces by default
    var leftJustify = false;
    var positiveNumberPrefix = '';
    var j = void 0,
        l = void 0;

    for (j = 0, l = modifiers.length; j < l; j++) {
      switch (modifiers.charAt(j)) {
        case ' ':
        case '0':
          padChar = modifiers.charAt(j);
          break;
        case '+':
          positiveNumberPrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          if (j + 1 < l) {
            padChar = modifiers.charAt(j + 1);
            j++;
          }
          break;
      }
    }

    if (!minWidth) {
      minWidth = 0;
    } else {
      minWidth = +minWidth;
    }

    if (!isFinite(minWidth)) {
      throw new Error('Width must be finite');
    }

    if (!precision) {
      precision = specifier === 'd' ? 0 : 'fFeE'.indexOf(specifier) > -1 ? 6 : undefined;
    } else {
      precision = +precision;
    }

    if (argIndex && +argIndex === 0) {
      throw new Error('Argument number must be greater than zero');
    }

    if (argIndex && +argIndex >= args.length) {
      throw new Error('Too few arguments');
    }

    value = argIndex ? args[+argIndex] : args[i++];

    switch (specifier) {
      case '%':
        return '%';
      case 's':
        return _formatString(value + '', leftJustify, minWidth, precision, padChar);
      case 'c':
        return _formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, padChar);
      case 'b':
        return _formatBaseX(value, 2, leftJustify, minWidth, precision, padChar);
      case 'o':
        return _formatBaseX(value, 8, leftJustify, minWidth, precision, padChar);
      case 'x':
        return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar);
      case 'X':
        return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar).toUpperCase();
      case 'u':
        return _formatBaseX(value, 10, leftJustify, minWidth, precision, padChar);
      case 'i':
      case 'd':
        number = +value || 0;
        // Plain Math.round doesn't just truncate
        number = Math.round(number - number % 1);
        prefix = number < 0 ? '-' : positiveNumberPrefix;
        value = prefix + _pad(String(Math.abs(number)), precision, '0', false);

        if (leftJustify && padChar === '0') {
          // can't right-pad 0s on integers
          padChar = ' ';
        }
        return justify(value, prefix, leftJustify, minWidth, padChar);
      case 'e':
      case 'E':
      case 'f': // @todo: Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positiveNumberPrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(specifier.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(specifier) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, padChar)[textTransform]();
      default:
        // unknown specifier, consume that char and return empty
        return '';
    }
  };

  try {
    return format.replace(regex, doFormat);
  } catch (err) {
    return false;
  }
};
//# sourceMappingURL=sprintf.js.map

/***/ }),

/***/ "../node_modules/locutus/php/strings/strip_tags.js":
/*!*********************************************************!*\
  !*** ../node_modules/locutus/php/strings/strip_tags.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function strip_tags(input, allowed) {
  //  discuss at: https://locutus.io/php/strip_tags/
  // original by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Luke Godfrey
  // improved by: Kevin van Zonneveld (https://kvz.io)
  //    input by: Pul
  //    input by: Alex
  //    input by: Marc Palau
  //    input by: Brett Zamir (https://brett-zamir.me)
  //    input by: Bobby Drake
  //    input by: Evertjan Garretsen
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Eric Nagel
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Tomasz Wesolowski
  // bugfixed by: Tymon Sturgeon (https://scryptonite.com)
  // bugfixed by: Tim de Koning (https://www.kingsquare.nl)
  //  revised by: Rafał Kukawski (https://blog.kukawski.pl)
  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
  //   returns 2: '<p>Kevin van Zonneveld</p>'
  //   example 3: strip_tags("<a href='https://kvz.io'>Kevin van Zonneveld</a>", "<a>")
  //   returns 3: "<a href='https://kvz.io'>Kevin van Zonneveld</a>"
  //   example 4: strip_tags('1 < 5 5 > 1')
  //   returns 4: '1 < 5 5 > 1'
  //   example 5: strip_tags('1 <br/> 1')
  //   returns 5: '1  1'
  //   example 6: strip_tags('1 <br/> 1', '<br>')
  //   returns 6: '1 <br/> 1'
  //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
  //   returns 7: '1 <br/> 1'
  //   example 8: strip_tags('<i>hello</i> <<foo>script>world<</foo>/script>')
  //   returns 8: 'hello world'
  //   example 9: strip_tags(4)
  //   returns 9: '4'

  var _phpCastString = __webpack_require__(/*! ../_helpers/_phpCastString */ "../node_modules/locutus/php/_helpers/_phpCastString.js");

  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  var tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  var after = _phpCastString(input);
  // removes tha '<' char at the end of the string to replicate PHP's behaviour
  after = after.substring(after.length - 1) === '<' ? after.substring(0, after.length - 1) : after;

  // recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
  while (true) {
    var before = after;
    after = before.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });

    // return once no more tags are removed
    if (before === after) {
      return after;
    }
  }
};
//# sourceMappingURL=strip_tags.js.map

/***/ }),

/***/ "../node_modules/locutus/php/strings/vsprintf.js":
/*!*******************************************************!*\
  !*** ../node_modules/locutus/php/strings/vsprintf.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function vsprintf(format, args) {
  //  discuss at: https://locutus.io/php/vsprintf/
  // original by: ejsanders
  //   example 1: vsprintf('%04d-%02d-%02d', [1988, 8, 1])
  //   returns 1: '1988-08-01'

  var sprintf = __webpack_require__(/*! ../strings/sprintf */ "../node_modules/locutus/php/strings/sprintf.js");

  return sprintf.apply(this, [format].concat(args));
};
//# sourceMappingURL=vsprintf.js.map

/***/ }),

/***/ "../node_modules/locutus/php/var/boolval.js":
/*!**************************************************!*\
  !*** ../node_modules/locutus/php/var/boolval.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = function boolval(mixedVar) {
  // original by: Will Rowe
  //   example 1: boolval(true)
  //   returns 1: true
  //   example 2: boolval(false)
  //   returns 2: false
  //   example 3: boolval(0)
  //   returns 3: false
  //   example 4: boolval(0.0)
  //   returns 4: false
  //   example 5: boolval('')
  //   returns 5: false
  //   example 6: boolval('0')
  //   returns 6: false
  //   example 7: boolval([])
  //   returns 7: false
  //   example 8: boolval('')
  //   returns 8: false
  //   example 9: boolval(null)
  //   returns 9: false
  //   example 10: boolval(undefined)
  //   returns 10: false
  //   example 11: boolval('true')
  //   returns 11: true

  if (mixedVar === false) {
    return false;
  }

  if (mixedVar === 0 || mixedVar === 0.0) {
    return false;
  }

  if (mixedVar === '' || mixedVar === '0') {
    return false;
  }

  if (Array.isArray(mixedVar) && mixedVar.length === 0) {
    return false;
  }

  if (mixedVar === null || mixedVar === undefined) {
    return false;
  }

  return true;
};
//# sourceMappingURL=boolval.js.map

/***/ }),

/***/ "../node_modules/path/path.js":
/*!************************************!*\
  !*** ../node_modules/path/path.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.




var isWindows = process.platform === 'win32';
var util = __webpack_require__(/*! util */ "../node_modules/util/util.js");


// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  var res = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

// returns an array with empty elements removed from either end of the input
// array or the original array if no elements need to be removed
function trimArray(arr) {
  var lastIndex = arr.length - 1;
  var start = 0;
  for (; start <= lastIndex; start++) {
    if (arr[start])
      break;
  }

  var end = lastIndex;
  for (; end >= 0; end--) {
    if (arr[end])
      break;
  }

  if (start === 0 && end === lastIndex)
    return arr;
  if (start > end)
    return [];
  return arr.slice(start, end + 1);
}

// Regex to split a windows path into three parts: [*, device, slash,
// tail] windows-only
var splitDeviceRe =
    /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;

// Regex to split the tail part of the above into [*, dir, basename, ext]
var splitTailRe =
    /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

var win32 = {};

// Function to split a filename into [root, dir, basename, ext]
function win32SplitPath(filename) {
  // Separate device+slash from tail
  var result = splitDeviceRe.exec(filename),
      device = (result[1] || '') + (result[2] || ''),
      tail = result[3] || '';
  // Split the tail into dir, basename and extension
  var result2 = splitTailRe.exec(tail),
      dir = result2[1],
      basename = result2[2],
      ext = result2[3];
  return [device, dir, basename, ext];
}

function win32StatPath(path) {
  var result = splitDeviceRe.exec(path),
      device = result[1] || '',
      isUnc = !!device && device[1] !== ':';
  return {
    device: device,
    isUnc: isUnc,
    isAbsolute: isUnc || !!result[2], // UNC paths are always absolute
    tail: result[3]
  };
}

function normalizeUNCRoot(device) {
  return '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
}

// path.resolve([from ...], to)
win32.resolve = function() {
  var resolvedDevice = '',
      resolvedTail = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1; i--) {
    var path;
    if (i >= 0) {
      path = arguments[i];
    } else if (!resolvedDevice) {
      path = process.cwd();
    } else {
      // Windows has the concept of drive-specific current working
      // directories. If we've resolved a drive letter but not yet an
      // absolute path, get cwd for that drive. We're sure the device is not
      // an unc path at this points, because unc paths are always absolute.
      path = process.env['=' + resolvedDevice];
      // Verify that a drive-local cwd was found and that it actually points
      // to our drive. If not, default to the drive's root.
      if (!path || path.substr(0, 3).toLowerCase() !==
          resolvedDevice.toLowerCase() + '\\') {
        path = resolvedDevice + '\\';
      }
    }

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    var result = win32StatPath(path),
        device = result.device,
        isUnc = result.isUnc,
        isAbsolute = result.isAbsolute,
        tail = result.tail;

    if (device &&
        resolvedDevice &&
        device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      // This path points to another device so it is not applicable
      continue;
    }

    if (!resolvedDevice) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = tail + '\\' + resolvedTail;
      resolvedAbsolute = isAbsolute;
    }

    if (resolvedDevice && resolvedAbsolute) {
      break;
    }
  }

  // Convert slashes to backslashes when `resolvedDevice` points to an UNC
  // root. Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    resolvedDevice = normalizeUNCRoot(resolvedDevice);
  }

  // At this point the path should be resolved to a full absolute path,
  // but handle relative paths to be safe (might happen when process.cwd()
  // fails)

  // Normalize the tail path
  resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/),
                                !resolvedAbsolute).join('\\');

  return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
         '.';
};


win32.normalize = function(path) {
  var result = win32StatPath(path),
      device = result.device,
      isUnc = result.isUnc,
      isAbsolute = result.isAbsolute,
      tail = result.tail,
      trailingSlash = /[\\\/]$/.test(tail);

  // Normalize the tail path
  tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute).join('\\');

  if (!tail && !isAbsolute) {
    tail = '.';
  }
  if (tail && trailingSlash) {
    tail += '\\';
  }

  // Convert slashes to backslashes when `device` points to an UNC root.
  // Also squash multiple slashes into a single one where appropriate.
  if (isUnc) {
    device = normalizeUNCRoot(device);
  }

  return device + (isAbsolute ? '\\' : '') + tail;
};


win32.isAbsolute = function(path) {
  return win32StatPath(path).isAbsolute;
};

win32.join = function() {
  var paths = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!util.isString(arg)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (arg) {
      paths.push(arg);
    }
  }

  var joined = paths.join('\\');

  // Make sure that the joined path doesn't start with two slashes, because
  // normalize() will mistake it for an UNC path then.
  //
  // This step is skipped when it is very clear that the user actually
  // intended to point at an UNC path. This is assumed when the first
  // non-empty string arguments starts with exactly two slashes followed by
  // at least one more non-slash character.
  //
  // Note that for normalize() to treat a path as an UNC path it needs to
  // have at least 2 components, so we don't filter for that here.
  // This means that the user can use join to construct UNC paths from
  // a server name and a share name; for example:
  //   path.join('//server', 'share') -> '\\\\server\\share\')
  if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
    joined = joined.replace(/^[\\\/]{2,}/, '\\');
  }

  return win32.normalize(joined);
};


// path.relative(from, to)
// it will solve the relative path from 'from' to 'to', for instance:
// from = 'C:\\orandea\\test\\aaa'
// to = 'C:\\orandea\\impl\\bbb'
// The output of the function should be: '..\\..\\impl\\bbb'
win32.relative = function(from, to) {
  from = win32.resolve(from);
  to = win32.resolve(to);

  // windows is not case sensitive
  var lowerFrom = from.toLowerCase();
  var lowerTo = to.toLowerCase();

  var toParts = trimArray(to.split('\\'));

  var lowerFromParts = trimArray(lowerFrom.split('\\'));
  var lowerToParts = trimArray(lowerTo.split('\\'));

  var length = Math.min(lowerFromParts.length, lowerToParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (lowerFromParts[i] !== lowerToParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  if (samePartsLength == 0) {
    return to;
  }

  var outputParts = [];
  for (var i = samePartsLength; i < lowerFromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('\\');
};


win32._makeLong = function(path) {
  // Note: this will *probably* throw somewhere.
  if (!util.isString(path))
    return path;

  if (!path) {
    return '';
  }

  var resolvedPath = win32.resolve(path);

  if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
    // path is local filesystem path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\' + resolvedPath;
  } else if (/^\\\\[^?.]/.test(resolvedPath)) {
    // path is network UNC path, which needs to be converted
    // to long UNC path.
    return '\\\\?\\UNC\\' + resolvedPath.substring(2);
  }

  return path;
};


win32.dirname = function(path) {
  var result = win32SplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


win32.basename = function(path, ext) {
  var f = win32SplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


win32.extname = function(path) {
  return win32SplitPath(path)[3];
};


win32.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir;
  var base = pathObject.base || '';
  if (!dir) {
    return base;
  }
  if (dir[dir.length - 1] === win32.sep) {
    return dir + base;
  }
  return dir + win32.sep + base;
};


win32.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = win32SplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


win32.sep = '\\';
win32.delimiter = ';';


// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var posix = {};


function posixSplitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}


// path.resolve([from ...], to)
// posix version
posix.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (!util.isString(path)) {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path[0] === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(resolvedPath.split('/'),
                                !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
posix.normalize = function(path) {
  var isAbsolute = posix.isAbsolute(path),
      trailingSlash = path && path[path.length - 1] === '/';

  // Normalize the path
  path = normalizeArray(path.split('/'), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
posix.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
posix.join = function() {
  var path = '';
  for (var i = 0; i < arguments.length; i++) {
    var segment = arguments[i];
    if (!util.isString(segment)) {
      throw new TypeError('Arguments to path.join must be strings');
    }
    if (segment) {
      if (!path) {
        path += segment;
      } else {
        path += '/' + segment;
      }
    }
  }
  return posix.normalize(path);
};


// path.relative(from, to)
// posix version
posix.relative = function(from, to) {
  from = posix.resolve(from).substr(1);
  to = posix.resolve(to).substr(1);

  var fromParts = trimArray(from.split('/'));
  var toParts = trimArray(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};


posix._makeLong = function(path) {
  return path;
};


posix.dirname = function(path) {
  var result = posixSplitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


posix.basename = function(path, ext) {
  var f = posixSplitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


posix.extname = function(path) {
  return posixSplitPath(path)[3];
};


posix.format = function(pathObject) {
  if (!util.isObject(pathObject)) {
    throw new TypeError(
        "Parameter 'pathObject' must be an object, not " + typeof pathObject
    );
  }

  var root = pathObject.root || '';

  if (!util.isString(root)) {
    throw new TypeError(
        "'pathObject.root' must be a string or undefined, not " +
        typeof pathObject.root
    );
  }

  var dir = pathObject.dir ? pathObject.dir + posix.sep : '';
  var base = pathObject.base || '';
  return dir + base;
};


posix.parse = function(pathString) {
  if (!util.isString(pathString)) {
    throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
    );
  }
  var allParts = posixSplitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError("Invalid path '" + pathString + "'");
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';

  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};


posix.sep = '/';
posix.delimiter = ':';


if (isWindows)
  module.exports = win32;
else /* posix */
  module.exports = posix;

module.exports.posix = posix;
module.exports.win32 = win32;


/***/ }),

/***/ "./stylesheet.scss":
/*!*************************!*\
  !*** ./stylesheet.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_stylesheet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./footer.twig":
/*!*********************!*\
  !*** ./footer.twig ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./header.twig */ "./header.twig");

var twig = (__webpack_require__(/*! twig */ "../node_modules/twig/src/twig.js").twig),
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:a50e04916e75a24b2771a8cda9e86bc9d7bea32659e2c3927a6a230d77a9df98a092b57e8ac55ebb68e81252e5e6744c9c729392b77f04a50cf381d08a30f74e:header.twig"}],"position":{"start":0,"end":29}},"position":{"start":0,"end":29}},{"type":"raw","value":"\r\n<footer>this is footer</footer>\r\n\r\n\r\n</body>\r\n</html>","position":{"start":29,"end":29}}],
    template = twig({"id":"$resolved:d2f9ccfd442b425f43ae0c5a45cff0e051d150b8935fbdd99e09d3f58f6d7775515e6e97833fa7a0cd0bcf54023da43727254ef961d2029a5c44e6f30b78180b:footer.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:a50e04916e75a24b2771a8cda9e86bc9d7bea32659e2c3927a6a230d77a9df98a092b57e8ac55ebb68e81252e5e6744c9c729392b77f04a50cf381d08a30f74e:header.twig"}],"position":{"start":0,"end":29}},"position":{"start":0,"end":29}},{"type":"raw","value":"\r\n<footer>this is footer</footer>\r\n\r\n\r\n</body>\r\n</html>","position":{"start":29,"end":29}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./header.twig":
/*!*********************!*\
  !*** ./header.twig ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var twig = (__webpack_require__(/*! twig */ "../node_modules/twig/src/twig.js").twig),
    tokens = [{"type":"raw","value":"<div>\r\n  <ul>\r\n    <li>О Нас</li>\r\n    <li>Каталог</li>\r\n    <li>Контакты</li>\r\n    <li></li>\r\n  </ul>\r\n</div>\r\n  \r\n","position":{"start":0,"end":0}}],
    template = twig({"id":"$resolved:a50e04916e75a24b2771a8cda9e86bc9d7bea32659e2c3927a6a230d77a9df98a092b57e8ac55ebb68e81252e5e6744c9c729392b77f04a50cf381d08a30f74e:header.twig","data":[{"type":"raw","value":"<div>\r\n  <ul>\r\n    <li>О Нас</li>\r\n    <li>Каталог</li>\r\n    <li>Контакты</li>\r\n    <li></li>\r\n  </ul>\r\n</div>\r\n  \r\n","position":{"start":0,"end":0}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./index.twig":
/*!********************!*\
  !*** ./index.twig ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./header.twig */ "./header.twig");

var twig = (__webpack_require__(/*! twig */ "../node_modules/twig/src/twig.js").twig),
    tokens = [{"type":"raw","value":"<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n  <header>\r\n    ","position":{"start":0,"end":203}},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:a50e04916e75a24b2771a8cda9e86bc9d7bea32659e2c3927a6a230d77a9df98a092b57e8ac55ebb68e81252e5e6744c9c729392b77f04a50cf381d08a30f74e:header.twig"}],"position":{"start":203,"end":232}},"position":{"start":203,"end":232}},{"type":"raw","value":"\r\n  </header>\r\n  <div>OLLOLOLOL</div>\r\n  <div>adasdaa</div>\r\n  ","position":{"start":232,"end":295}},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"content","position":{"start":295,"end":314},"output":[{"type":"raw","value":"\r\n    <div>block content</div>\r\n  ","position":{"start":314,"end":348}}]},"position":{"open":{"start":295,"end":314},"close":{"start":348,"end":362}}},{"type":"raw","value":"\r\n  ","position":{"start":362,"end":366}},{"type":"output","position":{"start":366,"end":376},"stack":[{"type":"Twig.expression.type.string","value":"22","position":{"start":366,"end":376}}]},{"type":"raw","value":"\r\n  <div></div>\r\n  <div id=\"content\">","position":{"start":376,"end":413}},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"content","position":{"start":413,"end":432},"output":[]},"position":{"open":{"start":413,"end":432},"close":{"start":432,"end":446}}},{"type":"raw","value":"</div>\r\n</body>\r\n</html>","position":{"start":446,"end":446}}],
    template = twig({"id":"$resolved:81bc5b57576585df8ae9737379e6667273f48d89b7229502ea34e15f3a78fa55d829b465d645fbd9768f26663c7db1bce9c98f87b406e22c2259e72767eb4154:index.twig","data":[{"type":"raw","value":"<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n  <header>\r\n    ","position":{"start":0,"end":203}},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:a50e04916e75a24b2771a8cda9e86bc9d7bea32659e2c3927a6a230d77a9df98a092b57e8ac55ebb68e81252e5e6744c9c729392b77f04a50cf381d08a30f74e:header.twig"}],"position":{"start":203,"end":232}},"position":{"start":203,"end":232}},{"type":"raw","value":"\r\n  </header>\r\n  <div>OLLOLOLOL</div>\r\n  <div>adasdaa</div>\r\n  ","position":{"start":232,"end":295}},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"content","position":{"start":295,"end":314},"output":[{"type":"raw","value":"\r\n    <div>block content</div>\r\n  ","position":{"start":314,"end":348}}]},"position":{"open":{"start":295,"end":314},"close":{"start":348,"end":362}}},{"type":"raw","value":"\r\n  ","position":{"start":362,"end":366}},{"type":"output","position":{"start":366,"end":376},"stack":[{"type":"Twig.expression.type.string","value":"22","position":{"start":366,"end":376}}]},{"type":"raw","value":"\r\n  <div></div>\r\n  <div id=\"content\">","position":{"start":376,"end":413}},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"content","position":{"start":413,"end":432},"output":[]},"position":{"open":{"start":413,"end":432},"close":{"start":432,"end":446}}},{"type":"raw","value":"</div>\r\n</body>\r\n</html>","position":{"start":446,"end":446}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "../node_modules/twig/src/twig.async.js":
/*!**********************************************!*\
  !*** ../node_modules/twig/src/twig.async.js ***!
  \**********************************************/
/***/ ((module) => {

// ## twig.async.js
//
// This file handles asynchronous tasks within twig.
module.exports = function (Twig) {
    'use strict';

    const STATE_UNKNOWN = 0;
    const STATE_RESOLVED = 1;
    const STATE_REJECTED = 2;

    Twig.ParseState.prototype.parseAsync = function (tokens, context) {
        return this.parse(tokens, context, true);
    };

    Twig.expression.parseAsync = function (tokens, context, tokensAreParameters) {
        const state = this;

        return Twig.expression.parse.call(state, tokens, context, tokensAreParameters, true);
    };

    Twig.logic.parseAsync = function (token, context, chain) {
        const state = this;

        return Twig.logic.parse.call(state, token, context, chain, true);
    };

    Twig.Template.prototype.renderAsync = function (context, params) {
        return this.render(context, params, true);
    };

    Twig.async = {};

    /**
     * Checks for `thenable` objects
     */
    Twig.isPromise = function (obj) {
        return obj && obj.then && (typeof obj.then === 'function');
    };

    /**
     * Handling of code paths that might either return a promise
     * or a value depending on whether async code is used.
     *
     * @see https://github.com/twigjs/twig.js/blob/master/ASYNC.md#detecting-asynchronous-behaviour
     */
    function potentiallyAsyncSlow(that, allowAsync, action) {
        let result = action.call(that);
        let err = null;
        let isAsync = true;

        if (!Twig.isPromise(result)) {
            return result;
        }

        result.then(res => {
            result = res;
            isAsync = false;
        }).catch(error => {
            err = error;
        });

        if (err !== null) {
            throw err;
        }

        if (isAsync) {
            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
        }

        return result;
    }

    Twig.async.potentiallyAsync = function (that, allowAsync, action) {
        if (allowAsync) {
            return Twig.Promise.resolve(action.call(that));
        }

        return potentiallyAsyncSlow(that, allowAsync, action);
    };

    function run(fn, resolve, reject) {
        try {
            fn(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    function pending(handlers, onResolved, onRejected) {
        const h = [onResolved, onRejected, -2];

        // The promise has yet to be rejected or resolved.
        if (!handlers) {
            handlers = h;
        } else if (handlers[2] === -2) {
            // Only allocate an array when there are multiple handlers
            handlers = [handlers, h];
        } else {
            handlers.push(h);
        }

        return handlers;
    }

    /**
     * Really small thenable to represent promises that resolve immediately.
     *
     */
    Twig.Thenable = function (then, value, state) {
        this.then = then;
        this._value = state ? value : null;
        this._state = state || STATE_UNKNOWN;
    };

    Twig.Thenable.prototype.catch = function (onRejected) {
        // THe promise will not throw, it has already resolved.
        if (this._state === STATE_RESOLVED) {
            return this;
        }

        return this.then(null, onRejected);
    };

    /**
     * The `then` method attached to a Thenable when it has resolved.
     *
     */
    Twig.Thenable.resolvedThen = function (onResolved) {
        try {
            return Twig.Promise.resolve(onResolved(this._value));
        } catch (error) {
            return Twig.Promise.reject(error);
        }
    };

    /**
     * The `then` method attached to a Thenable when it has rejected.
     *
     */
    Twig.Thenable.rejectedThen = function (onResolved, onRejected) {
        // Shortcut for rejected twig promises
        if (!onRejected || typeof onRejected !== 'function') {
            return this;
        }

        const value = this._value;

        let result;
        try {
            result = onRejected(value);
        } catch (error) {
            result = Twig.Promise.reject(error);
        }

        return Twig.Promise.resolve(result);
    };

    /**
     * An alternate implementation of a Promise that does not fully follow
     * the spec, but instead works fully synchronous while still being
     * thenable.
     *
     * These promises can be mixed with regular promises at which point
     * the synchronous behaviour is lost.
     */
    Twig.Promise = function (executor) {
        let state = STATE_UNKNOWN;
        let value = null;

        let changeState = function (nextState, nextValue) {
            state = nextState;
            value = nextValue;
        };

        function onReady(v) {
            changeState(STATE_RESOLVED, v);
        }

        function onReject(e) {
            changeState(STATE_REJECTED, e);
        }

        run(executor, onReady, onReject);

        // If the promise settles right after running the executor we can
        // return a Promise with it's state already set.
        //
        // Twig.Promise.resolve and Twig.Promise.reject both use the more
        // efficient `Twig.Thenable` for this purpose.
        if (state === STATE_RESOLVED) {
            return Twig.Promise.resolve(value);
        }

        if (state === STATE_REJECTED) {
            return Twig.Promise.reject(value);
        }
        // If we managed to get here our promise is going to resolve asynchronous.

        changeState = new Twig.FullPromise();

        return changeState.promise;
    };

    /**
     * Promise implementation that can handle being resolved at any later time.
     *
     */
    Twig.FullPromise = function () {
        let handlers = null;

        // The state has been changed to either resolve, or reject
        // which means we should call the handler.
        function resolved(onResolved) {
            onResolved(p._value);
        }

        function rejected(onResolved, onRejected) {
            onRejected(p._value);
        }

        let append = function (onResolved, onRejected) {
            handlers = pending(handlers, onResolved, onRejected);
        };

        function changeState(newState, v) {
            if (p._state) {
                return;
            }

            p._value = v;
            p._state = newState;

            append = newState === STATE_RESOLVED ? resolved : rejected;

            if (!handlers) {
                return;
            }

            if (handlers[2] === -2) {
                append(handlers[0], handlers[1]);
                handlers = null;
                return;
            }

            handlers.forEach(h => {
                append(h[0], h[1]);
            });
            handlers = null;
        }

        const p = new Twig.Thenable((onResolved, onRejected) => {
            const hasResolved = typeof onResolved === 'function';

            // Shortcut for resolved twig promises
            if (p._state === STATE_RESOLVED && !hasResolved) {
                return Twig.Promise.resolve(p._value);
            }

            if (p._state === STATE_RESOLVED) {
                try {
                    return Twig.Promise.resolve(onResolved(p._value));
                } catch (error) {
                    return Twig.Promise.reject(error);
                }
            }

            const hasRejected = typeof onRejected === 'function';

            return new Twig.Promise((resolve, reject) => {
                append(
                    hasResolved ? result => {
                        try {
                            resolve(onResolved(result));
                        } catch (error) {
                            reject(error);
                        }
                    } : resolve,
                    hasRejected ? err => {
                        try {
                            resolve(onRejected(err));
                        } catch (error) {
                            reject(error);
                        }
                    } : reject
                );
            });
        });

        changeState.promise = p;

        return changeState;
    };

    Twig.Promise.defaultResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, undefined, STATE_RESOLVED);
    Twig.Promise.emptyStringResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, '', STATE_RESOLVED);

    Twig.Promise.resolve = function (value) {
        if (arguments.length === 0 || typeof value === 'undefined') {
            return Twig.Promise.defaultResolved;
        }

        if (Twig.isPromise(value)) {
            return value;
        }

        // Twig often resolves with an empty string, we optimize for this
        // scenario by returning a fixed promise. This reduces the load on
        // garbage collection.
        if (value === '') {
            return Twig.Promise.emptyStringResolved;
        }

        return new Twig.Thenable(Twig.Thenable.resolvedThen, value, STATE_RESOLVED);
    };

    Twig.Promise.reject = function (e) {
        // `e` should never be a promise.
        return new Twig.Thenable(Twig.Thenable.rejectedThen, e, STATE_REJECTED);
    };

    Twig.Promise.all = function (promises) {
        const results = new Array(promises.length);

        return Twig.async.forEach(promises, (p, index) => {
            if (!Twig.isPromise(p)) {
                results[index] = p;
                return;
            }

            if (p._state === STATE_RESOLVED) {
                results[index] = p._value;
                return;
            }

            return p.then(v => {
                results[index] = v;
            });
        }).then(() => {
            return results;
        });
    };

    /**
    * Go over each item in a fashion compatible with Twig.forEach,
    * allow the function to return a promise or call the third argument
    * to signal it is finished.
    *
    * Each item in the array will be called sequentially.
    */
    Twig.async.forEach = function (arr, callback) {
        const len = arr ? arr.length : 0;
        let index = 0;

        function next() {
            let resp = null;

            do {
                if (index === len) {
                    return Twig.Promise.resolve();
                }

                resp = callback(arr[index], index);
                index++;

            // While the result of the callback is not a promise or it is
            // a promise that has settled we can use a regular loop which
            // is much faster.
            } while (!resp || !Twig.isPromise(resp) || resp._state === STATE_RESOLVED);

            return resp.then(next);
        }

        return next();
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.compiler.js":
/*!*************************************************!*\
  !*** ../node_modules/twig/src/twig.compiler.js ***!
  \*************************************************/
/***/ ((module) => {

// ## twig.compiler.js
//
// This file handles compiling templates into JS
module.exports = function (Twig) {
    /**
     * Namespace for compilation.
     */
    Twig.compiler = {
        module: {}
    };

    // Compile a Twig Template to output.
    Twig.compiler.compile = function (template, options) {
        // Get tokens
        const tokens = JSON.stringify(template.tokens);
        const {id} = template;
        let output = null;

        if (options.module) {
            if (Twig.compiler.module[options.module] === undefined) {
                throw new Twig.Error('Unable to find module type ' + options.module);
            }

            output = Twig.compiler.module[options.module](id, tokens, options.twig);
        } else {
            output = Twig.compiler.wrap(id, tokens);
        }

        return output;
    };

    Twig.compiler.module = {
        amd(id, tokens, pathToTwig) {
            return 'define(["' + pathToTwig + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + '\n\treturn templates;\n});';
        },
        node(id, tokens) {
            return 'var twig = require("twig").twig;\nexports.template = ' + Twig.compiler.wrap(id, tokens);
        },
        cjs2(id, tokens, pathToTwig) {
            return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + Twig.compiler.wrap(id, tokens) + '\n});';
        }
    };

    Twig.compiler.wrap = function (id, tokens) {
        return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ', precompiled: true});\n';
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.core.js":
/*!*********************************************!*\
  !*** ../node_modules/twig/src/twig.core.js ***!
  \*********************************************/
/***/ ((module) => {

// ## twig.core.js
//
// This file handles template level tokenizing, compiling and parsing.
module.exports = function (Twig) {
    'use strict';

    Twig.trace = false;
    Twig.debug = false;

    // Default caching to true for the improved performance it offers
    Twig.cache = true;

    Twig.noop = function () {};

    Twig.merge = function (target, source, onlyChanged) {
        Object.keys(source).forEach(key => {
            if (onlyChanged && !(key in target)) {
                return;
            }

            target[key] = source[key];
        });

        return target;
    };

    /**
     * Exception thrown by twig.js.
     */
    Twig.Error = function (message, file) {
        this.message = message;
        this.name = 'TwigException';
        this.type = 'TwigException';
        this.file = file;
    };

    /**
     * Get the string representation of a Twig error.
     */
    Twig.Error.prototype.toString = function () {
        const output = this.name + ': ' + this.message;

        return output;
    };

    /**
     * Wrapper for logging to the console.
     */
    Twig.log = {
        trace(...args) {
            if (Twig.trace && console) {
                console.log(Array.prototype.slice.call(args));
            }
        },
        debug(...args) {
            if (Twig.debug && console) {
                console.log(Array.prototype.slice.call(args));
            }
        }
    };

    if (typeof console === 'undefined') {
        Twig.log.error = function () {};
    } else if (typeof console.error !== 'undefined') {
        Twig.log.error = function (...args) {
            console.error(...args);
        };
    } else if (typeof console.log !== 'undefined') {
        Twig.log.error = function (...args) {
            console.log(...args);
        };
    }

    /**
     * Container for methods related to handling high level template tokens
     *      (for example: {{ expression }}, {% logic %}, {# comment #}, raw data)
     */
    Twig.token = {};

    /**
     * Token types.
     */
    Twig.token.type = {
        output: 'output',
        logic: 'logic',
        comment: 'comment',
        raw: 'raw',
        outputWhitespacePre: 'output_whitespace_pre',
        outputWhitespacePost: 'output_whitespace_post',
        outputWhitespaceBoth: 'output_whitespace_both',
        logicWhitespacePre: 'logic_whitespace_pre',
        logicWhitespacePost: 'logic_whitespace_post',
        logicWhitespaceBoth: 'logic_whitespace_both'
    };

    /**
     * Token syntax definitions.
     */
    Twig.token.definitions = [
        {
            type: Twig.token.type.raw,
            open: '{% raw %}',
            close: '{% endraw %}'
        },
        {
            type: Twig.token.type.raw,
            open: '{% verbatim %}',
            close: '{% endverbatim %}'
        },
        // *Whitespace type tokens*
        //
        // These typically take the form `{{- expression -}}` or `{{- expression }}` or `{{ expression -}}`.
        {
            type: Twig.token.type.outputWhitespacePre,
            open: '{{-',
            close: '}}'
        },
        {
            type: Twig.token.type.outputWhitespacePost,
            open: '{{',
            close: '-}}'
        },
        {
            type: Twig.token.type.outputWhitespaceBoth,
            open: '{{-',
            close: '-}}'
        },
        {
            type: Twig.token.type.logicWhitespacePre,
            open: '{%-',
            close: '%}'
        },
        {
            type: Twig.token.type.logicWhitespacePost,
            open: '{%',
            close: '-%}'
        },
        {
            type: Twig.token.type.logicWhitespaceBoth,
            open: '{%-',
            close: '-%}'
        },
        // *Output type tokens*
        //
        // These typically take the form `{{ expression }}`.
        {
            type: Twig.token.type.output,
            open: '{{',
            close: '}}'
        },
        // *Logic type tokens*
        //
        // These typically take a form like `{% if expression %}` or `{% endif %}`
        {
            type: Twig.token.type.logic,
            open: '{%',
            close: '%}'
        },
        // *Comment type tokens*
        //
        // These take the form `{# anything #}`
        {
            type: Twig.token.type.comment,
            open: '{#',
            close: '#}'
        }
    ];

    /**
     * What characters start "strings" in token definitions. We need this to ignore token close
     * strings inside an expression.
     */
    Twig.token.strings = ['"', '\''];

    Twig.token.findStart = function (template) {
        const output = {
            position: null,
            def: null
        };
        let closePosition = null;
        const len = Twig.token.definitions.length;
        let i;
        let tokenTemplate;
        let firstKeyPosition;
        let closeKeyPosition;

        for (i = 0; i < len; i++) {
            tokenTemplate = Twig.token.definitions[i];
            firstKeyPosition = template.indexOf(tokenTemplate.open);
            closeKeyPosition = template.indexOf(tokenTemplate.close);

            Twig.log.trace('Twig.token.findStart: ', 'Searching for ', tokenTemplate.open, ' found at ', firstKeyPosition);

            // Special handling for mismatched tokens
            if (firstKeyPosition >= 0) {
                // This token matches the template
                if (tokenTemplate.open.length !== tokenTemplate.close.length) {
                    // This token has mismatched closing and opening tags
                    if (closeKeyPosition < 0) {
                        // This token's closing tag does not match the template
                        continue;
                    }
                }
            }
            // Does this token occur before any other types?

            if (firstKeyPosition >= 0 && (output.position === null || firstKeyPosition < output.position)) {
                output.position = firstKeyPosition;
                output.def = tokenTemplate;
                closePosition = closeKeyPosition;
            } else if (firstKeyPosition >= 0 && output.position !== null && firstKeyPosition === output.position) {
                /* This token exactly matches another token,
                greedily match to check if this token has a greater specificity */
                if (tokenTemplate.open.length > output.def.open.length) {
                    // This token's opening tag is more specific than the previous match
                    output.position = firstKeyPosition;
                    output.def = tokenTemplate;
                    closePosition = closeKeyPosition;
                } else if (tokenTemplate.open.length === output.def.open.length) {
                    if (tokenTemplate.close.length > output.def.close.length) {
                        // This token's opening tag is as specific as the previous match,
                        // but the closing tag has greater specificity
                        if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
                            // This token's closing tag exists in the template,
                            // and it occurs sooner than the previous match
                            output.position = firstKeyPosition;
                            output.def = tokenTemplate;
                            closePosition = closeKeyPosition;
                        }
                    } else if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
                        // This token's closing tag is not more specific than the previous match,
                        // but it occurs sooner than the previous match
                        output.position = firstKeyPosition;
                        output.def = tokenTemplate;
                        closePosition = closeKeyPosition;
                    }
                }
            }
        }

        return output;
    };

    Twig.token.findEnd = function (template, tokenDef, start) {
        let end = null;
        let found = false;
        let offset = 0;

        // String position variables
        let strPos = null;
        let strFound = null;
        let pos = null;
        let endOffset = null;
        let thisStrPos = null;
        let endStrPos = null;

        // For loop variables
        let i;
        let l;

        while (!found) {
            strPos = null;
            strFound = null;
            pos = template.indexOf(tokenDef.close, offset);

            if (pos >= 0) {
                end = pos;
                found = true;
            } else {
                // Throw an exception
                throw new Twig.Error('Unable to find closing bracket \'' + tokenDef.close +
                                '\' opened near template position ' + start);
            }

            // Ignore quotes within comments; just look for the next comment close sequence,
            // regardless of what comes before it. https://github.com/justjohn/twig.js/issues/95
            if (tokenDef.type === Twig.token.type.comment) {
                break;
            }
            // Ignore quotes within raw tag
            // Fixes #283

            if (tokenDef.type === Twig.token.type.raw) {
                break;
            }

            l = Twig.token.strings.length;
            for (i = 0; i < l; i += 1) {
                thisStrPos = template.indexOf(Twig.token.strings[i], offset);

                if (thisStrPos > 0 && thisStrPos < pos &&
                        (strPos === null || thisStrPos < strPos)) {
                    strPos = thisStrPos;
                    strFound = Twig.token.strings[i];
                }
            }

            // We found a string before the end of the token, now find the string's end and set the search offset to it
            if (strPos !== null) {
                endOffset = strPos + 1;
                end = null;
                found = false;
                for (;;) {
                    endStrPos = template.indexOf(strFound, endOffset);
                    if (endStrPos < 0) {
                        throw Twig.Error('Unclosed string in template');
                    }
                    // Ignore escaped quotes

                    if (template.slice(endStrPos - 1, endStrPos) === '\\') {
                        endOffset = endStrPos + 1;
                    } else {
                        offset = endStrPos + 1;
                        break;
                    }
                }
            }
        }

        return end;
    };

    /**
     * Convert a template into high-level tokens.
     */
    Twig.tokenize = function (template) {
        const tokens = [];
        // An offset for reporting errors locations and the position of the nodes in the template.
        let currentPosition = 0;
        // The start and type of the first token found in the template.
        let foundToken = null;
        // The end position of the matched token.
        let end = null;

        while (template.length > 0) {
            // Find the first occurance of any token type in the template
            foundToken = Twig.token.findStart(template);

            Twig.log.trace('Twig.tokenize: ', 'Found token: ', foundToken);

            if (foundToken.position === null) {
                // No more tokens -> add the rest of the template as a raw-type token
                tokens.push({
                    type: Twig.token.type.raw,
                    value: template,
                    position: {
                        start: currentPosition,
                        end: currentPosition + foundToken.position
                    }
                });
                template = '';
            } else {
                // Add a raw type token for anything before the start of the token
                if (foundToken.position > 0) {
                    tokens.push({
                        type: Twig.token.type.raw,
                        value: template.slice(0, Math.max(0, foundToken.position)),
                        position: {
                            start: currentPosition,
                            end: currentPosition + Math.max(0, foundToken.position)
                        }
                    });
                }

                template = template.slice(foundToken.position + foundToken.def.open.length);
                currentPosition += foundToken.position + foundToken.def.open.length;

                // Find the end of the token
                end = Twig.token.findEnd(template, foundToken.def, currentPosition);

                Twig.log.trace('Twig.tokenize: ', 'Token ends at ', end);

                tokens.push({
                    type: foundToken.def.type,
                    value: template.slice(0, Math.max(0, end)).trim(),
                    position: {
                        start: currentPosition - foundToken.def.open.length,
                        end: currentPosition + end + foundToken.def.close.length
                    }
                });

                if (template.slice(end + foundToken.def.close.length, end + foundToken.def.close.length + 1) === '\n') {
                    switch (foundToken.def.type) {
                        case 'logic_whitespace_pre':
                        case 'logic_whitespace_post':
                        case 'logic_whitespace_both':
                        case 'logic':
                            // Newlines directly after logic tokens are ignored
                            end += 1;
                            break;
                        default:
                            break;
                    }
                }

                template = template.slice(end + foundToken.def.close.length);

                // Increment the position in the template
                currentPosition += end + foundToken.def.close.length;
            }
        }

        return tokens;
    };

    Twig.compile = function (tokens) {
        const self = this;
        try {
            // Output and intermediate stacks
            const output = [];
            const stack = [];
            // The tokens between open and close tags
            let intermediateOutput = [];

            let token = null;
            let logicToken = null;
            let unclosedToken = null;
            // Temporary previous token.
            let prevToken = null;
            // Temporary previous output.
            let prevOutput = null;
            // Temporary previous intermediate output.
            let prevIntermediateOutput = null;
            // The previous token's template
            let prevTemplate = null;
            // Token lookahead
            let nextToken = null;
            // The output token
            let tokOutput = null;

            // Logic Token values
            let type = null;
            let open = null;
            let next = null;

            const compileOutput = function (token) {
                Twig.expression.compile.call(self, token);
                if (stack.length > 0) {
                    intermediateOutput.push(token);
                } else {
                    output.push(token);
                }
            };

            const compileLogic = function (token) {
                // Compile the logic token
                logicToken = Twig.logic.compile.call(self, token);
                logicToken.position = token.position;

                type = logicToken.type;
                open = Twig.logic.handler[type].open;
                next = Twig.logic.handler[type].next;

                Twig.log.trace('Twig.compile: ', 'Compiled logic token to ', logicToken,
                    ' next is: ', next, ' open is : ', open);

                // Not a standalone token, check logic stack to see if this is expected
                if (open !== undefined && !open) {
                    prevToken = stack.pop();
                    prevTemplate = Twig.logic.handler[prevToken.type];

                    if (!prevTemplate.next.includes(type)) {
                        throw new Error(type + ' not expected after a ' + prevToken.type);
                    }

                    prevToken.output = prevToken.output || [];

                    prevToken.output = prevToken.output.concat(intermediateOutput);
                    intermediateOutput = [];

                    tokOutput = {
                        type: Twig.token.type.logic,
                        token: prevToken,
                        position: {
                            open: prevToken.position,
                            close: token.position
                        }
                    };

                    if (stack.length > 0) {
                        intermediateOutput.push(tokOutput);
                    } else {
                        output.push(tokOutput);
                    }
                }

                // This token requires additional tokens to complete the logic structure.
                if (next !== undefined && next.length > 0) {
                    Twig.log.trace('Twig.compile: ', 'Pushing ', logicToken, ' to logic stack.');

                    if (stack.length > 0) {
                        // Put any currently held output into the output list of the logic operator
                        // currently at the head of the stack before we push a new one on.
                        prevToken = stack.pop();
                        prevToken.output = prevToken.output || [];
                        prevToken.output = prevToken.output.concat(intermediateOutput);
                        stack.push(prevToken);
                        intermediateOutput = [];
                    }

                    // Push the new logic token onto the logic stack
                    stack.push(logicToken);
                } else if (open !== undefined && open) {
                    tokOutput = {
                        type: Twig.token.type.logic,
                        token: logicToken,
                        position: logicToken.position
                    };
                    // Standalone token (like {% set ... %}
                    if (stack.length > 0) {
                        intermediateOutput.push(tokOutput);
                    } else {
                        output.push(tokOutput);
                    }
                }
            };

            while (tokens.length > 0) {
                token = tokens.shift();
                prevOutput = output[output.length - 1];
                prevIntermediateOutput = intermediateOutput[intermediateOutput.length - 1];
                nextToken = tokens[0];
                Twig.log.trace('Compiling token ', token);
                switch (token.type) {
                    case Twig.token.type.raw:
                        if (stack.length > 0) {
                            intermediateOutput.push(token);
                        } else {
                            output.push(token);
                        }

                        break;

                    case Twig.token.type.logic:
                        compileLogic.call(self, token);
                        break;

                    // Do nothing, comments should be ignored
                    case Twig.token.type.comment:
                        break;

                    case Twig.token.type.output:
                        compileOutput.call(self, token);
                        break;

                    // Kill whitespace ahead and behind this token
                    case Twig.token.type.logicWhitespacePre:
                    case Twig.token.type.logicWhitespacePost:
                    case Twig.token.type.logicWhitespaceBoth:
                    case Twig.token.type.outputWhitespacePre:
                    case Twig.token.type.outputWhitespacePost:
                    case Twig.token.type.outputWhitespaceBoth:
                        if (token.type !== Twig.token.type.outputWhitespacePost && token.type !== Twig.token.type.logicWhitespacePost) {
                            if (prevOutput) {
                                // If the previous output is raw, pop it off
                                if (prevOutput.type === Twig.token.type.raw) {
                                    output.pop();

                                    prevOutput.value = prevOutput.value.trimEnd();
                                    // Repush the previous output
                                    output.push(prevOutput);
                                }
                            }

                            if (prevIntermediateOutput) {
                                // If the previous intermediate output is raw, pop it off
                                if (prevIntermediateOutput.type === Twig.token.type.raw) {
                                    intermediateOutput.pop();

                                    prevIntermediateOutput.value = prevIntermediateOutput.value.trimEnd();
                                    // Repush the previous intermediate output
                                    intermediateOutput.push(prevIntermediateOutput);
                                }
                            }
                        }

                        // Compile this token
                        switch (token.type) {
                            case Twig.token.type.outputWhitespacePre:
                            case Twig.token.type.outputWhitespacePost:
                            case Twig.token.type.outputWhitespaceBoth:
                                compileOutput.call(self, token);
                                break;
                            case Twig.token.type.logicWhitespacePre:
                            case Twig.token.type.logicWhitespacePost:
                            case Twig.token.type.logicWhitespaceBoth:
                                compileLogic.call(self, token);
                                break;
                            default:
                                break;
                        }

                        if (token.type !== Twig.token.type.outputWhitespacePre && token.type !== Twig.token.type.logicWhitespacePre) {
                            if (nextToken) {
                                // If the next token is raw, shift it out
                                if (nextToken.type === Twig.token.type.raw) {
                                    tokens.shift();

                                    nextToken.value = nextToken.value.trimStart();
                                    // Unshift the next token
                                    tokens.unshift(nextToken);
                                }
                            }
                        }

                        break;
                    default:
                        break;
                }

                Twig.log.trace('Twig.compile: ', ' Output: ', output,
                    ' Logic Stack: ', stack,
                    ' Pending Output: ', intermediateOutput
                );
            }

            // Verify that there are no logic tokens left in the stack.
            if (stack.length > 0) {
                unclosedToken = stack.pop();
                throw new Error('Unable to find an end tag for ' + unclosedToken.type +
                                ', expecting one of ' + unclosedToken.next);
            }

            return output;
        } catch (error) {
            if (self.options.rethrow) {
                if (error.type === 'TwigException' && !error.file) {
                    error.file = self.id;
                }

                throw error;
            } else {
                Twig.log.error('Error compiling twig template ' + self.id + ': ');
                if (error.stack) {
                    Twig.log.error(error.stack);
                } else {
                    Twig.log.error(error.toString());
                }
            }
        }
    };

    function handleException(state, ex) {
        if (state.template.options.rethrow) {
            if (typeof ex === 'string') {
                ex = new Twig.Error(ex);
            }

            if (ex.type === 'TwigException' && !ex.file) {
                ex.file = state.template.id;
            }

            throw ex;
        } else {
            Twig.log.error('Error parsing twig template ' + state.template.id + ': ');
            if (ex.stack) {
                Twig.log.error(ex.stack);
            } else {
                Twig.log.error(ex.toString());
            }

            if (Twig.debug) {
                return ex.toString();
            }
        }
    }

    /**
     * Tokenize and compile a string template.
     *
     * @param {string} data The template.
     *
     * @return {Array} The compiled tokens.
     */
    Twig.prepare = function (data) {
        // Tokenize
        Twig.log.debug('Twig.prepare: ', 'Tokenizing ', data);
        const rawTokens = Twig.tokenize.call(this, data);

        // Compile
        Twig.log.debug('Twig.prepare: ', 'Compiling ', rawTokens);
        const tokens = Twig.compile.call(this, rawTokens);

        Twig.log.debug('Twig.prepare: ', 'Compiled ', tokens);

        return tokens;
    };

    /**
     * Join the output token's stack and escape it if needed
     *
     * @param {Array} Output token's stack
     *
     * @return {string|String} Autoescaped output
     */
    Twig.output = function (output) {
        const {autoescape} = this.options;

        if (!autoescape) {
            return output.join('');
        }

        const strategy = (typeof autoescape === 'string') ? autoescape : 'html';

        const escapedOutput = output.map(str => {
            if (
                str &&
                (str.twigMarkup !== true && str.twigMarkup !== strategy) &&
                !(strategy === 'html' && str.twigMarkup === 'html_attr')
            ) {
                str = Twig.filters.escape(str, [strategy]);
            }

            return str;
        });

        if (escapedOutput.length === 0) {
            return '';
        }

        const joinedOutput = escapedOutput.join('');
        if (joinedOutput.length === 0) {
            return '';
        }

        return new Twig.Markup(joinedOutput, true);
    };

    // Namespace for template storage and retrieval
    Twig.Templates = {
        /**
         * Registered template loaders - use Twig.Templates.registerLoader to add supported loaders
         * @type {Object}
         */
        loaders: {},

        /**
         * Registered template parsers - use Twig.Templates.registerParser to add supported parsers
         * @type {Object}
         */
        parsers: {},

        /**
         * Cached / loaded templates
         * @type {Object}
         */
        registry: {}
    };

    /**
     * Is this id valid for a twig template?
     *
     * @param {string} id The ID to check.
     *
     * @throws {Twig.Error} If the ID is invalid or used.
     * @return {boolean} True if the ID is valid.
     */
    Twig.validateId = function (id) {
        if (id === 'prototype') {
            throw new Twig.Error(id + ' is not a valid twig identifier');
        } else if (Twig.cache && Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
            throw new Twig.Error('There is already a template with the ID ' + id);
        }

        return true;
    };

    /**
     * Register a template loader
     *
     * @example
     * Twig.extend(function (Twig) {
     *    Twig.Templates.registerLoader('custom_loader', function (location, params, callback, errorCallback) {
     *        // ... load the template ...
     *        params.data = loadedTemplateData;
     *        // create and return the template
     *        var template = new Twig.Template(params);
     *        if (typeof callback === 'function') {
     *            callback(template);
     *        }
     *        return template;
     *    });
     * });
     *
     * @param {String} methodName The method this loader is intended for (ajax, fs)
     * @param {Function} func The function to execute when loading the template
     * @param {Object|undefined} scope Optional scope parameter to bind func to
     *
     * @throws Twig.Error
     *
     * @return {void}
     */
    Twig.Templates.registerLoader = function (methodName, func, scope) {
        if (typeof func !== 'function') {
            throw new Twig.Error('Unable to add loader for ' + methodName + ': Invalid function reference given.');
        }

        if (scope) {
            func = func.bind(scope);
        }

        this.loaders[methodName] = func;
    };

    /**
     * Remove a registered loader
     *
     * @param {String} methodName The method name for the loader you wish to remove
     *
     * @return {void}
     */
    Twig.Templates.unRegisterLoader = function (methodName) {
        if (this.isRegisteredLoader(methodName)) {
            delete this.loaders[methodName];
        }
    };

    /**
     * See if a loader is registered by its method name
     *
     * @param {String} methodName The name of the loader you are looking for
     *
     * @return {boolean}
     */
    Twig.Templates.isRegisteredLoader = function (methodName) {
        return Object.hasOwnProperty.call(this.loaders, methodName);
    };

    /**
     * Register a template parser
     *
     * @example
     * Twig.extend(function (Twig) {
     *    Twig.Templates.registerParser('custom_parser', function (params) {
     *        // this template source can be accessed in params.data
     *        var template = params.data
     *
     *        // ... custom process that modifies the template
     *
     *        // return the parsed template
     *        return template;
     *    });
     * });
     *
     * @param {String} methodName The method this parser is intended for (twig, source)
     * @param {Function} func The function to execute when parsing the template
     * @param {Object|undefined} scope Optional scope parameter to bind func to
     *
     * @throws Twig.Error
     *
     * @return {void}
     */
    Twig.Templates.registerParser = function (methodName, func, scope) {
        if (typeof func !== 'function') {
            throw new Twig.Error('Unable to add parser for ' + methodName + ': Invalid function regerence given.');
        }

        if (scope) {
            func = func.bind(scope);
        }

        this.parsers[methodName] = func;
    };

    /**
     * Remove a registered parser
     *
     * @param {String} methodName The method name for the parser you wish to remove
     *
     * @return {void}
     */
    Twig.Templates.unRegisterParser = function (methodName) {
        if (this.isRegisteredParser(methodName)) {
            delete this.parsers[methodName];
        }
    };

    /**
     * See if a parser is registered by its method name
     *
     * @param {String} methodName The name of the parser you are looking for
     *
     * @return {boolean}
     */
    Twig.Templates.isRegisteredParser = function (methodName) {
        return Object.hasOwnProperty.call(this.parsers, methodName);
    };

    /**
     * Save a template object to the store.
     *
     * @param {Twig.Template} template   The twig.js template to store.
     */
    Twig.Templates.save = function (template) {
        if (template.id === undefined) {
            throw new Twig.Error('Unable to save template with no id');
        }

        Twig.Templates.registry[template.id] = template;
    };

    /**
     * Load a previously saved template from the store.
     *
     * @param {string} id   The ID of the template to load.
     *
     * @return {Twig.Template} A twig.js template stored with the provided ID.
     */
    Twig.Templates.load = function (id) {
        if (!Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
            return null;
        }

        return Twig.Templates.registry[id];
    };

    /**
     * Load a template from a remote location using AJAX and saves in with the given ID.
     *
     * Available parameters:
     *
     *      async:       Should the HTTP request be performed asynchronously.
     *                      Defaults to true.
     *      method:      What method should be used to load the template
     *                      (fs or ajax)
     *      parser:      What method should be used to parse the template
     *                      (twig or source)
     *      precompiled: Has the template already been compiled.
     *
     * @param {string} location  The remote URL to load as a template.
     * @param {Object} params The template parameters.
     * @param {function} callback  A callback triggered when the template finishes loading.
     * @param {function} errorCallback  A callback triggered if an error occurs loading the template.
     *
     *
     */
    Twig.Templates.loadRemote = function (location, params, callback, errorCallback) {
        // Default to the URL so the template is cached.
        const id = typeof params.id === 'undefined' ? location : params.id;
        const cached = Twig.Templates.registry[id];

        // Check for existing template
        if (Twig.cache && typeof cached !== 'undefined') {
            // A template is already saved with the given id.
            if (typeof callback === 'function') {
                callback(cached);
            }
            // TODO: if async, return deferred promise

            return cached;
        }

        // If the parser name hasn't been set, default it to twig
        params.parser = params.parser || 'twig';
        params.id = id;

        // Default to async
        if (typeof params.async === 'undefined') {
            params.async = true;
        }

        // Assume 'fs' if the loader is not defined
        const loader = this.loaders[params.method] || this.loaders.fs;
        return loader.call(this, location, params, callback, errorCallback);
    };

    // Determine object type
    function is(type, obj) {
        const clas = Object.prototype.toString.call(obj).slice(8, -1);
        return obj !== undefined && obj !== null && clas === type;
    }

    /**
     * A wrapper for template blocks.
     *
     * @param  {Twig.Template} The template that the block was originally defined in.
     * @param  {Object} The compiled block token.
     */
    Twig.Block = function (template, token) {
        this.template = template;
        this.token = token;
    };

    /**
     * Render the block using a specific parse state and context.
     *
     * @param  {Twig.ParseState} parseState
     * @param  {Object} context
     *
     * @return {Promise}
     */
    Twig.Block.prototype.render = function (parseState, context) {
        const originalTemplate = parseState.template;
        let promise;

        parseState.template = this.template;

        if (this.token.expression) {
            promise = Twig.expression.parseAsync.call(parseState, this.token.output, context);
        } else {
            promise = parseState.parseAsync(this.token.output, context);
        }

        return promise
            .then(value => {
                return Twig.expression.parseAsync.call(
                    parseState,
                    {
                        type: Twig.expression.type.string,
                        value
                    },
                    context
                );
            })
            .then(output => {
                parseState.template = originalTemplate;

                return output;
            });
    };

    /**
     * Holds the state needed to parse a template.
     *
     * @param {Twig.Template} template The template that the tokens being parsed are associated with.
     * @param {Object} blockOverrides Any blocks that should override those defined in the associated template.
     */
    Twig.ParseState = function (template, blockOverrides, context) {
        this.renderedBlocks = {};
        this.overrideBlocks = blockOverrides === undefined ? {} : blockOverrides;
        this.context = context === undefined ? {} : context;
        this.macros = {};
        this.nestingStack = [];
        this.template = template;
    };

    /**
     * Get a block by its name, resolving in the following order:
     *     - override blocks specified when initialized (except when excluded)
     *     - blocks resolved from the associated template
     *     - blocks resolved from the parent template when extending
     *
     * @param {String} name The name of the block to return.
     * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the overrides and associated template, will not skip by default.
     *
     * @return {Twig.Block|undefined}
     */
    Twig.ParseState.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
        let block;

        if (checkOnlyInheritedBlocks !== true) {
            // Blocks specified when initialized
            block = this.overrideBlocks[name];
        }

        if (block === undefined) {
            // Block defined by the associated template
            block = this.template.getBlock(name, checkOnlyInheritedBlocks);
        }

        if (block === undefined && this.template.parentTemplate !== null) {
            // Block defined in the parent template when extending
            block = this.template.parentTemplate.getBlock(name);
        }

        return block;
    };

    /**
     * Get all the available blocks, resolving in the following order:
     *     - override blocks specified when initialized
     *     - blocks resolved from the associated template
     *     - blocks resolved from the parent template when extending (except when excluded)
     *
     * @param {Boolean} includeParentBlocks Whether to get blocks from the parent template when extending, will always do so by default.
     *
     * @return {Object}
     */
    Twig.ParseState.prototype.getBlocks = function (includeParentBlocks) {
        let blocks = {};

        if (includeParentBlocks !== false &&
            this.template.parentTemplate !== null &&
            // Prevent infinite loop
            this.template.parentTemplate !== this.template
        ) {
            // Blocks from the parent template when extending
            blocks = this.template.parentTemplate.getBlocks();
        }

        blocks = {
            ...blocks,
            // Override with any blocks defined within the associated template
            ...this.template.getBlocks(),
            // Override with any blocks specified when initialized
            ...this.overrideBlocks
        };

        return blocks;
    };

    /**
     * Get the closest token of a specific type to the current nest level.
     *
     * @param  {String} type  The logic token type
     *
     * @return {Object}
     */
    Twig.ParseState.prototype.getNestingStackToken = function (type) {
        let matchingToken;

        this.nestingStack.forEach(token => {
            if (matchingToken === undefined && token.type === type) {
                matchingToken = token;
            }
        });

        return matchingToken;
    };

    /**
     * Parse a set of tokens using the current state.
     *
     * @param {Array} tokens The compiled tokens.
     * @param {Object} context The context to set the state to while parsing.
     * @param {Boolean} allowAsync Whether to parse asynchronously.
     * @param {Object} blocks Blocks that should override any defined while parsing.
     *
     * @return {String} The rendered tokens.
     *
     */
    Twig.ParseState.prototype.parse = function (tokens, context, allowAsync) {
        const state = this;
        let output = [];

        // Store any error that might be thrown by the promise chain.
        let err = null;

        // This will be set to isAsync if template renders synchronously
        let isAsync = true;
        let promise = null;
        // Track logic chains
        let chain = true;

        if (context) {
            state.context = context;
        }

        /*
         * Extracted into it's own function such that the function
         * does not get recreated over and over again in the `forEach`
         * loop below. This method can be compiled and optimized
         * a single time instead of being recreated on each iteration.
         */
        function outputPush(o) {
            output.push(o);
        }

        function parseTokenLogic(logic) {
            if (typeof logic.chain !== 'undefined') {
                chain = logic.chain;
            }

            if (typeof logic.context !== 'undefined') {
                state.context = logic.context;
            }

            if (typeof logic.output !== 'undefined') {
                output.push(logic.output);
            }
        }

        promise = Twig.async.forEach(tokens, token => {
            Twig.log.debug('Twig.ParseState.parse: ', 'Parsing token: ', token);

            switch (token.type) {
                case Twig.token.type.raw:
                    output.push(Twig.filters.raw(token.value));
                    break;

                case Twig.token.type.logic:
                    return Twig.logic.parseAsync.call(state, token.token /* logicToken */, state.context, chain)
                        .then(parseTokenLogic);
                case Twig.token.type.comment:
                    // Do nothing, comments should be ignored
                    break;

                // Fall through whitespace to output
                case Twig.token.type.outputWhitespacePre:
                case Twig.token.type.outputWhitespacePost:
                case Twig.token.type.outputWhitespaceBoth:
                case Twig.token.type.output:
                    Twig.log.debug('Twig.ParseState.parse: ', 'Output token: ', token.stack);
                    // Parse the given expression in the given context
                    return Twig.expression.parseAsync.call(state, token.stack, state.context)
                        .then(outputPush);
                default:
                    break;
            }
        }).then(() => {
            output = Twig.output.call(state.template, output);
            isAsync = false;
            return output;
        }).catch(error => {
            if (allowAsync) {
                handleException(state, error);
            }

            err = error;
        });

        // If `allowAsync` we will always return a promise since we do not
        // know in advance if we are going to run asynchronously or not.
        if (allowAsync) {
            return promise;
        }

        // Handle errors here if we fail synchronously.
        if (err !== null) {
            return handleException(state, err);
        }

        // If `allowAsync` is not true we should not allow the user
        // to use asynchronous functions or filters.
        if (isAsync) {
            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
        }

        return output;
    };

    /**
     * Create a new twig.js template.
     *
     * Parameters: {
     *      data:   The template, either pre-compiled tokens or a string template
     *      id:     The name of this template
     * }
     *
     * @param {Object} params The template parameters.
     */
    Twig.Template = function (params) {
        const {data, id, base, path, url, name, method, options} = params;

        // # What is stored in a Twig.Template
        //
        // The Twig Template hold several chucks of data.
        //
        //     {
        //          id:     The token ID (if any)
        //          tokens: The list of tokens that makes up this template.
        //          base:   The base template (if any)
        //            options:  {
        //                Compiler/parser options
        //
        //                strict_variables: true/false
        //                    Should missing variable/keys emit an error message. If false, they default to null.
        //            }
        //     }
        //

        this.base = base;
        this.blocks = {
            defined: {},
            imported: {}
        };
        this.id = id;
        this.method = method;
        this.name = name;
        this.options = options;
        this.parentTemplate = null;
        this.path = path;
        this.url = url;

        if (is('String', data)) {
            this.tokens = Twig.prepare.call(this, data);
        } else {
            this.tokens = data;
        }

        if (id !== undefined) {
            Twig.Templates.save(this);
        }
    };

    /**
     * Get a block by its name, resolving in the following order:
     *     - blocks defined in the template itself
     *     - blocks imported from another template
     *
     * @param {String} name The name of the block to return.
     * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the blocks defined in the template itself, will not skip by default.
     *
     * @return {Twig.Block|undefined}
     */
    Twig.Template.prototype.getBlock = function (name, checkOnlyInheritedBlocks, checkImports = true) {
        let block;

        if (checkOnlyInheritedBlocks !== true) {
            block = this.blocks.defined[name];
        }

        if (checkImports && block === undefined) {
            block = this.blocks.imported[name];
        }

        if (block === undefined && this.parentTemplate !== null) {
            /**
             * Block defined in the parent template when extending.
             * This recursion is useful to inherit from ascendants.
             * But take care of not considering ascendants' {% use %}
             */
            block = this.parentTemplate.getBlock(name, checkOnlyInheritedBlocks, checkImports = false);
        }

        return block;
    };

    /**
     * Get all the available blocks, resolving in the following order:
     *     - blocks defined in the template itself
     *     - blocks imported from other templates
     *
     * @return {Object}
     */
    Twig.Template.prototype.getBlocks = function () {
        let blocks = {};

        blocks = {
            ...blocks,
            // Get any blocks imported from other templates
            ...this.blocks.imported,
            // Override with any blocks defined within the template itself
            ...this.blocks.defined
        };

        return blocks;
    };

    Twig.Template.prototype.render = function (context, params, allowAsync) {
        const template = this;

        params = params || {};

        return Twig.async.potentiallyAsync(template, allowAsync, () => {
            const state = new Twig.ParseState(template, params.blocks, context);

            return state.parseAsync(template.tokens)
                .then(output => {
                    let parentTemplate;
                    let url;

                    if (template.parentTemplate !== null) {
                        // This template extends another template

                        if (template.options.allowInlineIncludes) {
                            // The template is provided inline
                            parentTemplate = Twig.Templates.load(template.parentTemplate);

                            if (parentTemplate) {
                                parentTemplate.options = template.options;
                            }
                        }

                        // Check for the template file via include
                        if (!parentTemplate) {
                            url = Twig.path.parsePath(template, template.parentTemplate);

                            parentTemplate = Twig.Templates.loadRemote(url, {
                                method: template.getLoaderMethod(),
                                base: template.base,
                                async: false,
                                id: url,
                                options: template.options
                            });
                        }

                        template.parentTemplate = parentTemplate;

                        return template.parentTemplate.renderAsync(
                            state.context,
                            {
                                blocks: state.getBlocks(false),
                                isInclude: true
                            }
                        );
                    }

                    if (params.isInclude === true) {
                        return output;
                    }

                    return output.valueOf();
                });
        });
    };

    Twig.Template.prototype.importFile = function (file) {
        let url = null;
        let subTemplate;
        if (!this.url && this.options.allowInlineIncludes) {
            file = this.path ? Twig.path.parsePath(this, file) : file;
            subTemplate = Twig.Templates.load(file);

            if (!subTemplate) {
                subTemplate = Twig.Templates.loadRemote(url, {
                    id: file,
                    method: this.getLoaderMethod(),
                    async: false,
                    path: file,
                    options: this.options
                });

                if (!subTemplate) {
                    throw new Twig.Error('Unable to find the template ' + file);
                }
            }

            subTemplate.options = this.options;

            return subTemplate;
        }

        url = Twig.path.parsePath(this, file);

        // Load blocks from an external file
        subTemplate = Twig.Templates.loadRemote(url, {
            method: this.getLoaderMethod(),
            base: this.base,
            async: false,
            options: this.options,
            id: url
        });

        return subTemplate;
    };

    Twig.Template.prototype.getLoaderMethod = function () {
        if (this.path) {
            return 'fs';
        }

        if (this.url) {
            return 'ajax';
        }

        return this.method || 'fs';
    };

    Twig.Template.prototype.compile = function (options) {
        // Compile the template into raw JS
        return Twig.compiler.compile(this, options);
    };

    /**
     * Create safe output
     *
     * @param {string} Content safe to output
     *
     * @return {String} Content wrapped into a String
     */

    Twig.Markup = function (content, strategy) {
        if (typeof content !== 'string') {
            return content;
        }

        /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
        const output = new String(content);
        /* eslint-enable */
        output.twigMarkup = (typeof strategy === 'undefined') ? true : strategy;

        return output;
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.exports.js":
/*!************************************************!*\
  !*** ../node_modules/twig/src/twig.exports.js ***!
  \************************************************/
/***/ ((module) => {

// ## twig.exports.js
//
// This file provides extension points and other hooks into the twig functionality.

module.exports = function (Twig) {
    'use strict';
    Twig.exports = {
        VERSION: Twig.VERSION
    };

    /**
     * Create and compile a twig.js template.
     *
     * @param {Object} param Paramteres for creating a Twig template.
     *
     * @return {Twig.Template} A Twig template ready for rendering.
     */
    Twig.exports.twig = function (params) {
        'use strict';
        const {id} = params;
        const options = {
            strictVariables: params.strict_variables || false,
            // TODO: turn autoscape on in the next major version
            autoescape: (params.autoescape !== null && params.autoescape) || false,
            allowInlineIncludes: params.allowInlineIncludes || false,
            rethrow: params.rethrow || false,
            namespaces: params.namespaces
        };

        if (Twig.cache && id) {
            Twig.validateId(id);
        }

        if (params.debug !== undefined) {
            Twig.debug = params.debug;
        }

        if (params.trace !== undefined) {
            Twig.trace = params.trace;
        }

        if (params.data !== undefined) {
            return Twig.Templates.parsers.twig({
                data: params.data,
                path: Object.hasOwnProperty.call(params, 'path') ? params.path : undefined,
                module: params.module,
                id,
                options
            });
        }

        if (params.ref !== undefined) {
            if (params.id !== undefined) {
                throw new Twig.Error('Both ref and id cannot be set on a twig.js template.');
            }

            return Twig.Templates.load(params.ref);
        }

        if (params.method !== undefined) {
            if (!Twig.Templates.isRegisteredLoader(params.method)) {
                throw new Twig.Error('Loader for "' + params.method + '" is not defined.');
            }

            return Twig.Templates.loadRemote(params.name || params.href || params.path || id || undefined, {
                id,
                method: params.method,
                parser: params.parser || 'twig',
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options

            }, params.load, params.error);
        }

        if (params.href !== undefined) {
            return Twig.Templates.loadRemote(params.href, {
                id,
                method: 'ajax',
                parser: params.parser || 'twig',
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options

            }, params.load, params.error);
        }

        if (params.path !== undefined) {
            return Twig.Templates.loadRemote(params.path, {
                id,
                method: 'fs',
                parser: params.parser || 'twig',
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options
            }, params.load, params.error);
        }
    };

    // Extend Twig with a new filter.
    Twig.exports.extendFilter = function (filter, definition) {
        Twig.filter.extend(filter, definition);
    };

    // Extend Twig with a new function.
    Twig.exports.extendFunction = function (fn, definition) {
        Twig._function.extend(fn, definition);
    };

    // Extend Twig with a new test.
    Twig.exports.extendTest = function (test, definition) {
        Twig.test.extend(test, definition);
    };

    // Extend Twig with a new definition.
    Twig.exports.extendTag = function (definition) {
        Twig.logic.extend(definition);
    };

    // Provide an environment for extending Twig core.
    // Calls fn with the internal Twig object.
    Twig.exports.extend = function (fn) {
        fn(Twig);
    };

    /**
     * Provide an extension for use with express 2.
     *
     * @param {string} markup The template markup.
     * @param {array} options The express options.
     *
     * @return {string} The rendered template.
     */
    Twig.exports.compile = function (markup, options) {
        const id = options.filename;
        const path = options.filename;

        // Try to load the template from the cache
        const template = new Twig.Template({
            data: markup,
            path,
            id,
            options: options.settings['twig options']
        }); // Twig.Templates.load(id) ||

        return function (context) {
            return template.render(context);
        };
    };

    /**
     * Provide an extension for use with express 3.
     *
     * @param {string} path The location of the template file on disk.
     * @param {Object|Function} The options or callback.
     * @param {Function} fn callback.
     *
     * @throws Twig.Error
     */
    Twig.exports.renderFile = function (path, options, fn) {
        // Handle callback in options
        if (typeof options === 'function') {
            fn = options;
            options = {};
        }

        options = options || {};

        const settings = options.settings || {};

        // Mixin any options provided to the express app.
        const viewOptions = settings['twig options'];

        const params = {
            path,
            base: settings.views,
            load(template) {
                // Render and return template as a simple string, see https://github.com/twigjs/twig.js/pull/348 for more information
                if (!viewOptions || !viewOptions.allowAsync) {
                    fn(null, String(template.render(options)));
                    return;
                }

                template.renderAsync(options)
                    .then(out => fn(null, out), fn);
            },
            error(err) {
                fn(err);
            }
        };

        if (viewOptions) {
            for (const option in viewOptions) {
                if (Object.hasOwnProperty.call(viewOptions, option)) {
                    params[option] = viewOptions[option];
                }
            }
        }

        Twig.exports.twig(params);
    };

    // Express 3 handler
    Twig.exports.__express = Twig.exports.renderFile;

    /**
     * Shoud Twig.js cache templates.
     * Disable during development to see changes to templates without
     * reloading, and disable in production to improve performance.
     *
     * @param {boolean} cache
     */
    Twig.exports.cache = function (cache) {
        Twig.cache = cache;
    };

    // We need to export the path module so we can effectively test it
    Twig.exports.path = Twig.path;

    // Export our filters.
    // Resolves #307
    Twig.exports.filters = Twig.filters;

    // Export our tests.
    Twig.exports.tests = Twig.tests;

    // Export our functions.
    Twig.exports.functions = Twig.functions;

    Twig.exports.Promise = Twig.Promise;

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.expression.js":
/*!***************************************************!*\
  !*** ../node_modules/twig/src/twig.expression.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// ## twig.expression.js
//
// This file handles tokenizing, compiling and parsing expressions.
module.exports = function (Twig) {
    'use strict';

    function parseParams(state, params, context) {
        if (params) {
            return Twig.expression.parseAsync.call(state, params, context);
        }

        return Twig.Promise.resolve(false);
    }

    /**
     * Namespace for expression handling.
     */
    Twig.expression = { };

    __webpack_require__(/*! ./twig.expression.operator */ "../node_modules/twig/src/twig.expression.operator.js")(Twig);

    /**
     * Reserved word that can't be used as variable names.
     */
    Twig.expression.reservedWords = [
        'true', 'false', 'null', 'TRUE', 'FALSE', 'NULL', '_context', 'and', 'b-and', 'or', 'b-or', 'b-xor', 'in', 'not in', 'if', 'matches', 'starts', 'ends', 'with'
    ];

    /**
     * The type of tokens used in expressions.
     */
    Twig.expression.type = {
        comma: 'Twig.expression.type.comma',
        operator: {
            unary: 'Twig.expression.type.operator.unary',
            binary: 'Twig.expression.type.operator.binary'
        },
        string: 'Twig.expression.type.string',
        bool: 'Twig.expression.type.bool',
        slice: 'Twig.expression.type.slice',
        array: {
            start: 'Twig.expression.type.array.start',
            end: 'Twig.expression.type.array.end'
        },
        object: {
            start: 'Twig.expression.type.object.start',
            end: 'Twig.expression.type.object.end'
        },
        parameter: {
            start: 'Twig.expression.type.parameter.start',
            end: 'Twig.expression.type.parameter.end'
        },
        subexpression: {
            start: 'Twig.expression.type.subexpression.start',
            end: 'Twig.expression.type.subexpression.end'
        },
        key: {
            period: 'Twig.expression.type.key.period',
            brackets: 'Twig.expression.type.key.brackets'
        },
        filter: 'Twig.expression.type.filter',
        _function: 'Twig.expression.type._function',
        variable: 'Twig.expression.type.variable',
        number: 'Twig.expression.type.number',
        _null: 'Twig.expression.type.null',
        context: 'Twig.expression.type.context',
        test: 'Twig.expression.type.test'
    };

    Twig.expression.set = {
        // What can follow an expression (in general)
        operations: [
            Twig.expression.type.filter,
            Twig.expression.type.operator.unary,
            Twig.expression.type.operator.binary,
            Twig.expression.type.array.end,
            Twig.expression.type.object.end,
            Twig.expression.type.parameter.end,
            Twig.expression.type.subexpression.end,
            Twig.expression.type.comma,
            Twig.expression.type.test
        ],
        expressions: [
            Twig.expression.type._function,
            Twig.expression.type.bool,
            Twig.expression.type.string,
            Twig.expression.type.variable,
            Twig.expression.type.number,
            Twig.expression.type._null,
            Twig.expression.type.context,
            Twig.expression.type.parameter.start,
            Twig.expression.type.array.start,
            Twig.expression.type.object.start,
            Twig.expression.type.subexpression.start,
            Twig.expression.type.operator.unary
        ]
    };

    // Most expressions allow a '.' or '[' after them, so we provide a convenience set
    Twig.expression.set.operationsExtended = Twig.expression.set.operations.concat([
        Twig.expression.type.key.period,
        Twig.expression.type.key.brackets,
        Twig.expression.type.slice
    ]);

    // Some commonly used compile and parse functions.
    Twig.expression.fn = {
        compile: {
            push(token, stack, output) {
                output.push(token);
            },
            pushBoth(token, stack, output) {
                output.push(token);
                stack.push(token);
            }
        },
        parse: {
            push(token, stack) {
                stack.push(token);
            },
            pushValue(token, stack) {
                stack.push(token.value);
            }
        }
    };

    // The regular expressions and compile/parse logic used to match tokens in expressions.
    //
    // Properties:
    //
    //      type:  The type of expression this matches
    //
    //      regex: One or more regular expressions that matche the format of the token.
    //
    //      next:  Valid tokens that can occur next in the expression.
    //
    // Functions:
    //
    //      compile: A function that compiles the raw regular expression match into a token.
    //
    //      parse:   A function that parses the compiled token into output.
    //
    Twig.expression.definitions = [
        {
            type: Twig.expression.type.test,
            regex: /^is\s+(not)?\s*([a-zA-Z_]\w*(\s?(?:as|by))?)/,
            next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
            compile(token, stack, output) {
                token.filter = token.match[2];
                token.modifier = token.match[1];
                delete token.match;
                delete token.value;
                output.push(token);
            },
            parse(token, stack, context) {
                const value = stack.pop();
                const state = this;

                return parseParams(state, token.params, context)
                    .then(params => {
                        const result = Twig.test(token.filter, value, params);

                        if (token.modifier === 'not') {
                            stack.push(!result);
                        } else {
                            stack.push(result);
                        }
                    });
            }
        },
        {
            type: Twig.expression.type.comma,
            // Match a comma
            regex: /^,/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
            compile(token, stack, output) {
                let i = stack.length - 1;
                let stackToken;

                delete token.match;
                delete token.value;

                // Pop tokens off the stack until the start of the object
                for (;i >= 0; i--) {
                    stackToken = stack.pop();
                    if (stackToken.type === Twig.expression.type.object.start ||
                            stackToken.type === Twig.expression.type.parameter.start ||
                            stackToken.type === Twig.expression.type.array.start) {
                        stack.push(stackToken);
                        break;
                    }

                    output.push(stackToken);
                }

                output.push(token);
            }
        },
        {
            /**
             * Match a number (integer or decimal)
             */
            type: Twig.expression.type.number,
            // Match a number
            regex: /^-?\d+(\.\d+)?/,
            next: Twig.expression.set.operations,
            compile(token, stack, output) {
                token.value = Number(token.value);
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        },
        {
            type: Twig.expression.type.operator.binary,
            // Match any of ??, ?:, +, *, /, -, %, ~, <=>, <, <=, >, >=, !=, ==, **, ?, :, and, b-and, or, b-or, b-xor, in, not in
            // and, or, in, not in, matches, starts with, ends with can be followed by a space or parenthesis
            regex: /(^\?\?|^\?:|^(b-and)|^(b-or)|^(b-xor)|^[+\-~%?]|^(<=>)|^[:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[(|\s+]|^(or)[(|\s+]|^(in)[(|\s+]|^(not in)[(|\s+]|^(matches)|^(starts with)|^(ends with)|^\.\.)/,
            next: Twig.expression.set.expressions,
            transform(match, tokens) {
                switch (match[0]) {
                    case 'and(':
                    case 'or(':
                    case 'in(':
                    case 'not in(':
                        // Strip off the ( if it exists
                        tokens[tokens.length - 1].value = match[2];
                        return match[0];
                    default:
                        return '';
                }
            },
            compile(token, stack, output) {
                delete token.match;

                token.value = token.value.trim();
                const {value} = token;
                const operator = Twig.expression.operator.lookup(value, token);

                Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

                while (stack.length > 0 &&
                       (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) &&
                            (
                                (operator.associativity === Twig.expression.operator.leftToRight &&
                                 operator.precidence >= stack[stack.length - 1].precidence) ||

                                (operator.associativity === Twig.expression.operator.rightToLeft &&
                                 operator.precidence > stack[stack.length - 1].precidence)
                            )
                ) {
                    const temp = stack.pop();
                    output.push(temp);
                }

                if (value === ':') {
                    // Check if this is a ternary or object key being set
                    if (stack[stack.length - 1] && stack[stack.length - 1].value === '?') {
                        // Continue as normal for a ternary
                    } else {
                        // This is not a ternary so we push the token to the output where it can be handled
                        //   when the assocated object is closed.
                        const keyToken = output.pop();

                        if (keyToken.type === Twig.expression.type.string ||
                                keyToken.type === Twig.expression.type.variable) {
                            token.key = keyToken.value;
                        } else if (keyToken.type === Twig.expression.type.number) {
                            // Convert integer keys into string keys
                            token.key = keyToken.value.toString();
                        } else if (keyToken.expression &&
                            (keyToken.type === Twig.expression.type.parameter.end ||
                            keyToken.type === Twig.expression.type.subexpression.end)) {
                            token.params = keyToken.params;
                        } else {
                            throw new Twig.Error('Unexpected value before \':\' of ' + keyToken.type + ' = ' + keyToken.value);
                        }

                        output.push(token);
                    }
                } else {
                    stack.push(operator);
                }
            },
            parse(token, stack, context) {
                const state = this;

                if (token.key) {
                    // Handle ternary ':' operator
                    stack.push(token);
                } else if (token.params) {
                    // Handle "{(expression):value}"
                    return Twig.expression.parseAsync.call(state, token.params, context)
                        .then(key => {
                            token.key = key;
                            stack.push(token);

                            // If we're in a loop, we might need token.params later, especially in this form of "(expression):value"
                            if (!context.loop) {
                                delete (token.params);
                            }
                        });
                } else {
                    Twig.expression.operator.parse(token.value, stack);
                }
            }
        },
        {
            type: Twig.expression.type.operator.unary,
            // Match any of not
            regex: /(^not\s+)/,
            next: Twig.expression.set.expressions,
            compile(token, stack, output) {
                delete token.match;

                token.value = token.value.trim();
                const {value} = token;
                const operator = Twig.expression.operator.lookup(value, token);

                Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

                while (stack.length > 0 &&
                       (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) &&
                            (
                                (operator.associativity === Twig.expression.operator.leftToRight &&
                                 operator.precidence >= stack[stack.length - 1].precidence) ||

                                (operator.associativity === Twig.expression.operator.rightToLeft &&
                                 operator.precidence > stack[stack.length - 1].precidence)
                            )
                ) {
                    const temp = stack.pop();
                    output.push(temp);
                }

                stack.push(operator);
            },
            parse(token, stack) {
                Twig.expression.operator.parse(token.value, stack);
            }
        },
        {
            /**
             * Match a string. This is anything between a pair of single or double quotes.
             */
            type: Twig.expression.type.string,
            // See: http://blog.stevenlevithan.com/archives/match-quoted-string
            regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let {value} = token;
                delete token.match;

                // Remove the quotes from the string
                if (value.slice(0, 1) === '"') {
                    value = value.replace('\\"', '"');
                } else {
                    value = value.replace('\\\'', '\'');
                }

                token.value = value.slice(1, -1).replace(/\\n/g, '\n').replace(/\\r/g, '\r');
                Twig.log.trace('Twig.expression.compile: ', 'String value: ', token.value);
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        },
        {
            /**
             * Match a subexpression set start.
             */
            type: Twig.expression.type.subexpression.start,
            regex: /^\(/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.subexpression.end]),
            compile(token, stack, output) {
                token.value = '(';
                output.push(token);
                stack.push(token);
            },
            parse: Twig.expression.fn.parse.push
        },
        {
            /**
             * Match a subexpression set end.
             */
            type: Twig.expression.type.subexpression.end,
            regex: /^\)/,
            next: Twig.expression.set.operationsExtended,
            validate(match, tokens) {
                // Iterate back through previous tokens to ensure we follow a subexpression start
                let i = tokens.length - 1;
                let foundSubexpressionStart = false;
                let nextSubexpressionStartInvalid = false;
                let unclosedParameterCount = 0;

                while (!foundSubexpressionStart && i >= 0) {
                    const token = tokens[i];

                    foundSubexpressionStart = token.type === Twig.expression.type.subexpression.start;

                    // If we have previously found a subexpression end, then this subexpression start is the start of
                    // that subexpression, not the subexpression we are searching for
                    if (foundSubexpressionStart && nextSubexpressionStartInvalid) {
                        nextSubexpressionStartInvalid = false;
                        foundSubexpressionStart = false;
                    }

                    // Count parameter tokens to ensure we dont return truthy for a parameter opener
                    if (token.type === Twig.expression.type.parameter.start) {
                        unclosedParameterCount++;
                    } else if (token.type === Twig.expression.type.parameter.end) {
                        unclosedParameterCount--;
                    } else if (token.type === Twig.expression.type.subexpression.end) {
                        nextSubexpressionStartInvalid = true;
                    }

                    i--;
                }

                // If we found unclosed parameters, return false
                // If we didnt find subexpression start, return false
                // Otherwise return true

                return (foundSubexpressionStart && (unclosedParameterCount === 0));
            },
            compile(token, stack, output) {
                // This is basically a copy of parameter end compilation
                let stackToken;
                const endToken = token;

                stackToken = stack.pop();
                while (stack.length > 0 && stackToken.type !== Twig.expression.type.subexpression.start) {
                    output.push(stackToken);
                    stackToken = stack.pop();
                }

                // Move contents of parens into preceding filter
                const paramStack = [];
                while (token.type !== Twig.expression.type.subexpression.start) {
                    // Add token to arguments stack
                    paramStack.unshift(token);
                    token = output.pop();
                }

                paramStack.unshift(token);

                // If the token at the top of the *stack* is a function token, pop it onto the output queue.
                // Get the token preceding the parameters
                stackToken = stack[stack.length - 1];

                if (stackToken === undefined ||
                    (stackToken.type !== Twig.expression.type._function &&
                    stackToken.type !== Twig.expression.type.filter &&
                    stackToken.type !== Twig.expression.type.test &&
                    stackToken.type !== Twig.expression.type.key.brackets)) {
                    endToken.expression = true;

                    // Remove start and end token from stack
                    paramStack.pop();
                    paramStack.shift();

                    endToken.params = paramStack;

                    output.push(endToken);
                } else {
                    // This should never be hit
                    endToken.expression = false;
                    stackToken.params = paramStack;
                }
            },
            parse(token, stack, context) {
                const state = this;

                if (token.expression) {
                    return Twig.expression.parseAsync.call(state, token.params, context)
                        .then(value => {
                            stack.push(value);
                        });
                }

                throw new Twig.Error('Unexpected subexpression end when token is not marked as an expression');
            }
        },
        {
            /**
             * Match a parameter set start.
             */
            type: Twig.expression.type.parameter.start,
            regex: /^\(/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
            validate(match, tokens) {
                const lastToken = tokens[tokens.length - 1];
                // We can't use the regex to test if we follow a space because expression is trimmed
                return lastToken && (!Twig.expression.reservedWords.includes(lastToken.value.trim()));
            },
            compile: Twig.expression.fn.compile.pushBoth,
            parse: Twig.expression.fn.parse.push
        },
        {
            /**
             * Match a parameter set end.
             */
            type: Twig.expression.type.parameter.end,
            regex: /^\)/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let stackToken;
                const endToken = token;

                stackToken = stack.pop();
                while (stack.length > 0 && stackToken.type !== Twig.expression.type.parameter.start) {
                    output.push(stackToken);
                    stackToken = stack.pop();
                }

                // Move contents of parens into preceding filter
                const paramStack = [];
                while (token.type !== Twig.expression.type.parameter.start) {
                    // Add token to arguments stack
                    paramStack.unshift(token);
                    token = output.pop();
                }

                paramStack.unshift(token);

                // Get the token preceding the parameters
                token = output[output.length - 1];

                if (token === undefined ||
                    (token.type !== Twig.expression.type._function &&
                    token.type !== Twig.expression.type.filter &&
                    token.type !== Twig.expression.type.test &&
                    token.type !== Twig.expression.type.key.brackets)) {
                    endToken.expression = true;

                    // Remove start and end token from stack
                    paramStack.pop();
                    paramStack.shift();

                    endToken.params = paramStack;

                    output.push(endToken);
                } else {
                    endToken.expression = false;
                    token.params = paramStack;
                }
            },
            parse(token, stack, context) {
                const newArray = [];
                let arrayEnded = false;
                let value = null;
                const state = this;

                if (token.expression) {
                    return Twig.expression.parseAsync.call(state, token.params, context)
                        .then(value => {
                            stack.push(value);
                        });
                }

                while (stack.length > 0) {
                    value = stack.pop();
                    // Push values into the array until the start of the array
                    if (value && value.type && value.type === Twig.expression.type.parameter.start) {
                        arrayEnded = true;
                        break;
                    }

                    newArray.unshift(value);
                }

                if (!arrayEnded) {
                    throw new Twig.Error('Expected end of parameter set.');
                }

                stack.push(newArray);
            }
        },
        {
            type: Twig.expression.type.slice,
            regex: /^\[(-?\w*:-?\w*)\]/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                const sliceRange = token.match[1].split(':');

                // SliceStart can be undefined when we pass parameters to the slice filter later
                const sliceStart = sliceRange[0];
                const sliceEnd = sliceRange[1];

                token.value = 'slice';
                token.params = [sliceStart, sliceEnd];

                // SliceEnd can't be undefined as the slice filter doesn't check for this, but it does check the length
                // of the params array, so just shorten it.
                if (!sliceEnd) {
                    token.params = [sliceStart];
                }

                output.push(token);
            },
            parse(token, stack, context) {
                const input = stack.pop();
                let {params} = token;
                const state = this;

                if (parseInt(params[0], 10).toString() === params[0]) {
                    params[0] = parseInt(params[0], 10);
                } else {
                    const value = context[params[0]];
                    if (state.template.options.strictVariables && value === undefined) {
                        throw new Twig.Error('Variable "' + params[0] + '" does not exist.');
                    }

                    params[0] = value;
                }

                if (params[1]) {
                    if (parseInt(params[1], 10).toString() === params[1]) {
                        params[1] = parseInt(params[1], 10);
                    } else {
                        const value = context[params[1]];
                        if (state.template.options.strictVariables && value === undefined) {
                            throw new Twig.Error('Variable "' + params[1] + '" does not exist.');
                        }

                        if (value === undefined) {
                            params = [params[0]];
                        } else {
                            params[1] = value;
                        }
                    }
                }

                stack.push(Twig.filter.call(state, token.value, input, params));
            }
        },
        {
            /**
             * Match an array start.
             */
            type: Twig.expression.type.array.start,
            regex: /^\[/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
            compile: Twig.expression.fn.compile.pushBoth,
            parse: Twig.expression.fn.parse.push
        },
        {
            /**
             * Match an array end.
             */
            type: Twig.expression.type.array.end,
            regex: /^\]/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let i = stack.length - 1;
                let stackToken;
                // Pop tokens off the stack until the start of the object
                for (;i >= 0; i--) {
                    stackToken = stack.pop();
                    if (stackToken.type === Twig.expression.type.array.start) {
                        break;
                    }

                    output.push(stackToken);
                }

                output.push(token);
            },
            parse(token, stack) {
                const newArray = [];
                let arrayEnded = false;
                let value = null;

                while (stack.length > 0) {
                    value = stack.pop();
                    // Push values into the array until the start of the array
                    if (value && value.type && value.type === Twig.expression.type.array.start) {
                        arrayEnded = true;
                        break;
                    }

                    newArray.unshift(value);
                }

                if (!arrayEnded) {
                    throw new Twig.Error('Expected end of array.');
                }

                stack.push(newArray);
            }
        },
        // Token that represents the start of a hash map '}'
        //
        // Hash maps take the form:
        //    { "key": 'value', "another_key": item }
        //
        // Keys must be quoted (either single or double) and values can be any expression.
        {
            type: Twig.expression.type.object.start,
            regex: /^\{/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
            compile: Twig.expression.fn.compile.pushBoth,
            parse: Twig.expression.fn.parse.push
        },

        // Token that represents the end of a Hash Map '}'
        //
        // This is where the logic for building the internal
        // representation of a hash map is defined.
        {
            type: Twig.expression.type.object.end,
            regex: /^\}/,
            next: Twig.expression.set.operationsExtended,
            compile(token, stack, output) {
                let i = stack.length - 1;
                let stackToken;

                // Pop tokens off the stack until the start of the object
                for (;i >= 0; i--) {
                    stackToken = stack.pop();
                    if (stackToken && stackToken.type === Twig.expression.type.object.start) {
                        break;
                    }

                    output.push(stackToken);
                }

                output.push(token);
            },
            parse(endToken, stack) {
                const newObject = {};
                let objectEnded = false;
                let token = null;
                let hasValue = false;
                let value = null;

                while (stack.length > 0) {
                    token = stack.pop();
                    // Push values into the array until the start of the object
                    if (token && token.type && token.type === Twig.expression.type.object.start) {
                        objectEnded = true;
                        break;
                    }

                    if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
                        if (!hasValue) {
                            throw new Twig.Error('Missing value for key \'' + token.key + '\' in object definition.');
                        }

                        newObject[token.key] = value;

                        // Preserve the order that elements are added to the map
                        // This is necessary since JavaScript objects don't
                        // guarantee the order of keys
                        if (newObject._keys === undefined) {
                            newObject._keys = [];
                        }

                        newObject._keys.unshift(token.key);

                        // Reset value check
                        value = null;
                        hasValue = false;
                    } else {
                        hasValue = true;
                        value = token;
                    }
                }

                if (!objectEnded) {
                    throw new Twig.Error('Unexpected end of object.');
                }

                stack.push(newObject);
            }
        },

        // Token representing a filter
        //
        // Filters can follow any expression and take the form:
        //    expression|filter(optional, args)
        //
        // Filter parsing is done in the Twig.filters namespace.
        {
            type: Twig.expression.type.filter,
            // Match a | then a letter or _, then any number of letters, numbers, _ or -
            regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_-]*)/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile(token, stack, output) {
                token.value = token.match[1];
                output.push(token);
            },
            parse(token, stack, context) {
                const input = stack.pop();
                const state = this;

                return parseParams(state, token.params, context)
                    .then(params => {
                        return Twig.filter.call(state, token.value, input, params);
                    })
                    .then(value => {
                        stack.push(value);
                    });
            }
        },
        {
            type: Twig.expression.type._function,
            // Match any letter or _, then any number of letters, numbers, _ or - followed by (
            regex: /^([a-zA-Z_]\w*)\s*\(/,
            next: Twig.expression.type.parameter.start,
            validate(match) {
                // Make sure this function is not a reserved word
                return match[1] && (!Twig.expression.reservedWords.includes(match[1]));
            },
            transform() {
                return '(';
            },
            compile(token, stack, output) {
                const fn = token.match[1];
                token.fn = fn;
                // Cleanup token
                delete token.match;
                delete token.value;

                output.push(token);
            },
            parse(token, stack, context) {
                const state = this;
                const {fn} = token;
                let value;

                return parseParams(state, token.params, context)
                    .then(params => {
                        if (Twig.functions[fn]) {
                        // Get the function from the built-in functions
                            value = Twig.functions[fn].apply(state, params);
                        } else if (typeof context[fn] === 'function') {
                        // Get the function from the user/context defined functions
                            value = context[fn](...params);
                        } else {
                            throw new Twig.Error(fn + ' function does not exist and is not defined in the context');
                        }

                        return value;
                    })
                    .then(result => {
                        stack.push(result);
                    });
            }
        },

        // Token representing a variable.
        //
        // Variables can contain letters, numbers, underscores and
        // dashes, but must start with a letter or underscore.
        //
        // Variables are retrieved from the render context and take
        // the value of 'undefined' if the given variable doesn't
        // exist in the context.
        {
            type: Twig.expression.type.variable,
            // Match any letter or _, then any number of letters, numbers, _ or -
            regex: /^[a-zA-Z_]\w*/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile: Twig.expression.fn.compile.push,
            validate(match) {
                return (!Twig.expression.reservedWords.includes(match[0]));
            },
            parse(token, stack, context) {
                const state = this;

                // Get the variable from the context
                return Twig.expression.resolveAsync.call(state, context[token.value], context)
                    .then(value => {
                        if (state.template.options.strictVariables && value === undefined) {
                            throw new Twig.Error('Variable "' + token.value + '" does not exist.');
                        }

                        stack.push(value);
                    });
            }
        },
        {
            type: Twig.expression.type.key.period,
            regex: /^\.(\w+)/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile(token, stack, output) {
                token.key = token.match[1];
                delete token.match;
                delete token.value;

                output.push(token);
            },
            parse(token, stack, context, nextToken) {
                const state = this;
                const {key} = token;
                const object = stack.pop();
                let value;

                if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
                    const keys = Object.keys(object);
                    if (keys.length > 0) {
                        throw new Twig.Error('Key "' + key + '" for object with keys "' + Object.keys(object).join(', ') + '" does not exist.');
                    } else {
                        throw new Twig.Error('Key "' + key + '" does not exist as the object is empty.');
                    }
                }

                return parseParams(state, token.params, context)
                    .then(params => {
                        if (object === null || object === undefined) {
                            value = undefined;
                        } else {
                            const capitalize = function (value) {
                                return value.slice(0, 1).toUpperCase() + value.slice(1);
                            };

                            // Get the variable from the context
                            if (typeof object === 'object' && key in object) {
                                value = object[key];
                            } else if (object['get' + capitalize(key)]) {
                                value = object['get' + capitalize(key)];
                            } else if (object['is' + capitalize(key)]) {
                                value = object['is' + capitalize(key)];
                            } else {
                                value = undefined;
                            }
                        }

                        // When resolving an expression we need to pass nextToken in case the expression is a function
                        return Twig.expression.resolveAsync.call(state, value, context, params, nextToken, object);
                    })
                    .then(result => {
                        stack.push(result);
                    });
            }
        },
        {
            type: Twig.expression.type.key.brackets,
            regex: /^\[([^\]]*)\]/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile(token, stack, output) {
                const match = token.match[1];
                delete token.value;
                delete token.match;

                // The expression stack for the key
                token.stack = Twig.expression.compile({
                    value: match
                }).stack;

                output.push(token);
            },
            parse(token, stack, context, nextToken) {
                // Evaluate key
                const state = this;
                let params = null;
                let object;
                let value;

                return parseParams(state, token.params, context)
                    .then(parameters => {
                        params = parameters;
                        return Twig.expression.parseAsync.call(state, token.stack, context);
                    })
                    .then(key => {
                        object = stack.pop();

                        if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
                            const keys = Object.keys(object);
                            if (keys.length > 0) {
                                throw new Twig.Error('Key "' + key + '" for array with keys "' + keys.join(', ') + '" does not exist.');
                            } else {
                                throw new Twig.Error('Key "' + key + '" does not exist as the array is empty.');
                            }
                        } else if (object === null || object === undefined) {
                            return null;
                        }

                        // Get the variable from the context
                        if (typeof object === 'object' && key in object) {
                            value = object[key];
                        } else {
                            value = null;
                        }

                        // When resolving an expression we need to pass nextToken in case the expression is a function
                        return Twig.expression.resolveAsync.call(state, value, object, params, nextToken);
                    })
                    .then(result => {
                        stack.push(result);
                    });
            }
        },
        {
            /**
             * Match a null value.
             */
            type: Twig.expression.type._null,
            // Match a number
            regex: /^(null|NULL|none|NONE)/,
            next: Twig.expression.set.operations,
            compile(token, stack, output) {
                delete token.match;
                token.value = null;
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        },
        {
            /**
             * Match the context
             */
            type: Twig.expression.type.context,
            regex: /^_context/,
            next: Twig.expression.set.operationsExtended.concat([
                Twig.expression.type.parameter.start
            ]),
            compile: Twig.expression.fn.compile.push,
            parse(token, stack, context) {
                stack.push(context);
            }
        },
        {
            /**
             * Match a boolean
             */
            type: Twig.expression.type.bool,
            regex: /^(true|TRUE|false|FALSE)/,
            next: Twig.expression.set.operations,
            compile(token, stack, output) {
                token.value = (token.match[0].toLowerCase() === 'true');
                delete token.match;
                output.push(token);
            },
            parse: Twig.expression.fn.parse.pushValue
        }
    ];

    /**
     * Resolve a context value.
     *
     * If the value is a function, it is executed with a context parameter.
     *
     * @param {string} key The context object key.
     * @param {Object} context The render context.
     */
    Twig.expression.resolveAsync = function (value, context, params, nextToken, object) {
        const state = this;

        if (typeof value !== 'function') {
            return Twig.Promise.resolve(value);
        }

        let promise = Twig.Promise.resolve(params);

        /*
        If value is a function, it will have been impossible during the compile stage to determine that a following
        set of parentheses were parameters for this function.

        Those parentheses will have therefore been marked as an expression, with their own parameters, which really
        belong to this function.

        Those parameters will also need parsing in case they are actually an expression to pass as parameters.
            */
        if (nextToken && nextToken.type === Twig.expression.type.parameter.end) {
            // When parsing these parameters, we need to get them all back, not just the last item on the stack.
            const tokensAreParameters = true;

            promise = promise.then(() => {
                return nextToken.params && Twig.expression.parseAsync.call(state, nextToken.params, context, tokensAreParameters);
            })
                .then(p => {
                // Clean up the parentheses tokens on the next loop
                    nextToken.cleanup = true;

                    return p;
                });
        }

        return promise.then(params => {
            return value.apply(object || context, params || []);
        });
    };

    Twig.expression.resolve = function (value, context, params, nextToken, object) {
        return Twig.async.potentiallyAsync(this, false, function () {
            return Twig.expression.resolveAsync.call(this, value, context, params, nextToken, object);
        });
    };

    /**
     * Registry for logic handlers.
     */
    Twig.expression.handler = {};

    /**
     * Define a new expression type, available at Twig.logic.type.{type}
     *
     * @param {string} type The name of the new type.
     */
    Twig.expression.extendType = function (type) {
        Twig.expression.type[type] = 'Twig.expression.type.' + type;
    };

    /**
     * Extend the expression parsing functionality with a new definition.
     *
     * Token definitions follow this format:
     *  {
     *      type:     One of Twig.expression.type.[type], either pre-defined or added using
     *                    Twig.expression.extendType
     *
     *      next:     Array of types from Twig.expression.type that can follow this token,
     *
     *      regex:    A regex or array of regex's that should match the token.
     *
     *      compile: function(token, stack, output) called when this token is being compiled.
     *                   Should return an object with stack and output set.
     *
     *      parse:   function(token, stack, context) called when this token is being parsed.
     *                   Should return an object with stack and context set.
     *  }
     *
     * @param {Object} definition A token definition.
     */
    Twig.expression.extend = function (definition) {
        if (!definition.type) {
            throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
        }

        Twig.expression.handler[definition.type] = definition;
    };

    // Extend with built-in expressions
    while (Twig.expression.definitions.length > 0) {
        Twig.expression.extend(Twig.expression.definitions.shift());
    }

    /**
     * Break an expression into tokens defined in Twig.expression.definitions.
     *
     * @param {Object} rawToken The string to tokenize.
     *
     * @return {Array} An array of tokens.
     */
    Twig.expression.tokenize = function (rawToken) {
        let expression = rawToken.value;
        const tokens = [];
        // Keep an offset of the location in the expression for error messages.
        let expOffset = 0;
        // The valid next tokens of the previous token
        let next = null;
        // Match information
        let type;
        let regex;
        let regexI;
        // The possible next token for the match
        let tokenNext;
        // Has a match been found from the definitions
        let matchFound;
        let invalidMatches = [];

        const matchFunction = function (...args) {
            // Don't pass arguments to `Array.slice`, that is a performance killer
            let matchI = arguments.length - 2;
            const match = new Array(matchI);

            while (matchI-- > 0) {
                match[matchI] = args[matchI];
            }

            Twig.log.trace('Twig.expression.tokenize',
                'Matched a ', type, ' regular expression of ', match);

            if (next && !next.includes(type)) {
                invalidMatches.push(
                    type + ' cannot follow a ' + tokens[tokens.length - 1].type +
                           ' at template:' + expOffset + ' near \'' + match[0].slice(0, 20) +
                           '...\''
                );

                // Not a match, don't change the expression
                return match[0];
            }

            const handler = Twig.expression.handler[type];

            // Validate the token if a validation function is provided
            if (handler.validate && !handler.validate(match, tokens)) {
                return match[0];
            }

            invalidMatches = [];

            const token = {
                type,
                value: match[0],
                match
            };

            if (rawToken.position) {
                token.position = rawToken.position;
            }

            tokens.push(token);

            matchFound = true;
            next = tokenNext;
            expOffset += match[0].length;

            // Does the token need to return output back to the expression string
            // e.g. a function match of cycle( might return the '(' back to the expression
            // This allows look-ahead to differentiate between token types (e.g. functions and variable names)
            if (handler.transform) {
                return handler.transform(match, tokens);
            }

            return '';
        };

        Twig.log.debug('Twig.expression.tokenize', 'Tokenizing expression ', expression);

        while (expression.length > 0) {
            expression = expression.trim();
            for (type in Twig.expression.handler) {
                if (Object.hasOwnProperty.call(Twig.expression.handler, type)) {
                    tokenNext = Twig.expression.handler[type].next;
                    regex = Twig.expression.handler[type].regex;
                    Twig.log.trace('Checking type ', type, ' on ', expression);

                    matchFound = false;

                    if (Array.isArray(regex)) {
                        regexI = regex.length;
                        while (regexI-- > 0) {
                            expression = expression.replace(regex[regexI], matchFunction);
                        }
                    } else {
                        expression = expression.replace(regex, matchFunction);
                    }

                    // An expression token has been matched. Break the for loop and start trying to
                    //  match the next template (if expression isn't empty.)
                    if (matchFound) {
                        break;
                    }
                }
            }

            if (!matchFound) {
                if (invalidMatches.length > 0) {
                    throw new Twig.Error(invalidMatches.join(' OR '));
                } else {
                    throw new Twig.Error('Unable to parse \'' + expression + '\' at template position' + expOffset);
                }
            }
        }

        Twig.log.trace('Twig.expression.tokenize', 'Tokenized to ', tokens);
        return tokens;
    };

    /**
     * Compile an expression token.
     *
     * @param {Object} rawToken The uncompiled token.
     *
     * @return {Object} The compiled token.
     */
    Twig.expression.compile = function (rawToken) {
        // Tokenize expression
        const tokens = Twig.expression.tokenize(rawToken);
        let token = null;
        const output = [];
        const stack = [];
        let tokenTemplate = null;

        Twig.log.trace('Twig.expression.compile: ', 'Compiling ', rawToken.value);

        // Push tokens into RPN stack using the Shunting-yard algorithm
        // See http://en.wikipedia.org/wiki/Shunting_yard_algorithm

        while (tokens.length > 0) {
            token = tokens.shift();
            tokenTemplate = Twig.expression.handler[token.type];

            Twig.log.trace('Twig.expression.compile: ', 'Compiling ', token);

            // Compile the template
            tokenTemplate.compile(token, stack, output);

            Twig.log.trace('Twig.expression.compile: ', 'Stack is', stack);
            Twig.log.trace('Twig.expression.compile: ', 'Output is', output);
        }

        while (stack.length > 0) {
            output.push(stack.pop());
        }

        Twig.log.trace('Twig.expression.compile: ', 'Final output is', output);

        rawToken.stack = output;
        delete rawToken.value;

        return rawToken;
    };

    /**
     * Parse an RPN expression stack within a context.
     *
     * @param {Array} tokens An array of compiled expression tokens.
     * @param {Object} context The render context to parse the tokens with.
     *
     * @return {Object} The result of parsing all the tokens. The result
     *                  can be anything, String, Array, Object, etc... based on
     *                  the given expression.
     */
    Twig.expression.parse = function (tokens, context, tokensAreParameters, allowAsync) {
        const state = this;

        // If the token isn't an array, make it one.
        if (!Array.isArray(tokens)) {
            tokens = [tokens];
        }

        // The output stack
        const stack = [];
        const loopTokenFixups = [];
        const binaryOperator = Twig.expression.type.operator.binary;

        return Twig.async.potentiallyAsync(state, allowAsync, () => {
            return Twig.async.forEach(tokens, (token, index) => {
                let tokenTemplate = null;
                let nextToken = null;
                let result;

                // If the token is marked for cleanup, we don't need to parse it
                if (token.cleanup) {
                    return;
                }

                // Determine the token that follows this one so that we can pass it to the parser
                if (tokens.length > index + 1) {
                    nextToken = tokens[index + 1];
                }

                tokenTemplate = Twig.expression.handler[token.type];

                if (tokenTemplate.parse) {
                    result = tokenTemplate.parse.call(state, token, stack, context, nextToken);
                }

                // Store any binary tokens for later if we are in a loop.
                if (token.type === binaryOperator && context.loop) {
                    loopTokenFixups.push(token);
                }

                return result;
            })
                .then(() => {
                // Check every fixup and remove "key" as long as they still have "params". This covers the use case where
                // a ":" operator is used in a loop with a "(expression):" statement. We need to be able to evaluate the expression
                    let len = loopTokenFixups.length;
                    let loopTokenFixup = null;

                    while (len-- > 0) {
                        loopTokenFixup = loopTokenFixups[len];
                        if (loopTokenFixup.params && loopTokenFixup.key) {
                            delete loopTokenFixup.key;
                        }
                    }

                    // If parse has been called with a set of tokens that are parameters, we need to return the whole stack,
                    // wrapped in an Array.
                    if (tokensAreParameters) {
                        const params = stack.splice(0);

                        stack.push(params);
                    }

                    // Pop the final value off the stack
                    return stack.pop();
                });
        });
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.expression.operator.js":
/*!************************************************************!*\
  !*** ../node_modules/twig/src/twig.expression.operator.js ***!
  \************************************************************/
/***/ ((module) => {

// ## twig.expression.operator.js
//
// This file handles operator lookups and parsing.
module.exports = function (Twig) {
    'use strict';

    /**
     * Operator associativity constants.
     */
    Twig.expression.operator = {
        leftToRight: 'leftToRight',
        rightToLeft: 'rightToLeft'
    };

    const containment = function (a, b) {
        if (b === undefined || b === null) {
            return null;
        }

        if (b.indexOf !== undefined) {
            // String
            return (a === b || a !== '') && b.includes(a);
        }

        let el;
        for (el in b) {
            if (Object.hasOwnProperty.call(b, el) && b[el] === a) {
                return true;
            }
        }

        return false;
    };

    /**
     * Get the precidence and associativity of an operator. These follow the order that C/C++ use.
     * See http://en.wikipedia.org/wiki/Operators_in_C_and_C++ for the table of values.
     */
    Twig.expression.operator.lookup = function (operator, token) {
        switch (operator) {
            case '..':
                token.precidence = 20;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case ',':
                token.precidence = 18;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            // Ternary
            case '?:':
            case '?':
            case ':':
                token.precidence = 16;
                token.associativity = Twig.expression.operator.rightToLeft;
                break;

            // Null-coalescing operator
            case '??':
                token.precidence = 15;
                token.associativity = Twig.expression.operator.rightToLeft;
                break;

            case 'or':
                token.precidence = 14;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'and':
                token.precidence = 13;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'b-or':
                token.precidence = 12;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'b-xor':
                token.precidence = 11;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'b-and':
                token.precidence = 10;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '==':
            case '!=':
                token.precidence = 9;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '<=>':
                token.precidence = 9;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '<':
            case '<=':
            case '>':
            case '>=':
            case 'not in':
            case 'in':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '~': // String concatination
            case '+':
            case '-':
                token.precidence = 6;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case '//':
            case '**':
            case '*':
            case '/':
            case '%':
                token.precidence = 5;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'not':
                token.precidence = 3;
                token.associativity = Twig.expression.operator.rightToLeft;
                break;

            case 'matches':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'starts with':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            case 'ends with':
                token.precidence = 8;
                token.associativity = Twig.expression.operator.leftToRight;
                break;

            default:
                throw new Twig.Error('Failed to lookup operator: ' + operator + ' is an unknown operator.');
        }

        token.operator = operator;
        return token;
    };

    /**
     * Handle operations on the RPN stack.
     *
     * Returns the updated stack.
     */
    Twig.expression.operator.parse = function (operator, stack) {
        Twig.log.trace('Twig.expression.operator.parse: ', 'Handling ', operator);
        let a;
        let b;
        let c;

        if (operator === '?') {
            c = stack.pop();
        }

        b = stack.pop();
        if (operator !== 'not') {
            a = stack.pop();
        }

        if (operator !== 'in' && operator !== 'not in' && operator !== '??') {
            if (a && Array.isArray(a)) {
                a = a.length;
            }

            if (operator !== '?' && (b && Array.isArray(b))) {
                b = b.length;
            }
        }

        if (operator === 'matches') {
            if (b && typeof b === 'string') {
                const reParts = b.match(/^\/(.*)\/([gims]?)$/);
                const reBody = reParts[1];
                const reFlags = reParts[2];
                b = new RegExp(reBody, reFlags);
            }
        }

        switch (operator) {
            case ':':
                // Ignore
                break;

            case '??':
                if (a === undefined) {
                    a = b;
                    b = c;
                    c = undefined;
                }

                if (a !== undefined && a !== null) {
                    stack.push(a);
                } else {
                    stack.push(b);
                }

                break;
            case '?:':
                if (Twig.lib.boolval(a)) {
                    stack.push(a);
                } else {
                    stack.push(b);
                }

                break;
            case '?':
                if (a === undefined) {
                    // An extended ternary.
                    a = b;
                    b = c;
                    c = undefined;
                }

                if (Twig.lib.boolval(a)) {
                    stack.push(b);
                } else {
                    stack.push(c);
                }

                break;

            case '+':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a + b);
                break;

            case '-':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a - b);
                break;

            case '*':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a * b);
                break;

            case '/':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a / b);
                break;

            case '//':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(Math.floor(a / b));
                break;

            case '%':
                b = parseFloat(b);
                a = parseFloat(a);
                stack.push(a % b);
                break;

            case '~':
                stack.push((typeof a !== 'undefined' && a !== null ? a.toString() : '') +
                          (typeof b !== 'undefined' && b !== null ? b.toString() : ''));
                break;

            case 'not':
            case '!':
                stack.push(!Twig.lib.boolval(b));
                break;

            case '<=>':
                stack.push(a === b ? 0 : (a < b ? -1 : 1));
                break;

            case '<':
                stack.push(a < b);
                break;

            case '<=':
                stack.push(a <= b);
                break;

            case '>':
                stack.push(a > b);
                break;

            case '>=':
                stack.push(a >= b);
                break;

            case '===':
                stack.push(a === b);
                break;

            case '==':
                /* eslint-disable-next-line eqeqeq */
                stack.push(a == b);
                break;

            case '!==':
                stack.push(a !== b);
                break;

            case '!=':
                /* eslint-disable-next-line eqeqeq */
                stack.push(a != b);
                break;

            case 'or':
                stack.push(Twig.lib.boolval(a) || Twig.lib.boolval(b));
                break;

            case 'b-or':
                stack.push(a | b);
                break;

            case 'b-xor':
                stack.push(a ^ b);
                break;

            case 'and':
                stack.push(Twig.lib.boolval(a) && Twig.lib.boolval(b));
                break;

            case 'b-and':
                stack.push(a & b);
                break;

            case '**':
                stack.push(a ** b);
                break;

            case 'not in':
                stack.push(!containment(a, b));
                break;

            case 'in':
                stack.push(containment(a, b));
                break;

            case 'matches':
                stack.push(b.test(a));
                break;

            case 'starts with':
                stack.push(typeof a === 'string' && a.indexOf(b) === 0);
                break;

            case 'ends with':
                stack.push(typeof a === 'string' && a.includes(b, a.length - b.length));
                break;

            case '..':
                stack.push(Twig.functions.range(a, b));
                break;

            default:
                throw new Twig.Error('Failed to parse operator: ' + operator + ' is an unknown operator.');
        }
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.factory.js":
/*!************************************************!*\
  !*** ../node_modules/twig/src/twig.factory.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// ## twig.factory.js
//
// This file handles creating the Twig library
module.exports = function factory() {
    const Twig = {
        VERSION: '1.17.1'
    };

    __webpack_require__(/*! ./twig.core */ "../node_modules/twig/src/twig.core.js")(Twig);
    __webpack_require__(/*! ./twig.compiler */ "../node_modules/twig/src/twig.compiler.js")(Twig);
    __webpack_require__(/*! ./twig.expression */ "../node_modules/twig/src/twig.expression.js")(Twig);
    __webpack_require__(/*! ./twig.filters */ "../node_modules/twig/src/twig.filters.js")(Twig);
    __webpack_require__(/*! ./twig.functions */ "../node_modules/twig/src/twig.functions.js")(Twig);
    __webpack_require__(/*! ./twig.lib */ "../node_modules/twig/src/twig.lib.js")(Twig);
    __webpack_require__(/*! ./twig.loader.ajax */ "../node_modules/twig/src/twig.loader.ajax.js")(Twig);
    __webpack_require__(/*! ./twig.loader.fs */ "../node_modules/twig/src/twig.loader.fs.js")(Twig);
    __webpack_require__(/*! ./twig.logic */ "../node_modules/twig/src/twig.logic.js")(Twig);
    __webpack_require__(/*! ./twig.parser.source */ "../node_modules/twig/src/twig.parser.source.js")(Twig);
    __webpack_require__(/*! ./twig.parser.twig */ "../node_modules/twig/src/twig.parser.twig.js")(Twig);
    __webpack_require__(/*! ./twig.path */ "../node_modules/twig/src/twig.path.js")(Twig);
    __webpack_require__(/*! ./twig.tests */ "../node_modules/twig/src/twig.tests.js")(Twig);
    __webpack_require__(/*! ./twig.async */ "../node_modules/twig/src/twig.async.js")(Twig);
    __webpack_require__(/*! ./twig.exports */ "../node_modules/twig/src/twig.exports.js")(Twig);

    Twig.exports.factory = factory;

    return Twig.exports;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.filters.js":
/*!************************************************!*\
  !*** ../node_modules/twig/src/twig.filters.js ***!
  \************************************************/
/***/ ((module) => {

// ## twig.filters.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
    // Determine object type
    function is(type, obj) {
        const clas = Object.prototype.toString.call(obj).slice(8, -1);
        return obj !== undefined && obj !== null && clas === type;
    }

    Twig.filters = {
        // String Filters
        upper(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.toUpperCase();
        },
        lower(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.toLowerCase();
        },
        capitalize(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1);
        },
        title(value) {
            if (typeof value !== 'string') {
                return value;
            }

            return value.toLowerCase().replace(/(^|\s)([a-z])/g, (m, p1, p2) => {
                return p1 + p2.toUpperCase();
            });
        },
        length(value) {
            if (Twig.lib.is('Array', value) || typeof value === 'string') {
                return value.length;
            }

            if (Twig.lib.is('Object', value)) {
                if (value._keys === undefined) {
                    return Object.keys(value).length;
                }

                return value._keys.length;
            }

            return 0;
        },

        // Array/Object Filters
        reverse(value) {
            if (is('Array', value)) {
                return value.reverse();
            }

            if (is('String', value)) {
                return value.split('').reverse().join('');
            }

            if (is('Object', value)) {
                const keys = value._keys || Object.keys(value).reverse();
                value._keys = keys;
                return value;
            }
        },
        sort(value) {
            if (is('Array', value)) {
                return value.sort();
            }

            if (is('Object', value)) {
                // Sorting objects isn't obvious since the order of
                // returned keys isn't guaranteed in JavaScript.
                // Because of this we use a "hidden" key called _keys to
                // store the keys in the order we want to return them.

                delete value._keys;
                const keys = Object.keys(value);
                const sortedKeys = keys.sort((a, b) => {
                    let a1;
                    let b1;

                    // If a and b are comparable, we're fine :-)
                    if ((value[a] > value[b]) === !(value[a] <= value[b])) {
                        return value[a] > value[b] ? 1 :
                            (value[a] < value[b] ? -1 : 0);
                    }

                    // If a and b can be parsed as numbers, we can compare
                    // their numeric value
                    if (!isNaN(a1 = parseFloat(value[a])) &&
                                !isNaN(b1 = parseFloat(value[b]))) {
                        return a1 > b1 ? 1 : (a1 < b1 ? -1 : 0);
                    }

                    // If one of the values is a string, we convert the
                    // other value to string as well
                    if (typeof value[a] === 'string') {
                        return value[a] > value[b].toString() ? 1 :
                            (value[a] < value[b].toString() ? -1 : 0);
                    }

                    if (typeof value[b] === 'string') {
                        return value[a].toString() > value[b] ? 1 :
                            (value[a].toString() < value[b] ? -1 : 0);
                    }
                    // Everything failed - return 'null' as sign, that
                    // the values are not comparable

                    return null;
                });
                value._keys = sortedKeys;
                return value;
            }
        },
        keys(value) {
            if (value === undefined || value === null) {
                return;
            }

            const keyset = value._keys || Object.keys(value);
            const output = [];

            keyset.forEach(key => {
                if (key === '_keys') {
                    return;
                } // Ignore the _keys property

                if (Object.hasOwnProperty.call(value, key)) {
                    output.push(key);
                }
            });
            return output;
        },
        /* eslint-disable-next-line camelcase */
        url_encode(value) {
            if (value === undefined || value === null) {
                return;
            }

            if (Twig.lib.is('Object', value)) {
                const serialize = function (obj, prefix) {
                    const result = [];
                    const keyset = obj._keys || Object.keys(obj);

                    keyset.forEach(key => {
                        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                            return;
                        }

                        const resultKey = prefix ? prefix + '[' + key + ']' : key;
                        const resultValue = obj[key];

                        result.push(
                            (Twig.lib.is('Object', resultValue) || Array.isArray(resultValue)) ?
                                serialize(resultValue, resultKey) :
                                encodeURIComponent(resultKey) + '=' + encodeURIComponent(resultValue)
                        );
                    });

                    return result.join('&amp;');
                };

                return serialize(value);
            }

            let result = encodeURIComponent(value);
            result = result.replace('\'', '%27');
            return result;
        },
        join(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            let joinStr = '';
            let output = [];
            let keyset = null;

            if (params && params[0]) {
                joinStr = params[0];
            }

            if (is('Array', value)) {
                output = value;
            } else {
                keyset = value._keys || Object.keys(value);
                keyset.forEach(key => {
                    if (key === '_keys') {
                        return;
                    } // Ignore the _keys property

                    if (Object.hasOwnProperty.call(value, key)) {
                        output.push(value[key]);
                    }
                });
            }

            return output.join(joinStr);
        },
        default(value, params) {
            if (params !== undefined && params.length > 1) {
                throw new Twig.Error('default filter expects one argument');
            }

            if (value === undefined || value === null || value === '') {
                if (params === undefined) {
                    return '';
                }

                return params[0];
            }

            return value;
        },
        /* eslint-disable-next-line camelcase */
        json_encode(value) {
            if (value === undefined || value === null) {
                return 'null';
            }

            if ((typeof value === 'object') && (is('Array', value))) {
                const output = [];

                value.forEach(v => {
                    output.push(Twig.filters.json_encode(v));
                });

                return '[' + output.join(',') + ']';
            }

            if ((typeof value === 'object') && (is('Date', value))) {
                return '"' + value.toISOString() + '"';
            }

            if (typeof value === 'object') {
                const keyset = value._keys || Object.keys(value);
                const output = [];

                keyset.forEach(key => {
                    output.push(JSON.stringify(key) + ':' + Twig.filters.json_encode(value[key]));
                });

                return '{' + output.join(',') + '}';
            }

            return JSON.stringify(value);
        },
        merge(value, params) {
            let obj = [];
            let arrIndex = 0;
            let keyset = [];

            // Check to see if all the objects being merged are arrays
            if (is('Array', value)) {
                params.forEach(param => {
                    if (!is('Array', param)) {
                        obj = { };
                    }
                });
            } else {
                // Create obj as an Object
                obj = { };
            }

            if (!is('Array', obj)) {
                obj._keys = [];
            }

            if (is('Array', value)) {
                value.forEach(val => {
                    if (obj._keys) {
                        obj._keys.push(arrIndex);
                    }

                    obj[arrIndex] = val;
                    arrIndex++;
                });
            } else {
                keyset = value._keys || Object.keys(value);
                keyset.forEach(key => {
                    obj[key] = value[key];
                    obj._keys.push(key);

                    // Handle edge case where a number index in an object is greater than
                    //   the array counter. In such a case, the array counter is increased
                    //   one past the index.
                    //
                    // Example {{ ["a", "b"]|merge({"4":"value"}, ["c", "d"])
                    // Without this, d would have an index of "4" and overwrite the value
                    //   of "value"
                    const intKey = parseInt(key, 10);
                    if (!isNaN(intKey) && intKey >= arrIndex) {
                        arrIndex = intKey + 1;
                    }
                });
            }

            // Mixin the merge arrays
            params.forEach(param => {
                if (is('Array', param)) {
                    param.forEach(val => {
                        if (obj._keys) {
                            obj._keys.push(arrIndex);
                        }

                        obj[arrIndex] = val;
                        arrIndex++;
                    });
                } else {
                    keyset = param._keys || Object.keys(param);
                    keyset.forEach(key => {
                        if (!obj[key]) {
                            obj._keys.push(key);
                        }

                        obj[key] = param[key];

                        const intKey = parseInt(key, 10);
                        if (!isNaN(intKey) && intKey >= arrIndex) {
                            arrIndex = intKey + 1;
                        }
                    });
                }
            });
            if (params.length === 0) {
                throw new Twig.Error('Filter merge expects at least one parameter');
            }

            return obj;
        },

        date(value, params) {
            const date = Twig.functions.date(value);
            const format = params && Boolean(params.length) ? params[0] : 'F j, Y H:i';
            return Twig.lib.date(format.replace(/\\\\/g, '\\'), date);
        },
        /* eslint-disable-next-line camelcase */
        date_modify(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            if (params === undefined || params.length !== 1) {
                throw new Twig.Error('date_modify filter expects 1 argument');
            }

            const modifyText = params[0];
            let time;

            if (Twig.lib.is('Date', value)) {
                time = Twig.lib.strtotime(modifyText, value.getTime() / 1000);
            }

            if (Twig.lib.is('String', value)) {
                time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value));
            }

            if (Twig.lib.is('Number', value)) {
                time = Twig.lib.strtotime(modifyText, value);
            }

            return new Date(time * 1000);
        },

        replace(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            const pairs = params[0];
            let tag;
            for (tag in pairs) {
                if (Object.hasOwnProperty.call(pairs, tag) && tag !== '_keys') {
                    value = Twig.lib.replaceAll(value, tag, pairs[tag]);
                }
            }

            return value;
        },

        format(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            return Twig.lib.vsprintf(value, params);
        },

        striptags(value, allowed) {
            if (value === undefined || value === null) {
                return;
            }

            return Twig.lib.stripTags(value, allowed);
        },

        escape(value, params) {
            if (value === undefined || value === null || value === '') {
                return;
            }

            let strategy = 'html';
            if (params && Boolean(params.length) && params[0] !== true) {
                strategy = params[0];
            }

            if (strategy === 'html') {
                const rawValue = value.toString().replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
                return new Twig.Markup(rawValue, 'html');
            }

            if (strategy === 'js') {
                const rawValue = value.toString();
                let result = '';

                for (let i = 0; i < rawValue.length; i++) {
                    if (rawValue[i].match(/^[a-zA-Z0-9,._]$/)) {
                        result += rawValue[i];
                    } else {
                        const char = rawValue.charAt(i);
                        const charCode = rawValue.charCodeAt(i);

                        // A few characters have short escape sequences in JSON and JavaScript.
                        // Escape sequences supported only by JavaScript, not JSON, are ommitted.
                        // \" is also supported but omitted, because the resulting string is not HTML safe.
                        const shortMap = {
                            '\\': '\\\\',
                            '/': '\\/',
                            '\u0008': '\\b',
                            '\u000C': '\\f',
                            '\u000A': '\\n',
                            '\u000D': '\\r',
                            '\u0009': '\\t'
                        };

                        if (shortMap[char]) {
                            result += shortMap[char];
                        } else {
                            result += Twig.lib.sprintf('\\u%04s', charCode.toString(16).toUpperCase());
                        }
                    }
                }

                return new Twig.Markup(result, 'js');
            }

            if (strategy === 'css') {
                const rawValue = value.toString();
                let result = '';

                for (let i = 0; i < rawValue.length; i++) {
                    if (rawValue[i].match(/^[a-zA-Z0-9]$/)) {
                        result += rawValue[i];
                    } else {
                        const charCode = rawValue.charCodeAt(i);
                        result += '\\' + charCode.toString(16).toUpperCase() + ' ';
                    }
                }

                return new Twig.Markup(result, 'css');
            }

            if (strategy === 'url') {
                const result = Twig.filters.url_encode(value);
                return new Twig.Markup(result, 'url');
            }

            if (strategy === 'html_attr') {
                const rawValue = value.toString();
                let result = '';

                for (let i = 0; i < rawValue.length; i++) {
                    if (rawValue[i].match(/^[a-zA-Z0-9,.\-_]$/)) {
                        result += rawValue[i];
                    } else if (rawValue[i].match(/^[&<>"]$/)) {
                        result += rawValue[i].replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;');
                    } else {
                        const charCode = rawValue.charCodeAt(i);

                        // The following replaces characters undefined in HTML with
                        // the hex entity for the Unicode replacement character.
                        if (charCode <= 0x1F && charCode !== 0x09 && charCode !== 0x0A && charCode !== 0x0D) {
                            result += '&#xFFFD;';
                        } else if (charCode < 0x80) {
                            result += Twig.lib.sprintf('&#x%02s;', charCode.toString(16).toUpperCase());
                        } else {
                            result += Twig.lib.sprintf('&#x%04s;', charCode.toString(16).toUpperCase());
                        }
                    }
                }

                return new Twig.Markup(result, 'html_attr');
            }

            throw new Twig.Error('escape strategy unsupported');
        },

        /* Alias of escape */
        e(value, params) {
            return Twig.filters.escape(value, params);
        },

        nl2br(value) {
            if (value === undefined || value === null || value === '') {
                return;
            }

            const linebreakTag = 'BACKSLASH_n_replace';
            const br = '<br />' + linebreakTag;

            value = Twig.filters.escape(value)
                .replace(/\r\n/g, br)
                .replace(/\r/g, br)
                .replace(/\n/g, br);

            value = Twig.lib.replaceAll(value, linebreakTag, '\n');

            return new Twig.Markup(value);
        },

        /**
         * Adapted from: http://phpjs.org/functions/number_format:481
         */
        /* eslint-disable-next-line camelcase */
        number_format(value, params) {
            let number = value;
            const decimals = (params && params[0]) ? params[0] : undefined;
            const dec = (params && params[1] !== undefined) ? params[1] : '.';
            const sep = (params && params[2] !== undefined) ? params[2] : ',';

            number = (String(number)).replace(/[^0-9+\-Ee.]/g, '');
            const n = isFinite(Number(number)) ? Number(number) : 0;
            const prec = isFinite(Number(decimals)) ? Math.abs(decimals) : 0;
            let s = '';
            const toFixedFix = function (n, prec) {
                const k = 10 ** prec;
                return String(Math.round(n * k) / k);
            };

            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }

            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }

            return s.join(dec);
        },

        trim(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            let str = String(value);
            let whitespace;
            if (params && params[0]) {
                whitespace = String(params[0]);
            } else {
                whitespace = ' \n\r\t\f\u000B\u00A0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
            }

            for (let i = 0; i < str.length; i++) {
                if (!whitespace.includes(str.charAt(i))) {
                    str = str.slice(Math.max(0, i));
                    break;
                }
            }

            for (let i = str.length - 1; i >= 0; i--) {
                if (!whitespace.includes(str.charAt(i))) {
                    str = str.slice(0, Math.max(0, i + 1));
                    break;
                }
            }

            return whitespace.includes(str.charAt(0)) ? '' : str;
        },

        truncate(value, params) {
            let length = 30;
            let preserve = false;
            let separator = '...';

            value = String(value);
            if (params) {
                if (params[0]) {
                    length = params[0];
                }

                if (params[1]) {
                    preserve = params[1];
                }

                if (params[2]) {
                    separator = params[2];
                }
            }

            if (value.length > length) {
                if (preserve) {
                    length = value.indexOf(' ', length);
                    if (length === -1) {
                        return value;
                    }
                }

                value = value.slice(0, length) + separator;
            }

            return value;
        },

        slice(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            if (params === undefined || params.length === 0) {
                throw new Twig.Error('slice filter expects at least 1 argument');
            }

            // Default to start of string
            const start = params[0] || 0;
            // Default to length of string
            let length = params.length > 1 ? params[1] : value.length;
            // Handle negative start values
            const startIndex = start >= 0 ? start : Math.max(value.length + start, 0);
            // Handle negative length values
            if (length < 0) {
                length = value.length - startIndex + length;
            }

            if (Twig.lib.is('Array', value)) {
                const output = [];
                for (let i = startIndex; i < startIndex + length && i < value.length; i++) {
                    output.push(value[i]);
                }

                return output;
            }

            if (Twig.lib.is('String', value)) {
                return value.slice(startIndex, startIndex + length);
            }

            throw new Twig.Error('slice filter expects value to be an array or string');
        },

        abs(value) {
            if (value === undefined || value === null) {
                return;
            }

            return Math.abs(value);
        },

        first(value) {
            if (is('Array', value)) {
                return value[0];
            }

            if (is('Object', value)) {
                if ('_keys' in value) {
                    return value[value._keys[0]];
                }
            } else if (typeof value === 'string') {
                return value.slice(0, 1);
            }
        },

        split(value, params) {
            if (value === undefined || value === null) {
                return;
            }

            if (params === undefined || params.length === 0 || params.length > 2) {
                throw new Twig.Error('split filter expects 1 or 2 argument');
            }

            if (Twig.lib.is('String', value)) {
                const delimiter = params[0];
                const limit = params[1];
                const split = value.split(delimiter);

                if (limit === undefined) {
                    return split;
                }

                if (limit < 0) {
                    return value.split(delimiter, split.length + limit);
                }

                const limitedSplit = [];

                if (delimiter === '') {
                    // Empty delimiter
                    // "aabbcc"|split('', 2)
                    //     -> ['aa', 'bb', 'cc']

                    while (split.length > 0) {
                        let temp = '';
                        for (let i = 0; i < limit && split.length > 0; i++) {
                            temp += split.shift();
                        }

                        limitedSplit.push(temp);
                    }
                } else {
                    // Non-empty delimiter
                    // "one,two,three,four,five"|split(',', 3)
                    //     -> ['one', 'two', 'three,four,five']

                    for (let i = 0; i < limit - 1 && split.length > 0; i++) {
                        limitedSplit.push(split.shift());
                    }

                    if (split.length > 0) {
                        limitedSplit.push(split.join(delimiter));
                    }
                }

                return limitedSplit;
            }

            throw new Twig.Error('split filter expects value to be a string');
        },
        last(value) {
            if (Twig.lib.is('Object', value)) {
                let keys;

                if (value._keys === undefined) {
                    keys = Object.keys(value);
                } else {
                    keys = value._keys;
                }

                return value[keys[keys.length - 1]];
            }

            if (Twig.lib.is('Number', value)) {
                return value.toString().slice(-1);
            }

            // String|array
            return value[value.length - 1];
        },
        raw(value) {
            return new Twig.Markup(value || '');
        },
        batch(items, params) {
            let size = params.shift();
            const fill = params.shift();
            let last;
            let missing;

            if (!Twig.lib.is('Array', items)) {
                throw new Twig.Error('batch filter expects items to be an array');
            }

            if (!Twig.lib.is('Number', size)) {
                throw new Twig.Error('batch filter expects size to be a number');
            }

            size = Math.ceil(size);

            const result = Twig.lib.chunkArray(items, size);

            if (fill && items.length % size !== 0) {
                last = result.pop();
                missing = size - last.length;

                while (missing--) {
                    last.push(fill);
                }

                result.push(last);
            }

            return result;
        },
        round(value, params) {
            params = params || [];

            const precision = params.length > 0 ? params[0] : 0;
            const method = params.length > 1 ? params[1] : 'common';

            value = parseFloat(value);

            if (precision && !Twig.lib.is('Number', precision)) {
                throw new Twig.Error('round filter expects precision to be a number');
            }

            if (method === 'common') {
                return Twig.lib.round(value, precision);
            }

            if (!Twig.lib.is('Function', Math[method])) {
                throw new Twig.Error('round filter expects method to be \'floor\', \'ceil\', or \'common\'');
            }

            return Math[method](value * (10 ** precision)) / (10 ** precision);
        },
        spaceless(value) {
            return value.replace(/>\s+</g, '><').trim();
        }
    };

    Twig.filter = function (filter, value, params) {
        const state = this;

        if (!Twig.filters[filter]) {
            throw new Twig.Error('Unable to find filter ' + filter);
        }

        return Twig.filters[filter].call(state, value, params);
    };

    Twig.filter.extend = function (filter, definition) {
        Twig.filters[filter] = definition;
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.functions.js":
/*!**************************************************!*\
  !*** ../node_modules/twig/src/twig.functions.js ***!
  \**************************************************/
/***/ ((module) => {

// ## twig.functions.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
    /**
     * @constant
     * @type {string}
     */
    const TEMPLATE_NOT_FOUND_MESSAGE = 'Template "{name}" is not defined.';

    Twig.functions = {
        //  Attribute, block, constant, date, dump, parent, random,.

        // Range function from http://phpjs.org/functions/range:499
        // Used under an MIT License
        range(low, high, step) {
            // http://kevin.vanzonneveld.net
            // +   original by: Waldo Malqui Silva
            // *     example 1: range ( 0, 12 );
            // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            // *     example 2: range( 0, 100, 10 );
            // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
            // *     example 3: range( 'a', 'i' );
            // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
            // *     example 4: range( 'c', 'a' );
            // *     returns 4: ['c', 'b', 'a']
            const matrix = [];
            let inival;
            let endval;
            const walker = step || 1;
            let chars = false;

            if (!isNaN(low) && !isNaN(high)) {
                inival = parseInt(low, 10);
                endval = parseInt(high, 10);
            } else if (isNaN(low) && isNaN(high)) {
                chars = true;
                inival = low.charCodeAt(0);
                endval = high.charCodeAt(0);
            } else {
                inival = (isNaN(low) ? 0 : low);
                endval = (isNaN(high) ? 0 : high);
            }

            const plus = (!((inival > endval)));
            if (plus) {
                while (inival <= endval) {
                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                    inival += walker;
                }
            } else {
                while (inival >= endval) {
                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                    inival -= walker;
                }
            }

            return matrix;
        },
        cycle(arr, i) {
            const pos = i % arr.length;
            return arr[pos];
        },
        dump(...args) {
            // Don't pass arguments to `Array.slice`, that is a performance killer

            const argsCopy = [...args];
            const state = this;

            const EOL = '\n';
            const indentChar = '  ';
            let indentTimes = 0;
            let out = '';
            const indent = function (times) {
                let ind = '';
                while (times > 0) {
                    times--;
                    ind += indentChar;
                }

                return ind;
            };

            const displayVar = function (variable) {
                out += indent(indentTimes);
                if (typeof (variable) === 'object') {
                    dumpVar(variable);
                } else if (typeof (variable) === 'function') {
                    out += 'function()' + EOL;
                } else if (typeof (variable) === 'string') {
                    out += 'string(' + variable.length + ') "' + variable + '"' + EOL;
                } else if (typeof (variable) === 'number') {
                    out += 'number(' + variable + ')' + EOL;
                } else if (typeof (variable) === 'boolean') {
                    out += 'bool(' + variable + ')' + EOL;
                }
            };

            const dumpVar = function (variable) {
                let i;
                if (variable === null) {
                    out += 'NULL' + EOL;
                } else if (variable === undefined) {
                    out += 'undefined' + EOL;
                } else if (typeof variable === 'object') {
                    out += indent(indentTimes) + typeof (variable);
                    indentTimes++;
                    out += '(' + (function (obj) {
                        let size = 0;
                        let key;
                        for (key in obj) {
                            if (Object.hasOwnProperty.call(obj, key)) {
                                size++;
                            }
                        }

                        return size;
                    })(variable) + ') {' + EOL;
                    for (i in variable) {
                        if (Object.hasOwnProperty.call(variable, i)) {
                            out += indent(indentTimes) + '[' + i + ']=> ' + EOL;
                            displayVar(variable[i]);
                        }
                    }

                    indentTimes--;
                    out += indent(indentTimes) + '}' + EOL;
                } else {
                    displayVar(variable);
                }
            };

            // Handle no argument case by dumping the entire render context
            if (argsCopy.length === 0) {
                argsCopy.push(state.context);
            }

            argsCopy.forEach(variable => {
                dumpVar(variable);
            });

            return out;
        },
        date(date) {
            let dateObj;
            if (date === undefined || date === null || date === '') {
                dateObj = new Date();
            } else if (Twig.lib.is('Date', date)) {
                dateObj = date;
            } else if (Twig.lib.is('String', date)) {
                if (date.match(/^\d+$/)) {
                    dateObj = new Date(date * 1000);
                } else {
                    dateObj = new Date(Twig.lib.strtotime(date) * 1000);
                }
            } else if (Twig.lib.is('Number', date)) {
                // Timestamp
                dateObj = new Date(date * 1000);
            } else {
                throw new Twig.Error('Unable to parse date ' + date);
            }

            return dateObj;
        },
        block(blockName) {
            const state = this;

            const block = state.getBlock(blockName);

            if (block !== undefined) {
                return block.render(state, state.context);
            }
        },
        parent() {
            const state = this;

            return state.getBlock(state.getNestingStackToken(Twig.logic.type.block).blockName, true).render(state, state.context);
        },
        attribute(object, method, params) {
            if (Twig.lib.is('Object', object)) {
                if (Object.hasOwnProperty.call(object, method)) {
                    if (typeof object[method] === 'function') {
                        return object[method].apply(undefined, params);
                    }

                    return object[method];
                }
            }

            // Array will return element 0-index
            return object ? (object[method] || undefined) : undefined;
        },
        max(values, ...args) {
            if (Twig.lib.is('Object', values)) {
                delete values._keys;
                return Twig.lib.max(values);
            }

            return Reflect.apply(Twig.lib.max, null, [values, ...args]);
        },
        min(values, ...args) {
            if (Twig.lib.is('Object', values)) {
                delete values._keys;
                return Twig.lib.min(values);
            }

            return Reflect.apply(Twig.lib.min, null, [values, ...args]);
        },
        /* eslint-disable-next-line camelcase */
        template_from_string(template) {
            const state = this;

            if (template === undefined) {
                template = '';
            }

            return Twig.Templates.parsers.twig({
                options: state.template.options,
                data: template
            });
        },
        random(value) {
            const LIMIT_INT31 = 0x80000000;

            function getRandomNumber(n) {
                const random = Math.floor(Math.random() * LIMIT_INT31);
                const min = Math.min.call(null, 0, n);
                const max = Math.max.call(null, 0, n);
                return min + Math.floor((max - min + 1) * random / LIMIT_INT31);
            }

            if (Twig.lib.is('Number', value)) {
                return getRandomNumber(value);
            }

            if (Twig.lib.is('String', value)) {
                return value.charAt(getRandomNumber(value.length - 1));
            }

            if (Twig.lib.is('Array', value)) {
                return value[getRandomNumber(value.length - 1)];
            }

            if (Twig.lib.is('Object', value)) {
                const keys = Object.keys(value);
                return value[keys[getRandomNumber(keys.length - 1)]];
            }

            return getRandomNumber(LIMIT_INT31 - 1);
        },

        /**
         * Returns the content of a template without rendering it
         * @param {string} name
         * @param {boolean} [ignoreMissing=false]
         * @returns {string}
         */
        source(name, ignoreMissing) {
            const state = this;
            const {namespaces} = state.template.options;
            let templateSource;
            let templateFound = false;
            const isNodeEnvironment =  true && typeof module.exports !== 'undefined' && typeof window === 'undefined';
            let loader;
            let path = name;

            if (namespaces && typeof namespaces === 'object') {
                path = Twig.path.expandNamespace(namespaces, path);
            }

            // If we are running in a node.js environment, set the loader to 'fs'.
            if (isNodeEnvironment) {
                loader = 'fs';
            } else {
                loader = 'ajax';
            }

            // Build the params object
            const params = {
                id: name,
                path,
                method: loader,
                parser: 'source',
                async: false,
                fetchTemplateSource: true
            };

            // Default ignoreMissing to false
            if (typeof ignoreMissing === 'undefined') {
                ignoreMissing = false;
            }

            // Try to load the remote template
            //
            // on exception, log it
            try {
                templateSource = Twig.Templates.loadRemote(name, params);

                // If the template is undefined or null, set the template to an empty string and do NOT flip the
                // boolean indicating we found the template
                //
                // else, all is good! flip the boolean indicating we found the template
                if (typeof templateSource === 'undefined' || templateSource === null) {
                    templateSource = '';
                } else {
                    templateFound = true;
                }
            } catch (error) {
                Twig.log.debug('Twig.functions.source: ', 'Problem loading template  ', error);
            }

            // If the template was NOT found AND we are not ignoring missing templates, return the same message
            // that is returned by the PHP implementation of the twig source() function
            //
            // else, return the template source
            if (!templateFound && !ignoreMissing) {
                return TEMPLATE_NOT_FOUND_MESSAGE.replace('{name}', name);
            }

            return templateSource;
        }
    };

    Twig._function = function (_function, value, params) {
        if (!Twig.functions[_function]) {
            throw new Twig.Error('Unable to find function ' + _function);
        }

        return Twig.functions[_function](value, params);
    };

    Twig._function.extend = function (_function, definition) {
        Twig.functions[_function] = definition;
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.js":
/*!****************************************!*\
  !*** ../node_modules/twig/src/twig.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Twig.js
 *
 * @copyright 2011-2020 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/twigjs/twig.js
 */

module.exports = __webpack_require__(/*! ./twig.factory */ "../node_modules/twig/src/twig.factory.js")();


/***/ }),

/***/ "../node_modules/twig/src/twig.lib.js":
/*!********************************************!*\
  !*** ../node_modules/twig/src/twig.lib.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// ## twig.lib.js
//
// This file contains 3rd party libraries used within twig.
//
// Copies of the licenses for the code included here can be found in the
// LICENSES.md file.
//

module.exports = function (Twig) {
    // Namespace for libraries
    Twig.lib = { };

    Twig.lib.sprintf = __webpack_require__(/*! locutus/php/strings/sprintf */ "../node_modules/locutus/php/strings/sprintf.js");
    Twig.lib.vsprintf = __webpack_require__(/*! locutus/php/strings/vsprintf */ "../node_modules/locutus/php/strings/vsprintf.js");
    Twig.lib.round = __webpack_require__(/*! locutus/php/math/round */ "../node_modules/locutus/php/math/round.js");
    Twig.lib.max = __webpack_require__(/*! locutus/php/math/max */ "../node_modules/locutus/php/math/max.js");
    Twig.lib.min = __webpack_require__(/*! locutus/php/math/min */ "../node_modules/locutus/php/math/min.js");
    Twig.lib.stripTags = __webpack_require__(/*! locutus/php/strings/strip_tags */ "../node_modules/locutus/php/strings/strip_tags.js");
    Twig.lib.strtotime = __webpack_require__(/*! locutus/php/datetime/strtotime */ "../node_modules/locutus/php/datetime/strtotime.js");
    Twig.lib.date = __webpack_require__(/*! locutus/php/datetime/date */ "../node_modules/locutus/php/datetime/date.js");
    Twig.lib.boolval = __webpack_require__(/*! locutus/php/var/boolval */ "../node_modules/locutus/php/var/boolval.js");

    Twig.lib.is = function (type, obj) {
        if (typeof obj === 'undefined' || obj === null) {
            return false;
        }

        switch (type) {
            case 'Array':
                return Array.isArray(obj);
            case 'Date':
                return obj instanceof Date;
            case 'String':
                return (typeof obj === 'string' || obj instanceof String);
            case 'Number':
                return (typeof obj === 'number' || obj instanceof Number);
            case 'Function':
                return (typeof obj === 'function');
            case 'Object':
                return obj instanceof Object;
            default:
                return false;
        }
    };

    Twig.lib.replaceAll = function (string, search, replace) {
        // Convert type to string if needed
        const stringToChange = typeof string === 'string' ? string : string.toString();
        // Escape possible regular expression syntax
        const searchEscaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return stringToChange.replace(new RegExp(searchEscaped, 'g'), replace);
    };

    // Chunk an array (arr) into arrays of (size) items, returns an array of arrays, or an empty array on invalid input
    Twig.lib.chunkArray = function (arr, size) {
        const returnVal = [];
        let x = 0;
        const len = arr.length;

        if (size < 1 || !Array.isArray(arr)) {
            return [];
        }

        while (x < len) {
            returnVal.push(arr.slice(x, x += size));
        }

        return returnVal;
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.loader.ajax.js":
/*!****************************************************!*\
  !*** ../node_modules/twig/src/twig.loader.ajax.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (Twig) {
    'use strict';

    Twig.Templates.registerLoader('ajax', function (location, params, callback, errorCallback) {
        let template;
        const {precompiled} = params;
        const parser = this.parsers[params.parser] || this.parser.twig;

        if (typeof XMLHttpRequest === 'undefined') {
            throw new Twig.Error('Unsupported platform: Unable to do ajax requests ' +
                                 'because there is no "XMLHTTPRequest" implementation');
        }

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            let data = null;

            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200 || (window.cordova && xmlhttp.status === 0)) {
                    Twig.log.debug('Got template ', xmlhttp.responseText);

                    if (precompiled === true) {
                        data = JSON.parse(xmlhttp.responseText);
                    } else {
                        data = xmlhttp.responseText;
                    }

                    params.url = location;
                    params.data = data;

                    template = parser.call(this, params);

                    if (typeof callback === 'function') {
                        callback(template);
                    }
                } else if (typeof errorCallback === 'function') {
                    errorCallback(xmlhttp);
                }
            }
        };

        xmlhttp.open('GET', location, Boolean(params.async));
        xmlhttp.overrideMimeType('text/plain');
        xmlhttp.send();

        if (params.async) {
            // TODO: return deferred promise
            return true;
        }

        return template;
    });
};


/***/ }),

/***/ "../node_modules/twig/src/twig.loader.fs.js":
/*!**************************************************!*\
  !*** ../node_modules/twig/src/twig.loader.fs.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function (Twig) {
    'use strict';

    let fs;
    let path;

    try {
        // Require lib dependencies at runtime
        fs = __webpack_require__(/*! fs */ "?eae6");
        path = __webpack_require__(/*! path */ "../node_modules/path/path.js");
    } catch (error) {
        // NOTE: this is in a try/catch to avoid errors cross platform
        console.warn('Missing fs and path modules. ' + error);
    }

    Twig.Templates.registerLoader('fs', function (location, params, callback, errorCallback) {
        let template;
        let data = null;
        const {precompiled} = params;
        const parser = this.parsers[params.parser] || this.parser.twig;

        if (!fs || !path) {
            throw new Twig.Error('Unsupported platform: Unable to load from file ' +
                                 'because there is no "fs" or "path" implementation');
        }

        const loadTemplateFn = function (err, data) {
            if (err) {
                if (typeof errorCallback === 'function') {
                    errorCallback(err);
                }

                return;
            }

            if (precompiled === true) {
                data = JSON.parse(data);
            }

            params.data = data;
            params.path = params.path || location;

            // Template is in data
            template = parser.call(this, params);

            if (typeof callback === 'function') {
                callback(template);
            }
        };

        params.path = params.path || location;

        if (params.async) {
            fs.stat(params.path, (err, stats) => {
                if (err || !stats.isFile()) {
                    if (typeof errorCallback === 'function') {
                        errorCallback(new Twig.Error('Unable to find template file ' + params.path));
                    }

                    return;
                }

                fs.readFile(params.path, 'utf8', loadTemplateFn);
            });
            // TODO: return deferred promise
            return true;
        }

        try {
            if (!fs.statSync(params.path).isFile()) {
                throw new Twig.Error('Unable to find template file ' + params.path);
            }
        } catch (error) {
            throw new Twig.Error('Unable to find template file ' + params.path + '. ' + error);
        }

        data = fs.readFileSync(params.path, 'utf8');
        loadTemplateFn(undefined, data);
        return template;
    });
};


/***/ }),

/***/ "../node_modules/twig/src/twig.logic.js":
/*!**********************************************!*\
  !*** ../node_modules/twig/src/twig.logic.js ***!
  \**********************************************/
/***/ ((module) => {

// ## twig.logic.js
//
// This file handles tokenizing, compiling and parsing logic tokens. {% ... %}
module.exports = function (Twig) {
    'use strict';

    /**
     * Namespace for logic handling.
     */
    Twig.logic = {};

    /**
     * Logic token types.
     */
    Twig.logic.type = {
        if_: 'Twig.logic.type.if',
        endif: 'Twig.logic.type.endif',
        for_: 'Twig.logic.type.for',
        endfor: 'Twig.logic.type.endfor',
        else_: 'Twig.logic.type.else',
        elseif: 'Twig.logic.type.elseif',
        set: 'Twig.logic.type.set',
        setcapture: 'Twig.logic.type.setcapture',
        endset: 'Twig.logic.type.endset',
        filter: 'Twig.logic.type.filter',
        endfilter: 'Twig.logic.type.endfilter',
        apply: 'Twig.logic.type.apply',
        endapply: 'Twig.logic.type.endapply',
        do: 'Twig.logic.type.do',
        shortblock: 'Twig.logic.type.shortblock',
        block: 'Twig.logic.type.block',
        endblock: 'Twig.logic.type.endblock',
        extends_: 'Twig.logic.type.extends',
        use: 'Twig.logic.type.use',
        include: 'Twig.logic.type.include',
        spaceless: 'Twig.logic.type.spaceless',
        endspaceless: 'Twig.logic.type.endspaceless',
        macro: 'Twig.logic.type.macro',
        endmacro: 'Twig.logic.type.endmacro',
        import_: 'Twig.logic.type.import',
        from: 'Twig.logic.type.from',
        embed: 'Twig.logic.type.embed',
        endembed: 'Twig.logic.type.endembed',
        with: 'Twig.logic.type.with',
        endwith: 'Twig.logic.type.endwith',
        deprecated: 'Twig.logic.type.deprecated'
    };

    // Regular expressions for handling logic tokens.
    //
    // Properties:
    //
    //      type:  The type of expression this matches
    //
    //      regex: A regular expression that matches the format of the token
    //
    //      next:  What logic tokens (if any) pop this token off the logic stack. If empty, the
    //             logic token is assumed to not require an end tag and isn't push onto the stack.
    //
    //      open:  Does this tag open a logic expression or is it standalone. For example,
    //             {% endif %} cannot exist without an opening {% if ... %} tag, so open = false.
    //
    //  Functions:
    //
    //      compile: A function that handles compiling the token into an output token ready for
    //               parsing with the parse function.
    //
    //      parse:   A function that parses the compiled token into output (HTML / whatever the
    //               template represents).
    Twig.logic.definitions = [
        {
            /**
             * If type logic tokens.
             *
             *  Format: {% if expression %}
             */
            type: Twig.logic.type.if_,
            regex: /^if\s?([\s\S]+)$/,
            next: [
                Twig.logic.type.else_,
                Twig.logic.type.elseif,
                Twig.logic.type.endif
            ],
            open: true,
            compile(token) {
                const expression = token.match[1];
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(result => {
                        chain = true;

                        if (Twig.lib.boolval(result)) {
                            chain = false;

                            return state.parseAsync(token.output, context);
                        }

                        return '';
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * Else if type logic tokens.
             *
             *  Format: {% elseif expression %}
             */
            type: Twig.logic.type.elseif,
            regex: /^elseif\s*([^\s].*)$/,
            next: [
                Twig.logic.type.else_,
                Twig.logic.type.elseif,
                Twig.logic.type.endif
            ],
            open: false,
            compile(token) {
                const expression = token.match[1];
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(result => {
                        if (chain && Twig.lib.boolval(result)) {
                            chain = false;

                            return state.parseAsync(token.output, context);
                        }

                        return '';
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * Else type logic tokens.
             *
             *  Format: {% else %}
             */
            type: Twig.logic.type.else_,
            regex: /^else$/,
            next: [
                Twig.logic.type.endif,
                Twig.logic.type.endfor
            ],
            open: false,
            parse(token, context, chain) {
                let promise = Twig.Promise.resolve('');
                const state = this;

                if (chain) {
                    promise = state.parseAsync(token.output, context);
                }

                return promise.then(output => {
                    return {
                        chain,
                        output
                    };
                });
            }
        },
        {
            /**
             * End if type logic tokens.
             *
             *  Format: {% endif %}
             */
            type: Twig.logic.type.endif,
            regex: /^endif$/,
            next: [],
            open: false
        },
        {
            /**
             * For type logic tokens.
             *
             *  Format: {% for expression %}
             */
            type: Twig.logic.type.for_,
            regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([\S\s]+?)(?:\s+if\s+([^\s].*))?$/,
            next: [
                Twig.logic.type.else_,
                Twig.logic.type.endfor
            ],
            open: true,
            compile(token) {
                const keyValue = token.match[1];
                const expression = token.match[2];
                const conditional = token.match[3];
                let kvSplit = null;

                token.keyVar = null;
                token.valueVar = null;

                if (keyValue.includes(',')) {
                    kvSplit = keyValue.split(',');
                    if (kvSplit.length === 2) {
                        token.keyVar = kvSplit[0].trim();
                        token.valueVar = kvSplit[1].trim();
                    } else {
                        throw new Twig.Error('Invalid expression in for loop: ' + keyValue);
                    }
                } else {
                    token.valueVar = keyValue.trim();
                }

                // Valid expressions for a for loop
                //   for item     in expression
                //   for key,item in expression

                // Compile the expression.
                token.expression = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                // Compile the conditional (if available)
                if (conditional) {
                    token.conditional = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: conditional
                    }).stack;
                }

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                // Parse expression
                const output = [];
                let len;
                let index = 0;
                let keyset;
                const state = this;
                const {conditional} = token;
                const buildLoop = function (index, len) {
                    const isConditional = conditional !== undefined;
                    return {
                        index: index + 1,
                        index0: index,
                        revindex: isConditional ? undefined : len - index,
                        revindex0: isConditional ? undefined : len - index - 1,
                        first: (index === 0),
                        last: isConditional ? undefined : (index === len - 1),
                        length: isConditional ? undefined : len,
                        parent: context
                    };
                };

                // Run once for each iteration of the loop
                const loop = function (key, value) {
                    const innerContext = {...context};

                    innerContext[token.valueVar] = value;

                    if (token.keyVar) {
                        innerContext[token.keyVar] = key;
                    }

                    // Loop object
                    innerContext.loop = buildLoop(index, len);

                    const promise = conditional === undefined ?
                        Twig.Promise.resolve(true) :
                        Twig.expression.parseAsync.call(state, conditional, innerContext);

                    return promise.then(condition => {
                        if (!condition) {
                            return;
                        }

                        return state.parseAsync(token.output, innerContext)
                            .then(tokenOutput => {
                                output.push(tokenOutput);
                                index += 1;
                            });
                    })
                        .then(() => {
                            // Delete loop-related variables from the context
                            delete innerContext.loop;
                            delete innerContext[token.valueVar];
                            delete innerContext[token.keyVar];

                            // Merge in values that exist in context but have changed
                            // in inner_context.
                            Twig.merge(context, innerContext, true);
                        });
                };

                return Twig.expression.parseAsync.call(state, token.expression, context)
                    .then(result => {
                        if (Array.isArray(result)) {
                            len = result.length;
                            return Twig.async.forEach(result, value => {
                                const key = index;

                                return loop(key, value);
                            });
                        }

                        if (Twig.lib.is('Object', result)) {
                            if (result._keys === undefined) {
                                keyset = Object.keys(result);
                            } else {
                                keyset = result._keys;
                            }

                            len = keyset.length;
                            return Twig.async.forEach(keyset, key => {
                            // Ignore the _keys property, it's internal to twig.js
                                if (key === '_keys') {
                                    return;
                                }

                                return loop(key, result[key]);
                            });
                        }
                    })
                    .then(() => {
                    // Only allow else statements if no output was generated
                        continueChain = (output.length === 0);

                        return {
                            chain: continueChain,
                            context,
                            output: Twig.output.call(state.template, output)
                        };
                    });
            }
        },
        {
            /**
             * End for type logic tokens.
             *
             *  Format: {% endfor %}
             */
            type: Twig.logic.type.endfor,
            regex: /^endfor$/,
            next: [],
            open: false
        },
        {
            /**
             * Set type logic tokens.
             *
             *  Format: {% set key = expression %}
             */
            type: Twig.logic.type.set,
            regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
            next: [],
            open: true,
            compile(token) { //
                const key = token.match[1].trim();
                const expression = token.match[2];
                // Compile the expression.
                const expressionStack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                token.key = key;
                token.expression = expressionStack;

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                const {key} = token;
                const state = this;

                return Twig.expression.parseAsync.call(state, token.expression, context)
                    .then(value => {
                        if (value === context) {
                        /*  If storing the context in a variable, it needs to be a clone of the current state of context.
                            Otherwise we have a context with infinite recursion.
                            Fixes #341
                        */
                            value = {...value};
                        }

                        context[key] = value;

                        return {
                            chain: continueChain,
                            context
                        };
                    });
            }
        },
        {
            /**
             * Set capture type logic tokens.
             *
             *  Format: {% set key %}
             */
            type: Twig.logic.type.setcapture,
            regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
            next: [
                Twig.logic.type.endset
            ],
            open: true,
            compile(token) {
                const key = token.match[1].trim();

                token.key = key;

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                const state = this;
                const {key} = token;

                return state.parseAsync(token.output, context)
                    .then(output => {
                    // Set on both the global and local context
                        state.context[key] = output;
                        context[key] = output;

                        return {
                            chain: continueChain,
                            context
                        };
                    });
            }
        },
        {
            /**
             * End set type block logic tokens.
             *
             *  Format: {% endset %}
             */
            type: Twig.logic.type.endset,
            regex: /^endset$/,
            next: [],
            open: false
        },
        {
            /**
             * Filter logic tokens.
             *
             *  Format: {% filter upper %} or {% filter lower|escape %}
             */
            type: Twig.logic.type.filter,
            regex: /^filter\s+(.+)$/,
            next: [
                Twig.logic.type.endfilter
            ],
            open: true,
            compile(token) {
                const expression = '|' + token.match[1].trim();
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return state.parseAsync(token.output, context)
                    .then(output => {
                        const stack = [{
                            type: Twig.expression.type.string,
                            value: output
                        }].concat(token.stack);

                        return Twig.expression.parseAsync.call(state, stack, context);
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * End filter logic tokens.
             *
             *  Format: {% endfilter %}
             */
            type: Twig.logic.type.endfilter,
            regex: /^endfilter$/,
            next: [],
            open: false
        },
        {
            /**
             * Apply logic tokens.
             *
             *  Format: {% apply upper %} or {% apply lower|escape %}
             */
            type: Twig.logic.type.apply,
            regex: /^apply\s+(.+)$/,
            next: [
                Twig.logic.type.endapply
            ],
            open: true,
            compile(token) {
                const expression = '|' + token.match[1].trim();
                // Compile the expression.
                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;
                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return state.parseAsync(token.output, context)
                    .then(output => {
                        const stack = [{
                            type: Twig.expression.type.string,
                            value: output
                        }].concat(token.stack);

                        return Twig.expression.parseAsync.call(state, stack, context);
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            /**
             * End apply logic tokens.
             *
             *  Format: {% endapply %}
             */
            type: Twig.logic.type.endapply,
            regex: /^endapply$/,
            next: [],
            open: false
        },
        {
            /**
             * Set type logic tokens.
             *
             *  Format: {% do expression %}
             */
            type: Twig.logic.type.do,
            regex: /^do\s+([\S\s]+)$/,
            next: [],
            open: true,
            compile(token) { //
                const expression = token.match[1];
                // Compile the expression.
                const expressionStack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                token.expression = expressionStack;

                delete token.match;
                return token;
            },
            parse(token, context, continueChain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.expression, context)
                    .then(() => {
                        return {
                            chain: continueChain,
                            context
                        };
                    });
            }
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% block title %}
             */
            type: Twig.logic.type.block,
            regex: /^block\s+(\w+)$/,
            next: [
                Twig.logic.type.endblock
            ],
            open: true,
            compile(token) {
                token.blockName = token.match[1].trim();
                delete token.match;

                return token;
            },
            parse(token, context, chain) {
                const state = this;
                let promise = Twig.Promise.resolve();

                state.template.blocks.defined[token.blockName] = new Twig.Block(state.template, token);

                if (
                    state.template.parentTemplate === null ||
                    state.template.parentTemplate instanceof Twig.Template
                ) {
                    promise = state.getBlock(token.blockName).render(state, context);
                }

                return promise.then(output => {
                    return {
                        chain,
                        output
                    };
                });
            }
        },
        {
            /**
             * Block shorthand logic tokens.
             *
             *  Format: {% block title expression %}
             */
            type: Twig.logic.type.shortblock,
            regex: /^block\s+(\w+)\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                const template = this;

                token.expression = token.match[2].trim();
                token.output = Twig.expression.compile({
                    type: Twig.expression.type.expression,
                    value: token.expression
                }).stack;

                return Twig.logic.handler[Twig.logic.type.block].compile.apply(template, [token]);
            },
            parse(...args) {
                const state = this;

                return Twig.logic.handler[Twig.logic.type.block].parse.apply(state, args);
            }
        },
        {
            /**
             * End block logic tokens.
             *
             *  Format: {% endblock %}
             */
            type: Twig.logic.type.endblock,
            regex: /^endblock(?:\s+(\w+))?$/,
            next: [],
            open: false
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% extends "template.twig" %}
             */
            type: Twig.logic.type.extends_,
            regex: /^extends\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                delete token.match;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(fileName => {
                        if (Array.isArray(fileName)) {
                            const result = fileName.reverse().reduce((acc, file) => {
                                try {
                                    return {
                                        render: state.template.importFile(file),
                                        fileName: file
                                    };
                                    /* eslint-disable-next-line no-unused-vars */
                                } catch (error) {
                                    return acc;
                                }
                            }, {
                                render: null,
                                fileName: null
                            });
                            if (result.fileName !== null) {
                                state.template.parentTemplate = result.fileName;
                            }
                        } else {
                            state.template.parentTemplate = fileName;
                        }

                        return {
                            chain,
                            output: ''
                        };
                    });
            }
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% use "template.twig" %}
             */
            type: Twig.logic.type.use,
            regex: /^use\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                delete token.match;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(filePath => {
                        // Create a new state instead of using the current state
                        // any defined blocks will be created in isolation

                        const useTemplate = state.template.importFile(filePath);

                        const useState = new Twig.ParseState(useTemplate);
                        return useState.parseAsync(useTemplate.tokens)
                            .then(() => {
                                state.template.blocks.imported = {
                                    ...state.template.blocks.imported,
                                    ...useState.getBlocks()
                                };
                            });
                    })
                    .then(() => {
                        return {
                            chain,
                            output: ''
                        };
                    });
            }
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% includes "template.twig" [with {some: 'values'} only] %}
             */
            type: Twig.logic.type.include,
            regex: /^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
            next: [],
            open: true,
            compile(token) {
                const {match} = token;
                const expression = match[1].trim();
                const ignoreMissing = match[2] !== undefined;
                const withContext = match[3];
                const only = ((match[4] !== undefined) && match[4].length);

                delete token.match;

                token.only = only;
                token.ignoreMissing = ignoreMissing;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                if (withContext !== undefined) {
                    token.withStack = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: withContext.trim()
                    }).stack;
                }

                return token;
            },
            parse(token, context, chain) {
                // Resolve filename
                let innerContext = token.only ? {} : {...context};
                const {ignoreMissing} = token;
                const state = this;
                let promise = null;
                const result = {chain, output: ''};

                if (typeof token.withStack === 'undefined') {
                    promise = Twig.Promise.resolve();
                } else {
                    promise = Twig.expression.parseAsync.call(state, token.withStack, context)
                        .then(withContext => {
                            innerContext = {
                                ...innerContext,
                                ...withContext
                            };
                        });
                }

                return promise
                    .then(() => {
                        return Twig.expression.parseAsync.call(state, token.stack, context);
                    })
                    .then(file => {
                        let files;
                        if (Array.isArray(file)) {
                            files = file;
                        } else {
                            files = [file];
                        }

                        const result = files.reduce((acc, file) => {
                            if (acc.render === null) {
                                if (file instanceof Twig.Template) {
                                    return {
                                        render: file.renderAsync(
                                            innerContext,
                                            {
                                                isInclude: true
                                            }
                                        ),
                                        lastError: null
                                    };
                                }

                                try {
                                    return {
                                        render: state.template.importFile(file).renderAsync(
                                            innerContext,
                                            {
                                                isInclude: true
                                            }
                                        ),
                                        lastError: null
                                    };
                                } catch (error) {
                                    return {
                                        render: null,
                                        lastError: error
                                    };
                                }
                            }

                            return acc;
                        }, {render: null, lastError: null});

                        if (result.render !== null) {
                            return result.render;
                        }

                        if (result.render === null && ignoreMissing) {
                            return '';
                        }

                        throw result.lastError;
                    })
                    .then(output => {
                        if (output !== '') {
                            result.output = output;
                        }

                        return result;
                    });
            }
        },
        {
            type: Twig.logic.type.spaceless,
            regex: /^spaceless$/,
            next: [
                Twig.logic.type.endspaceless
            ],
            open: true,

            // Parse the html and return it without any spaces between tags
            parse(token, context, chain) {
                const state = this;

                // Parse the output without any filter
                return state.parseAsync(token.output, context)
                    .then(tokenOutput => {
                        const // A regular expression to find closing and opening tags with spaces between them
                            rBetweenTagSpaces = />\s+</g;
                        // Replace all space between closing and opening html tags
                        let output = tokenOutput.replace(rBetweenTagSpaces, '><').trim();
                        // Rewrap output as a Twig.Markup
                        output = new Twig.Markup(output);
                        return {
                            chain,
                            output
                        };
                    });
            }
        },

        // Add the {% endspaceless %} token
        {
            type: Twig.logic.type.endspaceless,
            regex: /^endspaceless$/,
            next: [],
            open: false
        },
        {
            /**
             * Macro logic tokens.
             *
             * Format: {% macro input(name = default, value, type, size) %}
             *
             */
            type: Twig.logic.type.macro,
            regex: /^macro\s+(\w+)\s*\(\s*((?:\w+(?:\s*=\s*([\s\S]+))?(?:,\s*)?)*)\s*\)$/,
            next: [
                Twig.logic.type.endmacro
            ],
            open: true,
            compile(token) {
                const macroName = token.match[1];
                const rawParameters = token.match[2].split(/\s*,\s*/);
                const parameters = rawParameters.map(rawParameter => {
                    return rawParameter.split(/\s*=\s*/)[0];
                });
                const parametersCount = parameters.length;

                // Duplicate check
                if (parametersCount > 1) {
                    const uniq = {};
                    for (let i = 0; i < parametersCount; i++) {
                        const parameter = parameters[i];
                        if (uniq[parameter]) {
                            throw new Twig.Error('Duplicate arguments for parameter: ' + parameter);
                        } else {
                            uniq[parameter] = 1;
                        }
                    }
                }

                token.macroName = macroName;
                token.parameters = parameters;
                token.defaults = rawParameters.reduce(function (defaults, rawParameter) {
                    const pair = rawParameter.split(/\s*=\s*/);
                    const key = pair[0];
                    const expression = pair[1];

                    if (expression) {
                        defaults[key] = Twig.expression.compile.call(this, {
                            type: Twig.expression.type.expression,
                            value: expression
                        }).stack;
                    } else {
                        defaults[key] = undefined;
                    }

                    return defaults;
                }, {});

                delete token.match;
                return token;
            },
            parse(token, context, chain) {
                const state = this;

                state.macros[token.macroName] = function (...args) {
                    // Pass global context and other macros
                    const macroContext = {
                        // Use current state context because state context includes current loop variables as well
                        ...state.context,
                        _self: state.macros
                    };
                    // Save arguments

                    return Twig.async.forEach(token.parameters, function (prop, i) {
                        // Add parameters from context to macroContext
                        if (typeof args[i] !== 'undefined') {
                            macroContext[prop] = args[i];
                            return true;
                        }

                        if (typeof token.defaults[prop] !== 'undefined') {
                            return Twig.expression.parseAsync.call(this, token.defaults[prop], context)
                                .then(value => {
                                    macroContext[prop] = value;
                                    return Twig.Promise.resolve();
                                });
                        }

                        macroContext[prop] = undefined;
                        return true;
                    }).then(() => {
                        // Render
                        return state.parseAsync(token.output, macroContext);
                    });
                };

                return {
                    chain,
                    output: ''
                };
            }
        },
        {
            /**
             * End macro logic tokens.
             *
             * Format: {% endmacro %}
             */
            type: Twig.logic.type.endmacro,
            regex: /^endmacro$/,
            next: [],
            open: false
        },
        {
            /*
            * Import logic tokens.
            *
            * Format: {% import "template.twig" as form %}
            */
            type: Twig.logic.type.import_,
            regex: /^import\s+(.+)\s+as\s+(\w+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                const contextName = token.match[2].trim();
                delete token.match;

                token.expression = expression;
                token.contextName = contextName;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;
                const output = {
                    chain,
                    output: ''
                };

                if (token.expression === '_self') {
                    context[token.contextName] = state.macros;
                    return output;
                }

                return Twig.expression.parseAsync.call(state, token.stack, context)
                    .then(filePath => {
                        return state.template.importFile(filePath || token.expression);
                    })
                    .then(importTemplate => {
                        const importState = new Twig.ParseState(importTemplate);

                        return importState.parseAsync(importTemplate.tokens).then(() => {
                            context[token.contextName] = importState.macros;

                            return output;
                        });
                    });
            }
        },
        {
            /*
            * From logic tokens.
            *
            * Format: {% from "template.twig" import func as form %}
            */
            type: Twig.logic.type.from,
            regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
            next: [],
            open: true,
            compile(token) {
                const expression = token.match[1].trim();
                const macroExpressions = token.match[2].trim().split(/\s*,\s*/);
                const macroNames = {};

                for (const res of macroExpressions) {
                    // Match function as variable
                    const macroMatch = res.match(/^(\w+)\s+as\s+(\w+)$/);
                    if (macroMatch) {
                        macroNames[macroMatch[1].trim()] = macroMatch[2].trim();
                    } else if (res.match(/^(\w+)$/)) {
                        macroNames[res] = res;
                    } else {
                        // ignore import
                    }
                }

                delete token.match;

                token.expression = expression;
                token.macroNames = macroNames;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                return token;
            },
            parse(token, context, chain) {
                const state = this;
                let promise;

                if (token.expression === '_self') {
                    promise = Twig.Promise.resolve(state.macros);
                } else {
                    promise = Twig.expression.parseAsync.call(state, token.stack, context)
                        .then(filePath => {
                            return state.template.importFile(filePath || token.expression);
                        })
                        .then(importTemplate => {
                            const importState = new Twig.ParseState(importTemplate);

                            return importState.parseAsync(importTemplate.tokens).then(() => {
                                return importState.macros;
                            });
                        });
                }

                return promise
                    .then(macros => {
                        for (const macroName in token.macroNames) {
                            if (macros[macroName] !== undefined) {
                                context[token.macroNames[macroName]] = macros[macroName];
                            }
                        }

                        return {
                            chain,
                            output: ''
                        };
                    });
            }
        },
        {
            /**
             * The embed tag combines the behaviour of include and extends.
             * It allows you to include another template's contents, just like include does.
             *
             *  Format: {% embed "template.twig" [with {some: 'values'} only] %}
             */
            type: Twig.logic.type.embed,
            regex: /^embed\s+(.+?)(?:\s+(ignore missing))?(?:\s+with\s+([\S\s]+?))?(?:\s+(only))?$/,
            next: [
                Twig.logic.type.endembed
            ],
            open: true,
            compile(token) {
                const {match} = token;
                const expression = match[1].trim();
                const ignoreMissing = match[2] !== undefined;
                const withContext = match[3];
                const only = ((match[4] !== undefined) && match[4].length);

                delete token.match;

                token.only = only;
                token.ignoreMissing = ignoreMissing;

                token.stack = Twig.expression.compile.call(this, {
                    type: Twig.expression.type.expression,
                    value: expression
                }).stack;

                if (withContext !== undefined) {
                    token.withStack = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: withContext.trim()
                    }).stack;
                }

                return token;
            },
            parse(token, context, chain) {
                let embedContext = {};
                let promise = Twig.Promise.resolve();
                let state = this;

                if (!token.only) {
                    embedContext = {...context};
                }

                if (token.withStack !== undefined) {
                    promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(withContext => {
                        embedContext = {...embedContext, ...withContext};
                    });
                }

                return promise
                    .then(() => {
                        return Twig.expression.parseAsync.call(state, token.stack, embedContext);
                    })
                    .then(fileName => {
                        const embedOverrideTemplate = new Twig.Template({
                            data: token.output,
                            base: state.template.base,
                            path: state.template.path,
                            url: state.template.url,
                            name: state.template.name,
                            method: state.template.method,
                            options: state.template.options
                        });

                        try {
                            embedOverrideTemplate.importFile(fileName);
                        } catch (error) {
                            if (token.ignoreMissing) {
                                return '';
                            }

                            // Errors preserve references to variables in scope,
                            // this removes `this` from the scope.
                            state = null;

                            throw error;
                        }

                        embedOverrideTemplate.parentTemplate = fileName;

                        return embedOverrideTemplate.renderAsync(
                            embedContext,
                            {
                                isInclude: true
                            }
                        );
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        /* Add the {% endembed %} token
         *
         */
        {
            type: Twig.logic.type.endembed,
            regex: /^endembed$/,
            next: [],
            open: false
        },
        {
            /**
             * Block logic tokens.
             *
             *  Format: {% with {some: 'values'} [only] %}
             */
            type: Twig.logic.type.with,
            regex: /^(?:with(?:\s+([\S\s]+?))?)(?:\s|$)(only)?$/,
            next: [
                Twig.logic.type.endwith
            ],
            open: true,
            compile(token) {
                const {match} = token;
                const withContext = match[1];
                const only = ((match[2] !== undefined) && match[2].length);

                delete token.match;

                token.only = only;

                if (withContext !== undefined) {
                    token.withStack = Twig.expression.compile.call(this, {
                        type: Twig.expression.type.expression,
                        value: withContext.trim()
                    }).stack;
                }

                return token;
            },
            parse(token, context, chain) {
                // Resolve filename
                let innerContext = {};
                let i;
                const state = this;
                let promise = Twig.Promise.resolve();

                if (!token.only) {
                    innerContext = {...context};
                }

                if (token.withStack !== undefined) {
                    promise = Twig.expression.parseAsync.call(state, token.withStack, context)
                        .then(withContext => {
                            for (i in withContext) {
                                if (Object.hasOwnProperty.call(withContext, i)) {
                                    innerContext[i] = withContext[i];
                                }
                            }
                        });
                }

                const isolatedState = new Twig.ParseState(state.template, undefined, innerContext);

                return promise
                    .then(() => {
                        return isolatedState.parseAsync(token.output);
                    })
                    .then(output => {
                        return {
                            chain,
                            output
                        };
                    });
            }
        },
        {
            type: Twig.logic.type.endwith,
            regex: /^endwith$/,
            next: [],
            open: false
        },
        {
            /**
             * Deprecated type logic tokens.
             *
             *  Format: {% deprecated 'Description' %}
             */
            type: Twig.logic.type.deprecated,
            regex: /^deprecated\s+(.+)$/,
            next: [],
            open: true,
            compile(token) {
                console.warn('Deprecation notice: ' + token.match[1]);

                return token;
            },
            parse() {
                return {};
            }
        }

    ];

    /**
     * Registry for logic handlers.
     */
    Twig.logic.handler = {};

    /**
     * Define a new token type, available at Twig.logic.type.{type}
     */
    Twig.logic.extendType = function (type, value) {
        value = value || ('Twig.logic.type' + type);
        Twig.logic.type[type] = value;
    };

    /**
     * Extend the logic parsing functionality with a new token definition.
     *
     * // Define a new tag
     * Twig.logic.extend({
     *     type: Twig.logic.type.{type},
     *     // The pattern to match for this token
     *     regex: ...,
     *     // What token types can follow this token, leave blank if any.
     *     next: [ ... ]
     *     // Create and return compiled version of the token
     *     compile: function(token) { ... }
     *     // Parse the compiled token with the context provided by the render call
     *     //   and whether this token chain is complete.
     *     parse: function(token, context, chain) { ... }
     * });
     *
     * @param {Object} definition The new logic expression.
     */
    Twig.logic.extend = function (definition) {
        if (definition.type) {
            Twig.logic.extendType(definition.type);
        } else {
            throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
        }

        Twig.logic.handler[definition.type] = definition;
    };

    // Extend with built-in expressions
    while (Twig.logic.definitions.length > 0) {
        Twig.logic.extend(Twig.logic.definitions.shift());
    }

    /**
     * Compile a logic token into an object ready for parsing.
     *
     * @param {Object} rawToken An uncompiled logic token.
     *
     * @return {Object} A compiled logic token, ready for parsing.
     */
    Twig.logic.compile = function (rawToken) {
        const expression = rawToken.value.trim();
        let token = Twig.logic.tokenize.call(this, expression);
        const tokenTemplate = Twig.logic.handler[token.type];

        // Check if the token needs compiling
        if (tokenTemplate.compile) {
            token = tokenTemplate.compile.call(this, token);
            Twig.log.trace('Twig.logic.compile: ', 'Compiled logic token to ', token);
        }

        return token;
    };

    /**
     * Tokenize logic expressions. This function matches token expressions against regular
     * expressions provided in token definitions provided with Twig.logic.extend.
     *
     * @param {string} expression the logic token expression to tokenize
     *                (i.e. what's between {% and %})
     *
     * @return {Object} The matched token with type set to the token type and match to the regex match.
     */
    Twig.logic.tokenize = function (expression) {
        let tokenTemplateType = null;
        let tokenType = null;
        let tokenRegex = null;
        let regexArray = null;
        let regexLen = null;
        let regexI = null;
        let match = null;

        // Ignore whitespace around expressions.
        expression = expression.trim();

        for (tokenTemplateType in Twig.logic.handler) {
            if (Object.hasOwnProperty.call(Twig.logic.handler, tokenTemplateType)) {
                // Get the type and regex for this template type
                tokenType = Twig.logic.handler[tokenTemplateType].type;
                tokenRegex = Twig.logic.handler[tokenTemplateType].regex;

                // Handle multiple regular expressions per type.
                regexArray = tokenRegex;
                if (!Array.isArray(tokenRegex)) {
                    regexArray = [tokenRegex];
                }

                regexLen = regexArray.length;
                // Check regular expressions in the order they were specified in the definition.
                for (regexI = 0; regexI < regexLen; regexI++) {
                    match = regexArray[regexI].exec(expression);
                    if (match !== null) {
                        Twig.log.trace('Twig.logic.tokenize: ', 'Matched a ', tokenType, ' regular expression of ', match);
                        return {
                            type: tokenType,
                            match
                        };
                    }
                }
            }
        }

        // No regex matches
        throw new Twig.Error('Unable to parse \'' + expression.trim() + '\'');
    };

    /**
     * Parse a logic token within a given context.
     *
     * What are logic chains?
     *      Logic chains represent a series of tokens that are connected,
     *          for example:
     *          {% if ... %} {% else %} {% endif %}
     *
     *      The chain parameter is used to signify if a chain is open of closed.
     *      open:
     *          More tokens in this chain should be parsed.
     *      closed:
     *          This token chain has completed parsing and any additional
     *          tokens (else, elseif, etc...) should be ignored.
     *
     * @param {Object} token The compiled token.
     * @param {Object} context The render context.
     * @param {boolean} chain Is this an open logic chain. If false, that means a
     *                        chain is closed and no further cases should be parsed.
     */
    Twig.logic.parse = function (token, context, chain, allowAsync) {
        return Twig.async.potentiallyAsync(this, allowAsync, function () {
            Twig.log.debug('Twig.logic.parse: ', 'Parsing logic token ', token);

            const tokenTemplate = Twig.logic.handler[token.type];
            let result;
            const state = this;

            if (!tokenTemplate.parse) {
                return '';
            }

            state.nestingStack.unshift(token);
            result = tokenTemplate.parse.call(state, token, context || {}, chain);

            if (Twig.isPromise(result)) {
                result = result.then(result => {
                    state.nestingStack.shift();

                    return result;
                });
            } else {
                state.nestingStack.shift();
            }

            return result;
        });
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.parser.source.js":
/*!******************************************************!*\
  !*** ../node_modules/twig/src/twig.parser.source.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (Twig) {
    'use strict';

    Twig.Templates.registerParser('source', params => {
        return params.data || '';
    });
};


/***/ }),

/***/ "../node_modules/twig/src/twig.parser.twig.js":
/*!****************************************************!*\
  !*** ../node_modules/twig/src/twig.parser.twig.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (Twig) {
    'use strict';

    Twig.Templates.registerParser('twig', params => {
        return new Twig.Template(params);
    });
};


/***/ }),

/***/ "../node_modules/twig/src/twig.path.js":
/*!*********************************************!*\
  !*** ../node_modules/twig/src/twig.path.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// ## twig.path.js
//
// This file handles path parsing
module.exports = function (Twig) {
    'use strict';

    /**
     * Namespace for path handling.
     */
    Twig.path = {};

    /**
     * @param {Twig.Template} template
     * @param {string} path
     */
    Twig.path.expandNamespace = function (namespaces, path) {
        const namespaceIdentifiers = Object.keys(namespaces);
        const pattern = new RegExp(`^(?:@(${namespaceIdentifiers.join('|')})/|(${namespaceIdentifiers.join('|')})::)`);

        return path.replace(pattern, (wholeMatch, atNamespace, colonNamespace) => {
            const namespaceIdentifier = (atNamespace === undefined ? colonNamespace : atNamespace);

            return `${namespaces[namespaceIdentifier]}/`;
        });
    };

    /**
     * Generate the canonical version of a url based on the given base path and file path and in
     * the previously registered namespaces.
     *
     * @param  {string} template The Twig Template
     * @param  {string} _file    The file path, may be relative and may contain namespaces.
     *
     * @return {string}          The canonical version of the path
     */
    Twig.path.parsePath = function (template, _file) {
        const {namespaces} = template.options;
        const file = _file || '';
        const hasNamespaces = namespaces && typeof namespaces === 'object';

        let path = (hasNamespaces ? Twig.path.expandNamespace(namespaces, file) : file);

        if (path === file) {
            path = Twig.path.relativePath(template, file);
        }

        return path;
    };

    /**
     * Generate the relative canonical version of a url based on the given base path and file path.
     *
     * @param {Twig.Template} template The Twig.Template.
     * @param {string} _file The file path, relative to the base path.
     *
     * @return {string} The canonical version of the path.
     */
    Twig.path.relativePath = function (template, _file) {
        let base;
        let basePath;
        let sepChr = '/';
        const newPath = [];
        let file = _file || '';
        let val;

        if (template.url) {
            if (typeof template.base === 'undefined') {
                base = template.url;
            } else {
                // Add slash to the end of path
                base = template.base.replace(/([^/])$/, '$1/');
            }
        } else if (template.path) {
            // Get the system-specific path separator
            const path = __webpack_require__(/*! path */ "../node_modules/path/path.js");
            const sep = path.sep || sepChr;
            const relative = new RegExp('^\\.{1,2}' + sep.replace('\\', '\\\\'));
            file = file.replace(/\//g, sep);

            if (template.base !== undefined && file.match(relative) === null) {
                file = file.replace(template.base, '');
                base = template.base + sep;
            } else {
                base = path.normalize(template.path);
            }

            base = base.replace(sep + sep, sep);
            sepChr = sep;
        } else if ((template.name || template.id) && template.method && template.method !== 'fs' && template.method !== 'ajax') {
            // Custom registered loader
            base = template.base || template.name || template.id;
        } else {
            throw new Twig.Error('Cannot extend an inline template.');
        }

        basePath = base.split(sepChr);

        // Remove file from url
        basePath.pop();
        basePath = basePath.concat(file.split(sepChr));

        while (basePath.length > 0) {
            val = basePath.shift();
            if (val === '.') {
                // Ignore
            } else if (val === '..' && newPath.length > 0 && newPath[newPath.length - 1] !== '..') {
                newPath.pop();
            } else {
                newPath.push(val);
            }
        }

        return newPath.join(sepChr);
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/twig/src/twig.tests.js":
/*!**********************************************!*\
  !*** ../node_modules/twig/src/twig.tests.js ***!
  \**********************************************/
/***/ ((module) => {

// ## twig.tests.js
//
// This file handles expression tests. (is empty, is not defined, etc...)
module.exports = function (Twig) {
    'use strict';
    Twig.tests = {
        empty(value) {
            // Handle boolean true
            if (value === true) {
                return false;
            }

            // Handle null or undefined
            if (value === null || value === undefined) {
                return true;
            }

            // Handler numbers
            if (typeof value === 'number') {
                return false;
            } // Numbers are never "empty"

            // Handle strings and arrays
            if (value.length > 0) {
                return false;
            }

            // Handle objects
            for (const key in value) {
                if (Object.hasOwnProperty.call(value, key)) {
                    return false;
                }
            }

            return true;
        },
        odd(value) {
            return value % 2 === 1;
        },
        even(value) {
            return value % 2 === 0;
        },
        'divisible by'(value, params) {
            return value % params[0] === 0;
        },
        divisibleby(value, params) {
            console.warn('`divisibleby` is deprecated use `divisible by`');
            return Twig.tests['divisible by'](value, params);
        },
        defined(value) {
            return value !== undefined;
        },
        none(value) {
            return value === null;
        },
        null(value) {
            return this.none(value); // Alias of none
        },
        'same as'(value, params) {
            return value === params[0];
        },
        sameas(value, params) {
            console.warn('`sameas` is deprecated use `same as`');
            return Twig.tests['same as'](value, params);
        },
        iterable(value) {
            return value && (Twig.lib.is('Array', value) || Twig.lib.is('Object', value));
        }
        /*
        Constant ?
         */
    };

    Twig.test = function (test, value, params) {
        if (!Twig.tests[test]) {
            throw Twig.Error('Test ' + test + ' is not defined.');
        }

        return Twig.tests[test](value, params);
    };

    Twig.test.extend = function (test, definition) {
        Twig.tests[test] = definition;
    };

    return Twig;
};


/***/ }),

/***/ "../node_modules/util/node_modules/inherits/inherits_browser.js":
/*!**********************************************************************!*\
  !*** ../node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \**********************************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/util/support/isBufferBrowser.js":
/*!*******************************************************!*\
  !*** ../node_modules/util/support/isBufferBrowser.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../node_modules/util/util.js":
/*!************************************!*\
  !*** ../node_modules/util/util.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(__webpack_require__.g.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "?eae6":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.twig */ "./footer.twig");
/* harmony import */ var _footer_twig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_twig__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheet.scss */ "./stylesheet.scss");
/* harmony import */ var _index_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.twig */ "./index.twig");
/* harmony import */ var _index_twig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_twig__WEBPACK_IMPORTED_MODULE_2__);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxJQUFJO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEIscUNBQXFDLEdBQUc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDhCQUE4QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFzQixVQUFVLHdCQUF3QixFQUFFLGdFQUFnRSx1QkFBdUIsNENBQTRDOztBQUVsNUQscUNBQXFDOztBQUVyQyxxQkFBcUI7Ozs7Ozs7Ozs7QUNSckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeFhB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLGVBQWUsa0RBQWtEOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNwOENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUc7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsaUJBQWlCO0FBQ2hDLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksbUJBQU8sQ0FBQyx3RkFBNEI7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBC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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNsM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsK0JBQStCO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLG1DQUFtQztBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM1MEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLG1EQUFtRCxLQUFLOztBQUV4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FB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RUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFDQUFxQztBQUNyQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxrQkFBa0IscUJBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7OztBQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQixtSEFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBLHdIQUFzQzs7QUFFdEMsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3prQkE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QjtBQUNHO0FBQ0w7QUFDckI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXNoZWV0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvX2hlbHBlcnMvX3BocENhc3RTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9faGVscGVycy9fcGhwX2Nhc3RfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9faGVscGVycy9fcGhwX2Nhc3RfaW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvZGF0ZXRpbWUvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL2RhdGV0aW1lL3N0cnRvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL21hdGgvbWF4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvbWF0aC9taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2N1dHVzL3BocC9tYXRoL3JvdW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zcHJpbnRmLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy9zdHJpcF90YWdzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9jdXR1cy9waHAvc3RyaW5ncy92c3ByaW50Zi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGF0aC9wYXRoLmpzIiwid2VicGFjazovLy8uL3N0eWxlc2hlZXQuc2Nzcz82N2ViIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZm9vdGVyLnR3aWciLCJ3ZWJwYWNrOi8vLy4vaGVhZGVyLnR3aWciLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHdpZyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3R3aWcvc3JjL3R3aWcuYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90d2lnL3NyYy90d2lnLmNvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5leHBvcnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5mYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5maWx0ZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90d2lnL3NyYy90d2lnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5saWIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90d2lnL3NyYy90d2lnLmxvYWRlci5hamF4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5sb2FkZXIuZnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90d2lnL3NyYy90d2lnLmxvZ2ljLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5wYXJzZXIuc291cmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHdpZy9zcmMvdHdpZy5wYXJzZXIudHdpZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3R3aWcvc3JjL3R3aWcucGF0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3R3aWcvc3JjL3R3aWcudGVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vaWdub3JlZHxDOlxcVXNlcnNcXG9iaXZhblxcRGVza3RvcFxcd2ViX3dvcmtcXG15c2l0ZXNcXGlucHV0c19mb3Jtc1xcbm9kZV9tb2R1bGVzXFx0d2lnXFxzcmN8ZnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfcGhwQ2FzdFN0cmluZyh2YWx1ZSkge1xuICAvLyBvcmlnaW5hbCBieTogUmFmYcWCIEt1a2F3c2tpXG4gIC8vICAgZXhhbXBsZSAxOiBfcGhwQ2FzdFN0cmluZyh0cnVlKVxuICAvLyAgIHJldHVybnMgMTogJzEnXG4gIC8vICAgZXhhbXBsZSAyOiBfcGhwQ2FzdFN0cmluZyhmYWxzZSlcbiAgLy8gICByZXR1cm5zIDI6ICcnXG4gIC8vICAgZXhhbXBsZSAzOiBfcGhwQ2FzdFN0cmluZygnZm9vJylcbiAgLy8gICByZXR1cm5zIDM6ICdmb28nXG4gIC8vICAgZXhhbXBsZSA0OiBfcGhwQ2FzdFN0cmluZygwLzApXG4gIC8vICAgcmV0dXJucyA0OiAnTkFOJ1xuICAvLyAgIGV4YW1wbGUgNTogX3BocENhc3RTdHJpbmcoMS8wKVxuICAvLyAgIHJldHVybnMgNTogJ0lORidcbiAgLy8gICBleGFtcGxlIDY6IF9waHBDYXN0U3RyaW5nKC0xLzApXG4gIC8vICAgcmV0dXJucyA2OiAnLUlORidcbiAgLy8gICBleGFtcGxlIDc6IF9waHBDYXN0U3RyaW5nKG51bGwpXG4gIC8vICAgcmV0dXJucyA3OiAnJ1xuICAvLyAgIGV4YW1wbGUgODogX3BocENhc3RTdHJpbmcodW5kZWZpbmVkKVxuICAvLyAgIHJldHVybnMgODogJydcbiAgLy8gICBleGFtcGxlIDk6IF9waHBDYXN0U3RyaW5nKFtdKVxuICAvLyAgIHJldHVybnMgOTogJ0FycmF5J1xuICAvLyAgIGV4YW1wbGUgMTA6IF9waHBDYXN0U3RyaW5nKHt9KVxuICAvLyAgIHJldHVybnMgMTA6ICdPYmplY3QnXG4gIC8vICAgZXhhbXBsZSAxMTogX3BocENhc3RTdHJpbmcoMClcbiAgLy8gICByZXR1cm5zIDExOiAnMCdcbiAgLy8gICBleGFtcGxlIDEyOiBfcGhwQ2FzdFN0cmluZygxKVxuICAvLyAgIHJldHVybnMgMTI6ICcxJ1xuICAvLyAgIGV4YW1wbGUgMTM6IF9waHBDYXN0U3RyaW5nKDMuMTQpXG4gIC8vICAgcmV0dXJucyAxMzogJzMuMTQnXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2YWx1ZSA/ICcxJyA6ICcnO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdOQU4nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlIDwgMCA/ICctJyA6ICcnKSArICdJTkYnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdBcnJheSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmFsdWUgdHlwZScpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X3BocENhc3RTdHJpbmcuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3BocF9jYXN0X2Zsb2F0KHZhbHVlKSB7XG4gIC8vIG9yaWdpbmFsIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICBleGFtcGxlIDE6IF9waHBfY2FzdF9mbG9hdChmYWxzZSlcbiAgLy8gICByZXR1cm5zIDE6IDBcbiAgLy8gICBleGFtcGxlIDI6IF9waHBfY2FzdF9mbG9hdCh0cnVlKVxuICAvLyAgIHJldHVybnMgMjogMVxuICAvLyAgIGV4YW1wbGUgMzogX3BocF9jYXN0X2Zsb2F0KDApXG4gIC8vICAgcmV0dXJucyAzOiAwXG4gIC8vICAgZXhhbXBsZSA0OiBfcGhwX2Nhc3RfZmxvYXQoMSlcbiAgLy8gICByZXR1cm5zIDQ6IDFcbiAgLy8gICBleGFtcGxlIDU6IF9waHBfY2FzdF9mbG9hdCgzLjE0KVxuICAvLyAgIHJldHVybnMgNTogMy4xNFxuICAvLyAgIGV4YW1wbGUgNjogX3BocF9jYXN0X2Zsb2F0KCcnKVxuICAvLyAgIHJldHVybnMgNjogMFxuICAvLyAgIGV4YW1wbGUgNzogX3BocF9jYXN0X2Zsb2F0KCcwJylcbiAgLy8gICByZXR1cm5zIDc6IDBcbiAgLy8gICBleGFtcGxlIDg6IF9waHBfY2FzdF9mbG9hdCgnYWJjJylcbiAgLy8gICByZXR1cm5zIDg6IDBcbiAgLy8gICBleGFtcGxlIDk6IF9waHBfY2FzdF9mbG9hdChudWxsKVxuICAvLyAgIHJldHVybnMgOTogMFxuICAvLyAgZXhhbXBsZSAxMDogX3BocF9jYXN0X2Zsb2F0KHVuZGVmaW5lZClcbiAgLy8gIHJldHVybnMgMTA6IDBcbiAgLy8gIGV4YW1wbGUgMTE6IF9waHBfY2FzdF9mbG9hdCgnMTIzYWJjJylcbiAgLy8gIHJldHVybnMgMTE6IDEyM1xuICAvLyAgZXhhbXBsZSAxMjogX3BocF9jYXN0X2Zsb2F0KCcxMjNlNCcpXG4gIC8vICByZXR1cm5zIDEyOiAxMjMwMDAwXG4gIC8vICBleGFtcGxlIDEzOiBfcGhwX2Nhc3RfZmxvYXQoMHgyMDAwMDAwMDEpXG4gIC8vICByZXR1cm5zIDEzOiA4NTg5OTM0NTkzXG4gIC8vICBleGFtcGxlIDE0OiBfcGhwX2Nhc3RfZmxvYXQoJzMuMTRhYmMnKVxuICAvLyAgcmV0dXJucyAxNDogMy4xNFxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgLy8gZmFsbCB0aHJvdWdoXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFBIUCBkb2NzIHN0YXRlLCB0aGF0IGZvciB0eXBlcyBvdGhlciB0aGFuIHN0cmluZ1xuICAgICAgLy8gY29udmVyc2lvbiBpcyB7aW5wdXQgdHlwZX0tPmludC0+ZmxvYXRcbiAgICAgIHJldHVybiByZXF1aXJlKCcuL19waHBfY2FzdF9pbnQnKSh2YWx1ZSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fcGhwX2Nhc3RfZmxvYXQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3BocF9jYXN0X2ludCh2YWx1ZSkge1xuICAvLyBvcmlnaW5hbCBieTogUmFmYcWCIEt1a2F3c2tpXG4gIC8vICAgZXhhbXBsZSAxOiBfcGhwX2Nhc3RfaW50KGZhbHNlKVxuICAvLyAgIHJldHVybnMgMTogMFxuICAvLyAgIGV4YW1wbGUgMjogX3BocF9jYXN0X2ludCh0cnVlKVxuICAvLyAgIHJldHVybnMgMjogMVxuICAvLyAgIGV4YW1wbGUgMzogX3BocF9jYXN0X2ludCgwKVxuICAvLyAgIHJldHVybnMgMzogMFxuICAvLyAgIGV4YW1wbGUgNDogX3BocF9jYXN0X2ludCgxKVxuICAvLyAgIHJldHVybnMgNDogMVxuICAvLyAgIGV4YW1wbGUgNTogX3BocF9jYXN0X2ludCgzLjE0KVxuICAvLyAgIHJldHVybnMgNTogM1xuICAvLyAgIGV4YW1wbGUgNjogX3BocF9jYXN0X2ludCgnJylcbiAgLy8gICByZXR1cm5zIDY6IDBcbiAgLy8gICBleGFtcGxlIDc6IF9waHBfY2FzdF9pbnQoJzAnKVxuICAvLyAgIHJldHVybnMgNzogMFxuICAvLyAgIGV4YW1wbGUgODogX3BocF9jYXN0X2ludCgnYWJjJylcbiAgLy8gICByZXR1cm5zIDg6IDBcbiAgLy8gICBleGFtcGxlIDk6IF9waHBfY2FzdF9pbnQobnVsbClcbiAgLy8gICByZXR1cm5zIDk6IDBcbiAgLy8gIGV4YW1wbGUgMTA6IF9waHBfY2FzdF9pbnQodW5kZWZpbmVkKVxuICAvLyAgcmV0dXJucyAxMDogMFxuICAvLyAgZXhhbXBsZSAxMTogX3BocF9jYXN0X2ludCgnMTIzYWJjJylcbiAgLy8gIHJldHVybnMgMTE6IDEyM1xuICAvLyAgZXhhbXBsZSAxMjogX3BocF9jYXN0X2ludCgnMTIzZTQnKVxuICAvLyAgcmV0dXJucyAxMjogMTIzXG4gIC8vICBleGFtcGxlIDEzOiBfcGhwX2Nhc3RfaW50KDB4MjAwMDAwMDAxKVxuICAvLyAgcmV0dXJucyAxMzogODU4OTkzNDU5M1xuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAvLyBmcm9tIFBIUCA3LCBOYU4gYW5kIEluZmluaXR5IGFyZSBjYXN0ZWQgdG8gMFxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCkgfHwgMDtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAvLyBmYWxsIHRocm91Z2hcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gQmVoYXZpb3VyIGZvciB0eXBlcyBvdGhlciB0aGFuIGZsb2F0LCBzdHJpbmcsIGJvb2xlYW5cbiAgICAgIC8vIGlzIHVuZGVmaW5lZCBhbmQgY2FuIGNoYW5nZSBhbnkgdGltZS5cbiAgICAgIC8vIFRvIG5vdCBpbnZlbnQgY29tcGxleCBsb2dpY1xuICAgICAgLy8gdGhhdCBtaW1pY3MgUEhQIDcuMCBiZWhhdmlvdXJcbiAgICAgIC8vIGNhc3RpbmcgdmFsdWUtPmJvb2wtPm51bWJlciBpcyB1c2VkXG4gICAgICByZXR1cm4gKyEhdmFsdWU7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fcGhwX2Nhc3RfaW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkYXRlKGZvcm1hdCwgdGltZXN0YW1wKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwczovL2xvY3V0dXMuaW8vcGhwL2RhdGUvXG4gIC8vIG9yaWdpbmFsIGJ5OiBDYXJsb3MgUi4gTC4gUm9kcmlndWVzIChodHRwczovL3d3dy5qc2Zyb21oZWxsLmNvbSlcbiAgLy8gb3JpZ2luYWwgYnk6IGdldHRpbWVvZmRheVxuICAvLyAgICBwYXJ0cyBieTogUGV0ZXItUGF1bCBLb2NoIChodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9iZWF0Lmh0bWwpXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IE1lRXRjIChodHRwczovL3lhc3MubWVldGN3ZWIuY29tKVxuICAvLyBpbXByb3ZlZCBieTogQnJhZCBUb3Vlc25hcmRcbiAgLy8gaW1wcm92ZWQgYnk6IFRpbSBXaWVsXG4gIC8vIGltcHJvdmVkIGJ5OiBCcnlhbiBFbGxpb3R0XG4gIC8vIGltcHJvdmVkIGJ5OiBEYXZpZCBSYW5kYWxsXG4gIC8vIGltcHJvdmVkIGJ5OiBUaGVyaWF1bHQgKGh0dHBzOi8vZ2l0aHViLmNvbS9UaGVyaWF1bHQpXG4gIC8vIGltcHJvdmVkIGJ5OiBUaGVyaWF1bHQgKGh0dHBzOi8vZ2l0aHViLmNvbS9UaGVyaWF1bHQpXG4gIC8vIGltcHJvdmVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cHM6Ly9icmV0dC16YW1pci5tZSlcbiAgLy8gaW1wcm92ZWQgYnk6IFRoZXJpYXVsdCAoaHR0cHM6Ly9naXRodWIuY29tL1RoZXJpYXVsdClcbiAgLy8gaW1wcm92ZWQgYnk6IFRob21hcyBCZWF1Y291cnQgKGh0dHBzOi8vd3d3LndlYmFwcC5mcilcbiAgLy8gaW1wcm92ZWQgYnk6IEpUXG4gIC8vIGltcHJvdmVkIGJ5OiBUaGVyaWF1bHQgKGh0dHBzOi8vZ2l0aHViLmNvbS9UaGVyaWF1bHQpXG4gIC8vIGltcHJvdmVkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHBzOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gaW1wcm92ZWQgYnk6IFRoZXJpYXVsdCAoaHR0cHM6Ly9naXRodWIuY29tL1RoZXJpYXVsdClcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwczovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogbWFqYWtcbiAgLy8gICAgaW5wdXQgYnk6IEFsZXhcbiAgLy8gICAgaW5wdXQgYnk6IE1hcnRpblxuICAvLyAgICBpbnB1dCBieTogQWxleCBXaWxzb25cbiAgLy8gICAgaW5wdXQgYnk6IEhhcmF2aWtrXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IG1hamFrXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwczovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBidWdmaXhlZCBieTogb21pZCAoaHR0cHM6Ly9sb2N1dHVzLmlvL3BocC8zODA6MzgwI2NvbW1lbnRfMTM3MTIyKVxuICAvLyBidWdmaXhlZCBieTogQ2hyaXMgKGh0dHBzOi8vd3d3LmRldm90aXMubmwvKVxuICAvLyAgICAgIG5vdGUgMTogVXNlcyBnbG9iYWw6IGxvY3V0dXMgdG8gc3RvcmUgdGhlIGRlZmF1bHQgdGltZXpvbmVcbiAgLy8gICAgICBub3RlIDE6IEFsdGhvdWdoIHRoZSBmdW5jdGlvbiBwb3RlbnRpYWxseSBhbGxvd3MgdGltZXpvbmUgaW5mb1xuICAvLyAgICAgIG5vdGUgMTogKHNlZSBub3RlcyksIGl0IGN1cnJlbnRseSBkb2VzIG5vdCBzZXRcbiAgLy8gICAgICBub3RlIDE6IHBlciBhIHRpbWV6b25lIHNwZWNpZmllZCBieSBkYXRlX2RlZmF1bHRfdGltZXpvbmVfc2V0KCkuIEltcGxlbWVudGVycyBtaWdodCB1c2VcbiAgLy8gICAgICBub3RlIDE6ICRsb2N1dHVzLmN1cnJlbnRUaW1lem9uZU9mZnNldCBhbmRcbiAgLy8gICAgICBub3RlIDE6ICRsb2N1dHVzLmN1cnJlbnRUaW1lem9uZURTVCBzZXQgYnkgdGhhdCBmdW5jdGlvblxuICAvLyAgICAgIG5vdGUgMTogaW4gb3JkZXIgdG8gYWRqdXN0IHRoZSBkYXRlcyBpbiB0aGlzIGZ1bmN0aW9uXG4gIC8vICAgICAgbm90ZSAxOiAob3Igb3VyIG90aGVyIGRhdGUgZnVuY3Rpb25zISkgYWNjb3JkaW5nbHlcbiAgLy8gICBleGFtcGxlIDE6IGRhdGUoJ0g6bTpzIFxcXFxtIFxcXFxpXFxcXHMgXFxcXG1cXFxcb1xcXFxuXFxcXHRcXFxcaCcsIDEwNjI0MDI0MDApXG4gIC8vICAgcmV0dXJucyAxOiAnMDc6MDk6NDAgbSBpcyBtb250aCdcbiAgLy8gICBleGFtcGxlIDI6IGRhdGUoJ0YgaiwgWSwgZzppIGEnLCAxMDYyNDYyNDAwKVxuICAvLyAgIHJldHVybnMgMjogJ1NlcHRlbWJlciAyLCAyMDAzLCAxMjoyNiBhbSdcbiAgLy8gICBleGFtcGxlIDM6IGRhdGUoJ1kgVyBvJywgMTA2MjQ2MjQwMClcbiAgLy8gICByZXR1cm5zIDM6ICcyMDAzIDM2IDIwMDMnXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgJHggPSBkYXRlKCdZIG0gZCcsIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKVxuICAvLyAgIGV4YW1wbGUgNDogJHggPSAkeCArICcnXG4gIC8vICAgZXhhbXBsZSA0OiB2YXIgJHJlc3VsdCA9ICR4Lmxlbmd0aCAvLyAyMDA5IDAxIDA5XG4gIC8vICAgcmV0dXJucyA0OiAxMFxuICAvLyAgIGV4YW1wbGUgNTogZGF0ZSgnVycsIDExMDQ1MzQwMDApXG4gIC8vICAgcmV0dXJucyA1OiAnNTInXG4gIC8vICAgZXhhbXBsZSA2OiBkYXRlKCdCIHQnLCAxMTA0NTM0MDAwKVxuICAvLyAgIHJldHVybnMgNjogJzk5OSAzMSdcbiAgLy8gICBleGFtcGxlIDc6IGRhdGUoJ1cgVScsIDEyOTM3NTAwMDAuODIpOyAvLyAyMDEwLTEyLTMxXG4gIC8vICAgcmV0dXJucyA3OiAnNTIgMTI5Mzc1MDAwMCdcbiAgLy8gICBleGFtcGxlIDg6IGRhdGUoJ1cnLCAxMjkzODM2NDAwKTsgLy8gMjAxMS0wMS0wMVxuICAvLyAgIHJldHVybnMgODogJzUyJ1xuICAvLyAgIGV4YW1wbGUgOTogZGF0ZSgnVyBZLW0tZCcsIDEyOTM5NzQwNTQpOyAvLyAyMDExLTAxLTAyXG4gIC8vICAgcmV0dXJucyA5OiAnNTIgMjAxMS0wMS0wMidcbiAgLy8gICAgICAgIHRlc3Q6IHNraXAtMSBza2lwLTIgc2tpcC01XG5cbiAgdmFyIGpzZGF0ZSA9IHZvaWQgMCxcbiAgICAgIGYgPSB2b2lkIDA7XG4gIC8vIEtlZXAgdGhpcyBoZXJlICh3b3JrcywgYnV0IGZvciBjb2RlIGNvbW1lbnRlZC1vdXQgYmVsb3cgZm9yIGZpbGUgc2l6ZSByZWFzb25zKVxuICAvLyB2YXIgdGFsPSBbXTtcbiAgdmFyIHR4dFdvcmRzID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkbmVzJywgJ1RodXJzJywgJ0ZyaScsICdTYXR1cicsICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG4gIC8vIHRyYWlsaW5nIGJhY2tzbGFzaCAtPiAoZHJvcHBlZClcbiAgLy8gYSBiYWNrc2xhc2ggZm9sbG93ZWQgYnkgYW55IGNoYXJhY3RlciAoaW5jbHVkaW5nIGJhY2tzbGFzaCkgLT4gdGhlIGNoYXJhY3RlclxuICAvLyBlbXB0eSBzdHJpbmcgLT4gZW1wdHkgc3RyaW5nXG4gIHZhciBmb3JtYXRDaHIgPSAvXFxcXD8oLj8pL2dpO1xuICB2YXIgZm9ybWF0Q2hyQ2IgPSBmdW5jdGlvbiBmb3JtYXRDaHJDYih0LCBzKSB7XG4gICAgcmV0dXJuIGZbdF0gPyBmW3RdKCkgOiBzO1xuICB9O1xuICB2YXIgX3BhZCA9IGZ1bmN0aW9uIF9wYWQobiwgYykge1xuICAgIG4gPSBTdHJpbmcobik7XG4gICAgd2hpbGUgKG4ubGVuZ3RoIDwgYykge1xuICAgICAgbiA9ICcwJyArIG47XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9O1xuICBmID0ge1xuICAgIC8vIERheVxuICAgIGQ6IGZ1bmN0aW9uIGQoKSB7XG4gICAgICAvLyBEYXkgb2YgbW9udGggdy9sZWFkaW5nIDA7IDAxLi4zMVxuICAgICAgcmV0dXJuIF9wYWQoZi5qKCksIDIpO1xuICAgIH0sXG4gICAgRDogZnVuY3Rpb24gRCgpIHtcbiAgICAgIC8vIFNob3J0aGFuZCBkYXkgbmFtZTsgTW9uLi4uU3VuXG4gICAgICByZXR1cm4gZi5sKCkuc2xpY2UoMCwgMyk7XG4gICAgfSxcbiAgICBqOiBmdW5jdGlvbiBqKCkge1xuICAgICAgLy8gRGF5IG9mIG1vbnRoOyAxLi4zMVxuICAgICAgcmV0dXJuIGpzZGF0ZS5nZXREYXRlKCk7XG4gICAgfSxcbiAgICBsOiBmdW5jdGlvbiBsKCkge1xuICAgICAgLy8gRnVsbCBkYXkgbmFtZTsgTW9uZGF5Li4uU3VuZGF5XG4gICAgICByZXR1cm4gdHh0V29yZHNbZi53KCldICsgJ2RheSc7XG4gICAgfSxcbiAgICBOOiBmdW5jdGlvbiBOKCkge1xuICAgICAgLy8gSVNPLTg2MDEgZGF5IG9mIHdlZWs7IDFbTW9uXS4uN1tTdW5dXG4gICAgICByZXR1cm4gZi53KCkgfHwgNztcbiAgICB9LFxuICAgIFM6IGZ1bmN0aW9uIFMoKSB7XG4gICAgICAvLyBPcmRpbmFsIHN1ZmZpeCBmb3IgZGF5IG9mIG1vbnRoOyBzdCwgbmQsIHJkLCB0aFxuICAgICAgdmFyIGogPSBmLmooKTtcbiAgICAgIHZhciBpID0gaiAlIDEwO1xuICAgICAgaWYgKGkgPD0gMyAmJiBwYXJzZUludChqICUgMTAwIC8gMTAsIDEwKSA9PT0gMSkge1xuICAgICAgICBpID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbJ3N0JywgJ25kJywgJ3JkJ11baSAtIDFdIHx8ICd0aCc7XG4gICAgfSxcbiAgICB3OiBmdW5jdGlvbiB3KCkge1xuICAgICAgLy8gRGF5IG9mIHdlZWs7IDBbU3VuXS4uNltTYXRdXG4gICAgICByZXR1cm4ganNkYXRlLmdldERheSgpO1xuICAgIH0sXG4gICAgejogZnVuY3Rpb24geigpIHtcbiAgICAgIC8vIERheSBvZiB5ZWFyOyAwLi4zNjVcbiAgICAgIHZhciBhID0gbmV3IERhdGUoZi5ZKCksIGYubigpIC0gMSwgZi5qKCkpO1xuICAgICAgdmFyIGIgPSBuZXcgRGF0ZShmLlkoKSwgMCwgMSk7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgoYSAtIGIpIC8gODY0ZTUpO1xuICAgIH0sXG5cbiAgICAvLyBXZWVrXG4gICAgVzogZnVuY3Rpb24gVygpIHtcbiAgICAgIC8vIElTTy04NjAxIHdlZWsgbnVtYmVyXG4gICAgICB2YXIgYSA9IG5ldyBEYXRlKGYuWSgpLCBmLm4oKSAtIDEsIGYuaigpIC0gZi5OKCkgKyAzKTtcbiAgICAgIHZhciBiID0gbmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLCAwLCA0KTtcbiAgICAgIHJldHVybiBfcGFkKDEgKyBNYXRoLnJvdW5kKChhIC0gYikgLyA4NjRlNSAvIDcpLCAyKTtcbiAgICB9LFxuXG4gICAgLy8gTW9udGhcbiAgICBGOiBmdW5jdGlvbiBGKCkge1xuICAgICAgLy8gRnVsbCBtb250aCBuYW1lOyBKYW51YXJ5Li4uRGVjZW1iZXJcbiAgICAgIHJldHVybiB0eHRXb3Jkc1s2ICsgZi5uKCldO1xuICAgIH0sXG4gICAgbTogZnVuY3Rpb24gbSgpIHtcbiAgICAgIC8vIE1vbnRoIHcvbGVhZGluZyAwOyAwMS4uLjEyXG4gICAgICByZXR1cm4gX3BhZChmLm4oKSwgMik7XG4gICAgfSxcbiAgICBNOiBmdW5jdGlvbiBNKCkge1xuICAgICAgLy8gU2hvcnRoYW5kIG1vbnRoIG5hbWU7IEphbi4uLkRlY1xuICAgICAgcmV0dXJuIGYuRigpLnNsaWNlKDAsIDMpO1xuICAgIH0sXG4gICAgbjogZnVuY3Rpb24gbigpIHtcbiAgICAgIC8vIE1vbnRoOyAxLi4uMTJcbiAgICAgIHJldHVybiBqc2RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgfSxcbiAgICB0OiBmdW5jdGlvbiB0KCkge1xuICAgICAgLy8gRGF5cyBpbiBtb250aDsgMjguLi4zMVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGYuWSgpLCBmLm4oKSwgMCkuZ2V0RGF0ZSgpO1xuICAgIH0sXG5cbiAgICAvLyBZZWFyXG4gICAgTDogZnVuY3Rpb24gTCgpIHtcbiAgICAgIC8vIElzIGxlYXAgeWVhcj87IDAgb3IgMVxuICAgICAgdmFyIGogPSBmLlkoKTtcbiAgICAgIHJldHVybiBqICUgNCA9PT0gMCAmIGogJSAxMDAgIT09IDAgfCBqICUgNDAwID09PSAwO1xuICAgIH0sXG4gICAgbzogZnVuY3Rpb24gbygpIHtcbiAgICAgIC8vIElTTy04NjAxIHllYXJcbiAgICAgIHZhciBuID0gZi5uKCk7XG4gICAgICB2YXIgVyA9IGYuVygpO1xuICAgICAgdmFyIFkgPSBmLlkoKTtcbiAgICAgIHJldHVybiBZICsgKG4gPT09IDEyICYmIFcgPCA5ID8gMSA6IG4gPT09IDEgJiYgVyA+IDkgPyAtMSA6IDApO1xuICAgIH0sXG4gICAgWTogZnVuY3Rpb24gWSgpIHtcbiAgICAgIC8vIEZ1bGwgeWVhcjsgZS5nLiAxOTgwLi4uMjAxMFxuICAgICAgcmV0dXJuIGpzZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIH0sXG4gICAgeTogZnVuY3Rpb24geSgpIHtcbiAgICAgIC8vIExhc3QgdHdvIGRpZ2l0cyBvZiB5ZWFyOyAwMC4uLjk5XG4gICAgICByZXR1cm4gZi5ZKCkudG9TdHJpbmcoKS5zbGljZSgtMik7XG4gICAgfSxcblxuICAgIC8vIFRpbWVcbiAgICBhOiBmdW5jdGlvbiBhKCkge1xuICAgICAgLy8gYW0gb3IgcG1cbiAgICAgIHJldHVybiBqc2RhdGUuZ2V0SG91cnMoKSA+IDExID8gJ3BtJyA6ICdhbSc7XG4gICAgfSxcbiAgICBBOiBmdW5jdGlvbiBBKCkge1xuICAgICAgLy8gQU0gb3IgUE1cbiAgICAgIHJldHVybiBmLmEoKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0sXG4gICAgQjogZnVuY3Rpb24gQigpIHtcbiAgICAgIC8vIFN3YXRjaCBJbnRlcm5ldCB0aW1lOyAwMDAuLjk5OVxuICAgICAgdmFyIEggPSBqc2RhdGUuZ2V0VVRDSG91cnMoKSAqIDM2ZTI7XG4gICAgICAvLyBIb3Vyc1xuICAgICAgdmFyIGkgPSBqc2RhdGUuZ2V0VVRDTWludXRlcygpICogNjA7XG4gICAgICAvLyBNaW51dGVzXG4gICAgICAvLyBTZWNvbmRzXG4gICAgICB2YXIgcyA9IGpzZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgICByZXR1cm4gX3BhZChNYXRoLmZsb29yKChIICsgaSArIHMgKyAzNmUyKSAvIDg2LjQpICUgMWUzLCAzKTtcbiAgICB9LFxuICAgIGc6IGZ1bmN0aW9uIGcoKSB7XG4gICAgICAvLyAxMi1Ib3VyczsgMS4uMTJcbiAgICAgIHJldHVybiBmLkcoKSAlIDEyIHx8IDEyO1xuICAgIH0sXG4gICAgRzogZnVuY3Rpb24gRygpIHtcbiAgICAgIC8vIDI0LUhvdXJzOyAwLi4yM1xuICAgICAgcmV0dXJuIGpzZGF0ZS5nZXRIb3VycygpO1xuICAgIH0sXG4gICAgaDogZnVuY3Rpb24gaCgpIHtcbiAgICAgIC8vIDEyLUhvdXJzIHcvbGVhZGluZyAwOyAwMS4uMTJcbiAgICAgIHJldHVybiBfcGFkKGYuZygpLCAyKTtcbiAgICB9LFxuICAgIEg6IGZ1bmN0aW9uIEgoKSB7XG4gICAgICAvLyAyNC1Ib3VycyB3L2xlYWRpbmcgMDsgMDAuLjIzXG4gICAgICByZXR1cm4gX3BhZChmLkcoKSwgMik7XG4gICAgfSxcbiAgICBpOiBmdW5jdGlvbiBpKCkge1xuICAgICAgLy8gTWludXRlcyB3L2xlYWRpbmcgMDsgMDAuLjU5XG4gICAgICByZXR1cm4gX3BhZChqc2RhdGUuZ2V0TWludXRlcygpLCAyKTtcbiAgICB9LFxuICAgIHM6IGZ1bmN0aW9uIHMoKSB7XG4gICAgICAvLyBTZWNvbmRzIHcvbGVhZGluZyAwOyAwMC4uNTlcbiAgICAgIHJldHVybiBfcGFkKGpzZGF0ZS5nZXRTZWNvbmRzKCksIDIpO1xuICAgIH0sXG4gICAgdTogZnVuY3Rpb24gdSgpIHtcbiAgICAgIC8vIE1pY3Jvc2Vjb25kczsgMDAwMDAwLTk5OTAwMFxuICAgICAgcmV0dXJuIF9wYWQoanNkYXRlLmdldE1pbGxpc2Vjb25kcygpICogMTAwMCwgNik7XG4gICAgfSxcblxuICAgIC8vIFRpbWV6b25lXG4gICAgZTogZnVuY3Rpb24gZSgpIHtcbiAgICAgIC8vIFRpbWV6b25lIGlkZW50aWZpZXI7IGUuZy4gQXRsYW50aWMvQXpvcmVzLCAuLi5cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgd29ya3MsIGJ1dCByZXF1aXJlcyBpbmNsdXNpb24gb2YgdGhlIHZlcnkgbGFyZ2VcbiAgICAgIC8vIHRpbWV6b25lX2FiYnJldmlhdGlvbnNfbGlzdCgpIGZ1bmN0aW9uLlxuICAgICAgLyogICAgICAgICAgICAgIHJldHVybiB0aGF0LmRhdGVfZGVmYXVsdF90aW1lem9uZV9nZXQoKTtcbiAgICAgICAqL1xuICAgICAgdmFyIG1zZyA9ICdOb3Qgc3VwcG9ydGVkIChzZWUgc291cmNlIGNvZGUgb2YgZGF0ZSgpIGZvciB0aW1lem9uZSBvbiBob3cgdG8gYWRkIHN1cHBvcnQpJztcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH0sXG4gICAgSTogZnVuY3Rpb24gSSgpIHtcbiAgICAgIC8vIERTVCBvYnNlcnZlZD87IDAgb3IgMVxuICAgICAgLy8gQ29tcGFyZXMgSmFuIDEgbWludXMgSmFuIDEgVVRDIHRvIEp1bCAxIG1pbnVzIEp1bCAxIFVUQy5cbiAgICAgIC8vIElmIHRoZXkgYXJlIG5vdCBlcXVhbCwgdGhlbiBEU1QgaXMgb2JzZXJ2ZWQuXG4gICAgICB2YXIgYSA9IG5ldyBEYXRlKGYuWSgpLCAwKTtcbiAgICAgIC8vIEphbiAxXG4gICAgICB2YXIgYyA9IERhdGUuVVRDKGYuWSgpLCAwKTtcbiAgICAgIC8vIEphbiAxIFVUQ1xuICAgICAgdmFyIGIgPSBuZXcgRGF0ZShmLlkoKSwgNik7XG4gICAgICAvLyBKdWwgMVxuICAgICAgLy8gSnVsIDEgVVRDXG4gICAgICB2YXIgZCA9IERhdGUuVVRDKGYuWSgpLCA2KTtcbiAgICAgIHJldHVybiBhIC0gYyAhPT0gYiAtIGQgPyAxIDogMDtcbiAgICB9LFxuICAgIE86IGZ1bmN0aW9uIE8oKSB7XG4gICAgICAvLyBEaWZmZXJlbmNlIHRvIEdNVCBpbiBob3VyIGZvcm1hdDsgZS5nLiArMDIwMFxuICAgICAgdmFyIHR6byA9IGpzZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgdmFyIGEgPSBNYXRoLmFicyh0em8pO1xuICAgICAgcmV0dXJuICh0em8gPiAwID8gJy0nIDogJysnKSArIF9wYWQoTWF0aC5mbG9vcihhIC8gNjApICogMTAwICsgYSAlIDYwLCA0KTtcbiAgICB9LFxuICAgIFA6IGZ1bmN0aW9uIFAoKSB7XG4gICAgICAvLyBEaWZmZXJlbmNlIHRvIEdNVCB3L2NvbG9uOyBlLmcuICswMjowMFxuICAgICAgdmFyIE8gPSBmLk8oKTtcbiAgICAgIHJldHVybiBPLnN1YnN0cigwLCAzKSArICc6JyArIE8uc3Vic3RyKDMsIDIpO1xuICAgIH0sXG4gICAgVDogZnVuY3Rpb24gVCgpIHtcbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgd29ya3MsIGJ1dCByZXF1aXJlcyBpbmNsdXNpb24gb2YgdGhlIHZlcnlcbiAgICAgIC8vIGxhcmdlIHRpbWV6b25lX2FiYnJldmlhdGlvbnNfbGlzdCgpIGZ1bmN0aW9uLlxuICAgICAgLyogICAgICAgICAgICAgIHZhciBhYmJyLCBpLCBvcywgX2RlZmF1bHQ7XG4gICAgICBpZiAoIXRhbC5sZW5ndGgpIHtcbiAgICAgICAgdGFsID0gdGhhdC50aW1lem9uZV9hYmJyZXZpYXRpb25zX2xpc3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICgkbG9jdXR1cyAmJiAkbG9jdXR1cy5kZWZhdWx0X3RpbWV6b25lKSB7XG4gICAgICAgIF9kZWZhdWx0ID0gJGxvY3V0dXMuZGVmYXVsdF90aW1lem9uZTtcbiAgICAgICAgZm9yIChhYmJyIGluIHRhbCkge1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0YWxbYWJicl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YWxbYWJicl1baV0udGltZXpvbmVfaWQgPT09IF9kZWZhdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBhYmJyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGFiYnIgaW4gdGFsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0YWxbYWJicl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBvcyA9IC1qc2RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwO1xuICAgICAgICAgIGlmICh0YWxbYWJicl1baV0ub2Zmc2V0ID09PSBvcykge1xuICAgICAgICAgICAgcmV0dXJuIGFiYnIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICovXG4gICAgICByZXR1cm4gJ1VUQyc7XG4gICAgfSxcbiAgICBaOiBmdW5jdGlvbiBaKCkge1xuICAgICAgLy8gVGltZXpvbmUgb2Zmc2V0IGluIHNlY29uZHMgKC00MzIwMC4uLjUwNDAwKVxuICAgICAgcmV0dXJuIC1qc2RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwO1xuICAgIH0sXG5cbiAgICAvLyBGdWxsIERhdGUvVGltZVxuICAgIGM6IGZ1bmN0aW9uIGMoKSB7XG4gICAgICAvLyBJU08tODYwMSBkYXRlLlxuICAgICAgcmV0dXJuICdZLW0tZFxcXFxUSDppOnNQJy5yZXBsYWNlKGZvcm1hdENociwgZm9ybWF0Q2hyQ2IpO1xuICAgIH0sXG4gICAgcjogZnVuY3Rpb24gcigpIHtcbiAgICAgIC8vIFJGQyAyODIyXG4gICAgICByZXR1cm4gJ0QsIGQgTSBZIEg6aTpzIE8nLnJlcGxhY2UoZm9ybWF0Q2hyLCBmb3JtYXRDaHJDYik7XG4gICAgfSxcbiAgICBVOiBmdW5jdGlvbiBVKCkge1xuICAgICAgLy8gU2Vjb25kcyBzaW5jZSBVTklYIGVwb2NoXG4gICAgICByZXR1cm4ganNkYXRlIC8gMTAwMCB8IDA7XG4gICAgfVxuICB9O1xuXG4gIHZhciBfZGF0ZSA9IGZ1bmN0aW9uIF9kYXRlKGZvcm1hdCwgdGltZXN0YW1wKSB7XG4gICAganNkYXRlID0gdGltZXN0YW1wID09PSB1bmRlZmluZWQgPyBuZXcgRGF0ZSgpIC8vIE5vdCBwcm92aWRlZFxuICAgIDogdGltZXN0YW1wIGluc3RhbmNlb2YgRGF0ZSA/IG5ldyBEYXRlKHRpbWVzdGFtcCkgLy8gSlMgRGF0ZSgpXG4gICAgOiBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTsgLy8gVU5JWCB0aW1lc3RhbXAgKGF1dG8tY29udmVydCB0byBpbnQpXG4gICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKGZvcm1hdENociwgZm9ybWF0Q2hyQ2IpO1xuICB9O1xuXG4gIHJldHVybiBfZGF0ZShmb3JtYXQsIHRpbWVzdGFtcCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0ZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZVNwYWNlID0gJ1sgXFxcXHRdKyc7XG52YXIgcmVTcGFjZU9wdCA9ICdbIFxcXFx0XSonO1xudmFyIHJlTWVyaWRpYW4gPSAnKD86KFthcF0pXFxcXC4/bVxcXFwuPyhbXFxcXHQgXXwkKSknO1xudmFyIHJlSG91cjI0ID0gJygyWzAtNF18WzAxXT9bMC05XSknO1xudmFyIHJlSG91cjI0bHogPSAnKFswMV1bMC05XXwyWzAtNF0pJztcbnZhciByZUhvdXIxMiA9ICcoMD9bMS05XXwxWzAtMl0pJztcbnZhciByZU1pbnV0ZSA9ICcoWzAtNV0/WzAtOV0pJztcbnZhciByZU1pbnV0ZWx6ID0gJyhbMC01XVswLTldKSc7XG52YXIgcmVTZWNvbmQgPSAnKDYwfFswLTVdP1swLTldKSc7XG52YXIgcmVTZWNvbmRseiA9ICcoNjB8WzAtNV1bMC05XSknO1xudmFyIHJlRnJhYyA9ICcoPzpcXFxcLihbMC05XSspKSc7XG5cbnZhciByZURheWZ1bGwgPSAnc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXknO1xudmFyIHJlRGF5YWJiciA9ICdzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQnO1xudmFyIHJlRGF5dGV4dCA9IHJlRGF5ZnVsbCArICd8JyArIHJlRGF5YWJiciArICd8d2Vla2RheXM/JztcblxudmFyIHJlUmVsdGV4dG51bWJlciA9ICdmaXJzdHxzZWNvbmR8dGhpcmR8Zm91cnRofGZpZnRofHNpeHRofHNldmVudGh8ZWlnaHRoP3xuaW50aHx0ZW50aHxlbGV2ZW50aHx0d2VsZnRoJztcbnZhciByZVJlbHRleHR0ZXh0ID0gJ25leHR8bGFzdHxwcmV2aW91c3x0aGlzJztcbnZhciByZVJlbHRleHR1bml0ID0gJyg/OnNlY29uZHxzZWN8bWludXRlfG1pbnxob3VyfGRheXxmb3J0bmlnaHR8Zm9ydGhuaWdodHxtb250aHx5ZWFyKXM/fHdlZWtzfCcgKyByZURheXRleHQ7XG5cbnZhciByZVllYXIgPSAnKFswLTldezEsNH0pJztcbnZhciByZVllYXIyID0gJyhbMC05XXsyfSknO1xudmFyIHJlWWVhcjQgPSAnKFswLTldezR9KSc7XG52YXIgcmVZZWFyNHdpdGhTaWduID0gJyhbKy1dP1swLTldezR9KSc7XG52YXIgcmVNb250aCA9ICcoMVswLTJdfDA/WzAtOV0pJztcbnZhciByZU1vbnRobHogPSAnKDBbMC05XXwxWzAtMl0pJztcbnZhciByZURheSA9ICcoPzooM1swMV18WzAtMl0/WzAtOV0pKD86c3R8bmR8cmR8dGgpPyknO1xudmFyIHJlRGF5bHogPSAnKDBbMC05XXxbMS0yXVswLTldfDNbMDFdKSc7XG5cbnZhciByZU1vbnRoRnVsbCA9ICdqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyJztcbnZhciByZU1vbnRoQWJiciA9ICdqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHQ/fG9jdHxub3Z8ZGVjJztcbnZhciByZU1vbnRocm9tYW4gPSAnaVt2eF18dml7MCwzfXx4aXswLDJ9fGl7MSwzfSc7XG52YXIgcmVNb250aFRleHQgPSAnKCcgKyByZU1vbnRoRnVsbCArICd8JyArIHJlTW9udGhBYmJyICsgJ3wnICsgcmVNb250aHJvbWFuICsgJyknO1xuXG52YXIgcmVUekNvcnJlY3Rpb24gPSAnKCg/OkdNVCk/KFsrLV0pJyArIHJlSG91cjI0ICsgJzo/JyArIHJlTWludXRlICsgJz8pJztcbnZhciByZVR6QWJiciA9ICdcXFxcKD8oW2EtekEtWl17MSw2fSlcXFxcKT8nO1xudmFyIHJlRGF5T2ZZZWFyID0gJygwMFsxLTldfDBbMS05XVswLTldfFsxMl1bMC05XVswLTldfDNbMC01XVswLTldfDM2WzAtNl0pJztcbnZhciByZVdlZWtPZlllYXIgPSAnKDBbMS05XXxbMS00XVswLTldfDVbMC0zXSknO1xuXG52YXIgcmVEYXRlTm9ZZWFyID0gcmVNb250aFRleHQgKyAnWyAuXFxcXHQtXSonICsgcmVEYXkgKyAnWywuc3RuZHJoXFxcXHQgXSonO1xuXG5mdW5jdGlvbiBwcm9jZXNzTWVyaWRpYW4oaG91ciwgbWVyaWRpYW4pIHtcbiAgbWVyaWRpYW4gPSBtZXJpZGlhbiAmJiBtZXJpZGlhbi50b0xvd2VyQ2FzZSgpO1xuXG4gIHN3aXRjaCAobWVyaWRpYW4pIHtcbiAgICBjYXNlICdhJzpcbiAgICAgIGhvdXIgKz0gaG91ciA9PT0gMTIgPyAtMTIgOiAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncCc6XG4gICAgICBob3VyICs9IGhvdXIgIT09IDEyID8gMTIgOiAwO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gaG91cjtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1llYXIoeWVhclN0cikge1xuICB2YXIgeWVhciA9ICt5ZWFyU3RyO1xuXG4gIGlmICh5ZWFyU3RyLmxlbmd0aCA8IDQgJiYgeWVhciA8IDEwMCkge1xuICAgIHllYXIgKz0geWVhciA8IDcwID8gMjAwMCA6IDE5MDA7XG4gIH1cblxuICByZXR1cm4geWVhcjtcbn1cblxuZnVuY3Rpb24gbG9va3VwTW9udGgobW9udGhTdHIpIHtcbiAgcmV0dXJuIHtcbiAgICBqYW46IDAsXG4gICAgamFudWFyeTogMCxcbiAgICBpOiAwLFxuICAgIGZlYjogMSxcbiAgICBmZWJydWFyeTogMSxcbiAgICBpaTogMSxcbiAgICBtYXI6IDIsXG4gICAgbWFyY2g6IDIsXG4gICAgaWlpOiAyLFxuICAgIGFwcjogMyxcbiAgICBhcHJpbDogMyxcbiAgICBpdjogMyxcbiAgICBtYXk6IDQsXG4gICAgdjogNCxcbiAgICBqdW46IDUsXG4gICAganVuZTogNSxcbiAgICB2aTogNSxcbiAgICBqdWw6IDYsXG4gICAganVseTogNixcbiAgICB2aWk6IDYsXG4gICAgYXVnOiA3LFxuICAgIGF1Z3VzdDogNyxcbiAgICB2aWlpOiA3LFxuICAgIHNlcDogOCxcbiAgICBzZXB0OiA4LFxuICAgIHNlcHRlbWJlcjogOCxcbiAgICBpeDogOCxcbiAgICBvY3Q6IDksXG4gICAgb2N0b2JlcjogOSxcbiAgICB4OiA5LFxuICAgIG5vdjogMTAsXG4gICAgbm92ZW1iZXI6IDEwLFxuICAgIHhpOiAxMCxcbiAgICBkZWM6IDExLFxuICAgIGRlY2VtYmVyOiAxMSxcbiAgICB4aWk6IDExXG4gIH1bbW9udGhTdHIudG9Mb3dlckNhc2UoKV07XG59XG5cbmZ1bmN0aW9uIGxvb2t1cFdlZWtkYXkoZGF5U3RyKSB7XG4gIHZhciBkZXNpcmVkU3VuZGF5TnVtYmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gIHZhciBkYXlOdW1iZXJzID0ge1xuICAgIG1vbjogMSxcbiAgICBtb25kYXk6IDEsXG4gICAgdHVlOiAyLFxuICAgIHR1ZXNkYXk6IDIsXG4gICAgd2VkOiAzLFxuICAgIHdlZG5lc2RheTogMyxcbiAgICB0aHU6IDQsXG4gICAgdGh1cnNkYXk6IDQsXG4gICAgZnJpOiA1LFxuICAgIGZyaWRheTogNSxcbiAgICBzYXQ6IDYsXG4gICAgc2F0dXJkYXk6IDYsXG4gICAgc3VuOiAwLFxuICAgIHN1bmRheTogMFxuICB9O1xuXG4gIHJldHVybiBkYXlOdW1iZXJzW2RheVN0ci50b0xvd2VyQ2FzZSgpXSB8fCBkZXNpcmVkU3VuZGF5TnVtYmVyO1xufVxuXG5mdW5jdGlvbiBsb29rdXBSZWxhdGl2ZShyZWxUZXh0KSB7XG4gIHZhciByZWxhdGl2ZU51bWJlcnMgPSB7XG4gICAgbGFzdDogLTEsXG4gICAgcHJldmlvdXM6IC0xLFxuICAgIHRoaXM6IDAsXG4gICAgZmlyc3Q6IDEsXG4gICAgbmV4dDogMSxcbiAgICBzZWNvbmQ6IDIsXG4gICAgdGhpcmQ6IDMsXG4gICAgZm91cnRoOiA0LFxuICAgIGZpZnRoOiA1LFxuICAgIHNpeHRoOiA2LFxuICAgIHNldmVudGg6IDcsXG4gICAgZWlnaHQ6IDgsXG4gICAgZWlnaHRoOiA4LFxuICAgIG5pbnRoOiA5LFxuICAgIHRlbnRoOiAxMCxcbiAgICBlbGV2ZW50aDogMTEsXG4gICAgdHdlbGZ0aDogMTJcbiAgfTtcblxuICB2YXIgcmVsYXRpdmVCZWhhdmlvciA9IHtcbiAgICB0aGlzOiAxXG4gIH07XG5cbiAgdmFyIHJlbFRleHRMb3dlciA9IHJlbFRleHQudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGFtb3VudDogcmVsYXRpdmVOdW1iZXJzW3JlbFRleHRMb3dlcl0sXG4gICAgYmVoYXZpb3I6IHJlbGF0aXZlQmVoYXZpb3JbcmVsVGV4dExvd2VyXSB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NUekNvcnJlY3Rpb24odHpPZmZzZXQsIG9sZFZhbHVlKSB7XG4gIHZhciByZVR6Q29ycmVjdGlvbkxvb3NlID0gLyg/OkdNVCk/KFsrLV0pKFxcZCspKDo/KShcXGR7MCwyfSkvaTtcbiAgdHpPZmZzZXQgPSB0ek9mZnNldCAmJiB0ek9mZnNldC5tYXRjaChyZVR6Q29ycmVjdGlvbkxvb3NlKTtcblxuICBpZiAoIXR6T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG9sZFZhbHVlO1xuICB9XG5cbiAgdmFyIHNpZ24gPSB0ek9mZnNldFsxXSA9PT0gJy0nID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSArdHpPZmZzZXRbMl07XG4gIHZhciBtaW51dGVzID0gK3R6T2Zmc2V0WzRdO1xuXG4gIGlmICghdHpPZmZzZXRbNF0gJiYgIXR6T2Zmc2V0WzNdKSB7XG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IoaG91cnMgJSAxMDApO1xuICAgIGhvdXJzID0gTWF0aC5mbG9vcihob3VycyAvIDEwMCk7XG4gIH1cblxuICAvLyB0aW1lem9uZSBvZmZzZXQgaW4gc2Vjb25kc1xuICByZXR1cm4gc2lnbiAqIChob3VycyAqIDYwICsgbWludXRlcykgKiA2MDtcbn1cblxuLy8gdHogYWJicmV2YXRpb24gOiB0eiBvZmZzZXQgaW4gc2Vjb25kc1xudmFyIHR6QWJick9mZnNldHMgPSB7XG4gIGFjZHQ6IDM3ODAwLFxuICBhY3N0OiAzNDIwMCxcbiAgYWRkdDogLTcyMDAsXG4gIGFkdDogLTEwODAwLFxuICBhZWR0OiAzOTYwMCxcbiAgYWVzdDogMzYwMDAsXG4gIGFoZHQ6IC0zMjQwMCxcbiAgYWhzdDogLTM2MDAwLFxuICBha2R0OiAtMjg4MDAsXG4gIGFrc3Q6IC0zMjQwMCxcbiAgYW10OiAtMTM4NDAsXG4gIGFwdDogLTEwODAwLFxuICBhc3Q6IC0xNDQwMCxcbiAgYXdkdDogMzI0MDAsXG4gIGF3c3Q6IDI4ODAwLFxuICBhd3Q6IC0xMDgwMCxcbiAgYmRzdDogNzIwMCxcbiAgYmR0OiAtMzYwMDAsXG4gIGJtdDogLTE0MzA5LFxuICBic3Q6IDM2MDAsXG4gIGNhc3Q6IDM0MjAwLFxuICBjYXQ6IDcyMDAsXG4gIGNkZHQ6IC0xNDQwMCxcbiAgY2R0OiAtMTgwMDAsXG4gIGNlbXQ6IDEwODAwLFxuICBjZXN0OiA3MjAwLFxuICBjZXQ6IDM2MDAsXG4gIGNtdDogLTE1NDA4LFxuICBjcHQ6IC0xODAwMCxcbiAgY3N0OiAtMjE2MDAsXG4gIGN3dDogLTE4MDAwLFxuICBjaHN0OiAzNjAwMCxcbiAgZG10OiAtMTUyMSxcbiAgZWF0OiAxMDgwMCxcbiAgZWRkdDogLTEwODAwLFxuICBlZHQ6IC0xNDQwMCxcbiAgZWVzdDogMTA4MDAsXG4gIGVldDogNzIwMCxcbiAgZW10OiAtMjYyNDgsXG4gIGVwdDogLTE0NDAwLFxuICBlc3Q6IC0xODAwMCxcbiAgZXd0OiAtMTQ0MDAsXG4gIGZmbXQ6IC0xNDY2MCxcbiAgZm10OiAtNDA1NixcbiAgZ2R0OiAzOTYwMCxcbiAgZ210OiAwLFxuICBnc3Q6IDM2MDAwLFxuICBoZHQ6IC0zNDIwMCxcbiAgaGtzdDogMzI0MDAsXG4gIGhrdDogMjg4MDAsXG4gIGhtdDogLTE5Nzc2LFxuICBocHQ6IC0zNDIwMCxcbiAgaHN0OiAtMzYwMDAsXG4gIGh3dDogLTM0MjAwLFxuICBpZGR0OiAxNDQwMCxcbiAgaWR0OiAxMDgwMCxcbiAgaW10OiAyNTAyNSxcbiAgaXN0OiA3MjAwLFxuICBqZHQ6IDM2MDAwLFxuICBqbXQ6IDg0NDAsXG4gIGpzdDogMzI0MDAsXG4gIGtkdDogMzYwMDAsXG4gIGttdDogNTczNixcbiAga3N0OiAzMDYwMCxcbiAgbHN0OiA5Mzk0LFxuICBtZGR0OiAtMTgwMDAsXG4gIG1kc3Q6IDE2Mjc5LFxuICBtZHQ6IC0yMTYwMCxcbiAgbWVzdDogNzIwMCxcbiAgbWV0OiAzNjAwLFxuICBtbXQ6IDkwMTcsXG4gIG1wdDogLTIxNjAwLFxuICBtc2Q6IDE0NDAwLFxuICBtc2s6IDEwODAwLFxuICBtc3Q6IC0yNTIwMCxcbiAgbXd0OiAtMjE2MDAsXG4gIG5kZHQ6IC01NDAwLFxuICBuZHQ6IC05MDUyLFxuICBucHQ6IC05MDAwLFxuICBuc3Q6IC0xMjYwMCxcbiAgbnd0OiAtOTAwMCxcbiAgbnpkdDogNDY4MDAsXG4gIG56bXQ6IDQxNDAwLFxuICBuenN0OiA0MzIwMCxcbiAgcGRkdDogLTIxNjAwLFxuICBwZHQ6IC0yNTIwMCxcbiAgcGtzdDogMjE2MDAsXG4gIHBrdDogMTgwMDAsXG4gIHBsbXQ6IDI1NTkwLFxuICBwbXQ6IC0xMzIzNixcbiAgcHBtdDogLTE3MzQwLFxuICBwcHQ6IC0yNTIwMCxcbiAgcHN0OiAtMjg4MDAsXG4gIHB3dDogLTI1MjAwLFxuICBxbXQ6IC0xODg0MCxcbiAgcm10OiA1Nzk0LFxuICBzYXN0OiA3MjAwLFxuICBzZG10OiAtMTY4MDAsXG4gIHNqbXQ6IC0yMDE3MyxcbiAgc210OiAtMTM4ODQsXG4gIHNzdDogLTM5NjAwLFxuICB0Ym10OiAxMDc1MSxcbiAgdG10OiAxMjM0NCxcbiAgdWN0OiAwLFxuICB1dGM6IDAsXG4gIHdhc3Q6IDcyMDAsXG4gIHdhdDogMzYwMCxcbiAgd2VtdDogNzIwMCxcbiAgd2VzdDogMzYwMCxcbiAgd2V0OiAwLFxuICB3aWI6IDI1MjAwLFxuICB3aXRhOiAyODgwMCxcbiAgd2l0OiAzMjQwMCxcbiAgd210OiA1MDQwLFxuICB5ZGR0OiAtMjUyMDAsXG4gIHlkdDogLTI4ODAwLFxuICB5cHQ6IC0yODgwMCxcbiAgeXN0OiAtMzI0MDAsXG4gIHl3dDogLTI4ODAwLFxuICBhOiAzNjAwLFxuICBiOiA3MjAwLFxuICBjOiAxMDgwMCxcbiAgZDogMTQ0MDAsXG4gIGU6IDE4MDAwLFxuICBmOiAyMTYwMCxcbiAgZzogMjUyMDAsXG4gIGg6IDI4ODAwLFxuICBpOiAzMjQwMCxcbiAgazogMzYwMDAsXG4gIGw6IDM5NjAwLFxuICBtOiA0MzIwMCxcbiAgbjogLTM2MDAsXG4gIG86IC03MjAwLFxuICBwOiAtMTA4MDAsXG4gIHE6IC0xNDQwMCxcbiAgcjogLTE4MDAwLFxuICBzOiAtMjE2MDAsXG4gIHQ6IC0yNTIwMCxcbiAgdTogLTI4ODAwLFxuICB2OiAtMzI0MDAsXG4gIHc6IC0zNjAwMCxcbiAgeDogLTM5NjAwLFxuICB5OiAtNDMyMDAsXG4gIHo6IDBcbn07XG5cbnZhciBmb3JtYXRzID0ge1xuICB5ZXN0ZXJkYXk6IHtcbiAgICByZWdleDogL155ZXN0ZXJkYXkvaSxcbiAgICBuYW1lOiAneWVzdGVyZGF5JyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICB0aGlzLnJkIC09IDE7XG4gICAgICByZXR1cm4gdGhpcy5yZXNldFRpbWUoKTtcbiAgICB9XG4gIH0sXG5cbiAgbm93OiB7XG4gICAgcmVnZXg6IC9ebm93L2ksXG4gICAgbmFtZTogJ25vdydcbiAgICAvLyBkbyBub3RoaW5nXG4gIH0sXG5cbiAgbm9vbjoge1xuICAgIHJlZ2V4OiAvXm5vb24vaSxcbiAgICBuYW1lOiAnbm9vbicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXRUaW1lKCkgJiYgdGhpcy50aW1lKDEyLCAwLCAwLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgbWlkbmlnaHRPclRvZGF5OiB7XG4gICAgcmVnZXg6IC9eKG1pZG5pZ2h0fHRvZGF5KS9pLFxuICAgIG5hbWU6ICdtaWRuaWdodCB8IHRvZGF5JyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNldFRpbWUoKTtcbiAgICB9XG4gIH0sXG5cbiAgdG9tb3Jyb3c6IHtcbiAgICByZWdleDogL150b21vcnJvdy9pLFxuICAgIG5hbWU6ICd0b21vcnJvdycsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgdGhpcy5yZCArPSAxO1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgfVxuICB9LFxuXG4gIHRpbWVzdGFtcDoge1xuICAgIHJlZ2V4OiAvXkAoLT9cXGQrKS9pLFxuICAgIG5hbWU6ICd0aW1lc3RhbXAnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgdGltZXN0YW1wKSB7XG4gICAgICB0aGlzLnJzICs9ICt0aW1lc3RhbXA7XG4gICAgICB0aGlzLnkgPSAxOTcwO1xuICAgICAgdGhpcy5tID0gMDtcbiAgICAgIHRoaXMuZCA9IDE7XG4gICAgICB0aGlzLmRhdGVzID0gMDtcblxuICAgICAgcmV0dXJuIHRoaXMucmVzZXRUaW1lKCkgJiYgdGhpcy56b25lKDApO1xuICAgIH1cbiAgfSxcblxuICBmaXJzdE9yTGFzdERheToge1xuICAgIHJlZ2V4OiAvXihmaXJzdHxsYXN0KSBkYXkgb2YvaSxcbiAgICBuYW1lOiAnZmlyc3RkYXlvZiB8IGxhc3RkYXlvZicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBkYXkpIHtcbiAgICAgIGlmIChkYXkudG9Mb3dlckNhc2UoKSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICB0aGlzLmZpcnN0T3JMYXN0RGF5T2ZNb250aCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpcnN0T3JMYXN0RGF5T2ZNb250aCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBiYWNrT3JGcm9udE9mOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXihiYWNrfGZyb250KSBvZiAnICsgcmVIb3VyMjQgKyByZVNwYWNlT3B0ICsgcmVNZXJpZGlhbiArICc/JywgJ2knKSxcbiAgICBuYW1lOiAnYmFja29mIHwgZnJvbnRvZicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBzaWRlLCBob3VycywgbWVyaWRpYW4pIHtcbiAgICAgIHZhciBiYWNrID0gc2lkZS50b0xvd2VyQ2FzZSgpID09PSAnYmFjayc7XG4gICAgICB2YXIgaG91ciA9ICtob3VycztcbiAgICAgIHZhciBtaW51dGUgPSAxNTtcblxuICAgICAgaWYgKCFiYWNrKSB7XG4gICAgICAgIGhvdXIgLT0gMTtcbiAgICAgICAgbWludXRlID0gNDU7XG4gICAgICB9XG5cbiAgICAgIGhvdXIgPSBwcm9jZXNzTWVyaWRpYW4oaG91ciwgbWVyaWRpYW4pO1xuXG4gICAgICByZXR1cm4gdGhpcy5yZXNldFRpbWUoKSAmJiB0aGlzLnRpbWUoaG91ciwgbWludXRlLCAwLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgd2Vla2RheU9mOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXignICsgcmVSZWx0ZXh0bnVtYmVyICsgJ3wnICsgcmVSZWx0ZXh0dGV4dCArICcpJyArIHJlU3BhY2UgKyAnKCcgKyByZURheWZ1bGwgKyAnfCcgKyByZURheWFiYnIgKyAnKScgKyByZVNwYWNlICsgJ29mJywgJ2knKSxcbiAgICBuYW1lOiAnd2Vla2RheW9mJ1xuICAgIC8vIHRvZG9cbiAgfSxcblxuICBtc3NxbHRpbWU6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlSG91cjEyICsgJzonICsgcmVNaW51dGVseiArICc6JyArIHJlU2Vjb25kbHogKyAnWzouXShbMC05XSspJyArIHJlTWVyaWRpYW4sICdpJyksXG4gICAgbmFtZTogJ21zc3FsdGltZScsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhYywgbWVyaWRpYW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbWUocHJvY2Vzc01lcmlkaWFuKCtob3VyLCBtZXJpZGlhbiksICttaW51dGUsICtzZWNvbmQsICtmcmFjLnN1YnN0cigwLCAzKSk7XG4gICAgfVxuICB9LFxuXG4gIG9yYWNsZWRhdGU6IHtcbiAgICByZWdleDogL14oXFxkezJ9KS0oW0EtWl17M30pLShcXGR7Mn0pJC9pLFxuICAgIG5hbWU6ICdkLU0teScsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBkYXksIG1vbnRoVGV4dCwgeWVhcikge1xuICAgICAgdmFyIG1vbnRoID0ge1xuICAgICAgICBKQU46IDAsXG4gICAgICAgIEZFQjogMSxcbiAgICAgICAgTUFSOiAyLFxuICAgICAgICBBUFI6IDMsXG4gICAgICAgIE1BWTogNCxcbiAgICAgICAgSlVOOiA1LFxuICAgICAgICBKVUw6IDYsXG4gICAgICAgIEFVRzogNyxcbiAgICAgICAgU0VQOiA4LFxuICAgICAgICBPQ1Q6IDksXG4gICAgICAgIE5PVjogMTAsXG4gICAgICAgIERFQzogMTFcbiAgICAgIH1bbW9udGhUZXh0LnRvVXBwZXJDYXNlKCldO1xuICAgICAgcmV0dXJuIHRoaXMueW1kKDIwMDAgKyBwYXJzZUludCh5ZWFyLCAxMCksIG1vbnRoLCBwYXJzZUludChkYXksIDEwKSk7XG4gICAgfVxuICB9LFxuXG4gIHRpbWVMb25nMTI6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlSG91cjEyICsgJ1s6Ll0nICsgcmVNaW51dGUgKyAnWzouXScgKyByZVNlY29uZGx6ICsgcmVTcGFjZU9wdCArIHJlTWVyaWRpYW4sICdpJyksXG4gICAgbmFtZTogJ3RpbWVsb25nMTInLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1lcmlkaWFuKSB7XG4gICAgICByZXR1cm4gdGhpcy50aW1lKHByb2Nlc3NNZXJpZGlhbigraG91ciwgbWVyaWRpYW4pLCArbWludXRlLCArc2Vjb25kLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgdGltZVNob3J0MTI6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlSG91cjEyICsgJ1s6Ll0nICsgcmVNaW51dGVseiArIHJlU3BhY2VPcHQgKyByZU1lcmlkaWFuLCAnaScpLFxuICAgIG5hbWU6ICd0aW1lc2hvcnQxMicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBob3VyLCBtaW51dGUsIG1lcmlkaWFuKSB7XG4gICAgICByZXR1cm4gdGhpcy50aW1lKHByb2Nlc3NNZXJpZGlhbigraG91ciwgbWVyaWRpYW4pLCArbWludXRlLCAwLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgdGltZVRpbnkxMjoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVIb3VyMTIgKyByZVNwYWNlT3B0ICsgcmVNZXJpZGlhbiwgJ2knKSxcbiAgICBuYW1lOiAndGltZXRpbnkxMicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBob3VyLCBtZXJpZGlhbikge1xuICAgICAgcmV0dXJuIHRoaXMudGltZShwcm9jZXNzTWVyaWRpYW4oK2hvdXIsIG1lcmlkaWFuKSwgMCwgMCwgMCk7XG4gICAgfVxuICB9LFxuXG4gIHNvYXA6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlWWVhcjQgKyAnLScgKyByZU1vbnRobHogKyAnLScgKyByZURheWx6ICsgJ1QnICsgcmVIb3VyMjRseiArICc6JyArIHJlTWludXRlbHogKyAnOicgKyByZVNlY29uZGx6ICsgcmVGcmFjICsgcmVUekNvcnJlY3Rpb24gKyAnPycsICdpJyksXG4gICAgbmFtZTogJ3NvYXAnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWMsIHR6Q29ycmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKCt5ZWFyLCBtb250aCAtIDEsICtkYXkpICYmIHRoaXMudGltZSgraG91ciwgK21pbnV0ZSwgK3NlY29uZCwgK2ZyYWMuc3Vic3RyKDAsIDMpKSAmJiB0aGlzLnpvbmUocHJvY2Vzc1R6Q29ycmVjdGlvbih0ekNvcnJlY3Rpb24pKTtcbiAgICB9XG4gIH0sXG5cbiAgd2RkeDoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVZZWFyNCArICctJyArIHJlTW9udGggKyAnLScgKyByZURheSArICdUJyArIHJlSG91cjI0ICsgJzonICsgcmVNaW51dGUgKyAnOicgKyByZVNlY29uZCksXG4gICAgbmFtZTogJ3dkZHgnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCgreWVhciwgbW9udGggLSAxLCArZGF5KSAmJiB0aGlzLnRpbWUoK2hvdXIsICttaW51dGUsICtzZWNvbmQsIDApO1xuICAgIH1cbiAgfSxcblxuICBleGlmOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZVllYXI0ICsgJzonICsgcmVNb250aGx6ICsgJzonICsgcmVEYXlseiArICcgJyArIHJlSG91cjI0bHogKyAnOicgKyByZU1pbnV0ZWx6ICsgJzonICsgcmVTZWNvbmRseiwgJ2knKSxcbiAgICBuYW1lOiAnZXhpZicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKCt5ZWFyLCBtb250aCAtIDEsICtkYXkpICYmIHRoaXMudGltZSgraG91ciwgK21pbnV0ZSwgK3NlY29uZCwgMCk7XG4gICAgfVxuICB9LFxuXG4gIHhtbFJwYzoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVZZWFyNCArIHJlTW9udGhseiArIHJlRGF5bHogKyAnVCcgKyByZUhvdXIyNCArICc6JyArIHJlTWludXRlbHogKyAnOicgKyByZVNlY29uZGx6KSxcbiAgICBuYW1lOiAneG1scnBjJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQoK3llYXIsIG1vbnRoIC0gMSwgK2RheSkgJiYgdGhpcy50aW1lKCtob3VyLCArbWludXRlLCArc2Vjb25kLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgeG1sUnBjTm9Db2xvbjoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVZZWFyNCArIHJlTW9udGhseiArIHJlRGF5bHogKyAnW1R0XScgKyByZUhvdXIyNCArIHJlTWludXRlbHogKyByZVNlY29uZGx6KSxcbiAgICBuYW1lOiAneG1scnBjbm9jb2xvbicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCkge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKCt5ZWFyLCBtb250aCAtIDEsICtkYXkpICYmIHRoaXMudGltZSgraG91ciwgK21pbnV0ZSwgK3NlY29uZCwgMCk7XG4gICAgfVxuICB9LFxuXG4gIGNsZjoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVEYXkgKyAnLygnICsgcmVNb250aEFiYnIgKyAnKS8nICsgcmVZZWFyNCArICc6JyArIHJlSG91cjI0bHogKyAnOicgKyByZU1pbnV0ZWx6ICsgJzonICsgcmVTZWNvbmRseiArIHJlU3BhY2UgKyByZVR6Q29ycmVjdGlvbiwgJ2knKSxcbiAgICBuYW1lOiAnY2xmJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIGRheSwgbW9udGgsIHllYXIsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCB0ekNvcnJlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCgreWVhciwgbG9va3VwTW9udGgobW9udGgpLCArZGF5KSAmJiB0aGlzLnRpbWUoK2hvdXIsICttaW51dGUsICtzZWNvbmQsIDApICYmIHRoaXMuem9uZShwcm9jZXNzVHpDb3JyZWN0aW9uKHR6Q29ycmVjdGlvbikpO1xuICAgIH1cbiAgfSxcblxuICBpc284NjAxbG9uZzoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ150PycgKyByZUhvdXIyNCArICdbOi5dJyArIHJlTWludXRlICsgJ1s6Ll0nICsgcmVTZWNvbmQgKyByZUZyYWMsICdpJyksXG4gICAgbmFtZTogJ2lzbzg2MDFsb25nJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjKSB7XG4gICAgICByZXR1cm4gdGhpcy50aW1lKCtob3VyLCArbWludXRlLCArc2Vjb25kLCArZnJhYy5zdWJzdHIoMCwgMykpO1xuICAgIH1cbiAgfSxcblxuICBkYXRlVGV4dHVhbDoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVNb250aFRleHQgKyAnWyAuXFxcXHQtXSonICsgcmVEYXkgKyAnWywuc3RuZHJoXFxcXHQgXSsnICsgcmVZZWFyLCAnaScpLFxuICAgIG5hbWU6ICdkYXRldGV4dHVhbCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBtb250aCwgZGF5LCB5ZWFyKSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQocHJvY2Vzc1llYXIoeWVhciksIGxvb2t1cE1vbnRoKG1vbnRoKSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIHBvaW50ZWREYXRlNDoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVEYXkgKyAnWy5cXFxcdC1dJyArIHJlTW9udGggKyAnWy4tXScgKyByZVllYXI0KSxcbiAgICBuYW1lOiAncG9pbnRlZGRhdGU0JyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIGRheSwgbW9udGgsIHllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCgreWVhciwgbW9udGggLSAxLCArZGF5KTtcbiAgICB9XG4gIH0sXG5cbiAgcG9pbnRlZERhdGUyOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZURheSArICdbLlxcXFx0XScgKyByZU1vbnRoICsgJ1xcXFwuJyArIHJlWWVhcjIpLFxuICAgIG5hbWU6ICdwb2ludGVkZGF0ZTInLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgZGF5LCBtb250aCwgeWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKHByb2Nlc3NZZWFyKHllYXIpLCBtb250aCAtIDEsICtkYXkpO1xuICAgIH1cbiAgfSxcblxuICB0aW1lTG9uZzI0OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXnQ/JyArIHJlSG91cjI0ICsgJ1s6Ll0nICsgcmVNaW51dGUgKyAnWzouXScgKyByZVNlY29uZCksXG4gICAgbmFtZTogJ3RpbWVsb25nMjQnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbWUoK2hvdXIsICttaW51dGUsICtzZWNvbmQsIDApO1xuICAgIH1cbiAgfSxcblxuICBkYXRlTm9Db2xvbjoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVZZWFyNCArIHJlTW9udGhseiArIHJlRGF5bHopLFxuICAgIG5hbWU6ICdkYXRlbm9jb2xvbicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQoK3llYXIsIG1vbnRoIC0gMSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIHBneWRvdGQ6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlWWVhcjQgKyAnXFxcXC4/JyArIHJlRGF5T2ZZZWFyKSxcbiAgICBuYW1lOiAncGd5ZG90ZCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBkYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCgreWVhciwgMCwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIHRpbWVTaG9ydDI0OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXnQ/JyArIHJlSG91cjI0ICsgJ1s6Ll0nICsgcmVNaW51dGUsICdpJyksXG4gICAgbmFtZTogJ3RpbWVzaG9ydDI0JyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIGhvdXIsIG1pbnV0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGltZSgraG91ciwgK21pbnV0ZSwgMCwgMCk7XG4gICAgfVxuICB9LFxuXG4gIGlzbzg2MDFub0NvbG9uOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXnQ/JyArIHJlSG91cjI0bHogKyByZU1pbnV0ZWx6ICsgcmVTZWNvbmRseiwgJ2knKSxcbiAgICBuYW1lOiAnaXNvODYwMW5vY29sb24nLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbWUoK2hvdXIsICttaW51dGUsICtzZWNvbmQsIDApO1xuICAgIH1cbiAgfSxcblxuICBpc284NjAxZGF0ZVNsYXNoOiB7XG4gICAgLy8gZXZlbnRob3VnaCB0aGUgdHJhaWxpbmcgc2xhc2ggaXMgb3B0aW9uYWwgaW4gUEhQXG4gICAgLy8gaGVyZSBpdCdzIG1hbmRhdG9yeSBhbmQgaW5wdXRzIHdpdGhvdXQgdGhlIHNsYXNoXG4gICAgLy8gYXJlIGhhbmRsZWQgYnkgZGF0ZXNsYXNoXG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZVllYXI0ICsgJy8nICsgcmVNb250aGx6ICsgJy8nICsgcmVEYXlseiArICcvJyksXG4gICAgbmFtZTogJ2lzbzg2MDFkYXRlc2xhc2gnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgeWVhciwgbW9udGgsIGRheSkge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKCt5ZWFyLCBtb250aCAtIDEsICtkYXkpO1xuICAgIH1cbiAgfSxcblxuICBkYXRlU2xhc2g6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlWWVhcjQgKyAnLycgKyByZU1vbnRoICsgJy8nICsgcmVEYXkpLFxuICAgIG5hbWU6ICdkYXRlc2xhc2gnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgeWVhciwgbW9udGgsIGRheSkge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKCt5ZWFyLCBtb250aCAtIDEsICtkYXkpO1xuICAgIH1cbiAgfSxcblxuICBhbWVyaWNhbjoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVNb250aCArICcvJyArIHJlRGF5ICsgJy8nICsgcmVZZWFyKSxcbiAgICBuYW1lOiAnYW1lcmljYW4nLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgbW9udGgsIGRheSwgeWVhcikge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKHByb2Nlc3NZZWFyKHllYXIpLCBtb250aCAtIDEsICtkYXkpO1xuICAgIH1cbiAgfSxcblxuICBhbWVyaWNhblNob3J0OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZU1vbnRoICsgJy8nICsgcmVEYXkpLFxuICAgIG5hbWU6ICdhbWVyaWNhbnNob3J0JyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIG1vbnRoLCBkYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCh0aGlzLnksIG1vbnRoIC0gMSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIGdudURhdGVTaG9ydE9ySXNvODYwMWRhdGUyOiB7XG4gICAgLy8gaXNvODYwMWRhdGUyIGlzIGNvbXBsZXRlIHN1YnNldCBvZiBnbnVkYXRlc2hvcnRcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlWWVhciArICctJyArIHJlTW9udGggKyAnLScgKyByZURheSksXG4gICAgbmFtZTogJ2dudWRhdGVzaG9ydCB8IGlzbzg2MDFkYXRlMicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQocHJvY2Vzc1llYXIoeWVhciksIG1vbnRoIC0gMSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIGlzbzg2MDFkYXRlNDoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVZZWFyNHdpdGhTaWduICsgJy0nICsgcmVNb250aGx6ICsgJy0nICsgcmVEYXlseiksXG4gICAgbmFtZTogJ2lzbzg2MDFkYXRlNCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQoK3llYXIsIG1vbnRoIC0gMSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIGdudU5vQ29sb246IHtcbiAgICByZWdleDogUmVnRXhwKCdedD8nICsgcmVIb3VyMjRseiArIHJlTWludXRlbHosICdpJyksXG4gICAgbmFtZTogJ2dudW5vY29sb24nLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgaG91ciwgbWludXRlKSB7XG4gICAgICAvLyB0aGlzIHJ1bGUgaXMgYSBzcGVjaWFsIGNhc2VcbiAgICAgIC8vIGlmIHRpbWUgd2FzIGFscmVhZHkgc2V0IG9uY2UgYnkgYW55IHByZWNlZGluZyBydWxlLCBpdCBzZXRzIHRoZSBjYXB0dXJlZCB2YWx1ZSBhcyB5ZWFyXG4gICAgICBzd2l0Y2ggKHRoaXMudGltZXMpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiB0aGlzLnRpbWUoK2hvdXIsICttaW51dGUsIDAsIHRoaXMuZik7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnkgPSBob3VyICogMTAwICsgK21pbnV0ZTtcbiAgICAgICAgICB0aGlzLnRpbWVzKys7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGdudURhdGVTaG9ydGVyOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZVllYXI0ICsgJy0nICsgcmVNb250aCksXG4gICAgbmFtZTogJ2dudWRhdGVzaG9ydGVyJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIHllYXIsIG1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQoK3llYXIsIG1vbnRoIC0gMSwgMSk7XG4gICAgfVxuICB9LFxuXG4gIHBnVGV4dFJldmVyc2U6IHtcbiAgICAvLyBub3RlOiBhbGxvd2VkIHllYXJzIGFyZSBmcm9tIDMyLTk5OTlcbiAgICAvLyB5ZWFycyBiZWxvdyAzMiBzaG91bGQgYmUgdHJlYXRlZCBhcyBkYXlzIGluIGRhdGVmdWxsXG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyAnKFxcXFxkezMsNH18WzQtOV1cXFxcZHwzWzItOV0pLSgnICsgcmVNb250aEFiYnIgKyAnKS0nICsgcmVEYXlseiwgJ2knKSxcbiAgICBuYW1lOiAncGd0ZXh0cmV2ZXJzZScsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQocHJvY2Vzc1llYXIoeWVhciksIGxvb2t1cE1vbnRoKG1vbnRoKSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGVGdWxsOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZURheSArICdbIFxcXFx0Li1dKicgKyByZU1vbnRoVGV4dCArICdbIFxcXFx0Li1dKicgKyByZVllYXIsICdpJyksXG4gICAgbmFtZTogJ2RhdGVmdWxsJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIGRheSwgbW9udGgsIHllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZChwcm9jZXNzWWVhcih5ZWFyKSwgbG9va3VwTW9udGgobW9udGgpLCArZGF5KTtcbiAgICB9XG4gIH0sXG5cbiAgZGF0ZU5vRGF5OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZU1vbnRoVGV4dCArICdbIC5cXFxcdC1dKicgKyByZVllYXI0LCAnaScpLFxuICAgIG5hbWU6ICdkYXRlbm9kYXknLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgbW9udGgsIHllYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCgreWVhciwgbG9va3VwTW9udGgobW9udGgpLCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgZGF0ZU5vRGF5UmV2OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZVllYXI0ICsgJ1sgLlxcXFx0LV0qJyArIHJlTW9udGhUZXh0LCAnaScpLFxuICAgIG5hbWU6ICdkYXRlbm9kYXlyZXYnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgeWVhciwgbW9udGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCgreWVhciwgbG9va3VwTW9udGgobW9udGgpLCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgcGdUZXh0U2hvcnQ6IHtcbiAgICByZWdleDogUmVnRXhwKCdeKCcgKyByZU1vbnRoQWJiciArICcpLScgKyByZURheWx6ICsgJy0nICsgcmVZZWFyLCAnaScpLFxuICAgIG5hbWU6ICdwZ3RleHRzaG9ydCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBtb250aCwgZGF5LCB5ZWFyKSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQocHJvY2Vzc1llYXIoeWVhciksIGxvb2t1cE1vbnRoKG1vbnRoKSwgK2RheSk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGVOb1llYXI6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlRGF0ZU5vWWVhciwgJ2knKSxcbiAgICBuYW1lOiAnZGF0ZW5veWVhcicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBtb250aCwgZGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQodGhpcy55LCBsb29rdXBNb250aChtb250aCksICtkYXkpO1xuICAgIH1cbiAgfSxcblxuICBkYXRlTm9ZZWFyUmV2OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZURheSArICdbIC5cXFxcdC1dKicgKyByZU1vbnRoVGV4dCwgJ2knKSxcbiAgICBuYW1lOiAnZGF0ZW5veWVhcnJldicsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBkYXksIG1vbnRoKSB7XG4gICAgICByZXR1cm4gdGhpcy55bWQodGhpcy55LCBsb29rdXBNb250aChtb250aCksICtkYXkpO1xuICAgIH1cbiAgfSxcblxuICBpc29XZWVrRGF5OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZVllYXI0ICsgJy0/VycgKyByZVdlZWtPZlllYXIgKyAnKD86LT8oWzAtN10pKT8nKSxcbiAgICBuYW1lOiAnaXNvd2Vla2RheSB8IGlzb3dlZWsnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgeWVhciwgd2VlaywgZGF5KSB7XG4gICAgICBkYXkgPSBkYXkgPyArZGF5IDogMTtcblxuICAgICAgaWYgKCF0aGlzLnltZCgreWVhciwgMCwgMSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgZGF5IG9mIHdlZWsgZm9yIEphbiAxc3RcbiAgICAgIHZhciBkYXlPZldlZWsgPSBuZXcgRGF0ZSh0aGlzLnksIHRoaXMubSwgdGhpcy5kKS5nZXREYXkoKTtcblxuICAgICAgLy8gYW5kIHVzZSB0aGUgZGF5IHRvIGZpZ3VyZSBvdXQgdGhlIG9mZnNldCBmb3IgZGF5IDEgb2Ygd2VlayAxXG4gICAgICBkYXlPZldlZWsgPSAwIC0gKGRheU9mV2VlayA+IDQgPyBkYXlPZldlZWsgLSA3IDogZGF5T2ZXZWVrKTtcblxuICAgICAgdGhpcy5yZCArPSBkYXlPZldlZWsgKyAod2VlayAtIDEpICogNyArIGRheTtcbiAgICB9XG4gIH0sXG5cbiAgcmVsYXRpdmVUZXh0OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXignICsgcmVSZWx0ZXh0bnVtYmVyICsgJ3wnICsgcmVSZWx0ZXh0dGV4dCArICcpJyArIHJlU3BhY2UgKyAnKCcgKyByZVJlbHRleHR1bml0ICsgJyknLCAnaScpLFxuICAgIG5hbWU6ICdyZWxhdGl2ZXRleHQnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgcmVsVmFsdWUsIHJlbFVuaXQpIHtcbiAgICAgIC8vIHRvZG86IGltcGxlbWVudCBoYW5kbGluZyBvZiAndGhpcyB0aW1lLXVuaXQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHZhciBfbG9va3VwUmVsYXRpdmUgPSBsb29rdXBSZWxhdGl2ZShyZWxWYWx1ZSksXG4gICAgICAgICAgYW1vdW50ID0gX2xvb2t1cFJlbGF0aXZlLmFtb3VudCxcbiAgICAgICAgICBiZWhhdmlvciA9IF9sb29rdXBSZWxhdGl2ZS5iZWhhdmlvcjtcblxuICAgICAgc3dpdGNoIChyZWxVbml0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnc2VjJzpcbiAgICAgICAgY2FzZSAnc2Vjcyc6XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgICAgIHRoaXMucnMgKz0gYW1vdW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICBjYXNlICdtaW5zJzpcbiAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgY2FzZSAnbWludXRlcyc6XG4gICAgICAgICAgdGhpcy5yaSArPSBhbW91bnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICBjYXNlICdob3Vycyc6XG4gICAgICAgICAgdGhpcy5yaCArPSBhbW91bnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICAgIHRoaXMucmQgKz0gYW1vdW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb3J0bmlnaHQnOlxuICAgICAgICBjYXNlICdmb3J0bmlnaHRzJzpcbiAgICAgICAgY2FzZSAnZm9ydGhuaWdodCc6XG4gICAgICAgIGNhc2UgJ2ZvcnRobmlnaHRzJzpcbiAgICAgICAgICB0aGlzLnJkICs9IGFtb3VudCAqIDE0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgY2FzZSAnd2Vla3MnOlxuICAgICAgICAgIHRoaXMucmQgKz0gYW1vdW50ICogNztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICBjYXNlICdtb250aHMnOlxuICAgICAgICAgIHRoaXMucm0gKz0gYW1vdW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgY2FzZSAneWVhcnMnOlxuICAgICAgICAgIHRoaXMucnkgKz0gYW1vdW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb24nOlxuICAgICAgICBjYXNlICdtb25kYXknOlxuICAgICAgICBjYXNlICd0dWUnOlxuICAgICAgICBjYXNlICd0dWVzZGF5JzpcbiAgICAgICAgY2FzZSAnd2VkJzpcbiAgICAgICAgY2FzZSAnd2VkbmVzZGF5JzpcbiAgICAgICAgY2FzZSAndGh1JzpcbiAgICAgICAgY2FzZSAndGh1cnNkYXknOlxuICAgICAgICBjYXNlICdmcmknOlxuICAgICAgICBjYXNlICdmcmlkYXknOlxuICAgICAgICBjYXNlICdzYXQnOlxuICAgICAgICBjYXNlICdzYXR1cmRheSc6XG4gICAgICAgIGNhc2UgJ3N1bic6XG4gICAgICAgIGNhc2UgJ3N1bmRheSc6XG4gICAgICAgICAgdGhpcy5yZXNldFRpbWUoKTtcbiAgICAgICAgICB0aGlzLndlZWtkYXkgPSBsb29rdXBXZWVrZGF5KHJlbFVuaXQsIDcpO1xuICAgICAgICAgIHRoaXMud2Vla2RheUJlaGF2aW9yID0gMTtcbiAgICAgICAgICB0aGlzLnJkICs9IChhbW91bnQgPiAwID8gYW1vdW50IC0gMSA6IGFtb3VudCkgKiA3O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrZGF5JzpcbiAgICAgICAgY2FzZSAnd2Vla2RheXMnOlxuICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVsYXRpdmU6IHtcbiAgICByZWdleDogUmVnRXhwKCdeKFsrLV0qKVsgXFxcXHRdKihcXFxcZCspJyArIHJlU3BhY2VPcHQgKyAnKCcgKyByZVJlbHRleHR1bml0ICsgJ3x3ZWVrKScsICdpJyksXG4gICAgbmFtZTogJ3JlbGF0aXZlJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIHNpZ25zLCByZWxWYWx1ZSwgcmVsVW5pdCkge1xuICAgICAgdmFyIG1pbnVzZXMgPSBzaWducy5yZXBsYWNlKC9bXi1dL2csICcnKS5sZW5ndGg7XG5cbiAgICAgIHZhciBhbW91bnQgPSArcmVsVmFsdWUgKiBNYXRoLnBvdygtMSwgbWludXNlcyk7XG5cbiAgICAgIHN3aXRjaCAocmVsVW5pdC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ3NlYyc6XG4gICAgICAgIGNhc2UgJ3NlY3MnOlxuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgICAgICB0aGlzLnJzICs9IGFtb3VudDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgY2FzZSAnbWlucyc6XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgICAgIHRoaXMucmkgKz0gYW1vdW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgY2FzZSAnaG91cnMnOlxuICAgICAgICAgIHRoaXMucmggKz0gYW1vdW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkYXlzJzpcbiAgICAgICAgICB0aGlzLnJkICs9IGFtb3VudDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZm9ydG5pZ2h0JzpcbiAgICAgICAgY2FzZSAnZm9ydG5pZ2h0cyc6XG4gICAgICAgIGNhc2UgJ2ZvcnRobmlnaHQnOlxuICAgICAgICBjYXNlICdmb3J0aG5pZ2h0cyc6XG4gICAgICAgICAgdGhpcy5yZCArPSBhbW91bnQgKiAxNDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIGNhc2UgJ3dlZWtzJzpcbiAgICAgICAgICB0aGlzLnJkICs9IGFtb3VudCAqIDc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgY2FzZSAnbW9udGhzJzpcbiAgICAgICAgICB0aGlzLnJtICs9IGFtb3VudDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgICAgICB0aGlzLnJ5ICs9IGFtb3VudDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9uJzpcbiAgICAgICAgY2FzZSAnbW9uZGF5JzpcbiAgICAgICAgY2FzZSAndHVlJzpcbiAgICAgICAgY2FzZSAndHVlc2RheSc6XG4gICAgICAgIGNhc2UgJ3dlZCc6XG4gICAgICAgIGNhc2UgJ3dlZG5lc2RheSc6XG4gICAgICAgIGNhc2UgJ3RodSc6XG4gICAgICAgIGNhc2UgJ3RodXJzZGF5JzpcbiAgICAgICAgY2FzZSAnZnJpJzpcbiAgICAgICAgY2FzZSAnZnJpZGF5JzpcbiAgICAgICAgY2FzZSAnc2F0JzpcbiAgICAgICAgY2FzZSAnc2F0dXJkYXknOlxuICAgICAgICBjYXNlICdzdW4nOlxuICAgICAgICBjYXNlICdzdW5kYXknOlxuICAgICAgICAgIHRoaXMucmVzZXRUaW1lKCk7XG4gICAgICAgICAgdGhpcy53ZWVrZGF5ID0gbG9va3VwV2Vla2RheShyZWxVbml0LCA3KTtcbiAgICAgICAgICB0aGlzLndlZWtkYXlCZWhhdmlvciA9IDE7XG4gICAgICAgICAgdGhpcy5yZCArPSAoYW1vdW50ID4gMCA/IGFtb3VudCAtIDEgOiBhbW91bnQpICogNztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vla2RheSc6XG4gICAgICAgIGNhc2UgJ3dlZWtkYXlzJzpcbiAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRheVRleHQ6IHtcbiAgICByZWdleDogUmVnRXhwKCdeKCcgKyByZURheXRleHQgKyAnKScsICdpJyksXG4gICAgbmFtZTogJ2RheXRleHQnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgZGF5VGV4dCkge1xuICAgICAgdGhpcy5yZXNldFRpbWUoKTtcbiAgICAgIHRoaXMud2Vla2RheSA9IGxvb2t1cFdlZWtkYXkoZGF5VGV4dCwgMCk7XG5cbiAgICAgIGlmICh0aGlzLndlZWtkYXlCZWhhdmlvciAhPT0gMikge1xuICAgICAgICB0aGlzLndlZWtkYXlCZWhhdmlvciA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbGF0aXZlVGV4dFdlZWs6IHtcbiAgICByZWdleDogUmVnRXhwKCdeKCcgKyByZVJlbHRleHR0ZXh0ICsgJyknICsgcmVTcGFjZSArICd3ZWVrJywgJ2knKSxcbiAgICBuYW1lOiAncmVsYXRpdmV0ZXh0d2VlaycsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCByZWxUZXh0KSB7XG4gICAgICB0aGlzLndlZWtkYXlCZWhhdmlvciA9IDI7XG5cbiAgICAgIHN3aXRjaCAocmVsVGV4dC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ3RoaXMnOlxuICAgICAgICAgIHRoaXMucmQgKz0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgdGhpcy5yZCArPSA3O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsYXN0JzpcbiAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgIHRoaXMucmQgLT0gNztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHRoaXMud2Vla2RheSkpIHtcbiAgICAgICAgdGhpcy53ZWVrZGF5ID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgbW9udGhGdWxsT3JNb250aEFiYnI6IHtcbiAgICByZWdleDogUmVnRXhwKCdeKCcgKyByZU1vbnRoRnVsbCArICd8JyArIHJlTW9udGhBYmJyICsgJyknLCAnaScpLFxuICAgIG5hbWU6ICdtb250aGZ1bGwgfCBtb250aGFiYnInLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgbW9udGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCh0aGlzLnksIGxvb2t1cE1vbnRoKG1vbnRoKSwgdGhpcy5kKTtcbiAgICB9XG4gIH0sXG5cbiAgdHpDb3JyZWN0aW9uOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZVR6Q29ycmVjdGlvbiwgJ2knKSxcbiAgICBuYW1lOiAndHpjb3JyZWN0aW9uJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sodHpDb3JyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lKHByb2Nlc3NUekNvcnJlY3Rpb24odHpDb3JyZWN0aW9uKSk7XG4gICAgfVxuICB9LFxuXG4gIHR6QWJicjoge1xuICAgIHJlZ2V4OiBSZWdFeHAoJ14nICsgcmVUekFiYnIpLFxuICAgIG5hbWU6ICd0emFiYnInLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgYWJicikge1xuICAgICAgdmFyIG9mZnNldCA9IHR6QWJick9mZnNldHNbYWJici50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy56b25lKG9mZnNldCk7XG4gICAgfVxuICB9LFxuXG4gIGFnbzoge1xuICAgIHJlZ2V4OiAvXmFnby9pLFxuICAgIG5hbWU6ICdhZ28nLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIHRoaXMucnkgPSAtdGhpcy5yeTtcbiAgICAgIHRoaXMucm0gPSAtdGhpcy5ybTtcbiAgICAgIHRoaXMucmQgPSAtdGhpcy5yZDtcbiAgICAgIHRoaXMucmggPSAtdGhpcy5yaDtcbiAgICAgIHRoaXMucmkgPSAtdGhpcy5yaTtcbiAgICAgIHRoaXMucnMgPSAtdGhpcy5ycztcbiAgICAgIHRoaXMucmYgPSAtdGhpcy5yZjtcbiAgICB9XG4gIH0sXG5cbiAgeWVhcjQ6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlWWVhcjQpLFxuICAgIG5hbWU6ICd5ZWFyNCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCB5ZWFyKSB7XG4gICAgICB0aGlzLnkgPSAreWVhcjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcblxuICB3aGl0ZXNwYWNlOiB7XG4gICAgcmVnZXg6IC9eWyAuLFxcdF0rLyxcbiAgICBuYW1lOiAnd2hpdGVzcGFjZSdcbiAgICAvLyBkbyBub3RoaW5nXG4gIH0sXG5cbiAgZGF0ZVNob3J0V2l0aFRpbWVMb25nOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZURhdGVOb1llYXIgKyAndD8nICsgcmVIb3VyMjQgKyAnWzouXScgKyByZU1pbnV0ZSArICdbOi5dJyArIHJlU2Vjb25kLCAnaScpLFxuICAgIG5hbWU6ICdkYXRlc2hvcnR3aXRodGltZWxvbmcnLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjayhtYXRjaCwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCh0aGlzLnksIGxvb2t1cE1vbnRoKG1vbnRoKSwgK2RheSkgJiYgdGhpcy50aW1lKCtob3VyLCArbWludXRlLCArc2Vjb25kLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgZGF0ZVNob3J0V2l0aFRpbWVMb25nMTI6IHtcbiAgICByZWdleDogUmVnRXhwKCdeJyArIHJlRGF0ZU5vWWVhciArIHJlSG91cjEyICsgJ1s6Ll0nICsgcmVNaW51dGUgKyAnWzouXScgKyByZVNlY29uZGx6ICsgcmVTcGFjZU9wdCArIHJlTWVyaWRpYW4sICdpJyksXG4gICAgbmFtZTogJ2RhdGVzaG9ydHdpdGh0aW1lbG9uZzEyJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtZXJpZGlhbikge1xuICAgICAgcmV0dXJuIHRoaXMueW1kKHRoaXMueSwgbG9va3VwTW9udGgobW9udGgpLCArZGF5KSAmJiB0aGlzLnRpbWUocHJvY2Vzc01lcmlkaWFuKCtob3VyLCBtZXJpZGlhbiksICttaW51dGUsICtzZWNvbmQsIDApO1xuICAgIH1cbiAgfSxcblxuICBkYXRlU2hvcnRXaXRoVGltZVNob3J0OiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZURhdGVOb1llYXIgKyAndD8nICsgcmVIb3VyMjQgKyAnWzouXScgKyByZU1pbnV0ZSwgJ2knKSxcbiAgICBuYW1lOiAnZGF0ZXNob3J0d2l0aHRpbWVzaG9ydCcsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKG1hdGNoLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCh0aGlzLnksIGxvb2t1cE1vbnRoKG1vbnRoKSwgK2RheSkgJiYgdGhpcy50aW1lKCtob3VyLCArbWludXRlLCAwLCAwKTtcbiAgICB9XG4gIH0sXG5cbiAgZGF0ZVNob3J0V2l0aFRpbWVTaG9ydDEyOiB7XG4gICAgcmVnZXg6IFJlZ0V4cCgnXicgKyByZURhdGVOb1llYXIgKyByZUhvdXIxMiArICdbOi5dJyArIHJlTWludXRlbHogKyByZVNwYWNlT3B0ICsgcmVNZXJpZGlhbiwgJ2knKSxcbiAgICBuYW1lOiAnZGF0ZXNob3J0d2l0aHRpbWVzaG9ydDEyJyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2sobWF0Y2gsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgbWVyaWRpYW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnltZCh0aGlzLnksIGxvb2t1cE1vbnRoKG1vbnRoKSwgK2RheSkgJiYgdGhpcy50aW1lKHByb2Nlc3NNZXJpZGlhbigraG91ciwgbWVyaWRpYW4pLCArbWludXRlLCAwLCAwKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZXN1bHRQcm90byA9IHtcbiAgLy8gZGF0ZVxuICB5OiBOYU4sXG4gIG06IE5hTixcbiAgZDogTmFOLFxuICAvLyB0aW1lXG4gIGg6IE5hTixcbiAgaTogTmFOLFxuICBzOiBOYU4sXG4gIGY6IE5hTixcblxuICAvLyByZWxhdGl2ZSBzaGlmdHNcbiAgcnk6IDAsXG4gIHJtOiAwLFxuICByZDogMCxcbiAgcmg6IDAsXG4gIHJpOiAwLFxuICByczogMCxcbiAgcmY6IDAsXG5cbiAgLy8gd2Vla2RheSByZWxhdGVkIHNoaWZ0c1xuICB3ZWVrZGF5OiBOYU4sXG4gIHdlZWtkYXlCZWhhdmlvcjogMCxcblxuICAvLyBmaXJzdCBvciBsYXN0IGRheSBvZiBtb250aFxuICAvLyAwIG5vbmUsIDEgZmlyc3QsIC0xIGxhc3RcbiAgZmlyc3RPckxhc3REYXlPZk1vbnRoOiAwLFxuXG4gIC8vIHRpbWV6b25lIGNvcnJlY3Rpb24gaW4gbWludXRlc1xuICB6OiBOYU4sXG5cbiAgLy8gY291bnRlcnNcbiAgZGF0ZXM6IDAsXG4gIHRpbWVzOiAwLFxuICB6b25lczogMCxcblxuICAvLyBoZWxwZXIgZnVuY3Rpb25zXG4gIHltZDogZnVuY3Rpb24geW1kKHksIG0sIGQpIHtcbiAgICBpZiAodGhpcy5kYXRlcyA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGVzKys7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLm0gPSBtO1xuICAgIHRoaXMuZCA9IGQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHRpbWU6IGZ1bmN0aW9uIHRpbWUoaCwgaSwgcywgZikge1xuICAgIGlmICh0aGlzLnRpbWVzID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMudGltZXMrKztcbiAgICB0aGlzLmggPSBoO1xuICAgIHRoaXMuaSA9IGk7XG4gICAgdGhpcy5zID0gcztcbiAgICB0aGlzLmYgPSBmO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHJlc2V0VGltZTogZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHRoaXMuaCA9IDA7XG4gICAgdGhpcy5pID0gMDtcbiAgICB0aGlzLnMgPSAwO1xuICAgIHRoaXMuZiA9IDA7XG4gICAgdGhpcy50aW1lcyA9IDA7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgem9uZTogZnVuY3Rpb24gem9uZShtaW51dGVzKSB7XG4gICAgaWYgKHRoaXMuem9uZXMgPD0gMSkge1xuICAgICAgdGhpcy56b25lcysrO1xuICAgICAgdGhpcy56ID0gbWludXRlcztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgdG9EYXRlOiBmdW5jdGlvbiB0b0RhdGUocmVsYXRpdmVUbykge1xuICAgIGlmICh0aGlzLmRhdGVzICYmICF0aGlzLnRpbWVzKSB7XG4gICAgICB0aGlzLmggPSB0aGlzLmkgPSB0aGlzLnMgPSB0aGlzLmYgPSAwO1xuICAgIH1cblxuICAgIC8vIGZpbGwgaG9sZXNcbiAgICBpZiAoaXNOYU4odGhpcy55KSkge1xuICAgICAgdGhpcy55ID0gcmVsYXRpdmVUby5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIGlmIChpc05hTih0aGlzLm0pKSB7XG4gICAgICB0aGlzLm0gPSByZWxhdGl2ZVRvLmdldE1vbnRoKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKHRoaXMuZCkpIHtcbiAgICAgIHRoaXMuZCA9IHJlbGF0aXZlVG8uZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChpc05hTih0aGlzLmgpKSB7XG4gICAgICB0aGlzLmggPSByZWxhdGl2ZVRvLmdldEhvdXJzKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKHRoaXMuaSkpIHtcbiAgICAgIHRoaXMuaSA9IHJlbGF0aXZlVG8uZ2V0TWludXRlcygpO1xuICAgIH1cblxuICAgIGlmIChpc05hTih0aGlzLnMpKSB7XG4gICAgICB0aGlzLnMgPSByZWxhdGl2ZVRvLmdldFNlY29uZHMoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOYU4odGhpcy5mKSkge1xuICAgICAgdGhpcy5mID0gcmVsYXRpdmVUby5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICB9XG5cbiAgICAvLyBhZGp1c3Qgc3BlY2lhbCBlYXJseVxuICAgIHN3aXRjaCAodGhpcy5maXJzdE9yTGFzdERheU9mTW9udGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5kID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICB0aGlzLmQgPSAwO1xuICAgICAgICB0aGlzLm0gKz0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFpc05hTih0aGlzLndlZWtkYXkpKSB7XG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHJlbGF0aXZlVG8uZ2V0VGltZSgpKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIodGhpcy55LCB0aGlzLm0sIHRoaXMuZCk7XG4gICAgICBkYXRlLnNldEhvdXJzKHRoaXMuaCwgdGhpcy5pLCB0aGlzLnMsIHRoaXMuZik7XG5cbiAgICAgIHZhciBkb3cgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICBpZiAodGhpcy53ZWVrZGF5QmVoYXZpb3IgPT09IDIpIHtcbiAgICAgICAgLy8gVG8gbWFrZSBcInRoaXMgd2Vla1wiIHdvcmssIHdoZXJlIHRoZSBjdXJyZW50IGRheSBvZiB3ZWVrIGlzIGEgXCJzdW5kYXlcIlxuICAgICAgICBpZiAoZG93ID09PSAwICYmIHRoaXMud2Vla2RheSAhPT0gMCkge1xuICAgICAgICAgIHRoaXMud2Vla2RheSA9IC02O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gbWFrZSBcInN1bmRheSB0aGlzIHdlZWtcIiB3b3JrLCB3aGVyZSB0aGUgY3VycmVudCBkYXkgb2Ygd2VlayBpcyBub3QgYSBcInN1bmRheVwiXG4gICAgICAgIGlmICh0aGlzLndlZWtkYXkgPT09IDAgJiYgZG93ICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy53ZWVrZGF5ID0gNztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZCAtPSBkb3c7XG4gICAgICAgIHRoaXMuZCArPSB0aGlzLndlZWtkYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGlmZiA9IHRoaXMud2Vla2RheSAtIGRvdztcblxuICAgICAgICAvLyBzb21lIFBIUCBtYWdpY1xuICAgICAgICBpZiAodGhpcy5yZCA8IDAgJiYgZGlmZiA8IDAgfHwgdGhpcy5yZCA+PSAwICYmIGRpZmYgPD0gLXRoaXMud2Vla2RheUJlaGF2aW9yKSB7XG4gICAgICAgICAgZGlmZiArPSA3O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMud2Vla2RheSA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5kICs9IGRpZmY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kIC09IDcgLSAoTWF0aC5hYnModGhpcy53ZWVrZGF5KSAtIGRvdyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndlZWtkYXkgPSBOYU47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRqdXN0IHJlbGF0aXZlXG4gICAgdGhpcy55ICs9IHRoaXMucnk7XG4gICAgdGhpcy5tICs9IHRoaXMucm07XG4gICAgdGhpcy5kICs9IHRoaXMucmQ7XG5cbiAgICB0aGlzLmggKz0gdGhpcy5yaDtcbiAgICB0aGlzLmkgKz0gdGhpcy5yaTtcbiAgICB0aGlzLnMgKz0gdGhpcy5ycztcbiAgICB0aGlzLmYgKz0gdGhpcy5yZjtcblxuICAgIHRoaXMucnkgPSB0aGlzLnJtID0gdGhpcy5yZCA9IDA7XG4gICAgdGhpcy5yaCA9IHRoaXMucmkgPSB0aGlzLnJzID0gdGhpcy5yZiA9IDA7XG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUocmVsYXRpdmVUby5nZXRUaW1lKCkpO1xuICAgIC8vIHNpbmNlIERhdGUgY29uc3RydWN0b3IgdHJlYXRzIHllYXJzIDw9IDk5IGFzIDE5MDArXG4gICAgLy8gaXQgY2FuJ3QgYmUgdXNlZCwgdGh1cyB0aGlzIHdlaXJkIHdheVxuICAgIHJlc3VsdC5zZXRGdWxsWWVhcih0aGlzLnksIHRoaXMubSwgdGhpcy5kKTtcbiAgICByZXN1bHQuc2V0SG91cnModGhpcy5oLCB0aGlzLmksIHRoaXMucywgdGhpcy5mKTtcblxuICAgIC8vIG5vdGU6IHRoaXMgaXMgZG9uZSB0d2ljZSBpbiBQSFBcbiAgICAvLyBlYXJseSB3aGVuIHByb2Nlc3Npbmcgc3BlY2lhbCByZWxhdGl2ZXNcbiAgICAvLyBhbmQgbGF0ZVxuICAgIC8vIHRvZG86IGNoZWNrIGlmIHRoZSBsb2dpYyBjYW4gYmUgcmVkdWNlZFxuICAgIC8vIHRvIGp1c3Qgb25lIHRpbWUgYWN0aW9uXG4gICAgc3dpdGNoICh0aGlzLmZpcnN0T3JMYXN0RGF5T2ZNb250aCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXN1bHQuc2V0RGF0ZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICByZXN1bHQuc2V0TW9udGgocmVzdWx0LmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gYWRqdXN0IHRpbWV6b25lXG4gICAgaWYgKCFpc05hTih0aGlzLnopICYmIHJlc3VsdC5nZXRUaW1lem9uZU9mZnNldCgpICE9PSB0aGlzLnopIHtcbiAgICAgIHJlc3VsdC5zZXRVVENGdWxsWWVhcihyZXN1bHQuZ2V0RnVsbFllYXIoKSwgcmVzdWx0LmdldE1vbnRoKCksIHJlc3VsdC5nZXREYXRlKCkpO1xuXG4gICAgICByZXN1bHQuc2V0VVRDSG91cnMocmVzdWx0LmdldEhvdXJzKCksIHJlc3VsdC5nZXRNaW51dGVzKCksIHJlc3VsdC5nZXRTZWNvbmRzKCkgLSB0aGlzLnosIHJlc3VsdC5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJ0b3RpbWUoc3RyLCBub3cpIHtcbiAgLy8gICAgICAgZGlzY3VzcyBhdDogaHR0cHM6Ly9sb2N1dHVzLmlvL3BocC9zdHJ0b3RpbWUvXG4gIC8vICAgICAgb3JpZ2luYWwgYnk6IENhaW8gQXJpZWRlIChodHRwczovL2NhaW9hcmllZGUuY29tKVxuICAvLyAgICAgIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQ2FpbyBBcmllZGUgKGh0dHBzOi8vY2Fpb2FyaWVkZS5jb20pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IEEuIE1hdMOtYXMgUXVlemFkYSAoaHR0cHM6Ly9hbWF0aWFzcS5jb20pXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IHByZXV0ZXJcbiAgLy8gICAgICBpbXByb3ZlZCBieTogQnJldHQgWmFtaXIgKGh0dHBzOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICAgICAgaW1wcm92ZWQgYnk6IE1pcmtvIEZhYmVyXG4gIC8vICAgICAgICAgaW5wdXQgYnk6IERhdmlkXG4gIC8vICAgICAgYnVnZml4ZWQgYnk6IFdhZ25lciBCLiBTb2FyZXNcbiAgLy8gICAgICBidWdmaXhlZCBieTogQXJ0dXIgVGNoZXJueWNoZXZcbiAgLy8gICAgICBidWdmaXhlZCBieTogU3RlcGhhbiBCw7ZzY2gtUGxlcGVsaXRzIChodHRwczovL2dpdGh1Yi5jb20vcGxlcGUpXG4gIC8vIHJlaW1wbGVtZW50ZWQgYnk6IFJhZmHFgiBLdWthd3NraVxuICAvLyAgICAgICAgICAgbm90ZSAxOiBFeGFtcGxlcyBhbGwgaGF2ZSBhIGZpeGVkIHRpbWVzdGFtcCB0byBwcmV2ZW50XG4gIC8vICAgICAgICAgICBub3RlIDE6IHRlc3RzIHRvIGZhaWwgYmVjYXVzZSBvZiB2YXJpYWJsZSB0aW1lKHpvbmVzKVxuICAvLyAgICAgICAgZXhhbXBsZSAxOiBzdHJ0b3RpbWUoJysxIGRheScsIDExMjk2MzMyMDApXG4gIC8vICAgICAgICByZXR1cm5zIDE6IDExMjk3MTk2MDBcbiAgLy8gICAgICAgIGV4YW1wbGUgMjogc3RydG90aW1lKCcrMSB3ZWVrIDIgZGF5cyA0IGhvdXJzIDIgc2Vjb25kcycsIDExMjk2MzMyMDApXG4gIC8vICAgICAgICByZXR1cm5zIDI6IDExMzA0MjUyMDJcbiAgLy8gICAgICAgIGV4YW1wbGUgMzogc3RydG90aW1lKCdsYXN0IG1vbnRoJywgMTEyOTYzMzIwMClcbiAgLy8gICAgICAgIHJldHVybnMgMzogMTEyNzA0MTIwMFxuICAvLyAgICAgICAgZXhhbXBsZSA0OiBzdHJ0b3RpbWUoJzIwMDktMDUtMDQgMDg6MzA6MDArMDAnKVxuICAvLyAgICAgICAgcmV0dXJucyA0OiAxMjQxNDI1ODAwXG4gIC8vICAgICAgICBleGFtcGxlIDU6IHN0cnRvdGltZSgnMjAwOS0wNS0wNCAwODozMDowMCswMjowMCcpXG4gIC8vICAgICAgICByZXR1cm5zIDU6IDEyNDE0MTg2MDBcbiAgLy8gICAgICAgIGV4YW1wbGUgNjogc3RydG90aW1lKCcyMDA5LTA1LTA0IDA4OjMwOjAwIFlXVCcpXG4gIC8vICAgICAgICByZXR1cm5zIDY6IDEyNDE0NTQ2MDBcbiAgLy8gICAgICAgIGV4YW1wbGUgNzogc3RydG90aW1lKCcxMC1KVUwtMTcnKVxuICAvLyAgICAgICAgcmV0dXJucyA3OiAxNDk5NjQ0ODAwXG5cbiAgaWYgKG5vdyA9PSBudWxsKSB7XG4gICAgbm93ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gIH1cblxuICAvLyB0aGUgcnVsZSBvcmRlciBpcyBpbXBvcnRhbnRcbiAgLy8gaWYgbXVsdGlwbGUgcnVsZXMgbWF0Y2gsIHRoZSBsb25nZXN0IG1hdGNoIHdpbnNcbiAgLy8gaWYgbXVsdGlwbGUgcnVsZXMgbWF0Y2ggdGhlIHNhbWUgc3RyaW5nLCB0aGUgZmlyc3QgbWF0Y2ggd2luc1xuICB2YXIgcnVsZXMgPSBbZm9ybWF0cy55ZXN0ZXJkYXksIGZvcm1hdHMubm93LCBmb3JtYXRzLm5vb24sIGZvcm1hdHMubWlkbmlnaHRPclRvZGF5LCBmb3JtYXRzLnRvbW9ycm93LCBmb3JtYXRzLnRpbWVzdGFtcCwgZm9ybWF0cy5maXJzdE9yTGFzdERheSwgZm9ybWF0cy5iYWNrT3JGcm9udE9mLFxuICAvLyBmb3JtYXRzLndlZWtkYXlPZiwgLy8gbm90IHlldCBpbXBsZW1lbnRlZFxuICBmb3JtYXRzLnRpbWVUaW55MTIsIGZvcm1hdHMudGltZVNob3J0MTIsIGZvcm1hdHMudGltZUxvbmcxMiwgZm9ybWF0cy5tc3NxbHRpbWUsIGZvcm1hdHMub3JhY2xlZGF0ZSwgZm9ybWF0cy50aW1lU2hvcnQyNCwgZm9ybWF0cy50aW1lTG9uZzI0LCBmb3JtYXRzLmlzbzg2MDFsb25nLCBmb3JtYXRzLmdudU5vQ29sb24sIGZvcm1hdHMuaXNvODYwMW5vQ29sb24sIGZvcm1hdHMuYW1lcmljYW5TaG9ydCwgZm9ybWF0cy5hbWVyaWNhbiwgZm9ybWF0cy5pc284NjAxZGF0ZTQsIGZvcm1hdHMuaXNvODYwMWRhdGVTbGFzaCwgZm9ybWF0cy5kYXRlU2xhc2gsIGZvcm1hdHMuZ251RGF0ZVNob3J0T3JJc284NjAxZGF0ZTIsIGZvcm1hdHMuZ251RGF0ZVNob3J0ZXIsIGZvcm1hdHMuZGF0ZUZ1bGwsIGZvcm1hdHMucG9pbnRlZERhdGU0LCBmb3JtYXRzLnBvaW50ZWREYXRlMiwgZm9ybWF0cy5kYXRlTm9EYXksIGZvcm1hdHMuZGF0ZU5vRGF5UmV2LCBmb3JtYXRzLmRhdGVUZXh0dWFsLCBmb3JtYXRzLmRhdGVOb1llYXIsIGZvcm1hdHMuZGF0ZU5vWWVhclJldiwgZm9ybWF0cy5kYXRlTm9Db2xvbiwgZm9ybWF0cy54bWxScGMsIGZvcm1hdHMueG1sUnBjTm9Db2xvbiwgZm9ybWF0cy5zb2FwLCBmb3JtYXRzLndkZHgsIGZvcm1hdHMuZXhpZiwgZm9ybWF0cy5wZ3lkb3RkLCBmb3JtYXRzLmlzb1dlZWtEYXksIGZvcm1hdHMucGdUZXh0U2hvcnQsIGZvcm1hdHMucGdUZXh0UmV2ZXJzZSwgZm9ybWF0cy5jbGYsIGZvcm1hdHMueWVhcjQsIGZvcm1hdHMuYWdvLCBmb3JtYXRzLmRheVRleHQsIGZvcm1hdHMucmVsYXRpdmVUZXh0V2VlaywgZm9ybWF0cy5yZWxhdGl2ZVRleHQsIGZvcm1hdHMubW9udGhGdWxsT3JNb250aEFiYnIsIGZvcm1hdHMudHpDb3JyZWN0aW9uLCBmb3JtYXRzLnR6QWJiciwgZm9ybWF0cy5kYXRlU2hvcnRXaXRoVGltZVNob3J0MTIsIGZvcm1hdHMuZGF0ZVNob3J0V2l0aFRpbWVMb25nMTIsIGZvcm1hdHMuZGF0ZVNob3J0V2l0aFRpbWVTaG9ydCwgZm9ybWF0cy5kYXRlU2hvcnRXaXRoVGltZUxvbmcsIGZvcm1hdHMucmVsYXRpdmUsIGZvcm1hdHMud2hpdGVzcGFjZV07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUocmVzdWx0UHJvdG8pO1xuXG4gIHdoaWxlIChzdHIubGVuZ3RoKSB7XG4gICAgdmFyIGxvbmdlc3RNYXRjaCA9IG51bGw7XG4gICAgdmFyIGZpbmFsUnVsZSA9IG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGZvcm1hdCA9IHJ1bGVzW2ldO1xuXG4gICAgICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2goZm9ybWF0LnJlZ2V4KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGlmICghbG9uZ2VzdE1hdGNoIHx8IG1hdGNoWzBdLmxlbmd0aCA+IGxvbmdlc3RNYXRjaFswXS5sZW5ndGgpIHtcbiAgICAgICAgICBsb25nZXN0TWF0Y2ggPSBtYXRjaDtcbiAgICAgICAgICBmaW5hbFJ1bGUgPSBmb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZpbmFsUnVsZSB8fCBmaW5hbFJ1bGUuY2FsbGJhY2sgJiYgZmluYWxSdWxlLmNhbGxiYWNrLmFwcGx5KHJlc3VsdCwgbG9uZ2VzdE1hdGNoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIuc3Vic3RyKGxvbmdlc3RNYXRjaFswXS5sZW5ndGgpO1xuICAgIGZpbmFsUnVsZSA9IG51bGw7XG4gICAgbG9uZ2VzdE1hdGNoID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmZsb29yKHJlc3VsdC50b0RhdGUobmV3IERhdGUobm93ICogMTAwMCkpIC8gMTAwMCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RydG90aW1lLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1heCgpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHBzOi8vbG9jdXR1cy5pby9waHAvbWF4L1xuICAvLyBvcmlnaW5hbCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgcmV2aXNlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyAgICAgIG5vdGUgMTogTG9uZyBjb2RlIGNhdXNlIHdlJ3JlIGFpbWluZyBmb3IgbWF4aW11bSBQSFAgY29tcGF0aWJpbGl0eVxuICAvLyAgIGV4YW1wbGUgMTogbWF4KDEsIDMsIDUsIDYsIDcpXG4gIC8vICAgcmV0dXJucyAxOiA3XG4gIC8vICAgZXhhbXBsZSAyOiBtYXgoWzIsIDQsIDVdKVxuICAvLyAgIHJldHVybnMgMjogNVxuICAvLyAgIGV4YW1wbGUgMzogbWF4KDAsICdoZWxsbycpXG4gIC8vICAgcmV0dXJucyAzOiAwXG4gIC8vICAgZXhhbXBsZSA0OiBtYXgoJ2hlbGxvJywgMClcbiAgLy8gICByZXR1cm5zIDQ6ICdoZWxsbydcbiAgLy8gICBleGFtcGxlIDU6IG1heCgtMSwgJ2hlbGxvJylcbiAgLy8gICByZXR1cm5zIDU6ICdoZWxsbydcbiAgLy8gICBleGFtcGxlIDY6IG1heChbMiwgNCwgOF0sIFsyLCA1LCA3XSlcbiAgLy8gICByZXR1cm5zIDY6IFsyLCA1LCA3XVxuXG4gIHZhciBhciA9IHZvaWQgMDtcbiAgdmFyIHJldFZhbCA9IHZvaWQgMDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbiA9IDA7XG4gIHZhciBhcmd2ID0gYXJndW1lbnRzO1xuICB2YXIgYXJnYyA9IGFyZ3YubGVuZ3RoO1xuICB2YXIgX29iajJBcnJheSA9IGZ1bmN0aW9uIF9vYmoyQXJyYXkob2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2FyID0gW107XG4gICAgICBmb3IgKHZhciBfaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShfaSkpIHtcbiAgICAgICAgICBfYXIucHVzaChvYmpbX2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9hcjtcbiAgICB9XG4gIH07XG4gIHZhciBfY29tcGFyZSA9IGZ1bmN0aW9uIF9jb21wYXJlKGN1cnJlbnQsIG5leHQpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciB0bXAgPSAwO1xuICAgIHZhciBubCA9IDA7XG4gICAgdmFyIGNsID0gMDtcblxuICAgIGlmIChjdXJyZW50ID09PSBuZXh0KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgY3VycmVudCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY3VycmVudCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCh0eXBlb2YgbmV4dCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjdXJyZW50ID0gX29iajJBcnJheShjdXJyZW50KTtcbiAgICAgICAgbmV4dCA9IF9vYmoyQXJyYXkobmV4dCk7XG4gICAgICAgIGNsID0gY3VycmVudC5sZW5ndGg7XG4gICAgICAgIG5sID0gbmV4dC5sZW5ndGg7XG4gICAgICAgIGlmIChubCA+IGNsKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAobmwgPCBjbCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gY2w7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICB0bXAgPSBfY29tcGFyZShjdXJyZW50W2ldLCBuZXh0W2ldKTtcbiAgICAgICAgICBpZiAodG1wID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRtcCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIG5leHQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHQpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4obmV4dCkgJiYgIWlzTmFOKGN1cnJlbnQpKSB7XG4gICAgICBpZiAoY3VycmVudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50IDwgMCA/IDEgOiAtMTtcbiAgICB9IGVsc2UgaWYgKGlzTmFOKGN1cnJlbnQpICYmICFpc05hTihuZXh0KSkge1xuICAgICAgaWYgKG5leHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dCA+IDAgPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0ID4gY3VycmVudCA/IDEgOiAtMTtcbiAgfTtcblxuICBpZiAoYXJnYyA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQXQgbGVhc3Qgb25lIHZhbHVlIHNob3VsZCBiZSBwYXNzZWQgdG8gbWF4KCknKTtcbiAgfSBlbHNlIGlmIChhcmdjID09PSAxKSB7XG4gICAgaWYgKF90eXBlb2YoYXJndlswXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBhciA9IF9vYmoyQXJyYXkoYXJndlswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV3JvbmcgcGFyYW1ldGVyIGNvdW50IGZvciBtYXgoKScpO1xuICAgIH1cbiAgICBpZiAoYXIubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZWxlbWVudCBmb3IgbWF4KCknKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYXIgPSBhcmd2O1xuICB9XG5cbiAgcmV0VmFsID0gYXJbMF07XG4gIGZvciAoaSA9IDEsIG4gPSBhci5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoX2NvbXBhcmUocmV0VmFsLCBhcltpXSkgPT09IDEpIHtcbiAgICAgIHJldFZhbCA9IGFyW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRWYWw7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1pbigpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHBzOi8vbG9jdXR1cy5pby9waHAvbWluL1xuICAvLyBvcmlnaW5hbCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgcmV2aXNlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyBpbXByb3ZlZCBieTogSmFja1xuICAvLyAgICAgIG5vdGUgMTogTG9uZyBjb2RlIGNhdXNlIHdlJ3JlIGFpbWluZyBmb3IgbWF4aW11bSBQSFAgY29tcGF0aWJpbGl0eVxuICAvLyAgIGV4YW1wbGUgMTogbWluKDEsIDMsIDUsIDYsIDcpXG4gIC8vICAgcmV0dXJucyAxOiAxXG4gIC8vICAgZXhhbXBsZSAyOiBtaW4oWzIsIDQsIDVdKVxuICAvLyAgIHJldHVybnMgMjogMlxuICAvLyAgIGV4YW1wbGUgMzogbWluKDAsICdoZWxsbycpXG4gIC8vICAgcmV0dXJucyAzOiAwXG4gIC8vICAgZXhhbXBsZSA0OiBtaW4oJ2hlbGxvJywgMClcbiAgLy8gICByZXR1cm5zIDQ6ICdoZWxsbydcbiAgLy8gICBleGFtcGxlIDU6IG1pbigtMSwgJ2hlbGxvJylcbiAgLy8gICByZXR1cm5zIDU6IC0xXG4gIC8vICAgZXhhbXBsZSA2OiBtaW4oWzIsIDQsIDhdLCBbMiwgNSwgN10pXG4gIC8vICAgcmV0dXJucyA2OiBbMiwgNCwgOF1cblxuICB2YXIgYXIgPSB2b2lkIDA7XG4gIHZhciByZXRWYWwgPSB2b2lkIDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIG4gPSAwO1xuICB2YXIgYXJndiA9IGFyZ3VtZW50cztcbiAgdmFyIGFyZ2MgPSBhcmd2Lmxlbmd0aDtcbiAgdmFyIF9vYmoyQXJyYXkgPSBmdW5jdGlvbiBfb2JqMkFycmF5KG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgdmFyIGFyID0gW107XG4gICAgZm9yICh2YXIgX2kgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KF9pKSkge1xuICAgICAgICBhci5wdXNoKG9ialtfaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG4gIH07XG5cbiAgdmFyIF9jb21wYXJlID0gZnVuY3Rpb24gX2NvbXBhcmUoY3VycmVudCwgbmV4dCkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIHRtcCA9IDA7XG4gICAgdmFyIG5sID0gMDtcbiAgICB2YXIgY2wgPSAwO1xuXG4gICAgaWYgKGN1cnJlbnQgPT09IG5leHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBjdXJyZW50ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjdXJyZW50KSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoKHR5cGVvZiBuZXh0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXh0KSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGN1cnJlbnQgPSBfb2JqMkFycmF5KGN1cnJlbnQpO1xuICAgICAgICBuZXh0ID0gX29iajJBcnJheShuZXh0KTtcbiAgICAgICAgY2wgPSBjdXJyZW50Lmxlbmd0aDtcbiAgICAgICAgbmwgPSBuZXh0Lmxlbmd0aDtcbiAgICAgICAgaWYgKG5sID4gY2wpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChubCA8IGNsKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSBjbDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIHRtcCA9IF9jb21wYXJlKGN1cnJlbnRbaV0sIG5leHRbaV0pO1xuICAgICAgICAgIGlmICh0bXAgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAodG1wID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgbmV4dCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmV4dCkpID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChpc05hTihuZXh0KSAmJiAhaXNOYU4oY3VycmVudCkpIHtcbiAgICAgIGlmIChjdXJyZW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQgPCAwID8gMSA6IC0xO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4oY3VycmVudCkgJiYgIWlzTmFOKG5leHQpKSB7XG4gICAgICBpZiAobmV4dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0ID4gMCA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAobmV4dCA9PT0gY3VycmVudCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQgPiBjdXJyZW50ID8gMSA6IC0xO1xuICB9O1xuXG4gIGlmIChhcmdjID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBdCBsZWFzdCBvbmUgdmFsdWUgc2hvdWxkIGJlIHBhc3NlZCB0byBtaW4oKScpO1xuICB9IGVsc2UgaWYgKGFyZ2MgPT09IDEpIHtcbiAgICBpZiAoX3R5cGVvZihhcmd2WzBdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGFyID0gX29iajJBcnJheShhcmd2WzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBwYXJhbWV0ZXIgY291bnQgZm9yIG1pbigpJyk7XG4gICAgfVxuXG4gICAgaWYgKGFyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnJheSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGVsZW1lbnQgZm9yIG1pbigpJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFyID0gYXJndjtcbiAgfVxuXG4gIHJldFZhbCA9IGFyWzBdO1xuXG4gIGZvciAoaSA9IDEsIG4gPSBhci5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoX2NvbXBhcmUocmV0VmFsLCBhcltpXSkgPT09IC0xKSB7XG4gICAgICByZXRWYWwgPSBhcltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0VmFsO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJvdW5kVG9JbnQodmFsdWUsIG1vZGUpIHtcbiAgdmFyIHRtcCA9IE1hdGguZmxvb3IoTWF0aC5hYnModmFsdWUpICsgMC41KTtcblxuICBpZiAobW9kZSA9PT0gJ1BIUF9ST1VORF9IQUxGX0RPV04nICYmIHZhbHVlID09PSB0bXAgLSAwLjUgfHwgbW9kZSA9PT0gJ1BIUF9ST1VORF9IQUxGX0VWRU4nICYmIHZhbHVlID09PSAwLjUgKyAyICogTWF0aC5mbG9vcih0bXAgLyAyKSB8fCBtb2RlID09PSAnUEhQX1JPVU5EX0hBTEZfT0REJyAmJiB2YWx1ZSA9PT0gMC41ICsgMiAqIE1hdGguZmxvb3IodG1wIC8gMikgLSAxKSB7XG4gICAgdG1wIC09IDE7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgPCAwID8gLXRtcCA6IHRtcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbW9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ1BIUF9ST1VORF9IQUxGX1VQJztcblxuICAvLyAgZGlzY3VzcyBhdDogaHR0cHM6Ly9sb2N1dHVzLmlvL3BocC9yb3VuZC9cbiAgLy8gb3JpZ2luYWwgYnk6IFBoaWxpcCBQZXRlcnNvblxuICAvLyAgcmV2aXNlZCBieTogT25ubyBNYXJzbWFuIChodHRwczovL3R3aXR0ZXIuY29tL29ubm9tYXJzbWFuKVxuICAvLyAgcmV2aXNlZCBieTogVC5XaWxkXG4gIC8vICByZXZpc2VkIGJ5OiBSYWZhxYIgS3VrYXdza2kgKGh0dHBzOi8vYmxvZy5rdWthd3NraS5wbClcbiAgLy8gICAgaW5wdXQgYnk6IEdyZWVuc2VlZFxuICAvLyAgICBpbnB1dCBieTogbWVvXG4gIC8vICAgIGlucHV0IGJ5OiBXaWxsaWFtXG4gIC8vICAgIGlucHV0IGJ5OiBKb3NlcCBTYW56IChodHRwczovL3d3dy53czMuZXMvKVxuICAvLyBidWdmaXhlZCBieTogQnJldHQgWmFtaXIgKGh0dHBzOi8vYnJldHQtemFtaXIubWUpXG4gIC8vICByZXZpc2VkIGJ5OiBSYWZhxYIgS3VrYXdza2lcbiAgLy8gICBleGFtcGxlIDE6IHJvdW5kKDEyNDE3NTcsIC0zKVxuICAvLyAgIHJldHVybnMgMTogMTI0MjAwMFxuICAvLyAgIGV4YW1wbGUgMjogcm91bmQoMy42KVxuICAvLyAgIHJldHVybnMgMjogNFxuICAvLyAgIGV4YW1wbGUgMzogcm91bmQoMi44MzUsIDIpXG4gIC8vICAgcmV0dXJucyAzOiAyLjg0XG4gIC8vICAgZXhhbXBsZSA0OiByb3VuZCgxLjE3NDk5OTk5OTk5OTksIDIpXG4gIC8vICAgcmV0dXJucyA0OiAxLjE3XG4gIC8vICAgZXhhbXBsZSA1OiByb3VuZCg1ODU1MS43OTk5OTk5OTk5OTYsIDIpXG4gIC8vICAgcmV0dXJucyA1OiA1ODU1MS44XG4gIC8vICAgZXhhbXBsZSA2OiByb3VuZCg0MDk2LjQ4NSwgMilcbiAgLy8gICByZXR1cm5zIDY6IDQwOTYuNDlcblxuICB2YXIgZmxvYXRDYXN0ID0gcmVxdWlyZSgnLi4vX2hlbHBlcnMvX3BocF9jYXN0X2Zsb2F0Jyk7XG4gIHZhciBpbnRDYXN0ID0gcmVxdWlyZSgnLi4vX2hlbHBlcnMvX3BocF9jYXN0X2ludCcpO1xuICB2YXIgcCA9IHZvaWQgMDtcblxuICAvLyB0aGUgY29kZSBpcyBoZWF2aWx5IGJhc2VkIG9uIHRoZSBuYXRpdmUgUEhQIGltcGxlbWVudGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waHAvcGhwLXNyYy9ibG9iL1BIUC03LjQvZXh0L3N0YW5kYXJkL21hdGguYyNMMzU1XG5cbiAgdmFsdWUgPSBmbG9hdENhc3QodmFsdWUpO1xuICBwcmVjaXNpb24gPSBpbnRDYXN0KHByZWNpc2lvbik7XG4gIHAgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8ICFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyBpZiB2YWx1ZSBhbHJlYWR5IGludGVnZXIgYW5kIHBvc2l0aXZlIHByZWNpc2lvblxuICAvLyB0aGVuIG5vdGhpbmcgdG8gZG8sIHJldHVybiBlYXJseVxuICBpZiAoTWF0aC50cnVuYyh2YWx1ZSkgPT09IHZhbHVlICYmIHByZWNpc2lvbiA+PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gUEhQIGRvZXMgYSBwcmUtcm91bmRpbmcgYmVmb3JlIHJvdW5kaW5nIHRvIGRlc2lyZWQgcHJlY2lzaW9uXG4gIC8vIGh0dHBzOi8vd2lraS5waHAubmV0L3JmYy9yb3VuZGluZyNwcmUtcm91bmRpbmdfdG9fdGhlX3ZhbHVlX3NfcHJlY2lzaW9uX2lmX3Bvc3NpYmxlXG4gIHZhciBwcmVSb3VuZFByZWNpc2lvbiA9IDE0IC0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKE1hdGguYWJzKHZhbHVlKSkpO1xuXG4gIGlmIChwcmVSb3VuZFByZWNpc2lvbiA+IHByZWNpc2lvbiAmJiBwcmVSb3VuZFByZWNpc2lvbiAtIDE1IDwgcHJlY2lzaW9uKSB7XG4gICAgdmFsdWUgPSByb3VuZFRvSW50KHZhbHVlICogTWF0aC5wb3coMTAsIHByZVJvdW5kUHJlY2lzaW9uKSwgbW9kZSk7XG4gICAgdmFsdWUgLz0gTWF0aC5wb3coMTAsIE1hdGguYWJzKHByZWNpc2lvbiAtIHByZVJvdW5kUHJlY2lzaW9uKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgKj0gcDtcbiAgfVxuXG4gIHZhbHVlID0gcm91bmRUb0ludCh2YWx1ZSwgbW9kZSk7XG5cbiAgcmV0dXJuIHZhbHVlIC8gcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3VuZC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByaW50ZigpIHtcbiAgLy8gIGRpc2N1c3MgYXQ6IGh0dHBzOi8vbG9jdXR1cy5pby9waHAvc3ByaW50Zi9cbiAgLy8gb3JpZ2luYWwgYnk6IEFzaCBTZWFybGUgKGh0dHBzOi8vaGV4bWVuLmNvbS9ibG9nLylcbiAgLy8gaW1wcm92ZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHBzOi8vZ2V0c3ByaW5rLmNvbSlcbiAgLy8gaW1wcm92ZWQgYnk6IEphY2tcbiAgLy8gaW1wcm92ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHBzOi8va3Z6LmlvKVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cHM6Ly9rdnouaW8pXG4gIC8vIGltcHJvdmVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IERqXG4gIC8vIGltcHJvdmVkIGJ5OiBBbGxpZHlsbHNcbiAgLy8gICAgaW5wdXQgYnk6IFBhdWxvIEZyZWl0YXNcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwczovL2JyZXR0LXphbWlyLm1lKVxuICAvLyBpbXByb3ZlZCBieTogUmFmYcWCIEt1a2F3c2tpIChodHRwczovL2t1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogc3ByaW50ZihcIiUwMS4yZlwiLCAxMjMuMSlcbiAgLy8gICByZXR1cm5zIDE6ICcxMjMuMTAnXG4gIC8vICAgZXhhbXBsZSAyOiBzcHJpbnRmKFwiWyUxMHNdXCIsICdtb25rZXknKVxuICAvLyAgIHJldHVybnMgMjogJ1sgICAgbW9ua2V5XSdcbiAgLy8gICBleGFtcGxlIDM6IHNwcmludGYoXCJbJScjMTBzXVwiLCAnbW9ua2V5JylcbiAgLy8gICByZXR1cm5zIDM6ICdbIyMjI21vbmtleV0nXG4gIC8vICAgZXhhbXBsZSA0OiBzcHJpbnRmKFwiJWRcIiwgMTIzNDU2Nzg5MDEyMzQ1KVxuICAvLyAgIHJldHVybnMgNDogJzEyMzQ1Njc4OTAxMjM0NSdcbiAgLy8gICBleGFtcGxlIDU6IHNwcmludGYoJyUtMDNzJywgJ0UnKVxuICAvLyAgIHJldHVybnMgNTogJ0UwMCdcbiAgLy8gICBleGFtcGxlIDY6IHNwcmludGYoJyUrMDEwZCcsIDkpXG4gIC8vICAgcmV0dXJucyA2OiAnKzAwMDAwMDAwOSdcbiAgLy8gICBleGFtcGxlIDc6IHNwcmludGYoJyUrMFxcJ0AxMGQnLCA5KVxuICAvLyAgIHJldHVybnMgNzogJ0BAQEBAQEBAKzknXG4gIC8vICAgZXhhbXBsZSA4OiBzcHJpbnRmKCclLmYnLCAzLjE0KVxuICAvLyAgIHJldHVybnMgODogJzMuMTQwMDAwJ1xuICAvLyAgIGV4YW1wbGUgOTogc3ByaW50ZignJSUgJTIkZCcsIDEsIDIpXG4gIC8vICAgcmV0dXJucyA5OiAnJSAyJ1xuXG4gIHZhciByZWdleCA9IC8lJXwlKD86KFxcZCspXFwkKT8oKD86Wy0rIzAgXXwnW1xcc1xcU10pKikoXFxkKyk/KD86XFwuKFxcZCopKT8oW1xcc1xcU10pL2c7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmb3JtYXQgPSBhcmdzW2krK107XG5cbiAgdmFyIF9wYWQgPSBmdW5jdGlvbiBfcGFkKHN0ciwgbGVuLCBjaHIsIGxlZnRKdXN0aWZ5KSB7XG4gICAgaWYgKCFjaHIpIHtcbiAgICAgIGNociA9ICcgJztcbiAgICB9XG4gICAgdmFyIHBhZGRpbmcgPSBzdHIubGVuZ3RoID49IGxlbiA/ICcnIDogbmV3IEFycmF5KDEgKyBsZW4gLSBzdHIubGVuZ3RoID4+PiAwKS5qb2luKGNocik7XG4gICAgcmV0dXJuIGxlZnRKdXN0aWZ5ID8gc3RyICsgcGFkZGluZyA6IHBhZGRpbmcgKyBzdHI7XG4gIH07XG5cbiAgdmFyIGp1c3RpZnkgPSBmdW5jdGlvbiBqdXN0aWZ5KHZhbHVlLCBwcmVmaXgsIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcGFkQ2hhcikge1xuICAgIHZhciBkaWZmID0gbWluV2lkdGggLSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAvLyB3aGVuIHBhZGRpbmcgd2l0aCB6ZXJvc1xuICAgICAgLy8gb24gdGhlIGxlZnQgc2lkZVxuICAgICAgLy8ga2VlcCBzaWduICgrIG9yIC0pIGluIGZyb250XG4gICAgICBpZiAoIWxlZnRKdXN0aWZ5ICYmIHBhZENoYXIgPT09ICcwJykge1xuICAgICAgICB2YWx1ZSA9IFt2YWx1ZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSwgX3BhZCgnJywgZGlmZiwgJzAnLCB0cnVlKSwgdmFsdWUuc2xpY2UocHJlZml4Lmxlbmd0aCldLmpvaW4oJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBfcGFkKHZhbHVlLCBtaW5XaWR0aCwgcGFkQ2hhciwgbGVmdEp1c3RpZnkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgdmFyIF9mb3JtYXRCYXNlWCA9IGZ1bmN0aW9uIF9mb3JtYXRCYXNlWCh2YWx1ZSwgYmFzZSwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCBwcmVjaXNpb24sIHBhZENoYXIpIHtcbiAgICAvLyBOb3RlOiBjYXN0cyBuZWdhdGl2ZSBudW1iZXJzIHRvIHBvc2l0aXZlIG9uZXNcbiAgICB2YXIgbnVtYmVyID0gdmFsdWUgPj4+IDA7XG4gICAgdmFsdWUgPSBfcGFkKG51bWJlci50b1N0cmluZyhiYXNlKSwgcHJlY2lzaW9uIHx8IDAsICcwJywgZmFsc2UpO1xuICAgIHJldHVybiBqdXN0aWZ5KHZhbHVlLCAnJywgbGVmdEp1c3RpZnksIG1pbldpZHRoLCBwYWRDaGFyKTtcbiAgfTtcblxuICAvLyBfZm9ybWF0U3RyaW5nKClcbiAgdmFyIF9mb3JtYXRTdHJpbmcgPSBmdW5jdGlvbiBfZm9ybWF0U3RyaW5nKHZhbHVlLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgY3VzdG9tUGFkQ2hhcikge1xuICAgIGlmIChwcmVjaXNpb24gIT09IG51bGwgJiYgcHJlY2lzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgcHJlY2lzaW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGp1c3RpZnkodmFsdWUsICcnLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIGN1c3RvbVBhZENoYXIpO1xuICB9O1xuXG4gIC8vIGRvRm9ybWF0KClcbiAgdmFyIGRvRm9ybWF0ID0gZnVuY3Rpb24gZG9Gb3JtYXQoc3Vic3RyaW5nLCBhcmdJbmRleCwgbW9kaWZpZXJzLCBtaW5XaWR0aCwgcHJlY2lzaW9uLCBzcGVjaWZpZXIpIHtcbiAgICB2YXIgbnVtYmVyID0gdm9pZCAwLFxuICAgICAgICBwcmVmaXggPSB2b2lkIDAsXG4gICAgICAgIG1ldGhvZCA9IHZvaWQgMCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybSA9IHZvaWQgMCxcbiAgICAgICAgdmFsdWUgPSB2b2lkIDA7XG5cbiAgICBpZiAoc3Vic3RyaW5nID09PSAnJSUnKSB7XG4gICAgICByZXR1cm4gJyUnO1xuICAgIH1cblxuICAgIC8vIHBhcnNlIG1vZGlmaWVyc1xuICAgIHZhciBwYWRDaGFyID0gJyAnOyAvLyBwYWQgd2l0aCBzcGFjZXMgYnkgZGVmYXVsdFxuICAgIHZhciBsZWZ0SnVzdGlmeSA9IGZhbHNlO1xuICAgIHZhciBwb3NpdGl2ZU51bWJlclByZWZpeCA9ICcnO1xuICAgIHZhciBqID0gdm9pZCAwLFxuICAgICAgICBsID0gdm9pZCAwO1xuXG4gICAgZm9yIChqID0gMCwgbCA9IG1vZGlmaWVycy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgIHN3aXRjaCAobW9kaWZpZXJzLmNoYXJBdChqKSkge1xuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgcGFkQ2hhciA9IG1vZGlmaWVycy5jaGFyQXQoaik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIHBvc2l0aXZlTnVtYmVyUHJlZml4ID0gJysnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICBsZWZ0SnVzdGlmeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgaWYgKGogKyAxIDwgbCkge1xuICAgICAgICAgICAgcGFkQ2hhciA9IG1vZGlmaWVycy5jaGFyQXQoaiArIDEpO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1pbldpZHRoKSB7XG4gICAgICBtaW5XaWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbldpZHRoID0gK21pbldpZHRoO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUobWluV2lkdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dpZHRoIG11c3QgYmUgZmluaXRlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwcmVjaXNpb24pIHtcbiAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllciA9PT0gJ2QnID8gMCA6ICdmRmVFJy5pbmRleE9mKHNwZWNpZmllcikgPiAtMSA/IDYgOiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWNpc2lvbiA9ICtwcmVjaXNpb247XG4gICAgfVxuXG4gICAgaWYgKGFyZ0luZGV4ICYmICthcmdJbmRleCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBudW1iZXIgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVybycpO1xuICAgIH1cblxuICAgIGlmIChhcmdJbmRleCAmJiArYXJnSW5kZXggPj0gYXJncy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIGZldyBhcmd1bWVudHMnKTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGFyZ0luZGV4ID8gYXJnc1srYXJnSW5kZXhdIDogYXJnc1tpKytdO1xuXG4gICAgc3dpdGNoIChzcGVjaWZpZXIpIHtcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgICByZXR1cm4gJyUnO1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIHJldHVybiBfZm9ybWF0U3RyaW5nKHZhbHVlICsgJycsIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcHJlY2lzaW9uLCBwYWRDaGFyKTtcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gX2Zvcm1hdFN0cmluZyhTdHJpbmcuZnJvbUNoYXJDb2RlKCt2YWx1ZSksIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcHJlY2lzaW9uLCBwYWRDaGFyKTtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgICByZXR1cm4gX2Zvcm1hdEJhc2VYKHZhbHVlLCAyLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgcGFkQ2hhcik7XG4gICAgICBjYXNlICdvJzpcbiAgICAgICAgcmV0dXJuIF9mb3JtYXRCYXNlWCh2YWx1ZSwgOCwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCBwcmVjaXNpb24sIHBhZENoYXIpO1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBfZm9ybWF0QmFzZVgodmFsdWUsIDE2LCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgcGFkQ2hhcik7XG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIF9mb3JtYXRCYXNlWCh2YWx1ZSwgMTYsIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcHJlY2lzaW9uLCBwYWRDaGFyKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAndSc6XG4gICAgICAgIHJldHVybiBfZm9ybWF0QmFzZVgodmFsdWUsIDEwLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgcGFkQ2hhcik7XG4gICAgICBjYXNlICdpJzpcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgICBudW1iZXIgPSArdmFsdWUgfHwgMDtcbiAgICAgICAgLy8gUGxhaW4gTWF0aC5yb3VuZCBkb2Vzbid0IGp1c3QgdHJ1bmNhdGVcbiAgICAgICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIgLSBudW1iZXIgJSAxKTtcbiAgICAgICAgcHJlZml4ID0gbnVtYmVyIDwgMCA/ICctJyA6IHBvc2l0aXZlTnVtYmVyUHJlZml4O1xuICAgICAgICB2YWx1ZSA9IHByZWZpeCArIF9wYWQoU3RyaW5nKE1hdGguYWJzKG51bWJlcikpLCBwcmVjaXNpb24sICcwJywgZmFsc2UpO1xuXG4gICAgICAgIGlmIChsZWZ0SnVzdGlmeSAmJiBwYWRDaGFyID09PSAnMCcpIHtcbiAgICAgICAgICAvLyBjYW4ndCByaWdodC1wYWQgMHMgb24gaW50ZWdlcnNcbiAgICAgICAgICBwYWRDaGFyID0gJyAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqdXN0aWZ5KHZhbHVlLCBwcmVmaXgsIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcGFkQ2hhcik7XG4gICAgICBjYXNlICdlJzpcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnZic6IC8vIEB0b2RvOiBTaG91bGQgaGFuZGxlIGxvY2FsZXMgKGFzIHBlciBzZXRsb2NhbGUpXG4gICAgICBjYXNlICdGJzpcbiAgICAgIGNhc2UgJ2cnOlxuICAgICAgY2FzZSAnRyc6XG4gICAgICAgIG51bWJlciA9ICt2YWx1ZTtcbiAgICAgICAgcHJlZml4ID0gbnVtYmVyIDwgMCA/ICctJyA6IHBvc2l0aXZlTnVtYmVyUHJlZml4O1xuICAgICAgICBtZXRob2QgPSBbJ3RvRXhwb25lbnRpYWwnLCAndG9GaXhlZCcsICd0b1ByZWNpc2lvbiddWydlZmcnLmluZGV4T2Yoc3BlY2lmaWVyLnRvTG93ZXJDYXNlKCkpXTtcbiAgICAgICAgdGV4dFRyYW5zZm9ybSA9IFsndG9TdHJpbmcnLCAndG9VcHBlckNhc2UnXVsnZUVmRmdHJy5pbmRleE9mKHNwZWNpZmllcikgJSAyXTtcbiAgICAgICAgdmFsdWUgPSBwcmVmaXggKyBNYXRoLmFicyhudW1iZXIpW21ldGhvZF0ocHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnkodmFsdWUsIHByZWZpeCwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCBwYWRDaGFyKVt0ZXh0VHJhbnNmb3JtXSgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gdW5rbm93biBzcGVjaWZpZXIsIGNvbnN1bWUgdGhhdCBjaGFyIGFuZCByZXR1cm4gZW1wdHlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICB0cnkge1xuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZShyZWdleCwgZG9Gb3JtYXQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcHJpbnRmLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpcF90YWdzKGlucHV0LCBhbGxvd2VkKSB7XG4gIC8vICBkaXNjdXNzIGF0OiBodHRwczovL2xvY3V0dXMuaW8vcGhwL3N0cmlwX3RhZ3MvXG4gIC8vIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gaW1wcm92ZWQgYnk6IEx1a2UgR29kZnJleVxuICAvLyBpbXByb3ZlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cHM6Ly9rdnouaW8pXG4gIC8vICAgIGlucHV0IGJ5OiBQdWxcbiAgLy8gICAgaW5wdXQgYnk6IEFsZXhcbiAgLy8gICAgaW5wdXQgYnk6IE1hcmMgUGFsYXVcbiAgLy8gICAgaW5wdXQgYnk6IEJyZXR0IFphbWlyIChodHRwczovL2JyZXR0LXphbWlyLm1lKVxuICAvLyAgICBpbnB1dCBieTogQm9iYnkgRHJha2VcbiAgLy8gICAgaW5wdXQgYnk6IEV2ZXJ0amFuIEdhcnJldHNlblxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cHM6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBPbm5vIE1hcnNtYW4gKGh0dHBzOi8vdHdpdHRlci5jb20vb25ub21hcnNtYW4pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwczovL2t2ei5pbylcbiAgLy8gYnVnZml4ZWQgYnk6IEtldmluIHZhbiBab25uZXZlbGQgKGh0dHBzOi8va3Z6LmlvKVxuICAvLyBidWdmaXhlZCBieTogRXJpYyBOYWdlbFxuICAvLyBidWdmaXhlZCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cHM6Ly9rdnouaW8pXG4gIC8vIGJ1Z2ZpeGVkIGJ5OiBUb21hc3ogV2Vzb2xvd3NraVxuICAvLyBidWdmaXhlZCBieTogVHltb24gU3R1cmdlb24gKGh0dHBzOi8vc2NyeXB0b25pdGUuY29tKVxuICAvLyBidWdmaXhlZCBieTogVGltIGRlIEtvbmluZyAoaHR0cHM6Ly93d3cua2luZ3NxdWFyZS5ubClcbiAgLy8gIHJldmlzZWQgYnk6IFJhZmHFgiBLdWthd3NraSAoaHR0cHM6Ly9ibG9nLmt1a2F3c2tpLnBsKVxuICAvLyAgIGV4YW1wbGUgMTogc3RyaXBfdGFncygnPHA+S2V2aW48L3A+IDxiciAvPjxiPnZhbjwvYj4gPGk+Wm9ubmV2ZWxkPC9pPicsICc8aT48Yj4nKVxuICAvLyAgIHJldHVybnMgMTogJ0tldmluIDxiPnZhbjwvYj4gPGk+Wm9ubmV2ZWxkPC9pPidcbiAgLy8gICBleGFtcGxlIDI6IHN0cmlwX3RhZ3MoJzxwPktldmluIDxpbWcgc3JjPVwic29tZWltYWdlLnBuZ1wiIG9ubW91c2VvdmVyPVwic29tZUZ1bmN0aW9uKClcIj52YW4gPGk+Wm9ubmV2ZWxkPC9pPjwvcD4nLCAnPHA+JylcbiAgLy8gICByZXR1cm5zIDI6ICc8cD5LZXZpbiB2YW4gWm9ubmV2ZWxkPC9wPidcbiAgLy8gICBleGFtcGxlIDM6IHN0cmlwX3RhZ3MoXCI8YSBocmVmPSdodHRwczovL2t2ei5pbyc+S2V2aW4gdmFuIFpvbm5ldmVsZDwvYT5cIiwgXCI8YT5cIilcbiAgLy8gICByZXR1cm5zIDM6IFwiPGEgaHJlZj0naHR0cHM6Ly9rdnouaW8nPktldmluIHZhbiBab25uZXZlbGQ8L2E+XCJcbiAgLy8gICBleGFtcGxlIDQ6IHN0cmlwX3RhZ3MoJzEgPCA1IDUgPiAxJylcbiAgLy8gICByZXR1cm5zIDQ6ICcxIDwgNSA1ID4gMSdcbiAgLy8gICBleGFtcGxlIDU6IHN0cmlwX3RhZ3MoJzEgPGJyLz4gMScpXG4gIC8vICAgcmV0dXJucyA1OiAnMSAgMSdcbiAgLy8gICBleGFtcGxlIDY6IHN0cmlwX3RhZ3MoJzEgPGJyLz4gMScsICc8YnI+JylcbiAgLy8gICByZXR1cm5zIDY6ICcxIDxici8+IDEnXG4gIC8vICAgZXhhbXBsZSA3OiBzdHJpcF90YWdzKCcxIDxici8+IDEnLCAnPGJyPjxici8+JylcbiAgLy8gICByZXR1cm5zIDc6ICcxIDxici8+IDEnXG4gIC8vICAgZXhhbXBsZSA4OiBzdHJpcF90YWdzKCc8aT5oZWxsbzwvaT4gPDxmb28+c2NyaXB0PndvcmxkPDwvZm9vPi9zY3JpcHQ+JylcbiAgLy8gICByZXR1cm5zIDg6ICdoZWxsbyB3b3JsZCdcbiAgLy8gICBleGFtcGxlIDk6IHN0cmlwX3RhZ3MoNClcbiAgLy8gICByZXR1cm5zIDk6ICc0J1xuXG4gIHZhciBfcGhwQ2FzdFN0cmluZyA9IHJlcXVpcmUoJy4uL19oZWxwZXJzL19waHBDYXN0U3RyaW5nJyk7XG5cbiAgLy8gbWFraW5nIHN1cmUgdGhlIGFsbG93ZWQgYXJnIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25seSB0YWdzIGluIGxvd2VyY2FzZSAoPGE+PGI+PGM+KVxuICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJykudG9Mb3dlckNhc2UoKS5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSkuam9pbignJyk7XG5cbiAgdmFyIHRhZ3MgPSAvPFxcLz8oW2EtejAtOV0qKVxcYltePl0qPj8vZ2k7XG4gIHZhciBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XG5cbiAgdmFyIGFmdGVyID0gX3BocENhc3RTdHJpbmcoaW5wdXQpO1xuICAvLyByZW1vdmVzIHRoYSAnPCcgY2hhciBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgdG8gcmVwbGljYXRlIFBIUCdzIGJlaGF2aW91clxuICBhZnRlciA9IGFmdGVyLnN1YnN0cmluZyhhZnRlci5sZW5ndGggLSAxKSA9PT0gJzwnID8gYWZ0ZXIuc3Vic3RyaW5nKDAsIGFmdGVyLmxlbmd0aCAtIDEpIDogYWZ0ZXI7XG5cbiAgLy8gcmVjdXJzaXZlbHkgcmVtb3ZlIHRhZ3MgdG8gZW5zdXJlIHRoYXQgdGhlIHJldHVybmVkIHN0cmluZyBkb2Vzbid0IGNvbnRhaW4gZm9yYmlkZGVuIHRhZ3MgYWZ0ZXIgcHJldmlvdXMgcGFzc2VzIChlLmcuICc8PGJhaXQvPnN3aXRjaC8+JylcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgYmVmb3JlID0gYWZ0ZXI7XG4gICAgYWZ0ZXIgPSBiZWZvcmUucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKS5yZXBsYWNlKHRhZ3MsIGZ1bmN0aW9uICgkMCwgJDEpIHtcbiAgICAgIHJldHVybiBhbGxvd2VkLmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDogJyc7XG4gICAgfSk7XG5cbiAgICAvLyByZXR1cm4gb25jZSBubyBtb3JlIHRhZ3MgYXJlIHJlbW92ZWRcbiAgICBpZiAoYmVmb3JlID09PSBhZnRlcikge1xuICAgICAgcmV0dXJuIGFmdGVyO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmlwX3RhZ3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZzcHJpbnRmKGZvcm1hdCwgYXJncykge1xuICAvLyAgZGlzY3VzcyBhdDogaHR0cHM6Ly9sb2N1dHVzLmlvL3BocC92c3ByaW50Zi9cbiAgLy8gb3JpZ2luYWwgYnk6IGVqc2FuZGVyc1xuICAvLyAgIGV4YW1wbGUgMTogdnNwcmludGYoJyUwNGQtJTAyZC0lMDJkJywgWzE5ODgsIDgsIDFdKVxuICAvLyAgIHJldHVybnMgMTogJzE5ODgtMDgtMDEnXG5cbiAgdmFyIHNwcmludGYgPSByZXF1aXJlKCcuLi9zdHJpbmdzL3NwcmludGYnKTtcblxuICByZXR1cm4gc3ByaW50Zi5hcHBseSh0aGlzLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZzcHJpbnRmLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBib29sdmFsKG1peGVkVmFyKSB7XG4gIC8vIG9yaWdpbmFsIGJ5OiBXaWxsIFJvd2VcbiAgLy8gICBleGFtcGxlIDE6IGJvb2x2YWwodHJ1ZSlcbiAgLy8gICByZXR1cm5zIDE6IHRydWVcbiAgLy8gICBleGFtcGxlIDI6IGJvb2x2YWwoZmFsc2UpXG4gIC8vICAgcmV0dXJucyAyOiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgMzogYm9vbHZhbCgwKVxuICAvLyAgIHJldHVybnMgMzogZmFsc2VcbiAgLy8gICBleGFtcGxlIDQ6IGJvb2x2YWwoMC4wKVxuICAvLyAgIHJldHVybnMgNDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDU6IGJvb2x2YWwoJycpXG4gIC8vICAgcmV0dXJucyA1OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNjogYm9vbHZhbCgnMCcpXG4gIC8vICAgcmV0dXJucyA2OiBmYWxzZVxuICAvLyAgIGV4YW1wbGUgNzogYm9vbHZhbChbXSlcbiAgLy8gICByZXR1cm5zIDc6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSA4OiBib29sdmFsKCcnKVxuICAvLyAgIHJldHVybnMgODogZmFsc2VcbiAgLy8gICBleGFtcGxlIDk6IGJvb2x2YWwobnVsbClcbiAgLy8gICByZXR1cm5zIDk6IGZhbHNlXG4gIC8vICAgZXhhbXBsZSAxMDogYm9vbHZhbCh1bmRlZmluZWQpXG4gIC8vICAgcmV0dXJucyAxMDogZmFsc2VcbiAgLy8gICBleGFtcGxlIDExOiBib29sdmFsKCd0cnVlJylcbiAgLy8gICByZXR1cm5zIDExOiB0cnVlXG5cbiAgaWYgKG1peGVkVmFyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gMCB8fCBtaXhlZFZhciA9PT0gMC4wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG1peGVkVmFyID09PSAnJyB8fCBtaXhlZFZhciA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWl4ZWRWYXIpICYmIG1peGVkVmFyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChtaXhlZFZhciA9PT0gbnVsbCB8fCBtaXhlZFZhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vbHZhbC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcblxyXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcclxuLy8gbXVzdCBiZSBubyBzbGFzaGVzIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XHJcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxyXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xyXG4gIHZhciByZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xyXG5cclxuICAgIC8vIGlnbm9yZSBlbXB0eSBwYXJ0c1xyXG4gICAgaWYgKCFwIHx8IHAgPT09ICcuJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgaWYgKHAgPT09ICcuLicpIHtcclxuICAgICAgaWYgKHJlcy5sZW5ndGggJiYgcmVzW3Jlcy5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xyXG4gICAgICAgIHJlcy5wb3AoKTtcclxuICAgICAgfSBlbHNlIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xyXG4gICAgICAgIHJlcy5wdXNoKCcuLicpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMucHVzaChwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCBlbXB0eSBlbGVtZW50cyByZW1vdmVkIGZyb20gZWl0aGVyIGVuZCBvZiB0aGUgaW5wdXRcclxuLy8gYXJyYXkgb3IgdGhlIG9yaWdpbmFsIGFycmF5IGlmIG5vIGVsZW1lbnRzIG5lZWQgdG8gYmUgcmVtb3ZlZFxyXG5mdW5jdGlvbiB0cmltQXJyYXkoYXJyKSB7XHJcbiAgdmFyIGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xyXG4gIHZhciBzdGFydCA9IDA7XHJcbiAgZm9yICg7IHN0YXJ0IDw9IGxhc3RJbmRleDsgc3RhcnQrKykge1xyXG4gICAgaWYgKGFycltzdGFydF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVuZCA9IGxhc3RJbmRleDtcclxuICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XHJcbiAgICBpZiAoYXJyW2VuZF0pXHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gbGFzdEluZGV4KVxyXG4gICAgcmV0dXJuIGFycjtcclxuICBpZiAoc3RhcnQgPiBlbmQpXHJcbiAgICByZXR1cm4gW107XHJcbiAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbn1cclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IGEgd2luZG93cyBwYXRoIGludG8gdGhyZWUgcGFydHM6IFsqLCBkZXZpY2UsIHNsYXNoLFxyXG4vLyB0YWlsXSB3aW5kb3dzLW9ubHlcclxudmFyIHNwbGl0RGV2aWNlUmUgPVxyXG4gICAgL14oW2EtekEtWl06fFtcXFxcXFwvXXsyfVteXFxcXFxcL10rW1xcXFxcXC9dK1teXFxcXFxcL10rKT8oW1xcXFxcXC9dKT8oW1xcc1xcU10qPykkLztcclxuXHJcbi8vIFJlZ2V4IHRvIHNwbGl0IHRoZSB0YWlsIHBhcnQgb2YgdGhlIGFib3ZlIGludG8gWyosIGRpciwgYmFzZW5hbWUsIGV4dF1cclxudmFyIHNwbGl0VGFpbFJlID1cclxuICAgIC9eKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKSg/OltcXFxcXFwvXSopJC87XHJcblxyXG52YXIgd2luMzIgPSB7fTtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XVxyXG5mdW5jdGlvbiB3aW4zMlNwbGl0UGF0aChmaWxlbmFtZSkge1xyXG4gIC8vIFNlcGFyYXRlIGRldmljZStzbGFzaCBmcm9tIHRhaWxcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKGZpbGVuYW1lKSxcclxuICAgICAgZGV2aWNlID0gKHJlc3VsdFsxXSB8fCAnJykgKyAocmVzdWx0WzJdIHx8ICcnKSxcclxuICAgICAgdGFpbCA9IHJlc3VsdFszXSB8fCAnJztcclxuICAvLyBTcGxpdCB0aGUgdGFpbCBpbnRvIGRpciwgYmFzZW5hbWUgYW5kIGV4dGVuc2lvblxyXG4gIHZhciByZXN1bHQyID0gc3BsaXRUYWlsUmUuZXhlYyh0YWlsKSxcclxuICAgICAgZGlyID0gcmVzdWx0MlsxXSxcclxuICAgICAgYmFzZW5hbWUgPSByZXN1bHQyWzJdLFxyXG4gICAgICBleHQgPSByZXN1bHQyWzNdO1xyXG4gIHJldHVybiBbZGV2aWNlLCBkaXIsIGJhc2VuYW1lLCBleHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW4zMlN0YXRQYXRoKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gc3BsaXREZXZpY2VSZS5leGVjKHBhdGgpLFxyXG4gICAgICBkZXZpY2UgPSByZXN1bHRbMV0gfHwgJycsXHJcbiAgICAgIGlzVW5jID0gISFkZXZpY2UgJiYgZGV2aWNlWzFdICE9PSAnOic7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRldmljZTogZGV2aWNlLFxyXG4gICAgaXNVbmM6IGlzVW5jLFxyXG4gICAgaXNBYnNvbHV0ZTogaXNVbmMgfHwgISFyZXN1bHRbMl0sIC8vIFVOQyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlXHJcbiAgICB0YWlsOiByZXN1bHRbM11cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVTkNSb290KGRldmljZSkge1xyXG4gIHJldHVybiAnXFxcXFxcXFwnICsgZGV2aWNlLnJlcGxhY2UoL15bXFxcXFxcL10rLywgJycpLnJlcGxhY2UoL1tcXFxcXFwvXSsvZywgJ1xcXFwnKTtcclxufVxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG53aW4zMi5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJlc29sdmVkRGV2aWNlID0gJycsXHJcbiAgICAgIHJlc29sdmVkVGFpbCA9ICcnLFxyXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMTsgaS0tKSB7XHJcbiAgICB2YXIgcGF0aDtcclxuICAgIGlmIChpID49IDApIHtcclxuICAgICAgcGF0aCA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkRGV2aWNlKSB7XHJcbiAgICAgIHBhdGggPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gV2luZG93cyBoYXMgdGhlIGNvbmNlcHQgb2YgZHJpdmUtc3BlY2lmaWMgY3VycmVudCB3b3JraW5nXHJcbiAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxyXG4gICAgICAvLyBhYnNvbHV0ZSBwYXRoLCBnZXQgY3dkIGZvciB0aGF0IGRyaXZlLiBXZSdyZSBzdXJlIHRoZSBkZXZpY2UgaXMgbm90XHJcbiAgICAgIC8vIGFuIHVuYyBwYXRoIGF0IHRoaXMgcG9pbnRzLCBiZWNhdXNlIHVuYyBwYXRocyBhcmUgYWx3YXlzIGFic29sdXRlLlxyXG4gICAgICBwYXRoID0gcHJvY2Vzcy5lbnZbJz0nICsgcmVzb2x2ZWREZXZpY2VdO1xyXG4gICAgICAvLyBWZXJpZnkgdGhhdCBhIGRyaXZlLWxvY2FsIGN3ZCB3YXMgZm91bmQgYW5kIHRoYXQgaXQgYWN0dWFsbHkgcG9pbnRzXHJcbiAgICAgIC8vIHRvIG91ciBkcml2ZS4gSWYgbm90LCBkZWZhdWx0IHRvIHRoZSBkcml2ZSdzIHJvb3QuXHJcbiAgICAgIGlmICghcGF0aCB8fCBwYXRoLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpICE9PVxyXG4gICAgICAgICAgcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSArICdcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSByZXNvbHZlZERldmljZSArICdcXFxcJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXN1bHQgPSB3aW4zMlN0YXRQYXRoKHBhdGgpLFxyXG4gICAgICAgIGRldmljZSA9IHJlc3VsdC5kZXZpY2UsXHJcbiAgICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgICAgaXNBYnNvbHV0ZSA9IHJlc3VsdC5pc0Fic29sdXRlLFxyXG4gICAgICAgIHRhaWwgPSByZXN1bHQudGFpbDtcclxuXHJcbiAgICBpZiAoZGV2aWNlICYmXHJcbiAgICAgICAgcmVzb2x2ZWREZXZpY2UgJiZcclxuICAgICAgICBkZXZpY2UudG9Mb3dlckNhc2UoKSAhPT0gcmVzb2x2ZWREZXZpY2UudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzb2x2ZWREZXZpY2UpIHtcclxuICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgcmVzb2x2ZWRUYWlsID0gdGFpbCArICdcXFxcJyArIHJlc29sdmVkVGFpbDtcclxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc29sdmVkRGV2aWNlICYmIHJlc29sdmVkQWJzb2x1dGUpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb252ZXJ0IHNsYXNoZXMgdG8gYmFja3NsYXNoZXMgd2hlbiBgcmVzb2x2ZWREZXZpY2VgIHBvaW50cyB0byBhbiBVTkNcclxuICAvLyByb290LiBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgcmVzb2x2ZWREZXZpY2UgPSBub3JtYWxpemVVTkNSb290KHJlc29sdmVkRGV2aWNlKTtcclxuICB9XHJcblxyXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxyXG4gIC8vIGJ1dCBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKVxyXG4gIC8vIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHRhaWwgcGF0aFxyXG4gIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZUFycmF5KHJlc29sdmVkVGFpbC5zcGxpdCgvW1xcXFxcXC9dKy8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCdcXFxcJyk7XHJcblxyXG4gIHJldHVybiAocmVzb2x2ZWREZXZpY2UgKyAocmVzb2x2ZWRBYnNvbHV0ZSA/ICdcXFxcJyA6ICcnKSArIHJlc29sdmVkVGFpbCkgfHxcclxuICAgICAgICAgJy4nO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgcmVzdWx0ID0gd2luMzJTdGF0UGF0aChwYXRoKSxcclxuICAgICAgZGV2aWNlID0gcmVzdWx0LmRldmljZSxcclxuICAgICAgaXNVbmMgPSByZXN1bHQuaXNVbmMsXHJcbiAgICAgIGlzQWJzb2x1dGUgPSByZXN1bHQuaXNBYnNvbHV0ZSxcclxuICAgICAgdGFpbCA9IHJlc3VsdC50YWlsLFxyXG4gICAgICB0cmFpbGluZ1NsYXNoID0gL1tcXFxcXFwvXSQvLnRlc3QodGFpbCk7XHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXHJcbiAgdGFpbCA9IG5vcm1hbGl6ZUFycmF5KHRhaWwuc3BsaXQoL1tcXFxcXFwvXSsvKSwgIWlzQWJzb2x1dGUpLmpvaW4oJ1xcXFwnKTtcclxuXHJcbiAgaWYgKCF0YWlsICYmICFpc0Fic29sdXRlKSB7XHJcbiAgICB0YWlsID0gJy4nO1xyXG4gIH1cclxuICBpZiAodGFpbCAmJiB0cmFpbGluZ1NsYXNoKSB7XHJcbiAgICB0YWlsICs9ICdcXFxcJztcclxuICB9XHJcblxyXG4gIC8vIENvbnZlcnQgc2xhc2hlcyB0byBiYWNrc2xhc2hlcyB3aGVuIGBkZXZpY2VgIHBvaW50cyB0byBhbiBVTkMgcm9vdC5cclxuICAvLyBBbHNvIHNxdWFzaCBtdWx0aXBsZSBzbGFzaGVzIGludG8gYSBzaW5nbGUgb25lIHdoZXJlIGFwcHJvcHJpYXRlLlxyXG4gIGlmIChpc1VuYykge1xyXG4gICAgZGV2aWNlID0gbm9ybWFsaXplVU5DUm9vdChkZXZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRldmljZSArIChpc0Fic29sdXRlID8gJ1xcXFwnIDogJycpICsgdGFpbDtcclxufTtcclxuXHJcblxyXG53aW4zMi5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiB3aW4zMlN0YXRQYXRoKHBhdGgpLmlzQWJzb2x1dGU7XHJcbn07XHJcblxyXG53aW4zMi5qb2luID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHBhdGhzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBpZiAoIXV0aWwuaXNTdHJpbmcoYXJnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZykge1xyXG4gICAgICBwYXRocy5wdXNoKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgam9pbmVkID0gcGF0aHMuam9pbignXFxcXCcpO1xyXG5cclxuICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXHJcbiAgLy8gbm9ybWFsaXplKCkgd2lsbCBtaXN0YWtlIGl0IGZvciBhbiBVTkMgcGF0aCB0aGVuLlxyXG4gIC8vXHJcbiAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcclxuICAvLyBpbnRlbmRlZCB0byBwb2ludCBhdCBhbiBVTkMgcGF0aC4gVGhpcyBpcyBhc3N1bWVkIHdoZW4gdGhlIGZpcnN0XHJcbiAgLy8gbm9uLWVtcHR5IHN0cmluZyBhcmd1bWVudHMgc3RhcnRzIHdpdGggZXhhY3RseSB0d28gc2xhc2hlcyBmb2xsb3dlZCBieVxyXG4gIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXHJcbiAgLy9cclxuICAvLyBOb3RlIHRoYXQgZm9yIG5vcm1hbGl6ZSgpIHRvIHRyZWF0IGEgcGF0aCBhcyBhbiBVTkMgcGF0aCBpdCBuZWVkcyB0b1xyXG4gIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cclxuICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSBqb2luIHRvIGNvbnN0cnVjdCBVTkMgcGF0aHMgZnJvbVxyXG4gIC8vIGEgc2VydmVyIG5hbWUgYW5kIGEgc2hhcmUgbmFtZTsgZm9yIGV4YW1wbGU6XHJcbiAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFwnKVxyXG4gIGlmICghL15bXFxcXFxcL117Mn1bXlxcXFxcXC9dLy50ZXN0KHBhdGhzWzBdKSkge1xyXG4gICAgam9pbmVkID0gam9pbmVkLnJlcGxhY2UoL15bXFxcXFxcL117Mix9LywgJ1xcXFwnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW4zMi5ub3JtYWxpemUoam9pbmVkKTtcclxufTtcclxuXHJcblxyXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxyXG4vLyBpdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gJ2Zyb20nIHRvICd0bycsIGZvciBpbnN0YW5jZTpcclxuLy8gZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xyXG4vLyB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xyXG4vLyBUaGUgb3V0cHV0IG9mIHRoZSBmdW5jdGlvbiBzaG91bGQgYmU6ICcuLlxcXFwuLlxcXFxpbXBsXFxcXGJiYidcclxud2luMzIucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gIGZyb20gPSB3aW4zMi5yZXNvbHZlKGZyb20pO1xyXG4gIHRvID0gd2luMzIucmVzb2x2ZSh0byk7XHJcblxyXG4gIC8vIHdpbmRvd3MgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgdmFyIGxvd2VyRnJvbSA9IGZyb20udG9Mb3dlckNhc2UoKTtcclxuICB2YXIgbG93ZXJUbyA9IHRvLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gIHZhciB0b1BhcnRzID0gdHJpbUFycmF5KHRvLnNwbGl0KCdcXFxcJykpO1xyXG5cclxuICB2YXIgbG93ZXJGcm9tUGFydHMgPSB0cmltQXJyYXkobG93ZXJGcm9tLnNwbGl0KCdcXFxcJykpO1xyXG4gIHZhciBsb3dlclRvUGFydHMgPSB0cmltQXJyYXkobG93ZXJUby5zcGxpdCgnXFxcXCcpKTtcclxuXHJcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGxvd2VyRnJvbVBhcnRzLmxlbmd0aCwgbG93ZXJUb1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAobG93ZXJGcm9tUGFydHNbaV0gIT09IGxvd2VyVG9QYXJ0c1tpXSkge1xyXG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzYW1lUGFydHNMZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGxvd2VyRnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xyXG4gIH1cclxuXHJcbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcclxuXHJcbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJ1xcXFwnKTtcclxufTtcclxuXHJcblxyXG53aW4zMi5fbWFrZUxvbmcgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgLy8gTm90ZTogdGhpcyB3aWxsICpwcm9iYWJseSogdGhyb3cgc29tZXdoZXJlLlxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoKSlcclxuICAgIHJldHVybiBwYXRoO1xyXG5cclxuICBpZiAoIXBhdGgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlZFBhdGggPSB3aW4zMi5yZXNvbHZlKHBhdGgpO1xyXG5cclxuICBpZiAoL15bYS16QS1aXVxcOlxcXFwvLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBsb2NhbCBmaWxlc3lzdGVtIHBhdGgsIHdoaWNoIG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgLy8gdG8gbG9uZyBVTkMgcGF0aC5cclxuICAgIHJldHVybiAnXFxcXFxcXFw/XFxcXCcgKyByZXNvbHZlZFBhdGg7XHJcbiAgfSBlbHNlIGlmICgvXlxcXFxcXFxcW14/Ll0vLnRlc3QocmVzb2x2ZWRQYXRoKSkge1xyXG4gICAgLy8gcGF0aCBpcyBuZXR3b3JrIFVOQyBwYXRoLCB3aGljaCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcclxuICAgIC8vIHRvIGxvbmcgVU5DIHBhdGguXHJcbiAgICByZXR1cm4gJ1xcXFxcXFxcP1xcXFxVTkNcXFxcJyArIHJlc29sdmVkUGF0aC5zdWJzdHJpbmcoMik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufTtcclxuXHJcblxyXG53aW4zMi5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHZhciByZXN1bHQgPSB3aW4zMlNwbGl0UGF0aChwYXRoKSxcclxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcclxuICAgICAgZGlyID0gcmVzdWx0WzFdO1xyXG5cclxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xyXG4gICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyXHJcbiAgICByZXR1cm4gJy4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpcikge1xyXG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcclxuICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvb3QgKyBkaXI7XHJcbn07XHJcblxyXG5cclxud2luMzIuYmFzZW5hbWUgPSBmdW5jdGlvbihwYXRoLCBleHQpIHtcclxuICB2YXIgZiA9IHdpbjMyU3BsaXRQYXRoKHBhdGgpWzJdO1xyXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBjb21wYXJpc29uIGNhc2UtaW5zZW5zaXRpdmUgb24gd2luZG93cz9cclxuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xyXG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiBmO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgcmV0dXJuIHdpbjMyU3BsaXRQYXRoKHBhdGgpWzNdO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLmZvcm1hdCA9IGZ1bmN0aW9uKHBhdGhPYmplY3QpIHtcclxuICBpZiAoIXV0aWwuaXNPYmplY3QocGF0aE9iamVjdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCJQYXJhbWV0ZXIgJ3BhdGhPYmplY3QnIG11c3QgYmUgYW4gb2JqZWN0LCBub3QgXCIgKyB0eXBlb2YgcGF0aE9iamVjdFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhciByb290ID0gcGF0aE9iamVjdC5yb290IHx8ICcnO1xyXG5cclxuICBpZiAoIXV0aWwuaXNTdHJpbmcocm9vdCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgXCIncGF0aE9iamVjdC5yb290JyBtdXN0IGJlIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgbm90IFwiICtcclxuICAgICAgICB0eXBlb2YgcGF0aE9iamVjdC5yb290XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpciA9IHBhdGhPYmplY3QuZGlyO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIGlmICghZGlyKSB7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcbiAgaWYgKGRpcltkaXIubGVuZ3RoIC0gMV0gPT09IHdpbjMyLnNlcCkge1xyXG4gICAgcmV0dXJuIGRpciArIGJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBkaXIgKyB3aW4zMi5zZXAgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbndpbjMyLnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByb290OiBhbGxQYXJ0c1swXSxcclxuICAgIGRpcjogYWxsUGFydHNbMF0gKyBhbGxQYXJ0c1sxXS5zbGljZSgwLCAtMSksXHJcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcclxuICAgIGV4dDogYWxsUGFydHNbM10sXHJcbiAgICBuYW1lOiBhbGxQYXJ0c1syXS5zbGljZSgwLCBhbGxQYXJ0c1syXS5sZW5ndGggLSBhbGxQYXJ0c1szXS5sZW5ndGgpXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG53aW4zMi5zZXAgPSAnXFxcXCc7XHJcbndpbjMyLmRlbGltaXRlciA9ICc7JztcclxuXHJcblxyXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxyXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxyXG52YXIgc3BsaXRQYXRoUmUgPVxyXG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XHJcbnZhciBwb3NpeCA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xyXG59XHJcblxyXG5cclxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4LnJlc29sdmUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXHJcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcclxuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XHJcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aFswXSA9PT0gJy8nO1xyXG4gIH1cclxuXHJcbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxyXG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XHJcbn07XHJcblxyXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxyXG4vLyBwb3NpeCB2ZXJzaW9uXHJcbnBvc2l4Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICB2YXIgaXNBYnNvbHV0ZSA9IHBvc2l4LmlzQWJzb2x1dGUocGF0aCksXHJcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBwYXRoICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJy8nO1xyXG5cclxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcclxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkocGF0aC5zcGxpdCgnLycpLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xyXG5cclxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcclxuICAgIHBhdGggPSAnLic7XHJcbiAgfVxyXG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcclxuICAgIHBhdGggKz0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcclxufTtcclxuXHJcbi8vIHBvc2l4IHZlcnNpb25cclxucG9zaXguam9pbiA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwYXRoID0gJyc7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBzZWdtZW50ID0gYXJndW1lbnRzW2ldO1xyXG4gICAgaWYgKCF1dGlsLmlzU3RyaW5nKHNlZ21lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgICBwYXRoICs9IHNlZ21lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aCArPSAnLycgKyBzZWdtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpeC5ub3JtYWxpemUocGF0aCk7XHJcbn07XHJcblxyXG5cclxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcclxuLy8gcG9zaXggdmVyc2lvblxyXG5wb3NpeC5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgZnJvbSA9IHBvc2l4LnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xyXG4gIHRvID0gcG9zaXgucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xyXG5cclxuICB2YXIgZnJvbVBhcnRzID0gdHJpbUFycmF5KGZyb20uc3BsaXQoJy8nKSk7XHJcbiAgdmFyIHRvUGFydHMgPSB0cmltQXJyYXkodG8uc3BsaXQoJy8nKSk7XHJcblxyXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XHJcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XHJcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG91dHB1dFBhcnRzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcclxuICB9XHJcblxyXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5cclxucG9zaXguX21ha2VMb25nID0gZnVuY3Rpb24ocGF0aCkge1xyXG4gIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LmRpcm5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XHJcbiAgdmFyIHJlc3VsdCA9IHBvc2l4U3BsaXRQYXRoKHBhdGgpLFxyXG4gICAgICByb290ID0gcmVzdWx0WzBdLFxyXG4gICAgICBkaXIgPSByZXN1bHRbMV07XHJcblxyXG4gIGlmICghcm9vdCAmJiAhZGlyKSB7XHJcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcclxuICAgIHJldHVybiAnLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlyKSB7XHJcbiAgICAvLyBJdCBoYXMgYSBkaXJuYW1lLCBzdHJpcCB0cmFpbGluZyBzbGFzaFxyXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdCArIGRpcjtcclxufTtcclxuXHJcblxyXG5wb3NpeC5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xyXG4gIHZhciBmID0gcG9zaXhTcGxpdFBhdGgocGF0aClbMl07XHJcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xyXG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XHJcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGY7XHJcbn07XHJcblxyXG5cclxucG9zaXguZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICByZXR1cm4gcG9zaXhTcGxpdFBhdGgocGF0aClbM107XHJcbn07XHJcblxyXG5cclxucG9zaXguZm9ybWF0ID0gZnVuY3Rpb24ocGF0aE9iamVjdCkge1xyXG4gIGlmICghdXRpbC5pc09iamVjdChwYXRoT2JqZWN0KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aE9iamVjdCcgbXVzdCBiZSBhbiBvYmplY3QsIG5vdCBcIiArIHR5cGVvZiBwYXRoT2JqZWN0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvb3QgPSBwYXRoT2JqZWN0LnJvb3QgfHwgJyc7XHJcblxyXG4gIGlmICghdXRpbC5pc1N0cmluZyhyb290KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIidwYXRoT2JqZWN0LnJvb3QnIG11c3QgYmUgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBub3QgXCIgK1xyXG4gICAgICAgIHR5cGVvZiBwYXRoT2JqZWN0LnJvb3RcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YXIgZGlyID0gcGF0aE9iamVjdC5kaXIgPyBwYXRoT2JqZWN0LmRpciArIHBvc2l4LnNlcCA6ICcnO1xyXG4gIHZhciBiYXNlID0gcGF0aE9iamVjdC5iYXNlIHx8ICcnO1xyXG4gIHJldHVybiBkaXIgKyBiYXNlO1xyXG59O1xyXG5cclxuXHJcbnBvc2l4LnBhcnNlID0gZnVuY3Rpb24ocGF0aFN0cmluZykge1xyXG4gIGlmICghdXRpbC5pc1N0cmluZyhwYXRoU3RyaW5nKSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xyXG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBwYXRoICdcIiArIHBhdGhTdHJpbmcgKyBcIidcIik7XHJcbiAgfVxyXG4gIGFsbFBhcnRzWzFdID0gYWxsUGFydHNbMV0gfHwgJyc7XHJcbiAgYWxsUGFydHNbMl0gPSBhbGxQYXJ0c1syXSB8fCAnJztcclxuICBhbGxQYXJ0c1szXSA9IGFsbFBhcnRzWzNdIHx8ICcnO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm9vdDogYWxsUGFydHNbMF0sXHJcbiAgICBkaXI6IGFsbFBhcnRzWzBdICsgYWxsUGFydHNbMV0uc2xpY2UoMCwgLTEpLFxyXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXHJcbiAgICBleHQ6IGFsbFBhcnRzWzNdLFxyXG4gICAgbmFtZTogYWxsUGFydHNbMl0uc2xpY2UoMCwgYWxsUGFydHNbMl0ubGVuZ3RoIC0gYWxsUGFydHNbM10ubGVuZ3RoKVxyXG4gIH07XHJcbn07XHJcblxyXG5cclxucG9zaXguc2VwID0gJy8nO1xyXG5wb3NpeC5kZWxpbWl0ZXIgPSAnOic7XHJcblxyXG5cclxuaWYgKGlzV2luZG93cylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyO1xyXG5lbHNlIC8qIHBvc2l4ICovXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBwb3NpeDtcclxuXHJcbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXg7XHJcbm1vZHVsZS5leHBvcnRzLndpbjMyID0gd2luMzI7XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInJlcXVpcmUoXCIuL2hlYWRlci50d2lnXCIpO1xuXG52YXIgdHdpZyA9IHJlcXVpcmUoXCJ0d2lnXCIpLnR3aWcsXG4gICAgdG9rZW5zID0gW3tcInR5cGVcIjpcImxvZ2ljXCIsXCJ0b2tlblwiOntcInR5cGVcIjpcIlR3aWcubG9naWMudHlwZS5pbmNsdWRlXCIsXCJvbmx5XCI6ZmFsc2UsXCJpZ25vcmVNaXNzaW5nXCI6ZmFsc2UsXCJzdGFja1wiOlt7XCJ0eXBlXCI6XCJUd2lnLmV4cHJlc3Npb24udHlwZS5zdHJpbmdcIixcInZhbHVlXCI6XCIkcmVzb2x2ZWQ6YTUwZTA0OTE2ZTc1YTI0YjI3NzFhOGNkYTllODZiYzlkN2JlYTMyNjU5ZTJjMzkyN2E2YTIzMGQ3N2E5ZGY5OGEwOTJiNTdlOGFjNTVlYmI2OGU4MTI1MmU1ZTY3NDRjOWM3MjkzOTJiNzdmMDRhNTBjZjM4MWQwOGEzMGY3NGU6aGVhZGVyLnR3aWdcIn1dLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoyOX19LFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoyOX19LHtcInR5cGVcIjpcInJhd1wiLFwidmFsdWVcIjpcIlxcclxcbjxmb290ZXI+dGhpcyBpcyBmb290ZXI8L2Zvb3Rlcj5cXHJcXG5cXHJcXG5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjI5LFwiZW5kXCI6Mjl9fV0sXG4gICAgdGVtcGxhdGUgPSB0d2lnKHtcImlkXCI6XCIkcmVzb2x2ZWQ6ZDJmOWNjZmQ0NDJiNDI1ZjQzYWUwYzVhNDVjZmYwZTA1MWQxNTBiODkzNWZiZGQ5OWUwOWQzZjU4ZjZkNzc3NTUxNWU2ZTk3ODMzZmE3YTBjZDBiY2Y1NDAyM2RhNDM3MjcyNTRlZjk2MWQyMDI5YTVjNDRlNmYzMGI3ODE4MGI6Zm9vdGVyLnR3aWdcIixcImRhdGFcIjpbe1widHlwZVwiOlwibG9naWNcIixcInRva2VuXCI6e1widHlwZVwiOlwiVHdpZy5sb2dpYy50eXBlLmluY2x1ZGVcIixcIm9ubHlcIjpmYWxzZSxcImlnbm9yZU1pc3NpbmdcIjpmYWxzZSxcInN0YWNrXCI6W3tcInR5cGVcIjpcIlR3aWcuZXhwcmVzc2lvbi50eXBlLnN0cmluZ1wiLFwidmFsdWVcIjpcIiRyZXNvbHZlZDphNTBlMDQ5MTZlNzVhMjRiMjc3MWE4Y2RhOWU4NmJjOWQ3YmVhMzI2NTllMmMzOTI3YTZhMjMwZDc3YTlkZjk4YTA5MmI1N2U4YWM1NWViYjY4ZTgxMjUyZTVlNjc0NGM5YzcyOTM5MmI3N2YwNGE1MGNmMzgxZDA4YTMwZjc0ZTpoZWFkZXIudHdpZ1wifV0sXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI5fX0sXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI5fX0se1widHlwZVwiOlwicmF3XCIsXCJ2YWx1ZVwiOlwiXFxyXFxuPGZvb3Rlcj50aGlzIGlzIGZvb3RlcjwvZm9vdGVyPlxcclxcblxcclxcblxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MjksXCJlbmRcIjoyOX19XSxcImFsbG93SW5saW5lSW5jbHVkZXNcIjp0cnVlLFwicmV0aHJvd1wiOnRydWV9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb250ZXh0KSB7IHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoY29udGV4dCk7IH1cblxubW9kdWxlLmV4cG9ydHMudG9rZW5zID0gdG9rZW5zOyIsInZhciB0d2lnID0gcmVxdWlyZShcInR3aWdcIikudHdpZyxcbiAgICB0b2tlbnMgPSBbe1widHlwZVwiOlwicmF3XCIsXCJ2YWx1ZVwiOlwiPGRpdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPGxpPtCeINCd0LDRgTwvbGk+XFxyXFxuICAgIDxsaT7QmtCw0YLQsNC70L7QszwvbGk+XFxyXFxuICAgIDxsaT7QmtC+0L3RgtCw0LrRgtGLPC9saT5cXHJcXG4gICAgPGxpPjwvbGk+XFxyXFxuICA8L3VsPlxcclxcbjwvZGl2PlxcclxcbiAgXFxyXFxuXCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MCxcImVuZFwiOjB9fV0sXG4gICAgdGVtcGxhdGUgPSB0d2lnKHtcImlkXCI6XCIkcmVzb2x2ZWQ6YTUwZTA0OTE2ZTc1YTI0YjI3NzFhOGNkYTllODZiYzlkN2JlYTMyNjU5ZTJjMzkyN2E2YTIzMGQ3N2E5ZGY5OGEwOTJiNTdlOGFjNTVlYmI2OGU4MTI1MmU1ZTY3NDRjOWM3MjkzOTJiNzdmMDRhNTBjZjM4MWQwOGEzMGY3NGU6aGVhZGVyLnR3aWdcIixcImRhdGFcIjpbe1widHlwZVwiOlwicmF3XCIsXCJ2YWx1ZVwiOlwiPGRpdj5cXHJcXG4gIDx1bD5cXHJcXG4gICAgPGxpPtCeINCd0LDRgTwvbGk+XFxyXFxuICAgIDxsaT7QmtCw0YLQsNC70L7QszwvbGk+XFxyXFxuICAgIDxsaT7QmtC+0L3RgtCw0LrRgtGLPC9saT5cXHJcXG4gICAgPGxpPjwvbGk+XFxyXFxuICA8L3VsPlxcclxcbjwvZGl2PlxcclxcbiAgXFxyXFxuXCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MCxcImVuZFwiOjB9fV0sXCJhbGxvd0lubGluZUluY2x1ZGVzXCI6dHJ1ZSxcInJldGhyb3dcIjp0cnVlfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udGV4dCkgeyByZXR1cm4gdGVtcGxhdGUucmVuZGVyKGNvbnRleHQpOyB9XG5cbm1vZHVsZS5leHBvcnRzLnRva2VucyA9IHRva2VuczsiLCJyZXF1aXJlKFwiLi9oZWFkZXIudHdpZ1wiKTtcblxudmFyIHR3aWcgPSByZXF1aXJlKFwidHdpZ1wiKS50d2lnLFxuICAgIHRva2VucyA9IFt7XCJ0eXBlXCI6XCJyYXdcIixcInZhbHVlXCI6XCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuPGhlYWQ+XFxyXFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxcclxcbjwvaGVhZD5cXHJcXG48Ym9keT5cXHJcXG4gIDxoZWFkZXI+XFxyXFxuICAgIFwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoyMDN9fSx7XCJ0eXBlXCI6XCJsb2dpY1wiLFwidG9rZW5cIjp7XCJ0eXBlXCI6XCJUd2lnLmxvZ2ljLnR5cGUuaW5jbHVkZVwiLFwib25seVwiOmZhbHNlLFwiaWdub3JlTWlzc2luZ1wiOmZhbHNlLFwic3RhY2tcIjpbe1widHlwZVwiOlwiVHdpZy5leHByZXNzaW9uLnR5cGUuc3RyaW5nXCIsXCJ2YWx1ZVwiOlwiJHJlc29sdmVkOmE1MGUwNDkxNmU3NWEyNGIyNzcxYThjZGE5ZTg2YmM5ZDdiZWEzMjY1OWUyYzM5MjdhNmEyMzBkNzdhOWRmOThhMDkyYjU3ZThhYzU1ZWJiNjhlODEyNTJlNWU2NzQ0YzljNzI5MzkyYjc3ZjA0YTUwY2YzODFkMDhhMzBmNzRlOmhlYWRlci50d2lnXCJ9XSxcInBvc2l0aW9uXCI6e1wic3RhcnRcIjoyMDMsXCJlbmRcIjoyMzJ9fSxcInBvc2l0aW9uXCI6e1wic3RhcnRcIjoyMDMsXCJlbmRcIjoyMzJ9fSx7XCJ0eXBlXCI6XCJyYXdcIixcInZhbHVlXCI6XCJcXHJcXG4gIDwvaGVhZGVyPlxcclxcbiAgPGRpdj5PTExPTE9MT0w8L2Rpdj5cXHJcXG4gIDxkaXY+YWRhc2RhYTwvZGl2PlxcclxcbiAgXCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MjMyLFwiZW5kXCI6Mjk1fX0se1widHlwZVwiOlwibG9naWNcIixcInRva2VuXCI6e1widHlwZVwiOlwiVHdpZy5sb2dpYy50eXBlLmJsb2NrXCIsXCJibG9ja05hbWVcIjpcImNvbnRlbnRcIixcInBvc2l0aW9uXCI6e1wic3RhcnRcIjoyOTUsXCJlbmRcIjozMTR9LFwib3V0cHV0XCI6W3tcInR5cGVcIjpcInJhd1wiLFwidmFsdWVcIjpcIlxcclxcbiAgICA8ZGl2PmJsb2NrIGNvbnRlbnQ8L2Rpdj5cXHJcXG4gIFwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjMxNCxcImVuZFwiOjM0OH19XX0sXCJwb3NpdGlvblwiOntcIm9wZW5cIjp7XCJzdGFydFwiOjI5NSxcImVuZFwiOjMxNH0sXCJjbG9zZVwiOntcInN0YXJ0XCI6MzQ4LFwiZW5kXCI6MzYyfX19LHtcInR5cGVcIjpcInJhd1wiLFwidmFsdWVcIjpcIlxcclxcbiAgXCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MzYyLFwiZW5kXCI6MzY2fX0se1widHlwZVwiOlwib3V0cHV0XCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MzY2LFwiZW5kXCI6Mzc2fSxcInN0YWNrXCI6W3tcInR5cGVcIjpcIlR3aWcuZXhwcmVzc2lvbi50eXBlLnN0cmluZ1wiLFwidmFsdWVcIjpcIjIyXCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MzY2LFwiZW5kXCI6Mzc2fX1dfSx7XCJ0eXBlXCI6XCJyYXdcIixcInZhbHVlXCI6XCJcXHJcXG4gIDxkaXY+PC9kaXY+XFxyXFxuICA8ZGl2IGlkPVxcXCJjb250ZW50XFxcIj5cIixcInBvc2l0aW9uXCI6e1wic3RhcnRcIjozNzYsXCJlbmRcIjo0MTN9fSx7XCJ0eXBlXCI6XCJsb2dpY1wiLFwidG9rZW5cIjp7XCJ0eXBlXCI6XCJUd2lnLmxvZ2ljLnR5cGUuYmxvY2tcIixcImJsb2NrTmFtZVwiOlwiY29udGVudFwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjQxMyxcImVuZFwiOjQzMn0sXCJvdXRwdXRcIjpbXX0sXCJwb3NpdGlvblwiOntcIm9wZW5cIjp7XCJzdGFydFwiOjQxMyxcImVuZFwiOjQzMn0sXCJjbG9zZVwiOntcInN0YXJ0XCI6NDMyLFwiZW5kXCI6NDQ2fX19LHtcInR5cGVcIjpcInJhd1wiLFwidmFsdWVcIjpcIjwvZGl2PlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6NDQ2LFwiZW5kXCI6NDQ2fX1dLFxuICAgIHRlbXBsYXRlID0gdHdpZyh7XCJpZFwiOlwiJHJlc29sdmVkOjgxYmM1YjU3NTc2NTg1ZGY4YWU5NzM3Mzc5ZTY2NjcyNzNmNDhkODliNzIyOTUwMmVhMzRlMTVmM2E3OGZhNTVkODI5YjQ2NWQ2NDVmYmQ5NzY4ZjI2NjYzYzdkYjFiY2U5Yzk4Zjg3YjQwNmUyMmMyMjU5ZTcyNzY3ZWI0MTU0OmluZGV4LnR3aWdcIixcImRhdGFcIjpbe1widHlwZVwiOlwicmF3XCIsXCJ2YWx1ZVwiOlwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbjxoZWFkPlxcclxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICA8aGVhZGVyPlxcclxcbiAgICBcIixcInBvc2l0aW9uXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjAzfX0se1widHlwZVwiOlwibG9naWNcIixcInRva2VuXCI6e1widHlwZVwiOlwiVHdpZy5sb2dpYy50eXBlLmluY2x1ZGVcIixcIm9ubHlcIjpmYWxzZSxcImlnbm9yZU1pc3NpbmdcIjpmYWxzZSxcInN0YWNrXCI6W3tcInR5cGVcIjpcIlR3aWcuZXhwcmVzc2lvbi50eXBlLnN0cmluZ1wiLFwidmFsdWVcIjpcIiRyZXNvbHZlZDphNTBlMDQ5MTZlNzVhMjRiMjc3MWE4Y2RhOWU4NmJjOWQ3YmVhMzI2NTllMmMzOTI3YTZhMjMwZDc3YTlkZjk4YTA5MmI1N2U4YWM1NWViYjY4ZTgxMjUyZTVlNjc0NGM5YzcyOTM5MmI3N2YwNGE1MGNmMzgxZDA4YTMwZjc0ZTpoZWFkZXIudHdpZ1wifV0sXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MjAzLFwiZW5kXCI6MjMyfX0sXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6MjAzLFwiZW5kXCI6MjMyfX0se1widHlwZVwiOlwicmF3XCIsXCJ2YWx1ZVwiOlwiXFxyXFxuICA8L2hlYWRlcj5cXHJcXG4gIDxkaXY+T0xMT0xPTE9MPC9kaXY+XFxyXFxuICA8ZGl2PmFkYXNkYWE8L2Rpdj5cXHJcXG4gIFwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjIzMixcImVuZFwiOjI5NX19LHtcInR5cGVcIjpcImxvZ2ljXCIsXCJ0b2tlblwiOntcInR5cGVcIjpcIlR3aWcubG9naWMudHlwZS5ibG9ja1wiLFwiYmxvY2tOYW1lXCI6XCJjb250ZW50XCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6Mjk1LFwiZW5kXCI6MzE0fSxcIm91dHB1dFwiOlt7XCJ0eXBlXCI6XCJyYXdcIixcInZhbHVlXCI6XCJcXHJcXG4gICAgPGRpdj5ibG9jayBjb250ZW50PC9kaXY+XFxyXFxuICBcIixcInBvc2l0aW9uXCI6e1wic3RhcnRcIjozMTQsXCJlbmRcIjozNDh9fV19LFwicG9zaXRpb25cIjp7XCJvcGVuXCI6e1wic3RhcnRcIjoyOTUsXCJlbmRcIjozMTR9LFwiY2xvc2VcIjp7XCJzdGFydFwiOjM0OCxcImVuZFwiOjM2Mn19fSx7XCJ0eXBlXCI6XCJyYXdcIixcInZhbHVlXCI6XCJcXHJcXG4gIFwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjM2MixcImVuZFwiOjM2Nn19LHtcInR5cGVcIjpcIm91dHB1dFwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjM2NixcImVuZFwiOjM3Nn0sXCJzdGFja1wiOlt7XCJ0eXBlXCI6XCJUd2lnLmV4cHJlc3Npb24udHlwZS5zdHJpbmdcIixcInZhbHVlXCI6XCIyMlwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjM2NixcImVuZFwiOjM3Nn19XX0se1widHlwZVwiOlwicmF3XCIsXCJ2YWx1ZVwiOlwiXFxyXFxuICA8ZGl2PjwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwiY29udGVudFxcXCI+XCIsXCJwb3NpdGlvblwiOntcInN0YXJ0XCI6Mzc2LFwiZW5kXCI6NDEzfX0se1widHlwZVwiOlwibG9naWNcIixcInRva2VuXCI6e1widHlwZVwiOlwiVHdpZy5sb2dpYy50eXBlLmJsb2NrXCIsXCJibG9ja05hbWVcIjpcImNvbnRlbnRcIixcInBvc2l0aW9uXCI6e1wic3RhcnRcIjo0MTMsXCJlbmRcIjo0MzJ9LFwib3V0cHV0XCI6W119LFwicG9zaXRpb25cIjp7XCJvcGVuXCI6e1wic3RhcnRcIjo0MTMsXCJlbmRcIjo0MzJ9LFwiY2xvc2VcIjp7XCJzdGFydFwiOjQzMixcImVuZFwiOjQ0Nn19fSx7XCJ0eXBlXCI6XCJyYXdcIixcInZhbHVlXCI6XCI8L2Rpdj5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiLFwicG9zaXRpb25cIjp7XCJzdGFydFwiOjQ0NixcImVuZFwiOjQ0Nn19XSxcImFsbG93SW5saW5lSW5jbHVkZXNcIjp0cnVlLFwicmV0aHJvd1wiOnRydWV9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb250ZXh0KSB7IHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoY29udGV4dCk7IH1cblxubW9kdWxlLmV4cG9ydHMudG9rZW5zID0gdG9rZW5zOyIsIi8vICMjIHR3aWcuYXN5bmMuanNcbi8vXG4vLyBUaGlzIGZpbGUgaGFuZGxlcyBhc3luY2hyb25vdXMgdGFza3Mgd2l0aGluIHR3aWcuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY29uc3QgU1RBVEVfVU5LTk9XTiA9IDA7XG4gICAgY29uc3QgU1RBVEVfUkVTT0xWRUQgPSAxO1xuICAgIGNvbnN0IFNUQVRFX1JFSkVDVEVEID0gMjtcblxuICAgIFR3aWcuUGFyc2VTdGF0ZS5wcm90b3R5cGUucGFyc2VBc3luYyA9IGZ1bmN0aW9uICh0b2tlbnMsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UodG9rZW5zLCBjb250ZXh0LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMgPSBmdW5jdGlvbiAodG9rZW5zLCBjb250ZXh0LCB0b2tlbnNBcmVQYXJhbWV0ZXJzKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlLmNhbGwoc3RhdGUsIHRva2VucywgY29udGV4dCwgdG9rZW5zQXJlUGFyYW1ldGVycywgdHJ1ZSk7XG4gICAgfTtcblxuICAgIFR3aWcubG9naWMucGFyc2VBc3luYyA9IGZ1bmN0aW9uICh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBUd2lnLmxvZ2ljLnBhcnNlLmNhbGwoc3RhdGUsIHRva2VuLCBjb250ZXh0LCBjaGFpbiwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIFR3aWcuVGVtcGxhdGUucHJvdG90eXBlLnJlbmRlckFzeW5jID0gZnVuY3Rpb24gKGNvbnRleHQsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoY29udGV4dCwgcGFyYW1zLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgVHdpZy5hc3luYyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGZvciBgdGhlbmFibGVgIG9iamVjdHNcbiAgICAgKi9cbiAgICBUd2lnLmlzUHJvbWlzZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoudGhlbiAmJiAodHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxpbmcgb2YgY29kZSBwYXRocyB0aGF0IG1pZ2h0IGVpdGhlciByZXR1cm4gYSBwcm9taXNlXG4gICAgICogb3IgYSB2YWx1ZSBkZXBlbmRpbmcgb24gd2hldGhlciBhc3luYyBjb2RlIGlzIHVzZWQuXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2lnanMvdHdpZy5qcy9ibG9iL21hc3Rlci9BU1lOQy5tZCNkZXRlY3RpbmctYXN5bmNocm9ub3VzLWJlaGF2aW91clxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHBvdGVudGlhbGx5QXN5bmNTbG93KHRoYXQsIGFsbG93QXN5bmMsIGFjdGlvbikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYWN0aW9uLmNhbGwodGhhdCk7XG4gICAgICAgIGxldCBlcnIgPSBudWxsO1xuICAgICAgICBsZXQgaXNBc3luYyA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFUd2lnLmlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICAgIGlzQXN5bmMgPSBmYWxzZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgZXJyID0gZXJyb3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignWW91IGFyZSB1c2luZyBUd2lnLmpzIGluIHN5bmMgbW9kZSBpbiBjb21iaW5hdGlvbiB3aXRoIGFzeW5jIGV4dGVuc2lvbnMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIFR3aWcuYXN5bmMucG90ZW50aWFsbHlBc3luYyA9IGZ1bmN0aW9uICh0aGF0LCBhbGxvd0FzeW5jLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFsbG93QXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBUd2lnLlByb21pc2UucmVzb2x2ZShhY3Rpb24uY2FsbCh0aGF0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG90ZW50aWFsbHlBc3luY1Nsb3codGhhdCwgYWxsb3dBc3luYywgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcnVuKGZuLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVuZGluZyhoYW5kbGVycywgb25SZXNvbHZlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBjb25zdCBoID0gW29uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQsIC0yXTtcblxuICAgICAgICAvLyBUaGUgcHJvbWlzZSBoYXMgeWV0IHRvIGJlIHJlamVjdGVkIG9yIHJlc29sdmVkLlxuICAgICAgICBpZiAoIWhhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IGg7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlcnNbMl0gPT09IC0yKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGFsbG9jYXRlIGFuIGFycmF5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGhhbmRsZXJzXG4gICAgICAgICAgICBoYW5kbGVycyA9IFtoYW5kbGVycywgaF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVycy5wdXNoKGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWxseSBzbWFsbCB0aGVuYWJsZSB0byByZXByZXNlbnQgcHJvbWlzZXMgdGhhdCByZXNvbHZlIGltbWVkaWF0ZWx5LlxuICAgICAqXG4gICAgICovXG4gICAgVHdpZy5UaGVuYWJsZSA9IGZ1bmN0aW9uICh0aGVuLCB2YWx1ZSwgc3RhdGUpIHtcbiAgICAgICAgdGhpcy50aGVuID0gdGhlbjtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBzdGF0ZSA/IHZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZSB8fCBTVEFURV9VTktOT1dOO1xuICAgIH07XG5cbiAgICBUd2lnLlRoZW5hYmxlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICAgIC8vIFRIZSBwcm9taXNlIHdpbGwgbm90IHRocm93LCBpdCBoYXMgYWxyZWFkeSByZXNvbHZlZC5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTVEFURV9SRVNPTFZFRCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRoZW5gIG1ldGhvZCBhdHRhY2hlZCB0byBhIFRoZW5hYmxlIHdoZW4gaXQgaGFzIHJlc29sdmVkLlxuICAgICAqXG4gICAgICovXG4gICAgVHdpZy5UaGVuYWJsZS5yZXNvbHZlZFRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcuUHJvbWlzZS5yZXNvbHZlKG9uUmVzb2x2ZWQodGhpcy5fdmFsdWUpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBUd2lnLlByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRoZW5gIG1ldGhvZCBhdHRhY2hlZCB0byBhIFRoZW5hYmxlIHdoZW4gaXQgaGFzIHJlamVjdGVkLlxuICAgICAqXG4gICAgICovXG4gICAgVHdpZy5UaGVuYWJsZS5yZWplY3RlZFRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgcmVqZWN0ZWQgdHdpZyBwcm9taXNlc1xuICAgICAgICBpZiAoIW9uUmVqZWN0ZWQgfHwgdHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl92YWx1ZTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gb25SZWplY3RlZCh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBUd2lnLlByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBUd2lnLlByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbHRlcm5hdGUgaW1wbGVtZW50YXRpb24gb2YgYSBQcm9taXNlIHRoYXQgZG9lcyBub3QgZnVsbHkgZm9sbG93XG4gICAgICogdGhlIHNwZWMsIGJ1dCBpbnN0ZWFkIHdvcmtzIGZ1bGx5IHN5bmNocm9ub3VzIHdoaWxlIHN0aWxsIGJlaW5nXG4gICAgICogdGhlbmFibGUuXG4gICAgICpcbiAgICAgKiBUaGVzZSBwcm9taXNlcyBjYW4gYmUgbWl4ZWQgd2l0aCByZWd1bGFyIHByb21pc2VzIGF0IHdoaWNoIHBvaW50XG4gICAgICogdGhlIHN5bmNocm9ub3VzIGJlaGF2aW91ciBpcyBsb3N0LlxuICAgICAqL1xuICAgIFR3aWcuUHJvbWlzZSA9IGZ1bmN0aW9uIChleGVjdXRvcikge1xuICAgICAgICBsZXQgc3RhdGUgPSBTVEFURV9VTktOT1dOO1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGxldCBjaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChuZXh0U3RhdGUsIG5leHRWYWx1ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBvblJlYWR5KHYpIHtcbiAgICAgICAgICAgIGNoYW5nZVN0YXRlKFNUQVRFX1JFU09MVkVELCB2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGUpIHtcbiAgICAgICAgICAgIGNoYW5nZVN0YXRlKFNUQVRFX1JFSkVDVEVELCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bihleGVjdXRvciwgb25SZWFkeSwgb25SZWplY3QpO1xuXG4gICAgICAgIC8vIElmIHRoZSBwcm9taXNlIHNldHRsZXMgcmlnaHQgYWZ0ZXIgcnVubmluZyB0aGUgZXhlY3V0b3Igd2UgY2FuXG4gICAgICAgIC8vIHJldHVybiBhIFByb21pc2Ugd2l0aCBpdCdzIHN0YXRlIGFscmVhZHkgc2V0LlxuICAgICAgICAvL1xuICAgICAgICAvLyBUd2lnLlByb21pc2UucmVzb2x2ZSBhbmQgVHdpZy5Qcm9taXNlLnJlamVjdCBib3RoIHVzZSB0aGUgbW9yZVxuICAgICAgICAvLyBlZmZpY2llbnQgYFR3aWcuVGhlbmFibGVgIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU1RBVEVfUkVTT0xWRUQpIHtcbiAgICAgICAgICAgIHJldHVybiBUd2lnLlByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUgPT09IFNUQVRFX1JFSkVDVEVEKSB7XG4gICAgICAgICAgICByZXR1cm4gVHdpZy5Qcm9taXNlLnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgbWFuYWdlZCB0byBnZXQgaGVyZSBvdXIgcHJvbWlzZSBpcyBnb2luZyB0byByZXNvbHZlIGFzeW5jaHJvbm91cy5cblxuICAgICAgICBjaGFuZ2VTdGF0ZSA9IG5ldyBUd2lnLkZ1bGxQcm9taXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIGNoYW5nZVN0YXRlLnByb21pc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb21pc2UgaW1wbGVtZW50YXRpb24gdGhhdCBjYW4gaGFuZGxlIGJlaW5nIHJlc29sdmVkIGF0IGFueSBsYXRlciB0aW1lLlxuICAgICAqXG4gICAgICovXG4gICAgVHdpZy5GdWxsUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0gbnVsbDtcblxuICAgICAgICAvLyBUaGUgc3RhdGUgaGFzIGJlZW4gY2hhbmdlZCB0byBlaXRoZXIgcmVzb2x2ZSwgb3IgcmVqZWN0XG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIHdlIHNob3VsZCBjYWxsIHRoZSBoYW5kbGVyLlxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlZChvblJlc29sdmVkKSB7XG4gICAgICAgICAgICBvblJlc29sdmVkKHAuX3ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKG9uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIG9uUmVqZWN0ZWQocC5fdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFwcGVuZCA9IGZ1bmN0aW9uIChvblJlc29sdmVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IHBlbmRpbmcoaGFuZGxlcnMsIG9uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVN0YXRlKG5ld1N0YXRlLCB2KSB7XG4gICAgICAgICAgICBpZiAocC5fc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAuX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHAuX3N0YXRlID0gbmV3U3RhdGU7XG5cbiAgICAgICAgICAgIGFwcGVuZCA9IG5ld1N0YXRlID09PSBTVEFURV9SRVNPTFZFRCA/IHJlc29sdmVkIDogcmVqZWN0ZWQ7XG5cbiAgICAgICAgICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1syXSA9PT0gLTIpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmQoaGFuZGxlcnNbMF0sIGhhbmRsZXJzWzFdKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGggPT4ge1xuICAgICAgICAgICAgICAgIGFwcGVuZChoWzBdLCBoWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGFuZGxlcnMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcCA9IG5ldyBUd2lnLlRoZW5hYmxlKChvblJlc29sdmVkLCBvblJlamVjdGVkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNSZXNvbHZlZCA9IHR5cGVvZiBvblJlc29sdmVkID09PSAnZnVuY3Rpb24nO1xuXG4gICAgICAgICAgICAvLyBTaG9ydGN1dCBmb3IgcmVzb2x2ZWQgdHdpZyBwcm9taXNlc1xuICAgICAgICAgICAgaWYgKHAuX3N0YXRlID09PSBTVEFURV9SRVNPTFZFRCAmJiAhaGFzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5Qcm9taXNlLnJlc29sdmUocC5fdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocC5fc3RhdGUgPT09IFNUQVRFX1JFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuUHJvbWlzZS5yZXNvbHZlKG9uUmVzb2x2ZWQocC5fdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5Qcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBoYXNSZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFR3aWcuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICBoYXNSZXNvbHZlZCA/IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob25SZXNvbHZlZChyZXN1bHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSA6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgIGhhc1JlamVjdGVkID8gZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvblJlamVjdGVkKGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IDogcmVqZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGFuZ2VTdGF0ZS5wcm9taXNlID0gcDtcblxuICAgICAgICByZXR1cm4gY2hhbmdlU3RhdGU7XG4gICAgfTtcblxuICAgIFR3aWcuUHJvbWlzZS5kZWZhdWx0UmVzb2x2ZWQgPSBuZXcgVHdpZy5UaGVuYWJsZShUd2lnLlRoZW5hYmxlLnJlc29sdmVkVGhlbiwgdW5kZWZpbmVkLCBTVEFURV9SRVNPTFZFRCk7XG4gICAgVHdpZy5Qcm9taXNlLmVtcHR5U3RyaW5nUmVzb2x2ZWQgPSBuZXcgVHdpZy5UaGVuYWJsZShUd2lnLlRoZW5hYmxlLnJlc29sdmVkVGhlbiwgJycsIFNUQVRFX1JFU09MVkVEKTtcblxuICAgIFR3aWcuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBUd2lnLlByb21pc2UuZGVmYXVsdFJlc29sdmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFR3aWcuaXNQcm9taXNlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHdpZyBvZnRlbiByZXNvbHZlcyB3aXRoIGFuIGVtcHR5IHN0cmluZywgd2Ugb3B0aW1pemUgZm9yIHRoaXNcbiAgICAgICAgLy8gc2NlbmFyaW8gYnkgcmV0dXJuaW5nIGEgZml4ZWQgcHJvbWlzZS4gVGhpcyByZWR1Y2VzIHRoZSBsb2FkIG9uXG4gICAgICAgIC8vIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcuUHJvbWlzZS5lbXB0eVN0cmluZ1Jlc29sdmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUd2lnLlRoZW5hYmxlKFR3aWcuVGhlbmFibGUucmVzb2x2ZWRUaGVuLCB2YWx1ZSwgU1RBVEVfUkVTT0xWRUQpO1xuICAgIH07XG5cbiAgICBUd2lnLlByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gYGVgIHNob3VsZCBuZXZlciBiZSBhIHByb21pc2UuXG4gICAgICAgIHJldHVybiBuZXcgVHdpZy5UaGVuYWJsZShUd2lnLlRoZW5hYmxlLnJlamVjdGVkVGhlbiwgZSwgU1RBVEVfUkVKRUNURUQpO1xuICAgIH07XG5cbiAgICBUd2lnLlByb21pc2UuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXkocHJvbWlzZXMubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gVHdpZy5hc3luYy5mb3JFYWNoKHByb21pc2VzLCAocCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghVHdpZy5pc1Byb21pc2UocCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocC5fc3RhdGUgPT09IFNUQVRFX1JFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSBwLl92YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwLnRoZW4odiA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdvIG92ZXIgZWFjaCBpdGVtIGluIGEgZmFzaGlvbiBjb21wYXRpYmxlIHdpdGggVHdpZy5mb3JFYWNoLFxuICAgICogYWxsb3cgdGhlIGZ1bmN0aW9uIHRvIHJldHVybiBhIHByb21pc2Ugb3IgY2FsbCB0aGUgdGhpcmQgYXJndW1lbnRcbiAgICAqIHRvIHNpZ25hbCBpdCBpcyBmaW5pc2hlZC5cbiAgICAqXG4gICAgKiBFYWNoIGl0ZW0gaW4gdGhlIGFycmF5IHdpbGwgYmUgY2FsbGVkIHNlcXVlbnRpYWxseS5cbiAgICAqL1xuICAgIFR3aWcuYXN5bmMuZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IGFyciA/IGFyci5sZW5ndGggOiAwO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBsZXQgcmVzcCA9IG51bGw7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5Qcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNwID0gY2FsbGJhY2soYXJyW2luZGV4XSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgICAgIC8vIFdoaWxlIHRoZSByZXN1bHQgb2YgdGhlIGNhbGxiYWNrIGlzIG5vdCBhIHByb21pc2Ugb3IgaXQgaXNcbiAgICAgICAgICAgIC8vIGEgcHJvbWlzZSB0aGF0IGhhcyBzZXR0bGVkIHdlIGNhbiB1c2UgYSByZWd1bGFyIGxvb3Agd2hpY2hcbiAgICAgICAgICAgIC8vIGlzIG11Y2ggZmFzdGVyLlxuICAgICAgICAgICAgfSB3aGlsZSAoIXJlc3AgfHwgIVR3aWcuaXNQcm9taXNlKHJlc3ApIHx8IHJlc3AuX3N0YXRlID09PSBTVEFURV9SRVNPTFZFRCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwLnRoZW4obmV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdpZztcbn07XG4iLCIvLyAjIyB0d2lnLmNvbXBpbGVyLmpzXG4vL1xuLy8gVGhpcyBmaWxlIGhhbmRsZXMgY29tcGlsaW5nIHRlbXBsYXRlcyBpbnRvIEpTXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgLyoqXG4gICAgICogTmFtZXNwYWNlIGZvciBjb21waWxhdGlvbi5cbiAgICAgKi9cbiAgICBUd2lnLmNvbXBpbGVyID0ge1xuICAgICAgICBtb2R1bGU6IHt9XG4gICAgfTtcblxuICAgIC8vIENvbXBpbGUgYSBUd2lnIFRlbXBsYXRlIHRvIG91dHB1dC5cbiAgICBUd2lnLmNvbXBpbGVyLmNvbXBpbGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gR2V0IHRva2Vuc1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBKU09OLnN0cmluZ2lmeSh0ZW1wbGF0ZS50b2tlbnMpO1xuICAgICAgICBjb25zdCB7aWR9ID0gdGVtcGxhdGU7XG4gICAgICAgIGxldCBvdXRwdXQgPSBudWxsO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFR3aWcuY29tcGlsZXIubW9kdWxlW29wdGlvbnMubW9kdWxlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ1VuYWJsZSB0byBmaW5kIG1vZHVsZSB0eXBlICcgKyBvcHRpb25zLm1vZHVsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IFR3aWcuY29tcGlsZXIubW9kdWxlW29wdGlvbnMubW9kdWxlXShpZCwgdG9rZW5zLCBvcHRpb25zLnR3aWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0ID0gVHdpZy5jb21waWxlci53cmFwKGlkLCB0b2tlbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgVHdpZy5jb21waWxlci5tb2R1bGUgPSB7XG4gICAgICAgIGFtZChpZCwgdG9rZW5zLCBwYXRoVG9Ud2lnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RlZmluZShbXCInICsgcGF0aFRvVHdpZyArICdcIl0sIGZ1bmN0aW9uIChUd2lnKSB7XFxuXFx0dmFyIHR3aWcsIHRlbXBsYXRlcztcXG50d2lnID0gVHdpZy50d2lnO1xcbnRlbXBsYXRlcyA9ICcgKyBUd2lnLmNvbXBpbGVyLndyYXAoaWQsIHRva2VucykgKyAnXFxuXFx0cmV0dXJuIHRlbXBsYXRlcztcXG59KTsnO1xuICAgICAgICB9LFxuICAgICAgICBub2RlKGlkLCB0b2tlbnMpIHtcbiAgICAgICAgICAgIHJldHVybiAndmFyIHR3aWcgPSByZXF1aXJlKFwidHdpZ1wiKS50d2lnO1xcbmV4cG9ydHMudGVtcGxhdGUgPSAnICsgVHdpZy5jb21waWxlci53cmFwKGlkLCB0b2tlbnMpO1xuICAgICAgICB9LFxuICAgICAgICBjanMyKGlkLCB0b2tlbnMsIHBhdGhUb1R3aWcpIHtcbiAgICAgICAgICAgIHJldHVybiAnbW9kdWxlLmRlY2xhcmUoW3sgdHdpZzogXCInICsgcGF0aFRvVHdpZyArICdcIiB9XSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xcblxcdHZhciB0d2lnID0gcmVxdWlyZShcInR3aWdcIikudHdpZztcXG5cXHRleHBvcnRzLnRlbXBsYXRlID0gJyArIFR3aWcuY29tcGlsZXIud3JhcChpZCwgdG9rZW5zKSArICdcXG59KTsnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3aWcuY29tcGlsZXIud3JhcCA9IGZ1bmN0aW9uIChpZCwgdG9rZW5zKSB7XG4gICAgICAgIHJldHVybiAndHdpZyh7aWQ6XCInICsgaWQucmVwbGFjZSgnXCInLCAnXFxcXFwiJykgKyAnXCIsIGRhdGE6JyArIHRva2VucyArICcsIHByZWNvbXBpbGVkOiB0cnVlfSk7XFxuJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3aWc7XG59O1xuIiwiLy8gIyMgdHdpZy5jb3JlLmpzXG4vL1xuLy8gVGhpcyBmaWxlIGhhbmRsZXMgdGVtcGxhdGUgbGV2ZWwgdG9rZW5pemluZywgY29tcGlsaW5nIGFuZCBwYXJzaW5nLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVHdpZykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIFR3aWcudHJhY2UgPSBmYWxzZTtcbiAgICBUd2lnLmRlYnVnID0gZmFsc2U7XG5cbiAgICAvLyBEZWZhdWx0IGNhY2hpbmcgdG8gdHJ1ZSBmb3IgdGhlIGltcHJvdmVkIHBlcmZvcm1hbmNlIGl0IG9mZmVyc1xuICAgIFR3aWcuY2FjaGUgPSB0cnVlO1xuXG4gICAgVHdpZy5ub29wID0gZnVuY3Rpb24gKCkge307XG5cbiAgICBUd2lnLm1lcmdlID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBvbmx5Q2hhbmdlZCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChvbmx5Q2hhbmdlZCAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeGNlcHRpb24gdGhyb3duIGJ5IHR3aWcuanMuXG4gICAgICovXG4gICAgVHdpZy5FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBmaWxlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9ICdUd2lnRXhjZXB0aW9uJztcbiAgICAgICAgdGhpcy50eXBlID0gJ1R3aWdFeGNlcHRpb24nO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIFR3aWcgZXJyb3IuXG4gICAgICovXG4gICAgVHdpZy5FcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMubmFtZSArICc6ICcgKyB0aGlzLm1lc3NhZ2U7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3IgbG9nZ2luZyB0byB0aGUgY29uc29sZS5cbiAgICAgKi9cbiAgICBUd2lnLmxvZyA9IHtcbiAgICAgICAgdHJhY2UoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKFR3aWcudHJhY2UgJiYgY29uc29sZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVidWcoLi4uYXJncykge1xuICAgICAgICAgICAgaWYgKFR3aWcuZGVidWcgJiYgY29uc29sZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIFR3aWcubG9nLmVycm9yID0gZnVuY3Rpb24gKCkge307XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZS5lcnJvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgVHdpZy5sb2cuZXJyb3IgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgVHdpZy5sb2cuZXJyb3IgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udGFpbmVyIGZvciBtZXRob2RzIHJlbGF0ZWQgdG8gaGFuZGxpbmcgaGlnaCBsZXZlbCB0ZW1wbGF0ZSB0b2tlbnNcbiAgICAgKiAgICAgIChmb3IgZXhhbXBsZToge3sgZXhwcmVzc2lvbiB9fSwgeyUgbG9naWMgJX0sIHsjIGNvbW1lbnQgI30sIHJhdyBkYXRhKVxuICAgICAqL1xuICAgIFR3aWcudG9rZW4gPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRva2VuIHR5cGVzLlxuICAgICAqL1xuICAgIFR3aWcudG9rZW4udHlwZSA9IHtcbiAgICAgICAgb3V0cHV0OiAnb3V0cHV0JyxcbiAgICAgICAgbG9naWM6ICdsb2dpYycsXG4gICAgICAgIGNvbW1lbnQ6ICdjb21tZW50JyxcbiAgICAgICAgcmF3OiAncmF3JyxcbiAgICAgICAgb3V0cHV0V2hpdGVzcGFjZVByZTogJ291dHB1dF93aGl0ZXNwYWNlX3ByZScsXG4gICAgICAgIG91dHB1dFdoaXRlc3BhY2VQb3N0OiAnb3V0cHV0X3doaXRlc3BhY2VfcG9zdCcsXG4gICAgICAgIG91dHB1dFdoaXRlc3BhY2VCb3RoOiAnb3V0cHV0X3doaXRlc3BhY2VfYm90aCcsXG4gICAgICAgIGxvZ2ljV2hpdGVzcGFjZVByZTogJ2xvZ2ljX3doaXRlc3BhY2VfcHJlJyxcbiAgICAgICAgbG9naWNXaGl0ZXNwYWNlUG9zdDogJ2xvZ2ljX3doaXRlc3BhY2VfcG9zdCcsXG4gICAgICAgIGxvZ2ljV2hpdGVzcGFjZUJvdGg6ICdsb2dpY193aGl0ZXNwYWNlX2JvdGgnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRva2VuIHN5bnRheCBkZWZpbml0aW9ucy5cbiAgICAgKi9cbiAgICBUd2lnLnRva2VuLmRlZmluaXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUucmF3LFxuICAgICAgICAgICAgb3BlbjogJ3slIHJhdyAlfScsXG4gICAgICAgICAgICBjbG9zZTogJ3slIGVuZHJhdyAlfSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogVHdpZy50b2tlbi50eXBlLnJhdyxcbiAgICAgICAgICAgIG9wZW46ICd7JSB2ZXJiYXRpbSAlfScsXG4gICAgICAgICAgICBjbG9zZTogJ3slIGVuZHZlcmJhdGltICV9J1xuICAgICAgICB9LFxuICAgICAgICAvLyAqV2hpdGVzcGFjZSB0eXBlIHRva2VucypcbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlc2UgdHlwaWNhbGx5IHRha2UgdGhlIGZvcm0gYHt7LSBleHByZXNzaW9uIC19fWAgb3IgYHt7LSBleHByZXNzaW9uIH19YCBvciBge3sgZXhwcmVzc2lvbiAtfX1gLlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZVByZSxcbiAgICAgICAgICAgIG9wZW46ICd7ey0nLFxuICAgICAgICAgICAgY2xvc2U6ICd9fSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogVHdpZy50b2tlbi50eXBlLm91dHB1dFdoaXRlc3BhY2VQb3N0LFxuICAgICAgICAgICAgb3BlbjogJ3t7JyxcbiAgICAgICAgICAgIGNsb3NlOiAnLX19J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZUJvdGgsXG4gICAgICAgICAgICBvcGVuOiAne3stJyxcbiAgICAgICAgICAgIGNsb3NlOiAnLX19J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUubG9naWNXaGl0ZXNwYWNlUHJlLFxuICAgICAgICAgICAgb3BlbjogJ3slLScsXG4gICAgICAgICAgICBjbG9zZTogJyV9J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUubG9naWNXaGl0ZXNwYWNlUG9zdCxcbiAgICAgICAgICAgIG9wZW46ICd7JScsXG4gICAgICAgICAgICBjbG9zZTogJy0lfSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogVHdpZy50b2tlbi50eXBlLmxvZ2ljV2hpdGVzcGFjZUJvdGgsXG4gICAgICAgICAgICBvcGVuOiAneyUtJyxcbiAgICAgICAgICAgIGNsb3NlOiAnLSV9J1xuICAgICAgICB9LFxuICAgICAgICAvLyAqT3V0cHV0IHR5cGUgdG9rZW5zKlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGVzZSB0eXBpY2FsbHkgdGFrZSB0aGUgZm9ybSBge3sgZXhwcmVzc2lvbiB9fWAuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFR3aWcudG9rZW4udHlwZS5vdXRwdXQsXG4gICAgICAgICAgICBvcGVuOiAne3snLFxuICAgICAgICAgICAgY2xvc2U6ICd9fSdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gKkxvZ2ljIHR5cGUgdG9rZW5zKlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGVzZSB0eXBpY2FsbHkgdGFrZSBhIGZvcm0gbGlrZSBgeyUgaWYgZXhwcmVzc2lvbiAlfWAgb3IgYHslIGVuZGlmICV9YFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUubG9naWMsXG4gICAgICAgICAgICBvcGVuOiAneyUnLFxuICAgICAgICAgICAgY2xvc2U6ICclfSdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gKkNvbW1lbnQgdHlwZSB0b2tlbnMqXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZXNlIHRha2UgdGhlIGZvcm0gYHsjIGFueXRoaW5nICN9YFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUuY29tbWVudCxcbiAgICAgICAgICAgIG9wZW46ICd7IycsXG4gICAgICAgICAgICBjbG9zZTogJyN9J1xuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8qKlxuICAgICAqIFdoYXQgY2hhcmFjdGVycyBzdGFydCBcInN0cmluZ3NcIiBpbiB0b2tlbiBkZWZpbml0aW9ucy4gV2UgbmVlZCB0aGlzIHRvIGlnbm9yZSB0b2tlbiBjbG9zZVxuICAgICAqIHN0cmluZ3MgaW5zaWRlIGFuIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgVHdpZy50b2tlbi5zdHJpbmdzID0gWydcIicsICdcXCcnXTtcblxuICAgIFR3aWcudG9rZW4uZmluZFN0YXJ0ID0gZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgZGVmOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBjbG9zZVBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgY29uc3QgbGVuID0gVHdpZy50b2tlbi5kZWZpbml0aW9ucy5sZW5ndGg7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdG9rZW5UZW1wbGF0ZTtcbiAgICAgICAgbGV0IGZpcnN0S2V5UG9zaXRpb247XG4gICAgICAgIGxldCBjbG9zZUtleVBvc2l0aW9uO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdG9rZW5UZW1wbGF0ZSA9IFR3aWcudG9rZW4uZGVmaW5pdGlvbnNbaV07XG4gICAgICAgICAgICBmaXJzdEtleVBvc2l0aW9uID0gdGVtcGxhdGUuaW5kZXhPZih0b2tlblRlbXBsYXRlLm9wZW4pO1xuICAgICAgICAgICAgY2xvc2VLZXlQb3NpdGlvbiA9IHRlbXBsYXRlLmluZGV4T2YodG9rZW5UZW1wbGF0ZS5jbG9zZSk7XG5cbiAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLnRva2VuLmZpbmRTdGFydDogJywgJ1NlYXJjaGluZyBmb3IgJywgdG9rZW5UZW1wbGF0ZS5vcGVuLCAnIGZvdW5kIGF0ICcsIGZpcnN0S2V5UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciBtaXNtYXRjaGVkIHRva2Vuc1xuICAgICAgICAgICAgaWYgKGZpcnN0S2V5UG9zaXRpb24gPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgdG9rZW4gbWF0Y2hlcyB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5UZW1wbGF0ZS5vcGVuLmxlbmd0aCAhPT0gdG9rZW5UZW1wbGF0ZS5jbG9zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB0b2tlbiBoYXMgbWlzbWF0Y2hlZCBjbG9zaW5nIGFuZCBvcGVuaW5nIHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlS2V5UG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRva2VuJ3MgY2xvc2luZyB0YWcgZG9lcyBub3QgbWF0Y2ggdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvZXMgdGhpcyB0b2tlbiBvY2N1ciBiZWZvcmUgYW55IG90aGVyIHR5cGVzP1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RLZXlQb3NpdGlvbiA+PSAwICYmIChvdXRwdXQucG9zaXRpb24gPT09IG51bGwgfHwgZmlyc3RLZXlQb3NpdGlvbiA8IG91dHB1dC5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucG9zaXRpb24gPSBmaXJzdEtleVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIG91dHB1dC5kZWYgPSB0b2tlblRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGNsb3NlUG9zaXRpb24gPSBjbG9zZUtleVBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJzdEtleVBvc2l0aW9uID49IDAgJiYgb3V0cHV0LnBvc2l0aW9uICE9PSBudWxsICYmIGZpcnN0S2V5UG9zaXRpb24gPT09IG91dHB1dC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIC8qIFRoaXMgdG9rZW4gZXhhY3RseSBtYXRjaGVzIGFub3RoZXIgdG9rZW4sXG4gICAgICAgICAgICAgICAgZ3JlZWRpbHkgbWF0Y2ggdG8gY2hlY2sgaWYgdGhpcyB0b2tlbiBoYXMgYSBncmVhdGVyIHNwZWNpZmljaXR5ICovXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuVGVtcGxhdGUub3Blbi5sZW5ndGggPiBvdXRwdXQuZGVmLm9wZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgdG9rZW4ncyBvcGVuaW5nIHRhZyBpcyBtb3JlIHNwZWNpZmljIHRoYW4gdGhlIHByZXZpb3VzIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wb3NpdGlvbiA9IGZpcnN0S2V5UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5kZWYgPSB0b2tlblRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvc2l0aW9uID0gY2xvc2VLZXlQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuVGVtcGxhdGUub3Blbi5sZW5ndGggPT09IG91dHB1dC5kZWYub3Blbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuVGVtcGxhdGUuY2xvc2UubGVuZ3RoID4gb3V0cHV0LmRlZi5jbG9zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgdG9rZW4ncyBvcGVuaW5nIHRhZyBpcyBhcyBzcGVjaWZpYyBhcyB0aGUgcHJldmlvdXMgbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgdGhlIGNsb3NpbmcgdGFnIGhhcyBncmVhdGVyIHNwZWNpZmljaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VLZXlQb3NpdGlvbiA+PSAwICYmIGNsb3NlS2V5UG9zaXRpb24gPCBjbG9zZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB0b2tlbidzIGNsb3NpbmcgdGFnIGV4aXN0cyBpbiB0aGUgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGl0IG9jY3VycyBzb29uZXIgdGhhbiB0aGUgcHJldmlvdXMgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucG9zaXRpb24gPSBmaXJzdEtleVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5kZWYgPSB0b2tlblRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9zaXRpb24gPSBjbG9zZUtleVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlS2V5UG9zaXRpb24gPj0gMCAmJiBjbG9zZUtleVBvc2l0aW9uIDwgY2xvc2VQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB0b2tlbidzIGNsb3NpbmcgdGFnIGlzIG5vdCBtb3JlIHNwZWNpZmljIHRoYW4gdGhlIHByZXZpb3VzIG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGl0IG9jY3VycyBzb29uZXIgdGhhbiB0aGUgcHJldmlvdXMgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wb3NpdGlvbiA9IGZpcnN0S2V5UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuZGVmID0gdG9rZW5UZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9zaXRpb24gPSBjbG9zZUtleVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgVHdpZy50b2tlbi5maW5kRW5kID0gZnVuY3Rpb24gKHRlbXBsYXRlLCB0b2tlbkRlZiwgc3RhcnQpIHtcbiAgICAgICAgbGV0IGVuZCA9IG51bGw7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICAvLyBTdHJpbmcgcG9zaXRpb24gdmFyaWFibGVzXG4gICAgICAgIGxldCBzdHJQb3MgPSBudWxsO1xuICAgICAgICBsZXQgc3RyRm91bmQgPSBudWxsO1xuICAgICAgICBsZXQgcG9zID0gbnVsbDtcbiAgICAgICAgbGV0IGVuZE9mZnNldCA9IG51bGw7XG4gICAgICAgIGxldCB0aGlzU3RyUG9zID0gbnVsbDtcbiAgICAgICAgbGV0IGVuZFN0clBvcyA9IG51bGw7XG5cbiAgICAgICAgLy8gRm9yIGxvb3AgdmFyaWFibGVzXG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgbDtcblxuICAgICAgICB3aGlsZSAoIWZvdW5kKSB7XG4gICAgICAgICAgICBzdHJQb3MgPSBudWxsO1xuICAgICAgICAgICAgc3RyRm91bmQgPSBudWxsO1xuICAgICAgICAgICAgcG9zID0gdGVtcGxhdGUuaW5kZXhPZih0b2tlbkRlZi5jbG9zZSwgb2Zmc2V0KTtcblxuICAgICAgICAgICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gcG9zO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgYW4gZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ1VuYWJsZSB0byBmaW5kIGNsb3NpbmcgYnJhY2tldCBcXCcnICsgdG9rZW5EZWYuY2xvc2UgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFwnIG9wZW5lZCBuZWFyIHRlbXBsYXRlIHBvc2l0aW9uICcgKyBzdGFydCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElnbm9yZSBxdW90ZXMgd2l0aGluIGNvbW1lbnRzOyBqdXN0IGxvb2sgZm9yIHRoZSBuZXh0IGNvbW1lbnQgY2xvc2Ugc2VxdWVuY2UsXG4gICAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgY29tZXMgYmVmb3JlIGl0LiBodHRwczovL2dpdGh1Yi5jb20vanVzdGpvaG4vdHdpZy5qcy9pc3N1ZXMvOTVcbiAgICAgICAgICAgIGlmICh0b2tlbkRlZi50eXBlID09PSBUd2lnLnRva2VuLnR5cGUuY29tbWVudCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWdub3JlIHF1b3RlcyB3aXRoaW4gcmF3IHRhZ1xuICAgICAgICAgICAgLy8gRml4ZXMgIzI4M1xuXG4gICAgICAgICAgICBpZiAodG9rZW5EZWYudHlwZSA9PT0gVHdpZy50b2tlbi50eXBlLnJhdykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsID0gVHdpZy50b2tlbi5zdHJpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzU3RyUG9zID0gdGVtcGxhdGUuaW5kZXhPZihUd2lnLnRva2VuLnN0cmluZ3NbaV0sIG9mZnNldCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpc1N0clBvcyA+IDAgJiYgdGhpc1N0clBvcyA8IHBvcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0clBvcyA9PT0gbnVsbCB8fCB0aGlzU3RyUG9zIDwgc3RyUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJQb3MgPSB0aGlzU3RyUG9zO1xuICAgICAgICAgICAgICAgICAgICBzdHJGb3VuZCA9IFR3aWcudG9rZW4uc3RyaW5nc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgc3RyaW5nIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSB0b2tlbiwgbm93IGZpbmQgdGhlIHN0cmluZydzIGVuZCBhbmQgc2V0IHRoZSBzZWFyY2ggb2Zmc2V0IHRvIGl0XG4gICAgICAgICAgICBpZiAoc3RyUG9zICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gc3RyUG9zICsgMTtcbiAgICAgICAgICAgICAgICBlbmQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgICAgICBlbmRTdHJQb3MgPSB0ZW1wbGF0ZS5pbmRleE9mKHN0ckZvdW5kLCBlbmRPZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kU3RyUG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHdpZy5FcnJvcignVW5jbG9zZWQgc3RyaW5nIGluIHRlbXBsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGVzY2FwZWQgcXVvdGVzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLnNsaWNlKGVuZFN0clBvcyAtIDEsIGVuZFN0clBvcykgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gZW5kU3RyUG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVuZFN0clBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSB0ZW1wbGF0ZSBpbnRvIGhpZ2gtbGV2ZWwgdG9rZW5zLlxuICAgICAqL1xuICAgIFR3aWcudG9rZW5pemUgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgICAgIC8vIEFuIG9mZnNldCBmb3IgcmVwb3J0aW5nIGVycm9ycyBsb2NhdGlvbnMgYW5kIHRoZSBwb3NpdGlvbiBvZiB0aGUgbm9kZXMgaW4gdGhlIHRlbXBsYXRlLlxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gMDtcbiAgICAgICAgLy8gVGhlIHN0YXJ0IGFuZCB0eXBlIG9mIHRoZSBmaXJzdCB0b2tlbiBmb3VuZCBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgIGxldCBmb3VuZFRva2VuID0gbnVsbDtcbiAgICAgICAgLy8gVGhlIGVuZCBwb3NpdGlvbiBvZiB0aGUgbWF0Y2hlZCB0b2tlbi5cbiAgICAgICAgbGV0IGVuZCA9IG51bGw7XG5cbiAgICAgICAgd2hpbGUgKHRlbXBsYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IG9jY3VyYW5jZSBvZiBhbnkgdG9rZW4gdHlwZSBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgIGZvdW5kVG9rZW4gPSBUd2lnLnRva2VuLmZpbmRTdGFydCh0ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLnRva2VuaXplOiAnLCAnRm91bmQgdG9rZW46ICcsIGZvdW5kVG9rZW4pO1xuXG4gICAgICAgICAgICBpZiAoZm91bmRUb2tlbi5wb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIE5vIG1vcmUgdG9rZW5zIC0+IGFkZCB0aGUgcmVzdCBvZiB0aGUgdGVtcGxhdGUgYXMgYSByYXctdHlwZSB0b2tlblxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy50b2tlbi50eXBlLnJhdyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGN1cnJlbnRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogY3VycmVudFBvc2l0aW9uICsgZm91bmRUb2tlbi5wb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgcmF3IHR5cGUgdG9rZW4gZm9yIGFueXRoaW5nIGJlZm9yZSB0aGUgc3RhcnQgb2YgdGhlIHRva2VuXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kVG9rZW4ucG9zaXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFR3aWcudG9rZW4udHlwZS5yYXcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZm91bmRUb2tlbi5wb3NpdGlvbikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogY3VycmVudFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogY3VycmVudFBvc2l0aW9uICsgTWF0aC5tYXgoMCwgZm91bmRUb2tlbi5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5zbGljZShmb3VuZFRva2VuLnBvc2l0aW9uICsgZm91bmRUb2tlbi5kZWYub3Blbi5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiArPSBmb3VuZFRva2VuLnBvc2l0aW9uICsgZm91bmRUb2tlbi5kZWYub3Blbi5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBlbmQgb2YgdGhlIHRva2VuXG4gICAgICAgICAgICAgICAgZW5kID0gVHdpZy50b2tlbi5maW5kRW5kKHRlbXBsYXRlLCBmb3VuZFRva2VuLmRlZiwgY3VycmVudFBvc2l0aW9uKTtcblxuICAgICAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLnRva2VuaXplOiAnLCAnVG9rZW4gZW5kcyBhdCAnLCBlbmQpO1xuXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmb3VuZFRva2VuLmRlZi50eXBlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVtcGxhdGUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZW5kKSkudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGN1cnJlbnRQb3NpdGlvbiAtIGZvdW5kVG9rZW4uZGVmLm9wZW4ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBjdXJyZW50UG9zaXRpb24gKyBlbmQgKyBmb3VuZFRva2VuLmRlZi5jbG9zZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLnNsaWNlKGVuZCArIGZvdW5kVG9rZW4uZGVmLmNsb3NlLmxlbmd0aCwgZW5kICsgZm91bmRUb2tlbi5kZWYuY2xvc2UubGVuZ3RoICsgMSkgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZm91bmRUb2tlbi5kZWYudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbG9naWNfd2hpdGVzcGFjZV9wcmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbG9naWNfd2hpdGVzcGFjZV9wb3N0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ2ljX3doaXRlc3BhY2VfYm90aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsb2dpYyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV3bGluZXMgZGlyZWN0bHkgYWZ0ZXIgbG9naWMgdG9rZW5zIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5zbGljZShlbmQgKyBmb3VuZFRva2VuLmRlZi5jbG9zZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBwb3NpdGlvbiBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gKz0gZW5kICsgZm91bmRUb2tlbi5kZWYuY2xvc2UubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9O1xuXG4gICAgVHdpZy5jb21waWxlID0gZnVuY3Rpb24gKHRva2Vucykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIE91dHB1dCBhbmQgaW50ZXJtZWRpYXRlIHN0YWNrc1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAgICAgLy8gVGhlIHRva2VucyBiZXR3ZWVuIG9wZW4gYW5kIGNsb3NlIHRhZ3NcbiAgICAgICAgICAgIGxldCBpbnRlcm1lZGlhdGVPdXRwdXQgPSBbXTtcblxuICAgICAgICAgICAgbGV0IHRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBsb2dpY1Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB1bmNsb3NlZFRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSBwcmV2aW91cyB0b2tlbi5cbiAgICAgICAgICAgIGxldCBwcmV2VG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHByZXZpb3VzIG91dHB1dC5cbiAgICAgICAgICAgIGxldCBwcmV2T3V0cHV0ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFRlbXBvcmFyeSBwcmV2aW91cyBpbnRlcm1lZGlhdGUgb3V0cHV0LlxuICAgICAgICAgICAgbGV0IHByZXZJbnRlcm1lZGlhdGVPdXRwdXQgPSBudWxsO1xuICAgICAgICAgICAgLy8gVGhlIHByZXZpb3VzIHRva2VuJ3MgdGVtcGxhdGVcbiAgICAgICAgICAgIGxldCBwcmV2VGVtcGxhdGUgPSBudWxsO1xuICAgICAgICAgICAgLy8gVG9rZW4gbG9va2FoZWFkXG4gICAgICAgICAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFRoZSBvdXRwdXQgdG9rZW5cbiAgICAgICAgICAgIGxldCB0b2tPdXRwdXQgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMb2dpYyBUb2tlbiB2YWx1ZXNcbiAgICAgICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBvcGVuID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgY29tcGlsZU91dHB1dCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi5jb21waWxlLmNhbGwoc2VsZiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZU91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY29tcGlsZUxvZ2ljID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcGlsZSB0aGUgbG9naWMgdG9rZW5cbiAgICAgICAgICAgICAgICBsb2dpY1Rva2VuID0gVHdpZy5sb2dpYy5jb21waWxlLmNhbGwoc2VsZiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvZ2ljVG9rZW4ucG9zaXRpb24gPSB0b2tlbi5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSBsb2dpY1Rva2VuLnR5cGU7XG4gICAgICAgICAgICAgICAgb3BlbiA9IFR3aWcubG9naWMuaGFuZGxlclt0eXBlXS5vcGVuO1xuICAgICAgICAgICAgICAgIG5leHQgPSBUd2lnLmxvZ2ljLmhhbmRsZXJbdHlwZV0ubmV4dDtcblxuICAgICAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmNvbXBpbGU6ICcsICdDb21waWxlZCBsb2dpYyB0b2tlbiB0byAnLCBsb2dpY1Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAnIG5leHQgaXM6ICcsIG5leHQsICcgb3BlbiBpcyA6ICcsIG9wZW4pO1xuXG4gICAgICAgICAgICAgICAgLy8gTm90IGEgc3RhbmRhbG9uZSB0b2tlbiwgY2hlY2sgbG9naWMgc3RhY2sgdG8gc2VlIGlmIHRoaXMgaXMgZXhwZWN0ZWRcbiAgICAgICAgICAgICAgICBpZiAob3BlbiAhPT0gdW5kZWZpbmVkICYmICFvcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2VGVtcGxhdGUgPSBUd2lnLmxvZ2ljLmhhbmRsZXJbcHJldlRva2VuLnR5cGVdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldlRlbXBsYXRlLm5leHQuaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0eXBlICsgJyBub3QgZXhwZWN0ZWQgYWZ0ZXIgYSAnICsgcHJldlRva2VuLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldlRva2VuLm91dHB1dCA9IHByZXZUb2tlbi5vdXRwdXQgfHwgW107XG5cbiAgICAgICAgICAgICAgICAgICAgcHJldlRva2VuLm91dHB1dCA9IHByZXZUb2tlbi5vdXRwdXQuY29uY2F0KGludGVybWVkaWF0ZU91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZU91dHB1dCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRva091dHB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFR3aWcudG9rZW4udHlwZS5sb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBwcmV2VG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IHByZXZUb2tlbi5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogdG9rZW4ucG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlT3V0cHV0LnB1c2godG9rT3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva091dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIHRva2VuIHJlcXVpcmVzIGFkZGl0aW9uYWwgdG9rZW5zIHRvIGNvbXBsZXRlIHRoZSBsb2dpYyBzdHJ1Y3R1cmUuXG4gICAgICAgICAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCAmJiBuZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVHdpZy5sb2cudHJhY2UoJ1R3aWcuY29tcGlsZTogJywgJ1B1c2hpbmcgJywgbG9naWNUb2tlbiwgJyB0byBsb2dpYyBzdGFjay4nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHV0IGFueSBjdXJyZW50bHkgaGVsZCBvdXRwdXQgaW50byB0aGUgb3V0cHV0IGxpc3Qgb2YgdGhlIGxvZ2ljIG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgYXQgdGhlIGhlYWQgb2YgdGhlIHN0YWNrIGJlZm9yZSB3ZSBwdXNoIGEgbmV3IG9uZSBvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlRva2VuLm91dHB1dCA9IHByZXZUb2tlbi5vdXRwdXQgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VG9rZW4ub3V0cHV0ID0gcHJldlRva2VuLm91dHB1dC5jb25jYXQoaW50ZXJtZWRpYXRlT3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocHJldlRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZU91dHB1dCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHVzaCB0aGUgbmV3IGxvZ2ljIHRva2VuIG9udG8gdGhlIGxvZ2ljIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobG9naWNUb2tlbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVuICE9PSB1bmRlZmluZWQgJiYgb3Blbikge1xuICAgICAgICAgICAgICAgICAgICB0b2tPdXRwdXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLnRva2VuLnR5cGUubG9naWMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogbG9naWNUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBsb2dpY1Rva2VuLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YW5kYWxvbmUgdG9rZW4gKGxpa2UgeyUgc2V0IC4uLiAlfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlT3V0cHV0LnB1c2godG9rT3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva091dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHByZXZPdXRwdXQgPSBvdXRwdXRbb3V0cHV0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHByZXZJbnRlcm1lZGlhdGVPdXRwdXQgPSBpbnRlcm1lZGlhdGVPdXRwdXRbaW50ZXJtZWRpYXRlT3V0cHV0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIG5leHRUb2tlbiA9IHRva2Vuc1swXTtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZy50cmFjZSgnQ29tcGlsaW5nIHRva2VuICcsIHRva2VuKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUucmF3OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVPdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUubG9naWM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21waWxlTG9naWMuY2FsbChzZWxmLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLCBjb21tZW50cyBzaG91bGQgYmUgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5jb21tZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGlsZU91dHB1dC5jYWxsKHNlbGYsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEtpbGwgd2hpdGVzcGFjZSBhaGVhZCBhbmQgYmVoaW5kIHRoaXMgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUubG9naWNXaGl0ZXNwYWNlUHJlOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5sb2dpY1doaXRlc3BhY2VQb3N0OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5sb2dpY1doaXRlc3BhY2VCb3RoOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5vdXRwdXRXaGl0ZXNwYWNlUHJlOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5vdXRwdXRXaGl0ZXNwYWNlUG9zdDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZUJvdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gVHdpZy50b2tlbi50eXBlLm91dHB1dFdoaXRlc3BhY2VQb3N0ICYmIHRva2VuLnR5cGUgIT09IFR3aWcudG9rZW4udHlwZS5sb2dpY1doaXRlc3BhY2VQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByZXZpb3VzIG91dHB1dCBpcyByYXcsIHBvcCBpdCBvZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZPdXRwdXQudHlwZSA9PT0gVHdpZy50b2tlbi50eXBlLnJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2T3V0cHV0LnZhbHVlID0gcHJldk91dHB1dC52YWx1ZS50cmltRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXB1c2ggdGhlIHByZXZpb3VzIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gocHJldk91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldkludGVybWVkaWF0ZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgaW50ZXJtZWRpYXRlIG91dHB1dCBpcyByYXcsIHBvcCBpdCBvZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZJbnRlcm1lZGlhdGVPdXRwdXQudHlwZSA9PT0gVHdpZy50b2tlbi50eXBlLnJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlT3V0cHV0LnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2SW50ZXJtZWRpYXRlT3V0cHV0LnZhbHVlID0gcHJldkludGVybWVkaWF0ZU91dHB1dC52YWx1ZS50cmltRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXB1c2ggdGhlIHByZXZpb3VzIGludGVybWVkaWF0ZSBvdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZU91dHB1dC5wdXNoKHByZXZJbnRlcm1lZGlhdGVPdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21waWxlIHRoaXMgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVHdpZy50b2tlbi50eXBlLm91dHB1dFdoaXRlc3BhY2VQcmU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZVBvc3Q6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZUJvdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBpbGVPdXRwdXQuY2FsbChzZWxmLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVHdpZy50b2tlbi50eXBlLmxvZ2ljV2hpdGVzcGFjZVByZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5sb2dpY1doaXRlc3BhY2VQb3N0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVHdpZy50b2tlbi50eXBlLmxvZ2ljV2hpdGVzcGFjZUJvdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBpbGVMb2dpYy5jYWxsKHNlbGYsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50eXBlICE9PSBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZVByZSAmJiB0b2tlbi50eXBlICE9PSBUd2lnLnRva2VuLnR5cGUubG9naWNXaGl0ZXNwYWNlUHJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbmV4dCB0b2tlbiBpcyByYXcsIHNoaWZ0IGl0IG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFRva2VuLnR5cGUgPT09IFR3aWcudG9rZW4udHlwZS5yYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VG9rZW4udmFsdWUgPSBuZXh0VG9rZW4udmFsdWUudHJpbVN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbnNoaWZ0IHRoZSBuZXh0IHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMudW5zaGlmdChuZXh0VG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmNvbXBpbGU6ICcsICcgT3V0cHV0OiAnLCBvdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICcgTG9naWMgU3RhY2s6ICcsIHN0YWNrLFxuICAgICAgICAgICAgICAgICAgICAnIFBlbmRpbmcgT3V0cHV0OiAnLCBpbnRlcm1lZGlhdGVPdXRwdXRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWZXJpZnkgdGhhdCB0aGVyZSBhcmUgbm8gbG9naWMgdG9rZW5zIGxlZnQgaW4gdGhlIHN0YWNrLlxuICAgICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB1bmNsb3NlZFRva2VuID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmluZCBhbiBlbmQgdGFnIGZvciAnICsgdW5jbG9zZWRUb2tlbi50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgZXhwZWN0aW5nIG9uZSBvZiAnICsgdW5jbG9zZWRUb2tlbi5uZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMucmV0aHJvdykge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci50eXBlID09PSAnVHdpZ0V4Y2VwdGlvbicgJiYgIWVycm9yLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuZmlsZSA9IHNlbGYuaWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFR3aWcubG9nLmVycm9yKCdFcnJvciBjb21waWxpbmcgdHdpZyB0ZW1wbGF0ZSAnICsgc2VsZi5pZCArICc6ICcpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICBUd2lnLmxvZy5lcnJvcihlcnJvci5zdGFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVHdpZy5sb2cuZXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihzdGF0ZSwgZXgpIHtcbiAgICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlLm9wdGlvbnMucmV0aHJvdykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBleCA9IG5ldyBUd2lnLkVycm9yKGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4LnR5cGUgPT09ICdUd2lnRXhjZXB0aW9uJyAmJiAhZXguZmlsZSkge1xuICAgICAgICAgICAgICAgIGV4LmZpbGUgPSBzdGF0ZS50ZW1wbGF0ZS5pZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUd2lnLmxvZy5lcnJvcignRXJyb3IgcGFyc2luZyB0d2lnIHRlbXBsYXRlICcgKyBzdGF0ZS50ZW1wbGF0ZS5pZCArICc6ICcpO1xuICAgICAgICAgICAgaWYgKGV4LnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgVHdpZy5sb2cuZXJyb3IoZXguc3RhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZy5lcnJvcihleC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcuZGVidWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRva2VuaXplIGFuZCBjb21waWxlIGEgc3RyaW5nIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgVGhlIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9IFRoZSBjb21waWxlZCB0b2tlbnMuXG4gICAgICovXG4gICAgVHdpZy5wcmVwYXJlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gVG9rZW5pemVcbiAgICAgICAgVHdpZy5sb2cuZGVidWcoJ1R3aWcucHJlcGFyZTogJywgJ1Rva2VuaXppbmcgJywgZGF0YSk7XG4gICAgICAgIGNvbnN0IHJhd1Rva2VucyA9IFR3aWcudG9rZW5pemUuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgICAgICAvLyBDb21waWxlXG4gICAgICAgIFR3aWcubG9nLmRlYnVnKCdUd2lnLnByZXBhcmU6ICcsICdDb21waWxpbmcgJywgcmF3VG9rZW5zKTtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gVHdpZy5jb21waWxlLmNhbGwodGhpcywgcmF3VG9rZW5zKTtcblxuICAgICAgICBUd2lnLmxvZy5kZWJ1ZygnVHdpZy5wcmVwYXJlOiAnLCAnQ29tcGlsZWQgJywgdG9rZW5zKTtcblxuICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBKb2luIHRoZSBvdXRwdXQgdG9rZW4ncyBzdGFjayBhbmQgZXNjYXBlIGl0IGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gT3V0cHV0IHRva2VuJ3Mgc3RhY2tcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xTdHJpbmd9IEF1dG9lc2NhcGVkIG91dHB1dFxuICAgICAqL1xuICAgIFR3aWcub3V0cHV0ID0gZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICBjb25zdCB7YXV0b2VzY2FwZX0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKCFhdXRvZXNjYXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSAodHlwZW9mIGF1dG9lc2NhcGUgPT09ICdzdHJpbmcnKSA/IGF1dG9lc2NhcGUgOiAnaHRtbCc7XG5cbiAgICAgICAgY29uc3QgZXNjYXBlZE91dHB1dCA9IG91dHB1dC5tYXAoc3RyID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdHIgJiZcbiAgICAgICAgICAgICAgICAoc3RyLnR3aWdNYXJrdXAgIT09IHRydWUgJiYgc3RyLnR3aWdNYXJrdXAgIT09IHN0cmF0ZWd5KSAmJlxuICAgICAgICAgICAgICAgICEoc3RyYXRlZ3kgPT09ICdodG1sJyAmJiBzdHIudHdpZ01hcmt1cCA9PT0gJ2h0bWxfYXR0cicpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBUd2lnLmZpbHRlcnMuZXNjYXBlKHN0ciwgW3N0cmF0ZWd5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlc2NhcGVkT3V0cHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgam9pbmVkT3V0cHV0ID0gZXNjYXBlZE91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgaWYgKGpvaW5lZE91dHB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVHdpZy5NYXJrdXAoam9pbmVkT3V0cHV0LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLy8gTmFtZXNwYWNlIGZvciB0ZW1wbGF0ZSBzdG9yYWdlIGFuZCByZXRyaWV2YWxcbiAgICBUd2lnLlRlbXBsYXRlcyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyZWQgdGVtcGxhdGUgbG9hZGVycyAtIHVzZSBUd2lnLlRlbXBsYXRlcy5yZWdpc3RlckxvYWRlciB0byBhZGQgc3VwcG9ydGVkIGxvYWRlcnNcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIGxvYWRlcnM6IHt9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcmVkIHRlbXBsYXRlIHBhcnNlcnMgLSB1c2UgVHdpZy5UZW1wbGF0ZXMucmVnaXN0ZXJQYXJzZXIgdG8gYWRkIHN1cHBvcnRlZCBwYXJzZXJzXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBwYXJzZXJzOiB7fSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGVkIC8gbG9hZGVkIHRlbXBsYXRlc1xuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0cnk6IHt9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIElzIHRoaXMgaWQgdmFsaWQgZm9yIGEgdHdpZyB0ZW1wbGF0ZT9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgdG8gY2hlY2suXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIHtUd2lnLkVycm9yfSBJZiB0aGUgSUQgaXMgaW52YWxpZCBvciB1c2VkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIElEIGlzIHZhbGlkLlxuICAgICAqL1xuICAgIFR3aWcudmFsaWRhdGVJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoaWQgPT09ICdwcm90b3R5cGUnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcihpZCArICcgaXMgbm90IGEgdmFsaWQgdHdpZyBpZGVudGlmaWVyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoVHdpZy5jYWNoZSAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChUd2lnLlRlbXBsYXRlcy5yZWdpc3RyeSwgaWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVGhlcmUgaXMgYWxyZWFkeSBhIHRlbXBsYXRlIHdpdGggdGhlIElEICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSB0ZW1wbGF0ZSBsb2FkZXJcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogVHdpZy5leHRlbmQoZnVuY3Rpb24gKFR3aWcpIHtcbiAgICAgKiAgICBUd2lnLlRlbXBsYXRlcy5yZWdpc3RlckxvYWRlcignY3VzdG9tX2xvYWRlcicsIGZ1bmN0aW9uIChsb2NhdGlvbiwgcGFyYW1zLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAqICAgICAgICAvLyAuLi4gbG9hZCB0aGUgdGVtcGxhdGUgLi4uXG4gICAgICogICAgICAgIHBhcmFtcy5kYXRhID0gbG9hZGVkVGVtcGxhdGVEYXRhO1xuICAgICAqICAgICAgICAvLyBjcmVhdGUgYW5kIHJldHVybiB0aGUgdGVtcGxhdGVcbiAgICAgKiAgICAgICAgdmFyIHRlbXBsYXRlID0gbmV3IFR3aWcuVGVtcGxhdGUocGFyYW1zKTtcbiAgICAgKiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAqICAgICAgICAgICAgY2FsbGJhY2sodGVtcGxhdGUpO1xuICAgICAqICAgICAgICB9XG4gICAgICogICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgKiAgICB9KTtcbiAgICAgKiB9KTtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIFRoZSBtZXRob2QgdGhpcyBsb2FkZXIgaXMgaW50ZW5kZWQgZm9yIChhamF4LCBmcylcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbG9hZGluZyB0aGUgdGVtcGxhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHx1bmRlZmluZWR9IHNjb3BlIE9wdGlvbmFsIHNjb3BlIHBhcmFtZXRlciB0byBiaW5kIGZ1bmMgdG9cbiAgICAgKlxuICAgICAqIEB0aHJvd3MgVHdpZy5FcnJvclxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBUd2lnLlRlbXBsYXRlcy5yZWdpc3RlckxvYWRlciA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBmdW5jLCBzY29wZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gYWRkIGxvYWRlciBmb3IgJyArIG1ldGhvZE5hbWUgKyAnOiBJbnZhbGlkIGZ1bmN0aW9uIHJlZmVyZW5jZSBnaXZlbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY29wZSkge1xuICAgICAgICAgICAgZnVuYyA9IGZ1bmMuYmluZChzY29wZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRlcnNbbWV0aG9kTmFtZV0gPSBmdW5jO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSByZWdpc3RlcmVkIGxvYWRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG1ldGhvZCBuYW1lIGZvciB0aGUgbG9hZGVyIHlvdSB3aXNoIHRvIHJlbW92ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBUd2lnLlRlbXBsYXRlcy51blJlZ2lzdGVyTG9hZGVyID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdpc3RlcmVkTG9hZGVyKG1ldGhvZE5hbWUpKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sb2FkZXJzW21ldGhvZE5hbWVdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlZSBpZiBhIGxvYWRlciBpcyByZWdpc3RlcmVkIGJ5IGl0cyBtZXRob2QgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGxvYWRlciB5b3UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIFR3aWcuVGVtcGxhdGVzLmlzUmVnaXN0ZXJlZExvYWRlciA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmxvYWRlcnMsIG1ldGhvZE5hbWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIHRlbXBsYXRlIHBhcnNlclxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBUd2lnLmV4dGVuZChmdW5jdGlvbiAoVHdpZykge1xuICAgICAqICAgIFR3aWcuVGVtcGxhdGVzLnJlZ2lzdGVyUGFyc2VyKCdjdXN0b21fcGFyc2VyJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAqICAgICAgICAvLyB0aGlzIHRlbXBsYXRlIHNvdXJjZSBjYW4gYmUgYWNjZXNzZWQgaW4gcGFyYW1zLmRhdGFcbiAgICAgKiAgICAgICAgdmFyIHRlbXBsYXRlID0gcGFyYW1zLmRhdGFcbiAgICAgKlxuICAgICAqICAgICAgICAvLyAuLi4gY3VzdG9tIHByb2Nlc3MgdGhhdCBtb2RpZmllcyB0aGUgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqICAgICAgICAvLyByZXR1cm4gdGhlIHBhcnNlZCB0ZW1wbGF0ZVxuICAgICAqICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICogICAgfSk7XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbWV0aG9kIHRoaXMgcGFyc2VyIGlzIGludGVuZGVkIGZvciAodHdpZywgc291cmNlKVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBwYXJzaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fHVuZGVmaW5lZH0gc2NvcGUgT3B0aW9uYWwgc2NvcGUgcGFyYW1ldGVyIHRvIGJpbmQgZnVuYyB0b1xuICAgICAqXG4gICAgICogQHRocm93cyBUd2lnLkVycm9yXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFR3aWcuVGVtcGxhdGVzLnJlZ2lzdGVyUGFyc2VyID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGZ1bmMsIHNjb3BlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ1VuYWJsZSB0byBhZGQgcGFyc2VyIGZvciAnICsgbWV0aG9kTmFtZSArICc6IEludmFsaWQgZnVuY3Rpb24gcmVnZXJlbmNlIGdpdmVuLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuYy5iaW5kKHNjb3BlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFyc2Vyc1ttZXRob2ROYW1lXSA9IGZ1bmM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHJlZ2lzdGVyZWQgcGFyc2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbWV0aG9kIG5hbWUgZm9yIHRoZSBwYXJzZXIgeW91IHdpc2ggdG8gcmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIFR3aWcuVGVtcGxhdGVzLnVuUmVnaXN0ZXJQYXJzZXIgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc1JlZ2lzdGVyZWRQYXJzZXIobWV0aG9kTmFtZSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBhcnNlcnNbbWV0aG9kTmFtZV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VlIGlmIGEgcGFyc2VyIGlzIHJlZ2lzdGVyZWQgYnkgaXRzIG1ldGhvZCBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgcGFyc2VyIHlvdSBhcmUgbG9va2luZyBmb3JcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgVHdpZy5UZW1wbGF0ZXMuaXNSZWdpc3RlcmVkUGFyc2VyID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMucGFyc2VycywgbWV0aG9kTmFtZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNhdmUgYSB0ZW1wbGF0ZSBvYmplY3QgdG8gdGhlIHN0b3JlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUd2lnLlRlbXBsYXRlfSB0ZW1wbGF0ZSAgIFRoZSB0d2lnLmpzIHRlbXBsYXRlIHRvIHN0b3JlLlxuICAgICAqL1xuICAgIFR3aWcuVGVtcGxhdGVzLnNhdmUgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gc2F2ZSB0ZW1wbGF0ZSB3aXRoIG5vIGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBUd2lnLlRlbXBsYXRlcy5yZWdpc3RyeVt0ZW1wbGF0ZS5pZF0gPSB0ZW1wbGF0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIHByZXZpb3VzbHkgc2F2ZWQgdGVtcGxhdGUgZnJvbSB0aGUgc3RvcmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgICBUaGUgSUQgb2YgdGhlIHRlbXBsYXRlIHRvIGxvYWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtUd2lnLlRlbXBsYXRlfSBBIHR3aWcuanMgdGVtcGxhdGUgc3RvcmVkIHdpdGggdGhlIHByb3ZpZGVkIElELlxuICAgICAqL1xuICAgIFR3aWcuVGVtcGxhdGVzLmxvYWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChUd2lnLlRlbXBsYXRlcy5yZWdpc3RyeSwgaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBUd2lnLlRlbXBsYXRlcy5yZWdpc3RyeVtpZF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIExvYWQgYSB0ZW1wbGF0ZSBmcm9tIGEgcmVtb3RlIGxvY2F0aW9uIHVzaW5nIEFKQVggYW5kIHNhdmVzIGluIHdpdGggdGhlIGdpdmVuIElELlxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIHBhcmFtZXRlcnM6XG4gICAgICpcbiAgICAgKiAgICAgIGFzeW5jOiAgICAgICBTaG91bGQgdGhlIEhUVFAgcmVxdWVzdCBiZSBwZXJmb3JtZWQgYXN5bmNocm9ub3VzbHkuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgKiAgICAgIG1ldGhvZDogICAgICBXaGF0IG1ldGhvZCBzaG91bGQgYmUgdXNlZCB0byBsb2FkIHRoZSB0ZW1wbGF0ZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIChmcyBvciBhamF4KVxuICAgICAqICAgICAgcGFyc2VyOiAgICAgIFdoYXQgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHRvIHBhcnNlIHRoZSB0ZW1wbGF0ZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICh0d2lnIG9yIHNvdXJjZSlcbiAgICAgKiAgICAgIHByZWNvbXBpbGVkOiBIYXMgdGhlIHRlbXBsYXRlIGFscmVhZHkgYmVlbiBjb21waWxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiAgVGhlIHJlbW90ZSBVUkwgdG8gbG9hZCBhcyBhIHRlbXBsYXRlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgVGhlIHRlbXBsYXRlIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgIEEgY2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gdGhlIHRlbXBsYXRlIGZpbmlzaGVzIGxvYWRpbmcuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3JDYWxsYmFjayAgQSBjYWxsYmFjayB0cmlnZ2VyZWQgaWYgYW4gZXJyb3Igb2NjdXJzIGxvYWRpbmcgdGhlIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICpcbiAgICAgKi9cbiAgICBUd2lnLlRlbXBsYXRlcy5sb2FkUmVtb3RlID0gZnVuY3Rpb24gKGxvY2F0aW9uLCBwYXJhbXMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIFVSTCBzbyB0aGUgdGVtcGxhdGUgaXMgY2FjaGVkLlxuICAgICAgICBjb25zdCBpZCA9IHR5cGVvZiBwYXJhbXMuaWQgPT09ICd1bmRlZmluZWQnID8gbG9jYXRpb24gOiBwYXJhbXMuaWQ7XG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IFR3aWcuVGVtcGxhdGVzLnJlZ2lzdHJ5W2lkXTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgZXhpc3RpbmcgdGVtcGxhdGVcbiAgICAgICAgaWYgKFR3aWcuY2FjaGUgJiYgdHlwZW9mIGNhY2hlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEEgdGVtcGxhdGUgaXMgYWxyZWFkeSBzYXZlZCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjYWNoZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogaWYgYXN5bmMsIHJldHVybiBkZWZlcnJlZCBwcm9taXNlXG5cbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgcGFyc2VyIG5hbWUgaGFzbid0IGJlZW4gc2V0LCBkZWZhdWx0IGl0IHRvIHR3aWdcbiAgICAgICAgcGFyYW1zLnBhcnNlciA9IHBhcmFtcy5wYXJzZXIgfHwgJ3R3aWcnO1xuICAgICAgICBwYXJhbXMuaWQgPSBpZDtcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGFzeW5jXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLmFzeW5jID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGFyYW1zLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFzc3VtZSAnZnMnIGlmIHRoZSBsb2FkZXIgaXMgbm90IGRlZmluZWRcbiAgICAgICAgY29uc3QgbG9hZGVyID0gdGhpcy5sb2FkZXJzW3BhcmFtcy5tZXRob2RdIHx8IHRoaXMubG9hZGVycy5mcztcbiAgICAgICAgcmV0dXJuIGxvYWRlci5jYWxsKHRoaXMsIGxvY2F0aW9uLCBwYXJhbXMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lIG9iamVjdCB0eXBlXG4gICAgZnVuY3Rpb24gaXModHlwZSwgb2JqKSB7XG4gICAgICAgIGNvbnN0IGNsYXMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSk7XG4gICAgICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgY2xhcyA9PT0gdHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHdyYXBwZXIgZm9yIHRlbXBsYXRlIGJsb2Nrcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1R3aWcuVGVtcGxhdGV9IFRoZSB0ZW1wbGF0ZSB0aGF0IHRoZSBibG9jayB3YXMgb3JpZ2luYWxseSBkZWZpbmVkIGluLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gVGhlIGNvbXBpbGVkIGJsb2NrIHRva2VuLlxuICAgICAqL1xuICAgIFR3aWcuQmxvY2sgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHRva2VuKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGJsb2NrIHVzaW5nIGEgc3BlY2lmaWMgcGFyc2Ugc3RhdGUgYW5kIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtUd2lnLlBhcnNlU3RhdGV9IHBhcnNlU3RhdGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgVHdpZy5CbG9jay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHBhcnNlU3RhdGUsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUZW1wbGF0ZSA9IHBhcnNlU3RhdGUudGVtcGxhdGU7XG4gICAgICAgIGxldCBwcm9taXNlO1xuXG4gICAgICAgIHBhcnNlU3RhdGUudGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2VuLmV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHBhcnNlU3RhdGUsIHRoaXMudG9rZW4ub3V0cHV0LCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBwYXJzZVN0YXRlLnBhcnNlQXN5bmModGhpcy50b2tlbi5vdXRwdXQsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ob3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICBwYXJzZVN0YXRlLnRlbXBsYXRlID0gb3JpZ2luYWxUZW1wbGF0ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIHN0YXRlIG5lZWRlZCB0byBwYXJzZSBhIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUd2lnLlRlbXBsYXRlfSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdGhhdCB0aGUgdG9rZW5zIGJlaW5nIHBhcnNlZCBhcmUgYXNzb2NpYXRlZCB3aXRoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBibG9ja092ZXJyaWRlcyBBbnkgYmxvY2tzIHRoYXQgc2hvdWxkIG92ZXJyaWRlIHRob3NlIGRlZmluZWQgaW4gdGhlIGFzc29jaWF0ZWQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgVHdpZy5QYXJzZVN0YXRlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBibG9ja092ZXJyaWRlcywgY29udGV4dCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVkQmxvY2tzID0ge307XG4gICAgICAgIHRoaXMub3ZlcnJpZGVCbG9ja3MgPSBibG9ja092ZXJyaWRlcyA9PT0gdW5kZWZpbmVkID8ge30gOiBibG9ja092ZXJyaWRlcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCA9PT0gdW5kZWZpbmVkID8ge30gOiBjb250ZXh0O1xuICAgICAgICB0aGlzLm1hY3JvcyA9IHt9O1xuICAgICAgICB0aGlzLm5lc3RpbmdTdGFjayA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhIGJsb2NrIGJ5IGl0cyBuYW1lLCByZXNvbHZpbmcgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcbiAgICAgKiAgICAgLSBvdmVycmlkZSBibG9ja3Mgc3BlY2lmaWVkIHdoZW4gaW5pdGlhbGl6ZWQgKGV4Y2VwdCB3aGVuIGV4Y2x1ZGVkKVxuICAgICAqICAgICAtIGJsb2NrcyByZXNvbHZlZCBmcm9tIHRoZSBhc3NvY2lhdGVkIHRlbXBsYXRlXG4gICAgICogICAgIC0gYmxvY2tzIHJlc29sdmVkIGZyb20gdGhlIHBhcmVudCB0ZW1wbGF0ZSB3aGVuIGV4dGVuZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGJsb2NrIHRvIHJldHVybi5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNoZWNrT25seUluaGVyaXRlZEJsb2NrcyBXaGV0aGVyIHRvIHNraXAgY2hlY2tpbmcgdGhlIG92ZXJyaWRlcyBhbmQgYXNzb2NpYXRlZCB0ZW1wbGF0ZSwgd2lsbCBub3Qgc2tpcCBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7VHdpZy5CbG9ja3x1bmRlZmluZWR9XG4gICAgICovXG4gICAgVHdpZy5QYXJzZVN0YXRlLnByb3RvdHlwZS5nZXRCbG9jayA9IGZ1bmN0aW9uIChuYW1lLCBjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MpIHtcbiAgICAgICAgbGV0IGJsb2NrO1xuXG4gICAgICAgIGlmIChjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MgIT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEJsb2NrcyBzcGVjaWZpZWQgd2hlbiBpbml0aWFsaXplZFxuICAgICAgICAgICAgYmxvY2sgPSB0aGlzLm92ZXJyaWRlQmxvY2tzW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJsb2NrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIEJsb2NrIGRlZmluZWQgYnkgdGhlIGFzc29jaWF0ZWQgdGVtcGxhdGVcbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy50ZW1wbGF0ZS5nZXRCbG9jayhuYW1lLCBjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJsb2NrID09PSB1bmRlZmluZWQgJiYgdGhpcy50ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQmxvY2sgZGVmaW5lZCBpbiB0aGUgcGFyZW50IHRlbXBsYXRlIHdoZW4gZXh0ZW5kaW5nXG4gICAgICAgICAgICBibG9jayA9IHRoaXMudGVtcGxhdGUucGFyZW50VGVtcGxhdGUuZ2V0QmxvY2sobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIGF2YWlsYWJsZSBibG9ja3MsIHJlc29sdmluZyBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICAgICAqICAgICAtIG92ZXJyaWRlIGJsb2NrcyBzcGVjaWZpZWQgd2hlbiBpbml0aWFsaXplZFxuICAgICAqICAgICAtIGJsb2NrcyByZXNvbHZlZCBmcm9tIHRoZSBhc3NvY2lhdGVkIHRlbXBsYXRlXG4gICAgICogICAgIC0gYmxvY2tzIHJlc29sdmVkIGZyb20gdGhlIHBhcmVudCB0ZW1wbGF0ZSB3aGVuIGV4dGVuZGluZyAoZXhjZXB0IHdoZW4gZXhjbHVkZWQpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluY2x1ZGVQYXJlbnRCbG9ja3MgV2hldGhlciB0byBnZXQgYmxvY2tzIGZyb20gdGhlIHBhcmVudCB0ZW1wbGF0ZSB3aGVuIGV4dGVuZGluZywgd2lsbCBhbHdheXMgZG8gc28gYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBUd2lnLlBhcnNlU3RhdGUucHJvdG90eXBlLmdldEJsb2NrcyA9IGZ1bmN0aW9uIChpbmNsdWRlUGFyZW50QmxvY2tzKSB7XG4gICAgICAgIGxldCBibG9ja3MgPSB7fTtcblxuICAgICAgICBpZiAoaW5jbHVkZVBhcmVudEJsb2NrcyAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUucGFyZW50VGVtcGxhdGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcFxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSAhPT0gdGhpcy50ZW1wbGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIEJsb2NrcyBmcm9tIHRoZSBwYXJlbnQgdGVtcGxhdGUgd2hlbiBleHRlbmRpbmdcbiAgICAgICAgICAgIGJsb2NrcyA9IHRoaXMudGVtcGxhdGUucGFyZW50VGVtcGxhdGUuZ2V0QmxvY2tzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBibG9ja3MgPSB7XG4gICAgICAgICAgICAuLi5ibG9ja3MsXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB3aXRoIGFueSBibG9ja3MgZGVmaW5lZCB3aXRoaW4gdGhlIGFzc29jaWF0ZWQgdGVtcGxhdGVcbiAgICAgICAgICAgIC4uLnRoaXMudGVtcGxhdGUuZ2V0QmxvY2tzKCksXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB3aXRoIGFueSBibG9ja3Mgc3BlY2lmaWVkIHdoZW4gaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgIC4uLnRoaXMub3ZlcnJpZGVCbG9ja3NcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYmxvY2tzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNsb3Nlc3QgdG9rZW4gb2YgYSBzcGVjaWZpYyB0eXBlIHRvIHRoZSBjdXJyZW50IG5lc3QgbGV2ZWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUgIFRoZSBsb2dpYyB0b2tlbiB0eXBlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgVHdpZy5QYXJzZVN0YXRlLnByb3RvdHlwZS5nZXROZXN0aW5nU3RhY2tUb2tlbiA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGxldCBtYXRjaGluZ1Rva2VuO1xuXG4gICAgICAgIHRoaXMubmVzdGluZ1N0YWNrLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICAgICAgaWYgKG1hdGNoaW5nVG9rZW4gPT09IHVuZGVmaW5lZCAmJiB0b2tlbi50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hpbmdUb2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYSBzZXQgb2YgdG9rZW5zIHVzaW5nIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIFRoZSBjb21waWxlZCB0b2tlbnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gc2V0IHRoZSBzdGF0ZSB0byB3aGlsZSBwYXJzaW5nLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxsb3dBc3luYyBXaGV0aGVyIHRvIHBhcnNlIGFzeW5jaHJvbm91c2x5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBibG9ja3MgQmxvY2tzIHRoYXQgc2hvdWxkIG92ZXJyaWRlIGFueSBkZWZpbmVkIHdoaWxlIHBhcnNpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSByZW5kZXJlZCB0b2tlbnMuXG4gICAgICpcbiAgICAgKi9cbiAgICBUd2lnLlBhcnNlU3RhdGUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHRva2VucywgY29udGV4dCwgYWxsb3dBc3luYykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG4gICAgICAgIGxldCBvdXRwdXQgPSBbXTtcblxuICAgICAgICAvLyBTdG9yZSBhbnkgZXJyb3IgdGhhdCBtaWdodCBiZSB0aHJvd24gYnkgdGhlIHByb21pc2UgY2hhaW4uXG4gICAgICAgIGxldCBlcnIgPSBudWxsO1xuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBzZXQgdG8gaXNBc3luYyBpZiB0ZW1wbGF0ZSByZW5kZXJzIHN5bmNocm9ub3VzbHlcbiAgICAgICAgbGV0IGlzQXN5bmMgPSB0cnVlO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIC8vIFRyYWNrIGxvZ2ljIGNoYWluc1xuICAgICAgICBsZXQgY2hhaW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEV4dHJhY3RlZCBpbnRvIGl0J3Mgb3duIGZ1bmN0aW9uIHN1Y2ggdGhhdCB0aGUgZnVuY3Rpb25cbiAgICAgICAgICogZG9lcyBub3QgZ2V0IHJlY3JlYXRlZCBvdmVyIGFuZCBvdmVyIGFnYWluIGluIHRoZSBgZm9yRWFjaGBcbiAgICAgICAgICogbG9vcCBiZWxvdy4gVGhpcyBtZXRob2QgY2FuIGJlIGNvbXBpbGVkIGFuZCBvcHRpbWl6ZWRcbiAgICAgICAgICogYSBzaW5nbGUgdGltZSBpbnN0ZWFkIG9mIGJlaW5nIHJlY3JlYXRlZCBvbiBlYWNoIGl0ZXJhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG91dHB1dFB1c2gobykge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2gobyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZVRva2VuTG9naWMobG9naWMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9naWMuY2hhaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY2hhaW4gPSBsb2dpYy5jaGFpbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2dpYy5jb250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNvbnRleHQgPSBsb2dpYy5jb250ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvZ2ljLm91dHB1dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChsb2dpYy5vdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZSA9IFR3aWcuYXN5bmMuZm9yRWFjaCh0b2tlbnMsIHRva2VuID0+IHtcbiAgICAgICAgICAgIFR3aWcubG9nLmRlYnVnKCdUd2lnLlBhcnNlU3RhdGUucGFyc2U6ICcsICdQYXJzaW5nIHRva2VuOiAnLCB0b2tlbik7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgVHdpZy50b2tlbi50eXBlLnJhdzpcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goVHdpZy5maWx0ZXJzLnJhdyh0b2tlbi52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgVHdpZy50b2tlbi50eXBlLmxvZ2ljOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5sb2dpYy5wYXJzZUFzeW5jLmNhbGwoc3RhdGUsIHRva2VuLnRva2VuIC8qIGxvZ2ljVG9rZW4gKi8sIHN0YXRlLmNvbnRleHQsIGNoYWluKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocGFyc2VUb2tlbkxvZ2ljKTtcbiAgICAgICAgICAgICAgICBjYXNlIFR3aWcudG9rZW4udHlwZS5jb21tZW50OlxuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLCBjb21tZW50cyBzaG91bGQgYmUgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIEZhbGwgdGhyb3VnaCB3aGl0ZXNwYWNlIHRvIG91dHB1dFxuICAgICAgICAgICAgICAgIGNhc2UgVHdpZy50b2tlbi50eXBlLm91dHB1dFdoaXRlc3BhY2VQcmU6XG4gICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZVBvc3Q6XG4gICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0V2hpdGVzcGFjZUJvdGg6XG4gICAgICAgICAgICAgICAgY2FzZSBUd2lnLnRva2VuLnR5cGUub3V0cHV0OlxuICAgICAgICAgICAgICAgICAgICBUd2lnLmxvZy5kZWJ1ZygnVHdpZy5QYXJzZVN0YXRlLnBhcnNlOiAnLCAnT3V0cHV0IHRva2VuOiAnLCB0b2tlbi5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBnaXZlbiBleHByZXNzaW9uIGluIHRoZSBnaXZlbiBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi5zdGFjaywgc3RhdGUuY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dFB1c2gpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG91dHB1dCA9IFR3aWcub3V0cHV0LmNhbGwoc3RhdGUudGVtcGxhdGUsIG91dHB1dCk7XG4gICAgICAgICAgICBpc0FzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoYWxsb3dBc3luYykge1xuICAgICAgICAgICAgICAgIGhhbmRsZUV4Y2VwdGlvbihzdGF0ZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlcnIgPSBlcnJvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSWYgYGFsbG93QXN5bmNgIHdlIHdpbGwgYWx3YXlzIHJldHVybiBhIHByb21pc2Ugc2luY2Ugd2UgZG8gbm90XG4gICAgICAgIC8vIGtub3cgaW4gYWR2YW5jZSBpZiB3ZSBhcmUgZ29pbmcgdG8gcnVuIGFzeW5jaHJvbm91c2x5IG9yIG5vdC5cbiAgICAgICAgaWYgKGFsbG93QXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBoZXJlIGlmIHdlIGZhaWwgc3luY2hyb25vdXNseS5cbiAgICAgICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihzdGF0ZSwgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGBhbGxvd0FzeW5jYCBpcyBub3QgdHJ1ZSB3ZSBzaG91bGQgbm90IGFsbG93IHRoZSB1c2VyXG4gICAgICAgIC8vIHRvIHVzZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIG9yIGZpbHRlcnMuXG4gICAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignWW91IGFyZSB1c2luZyBUd2lnLmpzIGluIHN5bmMgbW9kZSBpbiBjb21iaW5hdGlvbiB3aXRoIGFzeW5jIGV4dGVuc2lvbnMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgdHdpZy5qcyB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIFBhcmFtZXRlcnM6IHtcbiAgICAgKiAgICAgIGRhdGE6ICAgVGhlIHRlbXBsYXRlLCBlaXRoZXIgcHJlLWNvbXBpbGVkIHRva2VucyBvciBhIHN0cmluZyB0ZW1wbGF0ZVxuICAgICAqICAgICAgaWQ6ICAgICBUaGUgbmFtZSBvZiB0aGlzIHRlbXBsYXRlXG4gICAgICogfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBUaGUgdGVtcGxhdGUgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBUd2lnLlRlbXBsYXRlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBjb25zdCB7ZGF0YSwgaWQsIGJhc2UsIHBhdGgsIHVybCwgbmFtZSwgbWV0aG9kLCBvcHRpb25zfSA9IHBhcmFtcztcblxuICAgICAgICAvLyAjIFdoYXQgaXMgc3RvcmVkIGluIGEgVHdpZy5UZW1wbGF0ZVxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgVHdpZyBUZW1wbGF0ZSBob2xkIHNldmVyYWwgY2h1Y2tzIG9mIGRhdGEuXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOiAgICAgVGhlIHRva2VuIElEIChpZiBhbnkpXG4gICAgICAgIC8vICAgICAgICAgIHRva2VuczogVGhlIGxpc3Qgb2YgdG9rZW5zIHRoYXQgbWFrZXMgdXAgdGhpcyB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gICAgICAgICAgYmFzZTogICBUaGUgYmFzZSB0ZW1wbGF0ZSAoaWYgYW55KVxuICAgICAgICAvLyAgICAgICAgICAgIG9wdGlvbnM6ICB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIENvbXBpbGVyL3BhcnNlciBvcHRpb25zXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHN0cmljdF92YXJpYWJsZXM6IHRydWUvZmFsc2VcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtaXNzaW5nIHZhcmlhYmxlL2tleXMgZW1pdCBhbiBlcnJvciBtZXNzYWdlLiBJZiBmYWxzZSwgdGhleSBkZWZhdWx0IHRvIG51bGwuXG4gICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuXG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XG4gICAgICAgIHRoaXMuYmxvY2tzID0ge1xuICAgICAgICAgICAgZGVmaW5lZDoge30sXG4gICAgICAgICAgICBpbXBvcnRlZDoge31cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5wYXJlbnRUZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuXG4gICAgICAgIGlmIChpcygnU3RyaW5nJywgZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zID0gVHdpZy5wcmVwYXJlLmNhbGwodGhpcywgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VucyA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgVHdpZy5UZW1wbGF0ZXMuc2F2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBibG9jayBieSBpdHMgbmFtZSwgcmVzb2x2aW5nIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gICAgICogICAgIC0gYmxvY2tzIGRlZmluZWQgaW4gdGhlIHRlbXBsYXRlIGl0c2VsZlxuICAgICAqICAgICAtIGJsb2NrcyBpbXBvcnRlZCBmcm9tIGFub3RoZXIgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9jayB0byByZXR1cm4uXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MgV2hldGhlciB0byBza2lwIGNoZWNraW5nIHRoZSBibG9ja3MgZGVmaW5lZCBpbiB0aGUgdGVtcGxhdGUgaXRzZWxmLCB3aWxsIG5vdCBza2lwIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtUd2lnLkJsb2NrfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBUd2lnLlRlbXBsYXRlLnByb3RvdHlwZS5nZXRCbG9jayA9IGZ1bmN0aW9uIChuYW1lLCBjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MsIGNoZWNrSW1wb3J0cyA9IHRydWUpIHtcbiAgICAgICAgbGV0IGJsb2NrO1xuXG4gICAgICAgIGlmIChjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy5ibG9ja3MuZGVmaW5lZFtuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGVja0ltcG9ydHMgJiYgYmxvY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYmxvY2sgPSB0aGlzLmJsb2Nrcy5pbXBvcnRlZFtuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChibG9jayA9PT0gdW5kZWZpbmVkICYmIHRoaXMucGFyZW50VGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQmxvY2sgZGVmaW5lZCBpbiB0aGUgcGFyZW50IHRlbXBsYXRlIHdoZW4gZXh0ZW5kaW5nLlxuICAgICAgICAgICAgICogVGhpcyByZWN1cnNpb24gaXMgdXNlZnVsIHRvIGluaGVyaXQgZnJvbSBhc2NlbmRhbnRzLlxuICAgICAgICAgICAgICogQnV0IHRha2UgY2FyZSBvZiBub3QgY29uc2lkZXJpbmcgYXNjZW5kYW50cycgeyUgdXNlICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJsb2NrID0gdGhpcy5wYXJlbnRUZW1wbGF0ZS5nZXRCbG9jayhuYW1lLCBjaGVja09ubHlJbmhlcml0ZWRCbG9ja3MsIGNoZWNrSW1wb3J0cyA9IGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCB0aGUgYXZhaWxhYmxlIGJsb2NrcywgcmVzb2x2aW5nIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gICAgICogICAgIC0gYmxvY2tzIGRlZmluZWQgaW4gdGhlIHRlbXBsYXRlIGl0c2VsZlxuICAgICAqICAgICAtIGJsb2NrcyBpbXBvcnRlZCBmcm9tIG90aGVyIHRlbXBsYXRlc1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIFR3aWcuVGVtcGxhdGUucHJvdG90eXBlLmdldEJsb2NrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJsb2NrcyA9IHt9O1xuXG4gICAgICAgIGJsb2NrcyA9IHtcbiAgICAgICAgICAgIC4uLmJsb2NrcyxcbiAgICAgICAgICAgIC8vIEdldCBhbnkgYmxvY2tzIGltcG9ydGVkIGZyb20gb3RoZXIgdGVtcGxhdGVzXG4gICAgICAgICAgICAuLi50aGlzLmJsb2Nrcy5pbXBvcnRlZCxcbiAgICAgICAgICAgIC8vIE92ZXJyaWRlIHdpdGggYW55IGJsb2NrcyBkZWZpbmVkIHdpdGhpbiB0aGUgdGVtcGxhdGUgaXRzZWxmXG4gICAgICAgICAgICAuLi50aGlzLmJsb2Nrcy5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJsb2NrcztcbiAgICB9O1xuXG4gICAgVHdpZy5UZW1wbGF0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNvbnRleHQsIHBhcmFtcywgYWxsb3dBc3luYykge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgICAgIHJldHVybiBUd2lnLmFzeW5jLnBvdGVudGlhbGx5QXN5bmModGVtcGxhdGUsIGFsbG93QXN5bmMsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IFR3aWcuUGFyc2VTdGF0ZSh0ZW1wbGF0ZSwgcGFyYW1zLmJsb2NrcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wYXJzZUFzeW5jKHRlbXBsYXRlLnRva2VucylcbiAgICAgICAgICAgICAgICAudGhlbihvdXRwdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50VGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLnBhcmVudFRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHRlbXBsYXRlIGV4dGVuZHMgYW5vdGhlciB0ZW1wbGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUub3B0aW9ucy5hbGxvd0lubGluZUluY2x1ZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRlbXBsYXRlIGlzIHByb3ZpZGVkIGlubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFRlbXBsYXRlID0gVHdpZy5UZW1wbGF0ZXMubG9hZCh0ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50VGVtcGxhdGUub3B0aW9ucyA9IHRlbXBsYXRlLm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdGhlIHRlbXBsYXRlIGZpbGUgdmlhIGluY2x1ZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBUd2lnLnBhdGgucGFyc2VQYXRoKHRlbXBsYXRlLCB0ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRUZW1wbGF0ZSA9IFR3aWcuVGVtcGxhdGVzLmxvYWRSZW1vdGUodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGVtcGxhdGUuZ2V0TG9hZGVyTWV0aG9kKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHRlbXBsYXRlLmJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGVtcGxhdGUub3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSA9IHBhcmVudFRlbXBsYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucGFyZW50VGVtcGxhdGUucmVuZGVyQXN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrczogc3RhdGUuZ2V0QmxvY2tzKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuaXNJbmNsdWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2lnLlRlbXBsYXRlLnByb3RvdHlwZS5pbXBvcnRGaWxlID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgbGV0IHVybCA9IG51bGw7XG4gICAgICAgIGxldCBzdWJUZW1wbGF0ZTtcbiAgICAgICAgaWYgKCF0aGlzLnVybCAmJiB0aGlzLm9wdGlvbnMuYWxsb3dJbmxpbmVJbmNsdWRlcykge1xuICAgICAgICAgICAgZmlsZSA9IHRoaXMucGF0aCA/IFR3aWcucGF0aC5wYXJzZVBhdGgodGhpcywgZmlsZSkgOiBmaWxlO1xuICAgICAgICAgICAgc3ViVGVtcGxhdGUgPSBUd2lnLlRlbXBsYXRlcy5sb2FkKGZpbGUpO1xuXG4gICAgICAgICAgICBpZiAoIXN1YlRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgc3ViVGVtcGxhdGUgPSBUd2lnLlRlbXBsYXRlcy5sb2FkUmVtb3RlKHVybCwge1xuICAgICAgICAgICAgICAgICAgICBpZDogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmdldExvYWRlck1ldGhvZCgpLFxuICAgICAgICAgICAgICAgICAgICBhc3luYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWJUZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVW5hYmxlIHRvIGZpbmQgdGhlIHRlbXBsYXRlICcgKyBmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1YlRlbXBsYXRlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJUZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybCA9IFR3aWcucGF0aC5wYXJzZVBhdGgodGhpcywgZmlsZSk7XG5cbiAgICAgICAgLy8gTG9hZCBibG9ja3MgZnJvbSBhbiBleHRlcm5hbCBmaWxlXG4gICAgICAgIHN1YlRlbXBsYXRlID0gVHdpZy5UZW1wbGF0ZXMubG9hZFJlbW90ZSh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5nZXRMb2FkZXJNZXRob2QoKSxcbiAgICAgICAgICAgIGJhc2U6IHRoaXMuYmFzZSxcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGlkOiB1cmxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN1YlRlbXBsYXRlO1xuICAgIH07XG5cbiAgICBUd2lnLlRlbXBsYXRlLnByb3RvdHlwZS5nZXRMb2FkZXJNZXRob2QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnZnMnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FqYXgnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWV0aG9kIHx8ICdmcyc7XG4gICAgfTtcblxuICAgIFR3aWcuVGVtcGxhdGUucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBpbnRvIHJhdyBKU1xuICAgICAgICByZXR1cm4gVHdpZy5jb21waWxlci5jb21waWxlKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgc2FmZSBvdXRwdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBDb250ZW50IHNhZmUgdG8gb3V0cHV0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IENvbnRlbnQgd3JhcHBlZCBpbnRvIGEgU3RyaW5nXG4gICAgICovXG5cbiAgICBUd2lnLk1hcmt1cCA9IGZ1bmN0aW9uIChjb250ZW50LCBzdHJhdGVneSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy13cmFwcGVycywgdW5pY29ybi9uZXctZm9yLWJ1aWx0aW5zICovXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBTdHJpbmcoY29udGVudCk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgb3V0cHV0LnR3aWdNYXJrdXAgPSAodHlwZW9mIHN0cmF0ZWd5ID09PSAndW5kZWZpbmVkJykgPyB0cnVlIDogc3RyYXRlZ3k7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3aWc7XG59O1xuIiwiLy8gIyMgdHdpZy5leHBvcnRzLmpzXG4vL1xuLy8gVGhpcyBmaWxlIHByb3ZpZGVzIGV4dGVuc2lvbiBwb2ludHMgYW5kIG90aGVyIGhvb2tzIGludG8gdGhlIHR3aWcgZnVuY3Rpb25hbGl0eS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVHdpZykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBUd2lnLmV4cG9ydHMgPSB7XG4gICAgICAgIFZFUlNJT046IFR3aWcuVkVSU0lPTlxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGNvbXBpbGUgYSB0d2lnLmpzIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtIFBhcmFtdGVyZXMgZm9yIGNyZWF0aW5nIGEgVHdpZyB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1R3aWcuVGVtcGxhdGV9IEEgVHdpZyB0ZW1wbGF0ZSByZWFkeSBmb3IgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIFR3aWcuZXhwb3J0cy50d2lnID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGNvbnN0IHtpZH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHJpY3RWYXJpYWJsZXM6IHBhcmFtcy5zdHJpY3RfdmFyaWFibGVzIHx8IGZhbHNlLFxuICAgICAgICAgICAgLy8gVE9ETzogdHVybiBhdXRvc2NhcGUgb24gaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxuICAgICAgICAgICAgYXV0b2VzY2FwZTogKHBhcmFtcy5hdXRvZXNjYXBlICE9PSBudWxsICYmIHBhcmFtcy5hdXRvZXNjYXBlKSB8fCBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93SW5saW5lSW5jbHVkZXM6IHBhcmFtcy5hbGxvd0lubGluZUluY2x1ZGVzIHx8IGZhbHNlLFxuICAgICAgICAgICAgcmV0aHJvdzogcGFyYW1zLnJldGhyb3cgfHwgZmFsc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2VzOiBwYXJhbXMubmFtZXNwYWNlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChUd2lnLmNhY2hlICYmIGlkKSB7XG4gICAgICAgICAgICBUd2lnLnZhbGlkYXRlSWQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5kZWJ1ZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBUd2lnLmRlYnVnID0gcGFyYW1zLmRlYnVnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy50cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBUd2lnLnRyYWNlID0gcGFyYW1zLnRyYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBUd2lnLlRlbXBsYXRlcy5wYXJzZXJzLnR3aWcoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmFtcywgJ3BhdGgnKSA/IHBhcmFtcy5wYXRoIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcGFyYW1zLm1vZHVsZSxcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdCb3RoIHJlZiBhbmQgaWQgY2Fubm90IGJlIHNldCBvbiBhIHR3aWcuanMgdGVtcGxhdGUuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBUd2lnLlRlbXBsYXRlcy5sb2FkKHBhcmFtcy5yZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5tZXRob2QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCFUd2lnLlRlbXBsYXRlcy5pc1JlZ2lzdGVyZWRMb2FkZXIocGFyYW1zLm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignTG9hZGVyIGZvciBcIicgKyBwYXJhbXMubWV0aG9kICsgJ1wiIGlzIG5vdCBkZWZpbmVkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gVHdpZy5UZW1wbGF0ZXMubG9hZFJlbW90ZShwYXJhbXMubmFtZSB8fCBwYXJhbXMuaHJlZiB8fCBwYXJhbXMucGF0aCB8fCBpZCB8fCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QsXG4gICAgICAgICAgICAgICAgcGFyc2VyOiBwYXJhbXMucGFyc2VyIHx8ICd0d2lnJyxcbiAgICAgICAgICAgICAgICBiYXNlOiBwYXJhbXMuYmFzZSxcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHBhcmFtcy5tb2R1bGUsXG4gICAgICAgICAgICAgICAgcHJlY29tcGlsZWQ6IHBhcmFtcy5wcmVjb21waWxlZCxcbiAgICAgICAgICAgICAgICBhc3luYzogcGFyYW1zLmFzeW5jLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNcblxuICAgICAgICAgICAgfSwgcGFyYW1zLmxvYWQsIHBhcmFtcy5lcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcuVGVtcGxhdGVzLmxvYWRSZW1vdGUocGFyYW1zLmhyZWYsIHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdhamF4JyxcbiAgICAgICAgICAgICAgICBwYXJzZXI6IHBhcmFtcy5wYXJzZXIgfHwgJ3R3aWcnLFxuICAgICAgICAgICAgICAgIGJhc2U6IHBhcmFtcy5iYXNlLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcGFyYW1zLm1vZHVsZSxcbiAgICAgICAgICAgICAgICBwcmVjb21waWxlZDogcGFyYW1zLnByZWNvbXBpbGVkLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBwYXJhbXMuYXN5bmMsXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xuXG4gICAgICAgICAgICB9LCBwYXJhbXMubG9hZCwgcGFyYW1zLmVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gVHdpZy5UZW1wbGF0ZXMubG9hZFJlbW90ZShwYXJhbXMucGF0aCwge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2ZzJyxcbiAgICAgICAgICAgICAgICBwYXJzZXI6IHBhcmFtcy5wYXJzZXIgfHwgJ3R3aWcnLFxuICAgICAgICAgICAgICAgIGJhc2U6IHBhcmFtcy5iYXNlLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcGFyYW1zLm1vZHVsZSxcbiAgICAgICAgICAgICAgICBwcmVjb21waWxlZDogcGFyYW1zLnByZWNvbXBpbGVkLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBwYXJhbXMuYXN5bmMsXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgfSwgcGFyYW1zLmxvYWQsIHBhcmFtcy5lcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRXh0ZW5kIFR3aWcgd2l0aCBhIG5ldyBmaWx0ZXIuXG4gICAgVHdpZy5leHBvcnRzLmV4dGVuZEZpbHRlciA9IGZ1bmN0aW9uIChmaWx0ZXIsIGRlZmluaXRpb24pIHtcbiAgICAgICAgVHdpZy5maWx0ZXIuZXh0ZW5kKGZpbHRlciwgZGVmaW5pdGlvbik7XG4gICAgfTtcblxuICAgIC8vIEV4dGVuZCBUd2lnIHdpdGggYSBuZXcgZnVuY3Rpb24uXG4gICAgVHdpZy5leHBvcnRzLmV4dGVuZEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBkZWZpbml0aW9uKSB7XG4gICAgICAgIFR3aWcuX2Z1bmN0aW9uLmV4dGVuZChmbiwgZGVmaW5pdGlvbik7XG4gICAgfTtcblxuICAgIC8vIEV4dGVuZCBUd2lnIHdpdGggYSBuZXcgdGVzdC5cbiAgICBUd2lnLmV4cG9ydHMuZXh0ZW5kVGVzdCA9IGZ1bmN0aW9uICh0ZXN0LCBkZWZpbml0aW9uKSB7XG4gICAgICAgIFR3aWcudGVzdC5leHRlbmQodGVzdCwgZGVmaW5pdGlvbik7XG4gICAgfTtcblxuICAgIC8vIEV4dGVuZCBUd2lnIHdpdGggYSBuZXcgZGVmaW5pdGlvbi5cbiAgICBUd2lnLmV4cG9ydHMuZXh0ZW5kVGFnID0gZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgVHdpZy5sb2dpYy5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgYW4gZW52aXJvbm1lbnQgZm9yIGV4dGVuZGluZyBUd2lnIGNvcmUuXG4gICAgLy8gQ2FsbHMgZm4gd2l0aCB0aGUgaW50ZXJuYWwgVHdpZyBvYmplY3QuXG4gICAgVHdpZy5leHBvcnRzLmV4dGVuZCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbihUd2lnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZSBhbiBleHRlbnNpb24gZm9yIHVzZSB3aXRoIGV4cHJlc3MgMi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrdXAgVGhlIHRlbXBsYXRlIG1hcmt1cC5cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zIFRoZSBleHByZXNzIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSByZW5kZXJlZCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBUd2lnLmV4cG9ydHMuY29tcGlsZSA9IGZ1bmN0aW9uIChtYXJrdXAsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgaWQgPSBvcHRpb25zLmZpbGVuYW1lO1xuICAgICAgICBjb25zdCBwYXRoID0gb3B0aW9ucy5maWxlbmFtZTtcblxuICAgICAgICAvLyBUcnkgdG8gbG9hZCB0aGUgdGVtcGxhdGUgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgVHdpZy5UZW1wbGF0ZSh7XG4gICAgICAgICAgICBkYXRhOiBtYXJrdXAsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLnNldHRpbmdzWyd0d2lnIG9wdGlvbnMnXVxuICAgICAgICB9KTsgLy8gVHdpZy5UZW1wbGF0ZXMubG9hZChpZCkgfHxcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgYW4gZXh0ZW5zaW9uIGZvciB1c2Ugd2l0aCBleHByZXNzIDMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgbG9jYXRpb24gb2YgdGhlIHRlbXBsYXRlIGZpbGUgb24gZGlzay5cbiAgICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gVGhlIG9wdGlvbnMgb3IgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIFR3aWcuRXJyb3JcbiAgICAgKi9cbiAgICBUd2lnLmV4cG9ydHMucmVuZGVyRmlsZSA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zLCBmbikge1xuICAgICAgICAvLyBIYW5kbGUgY2FsbGJhY2sgaW4gb3B0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucy5zZXR0aW5ncyB8fCB7fTtcblxuICAgICAgICAvLyBNaXhpbiBhbnkgb3B0aW9ucyBwcm92aWRlZCB0byB0aGUgZXhwcmVzcyBhcHAuXG4gICAgICAgIGNvbnN0IHZpZXdPcHRpb25zID0gc2V0dGluZ3NbJ3R3aWcgb3B0aW9ucyddO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBiYXNlOiBzZXR0aW5ncy52aWV3cyxcbiAgICAgICAgICAgIGxvYWQodGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW5kZXIgYW5kIHJldHVybiB0ZW1wbGF0ZSBhcyBhIHNpbXBsZSBzdHJpbmcsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdpZ2pzL3R3aWcuanMvcHVsbC8zNDggZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBpZiAoIXZpZXdPcHRpb25zIHx8ICF2aWV3T3B0aW9ucy5hbGxvd0FzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKG51bGwsIFN0cmluZyh0ZW1wbGF0ZS5yZW5kZXIob3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLnJlbmRlckFzeW5jKG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dCA9PiBmbihudWxsLCBvdXQpLCBmbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IoZXJyKSB7XG4gICAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmlld09wdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIHZpZXdPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZpZXdPcHRpb25zLCBvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1tvcHRpb25dID0gdmlld09wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBUd2lnLmV4cG9ydHMudHdpZyhwYXJhbXMpO1xuICAgIH07XG5cbiAgICAvLyBFeHByZXNzIDMgaGFuZGxlclxuICAgIFR3aWcuZXhwb3J0cy5fX2V4cHJlc3MgPSBUd2lnLmV4cG9ydHMucmVuZGVyRmlsZTtcblxuICAgIC8qKlxuICAgICAqIFNob3VkIFR3aWcuanMgY2FjaGUgdGVtcGxhdGVzLlxuICAgICAqIERpc2FibGUgZHVyaW5nIGRldmVsb3BtZW50IHRvIHNlZSBjaGFuZ2VzIHRvIHRlbXBsYXRlcyB3aXRob3V0XG4gICAgICogcmVsb2FkaW5nLCBhbmQgZGlzYWJsZSBpbiBwcm9kdWN0aW9uIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhY2hlXG4gICAgICovXG4gICAgVHdpZy5leHBvcnRzLmNhY2hlID0gZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgIFR3aWcuY2FjaGUgPSBjYWNoZTtcbiAgICB9O1xuXG4gICAgLy8gV2UgbmVlZCB0byBleHBvcnQgdGhlIHBhdGggbW9kdWxlIHNvIHdlIGNhbiBlZmZlY3RpdmVseSB0ZXN0IGl0XG4gICAgVHdpZy5leHBvcnRzLnBhdGggPSBUd2lnLnBhdGg7XG5cbiAgICAvLyBFeHBvcnQgb3VyIGZpbHRlcnMuXG4gICAgLy8gUmVzb2x2ZXMgIzMwN1xuICAgIFR3aWcuZXhwb3J0cy5maWx0ZXJzID0gVHdpZy5maWx0ZXJzO1xuXG4gICAgLy8gRXhwb3J0IG91ciB0ZXN0cy5cbiAgICBUd2lnLmV4cG9ydHMudGVzdHMgPSBUd2lnLnRlc3RzO1xuXG4gICAgLy8gRXhwb3J0IG91ciBmdW5jdGlvbnMuXG4gICAgVHdpZy5leHBvcnRzLmZ1bmN0aW9ucyA9IFR3aWcuZnVuY3Rpb25zO1xuXG4gICAgVHdpZy5leHBvcnRzLlByb21pc2UgPSBUd2lnLlByb21pc2U7XG5cbiAgICByZXR1cm4gVHdpZztcbn07XG4iLCIvLyAjIyB0d2lnLmV4cHJlc3Npb24uanNcbi8vXG4vLyBUaGlzIGZpbGUgaGFuZGxlcyB0b2tlbml6aW5nLCBjb21waWxpbmcgYW5kIHBhcnNpbmcgZXhwcmVzc2lvbnMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VQYXJhbXMoc3RhdGUsIHBhcmFtcywgY29udGV4dCkge1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgcGFyYW1zLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBUd2lnLlByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmFtZXNwYWNlIGZvciBleHByZXNzaW9uIGhhbmRsaW5nLlxuICAgICAqL1xuICAgIFR3aWcuZXhwcmVzc2lvbiA9IHsgfTtcblxuICAgIHJlcXVpcmUoJy4vdHdpZy5leHByZXNzaW9uLm9wZXJhdG9yJykoVHdpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZXNlcnZlZCB3b3JkIHRoYXQgY2FuJ3QgYmUgdXNlZCBhcyB2YXJpYWJsZSBuYW1lcy5cbiAgICAgKi9cbiAgICBUd2lnLmV4cHJlc3Npb24ucmVzZXJ2ZWRXb3JkcyA9IFtcbiAgICAgICAgJ3RydWUnLCAnZmFsc2UnLCAnbnVsbCcsICdUUlVFJywgJ0ZBTFNFJywgJ05VTEwnLCAnX2NvbnRleHQnLCAnYW5kJywgJ2ItYW5kJywgJ29yJywgJ2Itb3InLCAnYi14b3InLCAnaW4nLCAnbm90IGluJywgJ2lmJywgJ21hdGNoZXMnLCAnc3RhcnRzJywgJ2VuZHMnLCAnd2l0aCdcbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdG9rZW5zIHVzZWQgaW4gZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgVHdpZy5leHByZXNzaW9uLnR5cGUgPSB7XG4gICAgICAgIGNvbW1hOiAnVHdpZy5leHByZXNzaW9uLnR5cGUuY29tbWEnLFxuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdW5hcnk6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci51bmFyeScsXG4gICAgICAgICAgICBiaW5hcnk6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci5iaW5hcnknXG4gICAgICAgIH0sXG4gICAgICAgIHN0cmluZzogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLnN0cmluZycsXG4gICAgICAgIGJvb2w6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5ib29sJyxcbiAgICAgICAgc2xpY2U6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5zbGljZScsXG4gICAgICAgIGFycmF5OiB7XG4gICAgICAgICAgICBzdGFydDogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLmFycmF5LnN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLmFycmF5LmVuZCdcbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0OiB7XG4gICAgICAgICAgICBzdGFydDogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLm9iamVjdC5zdGFydCcsXG4gICAgICAgICAgICBlbmQ6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5vYmplY3QuZW5kJ1xuICAgICAgICB9LFxuICAgICAgICBwYXJhbWV0ZXI6IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5lbmQnXG4gICAgICAgIH0sXG4gICAgICAgIHN1YmV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnVHdpZy5leHByZXNzaW9uLnR5cGUuc3ViZXhwcmVzc2lvbi5zdGFydCcsXG4gICAgICAgICAgICBlbmQ6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5zdWJleHByZXNzaW9uLmVuZCdcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiB7XG4gICAgICAgICAgICBwZXJpb2Q6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5rZXkucGVyaW9kJyxcbiAgICAgICAgICAgIGJyYWNrZXRzOiAnVHdpZy5leHByZXNzaW9uLnR5cGUua2V5LmJyYWNrZXRzJ1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5maWx0ZXInLFxuICAgICAgICBfZnVuY3Rpb246ICdUd2lnLmV4cHJlc3Npb24udHlwZS5fZnVuY3Rpb24nLFxuICAgICAgICB2YXJpYWJsZTogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLnZhcmlhYmxlJyxcbiAgICAgICAgbnVtYmVyOiAnVHdpZy5leHByZXNzaW9uLnR5cGUubnVtYmVyJyxcbiAgICAgICAgX251bGw6ICdUd2lnLmV4cHJlc3Npb24udHlwZS5udWxsJyxcbiAgICAgICAgY29udGV4dDogJ1R3aWcuZXhwcmVzc2lvbi50eXBlLmNvbnRleHQnLFxuICAgICAgICB0ZXN0OiAnVHdpZy5leHByZXNzaW9uLnR5cGUudGVzdCdcbiAgICB9O1xuXG4gICAgVHdpZy5leHByZXNzaW9uLnNldCA9IHtcbiAgICAgICAgLy8gV2hhdCBjYW4gZm9sbG93IGFuIGV4cHJlc3Npb24gKGluIGdlbmVyYWwpXG4gICAgICAgIG9wZXJhdGlvbnM6IFtcbiAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLmZpbHRlcixcbiAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLm9wZXJhdG9yLnVuYXJ5LFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUub3BlcmF0b3IuYmluYXJ5LFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUuYXJyYXkuZW5kLFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUub2JqZWN0LmVuZCxcbiAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5lbmQsXG4gICAgICAgICAgICBUd2lnLmV4cHJlc3Npb24udHlwZS5zdWJleHByZXNzaW9uLmVuZCxcbiAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLmNvbW1hLFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUudGVzdFxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uczogW1xuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUuX2Z1bmN0aW9uLFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUuYm9vbCxcbiAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLnN0cmluZyxcbiAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLnZhcmlhYmxlLFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUubnVtYmVyLFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUuX251bGwsXG4gICAgICAgICAgICBUd2lnLmV4cHJlc3Npb24udHlwZS5jb250ZXh0LFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0LFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUuYXJyYXkuc3RhcnQsXG4gICAgICAgICAgICBUd2lnLmV4cHJlc3Npb24udHlwZS5vYmplY3Quc3RhcnQsXG4gICAgICAgICAgICBUd2lnLmV4cHJlc3Npb24udHlwZS5zdWJleHByZXNzaW9uLnN0YXJ0LFxuICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUub3BlcmF0b3IudW5hcnlcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBNb3N0IGV4cHJlc3Npb25zIGFsbG93IGEgJy4nIG9yICdbJyBhZnRlciB0aGVtLCBzbyB3ZSBwcm92aWRlIGEgY29udmVuaWVuY2Ugc2V0XG4gICAgVHdpZy5leHByZXNzaW9uLnNldC5vcGVyYXRpb25zRXh0ZW5kZWQgPSBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnMuY29uY2F0KFtcbiAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUua2V5LnBlcmlvZCxcbiAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUua2V5LmJyYWNrZXRzLFxuICAgICAgICBUd2lnLmV4cHJlc3Npb24udHlwZS5zbGljZVxuICAgIF0pO1xuXG4gICAgLy8gU29tZSBjb21tb25seSB1c2VkIGNvbXBpbGUgYW5kIHBhcnNlIGZ1bmN0aW9ucy5cbiAgICBUd2lnLmV4cHJlc3Npb24uZm4gPSB7XG4gICAgICAgIGNvbXBpbGU6IHtcbiAgICAgICAgICAgIHB1c2godG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVzaEJvdGgodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlOiB7XG4gICAgICAgICAgICBwdXNoKHRva2VuLCBzdGFjaykge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1c2hWYWx1ZSh0b2tlbiwgc3RhY2spIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRva2VuLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBUaGUgcmVndWxhciBleHByZXNzaW9ucyBhbmQgY29tcGlsZS9wYXJzZSBsb2dpYyB1c2VkIHRvIG1hdGNoIHRva2VucyBpbiBleHByZXNzaW9ucy5cbiAgICAvL1xuICAgIC8vIFByb3BlcnRpZXM6XG4gICAgLy9cbiAgICAvLyAgICAgIHR5cGU6ICBUaGUgdHlwZSBvZiBleHByZXNzaW9uIHRoaXMgbWF0Y2hlc1xuICAgIC8vXG4gICAgLy8gICAgICByZWdleDogT25lIG9yIG1vcmUgcmVndWxhciBleHByZXNzaW9ucyB0aGF0IG1hdGNoZSB0aGUgZm9ybWF0IG9mIHRoZSB0b2tlbi5cbiAgICAvL1xuICAgIC8vICAgICAgbmV4dDogIFZhbGlkIHRva2VucyB0aGF0IGNhbiBvY2N1ciBuZXh0IGluIHRoZSBleHByZXNzaW9uLlxuICAgIC8vXG4gICAgLy8gRnVuY3Rpb25zOlxuICAgIC8vXG4gICAgLy8gICAgICBjb21waWxlOiBBIGZ1bmN0aW9uIHRoYXQgY29tcGlsZXMgdGhlIHJhdyByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2ggaW50byBhIHRva2VuLlxuICAgIC8vXG4gICAgLy8gICAgICBwYXJzZTogICBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHRoZSBjb21waWxlZCB0b2tlbiBpbnRvIG91dHB1dC5cbiAgICAvL1xuICAgIFR3aWcuZXhwcmVzc2lvbi5kZWZpbml0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUudGVzdCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmlzXFxzKyhub3QpP1xccyooW2EtekEtWl9dXFx3KihcXHM/KD86YXN8YnkpKT8pLyxcbiAgICAgICAgICAgIG5leHQ6IFR3aWcuZXhwcmVzc2lvbi5zZXQub3BlcmF0aW9ucy5jb25jYXQoW1R3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5zdGFydF0pLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbiwgc3RhY2ssIG91dHB1dCkge1xuICAgICAgICAgICAgICAgIHRva2VuLmZpbHRlciA9IHRva2VuLm1hdGNoWzJdO1xuICAgICAgICAgICAgICAgIHRva2VuLm1vZGlmaWVyID0gdG9rZW4ubWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIHN0YWNrLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VQYXJhbXMoc3RhdGUsIHRva2VuLnBhcmFtcywgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFR3aWcudGVzdCh0b2tlbi5maWx0ZXIsIHZhbHVlLCBwYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09ICdub3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCghcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuY29tbWEsXG4gICAgICAgICAgICAvLyBNYXRjaCBhIGNvbW1hXG4gICAgICAgICAgICByZWdleDogL14sLyxcbiAgICAgICAgICAgIG5leHQ6IFR3aWcuZXhwcmVzc2lvbi5zZXQuZXhwcmVzc2lvbnMuY29uY2F0KFtUd2lnLmV4cHJlc3Npb24udHlwZS5hcnJheS5lbmQsIFR3aWcuZXhwcmVzc2lvbi50eXBlLm9iamVjdC5lbmRdKSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrVG9rZW47XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gUG9wIHRva2VucyBvZmYgdGhlIHN0YWNrIHVudGlsIHRoZSBzdGFydCBvZiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9yICg7aSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tUb2tlbi50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5vYmplY3Quc3RhcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1Rva2VuLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5zdGFydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrVG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUuYXJyYXkuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RhY2tUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHN0YWNrVG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYXRjaCBhIG51bWJlciAoaW50ZWdlciBvciBkZWNpbWFsKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5udW1iZXIsXG4gICAgICAgICAgICAvLyBNYXRjaCBhIG51bWJlclxuICAgICAgICAgICAgcmVnZXg6IC9eLT9cXGQrKFxcLlxcZCspPy8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnMsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgdG9rZW4udmFsdWUgPSBOdW1iZXIodG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZTogVHdpZy5leHByZXNzaW9uLmZuLnBhcnNlLnB1c2hWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci5iaW5hcnksXG4gICAgICAgICAgICAvLyBNYXRjaCBhbnkgb2YgPz8sID86LCArLCAqLCAvLCAtLCAlLCB+LCA8PT4sIDwsIDw9LCA+LCA+PSwgIT0sID09LCAqKiwgPywgOiwgYW5kLCBiLWFuZCwgb3IsIGItb3IsIGIteG9yLCBpbiwgbm90IGluXG4gICAgICAgICAgICAvLyBhbmQsIG9yLCBpbiwgbm90IGluLCBtYXRjaGVzLCBzdGFydHMgd2l0aCwgZW5kcyB3aXRoIGNhbiBiZSBmb2xsb3dlZCBieSBhIHNwYWNlIG9yIHBhcmVudGhlc2lzXG4gICAgICAgICAgICByZWdleDogLyheXFw/XFw/fF5cXD86fF4oYi1hbmQpfF4oYi1vcil8XihiLXhvcil8XlsrXFwtfiU/XXxeKDw9Pil8Xls6XSg/IVxcZFxcXSl8XlshPV09PT98XlshPD5dPT98XlxcKlxcKj98XlxcL1xcLz98XihhbmQpWyh8XFxzK118XihvcilbKHxcXHMrXXxeKGluKVsofFxccytdfF4obm90IGluKVsofFxccytdfF4obWF0Y2hlcyl8XihzdGFydHMgd2l0aCl8XihlbmRzIHdpdGgpfF5cXC5cXC4pLyxcbiAgICAgICAgICAgIG5leHQ6IFR3aWcuZXhwcmVzc2lvbi5zZXQuZXhwcmVzc2lvbnMsXG4gICAgICAgICAgICB0cmFuc2Zvcm0obWF0Y2gsIHRva2Vucykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW5kKCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29yKCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luKCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdCBpbignOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgb2ZmIHRoZSAoIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS52YWx1ZSA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzBdO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4udmFsdWUgPSB0b2tlbi52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qge3ZhbHVlfSA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLmxvb2t1cCh2YWx1ZSwgdG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgVHdpZy5sb2cudHJhY2UoJ1R3aWcuZXhwcmVzc2lvbi5jb21waWxlOiAnLCAnT3BlcmF0b3I6ICcsIG9wZXJhdG9yLCAnIGZyb20gJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLm9wZXJhdG9yLnVuYXJ5IHx8IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLm9wZXJhdG9yLmJpbmFyeSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcGVyYXRvci5hc3NvY2lhdGl2aXR5ID09PSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yLnByZWNpZGVuY2UgPj0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0ucHJlY2lkZW5jZSkgfHxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3BlcmF0b3IuYXNzb2NpYXRpdml0eSA9PT0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLnJpZ2h0VG9MZWZ0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5wcmVjaWRlbmNlID4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0ucHJlY2lkZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2godGVtcCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHRlcm5hcnkgb3Igb2JqZWN0IGtleSBiZWluZyBzZXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLnZhbHVlID09PSAnPycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGFzIG5vcm1hbCBmb3IgYSB0ZXJuYXJ5XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBhIHRlcm5hcnkgc28gd2UgcHVzaCB0aGUgdG9rZW4gdG8gdGhlIG91dHB1dCB3aGVyZSBpdCBjYW4gYmUgaGFuZGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3aGVuIHRoZSBhc3NvY2F0ZWQgb2JqZWN0IGlzIGNsb3NlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVRva2VuID0gb3V0cHV0LnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5VG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUuc3RyaW5nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVRva2VuLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLnZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4ua2V5ID0ga2V5VG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleVRva2VuLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLm51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgaW50ZWdlciBrZXlzIGludG8gc3RyaW5nIGtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5rZXkgPSBrZXlUb2tlbi52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlUb2tlbi5leHByZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleVRva2VuLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5lbmQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlUb2tlbi50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5zdWJleHByZXNzaW9uLmVuZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5wYXJhbXMgPSBrZXlUb2tlbi5wYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmV4cGVjdGVkIHZhbHVlIGJlZm9yZSBcXCc6XFwnIG9mICcgKyBrZXlUb2tlbi50eXBlICsgJyA9ICcgKyBrZXlUb2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gob3BlcmF0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgc3RhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW4ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0ZXJuYXJ5ICc6JyBvcGVyYXRvclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLnBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgXCJ7KGV4cHJlc3Npb24pOnZhbHVlfVwiXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi5wYXJhbXMsIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHRva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGluIGEgbG9vcCwgd2UgbWlnaHQgbmVlZCB0b2tlbi5wYXJhbXMgbGF0ZXIsIGVzcGVjaWFsbHkgaW4gdGhpcyBmb3JtIG9mIFwiKGV4cHJlc3Npb24pOnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgKHRva2VuLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLnBhcnNlKHRva2VuLnZhbHVlLCBzdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci51bmFyeSxcbiAgICAgICAgICAgIC8vIE1hdGNoIGFueSBvZiBub3RcbiAgICAgICAgICAgIHJlZ2V4OiAvKF5ub3RcXHMrKS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0LmV4cHJlc3Npb25zLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbiwgc3RhY2ssIG91dHB1dCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcblxuICAgICAgICAgICAgICAgIHRva2VuLnZhbHVlID0gdG9rZW4udmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5sb29rdXAodmFsdWUsIHRva2VuKTtcblxuICAgICAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmV4cHJlc3Npb24uY29tcGlsZTogJywgJ09wZXJhdG9yOiAnLCBvcGVyYXRvciwgJyBmcm9tICcsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgIChzdGFja1tzdGFjay5sZW5ndGggLSAxXS50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci51bmFyeSB8fCBzdGFja1tzdGFjay5sZW5ndGggLSAxXS50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci5iaW5hcnkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3BlcmF0b3IuYXNzb2NpYXRpdml0eSA9PT0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLmxlZnRUb1JpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5wcmVjaWRlbmNlID49IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLnByZWNpZGVuY2UpIHx8XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wZXJhdG9yLmFzc29jaWF0aXZpdHkgPT09IFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5yaWdodFRvTGVmdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IucHJlY2lkZW5jZSA+IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLnByZWNpZGVuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRlbXApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gob3BlcmF0b3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBzdGFjaykge1xuICAgICAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5wYXJzZSh0b2tlbi52YWx1ZSwgc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1hdGNoIGEgc3RyaW5nLiBUaGlzIGlzIGFueXRoaW5nIGJldHdlZW4gYSBwYWlyIG9mIHNpbmdsZSBvciBkb3VibGUgcXVvdGVzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5zdHJpbmcsXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9tYXRjaC1xdW90ZWQtc3RyaW5nXG4gICAgICAgICAgICByZWdleDogL14oW1wiJ10pKD86KD89KFxcXFw/KSlcXDJbXFxzXFxTXSkqP1xcMS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZCxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBsZXQge3ZhbHVlfSA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcXVvdGVzIGZyb20gdGhlIHN0cmluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbGljZSgwLCAxKSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJ1xcXFxcIicsICdcIicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnXFxcXFxcJycsICdcXCcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0b2tlbi52YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJykucmVwbGFjZSgvXFxcXHIvZywgJ1xccicpO1xuICAgICAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmV4cHJlc3Npb24uY29tcGlsZTogJywgJ1N0cmluZyB2YWx1ZTogJywgdG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZTogVHdpZy5leHByZXNzaW9uLmZuLnBhcnNlLnB1c2hWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1hdGNoIGEgc3ViZXhwcmVzc2lvbiBzZXQgc3RhcnQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLnN1YmV4cHJlc3Npb24uc3RhcnQsXG4gICAgICAgICAgICByZWdleDogL15cXCgvLFxuICAgICAgICAgICAgbmV4dDogVHdpZy5leHByZXNzaW9uLnNldC5leHByZXNzaW9ucy5jb25jYXQoW1R3aWcuZXhwcmVzc2lvbi50eXBlLnN1YmV4cHJlc3Npb24uZW5kXSksXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgdG9rZW4udmFsdWUgPSAnKCc7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlOiBUd2lnLmV4cHJlc3Npb24uZm4ucGFyc2UucHVzaFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1hdGNoIGEgc3ViZXhwcmVzc2lvbiBzZXQgZW5kLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5zdWJleHByZXNzaW9uLmVuZCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXlxcKS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZCxcbiAgICAgICAgICAgIHZhbGlkYXRlKG1hdGNoLCB0b2tlbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIGJhY2sgdGhyb3VnaCBwcmV2aW91cyB0b2tlbnMgdG8gZW5zdXJlIHdlIGZvbGxvdyBhIHN1YmV4cHJlc3Npb24gc3RhcnRcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZFN1YmV4cHJlc3Npb25TdGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U3ViZXhwcmVzc2lvblN0YXJ0SW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB1bmNsb3NlZFBhcmFtZXRlckNvdW50ID0gMDtcblxuICAgICAgICAgICAgICAgIHdoaWxlICghZm91bmRTdWJleHByZXNzaW9uU3RhcnQgJiYgaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kU3ViZXhwcmVzc2lvblN0YXJ0ID0gdG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUuc3ViZXhwcmVzc2lvbi5zdGFydDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzbHkgZm91bmQgYSBzdWJleHByZXNzaW9uIGVuZCwgdGhlbiB0aGlzIHN1YmV4cHJlc3Npb24gc3RhcnQgaXMgdGhlIHN0YXJ0IG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgc3ViZXhwcmVzc2lvbiwgbm90IHRoZSBzdWJleHByZXNzaW9uIHdlIGFyZSBzZWFyY2hpbmcgZm9yXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFN1YmV4cHJlc3Npb25TdGFydCAmJiBuZXh0U3ViZXhwcmVzc2lvblN0YXJ0SW52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFN1YmV4cHJlc3Npb25TdGFydEludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kU3ViZXhwcmVzc2lvblN0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDb3VudCBwYXJhbWV0ZXIgdG9rZW5zIHRvIGVuc3VyZSB3ZSBkb250IHJldHVybiB0cnV0aHkgZm9yIGEgcGFyYW1ldGVyIG9wZW5lclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNsb3NlZFBhcmFtZXRlckNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jbG9zZWRQYXJhbWV0ZXJDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLnN1YmV4cHJlc3Npb24uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3ViZXhwcmVzc2lvblN0YXJ0SW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZm91bmQgdW5jbG9zZWQgcGFyYW1ldGVycywgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZGlkbnQgZmluZCBzdWJleHByZXNzaW9uIHN0YXJ0LCByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRydWVcblxuICAgICAgICAgICAgICAgIHJldHVybiAoZm91bmRTdWJleHByZXNzaW9uU3RhcnQgJiYgKHVuY2xvc2VkUGFyYW1ldGVyQ291bnQgPT09IDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBiYXNpY2FsbHkgYSBjb3B5IG9mIHBhcmFtZXRlciBlbmQgY29tcGlsYXRpb25cbiAgICAgICAgICAgICAgICBsZXQgc3RhY2tUb2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUb2tlbiA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwICYmIHN0YWNrVG9rZW4udHlwZSAhPT0gVHdpZy5leHByZXNzaW9uLnR5cGUuc3ViZXhwcmVzc2lvbi5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChzdGFja1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1vdmUgY29udGVudHMgb2YgcGFyZW5zIGludG8gcHJlY2VkaW5nIGZpbHRlclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtU3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAodG9rZW4udHlwZSAhPT0gVHdpZy5leHByZXNzaW9uLnR5cGUuc3ViZXhwcmVzc2lvbi5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdG9rZW4gdG8gYXJndW1lbnRzIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtU3RhY2sudW5zaGlmdCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gb3V0cHV0LnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtU3RhY2sudW5zaGlmdCh0b2tlbik7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdG9rZW4gYXQgdGhlIHRvcCBvZiB0aGUgKnN0YWNrKiBpcyBhIGZ1bmN0aW9uIHRva2VuLCBwb3AgaXQgb250byB0aGUgb3V0cHV0IHF1ZXVlLlxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdG9rZW4gcHJlY2VkaW5nIHRoZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YWNrVG9rZW4gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAoc3RhY2tUb2tlbi50eXBlICE9PSBUd2lnLmV4cHJlc3Npb24udHlwZS5fZnVuY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tUb2tlbi50eXBlICE9PSBUd2lnLmV4cHJlc3Npb24udHlwZS5maWx0ZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tUb2tlbi50eXBlICE9PSBUd2lnLmV4cHJlc3Npb24udHlwZS50ZXN0ICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrVG9rZW4udHlwZSAhPT0gVHdpZy5leHByZXNzaW9uLnR5cGUua2V5LmJyYWNrZXRzKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmRUb2tlbi5leHByZXNzaW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgc3RhcnQgYW5kIGVuZCB0b2tlbiBmcm9tIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtU3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtU3RhY2suc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBlbmRUb2tlbi5wYXJhbXMgPSBwYXJhbVN0YWNrO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKGVuZFRva2VuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBiZSBoaXRcbiAgICAgICAgICAgICAgICAgICAgZW5kVG9rZW4uZXhwcmVzc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1Rva2VuLnBhcmFtcyA9IHBhcmFtU3RhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBzdGFjaywgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5leHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi5wYXJhbXMsIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVW5leHBlY3RlZCBzdWJleHByZXNzaW9uIGVuZCB3aGVuIHRva2VuIGlzIG5vdCBtYXJrZWQgYXMgYW4gZXhwcmVzc2lvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1hdGNoIGEgcGFyYW1ldGVyIHNldCBzdGFydC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0LFxuICAgICAgICAgICAgcmVnZXg6IC9eXFwoLyxcbiAgICAgICAgICAgIG5leHQ6IFR3aWcuZXhwcmVzc2lvbi5zZXQuZXhwcmVzc2lvbnMuY29uY2F0KFtUd2lnLmV4cHJlc3Npb24udHlwZS5wYXJhbWV0ZXIuZW5kXSksXG4gICAgICAgICAgICB2YWxpZGF0ZShtYXRjaCwgdG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCB1c2UgdGhlIHJlZ2V4IHRvIHRlc3QgaWYgd2UgZm9sbG93IGEgc3BhY2UgYmVjYXVzZSBleHByZXNzaW9uIGlzIHRyaW1tZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFzdFRva2VuICYmICghVHdpZy5leHByZXNzaW9uLnJlc2VydmVkV29yZHMuaW5jbHVkZXMobGFzdFRva2VuLnZhbHVlLnRyaW0oKSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBpbGU6IFR3aWcuZXhwcmVzc2lvbi5mbi5jb21waWxlLnB1c2hCb3RoLFxuICAgICAgICAgICAgcGFyc2U6IFR3aWcuZXhwcmVzc2lvbi5mbi5wYXJzZS5wdXNoXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWF0Y2ggYSBwYXJhbWV0ZXIgc2V0IGVuZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLmVuZCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXlxcKS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZCxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhY2tUb2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUb2tlbiA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwICYmIHN0YWNrVG9rZW4udHlwZSAhPT0gVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHN0YWNrVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBzdGFja1Rva2VuID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjb250ZW50cyBvZiBwYXJlbnMgaW50byBwcmVjZWRpbmcgZmlsdGVyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1TdGFjayA9IFtdO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0b2tlbi50eXBlICE9PSBUd2lnLmV4cHJlc3Npb24udHlwZS5wYXJhbWV0ZXIuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRva2VuIHRvIGFyZ3VtZW50cyBzdGFja1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVN0YWNrLnVuc2hpZnQodG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IG91dHB1dC5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJhbVN0YWNrLnVuc2hpZnQodG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0b2tlbiBwcmVjZWRpbmcgdGhlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICB0b2tlbiA9IG91dHB1dFtvdXRwdXQubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAodG9rZW4udHlwZSAhPT0gVHdpZy5leHByZXNzaW9uLnR5cGUuX2Z1bmN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgIT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLmZpbHRlciAmJlxuICAgICAgICAgICAgICAgICAgICB0b2tlbi50eXBlICE9PSBUd2lnLmV4cHJlc3Npb24udHlwZS50ZXN0ICYmXG4gICAgICAgICAgICAgICAgICAgIHRva2VuLnR5cGUgIT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLmtleS5icmFja2V0cykpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kVG9rZW4uZXhwcmVzc2lvbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHN0YXJ0IGFuZCBlbmQgdG9rZW4gZnJvbSBzdGFja1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVN0YWNrLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZW5kVG9rZW4ucGFyYW1zID0gcGFyYW1TdGFjaztcblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChlbmRUb2tlbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kVG9rZW4uZXhwcmVzc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5wYXJhbXMgPSBwYXJhbVN0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgc3RhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBhcnJheUVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4ucGFyYW1zLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHVzaCB2YWx1ZXMgaW50byB0aGUgYXJyYXkgdW50aWwgdGhlIHN0YXJ0IG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5wYXJhbWV0ZXIuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5RW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFycmF5RW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ0V4cGVjdGVkIGVuZCBvZiBwYXJhbWV0ZXIgc2V0LicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmV3QXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5zbGljZSxcbiAgICAgICAgICAgIHJlZ2V4OiAvXlxcWygtP1xcdyo6LT9cXHcqKVxcXS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZCxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZVJhbmdlID0gdG9rZW4ubWF0Y2hbMV0uc3BsaXQoJzonKTtcblxuICAgICAgICAgICAgICAgIC8vIFNsaWNlU3RhcnQgY2FuIGJlIHVuZGVmaW5lZCB3aGVuIHdlIHBhc3MgcGFyYW1ldGVycyB0byB0aGUgc2xpY2UgZmlsdGVyIGxhdGVyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VTdGFydCA9IHNsaWNlUmFuZ2VbMF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VFbmQgPSBzbGljZVJhbmdlWzFdO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4udmFsdWUgPSAnc2xpY2UnO1xuICAgICAgICAgICAgICAgIHRva2VuLnBhcmFtcyA9IFtzbGljZVN0YXJ0LCBzbGljZUVuZF07XG5cbiAgICAgICAgICAgICAgICAvLyBTbGljZUVuZCBjYW4ndCBiZSB1bmRlZmluZWQgYXMgdGhlIHNsaWNlIGZpbHRlciBkb2Vzbid0IGNoZWNrIGZvciB0aGlzLCBidXQgaXQgZG9lcyBjaGVjayB0aGUgbGVuZ3RoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIHBhcmFtcyBhcnJheSwgc28ganVzdCBzaG9ydGVuIGl0LlxuICAgICAgICAgICAgICAgIGlmICghc2xpY2VFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ucGFyYW1zID0gW3NsaWNlU3RhcnRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgc3RhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxldCB7cGFyYW1zfSA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChwYXJhbXNbMF0sIDEwKS50b1N0cmluZygpID09PSBwYXJhbXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zWzBdID0gcGFyc2VJbnQocGFyYW1zWzBdLCAxMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0W3BhcmFtc1swXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZS5vcHRpb25zLnN0cmljdFZhcmlhYmxlcyAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVmFyaWFibGUgXCInICsgcGFyYW1zWzBdICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zWzBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocGFyYW1zWzFdLCAxMCkudG9TdHJpbmcoKSA9PT0gcGFyYW1zWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbMV0gPSBwYXJzZUludChwYXJhbXNbMV0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dFtwYXJhbXNbMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnRlbXBsYXRlLm9wdGlvbnMuc3RyaWN0VmFyaWFibGVzICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVmFyaWFibGUgXCInICsgcGFyYW1zWzFdICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IFtwYXJhbXNbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbMV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goVHdpZy5maWx0ZXIuY2FsbChzdGF0ZSwgdG9rZW4udmFsdWUsIGlucHV0LCBwYXJhbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYXRjaCBhbiBhcnJheSBzdGFydC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuYXJyYXkuc3RhcnQsXG4gICAgICAgICAgICByZWdleDogL15cXFsvLFxuICAgICAgICAgICAgbmV4dDogVHdpZy5leHByZXNzaW9uLnNldC5leHByZXNzaW9ucy5jb25jYXQoW1R3aWcuZXhwcmVzc2lvbi50eXBlLmFycmF5LmVuZF0pLFxuICAgICAgICAgICAgY29tcGlsZTogVHdpZy5leHByZXNzaW9uLmZuLmNvbXBpbGUucHVzaEJvdGgsXG4gICAgICAgICAgICBwYXJzZTogVHdpZy5leHByZXNzaW9uLmZuLnBhcnNlLnB1c2hcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYXRjaCBhbiBhcnJheSBlbmQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmFycmF5LmVuZCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXlxcXS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZCxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrVG9rZW47XG4gICAgICAgICAgICAgICAgLy8gUG9wIHRva2VucyBvZmYgdGhlIHN0YWNrIHVudGlsIHRoZSBzdGFydCBvZiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9yICg7aSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tUb2tlbi50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5hcnJheS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChzdGFja1Rva2VuKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIHN0YWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlFbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIHZhbHVlcyBpbnRvIHRoZSBhcnJheSB1bnRpbCB0aGUgc3RhcnQgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLmFycmF5LnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheUVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFhcnJheUVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdFeHBlY3RlZCBlbmQgb2YgYXJyYXkuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChuZXdBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFRva2VuIHRoYXQgcmVwcmVzZW50cyB0aGUgc3RhcnQgb2YgYSBoYXNoIG1hcCAnfSdcbiAgICAgICAgLy9cbiAgICAgICAgLy8gSGFzaCBtYXBzIHRha2UgdGhlIGZvcm06XG4gICAgICAgIC8vICAgIHsgXCJrZXlcIjogJ3ZhbHVlJywgXCJhbm90aGVyX2tleVwiOiBpdGVtIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gS2V5cyBtdXN0IGJlIHF1b3RlZCAoZWl0aGVyIHNpbmdsZSBvciBkb3VibGUpIGFuZCB2YWx1ZXMgY2FuIGJlIGFueSBleHByZXNzaW9uLlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5vYmplY3Quc3RhcnQsXG4gICAgICAgICAgICByZWdleDogL15cXHsvLFxuICAgICAgICAgICAgbmV4dDogVHdpZy5leHByZXNzaW9uLnNldC5leHByZXNzaW9ucy5jb25jYXQoW1R3aWcuZXhwcmVzc2lvbi50eXBlLm9iamVjdC5lbmRdKSxcbiAgICAgICAgICAgIGNvbXBpbGU6IFR3aWcuZXhwcmVzc2lvbi5mbi5jb21waWxlLnB1c2hCb3RoLFxuICAgICAgICAgICAgcGFyc2U6IFR3aWcuZXhwcmVzc2lvbi5mbi5wYXJzZS5wdXNoXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVG9rZW4gdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgYSBIYXNoIE1hcCAnfSdcbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbG9naWMgZm9yIGJ1aWxkaW5nIHRoZSBpbnRlcm5hbFxuICAgICAgICAvLyByZXByZXNlbnRhdGlvbiBvZiBhIGhhc2ggbWFwIGlzIGRlZmluZWQuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLm9iamVjdC5lbmQsXG4gICAgICAgICAgICByZWdleDogL15cXH0vLFxuICAgICAgICAgICAgbmV4dDogVHdpZy5leHByZXNzaW9uLnNldC5vcGVyYXRpb25zRXh0ZW5kZWQsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzdGFja1Rva2VuO1xuXG4gICAgICAgICAgICAgICAgLy8gUG9wIHRva2VucyBvZmYgdGhlIHN0YWNrIHVudGlsIHRoZSBzdGFydCBvZiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgZm9yICg7aSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tUb2tlbiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tUb2tlbiAmJiBzdGFja1Rva2VuLnR5cGUgPT09IFR3aWcuZXhwcmVzc2lvbi50eXBlLm9iamVjdC5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChzdGFja1Rva2VuKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UoZW5kVG9rZW4sIHN0YWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdEVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHVzaCB2YWx1ZXMgaW50byB0aGUgYXJyYXkgdW50aWwgdGhlIHN0YXJ0IG9mIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuICYmIHRva2VuLnR5cGUgJiYgdG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUub2JqZWN0LnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RFbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi50eXBlICYmICh0b2tlbi50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci5iaW5hcnkgfHwgdG9rZW4udHlwZSA9PT0gVHdpZy5leHByZXNzaW9uLnR5cGUub3BlcmF0b3IudW5hcnkpICYmIHRva2VuLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdNaXNzaW5nIHZhbHVlIGZvciBrZXkgXFwnJyArIHRva2VuLmtleSArICdcXCcgaW4gb2JqZWN0IGRlZmluaXRpb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFt0b2tlbi5rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXNlcnZlIHRoZSBvcmRlciB0aGF0IGVsZW1lbnRzIGFyZSBhZGRlZCB0byB0aGUgbWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzaW5jZSBKYXZhU2NyaXB0IG9iamVjdHMgZG9uJ3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGd1YXJhbnRlZSB0aGUgb3JkZXIgb2Yga2V5c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld09iamVjdC5fa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0Ll9rZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld09iamVjdC5fa2V5cy51bnNoaWZ0KHRva2VuLmtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHZhbHVlIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0RW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5ld09iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVG9rZW4gcmVwcmVzZW50aW5nIGEgZmlsdGVyXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEZpbHRlcnMgY2FuIGZvbGxvdyBhbnkgZXhwcmVzc2lvbiBhbmQgdGFrZSB0aGUgZm9ybTpcbiAgICAgICAgLy8gICAgZXhwcmVzc2lvbnxmaWx0ZXIob3B0aW9uYWwsIGFyZ3MpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEZpbHRlciBwYXJzaW5nIGlzIGRvbmUgaW4gdGhlIFR3aWcuZmlsdGVycyBuYW1lc3BhY2UuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmZpbHRlcixcbiAgICAgICAgICAgIC8vIE1hdGNoIGEgfCB0aGVuIGEgbGV0dGVyIG9yIF8sIHRoZW4gYW55IG51bWJlciBvZiBsZXR0ZXJzLCBudW1iZXJzLCBfIG9yIC1cbiAgICAgICAgICAgIHJlZ2V4OiAvXlxcfFxccz8oW2EtekEtWl9dW2EtekEtWjAtOV8tXSopLyxcbiAgICAgICAgICAgIG5leHQ6IFR3aWcuZXhwcmVzc2lvbi5zZXQub3BlcmF0aW9uc0V4dGVuZGVkLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0XG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICB0b2tlbi52YWx1ZSA9IHRva2VuLm1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgc3RhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZVBhcmFtcyhzdGF0ZSwgdG9rZW4ucGFyYW1zLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZmlsdGVyLmNhbGwoc3RhdGUsIHRva2VuLnZhbHVlLCBpbnB1dCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5fZnVuY3Rpb24sXG4gICAgICAgICAgICAvLyBNYXRjaCBhbnkgbGV0dGVyIG9yIF8sIHRoZW4gYW55IG51bWJlciBvZiBsZXR0ZXJzLCBudW1iZXJzLCBfIG9yIC0gZm9sbG93ZWQgYnkgKFxuICAgICAgICAgICAgcmVnZXg6IC9eKFthLXpBLVpfXVxcdyopXFxzKlxcKC8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24udHlwZS5wYXJhbWV0ZXIuc3RhcnQsXG4gICAgICAgICAgICB2YWxpZGF0ZShtYXRjaCkge1xuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBhIHJlc2VydmVkIHdvcmRcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMV0gJiYgKCFUd2lnLmV4cHJlc3Npb24ucmVzZXJ2ZWRXb3Jkcy5pbmNsdWRlcyhtYXRjaFsxXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zZm9ybSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJygnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbiA9IHRva2VuLm1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIHRva2VuLmZuID0gZm47XG4gICAgICAgICAgICAgICAgLy8gQ2xlYW51cCB0b2tlblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4udmFsdWU7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIHN0YWNrLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHtmbn0gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VQYXJhbXMoc3RhdGUsIHRva2VuLnBhcmFtcywgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUd2lnLmZ1bmN0aW9uc1tmbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZnVuY3Rpb24gZnJvbSB0aGUgYnVpbHQtaW4gZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBUd2lnLmZ1bmN0aW9uc1tmbl0uYXBwbHkoc3RhdGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0W2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBmdW5jdGlvbiBmcm9tIHRoZSB1c2VyL2NvbnRleHQgZGVmaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRbZm5dKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKGZuICsgJyBmdW5jdGlvbiBkb2VzIG5vdCBleGlzdCBhbmQgaXMgbm90IGRlZmluZWQgaW4gdGhlIGNvbnRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUb2tlbiByZXByZXNlbnRpbmcgYSB2YXJpYWJsZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVmFyaWFibGVzIGNhbiBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmVzIGFuZFxuICAgICAgICAvLyBkYXNoZXMsIGJ1dCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgdW5kZXJzY29yZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVmFyaWFibGVzIGFyZSByZXRyaWV2ZWQgZnJvbSB0aGUgcmVuZGVyIGNvbnRleHQgYW5kIHRha2VcbiAgICAgICAgLy8gdGhlIHZhbHVlIG9mICd1bmRlZmluZWQnIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBkb2Vzbid0XG4gICAgICAgIC8vIGV4aXN0IGluIHRoZSBjb250ZXh0LlxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS52YXJpYWJsZSxcbiAgICAgICAgICAgIC8vIE1hdGNoIGFueSBsZXR0ZXIgb3IgXywgdGhlbiBhbnkgbnVtYmVyIG9mIGxldHRlcnMsIG51bWJlcnMsIF8gb3IgLVxuICAgICAgICAgICAgcmVnZXg6IC9eW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZC5jb25jYXQoW1xuICAgICAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5zdGFydFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBjb21waWxlOiBUd2lnLmV4cHJlc3Npb24uZm4uY29tcGlsZS5wdXNoLFxuICAgICAgICAgICAgdmFsaWRhdGUobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCFUd2lnLmV4cHJlc3Npb24ucmVzZXJ2ZWRXb3Jkcy5pbmNsdWRlcyhtYXRjaFswXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBzdGFjaywgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdmFyaWFibGUgZnJvbSB0aGUgY29udGV4dFxuICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucmVzb2x2ZUFzeW5jLmNhbGwoc3RhdGUsIGNvbnRleHRbdG9rZW4udmFsdWVdLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGVtcGxhdGUub3B0aW9ucy5zdHJpY3RWYXJpYWJsZXMgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdWYXJpYWJsZSBcIicgKyB0b2tlbi52YWx1ZSArICdcIiBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5rZXkucGVyaW9kLFxuICAgICAgICAgICAgcmVnZXg6IC9eXFwuKFxcdyspLyxcbiAgICAgICAgICAgIG5leHQ6IFR3aWcuZXhwcmVzc2lvbi5zZXQub3BlcmF0aW9uc0V4dGVuZGVkLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnR5cGUucGFyYW1ldGVyLnN0YXJ0XG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4sIHN0YWNrLCBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICB0b2tlbi5rZXkgPSB0b2tlbi5tYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBzdGFjaywgY29udGV4dCwgbmV4dFRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBzdGF0ZS50ZW1wbGF0ZS5vcHRpb25zLnN0cmljdFZhcmlhYmxlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ0tleSBcIicgKyBrZXkgKyAnXCIgZm9yIG9iamVjdCB3aXRoIGtleXMgXCInICsgT2JqZWN0LmtleXMob2JqZWN0KS5qb2luKCcsICcpICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ0tleSBcIicgKyBrZXkgKyAnXCIgZG9lcyBub3QgZXhpc3QgYXMgdGhlIG9iamVjdCBpcyBlbXB0eS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZVBhcmFtcyhzdGF0ZSwgdG9rZW4ucGFyYW1zLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdmFyaWFibGUgZnJvbSB0aGUgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmplY3RbJ2dldCcgKyBjYXBpdGFsaXplKGtleSldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0WydnZXQnICsgY2FwaXRhbGl6ZShrZXkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iamVjdFsnaXMnICsgY2FwaXRhbGl6ZShrZXkpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9iamVjdFsnaXMnICsgY2FwaXRhbGl6ZShrZXkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gcmVzb2x2aW5nIGFuIGV4cHJlc3Npb24gd2UgbmVlZCB0byBwYXNzIG5leHRUb2tlbiBpbiBjYXNlIHRoZSBleHByZXNzaW9uIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucmVzb2x2ZUFzeW5jLmNhbGwoc3RhdGUsIHZhbHVlLCBjb250ZXh0LCBwYXJhbXMsIG5leHRUb2tlbiwgb2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmtleS5icmFja2V0cyxcbiAgICAgICAgICAgIHJlZ2V4OiAvXlxcWyhbXlxcXV0qKVxcXS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnNFeHRlbmRlZC5jb25jYXQoW1xuICAgICAgICAgICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlLnBhcmFtZXRlci5zdGFydFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0b2tlbi5tYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGV4cHJlc3Npb24gc3RhY2sgZm9yIHRoZSBrZXlcbiAgICAgICAgICAgICAgICB0b2tlbi5zdGFjayA9IFR3aWcuZXhwcmVzc2lvbi5jb21waWxlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hdGNoXG4gICAgICAgICAgICAgICAgfSkuc3RhY2s7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIHN0YWNrLCBjb250ZXh0LCBuZXh0VG9rZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBFdmFsdWF0ZSBrZXlcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdDtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VQYXJhbXMoc3RhdGUsIHRva2VuLnBhcmFtcywgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocGFyYW1ldGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSBwYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZXhwcmVzc2lvbi5wYXJzZUFzeW5jLmNhbGwoc3RhdGUsIHRva2VuLnN0YWNrLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0ICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIHN0YXRlLnRlbXBsYXRlLm9wdGlvbnMuc3RyaWN0VmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignS2V5IFwiJyArIGtleSArICdcIiBmb3IgYXJyYXkgd2l0aCBrZXlzIFwiJyArIGtleXMuam9pbignLCAnKSArICdcIiBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignS2V5IFwiJyArIGtleSArICdcIiBkb2VzIG5vdCBleGlzdCBhcyB0aGUgYXJyYXkgaXMgZW1wdHkuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB2YXJpYWJsZSBmcm9tIHRoZSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiByZXNvbHZpbmcgYW4gZXhwcmVzc2lvbiB3ZSBuZWVkIHRvIHBhc3MgbmV4dFRva2VuIGluIGNhc2UgdGhlIGV4cHJlc3Npb24gaXMgYSBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZXhwcmVzc2lvbi5yZXNvbHZlQXN5bmMuY2FsbChzdGF0ZSwgdmFsdWUsIG9iamVjdCwgcGFyYW1zLCBuZXh0VG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYXRjaCBhIG51bGwgdmFsdWUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLl9udWxsLFxuICAgICAgICAgICAgLy8gTWF0Y2ggYSBudW1iZXJcbiAgICAgICAgICAgIHJlZ2V4OiAvXihudWxsfE5VTEx8bm9uZXxOT05FKS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnMsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuICAgICAgICAgICAgICAgIHRva2VuLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2U6IFR3aWcuZXhwcmVzc2lvbi5mbi5wYXJzZS5wdXNoVmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYXRjaCB0aGUgY29udGV4dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5jb250ZXh0LFxuICAgICAgICAgICAgcmVnZXg6IC9eX2NvbnRleHQvLFxuICAgICAgICAgICAgbmV4dDogVHdpZy5leHByZXNzaW9uLnNldC5vcGVyYXRpb25zRXh0ZW5kZWQuY29uY2F0KFtcbiAgICAgICAgICAgICAgICBUd2lnLmV4cHJlc3Npb24udHlwZS5wYXJhbWV0ZXIuc3RhcnRcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgY29tcGlsZTogVHdpZy5leHByZXNzaW9uLmZuLmNvbXBpbGUucHVzaCxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBzdGFjaywgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWF0Y2ggYSBib29sZWFuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmJvb2wsXG4gICAgICAgICAgICByZWdleDogL14odHJ1ZXxUUlVFfGZhbHNlfEZBTFNFKS8sXG4gICAgICAgICAgICBuZXh0OiBUd2lnLmV4cHJlc3Npb24uc2V0Lm9wZXJhdGlvbnMsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuLCBzdGFjaywgb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgdG9rZW4udmFsdWUgPSAodG9rZW4ubWF0Y2hbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlOiBUd2lnLmV4cHJlc3Npb24uZm4ucGFyc2UucHVzaFZhbHVlXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZSBhIGNvbnRleHQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaXQgaXMgZXhlY3V0ZWQgd2l0aCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgY29udGV4dCBvYmplY3Qga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSByZW5kZXIgY29udGV4dC5cbiAgICAgKi9cbiAgICBUd2lnLmV4cHJlc3Npb24ucmVzb2x2ZUFzeW5jID0gZnVuY3Rpb24gKHZhbHVlLCBjb250ZXh0LCBwYXJhbXMsIG5leHRUb2tlbiwgb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gVHdpZy5Qcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb21pc2UgPSBUd2lnLlByb21pc2UucmVzb2x2ZShwYXJhbXMpO1xuXG4gICAgICAgIC8qXG4gICAgICAgIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGl0IHdpbGwgaGF2ZSBiZWVuIGltcG9zc2libGUgZHVyaW5nIHRoZSBjb21waWxlIHN0YWdlIHRvIGRldGVybWluZSB0aGF0IGEgZm9sbG93aW5nXG4gICAgICAgIHNldCBvZiBwYXJlbnRoZXNlcyB3ZXJlIHBhcmFtZXRlcnMgZm9yIHRoaXMgZnVuY3Rpb24uXG5cbiAgICAgICAgVGhvc2UgcGFyZW50aGVzZXMgd2lsbCBoYXZlIHRoZXJlZm9yZSBiZWVuIG1hcmtlZCBhcyBhbiBleHByZXNzaW9uLCB3aXRoIHRoZWlyIG93biBwYXJhbWV0ZXJzLCB3aGljaCByZWFsbHlcbiAgICAgICAgYmVsb25nIHRvIHRoaXMgZnVuY3Rpb24uXG5cbiAgICAgICAgVGhvc2UgcGFyYW1ldGVycyB3aWxsIGFsc28gbmVlZCBwYXJzaW5nIGluIGNhc2UgdGhleSBhcmUgYWN0dWFsbHkgYW4gZXhwcmVzc2lvbiB0byBwYXNzIGFzIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAqL1xuICAgICAgICBpZiAobmV4dFRva2VuICYmIG5leHRUb2tlbi50eXBlID09PSBUd2lnLmV4cHJlc3Npb24udHlwZS5wYXJhbWV0ZXIuZW5kKSB7XG4gICAgICAgICAgICAvLyBXaGVuIHBhcnNpbmcgdGhlc2UgcGFyYW1ldGVycywgd2UgbmVlZCB0byBnZXQgdGhlbSBhbGwgYmFjaywgbm90IGp1c3QgdGhlIGxhc3QgaXRlbSBvbiB0aGUgc3RhY2suXG4gICAgICAgICAgICBjb25zdCB0b2tlbnNBcmVQYXJhbWV0ZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRUb2tlbi5wYXJhbXMgJiYgVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgbmV4dFRva2VuLnBhcmFtcywgY29udGV4dCwgdG9rZW5zQXJlUGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHAgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBwYXJlbnRoZXNlcyB0b2tlbnMgb24gdGhlIG5leHQgbG9vcFxuICAgICAgICAgICAgICAgICAgICBuZXh0VG9rZW4uY2xlYW51cCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuYXBwbHkob2JqZWN0IHx8IGNvbnRleHQsIHBhcmFtcyB8fCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2lnLmV4cHJlc3Npb24ucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29udGV4dCwgcGFyYW1zLCBuZXh0VG9rZW4sIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gVHdpZy5hc3luYy5wb3RlbnRpYWxseUFzeW5jKHRoaXMsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnJlc29sdmVBc3luYy5jYWxsKHRoaXMsIHZhbHVlLCBjb250ZXh0LCBwYXJhbXMsIG5leHRUb2tlbiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdHJ5IGZvciBsb2dpYyBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBUd2lnLmV4cHJlc3Npb24uaGFuZGxlciA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIGEgbmV3IGV4cHJlc3Npb24gdHlwZSwgYXZhaWxhYmxlIGF0IFR3aWcubG9naWMudHlwZS57dHlwZX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBuYW1lIG9mIHRoZSBuZXcgdHlwZS5cbiAgICAgKi9cbiAgICBUd2lnLmV4cHJlc3Npb24uZXh0ZW5kVHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIFR3aWcuZXhwcmVzc2lvbi50eXBlW3R5cGVdID0gJ1R3aWcuZXhwcmVzc2lvbi50eXBlLicgKyB0eXBlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmQgdGhlIGV4cHJlc3Npb24gcGFyc2luZyBmdW5jdGlvbmFsaXR5IHdpdGggYSBuZXcgZGVmaW5pdGlvbi5cbiAgICAgKlxuICAgICAqIFRva2VuIGRlZmluaXRpb25zIGZvbGxvdyB0aGlzIGZvcm1hdDpcbiAgICAgKiAge1xuICAgICAqICAgICAgdHlwZTogICAgIE9uZSBvZiBUd2lnLmV4cHJlc3Npb24udHlwZS5bdHlwZV0sIGVpdGhlciBwcmUtZGVmaW5lZCBvciBhZGRlZCB1c2luZ1xuICAgICAqICAgICAgICAgICAgICAgICAgICBUd2lnLmV4cHJlc3Npb24uZXh0ZW5kVHlwZVxuICAgICAqXG4gICAgICogICAgICBuZXh0OiAgICAgQXJyYXkgb2YgdHlwZXMgZnJvbSBUd2lnLmV4cHJlc3Npb24udHlwZSB0aGF0IGNhbiBmb2xsb3cgdGhpcyB0b2tlbixcbiAgICAgKlxuICAgICAqICAgICAgcmVnZXg6ICAgIEEgcmVnZXggb3IgYXJyYXkgb2YgcmVnZXgncyB0aGF0IHNob3VsZCBtYXRjaCB0aGUgdG9rZW4uXG4gICAgICpcbiAgICAgKiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRva2VuLCBzdGFjaywgb3V0cHV0KSBjYWxsZWQgd2hlbiB0aGlzIHRva2VuIGlzIGJlaW5nIGNvbXBpbGVkLlxuICAgICAqICAgICAgICAgICAgICAgICAgIFNob3VsZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggc3RhY2sgYW5kIG91dHB1dCBzZXQuXG4gICAgICpcbiAgICAgKiAgICAgIHBhcnNlOiAgIGZ1bmN0aW9uKHRva2VuLCBzdGFjaywgY29udGV4dCkgY2FsbGVkIHdoZW4gdGhpcyB0b2tlbiBpcyBiZWluZyBwYXJzZWQuXG4gICAgICogICAgICAgICAgICAgICAgICAgU2hvdWxkIHJldHVybiBhbiBvYmplY3Qgd2l0aCBzdGFjayBhbmQgY29udGV4dCBzZXQuXG4gICAgICogIH1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZpbml0aW9uIEEgdG9rZW4gZGVmaW5pdGlvbi5cbiAgICAgKi9cbiAgICBUd2lnLmV4cHJlc3Npb24uZXh0ZW5kID0gZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKCFkZWZpbml0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gZXh0ZW5kIGxvZ2ljIGRlZmluaXRpb24uIE5vIHR5cGUgcHJvdmlkZWQgZm9yICcgKyBkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFR3aWcuZXhwcmVzc2lvbi5oYW5kbGVyW2RlZmluaXRpb24udHlwZV0gPSBkZWZpbml0aW9uO1xuICAgIH07XG5cbiAgICAvLyBFeHRlbmQgd2l0aCBidWlsdC1pbiBleHByZXNzaW9uc1xuICAgIHdoaWxlIChUd2lnLmV4cHJlc3Npb24uZGVmaW5pdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBUd2lnLmV4cHJlc3Npb24uZXh0ZW5kKFR3aWcuZXhwcmVzc2lvbi5kZWZpbml0aW9ucy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmVhayBhbiBleHByZXNzaW9uIGludG8gdG9rZW5zIGRlZmluZWQgaW4gVHdpZy5leHByZXNzaW9uLmRlZmluaXRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJhd1Rva2VuIFRoZSBzdHJpbmcgdG8gdG9rZW5pemUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgdG9rZW5zLlxuICAgICAqL1xuICAgIFR3aWcuZXhwcmVzc2lvbi50b2tlbml6ZSA9IGZ1bmN0aW9uIChyYXdUb2tlbikge1xuICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IHJhd1Rva2VuLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBbXTtcbiAgICAgICAgLy8gS2VlcCBhbiBvZmZzZXQgb2YgdGhlIGxvY2F0aW9uIGluIHRoZSBleHByZXNzaW9uIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgICAgICAgbGV0IGV4cE9mZnNldCA9IDA7XG4gICAgICAgIC8vIFRoZSB2YWxpZCBuZXh0IHRva2VucyBvZiB0aGUgcHJldmlvdXMgdG9rZW5cbiAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICAvLyBNYXRjaCBpbmZvcm1hdGlvblxuICAgICAgICBsZXQgdHlwZTtcbiAgICAgICAgbGV0IHJlZ2V4O1xuICAgICAgICBsZXQgcmVnZXhJO1xuICAgICAgICAvLyBUaGUgcG9zc2libGUgbmV4dCB0b2tlbiBmb3IgdGhlIG1hdGNoXG4gICAgICAgIGxldCB0b2tlbk5leHQ7XG4gICAgICAgIC8vIEhhcyBhIG1hdGNoIGJlZW4gZm91bmQgZnJvbSB0aGUgZGVmaW5pdGlvbnNcbiAgICAgICAgbGV0IG1hdGNoRm91bmQ7XG4gICAgICAgIGxldCBpbnZhbGlkTWF0Y2hlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoRnVuY3Rpb24gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcGFzcyBhcmd1bWVudHMgdG8gYEFycmF5LnNsaWNlYCwgdGhhdCBpcyBhIHBlcmZvcm1hbmNlIGtpbGxlclxuICAgICAgICAgICAgbGV0IG1hdGNoSSA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBuZXcgQXJyYXkobWF0Y2hJKTtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoSS0tID4gMCkge1xuICAgICAgICAgICAgICAgIG1hdGNoW21hdGNoSV0gPSBhcmdzW21hdGNoSV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmV4cHJlc3Npb24udG9rZW5pemUnLFxuICAgICAgICAgICAgICAgICdNYXRjaGVkIGEgJywgdHlwZSwgJyByZWd1bGFyIGV4cHJlc3Npb24gb2YgJywgbWF0Y2gpO1xuXG4gICAgICAgICAgICBpZiAobmV4dCAmJiAhbmV4dC5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgICAgICAgIGludmFsaWRNYXRjaGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgKyAnIGNhbm5vdCBmb2xsb3cgYSAnICsgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICcgYXQgdGVtcGxhdGU6JyArIGV4cE9mZnNldCArICcgbmVhciBcXCcnICsgbWF0Y2hbMF0uc2xpY2UoMCwgMjApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICcuLi5cXCcnXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIE5vdCBhIG1hdGNoLCBkb24ndCBjaGFuZ2UgdGhlIGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBUd2lnLmV4cHJlc3Npb24uaGFuZGxlclt0eXBlXTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgdGhlIHRva2VuIGlmIGEgdmFsaWRhdGlvbiBmdW5jdGlvbiBpcyBwcm92aWRlZFxuICAgICAgICAgICAgaWYgKGhhbmRsZXIudmFsaWRhdGUgJiYgIWhhbmRsZXIudmFsaWRhdGUobWF0Y2gsIHRva2VucykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGludmFsaWRNYXRjaGVzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1hdGNoWzBdLFxuICAgICAgICAgICAgICAgIG1hdGNoXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAocmF3VG9rZW4ucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0b2tlbi5wb3NpdGlvbiA9IHJhd1Rva2VuLnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICAgIG1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbmV4dCA9IHRva2VuTmV4dDtcbiAgICAgICAgICAgIGV4cE9mZnNldCArPSBtYXRjaFswXS5sZW5ndGg7XG5cbiAgICAgICAgICAgIC8vIERvZXMgdGhlIHRva2VuIG5lZWQgdG8gcmV0dXJuIG91dHB1dCBiYWNrIHRvIHRoZSBleHByZXNzaW9uIHN0cmluZ1xuICAgICAgICAgICAgLy8gZS5nLiBhIGZ1bmN0aW9uIG1hdGNoIG9mIGN5Y2xlKCBtaWdodCByZXR1cm4gdGhlICcoJyBiYWNrIHRvIHRoZSBleHByZXNzaW9uXG4gICAgICAgICAgICAvLyBUaGlzIGFsbG93cyBsb29rLWFoZWFkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0b2tlbiB0eXBlcyAoZS5nLiBmdW5jdGlvbnMgYW5kIHZhcmlhYmxlIG5hbWVzKVxuICAgICAgICAgICAgaWYgKGhhbmRsZXIudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIudHJhbnNmb3JtKG1hdGNoLCB0b2tlbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgVHdpZy5sb2cuZGVidWcoJ1R3aWcuZXhwcmVzc2lvbi50b2tlbml6ZScsICdUb2tlbml6aW5nIGV4cHJlc3Npb24gJywgZXhwcmVzc2lvbik7XG5cbiAgICAgICAgd2hpbGUgKGV4cHJlc3Npb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24udHJpbSgpO1xuICAgICAgICAgICAgZm9yICh0eXBlIGluIFR3aWcuZXhwcmVzc2lvbi5oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKFR3aWcuZXhwcmVzc2lvbi5oYW5kbGVyLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbk5leHQgPSBUd2lnLmV4cHJlc3Npb24uaGFuZGxlclt0eXBlXS5uZXh0O1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IFR3aWcuZXhwcmVzc2lvbi5oYW5kbGVyW3R5cGVdLnJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICBUd2lnLmxvZy50cmFjZSgnQ2hlY2tpbmcgdHlwZSAnLCB0eXBlLCAnIG9uICcsIGV4cHJlc3Npb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWdleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4SSA9IHJlZ2V4Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZWdleEktLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKHJlZ2V4W3JlZ2V4SV0sIG1hdGNoRnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZShyZWdleCwgbWF0Y2hGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBBbiBleHByZXNzaW9uIHRva2VuIGhhcyBiZWVuIG1hdGNoZWQuIEJyZWFrIHRoZSBmb3IgbG9vcCBhbmQgc3RhcnQgdHJ5aW5nIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vICBtYXRjaCB0aGUgbmV4dCB0ZW1wbGF0ZSAoaWYgZXhwcmVzc2lvbiBpc24ndCBlbXB0eS4pXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFtYXRjaEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRNYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoaW52YWxpZE1hdGNoZXMuam9pbignIE9SICcpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVW5hYmxlIHRvIHBhcnNlIFxcJycgKyBleHByZXNzaW9uICsgJ1xcJyBhdCB0ZW1wbGF0ZSBwb3NpdGlvbicgKyBleHBPZmZzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmV4cHJlc3Npb24udG9rZW5pemUnLCAnVG9rZW5pemVkIHRvICcsIHRva2Vucyk7XG4gICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbXBpbGUgYW4gZXhwcmVzc2lvbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByYXdUb2tlbiBUaGUgdW5jb21waWxlZCB0b2tlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNvbXBpbGVkIHRva2VuLlxuICAgICAqL1xuICAgIFR3aWcuZXhwcmVzc2lvbi5jb21waWxlID0gZnVuY3Rpb24gKHJhd1Rva2VuKSB7XG4gICAgICAgIC8vIFRva2VuaXplIGV4cHJlc3Npb25cbiAgICAgICAgY29uc3QgdG9rZW5zID0gVHdpZy5leHByZXNzaW9uLnRva2VuaXplKHJhd1Rva2VuKTtcbiAgICAgICAgbGV0IHRva2VuID0gbnVsbDtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIGxldCB0b2tlblRlbXBsYXRlID0gbnVsbDtcblxuICAgICAgICBUd2lnLmxvZy50cmFjZSgnVHdpZy5leHByZXNzaW9uLmNvbXBpbGU6ICcsICdDb21waWxpbmcgJywgcmF3VG9rZW4udmFsdWUpO1xuXG4gICAgICAgIC8vIFB1c2ggdG9rZW5zIGludG8gUlBOIHN0YWNrIHVzaW5nIHRoZSBTaHVudGluZy15YXJkIGFsZ29yaXRobVxuICAgICAgICAvLyBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TaHVudGluZ195YXJkX2FsZ29yaXRobVxuXG4gICAgICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRva2VuVGVtcGxhdGUgPSBUd2lnLmV4cHJlc3Npb24uaGFuZGxlclt0b2tlbi50eXBlXTtcblxuICAgICAgICAgICAgVHdpZy5sb2cudHJhY2UoJ1R3aWcuZXhwcmVzc2lvbi5jb21waWxlOiAnLCAnQ29tcGlsaW5nICcsIHRva2VuKTtcblxuICAgICAgICAgICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgIHRva2VuVGVtcGxhdGUuY29tcGlsZSh0b2tlbiwgc3RhY2ssIG91dHB1dCk7XG5cbiAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmV4cHJlc3Npb24uY29tcGlsZTogJywgJ1N0YWNrIGlzJywgc3RhY2spO1xuICAgICAgICAgICAgVHdpZy5sb2cudHJhY2UoJ1R3aWcuZXhwcmVzc2lvbi5jb21waWxlOiAnLCAnT3V0cHV0IGlzJywgb3V0cHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChzdGFjay5wb3AoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBUd2lnLmxvZy50cmFjZSgnVHdpZy5leHByZXNzaW9uLmNvbXBpbGU6ICcsICdGaW5hbCBvdXRwdXQgaXMnLCBvdXRwdXQpO1xuXG4gICAgICAgIHJhd1Rva2VuLnN0YWNrID0gb3V0cHV0O1xuICAgICAgICBkZWxldGUgcmF3VG9rZW4udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJhd1Rva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhbiBSUE4gZXhwcmVzc2lvbiBzdGFjayB3aXRoaW4gYSBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIEFuIGFycmF5IG9mIGNvbXBpbGVkIGV4cHJlc3Npb24gdG9rZW5zLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSByZW5kZXIgY29udGV4dCB0byBwYXJzZSB0aGUgdG9rZW5zIHdpdGguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHQgb2YgcGFyc2luZyBhbGwgdGhlIHRva2Vucy4gVGhlIHJlc3VsdFxuICAgICAqICAgICAgICAgICAgICAgICAgY2FuIGJlIGFueXRoaW5nLCBTdHJpbmcsIEFycmF5LCBPYmplY3QsIGV0Yy4uLiBiYXNlZCBvblxuICAgICAqICAgICAgICAgICAgICAgICAgdGhlIGdpdmVuIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgVHdpZy5leHByZXNzaW9uLnBhcnNlID0gZnVuY3Rpb24gKHRva2VucywgY29udGV4dCwgdG9rZW5zQXJlUGFyYW1ldGVycywgYWxsb3dBc3luYykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gSWYgdGhlIHRva2VuIGlzbid0IGFuIGFycmF5LCBtYWtlIGl0IG9uZS5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRva2VucykpIHtcbiAgICAgICAgICAgIHRva2VucyA9IFt0b2tlbnNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG91dHB1dCBzdGFja1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICBjb25zdCBsb29wVG9rZW5GaXh1cHMgPSBbXTtcbiAgICAgICAgY29uc3QgYmluYXJ5T3BlcmF0b3IgPSBUd2lnLmV4cHJlc3Npb24udHlwZS5vcGVyYXRvci5iaW5hcnk7XG5cbiAgICAgICAgcmV0dXJuIFR3aWcuYXN5bmMucG90ZW50aWFsbHlBc3luYyhzdGF0ZSwgYWxsb3dBc3luYywgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcuYXN5bmMuZm9yRWFjaCh0b2tlbnMsICh0b2tlbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW5UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0b2tlbiBpcyBtYXJrZWQgZm9yIGNsZWFudXAsIHdlIGRvbid0IG5lZWQgdG8gcGFyc2UgaXRcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uY2xlYW51cCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB0b2tlbiB0aGF0IGZvbGxvd3MgdGhpcyBvbmUgc28gdGhhdCB3ZSBjYW4gcGFzcyBpdCB0byB0aGUgcGFyc2VyXG4gICAgICAgICAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggPiBpbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFRva2VuID0gdG9rZW5zW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9rZW5UZW1wbGF0ZSA9IFR3aWcuZXhwcmVzc2lvbi5oYW5kbGVyW3Rva2VuLnR5cGVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuVGVtcGxhdGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdG9rZW5UZW1wbGF0ZS5wYXJzZS5jYWxsKHN0YXRlLCB0b2tlbiwgc3RhY2ssIGNvbnRleHQsIG5leHRUb2tlbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgYW55IGJpbmFyeSB0b2tlbnMgZm9yIGxhdGVyIGlmIHdlIGFyZSBpbiBhIGxvb3AuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09IGJpbmFyeU9wZXJhdG9yICYmIGNvbnRleHQubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBsb29wVG9rZW5GaXh1cHMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGV2ZXJ5IGZpeHVwIGFuZCByZW1vdmUgXCJrZXlcIiBhcyBsb25nIGFzIHRoZXkgc3RpbGwgaGF2ZSBcInBhcmFtc1wiLiBUaGlzIGNvdmVycyB0aGUgdXNlIGNhc2Ugd2hlcmVcbiAgICAgICAgICAgICAgICAvLyBhIFwiOlwiIG9wZXJhdG9yIGlzIHVzZWQgaW4gYSBsb29wIHdpdGggYSBcIihleHByZXNzaW9uKTpcIiBzdGF0ZW1lbnQuIFdlIG5lZWQgdG8gYmUgYWJsZSB0byBldmFsdWF0ZSB0aGUgZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVuID0gbG9vcFRva2VuRml4dXBzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvb3BUb2tlbkZpeHVwID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVuLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wVG9rZW5GaXh1cCA9IGxvb3BUb2tlbkZpeHVwc1tsZW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3BUb2tlbkZpeHVwLnBhcmFtcyAmJiBsb29wVG9rZW5GaXh1cC5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbG9vcFRva2VuRml4dXAua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGFyc2UgaGFzIGJlZW4gY2FsbGVkIHdpdGggYSBzZXQgb2YgdG9rZW5zIHRoYXQgYXJlIHBhcmFtZXRlcnMsIHdlIG5lZWQgdG8gcmV0dXJuIHRoZSB3aG9sZSBzdGFjayxcbiAgICAgICAgICAgICAgICAgICAgLy8gd3JhcHBlZCBpbiBhbiBBcnJheS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2Vuc0FyZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHN0YWNrLnNwbGljZSgwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUG9wIHRoZSBmaW5hbCB2YWx1ZSBvZmYgdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUd2lnO1xufTtcbiIsIi8vICMjIHR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5qc1xuLy9cbi8vIFRoaXMgZmlsZSBoYW5kbGVzIG9wZXJhdG9yIGxvb2t1cHMgYW5kIHBhcnNpbmcuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogT3BlcmF0b3IgYXNzb2NpYXRpdml0eSBjb25zdGFudHMuXG4gICAgICovXG4gICAgVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yID0ge1xuICAgICAgICBsZWZ0VG9SaWdodDogJ2xlZnRUb1JpZ2h0JyxcbiAgICAgICAgcmlnaHRUb0xlZnQ6ICdyaWdodFRvTGVmdCdcbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFpbm1lbnQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYiA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGIuaW5kZXhPZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgICAgIHJldHVybiAoYSA9PT0gYiB8fCBhICE9PSAnJykgJiYgYi5pbmNsdWRlcyhhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbDtcbiAgICAgICAgZm9yIChlbCBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYiwgZWwpICYmIGJbZWxdID09PSBhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcHJlY2lkZW5jZSBhbmQgYXNzb2NpYXRpdml0eSBvZiBhbiBvcGVyYXRvci4gVGhlc2UgZm9sbG93IHRoZSBvcmRlciB0aGF0IEMvQysrIHVzZS5cbiAgICAgKiBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9PcGVyYXRvcnNfaW5fQ19hbmRfQysrIGZvciB0aGUgdGFibGUgb2YgdmFsdWVzLlxuICAgICAqL1xuICAgIFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5sb29rdXAgPSBmdW5jdGlvbiAob3BlcmF0b3IsIHRva2VuKSB7XG4gICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJy4uJzpcbiAgICAgICAgICAgICAgICB0b2tlbi5wcmVjaWRlbmNlID0gMjA7XG4gICAgICAgICAgICAgICAgdG9rZW4uYXNzb2NpYXRpdml0eSA9IFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5sZWZ0VG9SaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDE4O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIFRlcm5hcnlcbiAgICAgICAgICAgIGNhc2UgJz86JzpcbiAgICAgICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDE2O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IucmlnaHRUb0xlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIE51bGwtY29hbGVzY2luZyBvcGVyYXRvclxuICAgICAgICAgICAgY2FzZSAnPz8nOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSAxNTtcbiAgICAgICAgICAgICAgICB0b2tlbi5hc3NvY2lhdGl2aXR5ID0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLnJpZ2h0VG9MZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdvcic6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDE0O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDEzO1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2Itb3InOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSAxMjtcbiAgICAgICAgICAgICAgICB0b2tlbi5hc3NvY2lhdGl2aXR5ID0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLmxlZnRUb1JpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdiLXhvcic6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDExO1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2ItYW5kJzpcbiAgICAgICAgICAgICAgICB0b2tlbi5wcmVjaWRlbmNlID0gMTA7XG4gICAgICAgICAgICAgICAgdG9rZW4uYXNzb2NpYXRpdml0eSA9IFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5sZWZ0VG9SaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSA5O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJzw9Pic6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDk7XG4gICAgICAgICAgICAgICAgdG9rZW4uYXNzb2NpYXRpdml0eSA9IFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5sZWZ0VG9SaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgIGNhc2UgJ25vdCBpbic6XG4gICAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICAgICAgdG9rZW4ucHJlY2lkZW5jZSA9IDg7XG4gICAgICAgICAgICAgICAgdG9rZW4uYXNzb2NpYXRpdml0eSA9IFR3aWcuZXhwcmVzc2lvbi5vcGVyYXRvci5sZWZ0VG9SaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnfic6IC8vIFN0cmluZyBjb25jYXRpbmF0aW9uXG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSA2O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJy8vJzpcbiAgICAgICAgICAgIGNhc2UgJyoqJzpcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgICAgICB0b2tlbi5wcmVjaWRlbmNlID0gNTtcbiAgICAgICAgICAgICAgICB0b2tlbi5hc3NvY2lhdGl2aXR5ID0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLmxlZnRUb1JpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdub3QnOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSAzO1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IucmlnaHRUb0xlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21hdGNoZXMnOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSA4O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0cyB3aXRoJzpcbiAgICAgICAgICAgICAgICB0b2tlbi5wcmVjaWRlbmNlID0gODtcbiAgICAgICAgICAgICAgICB0b2tlbi5hc3NvY2lhdGl2aXR5ID0gVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLmxlZnRUb1JpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmRzIHdpdGgnOlxuICAgICAgICAgICAgICAgIHRva2VuLnByZWNpZGVuY2UgPSA4O1xuICAgICAgICAgICAgICAgIHRva2VuLmFzc29jaWF0aXZpdHkgPSBUd2lnLmV4cHJlc3Npb24ub3BlcmF0b3IubGVmdFRvUmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ0ZhaWxlZCB0byBsb29rdXAgb3BlcmF0b3I6ICcgKyBvcGVyYXRvciArICcgaXMgYW4gdW5rbm93biBvcGVyYXRvci4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG9wZXJhdGlvbnMgb24gdGhlIFJQTiBzdGFjay5cbiAgICAgKlxuICAgICAqIFJldHVybnMgdGhlIHVwZGF0ZWQgc3RhY2suXG4gICAgICovXG4gICAgVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLnBhcnNlID0gZnVuY3Rpb24gKG9wZXJhdG9yLCBzdGFjaykge1xuICAgICAgICBUd2lnLmxvZy50cmFjZSgnVHdpZy5leHByZXNzaW9uLm9wZXJhdG9yLnBhcnNlOiAnLCAnSGFuZGxpbmcgJywgb3BlcmF0b3IpO1xuICAgICAgICBsZXQgYTtcbiAgICAgICAgbGV0IGI7XG4gICAgICAgIGxldCBjO1xuXG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJz8nKSB7XG4gICAgICAgICAgICBjID0gc3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBiID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGlmIChvcGVyYXRvciAhPT0gJ25vdCcpIHtcbiAgICAgICAgICAgIGEgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGVyYXRvciAhPT0gJ2luJyAmJiBvcGVyYXRvciAhPT0gJ25vdCBpbicgJiYgb3BlcmF0b3IgIT09ICc/PycpIHtcbiAgICAgICAgICAgIGlmIChhICYmIEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgICAgICBhID0gYS5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVyYXRvciAhPT0gJz8nICYmIChiICYmIEFycmF5LmlzQXJyYXkoYikpKSB7XG4gICAgICAgICAgICAgICAgYiA9IGIubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnbWF0Y2hlcycpIHtcbiAgICAgICAgICAgIGlmIChiICYmIHR5cGVvZiBiID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlUGFydHMgPSBiLm1hdGNoKC9eXFwvKC4qKVxcLyhbZ2ltc10/KSQvKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZUJvZHkgPSByZVBhcnRzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlRmxhZ3MgPSByZVBhcnRzWzJdO1xuICAgICAgICAgICAgICAgIGIgPSBuZXcgUmVnRXhwKHJlQm9keSwgcmVGbGFncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPz8nOlxuICAgICAgICAgICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBjID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQgJiYgYSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc/Oic6XG4gICAgICAgICAgICAgICAgaWYgKFR3aWcubGliLmJvb2x2YWwoYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiBleHRlbmRlZCB0ZXJuYXJ5LlxuICAgICAgICAgICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgICAgICAgICAgYiA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFR3aWcubGliLmJvb2x2YWwoYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICBiID0gcGFyc2VGbG9hdChiKTtcbiAgICAgICAgICAgICAgICBhID0gcGFyc2VGbG9hdChhKTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgKyBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgYiA9IHBhcnNlRmxvYXQoYik7XG4gICAgICAgICAgICAgICAgYSA9IHBhcnNlRmxvYXQoYSk7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhIC0gYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIGIgPSBwYXJzZUZsb2F0KGIpO1xuICAgICAgICAgICAgICAgIGEgPSBwYXJzZUZsb2F0KGEpO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYSAqIGIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICBiID0gcGFyc2VGbG9hdChiKTtcbiAgICAgICAgICAgICAgICBhID0gcGFyc2VGbG9hdChhKTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgLyBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLy8nOlxuICAgICAgICAgICAgICAgIGIgPSBwYXJzZUZsb2F0KGIpO1xuICAgICAgICAgICAgICAgIGEgPSBwYXJzZUZsb2F0KGEpO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goTWF0aC5mbG9vcihhIC8gYikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgICAgICBiID0gcGFyc2VGbG9hdChiKTtcbiAgICAgICAgICAgICAgICBhID0gcGFyc2VGbG9hdChhKTtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgJSBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnfic6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCgodHlwZW9mIGEgIT09ICd1bmRlZmluZWQnICYmIGEgIT09IG51bGwgPyBhLnRvU3RyaW5nKCkgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGIgIT09ICd1bmRlZmluZWQnICYmIGIgIT09IG51bGwgPyBiLnRvU3RyaW5nKCkgOiAnJykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdub3QnOlxuICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCghVHdpZy5saWIuYm9vbHZhbChiKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJzw9Pic6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhID09PSBiID8gMCA6IChhIDwgYiA/IC0xIDogMSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgPCBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYSA8PSBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhID4gYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgPj0gYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhID09PSBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgPT0gYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhICE9PSBiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXEgKi9cbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgIT0gYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ29yJzpcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFR3aWcubGliLmJvb2x2YWwoYSkgfHwgVHdpZy5saWIuYm9vbHZhbChiKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2Itb3InOlxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYSB8IGIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdiLXhvcic6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhIF4gYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChUd2lnLmxpYi5ib29sdmFsKGEpICYmIFR3aWcubGliLmJvb2x2YWwoYikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdiLWFuZCc6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChhICYgYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyoqJzpcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGEgKiogYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25vdCBpbic6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCghY29udGFpbm1lbnQoYSwgYikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChjb250YWlubWVudChhLCBiKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21hdGNoZXMnOlxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYi50ZXN0KGEpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnRzIHdpdGgnOlxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2godHlwZW9mIGEgPT09ICdzdHJpbmcnICYmIGEuaW5kZXhPZihiKSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZHMgd2l0aCc6XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0eXBlb2YgYSA9PT0gJ3N0cmluZycgJiYgYS5pbmNsdWRlcyhiLCBhLmxlbmd0aCAtIGIubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJy4uJzpcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFR3aWcuZnVuY3Rpb25zLnJhbmdlKGEsIGIpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignRmFpbGVkIHRvIHBhcnNlIG9wZXJhdG9yOiAnICsgb3BlcmF0b3IgKyAnIGlzIGFuIHVua25vd24gb3BlcmF0b3IuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3aWc7XG59O1xuIiwiLy8gIyMgdHdpZy5mYWN0b3J5LmpzXG4vL1xuLy8gVGhpcyBmaWxlIGhhbmRsZXMgY3JlYXRpbmcgdGhlIFR3aWcgbGlicmFyeVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAgIGNvbnN0IFR3aWcgPSB7XG4gICAgICAgIFZFUlNJT046ICcxLjE3LjEnXG4gICAgfTtcblxuICAgIHJlcXVpcmUoJy4vdHdpZy5jb3JlJykoVHdpZyk7XG4gICAgcmVxdWlyZSgnLi90d2lnLmNvbXBpbGVyJykoVHdpZyk7XG4gICAgcmVxdWlyZSgnLi90d2lnLmV4cHJlc3Npb24nKShUd2lnKTtcbiAgICByZXF1aXJlKCcuL3R3aWcuZmlsdGVycycpKFR3aWcpO1xuICAgIHJlcXVpcmUoJy4vdHdpZy5mdW5jdGlvbnMnKShUd2lnKTtcbiAgICByZXF1aXJlKCcuL3R3aWcubGliJykoVHdpZyk7XG4gICAgcmVxdWlyZSgnLi90d2lnLmxvYWRlci5hamF4JykoVHdpZyk7XG4gICAgcmVxdWlyZSgnLi90d2lnLmxvYWRlci5mcycpKFR3aWcpO1xuICAgIHJlcXVpcmUoJy4vdHdpZy5sb2dpYycpKFR3aWcpO1xuICAgIHJlcXVpcmUoJy4vdHdpZy5wYXJzZXIuc291cmNlJykoVHdpZyk7XG4gICAgcmVxdWlyZSgnLi90d2lnLnBhcnNlci50d2lnJykoVHdpZyk7XG4gICAgcmVxdWlyZSgnLi90d2lnLnBhdGgnKShUd2lnKTtcbiAgICByZXF1aXJlKCcuL3R3aWcudGVzdHMnKShUd2lnKTtcbiAgICByZXF1aXJlKCcuL3R3aWcuYXN5bmMnKShUd2lnKTtcbiAgICByZXF1aXJlKCcuL3R3aWcuZXhwb3J0cycpKFR3aWcpO1xuXG4gICAgVHdpZy5leHBvcnRzLmZhY3RvcnkgPSBmYWN0b3J5O1xuXG4gICAgcmV0dXJuIFR3aWcuZXhwb3J0cztcbn07XG4iLCIvLyAjIyB0d2lnLmZpbHRlcnMuanNcbi8vXG4vLyBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZpbHRlcnMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgLy8gRGV0ZXJtaW5lIG9iamVjdCB0eXBlXG4gICAgZnVuY3Rpb24gaXModHlwZSwgb2JqKSB7XG4gICAgICAgIGNvbnN0IGNsYXMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSk7XG4gICAgICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgY2xhcyA9PT0gdHlwZTtcbiAgICB9XG5cbiAgICBUd2lnLmZpbHRlcnMgPSB7XG4gICAgICAgIC8vIFN0cmluZyBGaWx0ZXJzXG4gICAgICAgIHVwcGVyKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvd2VyKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhcGl0YWxpemUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHZhbHVlLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKF58XFxzKShbYS16XSkvZywgKG0sIHAxLCBwMikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwMSArIHAyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoVHdpZy5saWIuaXMoJ0FycmF5JywgdmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVHdpZy5saWIuaXMoJ09iamVjdCcsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5fa2V5cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFycmF5L09iamVjdCBGaWx0ZXJzXG4gICAgICAgIHJldmVyc2UodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpcygnQXJyYXknLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXMoJ1N0cmluZycsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXMoJ09iamVjdCcsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSB2YWx1ZS5fa2V5cyB8fCBPYmplY3Qua2V5cyh2YWx1ZSkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlLl9rZXlzID0ga2V5cztcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpcygnQXJyYXknLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc29ydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXMoJ09iamVjdCcsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIC8vIFNvcnRpbmcgb2JqZWN0cyBpc24ndCBvYnZpb3VzIHNpbmNlIHRoZSBvcmRlciBvZlxuICAgICAgICAgICAgICAgIC8vIHJldHVybmVkIGtleXMgaXNuJ3QgZ3VhcmFudGVlZCBpbiBKYXZhU2NyaXB0LlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2Ugb2YgdGhpcyB3ZSB1c2UgYSBcImhpZGRlblwiIGtleSBjYWxsZWQgX2tleXMgdG9cbiAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUga2V5cyBpbiB0aGUgb3JkZXIgd2Ugd2FudCB0byByZXR1cm4gdGhlbS5cblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZS5fa2V5cztcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZEtleXMgPSBrZXlzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGExO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYjE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBhbmQgYiBhcmUgY29tcGFyYWJsZSwgd2UncmUgZmluZSA6LSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWx1ZVthXSA+IHZhbHVlW2JdKSA9PT0gISh2YWx1ZVthXSA8PSB2YWx1ZVtiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVthXSA+IHZhbHVlW2JdID8gMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlW2FdIDwgdmFsdWVbYl0gPyAtMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBhbmQgYiBjYW4gYmUgcGFyc2VkIGFzIG51bWJlcnMsIHdlIGNhbiBjb21wYXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZWlyIG51bWVyaWMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihhMSA9IHBhcnNlRmxvYXQodmFsdWVbYV0pKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNOYU4oYjEgPSBwYXJzZUZsb2F0KHZhbHVlW2JdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhMSA+IGIxID8gMSA6IChhMSA8IGIxID8gLTEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9uZSBvZiB0aGUgdmFsdWVzIGlzIGEgc3RyaW5nLCB3ZSBjb252ZXJ0IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlciB2YWx1ZSB0byBzdHJpbmcgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlW2FdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW2FdID4gdmFsdWVbYl0udG9TdHJpbmcoKSA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZVthXSA8IHZhbHVlW2JdLnRvU3RyaW5nKCkgPyAtMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtiXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVthXS50b1N0cmluZygpID4gdmFsdWVbYl0gPyAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWVbYV0udG9TdHJpbmcoKSA8IHZhbHVlW2JdID8gLTEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVyeXRoaW5nIGZhaWxlZCAtIHJldHVybiAnbnVsbCcgYXMgc2lnbiwgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdmFsdWVzIGFyZSBub3QgY29tcGFyYWJsZVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhbHVlLl9rZXlzID0gc29ydGVkS2V5cztcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGtleXModmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBrZXlzZXQgPSB2YWx1ZS5fa2V5cyB8fCBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcblxuICAgICAgICAgICAga2V5c2V0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnX2tleXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IC8vIElnbm9yZSB0aGUgX2tleXMgcHJvcGVydHlcblxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSAqL1xuICAgICAgICB1cmxfZW5jb2RlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdPYmplY3QnLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemUgPSBmdW5jdGlvbiAob2JqLCBwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXNldCA9IG9iai5fa2V5cyB8fCBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgICAgICAgICAgICAgIGtleXNldC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdEtleSA9IHByZWZpeCA/IHByZWZpeCArICdbJyArIGtleSArICddJyA6IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChUd2lnLmxpYi5pcygnT2JqZWN0JywgcmVzdWx0VmFsdWUpIHx8IEFycmF5LmlzQXJyYXkocmVzdWx0VmFsdWUpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShyZXN1bHRWYWx1ZSwgcmVzdWx0S2V5KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChyZXN1bHRLZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlc3VsdFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmYW1wOycpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgnXFwnJywgJyUyNycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgam9pbih2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGpvaW5TdHIgPSAnJztcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBbXTtcbiAgICAgICAgICAgIGxldCBrZXlzZXQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtc1swXSkge1xuICAgICAgICAgICAgICAgIGpvaW5TdHIgPSBwYXJhbXNbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpcygnQXJyYXknLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5c2V0ID0gdmFsdWUuX2tleXMgfHwgT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgIGtleXNldC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdfa2V5cycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBJZ25vcmUgdGhlIF9rZXlzIHByb3BlcnR5XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0LmpvaW4oam9pblN0cik7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQodmFsdWUsIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ2RlZmF1bHQgZmlsdGVyIGV4cGVjdHMgb25lIGFyZ3VtZW50Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlICovXG4gICAgICAgIGpzb25fZW5jb2RlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgJiYgKGlzKCdBcnJheScsIHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKFR3aWcuZmlsdGVycy5qc29uX2VuY29kZSh2KSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSAmJiAoaXMoJ0RhdGUnLCB2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdcIicgKyB2YWx1ZS50b0lTT1N0cmluZygpICsgJ1wiJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzZXQgPSB2YWx1ZS5fa2V5cyB8fCBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XG5cbiAgICAgICAgICAgICAgICBrZXlzZXQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChKU09OLnN0cmluZ2lmeShrZXkpICsgJzonICsgVHdpZy5maWx0ZXJzLmpzb25fZW5jb2RlKHZhbHVlW2tleV0pKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAneycgKyBvdXRwdXQuam9pbignLCcpICsgJ30nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZSh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gW107XG4gICAgICAgICAgICBsZXQgYXJySW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGtleXNldCA9IFtdO1xuXG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgYWxsIHRoZSBvYmplY3RzIGJlaW5nIG1lcmdlZCBhcmUgYXJyYXlzXG4gICAgICAgICAgICBpZiAoaXMoJ0FycmF5JywgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzKCdBcnJheScsIHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0geyB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBvYmogYXMgYW4gT2JqZWN0XG4gICAgICAgICAgICAgICAgb2JqID0geyB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzKCdBcnJheScsIG9iaikpIHtcbiAgICAgICAgICAgICAgICBvYmouX2tleXMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzKCdBcnJheScsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5fa2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLl9rZXlzLnB1c2goYXJySW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb2JqW2FyckluZGV4XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgYXJySW5kZXgrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5c2V0ID0gdmFsdWUuX2tleXMgfHwgT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgIGtleXNldC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLl9rZXlzLnB1c2goa2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZWRnZSBjYXNlIHdoZXJlIGEgbnVtYmVyIGluZGV4IGluIGFuIG9iamVjdCBpcyBncmVhdGVyIHRoYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGUgYXJyYXkgY291bnRlci4gSW4gc3VjaCBhIGNhc2UsIHRoZSBhcnJheSBjb3VudGVyIGlzIGluY3JlYXNlZFxuICAgICAgICAgICAgICAgICAgICAvLyAgIG9uZSBwYXN0IHRoZSBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhhbXBsZSB7eyBbXCJhXCIsIFwiYlwiXXxtZXJnZSh7XCI0XCI6XCJ2YWx1ZVwifSwgW1wiY1wiLCBcImRcIl0pXG4gICAgICAgICAgICAgICAgICAgIC8vIFdpdGhvdXQgdGhpcywgZCB3b3VsZCBoYXZlIGFuIGluZGV4IG9mIFwiNFwiIGFuZCBvdmVyd3JpdGUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vICAgb2YgXCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludEtleSA9IHBhcnNlSW50KGtleSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGludEtleSkgJiYgaW50S2V5ID49IGFyckluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJJbmRleCA9IGludEtleSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWl4aW4gdGhlIG1lcmdlIGFycmF5c1xuICAgICAgICAgICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpcygnQXJyYXknLCBwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0uZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5fa2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5fa2V5cy5wdXNoKGFyckluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2FyckluZGV4XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXNldCA9IHBhcmFtLl9rZXlzIHx8IE9iamVjdC5rZXlzKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAga2V5c2V0LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHBhcmFtW2tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludEtleSA9IHBhcnNlSW50KGtleSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihpbnRLZXkpICYmIGludEtleSA+PSBhcnJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckluZGV4ID0gaW50S2V5ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdGaWx0ZXIgbWVyZ2UgZXhwZWN0cyBhdCBsZWFzdCBvbmUgcGFyYW1ldGVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0ZSh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gVHdpZy5mdW5jdGlvbnMuZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBwYXJhbXMgJiYgQm9vbGVhbihwYXJhbXMubGVuZ3RoKSA/IHBhcmFtc1swXSA6ICdGIGosIFkgSDppJztcbiAgICAgICAgICAgIHJldHVybiBUd2lnLmxpYi5kYXRlKGZvcm1hdC5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpLCBkYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSAqL1xuICAgICAgICBkYXRlX21vZGlmeSh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignZGF0ZV9tb2RpZnkgZmlsdGVyIGV4cGVjdHMgMSBhcmd1bWVudCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2RpZnlUZXh0ID0gcGFyYW1zWzBdO1xuICAgICAgICAgICAgbGV0IHRpbWU7XG5cbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnRGF0ZScsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSBUd2lnLmxpYi5zdHJ0b3RpbWUobW9kaWZ5VGV4dCwgdmFsdWUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnU3RyaW5nJywgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IFR3aWcubGliLnN0cnRvdGltZShtb2RpZnlUZXh0LCBUd2lnLmxpYi5zdHJ0b3RpbWUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdOdW1iZXInLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aW1lID0gVHdpZy5saWIuc3RydG90aW1lKG1vZGlmeVRleHQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXBsYWNlKHZhbHVlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYWlycyA9IHBhcmFtc1swXTtcbiAgICAgICAgICAgIGxldCB0YWc7XG4gICAgICAgICAgICBmb3IgKHRhZyBpbiBwYWlycykge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwYWlycywgdGFnKSAmJiB0YWcgIT09ICdfa2V5cycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBUd2lnLmxpYi5yZXBsYWNlQWxsKHZhbHVlLCB0YWcsIHBhaXJzW3RhZ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZvcm1hdCh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFR3aWcubGliLnZzcHJpbnRmKHZhbHVlLCBwYXJhbXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0cmlwdGFncyh2YWx1ZSwgYWxsb3dlZCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBUd2lnLmxpYi5zdHJpcFRhZ3ModmFsdWUsIGFsbG93ZWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVzY2FwZSh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzdHJhdGVneSA9ICdodG1sJztcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgQm9vbGVhbihwYXJhbXMubGVuZ3RoKSAmJiBwYXJhbXNbMF0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdHJhdGVneSA9IHBhcmFtc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnaHRtbCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMwMzk7Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUd2lnLk1hcmt1cChyYXdWYWx1ZSwgJ2h0bWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnanMnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmF3VmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3VmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd1ZhbHVlW2ldLm1hdGNoKC9eW2EtekEtWjAtOSwuX10kLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSByYXdWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSByYXdWYWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHJhd1ZhbHVlLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgZmV3IGNoYXJhY3RlcnMgaGF2ZSBzaG9ydCBlc2NhcGUgc2VxdWVuY2VzIGluIEpTT04gYW5kIEphdmFTY3JpcHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFc2NhcGUgc2VxdWVuY2VzIHN1cHBvcnRlZCBvbmx5IGJ5IEphdmFTY3JpcHQsIG5vdCBKU09OLCBhcmUgb21taXR0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcXFwiIGlzIGFsc28gc3VwcG9ydGVkIGJ1dCBvbWl0dGVkLCBiZWNhdXNlIHRoZSByZXN1bHRpbmcgc3RyaW5nIGlzIG5vdCBIVE1MIHNhZmUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG9ydE1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy8nOiAnXFxcXC8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHUwMDA4JzogJ1xcXFxiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFx1MDAwQyc6ICdcXFxcZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcdTAwMEEnOiAnXFxcXG4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHUwMDBEJzogJ1xcXFxyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFx1MDAwOSc6ICdcXFxcdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG9ydE1hcFtjaGFyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzaG9ydE1hcFtjaGFyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFR3aWcubGliLnNwcmludGYoJ1xcXFx1JTA0cycsIGNoYXJDb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHdpZy5NYXJrdXAocmVzdWx0LCAnanMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnY3NzJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdWYWx1ZVtpXS5tYXRjaCgvXlthLXpBLVowLTldJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gcmF3VmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHJhd1ZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1xcXFwnICsgY2hhckNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyAnICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR3aWcuTWFya3VwKHJlc3VsdCwgJ2NzcycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RyYXRlZ3kgPT09ICd1cmwnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gVHdpZy5maWx0ZXJzLnVybF9lbmNvZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHdpZy5NYXJrdXAocmVzdWx0LCAndXJsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2h0bWxfYXR0cicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VmFsdWVbaV0ubWF0Y2goL15bYS16QS1aMC05LC5cXC1fXSQvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHJhd1ZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhd1ZhbHVlW2ldLm1hdGNoKC9eWyY8PlwiXSQvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHJhd1ZhbHVlW2ldLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHJhd1ZhbHVlLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgcmVwbGFjZXMgY2hhcmFjdGVycyB1bmRlZmluZWQgaW4gSFRNTCB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaGV4IGVudGl0eSBmb3IgdGhlIFVuaWNvZGUgcmVwbGFjZW1lbnQgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDw9IDB4MUYgJiYgY2hhckNvZGUgIT09IDB4MDkgJiYgY2hhckNvZGUgIT09IDB4MEEgJiYgY2hhckNvZGUgIT09IDB4MEQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyYjeEZGRkQ7JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckNvZGUgPCAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFR3aWcubGliLnNwcmludGYoJyYjeCUwMnM7JywgY2hhckNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gVHdpZy5saWIuc3ByaW50ZignJiN4JTA0czsnLCBjaGFyQ29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR3aWcuTWFya3VwKHJlc3VsdCwgJ2h0bWxfYXR0cicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignZXNjYXBlIHN0cmF0ZWd5IHVuc3VwcG9ydGVkJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyogQWxpYXMgb2YgZXNjYXBlICovXG4gICAgICAgIGUodmFsdWUsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcuZmlsdGVycy5lc2NhcGUodmFsdWUsIHBhcmFtcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbmwyYnIodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGluZWJyZWFrVGFnID0gJ0JBQ0tTTEFTSF9uX3JlcGxhY2UnO1xuICAgICAgICAgICAgY29uc3QgYnIgPSAnPGJyIC8+JyArIGxpbmVicmVha1RhZztcblxuICAgICAgICAgICAgdmFsdWUgPSBUd2lnLmZpbHRlcnMuZXNjYXBlKHZhbHVlKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHJcXG4vZywgYnIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcci9nLCBicilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csIGJyKTtcblxuICAgICAgICAgICAgdmFsdWUgPSBUd2lnLmxpYi5yZXBsYWNlQWxsKHZhbHVlLCBsaW5lYnJlYWtUYWcsICdcXG4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUd2lnLk1hcmt1cCh2YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkYXB0ZWQgZnJvbTogaHR0cDovL3BocGpzLm9yZy9mdW5jdGlvbnMvbnVtYmVyX2Zvcm1hdDo0ODFcbiAgICAgICAgICovXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UgKi9cbiAgICAgICAgbnVtYmVyX2Zvcm1hdCh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZWNpbWFscyA9IChwYXJhbXMgJiYgcGFyYW1zWzBdKSA/IHBhcmFtc1swXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGRlYyA9IChwYXJhbXMgJiYgcGFyYW1zWzFdICE9PSB1bmRlZmluZWQpID8gcGFyYW1zWzFdIDogJy4nO1xuICAgICAgICAgICAgY29uc3Qgc2VwID0gKHBhcmFtcyAmJiBwYXJhbXNbMl0gIT09IHVuZGVmaW5lZCkgPyBwYXJhbXNbMl0gOiAnLCc7XG5cbiAgICAgICAgICAgIG51bWJlciA9IChTdHJpbmcobnVtYmVyKSkucmVwbGFjZSgvW14wLTkrXFwtRWUuXS9nLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBuID0gaXNGaW5pdGUoTnVtYmVyKG51bWJlcikpID8gTnVtYmVyKG51bWJlcikgOiAwO1xuICAgICAgICAgICAgY29uc3QgcHJlYyA9IGlzRmluaXRlKE51bWJlcihkZWNpbWFscykpID8gTWF0aC5hYnMoZGVjaW1hbHMpIDogMDtcbiAgICAgICAgICAgIGxldCBzID0gJyc7XG4gICAgICAgICAgICBjb25zdCB0b0ZpeGVkRml4ID0gZnVuY3Rpb24gKG4sIHByZWMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gMTAgKiogcHJlYztcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQobiAqIGspIC8gayk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBGaXggZm9yIElFIHBhcnNlRmxvYXQoMC41NSkudG9GaXhlZCgwKSA9IDA7XG4gICAgICAgICAgICBzID0gKHByZWMgPyB0b0ZpeGVkRml4KG4sIHByZWMpIDogU3RyaW5nKE1hdGgucm91bmQobikpKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKHNbMF0ubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIHNbMF0gPSBzWzBdLnJlcGxhY2UoL1xcQig/PSg/OlxcZHszfSkrKD8hXFxkKSkvZywgc2VwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKChzWzFdIHx8ICcnKS5sZW5ndGggPCBwcmVjKSB7XG4gICAgICAgICAgICAgICAgc1sxXSA9IHNbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgc1sxXSArPSBuZXcgQXJyYXkocHJlYyAtIHNbMV0ubGVuZ3RoICsgMSkuam9pbignMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcy5qb2luKGRlYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpbSh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgd2hpdGVzcGFjZTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zWzBdKSB7XG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IFN0cmluZyhwYXJhbXNbMF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gJyBcXG5cXHJcXHRcXGZcXHUwMDBCXFx1MDBBMFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAwYlxcdTIwMjhcXHUyMDI5XFx1MzAwMCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aGl0ZXNwYWNlLmluY2x1ZGVzKHN0ci5jaGFyQXQoaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ci5zbGljZShNYXRoLm1heCgwLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmICghd2hpdGVzcGFjZS5pbmNsdWRlcyhzdHIuY2hhckF0KGkpKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gd2hpdGVzcGFjZS5pbmNsdWRlcyhzdHIuY2hhckF0KDApKSA/ICcnIDogc3RyO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRydW5jYXRlKHZhbHVlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSAzMDtcbiAgICAgICAgICAgIGxldCBwcmVzZXJ2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9ICcuLi4nO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1swXSkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBwYXJhbXNbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZSA9IHBhcmFtc1sxXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IHBhcmFtc1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJlc2VydmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUuaW5kZXhPZignICcsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGxlbmd0aCkgKyBzZXBhcmF0b3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzbGljZSh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignc2xpY2UgZmlsdGVyIGV4cGVjdHMgYXQgbGVhc3QgMSBhcmd1bWVudCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIHN0YXJ0IG9mIHN0cmluZ1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBwYXJhbXNbMF0gfHwgMDtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gbGVuZ3RoIG9mIHN0cmluZ1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHBhcmFtcy5sZW5ndGggPiAxID8gcGFyYW1zWzFdIDogdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgLy8gSGFuZGxlIG5lZ2F0aXZlIHN0YXJ0IHZhbHVlc1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHN0YXJ0ID49IDAgPyBzdGFydCA6IE1hdGgubWF4KHZhbHVlLmxlbmd0aCArIHN0YXJ0LCAwKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBuZWdhdGl2ZSBsZW5ndGggdmFsdWVzXG4gICAgICAgICAgICBpZiAobGVuZ3RoIDwgMCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCAtIHN0YXJ0SW5kZXggKyBsZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnQXJyYXknLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHN0YXJ0SW5kZXggKyBsZW5ndGggJiYgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKHZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVHdpZy5saWIuaXMoJ1N0cmluZycsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgbGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ3NsaWNlIGZpbHRlciBleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5IG9yIHN0cmluZycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFicyh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh2YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3QodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpcygnQXJyYXknLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpcygnT2JqZWN0JywgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdfa2V5cycgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3ZhbHVlLl9rZXlzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3BsaXQodmFsdWUsIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCB8fCBwYXJhbXMubGVuZ3RoID09PSAwIHx8IHBhcmFtcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ3NwbGl0IGZpbHRlciBleHBlY3RzIDEgb3IgMiBhcmd1bWVudCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVHdpZy5saWIuaXMoJ1N0cmluZycsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGltaXRlciA9IHBhcmFtc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW1pdCA9IHBhcmFtc1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IHZhbHVlLnNwbGl0KGRlbGltaXRlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3BsaXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxpbWl0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoZGVsaW1pdGVyLCBzcGxpdC5sZW5ndGggKyBsaW1pdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbGltaXRlZFNwbGl0ID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVsaW1pdGVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbXB0eSBkZWxpbWl0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJhYWJiY2NcInxzcGxpdCgnJywgMilcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC0+IFsnYWEnLCAnYmInLCAnY2MnXVxuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzcGxpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW1pdCAmJiBzcGxpdC5sZW5ndGggPiAwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wICs9IHNwbGl0LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ZWRTcGxpdC5wdXNoKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm9uLWVtcHR5IGRlbGltaXRlclxuICAgICAgICAgICAgICAgICAgICAvLyBcIm9uZSx0d28sdGhyZWUsZm91cixmaXZlXCJ8c3BsaXQoJywnLCAzKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLT4gWydvbmUnLCAndHdvJywgJ3RocmVlLGZvdXIsZml2ZSddXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW1pdCAtIDEgJiYgc3BsaXQubGVuZ3RoID4gMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdGVkU3BsaXQucHVzaChzcGxpdC5zaGlmdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdGVkU3BsaXQucHVzaChzcGxpdC5qb2luKGRlbGltaXRlcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbWl0ZWRTcGxpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ3NwbGl0IGZpbHRlciBleHBlY3RzIHZhbHVlIHRvIGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3QodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnT2JqZWN0JywgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleXM7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX2tleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB2YWx1ZS5fa2V5cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVba2V5c1trZXlzLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdOdW1iZXInLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5zbGljZSgtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0cmluZ3xhcnJheVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgICB9LFxuICAgICAgICByYXcodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHdpZy5NYXJrdXAodmFsdWUgfHwgJycpO1xuICAgICAgICB9LFxuICAgICAgICBiYXRjaChpdGVtcywgcGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgZmlsbCA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgbGV0IGxhc3Q7XG4gICAgICAgICAgICBsZXQgbWlzc2luZztcblxuICAgICAgICAgICAgaWYgKCFUd2lnLmxpYi5pcygnQXJyYXknLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignYmF0Y2ggZmlsdGVyIGV4cGVjdHMgaXRlbXMgdG8gYmUgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFUd2lnLmxpYi5pcygnTnVtYmVyJywgc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignYmF0Y2ggZmlsdGVyIGV4cGVjdHMgc2l6ZSB0byBiZSBhIG51bWJlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaXplID0gTWF0aC5jZWlsKHNpemUpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBUd2lnLmxpYi5jaHVua0FycmF5KGl0ZW1zLCBzaXplKTtcblxuICAgICAgICAgICAgaWYgKGZpbGwgJiYgaXRlbXMubGVuZ3RoICUgc2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxhc3QgPSByZXN1bHQucG9wKCk7XG4gICAgICAgICAgICAgICAgbWlzc2luZyA9IHNpemUgLSBsYXN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChtaXNzaW5nLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdC5wdXNoKGZpbGwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICByb3VuZCh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgW107XG5cbiAgICAgICAgICAgIGNvbnN0IHByZWNpc2lvbiA9IHBhcmFtcy5sZW5ndGggPiAwID8gcGFyYW1zWzBdIDogMDtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IHBhcmFtcy5sZW5ndGggPiAxID8gcGFyYW1zWzFdIDogJ2NvbW1vbic7XG5cbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24gJiYgIVR3aWcubGliLmlzKCdOdW1iZXInLCBwcmVjaXNpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ3JvdW5kIGZpbHRlciBleHBlY3RzIHByZWNpc2lvbiB0byBiZSBhIG51bWJlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnY29tbW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmxpYi5yb3VuZCh2YWx1ZSwgcHJlY2lzaW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFUd2lnLmxpYi5pcygnRnVuY3Rpb24nLCBNYXRoW21ldGhvZF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ3JvdW5kIGZpbHRlciBleHBlY3RzIG1ldGhvZCB0byBiZSBcXCdmbG9vclxcJywgXFwnY2VpbFxcJywgb3IgXFwnY29tbW9uXFwnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoW21ldGhvZF0odmFsdWUgKiAoMTAgKiogcHJlY2lzaW9uKSkgLyAoMTAgKiogcHJlY2lzaW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3BhY2VsZXNzKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvPlxccys8L2csICc+PCcpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2lnLmZpbHRlciA9IGZ1bmN0aW9uIChmaWx0ZXIsIHZhbHVlLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghVHdpZy5maWx0ZXJzW2ZpbHRlcl0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gZmluZCBmaWx0ZXIgJyArIGZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVHdpZy5maWx0ZXJzW2ZpbHRlcl0uY2FsbChzdGF0ZSwgdmFsdWUsIHBhcmFtcyk7XG4gICAgfTtcblxuICAgIFR3aWcuZmlsdGVyLmV4dGVuZCA9IGZ1bmN0aW9uIChmaWx0ZXIsIGRlZmluaXRpb24pIHtcbiAgICAgICAgVHdpZy5maWx0ZXJzW2ZpbHRlcl0gPSBkZWZpbml0aW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdpZztcbn07XG4iLCIvLyAjIyB0d2lnLmZ1bmN0aW9ucy5qc1xuLy9cbi8vIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZmlsdGVycy5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFR3aWcpIHtcbiAgICAvKipcbiAgICAgKiBAY29uc3RhbnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IFRFTVBMQVRFX05PVF9GT1VORF9NRVNTQUdFID0gJ1RlbXBsYXRlIFwie25hbWV9XCIgaXMgbm90IGRlZmluZWQuJztcblxuICAgIFR3aWcuZnVuY3Rpb25zID0ge1xuICAgICAgICAvLyAgQXR0cmlidXRlLCBibG9jaywgY29uc3RhbnQsIGRhdGUsIGR1bXAsIHBhcmVudCwgcmFuZG9tLC5cblxuICAgICAgICAvLyBSYW5nZSBmdW5jdGlvbiBmcm9tIGh0dHA6Ly9waHBqcy5vcmcvZnVuY3Rpb25zL3JhbmdlOjQ5OVxuICAgICAgICAvLyBVc2VkIHVuZGVyIGFuIE1JVCBMaWNlbnNlXG4gICAgICAgIHJhbmdlKGxvdywgaGlnaCwgc3RlcCkge1xuICAgICAgICAgICAgLy8gaHR0cDovL2tldmluLnZhbnpvbm5ldmVsZC5uZXRcbiAgICAgICAgICAgIC8vICsgICBvcmlnaW5hbCBieTogV2FsZG8gTWFscXVpIFNpbHZhXG4gICAgICAgICAgICAvLyAqICAgICBleGFtcGxlIDE6IHJhbmdlICggMCwgMTIgKTtcbiAgICAgICAgICAgIC8vICogICAgIHJldHVybnMgMTogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdXG4gICAgICAgICAgICAvLyAqICAgICBleGFtcGxlIDI6IHJhbmdlKCAwLCAxMDAsIDEwICk7XG4gICAgICAgICAgICAvLyAqICAgICByZXR1cm5zIDI6IFswLCAxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwLCAxMDBdXG4gICAgICAgICAgICAvLyAqICAgICBleGFtcGxlIDM6IHJhbmdlKCAnYScsICdpJyApO1xuICAgICAgICAgICAgLy8gKiAgICAgcmV0dXJucyAzOiBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCcsICdpJ11cbiAgICAgICAgICAgIC8vICogICAgIGV4YW1wbGUgNDogcmFuZ2UoICdjJywgJ2EnICk7XG4gICAgICAgICAgICAvLyAqICAgICByZXR1cm5zIDQ6IFsnYycsICdiJywgJ2EnXVxuICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gW107XG4gICAgICAgICAgICBsZXQgaW5pdmFsO1xuICAgICAgICAgICAgbGV0IGVuZHZhbDtcbiAgICAgICAgICAgIGNvbnN0IHdhbGtlciA9IHN0ZXAgfHwgMTtcbiAgICAgICAgICAgIGxldCBjaGFycyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGxvdykgJiYgIWlzTmFOKGhpZ2gpKSB7XG4gICAgICAgICAgICAgICAgaW5pdmFsID0gcGFyc2VJbnQobG93LCAxMCk7XG4gICAgICAgICAgICAgICAgZW5kdmFsID0gcGFyc2VJbnQoaGlnaCwgMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05hTihsb3cpICYmIGlzTmFOKGhpZ2gpKSB7XG4gICAgICAgICAgICAgICAgY2hhcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluaXZhbCA9IGxvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIGVuZHZhbCA9IGhpZ2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5pdmFsID0gKGlzTmFOKGxvdykgPyAwIDogbG93KTtcbiAgICAgICAgICAgICAgICBlbmR2YWwgPSAoaXNOYU4oaGlnaCkgPyAwIDogaGlnaCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBsdXMgPSAoISgoaW5pdmFsID4gZW5kdmFsKSkpO1xuICAgICAgICAgICAgaWYgKHBsdXMpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaW5pdmFsIDw9IGVuZHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXgucHVzaCgoKGNoYXJzKSA/IFN0cmluZy5mcm9tQ2hhckNvZGUoaW5pdmFsKSA6IGluaXZhbCkpO1xuICAgICAgICAgICAgICAgICAgICBpbml2YWwgKz0gd2Fsa2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGluaXZhbCA+PSBlbmR2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnB1c2goKChjaGFycykgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGluaXZhbCkgOiBpbml2YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdmFsIC09IHdhbGtlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgICAgIH0sXG4gICAgICAgIGN5Y2xlKGFyciwgaSkge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gaSAlIGFyci5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gYXJyW3Bvc107XG4gICAgICAgIH0sXG4gICAgICAgIGR1bXAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcGFzcyBhcmd1bWVudHMgdG8gYEFycmF5LnNsaWNlYCwgdGhhdCBpcyBhIHBlcmZvcm1hbmNlIGtpbGxlclxuXG4gICAgICAgICAgICBjb25zdCBhcmdzQ29weSA9IFsuLi5hcmdzXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgY29uc3QgRU9MID0gJ1xcbic7XG4gICAgICAgICAgICBjb25zdCBpbmRlbnRDaGFyID0gJyAgJztcbiAgICAgICAgICAgIGxldCBpbmRlbnRUaW1lcyA9IDA7XG4gICAgICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgICAgICBjb25zdCBpbmRlbnQgPSBmdW5jdGlvbiAodGltZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gJyc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICAgICAgICAgICAgICBpbmQgKz0gaW5kZW50Q2hhcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheVZhciA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIG91dCArPSBpbmRlbnQoaW5kZW50VGltZXMpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhcmlhYmxlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVtcFZhcih2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKHZhcmlhYmxlKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gJ2Z1bmN0aW9uKCknICsgRU9MO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mICh2YXJpYWJsZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSAnc3RyaW5nKCcgKyB2YXJpYWJsZS5sZW5ndGggKyAnKSBcIicgKyB2YXJpYWJsZSArICdcIicgKyBFT0w7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKHZhcmlhYmxlKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9ICdudW1iZXIoJyArIHZhcmlhYmxlICsgJyknICsgRU9MO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mICh2YXJpYWJsZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gJ2Jvb2woJyArIHZhcmlhYmxlICsgJyknICsgRU9MO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGR1bXBWYXIgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9ICdOVUxMJyArIEVPTDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9ICd1bmRlZmluZWQnICsgRU9MO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhcmlhYmxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gaW5kZW50KGluZGVudFRpbWVzKSArIHR5cGVvZiAodmFyaWFibGUpO1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnRUaW1lcysrO1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gJygnICsgKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzaXplO1xuICAgICAgICAgICAgICAgICAgICB9KSh2YXJpYWJsZSkgKyAnKSB7JyArIEVPTDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpIGluIHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodmFyaWFibGUsIGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGluZGVudChpbmRlbnRUaW1lcykgKyAnWycgKyBpICsgJ109PiAnICsgRU9MO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlWYXIodmFyaWFibGVbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZW50VGltZXMtLTtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGluZGVudChpbmRlbnRUaW1lcykgKyAnfScgKyBFT0w7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZhcih2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIG5vIGFyZ3VtZW50IGNhc2UgYnkgZHVtcGluZyB0aGUgZW50aXJlIHJlbmRlciBjb250ZXh0XG4gICAgICAgICAgICBpZiAoYXJnc0NvcHkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYXJnc0NvcHkucHVzaChzdGF0ZS5jb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJnc0NvcHkuZm9yRWFjaCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgZHVtcFZhcih2YXJpYWJsZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZShkYXRlKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZU9iajtcbiAgICAgICAgICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQgfHwgZGF0ZSA9PT0gbnVsbCB8fCBkYXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChUd2lnLmxpYi5pcygnRGF0ZScsIGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZU9iaiA9IGRhdGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFR3aWcubGliLmlzKCdTdHJpbmcnLCBkYXRlKSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRlLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVPYmogPSBuZXcgRGF0ZShUd2lnLmxpYi5zdHJ0b3RpbWUoZGF0ZSkgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFR3aWcubGliLmlzKCdOdW1iZXInLCBkYXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIFRpbWVzdGFtcFxuICAgICAgICAgICAgICAgIGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gcGFyc2UgZGF0ZSAnICsgZGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRlT2JqO1xuICAgICAgICB9LFxuICAgICAgICBibG9jayhibG9ja05hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBzdGF0ZS5nZXRCbG9jayhibG9ja05hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9jay5yZW5kZXIoc3RhdGUsIHN0YXRlLmNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYXJlbnQoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5nZXRCbG9jayhzdGF0ZS5nZXROZXN0aW5nU3RhY2tUb2tlbihUd2lnLmxvZ2ljLnR5cGUuYmxvY2spLmJsb2NrTmFtZSwgdHJ1ZSkucmVuZGVyKHN0YXRlLCBzdGF0ZS5jb250ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cmlidXRlKG9iamVjdCwgbWV0aG9kLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnT2JqZWN0Jywgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdFttZXRob2RdLmFwcGx5KHVuZGVmaW5lZCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3RbbWV0aG9kXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFycmF5IHdpbGwgcmV0dXJuIGVsZW1lbnQgMC1pbmRleFxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdCA/IChvYmplY3RbbWV0aG9kXSB8fCB1bmRlZmluZWQpIDogdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICBtYXgodmFsdWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBpZiAoVHdpZy5saWIuaXMoJ09iamVjdCcsIHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVzLl9rZXlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmxpYi5tYXgodmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkoVHdpZy5saWIubWF4LCBudWxsLCBbdmFsdWVzLCAuLi5hcmdzXSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbih2YWx1ZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnT2JqZWN0JywgdmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZXMuX2tleXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcubGliLm1pbih2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5hcHBseShUd2lnLmxpYi5taW4sIG51bGwsIFt2YWx1ZXMsIC4uLmFyZ3NdKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSAqL1xuICAgICAgICB0ZW1wbGF0ZV9mcm9tX3N0cmluZyh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBUd2lnLlRlbXBsYXRlcy5wYXJzZXJzLnR3aWcoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHN0YXRlLnRlbXBsYXRlLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZGF0YTogdGVtcGxhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByYW5kb20odmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IExJTUlUX0lOVDMxID0gMHg4MDAwMDAwMDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBMSU1JVF9JTlQzMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4uY2FsbChudWxsLCAwLCBuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heC5jYWxsKG51bGwsIDAsIG4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKChtYXggLSBtaW4gKyAxKSAqIHJhbmRvbSAvIExJTUlUX0lOVDMxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdOdW1iZXInLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmFuZG9tTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdTdHJpbmcnLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KGdldFJhbmRvbU51bWJlcih2YWx1ZS5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChUd2lnLmxpYi5pcygnQXJyYXknLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbZ2V0UmFuZG9tTnVtYmVyKHZhbHVlLmxlbmd0aCAtIDEpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdPYmplY3QnLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVtrZXlzW2dldFJhbmRvbU51bWJlcihrZXlzLmxlbmd0aCAtIDEpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRSYW5kb21OdW1iZXIoTElNSVRfSU5UMzEgLSAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiBhIHRlbXBsYXRlIHdpdGhvdXQgcmVuZGVyaW5nIGl0XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZU1pc3Npbmc9ZmFsc2VdXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2UobmFtZSwgaWdub3JlTWlzc2luZykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3Qge25hbWVzcGFjZXN9ID0gc3RhdGUudGVtcGxhdGUub3B0aW9ucztcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZVNvdXJjZTtcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBpc05vZGVFbnZpcm9ubWVudCA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICBsZXQgbG9hZGVyO1xuICAgICAgICAgICAgbGV0IHBhdGggPSBuYW1lO1xuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlcyAmJiB0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gVHdpZy5wYXRoLmV4cGFuZE5hbWVzcGFjZShuYW1lc3BhY2VzLCBwYXRoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHJ1bm5pbmcgaW4gYSBub2RlLmpzIGVudmlyb25tZW50LCBzZXQgdGhlIGxvYWRlciB0byAnZnMnLlxuICAgICAgICAgICAgaWYgKGlzTm9kZUVudmlyb25tZW50KSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyID0gJ2ZzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyID0gJ2FqYXgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgcGFyYW1zIG9iamVjdFxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGlkOiBuYW1lLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBsb2FkZXIsXG4gICAgICAgICAgICAgICAgcGFyc2VyOiAnc291cmNlJyxcbiAgICAgICAgICAgICAgICBhc3luYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmV0Y2hUZW1wbGF0ZVNvdXJjZTogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCBpZ25vcmVNaXNzaW5nIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlnbm9yZU1pc3NpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWdub3JlTWlzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcnkgdG8gbG9hZCB0aGUgcmVtb3RlIHRlbXBsYXRlXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gb24gZXhjZXB0aW9uLCBsb2cgaXRcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVTb3VyY2UgPSBUd2lnLlRlbXBsYXRlcy5sb2FkUmVtb3RlKG5hbWUsIHBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGVtcGxhdGUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHNldCB0aGUgdGVtcGxhdGUgdG8gYW4gZW1wdHkgc3RyaW5nIGFuZCBkbyBOT1QgZmxpcCB0aGVcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGluZGljYXRpbmcgd2UgZm91bmQgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBlbHNlLCBhbGwgaXMgZ29vZCEgZmxpcCB0aGUgYm9vbGVhbiBpbmRpY2F0aW5nIHdlIGZvdW5kIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGVTb3VyY2UgPT09ICd1bmRlZmluZWQnIHx8IHRlbXBsYXRlU291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlU291cmNlID0gJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZy5kZWJ1ZygnVHdpZy5mdW5jdGlvbnMuc291cmNlOiAnLCAnUHJvYmxlbSBsb2FkaW5nIHRlbXBsYXRlICAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB0ZW1wbGF0ZSB3YXMgTk9UIGZvdW5kIEFORCB3ZSBhcmUgbm90IGlnbm9yaW5nIG1pc3NpbmcgdGVtcGxhdGVzLCByZXR1cm4gdGhlIHNhbWUgbWVzc2FnZVxuICAgICAgICAgICAgLy8gdGhhdCBpcyByZXR1cm5lZCBieSB0aGUgUEhQIGltcGxlbWVudGF0aW9uIG9mIHRoZSB0d2lnIHNvdXJjZSgpIGZ1bmN0aW9uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gZWxzZSwgcmV0dXJuIHRoZSB0ZW1wbGF0ZSBzb3VyY2VcbiAgICAgICAgICAgIGlmICghdGVtcGxhdGVGb3VuZCAmJiAhaWdub3JlTWlzc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBURU1QTEFURV9OT1RfRk9VTkRfTUVTU0FHRS5yZXBsYWNlKCd7bmFtZX0nLCBuYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlU291cmNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3aWcuX2Z1bmN0aW9uID0gZnVuY3Rpb24gKF9mdW5jdGlvbiwgdmFsdWUsIHBhcmFtcykge1xuICAgICAgICBpZiAoIVR3aWcuZnVuY3Rpb25zW19mdW5jdGlvbl0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gZmluZCBmdW5jdGlvbiAnICsgX2Z1bmN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBUd2lnLmZ1bmN0aW9uc1tfZnVuY3Rpb25dKHZhbHVlLCBwYXJhbXMpO1xuICAgIH07XG5cbiAgICBUd2lnLl9mdW5jdGlvbi5leHRlbmQgPSBmdW5jdGlvbiAoX2Z1bmN0aW9uLCBkZWZpbml0aW9uKSB7XG4gICAgICAgIFR3aWcuZnVuY3Rpb25zW19mdW5jdGlvbl0gPSBkZWZpbml0aW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdpZztcbn07XG4iLCIvKipcbiAqIFR3aWcuanNcbiAqXG4gKiBAY29weXJpZ2h0IDIwMTEtMjAyMCBKb2huIFJvZXBrZSBhbmQgdGhlIFR3aWcuanMgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIEF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIDItQ2xhdXNlIExpY2Vuc2VcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3R3aWdqcy90d2lnLmpzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3R3aWcuZmFjdG9yeScpKCk7XG4iLCIvLyAjIyB0d2lnLmxpYi5qc1xuLy9cbi8vIFRoaXMgZmlsZSBjb250YWlucyAzcmQgcGFydHkgbGlicmFyaWVzIHVzZWQgd2l0aGluIHR3aWcuXG4vL1xuLy8gQ29waWVzIG9mIHRoZSBsaWNlbnNlcyBmb3IgdGhlIGNvZGUgaW5jbHVkZWQgaGVyZSBjYW4gYmUgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFUy5tZCBmaWxlLlxuLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVHdpZykge1xuICAgIC8vIE5hbWVzcGFjZSBmb3IgbGlicmFyaWVzXG4gICAgVHdpZy5saWIgPSB7IH07XG5cbiAgICBUd2lnLmxpYi5zcHJpbnRmID0gcmVxdWlyZSgnbG9jdXR1cy9waHAvc3RyaW5ncy9zcHJpbnRmJyk7XG4gICAgVHdpZy5saWIudnNwcmludGYgPSByZXF1aXJlKCdsb2N1dHVzL3BocC9zdHJpbmdzL3ZzcHJpbnRmJyk7XG4gICAgVHdpZy5saWIucm91bmQgPSByZXF1aXJlKCdsb2N1dHVzL3BocC9tYXRoL3JvdW5kJyk7XG4gICAgVHdpZy5saWIubWF4ID0gcmVxdWlyZSgnbG9jdXR1cy9waHAvbWF0aC9tYXgnKTtcbiAgICBUd2lnLmxpYi5taW4gPSByZXF1aXJlKCdsb2N1dHVzL3BocC9tYXRoL21pbicpO1xuICAgIFR3aWcubGliLnN0cmlwVGFncyA9IHJlcXVpcmUoJ2xvY3V0dXMvcGhwL3N0cmluZ3Mvc3RyaXBfdGFncycpO1xuICAgIFR3aWcubGliLnN0cnRvdGltZSA9IHJlcXVpcmUoJ2xvY3V0dXMvcGhwL2RhdGV0aW1lL3N0cnRvdGltZScpO1xuICAgIFR3aWcubGliLmRhdGUgPSByZXF1aXJlKCdsb2N1dHVzL3BocC9kYXRldGltZS9kYXRlJyk7XG4gICAgVHdpZy5saWIuYm9vbHZhbCA9IHJlcXVpcmUoJ2xvY3V0dXMvcGhwL3Zhci9ib29sdmFsJyk7XG5cbiAgICBUd2lnLmxpYi5pcyA9IGZ1bmN0aW9uICh0eXBlLCBvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8IG9iaiBpbnN0YW5jZW9mIFN0cmluZyk7XG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgb2JqIGluc3RhbmNlb2YgTnVtYmVyKTtcbiAgICAgICAgICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgT2JqZWN0O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdpZy5saWIucmVwbGFjZUFsbCA9IGZ1bmN0aW9uIChzdHJpbmcsIHNlYXJjaCwgcmVwbGFjZSkge1xuICAgICAgICAvLyBDb252ZXJ0IHR5cGUgdG8gc3RyaW5nIGlmIG5lZWRlZFxuICAgICAgICBjb25zdCBzdHJpbmdUb0NoYW5nZSA9IHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnID8gc3RyaW5nIDogc3RyaW5nLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIEVzY2FwZSBwb3NzaWJsZSByZWd1bGFyIGV4cHJlc3Npb24gc3ludGF4XG4gICAgICAgIGNvbnN0IHNlYXJjaEVzY2FwZWQgPSBzZWFyY2gucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvQ2hhbmdlLnJlcGxhY2UobmV3IFJlZ0V4cChzZWFyY2hFc2NhcGVkLCAnZycpLCByZXBsYWNlKTtcbiAgICB9O1xuXG4gICAgLy8gQ2h1bmsgYW4gYXJyYXkgKGFycikgaW50byBhcnJheXMgb2YgKHNpemUpIGl0ZW1zLCByZXR1cm5zIGFuIGFycmF5IG9mIGFycmF5cywgb3IgYW4gZW1wdHkgYXJyYXkgb24gaW52YWxpZCBpbnB1dFxuICAgIFR3aWcubGliLmNodW5rQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCBzaXplKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblZhbCA9IFtdO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHNpemUgPCAxIHx8ICFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICh4IDwgbGVuKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwucHVzaChhcnIuc2xpY2UoeCwgeCArPSBzaXplKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdpZztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgVHdpZy5UZW1wbGF0ZXMucmVnaXN0ZXJMb2FkZXIoJ2FqYXgnLCBmdW5jdGlvbiAobG9jYXRpb24sIHBhcmFtcywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlO1xuICAgICAgICBjb25zdCB7cHJlY29tcGlsZWR9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcnNbcGFyYW1zLnBhcnNlcl0gfHwgdGhpcy5wYXJzZXIudHdpZztcblxuICAgICAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ1Vuc3VwcG9ydGVkIHBsYXRmb3JtOiBVbmFibGUgdG8gZG8gYWpheCByZXF1ZXN0cyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZWNhdXNlIHRoZXJlIGlzIG5vIFwiWE1MSFRUUFJlcXVlc3RcIiBpbXBsZW1lbnRhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PT0gMjAwIHx8ICh3aW5kb3cuY29yZG92YSAmJiB4bWxodHRwLnN0YXR1cyA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgVHdpZy5sb2cuZGVidWcoJ0dvdCB0ZW1wbGF0ZSAnLCB4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWNvbXBpbGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0geG1saHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMudXJsID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5kYXRhID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHBhcnNlci5jYWxsKHRoaXMsIHBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHhtbGh0dHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4bWxodHRwLm9wZW4oJ0dFVCcsIGxvY2F0aW9uLCBCb29sZWFuKHBhcmFtcy5hc3luYykpO1xuICAgICAgICB4bWxodHRwLm92ZXJyaWRlTWltZVR5cGUoJ3RleHQvcGxhaW4nKTtcbiAgICAgICAgeG1saHR0cC5zZW5kKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5hc3luYykge1xuICAgICAgICAgICAgLy8gVE9ETzogcmV0dXJuIGRlZmVycmVkIHByb21pc2VcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFR3aWcpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBsZXQgZnM7XG4gICAgbGV0IHBhdGg7XG5cbiAgICB0cnkge1xuICAgICAgICAvLyBSZXF1aXJlIGxpYiBkZXBlbmRlbmNpZXMgYXQgcnVudGltZVxuICAgICAgICBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgICAgIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTk9URTogdGhpcyBpcyBpbiBhIHRyeS9jYXRjaCB0byBhdm9pZCBlcnJvcnMgY3Jvc3MgcGxhdGZvcm1cbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGZzIGFuZCBwYXRoIG1vZHVsZXMuICcgKyBlcnJvcik7XG4gICAgfVxuXG4gICAgVHdpZy5UZW1wbGF0ZXMucmVnaXN0ZXJMb2FkZXIoJ2ZzJywgZnVuY3Rpb24gKGxvY2F0aW9uLCBwYXJhbXMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTtcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsO1xuICAgICAgICBjb25zdCB7cHJlY29tcGlsZWR9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcnNbcGFyYW1zLnBhcnNlcl0gfHwgdGhpcy5wYXJzZXIudHdpZztcblxuICAgICAgICBpZiAoIWZzIHx8ICFwYXRoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVW5zdXBwb3J0ZWQgcGxhdGZvcm06IFVuYWJsZSB0byBsb2FkIGZyb20gZmlsZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZWNhdXNlIHRoZXJlIGlzIG5vIFwiZnNcIiBvciBcInBhdGhcIiBpbXBsZW1lbnRhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9hZFRlbXBsYXRlRm4gPSBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmVjb21waWxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJhbXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBwYXJhbXMucGF0aCA9IHBhcmFtcy5wYXRoIHx8IGxvY2F0aW9uO1xuXG4gICAgICAgICAgICAvLyBUZW1wbGF0ZSBpcyBpbiBkYXRhXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHBhcnNlci5jYWxsKHRoaXMsIHBhcmFtcyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcGFyYW1zLnBhdGggPSBwYXJhbXMucGF0aCB8fCBsb2NhdGlvbjtcblxuICAgICAgICBpZiAocGFyYW1zLmFzeW5jKSB7XG4gICAgICAgICAgICBmcy5zdGF0KHBhcmFtcy5wYXRoLCAoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgfHwgIXN0YXRzLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhuZXcgVHdpZy5FcnJvcignVW5hYmxlIHRvIGZpbmQgdGVtcGxhdGUgZmlsZSAnICsgcGFyYW1zLnBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmcy5yZWFkRmlsZShwYXJhbXMucGF0aCwgJ3V0ZjgnLCBsb2FkVGVtcGxhdGVGbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRPRE86IHJldHVybiBkZWZlcnJlZCBwcm9taXNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWZzLnN0YXRTeW5jKHBhcmFtcy5wYXRoKS5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gZmluZCB0ZW1wbGF0ZSBmaWxlICcgKyBwYXJhbXMucGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignVW5hYmxlIHRvIGZpbmQgdGVtcGxhdGUgZmlsZSAnICsgcGFyYW1zLnBhdGggKyAnLiAnICsgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXJhbXMucGF0aCwgJ3V0ZjgnKTtcbiAgICAgICAgbG9hZFRlbXBsYXRlRm4odW5kZWZpbmVkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0pO1xufTtcbiIsIi8vICMjIHR3aWcubG9naWMuanNcbi8vXG4vLyBUaGlzIGZpbGUgaGFuZGxlcyB0b2tlbml6aW5nLCBjb21waWxpbmcgYW5kIHBhcnNpbmcgbG9naWMgdG9rZW5zLiB7JSAuLi4gJX1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFR3aWcpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKipcbiAgICAgKiBOYW1lc3BhY2UgZm9yIGxvZ2ljIGhhbmRsaW5nLlxuICAgICAqL1xuICAgIFR3aWcubG9naWMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIExvZ2ljIHRva2VuIHR5cGVzLlxuICAgICAqL1xuICAgIFR3aWcubG9naWMudHlwZSA9IHtcbiAgICAgICAgaWZfOiAnVHdpZy5sb2dpYy50eXBlLmlmJyxcbiAgICAgICAgZW5kaWY6ICdUd2lnLmxvZ2ljLnR5cGUuZW5kaWYnLFxuICAgICAgICBmb3JfOiAnVHdpZy5sb2dpYy50eXBlLmZvcicsXG4gICAgICAgIGVuZGZvcjogJ1R3aWcubG9naWMudHlwZS5lbmRmb3InLFxuICAgICAgICBlbHNlXzogJ1R3aWcubG9naWMudHlwZS5lbHNlJyxcbiAgICAgICAgZWxzZWlmOiAnVHdpZy5sb2dpYy50eXBlLmVsc2VpZicsXG4gICAgICAgIHNldDogJ1R3aWcubG9naWMudHlwZS5zZXQnLFxuICAgICAgICBzZXRjYXB0dXJlOiAnVHdpZy5sb2dpYy50eXBlLnNldGNhcHR1cmUnLFxuICAgICAgICBlbmRzZXQ6ICdUd2lnLmxvZ2ljLnR5cGUuZW5kc2V0JyxcbiAgICAgICAgZmlsdGVyOiAnVHdpZy5sb2dpYy50eXBlLmZpbHRlcicsXG4gICAgICAgIGVuZGZpbHRlcjogJ1R3aWcubG9naWMudHlwZS5lbmRmaWx0ZXInLFxuICAgICAgICBhcHBseTogJ1R3aWcubG9naWMudHlwZS5hcHBseScsXG4gICAgICAgIGVuZGFwcGx5OiAnVHdpZy5sb2dpYy50eXBlLmVuZGFwcGx5JyxcbiAgICAgICAgZG86ICdUd2lnLmxvZ2ljLnR5cGUuZG8nLFxuICAgICAgICBzaG9ydGJsb2NrOiAnVHdpZy5sb2dpYy50eXBlLnNob3J0YmxvY2snLFxuICAgICAgICBibG9jazogJ1R3aWcubG9naWMudHlwZS5ibG9jaycsXG4gICAgICAgIGVuZGJsb2NrOiAnVHdpZy5sb2dpYy50eXBlLmVuZGJsb2NrJyxcbiAgICAgICAgZXh0ZW5kc186ICdUd2lnLmxvZ2ljLnR5cGUuZXh0ZW5kcycsXG4gICAgICAgIHVzZTogJ1R3aWcubG9naWMudHlwZS51c2UnLFxuICAgICAgICBpbmNsdWRlOiAnVHdpZy5sb2dpYy50eXBlLmluY2x1ZGUnLFxuICAgICAgICBzcGFjZWxlc3M6ICdUd2lnLmxvZ2ljLnR5cGUuc3BhY2VsZXNzJyxcbiAgICAgICAgZW5kc3BhY2VsZXNzOiAnVHdpZy5sb2dpYy50eXBlLmVuZHNwYWNlbGVzcycsXG4gICAgICAgIG1hY3JvOiAnVHdpZy5sb2dpYy50eXBlLm1hY3JvJyxcbiAgICAgICAgZW5kbWFjcm86ICdUd2lnLmxvZ2ljLnR5cGUuZW5kbWFjcm8nLFxuICAgICAgICBpbXBvcnRfOiAnVHdpZy5sb2dpYy50eXBlLmltcG9ydCcsXG4gICAgICAgIGZyb206ICdUd2lnLmxvZ2ljLnR5cGUuZnJvbScsXG4gICAgICAgIGVtYmVkOiAnVHdpZy5sb2dpYy50eXBlLmVtYmVkJyxcbiAgICAgICAgZW5kZW1iZWQ6ICdUd2lnLmxvZ2ljLnR5cGUuZW5kZW1iZWQnLFxuICAgICAgICB3aXRoOiAnVHdpZy5sb2dpYy50eXBlLndpdGgnLFxuICAgICAgICBlbmR3aXRoOiAnVHdpZy5sb2dpYy50eXBlLmVuZHdpdGgnLFxuICAgICAgICBkZXByZWNhdGVkOiAnVHdpZy5sb2dpYy50eXBlLmRlcHJlY2F0ZWQnXG4gICAgfTtcblxuICAgIC8vIFJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIGhhbmRsaW5nIGxvZ2ljIHRva2Vucy5cbiAgICAvL1xuICAgIC8vIFByb3BlcnRpZXM6XG4gICAgLy9cbiAgICAvLyAgICAgIHR5cGU6ICBUaGUgdHlwZSBvZiBleHByZXNzaW9uIHRoaXMgbWF0Y2hlc1xuICAgIC8vXG4gICAgLy8gICAgICByZWdleDogQSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIHRoZSBmb3JtYXQgb2YgdGhlIHRva2VuXG4gICAgLy9cbiAgICAvLyAgICAgIG5leHQ6ICBXaGF0IGxvZ2ljIHRva2VucyAoaWYgYW55KSBwb3AgdGhpcyB0b2tlbiBvZmYgdGhlIGxvZ2ljIHN0YWNrLiBJZiBlbXB0eSwgdGhlXG4gICAgLy8gICAgICAgICAgICAgbG9naWMgdG9rZW4gaXMgYXNzdW1lZCB0byBub3QgcmVxdWlyZSBhbiBlbmQgdGFnIGFuZCBpc24ndCBwdXNoIG9udG8gdGhlIHN0YWNrLlxuICAgIC8vXG4gICAgLy8gICAgICBvcGVuOiAgRG9lcyB0aGlzIHRhZyBvcGVuIGEgbG9naWMgZXhwcmVzc2lvbiBvciBpcyBpdCBzdGFuZGFsb25lLiBGb3IgZXhhbXBsZSxcbiAgICAvLyAgICAgICAgICAgICB7JSBlbmRpZiAlfSBjYW5ub3QgZXhpc3Qgd2l0aG91dCBhbiBvcGVuaW5nIHslIGlmIC4uLiAlfSB0YWcsIHNvIG9wZW4gPSBmYWxzZS5cbiAgICAvL1xuICAgIC8vICBGdW5jdGlvbnM6XG4gICAgLy9cbiAgICAvLyAgICAgIGNvbXBpbGU6IEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGNvbXBpbGluZyB0aGUgdG9rZW4gaW50byBhbiBvdXRwdXQgdG9rZW4gcmVhZHkgZm9yXG4gICAgLy8gICAgICAgICAgICAgICBwYXJzaW5nIHdpdGggdGhlIHBhcnNlIGZ1bmN0aW9uLlxuICAgIC8vXG4gICAgLy8gICAgICBwYXJzZTogICBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHRoZSBjb21waWxlZCB0b2tlbiBpbnRvIG91dHB1dCAoSFRNTCAvIHdoYXRldmVyIHRoZVxuICAgIC8vICAgICAgICAgICAgICAgdGVtcGxhdGUgcmVwcmVzZW50cykuXG4gICAgVHdpZy5sb2dpYy5kZWZpbml0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0eXBlIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBpZiBleHByZXNzaW9uICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5pZl8sXG4gICAgICAgICAgICByZWdleDogL15pZlxccz8oW1xcc1xcU10rKSQvLFxuICAgICAgICAgICAgbmV4dDogW1xuICAgICAgICAgICAgICAgIFR3aWcubG9naWMudHlwZS5lbHNlXyxcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZWxzZWlmLFxuICAgICAgICAgICAgICAgIFR3aWcubG9naWMudHlwZS5lbmRpZlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRva2VuLm1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIC8vIENvbXBpbGUgdGhlIGV4cHJlc3Npb24uXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBjb250ZXh0LCBjaGFpbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi5zdGFjaywgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFR3aWcubGliLmJvb2x2YWwocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUucGFyc2VBc3luYyh0b2tlbi5vdXRwdXQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxzZSBpZiB0eXBlIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBlbHNlaWYgZXhwcmVzc2lvbiAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZWxzZWlmLFxuICAgICAgICAgICAgcmVnZXg6IC9eZWxzZWlmXFxzKihbXlxcc10uKikkLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZWxzZV8sXG4gICAgICAgICAgICAgICAgVHdpZy5sb2dpYy50eXBlLmVsc2VpZixcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kaWZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdG9rZW4ubWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgLy8gQ29tcGlsZSB0aGUgZXhwcmVzc2lvbi5cbiAgICAgICAgICAgICAgICB0b2tlbi5zdGFjayA9IFR3aWcuZXhwcmVzc2lvbi5jb21waWxlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5leHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIH0pLnN0YWNrO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIGNvbnRleHQsIGNoYWluKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZXhwcmVzc2lvbi5wYXJzZUFzeW5jLmNhbGwoc3RhdGUsIHRva2VuLnN0YWNrLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYWluICYmIFR3aWcubGliLmJvb2x2YWwocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUucGFyc2VBc3luYyh0b2tlbi5vdXRwdXQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxzZSB0eXBlIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBlbHNlICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5lbHNlXyxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmVsc2UkLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kaWYsXG4gICAgICAgICAgICAgICAgVHdpZy5sb2dpYy50eXBlLmVuZGZvclxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIGNvbnRleHQsIGNoYWluKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBUd2lnLlByb21pc2UucmVzb2x2ZSgnJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBzdGF0ZS5wYXJzZUFzeW5jKHRva2VuLm91dHB1dCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihvdXRwdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmQgaWYgdHlwZSBsb2dpYyB0b2tlbnMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogIEZvcm1hdDogeyUgZW5kaWYgJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmVuZGlmLFxuICAgICAgICAgICAgcmVnZXg6IC9eZW5kaWYkLyxcbiAgICAgICAgICAgIG5leHQ6IFtdLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGb3IgdHlwZSBsb2dpYyB0b2tlbnMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogIEZvcm1hdDogeyUgZm9yIGV4cHJlc3Npb24gJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmZvcl8sXG4gICAgICAgICAgICByZWdleDogL15mb3JcXHMrKFthLXpBLVowLTlfLFxcc10rKVxccytpblxccysoW1xcU1xcc10rPykoPzpcXHMraWZcXHMrKFteXFxzXS4qKSk/JC8sXG4gICAgICAgICAgICBuZXh0OiBbXG4gICAgICAgICAgICAgICAgVHdpZy5sb2dpYy50eXBlLmVsc2VfLFxuICAgICAgICAgICAgICAgIFR3aWcubG9naWMudHlwZS5lbmRmb3JcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gdG9rZW4ubWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRva2VuLm1hdGNoWzJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsID0gdG9rZW4ubWF0Y2hbM107XG4gICAgICAgICAgICAgICAgbGV0IGt2U3BsaXQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4ua2V5VmFyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0b2tlbi52YWx1ZVZhciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWUuaW5jbHVkZXMoJywnKSkge1xuICAgICAgICAgICAgICAgICAgICBrdlNwbGl0ID0ga2V5VmFsdWUuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGt2U3BsaXQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5rZXlWYXIgPSBrdlNwbGl0WzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLnZhbHVlVmFyID0ga3ZTcGxpdFsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHdpZy5FcnJvcignSW52YWxpZCBleHByZXNzaW9uIGluIGZvciBsb29wOiAnICsga2V5VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4udmFsdWVWYXIgPSBrZXlWYWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVmFsaWQgZXhwcmVzc2lvbnMgZm9yIGEgZm9yIGxvb3BcbiAgICAgICAgICAgICAgICAvLyAgIGZvciBpdGVtICAgICBpbiBleHByZXNzaW9uXG4gICAgICAgICAgICAgICAgLy8gICBmb3Iga2V5LGl0ZW0gaW4gZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgLy8gQ29tcGlsZSB0aGUgZXhwcmVzc2lvbi5cbiAgICAgICAgICAgICAgICB0b2tlbi5leHByZXNzaW9uID0gVHdpZy5leHByZXNzaW9uLmNvbXBpbGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmV4cHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHByZXNzaW9uXG4gICAgICAgICAgICAgICAgfSkuc3RhY2s7XG5cbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIHRoZSBjb25kaXRpb25hbCAoaWYgYXZhaWxhYmxlKVxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi5jb25kaXRpb25hbCA9IFR3aWcuZXhwcmVzc2lvbi5jb21waWxlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb25kaXRpb25hbFxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBjb250ZXh0LCBjb250aW51ZUNoYWluKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBsZW47XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQga2V5c2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcbiAgICAgICAgICAgICAgICBjb25zdCB7Y29uZGl0aW9uYWx9ID0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29uc3QgYnVpbGRMb29wID0gZnVuY3Rpb24gKGluZGV4LCBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgwOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmluZGV4OiBpc0NvbmRpdGlvbmFsID8gdW5kZWZpbmVkIDogbGVuIC0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpbmRleDA6IGlzQ29uZGl0aW9uYWwgPyB1bmRlZmluZWQgOiBsZW4gLSBpbmRleCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogKGluZGV4ID09PSAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3Q6IGlzQ29uZGl0aW9uYWwgPyB1bmRlZmluZWQgOiAoaW5kZXggPT09IGxlbiAtIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBpc0NvbmRpdGlvbmFsID8gdW5kZWZpbmVkIDogbGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1biBvbmNlIGZvciBlYWNoIGl0ZXJhdGlvbiBvZiB0aGUgbG9vcFxuICAgICAgICAgICAgICAgIGNvbnN0IGxvb3AgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbm5lckNvbnRleHQgPSB7Li4uY29udGV4dH07XG5cbiAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZXh0W3Rva2VuLnZhbHVlVmFyXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5rZXlWYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGV4dFt0b2tlbi5rZXlWYXJdID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZXh0Lmxvb3AgPSBidWlsZExvb3AoaW5kZXgsIGxlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbmRpdGlvbmFsID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgVHdpZy5Qcm9taXNlLnJlc29sdmUodHJ1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgY29uZGl0aW9uYWwsIGlubmVyQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihjb25kaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wYXJzZUFzeW5jKHRva2VuLm91dHB1dCwgaW5uZXJDb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHRva2VuT3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2godG9rZW5PdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBsb29wLXJlbGF0ZWQgdmFyaWFibGVzIGZyb20gdGhlIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaW5uZXJDb250ZXh0Lmxvb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGlubmVyQ29udGV4dFt0b2tlbi52YWx1ZVZhcl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGlubmVyQ29udGV4dFt0b2tlbi5rZXlWYXJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgaW4gdmFsdWVzIHRoYXQgZXhpc3QgaW4gY29udGV4dCBidXQgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gaW5uZXJfY29udGV4dC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2lnLm1lcmdlKGNvbnRleHQsIGlubmVyQ29udGV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZXhwcmVzc2lvbi5wYXJzZUFzeW5jLmNhbGwoc3RhdGUsIHRva2VuLmV4cHJlc3Npb24sIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5hc3luYy5mb3JFYWNoKHJlc3VsdCwgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpbmRleDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9vcChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFR3aWcubGliLmlzKCdPYmplY3QnLCByZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5fa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNldCA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c2V0ID0gcmVzdWx0Ll9rZXlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IGtleXNldC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuYXN5bmMuZm9yRWFjaChrZXlzZXQsIGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRoZSBfa2V5cyBwcm9wZXJ0eSwgaXQncyBpbnRlcm5hbCB0byB0d2lnLmpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdfa2V5cycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb29wKGtleSwgcmVzdWx0W2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgZWxzZSBzdGF0ZW1lbnRzIGlmIG5vIG91dHB1dCB3YXMgZ2VuZXJhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZUNoYWluID0gKG91dHB1dC5sZW5ndGggPT09IDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluOiBjb250aW51ZUNoYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBUd2lnLm91dHB1dC5jYWxsKHN0YXRlLnRlbXBsYXRlLCBvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmQgZm9yIHR5cGUgbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICBGb3JtYXQ6IHslIGVuZGZvciAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZW5kZm9yLFxuICAgICAgICAgICAgcmVnZXg6IC9eZW5kZm9yJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0IHR5cGUgbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICBGb3JtYXQ6IHslIHNldCBrZXkgPSBleHByZXNzaW9uICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5zZXQsXG4gICAgICAgICAgICByZWdleDogL15zZXRcXHMrKFthLXpBLVowLTlfLFxcc10rKVxccyo9XFxzKihbXFxzXFxTXSspJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7IC8vXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdG9rZW4ubWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0b2tlbi5tYXRjaFsyXTtcbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIHRoZSBleHByZXNzaW9uLlxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25TdGFjayA9IFR3aWcuZXhwcmVzc2lvbi5jb21waWxlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5leHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIH0pLnN0YWNrO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4ua2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHRva2VuLmV4cHJlc3Npb24gPSBleHByZXNzaW9uU3RhY2s7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBjb250ZXh0LCBjb250aW51ZUNoYWluKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2tleX0gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4uZXhwcmVzc2lvbiwgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiAgSWYgc3RvcmluZyB0aGUgY29udGV4dCBpbiBhIHZhcmlhYmxlLCBpdCBuZWVkcyB0byBiZSBhIGNsb25lIG9mIHRoZSBjdXJyZW50IHN0YXRlIG9mIGNvbnRleHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3RoZXJ3aXNlIHdlIGhhdmUgYSBjb250ZXh0IHdpdGggaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpeGVzICMzNDFcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Li4udmFsdWV9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbjogY29udGludWVDaGFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgY2FwdHVyZSB0eXBlIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBzZXQga2V5ICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5zZXRjYXB0dXJlLFxuICAgICAgICAgICAgcmVnZXg6IC9ec2V0XFxzKyhbYS16QS1aMC05XyxcXHNdKykkLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kc2V0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSB0b2tlbi5tYXRjaFsxXS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICB0b2tlbi5rZXkgPSBrZXk7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBjb250ZXh0LCBjb250aW51ZUNoYWluKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gdG9rZW47XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUucGFyc2VBc3luYyh0b2tlbi5vdXRwdXQsIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBvbiBib3RoIHRoZSBnbG9iYWwgYW5kIGxvY2FsIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbnRleHRba2V5XSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRba2V5XSA9IG91dHB1dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbjogY29udGludWVDaGFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmQgc2V0IHR5cGUgYmxvY2sgbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICBGb3JtYXQ6IHslIGVuZHNldCAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZW5kc2V0LFxuICAgICAgICAgICAgcmVnZXg6IC9eZW5kc2V0JC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlsdGVyIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBmaWx0ZXIgdXBwZXIgJX0gb3IgeyUgZmlsdGVyIGxvd2VyfGVzY2FwZSAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZmlsdGVyLFxuICAgICAgICAgICAgcmVnZXg6IC9eZmlsdGVyXFxzKyguKykkLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kZmlsdGVyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBpbGUodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gJ3wnICsgdG9rZW4ubWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIC8vIENvbXBpbGUgdGhlIGV4cHJlc3Npb24uXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBjb250ZXh0LCBjaGFpbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wYXJzZUFzeW5jKHRva2VuLm91dHB1dCwgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ob3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfV0uY29uY2F0KHRva2VuLnN0YWNrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZXhwcmVzc2lvbi5wYXJzZUFzeW5jLmNhbGwoc3RhdGUsIHN0YWNrLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ob3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmQgZmlsdGVyIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBlbmRmaWx0ZXIgJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmVuZGZpbHRlcixcbiAgICAgICAgICAgIHJlZ2V4OiAvXmVuZGZpbHRlciQvLFxuICAgICAgICAgICAgbmV4dDogW10sXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFwcGx5IGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBhcHBseSB1cHBlciAlfSBvciB7JSBhcHBseSBsb3dlcnxlc2NhcGUgJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmFwcGx5LFxuICAgICAgICAgICAgcmVnZXg6IC9eYXBwbHlcXHMrKC4rKSQvLFxuICAgICAgICAgICAgbmV4dDogW1xuICAgICAgICAgICAgICAgIFR3aWcubG9naWMudHlwZS5lbmRhcHBseVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9ICd8JyArIHRva2VuLm1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIHRoZSBleHByZXNzaW9uLlxuICAgICAgICAgICAgICAgIHRva2VuLnN0YWNrID0gVHdpZy5leHByZXNzaW9uLmNvbXBpbGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmV4cHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHByZXNzaW9uXG4gICAgICAgICAgICAgICAgfSkuc3RhY2s7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUucGFyc2VBc3luYyh0b2tlbi5vdXRwdXQsIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFjayA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLmNvbmNhdCh0b2tlbi5zdGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCBzdGFjaywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5kIGFwcGx5IGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBlbmRhcHBseSAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZW5kYXBwbHksXG4gICAgICAgICAgICByZWdleDogL15lbmRhcHBseSQvLFxuICAgICAgICAgICAgbmV4dDogW10sXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldCB0eXBlIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBkbyBleHByZXNzaW9uICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5kbyxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmRvXFxzKyhbXFxTXFxzXSspJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7IC8vXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRva2VuLm1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIC8vIENvbXBpbGUgdGhlIGV4cHJlc3Npb24uXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblN0YWNrID0gVHdpZy5leHByZXNzaW9uLmNvbXBpbGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmV4cHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHByZXNzaW9uXG4gICAgICAgICAgICAgICAgfSkuc3RhY2s7XG5cbiAgICAgICAgICAgICAgICB0b2tlbi5leHByZXNzaW9uID0gZXhwcmVzc2lvblN0YWNrO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY29udGludWVDaGFpbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi5leHByZXNzaW9uLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluOiBjb250aW51ZUNoYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEJsb2NrIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBibG9jayB0aXRsZSAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuYmxvY2ssXG4gICAgICAgICAgICByZWdleDogL15ibG9ja1xccysoXFx3KykkLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kYmxvY2tcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbikge1xuICAgICAgICAgICAgICAgIHRva2VuLmJsb2NrTmFtZSA9IHRva2VuLm1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIGNvbnRleHQsIGNoYWluKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gVHdpZy5Qcm9taXNlLnJlc29sdmUoKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBsYXRlLmJsb2Nrcy5kZWZpbmVkW3Rva2VuLmJsb2NrTmFtZV0gPSBuZXcgVHdpZy5CbG9jayhzdGF0ZS50ZW1wbGF0ZSwgdG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSBpbnN0YW5jZW9mIFR3aWcuVGVtcGxhdGVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IHN0YXRlLmdldEJsb2NrKHRva2VuLmJsb2NrTmFtZSkucmVuZGVyKHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEJsb2NrIHNob3J0aGFuZCBsb2dpYyB0b2tlbnMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogIEZvcm1hdDogeyUgYmxvY2sgdGl0bGUgZXhwcmVzc2lvbiAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuc2hvcnRibG9jayxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmJsb2NrXFxzKyhcXHcrKVxccysoLispJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4uZXhwcmVzc2lvbiA9IHRva2VuLm1hdGNoWzJdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5vdXRwdXQgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFR3aWcuZXhwcmVzc2lvbi50eXBlLmV4cHJlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b2tlbi5leHByZXNzaW9uXG4gICAgICAgICAgICAgICAgfSkuc3RhY2s7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5sb2dpYy5oYW5kbGVyW1R3aWcubG9naWMudHlwZS5ibG9ja10uY29tcGlsZS5hcHBseSh0ZW1wbGF0ZSwgW3Rva2VuXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmxvZ2ljLmhhbmRsZXJbVHdpZy5sb2dpYy50eXBlLmJsb2NrXS5wYXJzZS5hcHBseShzdGF0ZSwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5kIGJsb2NrIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBlbmRibG9jayAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZW5kYmxvY2ssXG4gICAgICAgICAgICByZWdleDogL15lbmRibG9jayg/OlxccysoXFx3KykpPyQvLFxuICAgICAgICAgICAgbmV4dDogW10sXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEJsb2NrIGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgRm9ybWF0OiB7JSBleHRlbmRzIFwidGVtcGxhdGUudHdpZ1wiICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5leHRlbmRzXyxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmV4dGVuZHNcXHMrKC4rKSQvLFxuICAgICAgICAgICAgbmV4dDogW10sXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0b2tlbi5tYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4uc3RhY2ssIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbGVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGVOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbGVOYW1lLnJldmVyc2UoKS5yZWR1Y2UoKGFjYywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHN0YXRlLnRlbXBsYXRlLmltcG9ydEZpbGUoZmlsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmZpbGVOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBsYXRlLnBhcmVudFRlbXBsYXRlID0gcmVzdWx0LmZpbGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGxhdGUucGFyZW50VGVtcGxhdGUgPSBmaWxlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBCbG9jayBsb2dpYyB0b2tlbnMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogIEZvcm1hdDogeyUgdXNlIFwidGVtcGxhdGUudHdpZ1wiICV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS51c2UsXG4gICAgICAgICAgICByZWdleDogL151c2VcXHMrKC4rKSQvLFxuICAgICAgICAgICAgbmV4dDogW10sXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0b2tlbi5tYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4uc3RhY2ssIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbGVQYXRoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzdGF0ZSBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnkgZGVmaW5lZCBibG9ja3Mgd2lsbCBiZSBjcmVhdGVkIGluIGlzb2xhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VUZW1wbGF0ZSA9IHN0YXRlLnRlbXBsYXRlLmltcG9ydEZpbGUoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VTdGF0ZSA9IG5ldyBUd2lnLlBhcnNlU3RhdGUodXNlVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZVN0YXRlLnBhcnNlQXN5bmModXNlVGVtcGxhdGUudG9rZW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGxhdGUuYmxvY2tzLmltcG9ydGVkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudGVtcGxhdGUuYmxvY2tzLmltcG9ydGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udXNlU3RhdGUuZ2V0QmxvY2tzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBCbG9jayBsb2dpYyB0b2tlbnMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogIEZvcm1hdDogeyUgaW5jbHVkZXMgXCJ0ZW1wbGF0ZS50d2lnXCIgW3dpdGgge3NvbWU6ICd2YWx1ZXMnfSBvbmx5XSAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuaW5jbHVkZSxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmluY2x1ZGVcXHMrKC4rPykoPzpcXHN8JCkoaWdub3JlIG1pc3NpbmcoPzpcXHN8JCkpPyg/OndpdGhcXHMrKFtcXFNcXHNdKz8pKT8oPzpcXHN8JCkob25seSk/JC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge21hdGNofSA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBtYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWdub3JlTWlzc2luZyA9IG1hdGNoWzJdICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aENvbnRleHQgPSBtYXRjaFszXTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbmx5ID0gKChtYXRjaFs0XSAhPT0gdW5kZWZpbmVkKSAmJiBtYXRjaFs0XS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4ub25seSA9IG9ubHk7XG4gICAgICAgICAgICAgICAgdG9rZW4uaWdub3JlTWlzc2luZyA9IGlnbm9yZU1pc3Npbmc7XG5cbiAgICAgICAgICAgICAgICB0b2tlbi5zdGFjayA9IFR3aWcuZXhwcmVzc2lvbi5jb21waWxlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5leHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIH0pLnN0YWNrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpdGhDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ud2l0aFN0YWNrID0gVHdpZy5leHByZXNzaW9uLmNvbXBpbGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5leHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHdpdGhDb250ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIGNvbnRleHQsIGNoYWluKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBmaWxlbmFtZVxuICAgICAgICAgICAgICAgIGxldCBpbm5lckNvbnRleHQgPSB0b2tlbi5vbmx5ID8ge30gOiB7Li4uY29udGV4dH07XG4gICAgICAgICAgICAgICAgY29uc3Qge2lnbm9yZU1pc3Npbmd9ID0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7Y2hhaW4sIG91dHB1dDogJyd9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbi53aXRoU3RhY2sgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBUd2lnLlByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi53aXRoU3RhY2ssIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbih3aXRoQ29udGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pbm5lckNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLndpdGhDb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi5zdGFjaywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzID0gW2ZpbGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaWxlcy5yZWR1Y2UoKGFjYywgZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2MucmVuZGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVHdpZy5UZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZpbGUucmVuZGVyQXN5bmMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFcnJvcjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogc3RhdGUudGVtcGxhdGUuaW1wb3J0RmlsZShmaWxlKS5yZW5kZXJBc3luYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luY2x1ZGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVycm9yOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7cmVuZGVyOiBudWxsLCBsYXN0RXJyb3I6IG51bGx9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZW5kZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlbmRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZW5kZXIgPT09IG51bGwgJiYgaWdub3JlTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0Lmxhc3RFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ob3V0cHV0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm91dHB1dCA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5zcGFjZWxlc3MsXG4gICAgICAgICAgICByZWdleDogL15zcGFjZWxlc3MkLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kc3BhY2VsZXNzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIGh0bWwgYW5kIHJldHVybiBpdCB3aXRob3V0IGFueSBzcGFjZXMgYmV0d2VlbiB0YWdzXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgb3V0cHV0IHdpdGhvdXQgYW55IGZpbHRlclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wYXJzZUFzeW5jKHRva2VuLm91dHB1dCwgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odG9rZW5PdXRwdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgLy8gQSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZmluZCBjbG9zaW5nIGFuZCBvcGVuaW5nIHRhZ3Mgd2l0aCBzcGFjZXMgYmV0d2VlbiB0aGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgckJldHdlZW5UYWdTcGFjZXMgPSAvPlxccys8L2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGFsbCBzcGFjZSBiZXR3ZWVuIGNsb3NpbmcgYW5kIG9wZW5pbmcgaHRtbCB0YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0cHV0ID0gdG9rZW5PdXRwdXQucmVwbGFjZShyQmV0d2VlblRhZ1NwYWNlcywgJz48JykudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV3cmFwIG91dHB1dCBhcyBhIFR3aWcuTWFya3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBuZXcgVHdpZy5NYXJrdXAob3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBZGQgdGhlIHslIGVuZHNwYWNlbGVzcyAlfSB0b2tlblxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZW5kc3BhY2VsZXNzLFxuICAgICAgICAgICAgcmVnZXg6IC9eZW5kc3BhY2VsZXNzJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWFjcm8gbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEZvcm1hdDogeyUgbWFjcm8gaW5wdXQobmFtZSA9IGRlZmF1bHQsIHZhbHVlLCB0eXBlLCBzaXplKSAlfVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLm1hY3JvLFxuICAgICAgICAgICAgcmVnZXg6IC9ebWFjcm9cXHMrKFxcdyspXFxzKlxcKFxccyooKD86XFx3Kyg/Olxccyo9XFxzKihbXFxzXFxTXSspKT8oPzosXFxzKik/KSopXFxzKlxcKSQvLFxuICAgICAgICAgICAgbmV4dDogW1xuICAgICAgICAgICAgICAgIFR3aWcubG9naWMudHlwZS5lbmRtYWNyb1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFjcm9OYW1lID0gdG9rZW4ubWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgcmF3UGFyYW1ldGVycyA9IHRva2VuLm1hdGNoWzJdLnNwbGl0KC9cXHMqLFxccyovKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gcmF3UGFyYW1ldGVycy5tYXAocmF3UGFyYW1ldGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJhd1BhcmFtZXRlci5zcGxpdCgvXFxzKj1cXHMqLylbMF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyc0NvdW50ID0gcGFyYW1ldGVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAvLyBEdXBsaWNhdGUgY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyc0NvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlxID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pcVtwYXJhbWV0ZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ0R1cGxpY2F0ZSBhcmd1bWVudHMgZm9yIHBhcmFtZXRlcjogJyArIHBhcmFtZXRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXFbcGFyYW1ldGVyXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0b2tlbi5tYWNyb05hbWUgPSBtYWNyb05hbWU7XG4gICAgICAgICAgICAgICAgdG9rZW4ucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgdG9rZW4uZGVmYXVsdHMgPSByYXdQYXJhbWV0ZXJzLnJlZHVjZShmdW5jdGlvbiAoZGVmYXVsdHMsIHJhd1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWlyID0gcmF3UGFyYW1ldGVyLnNwbGl0KC9cXHMqPVxccyovKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFpclswXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHBhaXJbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzW2tleV0gPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5leHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHByZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFjaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLm1hdGNoO1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5tYWNyb3NbdG9rZW4ubWFjcm9OYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgZ2xvYmFsIGNvbnRleHQgYW5kIG90aGVyIG1hY3Jvc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWNyb0NvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgY3VycmVudCBzdGF0ZSBjb250ZXh0IGJlY2F1c2Ugc3RhdGUgY29udGV4dCBpbmNsdWRlcyBjdXJyZW50IGxvb3AgdmFyaWFibGVzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZjogc3RhdGUubWFjcm9zXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgYXJndW1lbnRzXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuYXN5bmMuZm9yRWFjaCh0b2tlbi5wYXJhbWV0ZXJzLCBmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBhcmFtZXRlcnMgZnJvbSBjb250ZXh0IHRvIG1hY3JvQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hY3JvQ29udGV4dFtwcm9wXSA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4uZGVmYXVsdHNbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuZXhwcmVzc2lvbi5wYXJzZUFzeW5jLmNhbGwodGhpcywgdG9rZW4uZGVmYXVsdHNbcHJvcF0sIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hY3JvQ29udGV4dFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFR3aWcuUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWNyb0NvbnRleHRbcHJvcF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wYXJzZUFzeW5jKHRva2VuLm91dHB1dCwgbWFjcm9Db250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6ICcnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmQgbWFjcm8gbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEZvcm1hdDogeyUgZW5kbWFjcm8gJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmVuZG1hY3JvLFxuICAgICAgICAgICAgcmVnZXg6IC9eZW5kbWFjcm8kLyxcbiAgICAgICAgICAgIG5leHQ6IFtdLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogSW1wb3J0IGxvZ2ljIHRva2Vucy5cbiAgICAgICAgICAgICpcbiAgICAgICAgICAgICogRm9ybWF0OiB7JSBpbXBvcnQgXCJ0ZW1wbGF0ZS50d2lnXCIgYXMgZm9ybSAlfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5pbXBvcnRfLFxuICAgICAgICAgICAgcmVnZXg6IC9eaW1wb3J0XFxzKyguKylcXHMrYXNcXHMrKFxcdyspJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRva2VuLm1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0TmFtZSA9IHRva2VuLm1hdGNoWzJdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW4ubWF0Y2g7XG5cbiAgICAgICAgICAgICAgICB0b2tlbi5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgICAgICAgICB0b2tlbi5jb250ZXh0TmFtZSA9IGNvbnRleHROYW1lO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiAnJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXhwcmVzc2lvbiA9PT0gJ19zZWxmJykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0W3Rva2VuLmNvbnRleHROYW1lXSA9IHN0YXRlLm1hY3JvcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4uc3RhY2ssIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbGVQYXRoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS50ZW1wbGF0ZS5pbXBvcnRGaWxlKGZpbGVQYXRoIHx8IHRva2VuLmV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihpbXBvcnRUZW1wbGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbXBvcnRTdGF0ZSA9IG5ldyBUd2lnLlBhcnNlU3RhdGUoaW1wb3J0VGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1wb3J0U3RhdGUucGFyc2VBc3luYyhpbXBvcnRUZW1wbGF0ZS50b2tlbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRbdG9rZW4uY29udGV4dE5hbWVdID0gaW1wb3J0U3RhdGUubWFjcm9zO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogRnJvbSBsb2dpYyB0b2tlbnMuXG4gICAgICAgICAgICAqXG4gICAgICAgICAgICAqIEZvcm1hdDogeyUgZnJvbSBcInRlbXBsYXRlLnR3aWdcIiBpbXBvcnQgZnVuYyBhcyBmb3JtICV9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmZyb20sXG4gICAgICAgICAgICByZWdleDogL15mcm9tXFxzKyguKylcXHMraW1wb3J0XFxzKyhbYS16QS1aMC05XywgXSspJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRva2VuLm1hdGNoWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWNyb0V4cHJlc3Npb25zID0gdG9rZW4ubWF0Y2hbMl0udHJpbSgpLnNwbGl0KC9cXHMqLFxccyovKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYWNyb05hbWVzID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlcyBvZiBtYWNyb0V4cHJlc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIGZ1bmN0aW9uIGFzIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hY3JvTWF0Y2ggPSByZXMubWF0Y2goL14oXFx3KylcXHMrYXNcXHMrKFxcdyspJC8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFjcm9NYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFjcm9OYW1lc1ttYWNyb01hdGNoWzFdLnRyaW0oKV0gPSBtYWNyb01hdGNoWzJdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMubWF0Y2goL14oXFx3KykkLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hY3JvTmFtZXNbcmVzXSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBpbXBvcnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcblxuICAgICAgICAgICAgICAgIHRva2VuLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICAgICAgICAgIHRva2VuLm1hY3JvTmFtZXMgPSBtYWNyb05hbWVzO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZSh0b2tlbiwgY29udGV4dCwgY2hhaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IHByb21pc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXhwcmVzc2lvbiA9PT0gJ19zZWxmJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gVHdpZy5Qcm9taXNlLnJlc29sdmUoc3RhdGUubWFjcm9zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4uc3RhY2ssIGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmaWxlUGF0aCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlLmltcG9ydEZpbGUoZmlsZVBhdGggfHwgdG9rZW4uZXhwcmVzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaW1wb3J0VGVtcGxhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydFN0YXRlID0gbmV3IFR3aWcuUGFyc2VTdGF0ZShpbXBvcnRUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1wb3J0U3RhdGUucGFyc2VBc3luYyhpbXBvcnRUZW1wbGF0ZS50b2tlbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1wb3J0U3RhdGUubWFjcm9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obWFjcm9zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWFjcm9OYW1lIGluIHRva2VuLm1hY3JvTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFjcm9zW21hY3JvTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0W3Rva2VuLm1hY3JvTmFtZXNbbWFjcm9OYW1lXV0gPSBtYWNyb3NbbWFjcm9OYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGVtYmVkIHRhZyBjb21iaW5lcyB0aGUgYmVoYXZpb3VyIG9mIGluY2x1ZGUgYW5kIGV4dGVuZHMuXG4gICAgICAgICAgICAgKiBJdCBhbGxvd3MgeW91IHRvIGluY2x1ZGUgYW5vdGhlciB0ZW1wbGF0ZSdzIGNvbnRlbnRzLCBqdXN0IGxpa2UgaW5jbHVkZSBkb2VzLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICBGb3JtYXQ6IHslIGVtYmVkIFwidGVtcGxhdGUudHdpZ1wiIFt3aXRoIHtzb21lOiAndmFsdWVzJ30gb25seV0gJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLmVtYmVkLFxuICAgICAgICAgICAgcmVnZXg6IC9eZW1iZWRcXHMrKC4rPykoPzpcXHMrKGlnbm9yZSBtaXNzaW5nKSk/KD86XFxzK3dpdGhcXHMrKFtcXFNcXHNdKz8pKT8oPzpcXHMrKG9ubHkpKT8kLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kZW1iZWRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHttYXRjaH0gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlnbm9yZU1pc3NpbmcgPSBtYXRjaFsyXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhDb250ZXh0ID0gbWF0Y2hbM107XG4gICAgICAgICAgICAgICAgY29uc3Qgb25seSA9ICgobWF0Y2hbNF0gIT09IHVuZGVmaW5lZCkgJiYgbWF0Y2hbNF0ubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcblxuICAgICAgICAgICAgICAgIHRva2VuLm9ubHkgPSBvbmx5O1xuICAgICAgICAgICAgICAgIHRva2VuLmlnbm9yZU1pc3NpbmcgPSBpZ25vcmVNaXNzaW5nO1xuXG4gICAgICAgICAgICAgICAgdG9rZW4uc3RhY2sgPSBUd2lnLmV4cHJlc3Npb24uY29tcGlsZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB9KS5zdGFjaztcblxuICAgICAgICAgICAgICAgIGlmICh3aXRoQ29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLndpdGhTdGFjayA9IFR3aWcuZXhwcmVzc2lvbi5jb21waWxlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVHdpZy5leHByZXNzaW9uLnR5cGUuZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB3aXRoQ29udGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKHRva2VuLCBjb250ZXh0LCBjaGFpbikge1xuICAgICAgICAgICAgICAgIGxldCBlbWJlZENvbnRleHQgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IFR3aWcuUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmICghdG9rZW4ub25seSkge1xuICAgICAgICAgICAgICAgICAgICBlbWJlZENvbnRleHQgPSB7Li4uY29udGV4dH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLndpdGhTdGFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBUd2lnLmV4cHJlc3Npb24ucGFyc2VBc3luYy5jYWxsKHN0YXRlLCB0b2tlbi53aXRoU3RhY2ssIGNvbnRleHQpLnRoZW4od2l0aENvbnRleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWRDb250ZXh0ID0gey4uLmVtYmVkQ29udGV4dCwgLi4ud2l0aENvbnRleHR9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVHdpZy5leHByZXNzaW9uLnBhcnNlQXN5bmMuY2FsbChzdGF0ZSwgdG9rZW4uc3RhY2ssIGVtYmVkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbGVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYmVkT3ZlcnJpZGVUZW1wbGF0ZSA9IG5ldyBUd2lnLlRlbXBsYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0b2tlbi5vdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogc3RhdGUudGVtcGxhdGUuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBzdGF0ZS50ZW1wbGF0ZS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogc3RhdGUudGVtcGxhdGUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0YXRlLnRlbXBsYXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBzdGF0ZS50ZW1wbGF0ZS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogc3RhdGUudGVtcGxhdGUub3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWRPdmVycmlkZVRlbXBsYXRlLmltcG9ydEZpbGUoZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uaWdub3JlTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXJyb3JzIHByZXNlcnZlIHJlZmVyZW5jZXMgdG8gdmFyaWFibGVzIGluIHNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVtb3ZlcyBgdGhpc2AgZnJvbSB0aGUgc2NvcGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkT3ZlcnJpZGVUZW1wbGF0ZS5wYXJlbnRUZW1wbGF0ZSA9IGZpbGVOYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW1iZWRPdmVycmlkZVRlbXBsYXRlLnJlbmRlckFzeW5jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG91dHB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qIEFkZCB0aGUgeyUgZW5kZW1iZWQgJX0gdG9rZW5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFR3aWcubG9naWMudHlwZS5lbmRlbWJlZCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmVuZGVtYmVkJC8sXG4gICAgICAgICAgICBuZXh0OiBbXSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQmxvY2sgbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICBGb3JtYXQ6IHslIHdpdGgge3NvbWU6ICd2YWx1ZXMnfSBbb25seV0gJX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLndpdGgsXG4gICAgICAgICAgICByZWdleDogL14oPzp3aXRoKD86XFxzKyhbXFxTXFxzXSs/KSk/KSg/Olxcc3wkKShvbmx5KT8kLyxcbiAgICAgICAgICAgIG5leHQ6IFtcbiAgICAgICAgICAgICAgICBUd2lnLmxvZ2ljLnR5cGUuZW5kd2l0aFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBjb21waWxlKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge21hdGNofSA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhDb250ZXh0ID0gbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgY29uc3Qgb25seSA9ICgobWF0Y2hbMl0gIT09IHVuZGVmaW5lZCkgJiYgbWF0Y2hbMl0ubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbi5tYXRjaDtcblxuICAgICAgICAgICAgICAgIHRva2VuLm9ubHkgPSBvbmx5O1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpdGhDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ud2l0aFN0YWNrID0gVHdpZy5leHByZXNzaW9uLmNvbXBpbGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUd2lnLmV4cHJlc3Npb24udHlwZS5leHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHdpdGhDb250ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2UodG9rZW4sIGNvbnRleHQsIGNoYWluKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBmaWxlbmFtZVxuICAgICAgICAgICAgICAgIGxldCBpbm5lckNvbnRleHQgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSBUd2lnLlByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0b2tlbi5vbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyQ29udGV4dCA9IHsuLi5jb250ZXh0fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodG9rZW4ud2l0aFN0YWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IFR3aWcuZXhwcmVzc2lvbi5wYXJzZUFzeW5jLmNhbGwoc3RhdGUsIHRva2VuLndpdGhTdGFjaywgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHdpdGhDb250ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgaW4gd2l0aENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpdGhDb250ZXh0LCBpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJDb250ZXh0W2ldID0gd2l0aENvbnRleHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc29sYXRlZFN0YXRlID0gbmV3IFR3aWcuUGFyc2VTdGF0ZShzdGF0ZS50ZW1wbGF0ZSwgdW5kZWZpbmVkLCBpbm5lckNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzb2xhdGVkU3RhdGUucGFyc2VBc3luYyh0b2tlbi5vdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihvdXRwdXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZW5kd2l0aCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmVuZHdpdGgkLyxcbiAgICAgICAgICAgIG5leHQ6IFtdLFxuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXByZWNhdGVkIHR5cGUgbG9naWMgdG9rZW5zLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqICBGb3JtYXQ6IHslIGRlcHJlY2F0ZWQgJ0Rlc2NyaXB0aW9uJyAlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0eXBlOiBUd2lnLmxvZ2ljLnR5cGUuZGVwcmVjYXRlZCxcbiAgICAgICAgICAgIHJlZ2V4OiAvXmRlcHJlY2F0ZWRcXHMrKC4rKSQvLFxuICAgICAgICAgICAgbmV4dDogW10sXG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgY29tcGlsZSh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gbm90aWNlOiAnICsgdG9rZW4ubWF0Y2hbMV0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgXTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdHJ5IGZvciBsb2dpYyBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBUd2lnLmxvZ2ljLmhhbmRsZXIgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIG5ldyB0b2tlbiB0eXBlLCBhdmFpbGFibGUgYXQgVHdpZy5sb2dpYy50eXBlLnt0eXBlfVxuICAgICAqL1xuICAgIFR3aWcubG9naWMuZXh0ZW5kVHlwZSA9IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8ICgnVHdpZy5sb2dpYy50eXBlJyArIHR5cGUpO1xuICAgICAgICBUd2lnLmxvZ2ljLnR5cGVbdHlwZV0gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kIHRoZSBsb2dpYyBwYXJzaW5nIGZ1bmN0aW9uYWxpdHkgd2l0aCBhIG5ldyB0b2tlbiBkZWZpbml0aW9uLlxuICAgICAqXG4gICAgICogLy8gRGVmaW5lIGEgbmV3IHRhZ1xuICAgICAqIFR3aWcubG9naWMuZXh0ZW5kKHtcbiAgICAgKiAgICAgdHlwZTogVHdpZy5sb2dpYy50eXBlLnt0eXBlfSxcbiAgICAgKiAgICAgLy8gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggZm9yIHRoaXMgdG9rZW5cbiAgICAgKiAgICAgcmVnZXg6IC4uLixcbiAgICAgKiAgICAgLy8gV2hhdCB0b2tlbiB0eXBlcyBjYW4gZm9sbG93IHRoaXMgdG9rZW4sIGxlYXZlIGJsYW5rIGlmIGFueS5cbiAgICAgKiAgICAgbmV4dDogWyAuLi4gXVxuICAgICAqICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiBjb21waWxlZCB2ZXJzaW9uIG9mIHRoZSB0b2tlblxuICAgICAqICAgICBjb21waWxlOiBmdW5jdGlvbih0b2tlbikgeyAuLi4gfVxuICAgICAqICAgICAvLyBQYXJzZSB0aGUgY29tcGlsZWQgdG9rZW4gd2l0aCB0aGUgY29udGV4dCBwcm92aWRlZCBieSB0aGUgcmVuZGVyIGNhbGxcbiAgICAgKiAgICAgLy8gICBhbmQgd2hldGhlciB0aGlzIHRva2VuIGNoYWluIGlzIGNvbXBsZXRlLlxuICAgICAqICAgICBwYXJzZTogZnVuY3Rpb24odG9rZW4sIGNvbnRleHQsIGNoYWluKSB7IC4uLiB9XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmaW5pdGlvbiBUaGUgbmV3IGxvZ2ljIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgVHdpZy5sb2dpYy5leHRlbmQgPSBmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBUd2lnLmxvZ2ljLmV4dGVuZFR5cGUoZGVmaW5pdGlvbi50eXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gZXh0ZW5kIGxvZ2ljIGRlZmluaXRpb24uIE5vIHR5cGUgcHJvdmlkZWQgZm9yICcgKyBkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFR3aWcubG9naWMuaGFuZGxlcltkZWZpbml0aW9uLnR5cGVdID0gZGVmaW5pdGlvbjtcbiAgICB9O1xuXG4gICAgLy8gRXh0ZW5kIHdpdGggYnVpbHQtaW4gZXhwcmVzc2lvbnNcbiAgICB3aGlsZSAoVHdpZy5sb2dpYy5kZWZpbml0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFR3aWcubG9naWMuZXh0ZW5kKFR3aWcubG9naWMuZGVmaW5pdGlvbnMuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcGlsZSBhIGxvZ2ljIHRva2VuIGludG8gYW4gb2JqZWN0IHJlYWR5IGZvciBwYXJzaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJhd1Rva2VuIEFuIHVuY29tcGlsZWQgbG9naWMgdG9rZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEEgY29tcGlsZWQgbG9naWMgdG9rZW4sIHJlYWR5IGZvciBwYXJzaW5nLlxuICAgICAqL1xuICAgIFR3aWcubG9naWMuY29tcGlsZSA9IGZ1bmN0aW9uIChyYXdUb2tlbikge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gcmF3VG9rZW4udmFsdWUudHJpbSgpO1xuICAgICAgICBsZXQgdG9rZW4gPSBUd2lnLmxvZ2ljLnRva2VuaXplLmNhbGwodGhpcywgZXhwcmVzc2lvbik7XG4gICAgICAgIGNvbnN0IHRva2VuVGVtcGxhdGUgPSBUd2lnLmxvZ2ljLmhhbmRsZXJbdG9rZW4udHlwZV07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRva2VuIG5lZWRzIGNvbXBpbGluZ1xuICAgICAgICBpZiAodG9rZW5UZW1wbGF0ZS5jb21waWxlKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHRva2VuVGVtcGxhdGUuY29tcGlsZS5jYWxsKHRoaXMsIHRva2VuKTtcbiAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmxvZ2ljLmNvbXBpbGU6ICcsICdDb21waWxlZCBsb2dpYyB0b2tlbiB0byAnLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRva2VuaXplIGxvZ2ljIGV4cHJlc3Npb25zLiBUaGlzIGZ1bmN0aW9uIG1hdGNoZXMgdG9rZW4gZXhwcmVzc2lvbnMgYWdhaW5zdCByZWd1bGFyXG4gICAgICogZXhwcmVzc2lvbnMgcHJvdmlkZWQgaW4gdG9rZW4gZGVmaW5pdGlvbnMgcHJvdmlkZWQgd2l0aCBUd2lnLmxvZ2ljLmV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uIHRoZSBsb2dpYyB0b2tlbiBleHByZXNzaW9uIHRvIHRva2VuaXplXG4gICAgICogICAgICAgICAgICAgICAgKGkuZS4gd2hhdCdzIGJldHdlZW4geyUgYW5kICV9KVxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbWF0Y2hlZCB0b2tlbiB3aXRoIHR5cGUgc2V0IHRvIHRoZSB0b2tlbiB0eXBlIGFuZCBtYXRjaCB0byB0aGUgcmVnZXggbWF0Y2guXG4gICAgICovXG4gICAgVHdpZy5sb2dpYy50b2tlbml6ZSA9IGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgICAgIGxldCB0b2tlblRlbXBsYXRlVHlwZSA9IG51bGw7XG4gICAgICAgIGxldCB0b2tlblR5cGUgPSBudWxsO1xuICAgICAgICBsZXQgdG9rZW5SZWdleCA9IG51bGw7XG4gICAgICAgIGxldCByZWdleEFycmF5ID0gbnVsbDtcbiAgICAgICAgbGV0IHJlZ2V4TGVuID0gbnVsbDtcbiAgICAgICAgbGV0IHJlZ2V4SSA9IG51bGw7XG4gICAgICAgIGxldCBtYXRjaCA9IG51bGw7XG5cbiAgICAgICAgLy8gSWdub3JlIHdoaXRlc3BhY2UgYXJvdW5kIGV4cHJlc3Npb25zLlxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi50cmltKCk7XG5cbiAgICAgICAgZm9yICh0b2tlblRlbXBsYXRlVHlwZSBpbiBUd2lnLmxvZ2ljLmhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChUd2lnLmxvZ2ljLmhhbmRsZXIsIHRva2VuVGVtcGxhdGVUeXBlKSkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdHlwZSBhbmQgcmVnZXggZm9yIHRoaXMgdGVtcGxhdGUgdHlwZVxuICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IFR3aWcubG9naWMuaGFuZGxlclt0b2tlblRlbXBsYXRlVHlwZV0udHlwZTtcbiAgICAgICAgICAgICAgICB0b2tlblJlZ2V4ID0gVHdpZy5sb2dpYy5oYW5kbGVyW3Rva2VuVGVtcGxhdGVUeXBlXS5yZWdleDtcblxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBtdWx0aXBsZSByZWd1bGFyIGV4cHJlc3Npb25zIHBlciB0eXBlLlxuICAgICAgICAgICAgICAgIHJlZ2V4QXJyYXkgPSB0b2tlblJlZ2V4O1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0b2tlblJlZ2V4KSkge1xuICAgICAgICAgICAgICAgICAgICByZWdleEFycmF5ID0gW3Rva2VuUmVnZXhdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlZ2V4TGVuID0gcmVnZXhBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgcmVndWxhciBleHByZXNzaW9ucyBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIHNwZWNpZmllZCBpbiB0aGUgZGVmaW5pdGlvbi5cbiAgICAgICAgICAgICAgICBmb3IgKHJlZ2V4SSA9IDA7IHJlZ2V4SSA8IHJlZ2V4TGVuOyByZWdleEkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHJlZ2V4QXJyYXlbcmVnZXhJXS5leGVjKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFR3aWcubG9nLnRyYWNlKCdUd2lnLmxvZ2ljLnRva2VuaXplOiAnLCAnTWF0Y2hlZCBhICcsIHRva2VuVHlwZSwgJyByZWd1bGFyIGV4cHJlc3Npb24gb2YgJywgbWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0b2tlblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyByZWdleCBtYXRjaGVzXG4gICAgICAgIHRocm93IG5ldyBUd2lnLkVycm9yKCdVbmFibGUgdG8gcGFyc2UgXFwnJyArIGV4cHJlc3Npb24udHJpbSgpICsgJ1xcJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhIGxvZ2ljIHRva2VuIHdpdGhpbiBhIGdpdmVuIGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBXaGF0IGFyZSBsb2dpYyBjaGFpbnM/XG4gICAgICogICAgICBMb2dpYyBjaGFpbnMgcmVwcmVzZW50IGEgc2VyaWVzIG9mIHRva2VucyB0aGF0IGFyZSBjb25uZWN0ZWQsXG4gICAgICogICAgICAgICAgZm9yIGV4YW1wbGU6XG4gICAgICogICAgICAgICAgeyUgaWYgLi4uICV9IHslIGVsc2UgJX0geyUgZW5kaWYgJX1cbiAgICAgKlxuICAgICAqICAgICAgVGhlIGNoYWluIHBhcmFtZXRlciBpcyB1c2VkIHRvIHNpZ25pZnkgaWYgYSBjaGFpbiBpcyBvcGVuIG9mIGNsb3NlZC5cbiAgICAgKiAgICAgIG9wZW46XG4gICAgICogICAgICAgICAgTW9yZSB0b2tlbnMgaW4gdGhpcyBjaGFpbiBzaG91bGQgYmUgcGFyc2VkLlxuICAgICAqICAgICAgY2xvc2VkOlxuICAgICAqICAgICAgICAgIFRoaXMgdG9rZW4gY2hhaW4gaGFzIGNvbXBsZXRlZCBwYXJzaW5nIGFuZCBhbnkgYWRkaXRpb25hbFxuICAgICAqICAgICAgICAgIHRva2VucyAoZWxzZSwgZWxzZWlmLCBldGMuLi4pIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRva2VuIFRoZSBjb21waWxlZCB0b2tlbi5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBUaGUgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjaGFpbiBJcyB0aGlzIGFuIG9wZW4gbG9naWMgY2hhaW4uIElmIGZhbHNlLCB0aGF0IG1lYW5zIGFcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluIGlzIGNsb3NlZCBhbmQgbm8gZnVydGhlciBjYXNlcyBzaG91bGQgYmUgcGFyc2VkLlxuICAgICAqL1xuICAgIFR3aWcubG9naWMucGFyc2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvbnRleHQsIGNoYWluLCBhbGxvd0FzeW5jKSB7XG4gICAgICAgIHJldHVybiBUd2lnLmFzeW5jLnBvdGVudGlhbGx5QXN5bmModGhpcywgYWxsb3dBc3luYywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgVHdpZy5sb2cuZGVidWcoJ1R3aWcubG9naWMucGFyc2U6ICcsICdQYXJzaW5nIGxvZ2ljIHRva2VuICcsIHRva2VuKTtcblxuICAgICAgICAgICAgY29uc3QgdG9rZW5UZW1wbGF0ZSA9IFR3aWcubG9naWMuaGFuZGxlclt0b2tlbi50eXBlXTtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdG9rZW5UZW1wbGF0ZS5wYXJzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUubmVzdGluZ1N0YWNrLnVuc2hpZnQodG9rZW4pO1xuICAgICAgICAgICAgcmVzdWx0ID0gdG9rZW5UZW1wbGF0ZS5wYXJzZS5jYWxsKHN0YXRlLCB0b2tlbiwgY29udGV4dCB8fCB7fSwgY2hhaW4pO1xuXG4gICAgICAgICAgICBpZiAoVHdpZy5pc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLm5lc3RpbmdTdGFjay5zaGlmdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLm5lc3RpbmdTdGFjay5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3aWc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVHdpZykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIFR3aWcuVGVtcGxhdGVzLnJlZ2lzdGVyUGFyc2VyKCdzb3VyY2UnLCBwYXJhbXMgPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRhdGEgfHwgJyc7XG4gICAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVHdpZykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIFR3aWcuVGVtcGxhdGVzLnJlZ2lzdGVyUGFyc2VyKCd0d2lnJywgcGFyYW1zID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUd2lnLlRlbXBsYXRlKHBhcmFtcyk7XG4gICAgfSk7XG59O1xuIiwiLy8gIyMgdHdpZy5wYXRoLmpzXG4vL1xuLy8gVGhpcyBmaWxlIGhhbmRsZXMgcGF0aCBwYXJzaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUd2lnKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogTmFtZXNwYWNlIGZvciBwYXRoIGhhbmRsaW5nLlxuICAgICAqL1xuICAgIFR3aWcucGF0aCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUd2lnLlRlbXBsYXRlfSB0ZW1wbGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICovXG4gICAgVHdpZy5wYXRoLmV4cGFuZE5hbWVzcGFjZSA9IGZ1bmN0aW9uIChuYW1lc3BhY2VzLCBwYXRoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzcGFjZUlkZW50aWZpZXJzID0gT2JqZWN0LmtleXMobmFtZXNwYWNlcyk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKD86QCgke25hbWVzcGFjZUlkZW50aWZpZXJzLmpvaW4oJ3wnKX0pL3woJHtuYW1lc3BhY2VJZGVudGlmaWVycy5qb2luKCd8Jyl9KTo6KWApO1xuXG4gICAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UocGF0dGVybiwgKHdob2xlTWF0Y2gsIGF0TmFtZXNwYWNlLCBjb2xvbk5hbWVzcGFjZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlSWRlbnRpZmllciA9IChhdE5hbWVzcGFjZSA9PT0gdW5kZWZpbmVkID8gY29sb25OYW1lc3BhY2UgOiBhdE5hbWVzcGFjZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtuYW1lc3BhY2VzW25hbWVzcGFjZUlkZW50aWZpZXJdfS9gO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdGhlIGNhbm9uaWNhbCB2ZXJzaW9uIG9mIGEgdXJsIGJhc2VkIG9uIHRoZSBnaXZlbiBiYXNlIHBhdGggYW5kIGZpbGUgcGF0aCBhbmQgaW5cbiAgICAgKiB0aGUgcHJldmlvdXNseSByZWdpc3RlcmVkIG5hbWVzcGFjZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSBUd2lnIFRlbXBsYXRlXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBfZmlsZSAgICBUaGUgZmlsZSBwYXRoLCBtYXkgYmUgcmVsYXRpdmUgYW5kIG1heSBjb250YWluIG5hbWVzcGFjZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgIFRoZSBjYW5vbmljYWwgdmVyc2lvbiBvZiB0aGUgcGF0aFxuICAgICAqL1xuICAgIFR3aWcucGF0aC5wYXJzZVBhdGggPSBmdW5jdGlvbiAodGVtcGxhdGUsIF9maWxlKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lc3BhY2VzfSA9IHRlbXBsYXRlLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBfZmlsZSB8fCAnJztcbiAgICAgICAgY29uc3QgaGFzTmFtZXNwYWNlcyA9IG5hbWVzcGFjZXMgJiYgdHlwZW9mIG5hbWVzcGFjZXMgPT09ICdvYmplY3QnO1xuXG4gICAgICAgIGxldCBwYXRoID0gKGhhc05hbWVzcGFjZXMgPyBUd2lnLnBhdGguZXhwYW5kTmFtZXNwYWNlKG5hbWVzcGFjZXMsIGZpbGUpIDogZmlsZSk7XG5cbiAgICAgICAgaWYgKHBhdGggPT09IGZpbGUpIHtcbiAgICAgICAgICAgIHBhdGggPSBUd2lnLnBhdGgucmVsYXRpdmVQYXRoKHRlbXBsYXRlLCBmaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgcmVsYXRpdmUgY2Fub25pY2FsIHZlcnNpb24gb2YgYSB1cmwgYmFzZWQgb24gdGhlIGdpdmVuIGJhc2UgcGF0aCBhbmQgZmlsZSBwYXRoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUd2lnLlRlbXBsYXRlfSB0ZW1wbGF0ZSBUaGUgVHdpZy5UZW1wbGF0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2ZpbGUgVGhlIGZpbGUgcGF0aCwgcmVsYXRpdmUgdG8gdGhlIGJhc2UgcGF0aC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNhbm9uaWNhbCB2ZXJzaW9uIG9mIHRoZSBwYXRoLlxuICAgICAqL1xuICAgIFR3aWcucGF0aC5yZWxhdGl2ZVBhdGggPSBmdW5jdGlvbiAodGVtcGxhdGUsIF9maWxlKSB7XG4gICAgICAgIGxldCBiYXNlO1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBzZXBDaHIgPSAnLyc7XG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBbXTtcbiAgICAgICAgbGV0IGZpbGUgPSBfZmlsZSB8fCAnJztcbiAgICAgICAgbGV0IHZhbDtcblxuICAgICAgICBpZiAodGVtcGxhdGUudXJsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlLmJhc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRlbXBsYXRlLnVybDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHNsYXNoIHRvIHRoZSBlbmQgb2YgcGF0aFxuICAgICAgICAgICAgICAgIGJhc2UgPSB0ZW1wbGF0ZS5iYXNlLnJlcGxhY2UoLyhbXi9dKSQvLCAnJDEvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGUucGF0aCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBzeXN0ZW0tc3BlY2lmaWMgcGF0aCBzZXBhcmF0b3JcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgICAgICAgICBjb25zdCBzZXAgPSBwYXRoLnNlcCB8fCBzZXBDaHI7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZSA9IG5ldyBSZWdFeHAoJ15cXFxcLnsxLDJ9JyArIHNlcC5yZXBsYWNlKCdcXFxcJywgJ1xcXFxcXFxcJykpO1xuICAgICAgICAgICAgZmlsZSA9IGZpbGUucmVwbGFjZSgvXFwvL2csIHNlcCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZS5iYXNlICE9PSB1bmRlZmluZWQgJiYgZmlsZS5tYXRjaChyZWxhdGl2ZSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmaWxlID0gZmlsZS5yZXBsYWNlKHRlbXBsYXRlLmJhc2UsICcnKTtcbiAgICAgICAgICAgICAgICBiYXNlID0gdGVtcGxhdGUuYmFzZSArIHNlcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFzZSA9IHBhdGgubm9ybWFsaXplKHRlbXBsYXRlLnBhdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiYXNlID0gYmFzZS5yZXBsYWNlKHNlcCArIHNlcCwgc2VwKTtcbiAgICAgICAgICAgIHNlcENociA9IHNlcDtcbiAgICAgICAgfSBlbHNlIGlmICgodGVtcGxhdGUubmFtZSB8fCB0ZW1wbGF0ZS5pZCkgJiYgdGVtcGxhdGUubWV0aG9kICYmIHRlbXBsYXRlLm1ldGhvZCAhPT0gJ2ZzJyAmJiB0ZW1wbGF0ZS5tZXRob2QgIT09ICdhamF4Jykge1xuICAgICAgICAgICAgLy8gQ3VzdG9tIHJlZ2lzdGVyZWQgbG9hZGVyXG4gICAgICAgICAgICBiYXNlID0gdGVtcGxhdGUuYmFzZSB8fCB0ZW1wbGF0ZS5uYW1lIHx8IHRlbXBsYXRlLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR3aWcuRXJyb3IoJ0Nhbm5vdCBleHRlbmQgYW4gaW5saW5lIHRlbXBsYXRlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFzZVBhdGggPSBiYXNlLnNwbGl0KHNlcENocik7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZpbGUgZnJvbSB1cmxcbiAgICAgICAgYmFzZVBhdGgucG9wKCk7XG4gICAgICAgIGJhc2VQYXRoID0gYmFzZVBhdGguY29uY2F0KGZpbGUuc3BsaXQoc2VwQ2hyKSk7XG5cbiAgICAgICAgd2hpbGUgKGJhc2VQYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhbCA9IGJhc2VQYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAodmFsID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsID09PSAnLi4nICYmIG5ld1BhdGgubGVuZ3RoID4gMCAmJiBuZXdQYXRoW25ld1BhdGgubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcbiAgICAgICAgICAgICAgICBuZXdQYXRoLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdQYXRoLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdQYXRoLmpvaW4oc2VwQ2hyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3aWc7XG59O1xuIiwiLy8gIyMgdHdpZy50ZXN0cy5qc1xuLy9cbi8vIFRoaXMgZmlsZSBoYW5kbGVzIGV4cHJlc3Npb24gdGVzdHMuIChpcyBlbXB0eSwgaXMgbm90IGRlZmluZWQsIGV0Yy4uLilcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFR3aWcpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgVHdpZy50ZXN0cyA9IHtcbiAgICAgICAgZW1wdHkodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBib29sZWFuIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGVyIG51bWJlcnNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBOdW1iZXJzIGFyZSBuZXZlciBcImVtcHR5XCJcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHN0cmluZ3MgYW5kIGFycmF5c1xuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBvYmplY3RzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb2RkKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgJSAyID09PSAxO1xuICAgICAgICB9LFxuICAgICAgICBldmVuKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgJSAyID09PSAwO1xuICAgICAgICB9LFxuICAgICAgICAnZGl2aXNpYmxlIGJ5Jyh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgJSBwYXJhbXNbMF0gPT09IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGRpdmlzaWJsZWJ5KHZhbHVlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYGRpdmlzaWJsZWJ5YCBpcyBkZXByZWNhdGVkIHVzZSBgZGl2aXNpYmxlIGJ5YCcpO1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcudGVzdHNbJ2RpdmlzaWJsZSBieSddKHZhbHVlLCBwYXJhbXMpO1xuICAgICAgICB9LFxuICAgICAgICBkZWZpbmVkKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgbm9uZSh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBudWxsKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub25lKHZhbHVlKTsgLy8gQWxpYXMgb2Ygbm9uZVxuICAgICAgICB9LFxuICAgICAgICAnc2FtZSBhcycodmFsdWUsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBwYXJhbXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNhbWVhcyh2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2BzYW1lYXNgIGlzIGRlcHJlY2F0ZWQgdXNlIGBzYW1lIGFzYCcpO1xuICAgICAgICAgICAgcmV0dXJuIFR3aWcudGVzdHNbJ3NhbWUgYXMnXSh2YWx1ZSwgcGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiAoVHdpZy5saWIuaXMoJ0FycmF5JywgdmFsdWUpIHx8IFR3aWcubGliLmlzKCdPYmplY3QnLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIENvbnN0YW50ID9cbiAgICAgICAgICovXG4gICAgfTtcblxuICAgIFR3aWcudGVzdCA9IGZ1bmN0aW9uICh0ZXN0LCB2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgIGlmICghVHdpZy50ZXN0c1t0ZXN0XSkge1xuICAgICAgICAgICAgdGhyb3cgVHdpZy5FcnJvcignVGVzdCAnICsgdGVzdCArICcgaXMgbm90IGRlZmluZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVHdpZy50ZXN0c1t0ZXN0XSh2YWx1ZSwgcGFyYW1zKTtcbiAgICB9O1xuXG4gICAgVHdpZy50ZXN0LmV4dGVuZCA9IGZ1bmN0aW9uICh0ZXN0LCBkZWZpbml0aW9uKSB7XG4gICAgICAgIFR3aWcudGVzdHNbdGVzdF0gPSBkZWZpbml0aW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdpZztcbn07XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAgJy4vZm9vdGVyLnR3aWcnXHJcbmltcG9ydCAnLi9zdHlsZXNoZWV0LnNjc3MnXHJcbmltcG9ydCAnLi9pbmRleC50d2lnJ1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9