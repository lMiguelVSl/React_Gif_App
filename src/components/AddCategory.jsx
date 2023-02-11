import { useState } from "react"

export const AddCategory = ({ onNewCategorie }) => {

    const [value, setInputValue] = useState('');

    const handleInputChange = (event) => {
        if (event.target.value.trim().lenght <= 1) return;
        setInputValue(event.target.value.trim());
    }

    const onSubmit = (event) => {
        event.preventDefault();
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