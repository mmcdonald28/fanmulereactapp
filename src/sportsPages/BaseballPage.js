import React from 'react';
import { Image, View, Button } from "@aws-amplify/ui-react";
import baseballLogo from '../images/baseball-logo.png';
import '../App.css';
import './sportsPages.css';
import Navbar from '../navBar';

function BaseballPage({ signOut, toggleDropdown, dropdownOpen }) {
  const bettingLines = [
    { id: 1, name: "Team A to Win", odds: -110 },
    { id: 2, name: "Team B to Win", odds: -110 },
    { id: 3, name: "Total Runs Over 8.5", odds: -110 },
    { id: 4, name: "Total Runs Under 8.5", odds: -110 },
    { id: 5, name: "Player A to Hit a Home Run", odds: -110 },
  ];

  return (
    <div className="baseball-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={baseballLogo} className="sport-logo" alt="Baseball Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <Button>{line.odds}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BaseballPage;