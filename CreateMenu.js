//finds the recipe form
let createMenuForm = document.querySelector(".create-menu");
//creates form submit event - gets counts of each meal needed, shuffles all recipes, and pulls enough recipes to add to menu
createMenuForm.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    //clears previous menu and returns an empty currentMenu array
    currentMenu.splice(0);
    //grabs form values and assigns to variables
    let breakfastCount=document.getElementById("breakfast").value;
    let lunchCount=document.getElementById("lunch").value;
    let dinnerCount=document.getElementById("dinner").value;
    //shuffles recipes
    recipes.sort(function (a,b) {
        return Math.random() - 0.5;
    });
    //adds recipes from shuffled list to currentMenu until menu is full
    let i = 0;
    do {
        //test - delete
        console.log("recipe " + i + ": " + recipes[i].name + ", " + recipes[i].category);
        if (recipes[i].category == "breakfast" && breakfastCount > 0) {
            console.log("breakfasts before: " + breakfastCount);
            currentMenu.push(recipes[i]);
            breakfastCount --;
            console.log("breakfasts after: " + breakfastCount);
        }
        else if (recipes[i].category == "lunch" && lunchCount > 0) {
            console.log("lunches before: " + lunchCount);
            currentMenu.push(recipes[i]);
            lunchCount --;
            console.log("lunches after: " + lunchCount);
        }
        else if (recipes[i].category == "dinner" && dinnerCount > 0) {
            console.log("dinners before: " + dinnerCount);
            currentMenu.push(recipes[i]);
            dinnerCount --;
            console.log("dinners after: " + dinnerCount);
        }
        if (i < recipes.length -1) {
            i++;
        }
        else {
            i = 0;
        }
        //test- delete
        console.log("next recipe: " + i);
    }
    while (breakfastCount > 0 || lunchCount > 0 || dinnerCount >0);

    console.log(currentMenu);
    
    //resets form fields to blank
    createMenuForm.reset();
    //saves menu array to localStorage
    let storage = window.localStorage;
    let setJSON = JSON.stringify(currentMenu);
    storage.setItem("menuRecipes", setJSON);
})
