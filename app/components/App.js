var React = require('react');
var RecipeBox = require('./RecipeBox');
var RecipeButton = require('./RecipeButton');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <div className="well">
                    <h1 className="text-center">Recipe Box</h1>
                </div>
                <RecipeBox/>
                <RecipeButton/>
            </div>
        )
    }

});

module.exports = App;
