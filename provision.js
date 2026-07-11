"use strict";

// Array of provisions products
// const provisions = [
//   {
//     name: "McVitie's Hob Nobs 200 g",
//     category: "Provisions",
//     price: "₦1,560.00",
//     image: "Biscuits & Wafers/dbk2998.jpg",
//   },
//   {
//     name: "Alpenliebe Milk Filled Caramel Candy x88",
//     category: "Provisions",
//     price: "₦2,410.00",
//     image:
//       "Sweets & Chewing Gum/Alpenliebe-Milk-Filled-Caramel-Candy-x88-Supermart-ng-1909.jpg",
//   },
//   {
//     name: "Geurts Marmalade Orange 450 g",
//     category: "Provisions",
//     price: "₦4,445.00",
//     image: "Jams & Spreads/spcsjm1784.webp",
//   },
//   {
//     name: "Checkers Custard Powder Vanilla 1 kg",
//     category: "Provisions",
//     price: "₦2,240.00",
//     image:
//       "BREAKFAST CEREALS/1490789939327_spxspy758_checkers_custard_powder_vanilla_sachet_400_g-min.jpg",
//   },
//   {
//     name: "Bounty Chocolate 57 g",
//     category: "Provisions",
//     price: "₦1,570.00",
//     image: "Chocolates/1486570613196_spcsch775_bounty_chocolate_57_g.jpg",
//   },
//   {
//     name: "Sunola Sugar Cubes 474 g x90",
//     category: "Provisions",
//     price: "₦1,040.00",
//     image:
//       "SUGAR AND SWEETENERS/1516643468047_spx350_sunola_sugar_cubes_474_g_90_pieces.jpg",
//   },
//   {
//     name: "McVitie fingers biscuit",
//     category: "Provisions",
//     price: "₦200.00",
//     image: "Biscuits & Wafers/dbk2953.jpg",
//   },
//   {
//     name: "Chupa Chups Cotton Bubble Gum Tutti Frutti 11 g x20",
//     category: "Provisions",
//     price: "₦340.00",
//     image: "Sweets & Chewing Gum/spx02550.jpg",
//   },
//   {
//     name: "Rowse Honey Glass Jar 340 g",
//     category: "Provisions",
//     price: "₦5,250.00",
//     image: "SUGAR AND SWEETENERS/spxabc238.jpg",
//   },
//   {
//     name: "Pringles Paprika 40 g",
//     category: "Provisions",
//     price: "₦1,280.00",
//     image:
//       "Potato & Plantain Chips/sprnw1381_b9724a2b-24db-46bf-a7e5-95e57e1f617a.jpg",
//   },
//   {
//     name: "Checkers Custard Powder Milk 3 in 1 Breakfast 700 g",
//     category: "Provisions",
//     price: "₦3,335.00",
//     image: "Custard & Jelly/sprnw1155.jpg",
//   },
//   {
//     name: "Blue Pearl Coloured Prawn Crackers 227 g",
//     category: "Provisions",
//     price: "₦1,645.00",
//     image: "Cocktail Snacks/spmex4362.jpg",
//   },
//   {
//     name: "Snickers 50 g",
//     category: "Provisions",
//     price: "₦1,425.00",
//     image: "Chocolates/spcsch1086.png",
//   },
//   {
//     name: "Nasco Corn Flakes Original 350 g",
//     category: "Provisions",
//     price: "₦2,800.00",
//     image: "BREAKFAST CEREALS/spcgce762.jpg",
//   },
//   {
//     name: "McVitie's HobNobs 40 g",
//     category: "Provisions",
//     price: "₦345.00",
//     image: "Biscuits & Wafers/sprnw1367.jpg",
//   },
//   {
//     name: "Mentos Pure Fresh Chewing Gum Tropical 87.5 g x50",
//     category: "Provisions",
//     price: "₦3,385.00",
//     image:
//       "Sweets & Chewing Gum/spasho2001_0dcc358f-4abc-4031-bad4-a1d721d8bd7c.jpg",
//   },
//   {
//     name: "Pringles Sour Cream & Onion 165 g",
//     category: "Provisions",
//     price: "₦4,015.00",
//     image: "Potato & Plantain Chips/spcsas2203.jpg",
//   },
//   {
//     name: "Nutzy Peanut Butter Creamy Smooth 510 g",
//     category: "Provisions",
//     price: "₦3,560.00",
//     image: "Jams & Spreads/spxtyabc642.jpg",
//   },
//   {
//     name: "Checkers Custard Powder 3 in 1 Milk Jar 1 kg",
//     category: "Provisions",
//     price: "₦6,100.00",
//     image: "Custard & Jelly/spmex3602_cc963533-b2bf-4ef3-a697-02e1117b4fb0.jpg",
//   },
//   {
//     name: "Minimie Chin Chin 45 g",
//     category: "Provisions",
//     price: "₦150.00",
//     image: "Cocktail Snacks/1507734773140_okea2333_minimie_chin_chin_45_g.jpg",
//   },
//   {
//     name: "Mars 50 g",
//     category: "Provisions",
//     price: "₦1,425.00",
//     image: "Chocolates/spcsch1009..jpg",
//   },
//   {
//     name: "Kellogg's Fruit N Fibre 500 g",
//     category: "Provisions",
//     price: "₦6,450.00",
//     image: "BREAKFAST CEREALS/spcgce721.jpg",
//   },
//   {
//     name: "McVitie's Dark Cookie Vanilla Flavoured Cream Biscuits 35 g",
//     category: "Provisions",
//     price: "₦240.00",
//     image: "Biscuits & Wafers/spmex4236.jpg",
//   },
//   {
//     name: "Mentos Pure Fresh Chewing Gum Strawberry 87.5 g x50",
//     category: "Provisions",
//     price: "₦3,385.00",
//     image:
//       "Sweets & Chewing Gum/spasho2000_42250687-318e-4c79-98e8-c0dd1e8c8f32.jpg",
//   },
//   {
//     name: "St. Louis Sugar Cubes 474 g x50",
//     category: "Provisions",
//     price: "₦2,120.00",
//     image:
//       "SUGAR AND SWEETENERS/oniru111_st-_louis_sugar_474_g_300x300_3a11d873-2a44-4fb3-82e9-fb986df46975.jpg",
//   },
//   {
//     name: "Pringles Texas BBQ Sauce 165 g",
//     category: "Provisions",
//     price: "₦4,015.00",
//     image: "Potato & Plantain Chips/sparxyz1248.jpg",
//   },
//   {
//     name: "Nutzy Peanut Butter Chocolate 510 g",
//     category: "Provisions",
//     price: "₦5,590.00",
//     image: "Jams & Spreads/spwiow652.jpg",
//   },
//   {
//     name: "Checkers 3 in 1 Milk Custard Jar 400 g",
//     category: "Provisions",
//     price: "₦2,995.00",
//     image: "Custard & Jelly/spmex3599_80c7da9d-29fb-49b7-9c0e-0ed1c7492de9.jpg",
//   },
//   {
//     name: "Maryland Cookies Choc Chip & Hazelnut 145 g",
//     category: "Provisions",
//     price: "₦6,450.00",
//     image: "Biscuits & Wafers/OkeA2266.png",
//   },
//   {
//     name: "Quaker Quick Old Fashioned Oats 1.19 kg",
//     category: "Provisions",
//     price: "₦2,150.00",
//     image: "BREAKFAST CEREALS/spar10837.jfif.jpg",
//   },
//   {
//     name: "Checkers Banana Custard Powder Jar 400 g",
//     category: "Provisions",
//     price: "₦1,435.00",
//     image: "Custard & Jelly/spar10931.jpg",
//   },
//   {
//     name: "Mentos Chewy Dragees Mint 140 g",
//     category: "Provisions",
//     price: "₦1,030.00",
//     image: "Sweets & Chewing Gum/dbk3161.jpg",
//   },
//   {
//     name: "Pringles Hot & Spicy 165 g",
//     category: "Provisions",
//     price: "₦4,015.00",
//     image: "Potato & Plantain Chips/spcsas2196.jpg",
//   },
//   {
//     name: "Haansbro Noreos Chocolate Biscuit With Vanilla Cream 18 g x48",
//     category: "Provisions",
//     price: "₦5,885.00",
//     image: "Biscuits & Wafers/omkt9020.jpg",
//   },
//   {
//     name: "Pure Bliss Milk Cream Wafer 21 g",
//     category: "Provisions",
//     price: "₦125.00",
//     image:
//       "Biscuits & Wafers/spasho1685_4c4706da-da88-4b56-b705-b3e9f56db0fb.jpg",
//   },
//   {
//     name: "Infinity Corn Flakes 350 g",
//     category: "Provisions",
//     price: "₦2,015.00",
//     image: "BREAKFAST CEREALS/sparb1063.jpg",
//   },
//   {
//     name: "Checkers Custard Powder Vanilla Jar 1 kg",
//     category: "Provisions",
//     price: "₦3,635.00",
//     image: "Custard & Jelly/spmex3611_06b156d1-7b22-4a44-9037-df18495c8916.jpg",
//   },
//   {
//     name: "Mentos Chewy Dragees Fruit 37.8 g x14",
//     category: "Provisions",
//     price: "₦385.00",
//     image:
//       "Sweets & Chewing Gum/sparb1032_mentos_chewy_dragees_fruit_37-8_g.jpg",
//   },
//   {
//     name: "Nutzy Peanut Butter Honey 510 g",
//     category: "Provisions",
//     price: "₦3,685.00",
//     image: "Jams & Spreads/spx00689.jpg",
//   },
//   {
//     name: "Golden Penny White Granulated Sugar 500 g",
//     category: "Provisions",
//     price: "₦1,225.00",
//     image:
//       "SUGAR AND SWEETENERS/spcgsu827_33a590dc-e2ac-47d2-a3d9-da1e61476f70.jpg",
//   },
//   {
//     name: "Checkers Custard Powder Vanilla Jar 400 g",
//     category: "Provisions",
//     price: "₦1,820.00",
//     image:
//       "BREAKFAST CEREALS/1498057279027_spxtyabc451_checkers_custard_powder_vanilla_400_g.jpg",
//   },
//   {
//     name: "Kellogg's Coco Pops 45 g",
//     category: "Provisions",
//     price: "₦345.00",
//     image: "BREAKFAST CEREALS/dbk3968.jpg",
//   },
//   {
//     name: "Pure Bliss Milk Cream Wafers 21 g x12",
//     category: "Provisions",
//     price: "₦1,550.00",
//     image: "Biscuits & Wafers/dbk3042_5aa42565-de8d-4bef-8ef1-8fc37401494a.jpg",
//   },
//   {
//     name: "Alpenliebe Milk Filled Caramel Flavour Candy 36 g",
//     category: "Provisions",
//     price: "₦305.00",
//     image:
//       "Sweets & Chewing Gum/Alpenliebe-Milk-Filled-Caramel-Flavour-Candy-36-g-Supermart-ng-5546.jpg",
//   },
//   {
//     name: "Pringles Original 40 g",
//     category: "Provisions",
//     price: "₦1,900.00",
//     image: "Potato & Plantain Chips/1.webp",
//   },
//   {
//     name: "Kellogg's Rice Krispies 510 g",
//     category: "Provisions",
//     price: "₦10,960.00",
//     image: "BREAKFAST CEREALS/spcgce730.jpg",
//   },
//   {
//     name: "Nutzy Peanut Butter Creamy Smooth 510 g",
//     category: "Provisions",
//     price: "₦3,560.00",
//     image: "Jams & Spreads/spcssp2307_skippy-super-chunk-peanut-butter.jpg",
//   },
//   {
//     name: "Checkers Custard Powder Banana Jar 1 kg",
//     category: "Provisions",
//     price: "₦3,465.00",
//     image: "Custard & Jelly/spmex3597_5555e932-bacd-4ed8-893c-2bc9f1257aef.jpg",
//   },
//   {
//     name: "McVitie's Digestive 104 g",
//     category: "Provisions",
//     price: "₦640.00",
//     image: "Biscuits & Wafers/spcsbs1434.jpg",
//   },
//   {
//     name: "Kellogg's Corn Flakes 325 g",
//     category: "Provisions",
//     price: "₦3,070.00",
//     image: "BREAKFAST CEREALS/dbk3973.jpg",
//   },
//   {
//     name: "Minimie Chin Chin Snack Jar 900 g",
//     category: "Provisions",
//     price: "₦3,965.00",
//     image:
//       "Cocktail Snacks/1481212361119_spxtyabc019_minimie_chin_chin_snack_jar_900_g-min.jpg",
//   },
//   {
//     name: "Micks Centre Filled Eclairs With Choco Centre Jar 500 g",
//     category: "Provisions",
//     price: "₦3,350.00",
//     image: "Sweets & Chewing Gum/aspar093.jpg",
//   },
//   {
//     name: "Pringles Salt & Vinegar 165 g",
//     category: "Provisions",
//     price: "₦4,015.00",
//     image: "Potato & Plantain Chips/222.png",
//   },
//   {
//     name: "McVitie's All Butter Shortbread 100 g",
//     category: "Provisions",
//     price: "₦1,505.00",
//     image: "Biscuits & Wafers/spcsbs1440.jpg",
//   },
//   {
//     name: "McVitie's Digestive 52 g",
//     category: "Provisions",
//     price: "₦280.00",
//     image: "Biscuits & Wafers/sprnw1364.jpg",
//   },
//   {
//     name: "Kellogg's Corn Flakes 325 g",
//     category: "Provisions",
//     price: "₦3,070.00",
//     image: "BREAKFAST CEREALS/dbk3981.jpg",
//   },
//   {
//     name: "Nestle Golden Morn Maize & Soya 800 g",
//     category: "Provisions",
//     price: "₦5,120.00",
//     image: "BREAKFAST CEREALS/sparxyz744.jpg",
//   },
//   {
//     name: "Clorets Chewing Gum Original Mint x10",
//     category: "Provisions",
//     price: "₦6,450.00",
//     image: "Sweets & Chewing Gum/spar4322.png",
//   },
//   {
//     name: "Blue Pearl Jam Strawberry 450 g",
//     category: "Provisions",
//     price: "₦3,105.00",
//     image: "Jams & Spreads/spmex3624_55f8d5f7-abf6-4481-8753-55a1bf84d161.jpg",
//   },
//   {
//     name: "Quaker White Oats Tin 420 g",
//     category: "Provisions",
//     price: "₦3,735.00",
//     image: "BREAKFAST CEREALS/spcgce785.jpg",
//   },
//   {
//     name: "Kellogg's Go Grains Sachet 900 g",
//     category: "Provisions",
//     price: "₦4,190.00",
//     image: "BREAKFAST CEREALS/spmex3544.jpg",
//   },
//   {
//     name: "Mentos Chewy Dragees Mint 37.8 g",
//     category: "Provisions",
//     price: "₦385.00",
//     image:
//       "Sweets & Chewing Gum/sparb1033_mentos_chewy_dragees_mint_37-8_g_300x300_b33d713f-c004-42eb-80a1-bb2af38581d1.jpg",
//   },
//   {
//     name: "Kellogg's Coco Pops Box 375 g",
//     category: "Provisions",
//     price: "₦3,550.00",
//     image: "BREAKFAST CEREALS/spmt064.png",
//   },
//   {
//     name: "Kellogg's Corn Flakes Sachet 32 g (NG) x8",
//     category: "Provisions",
//     price: "₦1,650.00",
//     image: "BREAKFAST CEREALS/spmzz1052..jpg",
//   },
//   {
//     name: "Kellogg's Corn Flakes 550 g (UK)",
//     category: "Provisions",
//     price: "₦7,950.00",
//     image: "BREAKFAST CEREALS/spx00632.jpg",
//   },
//   {
//     name: "Checkers Custard Powder Vanilla 2 kg",
//     category: "Provisions",
//     price: "₦5,525.00",
//     image: "BREAKFAST CEREALS/spxspy757.jpg",
//   },
// ];
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

