import React, { useState } from 'react'

function HogCard({ hog }) {
    const [showDetails, setShowDetails] = useState(false)

    function toggleDetails() {
        setShowDetails((showDetails) => !showDetails)
    }

    const details = (
        <>
            <h4>Specialty: {hog.specialty}</h4>
            <h4>Weight: {hog.weight}</h4>
            <h4>Greased: {hog.greased ? "true" : "false"}</h4>
            <h4>Highest Medal: {hog["highest medal achieved"]}</h4>
        </>
    )

    return (
        <div onClick={toggleDetails}>
            <img src={hog.image} alt={hog.name} />
            <h3>{hog.name}</h3>
            {showDetails ? details : null}
        </div>
    )
}

export default HogCard