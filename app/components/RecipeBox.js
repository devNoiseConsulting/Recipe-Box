var React = require('react');
var Recipe = require('./Recipe');

var RecipeBox = React.createClass({
    recipeSort: function(a, b) {
      return a.title > b.title;
    },

    render: function() {
        let recipes = this.props.recipes.sort(this.recipeSort);
        return (
            <div className="container">
                {recipes.map(function(recipe, i) {
                    return (<Recipe recipe={recipe} key={recipe.id} delete={this.props.delete} update={this.props.update}/>);
                }, this)}
            </div>
        )
    }

});

module.exports = RecipeBox;
