
function Checkbox({ isChecked, handleCheck, label}) {
    return (
        <label>
                <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={handleCheck}
                />
                {label}
            </label>
    )
}

export default Checkbox