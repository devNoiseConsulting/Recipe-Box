var React = require('react');

var RecipeModal = React.createClass({
    getInitialState: function() {
        return {id: null, title: '', ingredients: ''};
    },

    addRecipe: function(e) {
        let ingredients = this.state.ingredients.split(',');
        ingredients = ingredients.map(x => x.trim());
        let recipe = {
            title: this.state.title,
            ingredients: ingredients
        };
        this.props.modalState.submit(recipe);
        this.setState(this.getInitialState());
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
        let title = this.props.title;
        let ingredients = this.props.ingredients;
        let modalState = this.props.modalState;

        return (
            <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title" id="recipeModalLabel">{modalState.submitText}</h4>
                        </div>
                        <div className="modal-body">
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
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addRecipe}>{modalState.submitText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RecipeModal;
