import React, { useState } from 'react';
import { Image, Button } from "@aws-amplify/ui-react";
import baseballLogo from '../images/baseball-logo.png';
import '../App.css';
import './sportsPages.css';
import '../button.css'; // Update the import path
import Navbar from '../navBar';

function BaseballPage({ signOut, toggleDropdown, dropdownOpen }) {
  const [activeButton, setActiveButton] = useState({});

  const bettingLines = [
    { id: 1, name: "Team A to Win", odds: -110 },
    { id: 2, name: "Team B to Win", odds: -110 },
    { id: 3, name: "Total Runs Over 8.5", odds: -110 },
    { id: 4, name: "Total Runs Under 8.5", odds: -110 },
    { id: 5, name: "Player A to Hit a Home Run", odds: -110 },
  ];

  const handleButtonClick = (id, option) => {
    setActiveButton(prevState => ({
      ...prevState,
      [id]: prevState[id] === option ? null : option
    }));
  };

  return (
    <div className="baseball-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={baseballLogo} className="sport-logo" alt="Baseball Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <div>
              {line.id === 1 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'teamA' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'teamA')}
                  >
                    Team A (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'teamB' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'teamB')}
                  >
                    Team B (-110)
                  </Button>
                </>
              )}
              {line.id === 2 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'teamA' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'teamA')}
                  >
                    Team A (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'teamB' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'teamB')}
                  >
                    Team B (-110)
                  </Button>
                </>
              )}
              {line.id === 3 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'over')}
                  >
                    Over (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'under')}
                  >
                    Under (-110)
                  </Button>
                </>
              )}
              {line.id === 4 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'over')}
                  >
                    Over (-110)
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'under')}
                  >
                    Under (-110)
                  </Button>
                </>
              )}
              {line.id === 5 && (
                <Button 
                  className={`button ${activeButton[line.id] === 'playerA' ? 'active' : ''}`} 
                  onClick={() => handleButtonClick(line.id, 'playerA')}
                >
                  Player A to Hit a Home Run (-110)
                </Button>
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

export default BaseballPage;
