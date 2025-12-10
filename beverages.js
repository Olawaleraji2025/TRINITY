"use strict";

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

// Array of beverage products
const beverages = [
  {
    image: "Soft Drinks/ALTCITD827.jpg",
    name: "Coca Cola Coke Can 33 cl x24",
    price: "₦12,840.00",
  },
  {
    image: "Soft Drinks/NBK158_d6f2ba5e-e528-4b73-8986-8ee009fdf31c.jpg",
    name: "Power Horse Energy Drink 25 cl x6",
    price: "₦8,940.00",
  },
  {
    image: "Soft Drinks/aspar2231_a082fe3a-cae6-4a7b-903b-e31b0a24dff7.jpg",
    name: "La Casera Apple Flavoured Drink Pet 35 cl x12",
    price: "₦2,950.00",
  },
  {
    image: "Soft Drinks/spar2617_514f0721-5c83-49e3-9f89-f9f15b0264cc.jpg",
    name: "Maltina Classic Malt Drink Pet Bottle 33 cl",
    price: "₦570.00",
  },
  {
    image: "Soft Drinks/spbvcd1504.jpg",
    name: "Teem Bitter Lemon Pet Bottle 50 cl",
    price: "₦500.00",
  },
  {
    image: "Soft Drinks/sprnw1723.png",
    name: "Maltina Classic Malt Drink Can 33 cl",
    price: "₦670.00",
  },
  {
    image: "Soft Drinks/sprnw1550.jpg",
    name: "Schweppes Virgin Mojito Can 33 cl",
    price: "₦565.00",
  },
  {
    image: "Soft Drinks/imgi_22_spbvju1608-_1.png",
    name: "Chi Exotic Pineapple & Coconut Nectar 100 cl",
    price: "₦1,770.00",
  },
  {
    image: "Soft Drinks/imgi_27_spbvyo2102.png",
    name: "Hollandia Yoghurt Drink Plain Sweetened 100 cl",
    price: "₦1,990.00",
  },
  {
    image: "Soft Drinks/imgi_31_spbvju1617.png",
    name: "Chivita Active Citrus Mixed Fruit Juice 100 cl",
    price: "₦2,210.00",
  },
  {
    image:
      "Soft Drinks/imgi_36_5-Alive-Pulpy-Orange-30-cl-Supermart-ng-1864.jpg",
    name: "5 Alive Pulpy Orange 30 cl",
    price: "₦625.00",
  },
  {
    image:
      "Soft Drinks/imgi_38_1508946327351_okea193_eva_table_water_75_cl_pack_of_12.jpg",
    name: "Eva Table Water 75 cl x12",
    price: "₦3,420.00",
  },
  {
    image: "Soft Drinks/imgi_39_spbvfd1518.png",
    name: "Capri Sun Apple 20 cl x40",
    price: "₦13,400.00",
  },
  {
    image: "Soft Drinks/imgi_40_aspar9564.jpg",
    name: "Chi Exotic Pineapple & Coconut Nectar 31.5 cl",
    price: "₦720.00",
  },
  {
    image: "Soft Drinks/imgi_41_spmzz1335.jpg",
    name: "Mr V Table Water 75 cl x12",
    price: "₦2,150.00",
  },
  {
    image: "Soft Drinks/imgi_46_23copy.jpg",
    name: "Peak Yoghurt Drink Plain Sweetened 100 cl",
    price: "₦2,165.00",
  },
  {
    image: "Soft Drinks/imgi_54_spmex3202.jpg",
    name: "Sosa Apple Fruit Drink 35 cl",
    price: "₦435.00",
  },
  {
    image: "Soft Drinks/imgi_55_spar10608.jpg",
    name: "Peak Yoghurt Drink Plain Sweetened 31.5 cl",
    price: "₦885.00",
  },
  {
    image: "Soft Drinks/imgi_60_sprnw1283.jfif.jpg",
    name: "Chi Ice Tea Lemon 100 cl",
    price: "₦1,325.00",
  },
  {
    image: "Soft Drinks/imgi_73_spmex2197.jpg",
    name: "Blue Boat Fresh Yo Yoghurt Plain Sweet 100 cl",
    price: "₦1,855.00",
  },
];
