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
        `<a href=${recipes[i].url} target="_blank"><img src=${recipes[i].image} alt="imgDescription"><h3>${recipes[i].name}</h3><p>View Recipe</p></a>`;
    recipeList.appendChild(singleRecipe);
}