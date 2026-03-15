const app = require( '../src/app' );
const session = require( 'supertest' );
const agent = session( app );

describe( 'Test de RUTAS', () => {

  describe( 'GET /rickandmorty/character/:id', () => {

    it( 'Responde con status: 200', async () => {
      await agent.get( '/rickandmorty/character/1' ).expect( 200 );
    });

    it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get( '/rickandmorty/character/1' );
      expect( response.body ).toHaveProperty( 'id' );
      expect( response.body ).toHaveProperty( 'name' );
      expect( response.body ).toHaveProperty( 'species' );
      expect( response.body ).toHaveProperty( 'gender' );
      expect( response.body ).toHaveProperty( 'status' );
      expect( response.body ).toHaveProperty( 'origin' );
      expect( response.body ).toHaveProperty( 'image' );
    });

    it( 'Si hay un error responde con status: 500', async () => {
      await agent.get( '/rickandmorty/character/99999' ).expect( 500 );
    });

  });

  describe( 'GET /rickandmorty/login', () => {

    it( 'Si las credenciales son correctas, responde con access: true', async () => {
      const response = await agent.get(
        '/rickandmorty/login?email=ejemplo@gmail.com&password=1ABcde'
      );
      expect( response.body ).toEqual( { access: true } );
    });

    it( 'Si las credenciales son incorrectas, responde con access: false', async () => {
      const response = await agent.get(
        '/rickandmorty/login?email=wrong@gmail.com&password=wrong'
      );
      expect( response.body ).toEqual( { access: false } );
    });

  });

  describe( 'POST /rickandmorty/fav', () => {

    const character1 = { id: 1, name: 'Rick Sanchez' };
    const character2 = { id: 2, name: 'Morty Smith' };

    it( 'Lo que se envía por body debe ser devuelto en un arreglo', async () => {
      const response = await agent
        .post( '/rickandmorty/fav' )
        .send( character1 );
      expect( response.body ).toBeInstanceOf( Array );
      expect( response.body ).toContainEqual( character1 );
    });

    it( 'Si se envía un nuevo elemento por body, debe ser devuelto en un arreglo que incluye el elemento previo', async () => {
      const response = await agent
        .post( '/rickandmorty/fav' )
        .send( character2 );
      expect( response.body ).toBeInstanceOf( Array );
      expect( response.body ).toContainEqual( character1 );
      expect( response.body ).toContainEqual( character2 );
    });

  });

  describe( 'DELETE /rickandmorty/fav/:id', () => {

    it( 'Si el ID no corresponde a ningún personaje, devuelve el arreglo sin modificar', async () => {
      const response = await agent.delete( '/rickandmorty/fav/999' );
      expect( response.body ).toBeInstanceOf( Array );
      expect( response.body.length ).toBe( 2 );
    });

    it( 'Cuando se envía un ID válido, se elimina correctamente al personaje', async () => {
      const response = await agent.delete( '/rickandmorty/fav/1' );
      expect( response.body ).toBeInstanceOf( Array );
      expect( response.body ).not.toContainEqual(
        expect.objectContaining( { id: 1 } )
      );
      expect( response.body ).toContainEqual(
        expect.objectContaining( { id: 2 } )
      );
    });

  });

});
