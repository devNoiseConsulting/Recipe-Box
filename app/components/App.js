var React = require('react');
var RecipeBox = require('./RecipeBox');
var RecipeButton = require('./RecipeButton');

var App = React.createClass({
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

    deleteRecipe: function(id) {
        let recipes = this.state.recipes;
        recipes = recipes.filter(function(recipe) {
            return recipe.id !== id;
        });
        this.setState({recipes: recipes});
    },

    updateRecipe: function(recipe) {
      this.deleteRecipe(recipe.id);
      this.addRecipe(recipe);
    },

    addRecipe: function(recipe) {
        let recipes = this.state.recipes;
        console.log("addRecipe", recipe);
        let id = recipes.reduce(function(a, r) {
            return r.id > a
                ? r.id
                : a;
        }, -1) + 1;
        recipe.id = id;
        recipes.push(recipe);
        if (recipe.title && recipe.ingredients) {
            this.setState({recipes: recipes});
        }
    },

    render: function() {
        return (
            <div>
                <div className="well">
                    <h1 className="text-center">Recipe Box</h1>
                </div>
                <RecipeBox recipes={this.state.recipes} delete={this.deleteRecipe} update={this.updateRecipe}/>
                <RecipeButton onClick={this.addRecipe}/>
            </div>
        )
    }

});

module.exports = App;
