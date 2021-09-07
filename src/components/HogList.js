import HogCard from "./HogCard"

function HogList({ hogs }) {

    return (
        <div id="hogs-div"
            style={{display: "flex", flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {hogs.map(hog => 
                <HogCard
                key={hog.name}
                name={hog.name}
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                medal={hog["highest medal achieved"]}
                />)}
        </div>
    )
}

export default HogList 