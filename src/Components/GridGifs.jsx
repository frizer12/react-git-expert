import GifItem from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

const GridGifs = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        < >
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando..</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) =>
                        <GifItem key={image.id} {...image} />
                    )
                }

            </div>
        </>
    )
}

export default GridGifs
