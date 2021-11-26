"use strict";

var CART = [{
  name: 'milk',
  qty: 2,
  price: 28,
  total: 56
}, {
  name: 'bread',
  qty: 1,
  price: 12,
  total: 12
}];

function checkAndAddProduct() {
  var name = document.getElementById('prod_name').value,
      qty = document.getElementById('prod_qty').value,
      price = document.getElementById('prod_price').value,
      valid = true;

  if (name == "") {
    valid = false;
  }

  if (qty == "") {
    valid = false;
  } else {
    qty = parseInt(qty);

    if (qty <= 0) {
      valid = false;
    }
  }

  if (price == "") {
    valid = false;
  } else {
    price = parseFloat(price);

    if (price <= 0) {
      valid = false;
    }
  }

  if (valid) {
    addToCart(name, qty, price);
  } else {
    panel.warning('Please fiil correct all fields', true);
  }
}

function addToCart(name, qty, price) {
  //TODO: add product to cart
  console.log(name, qty, price);
  var ind = CART.findIndex(function (el) {
    return el.name == name;
  });
  console.log(ind);

  if (ind == -1) {
    CART.push({
      name: name,
      qty: qty,
      price: price,
      total: qty * price
    });
  } else {
    CART[ind].qty += qty;
    CART[ind].total = CART[ind].qty * CART[ind].price;
  }

  console.log(CART);
  document.getElementById('prod_name').value = '';
  document.getElementById('prod_qty').value = '1';
  document.getElementById('prod_price').value = '';
  panel.success('Product successefully added', true);
  shoppingList();
}

function shoppingList() {
  var card_html = '';

  for (var i = 0; i < CART.length; i++) {
    card_html += "<li>".concat(CART[i].name, " ").concat(CART[i].price, " &times; ").concat(CART[i].qty, " = ").concat(CART[i].total, "</li>");
  }

  document.getElementById("cart_list").innerHTML = card_html;
}

shoppingList();