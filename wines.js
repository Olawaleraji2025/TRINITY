"use strict";

// Array of exotic wines products
const exoticWinesProducts = [
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
