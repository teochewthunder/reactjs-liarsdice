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
              <button onClick={ ()=>{ start(); }}>{ GetLabels("start", lang) } &#9658;</button>
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
          LIAR'S DICE
          <br />
          { stage === 0 ? "" : GetLabels("stage" + stage, lang) + ": " + GetLabels("opponent" + stage, lang)}
        </div>

        <div className="right width_half">             
          <label id="DashboardLanguage">
            { GetLabels("language", lang) }&nbsp; 
            <select onChange={ (e)=>{ setLang(e.currentTarget.value); }}>
              <option value="cn">CN</option>
              <option value="en">EN</option>
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
