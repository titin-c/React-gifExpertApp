import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   // llamada al custom hooks useFetchGifs
    
   const {data:images, loading} = useFetchGifs( category );
  
    return (
        <>
            <hr></hr>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>

            { loading && <img src='loading-animation.gif' alt='Cargando' className='cargando animate__animated animate__pulse'></img>}
             <div className="card-grid">
                {
                    //mapeamos el array categories para que nos devuelva su contenido
                    //desestructuramos para que nos devuelva el id y el title
                    images.map( img =>(
                    <GifGridItem
                        key={img.id}
                    {...img}
                    />
                        //<li key={id} > {title} </li>
                    ))
                }
            </div> 
        </>
  );
};
