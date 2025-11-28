const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

if (!productId) {
    window.location.href = 'index.html';
}

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const product = data.find(item => item.id === productId);
        if (product) {
            document.getElementById('product-main-image').src = product.image;
            document.getElementById('product-category').textContent = product.type;
            document.getElementById('product-title').textContent = product.name;
            document.getElementById('product-meta-category').textContent = product.type;
            document.getElementById('product-description').textContent = product.description || 'No description available.';
            document.getElementById('full-description').textContent = product.description || 'No description available.';
            
            const priceElement = document.getElementById('product-price');
            if (product.onSale) {
                priceElement.innerHTML = `<span style="text-decoration: line-through; color: #999; font-size: 1.5rem;">${product.price}</span> ${product.salePrice}`;
            } else {
                priceElement.textContent = product.price;
            }
            
            document.getElementById('add-to-cart-btn').addEventListener('click', function() {
                const quantity = parseInt(document.getElementById('quantity-input').value);
                const price = product.onSale ? parseFloat(product.salePrice.replace('$', '')) : parseFloat(product.price.replace('$', ''));
                
                for (let i = 0; i < quantity; i++) {
                    addToCart({
                        id: product.id,
                        name: product.name,
                        price: price,
                        image: product.image
                    });
                }
            });
            
            // Update sticky bar
            document.getElementById('sticky-product-image').src = product.image;
            document.getElementById('sticky-product-name').textContent = product.name;
            if (product.onSale) {
                document.getElementById('sticky-product-price').textContent = product.salePrice;
            } else {
                document.getElementById('sticky-product-price').textContent = product.price;
            }
            
            // Sticky add to cart button
            document.getElementById('sticky-add-to-cart-btn').addEventListener('click', function() {
                const quantity = parseInt(document.getElementById('sticky-quantity-input').value);
                const price = product.onSale ? parseFloat(product.salePrice.replace('$', '')) : parseFloat(product.price.replace('$', ''));
                
                for (let i = 0; i < quantity; i++) {
                    addToCart({
                        id: product.id,
                        name: product.name,
                        price: price,
                        image: product.image
                    });
                }
            });
            
            // Load related products (same type, different id)
            const relatedProducts = data.filter(item => item.type === product.type && item.id !== productId).slice(0, 4);
            const container = document.getElementById('related-products-row');
            
            container.innerHTML = relatedProducts.map(item => `
                <div class="col-md-3">
                    <div class="card border-0" onclick="window.location.href='product-detail.html?id=${item.id}'" style="cursor: pointer;">
                        <div class="position-relative">
                            ${item.onSale ? '<span class="badge bg-white text-dark position-absolute top-0 start-0 m-2">Sale!</span>' : ''}
                            <img src="${item.image}" class="card-img-top" alt="${item.name}">
                        </div>
                        <div class="card-body">
                            <p class="text-muted small">${item.type}</p>
                            <h6>${item.name}</h6>
                            <p class="fw-bold">${item.onSale ? `<span class="text-decoration-line-through text-muted">${item.price}</span> ${item.salePrice}` : item.price}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    });

// Show/hide sticky add to cart on scroll
window.addEventListener('scroll', function() {
    const stickyBar = document.querySelector('.sticky-add-to-cart');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    
    if (addToCartBtn) {
        const btnPosition = addToCartBtn.getBoundingClientRect();
        if (btnPosition.top < 0) {
            stickyBar.classList.add('show');
        } else {
            stickyBar.classList.remove('show');
        }
    }
});
