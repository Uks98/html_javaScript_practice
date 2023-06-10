var title = document.getElementById("title");
var list = document.getElementById("list");
var li = list.getElementsByTagName("li");
var addBtn = document.getElementById("add-btn");

//이벤트 리스너
list.addEventListener("click", activeItem);

function activeItem(event) {
  //클릭한 노드가 li일 경우
  if (event.target.nodeName == "LI") {
    title.innerHTML = event.target.innerText;

    //목록 스타일 초기화
    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].removeAttribute("class");
    }
    //클릭한 목록 스타일 지정
    event.target.setAttribute("class", "active");
  }
}

addBtn.addEventListener("click", function () {
  var text = prompt("제목 입력");
  list.innerHTML += "<li>" + text + "</li>";
});
