'use strict';

const cartBtn = document.querySelector('.btnCart');
const clearCartBtn = document.querySelector('.clearBtn');
const cartDOM = document.querySelector('.cartList__container');
const cartItems = document.querySelector('.cartCount');
const cartTotal = document.querySelector('.totalPrice');
const cartContent = document.querySelector('.body');
const productsDOM = document.querySelector('.products');
const totalAmount = document.querySelector('.foot__total h3 sub');

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
          button.classList.add('active');
        }
      }
      button.addEventListener('click', (e) => {
        let btn = e.target;
        if (btn !== button) {
          btn = e.target.closest('.btnShop');
        }
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        btn.disabled = true;
        button.classList.add('active');

        // same object with a new property called 'amount'
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        cart = [...cart, cartItem];
        Storage.saveCart(cart);

        this.setCartValues(cart);

        this.addCartItem(cartItem);

        this.showCart();
      });
    });
  }
  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    document.querySelector('.tooltip').textContent = `$${parseFloat(
      tempTotal.toFixed(2)
    )}`;
    cartTotal.innerHTML = `${parseFloat(tempTotal.toFixed(2))}<sup>$</sup>`;
    cartItems.textContent = itemsTotal;
    totalAmount.textContent = `(${itemsTotal} items)`;
  }
  addCartItem(item) {
    const { id, img, title, desc, amount, price } = item;
    const html = `
              <li class="cartItem">
                <div class="cartItem__img">
                  <img src=${img} alt=${title} />
                </div>
                <div class="cartItem__desc">${desc}</div>
                <div class="cartItem__price">
                  <span class="itemCount">${amount}</span>/${price}<sup>$</sup>
                </div>
                <div class="cartItem__amount">
                  <button class="incr" data-id=${id}>
                    <i class="bi bi-caret-up-fill"></i>
                  </button>
                  <button class="remove" data-id=${id}>
                    remove <i class="bi bi-trash"></i>
                  </button>
                  <button class="decr" data-id=${id}>
                    <i class="bi bi-caret-down-fill"></i>
                  </button>
                </div>
              </li>`;
    document.querySelector('.body').insertAdjacentHTML('afterbegin', html);
  }
  showCart() {
    cartDOM.classList.add('active');
  }
  hideCart() {
    cartDOM.classList.remove('active');
  }
  toggleCart() {
    cartDOM.classList.toggle('active');
  }
  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populate(cart);
    cartBtn.addEventListener('click', this.toggleCart);
  }
  populate(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
  cartLogic() {
    clearCartBtn.addEventListener('click', () => {
      this.clearCart(); // * to point to class, otherwise it will point to the button
    });
    cartContent.addEventListener('click', (e) => {
      let el = e.target.classList;
      if (el.contains('remove')) {
        let removeItem = e.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.closest('.cartItem'));
        this.removeItem(id);
      } else if (el.contains('incr') || el.contains('bi-caret-up-fill')) {
        let addAmount = e.target;
        if (el.contains('bi-caret-up-fill'))
          addAmount = addAmount.parentElement;
        let id = addAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount += 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.parentElement.previousElementSibling.firstElementChild.textContent =
          tempItem.amount;
      } else if (el.contains('decr') || el.contains('bi-caret-down-fill')) {
        let lowerAmount = e.target;
        if (el.contains('bi-caret-down-fill'))
          lowerAmount = lowerAmount.parentElement;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount -= 1;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          lowerAmount.parentElement.previousElementSibling.firstElementChild.textContent =
            tempItem.amount;
        } else {
          cartContent.removeChild(lowerAmount.parentElement.parentElement);
          this.removeItem(id);
        }
      }
    });
  }
  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart(cart);
  }
  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);

    button[0].classList.remove('active');
    button[0].innerHTML = '<i class="bi bi-bag-plus"></i>';
    button[0].disabled = false;
  }
  getSingleButton(id) {
    return buttonsDOM.filter((button) => button.dataset.id === id);
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
  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  }
}

// main code
const ui = new UI();
const products = new Products();
ui.setupAPP();

products
  .getProducts()
  .then((products) => {
    ui.displayProducts(products);
    Storage.saveProduct(products);
  })
  .then(() => {
    ui.getBagButtons();
    ui.cartLogic();
  });
