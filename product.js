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

// Function to load and display product details in product.html
document.addEventListener("DOMContentLoaded", () => {
  showLoader();
  // Scroll to top of page when loaded
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // showLoader();
  updateCartCount();

  const provisions = [
    {
      name: "McVitie's Hob Nobs 200 g",
      category: "Provisions",
      price: "₦1,560.00",
      image: "Biscuits & Wafers/dbk2998.jpg",
    },
    {
      name: "Alpenliebe Milk Filled Caramel Candy x88",
      category: "Provisions",
      price: "₦2,410.00",
      image:
        "Sweets & Chewing Gum/Alpenliebe-Milk-Filled-Caramel-Candy-x88-Supermart-ng-1909.jpg",
    },
    {
      name: "Geurts Marmalade Orange 450 g",
      category: "Provisions",
      price: "₦4,445.00",
      image: "Jams & Spreads/spcsjm1784.webp",
    },
    {
      name: "Checkers Custard Powder Vanilla 1 kg",
      category: "Provisions",
      price: "₦2,240.00",
      image:
        "BREAKFAST CEREALS/1490789939327_spxspy758_checkers_custard_powder_vanilla_sachet_400_g-min.jpg",
    },
    {
      name: "Bounty Chocolate 57 g",
      category: "Provisions",
      price: "₦1,570.00",
      image: "Chocolates/1486570613196_spcsch775_bounty_chocolate_57_g.jpg",
    },
    {
      name: "Sunola Sugar Cubes 474 g x90",
      category: "Provisions",
      price: "₦1,040.00",
      image:
        "SUGAR AND SWEETENERS/1516643468047_spx350_sunola_sugar_cubes_474_g_90_pieces.jpg",
    },
    {
      name: "McVitie fingers biscuit",
      category: "Provisions",
      price: "₦200.00",
      image: "Biscuits & Wafers/dbk2953.jpg",
    },
    {
      name: "Chupa Chups Cotton Bubble Gum Tutti Frutti 11 g x20",
      category: "Provisions",
      price: "₦340.00",
      image: "Sweets & Chewing Gum/spx02550.jpg",
    },
    {
      name: "Rowse Honey Glass Jar 340 g",
      category: "Provisions",
      price: "₦5,250.00",
      image: "SUGAR AND SWEETENERS/spxabc238.jpg",
    },
    {
      name: "Pringles Paprika 40 g",
      category: "Provisions",
      price: "₦1,280.00",
      image:
        "Potato & Plantain Chips/sprnw1381_b9724a2b-24db-46bf-a7e5-95e57e1f617a.jpg",
    },
    {
      name: "Checkers Custard Powder Milk 3 in 1 Breakfast 700 g",
      category: "Provisions",
      price: "₦3,335.00",
      image: "Custard & Jelly/sprnw1155.jpg",
    },
    {
      name: "Blue Pearl Coloured Prawn Crackers 227 g",
      category: "Provisions",
      price: "₦1,645.00",
      image: "Cocktail Snacks/spmex4362.jpg",
    },
    {
      name: "Snickers 50 g",
      category: "Provisions",
      price: "₦1,425.00",
      image: "Chocolates/spcsch1086.png",
    },
    {
      name: "Nasco Corn Flakes Original 350 g",
      category: "Provisions",
      price: "₦2,800.00",
      image: "BREAKFAST CEREALS/spcgce762.jpg",
    },
    {
      name: "McVitie's HobNobs 40 g",
      category: "Provisions",
      price: "₦345.00",
      image: "Biscuits & Wafers/sprnw1367.jpg",
    },
    {
      name: "Mentos Pure Fresh Chewing Gum Tropical 87.5 g x50",
      category: "Provisions",
      price: "₦3,385.00",
      image:
        "Sweets & Chewing Gum/spasho2001_0dcc358f-4abc-4031-bad4-a1d721d8bd7c.jpg",
    },
    {
      name: "Pringles Sour Cream & Onion 165 g",
      category: "Provisions",
      price: "₦4,015.00",
      image: "Potato & Plantain Chips/spcsas2203.jpg",
    },
    {
      name: "Nutzy Peanut Butter Creamy Smooth 510 g",
      category: "Provisions",
      price: "₦3,560.00",
      image: "Jams & Spreads/spxtyabc642.jpg",
    },
    {
      name: "Checkers Custard Powder 3 in 1 Milk Jar 1 kg",
      category: "Provisions",
      price: "₦6,100.00",
      image:
        "Custard & Jelly/spmex3602_cc963533-b2bf-4ef3-a697-02e1117b4fb0.jpg",
    },
    {
      name: "Minimie Chin Chin 45 g",
      category: "Provisions",
      price: "₦150.00",
      image:
        "Cocktail Snacks/1507734773140_okea2333_minimie_chin_chin_45_g.jpg",
    },
  ];

  const cosmetics = [
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

  const toiletries = [
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

  const AllProducts = [...provisions, ...cosmetics, ...toiletries];

  const productDetailContainer = document.getElementById(
    "productDetailContainer",
  );
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
    productDetailContainer.innerHTML = `
            <div class="product-item-page">
                <div class="product-image-page">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-details-container-page">
                    <div class="product-details-page">
                        <p class="product-name-page">${product.name}</p>
                        <p class="product-price-page">${product.price}</p>
                    </div>
                    <div class="product-quantity-page">
                        <label for="quantity">Quantity:</label>
                        <div class="quantity-controls">
                            <button class="decrease-quantity">-</button>
                            <span class="current-quantity">1</span>
                            <button class="increase-quantity">+</button>
                            <button class="add-to-cart-btn-page">Add to Cart</button>
                        </div>
                    </div> 
                </div> 
            </div>
        `;

    const decreaseButton = document.querySelector(".decrease-quantity");
    const increaseButton = document.querySelector(".increase-quantity");
    const quantitySpan = document.querySelector(".current-quantity");
    const addToCartButton = document.querySelector(".add-to-cart-btn-page");

    let quantity = 1;

    decreaseButton.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
      }
    });

    increaseButton.addEventListener("click", () => {
      quantity++;
      quantitySpan.textContent = quantity;
    });

    addToCartButton.addEventListener("click", () => {
      showCartModal(product.name, product.price, product.image, quantity);
    });

    // Load similar products
    const similarProductsContainer = document.getElementById(
      "similarProductsContainer",
    );
    let similarProducts = AllProducts.filter(
      (p) => p.category === product.category && p.image !== product.image,
    );

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Fallback: supplement with random from other categories if too few
    if (similarProducts.length < 4) {
      const otherProducts = AllProducts.filter(
        (p) => p.category !== product.category && p.image !== product.image,
      );
      const supplements = otherProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 8 - similarProducts.length);
      similarProducts.push(...supplements);
    }

    if (similarProducts.length > 0) {
      shuffleArray(similarProducts);
      const randomProducts = similarProducts.slice(0, 8);

      randomProducts.forEach((p) => {
        const similarProductItem = document.createElement("div");
        similarProductItem.classList.add("similar-product-item");
        similarProductItem.innerHTML = `
                    <div class="similar-product-image">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <p class="similar-product-name">${p.name}</p>
                    <p class="similar-product-price">${p.price}</p>
                `;
        similarProductItem.addEventListener("click", () => {
          localStorage.setItem("selectedProduct", JSON.stringify(p));
          window.location.reload();
        });
        similarProductsContainer.appendChild(similarProductItem);
      });

      const showMoreButton = document.createElement("button");
      showMoreButton.textContent = "Show More";
      showMoreButton.classList.add("show-more-btn");
      showMoreButton.addEventListener("click", () => {
        const categoryMap = {
          Provisions: "provision.html",
          Cosmetics: "cosmetics.html",
          "Baby Items": "shop.html", // Fallback to shop.html
          Toiletries: "toiletries.html",
        };
        const categoryPage = categoryMap[product.category];
        if (categoryPage) {
          window.location.href = categoryPage;
        } else {
          // Default fallback if category not in map
          window.location.href = "shop.html";
        }
      });
      const similarProductsSection = document.querySelector(
        ".similar-products-section",
      );
      similarProductsSection.appendChild(showMoreButton);

      // Auto scroll to top when loading similar product
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 500);
    }
  } else {
    similarProductsContainer.innerHTML =
      "<p>Check out more great products!</p>";
  }

  // Function to show the modal
  function showCartModal(name, price, image, quantity) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingIndex = cart.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += parseInt(quantity);
    } else {
      cart.push({ name, price, image, quantity: parseInt(quantity) });
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Parse price to number
    const priceNum = parseFloat(price.replace(/[^0-9.-]+/g, ""));

    // Create modal if not exists
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

    // Event listeners
    modal.querySelector(".view-cart-btn").addEventListener("click", () => {
      window.location.href = "cart.html";
    });

    modal
      .querySelector(".continue-shopping-btn")
      .addEventListener("click", () => {
        modal.style.display = "none";
      });

    modal.style.display = "flex";

    // Close modal after 3 seconds
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }

  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(function () {
        loader.style.display = "none";
        document.body.classList.remove("active");
      }, 4000);
    }
  }

  function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
      document.body.classList.add("active");
    }
  }

  hideLoader();

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
      // Remove existing button to reposition it at the bottom
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
        // No more items, no button
      } else {
        const showMoreBtn = document.createElement("button");
        showMoreBtn.classList.add("show-more-btn");
        if (displayedCount >= 10) {
          showMoreBtn.textContent = `View All ${filteredItems.length} Results`;
          showMoreBtn.onclick = () => {
            window.location.href = "shop.html";
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

  // Search functionality for mobile screen
  searchBox.addEventListener("input", (e) => {
    const inputedItem = e.target.value.toLowerCase().trim();

    // Clear previous results
    inputText.innerHTML = "";

    // If search is empty, don't show anything
    if (!inputedItem) {
      return;
    }

    // Filter with proper return statement
    const filteredItems = AllProducts.filter((eachProducts) =>
      eachProducts.name.toLowerCase().includes(inputedItem),
    );
    // eachProducts.category.toLowerCase().includes(inputedItem)

    // Display filtered items with pagination
    handleSearchResults(filteredItems, inputedItem, inputText, 90);

    // console.log({filteredItems});
  });

  // filtering items for large screens
  searchBox2.addEventListener("input", (e) => {
    const inputedItem = e.target.value.toLowerCase().trim();

    // Clear previous results
    inputText2.innerHTML = "";
    if (searchBox2.value === "") {
      inputText2.style.display = "none";
    } else {
      inputText2.style.display = "block";
    }

    // If search is empty, don't show anything
    if (!inputedItem) {
      return;
    }

    // Filter with proper return statement
    const filteredItems = AllProducts.filter(
      (eachProducts) => eachProducts.name.toLowerCase().includes(inputedItem),
      // eachProducts.category.toLowerCase().includes(inputedItem)
    );

    // Display filtered items with pagination
    handleSearchResults(filteredItems, inputedItem, inputText2, 50);

    // console.log({filteredItems});
  });

  // UI Toggle Functions
  function toggleSearchBar(show) {
    if (show) {
      searchBar.style.display = "block";
      searchBar.classList.add("modal-show");
      searchBar.classList.remove("modal-hidden");
      searchIcon.style.display = "flex";
      menuBtn.style.display = "flex";
      hiddenMenu.style.display = "none";
      hiddenClose.style.display = "none";
      headerNavBar.style.height = "auto";
    } else {
      // searchBar.style.display = "none";
      searchBar.classList.remove("modal-show");
      searchBar.classList.add("modal-hidden");
      searchIcon.style.display = "flex";
      menuBtn.style.display = "flex";
      hiddenMenu.style.display = "none";
      hiddenClose.style.display = "none";
    }
  }

  function toggleMenu(show) {
    // menuBtn.style.display = show ? "none" : "flex";
    // hiddenClose.style.display = show ? "block" : "none";
    // hiddenMenu.style.display = show ? "block" : "none";
    // searchBar.style.display = "none";
    // searchIcon.style.display = "flex";
    // headerNavBar.style.height = "auto";
    if (show) {
      menuBtn.style.display = "none";
      hiddenClose.style.display = "block";
      hiddenMenu.style.display = "block";
      hiddenMenu.classList.remove("active");
      searchBar.style.display = "none";
      searchIcon.style.display = "flex";
      headerNavBar.style.height = "auto";
    } else {
      menuBtn.style.display = "flex";
      hiddenClose.style.display = "none";
      // hiddenMenu.style.display ="none";
      hiddenMenu.classList.add("active");
      searchBar.style.display = "none";
      searchIcon.style.display = "flex";
      headerNavBar.style.height = "auto";
    }
  }

  if (searchIcon) {
    searchIcon.addEventListener("click", () => toggleSearchBar(true));
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      toggleSearchBar(false);
      searchBox.value = "";

      inputText.innerHTML = "";
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => toggleMenu(true));
  }

  if (hiddenClose) {
    hiddenClose.addEventListener("click", () => toggleMenu(false));
  }

});
