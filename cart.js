document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalSpan = document.getElementById('cartTotal');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotalSpan.textContent = '₦0.00';
            return;
        }

        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">${item.price}</p>
                    <div class="cart-item-quantity">
                        <span>Quantity: ${item.quantity}</span>
                    </div>
                    <button class="remove-from-cart-btn" data-index="${index}">Remove</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
            return acc + (price * item.quantity);
        }, 0);

        cartTotalSpan.textContent = `₦${total.toFixed(2)}`;
    }

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            cart.splice(index, 1);
            updateCart();
        }
    });

    renderCart();
});
