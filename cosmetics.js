"use strict";

// Array of cosmetics products
const cosmeticsProducts = [
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

// This is for the search icon

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-container");
// const accountCreation = document.querySelector(".Account");

searchIcon.addEventListener("click", function () {
  searchBar.style.display = "flex";
  searchIcon.style.display = "none";
  menuBtn.style.display = "flex";
  hiddenMenu.style.display = "none";
  hiddenClose.style.display = "none";
});

let closeIcon = document.querySelector(".close-menu");
closeIcon.addEventListener("click", function () {
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
  menuBtn.style.display = "flex";
  hiddenMenu.style.display = "none";
  hiddenClose.style.display = "none";
});

// This is for the menu icon

let menuBtn = document.querySelector(".menu");
let hiddenMenu = document.querySelector(".mobile-menu");
let hiddenClose = document.querySelector(".hidden-close");

menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  hiddenClose.style.display = "block";
  hiddenMenu.style.display = "block";
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
});

hiddenClose.addEventListener("click", function () {
  menuBtn.style.display = "flex";
  hiddenMenu.style.display = "none";
  hiddenClose.style.display = "none";
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
});
