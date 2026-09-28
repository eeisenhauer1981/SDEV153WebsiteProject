//create identifiers to link recipe to the correct category list to display on AllRecipes page
let breakfastRecipeList = document.querySelector(".breakfast");
let lunchRecipeList = document.querySelector(".lunch");
let dinnerRecipeList = document.querySelector(".dinner");
//variable to store destination once it's identified to place singleRecipe on the page
let recipeList;

//loops through each recipe in recipes array, identifies the category, then creates a list element that acts as a link to the recipe page.
//list element displays recipe image (if one exists), recipe name, and "View Recipe" prompt
for (let i = 0; i < recipes.length; i++) {
    //reviews recipe category and selects correct destination list (breakfast, lunch, or dinner)
    if (recipes[i].category == "breakfast") {
        recipeList = breakfastRecipeList;
    }
    else if (recipes[i].category == "lunch") {
        recipeList = lunchRecipeList;
    }
    else {
        recipeList = dinnerRecipeList;
    }

    //dynamically assigns description for img alt with recipe name
    let imgDescription = "Photo of " + recipes[i].name;

    //creates a new li and assigns individual recipe information to the correct HTML element to be displayed on the page
    let singleRecipe = document.createElement("li");
    singleRecipe.innerHTML = 
        `<a href=${recipes[i].url} target="_blank"><img src=${recipes[i].image} alt=${imgDescription}><div class="recipe-card-text"><h3>${recipes[i].name}</h3><p>View Recipe</p></div></a>`;
    recipeList.appendChild(singleRecipe);
}

//buttons to expand/close recipe lists on mobile
//media query to determine viewport width
let mobileView = window.matchMedia("(min-width: 500px)");

//breakfast
let breakfastExpandButton = document.querySelector(".breakfast-recipe-reveal");
let breakfastRecipes = document.querySelector(".breakfast");

if (mobileView.matches) {
    breakfastRecipes.style.display= "grid";
    breakfastExpandButton.setAttribute("aria-disabled", "true");
}
else {
    breakfastRecipes.style.display = "none";
    breakfastExpandButton.setAttribute("aria-label", "Expand breakfast recipe list");
    breakfastExpandButton.setAttribute("aria-expanded", "false");
    breakfastExpandButton.setAttribute("aria-controls", "breakfast-reveal");
    breakfastExpandButton.addEventListener("click", function(clickEvent) {
        if (breakfastRecipes.style.display=="none") {
            breakfastRecipes.style.display="flex";
            breakfastExpandButton.setAttribute("aria-expanded", "true");
        }
        else {
            breakfastRecipes.style.display="none";
            breakfastExpandButton.setAttribute("aria-expanded", "false");
        }
    });
}

//lunch
let lunchExpandButton = document.querySelector(".lunch-recipe-reveal");
let lunchRecipes = document.querySelector(".lunch");

if (mobileView.matches) {
    lunchRecipes.style.display= "grid";
    lunchExpandButton.setAttribute("aria-disabled", "true");
}
else {
    lunchRecipes.style.display = "none";
    lunchExpandButton.setAttribute("aria-label", "Expand lunch recipe list");
    lunchExpandButton.setAttribute("aria-expanded", "false");
    lunchExpandButton.setAttribute("aria-controls", "lunch-reveal");
    lunchExpandButton.addEventListener("click", function(clickEvent) {
        if (lunchRecipes.style.display=="none") {
            lunchRecipes.style.display="flex";
            lunchExpandButton.setAttribute("aria-expanded", "true");
        }
        else {
            lunchRecipes.style.display="none";
            lunchExpandButton.setAttribute("aria-expanded", "false");
        }
    });
}

//dinner
let dinnerExpandButton = document.querySelector(".dinner-recipe-reveal");
let dinnerRecipes = document.querySelector(".dinner");

if (mobileView.matches) {
    dinnerRecipes.style.display= "grid";
    dinnerExpandButton.setAttribute("aria-disabled", "true");
}
else {
    dinnerRecipes.style.display = "none";
    dinnerExpandButton.setAttribute("aria-label", "Expand dinner recipe list");
    dinnerExpandButton.setAttribute("aria-expanded", "false");
    dinnerExpandButton.setAttribute("aria-controls", "dinner-reveal");
    dinnerExpandButton.addEventListener("click", function(clickEvent) {
        if (dinnerRecipes.style.display=="none") {
            dinnerRecipes.style.display="flex";
            dinnerExpandButton.setAttribute("aria-expanded", "true");
        }
        else {
            dinnerRecipes.style.display="none";
            dinnerExpandButton.setAttribute("aria-expanded", "false");
        }
    });
}