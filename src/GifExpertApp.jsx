import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

    const addCategory = (value) => {
        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategorie={addCategory} />

            <ul>
                {
                    categories.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>


        </>
    )
}