var mongoose = require('mongoose');
//make the recipe schema
var RecipeSchema = new mongoose.Schema({
    name: { type: String, required: false }
});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;