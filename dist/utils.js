(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.utils = factory());
}(this, (function () { 'use strict';

  /*
   * get url params
   * var args = urlArgs(); 
   * var q = args.q || ""; 
   * var n = args.n ? parseInt(args.n) : 10;
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

  var utils = {
    urlArgs: urlArgs,
    getCookies: getCookies
  };

  return utils;

})));
//# sourceMappingURL=utils.js.map
