import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import styles from './Nav.module.css';

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
    <nav className={ styles.nav }>
      <SearchBar onSearch={ onSearch } />
      <button className={ styles.navButton } onClick={ handleRandom }>Random</button>
      <Link className={ styles.navLink } to='/about'>About</Link>
      <Link className={ styles.navLink } to='/home'>Home</Link>
      <Link className={ styles.navLink } to='/favorites'>Favorites</Link>
      <button className={ styles.logoutButton } onClick={ handleLogout }>Log out</button>
    </nav>
  );
}
