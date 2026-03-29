document.addEventListener("DOMContentLoaded", () => {
  showLoader();

  // DOM Elements
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector(".modal-search");
  const headerNavBar = document.querySelector(".header-nav-bar");
  const closeIcon = document.querySelector(".close-menu");
  const menuBtn = document.querySelector(".menu");
  const hiddenMenu = document.querySelector(".mobile-menu");
  const hiddenClose = document.querySelector(".hidden-close");
  const searchBox = document.querySelector(".search-inputs");
  const inputText = document.querySelector("#hiddenContainer2");
  const searchBox2 = document.querySelector(".search-inputs2");
  const inputText2 = document.querySelector(".hidden-results-container2");
  const categoryDiv = document.querySelector(".categories-div");
  const hiddenCategories = document.querySelector(".hidden-categories");

  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartTotalSpan = document.getElementById("cartTotal");
  const itemCountSpan = document.getElementById("itemCount");
  const cartMessageP = itemCountSpan ? itemCountSpan.parentElement : null;
  const proceedToCheckoutBtn = document.getElementById("proceedToCheckout");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

  // Update cart count
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
      cartCountElement.style.display = totalItems > 0 ? "block" : "none";
    }
    if (itemCountSpan) {
      itemCountSpan.textContent = totalItems;
    }
    if (cartMessageP) {
      cartMessageP.innerHTML = `You have <span id="itemCount">${totalItems}</span> items in your basket.${totalItems > 0 ? " Let's get you checked out." : ""}`;
    }
    if (proceedToCheckoutBtn) {
      proceedToCheckoutBtn.disabled = totalItems === 0;
    }
  }

  // Filtering of items for mobile screen
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
      name: "St. Ives Lotion Skin Soothing Oatmeal & Shea Butter 621 ml",
      category: "Cosmetics",
      price: "₦4,200.00",
      image: "Moisturisers & Lotions/Spmt520.jpg",
    },

    {
      name: "Nivea Men Lotion Revitalising 400 ml",
      category: "Cosmetics",
      price: "₦5,100.00",
      image: "Moisturisers & Lotions/Spmt974.jpg",
    },
    {
      name: "Vaseline Lotion Intensive Care Healthy Body Glow 400 ml",
      category: "Cosmetics",
      price: "₦2,950.00",
      image: "Moisturisers & Lotions/aspar050.jpg",
    },
    {
      name: "Skin White Papaya Milk Whitening Lotion 350 ml",
      category: "Cosmetics",
      price: "₦6,200.00",
      image: "Moisturisers & Lotions/dbk4324.jpg",
    },
    {
      name: "Extract Whitening Lotion Papaya Calamansi 200 ml",
      category: "Cosmetics",
      price: "₦3,750.00",
      image:
        "Moisturisers & Lotions/spasho1467_1ccfda31-5388-4f55-a6f0-861d8e2240e8.jpg",
    },
    {
      name: "Nivea Radiant & Beauty Advanced Care Body Lotion 400ml",
      category: "Cosmetics",
      price: "₦5,800.00",
      image:
        "Moisturisers & Lotions/spasho2096_deb48546-c084-4d32-a132-c5178c2471d9.jpg",
    },
    {
      name: "Nivea Radiant & Beauty Even Glow Body Lotion 400 ml",
      category: "Cosmetics",
      price: "₦4,500.00",
      image:
        "Moisturisers & Lotions/spasho2097_2475b5a8-535e-4ade-bad4-1b089a58848e.jpg",
    },
    {
      name: "Nivea Lotion Nourishing Cocoa 400 ml",
      category: "Cosmetics",
      price: "₦3,200.00",
      image:
        "Moisturisers & Lotions/spaz4_859e2b48-cda9-4143-9426-5999003beabd.jpg",
    },
    {
      name: "Dr Rashel Vitamin C Brightening Cream",
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
      name: "Wind Air Freshener Apple 65g",
      category: "Toiletries",
      price: "₦4,210.00",
      image:
        "Air Fresheners & Fragrances/spasho2022_5d9864c0-d12c-4662-ae10-12f3fb830386.jpg",
    },
    {
      name: "Sunshine Air Freshener Tropical Mist",
      category: "Toiletries",
      price: "₦5,120.00",
      image:
        "Air Fresheners & Fragrances/spasho420_cca82127-b059-4824-a8d7-48e2b76ca34f.jpg",
    },
    {
      name: "Sunshine Car Air Freshener Ocean",
      category: "Toiletries",
      price: "₦3,450.00",
      image:
        "Air Fresheners & Fragrances/spasho421_c652d445-5a45-4e75-b717-2bdaf3e35f58.jpg",
    },
    {
      name: "Sunshine Air Freshener",
      category: "Toiletries",
      price: "₦6,020.00",
      image: "Air Fresheners & Fragrances/spwxyz1494_2.jpg",
    },
  ];

  const AllProducts = [...provisions, ...cosmetics, ...toiletries];

  // Function to handle displaying search results with pagination
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

  // Search functionality for mobile screen
  if (searchBox) {
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
  }

  // filtering items for large screens
  if (searchBox2) {
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
  }

  function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }

  function renderCart() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalSpan.textContent = "₦0.00";
      return;
    }

    cartItemsContainer.innerHTML = cart
      .map(
        (item, index) => `
            <div class="cart-item-container">
  <div class="cart-item">
  <div class="cart-details ">
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
                  ₦${(parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity).toFixed(2)}
              </span>
          </div>
  </div>
  </div>
</div>
        `,
      )
      .join("");

    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return acc + price * item.quantity;
    }, 0);

    cartTotalSpan.textContent = `₦${total.toFixed(2)}`;
  }

  cartItemsContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("remove-from-cart-btn") ||
      e.target.classList.contains("fa-trash")
    ) {
      const index = parseInt(e.target.dataset.index, 10);
      cart.splice(index, 1);
      updateCart();
    } else if (e.target.classList.contains("quantity-btn")) {
      const index = parseInt(e.target.dataset.index, 10);
      if (e.target.textContent === "+") {
        cart[index].quantity += 1;
      } else if (e.target.textContent === "-" && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      }
      updateCart();
    }
  });

  renderCart();
  updateCartCount();

  // Handle Proceed to Checkout button
  if (proceedToCheckoutBtn) {
    proceedToCheckoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty. Please add items to proceed to checkout.");
        return;
      }
      window.location.href = "checkout.html";
    });
  }

  // Loader functionality
  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(function () {
        loader.style.display = "none";
        document.body.classList.remove("active");
      }, 3000);
    }
  }

  function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
      document.body.classList.add("active");
    }
  }

  // Automatically hide loader on page load
  window.addEventListener("load", hideLoader);
});
