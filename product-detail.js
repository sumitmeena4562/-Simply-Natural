const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

if (!productId) {
    window.location.href = 'index.html';
}

// Load product details
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
            
            const priceElement = document.getElementById('product-price');
            if (product.onSale) {
                priceElement.innerHTML = `<span style="text-decoration: line-through; color: #999; font-size: 1.5rem;">${product.price}</span> ${product.salePrice}`;
            } else {
                priceElement.textContent = product.price;
            }
            
            // Add to cart functionality
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
        }
    });
