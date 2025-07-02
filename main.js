"use strict";

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-container");
// const accountCreation = document.querySelector(".Account");

searchIcon.addEventListener("click", function() {
    searchBar.style.display = "flex";
    searchIcon.style.display = "none";
});


