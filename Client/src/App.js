import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import Error404 from './components/error404/Error404';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


// eslint-disable-next-line

const URL = 'http://localhost:3001/rickandmorty/login/';
// const EMAIL = 'ejemplo@gmail.com';
// const PASSWORD = '1ABcde';


function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [ characters,  setCharacters ] = useState([]);
   const [ access, setAccess ] = useState( false );
   

   const login = async ( userData ) => {
      try {
         const { email, password } = userData;
         const { data } = await axios( URL + `?email=${ email }&password=${ password }` );
         const { access } = data;
         
             setAccess(access);
            access && navigate('/home');

      } catch ( error ) {
         console.error( error.message );
      }
   }

   useEffect(() => {
      !access && navigate( '/' );
   }, [ access, navigate ]);

   const onSearch = async ( id ) => {
      try {
         const { data } = await axios( `http://localhost:3001/rickandmorty/character/${ id }` );
         
         if ( data.name ) {
            const isDuplicate = characters.some( ( character ) => character.id === data.id );
            if ( isDuplicate ) {
               return alert( '¡Este personaje ya está en la lista!' );
            }
            setCharacters(( oldChars ) => [ ...oldChars, data ]);
         }

      } catch ( error ) {
         alert( '¡No hay personajes con este ID!' );
      }
   }

   const onClose = ( id ) => {
      const charactersFiltered = characters.filter( character => 
         character.id !== Number( id ));
      setCharacters( charactersFiltered );
   };


   return (
      <div className='App'>
         { 
            location.pathname !== '/' && <Nav onSearch={ onSearch } setAccess={ setAccess }  /> 
         }
         {/* <Nav onSearch={ onSearch }  />  */}
         <hr />
         <Routes>
            <Route path='/' element={ <Form login={ login }/> } />
            <Route path='/home' element={ <Cards characters={ characters } onClose={ onClose } /> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/detail/:id' element={ <Detail/> } />
             <Route path='favorites' element={ <Favorites/> } />
             <Route path='*' element={ <Error404/> } />
         </Routes>
      </div>
   );
}

export default App;