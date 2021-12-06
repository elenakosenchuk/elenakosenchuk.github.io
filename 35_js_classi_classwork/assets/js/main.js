// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.email = '';
//     }
//     sayHallo = function () {
//         return 'Hallo, ' + this.name;
//     };
//     get getAge(){
//         return this.age;
//     }
//     /**
//      * @param {number} new_age
//      */
//     set setAge(new_age){
//         this.age = new_age;
//     }

//     /**
//      * @param {string} email
//      */
//     set setEmail(email){
//         this.email = email;
//     }
//     get userInfo(){
//         return {
//             name:this.name,
//             age:this.age,
//             email:this.email
//         }
//     }
// }


// const Vasia = new User('Vasia', 54);
// const Ann = new User('Ann', 27);

// console.log(Vasia.sayHallo());
// console.log(Vasia.getAge);
// console.log(Ann.getAge);
// Ann.setAge = 20;
// Ann.setName = 'Annie';
// Ann.setName = 'annie@mail.com';
// console.log(Ann.userInfo);

class Figure{
    constructor(width, height, left, top, radius='0px', color='tomato'){
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.color = color; 
        this.radius = radius;       
    }

    createFigure = function(){        
        let div = document.createElement('div');
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.left = this.left + 'px';
        div.style.top = this.top + 'px';
        div.style.position = 'absolute';
        div.style.backgroundColor = this.color;
        div.style.borderRadius = this.radius;
        return div;
    }
    draw = function(){        
        document.body.append(this.createFigure());
    }
    set setColor(fig_color){
        this.color = fig_color;
    }
}


class Square extends Figure {
    constructor(width, left, top, radius='0px', color){
        super(width, width, left, top, radius, color);// вызываем конструктор класса родителя
    }    
}

class Circle extends Square {
    constructor(width, left, top, color){
        super(width, left, top, '50%', color);
    }    
}

class RedCircle extends Circle {
    constructor(width, left, top){
        super(width, left, top, '#f00');
    }
}

const rect = new Figure(200, 100 , 300, 150, '20px');
const rect2 = new Figure(40, 200 , 50, 50);
rect2.setColor = 'yellow';
rect.draw();
rect2.draw();

const sq = new Square(230, 700, 120, '10px');
sq.setColor = 'green';
sq.draw();

const cir = new Circle(135, 100, 300);
cir.setColor = '#303080';
cir.draw();

const cir2 = new Circle(205, 1000, 100);
cir2.setColor = '#face00';
cir2.draw();

const bullsEye = new RedCircle(50, 20,30);
bullsEye.draw();