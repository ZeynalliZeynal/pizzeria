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

// buttons
let buttonsDOM = [];

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
                <button class="btnShop" data-id=${id}>
                  <i class="bi bi-bag-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      productsDOM.insertAdjacentHTML('afterbegin', html);
    });
  }
  getBagButtons() {
    const buttons = [...document.querySelectorAll('.btnShop')];
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        if (button.classList.contains('btnShop')) {
          button.innerHTML = '<i class="bi bi-check-lg"></i>';
          button.disabled = true;
        }
      }
      button.addEventListener('click', (e) => {
        let btn = e.target;
        if (btn !== button) {
          btn = e.target.closest('.btnShop');
        }
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        btn.disabled = true;

        // same object with a new property called 'amount'
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        cart = [...cart, cartItem];
        console.log(cart);
      });
    });
  }
}

// set storage
class Storage {
  static saveProduct(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find((product) => product.id === id);
  }
}

// main code
const ui = new UI();
const products = new Products();
products
  .getProducts()
  .then((products) => {
    ui.displayProducts(products);
    Storage.saveProduct(products);
  })
  .then(() => {
    ui.getBagButtons();
  });
