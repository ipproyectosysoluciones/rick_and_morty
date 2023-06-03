const http = require( 'node:http' );
const { getCharById } = require( './controllers/getCharById' );

const PORT = 3001;  
const HOST = 'localhost';

http.createServer( ( res, req ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // if ( req.url.includes( '/rickandmorty/character' )) {
  //   const id = req.url.split( '/' ).at( -1 );
  //   const character = data.find(( character ) => character.id === +id );

  //   return res.writeHead( 200, { 'Content-Type': 'application/json' } )
  //   .end( JSON.stringify( character ) );
    
  // }
  if ( req.url.includes( '/rickandmorty/character' ) ) {
    const id = req.url.split( '/' ).at( -1 );

    getCharById( res, +id);
  }
}).listen( PORT, HOST, () => {
  console.log( `Servidor ${ HOST } escuchando en el puerto ${ PORT }`);
});
