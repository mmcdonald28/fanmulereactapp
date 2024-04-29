import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, View } from "@aws-amplify/ui-react";
import logo from './images/account icon.jpeg';
import logo2 from './images/logo_2.png';
import './App.css';

function Navbar({ signOut, toggleDropdown, dropdownOpen }) {
  return (
    <View className="navbar">
      <Image src={logo2} className="navbar-logo-left" alt="logo" width="50px" height="50px" />
      
      <div className="navbar-links">
        <NavLink to="/menslacrosse">Mens Lacrosse</NavLink>
        <NavLink to="/womenslacrosse">Womens Lacrosse</NavLink>
        <NavLink to="/baseball">Baseball</NavLink>
        <NavLink to="/softball">Softball</NavLink>
        <NavLink to="/trackandfield">Track/Field</NavLink>
      </div>
      
      <div className="navbar-account" onClick={toggleDropdown}>
        <img src={logo} alt="account" />
        {dropdownOpen && (
          <div className="dropdown-content">
            <p>Account name: John Doe</p>
            <p>Coins: 100</p>
            <button className="dropdown-btn" onClick={signOut}>Sign Out</button>
          </div>
        )}
      </div>
    </View>
  );
}

export default Navbar;
