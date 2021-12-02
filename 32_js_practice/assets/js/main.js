let CART = [
    {name: 'milk', qty: 2, price: 28, total: 56, buy:true},
    {name: 'bread', qty: 1, price: 12, total: 12, buy:false},
    {name: 'beer', qty: 2, price: 25, total: 50, buy:true},
    {name: 'cheese', qty: 1, price: 190, total: 190, buy:false}
];

let cartSort = "asc";

function checkAndAddProduct(){
    let name = document.getElementById('prod_name').value,
        qty = document.getElementById('prod_qty').value,
        price = document.getElementById('prod_price').value,
        valid = true;

    if(name==""){
        valid = false;
    }
    if(qty==""){
        valid = false;
    }else{
        qty = parseInt(qty);
        if(qty<=0){
            valid = false;
        }
    }
    if(price==""){
        valid = false;
    }else{
        price = parseFloat(price);
        if(price<=0){
            valid = false;
        }
    }
    if(valid){
        addToCart(name, qty, price);
    }else{
        panel.warning('Please fiil correct all fields', true);
    }
}

function addToCart(name, qty, price){
    //TODO: add product to cart
    console.log(name, qty, price);

    let ind = CART.findIndex(el=>el.name==name); 
    console.log(ind);
    if(ind==-1){
        CART.push({
            name:name,
            qty:qty,
            price:price,
            total:qty*price,
            buy: false
        });
    }else{
        CART[ind].buy = false;
        CART[ind].qty+=qty;
        CART[ind].total = CART[ind].qty*CART[ind].price;
    }    
    console.log(CART);
    document.getElementById('prod_name').value = '';
    document.getElementById('prod_qty').value = '1';
    document.getElementById('prod_price').value = '';
    panel.success('Product successefully added', true);
    shoppingList();
}

const productRow = (item, i) =>{
    return `
         <tr>             
             <td>${item.name}</td>
             <td class="text-center">${item.buy?'<span class="badge bg-success">yes</span>':'<span class="badge bg-danger">no</span>'}</td>
             <td class="text-end">${item.price.toFixed(2)}</td>
             <td class="text-center">${item.qty}</td>
             <td class="text-end">${item.total.toFixed(2)}</td>
             <td class="text-end">
                 ${!item.buy?`<button type="button" class="btn btn-success btn-sm" onclick="buyProduct(${i})">Buy</button>`:''}
             <button type="button" class="btn btn-danger btn-sm" onclick="deleteFromeCart(${i})">Delete</button></td>
             </tr>
         `;
 }

shoppingList();
function shoppingList(){
    let card_html = '';
    let total = CART.reduce(
        (accunPrice, curItem) =>{return accunPrice + curItem.total}, 0); 
    let total_buyed = CART.filter(
        (item) =>{
            return item.buy;
        }
    ).reduce(
        (accunPrice, curItem) =>{return accunPrice + curItem.total}, 0);
     
    let total_notbuyed = CART.filter(
        (item) =>{
            return !item.buy;
        }
    ).reduce(
        (accunPrice, curItem) =>{return accunPrice + curItem.total}, 0);
    if (cartSort == "asc"){
        CART.sort((a, b) => a.total - b.total);        
    }else{
        CART.sort((a, b) => b.total - a.total);
    }
    CART.forEach((item, i)=>{
        card_html += !item.buy?productRow(item, i):'';
    });
    CART.forEach((item, i)=>{
        card_html += item.buy?productRow(item, i):'';
    }); 

    
    document.getElementById("cart_list").innerHTML = card_html;
    document.getElementById("total").innerHTML = total.toFixed(2);
    document.getElementById("total_buyed").innerHTML = total_buyed.toFixed(2);
    document.getElementById("total_notbuyed").innerHTML = total_notbuyed.toFixed(2);    
}

function changeSort(){
    cartSort=(cartSort=="asc")?"desc":"asc";
    shoppingList();    
}

const buyProduct = (ind) => {
    if(typeof CART[ind] !=="undefined"){
        CART[ind].buy = true;
        shoppingList();
        panel.info('Product successfully bought', true);
    }else{
        panel.danger('Not found product for buy', true)
    }
}
const deleteFromeCart = (ind)=>{
    if(typeof CART[ind] !=="undefined"){
        if(confirm(`Remove ${CART[ind].name} from cart?`)){
            CART.splice(ind, 1);
            shoppingList();
            panel.success('Product successfully removed from cart', true)
        }
    }else{
        panel.danger('Not found product for remove', true)
    }
}

function selectBoughtProduct(boughtMassive){
    let bought = boughtMassive.filter(item =>item.buy);
    return bought;        
} // отбирает только проданные товары

function prodTotalBill(prodactList){    
    let prodTotal = prodactList.reduce(function(a, item){
        return a + item.total;
    }, 0);
    return prodTotal;
} // считает стоимость проданных товаров

function discount(totalBill){
    let amount = parseInt(document.getElementById("discount_amount").value) || 0;
    let type = document.getElementById("discount_type").value;    
    if (type == 'HRN'){
        return amount;
    }else{
        return totalBill * amount / 100;
    }
} // считает скидку проданных товаров

function pdv(amount){
    return amount*0.2;
} // считает пдв

function billTotal(s){    
    return s + pdv(s);
} // считает полную сумму в чеке

function productInBill(product){    
    return `<tr>
        <td>${product.name}</td>
        <td class="text-end">${product.price}</td>
        <td class="text-center">х</td>
        <td class="text-start">${product.qty}</td>
        <td class="text-start">=</td>
        <td class="text-start">${product.total}</td>
        </tr>`;
} // рисует 1 товар

function shoppingBill(billList){
    let result = '';    
    for(i=0; i < billList.length; i++){
        result += `${productInBill(billList[i])}`;        
    }
    result = result;        
    document.getElementById("bill_list").innerHTML = result;
}

function printBill(){    
    let boughtItems = selectBoughtProduct(CART);
    shoppingBill(boughtItems);
    let boughtTotal = prodTotalBill(boughtItems);
    document.getElementById("bill_prod_total").innerHTML = boughtTotal.toFixed(2);
    let disc = discount(boughtTotal);
    document.getElementById("bill_discount").innerHTML = disc.toFixed(2);
    let p = pdv(boughtTotal);
    document.getElementById("bill_pdv").innerHTML = p.toFixed(2);
    let bigTotal = billTotal(boughtTotal);
    document.getElementById("bill_total").innerHTML = bigTotal.toFixed(2);
}

