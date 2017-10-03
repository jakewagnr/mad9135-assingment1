let state = {};
let setState = function(changes) {
	let component;
	let componentProperties = {};

	Object.assign(state, changes);

	let splitUrl = state.location.replace(/^#\/?|\/$/g, '').split('/');

	switch(splitUrl[0]) {
	case 'new':
		component = addNewPage;
		componentProperties = {
			newCoffee: state.coffee,
			coffee: state.items,
			onNewCoffee: function(item) {
				setState({coffee: item});
			},
			onSubmitNewItem: function(item) {
				console.log(item);
				console.log(state.items);
				let itemList = state.items;
				let newId = itemList.length + 1;
				itemList.push(Object.assign({}, {id: newId}, item));
				setState({items: itemList, coffee: {name: '', description: ''}});
			}
		};
		break;
	case 'item':
		component = itemDetail;
		componentProperties = state.items.find(i => i.id == splitUrl[1]);
		break;
	default:
		component = mainPage;
		componentProperties = {items: state.items};
	}

	let rootElement = React.createElement('div', {},
		React.createElement(header, {}),
		React.createElement(navBar, {}),
		React.createElement(component, componentProperties)
	);

	ReactDOM.render(rootElement, document.getElementById('react-app'));
};
window.addEventListener('hashchange', ()=>setState({location: location.hash}));
setState({itemList: itemList, coffee:{name: '', description:''}, location: location.hash, items: itemList});