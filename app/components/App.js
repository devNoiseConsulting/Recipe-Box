var React = require('react');
var RecipeBox = require('./RecipeBox');
var RecipeButton = require('./RecipeButton');
var RecipeModal = require('./RecipeModal');

var App = React.createClass({
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

    getInitialState: function() {
        let recipes = [
            {
                id: 0,
                title: "Pork Roast",
                ingredients: ["Pork", "Seasonings"]
            }
        ];
        let modalState = {
            submit: this.addRecipe,
            submitText: 'Add Recipe'
        }
        return {recipes: recipes, currentRecipe: false, modalState: modalState};
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

    toggleModal: function(submitText, recipe) {
      let modalState = {submit: this.addRecipe, submitText: submitText};
      if (submitText.includes("Edit")) {
              modalState.submit = this.updateRecipe;
      }
      this.setState({modalState: modalState, currentRecipe: recipe});
    },

    render: function() {
        var recipe = {
            title: '',
            ingredients: ''
        };
        if (this.state.currentRecipe) {
            recipe = this.props.currentRecipe;
        }
        return (
            <div>
                <div className="well">
                    <h1 className="text-center">Recipe Box</h1>
                </div>
                <RecipeBox recipes={this.state.recipes} delete={this.deleteRecipe} update={this.updateRecipe}/>
                <RecipeButton toggle={this.toggleModal}/>
                <RecipeModal modalState={this.state.modalState} title={recipe.title} indgredients={recipe.ingredients}/>
            </div>
        )
    }

});

module.exports = App;
