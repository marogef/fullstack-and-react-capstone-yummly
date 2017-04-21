var React = require('react');
var ReactDOM = require('react-dom');
//make the function for header and return the right statement
var Header = function() {
    
    return (
    	<div>
    		<h1>Yummyly favorite food search</h1>
			<p>Here you can search for all your favorite food. Let us give you directions and you will enjoy your food even better. Be prepared for a great tasting food with our recipes.</p>
		</div>
    );
};

module.exports = Header;