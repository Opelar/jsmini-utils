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

export default urlArgs;
