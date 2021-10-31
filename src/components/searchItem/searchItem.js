import {Component} from "react";

class SearchItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: "Start typing here"
		}
	}

	onUpdateSearch = (e) => {
		const production = e.target.value;
		this.setState({production});

		this.props.onUpdateSearch(production);
	}

	render() {
		return (
			<>
				<input className="SearchItem"
					   type="text" 
					   value={this.state.term}
					   onChange={this.onUpdateSearch}
					   placeholder={this.state.placeholder}/>
			</>
		);
	}
}

export default SearchItem;