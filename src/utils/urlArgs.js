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
  let sURL = window.document.URL.toString();

  if (sURL.indexOf("?") > 0) {
    let arrParams = sURL.split("?");

    let arrURLParams = arrParams[1].split("&");

    let arrParamNames = new Array(arrURLParams.length);
    let arrParamValues = new Array(arrURLParams.length);

    let i = 0;
    for (i = 0; i < arrURLParams.length; i++) {
      let sParam = arrURLParams[i].split("=");
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
 * let args = urlArgs(); 
 * let q = args.q || ""; 
 * let n = args.n ? parseInt(args.n) : 10;
 */
export function urlArgs() {
  let args = {};
  let query = location.search.substring(1);
  let pairs = query.split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf("=");
    if (pos == -1) continue; // If not found, skip it
    let name = pairs[i].substring(0, pos); // name
    let value = pairs[i].substring(pos + 1); // value
    value = decodeURIComponent(value); // Decode the value
    args[name] = value;
  }
  return args;
}
