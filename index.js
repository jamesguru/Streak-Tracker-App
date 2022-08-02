"use strict";

var addICon = document.querySelector(".toggle-icon-add");
var closeIcon = document.querySelector('.toggle-icon-close');
var btnAddStreak = document.querySelector(".btn-add-streak");
var menuIcon = document.querySelector('.menu-icon');
var addingSteak = document.querySelector('.adding-streak');
var image = document.querySelector(".streak-image");
var headingStreak = document.querySelector(".heading-streak");
var addStreakTitle = document.querySelector(".streak-name");
var addStreakImage = document.querySelector(".streak-image");
var addStreakCurrentDate = document.querySelector(".start-date");
var toggle = false;
var streaks = [];
addICon.addEventListener("click", function () {
    toggle = !toggle;
    if (toggle) {
        closeIcon.style.display = "flex";
        menuIcon.style.display = "flex";
        addingSteak.style.display = "flex";
        addICon.style.display = "none";
        image.style.display = "none";
        headingStreak.style.display = "none";
    }
    else {
        addICon.style.display = "flex";
        image.style.display = "flex";
        addingSteak.style.display = "flex";
    }
});
closeIcon.addEventListener("click", function () {
    toggle = !toggle;
    console.log(toggle);
    window.location.reload();
});
btnAddStreak.addEventListener("click", function () {
    var newStreak = {
        title: addStreakTitle.value,
        image: addStreakImage.value,
        date: addStreakCurrentDate.value
    };
    streaks.push(newStreak);
    console.log(streaks);
});
