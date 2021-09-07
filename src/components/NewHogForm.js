import { getByDisplayValue } from '@testing-library/dom'
import {useState} from 'react'


function NewHogForm() {

    const [formData, setFormData] = useState({
        name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "Gold",
    image: ""
    })

    function onFormChange(e) {
        let key = e.target.id
        console.log(e.target.checked)
        if (key === 'greased') {
            console.log('checkbox')
            setFormData({
                ...formData,
                [key]: e.target.checked
            })
        }
        else {
            setFormData({
                ...formData,
                [key]: e.target.value
            })
    }
    }

    return (
        <div id="new-hog-form" style={{margin: '50px', padding: '50px'}}>
            <h3>Submit a new hog</h3>
            <form style={{display: "flex", flexWrap: "wrap",flexDirection: "column", justifyContent: "space-around"}}>
                <label for="name">Name</label>
                    <input onChange={onFormChange} value={formData.name} id="name" type="text"></input>
                <label for="specialty">Specialty</label>
                    <input onChange={onFormChange} value={formData.specialty} id="specialty"type="text"></input>
                <label for="weight">Weight</label>
                    <input onChange={onFormChange} value={formData.weight} id="weight" type="number"></input>
                <label for="highest medal achieved">Highest Medal</label>
                    <select onChange={onFormChange} value={formData['highest medal achieved']}id="highest medal achieved">
                        <option>Gold</option>
                        <option>Silver</option>
                        <option>Bronze</option>
                    </select>
                <label for="greased">Greased?</label>
                    <input onChange={onFormChange} checked={formData.greased} id="greased" type="checkbox"></input>
                <label for="image">Image</label>
                    <input onChange={onFormChange} value={formData.image} id="image" type="text"></input>
            </form>
        </div>
    )
}

export default NewHogForm