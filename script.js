let recipes = [
    {
        id: 1,
        name: "Chopped Italian Chickpea Salad",
        url: "https://www.eatingwell.com/chopped-italian-chickpea-salad-11917294?kw=myrecipes&banner=login",
        image: "https://www.eatingwell.com/thmb/_gtO5ehyT22aXJWAaPKGx2DMy-8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-Chopped-Italian-Chickpea-Salad-Hero-065_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-f67fe959e9e1468bacc3561c129b0667.jpg",
        category: "Lunch"
    }, 
    {
        id: 2,
        name: "Mediterranean Chicken Sheet Pan Dinner",
        url: "https://www.allrecipes.com/recipe/268999/mediterranean-chicken-sheet-pan-dinner/?kw=myrecipes",
        image: "https://www.allrecipes.com/thmb/xsA0FfyPy3g9zIsmPQrfYO_f2wA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/268999-ddmfs-mediterranean-chicken-sheet-pan-dinner-4X3-0038-4b58f57d84cc403e9c5f5e0f7ff88fb3.jpg",
        category: "Dinner"
    }]

for (let i = 0; i < recipes.length; i++) {
    console.log(recipes[i].name);
}

