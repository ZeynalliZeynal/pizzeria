'use strict';

const cartBtn = document.querySelector('.btnCart');
const clearCartBtn = document.querySelector('.clearBtn');
const cartDOM = document.querySelector('.clearBtn');
const cartItems = document.querySelector('.cartCount');
const cartTotal = document.querySelector('.totalPrice');
const cartContent = document.querySelector('.body');
const productsDOM = document.querySelector('.products');

// cart
let cart = [];

// * Classes
// get products
class Products {
  async getProducts() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  }
}

// display products
class UI {}

// set storage
class Storage {}

// main code
const ui = new UI();
const products = new Products();
products.getProducts().then((products) => console.log(products));
