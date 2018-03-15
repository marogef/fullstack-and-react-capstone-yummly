
var React = require('react');
var ReactDOM = require('react-dom');
//declare the favorites function
var Favorites = function() {
    return (
    	
    	<section className="favorites-container">
    			            <ul><a href="index.html">Back to the Main Page</a></ul>

				<div className="delete-favorites">
					<button className="delete-favorites">
                    <img src="assets/images/delete-favorites.png" />
                </button>
				</div>
				<h2>Your Favorites</h2>
				<ul>
				</ul>
			</section>
    );
};

module.exports = Favorites;
