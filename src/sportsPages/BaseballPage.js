import React, { useState, useEffect } from 'react';
import { Image, Button } from "@aws-amplify/ui-react";
import baseballLogo from '../images/baseball-logo.png';
import '../App.css';
import './sportsPages.css';
import '../button.css'; // Update the import path
import Navbar from '../navBar';
import { listSportingEvents } from '../graphql/queries';
import { Amplify } from 'aws-amplify';
import { generateClient, get } from 'aws-amplify/api';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

function BaseballPage({ signOut, toggleDropdown, dropdownOpen }) {
  const [activeButton, setActiveButton] = useState({});
  const [matches, setMatches] = useState([]);

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

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const matchData = await client.graphql({ query: listSportingEvents});
        setMatches(matchData.data.listSportingEvents.items);
      } catch (err) {
        console.error('Error fetching matches:', err);
      }
    };
    fetchMatches();
  }, []);

  // console.log('matches:', matches)
  // console.log(matches[0].Home)

  return (
    <div className="sports-betting-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
  
      <div className="betting-lines">
        {matches.map((match, index) => (
          <div key={match.id} className="betting-line-item betting-line">
            <Image src={baseballLogo} className="sport-logo" alt="Men's Baseball Logo" width="50px" height="50px" />
            <div className="bet-description">{match.Away} @ {match.Home}</div>
  
            <div className="betting-options">
              <Button className="bet Button point-spread">{match.HomeSP}</Button>
              <Button className="bet Button moneyline">{match.HomeML}</Button>
              <Button className="bet Button over-under">{`O ${match.ouLine}`}</Button>
  
              <Button className="bet Button point-spread">{match.AwaySP}</Button>
              <Button className="bet Button moneyline">{match.AwayML}</Button>
              <Button className="bet Button over-under">{`U ${match.ouLine}`}</Button>
  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
}

export default BaseballPage;
