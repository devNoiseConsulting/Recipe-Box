var React = require('react');
var Ingredient = require('./Ingredient');

var Recipe = React.createClass({
    getInitialState: function() {
        return {open: false};
    },

    toggleRecipe: function(e) {
        let open = !this.state.open;
        this.setState({open: open});
    },

    removeRecipe: function(e) {
      this.props.delete(this.props.recipe.id);
    },

    editRecipe: function(e) {
      console.log("editRecipe");
    },

    render: function() {
        let panelBody = '';

        if (this.state.open) {
            panelBody = (
                <div className="panel-body">
                    <h4 className="text-center">Ingredients</h4>
                    <hr/>
                    <ul className="list-group">
                        {this.props.recipe.ingredients.map(function(ingredient, i) {
                            let key = this.props.recipe.id + "i" + i;
                            return (<Ingredient ingredient={ingredient} key={key}/>);
                        }, this)}
                    </ul>
                    <div className="row">
                        <div className="col-xs-6">
                            <button type="button" className="btn btn-danger btn-block" onClick={this.removeRecipe}>Delete</button>
                        </div>
                        <div className="col-xs-6">
                            <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#recipeModal" onClick={this.editRecipe}>Edit</button>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="recipe">
                        <a onClick={this.toggleRecipe}>{this.props.recipe.title}</a>
                    </h3>
                </div>
                {panelBody}
            </div>
        )
    }

});

module.exports = Recipe;
