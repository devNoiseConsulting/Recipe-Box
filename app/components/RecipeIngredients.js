var React = require('react');
var Ingredient = require('./Ingredient');

var RecipeIngredients = React.createClass({
    getInitialState: function() {
        return {};
    },

    removeRecipe: function(e) {
      this.props.delete(this.props.recipe.id);
    },

    render: function() {
        let ingredients = this.props.recipe.ingredients.split(',');
        return (
          <div className="panel-body">
              <h4 className="text-center">Ingredients</h4>
              <hr/>
              <ul className="list-group">
                  {ingredients.map(function(ingredient, i) {
                      let key = this.props.recipe.id + "i" + i;
                      return (<Ingredient ingredient={ingredient} key={key}/>);
                  }, this)}
              </ul>
              <div className="row">
                  <div className="col-xs-6">
                      <button type="button" className="btn btn-danger btn-block" onClick={this.removeRecipe}>Delete</button>
                  </div>
                  <div className="col-xs-6">
                      <button type="button" className="btn btn-primary btn-block" onClick={this.props.edit}>Edit</button>
                  </div>
              </div>
          </div>
        )
    }

});

module.exports = RecipeIngredients;
