"use strict";

// Array of cosmetics products
const cosmeticsProducts = [
  {
    name: "Nivea Body Milk Nourishing Lotion 400ml",
    category: "Cosmetics",
    price: "₦3,450.00",
    image: "Moisturisers & Lotions/Spmt1003.jpg",
  },

  {
    name: "Vaseline Intensive Care Lotion Cocoa Glow 400ml",
    category: "Cosmetics",
    price: "₦4,200.00",
    image: "Moisturisers & Lotions/Spmt520.jpg",
  },

  {
    name: "Nivea Soft Moisturizing Cream 300ml",
    category: "Cosmetics",
    price: "₦5,100.00",
    image: "Moisturisers & Lotions/Spmt974.jpg",
  },
  {
    name: "Shea Butter Raw Unrefined 1kg",
    category: "Cosmetics",
    price: "₦2,950.00",
    image: "Moisturisers & Lotions/aspar050.jpg",
  },
  {
    name: "Dove Body Lotion Deeply Nourishing 400ml",
    category: "Cosmetics",
    price: "₦6,200.00",
    image: "Moisturisers & Lotions/dbk4324.jpg",
  },
  {
    name: "Palmer's Cocoa Butter Formula 250g",
    category: "Cosmetics",
    price: "₦3,750.00",
    image:
      "Moisturisers & Lotions/spasho1467_1ccfda31-5388-4f55-a6f0-861d8e2240e8.jpg",
  },
  {
    name: "Nivea Body Oil Nourishing 200ml",
    category: "Cosmetics",
    price: "₦5,800.00",
    image:
      "Moisturisers & Lotions/spasho2096_deb48546-c084-4d32-a132-c5178c2471d9.jpg",
  },
  {
    name: "Jergens Moisturizer Original Scent 750ml",
    category: "Cosmetics",
    price: "₦4,500.00",
    image:
      "Moisturisers & Lotions/spasho2097_2475b5a8-535e-4ade-bad4-1b089a58848e.jpg",
  },
  {
    name: "Cetaphil Moisturizing Lotion 473ml",
    category: "Cosmetics",
    price: "₦3,200.00",
    image:
      "Moisturisers & Lotions/spaz4_859e2b48-cda9-4143-9426-5999003beabd.jpg",
  },
  {
    name: "Aveeno Daily Moisturizing Lotion 532ml",
    category: "Cosmetics",
    price: "₦6,000.00",
    image:
      "Moisturisers & Lotions/spmzz1248_f196f1fb-53aa-4937-943e-d5518dfca133.jpg",
  },
];

