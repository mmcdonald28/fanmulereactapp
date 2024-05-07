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
  const [selectedBets, setSelectedBets] = useState([]);
  const [savedBets, setSavedBets] = useState([]);



  const handleButtonClick = (id, bet, option) => {
    setActiveButton(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [bet]: prevState[id][bet] === option ? null : option
      }
    }));
  };

  const handleSaveForLaterClick = () => {
    const selected = Object.entries(activeButton)
      .filter(([id, option]) => option !== null)
      .map(([id, option]) => ({ id, option }));
    setSavedBets(prevSavedBets => [...prevSavedBets, ...selected]);
    setActiveButton({});
    alert("Bets saved for later!");
  };

  const handleSubmitClick = () => {
    const newSelected = Object.entries(activeButton)
      .filter(([id, option]) => option !== null)
      .map(([id, option]) => ({ id, option }));

    setSelectedBets(prevSelectedBets => [
      ...prevSelectedBets,
      ...newSelected
    ]);
    setActiveButton({});
    alert("Bets submitted!");
  };



  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const matchData = await client.graphql({ query: listSportingEvents, variables: { filter: { Sport: { eq: "MBA" } } } });
        const matches = matchData.data.listSportingEvents.items;
        // Initialize state for active buttons
        const activeButtonsInit = {};
        matches.forEach((match, index) => {
          activeButtonsInit[index] = { 0: null, 1: null, 2: null }; // 3 bets per match
        });
        setActiveButton(activeButtonsInit);
        setMatches(matches);
      } catch (err) {
        console.error('Error fetching matches:', err);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="sports-betting-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />

      <div className="betting-lines">
        {matches.length === 0 ? (
          <div className="no-matches">No upcoming matches</div>
        ) : (
          matches.map((match, index) => (
            <div key={match.id} className="betting-line-item betting-line">
              <Image src={baseballLogo} className="sport-logo" alt="Men's Baseball Logo" width="50px" height="50px" />
              <div className="bet-description">{match.Away} @ {match.Home}</div>

              <div className="betting-options">
                <Button
                  className={`button ${activeButton[index][0] === 'A' ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, 0, 'A')}
                  style={{ backgroundColor: activeButton[index][0] === 'A' ? 'red' : '' }}>
                  {match.HomeSP} ({match.HomeSPodds})
                </Button>
                <Button
                  className={`button ${activeButton[index][1] === 'A' ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, 1, 'A')}
                  style={{ backgroundColor: activeButton[index][1] === 'A' ? 'red' : '' }}>
                  {match.HomeML}
                </Button>
                <Button
                  className={`button ${activeButton[index][2] === 'A' ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, 2, 'A')}
                  style={{ backgroundColor: activeButton[index][2] === 'A' ? 'red' : '' }}>
                  {`O ${match.ouLine}`} ({match.ouOdds})
                </Button>

                <Button
                  className={`button ${activeButton[index][0] === 'B' ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, 0, 'B')}
                  style={{ backgroundColor: activeButton[index][0] === 'B' ? 'red' : '' }}>
                  {match.AwaySP} ({match.AwaySPodds})
                </Button>
                <Button
                  className={`button ${activeButton[index][1] === 'B' ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, 1, 'B')}
                  style={{ backgroundColor: activeButton[index][1] === 'B' ? 'red' : '' }}>
                  {match.AwayML}
                </Button>
                <Button
                  className={`button ${activeButton[index][2] === 'B' ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, 2, 'B')}
                  style={{ backgroundColor: activeButton[index][2] === 'B' ? 'red' : '' }}>
                  {`U ${match.ouLine}`} ({match.ouOdds})
                </Button>
              </div>
            </div>
          )))}
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
