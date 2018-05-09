var $ = function(selector) {
  return document.getElementById(selector);
};

var add = function (d) {
  d.setDate(d.getDate() + 280);
  return d.toLocaleDateString();
}

$("btn").addEventListener(
  "click",
  function() {
    $("end").innerHTML = "";
    var startTime = $("start").value;
    var utc = new Date(startTime);
    
    $("end").innerHTML = add(utc);
  },
  false
);
