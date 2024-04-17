import React from 'react';
import { Image, View, Button } from "@aws-amplify/ui-react";
import lacrosseLogo from '../images/lacrosse-logo.jpeg';
import '../App.css';  // Import App.css for navbar styles
import './sportsPages.css';  // Import sportPage-specific styles
import Navbar from '../navBar';

function LacrossePage({ signOut, toggleDropdown, dropdownOpen }) {
  const bettingLines = [
    { id: 1, name: "Team to Win", odds: -110 },
    { id: 2, name: "Total Goals O/U 10.5", odds: -110 },
    { id: 3, name: "Player A Goals O/U 2.5", odds: -110 },
    { id: 4, name: "Player B Goals O/U 2.5", odds: -110 },
    { id: 5, name: "Player C Goals O/U 2.5", odds: -110 },
  ];

  return (
    <div className="lacrosse-page">
    <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
    

      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={lacrosseLogo} className="sport-logo" alt="Lacrosse Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <div>
              {line.id === 1 && (
                <>
                  <Button>Team A (-110)</Button>
                  <Button>Team B (-110)</Button>
                </>
              )}
              {line.id === 2 && (
                <>
                  <Button>Over (-110)</Button>
                  <Button>Under (-110)</Button>
                </>
              )}
              {line.id >= 3 && (
                <>
                  <Button>Over (-110)</Button>
                  <Button>Under (-110)</Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LacrossePage;