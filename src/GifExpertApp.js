
import React,  {useState}  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp  = () =>{

    // const categories = ['Goku', 'pikachu', 'Vegetta'];

    const [categories, setCategories] = useState(['Pikatchu']);

    // función handleAdd
    // const handleAdd = () =>{

    //dos opciones que cogen todas las categorías y le añade heidy al final

    // //setCategories( [...categories, 'Heidy']); 
    // setCategories( cats => [...cats, 'Heidy']); 

    //}

    return (
        <>
        <h2>GifExpertApp</h2>
        {/* añadimos el componente AddCategory*/}
        <AddCategory setCategories = {setCategories}/>
                
            {
                //mapeamos el array categories para que nos devuelva su contenido
                categories.map( category =>(
                    /* añadimos el componente GifGrid*/
                    <GifGrid 
                    // el key es obligatorio y único
                    key={category}
                    category={category} 
                    />
                ))
            }
        
        </>
    );
}

export default GifExpertApp;
