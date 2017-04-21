require('babel-polyfill');
//make the necessary variables
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var Header = require('../js/components/header');
var Favorites = require('../js/components/favorites');
var RecipeList = require('../js/components/recipe-list');




//start the dom for react
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <Header />
        </div>, document.getElementById('reactHeader'));
});
//add event listener
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <Favorites />
        </div>, document.getElementById('reactFavorites'));
});
//function for rendering the dom
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <RecipeList />
        </div>, document.getElementById('reactRecipeList'));
});

