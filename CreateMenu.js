//finds the recipe form
let createMenuForm = document.querySelector(".create-menu");
//creates form submit event - gets counts of each meal needed, shuffles all recipes, and pulls enough recipes to add to menu
createMenuForm.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    //grabs form values and assigns to variables
    let breakfastCount=document.getElementById("breakfast").value;
    console.log(breakfastCount);
    let lunchCount=document.getElementById("lunch").value;
    console.log(lunchCount);
    let dinnerCount=document.getElementById("dinner").value;
    console.log(dinnerCount);
    //ADD RECIPE SHUFFLE STEP
    //adds recipes from shuffled list to currentMenu until menu is full
    let i = 0;
    do {
        if (recipes[i].category == "breakfast" && breakfastCount > 0) {
            currentMenu.push(recipes[i]);
            breakfastCount --;
        }
        else if (recipes[i].category == "lunch" && lunchCount > 0) {
            currentMenu.push(recipes[i]);
            lunchCount --;
        }
        else if (recipes[i].category == "dinner" && dinnerCount > 0) {
            currentMenu.push(recipes[i]);
            dinnerCount --;
        }
        if (i < recipes.length -1) {
            i++;
        }
        else {
            i = 0;
        }
    }
    while (breakfastCount > 0 && lunchCount > 0 && dinnerCount >0);
    
    //resets form fields to blank
    createMenuForm.reset();
    //saves menu array to localStorage
    let storage = window.localStorage;
    let setJSON = JSON.stringify(currentMenu);
    storage.setItem("menuRecipes", setJSON);
})
