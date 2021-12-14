let car = {
    producer: "Honda",
    model: "Jazz",
    year: 2018,
    speed: 100,
    "max fuel": 40,
    "average Fuel": 7,
    "fuel inner": 10,
    drivers: ["John", "David", "Bill"]
};

function printResult(text, id){
    document.getElementById(id).innerHTML = `${text}`;
}

function printError(text, id){
    document.getElementById(id).innerHTML = `<span style="color:red">${text}</span>`;
}

const transformInputInInt = (input_id) => parseInt(document.getElementById(input_id).value) || 0;

function myCar(car){
    let r = '<dl>';
    for(let k in car){
        r += `<dt>${k}</dt>
        <dd>${car[k]}</dd>`;
    }
    r +='<dl>';
    document.getElementById('car_discription').innerHTML = r;
}

function addDriver(field_id){
    let newDriver = document.getElementById(field_id).value;
    car.drivers.push(newDriver);
    document.getElementById(field_id).value = ""; 
}

function addFuel(field_id, rez_id){
    printError('', rez_id);    
    let f = transformInputInInt(field_id);        
    let permith = car["max fuel"] - car["fuel inner"];
    if(f <= permith){
        car["fuel inner"] = car["fuel inner"] + f;       
    }else{
        printError('Too much fuel', rez_id);
    }
    document.getElementById(field_id).value = "";        
}

function secInT(sec){
    let min = Math.abs(Math.trunc(sec/60));
    let h = Math.abs(Math.trunc(sec/3600));
    sec = Math.abs(sec%60);    
    min = Math.abs(min%60);
    let time = {hour: h, minute: min, second: sec};
    return time;    
}

function nedeedTime(field_1_id, field_2_id, rez_id, error_id){    
    printError('', error_id);
    printResult(``, rez_id);
    let distance = transformInputInInt(field_1_id);
    let name = document.getElementById(field_2_id).value;
    let timeS = Math.trunc(distance / car.speed) * 3600;
    let enoughtFuel = car["average Fuel"] * distance / 100;            
    if(car.drivers.indexOf(name) == -1){
        printError('This person cannot drive', error_id);                
        return false;
    }
    if(enoughtFuel > car["max fuel"]){
        printError('One tank is not enough for a trip. The car will need to be refueled', error_id);                        
    }    
    if(car["fuel inner"] < car["max fuel"]){
        printError('Car need more fuel', error_id);        
        return false;
    }
    if(timeS%4 == 0){
        timeS = (timeS + Math.trunc(timeS/4)) - 3600;
    }else{
        timeS = timeS + Math.trunc(timeS/4);
    }
    let time = secInT(timeS);
    timeText = `${addZero(time.hour)}h : ${addZero(time.minute)}m : ${addZero(time.second)}s`;    
    printResult(`You will cover this distance in ${timeText}`, rez_id);       
}

const addZero = n=>n<10?'0'+n:n;

let TIME = {
    hour: 10,
    minute: 20,
    second: 30
}

function startTime(TIME){
    let fullTime = `${addZero(TIME.hour)}:${addZero(TIME.minute)}:${addZero(TIME.second)}`;    
    document.getElementById('time_obj').innerHTML = fullTime;
}

function changeSecond(field_id){    
    let s = transformInputInInt(field_id);    
    TIME.second = TIME.second + s;
    TIME.minute = TIME.minute + Math.abs(Math.trunc(TIME.second/60));
    TIME.second = TIME.second%60;
    TIME.hour = TIME.hour + Math.abs(Math.trunc(TIME.minute/60));
    TIME.minute = Math.abs(TIME.minute%60);    
    startTime(TIME);
    document.getElementById(field_id).value = "";    
}

function changeMinute(field_id){
    let m = transformInputInInt(field_id);
    TIME.minute = TIME.minute + m;    
    TIME.hour = TIME.hour + Math.abs(Math.trunc(TIME.minute/60));
    TIME.minute = Math.abs(TIME.minute%60);
    startTime(TIME);
    document.getElementById(field_id).value = ""; 
}

function changeHour(field_id){
    let h = transformInputInInt(field_id);
    TIME.hour = TIME.hour + h;
    startTime(TIME);
    document.getElementById(field_id).value = ""; 
}


class Fraction{
    constructor(numerator=0, denumerator=1){        
    this.numerator = numerator;
    this.denumerator = denumerator;
    }
    simplify = function(){
        let start = 0;
        if(this.numerator < this.denumerator){
            start = this.numerator;
        }else{
            start = this.denumerator;
        }
        let divider = 1;        
        let maxDivider = 1;
        while(divider <= start){
            if(this.numerator % divider == 0 && this.denumerator % divider == 0) {
                maxDivider = divider;            
            }
            divider++;                
        }
        return new Fraction(this.numerator / maxDivider,
        this.denumerator / maxDivider);
    }
    mul = function(number){
        this.numerator *= number;
        this.denumerator *= number;
    }
}
 class Action{
     constructor(fraction_1, fraction_2){
        this.fraction_1 = fraction_1;
        this.fraction_2 = fraction_2;
     }
     get addition(){
        this.fraction_1.mul(this.fraction_2.denumerator);
        this.fraction_2.mul(this.fraction_1.denumerator);
        return (new Fraction(
            this.fraction_1.numerator + this.fraction_2.numerator,
            this.fraction_1.denumerator)).simplify();
     }
     get subtraction(){
        this.fraction_1.mul(this.fraction_2.denumerator);
        this.fraction_2.mul(this.fraction_1.denumerator);
        return (new Fraction(
            this.fraction_1.numerator - this.fraction_2.numerator,
            this.fraction_1.denumerator)).simplify();
     }
     get multiplication(){       
        return (new Fraction(
            this.fraction_1.numerator * this.fraction_2.numerator, 
            this.fraction_1.denumerator * this.fraction_2.denumerator)).simplify();
     }
     get division(){
        return (new Fraction(
            this.fraction_1.numerator * this.fraction_2.denumerator, 
            this.fraction_1.denumerator * this.fraction_2.numerator)).simplify();
     }     
 }

 

 function startAction(d1_num_field, d1_denum_field, d2_num_field, d2_denum_field, action_field, rez_1_field, rez_2_field){
    let d_1 = new Fraction(transformInputInInt(d1_num_field), transformInputInInt(d1_denum_field));
    let d_2 = new Fraction(transformInputInInt(d2_num_field), transformInputInInt(d2_denum_field));
    let act = new Action(d_1, d_2);
    let rez = new Fraction(1, 1);
    if(document.getElementById(action_field).value = '+'){
       rez = act.addition;
    }else if(document.getElementById(action_field).value = '-'){
        rez = act.subtraction;
    }else if(document.getElementById(action_field).value = '*'){
        rez = act.multiplication;
    }else if(document.getElementById(action_field).value = '/'){
        rez = act.division;
    }
    document.getElementById(rez_1_field).innerHTML = rez.numerator;
    document.getElementById(rez_2_field).innerHTML = rez.denumerator;
 }