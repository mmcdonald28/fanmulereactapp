import React from 'react';
import { Image, View, Button } from "@aws-amplify/ui-react";
import tennisLogo from '../images/tennis-logo.jpeg';
import '../App.css';
import './sportsPages.css';
import Navbar from '../navBar';

function TennisPage({ signOut, toggleDropdown, dropdownOpen }) {
  const bettingLines = [
    { id: 1, name: "Player A to Win", odds: -110 },
    { id: 2, name: "Player B to Win", odds: -110 },
    { id: 3, name: "Total Games Over 22.5", odds: -110 },
    { id: 4, name: "Total Games Under 22.5", odds: -110 },
    { id: 5, name: "Player A to Win Set 1", odds: -110 },
  ];

  return (
    <div className="tennis-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={tennisLogo} className="sport-logo" alt="Tennis Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <Button>{line.odds}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TennisPage;