const babycareProducts = [
  {
    name: "All-Day Sensitive Baby Wet Towel Blue x90",
    category: "Babycare",
    price: "₦3,500",
    image: "Baby Wipes/All-Day-Sensitive-Baby-Wet-Towel-Blue-x90-Supermart-ng-9570.jpg",
  },
  {
    name: "Charles Baby Wipes Aloe Vera 100 pieces",
    category: "Babycare",
    price: "₦7,000",
    image: "Baby Wipes/mega1040_st-_charles_baby_wipes_aloe_vera_100_pieces.jpg",
  },
  {
    name: "Cussons Baby Wipes Soft & Smooth 50 pieces",
    category: "Babycare",
    price: "₦4,200",
    image: "Baby Wipes/mult102_cussons_baby_wipes_soft___smooth_50_pieces.jpg",
  },
  {
    name: "Molfix Newborn Isotonic Wet Wipes x60",
    category: "Babycare",
    price: "₦2,500",
    image: "Baby Wipes/aspar10290.jpg",
  },
  {
    name: "Cussons Baby Wipes Soft & Smooth x50",
    category: "Baby items",
    price: "₦1,070.00",
    image: "Baby Wipes/aspar2085.jpg",
  },

  // Baby Food
  {
    name: "aspar9038",
    category: "Babycare",
    price: "₦5,000",
    image: "Baby Food/aspar9038.jpg",
  },
  {
    name: "SMA Gold 3 Toddler Milk 1-3 Years 400 g",
    category: "Babycare",
    price: "₦30,000",
    image: "Baby Food/aspar9560.jpg",
  },
  {
    name: "Peak Baby Step 1 Infant Formula 0-12 Months Tin 400 g",
    category: "Babycare",
    price: "₦9,900",
    image: "Baby Food/megapla871.jpg",
  },
  {
    name: "Nutribom Infant Cereal Maize 6 Months+ 350 g",
    category: "Babycare",
    price: "₦3,200",
    image: "Baby Food/spar0938.jpg",
  },
  {
    name: "Nutribom Infant Cereal Rice 6 Months+ 350 g",
    category: "Babycare",
    price: "₦3,000",
    image: "Baby Food/spar0939_9b908311-8b66-4e1d-8deb-6596a6e12fbc.jpg",
  },
  // {
  //   name: "spar0941",
  //   category: "Babycare",
  //   price: "₦4,900",
  //   image: "Baby Food/spar0941.webp",
  // },
  // {
  //   name: "spar10275_",
  //   category: "Babycare",
  //   price: "₦6,200",
  //   image: "Baby Food/spar10275..jpg",
  // },
  // {
  //   name: "spbpfd2609",
  //   category: "Babycare",
  //   price: "₦2,800",
  //   image: "Baby Food/spbpfd2609.jpg",
  // },
  // {
  //   name: "spbpfd2620",
  //   category: "Babycare",
  //   price: "₦7,600",
  //   image: "Baby Food/spbpfd2620.jpg",
  // },
  // {
  //   name: "spbpfd2621",
  //   category: "Babycare",
  //   price: "₦1,950",
  //   image: "Baby Food/spbpfd2621.jpg",
  // },
  // {
  //   name: "spbpfd2624",
  //   category: "Babycare",
  //   price: "₦5,750",
  //   image: "Baby Food/spbpfd2624.jpg",
  // },
  // {
  //   name: "spbpfd2661_2_ad3dd3f7_e1d4_4e5d_a051_6b6c570ca405",
  //   category: "Babycare",
  //   price: "₦8,200",
  //   image: "Baby Food/spbpfd2661_2_ad3dd3f7-e1d4-4e5d-a051-6b6c570ca405.jpg",
  // },
  // {
  //   name: "spbpfd2661_2",
  //   category: "Babycare",
  //   price: "₦3,900",
  //   image: "Baby Food/spbpfd2661_2.jpg",
  // },
  // {
  //   name: "spxty3189",
  //   category: "Babycare",
  //   price: "₦9,250",
  //   image: "Baby Food/spxty3189.jpg",
  // },
];

