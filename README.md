Search & Filter constructor created via React Components

Here we have 4 component folders: 
- app
- items
- filterItem
- searchItem

These folders all include script and stylesheet files:
- %foldername%.js
- _%foldername%.scss

items.js:

<Items /> class component takes props from App.js as an array of objects:
		const {visibleData} = this.props;
Via map() method we construct standard layout in view of cards (can be modified any way) and keep it all in renderedData array.
    renderedData = visibleData.map(...);
Finally we render {renderedData} element of the page.

filerItem.js:

<FilterItem /> functional component uses state raising method in order to manipulate with filter statement of App parental component.
    onClick={() => props.onUpdateFilter(name)}
Initiallly all buttons and their characteristics included into "buttonsData" array state, so we can dynamically render them afterwards.
    const buttonsView = buttonsData.map(...)
Each button then takes active class: "All" statement as default and "clazz" once it is clicked
    const active = props.filter === name;
		const clazz = active ? "btn-light" : null;
Now we render {buttonsView} element of the page.

searchItem.js: 

<SearchItem /> takes one and only property onUpdateSearch method came from parental component App.js
  	const production = e.target.value;
		this.setState({production});
		this.props.onUpdateSearch(production);
Also, you can see the we have "production" constant that takes value from the input and sets it into inner state, which afterwards goes into onUpdateSearch(production) as a parameter. Here we also use state raising method.

Then what is the difference between <FilterItem /> raising statement method and the last one?

The difference is that we do not need to keep, or better to say rewrite, "name" statement in first component as it already exist in there. We just need to send it to the parental class via raising statement method.

Then, we ensure adding event listener into input via:
    onChange={this.onUpdateSearch}
    
app.js:

Nothing crucial to say about, at least we have imitated data being kept on state and all logical methods to work with data:

Function of searching coincidences:

searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.title.indexOf(term) > -1;
		});
}

Note, that here "item.title" is checked, so if you wish to search other classifications you need to change this statement.

Function of filtering by division:

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

Note, that here we have divisions by the production placement: "Brazil", "Kenya"...
So change the case sides if you making different division types.
The logic of the data filtering method should also be changed depending on the requirements.

In order to run the project write in terminal:
npm i
npm start

All the other commands can be found in package.json file.
