"use strict";

// DOM Elements
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".modal-search");
const headerNavBar = document.querySelector(".header-nav-bar");
const closeIcon = document.querySelector(".close-menu");
const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".mobile-menu");
const hiddenClose = document.querySelector(".hidden-close");
const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderWrapper2 = document.querySelector(".slider-wrapper2");
const testimonialContainer = document.querySelector(".testimonials-section");
const productContainer = document.querySelector(".products-container");
const productContainer2 = document.querySelector(".products-container2");
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


// Slider Functionality

function getScrollPercentage() {
  const leftToRight = sliderWrapper.scrollLeft;
  const maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
  console.log({ leftToRight, maxScroll });
  return maxScroll > 0 ? (leftToRight / maxScroll) * 100 : 0;
}

function prevBtn() {
  sliderWrapper.scrollLeft -= 200;
  getScrollPercentage();
}

function nextBtn() {
  sliderWrapper.scrollLeft += 200;
  getScrollPercentage();
}

function prevBtn2() {
  sliderWrapper2.scrollLeft -= 200;
  getScrollPercentage();
}

function nextBtn2() {
  sliderWrapper2.scrollLeft += 200;
  getScrollPercentage();
}

// Slider Functionality for testimonials
function slideThrough() {
  const scroll = testimonialContainer.scrollLeft;
  const maximumScroll =
    testimonialContainer.scrollWidth - testimonialContainer.clientWidth;

  const TheScrollWidth = testimonialContainer.scrollWidth;
  const theCliendthWidth = testimonialContainer.clientWidth;
  const theTotalScroll = (scroll / maximumScroll) * 100;

  if (testimonialContainer.scrollLeft === maximumScroll) {
    testimonialContainer.scrollLeft = 0;
  } else {
    return;
  }
  // console.log({scroll, maximumScroll, TheScrollWidth, theCliendthWidth ,theTotalScroll});
  return maximumScroll > 0 ? (scroll / maximumScroll) * 100 : 0;
}

function prevBtn3() {
  testimonialContainer.scrollLeft -= 200;
  slideThrough();
}

function nextBtn3() {
  testimonialContainer.scrollLeft += 200;
  slideThrough();
}

// Using Array of objects to fill the product items list

const productsItems = [
  {
    name: "Peak Instant Full Cream Milk 400 g",
    category: "Provisions",
    price: "#6,000.00",
    image: "Homepage/Peak Milk 900g.webp",
  },
  {
    name: "Extract Whitening Lotion 200 ml",
    category: "Cosmetics",
    price: "₦6,250.00",
    image: "Homepage/medp8382_1f90ef96-1781-49c2-8066-9223f207d8bc.jpg",
  },
  {
    name: "Andre Rose California Wine 75cl",
    category: "Exotic Wines",
    price: "#6,000.00",
    image: "Homepage/ANDRE-ROSE-CALIFONIA-SPARKLNG.WINE-750ML.png",
  },
  {
    name: "Nestle Golden Morn Maize & Soya 800 g",
    category: "Provisions",
    price: "#6,000.00",
    image: "Homepage/Nestle Golden Morn Maize 800g.webp",
  },
  {
    name: "Cerelac Wheat & Milk 6 Months",
    category: "Baby items",
    price: "#6,000.00",
    image: "Baby Food/spbpfd2609.jpg",
  },
  {
    name: "Bacchus Tonic Wine 75l",
    category: "Exotic Wines",
    price: "#6,000.00",
    image: "Homepage/Bacchus.png",
  },
  {
    name: "Rose Carla Toilet Tissue 12 Rolls",
    category: "Toiletries",
    price: "₦11,640.00",
    image: "Toilet Tissue/aspar025.jpg",
  },
  {
    name: "Eclairs Choco 500 g",
    category: "Provisions",
    price: "₦3,400.00",
    image: "Sweets & Chewing Gum/aspar093.jpg",
  },
];

