"use strict";

// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function printError(text, id) {
  document.getElementById(id).innerHTML = "<span style=\"color:red\">".concat(text, "</span>");
}

function printResult(text, id) {
  document.getElementById(id).innerHTML = "".concat(text);
}

function compare(field_1_id, field_2_id, rez_id) {
  var field_1 = document.getElementById(field_1_id);
  var field_2 = document.getElementById(field_2_id);

  if (field_1.value == "") {
    printError('Введите первое число', rez_id);
    return false;
  } else if (field_2.value == "") {
    printError('Введите второе число', rez_id);
    return false;
  } else {
    var r = numbersCompare(field_1.value, field_2.value);
    printResult(r, rez_id);
  }
}

function numbersCompare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
} // 2. Написать функцию, которая вычисляет факториал переданного ей числа.


function factorial(num_id, factorial_id) {
  var num = document.getElementById(num_id);

  if (num.value != "") {
    var f = numberFactorial(parseInt(num.value));
    printResult(f, factorial_id);
  } else {
    printError('Введите число', factorial_id);
  }
}

function numberFactorial(a) {
  if (a < 2) {
    return a;
  }

  return a * numberFactorial(a - 1);
} // 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


function transform(field_1_id, field_2_id, field_3_id, rez_id) {
  var field_1 = document.getElementById(field_1_id);
  var field_2 = document.getElementById(field_2_id);
  var field_3 = document.getElementById(field_3_id);

  if (field_1.value == "" && field_1.length == 1) {
    printError('Введите первое число', rez_id);
    return false;
  } else if (field_2.value == "" && field_2.length == 1) {
    printError('Введите второе число', rez_id);
    return false;
  } else if (field_3.value == "" && field_3.length == 1) {
    printError('Введите третье число', rez_id);
    return false;
  } else {
    var t = numbersTransform(parseInt(field_1.value), parseInt(field_2.value), parseInt(field_3.value));
    printResult(t, rez_id);
  }
}

function numbersTransform(a, b, c) {
  return a * 100 + b * 10 + c;
} // 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


function square(field_1_id, field_2_id, square_id) {
  var field_1 = document.getElementById(field_1_id);
  var field_2 = document.getElementById(field_2_id);

  if (field_1.value == "") {
    field_1.value = field_2.value;
  }

  if (field_2.value == "") {
    field_2.value = field_1.value;
  }

  if (field_1.value != "") {
    var sq = squareCount(parseInt(field_1.value), parseInt(field_2.value));
    printResult(sq, square_id);
  } else {
    printError('Введите хотябы одно число', square_id);
  }
}

function squareCount(a, b) {
  return a * b;
} // 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


function idealNumber(field_1_id, ideal_id) {
  var number = document.getElementById(field_1_id);

  if (isIdeal(parseInt(number.value))) {
    printResult('Это совершенное число', ideal_id);
  } else {
    printResult('Это не совершенное число', ideal_id);
  }
}

function isIdeal(number) {
  var divider = 1;
  var summDivider = 0;

  for (divider = 1; divider < number; divider++) {
    if (number % divider == 0) {
      summDivider += divider;
    }
  }

  return number == summDivider;
} // 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.


function idealInRange(fieid_1_id, field_2_id, rez_id) {
  var min = document.getElementById(fieid_1_id);
  var max = document.getElementById(field_2_id);
  var start = parseInt(min.value);
  var end = parseInt(max.value);
  var idealNumbers = '';

  for (i = start; i <= end; i++) {
    if (isIdeal(i)) {
      idealNumbers += "".concat(i, " ");
    }
  }

  printResult("\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430: ".concat(idealNumbers, ","), rez_id);
} // 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


function transformInputInInt(input_id) {
  return parseInt(document.getElementById(input_id).value) || 0;
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : n;
};

function time(field_1_id, field_2_id, field_3_id, rez_id) {
  var hours = transformInputInInt(field_1_id);
  var minutes = transformInputInInt(field_2_id);
  var seconds = transformInputInInt(field_3_id);
  minutes = minutes + Math.abs(Math.trunc(seconds / 60));
  seconds = Math.abs(seconds % 60);
  hours = hours + Math.abs(Math.trunc(minutes / 60));
  minutes = Math.abs(minutes % 60);
  fullTime = "".concat(addZero(hours), ":").concat(addZero(minutes), ":").concat(addZero(seconds));
  printResult("\u0412\u0440\u0435\u043C\u044F ".concat(fullTime), rez_id);
} // 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.


function timeInSecond(field_1_id, field_2_id, field_3_id) {
  var hour = transformInputInInt(field_1_id);
  var minute = transformInputInInt(field_2_id);
  var second = transformInputInInt(field_3_id);
  second = allInSec(hour, minute, second);
  return second;
}

function allInSec(h, m, s) {
  second = s + m * 60 + h * 3600;
  return second;
}

function timeSecInText(field_1_id, field_2_id, field_3_id, rez_id) {
  var second = timeInSecond(field_1_id, field_2_id, field_3_id);
  time_sec = "".concat(addZero(second));
  printResult("\u0412\u0440\u0435\u043C\u044F - ".concat(time_sec, " \u0441\u0435\u043A."), rez_id);
} // 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


function secondInTime(field_1_id, rez_id) {
  var sec = transformInputInInt(field_1_id);
  var t = secInT(sec);
  timeText = "".concat(addZero(t.h), ":").concat(addZero(t.min), ":").concat(addZero(t.sec));
  printResult("\u0412\u0440\u0435\u043C\u044F ".concat(timeText), rez_id);
}

function secInT(sec) {
  var min = Math.abs(Math.trunc(sec / 60));
  var h = Math.abs(Math.trunc(sec / 3600));
  sec = Math.abs(sec % 60);
  min = Math.abs(min % 60);
  var time = {
    h: h,
    min: min,
    sec: sec
  };
  return time;
} // 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».


function timeDifference(field_1_id, field_2_id, field_3_id, field_4_id, field_5_id, field_6_id, rez_id) {
  var hour_1 = transformInputInInt(field_1_id);
  var minute_1 = transformInputInInt(field_2_id);
  var second_1 = transformInputInInt(field_3_id);
  var hour_2 = transformInputInInt(field_4_id);
  var minute_2 = transformInputInInt(field_5_id);
  var second_2 = transformInputInInt(field_6_id);
  var time_1 = allInSec(hour_1, minute_1, second_1);
  var time_2 = allInSec(hour_2, minute_2, second_2);
  var diff = Math.abs(time_1 - time_2);
  var to = secInT(diff);
  timeText = "".concat(addZero(to.h), ":").concat(addZero(to.min), ":").concat(addZero(to.sec));
  printResult("\u0420\u0430\u0437\u043D\u0438\u0446\u0430 - ".concat(timeText), rez_id);
}