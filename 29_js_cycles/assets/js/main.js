// 1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.

function numbersSum() {
    let start = parseInt(prompt("Enter start number"));
    let end = parseInt(prompt("Enter end number"));
    let sum = '';
    if(start >= -100 && end <=100) {
        let sum = 0;
        while(start <= end) {            
            sum = sum + start;
            start++;            
        }
        alert(`Numbers sum: ${sum}`);
    } else {
        alert("Too big number");
    }
}

// 2.Запросить 2 числа и найти только наибольший общий делитель.

function dividerBoth() {
    let num1 = parseInt(prompt('Enter first number'));
    let num2 = parseInt(prompt('Enter second number'));
    let divider = 1;
    let limit = (num1<num2)?num1:num2;
    let maxDivider = 1;    
    while(divider <= limit) {
        if(num1 % divider == 0 && num2 % divider == 0) {
            maxDivider = divider;            
        }
        divider++;                
    }
    alert(maxDivider);   
}

// 3.Запросить у пользователя число и вывести все делители этого числа.
function dividerAll() {
    let num = parseInt(prompt('Enter your number'));
    let divider = 1;
    let result = "";
    while(divider <= num) {
        if(num % divider == 0) {
            result += divider + " ";            
        }
        divider++;
    }
    alert(result);
}
// 4.Определить количество цифр в введенном числе.

function numberTotal() {
    let number = parseInt(prompt('Enter your number'));
    let total = 0;    
    while(number != 0) {
        number = Math.floor(number /10);
        total++;
    }
    alert(total);    
}

// 5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

function statistic() {   
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    let numTotal = 0;    
    for(numTotal = 0; numTotal < 10; numTotal++) {
        let number = parseInt(prompt('Enter your number'));            
            if(number > 0) {
                positive++;
            }
            else if(number < 0) {
                negative++;
            }
            else{
                zero++;
            }
            if(number % 2 == 0) {
                even++;
            }
            else {
                odd++;
            }
            // if(number == NaN) {
            //     console.warn(`You enter an invalid symbol`);
            //     numTotal--;
            // }
            // continue;              
    }
    alert(`You enter: ${positive} positive numbers, ${negative} negative numbers, ${zero} zero, ${even} even numbers, ${odd} odd numbers.`)        
}

// 6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

function calculator() {
    let ask = false;
    do {        
        let num1 = parseInt(prompt("Enter first number"));
        let num2 = parseInt(prompt("Enter second number"));
        let sign = prompt("Enter mathematic action");
        let result;
        if(sign === "+" ) {
            result = num1 + num2;            
        }
        else if(sign === "-") {
        result = num1 - num2;
        }
        else if(sign === "*") {
            result = num1 * num2;
        }
        else if(sign === "/") {
            result = num1 / num2;
        }
        else {
            alert("You enter an invalid sign");
        }
        alert(result);
        ask = confirm("Would you like to count?");

    } while(ask === true)
}
// 7.Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

function numberMove() {
    let num1 = prompt("Enter your number");
    let num2 = parseInt(prompt("How many digits to move?"));
    let num1Long = parseInt(num1.length);    
    for(i=0; i<num2; i++) {                
        numTail = num1 % 10;
        number = (num1 - numTail) /10;
        num1 = numTail * 10**(num1Long-1) + number;        
    }
    alert(num1);
}

// let num = parseInt(prompt("Enter number"));
// let zdvig = parseInt(prompt("Enter move digits"));

// const count = n=>{
//     let r = 0;
//     while(n>1){
//         n = n/10;
//         r++;
//     }
//     return r;
// }

// let part_1, part_2;
// let k = Math.pow(10, zdvig);
// let k = 10**zdvig;
// part_1 = parseint(num/k);
// part_2 = num%k;
// let rez = part_2*(10**count(part_1))+part_1;
// console.log(rez);

// 8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

function weekDay() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];  
    let i = 0;
    while (confirm(`Today is ${days[i]}. Would you like to see the next day?`)) {
       i++;
       if(i==7) {
           i=0;
       }
    }   
}

function weekDay2() {    
    while(confirm(`Today is Monday. Would you like to see the next day?`)) {
        if (!confirm(`Today is Tuesday. Would you like to see the next day?`)) {  
            break;
        }
        if (!confirm(`Today is Wednesday. Would you like to see the next day?`)) {  
            break;
        }
        if (!confirm(`Today is Thursday. Would you like to see the next day?`)) {  
            break;
        } 
        if (!confirm(`Today is Friday. Would you like to see the next day?`)) {  
            break;
        } 
        if (!confirm(`Today is Saturday. Would you like to see the next day?`)) {  
            break;
        }
        if (!confirm(`Today is Sunday. Would you like to see the next day?`)) {  
            break;
        }               
    }
}

// 9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

function table() {
    let a = 2;
    let b = 1;
    for(a=2; a<=9; a++){
        for(b=1; b<=10; b++) {
            document.getElementById('result').innerHTML += (a + "*" + b + "=" + (a*b) + " ");
        }  
        document.getElementById('result').innerHTML += "<br>";
    }
}

// 10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

function guessNumber() {   
    let start = 0;
    let end = 100;    
    confirm("Загадай число от 0 до 100");
    debugger;
    while(true) {
        let guess = Math.round((start + end) /2);
        let answ = prompt(`Ваше число > ${guess}, < ${guess} или = ${guess}?`);
        if (answ == ">") {
            start = Math.round(guess + 1);
        }
        else if(answ == "<") {
            end = Math.round(guess - 1);
        }
        else {
            alert(`Ваше число ${guess}`);
            break;
        }
    }
}