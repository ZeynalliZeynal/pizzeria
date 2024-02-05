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
    try {
      const response = await fetch('./app/js/data.json'); // ! import elemey niye beledi?
      const result = await response.json();
      const data = result.items;
      return data;
    } catch (error) {
      console.warn(error);
    }
  }
}

// display products
class UI {
  displayProducts(products) {
    products.forEach((product) => {
      const { desc, id, img, price, rate, title } = product;
      const html = `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="cardFrame">
            <div class="card">
              <div class="card__img">
                <span class="card__img__frame br-circle">
                  <img
                    src=${img}
                    alt=${title}
                  />
                </span>
              </div>
              <div class="card__detail">
                <div class="card__detail__head">
                  <h3 class="card__detail__head__title">${title}</h3>
                  <span class="card__detail__head__rating">${rate}/5</span>
                </div>
                <div class="card__detail__body">
                  <div class="card__detail__body__desc">
                    <p>${desc}</p>
                  </div>
                </div>
                <div class="card__detail__foot">
                  <span class="card__detail__foot__price">$${price}</span>
                </div>
              </div>
              <div class="shopBtn">
                <button class="btnShop">
                  <span><i class="bi bi-bag"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      productsDOM.insertAdjacentHTML('afterbegin', html);
    });
  }
}

// set storage
class Storage {}

// main code
const ui = new UI();
const products = new Products();
products.getProducts().then((products) => {
  ui.displayProducts(products);
});
