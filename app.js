// Helper function to create price HTML
function createPriceHTML(item) {
  if (item.onSale) {
    return `<div class="price-oncard">
              <span class="price-on-active-sale">${item.price}</span>
              <span class="sale-price">${item.salePrice}</span>
            </div>`;
  }
  return `<div class="price-oncard">
            <span class="sale-price">${item.price}</span>
          </div>`;
}

// Helper function to create sale badge
function createSaleBadge(onSale) {
  return onSale ? '<div class="sale-wegit">Sale!</div>' : '';
}

// Helper function to create star rating
function createStarRating() {
  return `<div class="star-rating-div">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>`;
}

// Home info cards
function getShofinfoCartd() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('shop-info-con-row-flex');
      if (!container) return;
      
      container.innerHTML = data
        .filter(item => item.category === "home-info")
        .map(item => `
          <div class="col">
            <div id="card-heig-bh" class="card" style="width: 23rem; height: 36rem;">
              <img src="${item.image}" class="card-img-top" alt="${item.name}">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.desc}</p>
                <a href="${item.link}" class="btn-card-2nd-section">${item.btn}</a>
              </div>
            </div>
          </div>`)
        .join('');
    })
    .catch(error => console.error('Error loading data:', error));
}

// Featured plants section
function getplantShopData() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('featured-plants-section-card-row');
      if (!container) return;
      
      container.innerHTML = data
        .filter(item => item.category === "Featured Plants")
        .map(item => {
          const actualPrice = item.onSale ? parseFloat(item.salePrice.replace('$', '')) : parseFloat(item.price.replace('$', ''));
          return `
            <div class="col-md-3">
              <div class="card" style="width: 17rem;" id="card-none-border">
                <div class="images-con">
                  ${createSaleBadge(item.onSale)}
                  <img style="height: 17rem;" src="${item.image}" class="card-img-top-2" alt="${item.name}">
                  <div class="card-on-btn-hover-effect" onclick='addToCart({id: ${item.id}, name: "${item.name}", price: ${actualPrice}, image: "${item.image}"})'><i class="fa-solid fa-bag-shopping"></i></div>
                  <div class="cart-text-div">Add to Cart</div>
                </div>
                <p class="type-of">${item.type}</p>
                <div class="card-body-2">
                  <h5 class="card-title" id="card-title-2">${item.name}</h5>
                  ${createStarRating()}
                  ${createPriceHTML(item)}
                </div>
              </div>
            </div>`;
        })
        .join('');
    })
    .catch(error => console.error('Error loading data:', error));
}

// Store page cards (items 4, 5, 6)
function getCardataForStorePAge() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("featured-plants-container-row");
      if (!container) return;
      
      container.innerHTML = data
        .filter(item => item.id === 4 || item.id === 5 || item.id === 6)
        .map(item => `
          <div class="col-md-4 mb-4" id="card-col">
            <div class="card border-0" style="background-color: #F9F9F9;">
              ${createSaleBadge(item.onSale)}
              <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
              <div class="cart-text-div">Add to Cart</div>
              <img src="${item.image}" class="card-img-top-2" alt="${item.name}">
              <div class="card-body-2">
                <p class="type-of mt-2">${item.type}</p>
                <h5 class="card-title">${item.name}</h5>
                ${createStarRating()}
                ${createPriceHTML(item)}
              </div>
            </div>
          </div>`)
        .join('');
    })
    .catch(error => console.error('Error loading data:', error));
}

// Plant collection cards (items > 3)
function getData_forPalntCollection_card() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("our-plant-collection-row");
      if (!container) return;
      
      container.innerHTML = data
        .filter(item => item.id > 3)
        .map(item => `
          <div class="col-md-4 mb-4" id="card-col">
            <div class="card border-0">
              ${createSaleBadge(item.onSale)}
              <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
              <div class="cart-text-div">Add to Cart</div>
              <img src="${item.image}" class="card-img-top-2" alt="${item.name}">
              <div class="card-body-2" style="background-color: #F9F9F9;">
                <p class="type-of mt-2">${item.type}</p>
                <h5 class="card-title">${item.name}</h5>
                ${createStarRating()}
                ${createPriceHTML(item)}
              </div>
            </div>
          </div>`)
        .join('');
    })
    .catch(error => console.error('Error loading data:', error));
}

// Plants only
function getOnlyplant() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('plant-collection-row');
      if (!container) return;
      
      container.innerHTML = data
        .filter(item => item.type === "Plants")
        .map(item => `
          <div class="col-md-3">
            <div class="card border-0" style="width: 17rem;" id="card-none-border">
              <div class="images-con">
                ${createSaleBadge(item.onSale)}
                <img style="height: 17rem;" src="${item.image}" class="card-img-top-2" alt="${item.name}">
                <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                <div class="cart-text-div">Add to Cart</div>
              </div>
              <p class="type-of">${item.type}</p>
              <div class="card-body-2">
                <h5 class="card-title" id="card-title-2">${item.name}</h5>
                ${createStarRating()}
                ${createPriceHTML(item)}
              </div>
            </div>
          </div>`)
        .join('');
    })
    .catch(error => console.error('Error loading data:', error));
}

// Cactus only
function getOnlyCactos() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('cactus-collection-row');
      if (!container) return;
      
      container.innerHTML = data
        .filter(item => item.type === "Cactus")
        .map(item => `
          <div class="col-md-3">
            <div class="card border-0" style="width: 17rem;" id="card-none-border">
              <div class="images-con">
                ${createSaleBadge(item.onSale)}
                <img style="height: 17rem;" src="${item.image}" class="card-img-top-2" alt="${item.name}">
                <div class="card-on-btn-hover-effect"><i class="fa-solid fa-bag-shopping"></i></div>
                <div class="cart-text-div">Add to Cart</div>
              </div>
              <p class="type-of">${item.type}</p>
              <div class="card-body-2">
                <h5 class="card-title" id="card-title-2">${item.name}</h5>
                ${createStarRating()}
                ${createPriceHTML(item)}
              </div>
            </div>
          </div>`)
        .join('');
    })
    .catch(error => console.error('Error loading data:', error));
}

// Initialize all functions
getShofinfoCartd();
getplantShopData();
getCardataForStorePAge();
getData_forPalntCollection_card();
getOnlyplant();
getOnlyCactos();

// Active page navigation
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
