function getShofinfoCartd() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('shop-info-con-row-flex');
      container.innerHTML = '';

      data.forEach(item => {
        if (item.category === "home-info") {
          const cardHTML = `
      <div class="col">
        <div class="card" style="width: 23rem; height: 36rem;">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.desc}</p>
            <a href="${item.link}" class="btn-card-2nd-section">${item.btn}</a>
          </div>
        </div>
      </div>
    `;
          container.innerHTML += cardHTML;
        }
      });
    })
    .catch(error => console.error('Error loading data:', error));
}
getShofinfoCartd();

function getplantShopData() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('featured-plants-section-card-row');
      container.innerHTML = '';
      data.forEach(item => {
        if (item.category === "Featured Plants") {
          let onSalediv = ``;
          let priceHTML = ``;
          if (item.onSale === true) {
            onSalediv = `<div class="sale-wegit">Sale!</div>`;
            priceHTML = `<div class="price-oncard">
                                <span class="price-on-active-sale">${item.price}</span>
                                <span class="sale-price">${item.salePrice}</span>
                            </div>`;
          }
          else {
            priceHTML = `<div class="price-oncard">
                                <span class="price-2">${item.price}</span>
                            </div>`;
          }
          const cardHTML = `<div class="col-md-3">
                    <div class="card" style="width: 17rem;" id="card-none-border">
                        <div class="images-con">
                         ${onSalediv}
                            <img style="height: 17rem;"  src="${item.image}" class="card-img-top-2" alt="${item.name}">
                            <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                            <div class="cart-text-div">Add to Cart</div>
                        </div>
                        <p class="type-of">${item.type}</p>
                        <div class="card-body-2">
                            <h5 class="card-title" id="card-title-2">${item.name}</h5>
                             <div class="star-rating-div">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                             </div>
                             ${priceHTML}

                        </div>
                    </div>
                </div>`;
          container.innerHTML += cardHTML;
        }
      });
    })
    .catch(error => console.error('Error loading data:', error));
}
getplantShopData();

function getCardataForStorePAge() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("featured-plants-container-row");
      container.innerHTML = "";
      data.forEach(item => {
        if (item.id === 4 || item.id === 5 || item.id === 6) {
          let saleWgit = ``;
          let priceHTML = ``;

          if (item.onSale == true) {
            saleWgit = `<div class="sale-wegit">Sale!</div>`;
            priceHTML = `<div class="price-oncard">
                                <span class="price-on-active-sale">${item.price}</span>
                                <span class="sale-price">${item.salePrice}</span>
                            </div>`;
          }
           else {
            priceHTML = `<div class="price-oncard">
                                <span class="sale-price">${item.price}</span>
                            </div>`;
          }
          const cardHTML = `<div class="col-md-4 mb-4" id="card-col">
                        <div class="card border-0" style="background-color: #F9F9F9;">
                        ${saleWgit}
                         <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                         <div class="cart-text-div">Add to Cart</div>
                            <img src="${item.image}" class="card-img-top-2" alt="${item.name}">
                            <div class="card-body-2">
                            <p class="type-of mt-2">${item.type}</p>
                                <h5 class="card-title">${item.name}</h5>
                                <div class="star-rating-div">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                ${priceHTML}
                            </div>
                        </div>
                    </div>`;
          container.innerHTML += cardHTML;
        }
      })
    })
}

getCardataForStorePAge();

function getData_forPalntCollection_card() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("our-plant-collection-row");
      container.innerHTML = "";
      data.forEach(item => {
        if (item.id > 3) {
          let saleWgit = ``;
                    let priceHTML = ``;

          if (item.onSale == true) {
            saleWgit = `<div class="sale-wegit">Sale!</div>`;
             priceHTML = `<div class="price-oncard">
                                <span class="price-on-active-sale">${item.price}</span>
                                <span class="sale-price">${item.salePrice}</span>
                            </div>`;
          }
           else {
            priceHTML = `<div class="price-oncard">
                                <span class="sale-price">${item.price}</span>
                            </div>`;
          }
          const cardHTML = `<div class="col-md-4 mb-4" id="card-col">
                        <div class="card border-0">
                        ${saleWgit}
                         <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                         <div class="cart-text-div">Add to Cart</div>
                            <img src="${item.image}" class="card-img-top-2" alt="${item.name}">
                            <div class="card-body-2" style="background-color: #F9F9F9;">
                            <p class="type-of mt-2">${item.type}</p>
                                <h5 class="card-title">${item.name}</h5>
                                <div class="star-rating-div">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                ${priceHTML}
                            </div>
                        </div>
                    </div>`;
          container.innerHTML += cardHTML;
        }
      })
    })
}

getData_forPalntCollection_card();

function getOnlyplant() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('plant-collection-row');
      container.innerHTML = '';
      data.forEach(item => {
        if (item.type === "Plants") {
          let onSalediv = ``;
          let priceHTML = ``;
          if (item.onSale === true) {
            onSalediv = `<div class="sale-wegit">Sale!</div>`;
            priceHTML = `<div class="price-oncard">
                                <span class="price-on-active-sale">${item.price}</span>
                                <span class="sale-price">${item.salePrice}</span>
                            </div>`;
          }
          else {
            priceHTML = `<div class="price-oncard">
                                <span class="price-2">${item.price}</span>
                            </div>`;
          }
          const cardHTML = `<div class="col-md-3">
                    <div class="card border-0" style="width: 17rem;" id="card-none-border">
                        <div class="images-con">
                         ${onSalediv}
                            <img style="height: 17rem;"  src="${item.image}" class="card-img-top-2" alt="${item.name}">
                            <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                            <div class="cart-text-div">Add to Cart</div>
                        </div>
                        <p class="type-of">${item.type}</p>
                        <div class="card-body-2">
                            <h5 class="card-title" id="card-title-2">${item.name}</h5>
                             <div class="star-rating-div">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                             </div>
                             ${priceHTML}

                        </div>
                    </div>
                </div>`;
          container.innerHTML += cardHTML;
        }
      });
    })
    .catch(error => console.error('Error loading data:', error));
}

getOnlyplant();

function getOnlyCactos() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('cactus-collection-row');
      container.innerHTML = '';
      data.forEach(item => {
        if (item.type === "Cactus") {
          let onSalediv = ``;
          let priceHTML = ``;
          if (item.onSale === true) {
            onSalediv = `<div class="sale-wegit">Sale!</div>`;
            priceHTML = `<div class="price-oncard">
                                <span class="price-on-active-sale">${item.price}</span>
                                <span class="sale-price">${item.salePrice}</span>
                            </div>`;
          }
          else {
            priceHTML = `<div class="price-oncard">
                                <span class="price-2">${item.price}</span>
                            </div>`;
          }
          const cardHTML = `<div class="col-md-3">
                    <div class="card border-0" style="width: 17rem;" id="card-none-border">
                        <div class="images-con">
                         ${onSalediv}
                            <img style="height: 17rem;"  src="${item.image}" class="card-img-top-2" alt="${item.name}">
                            <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                            <div class="cart-text-div">Add to Cart</div>
                        </div>
                        <p class="type-of">${item.type}</p>
                        <div class="card-body-2">
                            <h5 class="card-title" id="card-title-2">${item.name}</h5>
                             <div class="star-rating-div">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                             </div>
                             ${priceHTML}

                        </div>
                    </div>
                </div>`;
          container.innerHTML += cardHTML;
        }
      });
    })
    .catch(error => console.error('Error loading data:', error));
}

getOnlyCactos();