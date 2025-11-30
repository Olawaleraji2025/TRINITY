"use strict";

    // This is for the search icon
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".nav-search");
    const headerNavBar = document.querySelector(".header-nav-bar");

    if (searchIcon) {
        searchIcon.addEventListener("click", function() {
            searchBar.style.display = "flex";
            searchIcon.style.display = "none";
            menuBtn.style.display = "flex";
            hiddenMenu.style.display = "none";
            hiddenClose.style.display = "none";
            headerNavBar.style.height = "100px";
        });
    }

    const closeIcon = document.querySelector(".close-menu");
    if (closeIcon) {
        closeIcon.addEventListener("click", function () {
            searchBar.style.display = "none";
            searchIcon.style.display = "flex";
            menuBtn.style.display = "flex";
            hiddenMenu.style.display = "none";
            hiddenClose.style.display = "none";
            headerNavBar.style.height = "auto";
        });
    }

    // This is for the menu icon
    const menuBtn = document.querySelector(".menu");
    const hiddenMenu = document.querySelector(".mobile-menu");
    const hiddenClose = document.querySelector(".hidden-close");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            menuBtn.style.display = "none";
            hiddenClose.style.display = "block";
            hiddenMenu.style.display = "block";
            searchBar.style.display = "none";
            searchIcon.style.display = "flex";
            headerNavBar.style.height = "auto";
        });
    }

    if (hiddenClose) {
        hiddenClose.addEventListener("click", function () {
            menuBtn.style.display = "flex";
            hiddenMenu.style.display = "none";
            hiddenClose.style.display = "none";
            searchBar.style.display = "none";
            searchIcon.style.display = "flex";
            headerNavBar.style.height = "auto";
        });
}


    
// Slider Functionality

const sliderWrapper = document.querySelector('.slider-wrapper');

const sliderWrapper2 = document.querySelector('.slider-wrapper2');

function getScrollPercentage() {
    const leftToRight = sliderWrapper.scrollLeft;
    const maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
    console.log({leftToRight, maxScroll});
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


const testimonialContainer = document.querySelector(".testimonials-section");

function slideThrough() {
    const scroll = testimonialContainer.scrollLeft;
    const maximumScroll = testimonialContainer.scrollWidth - testimonialContainer.clientWidth;

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
        image: "Homepage/Peak Milk 900g.webp"
    },
    {
        name: "Extract Whitening Lotion 200 ml",
        category: "Cosmetics",
        price: "₦6,250.00",
        image: "Homepage/medp8382_1f90ef96-1781-49c2-8066-9223f207d8bc.jpg"
    },
    {
        name: "Andre Rose California Wine 75cl",
        category: "Exotic Wines",
        price: "#6,000.00",
        image: "Homepage/ANDRE-ROSE-CALIFONIA-SPARKLNG.WINE-750ML.png"
    },
    {
        name: "Nestle Golden Morn Maize & Soya 800 g",
        category: "Provisions",
        price: "#6,000.00",
        image: "Homepage/Nestle Golden Morn Maize 800g.webp"
    },
    {
        name: "Cerelac Wheat & Milk 6 Months",
        category: "Baby items",
        price: "#6,000.00",
        image: "Baby Food/spbpfd2609.jpg"
    },
    {
        name: "Bacchus Tonic Wine 75l",
        category: "Exotic Wines",
        price: "#6,000.00",
        image: "Homepage/Bacchus.png"
    },
    {
        name: "Rose Carla Toilet Tissue 12 Rolls",
        category: "Toiletries",
        price: "₦11,640.00",
        image: "Toilet Tissue/aspar025.jpg"
    },
    {
        name: "Eclairs Choco 500 g",
        category: "Provisions",
        price: "₦3,400.00",
        image: "Sweets & Chewing Gum/aspar093.jpg"
    },
];

