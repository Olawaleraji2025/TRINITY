"use strict";

// Grouped products by category

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
    image: "Cocktail Snacks/1507734773140_okea2333_minimie_chin_chin_45_g.jpg",
  },
  // {
  //   name: "Mars 50 g",
  //   category: "Provisions",
  //   price: "₦1,425.00",
  //   image: "Chocolates/spcsch1009..jpg",
  // },
  // {
  //   name: "Kellogg's Fruit N Fibre 500 g",
  //   category: "Provisions",
  //   price: "₦6,450.00",
  //   image: "BREAKFAST CEREALS/spcgce721.jpg",
  // },
  // {
  //   name: "McVitie's Dark Cookie Vanilla Flavoured Cream Biscuits 35 g",
  //   category: "Provisions",
  //   price: "₦240.00",
  //   image: "Biscuits & Wafers/spmex4236.jpg",
  // },
  // {
  //   name: "Mentos Pure Fresh Chewing Gum Strawberry 87.5 g x50",
  //   category: "Provisions",
  //   price: "₦3,385.00",
  //   image:
  //     "Sweets & Chewing Gum/spasho2000_42250687-318e-4c79-98e8-c0dd1e8c8f32.jpg",
  // },
  // {
  //   name: "St. Louis Sugar Cubes 474 g x50",
  //   category: "Provisions",
  //   price: "₦2,120.00",
  //   image:
  //     "SUGAR AND SWEETENERS/oniru111_st-_louis_sugar_474_g_300x300_3a11d873-2a44-4fb3-82e9-fb986df46975.jpg",
  // },
  // {
  //   name: "Pringles Texas BBQ Sauce 165 g",
  //   category: "Provisions",
  //   price: "₦4,015.00",
  //   image: "Potato & Plantain Chips/sparxyz1248.jpg",
  // },
  // {
  //   name: "Nutzy Peanut Butter Chocolate 510 g",
  //   category: "Provisions",
  //   price: "₦5,590.00",
  //   image: "Jams & Spreads/spwiow652.jpg",
  // },
  // {
  //   name: "Checkers 3 in 1 Milk Custard Jar 400 g",
  //   category: "Provisions",
  //   price: "₦2,995.00",
  //   image: "Custard & Jelly/spmex3599_80c7da9d-29fb-49b7-9c0e-0ed1c7492de9.jpg",
  // },
  // {
  //   name: "Maryland Cookies Choc Chip & Hazelnut 145 g",
  //   category: "Provisions",
  //   price: "₦6,450.00",
  //   image: "Biscuits & Wafers/OkeA2266.png",
  // },
  // {
  //   name: "Quaker Quick Old Fashioned Oats 1.19 kg",
  //   category: "Provisions",
  //   price: "₦2,150.00",
  //   image: "BREAKFAST CEREALS/spar10837.jfif.jpg",
  // },
  // {
  //   name: "Checkers Banana Custard Powder Jar 400 g",
  //   category: "Provisions",
  //   price: "₦1,435.00",
  //   image: "Custard & Jelly/spar10931.jpg",
  // },
  // {
  //   name: "Mentos Chewy Dragees Mint 140 g",
  //   category: "Provisions",
  //   price: "₦1,030.00",
  //   image: "Sweets & Chewing Gum/dbk3161.jpg",
  // },
  // {
  //   name: "Pringles Hot & Spicy 165 g",
  //   category: "Provisions",
  //   price: "₦4,015.00",
  //   image: "Potato & Plantain Chips/spcsas2196.jpg",
  // },
  // {
  //   name: "Haansbro Noreos Chocolate Biscuit With Vanilla Cream 18 g x48",
  //   category: "Provisions",
  //   price: "₦5,885.00",
  //   image: "Biscuits & Wafers/omkt9020.jpg",
  // },
  // {
  //   name: "Pure Bliss Milk Cream Wafer 21 g",
  //   category: "Provisions",
  //   price: "₦125.00",
  //   image:
  //     "Biscuits & Wafers/spasho1685_4c4706da-da88-4b56-b705-b3e9f56db0fb.jpg",
  // },
  // {
  //   name: "Infinity Corn Flakes 350 g",
  //   category: "Provisions",
  //   price: "₦2,015.00",
  //   image: "BREAKFAST CEREALS/sparb1063.jpg",
  // },
  // {
  //   name: "Checkers Custard Powder Vanilla Jar 1 kg",
  //   category: "Provisions",
  //   price: "₦3,635.00",
  //   image: "Custard & Jelly/spmex3611_06b156d1-7b22-4a44-9037-df18495c8916.jpg",
  // },
  // {
  //   name: "Mentos Chewy Dragees Fruit 37.8 g x14",
  //   category: "Provisions",
  //   price: "₦385.00",
  //   image:
  //     "Sweets & Chewing Gum/sparb1032_mentos_chewy_dragees_fruit_37-8_g.jpg",
  // },
  // {
  //   name: "Nutzy Peanut Butter Honey 510 g",
  //   category: "Provisions",
  //   price: "₦3,685.00",
  //   image: "Jams & Spreads/spx00689.jpg",
  // },
  // {
  //   name: "Golden Penny White Granulated Sugar 500 g",
  //   category: "Provisions",
  //   price: "₦1,225.00",
  //   image:
  //     "SUGAR AND SWEETENERS/spcgsu827_33a590dc-e2ac-47d2-a3d9-da1e61476f70.jpg",
  // },
  // {
  //   name: "Checkers Custard Powder Vanilla Jar 400 g",
  //   category: "Provisions",
  //   price: "₦1,820.00",
  //   image:
  //     "BREAKFAST CEREALS/1498057279027_spxtyabc451_checkers_custard_powder_vanilla_400_g.jpg",
  // },
  // {
  //   name: "Kellogg's Coco Pops 45 g",
  //   category: "Provisions",
  //   price: "₦345.00",
  //   image: "BREAKFAST CEREALS/dbk3968.jpg",
  // },
  // {
  //   name: "Pure Bliss Milk Cream Wafers 21 g x12",
  //   category: "Provisions",
  //   price: "₦1,550.00",
  //   image: "Biscuits & Wafers/dbk3042_5aa42565-de8d-4bef-8ef1-8fc37401494a.jpg",
  // },
  // {
  //   name: "Alpenliebe Milk Filled Caramel Flavour Candy 36 g",
  //   category: "Provisions",
  //   price: "₦305.00",
  //   image:
  //     "Sweets & Chewing Gum/Alpenliebe-Milk-Filled-Caramel-Flavour-Candy-36-g-Supermart-ng-5546.jpg",
  // },
  // {
  //   name: "Pringles Original 40 g",
  //   category: "Provisions",
  //   price: "₦1,900.00",
  //   image: "Potato & Plantain Chips/1.webp",
  // },
  // {
  //   name: "Kellogg's Rice Krispies 510 g",
  //   category: "Provisions",
  //   price: "₦10,960.00",
  //   image: "BREAKFAST CEREALS/spcgce730.jpg",
  // },
  // {
  //   name: "Nutzy Peanut Butter Creamy Smooth 510 g",
  //   category: "Provisions",
  //   price: "₦3,560.00",
  //   image: "Jams & Spreads/spcssp2307_skippy-super-chunk-peanut-butter.jpg",
  // },
  // {
  //   name: "Checkers Custard Powder Banana Jar 1 kg",
  //   category: "Provisions",
  //   price: "₦3,465.00",
  //   image: "Custard & Jelly/spmex3597_5555e932-bacd-4ed8-893c-2bc9f1257aef.jpg",
  // },
  // {
  //   name: "McVitie's Digestive 104 g",
  //   category: "Provisions",
  //   price: "₦640.00",
  //   image: "Biscuits & Wafers/spcsbs1434.jpg",
  // },
  // {
  //   name: "Kellogg's Corn Flakes 325 g",
  //   category: "Provisions",
  //   price: "₦3,070.00",
  //   image: "BREAKFAST CEREALS/dbk3973.jpg",
  // },
  // {
  //   name: "Minimie Chin Chin Snack Jar 900 g",
  //   category: "Provisions",
  //   price: "₦3,965.00",
  //   image:
  //     "Cocktail Snacks/1481212361119_spxtyabc019_minimie_chin_chin_snack_jar_900_g-min.jpg",
  // },
  // {
  //   name: "Micks Centre Filled Eclairs With Choco Centre Jar 500 g",
  //   category: "Provisions",
  //   price: "₦3,350.00",
  //   image: "Sweets & Chewing Gum/aspar093.jpg",
  // },
  // {
  //   name: "Pringles Salt & Vinegar 165 g",
  //   category: "Provisions",
  //   price: "₦4,015.00 ",
  //   image: "Potato & Plantain Chips/222.png",
  // },
  // {
  //   name: "McVitie's All Butter Shortbread 100 g",
  //   category: "Provisions",
  //   price: "₦1,505.00                          ",
  //   image: "Biscuits & Wafers/spcsbs1440.jpg",
  // },
  // {
  //   name: "McVitie's Digestive 52 g",
  //   category: "Provisions",
  //   price: "₦280.00",
  //   image: "Biscuits & Wafers/sprnw1364.jpg",
  // },
  // {
  //   name: "Kellogg's Corn Flakes 325 g",
  //   category: "Provisions",
  //   price: "₦3,070.00",
  //   image: "BREAKFAST CEREALS/dbk3981.jpg",
  // },
  // {
  //   name: "Nestle Golden Morn Maize & Soya 800 g",
  //   category: "Provisions",
  //   price: "₦5,120.00",
  //   image: "BREAKFAST CEREALS/sparxyz744.jpg",
  // },
  // {
  //   name: "Clorets Chewing Gum Original Mint x10",
  //   category: "Provisions",
  //   price: "₦6,450.00",
  //   image: "Sweets & Chewing Gum/spar4322.png",
  // },
  // {
  //   name: "Blue Pearl Jam Strawberry 450 g",
  //   category: "Provisions",
  //   price: "₦3,105.00",
  //   image: "Jams & Spreads/spmex3624_55f8d5f7-abf6-4481-8753-55a1bf84d161.jpg",
  // },
  // {
  //   name: "Quaker White Oats Tin 420 g",
  //   category: "Provisions",
  //   price: "₦3,735.00",
  //   image: "BREAKFAST CEREALS/spcgce785.jpg",
  // },
  // {
  //   name: "Kellogg's Go Grains Sachet 900 g",
  //   category: "Provisions",
  //   price: "₦4,190.00",
  //   image: "BREAKFAST CEREALS/spmex3544.jpg",
  // },
  // {
  //   name: "Mentos Chewy Dragees Mint 37.8 g",
  //   category: "Provisions",
  //   price: "₦385.00",
  //   image:
  //     "Sweets & Chewing Gum/sparb1033_mentos_chewy_dragees_mint_37-8_g_300x300_b33d713f-c004-42eb-80a1-bb2af38581d1.jpg",
  // },
  // {
  //   name: "Kellogg's Coco Pops Box 375 g",
  //   category: "Provisions",
  //   price: "₦3,550.00",
  //   image: "BREAKFAST CEREALS/spmt064.png",
  // },
  // {
  //   name: "Kellogg's Corn Flakes Sachet 32 g (NG) x8",
  //   category: "Provisions",
  //   price: "₦1,650.00",
  //   image: "BREAKFAST CEREALS/spmzz1052..jpg",
  // },
  // {
  //   name: "Kellogg's Corn Flakes 550 g (UK)",
  //   category: "Provisions",
  //   price: "₦7,950.00",
  //   image: "BREAKFAST CEREALS/spx00632.jpg",
  // },
  // {
  //   name: "Checkers Custard Powder Vanilla 2 kg",
  //   category: "Provisions",
  //   price: "₦5,525.00",
  //   image: "BREAKFAST CEREALS/spxspy757.jpg",
  // },
];

