// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function getVeganStatus() {
	if (document.getElementById("ingName") != null) {
		let ing = document.getElementById("ingName").value;
		const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=013fe649&app_key=%20c268711bed791f37ba6f6c0226c216f3&ingr=${ing}&nutrition-type=cooking`;
		const nutUrl = "https://api.edamam.com/api/food-database/v2/nutrients?app_id=013fe649&app_key=%20c268711bed791f37ba6f6c0226c216f3";
		console.log(ing);
		ing = ing.split(" ");
		ing = ing[0] + "%20" + ing[1];
		console.log(ing);
		let foodId, foodUri;
		axios.get(url).then(data => {
			const obj = data.data.hints[0];
			foodId = obj.food.foodId;
			foodUri = obj.measures[0].uri;
			const body = {
				"ingredients": [
					{
						"quantity": 1,
						"measureURI": foodUri,
						"foodId": foodId
					}
				]
			};
			axios.post(nutUrl, body).then(data => {
				const labels = data.data.healthLabels;
				let flag = false;
				labels.map(label => {
					if (label === "VEGAN") {
						flag = true;
					}
				});
				if (flag) {
					const div = document.getElementById("veganStatus");
					div.innerHTML = "<h4>The ingredient you searched for is Vegan.</h4>";
				} else {
					const div = document.getElementById("veganStatus");
					div.innerHTML = `<h4>Sorry . The ingredient you searched is Not Vegan!</h4>`;
				}
			});
		});
    }   
}

window.onload = getVeganStatus;