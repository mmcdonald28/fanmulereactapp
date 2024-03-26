import React from 'react';
import './App.css';
import GoodSignUp from './ui-components/GoodSignUp';
import logo2 from './logo_2.png';
import logo3 from './logo.svg'

function App() {
  
  const GoodSignUpOverrides = {
    "Logo": {
      path: "./logo.svg" // Replace this path with the path to your new logo image
    }
  };

  return (
    <div className="App">
      {/* Include the GoodSignUp component with the logo prop */}
      <GoodSignUp overrides={GoodSignUpOverrides} />
    </div>
  );
}

export default App;

