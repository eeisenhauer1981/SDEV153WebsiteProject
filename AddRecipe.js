
//finds the recipe form
let addRecipeForm = document.querySelector(".add-recipe");
//testing - remove
console.log(recipes.length);
//creates form submit event - add new recipe elements entered into the form as a new recipe object in the recipes array
addRecipeForm.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    //loops through all recipe IDs to find the highest assigned ID
    let id=0;
    for (let recipe of recipes) {
        if (recipe.id > id) {
            id = recipe.id;
        }
    }
    //adds 1 to the current highest recipe ID to set a new recipe ID
    id = id + 1;
    //grabs form values and assigns to variables
    let name=document.getElementById("recipename").value;
    let url=document.getElementById("recipelink").value;
    let image=document.getElementById("recipeimagelink").value;
    let category=document.getElementById("recipetype").value;
    //adds new recipe object to recipes array
    recipes.push({id, name, url, image, category});
    //resets form fields to blank
    addRecipeForm.reset();
    //testing - remove
    console.log(recipes);
    //saves recipes array with new recipe to localStorage
    let storage = window.localStorage;
    let setJSON = JSON.stringify(recipes);
    storage.setItem("allRecipes", setJSON);
})