const productsItems2 = [
  {
    name: "Cussons Baby Wipes Soft & Smooth x50",
    category: "Baby items",
    price: "₦1,070.00",
    image: "Baby Wipes/aspar2085.jpg",
  },
  {
    name: "Extract Whitening Herbal Soap 125 g",
    category: "toiletries",
    price: "₦1,250.00",
    image: "Bath Time/sprnw1407.jpg",
  },
  {
    name: "4th street wine",
    category: "Exotic wines",
    price: "₦7,085.00",
    image: "RED WINES/4th-Street-Sweet-Red-Wine-75-cl-Supermart-ng-2542.jpg",
  },
  {
    name: "Pringles Salt & Vinegar 165 g",
    category: "Provisions",
    price: "₦4,015.00",
    image: "Potato & Plantain Chips/222.png",
  },
  {
    name: "Colgate Plax Mouthwash 500 ml",
    category: "toiletries",
    price: "₦6,345.00",
    image:
      "Oral Care/1458303106553_sptomw1048_colgate_mouthwash_plax_anti-bacterial_soft_mint_500_ml.jpg",
  },
  {
    name: "Vaseline Lotion Body Glow 400 ml",
    category: "cosmetics",
    price: "₦4,455.00",
    image: "Moisturisers & Lotions/aspar050.jpg",
  },
  {
    name: "Air Wick Air Freshener 300 ml",
    category: "toiletries",
    price: "₦3,795.00",
    image:
      "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Assorted-300-ml-Supermart-ng-2079.jpg",
  },
  {
    name: "Rowse Honey Glass Jar 340 g",
    category: "Provisions",
    price: "₦5,250.00",
    image: "SUGAR AND SWEETENERS/spxabc238.jpg",
  },
];

// Add wishlist and eye icons to each product item
productsItems.map((products) => {
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
    <div class="quantity-controls">
      <button class="quantity-btn decrease">-</button>
      <span class="quantity-display">1</span>
      <button class="quantity-btn increase" >+</button>
    </div>
    <button class="add-to-cart-btn" onClick="showCartModal('${EachProductName}', '${EachProductPrice}', '${EachProductImage}', this.parentElement.querySelector('.quantity-display').textContent)">Add to Cart<i class="fa-solid fa-cart-arrow-down"></i></button>
  `;

  productIcons.innerHTML = `
    <span class="wishlist-icon" ><i class="fa-regular fa-heart" onClick="addToWishlist('${EachProductName}', '${EachProductPrice}', '${EachProductImage}', this)"></i></span>
    <span class="eye-icon" onClick="viewProductPage('${EachProductName}', '${EachProductPrice}', '${EachProductImage}')"><i class="fa-regular fa-eye"></i></span>
  `;

  // Restore wishlist state
  const heartIcon = productIcons.querySelector('.fa-heart');
  if (heartIcon) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let existingIndex = wishlist.findIndex(item => item.name === EachProductName);
    if (existingIndex !== -1) {
      heartIcon.classList.add('fa-solid', 'added-to-wishlist');
      heartIcon.style.color = 'red';
    }
  }

  productItemDiv.appendChild(productImageDiv);
  productItemDiv.appendChild(productName);
  productItemDiv.appendChild(productDetails);
  productItemDiv.appendChild(productIcons);

  productContainer.appendChild(productItemDiv);

   // Add event listeners for quantity buttons
   const decreaseBtn = productItemDiv.querySelector('.decrease');
   const increaseBtn = productItemDiv.querySelector('.increase');
   const quantityDisplay = productItemDiv.querySelector('.quantity-display');
 
   decreaseBtn.addEventListener('click', () => {
    let qty = parseInt(quantityDisplay.textContent);
    if (qty > 1) {
      qty--;
      quantityDisplay.textContent = qty;
    }
  });

  increaseBtn.addEventListener('click', () => {
    let qty = parseInt(quantityDisplay.textContent);
    qty++;
    quantityDisplay.textContent = qty;
  });
    
  
});

productsItems2.map((products) => {
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
    <div class="quantity-controls">
      <button class="quantity-btn decrease">-</button>
      <span class="quantity-display">1</span>
      <button class="quantity-btn increase">+</button>
    </div>
    <button class="add-to-cart-btn" onClick="showCartModal('${EachProductName}', '${EachProductPrice}', '${EachProductImage}', this.parentElement.querySelector('.quantity-display').textContent)">Add to Cart<i class="fa-solid fa-cart-arrow-down"></i></button>
  `;

  productIcons.innerHTML = `
    <span class="wishlist-icon" ><i class="fa-regular fa-heart" onClick="addToWishlist('${EachProductName}', '${EachProductPrice}', '${EachProductImage}', this)"></i></span>
    <span class="eye-icon" onClick="viewProductPage('${EachProductName}', '${EachProductPrice}', '${EachProductImage}')"><i class="fa-regular fa-eye"></i></span>
  `;

  // Restore wishlist state
  const heartIcon = productIcons.querySelector('.fa-heart');
  if (heartIcon) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let existingIndex = wishlist.findIndex(item => item.name === EachProductName);
    if (existingIndex !== -1) {
      heartIcon.classList.add('fa-solid', 'added-to-wishlist');
      heartIcon.style.color = 'red';
    }
  }

  productItemDiv.appendChild(productImageDiv);
  productItemDiv.appendChild(productName);
  productItemDiv.appendChild(productDetails);
  productItemDiv.appendChild(productIcons);

  // Add event listeners for quantity buttons
  const decreaseBtn = productItemDiv.querySelector('.decrease');
  const increaseBtn = productItemDiv.querySelector('.increase');
  const quantityDisplay = productItemDiv.querySelector('.quantity-display');

  decreaseBtn.addEventListener('click', () => {
    let qty = parseInt(quantityDisplay.textContent);
    if (qty > 1) {
      qty--;
      quantityDisplay.textContent = qty;
    }
  });

  increaseBtn.addEventListener('click', () => {
    let qty = parseInt(quantityDisplay.textContent);
    qty++;
    quantityDisplay.textContent = qty;
  });

  productContainer2.appendChild(productItemDiv);
});

