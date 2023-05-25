import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// eslint-disable-next-line
const URL_BASE = 'https://rickandmortyapi.com/api/character';

export default function Detail () {
  
  const { id } = useParams();
  const [ character, setCharacter ] = useState({});

  useEffect(() => {
      axios(`${ URL_BASE }/${ id }`).then(( {data} ) => {
        if ( data.name ) {
            setCharacter( data );
        } else {
            window.alert( 'No hay personajes con ese ID' );
        }
      });
      return setCharacter({});
  }, [ id ]);

  
  return(
    <div>
      <div>
        <h2>{ character.name }</h2>
        <h3>{ character.status }</h3>
        <h3>{ character.species }</h3>
        <h3>{ character.gender }</h3>
        <h3>{ character.origin?.name }</h3>
        <img src={ character.image } alt={ character.name } />
      </div>
    </div>
  );
}
