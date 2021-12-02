"use strict";

var CART = [{
  name: 'milk',
  qty: 2,
  price: 28,
  total: 56,
  buy: true
}, {
  name: 'bread',
  qty: 1,
  price: 12,
  total: 12,
  buy: false
}, {
  name: 'beer',
  qty: 2,
  price: 25,
  total: 50,
  buy: true
}, {
  name: 'cheese',
  qty: 1,
  price: 190,
  total: 190,
  buy: false
}];
var cartSort = "asc";

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
      total: qty * price,
      buy: false
    });
  } else {
    CART[ind].buy = false;
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

var productRow = function productRow(item, i) {
  return "\n         <tr>             \n             <td>".concat(item.name, "</td>\n             <td class=\"text-center\">").concat(item.buy ? '<span class="badge bg-success">yes</span>' : '<span class="badge bg-danger">no</span>', "</td>\n             <td class=\"text-end\">").concat(item.price.toFixed(2), "</td>\n             <td class=\"text-center\">").concat(item.qty, "</td>\n             <td class=\"text-end\">").concat(item.total.toFixed(2), "</td>\n             <td class=\"text-end\">\n                 ").concat(!item.buy ? "<button type=\"button\" class=\"btn btn-success btn-sm\" onclick=\"buyProduct(".concat(i, ")\">Buy</button>") : '', "\n             <button type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"deleteFromeCart(").concat(i, ")\">Delete</button></td>\n             </tr>\n         ");
};

shoppingList();

function shoppingList() {
  var card_html = '';
  var total = CART.reduce(function (accunPrice, curItem) {
    return accunPrice + curItem.total;
  }, 0);
  var total_buyed = CART.filter(function (item) {
    return item.buy;
  }).reduce(function (accunPrice, curItem) {
    return accunPrice + curItem.total;
  }, 0);
  var total_notbuyed = CART.filter(function (item) {
    return !item.buy;
  }).reduce(function (accunPrice, curItem) {
    return accunPrice + curItem.total;
  }, 0);

  if (cartSort == "asc") {
    CART.sort(function (a, b) {
      return a.total - b.total;
    });
  } else {
    CART.sort(function (a, b) {
      return b.total - a.total;
    });
  }

  CART.forEach(function (item, i) {
    card_html += !item.buy ? productRow(item, i) : '';
  });
  CART.forEach(function (item, i) {
    card_html += item.buy ? productRow(item, i) : '';
  });
  document.getElementById("cart_list").innerHTML = card_html;
  document.getElementById("total").innerHTML = total.toFixed(2);
  document.getElementById("total_buyed").innerHTML = total_buyed.toFixed(2);
  document.getElementById("total_notbuyed").innerHTML = total_notbuyed.toFixed(2);
}

function changeSort() {
  cartSort = cartSort == "asc" ? "desc" : "asc";
  shoppingList();
}

var buyProduct = function buyProduct(ind) {
  if (typeof CART[ind] !== "undefined") {
    CART[ind].buy = true;
    shoppingList();
    panel.info('Product successfully bought', true);
  } else {
    panel.danger('Not found product for buy', true);
  }
};

var deleteFromeCart = function deleteFromeCart(ind) {
  if (typeof CART[ind] !== "undefined") {
    if (confirm("Remove ".concat(CART[ind].name, " from cart?"))) {
      CART.splice(ind, 1);
      shoppingList();
      panel.success('Product successfully removed from cart', true);
    }
  } else {
    panel.danger('Not found product for remove', true);
  }
};

function selectBoughtProduct(boughtMassive) {
  var bought = boughtMassive.filter(function (item) {
    return item.buy;
  });
  return bought;
} // отбирает только проданные товары


function prodTotalBill(prodactList) {
  var prodTotal = prodactList.reduce(function (a, item) {
    return a + item.total;
  }, 0);
  return prodTotal;
} // считает стоимость проданных товаров


function discount(totalBill) {
  var amount = parseInt(document.getElementById("discount_amount").value) || 0;
  var type = document.getElementById("discount_type").value;

  if (type == 'HRN') {
    return amount;
  } else {
    return totalBill * amount / 100;
  }
} // считает скидку проданных товаров


function pdv(amount) {
  return amount * 0.2;
} // считает пдв


function billTotal(s) {
  return s + pdv(s);
} // считает полную сумму в чеке


function productInBill(product) {
  return "<tr>\n        <td>".concat(product.name, "</td>\n        <td class=\"text-end\">").concat(product.price, "</td>\n        <td class=\"text-center\">\u0445</td>\n        <td class=\"text-start\">").concat(product.qty, "</td>\n        <td class=\"text-start\">=</td>\n        <td class=\"text-start\">").concat(product.total, "</td>\n        </tr>");
} // рисует 1 товар


function shoppingBill(billList) {
  var result = '';

  for (i = 0; i < billList.length; i++) {
    result += "".concat(productInBill(billList[i]));
  }

  result = result;
  document.getElementById("bill_list").innerHTML = result;
}

function printBill() {
  var boughtItems = selectBoughtProduct(CART);
  shoppingBill(boughtItems);
  var boughtTotal = prodTotalBill(boughtItems);
  document.getElementById("bill_prod_total").innerHTML = boughtTotal.toFixed(2);
  var disc = discount(boughtTotal);
  document.getElementById("bill_discount").innerHTML = disc.toFixed(2);
  var p = pdv(boughtTotal);
  document.getElementById("bill_pdv").innerHTML = p.toFixed(2);
  var bigTotal = billTotal(boughtTotal);
  document.getElementById("bill_total").innerHTML = bigTotal.toFixed(2);
}