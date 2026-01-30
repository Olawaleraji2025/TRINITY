document.addEventListener('DOMContentLoaded', function() {
    // Retrieve order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    if (orderDetails) {
        // Populate order number
        document.getElementById('orderNumber').textContent = orderDetails.orderNumber;

        // Populate order items summary
        const orderItemsSummary = document.getElementById('orderItemsSummary');
        orderItemsSummary.innerHTML = orderDetails.items.map(item => `
            <div class="order-item-summary">
            <div class="order-item-summary-info">
            <img src="${item.image}" alt="${item.name}" class="order-item-summary-image">
            <div>
            <p class="order-item-summary-name">${item.name}</p>
            <p class="order-item-summary-quantity">Quantity: ${item.quantity}</p>
            </div>
            </div>
            
            <div class="order-item-summary-details">
                <p class="order-item-summary-price">${item.price}</p>
            </div>

            </div>
        `).join('');

        // Populate delivery fee and total
        document.getElementById('deliveryFee').textContent = orderDetails.deliveryFee;
        document.getElementById('orderTotalSummary').textContent = `₦${orderDetails.total.toFixed(2)}`;

        // Populate delivery address
        const address = orderDetails.address;
        document.getElementById('deliveryAddress').innerHTML = `
            ${address.fullName}<br>
            ${address.streetAddress}<br>
            ${address.city}, ${address.state}
        `;

    } else {
        // If no order details, redirect to home or show error
        window.location.href = 'index.html';
    }
});
