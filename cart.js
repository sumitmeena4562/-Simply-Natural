let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.querySelectorAll('.price').forEach(el => {
        el.textContent = `$${totalPrice.toFixed(2)}`;
    });
    
    renderCartItems();
}

function renderCartItems() {
    const cartBody = document.querySelector('.cart-body');
    
    if (cart.length === 0) {
        cartBody.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        document.querySelector('.cart-footer').style.display = 'none';
    } else {
        document.querySelector('.cart-footer').style.display = 'block';
        cartBody.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.quantity} × $${item.price.toFixed(2)}</div>
                </div>
                <i class="fa-solid fa-circle-xmark cart-item-remove" onclick="removeFromCart(${index})"></i>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.querySelector('.cart-total span:last-child').textContent = `$${total.toFixed(2)}`;
    }
}

// Add to cart
function addToCart(product, event) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    
    const bagIcon = document.querySelector('.nav-icons .fa-bag-shopping');
    if (bagIcon) {
        bagIcon.classList.add('bag-bounce');
        setTimeout(() => bagIcon.classList.remove('bag-bounce'), 600);
    }
    
    if (event) {
        const btn = event.currentTarget || event;
        btn.classList.add('btn-added');
        setTimeout(() => btn.classList.remove('btn-added'), 800);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function toggleCart() {
    document.querySelector('.cart-modal').classList.toggle('active');
    document.querySelector('.cart-overlay').classList.toggle('active');
}

function openCart() {
    document.querySelector('.cart-modal').classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
}

function closeCart() {
    document.querySelector('.cart-modal').classList.remove('active');
    document.querySelector('.cart-overlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    updateCart();
    
    document.querySelectorAll('.price').forEach(el => {
        el.addEventListener('click', toggleCart);
    });
    
    document.querySelectorAll('.nav-icons .fa-bag-shopping').forEach(el => {
        el.addEventListener('click', toggleCart);
    });
    
    document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
    
    document.querySelectorAll('.view-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    });
});