// const provisions = [
//   {
//     name: "Peak Instant Full Cream Milk 400 g",
//     category: "Provisions",
//     price: "#6,000.00",
//     image: "Homepage/Peak Milk 900g.webp",
//   },
//   {
//     name: "Nestle Golden Morn Maize & Soya 800 g",
//     category: "Provisions",
//     price: "#6,000.00",
//     image: "Homepage/Nestle Golden Morn Maize 800g.webp",
//   },
//   {
//     name: "Eclairs Choco 500 g",
//     category: "Provisions",
//     price: "₦3,400.00",
//     image: "Sweets & Chewing Gum/aspar093.jpg",
//   },
//   {
//     name: "Pringles Salt & Vinegar 165 g",
//     category: "Provisions",
//     price: "₦4,015.00",
//     image: "Potato & Plantain Chips/222.png",
//   },
//   {
//     name: "Rowse Honey Glass Jar 340 g",
//     category: "Provisions",
//     price: "₦5,250.00",
//     image: "SUGAR AND SWEETENERS/spxabc238.jpg",
//   },
// ];

// const cosmetics = [
//   {
//     name: "Extract Whitening Lotion 200 ml",
//     category: "Cosmetics",
//     price: "₦6,250.00",
//     image: "Homepage/medp8382_1f90ef96-1781-49c2-8066-9223f207d8bc.jpg",
//   },
//   {
//     name: "Vaseline Lotion Body Glow 400 ml",
//     category: "Cosmetics",
//     price: "₦4,455.00",
//     image: "Moisturisers & Lotions/aspar050.jpg",
//   },
// ];

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
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Cosmetics",
  //   price: "₦6,450.00",
  //   image:
  //     "Moisturisers & Lotions/sptocr418_vaseline-blue-seal-pure-petroleum-orginal-450ml.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Cosmetics",
  //   price: "₦6,450.00",
  //   image:
  //     "Moisturisers & Lotions/sptolo235_enchanteur-hand-body-lotion-romantic-250ml.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Cosmetics",
  //   price: "₦6,450.00",
  //   image:
  //     "Moisturisers & Lotions/sptolo318_palmers-cocoa-butter-formula-lotion-250m.png",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Cosmetics",
  //   price: "₦6,450.00",
  //   image: "Moisturisers & Lotions/sptolo339.png",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Cosmetics",
  //   price: "₦6,450.00",
  //   image: "Moisturisers & Lotions/spwiow917.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Cosmetics",
  //   price: "₦6,450.00",
  //   image:
  //     "Moisturisers & Lotions/spwxyz579_nivea_nourishing_body_lotion_250_ml.jpg",
  // },
];

