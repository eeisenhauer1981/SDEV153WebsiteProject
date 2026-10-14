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
categorizeRecipes(recipes);

//sets view - collapsed menus for mobile (under 500px) and expanded view for desktop (500px+)
if (mobileView.matches) {
    setDesktopView(breakfastRecipeList, breakfastExpandButton);
    setDesktopView(lunchRecipeList, lunchExpandButton);
    setDesktopView(dinnerRecipeList, dinnerExpandButton);
}
else {
    setMobileView(breakfastRecipeList, breakfastExpandButton, "breakfast");
    setMobileView(lunchRecipeList, lunchExpandButton, "lunch");
    setMobileView(dinnerRecipeList, dinnerExpandButton, "dinner");
}

//event listeners for expand functions
breakfastExpandButton.addEventListener("click", function() {
    expandOrClose(breakfastRecipeList, breakfastExpandButton);
});
lunchExpandButton.addEventListener("click", function() {
    expandOrClose(lunchRecipeList, lunchExpandButton);
});
dinnerExpandButton.addEventListener("click", function() {
    expandOrClose(dinnerRecipeList, dinnerExpandButton);
});

//event listener for search
let searchRecipesForm = document.querySelector(".recipe-search");
searchRecipesForm.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    //fetches search terms from search form
    let searchString = document.getElementById("search-recipe").value;
    //searchRecipes returns an array of matching recipes, stored in searchResults
    let searchResults = searchRecipes(searchString);
    clearRecipeList(breakfastRecipeList);
    clearRecipeList(lunchRecipeList);
    clearRecipeList(dinnerRecipeList);
    categorizeRecipes(searchResults);
});