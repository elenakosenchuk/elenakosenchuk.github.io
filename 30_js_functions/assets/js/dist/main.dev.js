"use strict";

// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
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

function printError(text, id) {
  document.getElementById(id).innerHTML = "<span style=\"color:red\">".concat(text, "</span>");
}

function printResult(text, id) {
  document.getElementById(id).innerHTML = "".concat(text);
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
// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».