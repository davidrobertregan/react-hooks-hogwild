import {useState} from 'react'


function NewHogForm({ addHog }) {

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
        if (key === 'greased') {
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

    function onHandleSubmit(e) {
        e.preventDefault()
        addHog(formData)

    }

    return (
        <div id="new-hog-form" style={{margin: '50px', padding: '50px'}}>
            <h3>Submit a new hog</h3>
            <form onSubmit={onHandleSubmit}style={{display: "flex", flexWrap: "wrap",flexDirection: "column", justifyContent: "space-around"}}>
                <label>Name</label>
                    <input onChange={onFormChange} value={formData.name} id="name" type="text"></input>
                <label>Specialty</label>
                    <input onChange={onFormChange} value={formData.specialty} id="specialty"type="text"></input>
                <label>Weight</label>
                    <input onChange={onFormChange} value={formData.weight} id="weight" type="number"></input>
                <label>Highest Medal</label>
                    <select onChange={onFormChange} value={formData['highest medal achieved']}id="highest medal achieved">
                        <option>Gold</option>
                        <option>Silver</option>
                        <option>Bronze</option>
                    </select>
                <label>Greased?</label>
                    <input onChange={onFormChange} checked={formData.greased} id="greased" type="checkbox"></input>
                <label>Image</label>
                    <input onChange={onFormChange} value={formData.image} id="image" type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default NewHogForm