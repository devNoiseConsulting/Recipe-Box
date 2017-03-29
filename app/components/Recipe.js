var React = require('react');
var Ingredient = require('./Ingredient');

var Recipe = React.createClass({

    render: function() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    {this.props.recipe.title}
                </div>
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
                            <button type="button" className="btn btn-danger btn-block">Delete</button>
                        </div>
                        <div className="col-xs-6">
                            <button type="button" className="btn btn-primary btn-block">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Recipe;
