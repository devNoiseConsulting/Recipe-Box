var React = require('react');
var RecipeModal = require('./RecipeModal');

var RecipeButton = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <button type="button" className="btn btn-primary btn-block btn-lg" data-toggle="modal" data-target="#recipeModal">
                            Add Recipe
                        </button>
                    </div>
                </div>
                <RecipeModal/>
            </div>
        );
    }
});

module.exports = RecipeButton;