// Function to handle viewing product page
function viewProductPage(name, price, image) {
  const productDetails = { name, price, image };
  localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
  window.location.href = 'product.html';
}

// Add event listeners to product items to save product details to localStorage
function attachProductClickListeners(container, products) {
    const productItems = container.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        // Prevent multiple listeners
        if (item.dataset.listenerAttached) return;
        item.dataset.listenerAttached = true;

        item.addEventListener('click', () => {
            const productIndex = Array.from(container.children).indexOf(item);
            localStorage.setItem('selectedProduct', JSON.stringify(products[productIndex]));
            // window.location.href = 'product.html';
        });
    });
}

// Attach click listeners to products in both containers
attachProductClickListeners(productContainer, productsItems);
attachProductClickListeners(productContainer2, productsItems2);

// Filtering of items for mobile screen
/* <> */
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
    image: "Custard & Jelly/spmex3602_cc963533-b2bf-4ef3-a697-02e1117b4fb0.jpg",
  },
  {
    name: "Minimie Chin Chin 45 g",
    category: "Provisions",
    price: "₦150.00",
    image: "Cocktail Snacks/1487734773140_okea2333_minimie_chin_chin_45_g.jpg",
  },
  {
    name: "Mars 50 g",
    category: "Provisions",
    price: "₦1,425.00",
    image: "Chocolates/spcsch1009..jpg",
  },
  {
    name: "Kellogg's Fruit N Fibre 500 g",
    category: "Provisions",
    price: "₦6,450.00",
    image: "BREAKFAST CEREALS/spcgce721.jpg",
  },
  {
    name: "McVitie's Dark Cookie Vanilla Flavoured Cream Biscuits 35 g",
    category: "Provisions",
    price: "₦240.00",
    image: "Biscuits & Wafers/spmex4236.jpg",
  },
  {
    name: "Mentos Pure Fresh Chewing Gum Strawberry 87.5 g x50",
    category: "Provisions",
    price: "₦3,385.00",
    image:
      "Sweets & Chewing Gum/spasho2000_42250687-318e-4c79-98e8-c0dd1e8c8f32.jpg",
  },
  {
    name: "St. Louis Sugar Cubes 474 g x50",
    category: "Provisions",
    price: "₦2,120.00",
    image:
      "SUGAR AND SWEETENERS/oniru111_st-_louis_sugar_474_g_300x300_3a11d873-2a44-4fb3-82e9-fb986df46975.jpg",
  },
  {
    name: "Pringles Texas BBQ Sauce 165 g",
    category: "Provisions",
    price: "₦4,015.00",
    image: "Potato & Plantain Chips/sparxyz1248.jpg",
  },
  {
    name: "Nutzy Peanut Butter Chocolate 510 g",
    category: "Provisions",
    price: "₦5,590.00",
    image: "Jams & Spreads/spwiow652.jpg",
  },
  {
    name: "Checkers 3 in 1 Milk Custard Jar 400 g",
    category: "Provisions",
    price: "₦2,995.00",
    image: "Custard & Jelly/spmex3599_80c7da9d-29fb-49b7-9c0e-0ed1c7492de9.jpg",
  },
  {
    name: "Maryland Cookies Choc Chip & Hazelnut 145 g",
    category: "Provisions",
    price: "₦6,450.00",
    image: "Biscuits & Wafers/OkeA2266.png",
  },
  {
    name: "Quaker Quick Old Fashioned Oats 1.19 kg",
    category: "Provisions",
    price: "₦2,150.00",
    image: "BREAKFAST CEREALS/spar10837.jfif.jpg",
  },
  {
    name: "Checkers Custard Powder Banana Jar 400 g",
    category: "Provisions",
    price: "₦1,435.00",
    image: "Custard & Jelly/spar10931.jpg",
  },
  {
    name: "Mentos Chewy Dragees Mint 140 g",
    category: "Provisions",
    price: "₦1,030.00",
    image: "Sweets & Chewing Gum/dbk3161.jpg",
  },
  {
    name: "Pringles Hot & Spicy 165 g",
    category: "Provisions",
    price: "₦4,015.00",
    image: "Potato & Plantain Chips/spcsas2196.jpg",
  },
  {
    name: "Haansbro Noreos Chocolate Biscuit With Vanilla Cream 18 g x48",
    category: "Provisions",
    price: "₦5,885.00",
    image: "Biscuits & Wafers/omkt9020.jpg",
  },
  {
    name: "Pure Bliss Milk Cream Wafer 21 g",
    category: "Provisions",
    price: "₦125.00",
    image:
      "Biscuits & Wafers/spasho1685_4c4706da-da88-4b56-b705-b3e9f56db0fb.jpg",
  },
  {
    name: "Infinity Corn Flakes 350 g",
    category: "Provisions",
    price: "₦2,015.00",
    image: "BREAKFAST CEREALS/sparb1063.jpg",
  },
  {
    name: "Checkers Custard Powder Vanilla Jar 1 kg",
    category: "Provisions",
    price: "₦3,635.00",
    image: "Custard & Jelly/spmex3611_06b156d1-7b22-4a44-9037-df18495c8916.jpg",
  },
  {
    name: "Mentos Chewy Dragees Fruit 37.8 g x14",
    category: "Provisions",
    price: "₦385.00",
    image:
      "Sweets & Chewing Gum/sparb1032_mentos_chewy_dragees_fruit_37-8_g.jpg",
  },
  {
    name: "Nutzy Peanut Butter Honey 510 g",
    category: "Provisions",
    price: "₦3,685.00",
    image: "Jams & Spreads/spx00689.jpg",
  },
  {
    name: "Golden Penny White Granulated Sugar 500 g",
    category: "Provisions",
    price: "₦1,225.00",
    image:
      "SUGAR AND SWEETENERS/spcgsu827_33a590dc-e2ac-47d2-a3d9-da1e61476f70.jpg",
  },
  {
    name: "Checkers Custard Powder Vanilla Jar 400 g",
    category: "Provisions",
    price: "₦1,820.00",
    image:
      "BREAKFAST CEREALS/1498057279027_spxtyabc451_checkers_custard_powder_vanilla_400_g.jpg",
  },
  {
    name: "Kellogg's Coco Pops 45 g",
    category: "Provisions",
    price: "₦345.00",
    image: "BREAKFAST CEREALS/dbk3968.jpg",
  },
  {
    name: "Pure Bliss Milk Cream Wafers 21 g x12",
    category: "Provisions",
    price: "₦1,550.00",
    image: "Biscuits & Wafers/dbk3042_5aa42565-de8d-4bef-8ef1-8fc37401494a.jpg",
  },
  {
    name: "Alpenliebe Milk Filled Caramel Flavour Candy 36 g",
    category: "Provisions",
    price: "₦305.00",
    image:
      "Sweets & Chewing Gum/Alpenliebe-Milk-Filled-Caramel-Flavour-Candy-36-g-Supermart-ng-5546.jpg",
  },
  {
    name: "Pringles Original 40 g",
    category: "Provisions",
    price: "₦1,900.00",
    image: "Potato & Plantain Chips/1.webp",
  },
  {
    name: "Kellogg's Rice Krispies 510 g",
    category: "Provisions",
    price: "₦10,960.00",
    image: "BREAKFAST CEREALS/spcgce730.jpg",
  },
  {
    name: "Nutzy Peanut Butter Creamy Smooth 510 g",
    category: "Provisions",
    price: "₦3,560.00",
    image: "Jams & Spreads/spcssp2307_skippy-super-chunk-peanut-butter.jpg",
  },
  {
    name: "Checkers Custard Powder Banana Jar 1 kg",
    category: "Provisions",
    price: "₦3,465.00",
    image: "Custard & Jelly/spmex3597_5555e932-bacd-4ed8-893c-2bc9f1257aef.jpg",
  },
  {
    name: "McVitie's Digestive 104 g",
    category: "Provisions",
    price: "₦640.00",
    image: "Biscuits & Wafers/spcsbs1434.jpg",
  },
  {
    name: "Kellogg's Corn Flakes 325 g",
    category: "Provisions",
    price: "₦3,070.00",
    image: "BREAKFAST CEREALS/dbk3973.jpg",
  },
  {
    name: "Minimie Chin Chin Snack Jar 900 g",
    category: "Provisions",
    price: "₦3,965.00",
    image:
      "Cocktail Snacks/1481212361119_spxtyabc019_minimie_chin_chin_snack_jar_900_g-min.jpg",
  },
  {
    name: "Micks Centre Filled Eclairs With Choco Centre Jar 500 g",
    category: "Provisions",
    price: "₦3,350.00",
    image: "Sweets & Chewing Gum/aspar093.jpg",
  },
  {
    name: "Pringles Salt & Vinegar 165 g",
    category: "Provisions",
    price: "₦4,015.00 ",
    image: "Potato & Plantain Chips/222.png",
  },
  {
    name: "McVitie's All Butter Shortbread 100 g",
    category: "Provisions",
    price: "₦1,505.00                          ",
    image: "Biscuits & Wafers/spcsbs1440.jpg",
  },
  {
    name: "McVitie's Digestive 52 g",
    category: "Provisions",
    price: "₦280.00",
    image: "Biscuits & Wafers/sprnw1364.jpg",
  },
  {
    name: "Kellogg's Corn Flakes 325 g",
    category: "Provisions",
    price: "₦3,070.00",
    image: "BREAKFAST CEREALS/dbk3981.jpg",
  },
  {
    name: "Nestle Golden Morn Maize & Soya 800 g",
    category: "Provisions",
    price: "₦5,120.00",
    image: "BREAKFAST CEREALS/sparxyz744.jpg",
  },
  {
    name: "Clorets Chewing Gum Original Mint x10",
    category: "Provisions",
    price: "₦6,450.00",
    image: "Sweets & Chewing Gum/spar4322.png",
  },
  {
    name: "Blue Pearl Jam Strawberry 450 g",
    category: "Provisions",
    price: "₦3,105.00",
    image: "Jams & Spreads/spmex3624_55f8d5f7-abf6-4481-8753-55a1bf84d161.jpg",
  },
  {
    name: "Quaker White Oats Tin 420 g",
    category: "Provisions",
    price: "₦3,735.00",
    image: "BREAKFAST CEREALS/spcgce785.jpg",
  },
  {
    name: "Kellogg's Go Grains Sachet 900 g",
    category: "Provisions",
    price: "₦4,190.00",
    image: "BREAKFAST CEREALS/spmex3544.jpg",
  },
  {
    name: "Mentos Chewy Dragees Mint 37.8 g",
    category: "Provisions",
    price: "₦385.00",
    image:
      "Sweets & Chewing Gum/sparb1033_mentos_chewy_dragees_mint_37-8_g_300x300_b33d713f-c004-42eb-80a1-bb2af38581d1.jpg",
  },
  {
    name: "Kellogg's Coco Pops Box 375 g",
    category: "Provisions",
    price: "₦3,550.00",
    image: "BREAKFAST CEREALS/spmt064.png",
  },
  {
    name: "Kellogg's Corn Flakes Sachet 32 g (NG) x8",
    category: "Provisions",
    price: "₦1,650.00",
    image: "BREAKFAST CEREALS/spmzz1052..jpg",
  },
  {
    name: "Kellogg's Corn Flakes 550 g (UK)",
    category: "Provisions",
    price: "₦7,950.00",
    image: "BREAKFAST CEREALS/spx00632.jpg",
  },
  {
    name: "Checkers Custard Powder Vanilla 2 kg",
    category: "Provisions",
    price: "₦5,525.00",
    image: "BREAKFAST CEREALS/spxspy757.jpg",
  },
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
// Utility Functions

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

