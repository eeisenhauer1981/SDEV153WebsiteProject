//create identifiers to link recipe to the correct category list to display on AllRecipes page
let breakfastRecipeMenu = document.querySelector(".breakfast");
let lunchRecipeMenu = document.querySelector(".lunch");
let dinnerRecipeMenu = document.querySelector(".dinner");
//variable to store destination once it's identified to place singleRecipe on the page
let menu;

//loops through each recipe in currentMenu array, identifies the category, then creates a list element that acts as a link to the recipe page.
//list element displays recipe image (if one exists), recipe name, and "View Recipe" prompt
for (let i = 0; i < currentMenu.length; i++) {
    //reviews recipe category and selects correct destination list (breakfast, lunch, or dinner)
    if (currentMenu[i].category == "breakfast") {
        menu = breakfastRecipeMenu;
    }
    else if (currentMenu[i].category == "lunch") {
        menu = lunchRecipeMenu;
    }
    else {
        menu = dinnerRecipeMenu;
    }

    //dynamically assigns description for img alt with recipe name
    let imgDescription = "Photo of " + currentMenu[i].name;

    //creates a new li and assigns individual recipe information to the correct HTML element to be displayed on the page
    let singleRecipe = document.createElement("li");
    singleRecipe.innerHTML = 
        `<a href=${currentMenu[i].url} target="_blank"><img src=${currentMenu[i].image} alt="imgDescription"><h3>${currentMenu[i].name}</h3><p>View Recipe</p></a>`;
    menu.appendChild(singleRecipe);
}