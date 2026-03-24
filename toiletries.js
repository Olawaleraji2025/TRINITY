"use strict";

// Array of toiletries products
const toiletriesProducts = [
  {
    name: "Air Wick Freshmatic Air Freshener Assorted 300ml",
    category: "Toiletries",
    price: "₦3,125.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Assorted-300-ml-Supermart-ng-2079.jpg",
  },
  {
    name: "Air Wick Stick Up Aroma Gel Assorted 30g",
    category: "Toiletries",
    price: "₦4,780.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Stick-Up-Multi-Use-Aroma-Gel-Assorted-30-g-Supermart-ng-1317.jpg",
  },
  {
    name: "Air Wick Stick Up Citrus Aroma Gel 30g",
    category: "Toiletries",
    price: "₦2,950.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Stick-Up-Multi-Use-Aroma-Gel-Citrus-30-g-Supermart-ng-4000.jpg",
  },
  {
    name: "Air Wick Drummer Assorted 45g x6",
    category: "Toiletries",
    price: "₦5,640.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Drummer-Air-Freshener-Assorted-Fragrances-45-g-x6-Supermart-ng-9365.jpg",
  },
  {
    name: "Air Wick Freshmatic Diffuser Refill Assorted 250ml",
    category: "Toiletries",
    price: "₦3,890.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Freshmatic-Diffuser-Refill-Assorted-250-ml-Supermart-ng-6930.jpg",
  },
  {
    name: "Air Wick Freshmatic Max Refill Assorted 250ml",
    category: "Toiletries",
    price: "₦3,890.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Freshmatic-Max-Refill-Assorted-250-ml-Supermart-ng-7570.jpg",
  },
  {
    name: "Glade Air Freshener Automatic Spray",
    category: "Toiletries",
    price: "₦4,210.00",
    image:
      "Air Fresheners & Fragrances/spasho2022_5d9864c0-d12c-4662-ae10-12f3fb830386.jpg",
  },
  {
    name: "Raid Air Freshener Tropical Mist",
    category: "Toiletries",
    price: "₦5,120.00",
    image:
      "Air Fresheners & Fragrances/spasho420_cca82127-b059-4824-a8d7-48e2b76ca34f.jpg",
  },
  {
    name: "Ambi Pur Car Air Freshener Ocean",
    category: "Toiletries",
    price: "₦3,450.00",
    image:
      "Air Fresheners & Fragrances/spasho421_c652d445-5a45-4e75-b717-2bdaf3e35f58.jpg",
  },
  {
    name: "Febreze Noticeables Air Freshener Meadow",
    category: "Toiletries",
    price: "₦6,020.00",
    image: "Air Fresheners & Fragrances/spwxyz1494_2.jpg",
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
    const filteredItems = toiletriesProducts.filter((eachProducts) =>
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
    const filteredItems = toiletriesProducts.filter((eachProducts) =>
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
            window.location.href = "toiletries.html";
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

  let currentProducts = [...toiletriesProducts];
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
      eachProductContainer(products);
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
    toiletriesProducts.map((products) => {
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

    // Setup close handlers for modal (click outside and Escape key)
    setupModalCloseHandlers(modal);

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
