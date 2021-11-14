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
        console.log(`Numbers sum: ${sum}`);
    } else {
        console.warn("Too big number");
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
    console.log(maxDivider);   
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
    console.log(result);
}
// 4.Определить количество цифр в введенном числе.

function numberTotal() {
    let number = parseInt(prompt('Enter your number'));
    let total = 0;    
    while(number != 0) {
        number = Math.floor(number /10);
        total++;
    }
    console.log(total);    
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
    console.log(`You enter: ${positive} positive numbers, ${negative} negative numbers, ${zero} zero, ${even} even numbers, ${odd} odd numbers.`)        
}

// 6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

function calculator() {
    let number1 = parseInt(prompt('Enter your number'));
    let number2 = parseInt(prompt('Enter your number'));
    let sign = prompt('Enter mathematical action');
    let result;
    let answer = true;
    while(answer===false || !answer) {
        result = number1 
        answer = comfirm("Хочешь послушать сказку?");
    }
}

// 7.Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// 8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// 9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// 10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.