const productsItems2 = [
    {
        name: "Cussons Baby Wipes Soft & Smooth x50",
        category: "Baby items",
        price: "₦1,070.00",
        image: "Baby Wipes/aspar2085.jpg"
    },
    {
        name: "Extract Whitening Herbal Soap 125 g",
        category: "toiletries",
        price: "₦1,250.00",
        image: "Bath Time/sprnw1407.jpg"
    },
    {
        name: "4th street wine",
        category: "Exotic wines",
        price: "₦7,085.00",
        image: "RED WINES/4th-Street-Sweet-Red-Wine-75-cl-Supermart-ng-2542.jpg"
    },
    {
        name: "Pringles Salt & Vinegar 165 g",
        category: "Provisions",
        price: "₦4,015.00",
        image: "Potato & Plantain Chips/222.png"
    },
    {
        name: "Colgate Plax Mouthwash 500 ml",
        category: "toiletries",
        price: "₦6,345.00",
        image: "Oral Care/1458303106553_sptomw1048_colgate_mouthwash_plax_anti-bacterial_soft_mint_500_ml.jpg"
    },
    {
        name: "Vaseline Lotion Body Glow 400 ml",
        category: "cosmetics",
        price: "₦4,455.00",
        image: "Moisturisers & Lotions/aspar050.jpg"
    },
    {
        name: "Air Wick Air Freshener 300 ml",
        category: "toiletries",
        price: "₦3,795.00",
        image: "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Assorted-300-ml-Supermart-ng-2079.jpg"
    },
    {
        name: "Rowse Honey Glass Jar 340 g",
        category: "Provisions",
        price: "₦5,250.00",
        image: "SUGAR AND SWEETENERS/spxabc238.jpg"
    }
]

const productContainer = document.querySelector(".products-container");
const productContainer2 = document.querySelector(".products-container2");

productsItems.map((products) => {
    const EachProductImage = products.image;
    const EachProductName = products.name;
    const EachProductPrice = products.price;

    const productItemDiv = document.createElement('div');
    const productImageDiv = document.createElement('div');
    const productName = document.createElement('div');
    const productDetails = document.createElement('div');

    
    productItemDiv.classList.add('product-item');
    productName.classList.add('product-name');
    productImageDiv.classList.add('product-image');
    productDetails.classList.add('product-details');


    // productName.className = 'product-name';
    // productImageDiv.className = 'product-image';
    // productDetails.className = 'product-details';

    productImageDiv.innerHTML = `<img src="${EachProductImage}">`;
    productName.innerHTML = `
    <p> ${EachProductName} </p>
    `;
    productDetails.innerHTML = `
    <p class="product-price"> ${EachProductPrice} </p>
    <button class="add-to-cart-btn">Add to Cart</button>
    `;

    productItemDiv.appendChild(productImageDiv);
    productItemDiv.appendChild(productName);
    productItemDiv.appendChild(productDetails);

    productContainer.appendChild(productItemDiv);

})

productsItems2.map((products) => {
    const EachProductImage = products.image;
    const EachProductName = products.name;
    const EachProductPrice = products.price;

    const productItemDiv = document.createElement('div');
    const productImageDiv = document.createElement('div');
    const productName = document.createElement('div');
    const productDetails = document.createElement('div');

    
    productItemDiv.classList.add('product-item');
    productName.classList.add('product-name');
    productImageDiv.classList.add('product-image');
    productDetails.classList.add('product-details');


    // productName.className = 'product-name';
    // productImageDiv.className = 'product-image';
    // productDetails.className = 'product-details';

    productImageDiv.innerHTML = `<img src="${EachProductImage}">`;
    productName.innerHTML = `
    <p> ${EachProductName} </p>
    `;
    productDetails.innerHTML = `
    <p class="product-price"> ${EachProductPrice} </p>
    <button class="add-to-cart-btn">Add to Cart</button>
    `;

    productItemDiv.appendChild(productImageDiv);
    productItemDiv.appendChild(productName);
    productItemDiv.appendChild(productDetails);

    productContainer2.appendChild(productItemDiv);

})


// Filtering of items
/* <> */
const searchBox = document.querySelector('.search-inputs');
const inputText = document.querySelector(".hidden-results-container");

searchBox.addEventListener('input', (e) => {
    const inputedItem = e.target.value.toLowerCase().trim();
    
    // Clear previous results
    inputText.innerHTML = '';
    
    // If search is empty, don't show anything
    if (!inputedItem) {
        return;
    }
    
    // Filter with proper return statement
    const filteredItems = productsItems.filter((eachProducts) => 
        eachProducts.name.toLowerCase().includes(inputedItem) || 
        eachProducts.category.toLowerCase().includes(inputedItem)
    );
    
    // Display filtered items properly
    if (filteredItems.length === 0) {
        inputText.innerHTML = '<p>No results found</p>';
    } else {
        filteredItems.forEach(item => {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `<p>${item.name} - ${item.category}</p>`;
            inputText.appendChild(newDiv);
        });
    }
    
    // console.log({filteredItems});
});
