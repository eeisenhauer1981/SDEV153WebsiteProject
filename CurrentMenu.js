//media query to determine viewport width
let mobileView = window.matchMedia("(min-width: 500px)");

//create identifiers to link recipe to the correct category list to display on AllRecipes page
let breakfastRecipeMenu = document.querySelector(".breakfast");
let lunchRecipeMenu = document.querySelector(".lunch");
let dinnerRecipeMenu = document.querySelector(".dinner");
let breakfastExpandButton = document.querySelector(".breakfast-recipe-reveal");
let lunchExpandButton = document.querySelector(".lunch-recipe-reveal");
let dinnerExpandButton = document.querySelector(".dinner-recipe-reveal");

//adds recipes to list
//loops through each recipe in recipes array, identifies the category, then calls addRecipes function
for (let i = 0; i < currentMenu.length; i++) {
    //reviews recipe category and selects correct destination list (breakfast, lunch, or dinner)
    if (currentMenu[i].category == "breakfast") {
        addRecipes (currentMenu[i], breakfastRecipeMenu);
    }
    else if (currentMenu[i].category == "lunch") {
        addRecipes (currentMenu[i], lunchRecipeMenu);
    }
    else {
        addRecipes (currentMenu[i], dinnerRecipeMenu);
    }
}

//sets view - collapsed menus for mobile (under 500px) and expanded view for desktop (500px+)
if (mobileView.matches) {
    console.log("desktop view");
    setDesktopView(breakfastRecipeMenu, breakfastExpandButton);
    setDesktopView(lunchRecipeMenu, lunchExpandButton);
    setDesktopView(dinnerRecipeMenu, dinnerExpandButton);
}
else {
    console.log("mobile view");
    setMobileView(breakfastRecipeMenu, breakfastExpandButton, "breakfast");
    setMobileView(lunchRecipeMenu, lunchExpandButton, "lunch");
    setMobileView(dinnerRecipeMenu, dinnerExpandButton, "dinner");
}

//event listeners for expand functions
breakfastExpandButton.addEventListener("click", function() {
    expandOrClose(breakfastRecipeMenu, breakfastExpandButton)
});
lunchExpandButton.addEventListener("click", function() {
    expandOrClose(lunchRecipeMenu, lunchExpandButton)
});
dinnerExpandButton.addEventListener("click", function() {
    expandOrClose(dinnerRecipeMenu, dinnerExpandButton)
});
