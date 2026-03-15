import styles from './Detail.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail () {
  
  const { id } = useParams();
  const [ character, setCharacter ] = useState({});

  useEffect(() => {
      axios( `http://localhost:3001/rickandmorty/character/${ id }` ).then(( {data} ) => {
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
      <div className={ styles.container }>
        <div className={ styles.imageWrapper }>
          <img src={ character.image } alt={ character.name } />
        </div>
        <div>
          <h2>{ character.name }</h2>
          <div className={ styles.infoBlock }>
            <h3><span className={ styles.label }>Status: </span>{ character.status }</h3>
            <h3><span className={ styles.label }>Species: </span>{ character.species }</h3>
            <h3><span className={ styles.label }>Gender: </span>{ character.gender }</h3>
            <h3><span className={ styles.label }>Origin: </span>{ character.origin?.name }</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
