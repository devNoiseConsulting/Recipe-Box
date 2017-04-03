var React = require('react');
var RecipeIngredients = require('./RecipeIngredients');
var RecipeEdit = require('./RecipeEdit');

var Recipe = React.createClass({
    getInitialState: function() {
        return {open: false, edit: false};
    },

    toggleRecipe: function(e) {
        let open = !this.state.open;
        this.setState({open: open});
    },

    toggleEdit: function(e) {
        let edit = !this.state.edit;
        this.setState({edit: edit});
    },

    render: function() {
        let panelBody = '';

        if (this.state.open) {
            if (!this.state.edit) {
                panelBody = (
                    <RecipeIngredients recipe={this.props.recipe} delete={this.props.delete} edit={this.toggleEdit}/>
                );
            } else {
                panelBody = (
                    <RecipeEdit recipe={this.props.recipe} toggle={this.toggleEdit} update={this.props.update}/>
                );
            }
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
        );
    }

});

module.exports = Recipe;
