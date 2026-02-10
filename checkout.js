document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements for nav bar
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
    const hiddenSearchQuery = document.querySelector(".search-query");

    // UI Toggle Functions
    function toggleSearchBar(show) {
      if(show){
        searchBar.style.display = "block";
        searchBar.classList.add("modal-show");
        searchBar.classList.remove("modal-hidden");
        searchIcon.style.display = "flex";
        menuBtn.style.display = "flex";
        hiddenMenu.style.display = "none";
        hiddenClose.style.display = "none";
        headerNavBar.style.height = "auto" ;

      }else{
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
        hiddenMenu.style.display ="block";
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

    // Filtering of items for mobile screen
    const provisions = [
      // ... (copy the provisions array from main.js)
      {
        name: "McVitie's Hob Nobs 200 g",
        category: "Provisions",
        price: "₦1,560.00",
        
        image: "Biscuits & Wafers/dbk2998.jpg",
      },
      // Add more as needed, but for brevity, I'll assume we copy the full array
    ];

    const cosmetics = [
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/Spmt1003.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/Spmt520.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/Spmt974.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/aspar050.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/dbk4324.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/spasho1467_1ccfda31-5388-4f55-a6f0-861d8e2240e8.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/spasho2096_deb48546-c084-4d32-a132-c5178c2471d9.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/spasho2097_2475b5a8-535e-4ade-bad4-1b089a58848e.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/spaz4_859e2b48-cda9-4143-9426-5999003beabd.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/spmzz1248_f196f1fb-53aa-4937-943e-d5518dfca133.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/sptocr418_vaseline-blue-seal-pure-petroleum-orginal-450ml.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/sptolo235_enchanteur-hand-body-lotion-romantic-250ml.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/sptolo318_palmers-cocoa-butter-formula-lotion-250m.png",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/sptolo339.png",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image: "Moisturisers & Lotions/spwiow917.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Cosmetics",
        price: "₦6,450.00",
        image:
          "Moisturisers & Lotions/spwxyz579_nivea_nourishing_body_lotion_250_ml.jpg",
      },
    ];

    const exoticWines = [
      {
        name: "Andre Rose California Wine 75cl",
        category: "Exotic Wines",
        price: "#6,000.00",
        image: "Homepage/ANDRE-ROSE-CALIFONIA-SPARKLNG.WINE-750ML.png",
      },
      {
        name: "Bacchus Tonic Wine 75l",
        category: "Exotic Wines",
        price: "#6,000.00",
        image: "Homepage/Bacchus.png",
      },
      {
        name: "4th street wine",
        category: "Exotic Wines",
        price: "₦7,085.00",
        image: "RED WINES/4th-Street-Sweet-Red-Wine-75-cl-Supermart-ng-2542.jpg",
      },
    ];

    const babyItems = [
      {
        name: "Cerelac Wheat & Milk 6 Months",
        category: "Baby Items",
        price: "#6,000.00",
        image: "Baby Food/spbpfd2609.jpg",
      },
      {
        name: "Cussons Baby Wipes Soft & Smooth x50",
        category: "Baby Items",
        price: "₦1,070.00",
        image: "Baby Wipes/aspar2085.jpg",
      },
    ];

    const toiletries = [
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Assorted-300-ml-Supermart-ng-2079.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Stick-Up-Multi-Use-Aroma-Gel-Assorted-30-g-Supermart-ng-1317.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Stick-Up-Multi-Use-Aroma-Gel-Citrus-30-g-Supermart-ng-4000.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/Air-Wick-Drummer-Air-Freshener-Assorted-Fragrances-45-g-x6-Supermart-ng-9365.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/Air-Wick-Freshmatic-Diffuser-Refill-Assorted-250-ml-Supermart-ng-6930.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/Air-Wick-Freshmatic-Max-Refill-Assorted-250-ml-Supermart-ng-7570.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/spasho2022_5d9864c0-d12c-4662-ae10-12f3fb830386.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/spasho420_cca82127-b059-4824-a8d7-48e2b76ca34f.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image:
          "Air Fresheners & Fragrances/spasho421_c652d445-5a45-4e75-b717-2bdaf3e35f58.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Air Fresheners & Fragrances/spwxyz1494_2.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bathroom & Toilet Cleaners/spar00667.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bathroom & Toilet Cleaners/spmex1298.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/CS073.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/OkeA1860.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/dbk1168.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/omkt384_719cfc8e-c9b2-4004-a454-66dbc34a577d.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/spar10375.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/spar10376.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/spar10380.jpg",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Toiletries",
        price: "₦6,450.00",
        image: "Bleach/spar10382.jpg",
      },
    ];

    const beverages = [
      {
        name: "4th Street Sweet Red Wine 75 cl",
        category: "Exotic Wines",
        price: "₦4,970.00",
        image: "RED WINES/4th-Street-Sweet-Red-Wine-75-cl-Supermart-ng-2542.jpg",
      },
      {
        name: "Four Cousins Natural Sweet Red Wine 75 cl",
        category: "Exotic Wines",
        price: "₦8,670.00",
        image: "RED WINES/mega202.jpg",
      },
      {
        name: "Baron Romero Spanish Red Wine 75 cl",
        category: "Exotic Wines",
        price: "₦4,475.00",
        image: "RED WINES/omkt062_69a1da56-14ce-4f57-b9bc-68739115e637.jpg",
      },
      {
        name: "Castillo De Espana Tempranillo Garnacha 75 cl",
        category: "Exotic Wines",
        price: "₦6,300.00",
        image: "RED WINES/spwiow187.webp",
      },
      {
        name: "Peak Instant Full Cream Milk Tin 400 g",
        category: "Exotic Wines",
        price: "₦6,450.00",
        image: "RED WINES/spwxyz1207.png",
      },
      {
        name: "Carlo Rossi Sweet Red Wine 75 cl",
        category: "Exotic Wines",
        price: "₦9,820.00",
        image: "RED WINES/spar0382_1fa6f695-bdd8-45d2-a242-b6b482f8aec1.jpg",
      },
      {
        name: "Castillo Grande Tempranillo Vino Tinto 75 cl",
        category: "Exotic Wines",
        price: "₦5,515.00",
        image: "RED WINES/sparxyz2166.jpg",
      },
      {
        name: "Carlo Rossi Wine Mixed Berry Flavour 75 cl",
        category: "Exotic Wines",
        price: "₦9,590.00",
        image: "RED WINES/sprnw1506.jpg",
      },
      {
        name: "Baron De Valls Vin Rouge 75 cl",
        category: "Exotic Wines",
        price: "₦4,475.00",
        image: "RED WINES/spwiiw40_baron-de-valls-vin-rouge.jpg",
      },
      {
        name: "Carlo Rossi California Red 75 cl",
        category: "Exotic Wines",
        price: "₦10,020.00",
        image: "RED WINES/spwiow170_carlo-rossi-california-red.jpg",
      },
    ];

    const AllProducts = [
      ...provisions,
      ...cosmetics,
      ...exoticWines,
      ...babyItems,
      ...toiletries,
      ...beverages,
    ];

    // Function to handle displaying search results with pagination
    function handleSearchResults(filteredItems, inputedItem, container, imgWidth) {
      container.innerHTML = '';
      let displayedCount = 0;
      const maxPerClick = 5;
      function displayMore() {
        // Remove existing button to reposition it at the bottom
        const existingBtn = container.querySelector('.show-more-btn');
        if (existingBtn) {
          existingBtn.remove();
        }

        const toDisplay = filteredItems.slice(displayedCount, displayedCount + maxPerClick);
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
          const resultsContainer = newDiv.querySelector('.results-container');
          resultsContainer.style.cursor = 'pointer';
          resultsContainer.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(item));
            window.location.href = `product.html`;
          });
          container.appendChild(newDiv);
        });
        displayedCount += toDisplay.length;

        if (displayedCount >= filteredItems.length) {
          // No more items, no button
        } else {
          const showMoreBtn = document.createElement('button');
          showMoreBtn.classList.add('show-more-btn');
          if (displayedCount >= 10) {
            showMoreBtn.textContent = `View All ${filteredItems.length} Results`;
            showMoreBtn.onclick = () => {
              window.location.href = 'shop.html';
            };
          } else {
            showMoreBtn.textContent = 'Show More';
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
        <img src="search.png" alt="no-result-image">
        </div>
        <div class="no-results-container"> <p>Oops! We couldn't find <span class="searchedItem">${inputedItem}</span> </p></div>
        </div>`;
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
        eachProducts.name.toLowerCase().includes(inputedItem)
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
        (eachProducts) => eachProducts.name.toLowerCase().includes(inputedItem)
        // eachProducts.category.toLowerCase().includes(inputedItem)
      );

      // Display filtered items with pagination
      handleSearchResults(filteredItems, inputedItem, inputText2, 50);

      // console.log({filteredItems});
    });

    // Display the categories when clicked
    let isOpen = false;
    categoryDiv.addEventListener("click", () => {
      isOpen = !isOpen;

      if (isOpen) {
        hiddenCategories.classList.add("active");
      } else {
        hiddenCategories.classList.remove("active");
      }
    });

    // Function to update cart count
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const cartCountElement = document.getElementById('cart-count');
      if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'block' : 'none';
      }
    }

    // Update cart count on page load
    updateCartCount();

    // Loader functionality
    function hideLoader() {
      const loader = document.getElementById('loader');
      if (loader) {

        setTimeout(function() {
          loader.style.display = 'none';
        }, 3000);
      }
    }

    function showLoader() {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.display = 'flex';
      }
    }

    // Automatically hide loader on page load
    window.addEventListener('load', hideLoader);
    const icons = document.querySelectorAll('.section-header .fa-chevron-up');

    icons.forEach((icon, index) => {
        const section = icon.closest('.section');
        const content = section.querySelector('.section-content');
        const span = section.querySelector('.section-header span');

        // Initialize: first section active, others collapsed
        if (index === 0) {
            content.classList.add('active');
            content.classList.remove('collapsed');
            if (span) span.classList.add('active');
            if (icon) icon.classList.remove('fa-chevron-down');
            if (icon) icon.classList.add('fa-chevron-up');
        } else {
            content.classList.add('collapsed');
            content.classList.remove('active');
            if (span) span.classList.remove('active');
            if (icon) icon.classList.remove('fa-chevron-up');
            if (icon) icon.classList.add('fa-chevron-down');
        }

        // Add click event to toggle
        icon.addEventListener('click', () => {
            const isActive = content.classList.contains('active');
            if (isActive) {
                // Collapse
                content.classList.remove('active');
                content.classList.add('collapsed');
                if (span) span.classList.remove('active');
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            } else {
                // Expand
                content.classList.add('active');
                content.classList.remove('collapsed');
                if (span) span.classList.add('active');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
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
            <div class="order-item-image-container">
                <img src="${item.image}" alt="${item.name}" class="order-item-image" />
                </div>
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
