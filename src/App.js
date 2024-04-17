import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import Navbar from './navBar';
import BaseballPage from './sportsPages/BaseballPage';
import LacrossePage from './sportsPages/LacrossePage';
import TennisPage from './sportsPages/TennisPage';
import TFPage from './sportsPages/TFPage';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function Home({ signOut }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
        
        <Routes>
          <Route path="/lacrosse" element={<LacrossePage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/trackandfield" element={<TFPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/baseball" element={<BaseballPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/tennis" element={<TennisPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(Home);