(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 160:
/*!******************************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/components/u-avatar-cropper/weCropper.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
/**
 * we-cropper v1.3.9
 * (c) 2020 dlhandsome
 * @license MIT
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  var device = void 0;
  var TOUCH_STATE = ['touchstarted', 'touchmoved', 'touchended'];
  function firstLetterUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function setTouchState(instance) {
    var arg = [],
      len = arguments.length - 1;
    while (len-- > 0) {
      arg[len] = arguments[len + 1];
    }
    TOUCH_STATE.forEach(function (key, i) {
      if (arg[i] !== undefined) {
        instance[key] = arg[i];
      }
    });
  }
  function validator(instance, o) {
    Object.defineProperties(instance, o);
  }
  function getDevice() {
    if (!device) {
      device = uni.getSystemInfoSync();
    }
    return device;
  }
  var tmp = {};
  var ref = getDevice();
  var pixelRatio = ref.pixelRatio;
  var DEFAULT = {
    id: {
      default: 'cropper',
      get: function get() {
        return tmp.id;
      },
      set: function set(value) {
        if (typeof value !== 'string') {
          console.error("id：" + value + " is invalid");
        }
        tmp.id = value;
      }
    },
    width: {
      default: 750,
      get: function get() {
        return tmp.width;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          console.error("width：" + value + " is invalid");
        }
        tmp.width = value;
      }
    },
    height: {
      default: 750,
      get: function get() {
        return tmp.height;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          console.error("height：" + value + " is invalid");
        }
        tmp.height = value;
      }
    },
    pixelRatio: {
      default: pixelRatio,
      get: function get() {
        return tmp.pixelRatio;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          console.error("pixelRatio：" + value + " is invalid");
        }
        tmp.pixelRatio = value;
      }
    },
    scale: {
      default: 2.5,
      get: function get() {
        return tmp.scale;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          console.error("scale：" + value + " is invalid");
        }
        tmp.scale = value;
      }
    },
    zoom: {
      default: 5,
      get: function get() {
        return tmp.zoom;
      },
      set: function set(value) {
        if (typeof value !== 'number') {
          console.error("zoom：" + value + " is invalid");
        } else if (value < 0 || value > 10) {
          console.error("zoom should be ranged in 0 ~ 10");
        }
        tmp.zoom = value;
      }
    },
    src: {
      default: '',
      get: function get() {
        return tmp.src;
      },
      set: function set(value) {
        if (typeof value !== 'string') {
          console.error("src：" + value + " is invalid");
        }
        tmp.src = value;
      }
    },
    cut: {
      default: {},
      get: function get() {
        return tmp.cut;
      },
      set: function set(value) {
        if (_typeof(value) !== 'object') {
          console.error("cut：" + value + " is invalid");
        }
        tmp.cut = value;
      }
    },
    boundStyle: {
      default: {},
      get: function get() {
        return tmp.boundStyle;
      },
      set: function set(value) {
        if (_typeof(value) !== 'object') {
          console.error("boundStyle：" + value + " is invalid");
        }
        tmp.boundStyle = value;
      }
    },
    onReady: {
      default: null,
      get: function get() {
        return tmp.ready;
      },
      set: function set(value) {
        tmp.ready = value;
      }
    },
    onBeforeImageLoad: {
      default: null,
      get: function get() {
        return tmp.beforeImageLoad;
      },
      set: function set(value) {
        tmp.beforeImageLoad = value;
      }
    },
    onImageLoad: {
      default: null,
      get: function get() {
        return tmp.imageLoad;
      },
      set: function set(value) {
        tmp.imageLoad = value;
      }
    },
    onBeforeDraw: {
      default: null,
      get: function get() {
        return tmp.beforeDraw;
      },
      set: function set(value) {
        tmp.beforeDraw = value;
      }
    }
  };
  var ref$1 = getDevice();
  var windowWidth = ref$1.windowWidth;
  function prepare() {
    var self = this;

    // v1.4.0 版本中将不再自动绑定we-cropper实例
    self.attachPage = function () {
      var pages = getCurrentPages();
      // 获取到当前page上下文
      var pageContext = pages[pages.length - 1];
      // 把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问
      Object.defineProperty(pageContext, 'wecropper', {
        get: function get() {
          console.warn('Instance will not be automatically bound to the page after v1.4.0\n\n' + 'Please use a custom instance name instead\n\n' + 'Example: \n' + 'this.mycropper = new WeCropper(options)\n\n' + '// ...\n' + 'this.mycropper.getCropperImage()');
          return self;
        },
        configurable: true
      });
    };
    self.createCtx = function () {
      var id = self.id;
      var targetId = self.targetId;
      if (id) {
        self.ctx = self.ctx || uni.createCanvasContext(id);
        self.targetCtx = self.targetCtx || uni.createCanvasContext(targetId);
      } else {
        console.error("constructor: create canvas context failed, 'id' must be valuable");
      }
    };
    self.deviceRadio = windowWidth / 750;
  }
  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var tools = createCommonjsModule(function (module, exports) {
    /**
     * String type check
     */
    exports.isStr = function (v) {
      return typeof v === 'string';
    };
    /**
     * Number type check
     */
    exports.isNum = function (v) {
      return typeof v === 'number';
    };
    /**
     * Array type check
     */
    exports.isArr = Array.isArray;
    /**
     * undefined type check
     */
    exports.isUndef = function (v) {
      return v === undefined;
    };
    exports.isTrue = function (v) {
      return v === true;
    };
    exports.isFalse = function (v) {
      return v === false;
    };
    /**
     * Function type check
     */
    exports.isFunc = function (v) {
      return typeof v === 'function';
    };
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    exports.isObj = exports.isObject = function (obj) {
      return obj !== null && _typeof(obj) === 'object';
    };

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    var _toString = Object.prototype.toString;
    exports.isPlainObject = function (obj) {
      return _toString.call(obj) === '[object Object]';
    };

    /**
     * Check whether the object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    exports.hasOwn = function (obj, key) {
      return hasOwnProperty.call(obj, key);
    };

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
     */
    exports.noop = function (a, b, c) {};

    /**
     * Check if val is a valid array index.
     */
    exports.isValidArrayIndex = function (val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val);
    };
  });
  var tools_7 = tools.isFunc;
  var tools_10 = tools.isPlainObject;
  var EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];
  function observer() {
    var self = this;
    self.on = function (event, fn) {
      if (EVENT_TYPE.indexOf(event) > -1) {
        if (tools_7(fn)) {
          event === 'ready' ? fn(self) : self["on" + firstLetterUpper(event)] = fn;
        }
      } else {
        console.error("event: " + event + " is invalid");
      }
      return self;
    };
  }
  function wxPromise(fn) {
    return function (obj) {
      var args = [],
        len = arguments.length - 1;
      while (len-- > 0) {
        args[len] = arguments[len + 1];
      }
      if (obj === void 0) obj = {};
      return new Promise(function (resolve, reject) {
        obj.success = function (res) {
          resolve(res);
        };
        obj.fail = function (err) {
          reject(err);
        };
        fn.apply(void 0, [obj].concat(args));
      });
    };
  }
  function draw(ctx, reserve) {
    if (reserve === void 0) reserve = false;
    return new Promise(function (resolve) {
      ctx.draw(reserve, resolve);
    });
  }
  var getImageInfo = wxPromise(uni.getImageInfo);
  var canvasToTempFilePath = wxPromise(uni.canvasToTempFilePath);
  var base64 = createCommonjsModule(function (module, exports) {
    /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
    (function (root) {
      // Detect free variables `exports`.
      var freeExports =  true && exports;

      // Detect free variable `module`.
      var freeModule =  true && module && module.exports == freeExports && module;

      // Detect free variable `global`, from Node.js or Browserified code, and use
      // it as `root`.
      var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }

      /*--------------------------------------------------------------------------*/

      var InvalidCharacterError = function InvalidCharacterError(message) {
        this.message = message;
      };
      InvalidCharacterError.prototype = new Error();
      InvalidCharacterError.prototype.name = 'InvalidCharacterError';
      var error = function error(message) {
        // Note: the error messages used throughout this file match those used by
        // the native `atob`/`btoa` implementation in Chromium.
        throw new InvalidCharacterError(message);
      };
      var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      // http://whatwg.org/html/common-microsyntaxes.html#space-character
      var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

      // `decode` is designed to be fully compatible with `atob` as described in the
      // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
      // The optimized base64-decoding algorithm used is based on @atk’s excellent
      // implementation. https://gist.github.com/atk/1020396
      var decode = function decode(input) {
        input = String(input).replace(REGEX_SPACE_CHARACTERS, '');
        var length = input.length;
        if (length % 4 == 0) {
          input = input.replace(/==?$/, '');
          length = input.length;
        }
        if (length % 4 == 1 ||
        // http://whatwg.org/C#alphanumeric-ascii-characters
        /[^+a-zA-Z0-9/]/.test(input)) {
          error('Invalid character: the string to be decoded is not correctly encoded.');
        }
        var bitCounter = 0;
        var bitStorage;
        var buffer;
        var output = '';
        var position = -1;
        while (++position < length) {
          buffer = TABLE.indexOf(input.charAt(position));
          bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
          // Unless this is the first of a group of 4 characters…
          if (bitCounter++ % 4) {
            // …convert the first 8 bits to a single ASCII character.
            output += String.fromCharCode(0xFF & bitStorage >> (-2 * bitCounter & 6));
          }
        }
        return output;
      };

      // `encode` is designed to be fully compatible with `btoa` as described in the
      // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
      var encode = function encode(input) {
        input = String(input);
        if (/[^\0-\xFF]/.test(input)) {
          // Note: no need to special-case astral symbols here, as surrogates are
          // matched, and the input is supposed to only contain ASCII anyway.
          error('The string to be encoded contains characters outside of the ' + 'Latin1 range.');
        }
        var padding = input.length % 3;
        var output = '';
        var position = -1;
        var a;
        var b;
        var c;
        var buffer;
        // Make sure any padding is handled outside of the loop.
        var length = input.length - padding;
        while (++position < length) {
          // Read three bytes, i.e. 24 bits.
          a = input.charCodeAt(position) << 16;
          b = input.charCodeAt(++position) << 8;
          c = input.charCodeAt(++position);
          buffer = a + b + c;
          // Turn the 24 bits into four chunks of 6 bits each, and append the
          // matching character for each of them to the output.
          output += TABLE.charAt(buffer >> 18 & 0x3F) + TABLE.charAt(buffer >> 12 & 0x3F) + TABLE.charAt(buffer >> 6 & 0x3F) + TABLE.charAt(buffer & 0x3F);
        }
        if (padding == 2) {
          a = input.charCodeAt(position) << 8;
          b = input.charCodeAt(++position);
          buffer = a + b;
          output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 0x3F) + TABLE.charAt(buffer << 2 & 0x3F) + '=';
        } else if (padding == 1) {
          buffer = input.charCodeAt(position);
          output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 0x3F) + '==';
        }
        return output;
      };
      var base64 = {
        'encode': encode,
        'decode': decode,
        'version': '0.1.0'
      };

      // Some AMD build optimizers, like r.js, check for specific condition patterns
      // like the following:
      if (false) {} else if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          // in Node.js or RingoJS v0.8.0+
          freeModule.exports = base64;
        } else {
          // in Narwhal or RingoJS v0.7.0-
          for (var key in base64) {
            base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
          }
        }
      } else {
        // in Rhino or a web browser
        root.base64 = base64;
      }
    })(commonjsGlobal);
  });
  function makeURI(strData, type) {
    return 'data:' + type + ';base64,' + strData;
  }
  function fixType(type) {
    type = type.toLowerCase().replace(/jpg/i, 'jpeg');
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return 'image/' + r;
  }
  function encodeData(data) {
    var str = '';
    if (typeof data === 'string') {
      str = data;
    } else {
      for (var i = 0; i < data.length; i++) {
        str += String.fromCharCode(data[i]);
      }
    }
    return base64.encode(str);
  }

  /**
   * 获取图像区域隐含的像素数据
   * @param canvasId canvas标识
   * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
   * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
   * @param width 将要被提取的图像数据矩形区域的宽度
   * @param height 将要被提取的图像数据矩形区域的高度
   * @param done 完成回调
   */
  function getImageData(canvasId, x, y, width, height, done) {
    uni.canvasGetImageData({
      canvasId: canvasId,
      x: x,
      y: y,
      width: width,
      height: height,
      success: function success(res) {
        done(res, null);
      },
      fail: function fail(res) {
        done(null, res);
      }
    });
  }

  /**
   * 生成bmp格式图片
   * 按照规则生成图片响应头和响应体
   * @param oData 用来描述 canvas 区域隐含的像素数据 { data, width, height } = oData
   * @returns {*} base64字符串
   */
  function genBitmapImage(oData) {
    //
    // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
    // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
    //
    var biWidth = oData.width;
    var biHeight = oData.height;
    var biSizeImage = biWidth * biHeight * 3;
    var bfSize = biSizeImage + 54; // total header size = 54 bytes

    //
    //  typedef struct tagBITMAPFILEHEADER {
    //  	WORD bfType;
    //  	DWORD bfSize;
    //  	WORD bfReserved1;
    //  	WORD bfReserved2;
    //  	DWORD bfOffBits;
    //  } BITMAPFILEHEADER;
    //
    var BITMAPFILEHEADER = [
    // WORD bfType -- The file type signature; must be "BM"
    0x42, 0x4D,
    // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
    // WORD bfReserved1 -- Reserved; must be zero
    0, 0,
    // WORD bfReserved2 -- Reserved; must be zero
    0, 0,
    // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
    54, 0, 0, 0];

    //
    //  typedef struct tagBITMAPINFOHEADER {
    //  	DWORD biSize;
    //  	LONG  biWidth;
    //  	LONG  biHeight;
    //  	WORD  biPlanes;
    //  	WORD  biBitCount;
    //  	DWORD biCompression;
    //  	DWORD biSizeImage;
    //  	LONG  biXPelsPerMeter;
    //  	LONG  biYPelsPerMeter;
    //  	DWORD biClrUsed;
    //  	DWORD biClrImportant;
    //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
    //
    var BITMAPINFOHEADER = [
    // DWORD biSize -- The number of bytes required by the structure
    40, 0, 0, 0,
    // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
    // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1, 0,
    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // has a maximum of 2^24 colors (16777216, Truecolor)
    24, 0,
    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0, 0, 0, 0,
    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
    // LONG biXPelsPerMeter, unused
    0, 0, 0, 0,
    // LONG biYPelsPerMeter, unused
    0, 0, 0, 0,
    // DWORD biClrUsed, the number of color indexes of palette, unused
    0, 0, 0, 0,
    // DWORD biClrImportant, unused
    0, 0, 0, 0];
    var iPadding = (4 - biWidth * 3 % 4) % 4;
    var aImgData = oData.data;
    var strPixelData = '';
    var biWidth4 = biWidth << 2;
    var y = biHeight;
    var fromCharCode = String.fromCharCode;
    do {
      var iOffsetY = biWidth4 * (y - 1);
      var strPixelRow = '';
      for (var x = 0; x < biWidth; x++) {
        var iOffsetX = x << 2;
        strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX]);
      }
      for (var c = 0; c < iPadding; c++) {
        strPixelRow += String.fromCharCode(0);
      }
      strPixelData += strPixelRow;
    } while (--y);
    var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);
    return strEncoded;
  }

  /**
   * 转换为图片base64
   * @param canvasId canvas标识
   * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
   * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
   * @param width 将要被提取的图像数据矩形区域的宽度
   * @param height 将要被提取的图像数据矩形区域的高度
   * @param type 转换图片类型
   * @param done 完成回调
   */
  function convertToImage(canvasId, x, y, width, height, type, done) {
    if (done === void 0) done = function done() {};
    if (type === undefined) {
      type = 'png';
    }
    type = fixType(type);
    if (/bmp/.test(type)) {
      getImageData(canvasId, x, y, width, height, function (data, err) {
        var strData = genBitmapImage(data);
        tools_7(done) && done(makeURI(strData, 'image/' + type), err);
      });
    } else {
      console.error('暂不支持生成\'' + type + '\'类型的base64图片');
    }
  }
  var CanvasToBase64 = {
    convertToImage: convertToImage,
    // convertToPNG: function (width, height, done) {
    //   return convertToImage(width, height, 'png', done)
    // },
    // convertToJPEG: function (width, height, done) {
    //   return convertToImage(width, height, 'jpeg', done)
    // },
    // convertToGIF: function (width, height, done) {
    //   return convertToImage(width, height, 'gif', done)
    // },
    convertToBMP: function convertToBMP(ref, done) {
      if (ref === void 0) ref = {};
      var canvasId = ref.canvasId;
      var x = ref.x;
      var y = ref.y;
      var width = ref.width;
      var height = ref.height;
      if (done === void 0) done = function done() {};
      return convertToImage(canvasId, x, y, width, height, 'bmp', done);
    }
  };
  function methods() {
    var self = this;
    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度
    var boundHeight = self.height; // 裁剪框默认高度，即整个画布高度

    var id = self.id;
    var targetId = self.targetId;
    var pixelRatio = self.pixelRatio;
    var ref = self.cut;
    var x = ref.x;
    if (x === void 0) x = 0;
    var y = ref.y;
    if (y === void 0) y = 0;
    var width = ref.width;
    if (width === void 0) width = boundWidth;
    var height = ref.height;
    if (height === void 0) height = boundHeight;
    self.updateCanvas = function (done) {
      if (self.croperTarget) {
        //  画布绘制图片
        self.ctx.drawImage(self.croperTarget, self.imgLeft, self.imgTop, self.scaleWidth, self.scaleHeight);
      }
      tools_7(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self);
      self.setBoundStyle(self.boundStyle); //	设置边界样式

      self.ctx.draw(false, done);
      return self;
    };
    self.pushOrigin = self.pushOrign = function (src) {
      self.src = src;
      tools_7(self.onBeforeImageLoad) && self.onBeforeImageLoad(self.ctx, self);
      return getImageInfo({
        src: src
      }).then(function (res) {
        var innerAspectRadio = res.width / res.height;
        var customAspectRadio = width / height;
        self.croperTarget = res.path;
        if (innerAspectRadio < customAspectRadio) {
          self.rectX = x;
          self.baseWidth = width;
          self.baseHeight = width / innerAspectRadio;
          self.rectY = y - Math.abs((height - self.baseHeight) / 2);
        } else {
          self.rectY = y;
          self.baseWidth = height * innerAspectRadio;
          self.baseHeight = height;
          self.rectX = x - Math.abs((width - self.baseWidth) / 2);
        }
        self.imgLeft = self.rectX;
        self.imgTop = self.rectY;
        self.scaleWidth = self.baseWidth;
        self.scaleHeight = self.baseHeight;
        self.update();
        return new Promise(function (resolve) {
          self.updateCanvas(resolve);
        });
      }).then(function () {
        tools_7(self.onImageLoad) && self.onImageLoad(self.ctx, self);
      });
    };
    self.removeImage = function () {
      self.src = '';
      self.croperTarget = '';
      return draw(self.ctx);
    };
    self.getCropperBase64 = function (done) {
      if (done === void 0) done = function done() {};
      CanvasToBase64.convertToBMP({
        canvasId: id,
        x: x,
        y: y,
        width: width,
        height: height
      }, done);
    };
    self.getCropperImage = function (opt, fn) {
      var customOptions = opt;
      var canvasOptions = {
        canvasId: id,
        x: x,
        y: y,
        width: width,
        height: height
      };
      var task = function task() {
        return Promise.resolve();
      };
      if (tools_10(customOptions) && customOptions.original) {
        // original mode
        task = function task() {
          self.targetCtx.drawImage(self.croperTarget, self.imgLeft * pixelRatio, self.imgTop * pixelRatio, self.scaleWidth * pixelRatio, self.scaleHeight * pixelRatio);
          canvasOptions = {
            canvasId: targetId,
            x: x * pixelRatio,
            y: y * pixelRatio,
            width: width * pixelRatio,
            height: height * pixelRatio
          };
          return draw(self.targetCtx);
        };
      }
      return task().then(function () {
        if (tools_10(customOptions)) {
          canvasOptions = Object.assign({}, canvasOptions, customOptions);
        }
        if (tools_7(customOptions)) {
          fn = customOptions;
        }
        var arg = canvasOptions.componentContext ? [canvasOptions, canvasOptions.componentContext] : [canvasOptions];
        return canvasToTempFilePath.apply(null, arg);
      }).then(function (res) {
        var tempFilePath = res.tempFilePath;
        return tools_7(fn) ? fn.call(self, tempFilePath, null) : tempFilePath;
      }).catch(function (err) {
        if (tools_7(fn)) {
          fn.call(self, null, err);
        } else {
          throw err;
        }
      });
    };
  }

  /**
   * 获取最新缩放值
   * @param oldScale 上一次触摸结束后的缩放值
   * @param oldDistance 上一次触摸结束后的双指距离
   * @param zoom 缩放系数
   * @param touch0 第一指touch对象
   * @param touch1 第二指touch对象
   * @returns {*}
   */
  var getNewScale = function getNewScale(oldScale, oldDistance, zoom, touch0, touch1) {
    var xMove, yMove, newDistance;
    // 计算二指最新距离
    xMove = Math.round(touch1.x - touch0.x);
    yMove = Math.round(touch1.y - touch0.y);
    newDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));
    return oldScale + 0.001 * zoom * (newDistance - oldDistance);
  };
  function update() {
    var self = this;
    if (!self.src) {
      return;
    }
    self.__oneTouchStart = function (touch) {
      self.touchX0 = Math.round(touch.x);
      self.touchY0 = Math.round(touch.y);
    };
    self.__oneTouchMove = function (touch) {
      var xMove, yMove;
      // 计算单指移动的距离
      if (self.touchended) {
        return self.updateCanvas();
      }
      xMove = Math.round(touch.x - self.touchX0);
      yMove = Math.round(touch.y - self.touchY0);
      var imgLeft = Math.round(self.rectX + xMove);
      var imgTop = Math.round(self.rectY + yMove);
      self.outsideBound(imgLeft, imgTop);
      self.updateCanvas();
    };
    self.__twoTouchStart = function (touch0, touch1) {
      var xMove, yMove, oldDistance;
      self.touchX1 = Math.round(self.rectX + self.scaleWidth / 2);
      self.touchY1 = Math.round(self.rectY + self.scaleHeight / 2);

      // 计算两指距离
      xMove = Math.round(touch1.x - touch0.x);
      yMove = Math.round(touch1.y - touch0.y);
      oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));
      self.oldDistance = oldDistance;
    };
    self.__twoTouchMove = function (touch0, touch1) {
      var oldScale = self.oldScale;
      var oldDistance = self.oldDistance;
      var scale = self.scale;
      var zoom = self.zoom;
      self.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1);

      //  设定缩放范围
      self.newScale <= 1 && (self.newScale = 1);
      self.newScale >= scale && (self.newScale = scale);
      self.scaleWidth = Math.round(self.newScale * self.baseWidth);
      self.scaleHeight = Math.round(self.newScale * self.baseHeight);
      var imgLeft = Math.round(self.touchX1 - self.scaleWidth / 2);
      var imgTop = Math.round(self.touchY1 - self.scaleHeight / 2);
      self.outsideBound(imgLeft, imgTop);
      self.updateCanvas();
    };
    self.__xtouchEnd = function () {
      self.oldScale = self.newScale;
      self.rectX = self.imgLeft;
      self.rectY = self.imgTop;
    };
  }
  var handle = {
    //  图片手势初始监测
    touchStart: function touchStart(e) {
      var self = this;
      var ref = e.touches;
      var touch0 = ref[0];
      var touch1 = ref[1];
      if (!self.src) {
        return;
      }
      setTouchState(self, true, null, null);

      // 计算第一个触摸点的位置，并参照改点进行缩放
      self.__oneTouchStart(touch0);

      // 两指手势触发
      if (e.touches.length >= 2) {
        self.__twoTouchStart(touch0, touch1);
      }
    },
    //  图片手势动态缩放
    touchMove: function touchMove(e) {
      var self = this;
      var ref = e.touches;
      var touch0 = ref[0];
      var touch1 = ref[1];
      if (!self.src) {
        return;
      }
      setTouchState(self, null, true);

      // 单指手势时触发
      if (e.touches.length === 1) {
        self.__oneTouchMove(touch0);
      }
      // 两指手势触发
      if (e.touches.length >= 2) {
        self.__twoTouchMove(touch0, touch1);
      }
    },
    touchEnd: function touchEnd(e) {
      var self = this;
      if (!self.src) {
        return;
      }
      setTouchState(self, false, false, true);
      self.__xtouchEnd();
    }
  };
  function cut() {
    var self = this;
    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度
    var boundHeight = self.height;
    // 裁剪框默认高度，即整个画布高度
    var ref = self.cut;
    var x = ref.x;
    if (x === void 0) x = 0;
    var y = ref.y;
    if (y === void 0) y = 0;
    var width = ref.width;
    if (width === void 0) width = boundWidth;
    var height = ref.height;
    if (height === void 0) height = boundHeight;

    /**
     * 设置边界
     * @param imgLeft 图片左上角横坐标值
     * @param imgTop 图片左上角纵坐标值
     */
    self.outsideBound = function (imgLeft, imgTop) {
      self.imgLeft = imgLeft >= x ? x : self.scaleWidth + imgLeft - x <= width ? x + width - self.scaleWidth : imgLeft;
      self.imgTop = imgTop >= y ? y : self.scaleHeight + imgTop - y <= height ? y + height - self.scaleHeight : imgTop;
    };

    /**
     * 设置边界样式
     * @param color	边界颜色
     */
    self.setBoundStyle = function (ref) {
      if (ref === void 0) ref = {};
      var color = ref.color;
      if (color === void 0) color = '#04b00f';
      var mask = ref.mask;
      if (mask === void 0) mask = 'rgba(0, 0, 0, 0.3)';
      var lineWidth = ref.lineWidth;
      if (lineWidth === void 0) lineWidth = 1;
      var half = lineWidth / 2;
      var boundOption = [{
        start: {
          x: x - half,
          y: y + 10 - half
        },
        step1: {
          x: x - half,
          y: y - half
        },
        step2: {
          x: x + 10 - half,
          y: y - half
        }
      }, {
        start: {
          x: x - half,
          y: y + height - 10 + half
        },
        step1: {
          x: x - half,
          y: y + height + half
        },
        step2: {
          x: x + 10 - half,
          y: y + height + half
        }
      }, {
        start: {
          x: x + width - 10 + half,
          y: y - half
        },
        step1: {
          x: x + width + half,
          y: y - half
        },
        step2: {
          x: x + width + half,
          y: y + 10 - half
        }
      }, {
        start: {
          x: x + width + half,
          y: y + height - 10 + half
        },
        step1: {
          x: x + width + half,
          y: y + height + half
        },
        step2: {
          x: x + width - 10 + half,
          y: y + height + half
        }
      }];

      // 绘制半透明层
      self.ctx.beginPath();
      self.ctx.setFillStyle(mask);
      self.ctx.fillRect(0, 0, x, boundHeight);
      self.ctx.fillRect(x, 0, width, y);
      self.ctx.fillRect(x, y + height, width, boundHeight - y - height);
      self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight);
      self.ctx.fill();
      boundOption.forEach(function (op) {
        self.ctx.beginPath();
        self.ctx.setStrokeStyle(color);
        self.ctx.setLineWidth(lineWidth);
        self.ctx.moveTo(op.start.x, op.start.y);
        self.ctx.lineTo(op.step1.x, op.step1.y);
        self.ctx.lineTo(op.step2.x, op.step2.y);
        self.ctx.stroke();
      });
    };
  }
  var version = "1.3.9";
  var WeCropper = function WeCropper(params) {
    var self = this;
    var _default = {};
    validator(self, DEFAULT);
    Object.keys(DEFAULT).forEach(function (key) {
      _default[key] = DEFAULT[key].default;
    });
    Object.assign(self, _default, params);
    self.prepare();
    self.attachPage();
    self.createCtx();
    self.observer();
    self.cutt();
    self.methods();
    self.init();
    self.update();
    return self;
  };
  WeCropper.prototype.init = function init() {
    var self = this;
    var src = self.src;
    self.version = version;
    typeof self.onReady === 'function' && self.onReady(self.ctx, self);
    if (src) {
      self.pushOrign(src);
    } else {
      self.updateCanvas();
    }
    setTouchState(self, false, false, false);
    self.oldScale = 1;
    self.newScale = 1;
    return self;
  };
  Object.assign(WeCropper.prototype, handle);
  WeCropper.prototype.prepare = prepare;
  WeCropper.prototype.observer = observer;
  WeCropper.prototype.methods = methods;
  WeCropper.prototype.cutt = cut;
  WeCropper.prototype.update = update;
  return WeCropper;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! (webpack)/buildin/global.js */ 3)))

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__03D3411",
    appName: "小象美业",
    appVersion: "1.8.4",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.8.7",
    uniRuntimeVersion: "3.8.7",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__03D3411",
      appName: "小象美业",
      appVersion: "1.8.4",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"小象美业","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"小象美业","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"小象美业","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"小象美业","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"小象美业","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!***************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 31)();
module.exports = runtime;

/***/ }),

/***/ 31:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 33:
/*!*******************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/static/common/js/qqmap-wx-jssdk.min.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx) {var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var EARTH_RADIUS = 6378136.49;
var Utils = {
  location2query: function location2query(data) {
    if (typeof data == 'string') {
      return data;
    }
    var query = '';
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (!!query) {
        query += ';';
      }
      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }
      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }
    return query;
  },
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },
  getEndLocation: function getEndLocation(location) {
    var to = location.split(';');
    var endLocation = [];
    for (var i = 0; i < to.length; i++) {
      endLocation.push({
        lat: parseFloat(to[i].split(',')[0]),
        lng: parseFloat(to[i].split(',')[1])
      });
    }
    return endLocation;
  },
  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {
    var radLatFrom = this.rad(latFrom);
    var radLatTo = this.rad(latTo);
    var a = radLatFrom - radLatTo;
    var b = this.rad(lngFrom) - this.rad(lngTo);
    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
    distance = distance * EARTH_RADIUS;
    distance = Math.round(distance * 10000) / 10000;
    return parseFloat(distance.toFixed(0));
  },
  getWXLocation: function getWXLocation(success, fail, complete) {
    wx.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },
  getLocationParam: function getLocationParam(location) {
    if (typeof location == 'string') {
      var locationArr = location.split(',');
      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }
    return location;
  },
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};
    param.fail = param.fail || function () {};
    param.complete = param.complete || function () {};
  },
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }
    return false;
  },
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);
    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }
    return true;
  },
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },
  handleData: function handleData(param, data, feature) {
    if (feature === 'search') {
      var searchResult = data.data;
      var searchSimplify = [];
      for (var i = 0; i < searchResult.length; i++) {
        searchSimplify.push({
          id: searchResult[i].id || null,
          title: searchResult[i].title || null,
          latitude: searchResult[i].location && searchResult[i].location.lat || null,
          longitude: searchResult[i].location && searchResult[i].location.lng || null,
          address: searchResult[i].address || null,
          category: searchResult[i].category || null,
          tel: searchResult[i].tel || null,
          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
        });
      }
      param.success(data, {
        searchResult: searchResult,
        searchSimplify: searchSimplify
      });
    } else if (feature === 'suggest') {
      var suggestResult = data.data;
      var suggestSimplify = [];
      for (var i = 0; i < suggestResult.length; i++) {
        suggestSimplify.push({
          adcode: suggestResult[i].adcode || null,
          address: suggestResult[i].address || null,
          category: suggestResult[i].category || null,
          city: suggestResult[i].city || null,
          district: suggestResult[i].district || null,
          id: suggestResult[i].id || null,
          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
          province: suggestResult[i].province || null,
          title: suggestResult[i].title || null,
          type: suggestResult[i].type || null
        });
      }
      param.success(data, {
        suggestResult: suggestResult,
        suggestSimplify: suggestSimplify
      });
    } else if (feature === 'reverseGeocoder') {
      var reverseGeocoderResult = data.result;
      var reverseGeocoderSimplify = {
        address: reverseGeocoderResult.address || null,
        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
      };
      if (reverseGeocoderResult.pois) {
        var pois = reverseGeocoderResult.pois;
        var poisSimplify = [];
        for (var i = 0; i < pois.length; i++) {
          poisSimplify.push({
            id: pois[i].id || null,
            title: pois[i].title || null,
            latitude: pois[i].location && pois[i].location.lat || null,
            longitude: pois[i].location && pois[i].location.lng || null,
            address: pois[i].address || null,
            category: pois[i].category || null,
            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
            city: pois[i].ad_info && pois[i].ad_info.city || null,
            district: pois[i].ad_info && pois[i].ad_info.district || null,
            province: pois[i].ad_info && pois[i].ad_info.province || null
          });
        }
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify,
          pois: pois,
          poisSimplify: poisSimplify
        });
      } else {
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify
        });
      }
    } else if (feature === 'geocoder') {
      var geocoderResult = data.result;
      var geocoderSimplify = {
        title: geocoderResult.title || null,
        latitude: geocoderResult.location && geocoderResult.location.lat || null,
        longitude: geocoderResult.location && geocoderResult.location.lng || null,
        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
        province: geocoderResult.address_components && geocoderResult.address_components.province || null,
        city: geocoderResult.address_components && geocoderResult.address_components.city || null,
        district: geocoderResult.address_components && geocoderResult.address_components.district || null,
        street: geocoderResult.address_components && geocoderResult.address_components.street || null,
        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
        level: geocoderResult.level || null
      };
      param.success(data, {
        geocoderResult: geocoderResult,
        geocoderSimplify: geocoderSimplify
      });
    } else if (feature === 'getCityList') {
      var provinceResult = data.result[0];
      var cityResult = data.result[1];
      var districtResult = data.result[2];
      param.success(data, {
        provinceResult: provinceResult,
        cityResult: cityResult,
        districtResult: districtResult
      });
    } else if (feature === 'getDistrictByCityId') {
      var districtByCity = data.result[0];
      param.success(data, districtByCity);
    } else if (feature === 'calculateDistance') {
      var calculateDistanceResult = data.result.elements;
      var distance = [];
      for (var i = 0; i < calculateDistanceResult.length; i++) {
        distance.push(calculateDistanceResult[i].distance);
      }
      param.success(data, {
        calculateDistanceResult: calculateDistanceResult,
        distance: distance
      });
    } else {
      param.success(data);
    }
  },
  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {
    var that = this;
    options.header = {
      "content-type": "application/json"
    };
    options.method = 'GET';
    options.success = function (res) {
      var data = res.data;
      if (data.status === 0) {
        that.handleData(param, data, feature);
      } else {
        param.fail(data);
      }
    };
    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    options.complete = function (res) {
      var statusCode = +res.statusCode;
      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }
        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;
            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }
            break;
          }
        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };
    return options;
  },
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;
    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };
    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};
var QQMapWX = /*#__PURE__*/function () {
  "use strict";

  function QQMapWX(options) {
    _classCallCheck(this, QQMapWX);
    if (!options.key) {
      throw Error('key值不能为空');
    }
    this.key = options.key;
  }
  _createClass(QQMapWX, [{
    key: "search",
    value: function search(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (!Utils.checkKeyword(options)) {
        return;
      }
      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };
      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }
      if (options.filter) {
        requestParam.filter = options.filter;
      }
      var distance = options.distance || "1000";
      var auto_extend = options.auto_extend || 1;
      var region = null;
      var rectangle = null;
      if (options.region) {
        region = options.region;
      }
      if (options.rectangle) {
        rectangle = options.rectangle;
      }
      var locationsuccess = function locationsuccess(result) {
        if (region && !rectangle) {
          requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";
        } else if (rectangle && !region) {
          requestParam.boundary = "rectangle(" + rectangle + ")";
        } else {
          requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }, 'search'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "getSuggestion",
    value: function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (!Utils.checkKeyword(options)) {
        return;
      }
      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        get_subpois: options.get_subpois || 0,
        output: 'json',
        key: that.key
      };
      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }
      if (options.filter) {
        requestParam.filter = options.filter;
      }
      if (options.location) {
        var locationsuccess = function locationsuccess(result) {
          requestParam.location = result.latitude + ',' + result.longitude;
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, "suggest"));
        };
        Utils.locationProcess(options, locationsuccess);
      } else {
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SUGGESTION,
          data: requestParam
        }, "suggest"));
      }
    }
  }, {
    key: "reverseGeocoder",
    value: function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };
      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }
      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }, 'reverseGeocoder'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "geocoder",
    value: function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }
      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      };
      if (options.region) {
        requestParam.region = options.region;
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }, 'geocoder'));
    }
  }, {
    key: "getCityList",
    value: function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }, 'getCityList'));
    }
  }, {
    key: "getDistrictByCityId",
    value: function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }
      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }, 'getDistrictByCityId'));
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }
      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };
      if (options.from) {
        options.location = options.from;
      }
      if (requestParam.mode == 'straight') {
        var locationsuccess = function locationsuccess(result) {
          var locationTo = Utils.getEndLocation(requestParam.to);
          var data = {
            message: "query ok",
            result: {
              elements: []
            },
            status: 0
          };
          for (var i = 0; i < locationTo.length; i++) {
            data.result.elements.push({
              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
              duration: 0,
              from: {
                lat: result.latitude,
                lng: result.longitude
              },
              to: {
                lat: locationTo[i].lat,
                lng: locationTo[i].lng
              }
            });
          }
          var calculateResult = data.result.elements;
          var distanceResult = [];
          for (var i = 0; i < calculateResult.length; i++) {
            distanceResult.push(calculateResult[i].distance);
          }
          return options.success(data, {
            calculateResult: calculateResult,
            distanceResult: distanceResult
          });
        };
        Utils.locationProcess(options, locationsuccess);
      } else {
        var locationsuccess = function locationsuccess(result) {
          requestParam.from = result.latitude + ',' + result.longitude;
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_DISTANCE,
            data: requestParam
          }, 'calculateDistance'));
        };
        Utils.locationProcess(options, locationsuccess);
      }
    }
  }]);
  return QQMapWX;
}();
;
module.exports = QQMapWX;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
      // register for functioal component in vue file
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


/***/ }),

/***/ 37:
/*!**********************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 38));
var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 39));
var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 43));
var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 44));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 45));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 46));
var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 47));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 48));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 49));
var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 50));
var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 51));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 41));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 40));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 52));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 42));
var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 53));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 54));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 55));
var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 56));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 57));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 58);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 59));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 60));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 61));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 62));
// 引入全局mixin

// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件

function wranning(str) {
  // 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {
    console.warn(str);
  }
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数

var $u = {
  queryParams: _queryParams.default,
  route: _route.default,
  timeFormat: _timeFormat.default,
  date: _timeFormat.default,
  // 另名date
  timeFrom: _timeFrom.default,
  colorGradient: _colorGradient.default.colorGradient,
  colorToRgba: _colorGradient.default.colorToRgba,
  guid: _guid.default,
  color: _color.default,
  sys: _sys.sys,
  os: _sys.os,
  type2icon: _type2icon.default,
  randomArray: _randomArray.default,
  wranning: wranning,
  get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default,
  // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default
};

// $u挂载到uni对象上
uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!*********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/mixin/mixin.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {
      var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this2 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 39:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/request/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 40));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 42));
var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0, _classCallCheck2.default)(this, Request);
    this.config = {
      baseUrl: '',
      // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true,
      // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800,
      // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null,
      // 定时器
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null
    };

    // get请求
    this.get = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        method: 'GET',
        url: url,
        header: header,
        data: data
      });
    };

    // post请求
    this.post = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'POST',
        header: header,
        data: data
      });
    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data
      });
    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data
      });
    };
  }
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value:
    // 设置全局默认配置
    function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, {
    key: "request",
    value: function request() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this2.config.timer);
          _this2.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this2.config.originalData) {
            // 判断是否存在拦截器
            if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
              var resInterceptors = _this2.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
                var _resInterceptors = _this2.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this2.config.baseUrl + (options.url.indexOf('/') == 0 ? options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this2.config.showLoading && !_this2.config.timer) {
          _this2.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this2.config.loadingText,
              mask: _this2.config.loadingMask
            });
            _this2.config.timer = null;
          }, _this2.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    }
  }]);
  return Request;
}();
var _default = new Request();
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!****************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/deepMerge.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 41));
// JS对象深度合并
function deepMerge() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if ((0, _typeof2.default)(target) !== 'object' || (0, _typeof2.default)(source) !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if ((0, _typeof2.default)(target[prop]) !== 'object') {
        target[prop] = source[prop];
      } else {
        if ((0, _typeof2.default)(source[prop]) !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
var _default = deepMerge;
exports.default = _default;

/***/ }),

/***/ 41:
/*!****************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/deepClone.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 42:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/test.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code
};
exports.default = _default;

/***/ }),

/***/ 43:
/*!******************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/queryParams.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
      }
    } else {
      _result.push(key + '=' + value);
    }
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}
var _default = queryParams;
exports.default = _default;

/***/ }),

/***/ 44:
/*!************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/route.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: 'pop-in',
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  (0, _createClass2.default)(Router, [{
    key: "addRootPath",
    value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, {
    key: "mixinParam",
    value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, {
    key: "route",
    value: function () {
      var _route = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var options,
          params,
          mergeConfig,
          isNext,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};
                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }
                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {
                  _context.next = 14;
                  break;
                }
                _context.next = 10;
                return new Promise(function (resolve, reject) {
                  uni.$u.routeIntercept(mergeConfig, resolve);
                });
              case 10:
                isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);
                _context.next = 15;
                break;
              case 14:
                this.openPage(mergeConfig);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function route() {
        return _route.apply(this, arguments);
      }
      return route;
    }() // 执行路由跳转
  }, {
    key: "openPage",
    value: function openPage(config) {
      // 解构参数
      var url = config.url,
        type = config.type,
        delta = config.delta,
        animationType = config.animationType,
        animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration
        });
      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url
        });
      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url
        });
      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url
        });
      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta
        });
      }
    }
  }]);
  return Router;
}();
var _default = new Router().route;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 45:
/*!*****************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/timeFormat.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length,
      times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var _default = timeFormat;
exports.default = _default;

/***/ }),

/***/ 450:
/*!*****************************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/components/u-parse/libs/MpHtmlParser.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * html 解析器
 * @tutorial https://github.com/jin-yufeng/Parser
 * @version 20201029
 * @author JinYufeng
 * @listens MIT
 */
var cfg = __webpack_require__(/*! ./config.js */ 451),
  blankChar = cfg.blankChar,
  CssHandler = __webpack_require__(/*! ./CssHandler.js */ 452),
  windowWidth = uni.getSystemInfoSync().windowWidth;
var emoji;
function MpHtmlParser(data) {
  var _this = this;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.attrs = {};
  this.CssHandler = new CssHandler(options.tagStyle, windowWidth);
  this.data = data;
  this.domain = options.domain;
  this.DOM = [];
  this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0;
  options.prot = (this.domain || '').includes('://') ? this.domain.split('://')[0] : 'http';
  this.options = options;
  this.state = this.Text;
  this.STACK = [];
  // 工具函数
  this.bubble = function () {
    for (var i = _this.STACK.length, item; item = _this.STACK[--i];) {
      if (cfg.richOnlyTags[item.name]) return false;
      item.c = 1;
    }
    return true;
  };
  this.decode = function (val, amp) {
    var i = -1,
      j,
      en;
    while (1) {
      if ((i = val.indexOf('&', i + 1)) == -1) break;
      if ((j = val.indexOf(';', i + 2)) == -1) break;
      if (val[i + 1] == '#') {
        en = parseInt((val[i + 2] == 'x' ? '0' : '') + val.substring(i + 2, j));
        if (!isNaN(en)) val = val.substr(0, i) + String.fromCharCode(en) + val.substr(j + 1);
      } else {
        en = val.substring(i + 1, j);
        if (cfg.entities[en] || en == amp) val = val.substr(0, i) + (cfg.entities[en] || '&') + val.substr(j + 1);
      }
    }
    return val;
  };
  this.getUrl = function (url) {
    if (url[0] == '/') {
      if (url[1] == '/') url = _this.options.prot + ':' + url;else if (_this.domain) url = _this.domain + url;
    } else if (_this.domain && url.indexOf('data:') != 0 && !url.includes('://')) url = _this.domain + '/' + url;
    return url;
  };
  this.isClose = function () {
    return _this.data[_this.i] == '>' || _this.data[_this.i] == '/' && _this.data[_this.i + 1] == '>';
  };
  this.section = function () {
    return _this.data.substring(_this.start, _this.i);
  };
  this.parent = function () {
    return _this.STACK[_this.STACK.length - 1];
  };
  this.siblings = function () {
    return _this.STACK.length ? _this.parent().children : _this.DOM;
  };
}
MpHtmlParser.prototype.parse = function () {
  if (emoji) this.data = emoji.parseEmoji(this.data);
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);
  }
  if (this.state == this.Text) this.setText();
  while (this.STACK.length) {
    this.popNode(this.STACK.pop());
  }
  return this.DOM;
};
// 设置属性
MpHtmlParser.prototype.setAttr = function () {
  var name = this.attrName.toLowerCase(),
    val = this.attrVal;
  if (cfg.boolAttrs[name]) this.attrs[name] = 'T';else if (val) {
    if (name == 'src' || name == 'data-src' && !this.attrs.src) this.attrs.src = this.getUrl(this.decode(val, 'amp'));else if (name == 'href' || name == 'style') this.attrs[name] = this.decode(val, 'amp');else if (name.substr(0, 5) != 'data-') this.attrs[name] = val;
  }
  this.attrVal = '';
  while (blankChar[this.data[this.i]]) {
    this.i++;
  }
  if (this.isClose()) this.setNode();else {
    this.start = this.i;
    this.state = this.AttrName;
  }
};
// 设置文本节点
MpHtmlParser.prototype.setText = function () {
  var back,
    text = this.section();
  if (!text) return;
  text = cfg.onText && cfg.onText(text, function () {
    return back = true;
  }) || text;
  if (back) {
    this.data = this.data.substr(0, this.start) + text + this.data.substr(this.i);
    var j = this.start + text.length;
    for (this.i = this.start; this.i < j; this.i++) {
      this.state(this.data[this.i]);
    }
    return;
  }
  if (!this.pre) {
    // 合并空白符
    var flag,
      tmp = [];
    for (var i = text.length, c; c = text[--i];) {
      if (!blankChar[c]) {
        tmp.unshift(c);
        if (!flag) flag = 1;
      } else {
        if (tmp[0] != ' ') tmp.unshift(' ');
        if (c == '\n' && flag == void 0) flag = 0;
      }
    }
    if (flag == 0) return;
    text = tmp.join('');
  }
  this.siblings().push({
    type: 'text',
    text: this.decode(text)
  });
};
// 设置元素节点
MpHtmlParser.prototype.setNode = function () {
  var node = {
      name: this.tagName.toLowerCase(),
      attrs: this.attrs
    },
    close = cfg.selfClosingTags[node.name];
  if (this.options.nodes.length) node.type = 'node';
  this.attrs = {};
  if (!cfg.ignoreTags[node.name]) {
    // 处理属性
    var attrs = node.attrs,
      style = this.CssHandler.match(node.name, attrs, node) + (attrs.style || ''),
      styleObj = {};
    if (attrs.id) {
      if (this.options.compress & 1) attrs.id = void 0;else if (this.options.useAnchor) this.bubble();
    }
    if (this.options.compress & 2 && attrs.class) attrs.class = void 0;
    switch (node.name) {
      case 'a':
      case 'ad':
        this.bubble();
        break;
      case 'font':
        if (attrs.color) {
          styleObj['color'] = attrs.color;
          attrs.color = void 0;
        }
        if (attrs.face) {
          styleObj['font-family'] = attrs.face;
          attrs.face = void 0;
        }
        if (attrs.size) {
          var size = parseInt(attrs.size);
          if (size < 1) size = 1;else if (size > 7) size = 7;
          var map = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
          styleObj['font-size'] = map[size - 1];
          attrs.size = void 0;
        }
        break;
      case 'embed':
        var src = node.attrs.src || '',
          type = node.attrs.type || '';
        if (type.includes('video') || src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8')) node.name = 'video';else if (type.includes('audio') || src.includes('.m4a') || src.includes('.wav') || src.includes('.mp3') || src.includes('.aac')) node.name = 'audio';else break;
        if (node.attrs.autostart) node.attrs.autoplay = 'T';
        node.attrs.controls = 'T';
      case 'video':
      case 'audio':
        if (!attrs.id) attrs.id = node.name + ++this["".concat(node.name, "Num")];else this["".concat(node.name, "Num")]++;
        if (node.name == 'video') {
          if (this.videoNum > 3) node.lazyLoad = 1;
          if (attrs.width) {
            styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
            attrs.width = void 0;
          }
          if (attrs.height) {
            styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
            attrs.height = void 0;
          }
        }
        if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T';
        attrs.source = [];
        if (attrs.src) {
          attrs.source.push(attrs.src);
          attrs.src = void 0;
        }
        this.bubble();
        break;
      case 'td':
      case 'th':
        if (attrs.colspan || attrs.rowspan) for (var k = this.STACK.length, item; item = this.STACK[--k];) {
          if (item.name == 'table') {
            item.flag = 1;
            break;
          }
        }
    }
    if (attrs.align) {
      if (node.name == 'table') {
        if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';else styleObj['float'] = attrs.align;
      } else styleObj['text-align'] = attrs.align;
      attrs.align = void 0;
    }
    // 压缩 style
    var styles = style.split(';');
    style = '';
    for (var i = 0, len = styles.length; i < len; i++) {
      var info = styles[i].split(':');
      if (info.length < 2) continue;
      var _key = info[0].trim().toLowerCase(),
        _value = info.slice(1).join(':').trim();
      if (_value[0] == '-' || _value.includes('safe')) style += ";".concat(_key, ":").concat(_value);else if (!styleObj[_key] || _value.includes('import') || !styleObj[_key].includes('import')) styleObj[_key] = _value;
    }
    if (node.name == 'img') {
      if (attrs.src && !attrs.ignore) {
        if (this.bubble()) attrs.i = (this.imgNum++).toString();else attrs.ignore = 'T';
      }
      if (attrs.ignore) {
        style += ';-webkit-touch-callout:none';
        styleObj['max-width'] = '100%';
      }
      var width;
      if (styleObj.width) width = styleObj.width;else if (attrs.width) width = attrs.width.includes('%') ? attrs.width : parseFloat(attrs.width) + 'px';
      if (width) {
        styleObj.width = width;
        attrs.width = '100%';
        if (parseInt(width) > windowWidth) {
          styleObj.height = '';
          if (attrs.height) attrs.height = void 0;
        }
      }
      if (styleObj.height) {
        attrs.height = styleObj.height;
        styleObj.height = '';
      } else if (attrs.height && !attrs.height.includes('%')) attrs.height = parseFloat(attrs.height) + 'px';
    }
    for (var key in styleObj) {
      var value = styleObj[key];
      if (!value) continue;
      if (key.includes('flex') || key == 'order' || key == 'self-align') node.c = 1;
      // 填充链接
      if (value.includes('url')) {
        var j = value.indexOf('(');
        if (j++ != -1) {
          while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) {
            j++;
          }
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      }
      // 转换 rpx
      else if (value.includes('rpx')) value = value.replace(/[0-9.]+\s*rpx/g, function ($) {
        return parseFloat($) * windowWidth / 750 + 'px';
      });else if (key == 'white-space' && value.includes('pre') && !close) this.pre = node.pre = true;
      style += ";".concat(key, ":").concat(value);
    }
    style = style.substr(1);
    if (style) attrs.style = style;
    if (!close) {
      node.children = [];
      if (node.name == 'pre' && cfg.highlight) {
        this.remove(node);
        this.pre = node.pre = true;
      }
      this.siblings().push(node);
      this.STACK.push(node);
    } else if (!cfg.filter || cfg.filter(node, this) != false) this.siblings().push(node);
  } else {
    if (!close) this.remove(node);else if (node.name == 'source') {
      var parent = this.parent();
      if (parent && (parent.name == 'video' || parent.name == 'audio') && node.attrs.src) parent.attrs.source.push(node.attrs.src);
    } else if (node.name == 'base' && !this.domain) this.domain = node.attrs.href;
  }
  if (this.data[this.i] == '/') this.i++;
  this.start = this.i + 1;
  this.state = this.Text;
};
// 移除标签
MpHtmlParser.prototype.remove = function (node) {
  var _this2 = this;
  var name = node.name,
    j = this.i;
  // 处理 svg
  var handleSvg = function handleSvg() {
    var src = _this2.data.substring(j, _this2.i + 1);
    node.attrs.xmlns = 'http://www.w3.org/2000/svg';
    for (var key in node.attrs) {
      if (key == 'viewbox') src = " viewBox=\"".concat(node.attrs.viewbox, "\"") + src;else if (key != 'style') src = " ".concat(key, "=\"").concat(node.attrs[key], "\"") + src;
    }
    src = '<svg' + src;
    var parent = _this2.parent();
    if (node.attrs.width == '100%' && parent && (parent.attrs.style || '').includes('inline')) parent.attrs.style = 'width:300px;max-width:100%;' + parent.attrs.style;
    _this2.siblings().push({
      name: 'img',
      attrs: {
        src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
        style: node.attrs.style,
        ignore: 'T'
      }
    });
  };
  if (node.name == 'svg' && this.data[j] == '/') return handleSvg(this.i++);
  while (1) {
    if ((this.i = this.data.indexOf('</', this.i + 1)) == -1) {
      if (name == 'pre' || name == 'svg') this.i = j;else this.i = this.data.length;
      return;
    }
    this.start = this.i += 2;
    while (!blankChar[this.data[this.i]] && !this.isClose()) {
      this.i++;
    }
    if (this.section().toLowerCase() == name) {
      // 代码块高亮
      if (name == 'pre') {
        this.data = this.data.substr(0, j + 1) + cfg.highlight(this.data.substring(j + 1, this.i - 5), node.attrs) + this.data.substr(this.i - 5);
        return this.i = j;
      } else if (name == 'style') this.CssHandler.getStyle(this.data.substring(j + 1, this.i - 7));else if (name == 'title') this.DOM.title = this.data.substring(j + 1, this.i - 7);
      if ((this.i = this.data.indexOf('>', this.i)) == -1) this.i = this.data.length;
      if (name == 'svg') handleSvg();
      return;
    }
  }
};
// 节点出栈处理
MpHtmlParser.prototype.popNode = function (node) {
  // 空白符处理
  if (node.pre) {
    node.pre = this.pre = void 0;
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].pre) this.pre = true;
    }
  }
  var siblings = this.siblings(),
    len = siblings.length,
    childs = node.children;
  if (node.name == 'head' || cfg.filter && cfg.filter(node, this) == false) return siblings.pop();
  var attrs = node.attrs;
  // 替换一些标签名
  if (cfg.blockTags[node.name]) node.name = 'div';else if (!cfg.trustTags[node.name]) node.name = 'span';
  // 处理列表
  if (node.c && (node.name == 'ul' || node.name == 'ol')) {
    if ((node.attrs.style || '').includes('list-style:none')) {
      for (var _i = 0, child; child = childs[_i++];) {
        if (child.name == 'li') child.name = 'div';
      }
    } else if (node.name == 'ul') {
      var floor = 1;
      for (var _i2 = this.STACK.length; _i2--;) {
        if (this.STACK[_i2].name == 'ul') floor++;
      }
      if (floor != 1) for (var _i3 = childs.length; _i3--;) {
        childs[_i3].floor = floor;
      }
    } else {
      for (var _i4 = 0, num = 1, _child; _child = childs[_i4++];) {
        if (_child.name == 'li') {
          _child.type = 'ol';
          _child.num = function (num, type) {
            if (type == 'a') return String.fromCharCode(97 + (num - 1) % 26);
            if (type == 'A') return String.fromCharCode(65 + (num - 1) % 26);
            if (type == 'i' || type == 'I') {
              num = (num - 1) % 99 + 1;
              var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                res = (ten[Math.floor(num / 10) - 1] || '') + (one[num % 10 - 1] || '');
              if (type == 'i') return res.toLowerCase();
              return res;
            }
            return num;
          }(num++, attrs.type) + '.';
        }
      }
    }
  }
  // 处理表格
  if (node.name == 'table') {
    var padding = parseFloat(attrs.cellpadding),
      spacing = parseFloat(attrs.cellspacing),
      border = parseFloat(attrs.border);
    if (node.c) {
      if (isNaN(padding)) padding = 2;
      if (isNaN(spacing)) spacing = 2;
    }
    if (border) attrs.style = "border:".concat(border, "px solid gray;").concat(attrs.style || '');
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格转为 grid 布局实现
      attrs.style = "".concat(attrs.style || '', ";").concat(spacing ? ";grid-gap:".concat(spacing, "px") : ';border-left:0;border-top:0');
      var row = 1,
        col = 1,
        colNum,
        trs = [],
        children = [],
        map = {};
      (function f(ns) {
        for (var i = 0; i < ns.length; i++) {
          if (ns[i].name == 'tr') trs.push(ns[i]);else f(ns[i].children || []);
        }
      })(node.children);
      for (var _i5 = 0; _i5 < trs.length; _i5++) {
        for (var j = 0, td; td = trs[_i5].children[j]; j++) {
          if (td.name == 'td' || td.name == 'th') {
            while (map[row + '.' + col]) {
              col++;
            }
            var cell = {
              name: 'div',
              c: 1,
              attrs: {
                style: (td.attrs.style || '') + (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '')
              },
              children: td.children
            };
            if (td.attrs.colspan) {
              cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + 1);
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + 1);
              for (var k = 1; k < td.attrs.rowspan; k++) {
                map[row + k + '.' + col] = 1;
              }
            }
            children.push(cell);
            col++;
          }
        }
        if (!colNum) {
          colNum = col - 1;
          attrs.style += ";grid-template-columns:repeat(".concat(colNum, ",auto)");
        }
        col = 1;
        row++;
      }
      node.children = children;
    } else {
      attrs.style = "border-spacing:".concat(spacing, "px;").concat(attrs.style || '');
      if (border || padding) (function f(ns) {
        for (var i = 0, n; n = ns[i]; i++) {
          if (n.name == 'th' || n.name == 'td') {
            if (border) n.attrs.style = "border:".concat(border, "px solid gray;").concat(n.attrs.style || '');
            if (padding) n.attrs.style = "padding:".concat(padding, "px;").concat(n.attrs.style || '');
          } else f(n.children || []);
        }
      })(childs);
    }
    if (this.options.autoscroll) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:scroll'
      };
      node.children = [table];
    }
  }
  this.CssHandler.pop && this.CssHandler.pop(node);
  // 自动压缩
  if (node.name == 'div' && !Object.keys(attrs).length && childs.length == 1 && childs[0].name == 'div') siblings[len - 1] = childs[0];
};
// 状态机
MpHtmlParser.prototype.Text = function (c) {
  if (c == '<') {
    var next = this.data[this.i + 1],
      isLetter = function isLetter(c) {
        return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
      };
    if (isLetter(next)) {
      this.setText();
      this.start = this.i + 1;
      this.state = this.TagName;
    } else if (next == '/') {
      this.setText();
      if (isLetter(this.data[++this.i + 1])) {
        this.start = this.i + 1;
        this.state = this.EndTag;
      } else this.Comment();
    } else if (next == '!' || next == '?') {
      this.setText();
      this.Comment();
    }
  }
};
MpHtmlParser.prototype.Comment = function () {
  var key;
  if (this.data.substring(this.i + 2, this.i + 4) == '--') key = '-->';else if (this.data.substring(this.i + 2, this.i + 9) == '[CDATA[') key = ']]>';else key = '>';
  if ((this.i = this.data.indexOf(key, this.i + 2)) == -1) this.i = this.data.length;else this.i += key.length - 1;
  this.start = this.i + 1;
  this.state = this.Text;
};
MpHtmlParser.prototype.TagName = function (c) {
  if (blankChar[c]) {
    this.tagName = this.section();
    while (blankChar[this.data[this.i]]) {
      this.i++;
    }
    if (this.isClose()) this.setNode();else {
      this.start = this.i;
      this.state = this.AttrName;
    }
  } else if (this.isClose()) {
    this.tagName = this.section();
    this.setNode();
  }
};
MpHtmlParser.prototype.AttrName = function (c) {
  if (c == '=' || blankChar[c] || this.isClose()) {
    this.attrName = this.section();
    if (blankChar[c]) while (blankChar[this.data[++this.i]]) {
      ;
    }
    if (this.data[this.i] == '=') {
      while (blankChar[this.data[++this.i]]) {
        ;
      }
      this.start = this.i--;
      this.state = this.AttrValue;
    } else this.setAttr();
  }
};
MpHtmlParser.prototype.AttrValue = function (c) {
  if (c == '"' || c == "'") {
    this.start++;
    if ((this.i = this.data.indexOf(c, this.i + 1)) == -1) return this.i = this.data.length;
    this.attrVal = this.section();
    this.i++;
  } else {
    for (; !blankChar[this.data[this.i]] && !this.isClose(); this.i++) {
      ;
    }
    this.attrVal = this.section();
  }
  this.setAttr();
};
MpHtmlParser.prototype.EndTag = function (c) {
  if (blankChar[c] || c == '>' || c == '/') {
    var name = this.section().toLowerCase();
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].name == name) break;
    }
    if (i != -1) {
      var node;
      while ((node = this.STACK.pop()).name != name) {
        this.popNode(node);
      }
      this.popNode(node);
    } else if (name == 'p' || name == 'br') this.siblings().push({
      name: name,
      attrs: {}
    });
    this.i = this.data.indexOf('>', this.i);
    this.start = this.i + 1;
    if (this.i == -1) this.i = this.data.length;else this.state = this.Text;
  }
};
module.exports = MpHtmlParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 451:
/*!***********************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/components/u-parse/libs/config.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx) {/* 配置文件 */
var cfg = {
  // 出错占位图
  errorImg: null,
  // 过滤器函数
  filter: null,
  // 代码高亮函数
  highlight: null,
  // 文本处理函数
  onText: null,
  // 实体编码列表
  entities: {
    quot: '"',
    apos: "'",
    semi: ';',
    nbsp: '\xA0',
    ensp: "\u2002",
    emsp: "\u2003",
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…'
  },
  blankChar: makeMap(' ,\xA0,\t,\r,\n,\f'),
  boolAttrs: makeMap('allowfullscreen,autoplay,autostart,controls,ignore,loop,muted'),
  // 块级标签，将被转为 div
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 将被移除的标签
  ignoreTags: makeMap('area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr'),
  // 只能被 rich-text 显示的标签
  richOnlyTags: makeMap('a,colgroup,fieldset,legend'),
  // 自闭合的标签
  selfClosingTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // 信任的标签
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 默认的标签样式
  userAgentStyles: {
    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    blockquote: 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre;overflow:scroll',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    u: 'text-decoration:underline'
  }
};
function makeMap(str) {
  var map = Object.create(null),
    list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;
  }
  return map;
}
if (wx.canIUse('editor')) {
  cfg.blockTags.pre = void 0;
  cfg.ignoreTags.rp = true;
  Object.assign(cfg.richOnlyTags, makeMap('bdi,bdo,caption,rt,ruby'));
  Object.assign(cfg.trustTags, makeMap('bdi,bdo,caption,pre,rt,ruby'));
}
module.exports = cfg;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 452:
/*!***************************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 451),
  isLetter = function isLetter(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
  };
function CssHandler(tagStyle) {
  var styles = Object.assign(Object.create(null), cfg.userAgentStyles);
  for (var item in tagStyle) {
    styles[item] = (styles[item] ? styles[item] + ';' : '') + tagStyle[item];
  }
  this.styles = styles;
}
CssHandler.prototype.getStyle = function (data) {
  this.styles = new parser(data, this.styles).parse();
};
CssHandler.prototype.match = function (name, attrs) {
  var tmp,
    matched = (tmp = this.styles[name]) ? tmp + ';' : '';
  if (attrs.class) {
    var items = attrs.class.split(' ');
    for (var i = 0, item; item = items[i]; i++) {
      if (tmp = this.styles['.' + item]) matched += tmp + ';';
    }
  }
  if (tmp = this.styles['#' + attrs.id]) matched += tmp + ';';
  return matched;
};
module.exports = CssHandler;
function parser(data, init) {
  this.data = data;
  this.floor = 0;
  this.i = 0;
  this.list = [];
  this.res = init;
  this.state = this.Space;
}
parser.prototype.parse = function () {
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);
  }
  return this.res;
};
parser.prototype.section = function () {
  return this.data.substring(this.start, this.i);
};
// 状态机
parser.prototype.Space = function (c) {
  if (c == '.' || c == '#' || isLetter(c)) {
    this.start = this.i;
    this.state = this.Name;
  } else if (c == '/' && this.data[this.i + 1] == '*') this.Comment();else if (!cfg.blankChar[c] && c != ';') this.state = this.Ignore;
};
parser.prototype.Comment = function () {
  this.i = this.data.indexOf('*/', this.i) + 1;
  if (!this.i) this.i = this.data.length;
  this.state = this.Space;
};
parser.prototype.Ignore = function (c) {
  if (c == '{') this.floor++;else if (c == '}' && ! --this.floor) {
    this.list = [];
    this.state = this.Space;
  }
};
parser.prototype.Name = function (c) {
  if (cfg.blankChar[c]) {
    this.list.push(this.section());
    this.state = this.NameSpace;
  } else if (c == '{') {
    this.list.push(this.section());
    this.Content();
  } else if (c == ',') {
    this.list.push(this.section());
    this.Comma();
  } else if (!isLetter(c) && (c < '0' || c > '9') && c != '-' && c != '_') this.state = this.Ignore;
};
parser.prototype.NameSpace = function (c) {
  if (c == '{') this.Content();else if (c == ',') this.Comma();else if (!cfg.blankChar[c]) this.state = this.Ignore;
};
parser.prototype.Comma = function () {
  while (cfg.blankChar[this.data[++this.i]]) {
    ;
  }
  if (this.data[this.i] == '{') this.Content();else {
    this.start = this.i--;
    this.state = this.Name;
  }
};
parser.prototype.Content = function () {
  this.start = ++this.i;
  if ((this.i = this.data.indexOf('}', this.i)) == -1) this.i = this.data.length;
  var content = this.section();
  for (var i = 0, item; item = this.list[i++];) {
    if (this.res[item]) this.res[item] += ';' + content;else this.res[item] = content;
  }
  this.list = [];
  this.state = this.Space;
};

/***/ }),

/***/ 46:
/*!***************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/timeFrom.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 45));
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));
  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }
  }
  return tips;
}
var _default = timeFrom;
exports.default = _default;

/***/ }),

/***/ 47:
/*!********************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/colorGradient.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];
  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB * i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {
      return Number(val);
    });
  } else {
    return sColor;
  }
}
;

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else {
    return sColor;
  }
}
var _default = {
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba
};
exports.default = _default;

/***/ }),

/***/ 474:
/*!**********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/util/emitter.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 (向上查找) (一个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 (向下查找) (广播多个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 475:
/*!******************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/util/async-validator.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"小象美业","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}) && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }
    return str;
  }
  return f;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((0, _typeof2.default)(value) === 'object' && (0, _typeof2.default)(target[s]) === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && (0, _typeof2.default)(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject;
      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : (0, _typeof2.default)(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((0, _typeof2.default)(rules) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc() {};
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof2.default)(rule.fields) === 'object' || (0, _typeof2.default)(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
var _default = Schema;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ 476)))

/***/ }),

/***/ 476:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 477);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 477:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

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

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 476)))

/***/ }),

/***/ 48:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/guid.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = guid;
exports.default = _default;

/***/ }),

/***/ 49:
/*!************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/color.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",
  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",
  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var _default = color;
exports.default = _default;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!****************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/type2icon.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
  var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';
  }
  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}
var _default = type2icon;
exports.default = _default;

/***/ }),

/***/ 51:
/*!******************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/randomArray.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 打乱数组
function randomArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}
var _default = randomArray;
exports.default = _default;

/***/ }),

/***/ 52:
/*!**************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/addUnit.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUnit;
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 42));
// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 53:
/*!*************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/random.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var _default = random;
exports.default = _default;

/***/ }),

/***/ 54:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/trim.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var _default = trim;
exports.default = _default;

/***/ }),

/***/ 548:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/util/province.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var provinceData = [{
  "label": "北京市",
  "value": "11"
}, {
  "label": "天津市",
  "value": "12"
}, {
  "label": "河北省",
  "value": "13"
}, {
  "label": "山西省",
  "value": "14"
}, {
  "label": "内蒙古自治区",
  "value": "15"
}, {
  "label": "辽宁省",
  "value": "21"
}, {
  "label": "吉林省",
  "value": "22"
}, {
  "label": "黑龙江省",
  "value": "23"
}, {
  "label": "上海市",
  "value": "31"
}, {
  "label": "江苏省",
  "value": "32"
}, {
  "label": "浙江省",
  "value": "33"
}, {
  "label": "安徽省",
  "value": "34"
}, {
  "label": "福建省",
  "value": "35"
}, {
  "label": "江西省",
  "value": "36"
}, {
  "label": "山东省",
  "value": "37"
}, {
  "label": "河南省",
  "value": "41"
}, {
  "label": "湖北省",
  "value": "42"
}, {
  "label": "湖南省",
  "value": "43"
}, {
  "label": "广东省",
  "value": "44"
}, {
  "label": "广西壮族自治区",
  "value": "45"
}, {
  "label": "海南省",
  "value": "46"
}, {
  "label": "重庆市",
  "value": "50"
}, {
  "label": "四川省",
  "value": "51"
}, {
  "label": "贵州省",
  "value": "52"
}, {
  "label": "云南省",
  "value": "53"
}, {
  "label": "西藏自治区",
  "value": "54"
}, {
  "label": "陕西省",
  "value": "61"
}, {
  "label": "甘肃省",
  "value": "62"
}, {
  "label": "青海省",
  "value": "63"
}, {
  "label": "宁夏回族自治区",
  "value": "64"
}, {
  "label": "新疆维吾尔自治区",
  "value": "65"
}, {
  "label": "台湾",
  "value": "66"
}, {
  "label": "香港",
  "value": "67"
}, {
  "label": "澳门",
  "value": "68"
}];
var _default = provinceData;
exports.default = _default;

/***/ }),

/***/ 549:
/*!*******************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/util/city.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cityData = [[{
  "label": "市辖区",
  "value": "1101"
}], [{
  "label": "市辖区",
  "value": "1201"
}], [{
  "label": "石家庄市",
  "value": "1301"
}, {
  "label": "唐山市",
  "value": "1302"
}, {
  "label": "秦皇岛市",
  "value": "1303"
}, {
  "label": "邯郸市",
  "value": "1304"
}, {
  "label": "邢台市",
  "value": "1305"
}, {
  "label": "保定市",
  "value": "1306"
}, {
  "label": "张家口市",
  "value": "1307"
}, {
  "label": "承德市",
  "value": "1308"
}, {
  "label": "沧州市",
  "value": "1309"
}, {
  "label": "廊坊市",
  "value": "1310"
}, {
  "label": "衡水市",
  "value": "1311"
}], [{
  "label": "太原市",
  "value": "1401"
}, {
  "label": "大同市",
  "value": "1402"
}, {
  "label": "阳泉市",
  "value": "1403"
}, {
  "label": "长治市",
  "value": "1404"
}, {
  "label": "晋城市",
  "value": "1405"
}, {
  "label": "朔州市",
  "value": "1406"
}, {
  "label": "晋中市",
  "value": "1407"
}, {
  "label": "运城市",
  "value": "1408"
}, {
  "label": "忻州市",
  "value": "1409"
}, {
  "label": "临汾市",
  "value": "1410"
}, {
  "label": "吕梁市",
  "value": "1411"
}], [{
  "label": "呼和浩特市",
  "value": "1501"
}, {
  "label": "包头市",
  "value": "1502"
}, {
  "label": "乌海市",
  "value": "1503"
}, {
  "label": "赤峰市",
  "value": "1504"
}, {
  "label": "通辽市",
  "value": "1505"
}, {
  "label": "鄂尔多斯市",
  "value": "1506"
}, {
  "label": "呼伦贝尔市",
  "value": "1507"
}, {
  "label": "巴彦淖尔市",
  "value": "1508"
}, {
  "label": "乌兰察布市",
  "value": "1509"
}, {
  "label": "兴安盟",
  "value": "1522"
}, {
  "label": "锡林郭勒盟",
  "value": "1525"
}, {
  "label": "阿拉善盟",
  "value": "1529"
}], [{
  "label": "沈阳市",
  "value": "2101"
}, {
  "label": "大连市",
  "value": "2102"
}, {
  "label": "鞍山市",
  "value": "2103"
}, {
  "label": "抚顺市",
  "value": "2104"
}, {
  "label": "本溪市",
  "value": "2105"
}, {
  "label": "丹东市",
  "value": "2106"
}, {
  "label": "锦州市",
  "value": "2107"
}, {
  "label": "营口市",
  "value": "2108"
}, {
  "label": "阜新市",
  "value": "2109"
}, {
  "label": "辽阳市",
  "value": "2110"
}, {
  "label": "盘锦市",
  "value": "2111"
}, {
  "label": "铁岭市",
  "value": "2112"
}, {
  "label": "朝阳市",
  "value": "2113"
}, {
  "label": "葫芦岛市",
  "value": "2114"
}], [{
  "label": "长春市",
  "value": "2201"
}, {
  "label": "吉林市",
  "value": "2202"
}, {
  "label": "四平市",
  "value": "2203"
}, {
  "label": "辽源市",
  "value": "2204"
}, {
  "label": "通化市",
  "value": "2205"
}, {
  "label": "白山市",
  "value": "2206"
}, {
  "label": "松原市",
  "value": "2207"
}, {
  "label": "白城市",
  "value": "2208"
}, {
  "label": "延边朝鲜族自治州",
  "value": "2224"
}], [{
  "label": "哈尔滨市",
  "value": "2301"
}, {
  "label": "齐齐哈尔市",
  "value": "2302"
}, {
  "label": "鸡西市",
  "value": "2303"
}, {
  "label": "鹤岗市",
  "value": "2304"
}, {
  "label": "双鸭山市",
  "value": "2305"
}, {
  "label": "大庆市",
  "value": "2306"
}, {
  "label": "伊春市",
  "value": "2307"
}, {
  "label": "佳木斯市",
  "value": "2308"
}, {
  "label": "七台河市",
  "value": "2309"
}, {
  "label": "牡丹江市",
  "value": "2310"
}, {
  "label": "黑河市",
  "value": "2311"
}, {
  "label": "绥化市",
  "value": "2312"
}, {
  "label": "大兴安岭地区",
  "value": "2327"
}], [{
  "label": "市辖区",
  "value": "3101"
}], [{
  "label": "南京市",
  "value": "3201"
}, {
  "label": "无锡市",
  "value": "3202"
}, {
  "label": "徐州市",
  "value": "3203"
}, {
  "label": "常州市",
  "value": "3204"
}, {
  "label": "苏州市",
  "value": "3205"
}, {
  "label": "南通市",
  "value": "3206"
}, {
  "label": "连云港市",
  "value": "3207"
}, {
  "label": "淮安市",
  "value": "3208"
}, {
  "label": "盐城市",
  "value": "3209"
}, {
  "label": "扬州市",
  "value": "3210"
}, {
  "label": "镇江市",
  "value": "3211"
}, {
  "label": "泰州市",
  "value": "3212"
}, {
  "label": "宿迁市",
  "value": "3213"
}], [{
  "label": "杭州市",
  "value": "3301"
}, {
  "label": "宁波市",
  "value": "3302"
}, {
  "label": "温州市",
  "value": "3303"
}, {
  "label": "嘉兴市",
  "value": "3304"
}, {
  "label": "湖州市",
  "value": "3305"
}, {
  "label": "绍兴市",
  "value": "3306"
}, {
  "label": "金华市",
  "value": "3307"
}, {
  "label": "衢州市",
  "value": "3308"
}, {
  "label": "舟山市",
  "value": "3309"
}, {
  "label": "台州市",
  "value": "3310"
}, {
  "label": "丽水市",
  "value": "3311"
}], [{
  "label": "合肥市",
  "value": "3401"
}, {
  "label": "芜湖市",
  "value": "3402"
}, {
  "label": "蚌埠市",
  "value": "3403"
}, {
  "label": "淮南市",
  "value": "3404"
}, {
  "label": "马鞍山市",
  "value": "3405"
}, {
  "label": "淮北市",
  "value": "3406"
}, {
  "label": "铜陵市",
  "value": "3407"
}, {
  "label": "安庆市",
  "value": "3408"
}, {
  "label": "黄山市",
  "value": "3410"
}, {
  "label": "滁州市",
  "value": "3411"
}, {
  "label": "阜阳市",
  "value": "3412"
}, {
  "label": "宿州市",
  "value": "3413"
}, {
  "label": "六安市",
  "value": "3415"
}, {
  "label": "亳州市",
  "value": "3416"
}, {
  "label": "池州市",
  "value": "3417"
}, {
  "label": "宣城市",
  "value": "3418"
}], [{
  "label": "福州市",
  "value": "3501"
}, {
  "label": "厦门市",
  "value": "3502"
}, {
  "label": "莆田市",
  "value": "3503"
}, {
  "label": "三明市",
  "value": "3504"
}, {
  "label": "泉州市",
  "value": "3505"
}, {
  "label": "漳州市",
  "value": "3506"
}, {
  "label": "南平市",
  "value": "3507"
}, {
  "label": "龙岩市",
  "value": "3508"
}, {
  "label": "宁德市",
  "value": "3509"
}], [{
  "label": "南昌市",
  "value": "3601"
}, {
  "label": "景德镇市",
  "value": "3602"
}, {
  "label": "萍乡市",
  "value": "3603"
}, {
  "label": "九江市",
  "value": "3604"
}, {
  "label": "新余市",
  "value": "3605"
}, {
  "label": "鹰潭市",
  "value": "3606"
}, {
  "label": "赣州市",
  "value": "3607"
}, {
  "label": "吉安市",
  "value": "3608"
}, {
  "label": "宜春市",
  "value": "3609"
}, {
  "label": "抚州市",
  "value": "3610"
}, {
  "label": "上饶市",
  "value": "3611"
}], [{
  "label": "济南市",
  "value": "3701"
}, {
  "label": "青岛市",
  "value": "3702"
}, {
  "label": "淄博市",
  "value": "3703"
}, {
  "label": "枣庄市",
  "value": "3704"
}, {
  "label": "东营市",
  "value": "3705"
}, {
  "label": "烟台市",
  "value": "3706"
}, {
  "label": "潍坊市",
  "value": "3707"
}, {
  "label": "济宁市",
  "value": "3708"
}, {
  "label": "泰安市",
  "value": "3709"
}, {
  "label": "威海市",
  "value": "3710"
}, {
  "label": "日照市",
  "value": "3711"
}, {
  "label": "莱芜市",
  "value": "3712"
}, {
  "label": "临沂市",
  "value": "3713"
}, {
  "label": "德州市",
  "value": "3714"
}, {
  "label": "聊城市",
  "value": "3715"
}, {
  "label": "滨州市",
  "value": "3716"
}, {
  "label": "菏泽市",
  "value": "3717"
}], [{
  "label": "郑州市",
  "value": "4101"
}, {
  "label": "开封市",
  "value": "4102"
}, {
  "label": "洛阳市",
  "value": "4103"
}, {
  "label": "平顶山市",
  "value": "4104"
}, {
  "label": "安阳市",
  "value": "4105"
}, {
  "label": "鹤壁市",
  "value": "4106"
}, {
  "label": "新乡市",
  "value": "4107"
}, {
  "label": "焦作市",
  "value": "4108"
}, {
  "label": "濮阳市",
  "value": "4109"
}, {
  "label": "许昌市",
  "value": "4110"
}, {
  "label": "漯河市",
  "value": "4111"
}, {
  "label": "三门峡市",
  "value": "4112"
}, {
  "label": "南阳市",
  "value": "4113"
}, {
  "label": "商丘市",
  "value": "4114"
}, {
  "label": "信阳市",
  "value": "4115"
}, {
  "label": "周口市",
  "value": "4116"
}, {
  "label": "驻马店市",
  "value": "4117"
}, {
  "label": "省直辖县级行政区划",
  "value": "4190"
}], [{
  "label": "武汉市",
  "value": "4201"
}, {
  "label": "黄石市",
  "value": "4202"
}, {
  "label": "十堰市",
  "value": "4203"
}, {
  "label": "宜昌市",
  "value": "4205"
}, {
  "label": "襄阳市",
  "value": "4206"
}, {
  "label": "鄂州市",
  "value": "4207"
}, {
  "label": "荆门市",
  "value": "4208"
}, {
  "label": "孝感市",
  "value": "4209"
}, {
  "label": "荆州市",
  "value": "4210"
}, {
  "label": "黄冈市",
  "value": "4211"
}, {
  "label": "咸宁市",
  "value": "4212"
}, {
  "label": "随州市",
  "value": "4213"
}, {
  "label": "恩施土家族苗族自治州",
  "value": "4228"
}, {
  "label": "省直辖县级行政区划",
  "value": "4290"
}], [{
  "label": "长沙市",
  "value": "4301"
}, {
  "label": "株洲市",
  "value": "4302"
}, {
  "label": "湘潭市",
  "value": "4303"
}, {
  "label": "衡阳市",
  "value": "4304"
}, {
  "label": "邵阳市",
  "value": "4305"
}, {
  "label": "岳阳市",
  "value": "4306"
}, {
  "label": "常德市",
  "value": "4307"
}, {
  "label": "张家界市",
  "value": "4308"
}, {
  "label": "益阳市",
  "value": "4309"
}, {
  "label": "郴州市",
  "value": "4310"
}, {
  "label": "永州市",
  "value": "4311"
}, {
  "label": "怀化市",
  "value": "4312"
}, {
  "label": "娄底市",
  "value": "4313"
}, {
  "label": "湘西土家族苗族自治州",
  "value": "4331"
}], [{
  "label": "广州市",
  "value": "4401"
}, {
  "label": "韶关市",
  "value": "4402"
}, {
  "label": "深圳市",
  "value": "4403"
}, {
  "label": "珠海市",
  "value": "4404"
}, {
  "label": "汕头市",
  "value": "4405"
}, {
  "label": "佛山市",
  "value": "4406"
}, {
  "label": "江门市",
  "value": "4407"
}, {
  "label": "湛江市",
  "value": "4408"
}, {
  "label": "茂名市",
  "value": "4409"
}, {
  "label": "肇庆市",
  "value": "4412"
}, {
  "label": "惠州市",
  "value": "4413"
}, {
  "label": "梅州市",
  "value": "4414"
}, {
  "label": "汕尾市",
  "value": "4415"
}, {
  "label": "河源市",
  "value": "4416"
}, {
  "label": "阳江市",
  "value": "4417"
}, {
  "label": "清远市",
  "value": "4418"
}, {
  "label": "东莞市",
  "value": "4419"
}, {
  "label": "中山市",
  "value": "4420"
}, {
  "label": "潮州市",
  "value": "4451"
}, {
  "label": "揭阳市",
  "value": "4452"
}, {
  "label": "云浮市",
  "value": "4453"
}], [{
  "label": "南宁市",
  "value": "4501"
}, {
  "label": "柳州市",
  "value": "4502"
}, {
  "label": "桂林市",
  "value": "4503"
}, {
  "label": "梧州市",
  "value": "4504"
}, {
  "label": "北海市",
  "value": "4505"
}, {
  "label": "防城港市",
  "value": "4506"
}, {
  "label": "钦州市",
  "value": "4507"
}, {
  "label": "贵港市",
  "value": "4508"
}, {
  "label": "玉林市",
  "value": "4509"
}, {
  "label": "百色市",
  "value": "4510"
}, {
  "label": "贺州市",
  "value": "4511"
}, {
  "label": "河池市",
  "value": "4512"
}, {
  "label": "来宾市",
  "value": "4513"
}, {
  "label": "崇左市",
  "value": "4514"
}], [{
  "label": "海口市",
  "value": "4601"
}, {
  "label": "三亚市",
  "value": "4602"
}, {
  "label": "三沙市",
  "value": "4603"
}, {
  "label": "儋州市",
  "value": "4604"
}, {
  "label": "省直辖县级行政区划",
  "value": "4690"
}], [{
  "label": "市辖区",
  "value": "5001"
}, {
  "label": "县",
  "value": "5002"
}], [{
  "label": "成都市",
  "value": "5101"
}, {
  "label": "自贡市",
  "value": "5103"
}, {
  "label": "攀枝花市",
  "value": "5104"
}, {
  "label": "泸州市",
  "value": "5105"
}, {
  "label": "德阳市",
  "value": "5106"
}, {
  "label": "绵阳市",
  "value": "5107"
}, {
  "label": "广元市",
  "value": "5108"
}, {
  "label": "遂宁市",
  "value": "5109"
}, {
  "label": "内江市",
  "value": "5110"
}, {
  "label": "乐山市",
  "value": "5111"
}, {
  "label": "南充市",
  "value": "5113"
}, {
  "label": "眉山市",
  "value": "5114"
}, {
  "label": "宜宾市",
  "value": "5115"
}, {
  "label": "广安市",
  "value": "5116"
}, {
  "label": "达州市",
  "value": "5117"
}, {
  "label": "雅安市",
  "value": "5118"
}, {
  "label": "巴中市",
  "value": "5119"
}, {
  "label": "资阳市",
  "value": "5120"
}, {
  "label": "阿坝藏族羌族自治州",
  "value": "5132"
}, {
  "label": "甘孜藏族自治州",
  "value": "5133"
}, {
  "label": "凉山彝族自治州",
  "value": "5134"
}], [{
  "label": "贵阳市",
  "value": "5201"
}, {
  "label": "六盘水市",
  "value": "5202"
}, {
  "label": "遵义市",
  "value": "5203"
}, {
  "label": "安顺市",
  "value": "5204"
}, {
  "label": "毕节市",
  "value": "5205"
}, {
  "label": "铜仁市",
  "value": "5206"
}, {
  "label": "黔西南布依族苗族自治州",
  "value": "5223"
}, {
  "label": "黔东南苗族侗族自治州",
  "value": "5226"
}, {
  "label": "黔南布依族苗族自治州",
  "value": "5227"
}], [{
  "label": "昆明市",
  "value": "5301"
}, {
  "label": "曲靖市",
  "value": "5303"
}, {
  "label": "玉溪市",
  "value": "5304"
}, {
  "label": "保山市",
  "value": "5305"
}, {
  "label": "昭通市",
  "value": "5306"
}, {
  "label": "丽江市",
  "value": "5307"
}, {
  "label": "普洱市",
  "value": "5308"
}, {
  "label": "临沧市",
  "value": "5309"
}, {
  "label": "楚雄彝族自治州",
  "value": "5323"
}, {
  "label": "红河哈尼族彝族自治州",
  "value": "5325"
}, {
  "label": "文山壮族苗族自治州",
  "value": "5326"
}, {
  "label": "西双版纳傣族自治州",
  "value": "5328"
}, {
  "label": "大理白族自治州",
  "value": "5329"
}, {
  "label": "德宏傣族景颇族自治州",
  "value": "5331"
}, {
  "label": "怒江傈僳族自治州",
  "value": "5333"
}, {
  "label": "迪庆藏族自治州",
  "value": "5334"
}], [{
  "label": "拉萨市",
  "value": "5401"
}, {
  "label": "日喀则市",
  "value": "5402"
}, {
  "label": "昌都市",
  "value": "5403"
}, {
  "label": "林芝市",
  "value": "5404"
}, {
  "label": "山南市",
  "value": "5405"
}, {
  "label": "那曲地区",
  "value": "5424"
}, {
  "label": "阿里地区",
  "value": "5425"
}], [{
  "label": "西安市",
  "value": "6101"
}, {
  "label": "铜川市",
  "value": "6102"
}, {
  "label": "宝鸡市",
  "value": "6103"
}, {
  "label": "咸阳市",
  "value": "6104"
}, {
  "label": "渭南市",
  "value": "6105"
}, {
  "label": "延安市",
  "value": "6106"
}, {
  "label": "汉中市",
  "value": "6107"
}, {
  "label": "榆林市",
  "value": "6108"
}, {
  "label": "安康市",
  "value": "6109"
}, {
  "label": "商洛市",
  "value": "6110"
}], [{
  "label": "兰州市",
  "value": "6201"
}, {
  "label": "嘉峪关市",
  "value": "6202"
}, {
  "label": "金昌市",
  "value": "6203"
}, {
  "label": "白银市",
  "value": "6204"
}, {
  "label": "天水市",
  "value": "6205"
}, {
  "label": "武威市",
  "value": "6206"
}, {
  "label": "张掖市",
  "value": "6207"
}, {
  "label": "平凉市",
  "value": "6208"
}, {
  "label": "酒泉市",
  "value": "6209"
}, {
  "label": "庆阳市",
  "value": "6210"
}, {
  "label": "定西市",
  "value": "6211"
}, {
  "label": "陇南市",
  "value": "6212"
}, {
  "label": "临夏回族自治州",
  "value": "6229"
}, {
  "label": "甘南藏族自治州",
  "value": "6230"
}], [{
  "label": "西宁市",
  "value": "6301"
}, {
  "label": "海东市",
  "value": "6302"
}, {
  "label": "海北藏族自治州",
  "value": "6322"
}, {
  "label": "黄南藏族自治州",
  "value": "6323"
}, {
  "label": "海南藏族自治州",
  "value": "6325"
}, {
  "label": "果洛藏族自治州",
  "value": "6326"
}, {
  "label": "玉树藏族自治州",
  "value": "6327"
}, {
  "label": "海西蒙古族藏族自治州",
  "value": "6328"
}], [{
  "label": "银川市",
  "value": "6401"
}, {
  "label": "石嘴山市",
  "value": "6402"
}, {
  "label": "吴忠市",
  "value": "6403"
}, {
  "label": "固原市",
  "value": "6404"
}, {
  "label": "中卫市",
  "value": "6405"
}], [{
  "label": "乌鲁木齐市",
  "value": "6501"
}, {
  "label": "克拉玛依市",
  "value": "6502"
}, {
  "label": "吐鲁番市",
  "value": "6504"
}, {
  "label": "哈密市",
  "value": "6505"
}, {
  "label": "昌吉回族自治州",
  "value": "6523"
}, {
  "label": "博尔塔拉蒙古自治州",
  "value": "6527"
}, {
  "label": "巴音郭楞蒙古自治州",
  "value": "6528"
}, {
  "label": "阿克苏地区",
  "value": "6529"
}, {
  "label": "克孜勒苏柯尔克孜自治州",
  "value": "6530"
}, {
  "label": "喀什地区",
  "value": "6531"
}, {
  "label": "和田地区",
  "value": "6532"
}, {
  "label": "伊犁哈萨克自治州",
  "value": "6540"
}, {
  "label": "塔城地区",
  "value": "6542"
}, {
  "label": "阿勒泰地区",
  "value": "6543"
}, {
  "label": "自治区直辖县级行政区划",
  "value": "6590"
}], [{
  "label": "台北",
  "value": "6601"
}, {
  "label": "高雄",
  "value": "6602"
}, {
  "label": "基隆",
  "value": "6603"
}, {
  "label": "台中",
  "value": "6604"
}, {
  "label": "台南",
  "value": "6605"
}, {
  "label": "新竹",
  "value": "6606"
}, {
  "label": "嘉义",
  "value": "6607"
}, {
  "label": "宜兰",
  "value": "6608"
}, {
  "label": "桃园",
  "value": "6609"
}, {
  "label": "苗栗",
  "value": "6610"
}, {
  "label": "彰化",
  "value": "6611"
}, {
  "label": "南投",
  "value": "6612"
}, {
  "label": "云林",
  "value": "6613"
}, {
  "label": "屏东",
  "value": "6614"
}, {
  "label": "台东",
  "value": "6615"
}, {
  "label": "花莲",
  "value": "6616"
}, {
  "label": "澎湖",
  "value": "6617"
}], [{
  "label": "香港岛",
  "value": "6701"
}, {
  "label": "九龙",
  "value": "6702"
}, {
  "label": "新界",
  "value": "6703"
}], [{
  "label": "澳门半岛",
  "value": "6801"
}, {
  "label": "氹仔岛",
  "value": "6802"
}, {
  "label": "路环岛",
  "value": "6803"
}, {
  "label": "路氹城",
  "value": "6804"
}]];
var _default = cityData;
exports.default = _default;

/***/ }),

/***/ 55:
/*!************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/toast.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  });
}
var _default = toast;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 550:
/*!*******************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/util/area.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var areaData = [[[{
  "label": "东城区",
  "value": "110101"
}, {
  "label": "西城区",
  "value": "110102"
}, {
  "label": "朝阳区",
  "value": "110105"
}, {
  "label": "丰台区",
  "value": "110106"
}, {
  "label": "石景山区",
  "value": "110107"
}, {
  "label": "海淀区",
  "value": "110108"
}, {
  "label": "门头沟区",
  "value": "110109"
}, {
  "label": "房山区",
  "value": "110111"
}, {
  "label": "通州区",
  "value": "110112"
}, {
  "label": "顺义区",
  "value": "110113"
}, {
  "label": "昌平区",
  "value": "110114"
}, {
  "label": "大兴区",
  "value": "110115"
}, {
  "label": "怀柔区",
  "value": "110116"
}, {
  "label": "平谷区",
  "value": "110117"
}, {
  "label": "密云区",
  "value": "110118"
}, {
  "label": "延庆区",
  "value": "110119"
}]], [[{
  "label": "和平区",
  "value": "120101"
}, {
  "label": "河东区",
  "value": "120102"
}, {
  "label": "河西区",
  "value": "120103"
}, {
  "label": "南开区",
  "value": "120104"
}, {
  "label": "河北区",
  "value": "120105"
}, {
  "label": "红桥区",
  "value": "120106"
}, {
  "label": "东丽区",
  "value": "120110"
}, {
  "label": "西青区",
  "value": "120111"
}, {
  "label": "津南区",
  "value": "120112"
}, {
  "label": "北辰区",
  "value": "120113"
}, {
  "label": "武清区",
  "value": "120114"
}, {
  "label": "宝坻区",
  "value": "120115"
}, {
  "label": "滨海新区",
  "value": "120116"
}, {
  "label": "宁河区",
  "value": "120117"
}, {
  "label": "静海区",
  "value": "120118"
}, {
  "label": "蓟州区",
  "value": "120119"
}]], [[{
  "label": "长安区",
  "value": "130102"
}, {
  "label": "桥西区",
  "value": "130104"
}, {
  "label": "新华区",
  "value": "130105"
}, {
  "label": "井陉矿区",
  "value": "130107"
}, {
  "label": "裕华区",
  "value": "130108"
}, {
  "label": "藁城区",
  "value": "130109"
}, {
  "label": "鹿泉区",
  "value": "130110"
}, {
  "label": "栾城区",
  "value": "130111"
}, {
  "label": "井陉县",
  "value": "130121"
}, {
  "label": "正定县",
  "value": "130123"
}, {
  "label": "行唐县",
  "value": "130125"
}, {
  "label": "灵寿县",
  "value": "130126"
}, {
  "label": "高邑县",
  "value": "130127"
}, {
  "label": "深泽县",
  "value": "130128"
}, {
  "label": "赞皇县",
  "value": "130129"
}, {
  "label": "无极县",
  "value": "130130"
}, {
  "label": "平山县",
  "value": "130131"
}, {
  "label": "元氏县",
  "value": "130132"
}, {
  "label": "赵县",
  "value": "130133"
}, {
  "label": "石家庄高新技术产业开发区",
  "value": "130171"
}, {
  "label": "石家庄循环化工园区",
  "value": "130172"
}, {
  "label": "辛集市",
  "value": "130181"
}, {
  "label": "晋州市",
  "value": "130183"
}, {
  "label": "新乐市",
  "value": "130184"
}], [{
  "label": "路南区",
  "value": "130202"
}, {
  "label": "路北区",
  "value": "130203"
}, {
  "label": "古冶区",
  "value": "130204"
}, {
  "label": "开平区",
  "value": "130205"
}, {
  "label": "丰南区",
  "value": "130207"
}, {
  "label": "丰润区",
  "value": "130208"
}, {
  "label": "曹妃甸区",
  "value": "130209"
}, {
  "label": "滦县",
  "value": "130223"
}, {
  "label": "滦南县",
  "value": "130224"
}, {
  "label": "乐亭县",
  "value": "130225"
}, {
  "label": "迁西县",
  "value": "130227"
}, {
  "label": "玉田县",
  "value": "130229"
}, {
  "label": "唐山市芦台经济技术开发区",
  "value": "130271"
}, {
  "label": "唐山市汉沽管理区",
  "value": "130272"
}, {
  "label": "唐山高新技术产业开发区",
  "value": "130273"
}, {
  "label": "河北唐山海港经济开发区",
  "value": "130274"
}, {
  "label": "遵化市",
  "value": "130281"
}, {
  "label": "迁安市",
  "value": "130283"
}], [{
  "label": "海港区",
  "value": "130302"
}, {
  "label": "山海关区",
  "value": "130303"
}, {
  "label": "北戴河区",
  "value": "130304"
}, {
  "label": "抚宁区",
  "value": "130306"
}, {
  "label": "青龙满族自治县",
  "value": "130321"
}, {
  "label": "昌黎县",
  "value": "130322"
}, {
  "label": "卢龙县",
  "value": "130324"
}, {
  "label": "秦皇岛市经济技术开发区",
  "value": "130371"
}, {
  "label": "北戴河新区",
  "value": "130372"
}], [{
  "label": "邯山区",
  "value": "130402"
}, {
  "label": "丛台区",
  "value": "130403"
}, {
  "label": "复兴区",
  "value": "130404"
}, {
  "label": "峰峰矿区",
  "value": "130406"
}, {
  "label": "肥乡区",
  "value": "130407"
}, {
  "label": "永年区",
  "value": "130408"
}, {
  "label": "临漳县",
  "value": "130423"
}, {
  "label": "成安县",
  "value": "130424"
}, {
  "label": "大名县",
  "value": "130425"
}, {
  "label": "涉县",
  "value": "130426"
}, {
  "label": "磁县",
  "value": "130427"
}, {
  "label": "邱县",
  "value": "130430"
}, {
  "label": "鸡泽县",
  "value": "130431"
}, {
  "label": "广平县",
  "value": "130432"
}, {
  "label": "馆陶县",
  "value": "130433"
}, {
  "label": "魏县",
  "value": "130434"
}, {
  "label": "曲周县",
  "value": "130435"
}, {
  "label": "邯郸经济技术开发区",
  "value": "130471"
}, {
  "label": "邯郸冀南新区",
  "value": "130473"
}, {
  "label": "武安市",
  "value": "130481"
}], [{
  "label": "桥东区",
  "value": "130502"
}, {
  "label": "桥西区",
  "value": "130503"
}, {
  "label": "邢台县",
  "value": "130521"
}, {
  "label": "临城县",
  "value": "130522"
}, {
  "label": "内丘县",
  "value": "130523"
}, {
  "label": "柏乡县",
  "value": "130524"
}, {
  "label": "隆尧县",
  "value": "130525"
}, {
  "label": "任县",
  "value": "130526"
}, {
  "label": "南和县",
  "value": "130527"
}, {
  "label": "宁晋县",
  "value": "130528"
}, {
  "label": "巨鹿县",
  "value": "130529"
}, {
  "label": "新河县",
  "value": "130530"
}, {
  "label": "广宗县",
  "value": "130531"
}, {
  "label": "平乡县",
  "value": "130532"
}, {
  "label": "威县",
  "value": "130533"
}, {
  "label": "清河县",
  "value": "130534"
}, {
  "label": "临西县",
  "value": "130535"
}, {
  "label": "河北邢台经济开发区",
  "value": "130571"
}, {
  "label": "南宫市",
  "value": "130581"
}, {
  "label": "沙河市",
  "value": "130582"
}], [{
  "label": "竞秀区",
  "value": "130602"
}, {
  "label": "莲池区",
  "value": "130606"
}, {
  "label": "满城区",
  "value": "130607"
}, {
  "label": "清苑区",
  "value": "130608"
}, {
  "label": "徐水区",
  "value": "130609"
}, {
  "label": "涞水县",
  "value": "130623"
}, {
  "label": "阜平县",
  "value": "130624"
}, {
  "label": "定兴县",
  "value": "130626"
}, {
  "label": "唐县",
  "value": "130627"
}, {
  "label": "高阳县",
  "value": "130628"
}, {
  "label": "容城县",
  "value": "130629"
}, {
  "label": "涞源县",
  "value": "130630"
}, {
  "label": "望都县",
  "value": "130631"
}, {
  "label": "安新县",
  "value": "130632"
}, {
  "label": "易县",
  "value": "130633"
}, {
  "label": "曲阳县",
  "value": "130634"
}, {
  "label": "蠡县",
  "value": "130635"
}, {
  "label": "顺平县",
  "value": "130636"
}, {
  "label": "博野县",
  "value": "130637"
}, {
  "label": "雄县",
  "value": "130638"
}, {
  "label": "保定高新技术产业开发区",
  "value": "130671"
}, {
  "label": "保定白沟新城",
  "value": "130672"
}, {
  "label": "涿州市",
  "value": "130681"
}, {
  "label": "定州市",
  "value": "130682"
}, {
  "label": "安国市",
  "value": "130683"
}, {
  "label": "高碑店市",
  "value": "130684"
}], [{
  "label": "桥东区",
  "value": "130702"
}, {
  "label": "桥西区",
  "value": "130703"
}, {
  "label": "宣化区",
  "value": "130705"
}, {
  "label": "下花园区",
  "value": "130706"
}, {
  "label": "万全区",
  "value": "130708"
}, {
  "label": "崇礼区",
  "value": "130709"
}, {
  "label": "张北县",
  "value": "130722"
}, {
  "label": "康保县",
  "value": "130723"
}, {
  "label": "沽源县",
  "value": "130724"
}, {
  "label": "尚义县",
  "value": "130725"
}, {
  "label": "蔚县",
  "value": "130726"
}, {
  "label": "阳原县",
  "value": "130727"
}, {
  "label": "怀安县",
  "value": "130728"
}, {
  "label": "怀来县",
  "value": "130730"
}, {
  "label": "涿鹿县",
  "value": "130731"
}, {
  "label": "赤城县",
  "value": "130732"
}, {
  "label": "张家口市高新技术产业开发区",
  "value": "130771"
}, {
  "label": "张家口市察北管理区",
  "value": "130772"
}, {
  "label": "张家口市塞北管理区",
  "value": "130773"
}], [{
  "label": "双桥区",
  "value": "130802"
}, {
  "label": "双滦区",
  "value": "130803"
}, {
  "label": "鹰手营子矿区",
  "value": "130804"
}, {
  "label": "承德县",
  "value": "130821"
}, {
  "label": "兴隆县",
  "value": "130822"
}, {
  "label": "滦平县",
  "value": "130824"
}, {
  "label": "隆化县",
  "value": "130825"
}, {
  "label": "丰宁满族自治县",
  "value": "130826"
}, {
  "label": "宽城满族自治县",
  "value": "130827"
}, {
  "label": "围场满族蒙古族自治县",
  "value": "130828"
}, {
  "label": "承德高新技术产业开发区",
  "value": "130871"
}, {
  "label": "平泉市",
  "value": "130881"
}], [{
  "label": "新华区",
  "value": "130902"
}, {
  "label": "运河区",
  "value": "130903"
}, {
  "label": "沧县",
  "value": "130921"
}, {
  "label": "青县",
  "value": "130922"
}, {
  "label": "东光县",
  "value": "130923"
}, {
  "label": "海兴县",
  "value": "130924"
}, {
  "label": "盐山县",
  "value": "130925"
}, {
  "label": "肃宁县",
  "value": "130926"
}, {
  "label": "南皮县",
  "value": "130927"
}, {
  "label": "吴桥县",
  "value": "130928"
}, {
  "label": "献县",
  "value": "130929"
}, {
  "label": "孟村回族自治县",
  "value": "130930"
}, {
  "label": "河北沧州经济开发区",
  "value": "130971"
}, {
  "label": "沧州高新技术产业开发区",
  "value": "130972"
}, {
  "label": "沧州渤海新区",
  "value": "130973"
}, {
  "label": "泊头市",
  "value": "130981"
}, {
  "label": "任丘市",
  "value": "130982"
}, {
  "label": "黄骅市",
  "value": "130983"
}, {
  "label": "河间市",
  "value": "130984"
}], [{
  "label": "安次区",
  "value": "131002"
}, {
  "label": "广阳区",
  "value": "131003"
}, {
  "label": "固安县",
  "value": "131022"
}, {
  "label": "永清县",
  "value": "131023"
}, {
  "label": "香河县",
  "value": "131024"
}, {
  "label": "大城县",
  "value": "131025"
}, {
  "label": "文安县",
  "value": "131026"
}, {
  "label": "大厂回族自治县",
  "value": "131028"
}, {
  "label": "廊坊经济技术开发区",
  "value": "131071"
}, {
  "label": "霸州市",
  "value": "131081"
}, {
  "label": "三河市",
  "value": "131082"
}], [{
  "label": "桃城区",
  "value": "131102"
}, {
  "label": "冀州区",
  "value": "131103"
}, {
  "label": "枣强县",
  "value": "131121"
}, {
  "label": "武邑县",
  "value": "131122"
}, {
  "label": "武强县",
  "value": "131123"
}, {
  "label": "饶阳县",
  "value": "131124"
}, {
  "label": "安平县",
  "value": "131125"
}, {
  "label": "故城县",
  "value": "131126"
}, {
  "label": "景县",
  "value": "131127"
}, {
  "label": "阜城县",
  "value": "131128"
}, {
  "label": "河北衡水经济开发区",
  "value": "131171"
}, {
  "label": "衡水滨湖新区",
  "value": "131172"
}, {
  "label": "深州市",
  "value": "131182"
}]], [[{
  "label": "小店区",
  "value": "140105"
}, {
  "label": "迎泽区",
  "value": "140106"
}, {
  "label": "杏花岭区",
  "value": "140107"
}, {
  "label": "尖草坪区",
  "value": "140108"
}, {
  "label": "万柏林区",
  "value": "140109"
}, {
  "label": "晋源区",
  "value": "140110"
}, {
  "label": "清徐县",
  "value": "140121"
}, {
  "label": "阳曲县",
  "value": "140122"
}, {
  "label": "娄烦县",
  "value": "140123"
}, {
  "label": "山西转型综合改革示范区",
  "value": "140171"
}, {
  "label": "古交市",
  "value": "140181"
}], [{
  "label": "城区",
  "value": "140202"
}, {
  "label": "矿区",
  "value": "140203"
}, {
  "label": "南郊区",
  "value": "140211"
}, {
  "label": "新荣区",
  "value": "140212"
}, {
  "label": "阳高县",
  "value": "140221"
}, {
  "label": "天镇县",
  "value": "140222"
}, {
  "label": "广灵县",
  "value": "140223"
}, {
  "label": "灵丘县",
  "value": "140224"
}, {
  "label": "浑源县",
  "value": "140225"
}, {
  "label": "左云县",
  "value": "140226"
}, {
  "label": "大同县",
  "value": "140227"
}, {
  "label": "山西大同经济开发区",
  "value": "140271"
}], [{
  "label": "城区",
  "value": "140302"
}, {
  "label": "矿区",
  "value": "140303"
}, {
  "label": "郊区",
  "value": "140311"
}, {
  "label": "平定县",
  "value": "140321"
}, {
  "label": "盂县",
  "value": "140322"
}, {
  "label": "山西阳泉经济开发区",
  "value": "140371"
}], [{
  "label": "城区",
  "value": "140402"
}, {
  "label": "郊区",
  "value": "140411"
}, {
  "label": "长治县",
  "value": "140421"
}, {
  "label": "襄垣县",
  "value": "140423"
}, {
  "label": "屯留县",
  "value": "140424"
}, {
  "label": "平顺县",
  "value": "140425"
}, {
  "label": "黎城县",
  "value": "140426"
}, {
  "label": "壶关县",
  "value": "140427"
}, {
  "label": "长子县",
  "value": "140428"
}, {
  "label": "武乡县",
  "value": "140429"
}, {
  "label": "沁县",
  "value": "140430"
}, {
  "label": "沁源县",
  "value": "140431"
}, {
  "label": "山西长治高新技术产业园区",
  "value": "140471"
}, {
  "label": "潞城市",
  "value": "140481"
}], [{
  "label": "城区",
  "value": "140502"
}, {
  "label": "沁水县",
  "value": "140521"
}, {
  "label": "阳城县",
  "value": "140522"
}, {
  "label": "陵川县",
  "value": "140524"
}, {
  "label": "泽州县",
  "value": "140525"
}, {
  "label": "高平市",
  "value": "140581"
}], [{
  "label": "朔城区",
  "value": "140602"
}, {
  "label": "平鲁区",
  "value": "140603"
}, {
  "label": "山阴县",
  "value": "140621"
}, {
  "label": "应县",
  "value": "140622"
}, {
  "label": "右玉县",
  "value": "140623"
}, {
  "label": "怀仁县",
  "value": "140624"
}, {
  "label": "山西朔州经济开发区",
  "value": "140671"
}], [{
  "label": "榆次区",
  "value": "140702"
}, {
  "label": "榆社县",
  "value": "140721"
}, {
  "label": "左权县",
  "value": "140722"
}, {
  "label": "和顺县",
  "value": "140723"
}, {
  "label": "昔阳县",
  "value": "140724"
}, {
  "label": "寿阳县",
  "value": "140725"
}, {
  "label": "太谷县",
  "value": "140726"
}, {
  "label": "祁县",
  "value": "140727"
}, {
  "label": "平遥县",
  "value": "140728"
}, {
  "label": "灵石县",
  "value": "140729"
}, {
  "label": "介休市",
  "value": "140781"
}], [{
  "label": "盐湖区",
  "value": "140802"
}, {
  "label": "临猗县",
  "value": "140821"
}, {
  "label": "万荣县",
  "value": "140822"
}, {
  "label": "闻喜县",
  "value": "140823"
}, {
  "label": "稷山县",
  "value": "140824"
}, {
  "label": "新绛县",
  "value": "140825"
}, {
  "label": "绛县",
  "value": "140826"
}, {
  "label": "垣曲县",
  "value": "140827"
}, {
  "label": "夏县",
  "value": "140828"
}, {
  "label": "平陆县",
  "value": "140829"
}, {
  "label": "芮城县",
  "value": "140830"
}, {
  "label": "永济市",
  "value": "140881"
}, {
  "label": "河津市",
  "value": "140882"
}], [{
  "label": "忻府区",
  "value": "140902"
}, {
  "label": "定襄县",
  "value": "140921"
}, {
  "label": "五台县",
  "value": "140922"
}, {
  "label": "代县",
  "value": "140923"
}, {
  "label": "繁峙县",
  "value": "140924"
}, {
  "label": "宁武县",
  "value": "140925"
}, {
  "label": "静乐县",
  "value": "140926"
}, {
  "label": "神池县",
  "value": "140927"
}, {
  "label": "五寨县",
  "value": "140928"
}, {
  "label": "岢岚县",
  "value": "140929"
}, {
  "label": "河曲县",
  "value": "140930"
}, {
  "label": "保德县",
  "value": "140931"
}, {
  "label": "偏关县",
  "value": "140932"
}, {
  "label": "五台山风景名胜区",
  "value": "140971"
}, {
  "label": "原平市",
  "value": "140981"
}], [{
  "label": "尧都区",
  "value": "141002"
}, {
  "label": "曲沃县",
  "value": "141021"
}, {
  "label": "翼城县",
  "value": "141022"
}, {
  "label": "襄汾县",
  "value": "141023"
}, {
  "label": "洪洞县",
  "value": "141024"
}, {
  "label": "古县",
  "value": "141025"
}, {
  "label": "安泽县",
  "value": "141026"
}, {
  "label": "浮山县",
  "value": "141027"
}, {
  "label": "吉县",
  "value": "141028"
}, {
  "label": "乡宁县",
  "value": "141029"
}, {
  "label": "大宁县",
  "value": "141030"
}, {
  "label": "隰县",
  "value": "141031"
}, {
  "label": "永和县",
  "value": "141032"
}, {
  "label": "蒲县",
  "value": "141033"
}, {
  "label": "汾西县",
  "value": "141034"
}, {
  "label": "侯马市",
  "value": "141081"
}, {
  "label": "霍州市",
  "value": "141082"
}], [{
  "label": "离石区",
  "value": "141102"
}, {
  "label": "文水县",
  "value": "141121"
}, {
  "label": "交城县",
  "value": "141122"
}, {
  "label": "兴县",
  "value": "141123"
}, {
  "label": "临县",
  "value": "141124"
}, {
  "label": "柳林县",
  "value": "141125"
}, {
  "label": "石楼县",
  "value": "141126"
}, {
  "label": "岚县",
  "value": "141127"
}, {
  "label": "方山县",
  "value": "141128"
}, {
  "label": "中阳县",
  "value": "141129"
}, {
  "label": "交口县",
  "value": "141130"
}, {
  "label": "孝义市",
  "value": "141181"
}, {
  "label": "汾阳市",
  "value": "141182"
}]], [[{
  "label": "新城区",
  "value": "150102"
}, {
  "label": "回民区",
  "value": "150103"
}, {
  "label": "玉泉区",
  "value": "150104"
}, {
  "label": "赛罕区",
  "value": "150105"
}, {
  "label": "土默特左旗",
  "value": "150121"
}, {
  "label": "托克托县",
  "value": "150122"
}, {
  "label": "和林格尔县",
  "value": "150123"
}, {
  "label": "清水河县",
  "value": "150124"
}, {
  "label": "武川县",
  "value": "150125"
}, {
  "label": "呼和浩特金海工业园区",
  "value": "150171"
}, {
  "label": "呼和浩特经济技术开发区",
  "value": "150172"
}], [{
  "label": "东河区",
  "value": "150202"
}, {
  "label": "昆都仑区",
  "value": "150203"
}, {
  "label": "青山区",
  "value": "150204"
}, {
  "label": "石拐区",
  "value": "150205"
}, {
  "label": "白云鄂博矿区",
  "value": "150206"
}, {
  "label": "九原区",
  "value": "150207"
}, {
  "label": "土默特右旗",
  "value": "150221"
}, {
  "label": "固阳县",
  "value": "150222"
}, {
  "label": "达尔罕茂明安联合旗",
  "value": "150223"
}, {
  "label": "包头稀土高新技术产业开发区",
  "value": "150271"
}], [{
  "label": "海勃湾区",
  "value": "150302"
}, {
  "label": "海南区",
  "value": "150303"
}, {
  "label": "乌达区",
  "value": "150304"
}], [{
  "label": "红山区",
  "value": "150402"
}, {
  "label": "元宝山区",
  "value": "150403"
}, {
  "label": "松山区",
  "value": "150404"
}, {
  "label": "阿鲁科尔沁旗",
  "value": "150421"
}, {
  "label": "巴林左旗",
  "value": "150422"
}, {
  "label": "巴林右旗",
  "value": "150423"
}, {
  "label": "林西县",
  "value": "150424"
}, {
  "label": "克什克腾旗",
  "value": "150425"
}, {
  "label": "翁牛特旗",
  "value": "150426"
}, {
  "label": "喀喇沁旗",
  "value": "150428"
}, {
  "label": "宁城县",
  "value": "150429"
}, {
  "label": "敖汉旗",
  "value": "150430"
}], [{
  "label": "科尔沁区",
  "value": "150502"
}, {
  "label": "科尔沁左翼中旗",
  "value": "150521"
}, {
  "label": "科尔沁左翼后旗",
  "value": "150522"
}, {
  "label": "开鲁县",
  "value": "150523"
}, {
  "label": "库伦旗",
  "value": "150524"
}, {
  "label": "奈曼旗",
  "value": "150525"
}, {
  "label": "扎鲁特旗",
  "value": "150526"
}, {
  "label": "通辽经济技术开发区",
  "value": "150571"
}, {
  "label": "霍林郭勒市",
  "value": "150581"
}], [{
  "label": "东胜区",
  "value": "150602"
}, {
  "label": "康巴什区",
  "value": "150603"
}, {
  "label": "达拉特旗",
  "value": "150621"
}, {
  "label": "准格尔旗",
  "value": "150622"
}, {
  "label": "鄂托克前旗",
  "value": "150623"
}, {
  "label": "鄂托克旗",
  "value": "150624"
}, {
  "label": "杭锦旗",
  "value": "150625"
}, {
  "label": "乌审旗",
  "value": "150626"
}, {
  "label": "伊金霍洛旗",
  "value": "150627"
}], [{
  "label": "海拉尔区",
  "value": "150702"
}, {
  "label": "扎赉诺尔区",
  "value": "150703"
}, {
  "label": "阿荣旗",
  "value": "150721"
}, {
  "label": "莫力达瓦达斡尔族自治旗",
  "value": "150722"
}, {
  "label": "鄂伦春自治旗",
  "value": "150723"
}, {
  "label": "鄂温克族自治旗",
  "value": "150724"
}, {
  "label": "陈巴尔虎旗",
  "value": "150725"
}, {
  "label": "新巴尔虎左旗",
  "value": "150726"
}, {
  "label": "新巴尔虎右旗",
  "value": "150727"
}, {
  "label": "满洲里市",
  "value": "150781"
}, {
  "label": "牙克石市",
  "value": "150782"
}, {
  "label": "扎兰屯市",
  "value": "150783"
}, {
  "label": "额尔古纳市",
  "value": "150784"
}, {
  "label": "根河市",
  "value": "150785"
}], [{
  "label": "临河区",
  "value": "150802"
}, {
  "label": "五原县",
  "value": "150821"
}, {
  "label": "磴口县",
  "value": "150822"
}, {
  "label": "乌拉特前旗",
  "value": "150823"
}, {
  "label": "乌拉特中旗",
  "value": "150824"
}, {
  "label": "乌拉特后旗",
  "value": "150825"
}, {
  "label": "杭锦后旗",
  "value": "150826"
}], [{
  "label": "集宁区",
  "value": "150902"
}, {
  "label": "卓资县",
  "value": "150921"
}, {
  "label": "化德县",
  "value": "150922"
}, {
  "label": "商都县",
  "value": "150923"
}, {
  "label": "兴和县",
  "value": "150924"
}, {
  "label": "凉城县",
  "value": "150925"
}, {
  "label": "察哈尔右翼前旗",
  "value": "150926"
}, {
  "label": "察哈尔右翼中旗",
  "value": "150927"
}, {
  "label": "察哈尔右翼后旗",
  "value": "150928"
}, {
  "label": "四子王旗",
  "value": "150929"
}, {
  "label": "丰镇市",
  "value": "150981"
}], [{
  "label": "乌兰浩特市",
  "value": "152201"
}, {
  "label": "阿尔山市",
  "value": "152202"
}, {
  "label": "科尔沁右翼前旗",
  "value": "152221"
}, {
  "label": "科尔沁右翼中旗",
  "value": "152222"
}, {
  "label": "扎赉特旗",
  "value": "152223"
}, {
  "label": "突泉县",
  "value": "152224"
}], [{
  "label": "二连浩特市",
  "value": "152501"
}, {
  "label": "锡林浩特市",
  "value": "152502"
}, {
  "label": "阿巴嘎旗",
  "value": "152522"
}, {
  "label": "苏尼特左旗",
  "value": "152523"
}, {
  "label": "苏尼特右旗",
  "value": "152524"
}, {
  "label": "东乌珠穆沁旗",
  "value": "152525"
}, {
  "label": "西乌珠穆沁旗",
  "value": "152526"
}, {
  "label": "太仆寺旗",
  "value": "152527"
}, {
  "label": "镶黄旗",
  "value": "152528"
}, {
  "label": "正镶白旗",
  "value": "152529"
}, {
  "label": "正蓝旗",
  "value": "152530"
}, {
  "label": "多伦县",
  "value": "152531"
}, {
  "label": "乌拉盖管委会",
  "value": "152571"
}], [{
  "label": "阿拉善左旗",
  "value": "152921"
}, {
  "label": "阿拉善右旗",
  "value": "152922"
}, {
  "label": "额济纳旗",
  "value": "152923"
}, {
  "label": "内蒙古阿拉善经济开发区",
  "value": "152971"
}]], [[{
  "label": "和平区",
  "value": "210102"
}, {
  "label": "沈河区",
  "value": "210103"
}, {
  "label": "大东区",
  "value": "210104"
}, {
  "label": "皇姑区",
  "value": "210105"
}, {
  "label": "铁西区",
  "value": "210106"
}, {
  "label": "苏家屯区",
  "value": "210111"
}, {
  "label": "浑南区",
  "value": "210112"
}, {
  "label": "沈北新区",
  "value": "210113"
}, {
  "label": "于洪区",
  "value": "210114"
}, {
  "label": "辽中区",
  "value": "210115"
}, {
  "label": "康平县",
  "value": "210123"
}, {
  "label": "法库县",
  "value": "210124"
}, {
  "label": "新民市",
  "value": "210181"
}], [{
  "label": "中山区",
  "value": "210202"
}, {
  "label": "西岗区",
  "value": "210203"
}, {
  "label": "沙河口区",
  "value": "210204"
}, {
  "label": "甘井子区",
  "value": "210211"
}, {
  "label": "旅顺口区",
  "value": "210212"
}, {
  "label": "金州区",
  "value": "210213"
}, {
  "label": "普兰店区",
  "value": "210214"
}, {
  "label": "长海县",
  "value": "210224"
}, {
  "label": "瓦房店市",
  "value": "210281"
}, {
  "label": "庄河市",
  "value": "210283"
}], [{
  "label": "铁东区",
  "value": "210302"
}, {
  "label": "铁西区",
  "value": "210303"
}, {
  "label": "立山区",
  "value": "210304"
}, {
  "label": "千山区",
  "value": "210311"
}, {
  "label": "台安县",
  "value": "210321"
}, {
  "label": "岫岩满族自治县",
  "value": "210323"
}, {
  "label": "海城市",
  "value": "210381"
}], [{
  "label": "新抚区",
  "value": "210402"
}, {
  "label": "东洲区",
  "value": "210403"
}, {
  "label": "望花区",
  "value": "210404"
}, {
  "label": "顺城区",
  "value": "210411"
}, {
  "label": "抚顺县",
  "value": "210421"
}, {
  "label": "新宾满族自治县",
  "value": "210422"
}, {
  "label": "清原满族自治县",
  "value": "210423"
}], [{
  "label": "平山区",
  "value": "210502"
}, {
  "label": "溪湖区",
  "value": "210503"
}, {
  "label": "明山区",
  "value": "210504"
}, {
  "label": "南芬区",
  "value": "210505"
}, {
  "label": "本溪满族自治县",
  "value": "210521"
}, {
  "label": "桓仁满族自治县",
  "value": "210522"
}], [{
  "label": "元宝区",
  "value": "210602"
}, {
  "label": "振兴区",
  "value": "210603"
}, {
  "label": "振安区",
  "value": "210604"
}, {
  "label": "宽甸满族自治县",
  "value": "210624"
}, {
  "label": "东港市",
  "value": "210681"
}, {
  "label": "凤城市",
  "value": "210682"
}], [{
  "label": "古塔区",
  "value": "210702"
}, {
  "label": "凌河区",
  "value": "210703"
}, {
  "label": "太和区",
  "value": "210711"
}, {
  "label": "黑山县",
  "value": "210726"
}, {
  "label": "义县",
  "value": "210727"
}, {
  "label": "凌海市",
  "value": "210781"
}, {
  "label": "北镇市",
  "value": "210782"
}], [{
  "label": "站前区",
  "value": "210802"
}, {
  "label": "西市区",
  "value": "210803"
}, {
  "label": "鲅鱼圈区",
  "value": "210804"
}, {
  "label": "老边区",
  "value": "210811"
}, {
  "label": "盖州市",
  "value": "210881"
}, {
  "label": "大石桥市",
  "value": "210882"
}], [{
  "label": "海州区",
  "value": "210902"
}, {
  "label": "新邱区",
  "value": "210903"
}, {
  "label": "太平区",
  "value": "210904"
}, {
  "label": "清河门区",
  "value": "210905"
}, {
  "label": "细河区",
  "value": "210911"
}, {
  "label": "阜新蒙古族自治县",
  "value": "210921"
}, {
  "label": "彰武县",
  "value": "210922"
}], [{
  "label": "白塔区",
  "value": "211002"
}, {
  "label": "文圣区",
  "value": "211003"
}, {
  "label": "宏伟区",
  "value": "211004"
}, {
  "label": "弓长岭区",
  "value": "211005"
}, {
  "label": "太子河区",
  "value": "211011"
}, {
  "label": "辽阳县",
  "value": "211021"
}, {
  "label": "灯塔市",
  "value": "211081"
}], [{
  "label": "双台子区",
  "value": "211102"
}, {
  "label": "兴隆台区",
  "value": "211103"
}, {
  "label": "大洼区",
  "value": "211104"
}, {
  "label": "盘山县",
  "value": "211122"
}], [{
  "label": "银州区",
  "value": "211202"
}, {
  "label": "清河区",
  "value": "211204"
}, {
  "label": "铁岭县",
  "value": "211221"
}, {
  "label": "西丰县",
  "value": "211223"
}, {
  "label": "昌图县",
  "value": "211224"
}, {
  "label": "调兵山市",
  "value": "211281"
}, {
  "label": "开原市",
  "value": "211282"
}], [{
  "label": "双塔区",
  "value": "211302"
}, {
  "label": "龙城区",
  "value": "211303"
}, {
  "label": "朝阳县",
  "value": "211321"
}, {
  "label": "建平县",
  "value": "211322"
}, {
  "label": "喀喇沁左翼蒙古族自治县",
  "value": "211324"
}, {
  "label": "北票市",
  "value": "211381"
}, {
  "label": "凌源市",
  "value": "211382"
}], [{
  "label": "连山区",
  "value": "211402"
}, {
  "label": "龙港区",
  "value": "211403"
}, {
  "label": "南票区",
  "value": "211404"
}, {
  "label": "绥中县",
  "value": "211421"
}, {
  "label": "建昌县",
  "value": "211422"
}, {
  "label": "兴城市",
  "value": "211481"
}]], [[{
  "label": "南关区",
  "value": "220102"
}, {
  "label": "宽城区",
  "value": "220103"
}, {
  "label": "朝阳区",
  "value": "220104"
}, {
  "label": "二道区",
  "value": "220105"
}, {
  "label": "绿园区",
  "value": "220106"
}, {
  "label": "双阳区",
  "value": "220112"
}, {
  "label": "九台区",
  "value": "220113"
}, {
  "label": "农安县",
  "value": "220122"
}, {
  "label": "长春经济技术开发区",
  "value": "220171"
}, {
  "label": "长春净月高新技术产业开发区",
  "value": "220172"
}, {
  "label": "长春高新技术产业开发区",
  "value": "220173"
}, {
  "label": "长春汽车经济技术开发区",
  "value": "220174"
}, {
  "label": "榆树市",
  "value": "220182"
}, {
  "label": "德惠市",
  "value": "220183"
}], [{
  "label": "昌邑区",
  "value": "220202"
}, {
  "label": "龙潭区",
  "value": "220203"
}, {
  "label": "船营区",
  "value": "220204"
}, {
  "label": "丰满区",
  "value": "220211"
}, {
  "label": "永吉县",
  "value": "220221"
}, {
  "label": "吉林经济开发区",
  "value": "220271"
}, {
  "label": "吉林高新技术产业开发区",
  "value": "220272"
}, {
  "label": "吉林中国新加坡食品区",
  "value": "220273"
}, {
  "label": "蛟河市",
  "value": "220281"
}, {
  "label": "桦甸市",
  "value": "220282"
}, {
  "label": "舒兰市",
  "value": "220283"
}, {
  "label": "磐石市",
  "value": "220284"
}], [{
  "label": "铁西区",
  "value": "220302"
}, {
  "label": "铁东区",
  "value": "220303"
}, {
  "label": "梨树县",
  "value": "220322"
}, {
  "label": "伊通满族自治县",
  "value": "220323"
}, {
  "label": "公主岭市",
  "value": "220381"
}, {
  "label": "双辽市",
  "value": "220382"
}], [{
  "label": "龙山区",
  "value": "220402"
}, {
  "label": "西安区",
  "value": "220403"
}, {
  "label": "东丰县",
  "value": "220421"
}, {
  "label": "东辽县",
  "value": "220422"
}], [{
  "label": "东昌区",
  "value": "220502"
}, {
  "label": "二道江区",
  "value": "220503"
}, {
  "label": "通化县",
  "value": "220521"
}, {
  "label": "辉南县",
  "value": "220523"
}, {
  "label": "柳河县",
  "value": "220524"
}, {
  "label": "梅河口市",
  "value": "220581"
}, {
  "label": "集安市",
  "value": "220582"
}], [{
  "label": "浑江区",
  "value": "220602"
}, {
  "label": "江源区",
  "value": "220605"
}, {
  "label": "抚松县",
  "value": "220621"
}, {
  "label": "靖宇县",
  "value": "220622"
}, {
  "label": "长白朝鲜族自治县",
  "value": "220623"
}, {
  "label": "临江市",
  "value": "220681"
}], [{
  "label": "宁江区",
  "value": "220702"
}, {
  "label": "前郭尔罗斯蒙古族自治县",
  "value": "220721"
}, {
  "label": "长岭县",
  "value": "220722"
}, {
  "label": "乾安县",
  "value": "220723"
}, {
  "label": "吉林松原经济开发区",
  "value": "220771"
}, {
  "label": "扶余市",
  "value": "220781"
}], [{
  "label": "洮北区",
  "value": "220802"
}, {
  "label": "镇赉县",
  "value": "220821"
}, {
  "label": "通榆县",
  "value": "220822"
}, {
  "label": "吉林白城经济开发区",
  "value": "220871"
}, {
  "label": "洮南市",
  "value": "220881"
}, {
  "label": "大安市",
  "value": "220882"
}], [{
  "label": "延吉市",
  "value": "222401"
}, {
  "label": "图们市",
  "value": "222402"
}, {
  "label": "敦化市",
  "value": "222403"
}, {
  "label": "珲春市",
  "value": "222404"
}, {
  "label": "龙井市",
  "value": "222405"
}, {
  "label": "和龙市",
  "value": "222406"
}, {
  "label": "汪清县",
  "value": "222424"
}, {
  "label": "安图县",
  "value": "222426"
}]], [[{
  "label": "道里区",
  "value": "230102"
}, {
  "label": "南岗区",
  "value": "230103"
}, {
  "label": "道外区",
  "value": "230104"
}, {
  "label": "平房区",
  "value": "230108"
}, {
  "label": "松北区",
  "value": "230109"
}, {
  "label": "香坊区",
  "value": "230110"
}, {
  "label": "呼兰区",
  "value": "230111"
}, {
  "label": "阿城区",
  "value": "230112"
}, {
  "label": "双城区",
  "value": "230113"
}, {
  "label": "依兰县",
  "value": "230123"
}, {
  "label": "方正县",
  "value": "230124"
}, {
  "label": "宾县",
  "value": "230125"
}, {
  "label": "巴彦县",
  "value": "230126"
}, {
  "label": "木兰县",
  "value": "230127"
}, {
  "label": "通河县",
  "value": "230128"
}, {
  "label": "延寿县",
  "value": "230129"
}, {
  "label": "尚志市",
  "value": "230183"
}, {
  "label": "五常市",
  "value": "230184"
}], [{
  "label": "龙沙区",
  "value": "230202"
}, {
  "label": "建华区",
  "value": "230203"
}, {
  "label": "铁锋区",
  "value": "230204"
}, {
  "label": "昂昂溪区",
  "value": "230205"
}, {
  "label": "富拉尔基区",
  "value": "230206"
}, {
  "label": "碾子山区",
  "value": "230207"
}, {
  "label": "梅里斯达斡尔族区",
  "value": "230208"
}, {
  "label": "龙江县",
  "value": "230221"
}, {
  "label": "依安县",
  "value": "230223"
}, {
  "label": "泰来县",
  "value": "230224"
}, {
  "label": "甘南县",
  "value": "230225"
}, {
  "label": "富裕县",
  "value": "230227"
}, {
  "label": "克山县",
  "value": "230229"
}, {
  "label": "克东县",
  "value": "230230"
}, {
  "label": "拜泉县",
  "value": "230231"
}, {
  "label": "讷河市",
  "value": "230281"
}], [{
  "label": "鸡冠区",
  "value": "230302"
}, {
  "label": "恒山区",
  "value": "230303"
}, {
  "label": "滴道区",
  "value": "230304"
}, {
  "label": "梨树区",
  "value": "230305"
}, {
  "label": "城子河区",
  "value": "230306"
}, {
  "label": "麻山区",
  "value": "230307"
}, {
  "label": "鸡东县",
  "value": "230321"
}, {
  "label": "虎林市",
  "value": "230381"
}, {
  "label": "密山市",
  "value": "230382"
}], [{
  "label": "向阳区",
  "value": "230402"
}, {
  "label": "工农区",
  "value": "230403"
}, {
  "label": "南山区",
  "value": "230404"
}, {
  "label": "兴安区",
  "value": "230405"
}, {
  "label": "东山区",
  "value": "230406"
}, {
  "label": "兴山区",
  "value": "230407"
}, {
  "label": "萝北县",
  "value": "230421"
}, {
  "label": "绥滨县",
  "value": "230422"
}], [{
  "label": "尖山区",
  "value": "230502"
}, {
  "label": "岭东区",
  "value": "230503"
}, {
  "label": "四方台区",
  "value": "230505"
}, {
  "label": "宝山区",
  "value": "230506"
}, {
  "label": "集贤县",
  "value": "230521"
}, {
  "label": "友谊县",
  "value": "230522"
}, {
  "label": "宝清县",
  "value": "230523"
}, {
  "label": "饶河县",
  "value": "230524"
}], [{
  "label": "萨尔图区",
  "value": "230602"
}, {
  "label": "龙凤区",
  "value": "230603"
}, {
  "label": "让胡路区",
  "value": "230604"
}, {
  "label": "红岗区",
  "value": "230605"
}, {
  "label": "大同区",
  "value": "230606"
}, {
  "label": "肇州县",
  "value": "230621"
}, {
  "label": "肇源县",
  "value": "230622"
}, {
  "label": "林甸县",
  "value": "230623"
}, {
  "label": "杜尔伯特蒙古族自治县",
  "value": "230624"
}, {
  "label": "大庆高新技术产业开发区",
  "value": "230671"
}], [{
  "label": "伊春区",
  "value": "230702"
}, {
  "label": "南岔区",
  "value": "230703"
}, {
  "label": "友好区",
  "value": "230704"
}, {
  "label": "西林区",
  "value": "230705"
}, {
  "label": "翠峦区",
  "value": "230706"
}, {
  "label": "新青区",
  "value": "230707"
}, {
  "label": "美溪区",
  "value": "230708"
}, {
  "label": "金山屯区",
  "value": "230709"
}, {
  "label": "五营区",
  "value": "230710"
}, {
  "label": "乌马河区",
  "value": "230711"
}, {
  "label": "汤旺河区",
  "value": "230712"
}, {
  "label": "带岭区",
  "value": "230713"
}, {
  "label": "乌伊岭区",
  "value": "230714"
}, {
  "label": "红星区",
  "value": "230715"
}, {
  "label": "上甘岭区",
  "value": "230716"
}, {
  "label": "嘉荫县",
  "value": "230722"
}, {
  "label": "铁力市",
  "value": "230781"
}], [{
  "label": "向阳区",
  "value": "230803"
}, {
  "label": "前进区",
  "value": "230804"
}, {
  "label": "东风区",
  "value": "230805"
}, {
  "label": "郊区",
  "value": "230811"
}, {
  "label": "桦南县",
  "value": "230822"
}, {
  "label": "桦川县",
  "value": "230826"
}, {
  "label": "汤原县",
  "value": "230828"
}, {
  "label": "同江市",
  "value": "230881"
}, {
  "label": "富锦市",
  "value": "230882"
}, {
  "label": "抚远市",
  "value": "230883"
}], [{
  "label": "新兴区",
  "value": "230902"
}, {
  "label": "桃山区",
  "value": "230903"
}, {
  "label": "茄子河区",
  "value": "230904"
}, {
  "label": "勃利县",
  "value": "230921"
}], [{
  "label": "东安区",
  "value": "231002"
}, {
  "label": "阳明区",
  "value": "231003"
}, {
  "label": "爱民区",
  "value": "231004"
}, {
  "label": "西安区",
  "value": "231005"
}, {
  "label": "林口县",
  "value": "231025"
}, {
  "label": "牡丹江经济技术开发区",
  "value": "231071"
}, {
  "label": "绥芬河市",
  "value": "231081"
}, {
  "label": "海林市",
  "value": "231083"
}, {
  "label": "宁安市",
  "value": "231084"
}, {
  "label": "穆棱市",
  "value": "231085"
}, {
  "label": "东宁市",
  "value": "231086"
}], [{
  "label": "爱辉区",
  "value": "231102"
}, {
  "label": "嫩江县",
  "value": "231121"
}, {
  "label": "逊克县",
  "value": "231123"
}, {
  "label": "孙吴县",
  "value": "231124"
}, {
  "label": "北安市",
  "value": "231181"
}, {
  "label": "五大连池市",
  "value": "231182"
}], [{
  "label": "北林区",
  "value": "231202"
}, {
  "label": "望奎县",
  "value": "231221"
}, {
  "label": "兰西县",
  "value": "231222"
}, {
  "label": "青冈县",
  "value": "231223"
}, {
  "label": "庆安县",
  "value": "231224"
}, {
  "label": "明水县",
  "value": "231225"
}, {
  "label": "绥棱县",
  "value": "231226"
}, {
  "label": "安达市",
  "value": "231281"
}, {
  "label": "肇东市",
  "value": "231282"
}, {
  "label": "海伦市",
  "value": "231283"
}], [{
  "label": "加格达奇区",
  "value": "232701"
}, {
  "label": "松岭区",
  "value": "232702"
}, {
  "label": "新林区",
  "value": "232703"
}, {
  "label": "呼中区",
  "value": "232704"
}, {
  "label": "呼玛县",
  "value": "232721"
}, {
  "label": "塔河县",
  "value": "232722"
}, {
  "label": "漠河县",
  "value": "232723"
}]], [[{
  "label": "黄浦区",
  "value": "310101"
}, {
  "label": "徐汇区",
  "value": "310104"
}, {
  "label": "长宁区",
  "value": "310105"
}, {
  "label": "静安区",
  "value": "310106"
}, {
  "label": "普陀区",
  "value": "310107"
}, {
  "label": "虹口区",
  "value": "310109"
}, {
  "label": "杨浦区",
  "value": "310110"
}, {
  "label": "闵行区",
  "value": "310112"
}, {
  "label": "宝山区",
  "value": "310113"
}, {
  "label": "嘉定区",
  "value": "310114"
}, {
  "label": "浦东新区",
  "value": "310115"
}, {
  "label": "金山区",
  "value": "310116"
}, {
  "label": "松江区",
  "value": "310117"
}, {
  "label": "青浦区",
  "value": "310118"
}, {
  "label": "奉贤区",
  "value": "310120"
}, {
  "label": "崇明区",
  "value": "310151"
}]], [[{
  "label": "玄武区",
  "value": "320102"
}, {
  "label": "秦淮区",
  "value": "320104"
}, {
  "label": "建邺区",
  "value": "320105"
}, {
  "label": "鼓楼区",
  "value": "320106"
}, {
  "label": "浦口区",
  "value": "320111"
}, {
  "label": "栖霞区",
  "value": "320113"
}, {
  "label": "雨花台区",
  "value": "320114"
}, {
  "label": "江宁区",
  "value": "320115"
}, {
  "label": "六合区",
  "value": "320116"
}, {
  "label": "溧水区",
  "value": "320117"
}, {
  "label": "高淳区",
  "value": "320118"
}], [{
  "label": "锡山区",
  "value": "320205"
}, {
  "label": "惠山区",
  "value": "320206"
}, {
  "label": "滨湖区",
  "value": "320211"
}, {
  "label": "梁溪区",
  "value": "320213"
}, {
  "label": "新吴区",
  "value": "320214"
}, {
  "label": "江阴市",
  "value": "320281"
}, {
  "label": "宜兴市",
  "value": "320282"
}], [{
  "label": "鼓楼区",
  "value": "320302"
}, {
  "label": "云龙区",
  "value": "320303"
}, {
  "label": "贾汪区",
  "value": "320305"
}, {
  "label": "泉山区",
  "value": "320311"
}, {
  "label": "铜山区",
  "value": "320312"
}, {
  "label": "丰县",
  "value": "320321"
}, {
  "label": "沛县",
  "value": "320322"
}, {
  "label": "睢宁县",
  "value": "320324"
}, {
  "label": "徐州经济技术开发区",
  "value": "320371"
}, {
  "label": "新沂市",
  "value": "320381"
}, {
  "label": "邳州市",
  "value": "320382"
}], [{
  "label": "天宁区",
  "value": "320402"
}, {
  "label": "钟楼区",
  "value": "320404"
}, {
  "label": "新北区",
  "value": "320411"
}, {
  "label": "武进区",
  "value": "320412"
}, {
  "label": "金坛区",
  "value": "320413"
}, {
  "label": "溧阳市",
  "value": "320481"
}], [{
  "label": "虎丘区",
  "value": "320505"
}, {
  "label": "吴中区",
  "value": "320506"
}, {
  "label": "相城区",
  "value": "320507"
}, {
  "label": "姑苏区",
  "value": "320508"
}, {
  "label": "吴江区",
  "value": "320509"
}, {
  "label": "苏州工业园区",
  "value": "320571"
}, {
  "label": "常熟市",
  "value": "320581"
}, {
  "label": "张家港市",
  "value": "320582"
}, {
  "label": "昆山市",
  "value": "320583"
}, {
  "label": "太仓市",
  "value": "320585"
}], [{
  "label": "崇川区",
  "value": "320602"
}, {
  "label": "港闸区",
  "value": "320611"
}, {
  "label": "通州区",
  "value": "320612"
}, {
  "label": "海安县",
  "value": "320621"
}, {
  "label": "如东县",
  "value": "320623"
}, {
  "label": "南通经济技术开发区",
  "value": "320671"
}, {
  "label": "启东市",
  "value": "320681"
}, {
  "label": "如皋市",
  "value": "320682"
}, {
  "label": "海门市",
  "value": "320684"
}], [{
  "label": "连云区",
  "value": "320703"
}, {
  "label": "海州区",
  "value": "320706"
}, {
  "label": "赣榆区",
  "value": "320707"
}, {
  "label": "东海县",
  "value": "320722"
}, {
  "label": "灌云县",
  "value": "320723"
}, {
  "label": "灌南县",
  "value": "320724"
}, {
  "label": "连云港经济技术开发区",
  "value": "320771"
}, {
  "label": "连云港高新技术产业开发区",
  "value": "320772"
}], [{
  "label": "淮安区",
  "value": "320803"
}, {
  "label": "淮阴区",
  "value": "320804"
}, {
  "label": "清江浦区",
  "value": "320812"
}, {
  "label": "洪泽区",
  "value": "320813"
}, {
  "label": "涟水县",
  "value": "320826"
}, {
  "label": "盱眙县",
  "value": "320830"
}, {
  "label": "金湖县",
  "value": "320831"
}, {
  "label": "淮安经济技术开发区",
  "value": "320871"
}], [{
  "label": "亭湖区",
  "value": "320902"
}, {
  "label": "盐都区",
  "value": "320903"
}, {
  "label": "大丰区",
  "value": "320904"
}, {
  "label": "响水县",
  "value": "320921"
}, {
  "label": "滨海县",
  "value": "320922"
}, {
  "label": "阜宁县",
  "value": "320923"
}, {
  "label": "射阳县",
  "value": "320924"
}, {
  "label": "建湖县",
  "value": "320925"
}, {
  "label": "盐城经济技术开发区",
  "value": "320971"
}, {
  "label": "东台市",
  "value": "320981"
}], [{
  "label": "广陵区",
  "value": "321002"
}, {
  "label": "邗江区",
  "value": "321003"
}, {
  "label": "江都区",
  "value": "321012"
}, {
  "label": "宝应县",
  "value": "321023"
}, {
  "label": "扬州经济技术开发区",
  "value": "321071"
}, {
  "label": "仪征市",
  "value": "321081"
}, {
  "label": "高邮市",
  "value": "321084"
}], [{
  "label": "京口区",
  "value": "321102"
}, {
  "label": "润州区",
  "value": "321111"
}, {
  "label": "丹徒区",
  "value": "321112"
}, {
  "label": "镇江新区",
  "value": "321171"
}, {
  "label": "丹阳市",
  "value": "321181"
}, {
  "label": "扬中市",
  "value": "321182"
}, {
  "label": "句容市",
  "value": "321183"
}], [{
  "label": "海陵区",
  "value": "321202"
}, {
  "label": "高港区",
  "value": "321203"
}, {
  "label": "姜堰区",
  "value": "321204"
}, {
  "label": "泰州医药高新技术产业开发区",
  "value": "321271"
}, {
  "label": "兴化市",
  "value": "321281"
}, {
  "label": "靖江市",
  "value": "321282"
}, {
  "label": "泰兴市",
  "value": "321283"
}], [{
  "label": "宿城区",
  "value": "321302"
}, {
  "label": "宿豫区",
  "value": "321311"
}, {
  "label": "沭阳县",
  "value": "321322"
}, {
  "label": "泗阳县",
  "value": "321323"
}, {
  "label": "泗洪县",
  "value": "321324"
}, {
  "label": "宿迁经济技术开发区",
  "value": "321371"
}]], [[{
  "label": "上城区",
  "value": "330102"
}, {
  "label": "下城区",
  "value": "330103"
}, {
  "label": "江干区",
  "value": "330104"
}, {
  "label": "拱墅区",
  "value": "330105"
}, {
  "label": "西湖区",
  "value": "330106"
}, {
  "label": "滨江区",
  "value": "330108"
}, {
  "label": "萧山区",
  "value": "330109"
}, {
  "label": "余杭区",
  "value": "330110"
}, {
  "label": "富阳区",
  "value": "330111"
}, {
  "label": "临安区",
  "value": "330112"
}, {
  "label": "桐庐县",
  "value": "330122"
}, {
  "label": "淳安县",
  "value": "330127"
}, {
  "label": "建德市",
  "value": "330182"
}], [{
  "label": "海曙区",
  "value": "330203"
}, {
  "label": "江北区",
  "value": "330205"
}, {
  "label": "北仑区",
  "value": "330206"
}, {
  "label": "镇海区",
  "value": "330211"
}, {
  "label": "鄞州区",
  "value": "330212"
}, {
  "label": "奉化区",
  "value": "330213"
}, {
  "label": "象山县",
  "value": "330225"
}, {
  "label": "宁海县",
  "value": "330226"
}, {
  "label": "余姚市",
  "value": "330281"
}, {
  "label": "慈溪市",
  "value": "330282"
}], [{
  "label": "鹿城区",
  "value": "330302"
}, {
  "label": "龙湾区",
  "value": "330303"
}, {
  "label": "瓯海区",
  "value": "330304"
}, {
  "label": "洞头区",
  "value": "330305"
}, {
  "label": "永嘉县",
  "value": "330324"
}, {
  "label": "平阳县",
  "value": "330326"
}, {
  "label": "苍南县",
  "value": "330327"
}, {
  "label": "文成县",
  "value": "330328"
}, {
  "label": "泰顺县",
  "value": "330329"
}, {
  "label": "温州经济技术开发区",
  "value": "330371"
}, {
  "label": "瑞安市",
  "value": "330381"
}, {
  "label": "乐清市",
  "value": "330382"
}], [{
  "label": "南湖区",
  "value": "330402"
}, {
  "label": "秀洲区",
  "value": "330411"
}, {
  "label": "嘉善县",
  "value": "330421"
}, {
  "label": "海盐县",
  "value": "330424"
}, {
  "label": "海宁市",
  "value": "330481"
}, {
  "label": "平湖市",
  "value": "330482"
}, {
  "label": "桐乡市",
  "value": "330483"
}], [{
  "label": "吴兴区",
  "value": "330502"
}, {
  "label": "南浔区",
  "value": "330503"
}, {
  "label": "德清县",
  "value": "330521"
}, {
  "label": "长兴县",
  "value": "330522"
}, {
  "label": "安吉县",
  "value": "330523"
}], [{
  "label": "越城区",
  "value": "330602"
}, {
  "label": "柯桥区",
  "value": "330603"
}, {
  "label": "上虞区",
  "value": "330604"
}, {
  "label": "新昌县",
  "value": "330624"
}, {
  "label": "诸暨市",
  "value": "330681"
}, {
  "label": "嵊州市",
  "value": "330683"
}], [{
  "label": "婺城区",
  "value": "330702"
}, {
  "label": "金东区",
  "value": "330703"
}, {
  "label": "武义县",
  "value": "330723"
}, {
  "label": "浦江县",
  "value": "330726"
}, {
  "label": "磐安县",
  "value": "330727"
}, {
  "label": "兰溪市",
  "value": "330781"
}, {
  "label": "义乌市",
  "value": "330782"
}, {
  "label": "东阳市",
  "value": "330783"
}, {
  "label": "永康市",
  "value": "330784"
}], [{
  "label": "柯城区",
  "value": "330802"
}, {
  "label": "衢江区",
  "value": "330803"
}, {
  "label": "常山县",
  "value": "330822"
}, {
  "label": "开化县",
  "value": "330824"
}, {
  "label": "龙游县",
  "value": "330825"
}, {
  "label": "江山市",
  "value": "330881"
}], [{
  "label": "定海区",
  "value": "330902"
}, {
  "label": "普陀区",
  "value": "330903"
}, {
  "label": "岱山县",
  "value": "330921"
}, {
  "label": "嵊泗县",
  "value": "330922"
}], [{
  "label": "椒江区",
  "value": "331002"
}, {
  "label": "黄岩区",
  "value": "331003"
}, {
  "label": "路桥区",
  "value": "331004"
}, {
  "label": "三门县",
  "value": "331022"
}, {
  "label": "天台县",
  "value": "331023"
}, {
  "label": "仙居县",
  "value": "331024"
}, {
  "label": "温岭市",
  "value": "331081"
}, {
  "label": "临海市",
  "value": "331082"
}, {
  "label": "玉环市",
  "value": "331083"
}], [{
  "label": "莲都区",
  "value": "331102"
}, {
  "label": "青田县",
  "value": "331121"
}, {
  "label": "缙云县",
  "value": "331122"
}, {
  "label": "遂昌县",
  "value": "331123"
}, {
  "label": "松阳县",
  "value": "331124"
}, {
  "label": "云和县",
  "value": "331125"
}, {
  "label": "庆元县",
  "value": "331126"
}, {
  "label": "景宁畲族自治县",
  "value": "331127"
}, {
  "label": "龙泉市",
  "value": "331181"
}]], [[{
  "label": "瑶海区",
  "value": "340102"
}, {
  "label": "庐阳区",
  "value": "340103"
}, {
  "label": "蜀山区",
  "value": "340104"
}, {
  "label": "包河区",
  "value": "340111"
}, {
  "label": "长丰县",
  "value": "340121"
}, {
  "label": "肥东县",
  "value": "340122"
}, {
  "label": "肥西县",
  "value": "340123"
}, {
  "label": "庐江县",
  "value": "340124"
}, {
  "label": "合肥高新技术产业开发区",
  "value": "340171"
}, {
  "label": "合肥经济技术开发区",
  "value": "340172"
}, {
  "label": "合肥新站高新技术产业开发区",
  "value": "340173"
}, {
  "label": "巢湖市",
  "value": "340181"
}], [{
  "label": "镜湖区",
  "value": "340202"
}, {
  "label": "弋江区",
  "value": "340203"
}, {
  "label": "鸠江区",
  "value": "340207"
}, {
  "label": "三山区",
  "value": "340208"
}, {
  "label": "芜湖县",
  "value": "340221"
}, {
  "label": "繁昌县",
  "value": "340222"
}, {
  "label": "南陵县",
  "value": "340223"
}, {
  "label": "无为县",
  "value": "340225"
}, {
  "label": "芜湖经济技术开发区",
  "value": "340271"
}, {
  "label": "安徽芜湖长江大桥经济开发区",
  "value": "340272"
}], [{
  "label": "龙子湖区",
  "value": "340302"
}, {
  "label": "蚌山区",
  "value": "340303"
}, {
  "label": "禹会区",
  "value": "340304"
}, {
  "label": "淮上区",
  "value": "340311"
}, {
  "label": "怀远县",
  "value": "340321"
}, {
  "label": "五河县",
  "value": "340322"
}, {
  "label": "固镇县",
  "value": "340323"
}, {
  "label": "蚌埠市高新技术开发区",
  "value": "340371"
}, {
  "label": "蚌埠市经济开发区",
  "value": "340372"
}], [{
  "label": "大通区",
  "value": "340402"
}, {
  "label": "田家庵区",
  "value": "340403"
}, {
  "label": "谢家集区",
  "value": "340404"
}, {
  "label": "八公山区",
  "value": "340405"
}, {
  "label": "潘集区",
  "value": "340406"
}, {
  "label": "凤台县",
  "value": "340421"
}, {
  "label": "寿县",
  "value": "340422"
}], [{
  "label": "花山区",
  "value": "340503"
}, {
  "label": "雨山区",
  "value": "340504"
}, {
  "label": "博望区",
  "value": "340506"
}, {
  "label": "当涂县",
  "value": "340521"
}, {
  "label": "含山县",
  "value": "340522"
}, {
  "label": "和县",
  "value": "340523"
}], [{
  "label": "杜集区",
  "value": "340602"
}, {
  "label": "相山区",
  "value": "340603"
}, {
  "label": "烈山区",
  "value": "340604"
}, {
  "label": "濉溪县",
  "value": "340621"
}], [{
  "label": "铜官区",
  "value": "340705"
}, {
  "label": "义安区",
  "value": "340706"
}, {
  "label": "郊区",
  "value": "340711"
}, {
  "label": "枞阳县",
  "value": "340722"
}], [{
  "label": "迎江区",
  "value": "340802"
}, {
  "label": "大观区",
  "value": "340803"
}, {
  "label": "宜秀区",
  "value": "340811"
}, {
  "label": "怀宁县",
  "value": "340822"
}, {
  "label": "潜山县",
  "value": "340824"
}, {
  "label": "太湖县",
  "value": "340825"
}, {
  "label": "宿松县",
  "value": "340826"
}, {
  "label": "望江县",
  "value": "340827"
}, {
  "label": "岳西县",
  "value": "340828"
}, {
  "label": "安徽安庆经济开发区",
  "value": "340871"
}, {
  "label": "桐城市",
  "value": "340881"
}], [{
  "label": "屯溪区",
  "value": "341002"
}, {
  "label": "黄山区",
  "value": "341003"
}, {
  "label": "徽州区",
  "value": "341004"
}, {
  "label": "歙县",
  "value": "341021"
}, {
  "label": "休宁县",
  "value": "341022"
}, {
  "label": "黟县",
  "value": "341023"
}, {
  "label": "祁门县",
  "value": "341024"
}], [{
  "label": "琅琊区",
  "value": "341102"
}, {
  "label": "南谯区",
  "value": "341103"
}, {
  "label": "来安县",
  "value": "341122"
}, {
  "label": "全椒县",
  "value": "341124"
}, {
  "label": "定远县",
  "value": "341125"
}, {
  "label": "凤阳县",
  "value": "341126"
}, {
  "label": "苏滁现代产业园",
  "value": "341171"
}, {
  "label": "滁州经济技术开发区",
  "value": "341172"
}, {
  "label": "天长市",
  "value": "341181"
}, {
  "label": "明光市",
  "value": "341182"
}], [{
  "label": "颍州区",
  "value": "341202"
}, {
  "label": "颍东区",
  "value": "341203"
}, {
  "label": "颍泉区",
  "value": "341204"
}, {
  "label": "临泉县",
  "value": "341221"
}, {
  "label": "太和县",
  "value": "341222"
}, {
  "label": "阜南县",
  "value": "341225"
}, {
  "label": "颍上县",
  "value": "341226"
}, {
  "label": "阜阳合肥现代产业园区",
  "value": "341271"
}, {
  "label": "阜阳经济技术开发区",
  "value": "341272"
}, {
  "label": "界首市",
  "value": "341282"
}], [{
  "label": "埇桥区",
  "value": "341302"
}, {
  "label": "砀山县",
  "value": "341321"
}, {
  "label": "萧县",
  "value": "341322"
}, {
  "label": "灵璧县",
  "value": "341323"
}, {
  "label": "泗县",
  "value": "341324"
}, {
  "label": "宿州马鞍山现代产业园区",
  "value": "341371"
}, {
  "label": "宿州经济技术开发区",
  "value": "341372"
}], [{
  "label": "金安区",
  "value": "341502"
}, {
  "label": "裕安区",
  "value": "341503"
}, {
  "label": "叶集区",
  "value": "341504"
}, {
  "label": "霍邱县",
  "value": "341522"
}, {
  "label": "舒城县",
  "value": "341523"
}, {
  "label": "金寨县",
  "value": "341524"
}, {
  "label": "霍山县",
  "value": "341525"
}], [{
  "label": "谯城区",
  "value": "341602"
}, {
  "label": "涡阳县",
  "value": "341621"
}, {
  "label": "蒙城县",
  "value": "341622"
}, {
  "label": "利辛县",
  "value": "341623"
}], [{
  "label": "贵池区",
  "value": "341702"
}, {
  "label": "东至县",
  "value": "341721"
}, {
  "label": "石台县",
  "value": "341722"
}, {
  "label": "青阳县",
  "value": "341723"
}], [{
  "label": "宣州区",
  "value": "341802"
}, {
  "label": "郎溪县",
  "value": "341821"
}, {
  "label": "广德县",
  "value": "341822"
}, {
  "label": "泾县",
  "value": "341823"
}, {
  "label": "绩溪县",
  "value": "341824"
}, {
  "label": "旌德县",
  "value": "341825"
}, {
  "label": "宣城市经济开发区",
  "value": "341871"
}, {
  "label": "宁国市",
  "value": "341881"
}]], [[{
  "label": "鼓楼区",
  "value": "350102"
}, {
  "label": "台江区",
  "value": "350103"
}, {
  "label": "仓山区",
  "value": "350104"
}, {
  "label": "马尾区",
  "value": "350105"
}, {
  "label": "晋安区",
  "value": "350111"
}, {
  "label": "闽侯县",
  "value": "350121"
}, {
  "label": "连江县",
  "value": "350122"
}, {
  "label": "罗源县",
  "value": "350123"
}, {
  "label": "闽清县",
  "value": "350124"
}, {
  "label": "永泰县",
  "value": "350125"
}, {
  "label": "平潭县",
  "value": "350128"
}, {
  "label": "福清市",
  "value": "350181"
}, {
  "label": "长乐市",
  "value": "350182"
}], [{
  "label": "思明区",
  "value": "350203"
}, {
  "label": "海沧区",
  "value": "350205"
}, {
  "label": "湖里区",
  "value": "350206"
}, {
  "label": "集美区",
  "value": "350211"
}, {
  "label": "同安区",
  "value": "350212"
}, {
  "label": "翔安区",
  "value": "350213"
}], [{
  "label": "城厢区",
  "value": "350302"
}, {
  "label": "涵江区",
  "value": "350303"
}, {
  "label": "荔城区",
  "value": "350304"
}, {
  "label": "秀屿区",
  "value": "350305"
}, {
  "label": "仙游县",
  "value": "350322"
}], [{
  "label": "梅列区",
  "value": "350402"
}, {
  "label": "三元区",
  "value": "350403"
}, {
  "label": "明溪县",
  "value": "350421"
}, {
  "label": "清流县",
  "value": "350423"
}, {
  "label": "宁化县",
  "value": "350424"
}, {
  "label": "大田县",
  "value": "350425"
}, {
  "label": "尤溪县",
  "value": "350426"
}, {
  "label": "沙县",
  "value": "350427"
}, {
  "label": "将乐县",
  "value": "350428"
}, {
  "label": "泰宁县",
  "value": "350429"
}, {
  "label": "建宁县",
  "value": "350430"
}, {
  "label": "永安市",
  "value": "350481"
}], [{
  "label": "鲤城区",
  "value": "350502"
}, {
  "label": "丰泽区",
  "value": "350503"
}, {
  "label": "洛江区",
  "value": "350504"
}, {
  "label": "泉港区",
  "value": "350505"
}, {
  "label": "惠安县",
  "value": "350521"
}, {
  "label": "安溪县",
  "value": "350524"
}, {
  "label": "永春县",
  "value": "350525"
}, {
  "label": "德化县",
  "value": "350526"
}, {
  "label": "金门县",
  "value": "350527"
}, {
  "label": "石狮市",
  "value": "350581"
}, {
  "label": "晋江市",
  "value": "350582"
}, {
  "label": "南安市",
  "value": "350583"
}], [{
  "label": "芗城区",
  "value": "350602"
}, {
  "label": "龙文区",
  "value": "350603"
}, {
  "label": "云霄县",
  "value": "350622"
}, {
  "label": "漳浦县",
  "value": "350623"
}, {
  "label": "诏安县",
  "value": "350624"
}, {
  "label": "长泰县",
  "value": "350625"
}, {
  "label": "东山县",
  "value": "350626"
}, {
  "label": "南靖县",
  "value": "350627"
}, {
  "label": "平和县",
  "value": "350628"
}, {
  "label": "华安县",
  "value": "350629"
}, {
  "label": "龙海市",
  "value": "350681"
}], [{
  "label": "延平区",
  "value": "350702"
}, {
  "label": "建阳区",
  "value": "350703"
}, {
  "label": "顺昌县",
  "value": "350721"
}, {
  "label": "浦城县",
  "value": "350722"
}, {
  "label": "光泽县",
  "value": "350723"
}, {
  "label": "松溪县",
  "value": "350724"
}, {
  "label": "政和县",
  "value": "350725"
}, {
  "label": "邵武市",
  "value": "350781"
}, {
  "label": "武夷山市",
  "value": "350782"
}, {
  "label": "建瓯市",
  "value": "350783"
}], [{
  "label": "新罗区",
  "value": "350802"
}, {
  "label": "永定区",
  "value": "350803"
}, {
  "label": "长汀县",
  "value": "350821"
}, {
  "label": "上杭县",
  "value": "350823"
}, {
  "label": "武平县",
  "value": "350824"
}, {
  "label": "连城县",
  "value": "350825"
}, {
  "label": "漳平市",
  "value": "350881"
}], [{
  "label": "蕉城区",
  "value": "350902"
}, {
  "label": "霞浦县",
  "value": "350921"
}, {
  "label": "古田县",
  "value": "350922"
}, {
  "label": "屏南县",
  "value": "350923"
}, {
  "label": "寿宁县",
  "value": "350924"
}, {
  "label": "周宁县",
  "value": "350925"
}, {
  "label": "柘荣县",
  "value": "350926"
}, {
  "label": "福安市",
  "value": "350981"
}, {
  "label": "福鼎市",
  "value": "350982"
}]], [[{
  "label": "东湖区",
  "value": "360102"
}, {
  "label": "西湖区",
  "value": "360103"
}, {
  "label": "青云谱区",
  "value": "360104"
}, {
  "label": "湾里区",
  "value": "360105"
}, {
  "label": "青山湖区",
  "value": "360111"
}, {
  "label": "新建区",
  "value": "360112"
}, {
  "label": "南昌县",
  "value": "360121"
}, {
  "label": "安义县",
  "value": "360123"
}, {
  "label": "进贤县",
  "value": "360124"
}], [{
  "label": "昌江区",
  "value": "360202"
}, {
  "label": "珠山区",
  "value": "360203"
}, {
  "label": "浮梁县",
  "value": "360222"
}, {
  "label": "乐平市",
  "value": "360281"
}], [{
  "label": "安源区",
  "value": "360302"
}, {
  "label": "湘东区",
  "value": "360313"
}, {
  "label": "莲花县",
  "value": "360321"
}, {
  "label": "上栗县",
  "value": "360322"
}, {
  "label": "芦溪县",
  "value": "360323"
}], [{
  "label": "濂溪区",
  "value": "360402"
}, {
  "label": "浔阳区",
  "value": "360403"
}, {
  "label": "柴桑区",
  "value": "360404"
}, {
  "label": "武宁县",
  "value": "360423"
}, {
  "label": "修水县",
  "value": "360424"
}, {
  "label": "永修县",
  "value": "360425"
}, {
  "label": "德安县",
  "value": "360426"
}, {
  "label": "都昌县",
  "value": "360428"
}, {
  "label": "湖口县",
  "value": "360429"
}, {
  "label": "彭泽县",
  "value": "360430"
}, {
  "label": "瑞昌市",
  "value": "360481"
}, {
  "label": "共青城市",
  "value": "360482"
}, {
  "label": "庐山市",
  "value": "360483"
}], [{
  "label": "渝水区",
  "value": "360502"
}, {
  "label": "分宜县",
  "value": "360521"
}], [{
  "label": "月湖区",
  "value": "360602"
}, {
  "label": "余江县",
  "value": "360622"
}, {
  "label": "贵溪市",
  "value": "360681"
}], [{
  "label": "章贡区",
  "value": "360702"
}, {
  "label": "南康区",
  "value": "360703"
}, {
  "label": "赣县区",
  "value": "360704"
}, {
  "label": "信丰县",
  "value": "360722"
}, {
  "label": "大余县",
  "value": "360723"
}, {
  "label": "上犹县",
  "value": "360724"
}, {
  "label": "崇义县",
  "value": "360725"
}, {
  "label": "安远县",
  "value": "360726"
}, {
  "label": "龙南县",
  "value": "360727"
}, {
  "label": "定南县",
  "value": "360728"
}, {
  "label": "全南县",
  "value": "360729"
}, {
  "label": "宁都县",
  "value": "360730"
}, {
  "label": "于都县",
  "value": "360731"
}, {
  "label": "兴国县",
  "value": "360732"
}, {
  "label": "会昌县",
  "value": "360733"
}, {
  "label": "寻乌县",
  "value": "360734"
}, {
  "label": "石城县",
  "value": "360735"
}, {
  "label": "瑞金市",
  "value": "360781"
}], [{
  "label": "吉州区",
  "value": "360802"
}, {
  "label": "青原区",
  "value": "360803"
}, {
  "label": "吉安县",
  "value": "360821"
}, {
  "label": "吉水县",
  "value": "360822"
}, {
  "label": "峡江县",
  "value": "360823"
}, {
  "label": "新干县",
  "value": "360824"
}, {
  "label": "永丰县",
  "value": "360825"
}, {
  "label": "泰和县",
  "value": "360826"
}, {
  "label": "遂川县",
  "value": "360827"
}, {
  "label": "万安县",
  "value": "360828"
}, {
  "label": "安福县",
  "value": "360829"
}, {
  "label": "永新县",
  "value": "360830"
}, {
  "label": "井冈山市",
  "value": "360881"
}], [{
  "label": "袁州区",
  "value": "360902"
}, {
  "label": "奉新县",
  "value": "360921"
}, {
  "label": "万载县",
  "value": "360922"
}, {
  "label": "上高县",
  "value": "360923"
}, {
  "label": "宜丰县",
  "value": "360924"
}, {
  "label": "靖安县",
  "value": "360925"
}, {
  "label": "铜鼓县",
  "value": "360926"
}, {
  "label": "丰城市",
  "value": "360981"
}, {
  "label": "樟树市",
  "value": "360982"
}, {
  "label": "高安市",
  "value": "360983"
}], [{
  "label": "临川区",
  "value": "361002"
}, {
  "label": "东乡区",
  "value": "361003"
}, {
  "label": "南城县",
  "value": "361021"
}, {
  "label": "黎川县",
  "value": "361022"
}, {
  "label": "南丰县",
  "value": "361023"
}, {
  "label": "崇仁县",
  "value": "361024"
}, {
  "label": "乐安县",
  "value": "361025"
}, {
  "label": "宜黄县",
  "value": "361026"
}, {
  "label": "金溪县",
  "value": "361027"
}, {
  "label": "资溪县",
  "value": "361028"
}, {
  "label": "广昌县",
  "value": "361030"
}], [{
  "label": "信州区",
  "value": "361102"
}, {
  "label": "广丰区",
  "value": "361103"
}, {
  "label": "上饶县",
  "value": "361121"
}, {
  "label": "玉山县",
  "value": "361123"
}, {
  "label": "铅山县",
  "value": "361124"
}, {
  "label": "横峰县",
  "value": "361125"
}, {
  "label": "弋阳县",
  "value": "361126"
}, {
  "label": "余干县",
  "value": "361127"
}, {
  "label": "鄱阳县",
  "value": "361128"
}, {
  "label": "万年县",
  "value": "361129"
}, {
  "label": "婺源县",
  "value": "361130"
}, {
  "label": "德兴市",
  "value": "361181"
}]], [[{
  "label": "历下区",
  "value": "370102"
}, {
  "label": "市中区",
  "value": "370103"
}, {
  "label": "槐荫区",
  "value": "370104"
}, {
  "label": "天桥区",
  "value": "370105"
}, {
  "label": "历城区",
  "value": "370112"
}, {
  "label": "长清区",
  "value": "370113"
}, {
  "label": "章丘区",
  "value": "370114"
}, {
  "label": "平阴县",
  "value": "370124"
}, {
  "label": "济阳县",
  "value": "370125"
}, {
  "label": "商河县",
  "value": "370126"
}, {
  "label": "济南高新技术产业开发区",
  "value": "370171"
}], [{
  "label": "市南区",
  "value": "370202"
}, {
  "label": "市北区",
  "value": "370203"
}, {
  "label": "黄岛区",
  "value": "370211"
}, {
  "label": "崂山区",
  "value": "370212"
}, {
  "label": "李沧区",
  "value": "370213"
}, {
  "label": "城阳区",
  "value": "370214"
}, {
  "label": "即墨区",
  "value": "370215"
}, {
  "label": "青岛高新技术产业开发区",
  "value": "370271"
}, {
  "label": "胶州市",
  "value": "370281"
}, {
  "label": "平度市",
  "value": "370283"
}, {
  "label": "莱西市",
  "value": "370285"
}], [{
  "label": "淄川区",
  "value": "370302"
}, {
  "label": "张店区",
  "value": "370303"
}, {
  "label": "博山区",
  "value": "370304"
}, {
  "label": "临淄区",
  "value": "370305"
}, {
  "label": "周村区",
  "value": "370306"
}, {
  "label": "桓台县",
  "value": "370321"
}, {
  "label": "高青县",
  "value": "370322"
}, {
  "label": "沂源县",
  "value": "370323"
}], [{
  "label": "市中区",
  "value": "370402"
}, {
  "label": "薛城区",
  "value": "370403"
}, {
  "label": "峄城区",
  "value": "370404"
}, {
  "label": "台儿庄区",
  "value": "370405"
}, {
  "label": "山亭区",
  "value": "370406"
}, {
  "label": "滕州市",
  "value": "370481"
}], [{
  "label": "东营区",
  "value": "370502"
}, {
  "label": "河口区",
  "value": "370503"
}, {
  "label": "垦利区",
  "value": "370505"
}, {
  "label": "利津县",
  "value": "370522"
}, {
  "label": "广饶县",
  "value": "370523"
}, {
  "label": "东营经济技术开发区",
  "value": "370571"
}, {
  "label": "东营港经济开发区",
  "value": "370572"
}], [{
  "label": "芝罘区",
  "value": "370602"
}, {
  "label": "福山区",
  "value": "370611"
}, {
  "label": "牟平区",
  "value": "370612"
}, {
  "label": "莱山区",
  "value": "370613"
}, {
  "label": "长岛县",
  "value": "370634"
}, {
  "label": "烟台高新技术产业开发区",
  "value": "370671"
}, {
  "label": "烟台经济技术开发区",
  "value": "370672"
}, {
  "label": "龙口市",
  "value": "370681"
}, {
  "label": "莱阳市",
  "value": "370682"
}, {
  "label": "莱州市",
  "value": "370683"
}, {
  "label": "蓬莱市",
  "value": "370684"
}, {
  "label": "招远市",
  "value": "370685"
}, {
  "label": "栖霞市",
  "value": "370686"
}, {
  "label": "海阳市",
  "value": "370687"
}], [{
  "label": "潍城区",
  "value": "370702"
}, {
  "label": "寒亭区",
  "value": "370703"
}, {
  "label": "坊子区",
  "value": "370704"
}, {
  "label": "奎文区",
  "value": "370705"
}, {
  "label": "临朐县",
  "value": "370724"
}, {
  "label": "昌乐县",
  "value": "370725"
}, {
  "label": "潍坊滨海经济技术开发区",
  "value": "370772"
}, {
  "label": "青州市",
  "value": "370781"
}, {
  "label": "诸城市",
  "value": "370782"
}, {
  "label": "寿光市",
  "value": "370783"
}, {
  "label": "安丘市",
  "value": "370784"
}, {
  "label": "高密市",
  "value": "370785"
}, {
  "label": "昌邑市",
  "value": "370786"
}], [{
  "label": "任城区",
  "value": "370811"
}, {
  "label": "兖州区",
  "value": "370812"
}, {
  "label": "微山县",
  "value": "370826"
}, {
  "label": "鱼台县",
  "value": "370827"
}, {
  "label": "金乡县",
  "value": "370828"
}, {
  "label": "嘉祥县",
  "value": "370829"
}, {
  "label": "汶上县",
  "value": "370830"
}, {
  "label": "泗水县",
  "value": "370831"
}, {
  "label": "梁山县",
  "value": "370832"
}, {
  "label": "济宁高新技术产业开发区",
  "value": "370871"
}, {
  "label": "曲阜市",
  "value": "370881"
}, {
  "label": "邹城市",
  "value": "370883"
}], [{
  "label": "泰山区",
  "value": "370902"
}, {
  "label": "岱岳区",
  "value": "370911"
}, {
  "label": "宁阳县",
  "value": "370921"
}, {
  "label": "东平县",
  "value": "370923"
}, {
  "label": "新泰市",
  "value": "370982"
}, {
  "label": "肥城市",
  "value": "370983"
}], [{
  "label": "环翠区",
  "value": "371002"
}, {
  "label": "文登区",
  "value": "371003"
}, {
  "label": "威海火炬高技术产业开发区",
  "value": "371071"
}, {
  "label": "威海经济技术开发区",
  "value": "371072"
}, {
  "label": "威海临港经济技术开发区",
  "value": "371073"
}, {
  "label": "荣成市",
  "value": "371082"
}, {
  "label": "乳山市",
  "value": "371083"
}], [{
  "label": "东港区",
  "value": "371102"
}, {
  "label": "岚山区",
  "value": "371103"
}, {
  "label": "五莲县",
  "value": "371121"
}, {
  "label": "莒县",
  "value": "371122"
}, {
  "label": "日照经济技术开发区",
  "value": "371171"
}, {
  "label": "日照国际海洋城",
  "value": "371172"
}], [{
  "label": "莱城区",
  "value": "371202"
}, {
  "label": "钢城区",
  "value": "371203"
}], [{
  "label": "兰山区",
  "value": "371302"
}, {
  "label": "罗庄区",
  "value": "371311"
}, {
  "label": "河东区",
  "value": "371312"
}, {
  "label": "沂南县",
  "value": "371321"
}, {
  "label": "郯城县",
  "value": "371322"
}, {
  "label": "沂水县",
  "value": "371323"
}, {
  "label": "兰陵县",
  "value": "371324"
}, {
  "label": "费县",
  "value": "371325"
}, {
  "label": "平邑县",
  "value": "371326"
}, {
  "label": "莒南县",
  "value": "371327"
}, {
  "label": "蒙阴县",
  "value": "371328"
}, {
  "label": "临沭县",
  "value": "371329"
}, {
  "label": "临沂高新技术产业开发区",
  "value": "371371"
}, {
  "label": "临沂经济技术开发区",
  "value": "371372"
}, {
  "label": "临沂临港经济开发区",
  "value": "371373"
}], [{
  "label": "德城区",
  "value": "371402"
}, {
  "label": "陵城区",
  "value": "371403"
}, {
  "label": "宁津县",
  "value": "371422"
}, {
  "label": "庆云县",
  "value": "371423"
}, {
  "label": "临邑县",
  "value": "371424"
}, {
  "label": "齐河县",
  "value": "371425"
}, {
  "label": "平原县",
  "value": "371426"
}, {
  "label": "夏津县",
  "value": "371427"
}, {
  "label": "武城县",
  "value": "371428"
}, {
  "label": "德州经济技术开发区",
  "value": "371471"
}, {
  "label": "德州运河经济开发区",
  "value": "371472"
}, {
  "label": "乐陵市",
  "value": "371481"
}, {
  "label": "禹城市",
  "value": "371482"
}], [{
  "label": "东昌府区",
  "value": "371502"
}, {
  "label": "阳谷县",
  "value": "371521"
}, {
  "label": "莘县",
  "value": "371522"
}, {
  "label": "茌平县",
  "value": "371523"
}, {
  "label": "东阿县",
  "value": "371524"
}, {
  "label": "冠县",
  "value": "371525"
}, {
  "label": "高唐县",
  "value": "371526"
}, {
  "label": "临清市",
  "value": "371581"
}], [{
  "label": "滨城区",
  "value": "371602"
}, {
  "label": "沾化区",
  "value": "371603"
}, {
  "label": "惠民县",
  "value": "371621"
}, {
  "label": "阳信县",
  "value": "371622"
}, {
  "label": "无棣县",
  "value": "371623"
}, {
  "label": "博兴县",
  "value": "371625"
}, {
  "label": "邹平县",
  "value": "371626"
}], [{
  "label": "牡丹区",
  "value": "371702"
}, {
  "label": "定陶区",
  "value": "371703"
}, {
  "label": "曹县",
  "value": "371721"
}, {
  "label": "单县",
  "value": "371722"
}, {
  "label": "成武县",
  "value": "371723"
}, {
  "label": "巨野县",
  "value": "371724"
}, {
  "label": "郓城县",
  "value": "371725"
}, {
  "label": "鄄城县",
  "value": "371726"
}, {
  "label": "东明县",
  "value": "371728"
}, {
  "label": "菏泽经济技术开发区",
  "value": "371771"
}, {
  "label": "菏泽高新技术开发区",
  "value": "371772"
}]], [[{
  "label": "中原区",
  "value": "410102"
}, {
  "label": "二七区",
  "value": "410103"
}, {
  "label": "管城回族区",
  "value": "410104"
}, {
  "label": "金水区",
  "value": "410105"
}, {
  "label": "上街区",
  "value": "410106"
}, {
  "label": "惠济区",
  "value": "410108"
}, {
  "label": "中牟县",
  "value": "410122"
}, {
  "label": "郑州经济技术开发区",
  "value": "410171"
}, {
  "label": "郑州高新技术产业开发区",
  "value": "410172"
}, {
  "label": "郑州航空港经济综合实验区",
  "value": "410173"
}, {
  "label": "巩义市",
  "value": "410181"
}, {
  "label": "荥阳市",
  "value": "410182"
}, {
  "label": "新密市",
  "value": "410183"
}, {
  "label": "新郑市",
  "value": "410184"
}, {
  "label": "登封市",
  "value": "410185"
}], [{
  "label": "龙亭区",
  "value": "410202"
}, {
  "label": "顺河回族区",
  "value": "410203"
}, {
  "label": "鼓楼区",
  "value": "410204"
}, {
  "label": "禹王台区",
  "value": "410205"
}, {
  "label": "祥符区",
  "value": "410212"
}, {
  "label": "杞县",
  "value": "410221"
}, {
  "label": "通许县",
  "value": "410222"
}, {
  "label": "尉氏县",
  "value": "410223"
}, {
  "label": "兰考县",
  "value": "410225"
}], [{
  "label": "老城区",
  "value": "410302"
}, {
  "label": "西工区",
  "value": "410303"
}, {
  "label": "瀍河回族区",
  "value": "410304"
}, {
  "label": "涧西区",
  "value": "410305"
}, {
  "label": "吉利区",
  "value": "410306"
}, {
  "label": "洛龙区",
  "value": "410311"
}, {
  "label": "孟津县",
  "value": "410322"
}, {
  "label": "新安县",
  "value": "410323"
}, {
  "label": "栾川县",
  "value": "410324"
}, {
  "label": "嵩县",
  "value": "410325"
}, {
  "label": "汝阳县",
  "value": "410326"
}, {
  "label": "宜阳县",
  "value": "410327"
}, {
  "label": "洛宁县",
  "value": "410328"
}, {
  "label": "伊川县",
  "value": "410329"
}, {
  "label": "洛阳高新技术产业开发区",
  "value": "410371"
}, {
  "label": "偃师市",
  "value": "410381"
}], [{
  "label": "新华区",
  "value": "410402"
}, {
  "label": "卫东区",
  "value": "410403"
}, {
  "label": "石龙区",
  "value": "410404"
}, {
  "label": "湛河区",
  "value": "410411"
}, {
  "label": "宝丰县",
  "value": "410421"
}, {
  "label": "叶县",
  "value": "410422"
}, {
  "label": "鲁山县",
  "value": "410423"
}, {
  "label": "郏县",
  "value": "410425"
}, {
  "label": "平顶山高新技术产业开发区",
  "value": "410471"
}, {
  "label": "平顶山市新城区",
  "value": "410472"
}, {
  "label": "舞钢市",
  "value": "410481"
}, {
  "label": "汝州市",
  "value": "410482"
}], [{
  "label": "文峰区",
  "value": "410502"
}, {
  "label": "北关区",
  "value": "410503"
}, {
  "label": "殷都区",
  "value": "410505"
}, {
  "label": "龙安区",
  "value": "410506"
}, {
  "label": "安阳县",
  "value": "410522"
}, {
  "label": "汤阴县",
  "value": "410523"
}, {
  "label": "滑县",
  "value": "410526"
}, {
  "label": "内黄县",
  "value": "410527"
}, {
  "label": "安阳高新技术产业开发区",
  "value": "410571"
}, {
  "label": "林州市",
  "value": "410581"
}], [{
  "label": "鹤山区",
  "value": "410602"
}, {
  "label": "山城区",
  "value": "410603"
}, {
  "label": "淇滨区",
  "value": "410611"
}, {
  "label": "浚县",
  "value": "410621"
}, {
  "label": "淇县",
  "value": "410622"
}, {
  "label": "鹤壁经济技术开发区",
  "value": "410671"
}], [{
  "label": "红旗区",
  "value": "410702"
}, {
  "label": "卫滨区",
  "value": "410703"
}, {
  "label": "凤泉区",
  "value": "410704"
}, {
  "label": "牧野区",
  "value": "410711"
}, {
  "label": "新乡县",
  "value": "410721"
}, {
  "label": "获嘉县",
  "value": "410724"
}, {
  "label": "原阳县",
  "value": "410725"
}, {
  "label": "延津县",
  "value": "410726"
}, {
  "label": "封丘县",
  "value": "410727"
}, {
  "label": "长垣县",
  "value": "410728"
}, {
  "label": "新乡高新技术产业开发区",
  "value": "410771"
}, {
  "label": "新乡经济技术开发区",
  "value": "410772"
}, {
  "label": "新乡市平原城乡一体化示范区",
  "value": "410773"
}, {
  "label": "卫辉市",
  "value": "410781"
}, {
  "label": "辉县市",
  "value": "410782"
}], [{
  "label": "解放区",
  "value": "410802"
}, {
  "label": "中站区",
  "value": "410803"
}, {
  "label": "马村区",
  "value": "410804"
}, {
  "label": "山阳区",
  "value": "410811"
}, {
  "label": "修武县",
  "value": "410821"
}, {
  "label": "博爱县",
  "value": "410822"
}, {
  "label": "武陟县",
  "value": "410823"
}, {
  "label": "温县",
  "value": "410825"
}, {
  "label": "焦作城乡一体化示范区",
  "value": "410871"
}, {
  "label": "沁阳市",
  "value": "410882"
}, {
  "label": "孟州市",
  "value": "410883"
}], [{
  "label": "华龙区",
  "value": "410902"
}, {
  "label": "清丰县",
  "value": "410922"
}, {
  "label": "南乐县",
  "value": "410923"
}, {
  "label": "范县",
  "value": "410926"
}, {
  "label": "台前县",
  "value": "410927"
}, {
  "label": "濮阳县",
  "value": "410928"
}, {
  "label": "河南濮阳工业园区",
  "value": "410971"
}, {
  "label": "濮阳经济技术开发区",
  "value": "410972"
}], [{
  "label": "魏都区",
  "value": "411002"
}, {
  "label": "建安区",
  "value": "411003"
}, {
  "label": "鄢陵县",
  "value": "411024"
}, {
  "label": "襄城县",
  "value": "411025"
}, {
  "label": "许昌经济技术开发区",
  "value": "411071"
}, {
  "label": "禹州市",
  "value": "411081"
}, {
  "label": "长葛市",
  "value": "411082"
}], [{
  "label": "源汇区",
  "value": "411102"
}, {
  "label": "郾城区",
  "value": "411103"
}, {
  "label": "召陵区",
  "value": "411104"
}, {
  "label": "舞阳县",
  "value": "411121"
}, {
  "label": "临颍县",
  "value": "411122"
}, {
  "label": "漯河经济技术开发区",
  "value": "411171"
}], [{
  "label": "湖滨区",
  "value": "411202"
}, {
  "label": "陕州区",
  "value": "411203"
}, {
  "label": "渑池县",
  "value": "411221"
}, {
  "label": "卢氏县",
  "value": "411224"
}, {
  "label": "河南三门峡经济开发区",
  "value": "411271"
}, {
  "label": "义马市",
  "value": "411281"
}, {
  "label": "灵宝市",
  "value": "411282"
}], [{
  "label": "宛城区",
  "value": "411302"
}, {
  "label": "卧龙区",
  "value": "411303"
}, {
  "label": "南召县",
  "value": "411321"
}, {
  "label": "方城县",
  "value": "411322"
}, {
  "label": "西峡县",
  "value": "411323"
}, {
  "label": "镇平县",
  "value": "411324"
}, {
  "label": "内乡县",
  "value": "411325"
}, {
  "label": "淅川县",
  "value": "411326"
}, {
  "label": "社旗县",
  "value": "411327"
}, {
  "label": "唐河县",
  "value": "411328"
}, {
  "label": "新野县",
  "value": "411329"
}, {
  "label": "桐柏县",
  "value": "411330"
}, {
  "label": "南阳高新技术产业开发区",
  "value": "411371"
}, {
  "label": "南阳市城乡一体化示范区",
  "value": "411372"
}, {
  "label": "邓州市",
  "value": "411381"
}], [{
  "label": "梁园区",
  "value": "411402"
}, {
  "label": "睢阳区",
  "value": "411403"
}, {
  "label": "民权县",
  "value": "411421"
}, {
  "label": "睢县",
  "value": "411422"
}, {
  "label": "宁陵县",
  "value": "411423"
}, {
  "label": "柘城县",
  "value": "411424"
}, {
  "label": "虞城县",
  "value": "411425"
}, {
  "label": "夏邑县",
  "value": "411426"
}, {
  "label": "豫东综合物流产业聚集区",
  "value": "411471"
}, {
  "label": "河南商丘经济开发区",
  "value": "411472"
}, {
  "label": "永城市",
  "value": "411481"
}], [{
  "label": "浉河区",
  "value": "411502"
}, {
  "label": "平桥区",
  "value": "411503"
}, {
  "label": "罗山县",
  "value": "411521"
}, {
  "label": "光山县",
  "value": "411522"
}, {
  "label": "新县",
  "value": "411523"
}, {
  "label": "商城县",
  "value": "411524"
}, {
  "label": "固始县",
  "value": "411525"
}, {
  "label": "潢川县",
  "value": "411526"
}, {
  "label": "淮滨县",
  "value": "411527"
}, {
  "label": "息县",
  "value": "411528"
}, {
  "label": "信阳高新技术产业开发区",
  "value": "411571"
}], [{
  "label": "川汇区",
  "value": "411602"
}, {
  "label": "扶沟县",
  "value": "411621"
}, {
  "label": "西华县",
  "value": "411622"
}, {
  "label": "商水县",
  "value": "411623"
}, {
  "label": "沈丘县",
  "value": "411624"
}, {
  "label": "郸城县",
  "value": "411625"
}, {
  "label": "淮阳县",
  "value": "411626"
}, {
  "label": "太康县",
  "value": "411627"
}, {
  "label": "鹿邑县",
  "value": "411628"
}, {
  "label": "河南周口经济开发区",
  "value": "411671"
}, {
  "label": "项城市",
  "value": "411681"
}], [{
  "label": "驿城区",
  "value": "411702"
}, {
  "label": "西平县",
  "value": "411721"
}, {
  "label": "上蔡县",
  "value": "411722"
}, {
  "label": "平舆县",
  "value": "411723"
}, {
  "label": "正阳县",
  "value": "411724"
}, {
  "label": "确山县",
  "value": "411725"
}, {
  "label": "泌阳县",
  "value": "411726"
}, {
  "label": "汝南县",
  "value": "411727"
}, {
  "label": "遂平县",
  "value": "411728"
}, {
  "label": "新蔡县",
  "value": "411729"
}, {
  "label": "河南驻马店经济开发区",
  "value": "411771"
}], [{
  "label": "济源市",
  "value": "419001"
}]], [[{
  "label": "江岸区",
  "value": "420102"
}, {
  "label": "江汉区",
  "value": "420103"
}, {
  "label": "硚口区",
  "value": "420104"
}, {
  "label": "汉阳区",
  "value": "420105"
}, {
  "label": "武昌区",
  "value": "420106"
}, {
  "label": "青山区",
  "value": "420107"
}, {
  "label": "洪山区",
  "value": "420111"
}, {
  "label": "东西湖区",
  "value": "420112"
}, {
  "label": "汉南区",
  "value": "420113"
}, {
  "label": "蔡甸区",
  "value": "420114"
}, {
  "label": "江夏区",
  "value": "420115"
}, {
  "label": "黄陂区",
  "value": "420116"
}, {
  "label": "新洲区",
  "value": "420117"
}], [{
  "label": "黄石港区",
  "value": "420202"
}, {
  "label": "西塞山区",
  "value": "420203"
}, {
  "label": "下陆区",
  "value": "420204"
}, {
  "label": "铁山区",
  "value": "420205"
}, {
  "label": "阳新县",
  "value": "420222"
}, {
  "label": "大冶市",
  "value": "420281"
}], [{
  "label": "茅箭区",
  "value": "420302"
}, {
  "label": "张湾区",
  "value": "420303"
}, {
  "label": "郧阳区",
  "value": "420304"
}, {
  "label": "郧西县",
  "value": "420322"
}, {
  "label": "竹山县",
  "value": "420323"
}, {
  "label": "竹溪县",
  "value": "420324"
}, {
  "label": "房县",
  "value": "420325"
}, {
  "label": "丹江口市",
  "value": "420381"
}], [{
  "label": "西陵区",
  "value": "420502"
}, {
  "label": "伍家岗区",
  "value": "420503"
}, {
  "label": "点军区",
  "value": "420504"
}, {
  "label": "猇亭区",
  "value": "420505"
}, {
  "label": "夷陵区",
  "value": "420506"
}, {
  "label": "远安县",
  "value": "420525"
}, {
  "label": "兴山县",
  "value": "420526"
}, {
  "label": "秭归县",
  "value": "420527"
}, {
  "label": "长阳土家族自治县",
  "value": "420528"
}, {
  "label": "五峰土家族自治县",
  "value": "420529"
}, {
  "label": "宜都市",
  "value": "420581"
}, {
  "label": "当阳市",
  "value": "420582"
}, {
  "label": "枝江市",
  "value": "420583"
}], [{
  "label": "襄城区",
  "value": "420602"
}, {
  "label": "樊城区",
  "value": "420606"
}, {
  "label": "襄州区",
  "value": "420607"
}, {
  "label": "南漳县",
  "value": "420624"
}, {
  "label": "谷城县",
  "value": "420625"
}, {
  "label": "保康县",
  "value": "420626"
}, {
  "label": "老河口市",
  "value": "420682"
}, {
  "label": "枣阳市",
  "value": "420683"
}, {
  "label": "宜城市",
  "value": "420684"
}], [{
  "label": "梁子湖区",
  "value": "420702"
}, {
  "label": "华容区",
  "value": "420703"
}, {
  "label": "鄂城区",
  "value": "420704"
}], [{
  "label": "东宝区",
  "value": "420802"
}, {
  "label": "掇刀区",
  "value": "420804"
}, {
  "label": "京山县",
  "value": "420821"
}, {
  "label": "沙洋县",
  "value": "420822"
}, {
  "label": "钟祥市",
  "value": "420881"
}], [{
  "label": "孝南区",
  "value": "420902"
}, {
  "label": "孝昌县",
  "value": "420921"
}, {
  "label": "大悟县",
  "value": "420922"
}, {
  "label": "云梦县",
  "value": "420923"
}, {
  "label": "应城市",
  "value": "420981"
}, {
  "label": "安陆市",
  "value": "420982"
}, {
  "label": "汉川市",
  "value": "420984"
}], [{
  "label": "沙市区",
  "value": "421002"
}, {
  "label": "荆州区",
  "value": "421003"
}, {
  "label": "公安县",
  "value": "421022"
}, {
  "label": "监利县",
  "value": "421023"
}, {
  "label": "江陵县",
  "value": "421024"
}, {
  "label": "荆州经济技术开发区",
  "value": "421071"
}, {
  "label": "石首市",
  "value": "421081"
}, {
  "label": "洪湖市",
  "value": "421083"
}, {
  "label": "松滋市",
  "value": "421087"
}], [{
  "label": "黄州区",
  "value": "421102"
}, {
  "label": "团风县",
  "value": "421121"
}, {
  "label": "红安县",
  "value": "421122"
}, {
  "label": "罗田县",
  "value": "421123"
}, {
  "label": "英山县",
  "value": "421124"
}, {
  "label": "浠水县",
  "value": "421125"
}, {
  "label": "蕲春县",
  "value": "421126"
}, {
  "label": "黄梅县",
  "value": "421127"
}, {
  "label": "龙感湖管理区",
  "value": "421171"
}, {
  "label": "麻城市",
  "value": "421181"
}, {
  "label": "武穴市",
  "value": "421182"
}], [{
  "label": "咸安区",
  "value": "421202"
}, {
  "label": "嘉鱼县",
  "value": "421221"
}, {
  "label": "通城县",
  "value": "421222"
}, {
  "label": "崇阳县",
  "value": "421223"
}, {
  "label": "通山县",
  "value": "421224"
}, {
  "label": "赤壁市",
  "value": "421281"
}], [{
  "label": "曾都区",
  "value": "421303"
}, {
  "label": "随县",
  "value": "421321"
}, {
  "label": "广水市",
  "value": "421381"
}], [{
  "label": "恩施市",
  "value": "422801"
}, {
  "label": "利川市",
  "value": "422802"
}, {
  "label": "建始县",
  "value": "422822"
}, {
  "label": "巴东县",
  "value": "422823"
}, {
  "label": "宣恩县",
  "value": "422825"
}, {
  "label": "咸丰县",
  "value": "422826"
}, {
  "label": "来凤县",
  "value": "422827"
}, {
  "label": "鹤峰县",
  "value": "422828"
}], [{
  "label": "仙桃市",
  "value": "429004"
}, {
  "label": "潜江市",
  "value": "429005"
}, {
  "label": "天门市",
  "value": "429006"
}, {
  "label": "神农架林区",
  "value": "429021"
}]], [[{
  "label": "芙蓉区",
  "value": "430102"
}, {
  "label": "天心区",
  "value": "430103"
}, {
  "label": "岳麓区",
  "value": "430104"
}, {
  "label": "开福区",
  "value": "430105"
}, {
  "label": "雨花区",
  "value": "430111"
}, {
  "label": "望城区",
  "value": "430112"
}, {
  "label": "长沙县",
  "value": "430121"
}, {
  "label": "浏阳市",
  "value": "430181"
}, {
  "label": "宁乡市",
  "value": "430182"
}], [{
  "label": "荷塘区",
  "value": "430202"
}, {
  "label": "芦淞区",
  "value": "430203"
}, {
  "label": "石峰区",
  "value": "430204"
}, {
  "label": "天元区",
  "value": "430211"
}, {
  "label": "株洲县",
  "value": "430221"
}, {
  "label": "攸县",
  "value": "430223"
}, {
  "label": "茶陵县",
  "value": "430224"
}, {
  "label": "炎陵县",
  "value": "430225"
}, {
  "label": "云龙示范区",
  "value": "430271"
}, {
  "label": "醴陵市",
  "value": "430281"
}], [{
  "label": "雨湖区",
  "value": "430302"
}, {
  "label": "岳塘区",
  "value": "430304"
}, {
  "label": "湘潭县",
  "value": "430321"
}, {
  "label": "湖南湘潭高新技术产业园区",
  "value": "430371"
}, {
  "label": "湘潭昭山示范区",
  "value": "430372"
}, {
  "label": "湘潭九华示范区",
  "value": "430373"
}, {
  "label": "湘乡市",
  "value": "430381"
}, {
  "label": "韶山市",
  "value": "430382"
}], [{
  "label": "珠晖区",
  "value": "430405"
}, {
  "label": "雁峰区",
  "value": "430406"
}, {
  "label": "石鼓区",
  "value": "430407"
}, {
  "label": "蒸湘区",
  "value": "430408"
}, {
  "label": "南岳区",
  "value": "430412"
}, {
  "label": "衡阳县",
  "value": "430421"
}, {
  "label": "衡南县",
  "value": "430422"
}, {
  "label": "衡山县",
  "value": "430423"
}, {
  "label": "衡东县",
  "value": "430424"
}, {
  "label": "祁东县",
  "value": "430426"
}, {
  "label": "衡阳综合保税区",
  "value": "430471"
}, {
  "label": "湖南衡阳高新技术产业园区",
  "value": "430472"
}, {
  "label": "湖南衡阳松木经济开发区",
  "value": "430473"
}, {
  "label": "耒阳市",
  "value": "430481"
}, {
  "label": "常宁市",
  "value": "430482"
}], [{
  "label": "双清区",
  "value": "430502"
}, {
  "label": "大祥区",
  "value": "430503"
}, {
  "label": "北塔区",
  "value": "430511"
}, {
  "label": "邵东县",
  "value": "430521"
}, {
  "label": "新邵县",
  "value": "430522"
}, {
  "label": "邵阳县",
  "value": "430523"
}, {
  "label": "隆回县",
  "value": "430524"
}, {
  "label": "洞口县",
  "value": "430525"
}, {
  "label": "绥宁县",
  "value": "430527"
}, {
  "label": "新宁县",
  "value": "430528"
}, {
  "label": "城步苗族自治县",
  "value": "430529"
}, {
  "label": "武冈市",
  "value": "430581"
}], [{
  "label": "岳阳楼区",
  "value": "430602"
}, {
  "label": "云溪区",
  "value": "430603"
}, {
  "label": "君山区",
  "value": "430611"
}, {
  "label": "岳阳县",
  "value": "430621"
}, {
  "label": "华容县",
  "value": "430623"
}, {
  "label": "湘阴县",
  "value": "430624"
}, {
  "label": "平江县",
  "value": "430626"
}, {
  "label": "岳阳市屈原管理区",
  "value": "430671"
}, {
  "label": "汨罗市",
  "value": "430681"
}, {
  "label": "临湘市",
  "value": "430682"
}], [{
  "label": "武陵区",
  "value": "430702"
}, {
  "label": "鼎城区",
  "value": "430703"
}, {
  "label": "安乡县",
  "value": "430721"
}, {
  "label": "汉寿县",
  "value": "430722"
}, {
  "label": "澧县",
  "value": "430723"
}, {
  "label": "临澧县",
  "value": "430724"
}, {
  "label": "桃源县",
  "value": "430725"
}, {
  "label": "石门县",
  "value": "430726"
}, {
  "label": "常德市西洞庭管理区",
  "value": "430771"
}, {
  "label": "津市市",
  "value": "430781"
}], [{
  "label": "永定区",
  "value": "430802"
}, {
  "label": "武陵源区",
  "value": "430811"
}, {
  "label": "慈利县",
  "value": "430821"
}, {
  "label": "桑植县",
  "value": "430822"
}], [{
  "label": "资阳区",
  "value": "430902"
}, {
  "label": "赫山区",
  "value": "430903"
}, {
  "label": "南县",
  "value": "430921"
}, {
  "label": "桃江县",
  "value": "430922"
}, {
  "label": "安化县",
  "value": "430923"
}, {
  "label": "益阳市大通湖管理区",
  "value": "430971"
}, {
  "label": "湖南益阳高新技术产业园区",
  "value": "430972"
}, {
  "label": "沅江市",
  "value": "430981"
}], [{
  "label": "北湖区",
  "value": "431002"
}, {
  "label": "苏仙区",
  "value": "431003"
}, {
  "label": "桂阳县",
  "value": "431021"
}, {
  "label": "宜章县",
  "value": "431022"
}, {
  "label": "永兴县",
  "value": "431023"
}, {
  "label": "嘉禾县",
  "value": "431024"
}, {
  "label": "临武县",
  "value": "431025"
}, {
  "label": "汝城县",
  "value": "431026"
}, {
  "label": "桂东县",
  "value": "431027"
}, {
  "label": "安仁县",
  "value": "431028"
}, {
  "label": "资兴市",
  "value": "431081"
}], [{
  "label": "零陵区",
  "value": "431102"
}, {
  "label": "冷水滩区",
  "value": "431103"
}, {
  "label": "祁阳县",
  "value": "431121"
}, {
  "label": "东安县",
  "value": "431122"
}, {
  "label": "双牌县",
  "value": "431123"
}, {
  "label": "道县",
  "value": "431124"
}, {
  "label": "江永县",
  "value": "431125"
}, {
  "label": "宁远县",
  "value": "431126"
}, {
  "label": "蓝山县",
  "value": "431127"
}, {
  "label": "新田县",
  "value": "431128"
}, {
  "label": "江华瑶族自治县",
  "value": "431129"
}, {
  "label": "永州经济技术开发区",
  "value": "431171"
}, {
  "label": "永州市金洞管理区",
  "value": "431172"
}, {
  "label": "永州市回龙圩管理区",
  "value": "431173"
}], [{
  "label": "鹤城区",
  "value": "431202"
}, {
  "label": "中方县",
  "value": "431221"
}, {
  "label": "沅陵县",
  "value": "431222"
}, {
  "label": "辰溪县",
  "value": "431223"
}, {
  "label": "溆浦县",
  "value": "431224"
}, {
  "label": "会同县",
  "value": "431225"
}, {
  "label": "麻阳苗族自治县",
  "value": "431226"
}, {
  "label": "新晃侗族自治县",
  "value": "431227"
}, {
  "label": "芷江侗族自治县",
  "value": "431228"
}, {
  "label": "靖州苗族侗族自治县",
  "value": "431229"
}, {
  "label": "通道侗族自治县",
  "value": "431230"
}, {
  "label": "怀化市洪江管理区",
  "value": "431271"
}, {
  "label": "洪江市",
  "value": "431281"
}], [{
  "label": "娄星区",
  "value": "431302"
}, {
  "label": "双峰县",
  "value": "431321"
}, {
  "label": "新化县",
  "value": "431322"
}, {
  "label": "冷水江市",
  "value": "431381"
}, {
  "label": "涟源市",
  "value": "431382"
}], [{
  "label": "吉首市",
  "value": "433101"
}, {
  "label": "泸溪县",
  "value": "433122"
}, {
  "label": "凤凰县",
  "value": "433123"
}, {
  "label": "花垣县",
  "value": "433124"
}, {
  "label": "保靖县",
  "value": "433125"
}, {
  "label": "古丈县",
  "value": "433126"
}, {
  "label": "永顺县",
  "value": "433127"
}, {
  "label": "龙山县",
  "value": "433130"
}, {
  "label": "湖南吉首经济开发区",
  "value": "433172"
}, {
  "label": "湖南永顺经济开发区",
  "value": "433173"
}]], [[{
  "label": "荔湾区",
  "value": "440103"
}, {
  "label": "越秀区",
  "value": "440104"
}, {
  "label": "海珠区",
  "value": "440105"
}, {
  "label": "天河区",
  "value": "440106"
}, {
  "label": "白云区",
  "value": "440111"
}, {
  "label": "黄埔区",
  "value": "440112"
}, {
  "label": "番禺区",
  "value": "440113"
}, {
  "label": "花都区",
  "value": "440114"
}, {
  "label": "南沙区",
  "value": "440115"
}, {
  "label": "从化区",
  "value": "440117"
}, {
  "label": "增城区",
  "value": "440118"
}], [{
  "label": "武江区",
  "value": "440203"
}, {
  "label": "浈江区",
  "value": "440204"
}, {
  "label": "曲江区",
  "value": "440205"
}, {
  "label": "始兴县",
  "value": "440222"
}, {
  "label": "仁化县",
  "value": "440224"
}, {
  "label": "翁源县",
  "value": "440229"
}, {
  "label": "乳源瑶族自治县",
  "value": "440232"
}, {
  "label": "新丰县",
  "value": "440233"
}, {
  "label": "乐昌市",
  "value": "440281"
}, {
  "label": "南雄市",
  "value": "440282"
}], [{
  "label": "罗湖区",
  "value": "440303"
}, {
  "label": "福田区",
  "value": "440304"
}, {
  "label": "南山区",
  "value": "440305"
}, {
  "label": "宝安区",
  "value": "440306"
}, {
  "label": "龙岗区",
  "value": "440307"
}, {
  "label": "盐田区",
  "value": "440308"
}, {
  "label": "龙华区",
  "value": "440309"
}, {
  "label": "坪山区",
  "value": "440310"
}], [{
  "label": "香洲区",
  "value": "440402"
}, {
  "label": "斗门区",
  "value": "440403"
}, {
  "label": "金湾区",
  "value": "440404"
}], [{
  "label": "龙湖区",
  "value": "440507"
}, {
  "label": "金平区",
  "value": "440511"
}, {
  "label": "濠江区",
  "value": "440512"
}, {
  "label": "潮阳区",
  "value": "440513"
}, {
  "label": "潮南区",
  "value": "440514"
}, {
  "label": "澄海区",
  "value": "440515"
}, {
  "label": "南澳县",
  "value": "440523"
}], [{
  "label": "禅城区",
  "value": "440604"
}, {
  "label": "南海区",
  "value": "440605"
}, {
  "label": "顺德区",
  "value": "440606"
}, {
  "label": "三水区",
  "value": "440607"
}, {
  "label": "高明区",
  "value": "440608"
}], [{
  "label": "蓬江区",
  "value": "440703"
}, {
  "label": "江海区",
  "value": "440704"
}, {
  "label": "新会区",
  "value": "440705"
}, {
  "label": "台山市",
  "value": "440781"
}, {
  "label": "开平市",
  "value": "440783"
}, {
  "label": "鹤山市",
  "value": "440784"
}, {
  "label": "恩平市",
  "value": "440785"
}], [{
  "label": "赤坎区",
  "value": "440802"
}, {
  "label": "霞山区",
  "value": "440803"
}, {
  "label": "坡头区",
  "value": "440804"
}, {
  "label": "麻章区",
  "value": "440811"
}, {
  "label": "遂溪县",
  "value": "440823"
}, {
  "label": "徐闻县",
  "value": "440825"
}, {
  "label": "廉江市",
  "value": "440881"
}, {
  "label": "雷州市",
  "value": "440882"
}, {
  "label": "吴川市",
  "value": "440883"
}], [{
  "label": "茂南区",
  "value": "440902"
}, {
  "label": "电白区",
  "value": "440904"
}, {
  "label": "高州市",
  "value": "440981"
}, {
  "label": "化州市",
  "value": "440982"
}, {
  "label": "信宜市",
  "value": "440983"
}], [{
  "label": "端州区",
  "value": "441202"
}, {
  "label": "鼎湖区",
  "value": "441203"
}, {
  "label": "高要区",
  "value": "441204"
}, {
  "label": "广宁县",
  "value": "441223"
}, {
  "label": "怀集县",
  "value": "441224"
}, {
  "label": "封开县",
  "value": "441225"
}, {
  "label": "德庆县",
  "value": "441226"
}, {
  "label": "四会市",
  "value": "441284"
}], [{
  "label": "惠城区",
  "value": "441302"
}, {
  "label": "惠阳区",
  "value": "441303"
}, {
  "label": "博罗县",
  "value": "441322"
}, {
  "label": "惠东县",
  "value": "441323"
}, {
  "label": "龙门县",
  "value": "441324"
}], [{
  "label": "梅江区",
  "value": "441402"
}, {
  "label": "梅县区",
  "value": "441403"
}, {
  "label": "大埔县",
  "value": "441422"
}, {
  "label": "丰顺县",
  "value": "441423"
}, {
  "label": "五华县",
  "value": "441424"
}, {
  "label": "平远县",
  "value": "441426"
}, {
  "label": "蕉岭县",
  "value": "441427"
}, {
  "label": "兴宁市",
  "value": "441481"
}], [{
  "label": "城区",
  "value": "441502"
}, {
  "label": "海丰县",
  "value": "441521"
}, {
  "label": "陆河县",
  "value": "441523"
}, {
  "label": "陆丰市",
  "value": "441581"
}], [{
  "label": "源城区",
  "value": "441602"
}, {
  "label": "紫金县",
  "value": "441621"
}, {
  "label": "龙川县",
  "value": "441622"
}, {
  "label": "连平县",
  "value": "441623"
}, {
  "label": "和平县",
  "value": "441624"
}, {
  "label": "东源县",
  "value": "441625"
}], [{
  "label": "江城区",
  "value": "441702"
}, {
  "label": "阳东区",
  "value": "441704"
}, {
  "label": "阳西县",
  "value": "441721"
}, {
  "label": "阳春市",
  "value": "441781"
}], [{
  "label": "清城区",
  "value": "441802"
}, {
  "label": "清新区",
  "value": "441803"
}, {
  "label": "佛冈县",
  "value": "441821"
}, {
  "label": "阳山县",
  "value": "441823"
}, {
  "label": "连山壮族瑶族自治县",
  "value": "441825"
}, {
  "label": "连南瑶族自治县",
  "value": "441826"
}, {
  "label": "英德市",
  "value": "441881"
}, {
  "label": "连州市",
  "value": "441882"
}], [{
  "label": "东莞市",
  "value": "441900"
}], [{
  "label": "中山市",
  "value": "442000"
}], [{
  "label": "湘桥区",
  "value": "445102"
}, {
  "label": "潮安区",
  "value": "445103"
}, {
  "label": "饶平县",
  "value": "445122"
}], [{
  "label": "榕城区",
  "value": "445202"
}, {
  "label": "揭东区",
  "value": "445203"
}, {
  "label": "揭西县",
  "value": "445222"
}, {
  "label": "惠来县",
  "value": "445224"
}, {
  "label": "普宁市",
  "value": "445281"
}], [{
  "label": "云城区",
  "value": "445302"
}, {
  "label": "云安区",
  "value": "445303"
}, {
  "label": "新兴县",
  "value": "445321"
}, {
  "label": "郁南县",
  "value": "445322"
}, {
  "label": "罗定市",
  "value": "445381"
}]], [[{
  "label": "兴宁区",
  "value": "450102"
}, {
  "label": "青秀区",
  "value": "450103"
}, {
  "label": "江南区",
  "value": "450105"
}, {
  "label": "西乡塘区",
  "value": "450107"
}, {
  "label": "良庆区",
  "value": "450108"
}, {
  "label": "邕宁区",
  "value": "450109"
}, {
  "label": "武鸣区",
  "value": "450110"
}, {
  "label": "隆安县",
  "value": "450123"
}, {
  "label": "马山县",
  "value": "450124"
}, {
  "label": "上林县",
  "value": "450125"
}, {
  "label": "宾阳县",
  "value": "450126"
}, {
  "label": "横县",
  "value": "450127"
}], [{
  "label": "城中区",
  "value": "450202"
}, {
  "label": "鱼峰区",
  "value": "450203"
}, {
  "label": "柳南区",
  "value": "450204"
}, {
  "label": "柳北区",
  "value": "450205"
}, {
  "label": "柳江区",
  "value": "450206"
}, {
  "label": "柳城县",
  "value": "450222"
}, {
  "label": "鹿寨县",
  "value": "450223"
}, {
  "label": "融安县",
  "value": "450224"
}, {
  "label": "融水苗族自治县",
  "value": "450225"
}, {
  "label": "三江侗族自治县",
  "value": "450226"
}], [{
  "label": "秀峰区",
  "value": "450302"
}, {
  "label": "叠彩区",
  "value": "450303"
}, {
  "label": "象山区",
  "value": "450304"
}, {
  "label": "七星区",
  "value": "450305"
}, {
  "label": "雁山区",
  "value": "450311"
}, {
  "label": "临桂区",
  "value": "450312"
}, {
  "label": "阳朔县",
  "value": "450321"
}, {
  "label": "灵川县",
  "value": "450323"
}, {
  "label": "全州县",
  "value": "450324"
}, {
  "label": "兴安县",
  "value": "450325"
}, {
  "label": "永福县",
  "value": "450326"
}, {
  "label": "灌阳县",
  "value": "450327"
}, {
  "label": "龙胜各族自治县",
  "value": "450328"
}, {
  "label": "资源县",
  "value": "450329"
}, {
  "label": "平乐县",
  "value": "450330"
}, {
  "label": "荔浦县",
  "value": "450331"
}, {
  "label": "恭城瑶族自治县",
  "value": "450332"
}], [{
  "label": "万秀区",
  "value": "450403"
}, {
  "label": "长洲区",
  "value": "450405"
}, {
  "label": "龙圩区",
  "value": "450406"
}, {
  "label": "苍梧县",
  "value": "450421"
}, {
  "label": "藤县",
  "value": "450422"
}, {
  "label": "蒙山县",
  "value": "450423"
}, {
  "label": "岑溪市",
  "value": "450481"
}], [{
  "label": "海城区",
  "value": "450502"
}, {
  "label": "银海区",
  "value": "450503"
}, {
  "label": "铁山港区",
  "value": "450512"
}, {
  "label": "合浦县",
  "value": "450521"
}], [{
  "label": "港口区",
  "value": "450602"
}, {
  "label": "防城区",
  "value": "450603"
}, {
  "label": "上思县",
  "value": "450621"
}, {
  "label": "东兴市",
  "value": "450681"
}], [{
  "label": "钦南区",
  "value": "450702"
}, {
  "label": "钦北区",
  "value": "450703"
}, {
  "label": "灵山县",
  "value": "450721"
}, {
  "label": "浦北县",
  "value": "450722"
}], [{
  "label": "港北区",
  "value": "450802"
}, {
  "label": "港南区",
  "value": "450803"
}, {
  "label": "覃塘区",
  "value": "450804"
}, {
  "label": "平南县",
  "value": "450821"
}, {
  "label": "桂平市",
  "value": "450881"
}], [{
  "label": "玉州区",
  "value": "450902"
}, {
  "label": "福绵区",
  "value": "450903"
}, {
  "label": "容县",
  "value": "450921"
}, {
  "label": "陆川县",
  "value": "450922"
}, {
  "label": "博白县",
  "value": "450923"
}, {
  "label": "兴业县",
  "value": "450924"
}, {
  "label": "北流市",
  "value": "450981"
}], [{
  "label": "右江区",
  "value": "451002"
}, {
  "label": "田阳县",
  "value": "451021"
}, {
  "label": "田东县",
  "value": "451022"
}, {
  "label": "平果县",
  "value": "451023"
}, {
  "label": "德保县",
  "value": "451024"
}, {
  "label": "那坡县",
  "value": "451026"
}, {
  "label": "凌云县",
  "value": "451027"
}, {
  "label": "乐业县",
  "value": "451028"
}, {
  "label": "田林县",
  "value": "451029"
}, {
  "label": "西林县",
  "value": "451030"
}, {
  "label": "隆林各族自治县",
  "value": "451031"
}, {
  "label": "靖西市",
  "value": "451081"
}], [{
  "label": "八步区",
  "value": "451102"
}, {
  "label": "平桂区",
  "value": "451103"
}, {
  "label": "昭平县",
  "value": "451121"
}, {
  "label": "钟山县",
  "value": "451122"
}, {
  "label": "富川瑶族自治县",
  "value": "451123"
}], [{
  "label": "金城江区",
  "value": "451202"
}, {
  "label": "宜州区",
  "value": "451203"
}, {
  "label": "南丹县",
  "value": "451221"
}, {
  "label": "天峨县",
  "value": "451222"
}, {
  "label": "凤山县",
  "value": "451223"
}, {
  "label": "东兰县",
  "value": "451224"
}, {
  "label": "罗城仫佬族自治县",
  "value": "451225"
}, {
  "label": "环江毛南族自治县",
  "value": "451226"
}, {
  "label": "巴马瑶族自治县",
  "value": "451227"
}, {
  "label": "都安瑶族自治县",
  "value": "451228"
}, {
  "label": "大化瑶族自治县",
  "value": "451229"
}], [{
  "label": "兴宾区",
  "value": "451302"
}, {
  "label": "忻城县",
  "value": "451321"
}, {
  "label": "象州县",
  "value": "451322"
}, {
  "label": "武宣县",
  "value": "451323"
}, {
  "label": "金秀瑶族自治县",
  "value": "451324"
}, {
  "label": "合山市",
  "value": "451381"
}], [{
  "label": "江州区",
  "value": "451402"
}, {
  "label": "扶绥县",
  "value": "451421"
}, {
  "label": "宁明县",
  "value": "451422"
}, {
  "label": "龙州县",
  "value": "451423"
}, {
  "label": "大新县",
  "value": "451424"
}, {
  "label": "天等县",
  "value": "451425"
}, {
  "label": "凭祥市",
  "value": "451481"
}]], [[{
  "label": "秀英区",
  "value": "460105"
}, {
  "label": "龙华区",
  "value": "460106"
}, {
  "label": "琼山区",
  "value": "460107"
}, {
  "label": "美兰区",
  "value": "460108"
}], [{
  "label": "海棠区",
  "value": "460202"
}, {
  "label": "吉阳区",
  "value": "460203"
}, {
  "label": "天涯区",
  "value": "460204"
}, {
  "label": "崖州区",
  "value": "460205"
}], [{
  "label": "西沙群岛",
  "value": "460321"
}, {
  "label": "南沙群岛",
  "value": "460322"
}, {
  "label": "中沙群岛的岛礁及其海域",
  "value": "460323"
}], [{
  "label": "儋州市",
  "value": "460400"
}], [{
  "label": "五指山市",
  "value": "469001"
}, {
  "label": "琼海市",
  "value": "469002"
}, {
  "label": "文昌市",
  "value": "469005"
}, {
  "label": "万宁市",
  "value": "469006"
}, {
  "label": "东方市",
  "value": "469007"
}, {
  "label": "定安县",
  "value": "469021"
}, {
  "label": "屯昌县",
  "value": "469022"
}, {
  "label": "澄迈县",
  "value": "469023"
}, {
  "label": "临高县",
  "value": "469024"
}, {
  "label": "白沙黎族自治县",
  "value": "469025"
}, {
  "label": "昌江黎族自治县",
  "value": "469026"
}, {
  "label": "乐东黎族自治县",
  "value": "469027"
}, {
  "label": "陵水黎族自治县",
  "value": "469028"
}, {
  "label": "保亭黎族苗族自治县",
  "value": "469029"
}, {
  "label": "琼中黎族苗族自治县",
  "value": "469030"
}]], [[{
  "label": "万州区",
  "value": "500101"
}, {
  "label": "涪陵区",
  "value": "500102"
}, {
  "label": "渝中区",
  "value": "500103"
}, {
  "label": "大渡口区",
  "value": "500104"
}, {
  "label": "江北区",
  "value": "500105"
}, {
  "label": "沙坪坝区",
  "value": "500106"
}, {
  "label": "九龙坡区",
  "value": "500107"
}, {
  "label": "南岸区",
  "value": "500108"
}, {
  "label": "北碚区",
  "value": "500109"
}, {
  "label": "綦江区",
  "value": "500110"
}, {
  "label": "大足区",
  "value": "500111"
}, {
  "label": "渝北区",
  "value": "500112"
}, {
  "label": "巴南区",
  "value": "500113"
}, {
  "label": "黔江区",
  "value": "500114"
}, {
  "label": "长寿区",
  "value": "500115"
}, {
  "label": "江津区",
  "value": "500116"
}, {
  "label": "合川区",
  "value": "500117"
}, {
  "label": "永川区",
  "value": "500118"
}, {
  "label": "南川区",
  "value": "500119"
}, {
  "label": "璧山区",
  "value": "500120"
}, {
  "label": "铜梁区",
  "value": "500151"
}, {
  "label": "潼南区",
  "value": "500152"
}, {
  "label": "荣昌区",
  "value": "500153"
}, {
  "label": "开州区",
  "value": "500154"
}, {
  "label": "梁平区",
  "value": "500155"
}, {
  "label": "武隆区",
  "value": "500156"
}], [{
  "label": "城口县",
  "value": "500229"
}, {
  "label": "丰都县",
  "value": "500230"
}, {
  "label": "垫江县",
  "value": "500231"
}, {
  "label": "忠县",
  "value": "500233"
}, {
  "label": "云阳县",
  "value": "500235"
}, {
  "label": "奉节县",
  "value": "500236"
}, {
  "label": "巫山县",
  "value": "500237"
}, {
  "label": "巫溪县",
  "value": "500238"
}, {
  "label": "石柱土家族自治县",
  "value": "500240"
}, {
  "label": "秀山土家族苗族自治县",
  "value": "500241"
}, {
  "label": "酉阳土家族苗族自治县",
  "value": "500242"
}, {
  "label": "彭水苗族土家族自治县",
  "value": "500243"
}]], [[{
  "label": "锦江区",
  "value": "510104"
}, {
  "label": "青羊区",
  "value": "510105"
}, {
  "label": "金牛区",
  "value": "510106"
}, {
  "label": "武侯区",
  "value": "510107"
}, {
  "label": "成华区",
  "value": "510108"
}, {
  "label": "龙泉驿区",
  "value": "510112"
}, {
  "label": "青白江区",
  "value": "510113"
}, {
  "label": "新都区",
  "value": "510114"
}, {
  "label": "温江区",
  "value": "510115"
}, {
  "label": "双流区",
  "value": "510116"
}, {
  "label": "郫都区",
  "value": "510117"
}, {
  "label": "金堂县",
  "value": "510121"
}, {
  "label": "大邑县",
  "value": "510129"
}, {
  "label": "蒲江县",
  "value": "510131"
}, {
  "label": "新津县",
  "value": "510132"
}, {
  "label": "都江堰市",
  "value": "510181"
}, {
  "label": "彭州市",
  "value": "510182"
}, {
  "label": "邛崃市",
  "value": "510183"
}, {
  "label": "崇州市",
  "value": "510184"
}, {
  "label": "简阳市",
  "value": "510185"
}], [{
  "label": "自流井区",
  "value": "510302"
}, {
  "label": "贡井区",
  "value": "510303"
}, {
  "label": "大安区",
  "value": "510304"
}, {
  "label": "沿滩区",
  "value": "510311"
}, {
  "label": "荣县",
  "value": "510321"
}, {
  "label": "富顺县",
  "value": "510322"
}], [{
  "label": "东区",
  "value": "510402"
}, {
  "label": "西区",
  "value": "510403"
}, {
  "label": "仁和区",
  "value": "510411"
}, {
  "label": "米易县",
  "value": "510421"
}, {
  "label": "盐边县",
  "value": "510422"
}], [{
  "label": "江阳区",
  "value": "510502"
}, {
  "label": "纳溪区",
  "value": "510503"
}, {
  "label": "龙马潭区",
  "value": "510504"
}, {
  "label": "泸县",
  "value": "510521"
}, {
  "label": "合江县",
  "value": "510522"
}, {
  "label": "叙永县",
  "value": "510524"
}, {
  "label": "古蔺县",
  "value": "510525"
}], [{
  "label": "旌阳区",
  "value": "510603"
}, {
  "label": "罗江区",
  "value": "510604"
}, {
  "label": "中江县",
  "value": "510623"
}, {
  "label": "广汉市",
  "value": "510681"
}, {
  "label": "什邡市",
  "value": "510682"
}, {
  "label": "绵竹市",
  "value": "510683"
}], [{
  "label": "涪城区",
  "value": "510703"
}, {
  "label": "游仙区",
  "value": "510704"
}, {
  "label": "安州区",
  "value": "510705"
}, {
  "label": "三台县",
  "value": "510722"
}, {
  "label": "盐亭县",
  "value": "510723"
}, {
  "label": "梓潼县",
  "value": "510725"
}, {
  "label": "北川羌族自治县",
  "value": "510726"
}, {
  "label": "平武县",
  "value": "510727"
}, {
  "label": "江油市",
  "value": "510781"
}], [{
  "label": "利州区",
  "value": "510802"
}, {
  "label": "昭化区",
  "value": "510811"
}, {
  "label": "朝天区",
  "value": "510812"
}, {
  "label": "旺苍县",
  "value": "510821"
}, {
  "label": "青川县",
  "value": "510822"
}, {
  "label": "剑阁县",
  "value": "510823"
}, {
  "label": "苍溪县",
  "value": "510824"
}], [{
  "label": "船山区",
  "value": "510903"
}, {
  "label": "安居区",
  "value": "510904"
}, {
  "label": "蓬溪县",
  "value": "510921"
}, {
  "label": "射洪县",
  "value": "510922"
}, {
  "label": "大英县",
  "value": "510923"
}], [{
  "label": "市中区",
  "value": "511002"
}, {
  "label": "东兴区",
  "value": "511011"
}, {
  "label": "威远县",
  "value": "511024"
}, {
  "label": "资中县",
  "value": "511025"
}, {
  "label": "内江经济开发区",
  "value": "511071"
}, {
  "label": "隆昌市",
  "value": "511083"
}], [{
  "label": "市中区",
  "value": "511102"
}, {
  "label": "沙湾区",
  "value": "511111"
}, {
  "label": "五通桥区",
  "value": "511112"
}, {
  "label": "金口河区",
  "value": "511113"
}, {
  "label": "犍为县",
  "value": "511123"
}, {
  "label": "井研县",
  "value": "511124"
}, {
  "label": "夹江县",
  "value": "511126"
}, {
  "label": "沐川县",
  "value": "511129"
}, {
  "label": "峨边彝族自治县",
  "value": "511132"
}, {
  "label": "马边彝族自治县",
  "value": "511133"
}, {
  "label": "峨眉山市",
  "value": "511181"
}], [{
  "label": "顺庆区",
  "value": "511302"
}, {
  "label": "高坪区",
  "value": "511303"
}, {
  "label": "嘉陵区",
  "value": "511304"
}, {
  "label": "南部县",
  "value": "511321"
}, {
  "label": "营山县",
  "value": "511322"
}, {
  "label": "蓬安县",
  "value": "511323"
}, {
  "label": "仪陇县",
  "value": "511324"
}, {
  "label": "西充县",
  "value": "511325"
}, {
  "label": "阆中市",
  "value": "511381"
}], [{
  "label": "东坡区",
  "value": "511402"
}, {
  "label": "彭山区",
  "value": "511403"
}, {
  "label": "仁寿县",
  "value": "511421"
}, {
  "label": "洪雅县",
  "value": "511423"
}, {
  "label": "丹棱县",
  "value": "511424"
}, {
  "label": "青神县",
  "value": "511425"
}], [{
  "label": "翠屏区",
  "value": "511502"
}, {
  "label": "南溪区",
  "value": "511503"
}, {
  "label": "宜宾县",
  "value": "511521"
}, {
  "label": "江安县",
  "value": "511523"
}, {
  "label": "长宁县",
  "value": "511524"
}, {
  "label": "高县",
  "value": "511525"
}, {
  "label": "珙县",
  "value": "511526"
}, {
  "label": "筠连县",
  "value": "511527"
}, {
  "label": "兴文县",
  "value": "511528"
}, {
  "label": "屏山县",
  "value": "511529"
}], [{
  "label": "广安区",
  "value": "511602"
}, {
  "label": "前锋区",
  "value": "511603"
}, {
  "label": "岳池县",
  "value": "511621"
}, {
  "label": "武胜县",
  "value": "511622"
}, {
  "label": "邻水县",
  "value": "511623"
}, {
  "label": "华蓥市",
  "value": "511681"
}], [{
  "label": "通川区",
  "value": "511702"
}, {
  "label": "达川区",
  "value": "511703"
}, {
  "label": "宣汉县",
  "value": "511722"
}, {
  "label": "开江县",
  "value": "511723"
}, {
  "label": "大竹县",
  "value": "511724"
}, {
  "label": "渠县",
  "value": "511725"
}, {
  "label": "达州经济开发区",
  "value": "511771"
}, {
  "label": "万源市",
  "value": "511781"
}], [{
  "label": "雨城区",
  "value": "511802"
}, {
  "label": "名山区",
  "value": "511803"
}, {
  "label": "荥经县",
  "value": "511822"
}, {
  "label": "汉源县",
  "value": "511823"
}, {
  "label": "石棉县",
  "value": "511824"
}, {
  "label": "天全县",
  "value": "511825"
}, {
  "label": "芦山县",
  "value": "511826"
}, {
  "label": "宝兴县",
  "value": "511827"
}], [{
  "label": "巴州区",
  "value": "511902"
}, {
  "label": "恩阳区",
  "value": "511903"
}, {
  "label": "通江县",
  "value": "511921"
}, {
  "label": "南江县",
  "value": "511922"
}, {
  "label": "平昌县",
  "value": "511923"
}, {
  "label": "巴中经济开发区",
  "value": "511971"
}], [{
  "label": "雁江区",
  "value": "512002"
}, {
  "label": "安岳县",
  "value": "512021"
}, {
  "label": "乐至县",
  "value": "512022"
}], [{
  "label": "马尔康市",
  "value": "513201"
}, {
  "label": "汶川县",
  "value": "513221"
}, {
  "label": "理县",
  "value": "513222"
}, {
  "label": "茂县",
  "value": "513223"
}, {
  "label": "松潘县",
  "value": "513224"
}, {
  "label": "九寨沟县",
  "value": "513225"
}, {
  "label": "金川县",
  "value": "513226"
}, {
  "label": "小金县",
  "value": "513227"
}, {
  "label": "黑水县",
  "value": "513228"
}, {
  "label": "壤塘县",
  "value": "513230"
}, {
  "label": "阿坝县",
  "value": "513231"
}, {
  "label": "若尔盖县",
  "value": "513232"
}, {
  "label": "红原县",
  "value": "513233"
}], [{
  "label": "康定市",
  "value": "513301"
}, {
  "label": "泸定县",
  "value": "513322"
}, {
  "label": "丹巴县",
  "value": "513323"
}, {
  "label": "九龙县",
  "value": "513324"
}, {
  "label": "雅江县",
  "value": "513325"
}, {
  "label": "道孚县",
  "value": "513326"
}, {
  "label": "炉霍县",
  "value": "513327"
}, {
  "label": "甘孜县",
  "value": "513328"
}, {
  "label": "新龙县",
  "value": "513329"
}, {
  "label": "德格县",
  "value": "513330"
}, {
  "label": "白玉县",
  "value": "513331"
}, {
  "label": "石渠县",
  "value": "513332"
}, {
  "label": "色达县",
  "value": "513333"
}, {
  "label": "理塘县",
  "value": "513334"
}, {
  "label": "巴塘县",
  "value": "513335"
}, {
  "label": "乡城县",
  "value": "513336"
}, {
  "label": "稻城县",
  "value": "513337"
}, {
  "label": "得荣县",
  "value": "513338"
}], [{
  "label": "西昌市",
  "value": "513401"
}, {
  "label": "木里藏族自治县",
  "value": "513422"
}, {
  "label": "盐源县",
  "value": "513423"
}, {
  "label": "德昌县",
  "value": "513424"
}, {
  "label": "会理县",
  "value": "513425"
}, {
  "label": "会东县",
  "value": "513426"
}, {
  "label": "宁南县",
  "value": "513427"
}, {
  "label": "普格县",
  "value": "513428"
}, {
  "label": "布拖县",
  "value": "513429"
}, {
  "label": "金阳县",
  "value": "513430"
}, {
  "label": "昭觉县",
  "value": "513431"
}, {
  "label": "喜德县",
  "value": "513432"
}, {
  "label": "冕宁县",
  "value": "513433"
}, {
  "label": "越西县",
  "value": "513434"
}, {
  "label": "甘洛县",
  "value": "513435"
}, {
  "label": "美姑县",
  "value": "513436"
}, {
  "label": "雷波县",
  "value": "513437"
}]], [[{
  "label": "南明区",
  "value": "520102"
}, {
  "label": "云岩区",
  "value": "520103"
}, {
  "label": "花溪区",
  "value": "520111"
}, {
  "label": "乌当区",
  "value": "520112"
}, {
  "label": "白云区",
  "value": "520113"
}, {
  "label": "观山湖区",
  "value": "520115"
}, {
  "label": "开阳县",
  "value": "520121"
}, {
  "label": "息烽县",
  "value": "520122"
}, {
  "label": "修文县",
  "value": "520123"
}, {
  "label": "清镇市",
  "value": "520181"
}], [{
  "label": "钟山区",
  "value": "520201"
}, {
  "label": "六枝特区",
  "value": "520203"
}, {
  "label": "水城县",
  "value": "520221"
}, {
  "label": "盘州市",
  "value": "520281"
}], [{
  "label": "红花岗区",
  "value": "520302"
}, {
  "label": "汇川区",
  "value": "520303"
}, {
  "label": "播州区",
  "value": "520304"
}, {
  "label": "桐梓县",
  "value": "520322"
}, {
  "label": "绥阳县",
  "value": "520323"
}, {
  "label": "正安县",
  "value": "520324"
}, {
  "label": "道真仡佬族苗族自治县",
  "value": "520325"
}, {
  "label": "务川仡佬族苗族自治县",
  "value": "520326"
}, {
  "label": "凤冈县",
  "value": "520327"
}, {
  "label": "湄潭县",
  "value": "520328"
}, {
  "label": "余庆县",
  "value": "520329"
}, {
  "label": "习水县",
  "value": "520330"
}, {
  "label": "赤水市",
  "value": "520381"
}, {
  "label": "仁怀市",
  "value": "520382"
}], [{
  "label": "西秀区",
  "value": "520402"
}, {
  "label": "平坝区",
  "value": "520403"
}, {
  "label": "普定县",
  "value": "520422"
}, {
  "label": "镇宁布依族苗族自治县",
  "value": "520423"
}, {
  "label": "关岭布依族苗族自治县",
  "value": "520424"
}, {
  "label": "紫云苗族布依族自治县",
  "value": "520425"
}], [{
  "label": "七星关区",
  "value": "520502"
}, {
  "label": "大方县",
  "value": "520521"
}, {
  "label": "黔西县",
  "value": "520522"
}, {
  "label": "金沙县",
  "value": "520523"
}, {
  "label": "织金县",
  "value": "520524"
}, {
  "label": "纳雍县",
  "value": "520525"
}, {
  "label": "威宁彝族回族苗族自治县",
  "value": "520526"
}, {
  "label": "赫章县",
  "value": "520527"
}], [{
  "label": "碧江区",
  "value": "520602"
}, {
  "label": "万山区",
  "value": "520603"
}, {
  "label": "江口县",
  "value": "520621"
}, {
  "label": "玉屏侗族自治县",
  "value": "520622"
}, {
  "label": "石阡县",
  "value": "520623"
}, {
  "label": "思南县",
  "value": "520624"
}, {
  "label": "印江土家族苗族自治县",
  "value": "520625"
}, {
  "label": "德江县",
  "value": "520626"
}, {
  "label": "沿河土家族自治县",
  "value": "520627"
}, {
  "label": "松桃苗族自治县",
  "value": "520628"
}], [{
  "label": "兴义市",
  "value": "522301"
}, {
  "label": "兴仁县",
  "value": "522322"
}, {
  "label": "普安县",
  "value": "522323"
}, {
  "label": "晴隆县",
  "value": "522324"
}, {
  "label": "贞丰县",
  "value": "522325"
}, {
  "label": "望谟县",
  "value": "522326"
}, {
  "label": "册亨县",
  "value": "522327"
}, {
  "label": "安龙县",
  "value": "522328"
}], [{
  "label": "凯里市",
  "value": "522601"
}, {
  "label": "黄平县",
  "value": "522622"
}, {
  "label": "施秉县",
  "value": "522623"
}, {
  "label": "三穗县",
  "value": "522624"
}, {
  "label": "镇远县",
  "value": "522625"
}, {
  "label": "岑巩县",
  "value": "522626"
}, {
  "label": "天柱县",
  "value": "522627"
}, {
  "label": "锦屏县",
  "value": "522628"
}, {
  "label": "剑河县",
  "value": "522629"
}, {
  "label": "台江县",
  "value": "522630"
}, {
  "label": "黎平县",
  "value": "522631"
}, {
  "label": "榕江县",
  "value": "522632"
}, {
  "label": "从江县",
  "value": "522633"
}, {
  "label": "雷山县",
  "value": "522634"
}, {
  "label": "麻江县",
  "value": "522635"
}, {
  "label": "丹寨县",
  "value": "522636"
}], [{
  "label": "都匀市",
  "value": "522701"
}, {
  "label": "福泉市",
  "value": "522702"
}, {
  "label": "荔波县",
  "value": "522722"
}, {
  "label": "贵定县",
  "value": "522723"
}, {
  "label": "瓮安县",
  "value": "522725"
}, {
  "label": "独山县",
  "value": "522726"
}, {
  "label": "平塘县",
  "value": "522727"
}, {
  "label": "罗甸县",
  "value": "522728"
}, {
  "label": "长顺县",
  "value": "522729"
}, {
  "label": "龙里县",
  "value": "522730"
}, {
  "label": "惠水县",
  "value": "522731"
}, {
  "label": "三都水族自治县",
  "value": "522732"
}]], [[{
  "label": "五华区",
  "value": "530102"
}, {
  "label": "盘龙区",
  "value": "530103"
}, {
  "label": "官渡区",
  "value": "530111"
}, {
  "label": "西山区",
  "value": "530112"
}, {
  "label": "东川区",
  "value": "530113"
}, {
  "label": "呈贡区",
  "value": "530114"
}, {
  "label": "晋宁区",
  "value": "530115"
}, {
  "label": "富民县",
  "value": "530124"
}, {
  "label": "宜良县",
  "value": "530125"
}, {
  "label": "石林彝族自治县",
  "value": "530126"
}, {
  "label": "嵩明县",
  "value": "530127"
}, {
  "label": "禄劝彝族苗族自治县",
  "value": "530128"
}, {
  "label": "寻甸回族彝族自治县",
  "value": "530129"
}, {
  "label": "安宁市",
  "value": "530181"
}], [{
  "label": "麒麟区",
  "value": "530302"
}, {
  "label": "沾益区",
  "value": "530303"
}, {
  "label": "马龙县",
  "value": "530321"
}, {
  "label": "陆良县",
  "value": "530322"
}, {
  "label": "师宗县",
  "value": "530323"
}, {
  "label": "罗平县",
  "value": "530324"
}, {
  "label": "富源县",
  "value": "530325"
}, {
  "label": "会泽县",
  "value": "530326"
}, {
  "label": "宣威市",
  "value": "530381"
}], [{
  "label": "红塔区",
  "value": "530402"
}, {
  "label": "江川区",
  "value": "530403"
}, {
  "label": "澄江县",
  "value": "530422"
}, {
  "label": "通海县",
  "value": "530423"
}, {
  "label": "华宁县",
  "value": "530424"
}, {
  "label": "易门县",
  "value": "530425"
}, {
  "label": "峨山彝族自治县",
  "value": "530426"
}, {
  "label": "新平彝族傣族自治县",
  "value": "530427"
}, {
  "label": "元江哈尼族彝族傣族自治县",
  "value": "530428"
}], [{
  "label": "隆阳区",
  "value": "530502"
}, {
  "label": "施甸县",
  "value": "530521"
}, {
  "label": "龙陵县",
  "value": "530523"
}, {
  "label": "昌宁县",
  "value": "530524"
}, {
  "label": "腾冲市",
  "value": "530581"
}], [{
  "label": "昭阳区",
  "value": "530602"
}, {
  "label": "鲁甸县",
  "value": "530621"
}, {
  "label": "巧家县",
  "value": "530622"
}, {
  "label": "盐津县",
  "value": "530623"
}, {
  "label": "大关县",
  "value": "530624"
}, {
  "label": "永善县",
  "value": "530625"
}, {
  "label": "绥江县",
  "value": "530626"
}, {
  "label": "镇雄县",
  "value": "530627"
}, {
  "label": "彝良县",
  "value": "530628"
}, {
  "label": "威信县",
  "value": "530629"
}, {
  "label": "水富县",
  "value": "530630"
}], [{
  "label": "古城区",
  "value": "530702"
}, {
  "label": "玉龙纳西族自治县",
  "value": "530721"
}, {
  "label": "永胜县",
  "value": "530722"
}, {
  "label": "华坪县",
  "value": "530723"
}, {
  "label": "宁蒗彝族自治县",
  "value": "530724"
}], [{
  "label": "思茅区",
  "value": "530802"
}, {
  "label": "宁洱哈尼族彝族自治县",
  "value": "530821"
}, {
  "label": "墨江哈尼族自治县",
  "value": "530822"
}, {
  "label": "景东彝族自治县",
  "value": "530823"
}, {
  "label": "景谷傣族彝族自治县",
  "value": "530824"
}, {
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825"
}, {
  "label": "江城哈尼族彝族自治县",
  "value": "530826"
}, {
  "label": "孟连傣族拉祜族佤族自治县",
  "value": "530827"
}, {
  "label": "澜沧拉祜族自治县",
  "value": "530828"
}, {
  "label": "西盟佤族自治县",
  "value": "530829"
}], [{
  "label": "临翔区",
  "value": "530902"
}, {
  "label": "凤庆县",
  "value": "530921"
}, {
  "label": "云县",
  "value": "530922"
}, {
  "label": "永德县",
  "value": "530923"
}, {
  "label": "镇康县",
  "value": "530924"
}, {
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925"
}, {
  "label": "耿马傣族佤族自治县",
  "value": "530926"
}, {
  "label": "沧源佤族自治县",
  "value": "530927"
}], [{
  "label": "楚雄市",
  "value": "532301"
}, {
  "label": "双柏县",
  "value": "532322"
}, {
  "label": "牟定县",
  "value": "532323"
}, {
  "label": "南华县",
  "value": "532324"
}, {
  "label": "姚安县",
  "value": "532325"
}, {
  "label": "大姚县",
  "value": "532326"
}, {
  "label": "永仁县",
  "value": "532327"
}, {
  "label": "元谋县",
  "value": "532328"
}, {
  "label": "武定县",
  "value": "532329"
}, {
  "label": "禄丰县",
  "value": "532331"
}], [{
  "label": "个旧市",
  "value": "532501"
}, {
  "label": "开远市",
  "value": "532502"
}, {
  "label": "蒙自市",
  "value": "532503"
}, {
  "label": "弥勒市",
  "value": "532504"
}, {
  "label": "屏边苗族自治县",
  "value": "532523"
}, {
  "label": "建水县",
  "value": "532524"
}, {
  "label": "石屏县",
  "value": "532525"
}, {
  "label": "泸西县",
  "value": "532527"
}, {
  "label": "元阳县",
  "value": "532528"
}, {
  "label": "红河县",
  "value": "532529"
}, {
  "label": "金平苗族瑶族傣族自治县",
  "value": "532530"
}, {
  "label": "绿春县",
  "value": "532531"
}, {
  "label": "河口瑶族自治县",
  "value": "532532"
}], [{
  "label": "文山市",
  "value": "532601"
}, {
  "label": "砚山县",
  "value": "532622"
}, {
  "label": "西畴县",
  "value": "532623"
}, {
  "label": "麻栗坡县",
  "value": "532624"
}, {
  "label": "马关县",
  "value": "532625"
}, {
  "label": "丘北县",
  "value": "532626"
}, {
  "label": "广南县",
  "value": "532627"
}, {
  "label": "富宁县",
  "value": "532628"
}], [{
  "label": "景洪市",
  "value": "532801"
}, {
  "label": "勐海县",
  "value": "532822"
}, {
  "label": "勐腊县",
  "value": "532823"
}], [{
  "label": "大理市",
  "value": "532901"
}, {
  "label": "漾濞彝族自治县",
  "value": "532922"
}, {
  "label": "祥云县",
  "value": "532923"
}, {
  "label": "宾川县",
  "value": "532924"
}, {
  "label": "弥渡县",
  "value": "532925"
}, {
  "label": "南涧彝族自治县",
  "value": "532926"
}, {
  "label": "巍山彝族回族自治县",
  "value": "532927"
}, {
  "label": "永平县",
  "value": "532928"
}, {
  "label": "云龙县",
  "value": "532929"
}, {
  "label": "洱源县",
  "value": "532930"
}, {
  "label": "剑川县",
  "value": "532931"
}, {
  "label": "鹤庆县",
  "value": "532932"
}], [{
  "label": "瑞丽市",
  "value": "533102"
}, {
  "label": "芒市",
  "value": "533103"
}, {
  "label": "梁河县",
  "value": "533122"
}, {
  "label": "盈江县",
  "value": "533123"
}, {
  "label": "陇川县",
  "value": "533124"
}], [{
  "label": "泸水市",
  "value": "533301"
}, {
  "label": "福贡县",
  "value": "533323"
}, {
  "label": "贡山独龙族怒族自治县",
  "value": "533324"
}, {
  "label": "兰坪白族普米族自治县",
  "value": "533325"
}], [{
  "label": "香格里拉市",
  "value": "533401"
}, {
  "label": "德钦县",
  "value": "533422"
}, {
  "label": "维西傈僳族自治县",
  "value": "533423"
}]], [[{
  "label": "城关区",
  "value": "540102"
}, {
  "label": "堆龙德庆区",
  "value": "540103"
}, {
  "label": "林周县",
  "value": "540121"
}, {
  "label": "当雄县",
  "value": "540122"
}, {
  "label": "尼木县",
  "value": "540123"
}, {
  "label": "曲水县",
  "value": "540124"
}, {
  "label": "达孜县",
  "value": "540126"
}, {
  "label": "墨竹工卡县",
  "value": "540127"
}, {
  "label": "格尔木藏青工业园区",
  "value": "540171"
}, {
  "label": "拉萨经济技术开发区",
  "value": "540172"
}, {
  "label": "西藏文化旅游创意园区",
  "value": "540173"
}, {
  "label": "达孜工业园区",
  "value": "540174"
}], [{
  "label": "桑珠孜区",
  "value": "540202"
}, {
  "label": "南木林县",
  "value": "540221"
}, {
  "label": "江孜县",
  "value": "540222"
}, {
  "label": "定日县",
  "value": "540223"
}, {
  "label": "萨迦县",
  "value": "540224"
}, {
  "label": "拉孜县",
  "value": "540225"
}, {
  "label": "昂仁县",
  "value": "540226"
}, {
  "label": "谢通门县",
  "value": "540227"
}, {
  "label": "白朗县",
  "value": "540228"
}, {
  "label": "仁布县",
  "value": "540229"
}, {
  "label": "康马县",
  "value": "540230"
}, {
  "label": "定结县",
  "value": "540231"
}, {
  "label": "仲巴县",
  "value": "540232"
}, {
  "label": "亚东县",
  "value": "540233"
}, {
  "label": "吉隆县",
  "value": "540234"
}, {
  "label": "聂拉木县",
  "value": "540235"
}, {
  "label": "萨嘎县",
  "value": "540236"
}, {
  "label": "岗巴县",
  "value": "540237"
}], [{
  "label": "卡若区",
  "value": "540302"
}, {
  "label": "江达县",
  "value": "540321"
}, {
  "label": "贡觉县",
  "value": "540322"
}, {
  "label": "类乌齐县",
  "value": "540323"
}, {
  "label": "丁青县",
  "value": "540324"
}, {
  "label": "察雅县",
  "value": "540325"
}, {
  "label": "八宿县",
  "value": "540326"
}, {
  "label": "左贡县",
  "value": "540327"
}, {
  "label": "芒康县",
  "value": "540328"
}, {
  "label": "洛隆县",
  "value": "540329"
}, {
  "label": "边坝县",
  "value": "540330"
}], [{
  "label": "巴宜区",
  "value": "540402"
}, {
  "label": "工布江达县",
  "value": "540421"
}, {
  "label": "米林县",
  "value": "540422"
}, {
  "label": "墨脱县",
  "value": "540423"
}, {
  "label": "波密县",
  "value": "540424"
}, {
  "label": "察隅县",
  "value": "540425"
}, {
  "label": "朗县",
  "value": "540426"
}], [{
  "label": "乃东区",
  "value": "540502"
}, {
  "label": "扎囊县",
  "value": "540521"
}, {
  "label": "贡嘎县",
  "value": "540522"
}, {
  "label": "桑日县",
  "value": "540523"
}, {
  "label": "琼结县",
  "value": "540524"
}, {
  "label": "曲松县",
  "value": "540525"
}, {
  "label": "措美县",
  "value": "540526"
}, {
  "label": "洛扎县",
  "value": "540527"
}, {
  "label": "加查县",
  "value": "540528"
}, {
  "label": "隆子县",
  "value": "540529"
}, {
  "label": "错那县",
  "value": "540530"
}, {
  "label": "浪卡子县",
  "value": "540531"
}], [{
  "label": "那曲县",
  "value": "542421"
}, {
  "label": "嘉黎县",
  "value": "542422"
}, {
  "label": "比如县",
  "value": "542423"
}, {
  "label": "聂荣县",
  "value": "542424"
}, {
  "label": "安多县",
  "value": "542425"
}, {
  "label": "申扎县",
  "value": "542426"
}, {
  "label": "索县",
  "value": "542427"
}, {
  "label": "班戈县",
  "value": "542428"
}, {
  "label": "巴青县",
  "value": "542429"
}, {
  "label": "尼玛县",
  "value": "542430"
}, {
  "label": "双湖县",
  "value": "542431"
}], [{
  "label": "普兰县",
  "value": "542521"
}, {
  "label": "札达县",
  "value": "542522"
}, {
  "label": "噶尔县",
  "value": "542523"
}, {
  "label": "日土县",
  "value": "542524"
}, {
  "label": "革吉县",
  "value": "542525"
}, {
  "label": "改则县",
  "value": "542526"
}, {
  "label": "措勤县",
  "value": "542527"
}]], [[{
  "label": "新城区",
  "value": "610102"
}, {
  "label": "碑林区",
  "value": "610103"
}, {
  "label": "莲湖区",
  "value": "610104"
}, {
  "label": "灞桥区",
  "value": "610111"
}, {
  "label": "未央区",
  "value": "610112"
}, {
  "label": "雁塔区",
  "value": "610113"
}, {
  "label": "阎良区",
  "value": "610114"
}, {
  "label": "临潼区",
  "value": "610115"
}, {
  "label": "长安区",
  "value": "610116"
}, {
  "label": "高陵区",
  "value": "610117"
}, {
  "label": "鄠邑区",
  "value": "610118"
}, {
  "label": "蓝田县",
  "value": "610122"
}, {
  "label": "周至县",
  "value": "610124"
}], [{
  "label": "王益区",
  "value": "610202"
}, {
  "label": "印台区",
  "value": "610203"
}, {
  "label": "耀州区",
  "value": "610204"
}, {
  "label": "宜君县",
  "value": "610222"
}], [{
  "label": "渭滨区",
  "value": "610302"
}, {
  "label": "金台区",
  "value": "610303"
}, {
  "label": "陈仓区",
  "value": "610304"
}, {
  "label": "凤翔县",
  "value": "610322"
}, {
  "label": "岐山县",
  "value": "610323"
}, {
  "label": "扶风县",
  "value": "610324"
}, {
  "label": "眉县",
  "value": "610326"
}, {
  "label": "陇县",
  "value": "610327"
}, {
  "label": "千阳县",
  "value": "610328"
}, {
  "label": "麟游县",
  "value": "610329"
}, {
  "label": "凤县",
  "value": "610330"
}, {
  "label": "太白县",
  "value": "610331"
}], [{
  "label": "秦都区",
  "value": "610402"
}, {
  "label": "杨陵区",
  "value": "610403"
}, {
  "label": "渭城区",
  "value": "610404"
}, {
  "label": "三原县",
  "value": "610422"
}, {
  "label": "泾阳县",
  "value": "610423"
}, {
  "label": "乾县",
  "value": "610424"
}, {
  "label": "礼泉县",
  "value": "610425"
}, {
  "label": "永寿县",
  "value": "610426"
}, {
  "label": "彬县",
  "value": "610427"
}, {
  "label": "长武县",
  "value": "610428"
}, {
  "label": "旬邑县",
  "value": "610429"
}, {
  "label": "淳化县",
  "value": "610430"
}, {
  "label": "武功县",
  "value": "610431"
}, {
  "label": "兴平市",
  "value": "610481"
}], [{
  "label": "临渭区",
  "value": "610502"
}, {
  "label": "华州区",
  "value": "610503"
}, {
  "label": "潼关县",
  "value": "610522"
}, {
  "label": "大荔县",
  "value": "610523"
}, {
  "label": "合阳县",
  "value": "610524"
}, {
  "label": "澄城县",
  "value": "610525"
}, {
  "label": "蒲城县",
  "value": "610526"
}, {
  "label": "白水县",
  "value": "610527"
}, {
  "label": "富平县",
  "value": "610528"
}, {
  "label": "韩城市",
  "value": "610581"
}, {
  "label": "华阴市",
  "value": "610582"
}], [{
  "label": "宝塔区",
  "value": "610602"
}, {
  "label": "安塞区",
  "value": "610603"
}, {
  "label": "延长县",
  "value": "610621"
}, {
  "label": "延川县",
  "value": "610622"
}, {
  "label": "子长县",
  "value": "610623"
}, {
  "label": "志丹县",
  "value": "610625"
}, {
  "label": "吴起县",
  "value": "610626"
}, {
  "label": "甘泉县",
  "value": "610627"
}, {
  "label": "富县",
  "value": "610628"
}, {
  "label": "洛川县",
  "value": "610629"
}, {
  "label": "宜川县",
  "value": "610630"
}, {
  "label": "黄龙县",
  "value": "610631"
}, {
  "label": "黄陵县",
  "value": "610632"
}], [{
  "label": "汉台区",
  "value": "610702"
}, {
  "label": "南郑区",
  "value": "610703"
}, {
  "label": "城固县",
  "value": "610722"
}, {
  "label": "洋县",
  "value": "610723"
}, {
  "label": "西乡县",
  "value": "610724"
}, {
  "label": "勉县",
  "value": "610725"
}, {
  "label": "宁强县",
  "value": "610726"
}, {
  "label": "略阳县",
  "value": "610727"
}, {
  "label": "镇巴县",
  "value": "610728"
}, {
  "label": "留坝县",
  "value": "610729"
}, {
  "label": "佛坪县",
  "value": "610730"
}], [{
  "label": "榆阳区",
  "value": "610802"
}, {
  "label": "横山区",
  "value": "610803"
}, {
  "label": "府谷县",
  "value": "610822"
}, {
  "label": "靖边县",
  "value": "610824"
}, {
  "label": "定边县",
  "value": "610825"
}, {
  "label": "绥德县",
  "value": "610826"
}, {
  "label": "米脂县",
  "value": "610827"
}, {
  "label": "佳县",
  "value": "610828"
}, {
  "label": "吴堡县",
  "value": "610829"
}, {
  "label": "清涧县",
  "value": "610830"
}, {
  "label": "子洲县",
  "value": "610831"
}, {
  "label": "神木市",
  "value": "610881"
}], [{
  "label": "汉滨区",
  "value": "610902"
}, {
  "label": "汉阴县",
  "value": "610921"
}, {
  "label": "石泉县",
  "value": "610922"
}, {
  "label": "宁陕县",
  "value": "610923"
}, {
  "label": "紫阳县",
  "value": "610924"
}, {
  "label": "岚皋县",
  "value": "610925"
}, {
  "label": "平利县",
  "value": "610926"
}, {
  "label": "镇坪县",
  "value": "610927"
}, {
  "label": "旬阳县",
  "value": "610928"
}, {
  "label": "白河县",
  "value": "610929"
}], [{
  "label": "商州区",
  "value": "611002"
}, {
  "label": "洛南县",
  "value": "611021"
}, {
  "label": "丹凤县",
  "value": "611022"
}, {
  "label": "商南县",
  "value": "611023"
}, {
  "label": "山阳县",
  "value": "611024"
}, {
  "label": "镇安县",
  "value": "611025"
}, {
  "label": "柞水县",
  "value": "611026"
}]], [[{
  "label": "城关区",
  "value": "620102"
}, {
  "label": "七里河区",
  "value": "620103"
}, {
  "label": "西固区",
  "value": "620104"
}, {
  "label": "安宁区",
  "value": "620105"
}, {
  "label": "红古区",
  "value": "620111"
}, {
  "label": "永登县",
  "value": "620121"
}, {
  "label": "皋兰县",
  "value": "620122"
}, {
  "label": "榆中县",
  "value": "620123"
}, {
  "label": "兰州新区",
  "value": "620171"
}], [{
  "label": "嘉峪关市",
  "value": "620201"
}], [{
  "label": "金川区",
  "value": "620302"
}, {
  "label": "永昌县",
  "value": "620321"
}], [{
  "label": "白银区",
  "value": "620402"
}, {
  "label": "平川区",
  "value": "620403"
}, {
  "label": "靖远县",
  "value": "620421"
}, {
  "label": "会宁县",
  "value": "620422"
}, {
  "label": "景泰县",
  "value": "620423"
}], [{
  "label": "秦州区",
  "value": "620502"
}, {
  "label": "麦积区",
  "value": "620503"
}, {
  "label": "清水县",
  "value": "620521"
}, {
  "label": "秦安县",
  "value": "620522"
}, {
  "label": "甘谷县",
  "value": "620523"
}, {
  "label": "武山县",
  "value": "620524"
}, {
  "label": "张家川回族自治县",
  "value": "620525"
}], [{
  "label": "凉州区",
  "value": "620602"
}, {
  "label": "民勤县",
  "value": "620621"
}, {
  "label": "古浪县",
  "value": "620622"
}, {
  "label": "天祝藏族自治县",
  "value": "620623"
}], [{
  "label": "甘州区",
  "value": "620702"
}, {
  "label": "肃南裕固族自治县",
  "value": "620721"
}, {
  "label": "民乐县",
  "value": "620722"
}, {
  "label": "临泽县",
  "value": "620723"
}, {
  "label": "高台县",
  "value": "620724"
}, {
  "label": "山丹县",
  "value": "620725"
}], [{
  "label": "崆峒区",
  "value": "620802"
}, {
  "label": "泾川县",
  "value": "620821"
}, {
  "label": "灵台县",
  "value": "620822"
}, {
  "label": "崇信县",
  "value": "620823"
}, {
  "label": "华亭县",
  "value": "620824"
}, {
  "label": "庄浪县",
  "value": "620825"
}, {
  "label": "静宁县",
  "value": "620826"
}, {
  "label": "平凉工业园区",
  "value": "620871"
}], [{
  "label": "肃州区",
  "value": "620902"
}, {
  "label": "金塔县",
  "value": "620921"
}, {
  "label": "瓜州县",
  "value": "620922"
}, {
  "label": "肃北蒙古族自治县",
  "value": "620923"
}, {
  "label": "阿克塞哈萨克族自治县",
  "value": "620924"
}, {
  "label": "玉门市",
  "value": "620981"
}, {
  "label": "敦煌市",
  "value": "620982"
}], [{
  "label": "西峰区",
  "value": "621002"
}, {
  "label": "庆城县",
  "value": "621021"
}, {
  "label": "环县",
  "value": "621022"
}, {
  "label": "华池县",
  "value": "621023"
}, {
  "label": "合水县",
  "value": "621024"
}, {
  "label": "正宁县",
  "value": "621025"
}, {
  "label": "宁县",
  "value": "621026"
}, {
  "label": "镇原县",
  "value": "621027"
}], [{
  "label": "安定区",
  "value": "621102"
}, {
  "label": "通渭县",
  "value": "621121"
}, {
  "label": "陇西县",
  "value": "621122"
}, {
  "label": "渭源县",
  "value": "621123"
}, {
  "label": "临洮县",
  "value": "621124"
}, {
  "label": "漳县",
  "value": "621125"
}, {
  "label": "岷县",
  "value": "621126"
}], [{
  "label": "武都区",
  "value": "621202"
}, {
  "label": "成县",
  "value": "621221"
}, {
  "label": "文县",
  "value": "621222"
}, {
  "label": "宕昌县",
  "value": "621223"
}, {
  "label": "康县",
  "value": "621224"
}, {
  "label": "西和县",
  "value": "621225"
}, {
  "label": "礼县",
  "value": "621226"
}, {
  "label": "徽县",
  "value": "621227"
}, {
  "label": "两当县",
  "value": "621228"
}], [{
  "label": "临夏市",
  "value": "622901"
}, {
  "label": "临夏县",
  "value": "622921"
}, {
  "label": "康乐县",
  "value": "622922"
}, {
  "label": "永靖县",
  "value": "622923"
}, {
  "label": "广河县",
  "value": "622924"
}, {
  "label": "和政县",
  "value": "622925"
}, {
  "label": "东乡族自治县",
  "value": "622926"
}, {
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": "622927"
}], [{
  "label": "合作市",
  "value": "623001"
}, {
  "label": "临潭县",
  "value": "623021"
}, {
  "label": "卓尼县",
  "value": "623022"
}, {
  "label": "舟曲县",
  "value": "623023"
}, {
  "label": "迭部县",
  "value": "623024"
}, {
  "label": "玛曲县",
  "value": "623025"
}, {
  "label": "碌曲县",
  "value": "623026"
}, {
  "label": "夏河县",
  "value": "623027"
}]], [[{
  "label": "城东区",
  "value": "630102"
}, {
  "label": "城中区",
  "value": "630103"
}, {
  "label": "城西区",
  "value": "630104"
}, {
  "label": "城北区",
  "value": "630105"
}, {
  "label": "大通回族土族自治县",
  "value": "630121"
}, {
  "label": "湟中县",
  "value": "630122"
}, {
  "label": "湟源县",
  "value": "630123"
}], [{
  "label": "乐都区",
  "value": "630202"
}, {
  "label": "平安区",
  "value": "630203"
}, {
  "label": "民和回族土族自治县",
  "value": "630222"
}, {
  "label": "互助土族自治县",
  "value": "630223"
}, {
  "label": "化隆回族自治县",
  "value": "630224"
}, {
  "label": "循化撒拉族自治县",
  "value": "630225"
}], [{
  "label": "门源回族自治县",
  "value": "632221"
}, {
  "label": "祁连县",
  "value": "632222"
}, {
  "label": "海晏县",
  "value": "632223"
}, {
  "label": "刚察县",
  "value": "632224"
}], [{
  "label": "同仁县",
  "value": "632321"
}, {
  "label": "尖扎县",
  "value": "632322"
}, {
  "label": "泽库县",
  "value": "632323"
}, {
  "label": "河南蒙古族自治县",
  "value": "632324"
}], [{
  "label": "共和县",
  "value": "632521"
}, {
  "label": "同德县",
  "value": "632522"
}, {
  "label": "贵德县",
  "value": "632523"
}, {
  "label": "兴海县",
  "value": "632524"
}, {
  "label": "贵南县",
  "value": "632525"
}], [{
  "label": "玛沁县",
  "value": "632621"
}, {
  "label": "班玛县",
  "value": "632622"
}, {
  "label": "甘德县",
  "value": "632623"
}, {
  "label": "达日县",
  "value": "632624"
}, {
  "label": "久治县",
  "value": "632625"
}, {
  "label": "玛多县",
  "value": "632626"
}], [{
  "label": "玉树市",
  "value": "632701"
}, {
  "label": "杂多县",
  "value": "632722"
}, {
  "label": "称多县",
  "value": "632723"
}, {
  "label": "治多县",
  "value": "632724"
}, {
  "label": "囊谦县",
  "value": "632725"
}, {
  "label": "曲麻莱县",
  "value": "632726"
}], [{
  "label": "格尔木市",
  "value": "632801"
}, {
  "label": "德令哈市",
  "value": "632802"
}, {
  "label": "乌兰县",
  "value": "632821"
}, {
  "label": "都兰县",
  "value": "632822"
}, {
  "label": "天峻县",
  "value": "632823"
}, {
  "label": "大柴旦行政委员会",
  "value": "632857"
}, {
  "label": "冷湖行政委员会",
  "value": "632858"
}, {
  "label": "茫崖行政委员会",
  "value": "632859"
}]], [[{
  "label": "兴庆区",
  "value": "640104"
}, {
  "label": "西夏区",
  "value": "640105"
}, {
  "label": "金凤区",
  "value": "640106"
}, {
  "label": "永宁县",
  "value": "640121"
}, {
  "label": "贺兰县",
  "value": "640122"
}, {
  "label": "灵武市",
  "value": "640181"
}], [{
  "label": "大武口区",
  "value": "640202"
}, {
  "label": "惠农区",
  "value": "640205"
}, {
  "label": "平罗县",
  "value": "640221"
}], [{
  "label": "利通区",
  "value": "640302"
}, {
  "label": "红寺堡区",
  "value": "640303"
}, {
  "label": "盐池县",
  "value": "640323"
}, {
  "label": "同心县",
  "value": "640324"
}, {
  "label": "青铜峡市",
  "value": "640381"
}], [{
  "label": "原州区",
  "value": "640402"
}, {
  "label": "西吉县",
  "value": "640422"
}, {
  "label": "隆德县",
  "value": "640423"
}, {
  "label": "泾源县",
  "value": "640424"
}, {
  "label": "彭阳县",
  "value": "640425"
}], [{
  "label": "沙坡头区",
  "value": "640502"
}, {
  "label": "中宁县",
  "value": "640521"
}, {
  "label": "海原县",
  "value": "640522"
}]], [[{
  "label": "天山区",
  "value": "650102"
}, {
  "label": "沙依巴克区",
  "value": "650103"
}, {
  "label": "新市区",
  "value": "650104"
}, {
  "label": "水磨沟区",
  "value": "650105"
}, {
  "label": "头屯河区",
  "value": "650106"
}, {
  "label": "达坂城区",
  "value": "650107"
}, {
  "label": "米东区",
  "value": "650109"
}, {
  "label": "乌鲁木齐县",
  "value": "650121"
}, {
  "label": "乌鲁木齐经济技术开发区",
  "value": "650171"
}, {
  "label": "乌鲁木齐高新技术产业开发区",
  "value": "650172"
}], [{
  "label": "独山子区",
  "value": "650202"
}, {
  "label": "克拉玛依区",
  "value": "650203"
}, {
  "label": "白碱滩区",
  "value": "650204"
}, {
  "label": "乌尔禾区",
  "value": "650205"
}], [{
  "label": "高昌区",
  "value": "650402"
}, {
  "label": "鄯善县",
  "value": "650421"
}, {
  "label": "托克逊县",
  "value": "650422"
}], [{
  "label": "伊州区",
  "value": "650502"
}, {
  "label": "巴里坤哈萨克自治县",
  "value": "650521"
}, {
  "label": "伊吾县",
  "value": "650522"
}], [{
  "label": "昌吉市",
  "value": "652301"
}, {
  "label": "阜康市",
  "value": "652302"
}, {
  "label": "呼图壁县",
  "value": "652323"
}, {
  "label": "玛纳斯县",
  "value": "652324"
}, {
  "label": "奇台县",
  "value": "652325"
}, {
  "label": "吉木萨尔县",
  "value": "652327"
}, {
  "label": "木垒哈萨克自治县",
  "value": "652328"
}], [{
  "label": "博乐市",
  "value": "652701"
}, {
  "label": "阿拉山口市",
  "value": "652702"
}, {
  "label": "精河县",
  "value": "652722"
}, {
  "label": "温泉县",
  "value": "652723"
}], [{
  "label": "库尔勒市",
  "value": "652801"
}, {
  "label": "轮台县",
  "value": "652822"
}, {
  "label": "尉犁县",
  "value": "652823"
}, {
  "label": "若羌县",
  "value": "652824"
}, {
  "label": "且末县",
  "value": "652825"
}, {
  "label": "焉耆回族自治县",
  "value": "652826"
}, {
  "label": "和静县",
  "value": "652827"
}, {
  "label": "和硕县",
  "value": "652828"
}, {
  "label": "博湖县",
  "value": "652829"
}, {
  "label": "库尔勒经济技术开发区",
  "value": "652871"
}], [{
  "label": "阿克苏市",
  "value": "652901"
}, {
  "label": "温宿县",
  "value": "652922"
}, {
  "label": "库车县",
  "value": "652923"
}, {
  "label": "沙雅县",
  "value": "652924"
}, {
  "label": "新和县",
  "value": "652925"
}, {
  "label": "拜城县",
  "value": "652926"
}, {
  "label": "乌什县",
  "value": "652927"
}, {
  "label": "阿瓦提县",
  "value": "652928"
}, {
  "label": "柯坪县",
  "value": "652929"
}], [{
  "label": "阿图什市",
  "value": "653001"
}, {
  "label": "阿克陶县",
  "value": "653022"
}, {
  "label": "阿合奇县",
  "value": "653023"
}, {
  "label": "乌恰县",
  "value": "653024"
}], [{
  "label": "喀什市",
  "value": "653101"
}, {
  "label": "疏附县",
  "value": "653121"
}, {
  "label": "疏勒县",
  "value": "653122"
}, {
  "label": "英吉沙县",
  "value": "653123"
}, {
  "label": "泽普县",
  "value": "653124"
}, {
  "label": "莎车县",
  "value": "653125"
}, {
  "label": "叶城县",
  "value": "653126"
}, {
  "label": "麦盖提县",
  "value": "653127"
}, {
  "label": "岳普湖县",
  "value": "653128"
}, {
  "label": "伽师县",
  "value": "653129"
}, {
  "label": "巴楚县",
  "value": "653130"
}, {
  "label": "塔什库尔干塔吉克自治县",
  "value": "653131"
}], [{
  "label": "和田市",
  "value": "653201"
}, {
  "label": "和田县",
  "value": "653221"
}, {
  "label": "墨玉县",
  "value": "653222"
}, {
  "label": "皮山县",
  "value": "653223"
}, {
  "label": "洛浦县",
  "value": "653224"
}, {
  "label": "策勒县",
  "value": "653225"
}, {
  "label": "于田县",
  "value": "653226"
}, {
  "label": "民丰县",
  "value": "653227"
}], [{
  "label": "伊宁市",
  "value": "654002"
}, {
  "label": "奎屯市",
  "value": "654003"
}, {
  "label": "霍尔果斯市",
  "value": "654004"
}, {
  "label": "伊宁县",
  "value": "654021"
}, {
  "label": "察布查尔锡伯自治县",
  "value": "654022"
}, {
  "label": "霍城县",
  "value": "654023"
}, {
  "label": "巩留县",
  "value": "654024"
}, {
  "label": "新源县",
  "value": "654025"
}, {
  "label": "昭苏县",
  "value": "654026"
}, {
  "label": "特克斯县",
  "value": "654027"
}, {
  "label": "尼勒克县",
  "value": "654028"
}], [{
  "label": "塔城市",
  "value": "654201"
}, {
  "label": "乌苏市",
  "value": "654202"
}, {
  "label": "额敏县",
  "value": "654221"
}, {
  "label": "沙湾县",
  "value": "654223"
}, {
  "label": "托里县",
  "value": "654224"
}, {
  "label": "裕民县",
  "value": "654225"
}, {
  "label": "和布克赛尔蒙古自治县",
  "value": "654226"
}], [{
  "label": "阿勒泰市",
  "value": "654301"
}, {
  "label": "布尔津县",
  "value": "654321"
}, {
  "label": "富蕴县",
  "value": "654322"
}, {
  "label": "福海县",
  "value": "654323"
}, {
  "label": "哈巴河县",
  "value": "654324"
}, {
  "label": "青河县",
  "value": "654325"
}, {
  "label": "吉木乃县",
  "value": "654326"
}], [{
  "label": "石河子市",
  "value": "659001"
}, {
  "label": "阿拉尔市",
  "value": "659002"
}, {
  "label": "图木舒克市",
  "value": "659003"
}, {
  "label": "五家渠市",
  "value": "659004"
}, {
  "label": "铁门关市",
  "value": "659006"
}]], [[{
  "label": "台北",
  "value": "660101"
}], [{
  "label": "高雄",
  "value": "660201"
}], [{
  "label": "基隆",
  "value": "660301"
}], [{
  "label": "台中",
  "value": "660401"
}], [{
  "label": "台南",
  "value": "660501"
}], [{
  "label": "新竹",
  "value": "660601"
}], [{
  "label": "嘉义",
  "value": "660701"
}], [{
  "label": "宜兰",
  "value": "660801"
}], [{
  "label": "桃园",
  "value": "660901"
}], [{
  "label": "苗栗",
  "value": "661001"
}], [{
  "label": "彰化",
  "value": "661101"
}], [{
  "label": "南投",
  "value": "661201"
}], [{
  "label": "云林",
  "value": "661301"
}], [{
  "label": "屏东",
  "value": "661401"
}], [{
  "label": "台东",
  "value": "661501"
}], [{
  "label": "花莲",
  "value": "661601"
}], [{
  "label": "澎湖",
  "value": "661701"
}]], [[{
  "label": "香港岛",
  "value": "670101"
}], [{
  "label": "九龙",
  "value": "670201"
}], [{
  "label": "新界",
  "value": "670301"
}]], [[{
  "label": "澳门半岛",
  "value": "680101"
}], [{
  "label": "氹仔岛",
  "value": "680201"
}], [{
  "label": "路环岛",
  "value": "680301"
}], [{
  "label": "路氹城",
  "value": "680401"
}]]];
var _default = areaData;
exports.default = _default;

/***/ }),

/***/ 56:
/*!****************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/getParent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParent;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return {
          v: data
        };
      }();
      if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
    }
  }
  return {};
}

/***/ }),

/***/ 57:
/*!**************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/$parent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 58:
/*!**********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/sys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
exports.sys = sys;
function os() {
  return uni.getSystemInfoSync().platform;
}
;
function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 59:
/*!***************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/debounce.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!***************************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/function/throttle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }
  }
}
;
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 61:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/config/config.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 此版本发布于2020-03-17
var version = '1.8.4';
var _default = {
  v: version,
  version: version,
  // 主题名称
  type: ['primary', 'success', 'info', 'error', 'warning']
};
exports.default = _default;

/***/ }),

/***/ 62:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/config/zIndex.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */
var _default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};
exports.default = _default;

/***/ }),

/***/ 63:
/*!*******************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/store/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 64));
_vue.default.use(_vuex.default);
var lifeData = {};
try {
  // 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
  lifeData = uni.getStorageSync('lifeData');
} catch (e) {}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
var saveStateKeys = ['vuex_user', 'vuex_token'];

// 保存变量到本地存储中
var saveLifeData = function saveLifeData(key, value) {
  // 判断变量名是否在需要存储的数组中
  if (saveStateKeys.indexOf(key) != -1) {
    // 获取本地存储的lifeData对象，将变量添加到对象中
    var tmp = uni.getStorageSync('lifeData');
    // 第一次打开APP，不存在lifeData变量，故放一个{}空对象
    tmp = tmp ? tmp : {};
    tmp[key] = value;
    // 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
    uni.setStorageSync('lifeData', tmp);
  }
};
var color = ['#B29190', '#E6DEDF', '#D70B0B', '#eeeeee'];
var host = "";
var store = new _vuex.default.Store({
  state: {
    color1: color[0],
    //主题颜色一
    color2: color[1],
    //主题颜色二
    priceColor: color[2],
    //价格颜色
    color3: color[3],
    btnStyle: {
      //按钮样式
      color: '#fff',
      borderColor: color[0],
      backgroundColor: color[0],
      borderRadius: "30rpx"
    },
    radius: '30',
    longitude: null,
    latitude: null,
    address: null,
    weather: null,
    mapKey: "W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP",
    userInfo: null,
    userVipInfo: null,
    isLogin: uni.getStorageSync('token') ? uni.getStorageSync('token') : false,
    token: null,
    //"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjMwMDI5YTE3LTAzODktNGUzNC05MGM2LWI1ZGU5ZmIwNjgxZCJ9.rpfPagBN1h0JDuDvDwto6mDjnCsFZsPj24QvqA-Vv7cs8y9vCsFkFK_N-iulHnSTHwd3V5irVraBlA0rCru7Mg",//null
    pageNum: 10,
    //分页数量
    imageUrl: '',
    host: 'http://localhost:8833',
    pid: null,
    logisticsPrice: 0 //邮费限额
  },

  mutations: {
    setUserInfo: function setUserInfo(state, data) {
      if (data) {
        state.isLogin = true;
        state.userInfo = data;
      } else {
        state.isLogin = false;
      }
    },
    setVipInfo: function setVipInfo(state, data) {
      state.userVipInfo = data;
    },
    setToken: function setToken(state, data) {
      state.token = data;
    },
    setPid: function setPid(state, data) {
      state.pid = data;
    },
    $uStore: function $uStore(state, payload) {
      // 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
      var nameArr = payload.name.split('.');
      var saveKey = '';
      var len = nameArr.length;
      if (len >= 2) {
        var obj = state[nameArr[0]];
        for (var i = 1; i < len - 1; i++) {
          obj = obj[nameArr[i]];
        }
        obj[nameArr[len - 1]] = payload.value;
        saveKey = nameArr[0];
      } else {
        // 单层级变量，在state就是一个普通变量的情况
        state[payload.name] = payload.value;
        saveKey = payload.name;
      }
      // 保存变量到本地，见顶部函数定义
      saveLifeData(saveKey, state[saveKey]);
    }
  }
});
var _default = store;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 64:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 65:
/*!*************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/common/locales/zh.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // 可以以页面为单位来写，比如首页的内容，写在index字段，个人中心写在center，共同部分写在common部分
  components: {
    desc: '众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让你快速集成，开箱即用'
  },
  js: {
    desc: '众多的贴心小工具，是你开发过程中召之即来的利器，让你飞镖在手，百步穿杨'
  },
  template: {
    desc: '收集众多的常用页面和布局，减少开发者的重复工作，让你专注逻辑，事半功倍'
  },
  nav: {
    components: '组件',
    js: '工具',
    template: '模板'
  },
  common: {
    intro: '多平台快速开发的UI框架',
    title: 'uView UI'
  }
};
exports.default = _default;

/***/ }),

/***/ 66:
/*!*************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/common/locales/en.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // 可以以页面为单位来写，比如首页的内容，写在index字段，个人中心写在center，共同部分写在common部分
  components: {
    desc: 'Numerous components cover the various requirements of the development process, and the components are rich in functions and compatible with multiple terminals. Let you integrate quickly, out of the box'
  },
  js: {
    desc: 'Numerous intimate gadgets are a weapon that you can call upon during the development process, allowing you to dart in your hand and pierce the Yang with a hundred steps'
  },
  template: {
    desc: 'Collection of many commonly used pages and layouts, reducing the repetitive work of developers, allowing you to focus on logic and get twice the result with half the effort'
  },
  nav: {
    components: 'Components',
    js: 'JS',
    template: 'Template'
  },
  common: {
    intro: 'UI framework for rapid development of multiple platforms',
    title: 'uView UI'
  }
};
exports.default = _default;

/***/ }),

/***/ 67:
/*!***************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/common/vue-i18n.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
/*!
 * vue-i18n v8.20.0 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */
var t, e;
t = this, e = function e() {
  "use strict";

  var t = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher", "unit"];
  function e(t, e) {
    "undefined" != typeof console && (console.warn("[vue-i18n] " + t), e && console.warn(e.stack));
  }
  var n = Array.isArray;
  function r(t) {
    return null !== t && "object" == _typeof(t);
  }
  function a(t) {
    return "string" == typeof t;
  }
  var i = Object.prototype.toString,
    o = "[object Object]";
  function s(t) {
    return i.call(t) === o;
  }
  function l(t) {
    return null == t;
  }
  function c() {
    for (var t = [], e = arguments.length; e--;) {
      t[e] = arguments[e];
    }
    var n = null,
      a = null;
    return 1 === t.length ? r(t[0]) || Array.isArray(t[0]) ? a = t[0] : "string" == typeof t[0] && (n = t[0]) : 2 === t.length && ("string" == typeof t[0] && (n = t[0]), (r(t[1]) || Array.isArray(t[1])) && (a = t[1])), {
      locale: n,
      params: a
    };
  }
  function u(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function h(t, e) {
    return !!~t.indexOf(e);
  }
  var f = Object.prototype.hasOwnProperty;
  function p(t, e) {
    return f.call(t, e);
  }
  function m(t) {
    for (var e = arguments, n = Object(t), a = 1; a < arguments.length; a++) {
      var i = e[a];
      if (null != i) {
        var o = void 0;
        for (o in i) {
          p(i, o) && (r(i[o]) ? n[o] = m(n[o], i[o]) : n[o] = i[o]);
        }
      }
    }
    return n;
  }
  function _(t, e) {
    if (t === e) return !0;
    var n = r(t),
      a = r(e);
    if (!n || !a) return !n && !a && String(t) === String(e);
    try {
      var i = Array.isArray(t),
        o = Array.isArray(e);
      if (i && o) return t.length === e.length && t.every(function (t, n) {
        return _(t, e[n]);
      });
      if (i || o) return !1;
      var s = Object.keys(t),
        l = Object.keys(e);
      return s.length === l.length && s.every(function (n) {
        return _(t[n], e[n]);
      });
    } catch (t) {
      return !1;
    }
  }
  var g = {
      beforeCreate: function beforeCreate() {
        var t = this.$options;
        if (t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n) {
          if (t.i18n instanceof et) {
            if (t.__i18n) try {
              var e = {};
              t.__i18n.forEach(function (t) {
                e = m(e, JSON.parse(t));
              }), Object.keys(e).forEach(function (n) {
                t.i18n.mergeLocaleMessage(n, e[n]);
              });
            } catch (t) {}
            this._i18n = t.i18n, this._i18nWatcher = this._i18n.watchI18nData();
          } else if (s(t.i18n)) {
            var n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof et ? this.$root.$i18n : null;
            if (n && (t.i18n.root = this.$root, t.i18n.formatter = n.formatter, t.i18n.fallbackLocale = n.fallbackLocale, t.i18n.formatFallbackMessages = n.formatFallbackMessages, t.i18n.silentTranslationWarn = n.silentTranslationWarn, t.i18n.silentFallbackWarn = n.silentFallbackWarn, t.i18n.pluralizationRules = n.pluralizationRules, t.i18n.preserveDirectiveContent = n.preserveDirectiveContent), t.__i18n) try {
              var r = {};
              t.__i18n.forEach(function (t) {
                r = m(r, JSON.parse(t));
              }), t.i18n.messages = r;
            } catch (t) {}
            var a = t.i18n.sharedMessages;
            a && s(a) && (t.i18n.messages = m(t.i18n.messages, a)), this._i18n = new et(t.i18n), this._i18nWatcher = this._i18n.watchI18nData(), (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()), n && n.onComponentInstanceCreated(this._i18n);
          }
        } else this.$root && this.$root.$i18n && this.$root.$i18n instanceof et ? this._i18n = this.$root.$i18n : t.parent && t.parent.$i18n && t.parent.$i18n instanceof et && (this._i18n = t.parent.$i18n);
      },
      beforeMount: function beforeMount() {
        var t = this.$options;
        t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n ? t.i18n instanceof et ? (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : s(t.i18n) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : this.$root && this.$root.$i18n && this.$root.$i18n instanceof et ? (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : t.parent && t.parent.$i18n && t.parent.$i18n instanceof et && (this._i18n.subscribeDataChanging(this), this._subscribing = !0);
      },
      beforeDestroy: function beforeDestroy() {
        if (this._i18n) {
          var t = this;
          this.$nextTick(function () {
            t._subscribing && (t._i18n.unsubscribeDataChanging(t), delete t._subscribing), t._i18nWatcher && (t._i18nWatcher(), t._i18n.destroyVM(), delete t._i18nWatcher), t._localeWatcher && (t._localeWatcher(), delete t._localeWatcher);
          });
        }
      }
    },
    v = {
      name: "i18n",
      functional: !0,
      props: {
        tag: {
          type: [String, Boolean, Object],
          default: "span"
        },
        path: {
          type: String,
          required: !0
        },
        locale: {
          type: String
        },
        places: {
          type: [Array, Object]
        }
      },
      render: function render(t, e) {
        var n = e.data,
          r = e.parent,
          a = e.props,
          i = e.slots,
          o = r.$i18n;
        if (o) {
          var s = a.path,
            l = a.locale,
            c = a.places,
            u = i(),
            h = o.i(s, l, function (t) {
              var e;
              for (e in t) {
                if ("default" !== e) return !1;
              }
              return Boolean(e);
            }(u) || c ? function (t, e) {
              var n = e ? function (t) {
                return Array.isArray(t) ? t.reduce(d, {}) : Object.assign({}, t);
              }(e) : {};
              if (!t) return n;
              var r = (t = t.filter(function (t) {
                return t.tag || "" !== t.text.trim();
              })).every(y);
              return t.reduce(r ? b : d, n);
            }(u.default, c) : u),
            f = a.tag && !0 !== a.tag || !1 === a.tag ? a.tag : "span";
          return f ? t(f, n, h) : h;
        }
      }
    };
  function b(t, e) {
    return e.data && e.data.attrs && e.data.attrs.place && (t[e.data.attrs.place] = e), t;
  }
  function d(t, e, n) {
    return t[n] = e, t;
  }
  function y(t) {
    return Boolean(t.data && t.data.attrs && t.data.attrs.place);
  }
  var F,
    k = {
      name: "i18n-n",
      functional: !0,
      props: {
        tag: {
          type: [String, Boolean, Object],
          default: "span"
        },
        value: {
          type: Number,
          required: !0
        },
        format: {
          type: [String, Object]
        },
        locale: {
          type: String
        }
      },
      render: function render(e, n) {
        var i = n.props,
          o = n.parent,
          s = n.data,
          l = o.$i18n;
        if (!l) return null;
        var c = null,
          u = null;
        a(i.format) ? c = i.format : r(i.format) && (i.format.key && (c = i.format.key), u = Object.keys(i.format).reduce(function (e, n) {
          var r;
          return h(t, n) ? Object.assign({}, e, ((r = {})[n] = i.format[n], r)) : e;
        }, null));
        var f = i.locale || l.locale,
          p = l._ntp(i.value, f, c, u),
          m = p.map(function (t, e) {
            var n,
              r = s.scopedSlots && s.scopedSlots[t.type];
            return r ? r(((n = {})[t.type] = t.value, n.index = e, n.parts = p, n)) : t.value;
          }),
          _ = i.tag && !0 !== i.tag || !1 === i.tag ? i.tag : "span";
        return _ ? e(_, {
          attrs: s.attrs,
          class: s.class,
          staticClass: s.staticClass
        }, m) : m;
      }
    };
  function w(t, e, n) {
    C(t, n) && T(t, e, n);
  }
  function $(t, e, n, r) {
    if (C(t, n)) {
      var a = n.context.$i18n;
      (function (t, e) {
        var n = e.context;
        return t._locale === n.$i18n.locale;
      })(t, n) && _(e.value, e.oldValue) && _(t._localeMessage, a.getLocaleMessage(a.locale)) || T(t, e, n);
    }
  }
  function M(t, n, r, a) {
    if (r.context) {
      var i = r.context.$i18n || {};
      n.modifiers.preserve || i.preserveDirectiveContent || (t.textContent = ""), t._vt = void 0, delete t._vt, t._locale = void 0, delete t._locale, t._localeMessage = void 0, delete t._localeMessage;
    } else e("Vue instance does not exists in VNode context");
  }
  function C(t, n) {
    var r = n.context;
    return r ? !!r.$i18n || (e("VueI18n instance does not exists in Vue instance"), !1) : (e("Vue instance does not exists in VNode context"), !1);
  }
  function T(t, n, r) {
    var i,
      o,
      l = function (t) {
        var e, n, r, i;
        a(t) ? e = t : s(t) && (e = t.path, n = t.locale, r = t.args, i = t.choice);
        return {
          path: e,
          locale: n,
          args: r,
          choice: i
        };
      }(n.value),
      c = l.path,
      u = l.locale,
      h = l.args,
      f = l.choice;
    if (c || u || h) {
      if (c) {
        var p = r.context;
        t._vt = t.textContent = null != f ? (i = p.$i18n).tc.apply(i, [c, f].concat(L(u, h))) : (o = p.$i18n).t.apply(o, [c].concat(L(u, h))), t._locale = p.$i18n.locale, t._localeMessage = p.$i18n.getLocaleMessage(p.$i18n.locale);
      } else e("`path` is required in v-t directive");
    } else e("value type not supported");
  }
  function L(t, e) {
    var n = [];
    return t && n.push(t), e && (Array.isArray(e) || s(e)) && n.push(e), n;
  }
  function I(t) {
    I.installed = !0;
    (F = t).version && Number(F.version.split(".")[0]);
    !function (t) {
      t.prototype.hasOwnProperty("$i18n") || Object.defineProperty(t.prototype, "$i18n", {
        get: function get() {
          return this._i18n;
        }
      }), t.prototype.$t = function (t) {
        for (var e = [], n = arguments.length - 1; n-- > 0;) {
          e[n] = arguments[n + 1];
        }
        var r = this.$i18n;
        return r._t.apply(r, [t, r.locale, r._getMessages(), this].concat(e));
      }, t.prototype.$tc = function (t, e) {
        for (var n = [], r = arguments.length - 2; r-- > 0;) {
          n[r] = arguments[r + 2];
        }
        var a = this.$i18n;
        return a._tc.apply(a, [t, a.locale, a._getMessages(), this, e].concat(n));
      }, t.prototype.$te = function (t, e) {
        var n = this.$i18n;
        return n._te(t, n.locale, n._getMessages(), e);
      }, t.prototype.$d = function (t) {
        for (var e, n = [], r = arguments.length - 1; r-- > 0;) {
          n[r] = arguments[r + 1];
        }
        return (e = this.$i18n).d.apply(e, [t].concat(n));
      }, t.prototype.$n = function (t) {
        for (var e, n = [], r = arguments.length - 1; r-- > 0;) {
          n[r] = arguments[r + 1];
        }
        return (e = this.$i18n).n.apply(e, [t].concat(n));
      };
    }(F), F.mixin(g), F.directive("t", {
      bind: w,
      update: $,
      unbind: M
    }), F.component(v.name, v), F.component(k.name, k), F.config.optionMergeStrategies.i18n = function (t, e) {
      return void 0 === e ? t : e;
    };
  }
  var D = function D() {
    this._caches = Object.create(null);
  };
  D.prototype.interpolate = function (t, e) {
    if (!e) return [t];
    var n = this._caches[t];
    return n || (n = function (t) {
      var e = [],
        n = 0,
        r = "";
      for (; n < t.length;) {
        var a = t[n++];
        if ("{" === a) {
          r && e.push({
            type: "text",
            value: r
          }), r = "";
          var i = "";
          for (a = t[n++]; void 0 !== a && "}" !== a;) {
            i += a, a = t[n++];
          }
          var o = "}" === a,
            s = O.test(i) ? "list" : o && x.test(i) ? "named" : "unknown";
          e.push({
            value: i,
            type: s
          });
        } else "%" === a ? "{" !== t[n] && (r += a) : r += a;
      }
      return r && e.push({
        type: "text",
        value: r
      }), e;
    }(t), this._caches[t] = n), function (t, e) {
      var n = [],
        a = 0,
        i = Array.isArray(e) ? "list" : r(e) ? "named" : "unknown";
      if ("unknown" === i) return n;
      for (; a < t.length;) {
        var o = t[a];
        switch (o.type) {
          case "text":
            n.push(o.value);
            break;
          case "list":
            n.push(e[parseInt(o.value, 10)]);
            break;
          case "named":
            "named" === i && n.push(e[o.value]);
        }
        a++;
      }
      return n;
    }(n, e);
  };
  var O = /^(?:\d)+/,
    x = /^(?:\w)+/,
    W = 0,
    j = 1,
    N = 2,
    A = 3,
    S = 0,
    R = 4,
    H = 5,
    P = 6,
    V = 7,
    E = 8,
    z = [];
  z[S] = {
    ws: [S],
    ident: [3, W],
    "[": [R],
    eof: [V]
  }, z[1] = {
    ws: [1],
    ".": [2],
    "[": [R],
    eof: [V]
  }, z[2] = {
    ws: [2],
    ident: [3, W],
    0: [3, W],
    number: [3, W]
  }, z[3] = {
    ident: [3, W],
    0: [3, W],
    number: [3, W],
    ws: [1, j],
    ".": [2, j],
    "[": [R, j],
    eof: [V, j]
  }, z[R] = {
    "'": [H, W],
    '"': [P, W],
    "[": [R, N],
    "]": [1, A],
    eof: E,
    else: [R, W]
  }, z[H] = {
    "'": [R, W],
    eof: E,
    else: [H, W]
  }, z[P] = {
    '"': [R, W],
    eof: E,
    else: [P, W]
  };
  var B = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function U(t) {
    if (null == t) return "eof";
    switch (t.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return t;
      case 95:
      case 36:
      case 45:
        return "ident";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "ws";
    }
    return "ident";
  }
  function J(t) {
    var e,
      n,
      r,
      a = t.trim();
    return ("0" !== t.charAt(0) || !isNaN(t)) && (r = a, B.test(r) ? (n = (e = a).charCodeAt(0)) !== e.charCodeAt(e.length - 1) || 34 !== n && 39 !== n ? e : e.slice(1, -1) : "*" + a);
  }
  var q = function q() {
    this._cache = Object.create(null);
  };
  q.prototype.parsePath = function (t) {
    var e = this._cache[t];
    return e || (e = function (t) {
      var e,
        n,
        r,
        a,
        i,
        o,
        s,
        l = [],
        c = -1,
        u = S,
        h = 0,
        f = [];
      function p() {
        var e = t[c + 1];
        if (u === H && "'" === e || u === P && '"' === e) return c++, r = "\\" + e, f[W](), !0;
      }
      for (f[j] = function () {
        void 0 !== n && (l.push(n), n = void 0);
      }, f[W] = function () {
        void 0 === n ? n = r : n += r;
      }, f[N] = function () {
        f[W](), h++;
      }, f[A] = function () {
        if (h > 0) h--, u = R, f[W]();else {
          if (h = 0, void 0 === n) return !1;
          if (!1 === (n = J(n))) return !1;
          f[j]();
        }
      }; null !== u;) {
        if ("\\" !== (e = t[++c]) || !p()) {
          if (a = U(e), (i = (s = z[u])[a] || s.else || E) === E) return;
          if (u = i[0], (o = f[i[1]]) && (r = void 0 === (r = i[2]) ? e : r, !1 === o())) return;
          if (u === V) return l;
        }
      }
    }(t)) && (this._cache[t] = e), e || [];
  }, q.prototype.getPathValue = function (t, e) {
    if (!r(t)) return null;
    var n = this.parsePath(e);
    if (0 === n.length) return null;
    for (var a = n.length, i = t, o = 0; o < a;) {
      var s = i[n[o]];
      if (void 0 === s) return null;
      i = s, o++;
    }
    return i;
  };
  var G,
    X = /<\/?[\w\s="/.':;#-\/]+>/,
    Z = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
    K = /^@(?:\.([a-z]+))?:/,
    Q = /[()]/g,
    Y = {
      upper: function upper(t) {
        return t.toLocaleUpperCase();
      },
      lower: function lower(t) {
        return t.toLocaleLowerCase();
      },
      capitalize: function capitalize(t) {
        return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1);
      }
    },
    tt = new D(),
    et = function et(t) {
      var e = this;
      void 0 === t && (t = {}), !F && "undefined" != typeof window && window.Vue && I(window.Vue);
      var n = t.locale || "en-US",
        r = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
        a = t.messages || {},
        i = t.dateTimeFormats || {},
        o = t.numberFormats || {};
      this._vm = null, this._formatter = t.formatter || tt, this._modifiers = t.modifiers || {}, this._missing = t.missing || null, this._root = t.root || null, this._sync = void 0 === t.sync || !!t.sync, this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot, this._formatFallbackMessages = void 0 !== t.formatFallbackMessages && !!t.formatFallbackMessages, this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && t.silentTranslationWarn, this._silentFallbackWarn = void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new q(), this._dataListeners = [], this._componentInstanceCreatedListener = t.componentInstanceCreatedListener || null, this._preserveDirectiveContent = void 0 !== t.preserveDirectiveContent && !!t.preserveDirectiveContent, this.pluralizationRules = t.pluralizationRules || {}, this._warnHtmlInMessage = t.warnHtmlInMessage || "off", this._postTranslation = t.postTranslation || null, this.getChoiceIndex = function (t, n) {
        var r = Object.getPrototypeOf(e);
        if (r && r.getChoiceIndex) return r.getChoiceIndex.call(e, t, n);
        var a, i;
        return e.locale in e.pluralizationRules ? e.pluralizationRules[e.locale].apply(e, [t, n]) : (a = t, i = n, a = Math.abs(a), 2 === i ? a ? a > 1 ? 1 : 0 : 1 : a ? Math.min(a, 2) : 0);
      }, this._exist = function (t, n) {
        return !(!t || !n) && (!l(e._path.getPathValue(t, n)) || !!t[n]);
      }, "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(a).forEach(function (t) {
        e._checkLocaleMessage(t, e._warnHtmlInMessage, a[t]);
      }), this._initVM({
        locale: n,
        fallbackLocale: r,
        messages: a,
        dateTimeFormats: i,
        numberFormats: o
      });
    },
    nt = {
      vm: {
        configurable: !0
      },
      messages: {
        configurable: !0
      },
      dateTimeFormats: {
        configurable: !0
      },
      numberFormats: {
        configurable: !0
      },
      availableLocales: {
        configurable: !0
      },
      locale: {
        configurable: !0
      },
      fallbackLocale: {
        configurable: !0
      },
      formatFallbackMessages: {
        configurable: !0
      },
      missing: {
        configurable: !0
      },
      formatter: {
        configurable: !0
      },
      silentTranslationWarn: {
        configurable: !0
      },
      silentFallbackWarn: {
        configurable: !0
      },
      preserveDirectiveContent: {
        configurable: !0
      },
      warnHtmlInMessage: {
        configurable: !0
      },
      postTranslation: {
        configurable: !0
      }
    };
  return et.prototype._checkLocaleMessage = function (t, n, r) {
    var i = function i(t, n, r, o) {
      if (s(r)) Object.keys(r).forEach(function (e) {
        var a = r[e];
        s(a) ? (o.push(e), o.push("."), i(t, n, a, o), o.pop(), o.pop()) : (o.push(e), i(t, n, a, o), o.pop());
      });else if (Array.isArray(r)) r.forEach(function (e, r) {
        s(e) ? (o.push("[" + r + "]"), o.push("."), i(t, n, e, o), o.pop(), o.pop()) : (o.push("[" + r + "]"), i(t, n, e, o), o.pop());
      });else if (a(r)) {
        if (X.test(r)) {
          var l = "Detected HTML in message '" + r + "' of keypath '" + o.join("") + "' at '" + n + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
          "warn" === t ? e(l) : "error" === t && function (t, e) {
            "undefined" != typeof console && (console.error("[vue-i18n] " + t), e && console.error(e.stack));
          }(l);
        }
      }
    };
    i(n, t, r, []);
  }, et.prototype._initVM = function (t) {
    var e = F.config.silent;
    F.config.silent = !0, this._vm = new F({
      data: t
    }), F.config.silent = e;
  }, et.prototype.destroyVM = function () {
    this._vm.$destroy();
  }, et.prototype.subscribeDataChanging = function (t) {
    this._dataListeners.push(t);
  }, et.prototype.unsubscribeDataChanging = function (t) {
    !function (t, e) {
      if (t.length) {
        var n = t.indexOf(e);
        if (n > -1) t.splice(n, 1);
      }
    }(this._dataListeners, t);
  }, et.prototype.watchI18nData = function () {
    var t = this;
    return this._vm.$watch("$data", function () {
      for (var e = t._dataListeners.length; e--;) {
        F.nextTick(function () {
          t._dataListeners[e] && t._dataListeners[e].$forceUpdate();
        });
      }
    }, {
      deep: !0
    });
  }, et.prototype.watchLocale = function () {
    if (!this._sync || !this._root) return null;
    var t = this._vm;
    return this._root.$i18n.vm.$watch("locale", function (e) {
      t.$set(t, "locale", e), t.$forceUpdate();
    }, {
      immediate: !0
    });
  }, et.prototype.onComponentInstanceCreated = function (t) {
    this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(t, this);
  }, nt.vm.get = function () {
    return this._vm;
  }, nt.messages.get = function () {
    return u(this._getMessages());
  }, nt.dateTimeFormats.get = function () {
    return u(this._getDateTimeFormats());
  }, nt.numberFormats.get = function () {
    return u(this._getNumberFormats());
  }, nt.availableLocales.get = function () {
    return Object.keys(this.messages).sort();
  }, nt.locale.get = function () {
    return this._vm.locale;
  }, nt.locale.set = function (t) {
    this._vm.$set(this._vm, "locale", t);
  }, nt.fallbackLocale.get = function () {
    return this._vm.fallbackLocale;
  }, nt.fallbackLocale.set = function (t) {
    this._localeChainCache = {}, this._vm.$set(this._vm, "fallbackLocale", t);
  }, nt.formatFallbackMessages.get = function () {
    return this._formatFallbackMessages;
  }, nt.formatFallbackMessages.set = function (t) {
    this._formatFallbackMessages = t;
  }, nt.missing.get = function () {
    return this._missing;
  }, nt.missing.set = function (t) {
    this._missing = t;
  }, nt.formatter.get = function () {
    return this._formatter;
  }, nt.formatter.set = function (t) {
    this._formatter = t;
  }, nt.silentTranslationWarn.get = function () {
    return this._silentTranslationWarn;
  }, nt.silentTranslationWarn.set = function (t) {
    this._silentTranslationWarn = t;
  }, nt.silentFallbackWarn.get = function () {
    return this._silentFallbackWarn;
  }, nt.silentFallbackWarn.set = function (t) {
    this._silentFallbackWarn = t;
  }, nt.preserveDirectiveContent.get = function () {
    return this._preserveDirectiveContent;
  }, nt.preserveDirectiveContent.set = function (t) {
    this._preserveDirectiveContent = t;
  }, nt.warnHtmlInMessage.get = function () {
    return this._warnHtmlInMessage;
  }, nt.warnHtmlInMessage.set = function (t) {
    var e = this,
      n = this._warnHtmlInMessage;
    if (this._warnHtmlInMessage = t, n !== t && ("warn" === t || "error" === t)) {
      var r = this._getMessages();
      Object.keys(r).forEach(function (t) {
        e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t]);
      });
    }
  }, nt.postTranslation.get = function () {
    return this._postTranslation;
  }, nt.postTranslation.set = function (t) {
    this._postTranslation = t;
  }, et.prototype._getMessages = function () {
    return this._vm.messages;
  }, et.prototype._getDateTimeFormats = function () {
    return this._vm.dateTimeFormats;
  }, et.prototype._getNumberFormats = function () {
    return this._vm.numberFormats;
  }, et.prototype._warnDefault = function (t, e, n, r, i, o) {
    if (!l(n)) return n;
    if (this._missing) {
      var s = this._missing.apply(null, [t, e, r, i]);
      if (a(s)) return s;
    }
    if (this._formatFallbackMessages) {
      var u = c.apply(void 0, i);
      return this._render(e, o, u.params, e);
    }
    return e;
  }, et.prototype._isFallbackRoot = function (t) {
    return !t && !l(this._root) && this._fallbackRoot;
  }, et.prototype._isSilentFallbackWarn = function (t) {
    return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(t) : this._silentFallbackWarn;
  }, et.prototype._isSilentFallback = function (t, e) {
    return this._isSilentFallbackWarn(e) && (this._isFallbackRoot() || t !== this.fallbackLocale);
  }, et.prototype._isSilentTranslationWarn = function (t) {
    return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(t) : this._silentTranslationWarn;
  }, et.prototype._interpolate = function (t, e, n, r, i, o, c) {
    if (!e) return null;
    var u,
      h = this._path.getPathValue(e, n);
    if (Array.isArray(h) || s(h)) return h;
    if (l(h)) {
      if (!s(e)) return null;
      if (!a(u = e[n])) return null;
    } else {
      if (!a(h)) return null;
      u = h;
    }
    return (u.indexOf("@:") >= 0 || u.indexOf("@.") >= 0) && (u = this._link(t, e, u, r, "raw", o, c)), this._render(u, i, o, n);
  }, et.prototype._link = function (t, e, n, r, a, i, o) {
    var s = n,
      l = s.match(Z);
    for (var c in l) {
      if (l.hasOwnProperty(c)) {
        var u = l[c],
          f = u.match(K),
          p = f[0],
          m = f[1],
          _ = u.replace(p, "").replace(Q, "");
        if (h(o, _)) return s;
        o.push(_);
        var g = this._interpolate(t, e, _, r, "raw" === a ? "string" : a, "raw" === a ? void 0 : i, o);
        if (this._isFallbackRoot(g)) {
          if (!this._root) throw Error("unexpected error");
          var v = this._root.$i18n;
          g = v._translate(v._getMessages(), v.locale, v.fallbackLocale, _, r, a, i);
        }
        g = this._warnDefault(t, _, g, r, Array.isArray(i) ? i : [i], a), this._modifiers.hasOwnProperty(m) ? g = this._modifiers[m](g) : Y.hasOwnProperty(m) && (g = Y[m](g)), o.pop(), s = g ? s.replace(u, g) : s;
      }
    }
    return s;
  }, et.prototype._render = function (t, e, n, r) {
    var i = this._formatter.interpolate(t, n, r);
    return i || (i = tt.interpolate(t, n, r)), "string" !== e || a(i) ? i : i.join("");
  }, et.prototype._appendItemToChain = function (t, e, n) {
    var r = !1;
    return h(t, e) || (r = !0, e && (r = "!" !== e[e.length - 1], e = e.replace(/!/g, ""), t.push(e), n && n[e] && (r = n[e]))), r;
  }, et.prototype._appendLocaleToChain = function (t, e, n) {
    var r,
      a = e.split("-");
    do {
      var i = a.join("-");
      r = this._appendItemToChain(t, i, n), a.splice(-1, 1);
    } while (a.length && !0 === r);
    return r;
  }, et.prototype._appendBlockToChain = function (t, e, n) {
    for (var r = !0, i = 0; i < e.length && "boolean" == typeof r; i++) {
      var o = e[i];
      a(o) && (r = this._appendLocaleToChain(t, o, n));
    }
    return r;
  }, et.prototype._getLocaleChain = function (t, e) {
    if ("" === t) return [];
    this._localeChainCache || (this._localeChainCache = {});
    var i = this._localeChainCache[t];
    if (!i) {
      e || (e = this.fallbackLocale), i = [];
      for (var o, s = [t]; n(s);) {
        s = this._appendBlockToChain(i, s, e);
      }
      (s = a(o = n(e) ? e : r(e) ? e.default ? e.default : null : e) ? [o] : o) && this._appendBlockToChain(i, s, null), this._localeChainCache[t] = i;
    }
    return i;
  }, et.prototype._translate = function (t, e, n, r, a, i, o) {
    for (var s, c = this._getLocaleChain(e, n), u = 0; u < c.length; u++) {
      var h = c[u];
      if (!l(s = this._interpolate(h, t[h], r, a, i, o, [r]))) return s;
    }
    return null;
  }, et.prototype._t = function (t, e, n, r) {
    for (var a, i = [], o = arguments.length - 4; o-- > 0;) {
      i[o] = arguments[o + 4];
    }
    if (!t) return "";
    var s = c.apply(void 0, i),
      l = s.locale || e,
      u = this._translate(n, l, this.fallbackLocale, t, r, "string", s.params);
    if (this._isFallbackRoot(u)) {
      if (!this._root) throw Error("unexpected error");
      return (a = this._root).$t.apply(a, [t].concat(i));
    }
    return u = this._warnDefault(l, t, u, r, i, "string"), this._postTranslation && null != u && (u = this._postTranslation(u, t)), u;
  }, et.prototype.t = function (t) {
    for (var e, n = [], r = arguments.length - 1; r-- > 0;) {
      n[r] = arguments[r + 1];
    }
    return (e = this)._t.apply(e, [t, this.locale, this._getMessages(), null].concat(n));
  }, et.prototype._i = function (t, e, n, r, a) {
    var i = this._translate(n, e, this.fallbackLocale, t, r, "raw", a);
    if (this._isFallbackRoot(i)) {
      if (!this._root) throw Error("unexpected error");
      return this._root.$i18n.i(t, e, a);
    }
    return this._warnDefault(e, t, i, r, [a], "raw");
  }, et.prototype.i = function (t, e, n) {
    return t ? (a(e) || (e = this.locale), this._i(t, e, this._getMessages(), null, n)) : "";
  }, et.prototype._tc = function (t, e, n, r, a) {
    for (var i, o = [], s = arguments.length - 5; s-- > 0;) {
      o[s] = arguments[s + 5];
    }
    if (!t) return "";
    void 0 === a && (a = 1);
    var l = {
        count: a,
        n: a
      },
      u = c.apply(void 0, o);
    return u.params = Object.assign(l, u.params), o = null === u.locale ? [u.params] : [u.locale, u.params], this.fetchChoice((i = this)._t.apply(i, [t, e, n, r].concat(o)), a);
  }, et.prototype.fetchChoice = function (t, e) {
    if (!t && !a(t)) return null;
    var n = t.split("|");
    return n[e = this.getChoiceIndex(e, n.length)] ? n[e].trim() : t;
  }, et.prototype.tc = function (t, e) {
    for (var n, r = [], a = arguments.length - 2; a-- > 0;) {
      r[a] = arguments[a + 2];
    }
    return (n = this)._tc.apply(n, [t, this.locale, this._getMessages(), null, e].concat(r));
  }, et.prototype._te = function (t, e, n) {
    for (var r = [], a = arguments.length - 3; a-- > 0;) {
      r[a] = arguments[a + 3];
    }
    var i = c.apply(void 0, r).locale || e;
    return this._exist(n[i], t);
  }, et.prototype.te = function (t, e) {
    return this._te(t, this.locale, this._getMessages(), e);
  }, et.prototype.getLocaleMessage = function (t) {
    return u(this._vm.messages[t] || {});
  }, et.prototype.setLocaleMessage = function (t, e) {
    "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, e);
  }, et.prototype.mergeLocaleMessage = function (t, e) {
    "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, m({}, this._vm.messages[t] || {}, e));
  }, et.prototype.getDateTimeFormat = function (t) {
    return u(this._vm.dateTimeFormats[t] || {});
  }, et.prototype.setDateTimeFormat = function (t, e) {
    this._vm.$set(this._vm.dateTimeFormats, t, e), this._clearDateTimeFormat(t, e);
  }, et.prototype.mergeDateTimeFormat = function (t, e) {
    this._vm.$set(this._vm.dateTimeFormats, t, m(this._vm.dateTimeFormats[t] || {}, e)), this._clearDateTimeFormat(t, e);
  }, et.prototype._clearDateTimeFormat = function (t, e) {
    for (var n in e) {
      var r = t + "__" + n;
      this._dateTimeFormatters.hasOwnProperty(r) && delete this._dateTimeFormatters[r];
    }
  }, et.prototype._localizeDateTime = function (t, e, n, r, a) {
    for (var i = e, o = r[i], s = this._getLocaleChain(e, n), c = 0; c < s.length; c++) {
      var u = s[c];
      if (i = u, !l(o = r[u]) && !l(o[a])) break;
    }
    if (l(o) || l(o[a])) return null;
    var h = o[a],
      f = i + "__" + a,
      p = this._dateTimeFormatters[f];
    return p || (p = this._dateTimeFormatters[f] = new Intl.DateTimeFormat(i, h)), p.format(t);
  }, et.prototype._d = function (t, e, n) {
    if (!n) return new Intl.DateTimeFormat(e).format(t);
    var r = this._localizeDateTime(t, e, this.fallbackLocale, this._getDateTimeFormats(), n);
    if (this._isFallbackRoot(r)) {
      if (!this._root) throw Error("unexpected error");
      return this._root.$i18n.d(t, n, e);
    }
    return r || "";
  }, et.prototype.d = function (t) {
    for (var e = [], n = arguments.length - 1; n-- > 0;) {
      e[n] = arguments[n + 1];
    }
    var i = this.locale,
      o = null;
    return 1 === e.length ? a(e[0]) ? o = e[0] : r(e[0]) && (e[0].locale && (i = e[0].locale), e[0].key && (o = e[0].key)) : 2 === e.length && (a(e[0]) && (o = e[0]), a(e[1]) && (i = e[1])), this._d(t, i, o);
  }, et.prototype.getNumberFormat = function (t) {
    return u(this._vm.numberFormats[t] || {});
  }, et.prototype.setNumberFormat = function (t, e) {
    this._vm.$set(this._vm.numberFormats, t, e), this._clearNumberFormat(t, e);
  }, et.prototype.mergeNumberFormat = function (t, e) {
    this._vm.$set(this._vm.numberFormats, t, m(this._vm.numberFormats[t] || {}, e)), this._clearNumberFormat(t, e);
  }, et.prototype._clearNumberFormat = function (t, e) {
    for (var n in e) {
      var r = t + "__" + n;
      this._numberFormatters.hasOwnProperty(r) && delete this._numberFormatters[r];
    }
  }, et.prototype._getNumberFormatter = function (t, e, n, r, a, i) {
    for (var o = e, s = r[o], c = this._getLocaleChain(e, n), u = 0; u < c.length; u++) {
      var h = c[u];
      if (o = h, !l(s = r[h]) && !l(s[a])) break;
    }
    if (l(s) || l(s[a])) return null;
    var f,
      p = s[a];
    if (i) f = new Intl.NumberFormat(o, Object.assign({}, p, i));else {
      var m = o + "__" + a;
      (f = this._numberFormatters[m]) || (f = this._numberFormatters[m] = new Intl.NumberFormat(o, p));
    }
    return f;
  }, et.prototype._n = function (t, e, n, r) {
    if (!et.availabilities.numberFormat) return "";
    if (!n) return (r ? new Intl.NumberFormat(e, r) : new Intl.NumberFormat(e)).format(t);
    var a = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), n, r),
      i = a && a.format(t);
    if (this._isFallbackRoot(i)) {
      if (!this._root) throw Error("unexpected error");
      return this._root.$i18n.n(t, Object.assign({}, {
        key: n,
        locale: e
      }, r));
    }
    return i || "";
  }, et.prototype.n = function (e) {
    for (var n = [], i = arguments.length - 1; i-- > 0;) {
      n[i] = arguments[i + 1];
    }
    var o = this.locale,
      s = null,
      l = null;
    return 1 === n.length ? a(n[0]) ? s = n[0] : r(n[0]) && (n[0].locale && (o = n[0].locale), n[0].key && (s = n[0].key), l = Object.keys(n[0]).reduce(function (e, r) {
      var a;
      return h(t, r) ? Object.assign({}, e, ((a = {})[r] = n[0][r], a)) : e;
    }, null)) : 2 === n.length && (a(n[0]) && (s = n[0]), a(n[1]) && (o = n[1])), this._n(e, o, s, l);
  }, et.prototype._ntp = function (t, e, n, r) {
    if (!et.availabilities.numberFormat) return [];
    if (!n) return (r ? new Intl.NumberFormat(e, r) : new Intl.NumberFormat(e)).formatToParts(t);
    var a = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), n, r),
      i = a && a.formatToParts(t);
    if (this._isFallbackRoot(i)) {
      if (!this._root) throw Error("unexpected error");
      return this._root.$i18n._ntp(t, e, n, r);
    }
    return i || [];
  }, Object.defineProperties(et.prototype, nt), Object.defineProperty(et, "availabilities", {
    get: function get() {
      if (!G) {
        var t = "undefined" != typeof Intl;
        G = {
          dateTimeFormat: t && void 0 !== Intl.DateTimeFormat,
          numberFormat: t && void 0 !== Intl.NumberFormat
        };
      }
      return G;
    }
  }), et.install = I, et.version = "8.20.0", et;
}, "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;

/***/ }),

/***/ 68:
/*!*******************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/common/http.interceptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
var install = function install(Vue, vm) {
  Vue.prototype.$u.http.setConfig({
    // baseUrl: 'http://localhost:8833',
    baseUrl: 'http://localhost:8833'
    // 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
    // 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
    // originalData: true,
    // 设置自定义头部content-type
    // header: {
    // 	'content-type': 'xxx'
    // }
  });
  // 请求拦截，配置Token等参数
  Vue.prototype.$u.http.interceptor.request = function (config) {
    // config.header.Token = vm.$store.state.token;

    // 方式一，存放在vuex的token，假设使用了uView封装的vuex方式，见：https://uviewui.com/components/globalVariable.html
    // config.header.token = vm.token;

    // 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
    // config.header.token = vm.$store.state.token;

    // 方式三，如果token放在了globalData，通过getApp().globalData获取
    // config.header.token = getApp().globalData.username;

    // 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
    var token = vm.$store.state.token;
    config.header.Authorization = 'Bearer ' + (token ? token : uni.getStorageSync('token'));
    return config;
  };
  // 响应拦截，判断状态码是否通过
  Vue.prototype.$u.http.interceptor.response = function (res) {
    // 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
    // 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
    return new Promise(function (resolve, reject) {
      // uni.$u.route({
      // 	url: 'pages/common/login',
      // })
      if (res.code == 200) {
        // 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
        resolve(res);
      } else {
        if (res.code == 401) {
          uni.$u.route({
            url: 'pages/common/login'
          });
        } else {
          reject(res);
        }
        // reject(res);
      }
      ;
    });
  };
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 69:
/*!***********************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/common/http.api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
var getWxLoginUrl = "/wxLogin"; //获取微信openid
var getWxPhoneNumberUrl = "/getWxPhoneNumber"; //获取微信手机号
var getPhoneCodeUrl = "/api/authfree/getPhoneCode"; //获取验证码
var addUserAddressUrl = "/api/authcheck/addUserAddress"; //添加用户地址
var editUserAddressUrl = "/api/authcheck/editUserAddress"; //
var editUserInfoUrl = "/api/authcheck/editUserInfo"; //修改用户信息
var getUserAddressListUrl = "/api/authcheck/getUserAddressList"; //获取用户地址列表
var getUserInfoUrl = "/api/authcheck/getUserInfo"; //获取用户信息
var removeUserAddressUrl = '/api/authcheck/removeUserAddress'; //删除用户地址
var setUserAddressDefaultUrl = "/api/authcheck/setUserAddressDefault"; //设置用户地址为默认

var getBannerListUrl = "/api/authfree/getBannerList"; //系统banner列表
var getProtocolDetailUrl = "/api/authfree/getProtocolDetail"; //获取协议文本内容
var getBrandDetailInfoUrl = "/api/authfree/getBrandDetailInfo"; //品牌介绍
var getSystemServicePhoneUrl = "/api/authfree/getSystemServicePhone"; //查询系统客服电话
var getQuestionListUrl = "/api/authfree/getQuestionList"; //查询问题管理列表
var confirmReciveOrderUrl = "/api/authcheck/confirmReciveOrder"; //确认收货
var getUserMsgUrl = "/api/authcheck/getUserMsg"; //获取用户消息列表
var getUserOrderInfosUrl = "/api/authcheck/getUserOrderInfos"; //查询用户订单信息参数:订单状态01待支付02已支付03已收货(已完成)
var getApplyItemsUrl = "/api/authfree/getApplyItems"; //项目预约列表
var getApplyItemsDetailUrl = "/api/authfree/getApplyItemsDetail"; //预约项目详细信息
var getArticleTypesUrl = "/api/authfree/getArticleTypes"; //查询文章类型
var getArticleLlistUrl = "/api/authfree/getArticleLlist"; //查询文章列表/根据类型
var getArticleDetailUrl = "/api/authfree/getArticleDetail"; //获取文章详细信息
var getGoodsTypeUrl = "/api/authfree/getGoodsType"; //获取商品类别
var getGoodsListByTypeUrl = "/api/authfree/getGoodsListByType"; //根据类型获取商品
var getGoodsDetailUrl = "/api/authfree/getGoodsDetail"; //获取商品详细信息
var getReferrerGoodsUrl = "/api/authfree/getReferrerGoods"; //获取推荐商品
var getWxDoctorQrcodeUrl = "/api/authcheck/getWxDoctorQrcode"; //生成推广二维码(小程序专用)
var getUserAddressDetailUrl = "/api/authcheck/getUserAddressDetail";
var getUserAccountDetailUrl = "/api/authcheck/getUserAccountDetail"; //查询用户资金记录:01入账记录02消费记录03体现记录
var getAllMyInviteListUrl = "/api/authcheck/getAllMyInviteList"; //查询我的全部邀请记录
var getMyInviteListUrl = "/api/authcheck/getMyInviteList"; //查询我的推广记录
var addGoodsCartUrl = "/api/authcheck/addGoodsCart"; //加入购物车
var preGoodsOrderUrl = "/api/authcheck/preGoodsOrder"; //购买商品生成预付订单
var quickBuyGoodsUrl = "/api/authcheck/quickBuyGoods"; //购买商品
var applyShopItemUrl = "/api/authcheck/applyShopItem"; //立即预约项目
var applayWithdrawUrl = "/api/authcheck/applayWithdraw"; //用户申请零钱提现
var cancelMyApplyItemUrl = "/api/authcheck/cancelMyApplyItem"; //取消预约
var setMyApplyItemTimeUrl = "/api/authcheck/setMyApplyItemTime"; //更改预约时间
var getMyApplyItemDetailUrl = "/api/authcheck/getMyApplyItemDetail"; //查询我的预约:状态01已预约 02预约完成
var getGoodsCartListUrl = "/api/authcheck/getGoodsCartList"; //购物车商品列表
var getPreCartGoodsOrderUrl = "/api/authcheck/preCartGoodsOrder"; //购物车商品生成预付订单
var removeGoodsCartNumUrl = "/api/authcheck/removeGoodsCartNum"; //移除购物车商品
var payUserWaitOrderUrl = '/api/authcheck/payUserWaitOrder'; //待支付订单支付
var setGoodsCartNumUrl = '/api/authcheck/setGoodsCartNum'; //设置购物车数量
var getUserOrderDetailUrl = '/api/authcheck/getUserOrderDetail'; //订单详情
var setApplyApproveUrl = '/api/authcheck/setApplyApprove'; //设置预约状态
var getSystemLogisticsCustUrl = '/api/authfree/getSystemLogisticsCust';
var editUserPhoneUrl = '/api/authcheck/editUserPhone'; //修改登陆手机
var cancelOrderUrl = "/api/authcheck/userCancelOrder"; //取消订单
var applayBindInviteRelaUrl = "/api/authcheck/applayBindInviteRela"; //绑定上下级关系
var getAllMyIncomeListUrl = "/api/authcheck/getAllMyIncomeList"; //佣金记录
var getMyItemDetaiUrl = "/api/authcheck/getMyItemDetail"; //

var preCardsOrderUrl = "/api/authcheck/preCardsOrder";
var getCardsDetaiUrl = "/api/authfree/getCardsDetail";
var getItemOrderDetailUrl = "/api/authcheck/getItemOrderDetail";

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
var install = function install(Vue, vm) {
  var _vm$$u$api;
  // 此处没有使用传入的params参数
  var getWxLogin = function getWxLogin() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(getWxLoginUrl, params);
  };
  var getWxPhoneNumber = function getWxPhoneNumber() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.post(getWxPhoneNumberUrl, params);
  };
  var addUserAddress = function addUserAddress() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.post(addUserAddressUrl, params);
  };
  var editUserAddress = function editUserAddress() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.put(editUserAddressUrl, params);
  };
  var editUserInfo = function editUserInfo() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.put(editUserInfoUrl, params);
  };
  var getUserAddressList = function getUserAddressList() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(getUserAddressListUrl, params);
  };
  var getUserInfo = function getUserInfo() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(getUserInfoUrl, params);
  };
  var addGoodsCart = function addGoodsCart() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(addGoodsCartUrl, params);
  };
  var preGoodsOrder = function preGoodsOrder() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(preGoodsOrderUrl, params);
  };
  var quickBuyGoods = function quickBuyGoods() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.post(quickBuyGoodsUrl, params);
  };
  var applyShopItem = function applyShopItem() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.post(applyShopItemUrl, params);
  };
  var applayWithdraw = function applayWithdraw() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.post(applayWithdrawUrl, params);
  };
  var setGoodsCartNum = function setGoodsCartNum() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(setGoodsCartNumUrl, params);
  };
  var setApplyApprove = function setApplyApprove() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(setApplyApproveUrl, params);
  };
  var applayBindInviteRela = function applayBindInviteRela() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(applayBindInviteRelaUrl, params);
  };
  var getAllMyIncomeList = function getAllMyIncomeList() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(getAllMyIncomeListUrl, params);
  };
  var preCardsOrder = function preCardsOrder() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(preCardsOrderUrl, params);
  };
  var getItemOrderDetail = function getItemOrderDetail() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return vm.$u.get(getItemOrderDetailUrl, params);
  };

  // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
  vm.$u.api = (_vm$$u$api = {
    //get
    getBannerListUrl: getBannerListUrl,
    getPhoneCodeUrl: getPhoneCodeUrl,
    getBrandDetailInfoUrl: getBrandDetailInfoUrl,
    getSystemServicePhoneUrl: getSystemServicePhoneUrl,
    getQuestionListUrl: getQuestionListUrl,
    editUserPhoneUrl: editUserPhoneUrl,
    getUserAddressList: getUserAddressList,
    getUserInfo: getUserInfo,
    removeUserAddressUrl: removeUserAddressUrl,
    editUserAddressUrl: editUserAddressUrl,
    addUserAddressUrl: addUserAddressUrl,
    getApplyItemsUrl: getApplyItemsUrl,
    getApplyItemsDetailUrl: getApplyItemsDetailUrl,
    getArticleTypesUrl: getArticleTypesUrl,
    getArticleLlistUrl: getArticleLlistUrl,
    getArticleDetailUrl: getArticleDetailUrl,
    getGoodsTypeUrl: getGoodsTypeUrl,
    getGoodsListByTypeUrl: getGoodsListByTypeUrl,
    getGoodsDetailUrl: getGoodsDetailUrl,
    getUserMsgUrl: getUserMsgUrl,
    getReferrerGoodsUrl: getReferrerGoodsUrl,
    getWxDoctorQrcodeUrl: getWxDoctorQrcodeUrl,
    getUserAddressDetailUrl: getUserAddressDetailUrl,
    getUserAccountDetailUrl: getUserAccountDetailUrl,
    getAllMyInviteListUrl: getAllMyInviteListUrl,
    getAllMyIncomeList: getAllMyIncomeList,
    getMyInviteListUrl: getMyInviteListUrl,
    getProtocolDetailUrl: getProtocolDetailUrl,
    addGoodsCart: addGoodsCart,
    preGoodsOrder: preGoodsOrder,
    quickBuyGoods: quickBuyGoods,
    applyShopItem: applyShopItem,
    applayWithdraw: applayWithdraw,
    cancelMyApplyItemUrl: cancelMyApplyItemUrl,
    setMyApplyItemTimeUrl: setMyApplyItemTimeUrl,
    getMyApplyItemDetailUrl: getMyApplyItemDetailUrl,
    getGoodsCartListUrl: getGoodsCartListUrl,
    getPreCartGoodsOrderUrl: getPreCartGoodsOrderUrl,
    removeGoodsCartNumUrl: removeGoodsCartNumUrl,
    payUserWaitOrderUrl: payUserWaitOrderUrl,
    setGoodsCartNum: setGoodsCartNum,
    getUserOrderDetailUrl: getUserOrderDetailUrl,
    setApplyApprove: setApplyApprove,
    confirmReciveOrderUrl: confirmReciveOrderUrl,
    getSystemLogisticsCustUrl: getSystemLogisticsCustUrl,
    cancelOrderUrl: cancelOrderUrl,
    applayBindInviteRela: applayBindInviteRela
  }, (0, _defineProperty2.default)(_vm$$u$api, "getAllMyIncomeList", getAllMyIncomeList), (0, _defineProperty2.default)(_vm$$u$api, "getMyItemDetaiUrl", getMyItemDetaiUrl), (0, _defineProperty2.default)(_vm$$u$api, "preCardsOrder", preCardsOrder), (0, _defineProperty2.default)(_vm$$u$api, "getCardsDetaiUrl", getCardsDetaiUrl), (0, _defineProperty2.default)(_vm$$u$api, "preCardsOrderUrl", preCardsOrderUrl), (0, _defineProperty2.default)(_vm$$u$api, "getItemOrderDetail", getItemOrderDetail), (0, _defineProperty2.default)(_vm$$u$api, "getWxPhoneNumber", getWxPhoneNumber), (0, _defineProperty2.default)(_vm$$u$api, "addUserAddress", addUserAddress), (0, _defineProperty2.default)(_vm$$u$api, "editUserAddress", editUserAddress), (0, _defineProperty2.default)(_vm$$u$api, "editUserInfo", editUserInfo), (0, _defineProperty2.default)(_vm$$u$api, "getUserOrderInfosUrl", getUserOrderInfosUrl), (0, _defineProperty2.default)(_vm$$u$api, "setUserAddressDefaultUrl", setUserAddressDefaultUrl), (0, _defineProperty2.default)(_vm$$u$api, "getWxLogin", getWxLogin), _vm$$u$api);
};
var _default = {
  install: install
};
exports.default = _default;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 70:
/*!**********************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/store/$u.mixin.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 64);
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 63));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// 尝试将用户在根目录中的store/index.js的vuex的state变量，全部加载到全局变量中
var $uStoreKey = [];
try {
  $uStoreKey = _store.default.state ? Object.keys(_store.default.state) : [];
} catch (e) {}
module.exports = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    // 将vuex方法挂在到$u中
    // 使用方法为：如果要修改vuex的state中的user.name变量为"史诗" => this.$u.vuex('user.name', '史诗')
    // 如果要修改vuex的state的version变量为1.0.1 => this.$u.vuex('version', '1.0.1')
    this.$u.vuex = function (name, value) {
      _this.$store.commit('$uStore', {
        name: name,
        value: value
      });
    };
  },
  computed: _objectSpread({}, (0, _vuex.mapState)($uStoreKey))
};

/***/ }),

/***/ 71:
/*!***********************************************************************************!*\
  !*** F:/giteeWarehouse/meirong/jiumi-admin-weixin/uview-ui/libs/mixin/mpShare.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  onLoad: function onLoad() {
    // 设置默认的转发参数
    this.$u.mpShare = {
      title: '',
      // 默认为小程序名称
      path: '',
      // 默认为当前页面路径
      imageUrl: '' // 默认为当前页面的截图
    };
  },
  onShareAppMessage: function onShareAppMessage() {
    return this.$u.mpShare;
  },
  onShareTimeline: function onShareTimeline() {
    return this.$u.mpShare;
  }
};

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map