'use strict';
const pizzalist = [
  {
    id: '2-lou-malnatis-deep-dish-pizzas',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Margarita Pizza',
    dsc: "2 Lou Malnati's Deep Dish Pizzas",
    price: 7.9,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: '23699-choose-your-own-thin-crust-pizza-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Pepperoni Pizza',
    dsc: 'Choose Your Own Thin Crust Pizza - 4 Pack',
    price: 14,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'choose-your-own-new-haven-style-pizza-6-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Hawaiian Apizza',
    dsc: 'New Haven-Style Pizza - 6 Pack (Choose Your Own)',
    price: 6,
    rate: 4,
    country: 'West Haven, CT',
  },
  {
    id: '6-lou-malnatis-deep-dish-pizzas',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Four cheese Pizza',
    dsc: "6 Lou Malnati's Deep Dish Pizzas",
    price: 10.9,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'wood-fired-pizzas-best-seller-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Meat lover's Pizza",
    dsc: 'Wood Fired Pizzas Best Seller - 4 Pack',
    price: 15,
    rate: 5,
    country: 'Phoenix, AZ',
  },
  {
    id: '236991-choose-your-own-deep-dish-pizza-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Chicken alfredo pizza',
    dsc: 'Choose Your Own Deep Dish Pizza - 3 Pack',
    price: 14,
    rate: 5,
    country: 'Chicago, IL',
  },
  {
    id: 'brooklyn-pizza-choose-your-own-5-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104938/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Prosciutto pizza',
    dsc: 'Brooklyn Pizza - Choose Your Own 5 Pack',
    price: 16,
    rate: 4,
    country: 'Albany, NY',
  },
  {
    id: '4-lou-malnatis-deep-dish-pizzas',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106828/4-lou-malnatis-deep-dish-pizzas.8c79eb7506b5752ab3387d8174246b17.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Mexican',
    dsc: "4 Lou Malnati's Deep Dish Pizzas",
    price: 9,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'tonys-custom-pizza-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131555/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.png?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Seafood',
    dsc: 'Choose Your Own Pizza - 3 Pack',
    price: 11,
    rate: 5,
    country: 'San Francisco, CA',
  },
  {
    id: 'plain-thin-crust-pizza-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115101/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Vegetarian  Pizza',
    dsc: 'Plain Thin Crust Pizza - 4 Pack',
    price: 6,
    rate: 5,
    country: 'Montville, NJ',
  },
  {
    id: 'brooklyn-pizza-choose-your-own-10-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104883/brooklyn-pizza-choose-your-own-10-pack.7ddeb3b5b599ec9c7b1befcc9c14a1c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Paesan’s Pizza',
    dsc: 'Brooklyn Pizza - Choose Your Own 10 Pack',
    price: 11,
    rate: 4,
    country: 'Albany, NY',
  },
  {
    id: 'new-haven-style-mozzarella-pizza-6-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132144/new-haven-style-mozzarella-pizza-6-pack.8e8a38db57935f5cb6afa4202b966135.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Mushroom Apizza',
    dsc: 'New Haven-Style Mozzarella Pizza - 6 Pack',
    price: 8,
    rate: 5,
    country: 'West Haven, CT',
  },
  {
    id: '15464-detroit-style-pizza-squares-choose-your-own-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112202/detroit-style-pizza-squares-choose-your-own-3-pack.75f7714d9a81fb455f7400086e4195bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Capricciosa Pizza',
    dsc: 'Detroit-Style Pizza Squares - Choose Your Own 3 Pack',
    price: 11,
    rate: 4,
    country: 'Detroit, MI',
  },
  {
    id: '15952-create-your-own-pizza-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133262/choose-your-own-pizza-3-pack.7ee3cc9bbc48b97a0f66e073d4071982.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Quattro stagioni',
    dsc: 'Detroit Pizza - Choose Your Own Pizza 3 Pack',
    price: 8.5,
    rate: 4,
    country: 'Detroit, MI',
  },
  {
    id: 'pan-style-deep-dish-pizza-choose-your-own-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137057/Pequods-CYO-4-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Neapolitan Pizza',
    dsc: 'Pan-Style Deep Dish Pizza - Choose Your Own 4 Pack',
    price: 7,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'buffalo-style-pepperoni-pizza-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133315/buffalo-style-pepperoni-pizza-2-pack.38d99af16bc34554992bbed53870e533.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Calzone Pizza',
    dsc: 'Buffalo Style Pepperoni Pizza - 2 Pack',
    price: 9,
    rate: 5,
    country: 'Buffalo, NY',
  },
  {
    id: 'neapolitan-pizza-choose-your-own-3-Pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119426/neapolitan-pizza-choose-your-own-3-pack.dada483ad51fe8e1f8b06c68a8f1356f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Motorino Pizzeria',
    dsc: 'Neapolitan Pizza - Choose Your Own 3 Pack',
    price: 11,
    rate: 4,
    country: 'New York, NY',
  },
  {
    id: 'thin-crust-pizza-choose-your-own-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118791/thin-crust-pizza-choose-your-own-4-pack.c9d8f813e752cb2a77b93e02752c5daf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Bill's Pizza & Pub",
    dsc: 'Thin Crust Pizza - Choose Your Own 4 Pack',
    price: 7,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'ny-style-pizza-choose-your-own-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132421/ny-style-pizza-choose-your-own-3-pack.6364a762aa92bd037cc1519037680fef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Rubirosa Pizza',
    dsc: 'NY Style Pizza - Choose Your Own 3 Pack',
    price: 11,
    rate: 4,
    country: 'New York, NY',
  },
  {
    id: 'choose-your-own-chicago-deep-dish-pizza-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89920/chicago-deep-dish-pizza-2-pack.258bfa1979e758e45ffc2c93043540e5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'My Pi Pizza',
    dsc: 'Chicago Deep Dish Pizza - 2 Pack',
    price: 11,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'pizza-choose-your-own4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131566/pizza-choose-your-own-4-pack.92a5ef9f5f219eb870cf7e909656545d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Regina Pizzeria',
    dsc: 'Pizza - Choose Your Own 4 Pack',
    price: 11,
    rate: 4,
    country: 'Boston, MA',
  },
  {
    id: '2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106830/2-lou-malnatis-deep-dish-pizzas-lezza-chocolate-cake.f791b76ca45f684a6c0512aa4aec56aa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Lou Malnati's Pizza",
    dsc: "2 Lou Malnati's Deep Dish Pizzas + Lezza Chocolate Cake",
    price: 10.5,
    rate: 4,
    country: 'Chicago, IL',
  },
  {
    id: 'thin-crust-pizza-choose-your-own-6-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116162/thin-crust-pizza-choose-your-own-6-pack.9d724e00f69d761845f7edf0f66698d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'The Columbia Inn',
    dsc: 'Thin Crust Pizza - Choose Your Own 6 Pack',
    price: 11,
    rate: 5,
    country: 'Montville, NJ',
  },
  {
    id: 'neapolitan-pizza-choose-your-own-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Pizzeria Delfina',
    dsc: 'Neapolitan Pizza - Choose Your Own 4 Pack',
    price: 7,
    rate: 5,
    country: 'San Francisco, CA',
  },
  {
    id: 'Sausage-pizza-6-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133501/sausage-pizza-6-pack.31fa94213da11ab58951fcc7838f6754.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Zuppardi's Apizza",
    dsc: 'New Haven-Style Sausage Pizza - 6 Pack',
    price: 6,
    rate: 5,
    country: 'West Haven, CT',
  },
  {
    id: 'original-cheese-new-york-pizza-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104910/cheese-neapolitan-pizza-2-pack.856b6b14d276981a4654e1bb348cb328.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Joe & Pats Pizzeria',
    dsc: 'Original Cheese New York Pizza - 2 Pack',
    price: 6,
    rate: 4,
    country: 'Staten Island, NY',
  },
  {
    id: 'choose-your-own-bar-pizza-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133147/choose-your-own-bar-pizza-4-pack.2576e0f60267c680022bd3466542bb9e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Cape Cod Cafe Pizza',
    dsc: 'Bar Pizza - 4 Pack - Choose Your Own',
    price: 9,
    rate: 5,
    country: 'Brockton, MA',
  },
  {
    id: 'pan-style-deep-dish-pizza-choose-your-own-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137018/Pequods-CYO-2-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Pequod's Pizza",
    dsc: 'Pan-Style Deep Dish Pizza - Choose Your Own 2 Pack',
    price: 13,
    rate: 5,
    country: 'Chicago, IL',
  },
  {
    id: 'chicago-style-pizza-buy-3-get-1-free',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135044/chicago-style-pizza-choose-your-own-3-pack.c97386b561818a977030178b06fa5bda.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Sam's Coal Fired Pizza",
    dsc: 'Chicago Style Pizza - Buy 3 + Get 1 FREE Cheese Pizza',
    price: 11,
    rate: 5,
    country: 'Daytona Beach, FL',
  },
  {
    id: 'neapolitan-pizza-choose-your-own-6-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131875/wood-fired-pizza-choose-your-own-6-pack.fa6cf8ffff1241d50c27d804e566d605.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Pasquale Jones',
    dsc: 'Neapolitan Pizza - Choose Your Own 6 Pack',
    price: 15,
    rate: 5,
    country: 'New York, NY',
  },
  {
    id: 'wood-fired-pizza-choose-your-own-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Pizzeria Bianco',
    dsc: 'Wood Fired Pizza - Choose Your Own 4 Pack',
    price: 13,
    rate: 5,
    country: 'Phoenix, AZ',
  },
  {
    id: 'buffalo-style-pepperoni-pizza-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131666/buffalo-style-pepperoni-pizza-4-pack.1c5ea10d8c7176f0ad4eef363a1f3543.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Picasso's Pizza",
    dsc: 'Buffalo Style Pepperoni Pizza - 4 Pack',
    price: 14,
    rate: 4,
    country: 'Buffalo, NY',
  },
  {
    id: '15318-make-your-own-old-forge-pizza-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67763/make-your-own-old-forge-pizza-2-pack.f7cd011e9c2ac3182dbe1e3470985354.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Arcaro & Genell',
    dsc: 'Make Your Own Old Forge Pizza 2 Pack',
    price: 9,
    rate: 4,
    country: 'Old Forge, PA',
  },
  {
    id: 'pizza-choose-your-own-4-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134259/pizza-choose-your-own-4-pack.bc138c4f695f74bf78f13204865a9c5b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Slim & Husky's",
    dsc: 'Pizza - Choose Your Own 4 Pack',
    price: 11,
    rate: 5,
    country: 'Nashville, TN',
  },
  {
    id: 'spicy-spring-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/product_image/image/61943/spicy-spring-2-pies-serves-16.fd9e6f0fce7306a15ec794b7d91f7056.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Prince Street Pizza',
    dsc: 'Spicy Spring™ - 2 Pies (Serves 16)',
    price: 10.5,
    rate: 5,
    country: 'New York, NY',
  },
  {
    id: 'cheese-pizza-5-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134099/cheese-pizza-5-pack.e22243aba836daa325ee1b563fc2ca36.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Paesan’s Pizza',
    dsc: 'Classic Cheese Pizza - 5 Pack',
    price: 16,
    rate: 5,
    country: 'Albany, NY',
  },
  {
    id: 'detroit-style-pizza-best-seller-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131672/detroit-style-pizza-best-seller-3-pack.f56562a340b3ada0a8a571fa80020304.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Emmy Squared',
    dsc: 'Detroit-Style Pizza - Best Seller 3 Pack',
    price: 9,
    rate: 4,
    country: 'Brooklyn, NY',
  },
  {
    id: 'famous-pizza-making-kit',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134230/famous-pizza-making-kit.74d1d16b7fa71a2acbd36f825d84d75b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Tony Boloney's",
    dsc: 'Famous Pizza Making Kit',
    price: 9,
    rate: 5,
    country: 'Hoboken, NJ',
  },
  {
    id: 'brooklyn-pizza-best-seller-5-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131936/brooklyn-pizza-best-seller-5-pack.8434f2ef7ad80ef2c5bef19f1ecb94ba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Paesan’s Pizza',
    dsc: 'Brooklyn Pizza Best Seller - 5 Pack',
    price: 16,
    rate: 5,
    country: 'Albany, NY',
  },
  {
    id: 'neapolitan-pizza-choose-your-own-3-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114414/neapolitan-pizza-choose-your-own-3-pack.5b29cea22f1eeee4b8d95057b9bc7abd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Pizzeria Delfina',
    dsc: 'Neapolitan Pizza - Choose Your Own 3 Pack',
    price: 11,
    rate: 5,
    country: 'San Francisco, CA',
  },
  {
    id: 'pepperoni-ny-style-pizza-2-pack',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108219/pepperoni-ny-style-pizza-2-pack.77685b4dbd4cea75fa8e8b8ac59ba2b5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: 'Rubirosa Pizza',
    dsc: 'Pepperoni NY Style Pizza - 2 Pack',
    price: 9,
    rate: 5,
    country: 'New York, NY',
  },
];

