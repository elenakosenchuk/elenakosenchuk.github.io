"use strict";

// 9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
function number5() {
  var number = parseInt(prompt("Enter five-digit number"));
  var tail = number % 10;
  var numBody = parseInt(number / 10);
  alert("Result: ".concat(tail * 10000 + numBody));
} // 10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.


function money() {
  var salary = 250;
  var salesSum = parseInt(prompt("Enter sales sum"));
  var result = parseInt(salary + salesSum * 0.1);
  alert("Your salary: ".concat(result));
} // Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...)


function age() {
  var years = parseInt(prompt("How old are you?"));
  var result;

  if (years >= 0 && years < 12) {
    alert("You are child");
  } else if (years >= 12 && years < 18) {
    alert("You are teen");
  } else if (years >= 18 && years < 60) {
    alert("You are adult");
  } else if (years >= 60) {
    alert("You are retiree");
  } else {
    alert("You age is undefined");
  }
} // Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


function keebordNumber() {
  var number = prompt("Enter number from 0 to 9");
  var result;

  switch (number) {
    case "0":
      result = ")";
      break;

    case "1":
      result = "!";
      break;

    case "2":
      result = "@";
      break;

    case "3":
      result = "#";
      break;

    case "4":
      result = "$";
      break;

    case "5":
      result = "%";
      break;

    case "6":
      result = "^";
      break;

    case "7":
      result = "&";
      break;

    case "8":
      result = "*";
      break;

    case "9":
      result = "(";
      break;

    default:
      alert("Your enter invalid symbol!");
  }

  alert(result);
} //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.


function sameNumber() {
  var number = prompt("Enter three-digit number");
  var first = number[0];
  var second = number[1];
  var third = number[2];
  var result;

  if (first == second || first == third) {
    result = "There are the same numbers here";
  } else if (second == first || second == third) {
    result = "There are the same numbers here";
  } else if (third == first || third == second) {
    result = "There are the same numbers here";
  } else {
    result = "There are not the same numbers here";
  }

  alert(result);
}

function sameNumber2() {
  var num = prompt("Enter three-digit number");

  for (var position = 0; position < num.length - 2; position++) {
    var foundSymbol = num[position];
    var numSymbol = num.indexOf(foundSymbol, position + 1);

    if (numSymbol == -1) {
      continue;
    } else {
      alert("There are the same numbers here");
      return;
    }
  }

  alert("There are not the same numbers here");
}

function isMatched(num) {
  num = parseInt(num);
  var s, d, e;
  s = parseInt(num / 100);
  d = parseInt(num % 100 / 10);
  e = num % 10;

  if (s == d || s == e || d == e) {
    console.log('Match');
  } else {
    console.log('NOT match');
  }
} // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


function year() {
  var number = parseInt(prompt("Enter some year"));
  var kindYear;

  if (number % 400 == 0 || number % 4 == 0 && number % 100 != 0) {
    kindYear = "leap year";
  } else {
    kindYear = "common year";
  }

  alert(kindYear);
} // Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


function palindrom() {
  var number = prompt("Enter five-digit number");

  for (var i = 0; i < number.length / 2; i++) {
    var numFirst = number[i];
    var numLast = number[number.length - 1 - i];

    if (numFirst == numLast) {
      continue;
    } else {
      alert("There is not palindrom");
      return;
    }
  }

  alert("There is palindrom");
} // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.


function convertor() {
  var dollar = parseInt(prompt("Enter USD sum"));
  var currency = prompt("Choose currency EUR, UAH or AZN");
  var currency2 = currency.toUpperCase();

  if (currency2 == "EUR") {
    result = dollar * 0.8626;
    alert("You have ".concat(result, " EUR"));
  }

  if (currency2 == "UAH") {
    result = dollar * 26.05;
    alert("You have ".concat(result, " UAH"));
  }

  if (currency2 == "AZN") {
    result = dollar * 1.6857;
    alert("You have ".concat(result, " AZN"));
  }
} // Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.


function total() {
  var sum = parseInt(prompt("Enter total sum"));

  if (sum >= 200 && sum < 300) {
    result = sum - sum * 0.03;
  } else if (sum >= 300 && sum < 500) {
    result = sum - sum * 0.05;
  } else if (sum >= 500) {
    result = sum - sum * 0.07;
  } else {
    result = "Your sum is ".concat(sum, ". You'll have a discount if you buy something on 200 or more");
  }

  alert(result);
} // Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.


function circle() {
  var p = parseInt(prompt("Enter circle length"));
  var c = parseInt(prompt("Enter perimeter of a square"));
  var n = p / 4;
  var r = c / 6.28; // let r = c / 2 * Math.PI;

  if (n <= r * 2) {
    result = "Your circle fit in a square";
  } else {
    result = "Your circle isn't fit in a square";
  }

  alert(result);
} // Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.


function questions() {
  var q1 = document.getElementById("inputState1");
  var q2 = document.getElementById("inputState2");
  var q3 = document.getElementById("inputState3");

  if (q1.value == "" || q2.value == "" || q3.value == "") {
    alert("Select answer");
    return;
  }

  var score = 0;

  if (q1.value == "2") {
    score = score + 2;
  }

  if (q2.value == "6") {
    score = score + 2;
  }

  if (q3.value == "7") {
    score = score + 2;
  }

  alert("You have: ".concat(score, " points!"));
} // Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.


function date() {
  var day = parseInt(prompt("Enter the now day number"));
  var month = parseInt(prompt("Enter the now month number"));
  var year = parseInt(prompt("Enter the now year number"));
  var maxDay = 31;
  var maxMonth = 12;
  debugger;

  if (day < maxDay && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
    result = "Tommorow will be ".concat(day + 1, ".").concat(month, ".").concat(year);
  } else if (day == maxDay && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
    result = "Tommorow will be 1.".concat(month + 1, ".").concat(year);
  } else if (day == maxDay && month == 12) {
    result = "Tommorow will be 1.1.".concat(year + 1);
  } else if (day == 29 && month == 2 && (year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
    result = "Tommorow will be 1.".concat(month + 1, ".").concat(year);
  } else if (day == 28 && month == 2) {
    result = "Tommorow will be 1.".concat(month + 1, ".").concat(year);
  } else {
    result = "Your enter an invalid date";
  }

  alert(result);
}