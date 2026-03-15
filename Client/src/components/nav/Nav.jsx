import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line
 export default function Nav ( { onSearch, setAccess } ) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccess( false );
    navigate( '/' );
  };

  const handleRandom = () => {
    const randomId = Math.floor( Math.random() * 826 ) + 1;
    onSearch( randomId );
  };
 
  return (
    <nav>
      <SearchBar onSearch={ onSearch } />
      <button onClick={ handleRandom }>Random</button>
      <button>
        <Link to='/about' >About |</Link>
      </button>
      <button>
        <Link to='/home' > Home |</Link>
      </button>
      <button>
        <Link to='/favorites' > Favorites |</Link>
      </button>
      <button onClick={ handleLogout }>Log out</button>
    </nav>
  );
}
