import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data:[],
        loading: true
    });


   
   /*

    Esto hace que cuando se cargue el componente por primera vez, lance la petición 
    para cargar las imagenes

    coge los gifs getGif y los pone en setImages

    Usamos useEffects de react para que no renderice la página 
    cada vez que note un cambio
    
    */ 
    useEffect(() => {
        
       getGifs( category )
         .then( imgs => {

            setTimeout( ()=>{

             setState({
                 data: imgs,
                 loading: false
             });
            },3000);

         })
            
           


    }, [category]);


    


    return state;
}