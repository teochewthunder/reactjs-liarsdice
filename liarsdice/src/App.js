import React, { useState } from 'react';
import './App.css';

import GetLabels from './utils/GetLabels';

function App() {
  const [lang, setLang] = useState("en");
  const [stage, setStage] = useState(0);
  const [round, setRound] = useState(1);
  const [paused, setPaused] = useState(false);
  const [playerIntoxication, setPlayerIntoxication] = useState(0);
  const [opponentIntoxication, setOpponentIntoxication] = useState(0);
  const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
  const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
  const [playerDialog, setPlayerDialog] = useState("");
  const [opponentDialog, setOpponentDialog] = useState("");
  const [guessQty, setGuessQty] = useState(3);
  const [guessDice, setGuessDice] = useState(2);

  function RestartStage() {
    setpaused(false);
    setPlayerIntoxication(0);
    setOpponentIntoxication(0);
    setGuessQty(3);
    setGuessDice(2);
    setPlayerDialog(GetPhrases(stage, "intro", lang));
  }

  function Quit() {
    setStage(0);
    setpaused(false);
  }

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
            { stage === 0 ? "" : GetLabels("stage" + stage, lang) + ": " + GetLabels("opponent" + stage, lang)}
          </div>

          <div className="right">     
            <label id="DashboardRestart" className={ (stage == 0 ? "Hidden" : "") }>
              Restart&nbsp;
              <button onClick={ ()=>{ RestartStage(); }>R</button>
              <br />
            </label>
            
            <label id="DashboardQuit" className={ (stage == 0 ? "Hidden" : "") }>
              Quit&nbsp;
              <button onClick={ ()=>{ Quit(); }>Q</button>
              <br />
            </label>

            <label id="DashboardLanguage">
              Language&nbsp; 
              <select onChange={ (e)=>{ setLang(e.currentTarget.value); }}>
                <option value="cn" >CN</option>
                <option value="en" >EN</option>
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
