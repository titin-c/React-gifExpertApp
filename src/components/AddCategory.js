import React, {useState} from 'react';
import PropTypes  from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setImputValue] = useState('');

    const handleImputChange = (e) => {
        setImputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        //Esto hace que no se refresque la página por defecto al enviar forms
        e.preventDefault();  


        // si la longitud , sin espacios, de valor del impurt es mayor a 0
        if(inputValue.trim().length > 0){
            // Añadimos el valor del input al array de categories
            setCategories( cats => [inputValue, ...cats]); 
            // y vaciamos el inputValue para que no se repita
            setImputValue('');
        }
        
        
    }

  return (
    <div className='buscador'>
        <div>Buscador de GIF's:</div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Inserta un Personaje...'
                value={inputValue}
                onChange={handleImputChange}
                >
            </input>
            <button type='submit' >Buscar</button>
        </form>
    </div>
  )
};

/*Es buena practica poner las funciones y valores requeridos en los componentes 
Por si otro programador coge tus componentes... 

a
Aqui indicamos que el componente AddCategory 
necesita obligatoriamente de la función  setCategory
*/

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 