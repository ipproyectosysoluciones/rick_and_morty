import Card from "../card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from "react";


const Favorites = ( { myFavorites } ) => {

  const dispatch = useDispatch();
  const [ aux, setAux ] = useState( false );

  const handleOrder = ( event ) => {
    dispatch( orderCards( event.target.value ) );
    setAux( true );
  };

  const handleFilter = ( event ) => {
    dispatch( filterCards( event.target.value ) );
  };

  return (
    <div>
      <select onChange={ handleOrder }>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>

      <select onChange={ handleFilter }>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Gemderless'>Gemder</option>
        <option value='unknown'>Unknown</option>
        <option value='allCharacters'>All Characters</option>
      </select>
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
          onClose={ favorites.onClose }
        />
      ))
    }
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect( mapStateToProps, null )(Favorites);
