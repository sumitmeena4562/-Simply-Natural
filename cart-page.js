// Load cart items on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartPage();
});

function loadCartPage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.getElementById('cart-table-body');
    
    if (cart.length === 0) {
        tbody.innerHTML = '<tr class="empty-cart"><td colspan="4" style="text-align: center; padding: 60px 20px; color: #999;">Your cart is empty</td></tr>';
        return;
    }
    
    tbody.innerHTML = cart.map((item, index) => `
        <tr>
            <td>
                <div class="product-cell">
                    <i class="fa-solid fa-circle-xmark product-remove" onclick="removeFromCartPage(${index})"></i>
                    <img src="${item.image}" class="product-img" alt="${item.name}">
                    <span class="product-name">${item.name}</span>
                </div>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');
}

function removeFromCartPage(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartPage();
    updateCart();
}

function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartPage();
    updateCart();
}
