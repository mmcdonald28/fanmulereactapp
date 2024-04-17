import React from 'react';
import { Image, View, Button } from "@aws-amplify/ui-react";
import tfLogo from '../images/tandf-logo.jpeg';
import '../App.css';
import './sportsPages.css';
import Navbar from '../navBar';

function TFPage({ signOut, toggleDropdown, dropdownOpen }) {
  const bettingLines = [
    { id: 1, name: "Team A to Win", odds: -110 },
    { id: 2, name: "Team B to Win", odds: -110 },
    { id: 3, name: "Total Points Over 180.5", odds: -110 },
    { id: 4, name: "Total Points Under 180.5", odds: -110 },
    { id: 5, name: "Player A to Win 100m Dash", odds: -110 },
  ];

  return (
    <div className="tf-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={tfLogo} className="sport-logo" alt="Track and Field Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <Button>{line.odds}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TFPage;