//starter recipe list
let recipes = []
//checks to see if any recipes are saved in localStorage
if (localStorage.getItem("allRecipes") !== null ) { 
    //if so, saved recipes are retrieved and assigned to recipes[]
    console.log("recipes found")
    let getJSON = localStorage.getItem("allRecipes"); 
    recipes = JSON.parse(getJSON);
}
//if no recipes are saved in localStorage, then default starter recipe list is assigned to recipes[]
else {
    console.log("no recipes saved")
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


