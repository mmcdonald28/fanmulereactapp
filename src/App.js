import React from 'react';
import './App.css';
//import GoodSignUp from './ui-components/GoodSignUp';
import MainPage from './ui-components/MainPage';
import "@aws-amplify/ui-react/styles.css";
import logo2 from './logo_2.png';
import logo from './logo.svg'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
 
 <MainPage />

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
    <div className="App">
       <MainPage />
       <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(App);


