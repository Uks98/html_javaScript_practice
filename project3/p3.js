var indicator = document.querySelectorAll(".indicator button");
var lightBox = document.querySelector("#lightbox");
var block = document.querySelector("#block"); //라이트 박스 변경

//라이트 박스 표시

function light_box_open(num) {
  lightBox.setAttribute("class", "active");
  block.setAttribute("class", "active");
  change_img(num);
  indicator[num - 1].focus();
}

//박스 닫기

function lightbox_close() {
  lightBox.removeAttribute("class");
  block.removeAttribute("class");
}

//이미지 전환 표시 함수
function change_img(val) {
  var img = document.querySelectorAll("figure>img");

  for (var i = 0; i < img.length; i++) {
    img[i].removeAttribute("class");
  }
  console.log(val);
  img[val - 1].setAttribute("class", "active");
}
