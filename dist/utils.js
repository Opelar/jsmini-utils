(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.utils = factory());
}(this, (function () { 'use strict';

  /**
   * reg 获取 param
   * @param {String} name
   */
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
      return decodeURI(r[2]);
    }

    return null;
  }

  /**
   * split() 获取 paramName
   * @param {String} paramName
   */
  function getURLParameters(paramName) {
    var sURL = window.document.URL.toString();

    if (sURL.indexOf("?") > 0) {
      var arrParams = sURL.split("?");

      var arrURLParams = arrParams[1].split("&");

      var arrParamNames = new Array(arrURLParams.length);
      var arrParamValues = new Array(arrURLParams.length);

      var i = 0;
      for (i = 0; i < arrURLParams.length; i++) {
        var sParam = arrURLParams[i].split("=");
        arrParamNames[i] = sParam[0];
        if (sParam[1] != "") arrParamValues[i] = unescape(sParam[1]);else arrParamValues[i] = "No Value";
      }

      for (i = 0; i < arrURLParams.length; i++) {
        if (arrParamNames[i] == paramName) {
          return arrParamValues[i];
        }
      }
      return "No Parameters Found";
    }
  }

  /*
   * get url params
   * let args = urlArgs(); 
   * let q = args.q || ""; 
   * let n = args.n ? parseInt(args.n) : 10;
   */
  function urlArgs() {
    var args = {};
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pos = pairs[i].indexOf("=");
      if (pos == -1) continue; // If not found, skip it
      var name = pairs[i].substring(0, pos); // name
      var value = pairs[i].substring(pos + 1); // value
      value = decodeURIComponent(value); // Decode the value
      args[name] = value;
    }
    return args;
  }

  // 返回document的cookie作为 objext name/value
  // 假设cookie值是用encodeURIComponent() 进行编码的。
  function getCookies() {
    var cookies = {};
    var all = document.cookie; // Get all cookies in string
    if (all === "") return cookies;
    var list = all.split("; ");

    for (var i = 0; i < list.length; i++) {
      var cookie = list[i];
      var p = cookie.indexOf("=");
      var name = cookie.substring(0, p);
      var value = cookie.substring(p + 1);
      value = decodeURIComponent(value);
      cookies[name] = value;
    }

    return cookies;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
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
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  function isArray(arrOrObj) {
    if (!arrOrObj || (typeof arrOrObj === "undefined" ? "undefined" : _typeof(arrOrObj)) !== "object") {
      throw new Error("arg is not an object");
    }
    return Object.prototype.toString.call(arrOrObj).slice(8, -1) === "Array";
  }

  /**
   * 数组随机乱序
   * @param {Array} arr
   */
  function upsetArray(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }

  function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  }

  /**
   * 去除空格
   * @param {String} str
   * @param {Number} type 1-所有空格 2-前后空格 3-前空格 4-后空格
   */
  function trimString(str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, "");
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:
        return str.replace(/(^\s*)/g, "");
      case 4:
        return str.replace(/(\s*$)/g, "");
      default:
        return str;
    }
  }

  /**
   * 时间戳转时间输出
   * @param {Number} timestamp
   */
  function formatDate(timestamp) {
    var date = new Date(timestamp);
    // 年 月 日
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    // 时 分 秒
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var myDate = year + "-" + month + "-" + day;
    var myTime = hours + ":" + minutes + ":" + seconds;

    return myDate + " " + myTime;
  }

  /**
   * 返回数据的类型
   * classof([]) => "Array"
   */
  function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  }

  var _this = undefined;

  var httpClient = {};

  httpClient.defaults = {
    headers: {}
  };

  httpClient.request = function () {
    var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var _ref2$headers = _ref2.headers,
          headers = _ref2$headers === undefined ? {} : _ref2$headers,
          _ref2$path = _ref2.path,
          path = _ref2$path === undefined ? '/' : _ref2$path,
          _ref2$method = _ref2.method,
          method = _ref2$method === undefined ? 'GET' : _ref2$method,
          _ref2$queryStringObje = _ref2.queryStringObject,
          queryStringObject = _ref2$queryStringObje === undefined ? {} : _ref2$queryStringObje,
          _ref2$payload = _ref2.payload,
          payload = _ref2$payload === undefined ? {} : _ref2$payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', new Promise(function (resolve, reject) {
                var requestUrl = path + '?';
                var counter = 0;

                for (var queryKey in queryStringObject) {
                  if (queryStringObject.hasOwnProperty(queryKey)) {
                    counter += 1;

                    if (counter > 1) {
                      requestUrl += '&';
                    }

                    requestUrl += queryKey + '=' + queryStringObject[queryKey];
                  }
                }

                var xhr = new XMLHttpRequest();

                xhr.open(method, requestUrl, true);
                xhr.setRequestHeader('Content-type', 'application/json');

                headers = Object.assign(httpClient.defaults.headers, headers);

                for (var headerKey in headers) {
                  if (headers.hasOwnProperty(headerKey)) {
                    xhr.setRequestHeader(headerKey, headers[headerKey]);
                  }
                }

                xhr.onreadystatechange = function () {
                  if (xhr.readyState === XMLHttpRequest.DONE) {
                    var statusCode = xhr.status;
                    var responseReturned = xhr.responseText;

                    try {
                      var parsedResponse = JSON.parse(responseReturned);
                      resolve({ statusCode: statusCode, responsePayload: parsedResponse });
                    } catch (error) {
                      reject(error);
                    }
                  }
                };

                var payloadString = JSON.stringify(payload);

                xhr.send(payloadString);
              }));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  function encode(value, opts) {
    if (opts.encode) {
      return encodeURIComponent(value);
    }
    return value;
  }

  function makeQueryString(obj, opts) {
    var defaults = {
      encode: true,
      strict: true
    };

    opts = Object.assign(defaults, opts);

    return obj ? Object.keys(obj).sort().map(function (key) {
      var val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encode(key, opts);
      }

      if (Array.isArray(val)) {
        var result = [];

        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }

          if (val2 === null) {
            result.push(encode(key, opts));
          } else {
            result.push(encode(key, opts) + '=' + encode(val2, opts));
          }
        });

        return result.join('&');
      }

      return encode(key, opts) + '=' + encode(val, opts);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : '';
  }

  function isPromise(obj) {
    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }

  function isPlainObject(obj) {
    if (typeOf(obj) !== 'Object') {
      return false;
    }

    var ctor = obj.constructor;

    if (typeof ctor !== 'function') {
      return false;
    }

    var prot = ctor.prototype;

    if (typeOf(prot) !== 'Object') {
      return false;
    }

    return prot.hasOwnProperty('isPrototypeOf');
  }

  function tryGetValue(fn, defaultValue) {
    try {
      return fn();
    } catch (e) {
      return defaultValue;
    }
  }

  function shallowEqual(objA, objB, compare) {
    if (objA === objB) {
      return true;
    }

    // 其中一个不是object，则不相等
    if (!objA || !objB || (typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) + (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'objectobject') {
      return false;
    }

    var keyA = Object.keys(objA);
    var keyB = Object.keys(objB);
    var len = keyA.length;

    // key 数量不一致则不相等
    if (len !== keyB.length) {
      return false;
    }

    var hasCallback = typeof compare === 'function';

    for (var i = 0; i < len; i++) {
      var key = keyA[i];

      if (!Object.prototype.hasOwnProperty.call(objB, key)) {
        return false;
      }

      var valA = objA[key];
      var valB = objB[key];

      var ret = hasCallback ? compare(valA, valB, key) : void 0;

      if (ret === false || ret === void 0 && valA !== valB) {
        return false;
      }
    }

    return true;
  }

  var utils = {
    urlArgs: urlArgs,
    getUrlParam: getUrlParam,
    getURLParameters: getURLParameters,
    getCookies: getCookies,
    isArray: isArray,
    upsetArray: upsetArray,
    isNumber: isNumber,
    trimString: trimString,
    formatDate: formatDate,
    classof: classof,
    httpClient: httpClient,
    makeQueryString: makeQueryString,
    isPromise: isPromise,
    isPlainObject: isPlainObject,
    tryGetValue: tryGetValue,
    shallowEqual: shallowEqual
  };

  return utils;

})));
//# sourceMappingURL=utils.js.map
