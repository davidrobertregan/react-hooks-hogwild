import HogDetails from "./HogDetails"
import { useState } from 'react'

function HogCard({image, name, specialty, weight, greased, medal }) {

const [showDetails, setShowDetails] = useState(false)
const [showHog, setShowHog] = useState(true)

    function handleClick() {
        setShowDetails(!showDetails)
    }

    function handleHideClick() {
        setShowHog(!showHog)
    }

    return (
        <div 
            id="hog-card"
            style={{display: 'flex', flexDirection: "column"}}>
            <button 
                style={{maxWidth: "100px"}}
                onClick={handleHideClick}>
                    {showHog ? 'Hide ' + name : 'Show ' + name}
                </button>
            {showHog ? 
            <>
            <h2>{name}</h2>
            <img 
                style={{maxWidth: '250px'}}
                src={image}
                alt={name}
                onClick={handleClick}>
            </img> </> : <></> }
            {showDetails ? 
                <HogDetails 
                    specialty={specialty}
                    weight={weight}
                    greased={greased}
                    medal={medal}
                /> : <></>
                }
        </div>
    )
}

export default HogCard