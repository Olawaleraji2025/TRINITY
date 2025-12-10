"use strict";

// Array of provisions products
const provisionsProducts = [
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
    image: "Cocktail Snacks/1507734773140_okea2333_minimie_chin_chin_45_g.jpg",
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
    name: "Checkers Banana Custard Powder Jar 400 g",
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
