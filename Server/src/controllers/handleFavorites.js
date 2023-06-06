
let myFavorites = [];

const postFav = ( res, req ) => {
  const character = req.body;

  myFavorites.push( character );

  return res.status( 200 ).json( myFavorites );
};

const deleteFav = ( res, req ) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter( ( favorite ) => 
    favorite.id !== +id );

  return res.status( 200 ).json( myFavorites );
};

module.exports = { postFav, deleteFav, };