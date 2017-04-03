var React = require('react');

var RecipeEdit = React.createClass({
    getInitialState: function() {
        return {id: null, title: '', ingredients: ''};
    },

    componentDidMount: function() {
        let title = this.props.recipe.title;
        let ingredients = this.props.recipe.ingredients;
        let id = this.props.recipe.id;
        this.setState({id: id, title: title, ingredients: ingredients});
    },

    saveRecipe: function(e) {
        let ingredients = this.state.ingredients.split(',');
        ingredients = ingredients.map(x => x.trim()).join(',');
        this.setState({ingredients: ingredients});
        this.props.update(this.state);
        this.props.toggle();
    },

    handleTitleChange: function(e) {
        let title = e.target.value;
        this.setState({title: title});
    },

    handleIngredientChange: function(e) {
        let ingredients = e.target.value;
        this.setState({ingredients: ingredients});
    },

    render: function() {
        return (
            <div className="panel-body">
                <h4 >Edit Recipe</h4>
                <form>
                    <div className="form-group">
                        <label className="control-label" htmlFor="title">Recipe</label>
                        <input type="text" className="form-control" id="title" placeholder="Recipe Name" onChange={this.handleTitleChange} value={this.state.title}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="ingredients">Ingredients</label>
                        <input type="text" className="form-control" id="ingredients" placeholder="Enter Ingredients seperated by a commas." onChange={this.handleIngredientChange} value={this.state.ingredients}/>
                    </div>
                </form>
                <div className="row">
                    <div className="col-xs-6">
                        <button type="button" className="btn btn-default btn-block" onClick={this.props.toggle}>Cancel</button>

                    </div>
                    <div className="col-xs-6">
                        <button type="button" className="btn btn-primary btn-block" onClick={this.saveRecipe}>Save Recipe</button>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = RecipeEdit;