const AllProducts = [...provisions, ...cosmetics, ...toiletries, ...babycareProducts];



// DOM Elements
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".modal-search");
const headerNavBar = document.querySelector(".header-nav-bar");
const closeIcon = document.querySelector(".close-menu");
const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".mobile-menu");
const hiddenClose = document.querySelector(".hidden-close");
const searchBox2 = document.querySelector(".search-inputs2");
const searchBox = document.querySelector(".search-inputs");
const inputText = document.querySelector("#hiddenContainer2");
const searchedResultsContainer = document.querySelector(
  ".hidden-results-container2",
);
const productContainer = document.querySelector(".all-products-container");

// Update cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  displayAllItems();
  showLoader();

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
      eachProducts.name.toLowerCase().includes(inputedItem),
    );

    // Display filtered items with pagination
    handleSearchResults(filteredItems, inputedItem, inputText, 90);
  });

  // Search Functionality for large screens
  searchBox2.addEventListener("input", (e) => {
    const inputedItem = e.target.value.toLowerCase().trim();

    // Clear previous results
    searchedResultsContainer.innerHTML = "";
    if (searchBox2.value === "") {
      searchedResultsContainer.style.display = "none";
    } else {
      searchedResultsContainer.style.display = "block";
    }

    // If search is empty, don't show anything
    if (!inputedItem) {
      return;
    }

    // Filter with proper return statement
    const filteredItems = AllProducts.filter((eachProducts) =>
      eachProducts.name.toLowerCase().includes(inputedItem),
    );

    // Display filtered items with pagination
    handleSearchResults(
      filteredItems,
      inputedItem,
      searchedResultsContainer,
      50,
    );
  });

  // Function to handle displaying search results in the searchedResultsContainer div Element
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
            window.location.href = "provision.html";
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

  // Function to update cart count
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
      cartCountElement.style.display = totalItems > 0 ? "block" : "none";
    }
  }

  // Search and Menu Toggle functionality
  function toggleSearchBar(show) {
    if (show) {
      searchBar.style.display = "block";
      searchBar.classList.add("modal-show");
      searchBar.classList.remove("modal-hidden");
    } else {
      searchBar.classList.remove("modal-show");
      searchBar.classList.add("modal-hidden");
    }
  }

  function toggleMenu(show) {
    if (show) {
      menuBtn.style.display = "none";
      hiddenClose.style.display = "block";
      hiddenMenu.style.display = "block";
    } else {
      menuBtn.style.display = "flex";
      hiddenClose.style.display = "none";
      hiddenMenu.style.display = "none";
    }
  }

  if (searchIcon) {
    searchIcon.addEventListener("click", () => toggleSearchBar(true));
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", () => toggleSearchBar(false));
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

  let currentProducts = [...provisions];

  const displayResult = document.querySelector(".results-display-text");
  displayResult.textContent = `Showing ${currentProducts.length} results`;

  // document.querySelector(".filter").addEventListener("change", (e) => {
  //   const op = e.target.value;
  //   productContainer.innerHTML = "";

  //   filterItems(op);
  //   document.querySelector(".category-name-header").textContent = `${op}`;
  // });

  document.querySelector(".sort").addEventListener("change", (e) => {
    const s = e.target.value;
    productContainer.innerHTML = "";

    currentProducts = sortProducts(currentProducts, s);
    displayResult.textContent = `Showing ${currentProducts.length} results`;
  });

  // function filterItems(item) {
  //   let itemsToDisplay = provisions;

  //   currentProducts = [...itemsToDisplay];

  //   currentProducts.forEach((products) => {
  //     eachProductContainer(products);
  //   });

  //   displayResult.textContent = `Showing ${currentProducts.length}`;
  // }

  // This is to convert the units such as ₦,$ to strings so as not to affect the results
  function parsePrice(priceStr) {
    return parseFloat(priceStr.replace("₦", "").replace(",", ""));
  }

  // This function is to sort the items
  function sortProducts(products, sortBy) {
    const sorted = [...products];

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

    // Use createProductItem for consistent rendering with full functionality
    sorted.forEach((products) => {
      const productItem = eachProductContainer(products);
    });

    return sorted;
  }

  // This function is to ease the filtered results based on the selected value by the user
  function eachProductContainer(theResultsItem) {
    const EachProductImage = theResultsItem.image;
    const EachProductName = theResultsItem.name;
    const EachProductPrice = theResultsItem.price;

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
    <div class="quantity-controls" style="display: none;">
      <button class="quantity-btn decrease">-</button>
      <span class="quantity-display">1</span>
      <button class="quantity-btn increase" >+</button>
    </div>
    <button class="add-to-cart-btn">Add to Cart<i class="fa-solid fa-cart-arrow-down"></i></button>
  `;

    const EachProductCategory = theResultsItem.category;
    productIcons.innerHTML = `
    <span class="wishlist-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
      <i class="fa-regular fa-heart"></i>
    </span>
    <span class="eye-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
      <i class="fa-regular fa-eye"></i>
    </span>
  `;

    // Restore wishlist state
    const heartIcon = productIcons.querySelector(".fa-heart");
    if (heartIcon) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      let existingIndex = wishlist.findIndex(
        (item) => item.name === EachProductName,
      );
      if (existingIndex !== -1) {
        heartIcon.classList.add("fa-solid", "added-to-wishlist");
        heartIcon.style.color = "red";
      }
    }

    productItemDiv.setAttribute("data-name", EachProductName);
    productItemDiv.setAttribute("data-price", EachProductPrice);
    productItemDiv.setAttribute("data-image", EachProductImage);

    productItemDiv.appendChild(productImageDiv);
    productItemDiv.appendChild(productName);
    productItemDiv.appendChild(productDetails);
    productItemDiv.appendChild(productIcons);

    productContainer.appendChild(productItemDiv);

    // Attach add to cart behavior
    attachAddToCartBehavior(
      productItemDiv,
      EachProductName,
      EachProductPrice,
      EachProductImage,
    );
  }

  // This is to make sure all items are displayed when the page loads
  function displayAllItems() {
    provisions.map((products) => {
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
      <div class="quantity-controls" style="display: none;">
        <button class="quantity-btn decrease">-</button>
        <span class="quantity-display">1</span>
        <button class="quantity-btn increase">+</button>
      </div>
      <button class="add-to-cart-btn">Add to Cart<i class="fa-solid fa-cart-arrow-down"></i></button>
    `;

      productIcons.innerHTML = `
      <span class="wishlist-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
        <i class="fa-regular fa-heart"></i>
      </span>
      <span class="eye-icon" data-name="${EachProductName}" data-price="${EachProductPrice}" data-image="${EachProductImage}">
        <i class="fa-regular fa-eye"></i>
      </span>
    `;

      // Restore wishlist state
      const heartIcon = productIcons.querySelector(".fa-heart");
      if (heartIcon) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        let existingIndex = wishlist.findIndex(
          (item) => item.name === EachProductName,
        );
        if (existingIndex !== -1) {
          heartIcon.classList.add("fa-solid", "added-to-wishlist");
          heartIcon.style.color = "red";
        }
      }

      productItemDiv.appendChild(productImageDiv);
      productItemDiv.appendChild(productName);
      productItemDiv.appendChild(productDetails);
      productItemDiv.appendChild(productIcons);

      // Attach add to cart behavior
      attachAddToCartBehavior(
        productItemDiv,
        EachProductName,
        EachProductPrice,
        EachProductImage,
      );

      productContainer.appendChild(productItemDiv);
    });
  }

  // Function to attach add to cart behavior
  function attachAddToCartBehavior(productItemDiv, name, price, image) {
    updateProductUI(productItemDiv, name); // Set initial state

    const addToCartBtn = productItemDiv.querySelector(".add-to-cart-btn");
    const quantityControls = productItemDiv.querySelector(".quantity-controls");
    const decreaseBtn = quantityControls.querySelector(".decrease");
    const increaseBtn = quantityControls.querySelector(".increase");
    const quantityDisplay = quantityControls.querySelector(".quantity-display");

    addToCartBtn.addEventListener("click", () => {
      showCartModal(name, price, image, 1);
      // Add to cart with quantity 1
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let existingIndex = cart.findIndex((item) => item.name === name);
      if (existingIndex === -1) {
        cart.push({ name, price, image, quantity: 1 });
      } else {
        cart[existingIndex].quantity = 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      // Update UI
      updateProductUI(productItemDiv, name);
    });

    decreaseBtn.addEventListener("click", () => {
      let qty = parseInt(quantityDisplay.textContent);
      if (qty > 1) {
        qty--;
        quantityDisplay.textContent = qty;
        updateCartQuantity(name, qty);
      } else {
        removeFromCart(name);
        updateProductUI(productItemDiv, name);
      }
    });

    increaseBtn.addEventListener("click", () => {
      let qty = parseInt(quantityDisplay.textContent);
      qty++;
      quantityDisplay.textContent = qty;
      updateCartQuantity(name, qty);
    });
  }

  // Function to update product UI based on cart i.e Add to cart button toggle
  function updateProductUI(productItemDiv, name) {
    const addToCartBtn = productItemDiv.querySelector(".add-to-cart-btn");
    const quantityControls = productItemDiv.querySelector(".quantity-controls");
    const quantityDisplay = quantityControls.querySelector(".quantity-display");
    const qty = getCartQuantity(name);
    if (qty > 0) {
      addToCartBtn.style.display = "none";
      quantityControls.style.display = "flex";
      quantityDisplay.textContent = qty;
    } else {
      addToCartBtn.style.display = "flex";
      quantityControls.style.display = "none";
      quantityDisplay.textContent = "1";
    }
  }

  // Function to get cart quantity for an item incase it has been added to the cart
  function getCartQuantity(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find((item) => item.name === name);
    return item ? item.quantity : 0;
  }

  // Function to show the modal
  function showCartModal(name, price, image, quantity) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingIndex = cart.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += parseInt(quantity);
    } else {
      cart.push({ name, price, image, quantity: parseInt(quantity) });
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Parse price to number
    const priceNum = parseFloat(price.replace(/[^0-9.-]+/g, ""));

    // Create modal if not exists
    let modal = document.querySelector(".cart-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.classList.add("cart-modal");
      document.body.appendChild(modal);
    }

    const subtotal = (priceNum * quantity).toFixed(2);
    modal.innerHTML = `
    <div class="cart-modal-content">
      <div class="cart-modal-header">
        <img src="Homepage/check.png" class="cart-modal-icon" alt="Success Icon">
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
    modal.querySelector(".view-cart-btn").addEventListener("click", () => {
      window.location.href = "cart.html";
    });

    modal
      .querySelector(".continue-shopping-btn")
      .addEventListener("click", () => {
        modal.style.display = "none";
      });

    modal.style.display = "flex";

    // Close modal after 3 seconds
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }

  // Wishlist functionality
  function addToWishlist(name, price, image, heartIcon) {
    // Get wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    // Check if item already exists
    let existingIndex = wishlist.findIndex((item) => item.name === name);
    if (existingIndex === -1) {
      // Add to wishlist
      wishlist.push({ name, price, image });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      // Update the UI
      heartIcon.classList.add("fa-solid", "added-to-wishlist");
      heartIcon.style.color = "red";
      showWishlistModal(image, name, "added");
    } else {
      // Remove from wishlist
      wishlist.splice(existingIndex, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      // Update the UI
      heartIcon.classList.remove("fa-solid", "added-to-wishlist");
      heartIcon.style.color = "";
      showWishlistModal(image, name, "removed");
    }
  }

  // Function to show wishlist modal
  function showWishlistModal(image, name, status) {
    let modal = document.querySelector(".cart-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.classList.add("cart-modal");
      document.body.appendChild(modal);
    }

    const message =
      status === "added"
        ? "Successfully added to wishlist"
        : status === "removed"
          ? "Successfully removed from wishlist"
          : "Item already in wishlist";
    const icon = status === "added" ? "✔" : status === "removed" ? "✖" : "ℹ";
    const imageIcon =
      status === "added"
        ? "check.png"
        : status === "removed"
          ? "multiply.png"
          : "multiply.png";

    modal.innerHTML = `
    <div class="cart-modal-content">
      <div class="cart-modal-header">
        <img src="Homepage/${imageIcon}" class="cart-modal-icon" alt="Success Icon">
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

    modal.style.display = "flex";

    // Close modal after 3 seconds
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  }

  // Function to remove from cart
  function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  // Function to update cart quantity
  function updateCartQuantity(name, newQuantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingIndex = cart.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    }
  }

  // Function to handle viewing product page
  function viewProductPage(name, price, image, category) {
    const productDetails = { name, price, image, category };
    localStorage.setItem("selectedProduct", JSON.stringify(productDetails));

    window.location.href = "product.html";
  }

  function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "flex";
      document.body.classList.add("active");
    }
  }

  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(function () {
        loader.style.display = "none";
        document.body.classList.remove("active");
      }, 3000);
    }
  }

  hideLoader();

  // Function to handle product item clicks (wishlist/eye icons)
  function handleProductClick(e) {
    const wishlistIcon = e.target.closest(".wishlist-icon");
    if (wishlistIcon) {
      const icon = wishlistIcon.querySelector("i.fa-heart");
      const name = wishlistIcon.dataset.name;
      const price = wishlistIcon.dataset.price;
      const image = wishlistIcon.dataset.image;
      addToWishlist(name, price, image, icon);
      return;
    }

    const eyeIcon = e.target.closest(".eye-icon");
    if (eyeIcon) {
      const name = eyeIcon.dataset.name;
      const price = eyeIcon.dataset.price;
      const image = eyeIcon.dataset.image;
      viewProductPage(name, price, image);
    }
  }

  // Event delegation for wishlist and eye icons
  if (productContainer) {
    productContainer.addEventListener("click", handleProductClick);
  }
});
