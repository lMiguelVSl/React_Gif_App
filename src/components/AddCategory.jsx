import { useState } from "react"

export const AddCategory = ({ onNewCategorie }) => {

    const [value, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value.trim());
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('value', value);
        if (value.length <= 1) return;
        onNewCategorie(value);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    className="categoryInput"
                    type="text"
                    value={value}
                    placeholder="Search"
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}