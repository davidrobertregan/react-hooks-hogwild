import React, {useState} from "react";
import Nav from "./Nav";
import FormBar from "./FormBar";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {

	const displayHogs = [...hogs]

	const [currentHogs, setCurrentHogs] = useState(displayHogs)

	function addHog(newHog) {
		displayHogs.push(newHog)
		setCurrentHogs(displayHogs)
	}

	function greaseFilter(isChecked) {
		isChecked ? setCurrentHogs(displayHogs.filter(hog => hog.greased === true)) :
		setCurrentHogs(displayHogs)
	}

	function sortByFun(sortBy){
		if (sortBy === 'all') { 
			return setCurrentHogs(displayHogs) 
		}
		else if (sortBy === 'name') {
			setCurrentHogs([...displayHogs].sort((a, b) => {
				if(a.name < b.name) {return -1}
				if(a.name > b.name) {return 1}
				return 0
			}))
		}
		else if (sortBy === 'weight') {
			setCurrentHogs([...displayHogs].sort((a, b) => {
				return b.weight - a.weight;
			}))
		}
	}

	console.log(currentHogs)


	return (
		<div className="App">
			<Nav />
			<FormBar greaseFilter={greaseFilter} sortByFun={sortByFun} addHog={addHog}/>
			<HogList hogs={currentHogs}/>
		</div>
	);
}

export default App;
