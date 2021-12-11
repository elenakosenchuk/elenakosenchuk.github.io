class Circle{
    constructor(radius=0, color='red'){
        this.radius = radius;
        this.color = color;       
    }
    createCircle = function(){
        let div = document.createElement('div');
        div.style.borderRadius = this.radiusPx;
        div.style.backgroundColor = this.color;
        div.style.width = this.diametr;
        div.style.height = this.diametr;                     
        return div;
    }
    draw = function(){        
        document.append(this.createCircle());
    }
    
    get radius(){
        return this.rad;
    }
    set radius(r){
        this.rad = parseInt(r) || 0;
    }
    get diametr(){
        return `${Math.trunc(this.radius * 2)}px`
    }
    get square(){
        return `${Math.trunc(Math.PI * Math.pow(this.radius,2))}px`
    }
    get my_info(){
        return {
            Radius: this.radiusPx,
            Diametr: this.diametr,
            Square: this.square 
        }        
    }
    get radiusPx(){
        return `${this.radius}px`;
    }
    get html_info(){
        let dl_info = document.createElement('dl');        
        for(let p in this.my_info){
             let dt_info = document.createElement('dt');
             dt_info.innerHTML = p;
             dl_info.append(dt_info);
             let dd_info = document.createElement('dd');
             dd_info.innerHTML = this.my_info[p];
             dl_info.append(dd_info);
        }
        return dl_info;
    }


    // set setRadius(new_radius){
    //     this.radius = new_radius;
    // }
    // get circleInfo(){
    //     return{
    //         radius:this.radius,
    //         diametr:this.radius*2,
    //         square:Math.PI*Math.pow(this.radius, 2)
    //     }
    // }
    
    // function printCircleInfo(){
    //     let cinfo = circleInfo;
    //     for(let p in cinfo){
    //         html += `<li></li>`;
    //     }
    //     rez_div.innerHTML = html;
    // }
} 

const cir = new Circle(0);

function createCircle(field_id, div_info, div_drow){    
    let r = document.getElementById(field_id).value;
    cir.radius = r;
    document.getElementById(div_info).append(cir.html_info); // innerhtml
    document.getElementById(div_drow).append(cir.createCircle());       
}

class Marker{
    constructor(color='red',ink=40){
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
        colorStr = `<span style="background-color:red;">${colorStr}</span>`;
        return colorStr + uncolorStr;
    }
    
    printMarker = function(field_id){
        // debugger;        
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

const colorText = new Marker('red', 20);

function printText(field_id, div_id){
    let i = parseInt(document.getElementById(field_id).value);
    colorText.ink += i;
    colorText.printMarker(div_id);    
}