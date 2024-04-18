import React, { useState } from 'react';
import { Image, Button } from "@aws-amplify/ui-react";
import tennisLogo from '../images/tennis-logo.jpeg';
import '../App.css';
import './sportsPages.css';
import '../button.css'; // Update the import path
import Navbar from '../navBar';

function TennisPage({ signOut, toggleDropdown, dropdownOpen }) {
  const bettingLines = [
    { id: 1, name: "Player A to Win", odds: -110 },
    { id: 2, name: "Player B to Win", odds: -110 },
    { id: 3, name: "Total Games Over 22.5", odds: -110 },
    { id: 4, name: "Total Games Under 22.5", odds: -110 },
    { id: 5, name: "Player A to Win Set 1", odds: -110 },
  ];

  const [activeButton, setActiveButton] = useState({});

  const handleButtonClick = (id, option) => {
    setActiveButton(prevState => ({
      ...prevState,
      [id]: prevState[id] === option ? null : option
    }));
  };

  return (
    <div className="tennis-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={tennisLogo} className="sport-logo" alt="Tennis Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <div>
              {line.id === 1 && (
                <Button 
                  className={`button ${activeButton[line.id] === 'playerA' ? 'active' : ''}`} 
                  onClick={() => handleButtonClick(line.id, 'playerA')}
                  style={{ backgroundColor: activeButton[line.id] === 'playerA' ? 'red' : '' }}
                >
                  Player A (-110)
                </Button>
              )}
              {line.id === 2 && (
                <Button 
                  className={`button ${activeButton[line.id] === 'playerB' ? 'active' : ''}`} 
                  onClick={() => handleButtonClick(line.id, 'playerB')}
                  style={{ backgroundColor: activeButton[line.id] === 'playerB' ? 'red' : '' }}
                >
                  Player B (-110)
                </Button>
              )}
              {line.id === 3 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'over')}
                    style={{ backgroundColor: activeButton[line.id] === 'over' ? 'red' : '' }}
                  >
                    Over
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'under')}
                    style={{ backgroundColor: activeButton[line.id] === 'under' ? 'red' : '' }}
                  >
                    Under
                  </Button>
                </>
              )}
              {line.id === 4 && (
                <>
                  <Button 
                    className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'over')}
                    style={{ backgroundColor: activeButton[line.id] === 'over' ? 'red' : '' }}
                  >
                    Over
                  </Button>
                  <Button 
                    className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick(line.id, 'under')}
                    style={{ backgroundColor: activeButton[line.id] === 'under' ? 'red' : '' }}
                  >
                    Under
                  </Button>
                </>
              )}
              {line.id === 5 && (
                <Button 
                  className={`button ${activeButton[line.id] === 'playerASet1' ? 'active' : ''}`} 
                  onClick={() => handleButtonClick(line.id, 'playerASet1')}
                  style={{ backgroundColor: activeButton[line.id] === 'playerASet1' ? 'red' : '' }}
                >
                  Player A Set 1 (-110)
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

export default TennisPage;
