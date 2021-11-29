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

function printResult(s, id){
    document.getElementById(id).innerHTML = `Summ: `+s;
}

function printError(text, id){
    document.getElementById(id).innerHTML = `<span style="color:red">${text}</span>`;
}