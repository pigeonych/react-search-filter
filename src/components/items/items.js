import { Component } from "react";
import img from "../../img/img.png";

class Items extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		const {visibleData} = this.props;

		const renderedData = visibleData.map(item => {
			return (
				<div className="item"
					 key={item.key}>
					<img src={img} alt="item" />
					<h2>{item.title}</h2>
					<h3>{item.production}</h3>
					<h3>{"$" + item.cost}</h3>
				</div>
			);
		}) 
		return (
		<div className="Items">
			{renderedData}
		</div>
		);
	}
}

export default Items;