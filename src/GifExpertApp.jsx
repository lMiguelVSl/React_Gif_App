import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

    const addCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={addCategory} />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}