import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";


// eslint-disable-next-line
/**
 * @description
 * @param { string } onSearch function que trae los ID de la API
 * @returns 
 */
 export default function Nav ( { onSearch } ) {

  const handleLogout = () => {
    // Eliminar los permisos de acceso aquí
    // Por ejemplo, puedes borrar el token de autenticación almacenado en el localStorage o en el estado global

    // Redirigir al componente Form
    setAccess( false );
  };
  
  return (
    <nav>
      <SearchBar onSearch={ onSearch } />
      <button>
        <Link to='/about' >About |</Link>
      </button>
      <button>
        <Link to='/home' > Home |</Link>
      </button>
      <button cnClick={ handleLogout }>Log out</button>
    </nav>
  );
}
