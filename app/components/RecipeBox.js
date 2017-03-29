var React = require('react');
var Recipe = require('./Recipe');

var RecipeBox = React.createClass({
    getInitialState: function() {
        let recipes = [
            {
                id: 0,
                title: "Pork Roast",
                ingredients: ["Pork", "Seasonings"]
            }
        ];
        return {recipes: recipes};
    },

    render: function() {
        return (
            <div className="container">
                {this.state.recipes.map(function(recipe, i) {
                    return (<Recipe recipe={recipe} key={recipe.id}/>);
                }, this)}
            </div>
        )
    }

});

module.exports = RecipeBox;
