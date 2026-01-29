// Wishlist functionality for wishlist.html page

// Load wishlist items on page load
document.addEventListener('DOMContentLoaded', loadWishlist);

// Function to load and display wishlist items
function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistContainer = document.getElementById('wishlistContainer');
  const emptyWishlist = document.getElementById('emptyWishlist');

  if (wishlist.length === 0) {
    wishlistContainer.style.display = 'none';
    emptyWishlist.style.display = 'block';
    return;
  }

  wishlistContainer.style.display = 'grid';
  emptyWishlist.style.display = 'none';
  wishlistContainer.innerHTML = '';

  wishlist.forEach((item, index) => {
    const wishlistItem = document.createElement('div');
    wishlistItem.classList.add('wishlist-item');

    wishlistItem.innerHTML = `
      <div class="wishlist-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="wishlist-item-details">
        <h3 class="wishlist-item-name">${item.name}</h3>
        <p class="wishlist-item-price">${item.price}</p>
        <div class="wishlist-item-actions">
          <button class="add-to-cart-btn" onclick="addToCartFromWishlist('${item.name}', '${item.price}', '${item.image}', ${index})">
            Move to Cart
          </button>
          <button class="remove-btn" onclick="removeFromWishlist(${index})">
            Remove
          </button>
        </div>
      </div>
    `;

    wishlistContainer.appendChild(wishlistItem);
  });
}

// Function to remove item from wishlist
function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.splice(index, 1);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  loadWishlist(); // Reload the wishlist
}

// Function to add item to cart from wishlist
function addToCartFromWishlist(name, price, image, index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists in cart
  let existingIndex = cart.findIndex(item => item.name === name);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // Remove item from wishlist
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.splice(index, 1);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  // Reload the wishlist
  loadWishlist();

  // Show success message
  showWishlistNotification('Item moved to cart!', 'success');

  // Update cart count if function exists
  if (typeof updateCartCount === 'function') {
    updateCartCount();
  }
}

// Function to show notification
function showWishlistNotification(message, type) {
  let notification = document.querySelector('.wishlist-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.classList.add('wishlist-notification');
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.className = `wishlist-notification ${type}`;
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}
