import React, { useState } from 'react';
import { Image, Button } from "@aws-amplify/ui-react";
import tfLogo from '../images/tandf-logo.jpeg';
import '../App.css';
import './sportsPages.css';
import '../button.css';
import Navbar from '../navBar';

function TFPage({ signOut, toggleDropdown, dropdownOpen }) {
  const bettingLines = [
    {
    id: 1,
    name: "Almosbeh, Sultan High Jump Over/Under",
    odds: -110,
    ouLine: 1.6,
    ouPrint: "1.6m",
    disclaimer: "Bets void if Almosbeh, Sultan, does not run this event."
  },
  {
    id: 2,
    name: "Brick, Jacob Triple Jump Over/Under",
    odds: -110,
    ouLine: 11.32,
    ouPrint: "11.32m",
    disclaimer: "Bets void if Brick, Jacob, does not run this event."
  },
  {
    id: 3,
    name: "Broadbent, Max Triple Jump Over/Under",
    odds: -110,
    ouLine: 13.43,
    ouPrint: "13.43m",
    disclaimer: "Bets void if Broadbent, Max, does not run this event."
  },
  {
    id: 4,
    name: "Castro, Joshua 100 Meters Over/Under",
    odds: -110,
    ouLine: 11.21,
    ouPrint: "11.21s",
    disclaimer: "Bets void if Castro, Joshua, does not run this event."
  },
  {
    id: 5,
    name: "Castro, Joshua 200 Meters Over/Under",
    odds: -110,
    ouLine: 22.74,
    ouPrint: "22.74s",
    disclaimer: "Bets void if Castro, Joshua, does not run this event."
  },
  {
    id: 6,
    name: "Castro, Joshua 400 Meters Over/Under",
    odds: -110,
    ouLine: 51.65,
    ouPrint: "51.65s",
    disclaimer: "Bets void if Castro, Joshua, does not run this event."
  },
  {
    id: 7,
    name: "Castro, Joshua 4 x 100 Relay Over/Under",
    odds: -110,
    ouLine: 43.16,
    ouPrint: "43.16s",
    disclaimer: "Bets void if Castro, Joshua, does not run this event."
  },
  {
    id: 8,
    name: "DeMagistris, Dylan Discus Over/Under",
    odds: -110,
    ouLine: 43.59,
    ouPrint: "43.59m",
    disclaimer: "Bets void if DeMagistris, Dylan, does not run this event."
  },
  {
    id: 9,
    name: "DeMagistris, Dylan Hammer Over/Under",
    odds: -110,
    ouLine: 51.75,
    ouPrint: "51.75m",
    disclaimer: "Bets void if DeMagistris, Dylan, does not run this event."
  },
  {
    id: 10,
    name: "Hajel, Matthew 1500 Meters Over/Under",
    odds: -110,
    ouLine: 262.38,
    ouPrint: "4:22.38s",
    disclaimer: "Bets void if Hajel, Matthew, does not run this event."
  },
  {
    id: 11,
    name: "Hajel, Matthew 5000 Meters Over/Under",
    odds: -110,
    ouLine: 971.25,
    ouPrint: "16:11.25s",
    disclaimer: "Bets void if Hajel, Matthew, does not run this event."
  },
  {
    id: 12,
    name: "Halterman-Mitchell, Noah 800 Meters Over/Under",
    odds: -110,
    ouLine: 124.75,
    ouPrint: "2:04.75s",
    disclaimer: "Bets void if Halterman-Mitchell, Noah, does not run this event."
  },
  {
    id: 13,
    name: "Halterman-Mitchell, Noah 4 x 400 Relay Over/Under",
    odds: -110,
    ouLine: 222.97,
    ouPrint: "3:42.97s",
    disclaimer: "Bets void if Halterman-Mitchell, Noah, does not run this event."
  },
  {
    id: 14,
    name: "Hoffman, Justin 400 Hurdles Over/Under",
    odds: -110,
    ouLine: 60.48,
    ouPrint: "1:00.48s",
    disclaimer: "Bets void if Hoffman, Justin, does not run this event."
  },
  {
    id: 15,
    name: "House, Noel Javelin Over/Under",
    odds: -110,
    ouLine: 59.44,
    ouPrint: "59.44m",
    disclaimer: "Bets void if House, Noel, does not run this event."
  },
  {
    id: 16,
    name: "Klein, Hayden 400 Meters Over/Under",
    odds: -110,
    ouLine: 57.99,
    ouPrint: "57.99s",
    disclaimer: "Bets void if Klein, Hayden, does not run this event."
  },
  {
    id: 17,
    name: "Klein, Hayden 800 Meters Over/Under",
    odds: -110,
    ouLine: 146.24,
    ouPrint: "2:26.24s",
    disclaimer: "Bets void if Klein, Hayden, does not run this event."
  },
  {
    id: 18,
    name: "McDonough, Sam 110 Hurdles Over/Under",
    odds: -110,
    ouLine: 15.64,
    ouPrint: "15.64s",
    disclaimer: "Bets void if McDonough, Sam, does not run this event."
  },
  {
    id: 19,
    name: "McDonough, Sam 400 Hurdles Over/Under",
    odds: -110,
    ouLine: 59.69,
    ouPrint: "59.69s",
    disclaimer: "Bets void if McDonough, Sam, does not run this event."
  },
  {
    id: 20,
    name: "Morrison, Daeshaun 100 Meters Over/Under",
    odds: -110,
    ouLine: 12.31,
    ouPrint: "12.31s",
    disclaimer: "Bets void if Morrison, Daeshaun, does not run this event."
  },
  {
    id: 21,
    name: "Morrison, Daeshaun 200 Meters Over/Under",
    odds: -110,
    ouLine: 25.34,
    ouPrint: "25.34s",
    disclaimer: "Bets void if Morrison, Daeshaun, does not run this event."
  },
  {
    id: 22,
    name: "Ohanian, Charles 800 Meters Over/Under",
    odds: -110,
    ouLine: 121.9,
    ouPrint: "2:01.9s",
    disclaimer: "Bets void if Ohanian, Charles, does not run this event."
  },
  {
    id: 23,
    name: "Ohanian, Charles 1500 Meters Over/Under",
    odds: -110,
    ouLine: 252.56,
    ouPrint: "4:12.56s",
    disclaimer: "Bets void if Ohanian, Charles, does not run this event."
  },
  {
    id: 24,
    name: "Ohanian, Charles 4 x 400 Relay Over/Under",
    odds: -110,
    ouLine: 216.37,
    ouPrint: "3:36.37s",
    disclaimer: "Bets void if Ohanian, Charles, does not run this event."
  },
  {
    id: 25,
    name: "Powel, Michael Shot Put Over/Under",
    odds: -110,
    ouLine: 13.55,
    ouPrint: "13.55m",
    disclaimer: "Bets void if Powel, Michael, does not run this event."
  },
  {
    id: 26,
    name: "Ramirez, JJ 100 Meters Over/Under",
    odds: -110,
    ouLine: 11.74,
    ouPrint: "11.74s",
    disclaimer: "Bets void if Ramirez, JJ, does not run this event."
  },
  {
    id: 27,
    name: "Ramirez, JJ Long Jump Over/Under",
    odds: -110,
    ouLine: 6.13,
    ouPrint: "6.13m",
    disclaimer: "Bets void if Ramirez, JJ, does not run this event."
  },
  {
    id: 28,
    name: "Ravishankar, Raam 800 Meters Over/Under",
    odds: -110,
    ouLine: 119.81,
    ouPrint: "1:59.81s",
    disclaimer: "Bets void if Ravishankar, Raam, does not run this event."
  },
  {
    id: 29,
    name: "Ravishankar, Raam 1500 Meters Over/Under",
    odds: -110,
    ouLine: 248.94,
    ouPrint: "4:08.94s",
    disclaimer: "Bets void if Ravishankar, Raam, does not run this event."
  },
  {
    id: 30,
    name: "Ravishankar, Raam 4 x 400 Relay Over/Under",
    odds: -110,
    ouLine: 216.37,
    ouPrint: "3:36.37s",
    disclaimer: "Bets void if Ravishankar, Raam, does not run this event."
  },
  {
    id: 31,
    name: "Reichenbach, Jack High Jump Over/Under",
    odds: -110,
    ouLine: 1.98,
    ouPrint: "1.98m",
    disclaimer: "Bets void if Reichenbach, Jack, does not run this event."
  },
  {
    id: 32,
    name: "Reichenbach, Jack Long Jump Over/Under",
    odds: -110,
    ouLine: 7.09,
    ouPrint: "7.09m",
    disclaimer: "Bets void if Reichenbach, Jack, does not run this event."
  },
  {
    id: 33,
    name: "Rhodeman, Bryce 4 x 100 Relay Over/Under",
    odds: -110,
    ouLine: 43.16,
    ouPrint: "43.16s",
    disclaimer: "Bets void if Rhodeman, Bryce, does not run this event."
  },
  {
    id: 34,
    name: "Rhodeman, Bryce High Jump Over/Under",
    odds: -110,
    ouLine: 1.81,
    ouPrint: "1.81m",
    disclaimer: "Bets void if Rhodeman, Bryce, does not run this event."
  },
  {
  id: 35,
    name: "Schaffer-Neitz, Isaac 100 Meters Over/Under",
    odds: -110,
    ouLine: 11.46,
    ouPrint: "11.46s",
    disclaimer: "Bets void if Schaffer-Neitz, Isaac, does not run this event."
  },
  {
    id: 36,
    name: "Schaffer-Neitz, Isaac 200 Meters Over/Under",
    odds: -110,
    ouLine: 23.54,
    ouPrint: "23.54s",
    disclaimer: "Bets void if Schaffer-Neitz, Isaac, does not run this event."
  },
  {
    id: 37,
    name: "Schaffer-Neitz, Isaac 4 x 100 Relay Over/Under",
    odds: -110,
    ouLine: 43.16,
    ouPrint: "43.16s",
    disclaimer: "Bets void if Schaffer-Neitz, Isaac, does not run this event."
  },
  {
    id: 38,
    name: "Seel, David 800 Meters Over/Under",
    odds: -110,
    ouLine: 121.2,
    ouPrint: "2:01.2s",
    disclaimer: "Bets void if Seel, David, does not run this event."
  },
  {
    id: 39,
    name: "Seel, David 1500 Meters Over/Under",
    odds: -110,
    ouLine: 246.69,
    ouPrint: "4:06.69s",
    disclaimer: "Bets void if Seel, David, does not run this event."
  },
  {
    id: 40,
    name: "Seel, David 4 x 400 Relay Over/Under",
    odds: -110,
    ouLine: 216.37,
    ouPrint: "3:36.37s",
    disclaimer: "Bets void if Seel, David, does not run this event."
  },
  {
    id: 41,
    name: "Short, Chris 400 Meters Over/Under",
    odds: -110,
    ouLine: 51.57,
    ouPrint: "51.57s",
    disclaimer: "Bets void if Short, Chris, does not run this event."
  },
  {
    id: 42,
    name: "Short, Chris 4 x 100 Relay Over/Under",
    odds: -110,
    ouLine: 43.16,
    ouPrint: "43.16s",
    disclaimer: "Bets void if Short, Chris, does not run this event."
  },
  {
    id: 43,
    name: "Shoultz, Dorsey Discus Over/Under",
    odds: -110,
    ouLine: 32.75,
    ouPrint: "32.75m",
    disclaimer: "Bets void if Shoultz, Dorsey, does not run this event."
  },
  {
    id: 44,
    name: "Shoultz, Dorsey Javelin Over/Under",
    odds: -110,
    ouLine: 38.7,
    ouPrint: "38.7m",
    disclaimer: "Bets void if Shoultz, Dorsey, does not run this event."
  },
  {
    id: 45,
    name: "Silver, Izzy 400 Meters Over/Under",
    odds: -110,
    ouLine: 55.43,
    ouPrint: "55.43s",
    disclaimer: "Bets void if Silver, Izzy, does not run this event."
  },
  {
    id: 46,
    name: "Silver, Izzy 4 x 400 Relay Over/Under",
    odds: -110,
    ouLine: 209.76,
    ouPrint: "3:29.76s",
    disclaimer: "Bets void if Silver, Izzy, does not run this event."
  },
  {
    id: 47,
    name: "Smolowitz, Andrew 1500 Meters Over/Under",
    odds: -110,
    ouLine: 265.64,
    ouPrint: "4:25.64s",
    disclaimer: "Bets void if Smolowitz, Andrew, does not run this event."
  },
  {
    id: 48,
    name: "Smolowitz, Andrew 3000 Meters Over/Under",
    odds: -110,
    ouLine: 577.78,
    ouPrint: "9:37.78s",
    disclaimer: "Bets void if Smolowitz, Andrew, does not run this event."
  },
  {
    id: 49,
    name: "Smolowitz, Andrew 5000 Meters Over/Under",
    odds: -110,
    ouLine: 979.63,
    ouPrint: "16:19.63s",
    disclaimer: "Bets void if Smolowitz, Andrew, does not run this event."
  },
  {
    id: 50,
    name: "Snow, Jaden 400 Meters Over/Under",
    odds: -110,
    ouLine: 58.81,
    ouPrint: "58.81s",
    disclaimer: "Bets void if Snow, Jaden, does not run this event."
  },
  {
    id: 51,
    name: "Snow, Jaden 110 Hurdles Over/Under",
    odds: -110,
    ouLine: 16.33,
    ouPrint: "16.33s",
    disclaimer: "Bets void if Snow, Jaden, does not run this event."
  },
  {
    id: 52,
    name: "Snow, Jaden High Jump Over/Under",
    odds: -110,
    ouLine: 1.83,
    ouPrint: "1.83m",
    disclaimer: "Bets void if Snow, Jaden, does not run this event."
  },
  {
    id: 53,
    name: "Tran, Mason 1500 Meters Over/Under",
    odds: -110,
    ouLine: 268.42,
    ouPrint: "4:28.42s",
    disclaimer: "Bets void if Tran, Mason, does not run this event."
  },
  {
    id: 54,
    name: "Tran, Mason 3000 Meters Over/Under",
    odds: -110,
    ouLine: 591.46,
    ouPrint: "9:51.46s",
    disclaimer: "Bets void if Tran, Mason, does not run this event."
  },
  {
    id: 55,
    name: "Vottero, Markus 800 Meters Over/Under",
    odds: -110,
    ouLine: 123.07,
    ouPrint: "2:03.07s",
    disclaimer: "Bets void if Vottero, Markus, does not run this event."
  },
  {
    id: 56,
    name: "Yazdanyar, Ethan 400 Meters Over/Under",
    odds: -110,
    ouLine: 60.55,
    ouPrint: "1:00.55s",
    disclaimer: "Bets void if Yazdanyar, Ethan, does not run this event."
  },
  {
    id: 57,
    name: "Berney, Jem 1500 Meters Over/Under",
    odds: -110,
    ouLine: 321.04,
    ouPrint: "5:21.04s",
    disclaimer: "Bets void if Berney, Jem, does not run this event."
  },
  {
    id: 58,
    name: "Berney, Jem 5000 Meters Over/Under",
    odds: -110,
    ouLine: 1203.22,
    ouPrint: "20:03.22s",
    disclaimer: "Bets void if Berney, Jem, does not run this event."
  },
  {
    id: 59,
    name: "Borbi, Erica Discus Over/Under",
    odds: -110,
    ouLine: 27.62,
    ouPrint: "27.62m",
    disclaimer: "Bets void if Borbi, Erica, does not run this event."
  },
  {
"id": 60,
"name": "Borbi, Erica Hammer Over/Under",
"odds": -110,
"ouLine": 37.0,
"ouPrint": "37.0m",
"disclaimer": "Bets void if Borbi, Erica, does not run this event."
},
{
"id": 61,
"name": "Borello, Ella 800 Meters Over/Under",
"odds": -110,
"ouLine": 167.71,
"ouPrint": "2:47.71s",
"disclaimer": "Bets void if Borello, Ella, does not run this event."
},
{
"id": 62,
"name": "Borello, Ella 1500 Meters Over/Under",
"odds": -110,
"ouLine": 323.02,
"ouPrint": "5:23.02s",
"disclaimer": "Bets void if Borello, Ella, does not run this event."
},
{
"id": 63,
"name": "Borello, Ella 4 x 400 Relay Over/Under",
"odds": -110,
"ouLine": 283.42,
"ouPrint": "4:43.42s",
"disclaimer": "Bets void if Borello, Ella, does not run this event."
},
{
"id": 64,
"name": "Connolly, Ava Triple Jump Over/Under",
"odds": -110,
"ouLine": 9.46,
"ouPrint": "9.46m",
"disclaimer": "Bets void if Connolly, Ava, does not run this event."
},
{
"id": 65,
"name": "DeMichele, Mikayla Triple Jump Over/Under",
"odds": -110,
"ouLine": 8.81,
"ouPrint": "8.81m",
"disclaimer": "Bets void if DeMichele, Mikayla, does not run this event."
},
{
"id": 66,
"name": "Devarennes, Hadley 400 Meters Over/Under",
"odds": -110,
"ouLine": 66.37,
"ouPrint": "1:06.37s",
"disclaimer": "Bets void if Devarennes, Hadley, does not run this event."
},
{
"id": 67,
"name": "Devarennes, Hadley 800 Meters Over/Under",
"odds": -110,
"ouLine": 159.08,
"ouPrint": "2:39.08s",
"disclaimer": "Bets void if Devarennes, Hadley, does not run this event."
},
{
"id": 68,
"name": "Devarennes, Hadley 4 x 400 Relay Over/Under",
"odds": -110,
"ouLine": 295.0,
"ouPrint": "4:55.0s",
"disclaimer": "Bets void if Devarennes, Hadley, does not run this event."
},
{
"id": 69,
"name": "Fezenko, Faith Hammer Over/Under",
"odds": -110,
"ouLine": 45.83,
"ouPrint": "45.83m",
"disclaimer": "Bets void if Fezenko, Faith, does not run this event."
},
{
"id": 70,
"name": "Furyk, Natasha 800 Meters Over/Under",
"odds": -110,
"ouLine": 166.51,
"ouPrint": "2:46.51s",
"disclaimer": "Bets void if Furyk, Natasha, does not run this event."
},
{
"id": 71,
"name": "Furyk, Natasha 3000 Meters Over/Under",
"odds": -110,
"ouLine": 676.14,
"ouPrint": "11:16.14s",
"disclaimer": "Bets void if Furyk, Natasha, does not run this event."
},
{
"id": 72,
"name": "Furyk, Natasha 3000 Steeplechase Over/Under",
"odds": -110,
"ouLine": 748.32,
"ouPrint": "12:28.32s",
"disclaimer": "Bets void if Furyk, Natasha, does not run this event."
},
];

  const [activeButton, setActiveButton] = useState({});
  const [selectedBets, setSelectedBets] = useState([]);
  const [savedBets, setSavedBets] = useState([]);

  const handleButtonClick = (id, option) => {
    setActiveButton(prevState => ({
      ...prevState,
      [id]: prevState[id] === option ? null : option
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


  return (
    <div className="tf-page">
      <Navbar signOut={signOut} toggleDropdown={toggleDropdown} dropdownOpen={dropdownOpen} />
      <div className="betting-lines">
        {bettingLines.map((line) => (
          <div key={line.id} className="betting-line">
            <Image src={tfLogo} className="sport-logo" alt="Track and Field Logo" width="50px" height="50px" />
            <div className="bet-description">{line.name}</div>
            <div>
              <Button
                className={`button ${activeButton[line.id] === 'over' ? 'active' : ''}`}
                onClick={() => handleButtonClick(line.id, 'over')}
                style={{ backgroundColor: activeButton[line.id] === 'over' ? 'red' : '' }}
              >
                Over {line.ouPrint} ({line.odds})
              </Button>
              <Button
                className={`button ${activeButton[line.id] === 'under' ? 'active' : ''}`}
                onClick={() => handleButtonClick(line.id, 'under')}
                style={{ backgroundColor: activeButton[line.id] === 'under' ? 'red' : '' }}
              >
                Under {line.ouPrint} ({line.odds})
              </Button>
              <div className="disclaimer">{line.disclaimer}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <Button
          className={`button ${activeButton.saveForLater ? 'active' : ''}`}
          onClick={handleSaveForLaterClick}
          style={{ backgroundColor: activeButton.saveForLater ? 'red' : '' }}
        >
          Save for Later
        </Button>
        <Button
          className={`button ${activeButton.submit ? 'active' : ''}`}
          onClick={handleSubmitClick}
          style={{ backgroundColor: activeButton.submit ? 'red' : '' }}
        >
          Submit
        </Button>
      </div>
      <div className="bets-placed">
  <h2>Selected Bets</h2>
  {selectedBets.length > 0 ? (
    <ul>
      {selectedBets.map((bet) => (
        <li key={bet.id}>
          Name: {bettingLines.find((line) => line.id === parseInt(bet.id, 10))?.name}, Option: {bet.option}
        </li>
      ))}
    </ul>
  ) : (
    <p>No bets selected yet.</p>
  )}
  <h2>Bets Saved for Later</h2>
  {savedBets.length > 0 ? (
    <ul>
      {savedBets.map((bet) => (
        <li key={bet.id}>
          Name: {bettingLines.find((line) => line.id === parseInt(bet.id, 10))?.name}, Option: {bet.option}
        </li>
      ))}
    </ul>
  ) : (
    <p>No bets saved for later yet.</p>
  )}
</div>
</div>
);
}

export default TFPage;