const cardContainer = document.querySelector('[data-cards]');
const domRender = function (param) {
  param.forEach((item) => {
    const { id, img, name, dsc, price, rate } = item;
    const html = `
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="cardFrame" data-card-id="${id}" data-overlay-id="overlay-${id}">
                <div class="card">
                  <div class="card__img">
                    <span class="card__img__frame br-circle">
                      <img src="${img}" alt="${name}" />
                    </span>
                  </div>
                  <div class="card__detail">
                    <div class="card__detail__head">
                      <h3 class="card__detail__head__title">
                        ${name}
                      </h3>
                      <span class="card__detail__head__rating">${rate}/5</span>
                    </div>
                    <div class="card__detail__body">
                      <div class="card__detail__body__desc">
                        <p>${dsc}</p>
                      </div>
                    </div>
                    <div class="card__detail__foot">
                      <span class="card__detail__foot__price">$${price}</span>
                    </div>
                  </div>
                  <div class="overlayHover deactive">
                    <div class="overlayHover__title">
                      <h3>Sizes:</h3>
                    </div>
                    <ul class="overlayHover__sizes">
                      <li>
                        <label for="size-1">
                          <input type="checkbox" id="size-1" /><span>
                            small - 20cm</span
                          >
                        </label>
                      </li>
                      <li>
                        <label for="size-2">
                          <input type="checkbox" id="size-2" /><span>
                            medium - 25cm</span
                          >
                        </label>
                      </li>
                      <li>
                        <label for="size-3">
                          <input type="checkbox" id="size-3" /><span>
                            big - 32cm</span
                          >
                        </label>
                      </li>
                    </ul>
                    <div class="overlayHover__basket w-100">
                      <button class="btnBasket">
                        <span>Add to basket</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="shopBtn">
                  <button class="btnShop" data-card-id="${id}">
                    <span>
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2653 3.81981C11.261 3.76283 11.2133 3.71875 11.1562 3.71875H9.73436C9.43232 3.71875 9.18748 3.47391 9.18748 3.17188C9.18748 1.42286 7.76451 0 6.01561 0C4.2667 0 2.84373 1.42286 2.84373 3.17188C2.84373 3.47391 2.59889 3.71875 2.29686 3.71875H0.874985C0.817891 3.71875 0.770204 3.76283 0.765938 3.81981L0.000313585 13.8823C-0.00198329 13.9126 0.00840733 13.9426 0.0291886 13.9649C0.0498604 13.9873 0.0789541 14 0.10936 14H11.9219C11.9523 14 11.9814 13.9873 12.002 13.965C12.0227 13.9427 12.0332 13.9127 12.0309 13.8824L11.2653 3.81981ZM3.71873 3.17188C3.71873 1.90542 4.74905 0.875 6.01561 0.875C7.28217 0.875 8.31248 1.90542 8.31248 3.17188C8.31248 3.47391 8.06764 3.71875 7.76561 3.71875H4.26561C3.96358 3.71875 3.71873 3.47391 3.71873 3.17188ZM3.28123 6.78125C2.67803 6.78125 2.18748 6.29059 2.18748 5.6875C2.18748 5.59414 2.19749 5.50275 2.2175 5.41508C2.3246 4.94593 2.84373 5.20629 2.84373 5.6875C2.84373 5.92878 3.04006 6.125 3.28123 6.125C3.52241 6.125 3.71873 5.92878 3.71873 5.6875C3.71873 5.2066 4.2369 4.9468 4.3447 5.41546C4.36489 5.50321 4.37498 5.59451 4.37498 5.6875C4.37498 6.29059 3.88444 6.78125 3.28123 6.78125ZM8.74998 6.78125C8.14678 6.78125 7.65623 6.29059 7.65623 5.6875C7.65623 5.59414 7.66624 5.50275 7.68625 5.41508C7.79334 4.94593 8.31248 5.20629 8.31248 5.6875C8.31248 5.92878 8.50881 6.125 8.74998 6.125C8.99115 6.125 9.18748 5.92878 9.18748 5.6875C9.18748 5.2066 9.70565 4.9468 9.81345 5.41546C9.83364 5.50321 9.84373 5.59451 9.84373 5.6875C9.84373 6.29059 9.35318 6.78125 8.74998 6.78125Z"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
    `;
    cardContainer.insertAdjacentHTML('afterbegin', html);
  });
};

domRender(pizzalist);
