const apiKey = 'SjJfWDe3DDb9QYoA3Ax1sRnrDGmAxHSr';
const urlApi = 'https://api.giphy.com/v1/gifs/search';

export const getGirfs = async (category) => {

    const resp = await fetch(`${urlApi}?api_key=${apiKey}&q=${category}&limit=10`);
    const { data } = await resp.json()

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        })
    );
    return gifs;
};

