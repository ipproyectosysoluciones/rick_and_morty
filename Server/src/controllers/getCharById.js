const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require( 'axios' );


const getCharById = ( res, req ) => {

  const { id } = req.params;

  axios( URL + id )
  .then( response => response.data )
  .then( ({ name, gender, species, origin, image, status })  => {
    if ( name ) {
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      }
      return res.status( 200 ).json( character );
    }
    return res.status( 404 ).send( 'Not Found' );
  })
  .catch( error => res.status( 500 ).send( error.message ));
}

module.exports = { getCharById };