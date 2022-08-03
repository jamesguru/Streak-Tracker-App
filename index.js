"use strict";

var addICon = document.querySelector(".toggle-icon-add");
var closeIcon = document.querySelector(".toggle-icon-close");
var btnAddStreak = document.querySelector(".btn-add-streak");
var menuIcon = document.querySelector(".menu-icon");
var addingSteak = document.querySelector(".adding-streak");
var image = document.querySelector(".streak-img");
var headingStreak = document.querySelector(".heading-streak");
var addStreakTitle = document.querySelector(".streak-name");
var addStreakImage = document.querySelector(".streak-image");
var addStreakCurrentDate = document.querySelector(".start-date");
var errorText = document.querySelector(".error");
var streakItems = document.querySelector(".streaks");
var pop = document.querySelector(".pop");
var none = document.querySelector(".none");
var bestStreak = document.querySelector(".best");
var streaks = [];
var listDate = [];
addICon.addEventListener("click", function () {
    Toggle.ShowAddingStreak();
    showBestActivity();
});
closeIcon.addEventListener("click", function () {
    Toggle.HideAddingStreak();
    showBestActivity();
});
var Toggle = /** @class */ (function () {
    function Toggle() {
    }
    Toggle.ShowAddingStreak = function () {
        closeIcon.style.display = "flex";
        menuIcon.style.display = "flex";
        addingSteak.style.display = "flex";
        addICon.style.display = "none";
        image.style.display = "none";
        headingStreak.style.display = "none";
    };
    Toggle.HideAddingStreak = function () {
        addICon.style.display = "flex";
        image.style.display = "flex";
        headingStreak.style.display = "flex";
        addingSteak.style.display = "none";
        closeIcon.style.display = "none";
        menuIcon.style.display = "none";
        addingSteak.style.display = "none";
    };
    return Toggle;
}());
var MyStreak = /** @class */ (function () {
    function MyStreak() {
        this.added_streaks = streaks;
    }
    MyStreak.Close = function () {
        closeModal();
    };
    MyStreak.Delete = function (index) {
        deleteModal(index);
    };
    MyStreak.ShowPop = function (index) {
        var streak = streaks[index];
        pop.style.display = "flex";
        pop.innerHTML = "\n    \n    <div class=\"pops-item\"> \n    \n        <p>".concat(streak.title, "</p>\n    \n    \n    \n        <img src=").concat(streak.image, " height=\"150px\" width=\"150px\" />\n        \n    \n        <p>").concat(streak.date, "</p>\n    \n        <p>").concat(streak.diff, " days</p>\n    \n    \n        <div class=\"pop-item-btn\">\n    \n                    <button class=\"btn-close\" onclick=\"MyStreak.Close()\">close</button>\n    \n                    <button class=\"btn-delete\" onclick=\"MyStreak.Delete(").concat(index, ")\">Delete</button>\n        </div>\n    \n    \n    \n    </div>");
    };
    MyStreak.prototype.showStreak = function () {
        if (this.added_streaks) {
            none.style.display = "none";
            var li_1 = "";
            this.added_streaks.forEach(function (streak, index) {
                li_1 += "\n  \n\n    \n\n      \n  \n        <li class=\"streak-item\" onclick=\"MyStreak.ShowPop(".concat(index, ");\">\n\n            <img src=").concat(streak.image, " alt=\"\" >\n\n            <span>").concat(streak.date, "</span>\n\n            <span>").concat(streak.title, "</span>\n\n            <span>").concat(streak.diff, " days tracked</span>\n\n\n        </li>\n\n\n        ");
            });
            streakItems.innerHTML = li_1;
        }
        else {
            none.style.display = "flex";
        }
    };
    return MyStreak;
}());
var Time = /** @class */ (function () {
    function Time(startDate) {
    }
    Time.getDaysOfStreak = function (date) {
        var currentDate = new Date().getTime();
        var streakDate = new Date(date).getTime();
        var diffInDays = Math.floor((currentDate - streakDate) / (1000 * 3600 * 24));
        listDate.push(diffInDays);
        return diffInDays;
    };
    Time.getGreatestDayDifference = function () {
        if (listDate) {
            var sortedListDate = listDate.sort();
            var largestTime = sortedListDate[listDate.length - 1];
            return largestTime;
        }
    };
    return Time;
}());
var my_streak = new MyStreak();
btnAddStreak.addEventListener("click", function () {
    var newStreak = {
        title: addStreakTitle.value,
        image: addStreakImage.value,
        date: addStreakCurrentDate.value,
        currentDate: new Date(),
        diff: Time.getDaysOfStreak(addStreakCurrentDate.value) < 0 ? 0 : Time.getDaysOfStreak(addStreakCurrentDate.value)
    };
    if (addStreakImage.value ||
        addStreakTitle.value ||
        addStreakCurrentDate.value) {
        streaks.push(newStreak);
        addStreakTitle.value = "";
        addStreakImage.value = "";
        addStreakCurrentDate.value = "";
        my_streak.showStreak();
    }
    else {
        errorText.innerHTML = "<span> Please fill the values </span>";
    }
    console.log(streaks);
});
function closeModal() {
    pop.style.display = "none";
    my_streak.showStreak();
    showBestActivity();
}
function deleteModal(index) {
    streaks.splice(index, 1);
    pop.style.display = "none";
    my_streak.showStreak();
    showBestActivity();
}
function showBestActivity() {
    var getLargestTime = Time.getGreatestDayDifference();
    console.log(getLargestTime);
    console.log(getLargestTime);
    if (getLargestTime) {
        streaks.forEach(function (streak, index) {
            if (streak.diff === getLargestTime) {
                console.log(streak);
                bestStreak.innerHTML = "\n                    \n                    \n                    <div>\n                        <img src=".concat(streak.image, " alt=\"\" >\n    \n                        <span>").concat(streak.date, "</span>\n    \n                        <span>").concat(streak.title, "</span>\n    \n                        <span>").concat(streak.diff, " days tracked</span>\n\n                    </div>\n    \n                          ");
            }
            else {
                bestStreak.style.display = "none";
            }
        });
    }
    else {
    }
}