// const exoticWines = [
//   {
//     name: "Andre Rose California Wine 75cl",
//     category: "Exotic Wines",
//     price: "#6,000.00",
//     image: "Homepage/ANDRE-ROSE-CALIFONIA-SPARKLNG.WINE-750ML.png",
//   },
//   {
//     name: "Bacchus Tonic Wine 75l",
//     category: "Exotic Wines",
//     price: "#6,000.00",
//     image: "Homepage/Bacchus.png",
//   },
//   {
//     name: "4th street wine",
//     category: "Exotic Wines",
//     price: "₦7,085.00",
//     image: "RED WINES/4th-Street-Sweet-Red-Wine-75-cl-Supermart-ng-2542.jpg",
//   },
// ];

const exoticWines = [
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

// const babyItems = [
//   {
//     name: "Cerelac Wheat & Milk 6 Months",
//     category: "Baby Items",
//     price: "#6,000.00",
//     image: "Baby Food/spbpfd2609.jpg",
//   },
//   {
//     name: "Cussons Baby Wipes Soft & Smooth x50",
//     category: "Baby Items",
//     price: "₦1,070.00",
//     image: "Baby Wipes/aspar2085.jpg",
//   },
// ];

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
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bathroom & Toilet Cleaners/spar00667.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bathroom & Toilet Cleaners/spmex1298.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/CS073.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/OkeA1860.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/dbk1168.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/omkt384_719cfc8e-c9b2-4004-a454-66dbc34a577d.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/spar10375.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/spar10376.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/spar10380.jpg",
  // },
  // {
  //   name: "Peak Instant Full Cream Milk Tin 400 g",
  //   category: "Toiletries",
  //   price: "₦6,450.00",
  //   image: "Bleach/spar10382.jpg",
  // },
];

