const FilterItem = (props) => {
	const buttonsData = [
		{name: "all", label: "All"},
		{name: "Brazil", label: "Brazil"},
		{name: "Kenya", label: "Kenya"},
		{name: "Columbia", label: "Columbia"},
	];

	const buttonsView = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? "btn-light" : null;
		return (
			<button className = {clazz}
					type="button"
					key={name}
					onClick={() => props.onUpdateFilter(name)}>
				{label}
			</button>
		);
	})
	return (
		<div className="FilterItem">
			{buttonsView}
		</div>
	);
}

export default FilterItem;