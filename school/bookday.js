var now = new Date();

var firstDay = new Date("2017-05-07");

var toNow = now.getTime();
var tofirst = firstDay.getTime();

var passedTime = toNow - tofirst;

passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));

document.querySelector("#result").innerText = passedTime;
