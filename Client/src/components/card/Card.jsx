import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


// { id, name, status, species, gender, image, origin }

function Card ( { id, name, status, species, gender, image, origin, onClose, addFav, removeFav, myFavorites } ) {
   
   const [ isFav, setIsFav ] = useState( false );

   const handleFavorite = () => {
      if ( isFav ) {
         setIsFav( false );
         removeFav( id );
      } else {
         setIsFav( true );
         addFav({ id, name, status, species, gender, image, origin, onClose })
      }
   };

   useEffect( () => {
      myFavorites.forEach(( fav ) => {
         if ( fav.id === id ) {
            setIsFav( true );
         }
      });
   }, [id, myFavorites]);

   return (
         <div className={ styles.container }>

            <button onClick={ handleFavorite }>{ isFav ? '❤' : '🤍' }</button>

            <div className={ styles.buttonContainer }>
               <button onClick={ () => onClose( id ) }>X</button>
            </div>

            <div className={ styles.dataContainer }>
               <Link to={ `/detail/${ id }` }>
                  <h2>{ name }</h2>
               </Link>
               <h3>{ status }</h3>
               <h3>{ species }</h3>
               <h3>{ gender }</h3>
               <h3>{ origin }</h3>
            </div>
            <img src={ image } alt={ name } />
         </div>
   );
}

const mapStateToProps = ( state ) => {
   return {
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = ( dispatch )  => {
   return {
      addFav: ( character ) => { dispatch( addFav( character ) ) },
      removeFav: ( id ) => { dispatch( removeFav( id ) ) },
   }
};

export default connect( mapStateToProps, mapDispatchToProps )(Card);