let CART = [
    {name: 'milk', qty: 2, price: 28, total: 56},
    {name: 'bread', qty: 1, price: 12, total: 12}
];


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
            total:qty*price
        });
    }else{
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

function shoppingList(){
    let card_html = '';
    for(let i=0; i < CART.length; i++){
        card_html += `
        <li>${CART[i].name} ${CART[i].price} &times; ${CART[i].qty} = ${CART[i].total}
        <button class="btn btn-danger btn-sm">Remove</button>
        </li>`;
    }
    document.getElementById("cart_list").innerHTML = card_html;
}
shoppingList();

function productInBill(product){    
    return `<div class="name">${product.name} (${product.qty})</div> <div class="price">${product.price} pc</div> <div class="total">${product.total}</div>`;
}

function totalBill(){
    let sum = 0;
    for(i=0; i < CART.length; i++){
        sum = sum + CART[i].total; 
    }
    return sum;
}

function shoppingBill(){
    let result = '';    
    for(i=0; i < CART.length; i++){
        result += `
        <li class="prod_item">${productInBill(CART[i])}</li>`;        
    }
    result = result + `<li class="sum"><div class="total_title">Total sum:</div><div>${totalBill()}</div></li>`;        
    document.getElementById("bill_list").innerHTML = result;
}