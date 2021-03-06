// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Search Ingredient

document.getElementById("ingSubmit").addEventListener("click",() => {
    searchIngredient(event)
});

function searchIngredient(e){
    e.preventDefault();
    let ingredient = document.getElementById("ingInput");
    console.log(ingredient.innerText);
    alert(" You have searched for this ingredient : \n \t "+ ingredient.value + " \n Search will be coming soon!");
}