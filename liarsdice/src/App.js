import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';

import GetLabels from './utils/GetLabels';

function App() {
  const [lang, setLang] = useState("cn");
  const [stage, setStage] = useState(0);
  const [round, setRound] = useState(0);

  function Quit() {
    setStage(0);
    setRound(0);
  }

  function Start() {
    setStage(1);
    setTimeout(()=> {
      setRound(1);
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
      
      <Game 
        stage = { stage }
        setStage = { setStage }
        round = { round }
        setRound = { setRound }
        lang = { lang }
        setLang = { setLang }
      />       
    </div>
  );
}

export default App;
