import { useState } from 'react';

// eslint-disable-next-line
/**
 * @description
 * @param { string } onSearch function que trae la data desde la App
 * @returns 
 */
export default function SearchBar ( { onSearch } ) {
   const [ id, setId ] = useState( '' );

   /**
    * @description
    * @param { string } event trae el valor del evento del onChange de input que es el ID del personaje
    */
   const handleChange = ( event ) => {
      setId( event.target.value );
   };

   return (
      <div>
         {
            <>
            <input 
               type='search'
               value={ id }
               onChange={ handleChange }
                />
            <button onClick={ () => { onSearch( id ), setId( '' ) } }>Agregar</button>
            </>
         }
      </div>
   );
}
