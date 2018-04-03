// 返回document的cookie作为 objext name/value
// 假设cookie值是用encodeURIComponent() 进行编码的。
function getCookies() {
  let cookies = {};
  let all = document.cookie; // Get all cookies in string
  if (all === "") return cookies;
  let list = all.split("; ");

  for (let i = 0; i < list.length; i++) {
    let cookie = list[i];
    let p = cookie.indexOf("=");
    let name = cookie.substring(0, p);
    let value = cookie.substring(p + 1);
    value = decodeURIComponent(value);
    cookies[name] = value;
  }

  return cookies;
}

export default getCookies;
