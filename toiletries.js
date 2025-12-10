"use strict";

// Array of toiletries products
const toiletriesProducts = [
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
