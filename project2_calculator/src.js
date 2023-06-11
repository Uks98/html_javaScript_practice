var inp = document.forms["cal"]; // form에 접근
var input = inp.getElementsByTagName("input");
var cls_btn = document.getElementsByClassName("cls_btn")[0];
var result_btn = document.getElementsByClassName("result_btn")[0];

for (let i = 0; i < input.length; i++) {
  if (input[i].value != "=" && input[i].value != "clear") {
    input[i].onclick = function () {
      cal(this.value);
    };
  } //end if
} //end for

//계산기 입력 처리 함수

function cal(value) {
  if (inp["result"].value == "0") {
    inp["result"].value = "";
  }
  inp["result"].value += value;
}

function clr() {
  inp["result"].value = 0;
}

cls_btn.onclick = function () {
  clr();
};

function myResult() {
  var result = document.forms["cal"]["result"];

  var calc = eval(result.value);

  inp["result"].value = calc;
}

result_btn.onclick = function () {
  try {
    myResult();
  } catch (error) {
    var result = inp["result"];
    result.value = "입력오류";
  }
};
