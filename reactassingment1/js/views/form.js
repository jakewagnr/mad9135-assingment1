let addNewForm = React.createClass({
    propTypes: {
        newCoffee: React.PropTypes.object.isRequired,
        coffee: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.newCoffee, {name: e.target.value}));
    },
    onDescriptionChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.newCoffee, {description: e.target.value}));
    },
    onSubmit: function() {
        this.props.onSubmit(this.props.newCoffee);
    },
    render: function() {
        return (
            React.createElement("form", {},
                React.createElement("input", {
                    type: "text",
                    placeholder: "Name",
                    value: this.props.newCoffee.name,
                    onChange: this.onNameChange
                }),
                React.createElement("textarea", {
                    placeholder: "Description",
                    value: this.props.newCoffee.description,
                    onChange: this.onDescriptionChange
                }),
                React.createElement("button", {type: "button", onClick: this.onSubmit}, "Submit")
            )
        )
    }
});

let addNewPage = React.createClass({
    propTypes: {
        newCoffee:React.PropTypes.object.isRequired,
        coffee: React.PropTypes.array.isRequired,
        onNewCoffee: React.PropTypes.func.isRequired,
        onSubmitNewItem: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement(addNewForm, {newCoffee: this.props.newCoffee, coffee: this.props.coffee, onChange: this.props.onNewCoffee, onSubmit: this.props.onSubmitNewItem})
            )
        )
    }
});