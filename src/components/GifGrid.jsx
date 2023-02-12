import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    )
}