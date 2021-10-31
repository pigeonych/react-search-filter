import { Component } from 'react';


import FilterItem from "../filterItem/filterItem";
import SearchItems from "../searchItem/searchItem";
import Items from "../items/items";

import '../css/App.css';

class App extends Component {
	state = {
		data: [
			{title: "Aromistico Coffee", production: "Brazil", cost: 6.99, key: 1},
			{title: "Cappucino Coffee", production: "Kenya", cost: 6.99, key: 2},
			{title: "Americano Coffee", production: "Kenya", cost: 6.99, key: 3},
			{title: "Latte Coffee", production: "Brazil", cost: 6.99, key: 4},
			{title: "Freezed Latte Coffee", production: "Columbia", cost: 6.99, key: 5},
			{title: "Freezed Cappucino Coffee", production: "Columbia", cost: 6.99, key: 6}
		],
		term: "",
		filter: "all"
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.title.indexOf(term) > -1;
		});
	}

	filterPost = (items, filter) => {
		switch(filter) {
			case "Brazil": 
				return items.filter(item => item.production === "Brazil");
			case "Kenya":
				return items.filter(item => item.production === "Kenya");
			case "Columbia":
				return items.filter(item => item.production === "Columbia");
			default: 
				return items;
		}
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}

	onUpdateFilter= (filter) => {
		this.setState({filter});
	}


	render() {
		const {data, term, filter} = this.state;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className="App">
				<div className="barWrapper">
					<h2>Search for items: </h2>
					<SearchItems onUpdateSearch={this.onUpdateSearch}/>
					<h2>Filter: </h2>
					<FilterItem onUpdateFilter={this.onUpdateFilter}
								filter={filter}/>
				</div>
				<div className="itemWrapper">
					<Items visibleData={visibleData}/>
				</div>
			</div>
		  );
	}
}

export default App;
