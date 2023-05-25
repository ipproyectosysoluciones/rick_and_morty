import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
// import Form from './components/form/Form';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useState  } from 'react';


// eslint-disable-next-line
const URL_BASE = 'https://rickandmortyapi.com/api/character';
// const EMAIL = 'ejemplo@gmail.com';
// const PASSWORD = '1ABcde';

/**
 * 
 * @returns 
 */
function App() {

  //  const [ access, setAccess ] = useState( false );

   /**
    * @description Esta función tiene que preguntar si el email y password que declaraste más arriba son iguales a los que les está llegando por parámetro
    * @param { string } userData estado del usuario al hacer el  en el Form
   */
  //  const login = ( userData ) => {
  //     if (userData.password === PASSWORD && userData.email === EMAIL) {
  //        setAccess( true );
  //        navigate( '/home' );
  //     }
  //  };
   
  //  const navigate = useNavigate();
   
  //  useEffect(() => {
  //     !access && navigate('/');
  //  }, [access, navigate]);
   
   const [ characters,  setCharacters ] = useState([]);

   /**
    * @description function onSearch que buscar los personajes de la API R&M
    * @param { number } id ID de los personajes de R&M
    * 
    */
   const onSearch = ( id ) => {
      axios(`${ URL_BASE }/${ id }`)
      .then( resp => resp.data )
      .then(( data ) => {
         if ( data.name ) {
            setCharacters(( oldChars ) => [ ...oldChars, data ]);
         } else {
            window.alert( '¡No hay personajes con este ID!' );
         }
      }, [id]);
   }

   /**
    * @description function que realiza el cierre de las Cards
    * @param { number } id de las personajes de R&M para hacer el cierre de las Cards
    */
   const onClose = ( id ) => {
      const charactersFiltered = characters.filter( character => 
         character.id !== Number( id ));
      setCharacters( charactersFiltered );
   };

  //  const location = useLocation();

   return (
      <div className='App'>
         {/* { 
            location.pathname !== '/' ? <Nav onSearch={ onSearch } setAccess={ setAccess } /> : null 
         } */}
         <Nav onSearch={ onSearch }/>
         <hr />
         <Routes>
            {/* <Route path='/' element={ <Form login={ login } /> } /> */}
            <Route path='home' element={ <Cards characters={ characters } onClose={ onClose } /> } />
            <Route path='about' element={ <About/> } />
            <Route path='detail/:detailId' element={ <Detail/> } />
         </Routes>
      </div>
   );
}

export default App;