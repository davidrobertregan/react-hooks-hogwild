
import {useState} from 'react'
import Checkbox from "./Checkbox"
import NewHogForm from './NewHogForm'

function FormBar( { greaseFilter, sortByFun }) {
    
    const [isChecked, setIsChecked] = useState(false)
    const [sortBy, setSortBy] = useState("all")
    const [viewForm, setViewForm] = useState(false)

    function handleCheck() {
        setIsChecked(!isChecked)
        greaseFilter(!isChecked)
    }

    // sortBy value is behind in function... need state to change within fun

    function handleChange(e){
        setSortBy((sortBy) => sortBy = e.target.value)
        sortByFun(e.target.value)
    }
    
    function handleClick() {
        setViewForm(!viewForm)
    }
    
    return (
        <div id="form-bar">
            <h3>Filter and Sort Hogs</h3>
            <select 
                value={sortBy}
                onChange={handleChange}>
                <option value='all'>All</option>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
            <Checkbox 
                handleCheck={handleCheck} 
                isChecked={isChecked}
                label={"Greased"}/>
            <button onClick={handleClick}>{viewForm ? 'Hide Hog Form' : 'View Hog Form'}</button>
            {viewForm ? <NewHogForm /> : <></>}
        </div>
    )
}

export default FormBar