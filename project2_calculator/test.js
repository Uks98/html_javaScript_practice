var inputs = document.getElementsByTagName("input");
var frm = document.forms["frm"];

function result() {
  var x = parseInt(frm["a1"].value); // 9
  var y = parseInt(frm["a2"].value); // 3
  var z = parseInt(x + y);
  var answer = parseInt(frm["anser"].value);
  if (answer == z) {
    alert("정답입니다.");
  } else if (answer != z) {
    alert("틀렸습니다.");
  } else {
    alert("틀렸");
  }
}
