var React = require('react');

var RecipeButton = React.createClass({
    handleClick: function(e) {
      var recipe = {
          title: '',
          ingredients: ''
      };
      this.props.toggle("Add Recipe", recipe);
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <button type="button" className="btn btn-primary btn-block btn-lg" data-toggle="modal" data-target="#recipeModal" onClick={this.handleClick}>
                            Add Recipe
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RecipeButton;
