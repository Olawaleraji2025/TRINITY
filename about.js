// DOM Elements
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".modal-search");
const headerNavBar = document.querySelector(".header-nav-bar");
const closeIcon = document.querySelector(".close-menu");
const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".mobile-menu");
const hiddenClose = document.querySelector(".hidden-close");
const productContainer = document.querySelector(".products-container");
const productContainer2 = document.querySelector(".products-container2");
const searchBox = document.querySelector(".search-inputs");
const inputText = document.querySelector("#hiddenContainer2");
const searchBox2 = document.querySelector(".search-inputs2");
const inputText2 = document.querySelector(".hidden-results-container2");
const hiddenCategories = document.querySelector(".hidden-categories");
const hiddenSearchQuery = document.querySelector(".search-query");


// Scroll Reveal Script
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Function to update cart count
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
      cartCountElement.style.display = totalItems > 0 ? "block" : "none";
    }
  }

   updateCartCount();