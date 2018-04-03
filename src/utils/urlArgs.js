/**
 * reg 获取 param
 * @param {String} name
 */
export function getUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return decodeURI(r[2]);
  }

  return null;
}

/**
 * split() 获取 paramName
 * @param {String} paramName
 */
export function getURLParameters(paramName) {
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
      if (sParam[1] != "") arrParamValues[i] = unescape(sParam[1]);
      else arrParamValues[i] = "No Value";
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
