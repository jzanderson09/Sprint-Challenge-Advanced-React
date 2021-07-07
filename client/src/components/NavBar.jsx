import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import './NavBar.scss';

const Navbar = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    props.toggleDarkMode();
  };
  return (
    <nav className={`navbar ${props.darkMode}`}>
        <h1>Players Roster:</h1>
        <button onClick={toggleMode}>Toggle Light/Dark Menu</button>
    </nav>
  );
};

export default Navbar;