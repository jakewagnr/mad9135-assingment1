let header = React.createClass({
    render: function () {

        return(
            React.createElement('div',{id:'header'}),
            React.createElement('img',{id:'header-img',src:'img/coffeebeans.jpg'}),
                React.createElement('h1',{id:'header-text'},'Coffees of the World')
        )
        
    }
});

let navBar = React.createClass({
    render: function () {
        return(
            React.createElement('div',{id:'navbar'}),
                React.createElement('ul',{id:'navbarList'},
                React.createElement('li',{id:'itemList', key:"M1"},
                    React.createElement('a',{href:'#list'},'Coffees')),
                React.createElement('li',{id:'newItem', key:"M2"},
                    React.createElement('a',{href:'#new'},'Add Coffee'))
        )
        )
    }
});


let coffee = React.createClass({
    propTypes: {
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement("li", {key: this.props.id},
                React.createElement("a", {className: "link", href: "#/item/" + this.props.id},
                    React.createElement("div", {className: "name"}, this.props.name),
                    React.createElement("div", {}, this.props.description)
                )
            )
        )
    }
});


let itemLists = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement("ul", {}, this.props.items.map(i => React.createElement(coffee, i)))
        )
    }
});


let mainPage = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement(itemLists, {items: this.props.items})
        )
    }
});




