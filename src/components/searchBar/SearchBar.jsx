import styles from './SearchBar.module.css';
import { useState } from 'react';

// eslint-disable-next-line
export default function SearchBar ( { onSearch } ) {
   const [ id, setId ] = useState( '' );

   const handleChange = ( event ) => {
      setId( event.target.value );
   };

   return (
      <div className={ styles.container }>
         {
            <>
            <input 
               type='search'
               value={ id }
               onChange={ handleChange }
            />
            <button onClick={ () => { onSearch( id ) }  }>Agregar</button>
            </>
         }
      </div>
   );
}
