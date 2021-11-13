// 9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

function number5() {
    let number = parseInt(prompt("Enter five-digit number"));
    let tail = number % 10;
    let numBody = parseInt(number / 10);
    alert(`Result: ${tail * 10000 + numBody}`); 
}

// 10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

function money() {
    const salary = 250;
    let salesSum = parseInt(prompt("Enter sales sum"));
    let result = parseInt(salary + salesSum * 0.1);
    alert(`Your salary: ${result}`);
}

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...)

function age() {
    let years = parseInt(prompt("How old are you?"));
    let result;
    if(years >= 0 && years < 12) {
        alert("You are child");                
    }
    else if(years >= 12 && years < 18) {
    alert("You are teen");
    }
    else if(years >= 18 && years < 60) {
        alert("You are adult");
    }
    else if(years >= 60) {
        alert("You are retiree");
    }
    else {
        alert("You age is undefined");
    }
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

function keebordNumber() {
    let number = prompt("Enter number from 0 to 9");
    let result;
    switch(number) {
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
            alert("Your enter invalid symbol!")
    }
    alert(result);
}
    
//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

function sameNumber() {
    let number = prompt("Enter three-digit number");    
    let first = number[0];
    let second = number[1];
    let third = number[2];
    let result;
    if(first == second || first == third) {
        result = "There are the same numbers here";
    }
    else if(second == first || second == third) {
        result = "There are the same numbers here";
    }
    else if(third == first || third == second) {
        result = "There are the same numbers here";
    }
    else {
        result = "There are not the same numbers here";
    }
    alert(result);    
    
}

function sameNumber2() {
    let num = prompt("Enter three-digit number");    
    for(let position = 0; position < num.length -2; position++){
        let foundSymbol = num[position];
        let numSymbol = num.indexOf(foundSymbol, position+1);
        if (numSymbol == -1) {
            continue;
        }
        else {
            alert("There are the same numbers here");
            return;
        }        
    }
    alert("There are not the same numbers here");   
}

function isMatched (num) {
    num = parseInt(num);
    let s, d, e;
    s = parseInt(num/100);
    d = parseInt((num % 100) / 10);
    e = num % 10;
    
    if(s == d || s == e || d ==e) {
        console.log('Match')
    } else {
        console.log('NOT match');
    }
}


// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function year() {
    let number = parseInt(prompt("Enter some year"));
    let kindYear;
    if (number % 400 == 0 || (number % 4 == 0 && number % 100 != 0 )) {
        kindYear = "leap year";
    }
    else {
        kindYear = "common year";
    }
    alert(kindYear);
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function palindrom() {
    let number = prompt("Enter five-digit number");
    for(let i = 0; i < number.length / 2; i++) {
        let numFirst = number[i];
        let numLast = number[(number.length - 1) - i];        
        if(numFirst == numLast) {
            continue;
        }
        else {
            alert("There is not palindrom");
            return;
        }
    }
    alert("There is palindrom");
}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

function convertor() {    
    let dollar = parseInt(prompt("Enter USD sum"));
    let currency = prompt("Choose currency EUR, UAH or AZN");
    let currency2 = currency.toUpperCase();
    if(currency2 == "EUR") {
        result = dollar * 0.8626;
        alert(`You have ${result} EUR`);
    }
    if(currency2 == "UAH") {
        result = dollar * 26.05;
        alert(`You have ${result} UAH`);
    }
    if(currency2 == "AZN") {
        result = dollar * 1.6857;
        alert(`You have ${result} AZN`);
    }
}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function total() {
    let sum = parseInt(prompt("Enter total sum"));
    if(sum >= 200 && sum < 300) {
        result = sum - sum * 0.03;        
    }
    else if(sum >= 300 && sum < 500) {
        result = sum - sum * 0.05;
    }
    else if(sum >= 500) {
        result = sum - sum * 0.07;
    }
    else {
        result = `Your sum is ${sum}. You'll have a discount if you buy something on 200 or more`;
    }
    alert(result);
}


// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

function circle() {
    let p = parseInt(prompt("Enter circle length"));
    let c = parseInt(prompt("Enter perimeter of a square"));
    let n = p / 4;
    let r = c / 6.28;
    if(n <= r * 2) {
        result = "Your circle fit in a square";
    }
    else {
        result = "Your circle isn't fit in a square";
    }
    alert(result);
}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

function questions() {
    let q1 = document.getElementById("inputState1");
    let q2 = document.getElementById("inputState2");
    let q3 = document.getElementById("inputState3");
    if(q1.value == "" || q2.value == "" || q3.value == "") {
        alert("Select answer");        
        return;
    }
    let score = 0;
    if(q1.value == "2") {
        score = score + 2;
    }    
    if(q2.value == "6") {
        score = score + 2;
    }    
    if(q3.value == "7") {
        score = score + 2;
    }    
    alert(`You have: ${score} points!`)
}

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

function date() {
    let day = parseInt(prompt("Enter the now day number"));
    let month = parseInt(prompt("Enter the now month number"));
    let year = parseInt(prompt("Enter the now year number"));
    let maxDay = 31;
    let maxMonth = 12;
    debugger;
    if(day < maxDay && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
        result = `Tommorow will be ${day + 1}.${month}.${year}`;
    }
    else if(day == maxDay && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
        result = `Tommorow will be 1.${month + 1}.${year}`;
    }
    else if(day == maxDay && month == 12) {
        result = `Tommorow will be 1.1.${year + 1}`;
    }
    else if(day == 29 && month == 2 && (year % 400 == 0 || year % 4 == 0) && year % 100 != 0 ) {
        result = `Tommorow will be 1.${month + 1}.${year}`;
    }
    else if(day == 28 && month == 2) {
        result = `Tommorow will be 1.${month + 1}.${year}`;
    }
    else {
        result = "Your enter an invalid date"
    }
    alert(result);
}