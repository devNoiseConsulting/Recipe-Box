var React = require('react');

var Ingredient = React.createClass({

    render: function() {
        return (
            <li className="list-group-item">
                {this.props.ingredient}
            </li>
        )
    }

});

module.exports = Ingredient;
