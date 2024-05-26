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
