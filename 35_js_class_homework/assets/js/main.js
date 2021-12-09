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
} 

const cir = new Circle(0);

function createCircle(field_id, div_info, div_drow){    
    document.getElementById(field_id).innerHTML = '';
    let r = document.getElementById(field_id).value;
    cir.radius = r;
    document.getElementById(div_info).append(cir.html_info);
    document.getElementById(div_drow).append(cir.createCircle());
}