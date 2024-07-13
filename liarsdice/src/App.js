import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';

import GetLabels from './utils/GetLabels';

function App() {
  const [lang, setLang] = useState("cn");
  const [dialogSpeed, setDialogSpeed] = useState(500);
  const [stage, setStage] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  function start() {
    setStage(1);
    setTimeout(()=> {
      setGameStarted(true);
    },
    2000
    );
  }

  return (
    <div className="App">
      <div id="Intro" className={ (gameStarted ? "hidden" : "") }>
        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage1" : "introimage introimage1 floatup") }>
            
          </div> 
        </div>

        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage2" : "introimage introimage2 floatup") }>
            
          </div> 
        </div>

        <div className="col">
          <div className={ (stage === 0 ? "introimage introimage3" : "introimage introimage3 floatup") }>
          
          </div>            
          <div id="IntroStart" className={ (stage === 0 ? "" : "fade") }>
              <div className="logo">

              </div>
              <div className="button">
                <button data-testid="start-button" onClick={ ()=>{ start(); }} className="actionButton" >{ GetLabels("start", lang) } &#9658;</button>
              </div> 
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
        <div className={ (gameStarted ? "left width_half" : "left width_half invisible") }>
          <div className="logo"></div>
          <div className="stage">
            <span className="stageName">{ stage === 0 || stage === 6? "" : GetLabels("stage" + stage, lang) + ": " }</span>
            <br /><span className="opponentName">{ stage === 0 || stage === 6? "" : GetLabels("opponent" + stage, lang) }</span>
          </div> 
        </div>

        <div className="right width_half">             
          <label id="DashboardLanguage">
            { GetLabels("language", lang) }&nbsp; 
            <select data-testid="dashboard-language" onChange={ (e)=>{ setLang(e.currentTarget.value); }}>
              <option value="cn">CN</option>
              <option value="en">EN</option>
            </select>
          </label>

          <label id="DashboardDialogSpeed">
            { GetLabels("dialogSpeed", lang) }&nbsp; 
            <select data-testid="dashboard-dialogspeed" onChange={ (e)=>{ setDialogSpeed(e.currentTarget.value); }}>
              <option value="500">{ GetLabels("fast", lang) }</option>
              <option value="1000">{ GetLabels("medium", lang) }</option>
              <option value="1500">{ GetLabels("slow", lang) }</option>
            </select>
          </label>
        </div>  
      </div>
      
      <Game 
        stage = { stage }
        setStage = { setStage }
        gameStarted = { gameStarted }
        setGameStarted = { setGameStarted }
        lang = { lang }
        dialogSpeed = { dialogSpeed }
      />       
    </div>
  );
}

export default App;
