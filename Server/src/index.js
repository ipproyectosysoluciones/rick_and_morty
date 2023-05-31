const http = require( 'http' );
const data = require('./src/utils/data');

const PORT = 3001;
const server = http.createServer( ( res, req ) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*' );

  if ( req.url.includes( '/rickandmorty/character' )) {
    const id = parseInt( req.url.split( '/' ).pop() );
    const character = data.find(( character ) => character.id === id );

    res.setHeader( 'Content-Type', 'application/json' );
    res.end( JSON.stringify( character ) );
  }
});


server.listen( PORT, () => {
  console.log('Servidor escuchando en el puerto 3001');
});

module.exports = server;