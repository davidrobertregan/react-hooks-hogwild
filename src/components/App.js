import React, {useState} from "react";
import Nav from "./Nav";
import FormBar from "./FormBar";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {

	const [currentHogs, setCurrentHogs] = useState(hogs)

	function greaseFilter(isChecked) {
		isChecked ? setCurrentHogs(hogs.filter(hog => hog.greased === true)) :
		setCurrentHogs(hogs)
	}

	function sortByFun(sortBy){
		if (sortBy === 'all') { 
			return setCurrentHogs(hogs) 
		}
		else if (sortBy === 'name') {
			setCurrentHogs([...hogs].sort((a, b) => {
				if(a.name < b.name) {return -1}
				if(a.name > b.name) {return 1}
				return 0
			}))
		}
		else if (sortBy === 'weight') {
			setCurrentHogs([...hogs].sort((a, b) => {
				return b.weight - a.weight;
			}))
		}
	}

	console.log(hogs)


	return (
		<div className="App">
			<Nav />
			<FormBar greaseFilter={greaseFilter} sortByFun={sortByFun}/>
			<HogList hogs={currentHogs}/>
		</div>
	);
}

export default App;
