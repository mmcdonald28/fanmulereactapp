import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navBar';
import MensLacrossePage from './sportsPages/MensLacrossePage';
import WomensLacrossePage from './sportsPages/WomensLacrossePage';
import BaseballPage from './sportsPages/BaseballPage';
import SoftballPage from './sportsPages/SoftballPage';
import TennisPage from './sportsPages/TennisPage';
import TFPage from './sportsPages/TFPage';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
//import { Authenticator } from 'aws-amplify-react';
// import HomePage from './HomePage';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

// function CustomAuthenticator() {
//   return (
//     <div>
//       <Authenticator />
//     </div>
//   );
// }

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
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/menslacrosse" element={<MensLacrossePage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/womenslacrosse" element={<WomensLacrossePage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/baseball" element={<BaseballPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/softball" element={<SoftballPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/tennis" element={<TennisPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
          <Route path="/trackandfield" element={<TFPage signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(Home);

