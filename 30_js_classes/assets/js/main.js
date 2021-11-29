function multTable() {
    const n = 10;
    let table = 
    `<table class="my_table">
    <thead>
        <tr>`;
        for(let i=1;i<=n;i++){
            table += `<td>${i}</td>`;
        }
        table += `</tr>        
    </thead>
    <tbody>`;
        for(let i=1;i<=n;i++){
            table += `<tr>`;
            for(let j=1;j<=n;j++){
                table += `<td>${i}  * ${j} = ${i*j}</td>`;
            }
            table +=`</tr>`;
        }
        table += `
    </tbody>
    <tfoot>
        <tr>`;
        for(let i=1;i<=n;i++){
            table += `<td>${i}</td>`;
        }
        table += `</tr>        
    </tfoot>
</table>`;

document.getElementById("multi_table").innerHTML = table;           
}

multTable()

function calc(field_1_id, field_2_id, rez_id){
    console.log(this);
    let field_1 = document.getElementById(field_1_id);
    let field_2 = document.getElementById(field_2_id);
    if(field_1.value != "" && field_2.value != ""){
       let summ = mySum(field_1.value, field_2.value);
       printResult(summ, rez_id);
    }else{
        printError('Enter both numbers', rez_id);
    }
}

function mySum(a=0,b=0){
    let s = parseInt(a) + parseInt(b);
    return s.toFixed(2); // нельзя ставить перенос строки сразу после return
}

//const mySum=(a=0,b=0)=>parseInt(a)+parseInt(b); // стрелочная фуункция

function printResult(s, id){
    document.getElementById(id).innerHTML = `Summ: `+s;
}

function printError(text, id){
    document.getElementById(id).innerHTML = `<span style="color:red">${text}</span>`;
}

const addZero=n=>n<10?'0'+n:n; // добавление ноля стрелочная

// function addZero(n){
//     if(n<10){
//         return '0'+n;
//     }else{
//         return n;
//     }
// }

function sayHello(){
    let name = prompt("Enter name");
    if(name!="" && name!=null){
        alert("Hello, "+name+"!");
    }else{
        sayHello();
    }
} // рекурсивная функция (вызывает сама себя)

function checkNewMessage(){
    console.log('CALL: checkNewMessage');
    setTimeout(function(){
        checkNewMessage();
     }, 5000);
}
// checkNewMessage();

function sq(a,b=0){
    b=(b==0)?a:b;
    return a*b;
}
sq(4);