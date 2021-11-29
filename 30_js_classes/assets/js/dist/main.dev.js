"use strict";

function multTable() {
  var n = 10;
  var table = "<table class=\"my_table\">\n    <thead>\n        <tr>";

  for (var i = 1; i <= n; i++) {
    table += "<td>".concat(i, "</td>");
  }

  table += "</tr>        \n    </thead>\n    <tbody>";

  for (var _i = 1; _i <= n; _i++) {
    table += "<tr>";

    for (var j = 1; j <= n; j++) {
      table += "<td>".concat(_i, "  * ").concat(j, " = ").concat(_i * j, "</td>");
    }

    table += "</tr>";
  }

  table += "\n    </tbody>\n    <tfoot>\n        <tr>";

  for (var _i2 = 1; _i2 <= n; _i2++) {
    table += "<td>".concat(_i2, "</td>");
  }

  table += "</tr>        \n    </tfoot>\n</table>";
  document.getElementById("multi_table").innerHTML = table;
}

multTable();

function calc(field_1_id, field_2_id, rez_id) {
  console.log(this);
  var field_1 = document.getElementById(field_1_id);
  var field_2 = document.getElementById(field_2_id);

  if (field_1.value != "" && field_2.value != "") {
    var summ = mySum(field_1.value, field_2.value);
    printResult(summ, rez_id);
  } else {
    printError('Enter both numbers', rez_id);
  }
}

function mySum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = parseInt(a) + parseInt(b);
  return s.toFixed(2); // нельзя ставить перенос строки сразу после return
} //const mySum=(a=0,b=0)=>parseInt(a)+parseInt(b); // стрелочная фуункция


function printResult(s, id) {
  document.getElementById(id).innerHTML = "Summ: " + s;
}

function printError(text, id) {
  document.getElementById(id).innerHTML = "<span style=\"color:red\">".concat(text, "</span>");
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : n;
}; // добавление ноля стрелочная
// function addZero(n){
//     if(n<10){
//         return '0'+n;
//     }else{
//         return n;
//     }
// }


function sayHello() {
  var name = prompt("Enter name");

  if (name != "" && name != null) {
    alert("Hello, " + name + "!");
  } else {
    sayHello();
  }
} // рекурсивная функция (вызывает сама себя)


function checkNewMessage() {
  console.log('CALL: checkNewMessage');
  setTimeout(function () {
    checkNewMessage();
  }, 5000);
} // checkNewMessage();


function sq(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  b = b == 0 ? a : b;
  return a * b;
}

sq(4);