// const toiletries = [
//   {
//     name: "Rose Carla Toilet Tissue 12 Rolls",
//     category: "Toiletries",
//     price: "₦11,640.00",
//     image: "Toilet Tissue/aspar025.jpg",
//   },
//   {
//     name: "Extract Whitening Herbal Soap 125 g",
//     category: "Toiletries",
//     price: "₦1,250.00",
//     image: "Bath Time/sprnw1407.jpg",
//   },
//   {
//     name: "Colgate Plax Mouthwash 500 ml",
//     category: "Toiletries",
//     price: "₦6,345.00",
//     image:
//       "Oral Care/1458303106553_sptomw1048_colgate_mouthwash_plax_anti-bacterial_soft_mint_500_ml.jpg",
//   },
//   {
//     name: "Air Wick Air Freshener 300 ml",
//     category: "Toiletries",
//     price: "₦3,795.00",
//     image:
//       "Air Fresheners & Fragrances/Air-Wick-Air-Freshener-Assorted-300-ml-Supermart-ng-2079.jpg",
//   },
// ];

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

console.log(
  provisions.length,
  cosmetics.length,
  exoticWines.length,
  toiletries.length
);

// const beverages = [
//   {
//     image: "Soft Drinks/ALTCITD827.jpg",
//     name: "Coca Cola Coke Can 33 cl x24",
//     price: "₦12,840.00",
//   },
//   {
//     image: "Soft Drinks/NBK158_d6f2ba5e-e528-4b73-8986-8ee009fdf31c.jpg",
//     name: "Power Horse Energy Drink 25 cl x6",
//     price: "₦8,940.00",
//   },
//   {
//     image: "Soft Drinks/aspar2231_a082fe3a-cae6-4a7b-903b-e31b0a24dff7.jpg",
//     name: "La Casera Apple Flavoured Drink Pet 35 cl x12",
//     price: "₦2,950.00",
//   },
//   {
//     image: "Soft Drinks/spar2617_514f0721-5c83-49e3-9f89-f9f15b0264cc.jpg",
//     name: "Maltina Classic Malt Drink Pet Bottle 33 cl",
//     price: "₦570.00",
//   },
//   {
//     image: "Soft Drinks/spbvcd1504.jpg",
//     name: "Teem Bitter Lemon Pet Bottle 50 cl",
//     price: "₦500.00",
//   },
//   {
//     image: "Soft Drinks/sprnw1723.png",
//     name: "Maltina Classic Malt Drink Can 33 cl",
//     price: "₦670.00",
//   },
//   {
//     image: "Soft Drinks/sprnw1550.jpg",
//     name: "Schweppes Virgin Mojito Can 33 cl",
//     price: "₦565.00",
//   },
//   {
//     image: "Soft Drinks/imgi_22_spbvju1608-_1.png",
//     name: "Chi Exotic Pineapple & Coconut Nectar 100 cl",
//     price: "₦1,770.00",
//   },
//   {
//     image: "Soft Drinks/imgi_27_spbvyo2102.png",
//     name: "Hollandia Yoghurt Drink Plain Sweetened 100 cl",
//     price: "₦1,990.00",
//   },
//   {
//     image: "Soft Drinks/imgi_31_spbvju1617.png",
//     name: "Chivita Active Citrus Mixed Fruit Juice 100 cl",
//     price: "₦2,210.00",
//   },
//   {
//     image:
//       "Soft Drinks/imgi_36_5-Alive-Pulpy-Orange-30-cl-Supermart-ng-1864.jpg",
//     name: "5 Alive Pulpy Orange 30 cl",
//     price: "₦625.00",
//   },
//   {
//     image:
//       "Soft Drinks/imgi_38_1508946327351_okea193_eva_table_water_75_cl_pack_of_12.jpg",
//     name: "Eva Table Water 75 cl x12",
//     price: "₦3,420.00",
//   },
//   {
//     image: "Soft Drinks/imgi_39_spbvfd1518.png",
//     name: "Capri Sun Apple 20 cl x40",
//     price: "₦13,400.00",
//   },
//   {
//     image: "Soft Drinks/imgi_40_aspar9564.jpg",
//     name: "Chi Exotic Pineapple & Coconut Nectar 31.5 cl",
//     price: "₦720.00",
//   },
//   {
//     image: "Soft Drinks/imgi_41_spmzz1335.jpg",
//     name: "Mr V Table Water 75 cl x12",
//     price: "₦2,150.00",
//   },
//   {
//     image: "Soft Drinks/imgi_46_23copy.jpg",
//     name: "Peak Yoghurt Drink Plain Sweetened 100 cl",
//     price: "₦2,165.00",
//   },
//   {
//     image: "Soft Drinks/imgi_54_spmex3202.jpg",
//     name: "Sosa Apple Fruit Drink 35 cl",
//     price: "₦435.00",
//   },
//   {
//     image: "Soft Drinks/imgi_55_spar10608.jpg",
//     name: "Peak Yoghurt Drink Plain Sweetened 31.5 cl",
//     price: "₦885.00",
//   },
//   {
//     image: "Soft Drinks/imgi_60_sprnw1283.jfif.jpg",
//     name: "Chi Ice Tea Lemon 100 cl",
//     price: "₦1,325.00",
//   },
//   {
//     image: "Soft Drinks/imgi_73_spmex2197.jpg",
//     name: "Blue Boat Fresh Yo Yoghurt Plain Sweet 100 cl",
//     price: "₦1,855.00",
//   },
// ];

