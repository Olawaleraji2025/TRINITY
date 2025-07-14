"use strict";

// This is for the search icon

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-container");
// const accountCreation = document.querySelector(".Account");

searchIcon.addEventListener("click", function() {
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
let numberOne = document.querySelector(".page-number1"); 
let numberTwo = document.querySelector(".page-number2"); 
let numberThree = document.querySelector(".page-number3"); 
let numberFour = document.querySelector(".page-number4"); 
let numberFive = document.querySelector(".page-number5"); 
let secondContainer = document.querySelector(".second-container");
let thirdContainer = document.querySelector(".third-container");
let firstContainer = document.querySelector(".filter-options");
let fourthContainer = document.querySelector(".fourth-container");

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


numberTwo.addEventListener("click", function () {
    secondContainer.style.display = "flex";
    firstContainer.style.display = "none";
    fourthContainer.style.display = "none"
    thirdContainer.style.display = "none";
});

numberOne.addEventListener("click", function () {
    secondContainer.style.display = "none";
    firstContainer.style.display = "flex";
    fourthContainer.style.display = "none"
    thirdContainer.style.display = "none";
});

numberThree.addEventListener("click", function () {
    secondContainer.style.display = "none";
    firstContainer.style.display = "none";
    fourthContainer.style.display = "none"
    thirdContainer.style.display = "flex";
    
});

numberFour.addEventListener("click", function () {
    secondContainer.style.display = "none";
    firstContainer.style.display = "none";
    fourthContainer.style.display = "flex"
    thirdContainer.style.display = "none";
    
});
