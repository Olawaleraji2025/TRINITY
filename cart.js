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
            <div class="cart-item-container">
  <div class="cart-item">
      <div class="cart-item-img-container">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      </div>
      <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">Unit: ${item.price}</p>
          <div class="cart-item-quantity">
              <span>Quantity: ${item.quantity}</span>
          </div>
      </div>
      <div class="cart-item-actions">
      <i class="fa-solid fa-trash" data-index="${index}"></i>
      </div>
  </div> 
      
      <div class="line-break">
      </div>
      

      <div class="sub-total">
          <div class="quantity-actions">
          <button class="quantity-btn" data-index="${index}">-</button>
          <span class="item-quantity">${item.quantity}</span>
          <button class="quantity-btn" data-index="${index}">+</button>
            </div>

          <div class="sub-total-Price">
              <strong>Sub-total: </strong>
              <span>
                  ₦${(parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity).toFixed(2)}
              </span>
          </div>
  </div>
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
        if (e.target.classList.contains('remove-from-cart-btn') || e.target.classList.contains('fa-trash')) {
            const index = parseInt(e.target.dataset.index, 10);
            cart.splice(index, 1);
            updateCart();
        } else if (e.target.classList.contains('quantity-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            if (e.target.textContent === '+') {
                cart[index].quantity += 1;
            } else if (e.target.textContent === '-' && cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
            updateCart();
        }
    });

    renderCart();

    // Handle Proceed to Checkout button
    const proceedToCheckoutBtn = document.getElementById('proceedToCheckout');
    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }

});
