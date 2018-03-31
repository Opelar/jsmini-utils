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

export default getCookies;
