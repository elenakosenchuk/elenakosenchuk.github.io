class Circle{
    constructor(radius=0, color='yellow'){
        this.radius = radius;
        this.color = color;       
    }
    createCircle = function(){        
        let rez = `
        <div style="border-radius:50%; background-color:${this.color}; width:${this.diametr}px; height:${this.diametr}px;"></div>`;                            
        return rez;
    }
        
    get radius(){
        return this.rad;
    }
    set radius(r){
        this.rad = parseInt(r) || 0;
    }
    get diametr(){
        return Math.trunc(this.radius * 2);
    }
    get square(){
        return Math.trunc(Math.PI * Math.pow(this.radius,2));
    }
    get my_info(){
        return {
            Radius: this.radius,
            Diametr: this.diametr,
            Square: this.square 
        }        
    }
    
    get html_info(){
        let rez = `<dl>`;
        for(let p in this.my_info){
            rez += `<dt>${p}</dt>
            <dd>${this.my_info[p]}</dd>`
        }
        return rez;        
    }
} 

const cir = new Circle(0);

function createCircle(field_id, div_info, div_drow){    
    let r = document.getElementById(field_id).value;
    cir.radius = r;
    document.getElementById(div_info).innerHTML = cir.html_info;
    document.getElementById(div_drow).innerHTML = cir.createCircle();       
}

class Marker{
    constructor(color='slateblue',ink=40){
        this.color = color;
        this.ink = ink;
        this.text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in odit magni sed dicta dolorem iure at ea eligendi. Quidem quisquam assumenda sed voluptatem reprehenderit magnam. Quibusdam optio incidunt iste! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos architecto qui possimus quisquam, odit explicabo ut nulla, animi laudantium labore provident, repellat sequi illum sint et magnam expedita? Esse, nesciunt!';
    }

    createString = function(){
        let str = this.text;        
        let index = 0;
        let ink_amount = this.ink;
        while(ink_amount > 0 && index < str.length){
            if(str[index] != " "){
                ink_amount = ink_amount - 0.5;
            }
            index++;
        }
        let colorStr = str.substring(0,index);
        let uncolorStr = str.substring((index+1), str.length);
        colorStr = `<span style="background-color:slateblue;">${colorStr}</span>`;
        return colorStr + uncolorStr;
    }
    
    printMarker = function(field_id){               
        document.getElementById(field_id).innerHTML = this.createString();
    }     
}

class reusableMarker extends Marker{
    get ink(){
        return this.i;
    }
    set ink(i){
        this.i = parseInt(i) || 0;
    }
}

const colorText = new Marker('slateblue', 20);

function printText(field_id, div_id){
    let i = parseInt(document.getElementById(field_id).value);
    colorText.ink += i;
    colorText.printMarker(div_id);    
}

class Employee{
    constructor(name, surname, position, salary, experience){
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.salary = salary;
        this.experience = experience;
    }
}

let arr = [
    new Employee('Ann', 'Smith', 'manager', 300, 2),
    new Employee('Kate', 'Adams', 'trainee', 100, 1),
    new Employee('David', 'Goldberg', 'assistant manager', 400, 2),
    new Employee('Adam', 'Bond', 'manager', 300, 6),
    new Employee('Jack', 'Daniels', 'director', 600, 6)    
]

class EmpTable{
    constructor(table){
        this.table = table;
    }
    get html(){        
        let rez = `<table>`;
        for(let key in this.table){
            let e = this.table[key];
            rez += `<tr><td>${parseInt(key)+1}</td><td style="padding-left:10px;">${e.name}</td><td style="padding-left:10px;">${e.surname}</td><td style="padding-left:10px;">${e.position}</td><td style="padding-left:10px;">${e.salary}$</td><td style="padding-left:10px;">${e.experience} year</td></tr>`;            
        }
        rez += `</table>`;
        return rez;
    }
}

const empData = new EmpTable(arr);
function createEmpTable(div){
    document.getElementById(div).innerHTML = empData.html;
}