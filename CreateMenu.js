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

    //determine how many rows will be needed in menu table after menu is planned
    let daysPlanned = breakfastCount;
    if (lunchCount > daysPlanned) {
        daysPlanned = lunchCount;
    }
    if (dinnerCount > daysPlanned) {
        daysPlanned = dinnerCount;
    }
    //test-delete
    console.log(daysPlanned);
    
    //shuffles recipes
    recipes.sort(function (a,b) {
        return Math.random() - 0.5;
    });
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
    while (breakfastCount > 0 || lunchCount > 0 || dinnerCount >0);
    
    //resets form fields to blank
    createMenuForm.reset();
    //saves menu array to localStorage
    let storage = window.localStorage;
    let setJSON = JSON.stringify(currentMenu);
    storage.setItem("menuRecipes", setJSON);

    //test - delete
    console.log(currentMenu);

    //displays success message and table with meal plan
    //setup
    let menuTable = document.querySelector(".menu-summary");
    
    //creates arrays organized by category to populate correct table column
    let breakfasts = [];
    let lunches = [];
    let dinners = [];
    //populates category arrays
    for (let i=0; i < currentMenu.length; i++) {
        if (currentMenu[i].category == "breakfast") {
            breakfasts.push(currentMenu[i]);
        }
        else if (currentMenu[i].category == "lunch") {
            lunches.push(currentMenu[i]);
        }
        else if (currentMenu[i].category == "dinner") {
            dinners.push(currentMenu[i]);
        }
    }


    //build
    //add "success message" as table caption
    let successMessage = document.createElement("caption");
    successMessage.innerHTML = "Your menu has been created. Here's what's cooking in your kitchen:";
    menuTable.appendChild(successMessage);

    //add header row to table
    let headRow = document.createElement("tr");
    headRow.innerHTML = `<th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th>`;
    menuTable.appendChild(headRow);

    //add meal data to table
    for (i = 0; i < daysPlanned; i++) {
        let dayData = i + 1;
        let breakfastData;
        let lunchData;
        let dinnerData;
        //assign breakfast for row
        if (i < breakfasts.length) {
            breakfastData = breakfasts[i].name;
        }
        else {
            breakfastData = "No breakfast selected for this day"
        }
        //assign lunch for row
        if (i < lunches.length) {
            lunchData = lunches[i].name;
        }
        else {
            lunchData = "No lunch selected for this day"
        }
        //assign dinner for row
        if (i < dinners.length) {
            dinnerData = dinners[i].name;
        }
        else {
            dinnerData = "No dinner selected for this day"
        }
        let dataRow = document.createElement("tr");
        dataRow.innerHTML = 
            `<td>${dayData}</td><td>${breakfastData}</td><td>${lunchData}</td><td>${dinnerData}</td>`;
        menuTable.appendChild(dataRow);
    }
})
