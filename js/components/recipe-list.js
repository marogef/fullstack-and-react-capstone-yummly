//add the react and react dom requirments
var React = require('react');
var ReactDOM = require('react-dom');
//declar function for recipelist and return the right output
var recipeList = function() {
    
    return (
    	<section className="recipe-list">
			<ul className="recipe-details">
				
			</ul>
			<p>There are more recipes out there but our recipes are good tasting and you will enjoy every one of them.</p>
		</section>
    );
};

module.exports = recipeList;
