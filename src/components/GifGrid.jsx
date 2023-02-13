import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log('is loading', isLoading)
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ?
                    (<h2>Is Loading...</h2>)
                    : null
            }
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}