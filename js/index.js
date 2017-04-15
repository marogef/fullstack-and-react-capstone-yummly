require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var Header = require('../js/components/header');
var Favorites = require('../js/components/favorites');
var RecipeList = require('../js/components/recipe-list');





document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <Header />
        </div>, document.getElementById('reactHeader'));
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <Favorites />
        </div>, document.getElementById('reactFavorites'));
});



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<div>   
        <RecipeList />
        </div>, document.getElementById('reactRecipeList'));
});

