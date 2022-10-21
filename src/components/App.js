import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";

import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [filterGrease, setFilterGrease] = useState(false)
	const [sortBy, setSortBy] = useState("name")

	const filteredHogs = hogs.filter(hog => filterGrease ? hog.greased : hog).sort((hog1, hog2) => sortBy === "name" ? hog1.name.localeCompare(hog2.name) : hog1.weight - hog2.weight)

	const renderHogs = filteredHogs.map(hog => <HogCard key={hog.name} hog={hog} />)

	return (
		<div className="App">
			<Nav />
			<Filter filterGrease={filterGrease} setFilterGrease={setFilterGrease} sortBy={sortBy} setSortBy={setSortBy} />
			{renderHogs}
		</div>
	);
}

export default App;
