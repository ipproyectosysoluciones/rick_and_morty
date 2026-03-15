import Card from "../card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards, removeFav } from '../../redux/actions';
import { useState } from "react";
import styles from './Favorites.module.css';

const Favorites = ( { myFavorites } ) => {
  
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [ aux, setAux ] = useState( false );

  const handleOrder = ( event ) => {
    dispatch( orderCards( event.target.value ) );
    setAux( !aux );
  };

  const handleFilter = ( event ) => {
    dispatch( filterCards( event.target.value ) );
  };

  const handleClose = ( id ) => {
    dispatch( removeFav( id ) );
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.controls }>
        <select className={ styles.select } onChange={ handleOrder }>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
        </select>

        <select className={ styles.select } onChange={ handleFilter }>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
          <option value='allCharacters'>All Characters</option>
        </select>
      </div>
      <div className={ styles.favoritesGrid }>
      {
        myFavorites?.map( favorites => (
          <Card 
            key={ favorites.id }
            id={ favorites.id }
            name={ favorites.name }
            status={ favorites.status }
            species={ favorites.species }
            gender={ favorites.gender }
            origin={ favorites.origin?.name }
            image={ favorites.image }
            onClose={ handleClose }
          />
        ))
      }
      </div>
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect( mapStateToProps, null )(Favorites);
