"use strict";

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-container");
const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".mobile-menu");
const hiddenClose = document.querySelector(".hidden-close");
const closeIcon = document.querySelector(".close-menu");

const pageNumbers = {
  1: document.querySelector(".page-number1"),
  2: document.querySelector(".page-number2"),
  3: document.querySelector(".page-number3"),
  4: document.querySelector(".page-number4"),
  5: document.querySelector(".page-number5"),
};

const containers = {
  1: document.querySelector(".filter-options"),
  2: document.querySelector(".second-container"),
  3: document.querySelector(".third-container"),
  4: document.querySelector(".fourth-container"),
};

// Search icon click handler
searchIcon.addEventListener("click", () => {
  searchBar.style.display = "flex";
  searchIcon.style.display = "none";
  menuBtn.style.display = "flex";
  hiddenMenu.style.display = "none";
  hiddenClose.style.display = "none";
});

// Close icon click handler
closeIcon.addEventListener("click", () => {
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
  menuBtn.style.display = "flex";
  hiddenMenu.style.display = "none";
  hiddenClose.style.display = "none";
});

// Menu button click handler
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  hiddenClose.style.display = "block";
  hiddenMenu.style.display = "block";
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
});

// Hidden close button click handler
hiddenClose.addEventListener("click", () => {
  menuBtn.style.display = "flex";
  hiddenMenu.style.display = "none";
  hiddenClose.style.display = "none";
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
});

// Helper function to show one container and hide others
function showContainer(activeIndex) {
  Object.entries(containers).forEach(([index, container]) => {
    container.style.display = index === String(activeIndex) ? "flex" : "none";
  });
}

// Attach click handlers to page numbers
Object.entries(pageNumbers).forEach(([index, pageNumber]) => {
  if (pageNumber) {
    pageNumber.addEventListener("click", () => {
      showContainer(index);
    });
  }
});
