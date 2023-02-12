import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [value, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value.trim());
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('value', value);
        if (value.length <= 1) return;
        onNewCategory(value);
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