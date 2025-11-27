// Reusable Cart Modal Component
function loadCartModal() {
    return `
    <div class="cart-overlay"></div>
    <div class="cart-modal">
        <div class="cart-header">
            <h3>Shopping Cart</h3>
            <i class="fa-solid fa-xmark" onclick="closeCart()"></i>
        </div>
        <div class="cart-body"></div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Subtotal:</span>
                <span>$0.00</span>
            </div>
            <button class="view-cart-btn" onclick="window.location.href='cart.html'">View Cart</button>
            <button class="checkout-btn">Checkout</button>
        </div>
    </div>`;
}
