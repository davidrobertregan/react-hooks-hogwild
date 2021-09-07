function HogDetails( { specialty, weight, greased, medal}) {
    return (
        <div className="details">
            <p>{specialty}</p>
            <p>{weight} lbs</p>
            <p>{greased}</p>
            <p>{medal}</p>
        </div>
    )
}

export default HogDetails