// DOM Elements
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".modal-search");
const closeIcon = document.querySelector(".close-menu");
const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".mobile-menu");
const hiddenClose = document.querySelector(".hidden-close");
const searchBox2 = document.querySelector(".search-inputs2");
const searchBox = document.querySelector(".search-inputs");
const inputText = document.querySelector("#hiddenContainer2");
const searchedResultsContainer = document.querySelector(
  ".hidden-results-container2",
);
const productContainer = document.querySelector(".all-products-container");

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  displayAllItems();
  showLoader();

  searchBox.addEventListener("input", (e) => {
    const inputedItem = e.target.value.toLowerCase().trim();
    inputText.innerHTML = "";
    if (!inputedItem) {
      return;
    }
    const filteredItems = cosmeticsProducts.filter((eachProducts) =>
      eachProducts.name.toLowerCase().includes(inputedItem),
    );
    handleSearchResults(filteredItems, inputedItem, inputText, 90);
  });

  searchBox2.addEventListener("input", (e) => {
    const inputedItem = e.target.value.toLowerCase().trim();
    searchedResultsContainer.innerHTML = "";
    if (searchBox2.value === "") {
      searchedResultsContainer.style.display = "none";
    } else {
      searchedResultsContainer.style.display = "block";
    }
    if (!inputedItem) {
      return;
    }
    const filteredItems = cosmeticsProducts.filter((eachProducts) =>
      eachProducts.name.toLowerCase().includes(inputedItem),
    );
    handleSearchResults(
      filteredItems,
      inputedItem,
      searchedResultsContainer,
      50,
    );
  });

  function handleSearchResults(
    filteredItems,
    inputedItem,
    container,
    imgWidth,
  ) {
    container.innerHTML = "";
    let displayedCount = 0;
    const maxPerClick = 5;
    function displayMore() {
      const existingBtn = container.querySelector(".show-more-btn");
      if (existingBtn) {
        existingBtn.remove();
      }
      const toDisplay = filteredItems.slice(
        displayedCount,
        displayedCount + maxPerClick,
      );
      toDisplay.forEach((item) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="results-container">
        <div>
        <p>${item.name}</p>
        <p style="font-weight: bold;" >${item.price}</p>
        </div>
        <div class="img-result-container" >
        <img width="${imgWidth}px" src="${item.image}">
        </div>
        </div>
        `;
        const resultsContainer = newDiv.querySelector(".results-container");
        resultsContainer.style.cursor = "pointer";
        resultsContainer.addEventListener("click", () => {
          localStorage.setItem("selectedProduct", JSON.stringify(item));
          window.location.href = `product.html`;
        });
        container.appendChild(newDiv);
      });
      displayedCount += toDisplay.length;
      if (displayedCount >= filteredItems.length) {
      } else {
        const showMoreBtn = document.createElement("button");
        showMoreBtn.classList.add("show-more-btn");
        if (displayedCount >= 10) {
          showMoreBtn.textContent = `View All ${filteredItems.length} Results`;
          showMoreBtn.onclick = () => {
            window.location.href = "cosmetics.html";
          };
        } else {
          showMoreBtn.textContent = "Show More";
          showMoreBtn.onclick = displayMore;
        }
        container.appendChild(showMoreBtn);
      }
    }
    if (filteredItems.length > 0) {
      displayMore();
    } else {
      container.innerHTML = `<div class="no-result-container" >
      <div class="no-result-image">
      <img src="Homepage/search.png" alt="no-result-image">
      </div>
      <div class="no-results-container"> <p>Oops! We couldn't find <span class="searchedItem">${inputedItem}</span> </p></div>
      </div>`;
    }
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
      cartCountElement.style.display = totalItems > 0 ? "block" : "none";
    }
  }

  // Helper function to setup modal close handlers (click outside and Escape key)
  function setupModalCloseHandlers(modal) {
    // Click outside to close
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Escape key to close (specific to this modal)
    const escapeHandler = (e) => {
      if (e.key === "Escape" && modal.style.display !== "none") {
        modal.style.display = "none";
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  }

  function toggleSearchBar(show) {
    if (show) {
      searchBar.style.display = "block";
      searchBar.classList.add("modal-show");
      searchBar.classList.remove("modal-hidden");
    } else {
      searchBar.classList.remove("modal-show");
      searchBar.classList.add("modal-hidden");
    }
  }

  function toggleMenu(show) {
    if (show) {
      menuBtn.style.display = "none";
      hiddenClose.style.display = "block";
      hiddenMenu.style.display = "block";
    } else {
      menuBtn.style.display = "flex";
      hiddenClose.style.display = "none";
      hiddenMenu.style.display = "none";
    }
  }

  if (searchIcon) {
    searchIcon.addEventListener("click", () => toggleSearchBar(true));
  }
  if (closeIcon) {
    closeIcon.addEventListener("click", () => toggleSearchBar(false));
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", () => toggleMenu(true));
  }
  if (hiddenClose) {
    hiddenClose.addEventListener("click", () => toggleMenu(false));
  }

  // Escape key listener to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (searchBar && searchBar.style.display !== "none") {
        toggleSearchBar(false);
      }
      if (hiddenMenu && hiddenMenu.style.display !== "none") {
        toggleMenu(false);
      }
    }
  });

  let currentProducts = [...cosmeticsProducts];
  const displayResult = document.querySelector(".results-display-text");
  displayResult.textContent = `Showing ${currentProducts.length} results`;

  document.querySelector(".sort").addEventListener("change", (e) => {
    const s = e.target.value;
    productContainer.innerHTML = "";
    currentProducts = sortProducts(currentProducts, s);
    displayResult.textContent = `Showing ${currentProducts.length}`;
  });

  function parsePrice(priceStr) {
    return parseFloat(priceStr.replace("₦", "").replace(",", ""));
  }

  function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch (sortBy) {
      case "price-low-high":
        sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-high-low":
        sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "name-a-z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    sorted.forEach((products) => {
      const productItem = eachProductContainer(products);
    });
    return sorted;
  }

  function eachProductContainer(theResultsItem) {
    const EachProductImage = theResultsItem.image;
    const EachProductName = theResultsItem.name;
    const EachProductPrice = theResultsItem.price;

    const productItemDiv = document.createElement("div");
    const productImageDiv = document.createElement("div");
    const productName = document.createElement("div");
    const productDetails = document.createElement("div");
    const productIcons = document.createElement("div");

    productItemDiv.classList.add("product-item");
    productName.classList.add("product-name");
    productImageDiv.classList.add("product-image");
    productDetails.classList.add("product-details");
    productIcons.classList.add("product-icons");

    productImageDiv.innerHTML = `<img src="${EachProductImage}">`;
    productName.innerHTML = `<p> ${EachProductName} </p>`;
    productDetails.innerHTML = `
    <p class="product-price"> ${EachProductPrice} </p>
    <div class="quantity-controls" style="display: none;">
      <button class="quantity-btn decrease">-</button>
      <span class="quantity-display">1</span>
      <button class="quantity-btn increase" >+</button>
    </div>
    <button class="add-to-cart-btn">Add to Cart<i class="fa-solid fa-cart-arrow-down"></i></button>
  `;

    productIcons.innerHTML = `
    <span class="wishlist-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
      <i class="fa-regular fa-heart"></i>
    </span>
    <span class="eye-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
      <i class="fa-regular fa-eye"></i>
    </span>
  `;

    const heartIcon = productIcons.querySelector(".fa-heart");
    if (heartIcon) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      let existingIndex = wishlist.findIndex(
        (item) => item.name === EachProductName,
      );
      if (existingIndex !== -1) {
        heartIcon.classList.add("fa-solid", "added-to-wishlist");
        heartIcon.style.color = "red";
      }
    }

    productItemDiv.setAttribute("data-name", EachProductName);
    productItemDiv.setAttribute("data-price", EachProductPrice);
    productItemDiv.setAttribute("data-image", EachProductImage);

    productItemDiv.appendChild(productImageDiv);
    productItemDiv.appendChild(productName);
    productItemDiv.appendChild(productDetails);
    productItemDiv.appendChild(productIcons);

    productContainer.appendChild(productItemDiv);

    attachAddToCartBehavior(
      productItemDiv,
      EachProductName,
      EachProductPrice,
      EachProductImage,
    );
  }

  function displayAllItems() {
    cosmeticsProducts.map((products) => {
      const EachProductImage = products.image;
      const EachProductName = products.name;
      const EachProductPrice = products.price;

      const productItemDiv = document.createElement("div");
      const productImageDiv = document.createElement("div");
      const productName = document.createElement("div");
      const productDetails = document.createElement("div");
      const productIcons = document.createElement("div");

      productItemDiv.classList.add("product-item");
      productName.classList.add("product-name");
      productImageDiv.classList.add("product-image");
      productDetails.classList.add("product-details");
      productIcons.classList.add("product-icons");

      productImageDiv.innerHTML = `<img src="${EachProductImage}">`;
      productName.innerHTML = `<p> ${EachProductName} </p>`;
      productDetails.innerHTML = `
      <p class="product-price"> ${EachProductPrice} </p>
      <div class="quantity-controls" style="display: none;">
        <button class="quantity-btn decrease">-</button>
        <span class="quantity-display">1</span>
        <button class="quantity-btn increase">+</button>
      </div>
      <button class="add-to-cart-btn">Add to Cart<i class="fa-solid fa-cart-arrow-down"></i></button>
    `;

      productIcons.innerHTML = `
      <span class="wishlist-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
        <i class="fa-regular fa-heart"></i>
      </span>
      <span class="eye-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
        <i class="fa-regular fa-eye"></i>
      </span>
    `;

      const heartIcon = productIcons.querySelector(".fa-heart");
      if (heartIcon) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        let existingIndex = wishlist.findIndex(
          (item) => item.name === EachProductName,
        );
        if (existingIndex !== -1) {
          heartIcon.classList.add("fa-solid", "added-to-wishlist");
          heartIcon.style.color = "red";
        }
      }

      productItemDiv.appendChild(productImageDiv);
      productItemDiv.appendChild(productName);
      productItemDiv.appendChild(productDetails);
      productItemDiv.appendChild(productIcons);

      attachAddToCartBehavior(
        productItemDiv,
        EachProductName,
        EachProductPrice,
        EachProductImage,
      );

      productContainer.appendChild(productItemDiv);
    });
  }

  function attachAddToCartBehavior(productItemDiv, name, price, image) {
    updateProductUI(productItemDiv, name);

    const addToCartBtn = productItemDiv.querySelector(".add-to-cart-btn");
    const quantityControls = productItemDiv.querySelector(".quantity-controls");
    const decreaseBtn = quantityControls.querySelector(".decrease");
    const increaseBtn = quantityControls.querySelector(".increase");
    const quantityDisplay = quantityControls.querySelector(".quantity-display");

    addToCartBtn.addEventListener("click", () => {
      showCartModal(name, price, image, 1);
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let existingIndex = cart.findIndex((item) => item.name === name);
      if (existingIndex === -1) {
        cart.push({ name, price, image, quantity: 1 });
      } else {
        cart[existingIndex].quantity = 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      updateProductUI(productItemDiv, name);
    });

    decreaseBtn.addEventListener("click", () => {
      let qty = parseInt(quantityDisplay.textContent);
      if (qty > 1) {
        qty--;
        quantityDisplay.textContent = qty;
        updateCartQuantity(name, qty);
      } else {
        removeFromCart(name);
        updateProductUI(productItemDiv, name);
      }
    });

    increaseBtn.addEventListener("click", () => {
      let qty = parseInt(quantityDisplay.textContent);
      qty++;
      quantityDisplay.textContent = qty;
      updateCartQuantity(name, qty);
    });
  }

  function updateProductUI(productItemDiv, name) {
    const addToCartBtn = productItemDiv.querySelector(".add-to-cart-btn");
    const quantityControls = productItemDiv.querySelector(".quantity-controls");
    const quantityDisplay = quantityControls.querySelector(".quantity-display");
    const qty = getCartQuantity(name);
    if (qty > 0) {
      addToCartBtn.style.display = "none";
      quantityControls.style.display = "flex";
      quantityDisplay.textContent = qty;
    } else {
      addToCartBtn.style.display = "flex";
      quantityControls.style.display = "none";
      quantityDisplay.textContent = "1";
    }
  }

  function getCartQuantity(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find((item) => item.name === name);
    return item ? item.quantity : 0;
  }

  function showCartModal(name, price, image, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingIndex = cart.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += parseInt(quantity);
    } else {
      cart.push({ name, price, image, quantity: parseInt(quantity) });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    const priceNum = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    let modal = document.querySelector(".cart-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.classList.add("cart-modal");
      document.body.appendChild(modal);
    }
    const subtotal = (priceNum * quantity).toFixed(2);
    modal.innerHTML = `
    <div class="cart-modal-content">
      <div class="cart-modal-header">
        <img src="Homepage/check.png" class="cart-modal-icon" alt="Success Icon">
        <p class="cart-modal-message">Successfully added to cart</p>
      </div>
      <div class="cart-modal-body">
        <div class="cart-item-details">
        <div class="cart-image-container">
        <img class="cart-item-image" src="${image}" alt="${name} Image">
        </div>
          <div class="cart-item-info">
            <p class="cart-item-name">${name}</p>
            <p class="cart-item-quantity">Quantity: ${quantity}</p>
            <p class="cart-item-price">Price: ${price}</p>
          </div>
        </div>
        <div class="cart-summary">
          <p class="cart-subtotal">Subtotal: ₦${subtotal}</p>
          <p class="cart-total-quantity">Total Items: ${quantity}</p>
        </div>
      </div>
      <div class="cart-modal-footer">
        <button class="view-cart-btn">View Cart & Checkout</button>
        <button class="continue-shopping-btn">Continue Shopping</button>
      </div>
    </div>
  `;
    modal.querySelector(".view-cart-btn").addEventListener("click", () => {
      window.location.href = "cart.html";
    });
    modal
      .querySelector(".continue-shopping-btn")
      .addEventListener("click", () => {
        modal.style.display = "none";
      });

    // Setup close handlers for modal (click outside and Escape key)
    setupModalCloseHandlers(modal);

    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }

  function addToWishlist(name, price, image, heartIcon) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let existingIndex = wishlist.findIndex((item) => item.name === name);
    if (existingIndex === -1) {
      wishlist.push({ name, price, image });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      heartIcon.classList.add("fa-solid", "added-to-wishlist");
      heartIcon.style.color = "red";
      showWishlistModal(image, name, "added");
    } else {
      wishlist.splice(existingIndex, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      heartIcon.classList.remove("fa-solid", "added-to-wishlist");
      heartIcon.style.color = "";
      showWishlistModal(image, name, "removed");
    }
  }

  function showWishlistModal(image, name, status) {
    let modal = document.querySelector(".cart-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.classList.add("cart-modal");
      document.body.appendChild(modal);
    }
    const message =
      status === "added"
        ? "Successfully added to wishlist"
        : status === "removed"
          ? "Successfully removed from wishlist"
          : "Item already in wishlist";
    const imageIcon = status === "added" ? "check.png" : "multiply.png";
    modal.innerHTML = `
    <div class="cart-modal-content">
      <div class="cart-modal-header">
        <img src="Homepage/${imageIcon}" class="cart-modal-icon" alt="Success Icon">
        <p class="cart-modal-message">${message}</p>
      </div>
      <div class="cart-modal-body">
      <img class="cart-item-image" src="${image}" alt="${name} Image">
        <p class="wishlist-item-name">${name}</p>
      </div>
      <div class="cart-modal-footer">
        <button class="view-wishlist-btn" onclick="window.location.href='wishlist.html'">View Wishlist</button>
        <button class="continue-shopping-btn" onclick="this.parentElement.parentElement.parentElement.style.display='none'">Continue Shopping</button>
      </div>
    </div>
  `;
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }

  function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartQuantity(name, newQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingIndex = cart.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    }
  }

  function viewProductPage(name, price, image, category) {
    const productDetails = { name, price, image, category };
    localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
    window.location.href = "product.html";
  }

  function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
      document.body.classList.add("active");
    }
  }

  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(function () {
        loader.style.display = "none";
        document.body.classList.remove("active");
      }, 3000);
    }
  }

  hideLoader();

  function handleProductClick(e) {
    const wishlistIcon = e.target.closest(".wishlist-icon");
    if (wishlistIcon) {
      const icon = wishlistIcon.querySelector("i.fa-heart");
      const name = wishlistIcon.dataset.name;
      const price = wishlistIcon.dataset.price;
      const image = wishlistIcon.dataset.image;
      addToWishlist(name, price, image, icon);
      return;
    }
    const eyeIcon = e.target.closest(".eye-icon");
    if (eyeIcon) {
      const name = eyeIcon.dataset.name;
      const price = eyeIcon.dataset.price;
      const image = eyeIcon.dataset.image;
      viewProductPage(name, price, image);
    }
  }

  if (productContainer) {
    productContainer.addEventListener("click", handleProductClick);
  }
});
