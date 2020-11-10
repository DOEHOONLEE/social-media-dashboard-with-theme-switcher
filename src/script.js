// font color change depending on color mode

// dark
// ids
// "total-followers"
// "dark-mode"

// classes
// "company-name"
// "activity"
// "overview-title"

// light


/* [[ DOM SELECTIONS ]] */

let totalFollowers = document.getElementById("total-followers");
let darkModeText = document.getElementById("dark-mode");
let companyNames = document.querySelectorAll(".company-name");
let activities = document.querySelectorAll(".activity");
let overviewTitles = document.querySelectorAll(".overview-title");
let darkModeToggleButton = document.querySelectorAll(".slider")[0];


darkModeToggleButton.addEventListener("click", function() {
    console.log("HI");
    console.log(totalFollowers.className);
    console.log(darkModeText);
    console.log(companyNames);
    console.log(activities);
    console.log(overviewTitles);
    console.log(darkModeToggleButton);
})