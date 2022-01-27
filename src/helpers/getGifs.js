export const getGifs = async( category )=>{
    const imgCantidad = 12;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=${ imgCantidad }&api_key=7BuUctEE8JtXBENsMPpXpTFFTSH5LDBW`;
    
    const resp = await fetch(url);
    //Desestructuración de data para que solo muestre lo que necesito
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return gifs;
  }