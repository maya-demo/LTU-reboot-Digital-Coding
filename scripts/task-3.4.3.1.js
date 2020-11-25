var meal = {
    recipeTitle: " Pizza ",
    servings: 6,
    ingredients: ['cheese, ham, mushroms, peper'],
    directions: ["Bake it"," Cut it"],

    cook: function() {

    console.log("I am hungry let's cook" + meal.recipeTitle);
    }

};

//for loop to display on screen

var ingredients = meal.ingredients;

for( var index = 0; index < ingredients.length; index++ ) {

    console.log(ingredients[index]);

}