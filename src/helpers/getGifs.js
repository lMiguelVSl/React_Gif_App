export const getGifs = async (category) => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=RQI7a9UnR0wgafKcyoLoiTbp16asJHL6&q=${category}&limit=10`);
    const { data } = await res.json();

    const gifsMap = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifsMap;
}