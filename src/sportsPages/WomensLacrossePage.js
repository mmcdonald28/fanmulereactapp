import React, { useState } from 'react';
import { Image, Button } from "@aws-amplify/ui-react";
import mensLacrosseLogo from '../images/lacrosse-logo.jpeg';  // Updated logo import
import '../App.css'; // Import App.css for navbar styles
import './sportsPages.css'; // Import sportPage-specific styles
import '../button.css'; // Import the button styles

import Navbar from '../navBar';

function MensLacrossePage({ signOut, toggleDropdown, dropdownOpen }) {  // Updated component name
  const [activeButton, setActiveButton] = useState({});

  const bettingLines = [
    { id: 1, name: "Team to Win", odds: -110 },
    { id: 2, name: "Total Goals O/U 10.5", odds: -110 },
    { id: 3, name: "Player A Goals O/U 2.5", odds: -110 },
    { id: 4, name: "Player B Goals O/U 2.5", odds: -110 },
    { id: 5, name: "Player C Goals O/U 2.5", odds: -110 },
  ];

  const handleButtonClick = (id, option) => {
    setActiveButton(prevState => ({
      ...prevState,
      [id]: prevState[id] === option ? null : option
    }));
  };

  return (
    <div className="mens-lacrosse-page">  {/* Updated class name */}
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={mensLacrosseLogo} className="sport-logo" alt="Men's Lacrosse Logo" width="50px" height="50px" />  {/* Updated logo source and alt text */}
            <div className="bet-description">{line.name}</div>
            <div>
              {line.id === 1 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'teamA' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'teamA')}
                    style={{ backgroundColor: activeButton[line.id] === 'teamA' ? 'red' : '' }}
                  >
                    Team A (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'teamB' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'teamB')}
                    style={{ backgroundColor: activeButton[line.id] === 'teamB' ? 'red' : '' }}
                  >
                    Team B (-110)
                  </Button>
                </>
              )}
              {line.id === 2 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'over')}
                    style={{ backgroundColor: activeButton[line.id] === 'over' ? 'red' : '' }}
                  >
                    Over (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'under')}
                    style={{ backgroundColor: activeButton[line.id] === 'under' ? 'red' : '' }}
                  >
                    Under (-110)
                  </Button>
                </>
              )}
              {line.id >= 3 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'over')}
                    style={{ backgroundColor: activeButton[line.id] === 'over' ? 'red' : '' }}
                  >
                    Over (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'under')}
                    style={{ backgroundColor: activeButton[line.id] === 'under' ? 'red' : '' }}
                  >
                    Under (-110)
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Button
          className={`button ${activeButton.saveForLater ? 'active' : ''}`}
          onClick={() => handleButtonClick('saveForLater', 'saveForLater')}
          style={{ backgroundColor: activeButton.saveForLater ? 'red' : '' }}
        >
          Save for Later
        </Button>
        <Button
          className={`button ${activeButton.submit ? 'active' : ''}`}
          onClick={() => handleButtonClick('submit', 'submit')}
          style={{ backgroundColor: activeButton.submit ? 'red' : '' }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default MensLacrossePage;  // Updated export name
