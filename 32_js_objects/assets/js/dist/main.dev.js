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

function secInT(sec) {
  var min = Math.abs(Math.trunc(sec / 60));
  var h = Math.abs(Math.trunc(sec / 3600));
  sec = Math.abs(sec % 60);
  min = Math.abs(min % 60);
  var time = {
    hour: h,
    minute: min,
    second: sec
  };
  return time;
}

function nedeedTime(field_1_id, field_2_id, rez_id, error_id) {
  printError('', error_id);
  printResult("", rez_id);
  var distance = transformInputInInt(field_1_id);
  var name = document.getElementById(field_2_id).value;
  var timeS = Math.trunc(distance / car.speed) * 3600;
  var enoughtFuel = car["average Fuel"] * distance / 100;

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

  if (timeS % 4 == 0) {
    timeS = timeS + Math.trunc(timeS / 4) - 3600;
  } else {
    timeS = timeS + Math.trunc(timeS / 4);
  }

  var time = secInT(timeS);
  timeText = "".concat(addZero(time.hour), "h : ").concat(addZero(time.minute), "m : ").concat(addZero(time.second), "s");
  printResult("You will cover this distance in ".concat(timeText), rez_id);
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : n;
};

var TIME = {
  hour: 10,
  minute: 20,
  second: 30
};

function startTime(TIME) {
  var fullTime = "".concat(addZero(TIME.hour), ":").concat(addZero(TIME.minute), ":").concat(addZero(TIME.second));
  document.getElementById('time_obj').innerHTML = fullTime;
}

function changeSecond(field_id) {
  var s = transformInputInInt(field_id);
  TIME.second = TIME.second + s;
  TIME.minute = TIME.minute + Math.abs(Math.trunc(TIME.second / 60));
  TIME.second = TIME.second % 60;
  TIME.hour = TIME.hour + Math.abs(Math.trunc(TIME.minute / 60));
  TIME.minute = Math.abs(TIME.minute % 60);
  startTime(TIME);
  document.getElementById(field_id).value = "";
}

function changeMinute(field_id) {
  var m = transformInputInInt(field_id);
  TIME.minute = TIME.minute + m;
  TIME.hour = TIME.hour + Math.abs(Math.trunc(TIME.minute / 60));
  TIME.minute = Math.abs(TIME.minute % 60);
  startTime(TIME);
  document.getElementById(field_id).value = "";
}

function changeHour(field_id) {
  var h = transformInputInInt(field_id);
  TIME.hour = TIME.hour + h;
  startTime(TIME);
  document.getElementById(field_id).value = "";
}