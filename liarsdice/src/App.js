import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="Intro">
        <div className="col">
          
        </div>   
        <div className="col">
          
        </div> 
        <div className="col">
          <div id="IntroStart">
            
          </div>           
        </div> 
        <div className="col">
          
        </div> 
        <div className="col">
          
        </div> 
        <div id="Dashboard">
          <div className="left">
            LIAR'S DICE
            <br />
            STAGE ONE: XIAO CAO
          </div>

          <div className="right">     
            <label id="DashboardRestart">
              Restart&nbsp;
              <button>R</button>
            </label>
            <br />
            <label id="DashboardQuit">
              Quit&nbsp;
              <button>Q</button>
            </label>
            <br />
            <label id="DashboardLanguage">
              Language&nbsp; 
              <select>
                <option value="cn">CN</option>
                <option value="en">EN</option>
              </select>
            </label>
          </div>  
        </div> 
      </div>

      <div id="Main">
        <div id="Opponent">

        </div> 

        <div id="Game">
          <div id="OpponentDialog" className="GameRow">

          </div> 
          <div id="OpponentDice" className="GameRow">

          </div> 
          <div id="YourDialog" className="GameRow">

          </div> 
          <div id="YourDice" className="GameRow">

          </div> 
        </div> 
      </div>        
    </div>
  );
}

export default App;
