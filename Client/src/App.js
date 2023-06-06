import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


// eslint-disable-next-line
// const URL_BASE = 'https://rickandmortyapi.com/api/character';
// const EMAIL = 'ejemplo@gmail.com';
// const PASSWORD = '1ABcde';


function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [ characters,  setCharacters ] = useState([]);
   const [ access, setAccess ] = useState( false );
   

   const login = ( userData ) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios( URL + `?email=${ email }&password=${ password }` )
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate( '/' );
   }, [ access, navigate ]);

   const onSearch = ( id ) => {
      axios( `http://localhost:3001/rickandmorty/character/${ id }` )
      .then(({ data }) => {
         if ( data.name ) {
            setCharacters(( oldChars ) => [ ...oldChars, data ]);
         } else {
            window.alert( '¡No hay personajes con este ID!' );
         }
      });
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
         </Routes>
      </div>
   );
}

export default App;