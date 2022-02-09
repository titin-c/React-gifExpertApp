import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   // llamada al custom hooks useFetchGifs
    
   const {data:images, loading} = useFetchGifs( category );
  
    return (
        <>
            <h2 className='animate__animated animate__fadeInDown'>Imagenes de {category}</h2>

            { loading && <p className='cargando animate__animated animate__pulse'>Cargando... </p>} 
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
            <hr></hr>
        </>
  );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