const AllProducts = [
  ...provisions,
  ...cosmetics,
  ...exoticWines,
  ...toiletries,
  ...beverages,
];

const productContainer = document.querySelector(".all-products-container");
const productContainer2 = document.querySelector(".all-products-container");

// Check for URL parameter to filter product
const urlParams = new URLSearchParams(window.location.search);
const selectedProduct = urlParams.get('product');
let filteredProducts = AllProducts;

if (selectedProduct) {
  filteredProducts = AllProducts.filter(product => product.name === selectedProduct);
  document.querySelector(".category-name-header").textContent = `Search Results for "${selectedProduct}"`;
}

const allItems = filteredProducts.map((products) => {
  const EachProductImage = products.image;
  const EachProductName = products.name;
  const EachProductPrice = products.price;

  const productItemDiv = document.createElement("div");
  const productImageDiv = document.createElement("div");
  const productName = document.createElement("div");
  const productDetails = document.createElement("div");

  productItemDiv.classList.add("product-item");
  productName.classList.add("product-name");
  productImageDiv.classList.add("product-image");
  productDetails.classList.add("product-details");

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
});

// productsItems.map((products) => {
//   const EachProductImage = products.image;
//   const EachProductName = products.name;
//   const EachProductPrice = products.price;

//   const productItemDiv = document.createElement("div");
//   const productImageDiv = document.createElement("div");
//   const productName = document.createElement("div");
//   const productDetails = document.createElement("div");