// Function to show the modal
function showCartModal(name, price, image, quantity) {
  // Get cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists
  let existingIndex = cart.findIndex(item => item.name === name);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += parseInt(quantity);
  } else {
    cart.push({ name, price, image, quantity: parseInt(quantity) });
  }

  // Save cart
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update cart count
  updateCartCount();

  // Parse price to number
  const priceNum = parseFloat(price.replace(/[^0-9.-]+/g, ""));

  // Create modal if not exists
  let modal = document.querySelector('.cart-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.classList.add('cart-modal');
    document.body.appendChild(modal);
  }

  const subtotal = (priceNum * quantity).toFixed(2);
  modal.innerHTML = `
    <div class="cart-modal-content">
      <div class="cart-modal-header">
        <img src="check.png" class="cart-modal-icon" alt="Success Icon">
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
  modal.querySelector('.view-cart-btn').addEventListener('click', () => {
    window.location.href = 'cart.html';
  });

  modal.querySelector('.continue-shopping-btn').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.style.display = 'flex';

  // Close modal after 3 seconds
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
}

// Wishlist functionality
function addToWishlist(name, price, image, heartIcon) {
 
  // Get wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  // Check if item already exists
  let existingIndex = wishlist.findIndex(item => item.name === name);
  if (existingIndex === -1) {
    // Add to wishlist
    wishlist.push({ name, price, image });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Update the UI
    heartIcon.classList.add('fa-solid', 'added-to-wishlist');
    heartIcon.style.color = 'red';
    showWishlistModal(image, name, 'added');
  } else {
    // Remove from wishlist
    wishlist.splice(existingIndex, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Update the UI
    heartIcon.classList.remove('fa-solid', 'added-to-wishlist');
    heartIcon.style.color = '';
    showWishlistModal(image, name, 'removed');
  }

 
}

// Function to show wishlist modal
function showWishlistModal(image, name, status) {

  let modal = document.querySelector('.cart-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.classList.add('cart-modal');
    document.body.appendChild(modal);
  }

  const message = status === 'added' ? 'Successfully added to wishlist' : status === 'removed' ? 'Successfully removed from wishlist' : 'Item already in wishlist';
  const icon = status === 'added' ? '✔' : status === 'removed' ? '✖' : 'ℹ';
  const imageIcon = status === 'added' ? 'check.png' : status === 'removed' ? 'multiply.png' : 'multiply.png';

  modal.innerHTML = `
    <div class="cart-modal-content">
      <div class="cart-modal-header">
        <img src="${imageIcon}" class="cart-modal-icon" alt="Success Icon">
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

  modal.style.display = 'flex';

  // Close modal after 3 seconds
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

// 
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
