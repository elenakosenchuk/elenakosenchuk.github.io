"use strict";

var car = {
  producer: "Honda",
  model: "Jazz",
  year: 2018,
  speed: 100,
  "max fuel": 40,
  "average Fuel": 7,
  "fuel inner": 10,
  drivers: ["John", "David", "Bill"]
};

function printResult(text, id) {
  document.getElementById(id).innerHTML = "".concat(text);
}

function printError(text, id) {
  document.getElementById(id).innerHTML = "<span style=\"color:red\">".concat(text, "</span>");
}

var transformInputInInt = function transformInputInInt(input_id) {
  return parseInt(document.getElementById(input_id).value) || 0;
};

function myCar(car) {
  var r = '<dl>';

  for (var k in car) {
    r += "<dt>".concat(k, "</dt>\n        <dd>").concat(car[k], "</dd>");
  }

  r += '<dl>';
  document.getElementById('car_discription').innerHTML = r;
}

function addDriver(field_id) {
  var newDriver = document.getElementById(field_id).value;
  car.drivers.push(newDriver);
  document.getElementById(field_id).value = "";
}

function addFuel(field_id, rez_id) {
  printError('', rez_id);
  var f = transformInputInInt(field_id);
  var permith = car["max fuel"] - car["fuel inner"];

  if (f <= permith) {
    car["fuel inner"] = car["fuel inner"] + f;
  } else {
    printError('Too much fuel', rez_id);
  }

  document.getElementById(field_id).value = "";
}

function nedeedTime(field_1_id, field_2_id, rez_id, error_id) {
  printError('', error_id);
  printResult("", rez_id);
  var distance = transformInputInInt(field_1_id);
  var name = document.getElementById(field_2_id).value;
  var time = Math.trunc(distance / car.speed);
  var enoughtFuel = car["average Fuel"] * distance / 100; // debugger;       

  if (car.drivers.indexOf(name) == -1) {
    printError('This person cannot drive', error_id);
    return false;
  }

  if (enoughtFuel > car["max fuel"]) {
    printError('One tank is not enough for a trip. The car will need to be refueled', error_id);
  }

  if (car["fuel inner"] < car["max fuel"]) {
    printError('Car need more fuel', error_id);
    return false;
  }

  if (time % 4 == 0) {
    time = time + Math.trunc(time / 4) - 1;
  } else {
    time = time + Math.trunc(time / 4);
  }

  printResult("You will cover this distance in ".concat(time, " hours"), rez_id);
}