var React = require('react');

var RecipeModal = React.createClass({
    render: function() {
        return (
            <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title" id="recipeModalLabel">Add a Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label className="control-label" htmlFor="recipe">Recipe</label>
                                    <input type="text" className="form-control" id="recipe" placeholder="Recipe Name"/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" htmlFor="ingredients">Ingredients</label>
                                    <input type="text" className="form-control" id="ingredients" placeholder="Enter Ingredients seperated by a commas."/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Add Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RecipeModal;
