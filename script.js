//loads recipe collection
let recipes = [];
//checks to see if any recipes are saved in localStorage
if (localStorage.getItem("allRecipes") !== null ) { 
    //if so, saved recipes are retrieved and assigned to recipes[]
    let getJSON = localStorage.getItem("allRecipes"); 
    recipes = JSON.parse(getJSON);
}
//if no recipes are saved in localStorage, then default starter recipe list is assigned to recipes[]
else {
    recipes = [
        {
            id: 1,
            name: "Chopped Italian Chickpea Salad",
            url: "https://www.eatingwell.com/chopped-italian-chickpea-salad-11917294?kw=myrecipes&banner=login",
            image: "https://www.eatingwell.com/thmb/_gtO5ehyT22aXJWAaPKGx2DMy-8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-Chopped-Italian-Chickpea-Salad-Hero-065_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-f67fe959e9e1468bacc3561c129b0667.jpg",
            category: "lunch"
        }, 
        {
            id: 2,
            name: "Mediterranean Chicken Sheet Pan Dinner",
            url: "https://www.allrecipes.com/recipe/268999/mediterranean-chicken-sheet-pan-dinner/?kw=myrecipes",
            image: "https://www.allrecipes.com/thmb/xsA0FfyPy3g9zIsmPQrfYO_f2wA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/268999-ddmfs-mediterranean-chicken-sheet-pan-dinner-4X3-0038-4b58f57d84cc403e9c5f5e0f7ff88fb3.jpg",
            category: "dinner"
        },
        {
            id: 3,
            name: "Peanut Butter Banana Muffins",
            url: "https://www.eatingwell.com/high-protein-peanut-butter-banana-muffins-12025353",
            image: "https://www.eatingwell.com/thmb/0phvKaLmfpMZ2Oa9IiFWFaw0jYY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-High-ProteinPeanutButterBananaMuffins-053_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-0b090849c42941dabd284f8eabcee2e4.jpg",
            category: "breakfast"
        },
        {
            id: 4,
            name: "Veggie and Hummus Sandwich",
            url: "https://www.eatingwell.com/recipe/259817/veggie-hummus-sandwich/",
            image: "https://www.eatingwell.com/thmb/lZDGhZai2Bq5gY5sPiDdaXF55ww=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/veggie-hummus-sandwich-1x1-b43dea0c80a04c068ce3cf0782924327.jpg",
            category: "lunch"
        },
        {
            id: 5,
            name: "Chicken with Sun Dried Tomato Cream Sauce",
            url: "https://www.eatingwell.com/recipe/276341/chicken-cutlets-with-sun-dried-tomato-cream-sauce/",
            image: "https://www.eatingwell.com/thmb/8TQuLkLL2a1zq0Zbw4kpzp0WvWc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-Cutlets-with-Sun-Dried-Tomato-Cream-Sauce-5ecf005359364423935b527529ba37e8.jpg",
            category: "dinner"
        },
        {
            id: 6,
            name: "Bang Bang Broccoli and Beef Skillet",
            url: "https://www.eatingwell.com/bang-bang-broccoli-beef-skillet-12064497",
            image: "https://www.eatingwell.com/thmb/GwvF6Vv4kJJ3vczhNL3IKlwW_-Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-Bang-Bang-Broccoli-Beef-Skillet-1x1-033_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-e6b84e30a3434ac28dca928a530ce4f1.jpg",
            category: "dinner"
        }
    ]
}

//loads current menu
let currentMenu = [];
//checks to see if a menu is saved in localStorage
if (localStorage.getItem("menuRecipes") !== null ) { 
    //if so, menu recipes are retrieved and assigned to currentMenu[]
    let getJSON = localStorage.getItem("menuRecipes"); 
    currentMenu = JSON.parse(getJSON);
}

//menu button to expand/collapse nav menu on content pages
let navButton = document.querySelector(".pages-nav-button");
let navMenu = document.querySelector(".pages-nav");
navMenu.style.display = "none";
navButton.addEventListener("click", function(clickEvent) {
    if (navMenu.style.display=="none") {
        navMenu.style.display="flex";
        navButton.setAttribute("aria-expanded", "true");
    }
    else {
        navMenu.style.display="none";
        navButton.setAttribute("aria-expanded", "false");
    }
});

//media query to determine viewport width
let mobileView = window.matchMedia("(min-width: 500px)");

//button to expand/collapse recipe list on content pages for mobile view
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

//button to expand/collapse lunch recipe list on content pages for mobile view
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

//button to expand/collapse dinner recipe list on content pages for mobile view
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