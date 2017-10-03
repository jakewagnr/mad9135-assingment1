let itemDetail = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h2", {}, this.props.name),
                React.createElement("p", {}, this.props.description)
            )
        )
    }
});