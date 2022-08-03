"use strict";

var addICon = document.querySelector(".toggle-icon-add");
var closeIcon = document.querySelector('.toggle-icon-close');
var btnAddStreak = document.querySelector(".btn-add-streak");
var menuIcon = document.querySelector('.menu-icon');
var addingSteak = document.querySelector('.adding-streak');
var image = document.querySelector(".streak-img");
var headingStreak = document.querySelector(".heading-streak");
var addStreakTitle = document.querySelector(".streak-name");
var addStreakImage = document.querySelector(".streak-image");
var addStreakCurrentDate = document.querySelector(".start-date");
var errorText = document.querySelector(".error");
var streakItems = document.querySelector(".streaks");
var pop = document.querySelector(".pop");
var streaks = [];
addICon.addEventListener("click", function () {
    closeIcon.style.display = "flex";
    menuIcon.style.display = "flex";
    addingSteak.style.display = "flex";
    addICon.style.display = "none";
    image.style.display = "none";
    headingStreak.style.display = "none";
});
closeIcon.addEventListener("click", function () {
    addICon.style.display = "flex";
    image.style.display = "flex";
    headingStreak.style.display = "flex";
    addingSteak.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "none";
    addingSteak.style.display = "none";
});
btnAddStreak.addEventListener("click", function () {
    var newStreak = {
        title: addStreakTitle.value,
        image: addStreakImage.value,
        date: addStreakCurrentDate.value
    };
    if (addStreakImage.value || addStreakTitle.value || addStreakCurrentDate.value) {
        streaks.push(newStreak);
        var li_1 = "";
        addStreakTitle.value = "";
        addStreakImage.value = "";
        addStreakCurrentDate.value = "";
        streaks.forEach(function (streak, index) {
            li_1 += "\n      \n    \n          \n      \n            <li class=\"streak-item\" onclick=\"MakeBold(".concat(index, ");\">\n\n                <img src=").concat(streak.image, " alt=\"\" >\n\n                <span>").concat(streak.date, "</span>\n\n                <span>").concat(streak.title, "</span>\n\n            </li>\n\n\n            ");
        });
        streakItems.innerHTML = li_1;
    }
    else {
        errorText.innerHTML = "<span> Please fill the values </span>";
    }
    console.log(streaks);
});
function MakeBold(index) {
    var streak = streaks[index];
    pop.style.display = "flex";
    pop.innerHTML = "\n\n<div class=\"pops-item\"> \n\n    <p>".concat(streak.title, "</p>\n\n\n\n    <img src=").concat(streak.image, " height=\"150px\" width=\"150px\" />\n    \n\n    <p>").concat(streak.date, "</p>\n\n    <p>24 days </p>\n\n\n    <div class=\"pop-item-btn\">\n\n                <button class=\"btn-close\" onclick=\"Close()\">close</button>\n\n                <button class=\"btn-delete\" onclick=\"Delete(").concat(index, ")\">Delete</button>\n    </div>\n\n\n\n</div>");
}
function Close() {
    pop.style.display = "none";
}
function Delete(index) {
    console.log(index);
    streaks.splice(index, 1);
}