//   productItemDiv.classList.add("product-item");
//   productName.classList.add("product-name");
//   productImageDiv.classList.add("product-image");
//   productDetails.classList.add("product-details");

//   // productName.className = 'product-name';
//   // productImageDiv.className = 'product-image';
//   // productDetails.className = 'product-details';

//   productImageDiv.innerHTML = `<img src="${EachProductImage}">`;
//   productName.innerHTML = `
//     <p> ${EachProductName} </p>
//     `;
//   productDetails.innerHTML = `
//     <p class="product-price"> ${EachProductPrice} </p>
//     <button class="add-to-cart-btn">Add to Cart</button>
//     `;

//   productItemDiv.appendChild(productImageDiv);
//   productItemDiv.appendChild(productName);
//   productItemDiv.appendChild(productDetails);

//   productContainer.appendChild(productItemDiv);
// });

// productsItems2.map((products) => {
//   const EachProductImage = products.image;
//   const EachProductName = products.name;
//   const EachProductPrice = products.price;

//   const productItemDiv = document.createElement("div");
//   const productImageDiv = document.createElement("div");
//   const productName = document.createElement("div");
//   const productDetails = document.createElement("div");

//   productItemDiv.classList.add("product-item");
//   productName.classList.add("product-name");
//   productImageDiv.classList.add("product-image");
//   productDetails.classList.add("product-details");

