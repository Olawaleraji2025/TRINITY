document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const icon = section.querySelector('.fa-chevron-up');
        const content = section.querySelector('.section-content');
        const span = section.querySelector('.section-header span');

        if (icon) icon.innerHTML = '';
        // Initialize non-active sections as collapsed
        if (content) {
            if (!content.classList.contains('active')) {
                content.classList.add('collapsed');
            } else {
                // If active, add active class to span
                if (span) span.classList.add('active');
            }
        }

        if (icon && content) {
            icon.addEventListener('click', function() {
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                    content.classList.add('collapsed');
                    icon.style.transform = 'rotate(180deg)';
                    if (span) span.classList.remove('active');
                } else {
                    content.classList.remove('collapsed');
                    content.classList.add('active');
                    icon.style.transform = 'rotate(0deg)';
                    if (span) span.classList.add('active');
                }
            });
        }
    });

    // Handle radio button selection for border styling
    const radioGroups = document.querySelectorAll('.radio-group');
    radioGroups.forEach(group => {
        const radio = group.querySelector('input[type="radio"]');
        if (radio) {
            radio.addEventListener('change', function() {
                // Remove selected class from all radio groups in the same section
                const section = group.closest('.section');
                section.querySelectorAll('.radio-group').forEach(g => g.classList.remove('selected'));
                // Add selected class to the checked one
                if (radio.checked) {
                    group.classList.add('selected');
                }
            });
            // Set initial state
            if (radio.checked) {
                group.classList.add('selected');
            }
        }
    });

    // Load and display cart items in order review
    const orderItemsContainer = document.getElementById('orderItemsContainer');
    const orderTotalSpan = document.getElementById('orderTotal');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        orderTotalSpan.textContent = '₦0.00';
    } else {
        orderItemsContainer.innerHTML = cart.map(item => `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                <div class="order-item-details">
                    <p class="order-item-name">${item.name}</p>
                    <p class="order-item-quantity">Quantity: ${item.quantity}</p>
                    <p class="order-item-price">Price: ${item.price}</p>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
            return acc + (price * item.quantity);
        }, 0);

        orderTotalSpan.textContent = `₦${total.toFixed(2)}`;
    }

    // Handle place order button click
    const placeOrderBtn = document.querySelector('.place-order-btn');
    placeOrderBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Collect shipping address
        const fullName = document.getElementById('fullName').value;
        const streetAddress = document.getElementById('streetAddress').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;

        // Retrieve cart and total
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
            return acc + (price * item.quantity);
        }, 0);

        // Generate order number
        const orderNumber = 'ORD-' + Date.now();

        // Store order details in localStorage
        const orderDetails = {
            orderNumber: orderNumber,
            items: cart,
            total: total,
            deliveryFee: 'Free',
            address: {
                fullName: fullName,
                streetAddress: streetAddress,
                city: city,
                state: state
            }
        };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        // Clear the cart
        localStorage.setItem('cart', JSON.stringify([]));

        // Redirect to order confirmation page
        window.location.href = 'order-confirmation.html';
    });
});
