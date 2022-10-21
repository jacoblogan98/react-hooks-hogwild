import React from 'react'

function Filter({ filterGrease, setFilterGrease, sortBy, setSortBy }) {
    function toggleGrease() {
        setFilterGrease((filterGrease) => !filterGrease)
    }

    function setSort(e) {
        setSortBy(e.target.value)
    }

    return (
        <>
            <label for="greased">Greased?</label>
            <input type="checkbox" id="greased" value={filterGrease} onClick={toggleGrease} />
            <select value={sortBy} onChange={setSort}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </>
    )
}

export default Filter