//   // productName.className = 'product-name';
//   // productImageDiv.className = 'product-image';
//   // productDetails.className = 'product-details';

//   productImageDiv.innerHTML = `<img src="${EachProductImage}">`;
//   productName.innerHTML = `
//     <p> ${EachProductName} </p>
//     `;
//   productDetails.innerHTML = `
//     <p class="product-price"> ${EachProductPrice} </p>
//     <button class="add-to-cart-btn">Add to Cart</button>
//     `;

//   productItemDiv.appendChild(productImageDiv);
//   productItemDiv.appendChild(productName);
//   productItemDiv.appendChild(productDetails);

//   productContainer2.appendChild(productItemDiv);
// });

let currentProducts = [...AllProducts];

const displayResult = document.querySelector(".results-display-text");
displayResult.textContent = `Showing ${currentProducts.length}`;

document.querySelector(".filter").addEventListener("change", (e) => {
  const op = e.target.value;
  productContainer.innerHTML = "";

  filterItems(op);
  document.querySelector(".category-name-header").textContent = `${op}`;
});

document.querySelector(".sort").addEventListener("change", (e) => {
  const s = e.target.value;
  productContainer.innerHTML = "";

  currentProducts = sortProducts(currentProducts, s);
  displayResult.textContent = `Showing ${currentProducts.length}`;
});

function filterItems(item) {
  let itemsToDisplay;

  if (item === "all") {
    itemsToDisplay = AllProducts;
  } else {
    itemsToDisplay = AllProducts.filter((product) => {
      return product.category === item;
    });
  }

  currentProducts = [...itemsToDisplay];

  currentProducts.forEach((i) => {
    const filterDiv = document.createElement("div");
    filterDiv.classList.add("product-item");
    filterDiv.innerHTML = `<img class="product-image" src="${i.image}">
    <p class="product-name"> ${i.name} </p>
    <p class="product-price"> ${i.price} </p>
    <button class="add-to-cart-btn">Add to Cart</button>
    `;
    productContainer.appendChild(filterDiv);
  });

  displayResult.textContent = `Showing ${currentProducts.length}`;
}

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace("₦", "").replace(",", ""));
}

function sortProducts(products, sortBy) {
  const sorted = [...products];
  console.log(products);

  switch (sortBy) {
    case "price-low-high":
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      break;
    case "price-high-low":
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      break;
    case "name-a-z":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-z-a":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  sorted.forEach((i) => {
    const filterDiv = document.createElement("div");
    filterDiv.classList.add("product-item");
    filterDiv.innerHTML = `<img class="product-image" src="${i.image}">
    <p class="product-name"> ${i.name} </p>
    <p class="product-price"> ${i.price} </p>
    <button class="add-to-cart-btn">Add to Cart</button>
    `;
    productContainer.appendChild(filterDiv);
  });
  return sorted;
}
