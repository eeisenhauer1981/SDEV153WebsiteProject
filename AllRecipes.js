//media query to determine viewport width
let mobileView = window.matchMedia("(min-width: 500px)");

//create identifiers recipe category sections and recipe category buttons
let breakfastRecipeList = document.querySelector(".breakfast");
let lunchRecipeList = document.querySelector(".lunch");
let dinnerRecipeList = document.querySelector(".dinner");
let breakfastExpandButton = document.querySelector(".breakfast-recipe-reveal");
let lunchExpandButton = document.querySelector(".lunch-recipe-reveal");
let dinnerExpandButton = document.querySelector(".dinner-recipe-reveal");

//adds recipes to list
//loops through each recipe in recipes array, identifies the category, then calls addRecipes function
for (let i = 0; i < recipes.length; i++) {
    //reviews recipe category and selects correct destination list (breakfast, lunch, or dinner)
    if (recipes[i].category == "breakfast") {
        addRecipes (recipes[i], breakfastRecipeList);
    }
    else if (recipes[i].category == "lunch") {
        addRecipes (recipes[i], lunchRecipeList);
    }
    else {
        addRecipes (recipes[i], dinnerRecipeList);
    }
}

//sets view - collapsed menus for mobile (under 500px) and expanded view for desktop (500px+)
if (mobileView.matches) {
    console.log("desktop view");
    setDesktopView(breakfastRecipeList, breakfastExpandButton);
    setDesktopView(lunchRecipeList, lunchExpandButton);
    setDesktopView(dinnerRecipeList, dinnerExpandButton);
}
else {
    console.log("mobile view");
    setMobileView(breakfastRecipeList, breakfastExpandButton, "breakfast");
    setMobileView(lunchRecipeList, lunchExpandButton, "lunch");
    setMobileView(dinnerRecipeList, dinnerExpandButton, "dinner");
}

//event listeners for expand functions
breakfastExpandButton.addEventListener("click", function() {
    expandOrClose(breakfastRecipeList, breakfastExpandButton)
});
lunchExpandButton.addEventListener("click", function() {
    expandOrClose(lunchRecipeList, lunchExpandButton)
});
dinnerExpandButton.addEventListener("click", function() {
    expandOrClose(dinnerRecipeList, dinnerExpandButton)
});