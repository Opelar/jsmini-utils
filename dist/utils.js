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

  /**
   * 判断是对象还是数组
   * @param {Array || object} arr
   */

  function isArray(arrOrObj) {
    if (!arrOrObj || (typeof arrOrObj === "undefined" ? "undefined" : _typeof(arrOrObj)) !== "object") {
      throw new Error("arg is not an object");
    }

    // if (Array.isArray(arrOrObj)) {
    //   return true;
    // } else {
    //   return false;
    // }

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

  /**
   * 判断是否是数字 （排除 NaN）
   * @param {number} value
   */
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
  function formateDate(timestamp) {
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

  var utils = {
    urlArgs: urlArgs,
    getUrlParam: getUrlParam,
    getURLParameters: getURLParameters,
    getCookies: getCookies,
    isArray: isArray,
    upsetArray: upsetArray,
    isNumber: isNumber,
    trimString: trimString,
    formateDate: formateDate,
    classof: classof
  };

  return utils;

})));
//# sourceMappingURL=utils.js.map
