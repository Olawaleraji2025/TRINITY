"use strict";

    // This is for the search icon
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".nav-search");
    const headerNavBar = document.querySelector(".header-nav-bar");

    if (searchIcon) {
        searchIcon.addEventListener("click", function() {
            searchBar.style.display = "flex";
            searchIcon.style.display = "none";
            menuBtn.style.display = "flex";
            hiddenMenu.style.display = "none";
            hiddenClose.style.display = "none";
            headerNavBar.style.height = "100px";
        });
    }

    const closeIcon = document.querySelector(".close-menu");
    if (closeIcon) {
        closeIcon.addEventListener("click", function () {
            searchBar.style.display = "none";
            searchIcon.style.display = "flex";
            menuBtn.style.display = "flex";
            hiddenMenu.style.display = "none";
            hiddenClose.style.display = "none";
            headerNavBar.style.height = "auto";
        });
    }

    // This is for the menu icon
    const menuBtn = document.querySelector(".menu");
    const hiddenMenu = document.querySelector(".mobile-menu");
    const hiddenClose = document.querySelector(".hidden-close");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            menuBtn.style.display = "none";
            hiddenClose.style.display = "block";
            hiddenMenu.style.display = "block";
            searchBar.style.display = "none";
            searchIcon.style.display = "flex";
            headerNavBar.style.height = "auto";
        });
    }

    if (hiddenClose) {
        hiddenClose.addEventListener("click", function () {
            menuBtn.style.display = "flex";
            hiddenMenu.style.display = "none";
            hiddenClose.style.display = "none";
            searchBar.style.display = "none";
            searchIcon.style.display = "flex";
            headerNavBar.style.height = "auto";
        });
}


    
// Slider Functionality

const sliderWrapper = document.querySelector('.slider-wrapper');

const sliderWrapper2 = document.querySelector('.slider-wrapper2');

function getScrollPercentage() {
    const leftToRight = sliderWrapper.scrollLeft;
    const maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
    console.log({leftToRight, maxScroll});
    return maxScroll > 0 ? (leftToRight / maxScroll) * 100 : 0;
}

function prevBtn() {
    sliderWrapper.scrollLeft -= 200;
    getScrollPercentage();
}

function nextBtn() {
    sliderWrapper.scrollLeft += 200;
    getScrollPercentage();
}


function prevBtn2() {
    sliderWrapper2.scrollLeft -= 200;
    getScrollPercentage();
}

function nextBtn2() {
    sliderWrapper2.scrollLeft += 200;
    getScrollPercentage();
}


const testimonialContainer = document.querySelector(".testimonials-section");

function slideThrough() {
    const scroll = testimonialContainer.scrollLeft;
    const maximumScroll = testimonialContainer.scrollWidth - testimonialContainer.clientWidth;

    const TheScrollWidth = testimonialContainer.scrollWidth;
    const theCliendthWidth = testimonialContainer.clientWidth;
    const theTotalScroll = (scroll / maximumScroll) * 100;


    if (testimonialContainer.scrollLeft === maximumScroll) {
        testimonialContainer.scrollLeft = 0;
    } else {
        return;
    }
    // console.log({scroll, maximumScroll, TheScrollWidth, theCliendthWidth ,theTotalScroll});
    return maximumScroll > 0 ? (scroll / maximumScroll) * 100 : 0; 
}


function prevBtn3() {
    testimonialContainer.scrollLeft -= 200;
    slideThrough();

}

function nextBtn3() {
    testimonialContainer.scrollLeft += 200;
    slideThrough();
}

