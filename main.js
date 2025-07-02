"use strict";

// This is for the search icon

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-container");
// const accountCreation = document.querySelector(".Account");

searchIcon.addEventListener("click", function() {
    searchBar.style.display = "flex";
    searchIcon.style.display = "none";
});

let closeIcon = document.querySelector(".close-menu");
closeIcon.addEventListener("click", function () {
    searchBar.style.display = "none";
    searchIcon.style.display = "flex";
});


// This is for the menu icon

let menuBtn = document.querySelector(".menu");
let hiddenMenu = document.querySelector(".mobile-menu");
let hiddenClose = document.querySelector(".hidden-close");



menuBtn.addEventListener("click", function () {
    menuBtn.style.display = "none";
    hiddenClose.style.display = "block";
    hiddenMenu.style.display = "block";
});

hiddenClose.addEventListener("click", function () {
    menuBtn.style.display = "flex";
    hiddenMenu.style.display = "none";
    hiddenClose.style.display = "none";
});


