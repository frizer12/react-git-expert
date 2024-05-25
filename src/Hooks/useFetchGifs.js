import { useEffect, useState } from "react";
import { getGirfs } from '../Helpers/GetGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async () => {
        const NewImages = await getGirfs(category);
        setImages(NewImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImagenes();
    }, []);

    return { images, isLoading }
}

