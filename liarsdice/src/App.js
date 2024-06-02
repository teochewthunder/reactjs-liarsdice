import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';

import GetLabels from './utils/GetLabels';
import GetOpponentImage from './utils/GetOpponentImage';

function App() {
  const [lang, setLang] = useState("cn");
  const [stage, setStage] = useState(0);
  const [round, setRound] = useState(0);
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
    setPaused(false);
    setRound(1);
    setPlayerIntoxication(0);
    setOpponentIntoxication(0);
    setGuessQty(3);
    setGuessDice(2);
  }

  function Quit() {
    setStage(0);
    setRound(0);
    setPaused(false);
  }

  function Start() {
    setStage(1);
    setPaused(true);
    setTimeout(()=> {
      setRound(1);
      setPaused(false);
    },
    2000
    );
  }

  return (
    <div className="App">
      <div id="Intro" className={ (stage > 0 && round > 0 ? "hidden" : "") }>
        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage1" : "introimage intrimage1 floatup") }>
            
          </div> 
        </div>

        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage2" : "introimage introimage2 floatup") }>
            
          </div> 
        </div>

        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage3" : "introimage introimage3 floatup") }>
          
          </div>            
          <div id="IntroStart" className={ (stage === 0 && round === 0 ? "" : "fade") }>
              <button onClick={ ()=>{ Start(); }}>{ GetLabels("start", lang) } &#9658;</button>
          </div>  
        </div>

        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage4" : "introimage introimage4 floatup") }>
            
          </div> 
        </div>

        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage5" : "introimage introimage5 floatup") }>
            
          </div> 
        </div> 
      </div>

      <div id="Dashboard">
        <div className={ (stage === 0 || round === 0 ? "left width_half invisible" : "left width_half") }>
          LIAR'S DICE
          <br />
          { stage === 0 ? "" : GetLabels("stage" + stage, lang) + ": " + GetLabels("opponent" + stage, lang)}
        </div>

        <div className="right width_half">     
          <label id="DashboardRestart" className={ (stage === 0 || round === 0 ? "invisible" : "") }>
            { GetLabels("restart", lang) }&nbsp;
            <button onClick={ ()=>{ RestartStage(); }}>&#8634;</button>
            <br />
          </label>
          
          <label id="DashboardQuit" className={ (stage === 0 || round === 0 ? "invisible" : "") }>
            { GetLabels("quit", lang) }&nbsp;
            <button onClick={ ()=>{ Quit(); }}>&#9650;</button>
            <br />
          </label>

          <label id="DashboardLanguage">
            { GetLabels("language", lang) }&nbsp; 
            <select onChange={ (e)=>{ setLang(e.currentTarget.value); }}>
              <option value="cn">CN</option>
              <option value="en">EN</option>
            </select>
          </label>
        </div>  
      </div>

      <div id="Main">
        <div id="Opponent" style={ GetOpponentImage(stage, opponentIntoxication) }>

        </div> 

        <Game 
          stage = { stage }
          setStage = { setStage }
          round = { round }
          setRound = { setRound }
          opponentIntoxication = { opponentIntoxication }
          setOpponentIntoxication = { setOpponentIntoxication }
          setPlayerIntoxication = { setPlayerIntoxication }
          playerIntoxication = { playerIntoxication }
          opponentDice = { opponentDice }
          playerDice = { playerDice }
          guessDice = { guessDice }
          guessQty = { guessQty }
          setGuessDice = { setGuessDice }
          setGuessQty = { setGuessQty }
        />
      </div>        
    </div>
  );
}

export default App;
