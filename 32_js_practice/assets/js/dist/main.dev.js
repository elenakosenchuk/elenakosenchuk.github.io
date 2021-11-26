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

  for (var _i = 0; _i < CART.length; _i++) {
    card_html += "\n        <li>".concat(CART[_i].name, " ").concat(CART[_i].price, " &times; ").concat(CART[_i].qty, " = ").concat(CART[_i].total, "\n        <button class=\"btn btn-danger btn-sm\">Remove</button>\n        </li>");
  }

  document.getElementById("cart_list").innerHTML = card_html;
}

shoppingList();

function productInBill(product) {
  return "<div class=\"name\">".concat(product.name, " (").concat(product.qty, ")</div> <div class=\"price\">").concat(product.price, " pc</div> <div class=\"total\">").concat(product.total, "</div>");
}

function totalBill() {
  var sum = 0;

  for (i = 0; i < CART.length; i++) {
    sum = sum + CART[i].total;
  }

  return sum;
}

function shoppingBill() {
  var result = '';

  for (i = 0; i < CART.length; i++) {
    result += "\n        <li class=\"prod_item\">".concat(productInBill(CART[i]), "</li>");
  }

  result = result + "<li class=\"sum\"><div class=\"total_title\">Total sum:</div><div>".concat(totalBill(), "</div></li>");
  document.getElementById("bill_list").innerHTML = result;
}