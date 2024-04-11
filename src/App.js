import React from 'react';
import './App.css';
//import GoodSignUp from './ui-components/GoodSignUp';
import MainPage from './ui-components/MainPage';
import TFPage from './ui-components/TFPage';
import BaseballPage from './ui-components/BaseballPage';
import LacrossePage from './ui-components/LacrossePage';
import TennisPage from './ui-components/TennisPage';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import FanMuleLogo from './ui-components/FanMuleLogo';
import logo from './logo.svg'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

 <TFPage />


/*function App() {

  const GoodSignUpOverrides = {
    "Logo": {
      path: "./logo.svg" // Replace this path with the path to your new logo image
    }
  };

  return (
    <div className="App">
      {/* Include the GoodSignUp component with the logo prop }
      <GoodSignUp overrides={GoodSignUpOverrides} />
    </div>
  );
}

export default App;*/

function App({ signOut }) {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="navigation">
            <NavLink to="/track-and-field" className="nav-button" activeClassName="active">Track and Field</NavLink>
            <NavLink to="/lacrosse" className="nav-button" activeClassName="active">Lacrosse</NavLink>
            <NavLink to="/baseball" className="nav-button" activeClassName="active">Baseball</NavLink>
            <NavLink to="/tennis" className="nav-button" activeClassName="active">Tennis</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/track-and-field" element={<TFPage />} />
          <Route path="/lacrosse" element={<LacrossePage />} />
          <Route path="/baseball" element={<BaseballPage />} />
          <Route path="/tennis" element={<TennisPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>

        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </Router>
  );
}


export default withAuthenticator(App);




