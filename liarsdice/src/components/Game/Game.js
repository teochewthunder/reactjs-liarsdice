import React, { useState } from 'react';
import './Game.css';

import GetOpponentImage from '../../utils/GetOpponentImage';
import GetDiceDots from '../../utils/GetDiceDots';
import GetLabels from '../../utils/GetLabels';
import GetPhrases from '../../utils/GetPhrases';

function Game(props) {
	const [playerIntoxication, setPlayerIntoxication] = useState(0);
	const [opponentIntoxication, setOpponentIntoxication] = useState(0);
	const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
	const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
	const [playerDialog, setPlayerDialog] = useState(" ");
	const [opponentDialog, setOpponentDialog] = useState(GetPhrases(1, "intro", "en"));
	const [guessQty, setGuessQty] = useState(3);
	const [guessDice, setGuessDice] = useState(2);
	const [shake, setShake] = useState(false);
	const [show, setShow] = useState(false);

	let stage = props.stage;
	let setStage = props.setStage;
	let round = props.round;
	let setRound = props.setRound;
	let lang = props.lang;
	let setLang = props.setLang;

	if (stage === 0) {
		return (
			<div id="Game">

			</div>	    	 
		);	
	} else {
		/*
		setPlayerIntoxication(0);
		setOpponentIntoxication(0);
		setGuessQty(4);
		setGuessDice(2);

		setOpponentDialog();
		setPlayerDialog();
		*/
	}

	const shakeDice = function() {
		setShow(true);
		setShake(true);
		
		var shaking = setInterval(()=>{
			var values_opponent = [];
			var values_player = [];

			for (var i = 0; i < 5; i++) {
				var val = Math.floor(Math.random() * 5) + 1;
				values_opponent.push(val);
				var val = Math.floor(Math.random() * 5) + 1;
				values_player.push(val);
			}

			setOpponentDice(values_opponent);
			setPlayerDice(values_player);
		},
		100);

		setTimeout(
			()=> {
				setShow(false);
				setShake(false);
				clearInterval(shaking);
			},
			1000
		);
	}

	return (
		<div id="Main">
		    <div id="Opponent" style={ GetOpponentImage(stage, opponentIntoxication) }>

	        </div> 

			<div id="Game">
				<div className="GameRow">
					<div className="left width_long">
						<div className={ (opponentDialog === "" ? "hidden" : "speechballoon") }>
							{ opponentDialog }
						</div>
					</div>	

					<div className="right width_short">
						<div className="portrait"></div>
						<br />
						<div className="meter">
							<div className="metervalue"></div>
						</div>
					</div>			
				</div>

				<div className="GameRow">
					<div className="left width_short">
						<div className={ "shaker " + (shake ? "shaking" : "") }></div>
					</div>	

					<div className="right width_long">
					    {
					    	opponentDice.map(function(dice, diceIndex){
        						return <div className="dice opponent_dice">
							    {
							    	[0,0,0,0,0,0,0,0,0].map(function(dot, dotIndex){
							    		var css = (show ? "dot val" + GetDiceDots(dice, dotIndex) : "dot hideDice");

		        						return <div className={ css }>

		        						</div>
		    						})
		    					}
		    					</div>
    						})
    					}	        
					</div>	
				</div>	

				<div className="GameRow">
					<div className="left width_short">
						<div className={ "shaker " + (shake ? "shaking" : "") }></div>
					</div>	

					<div className="right width_long">
					    {
					    	playerDice.map(function(dice, diceIndex){
        						return <div className="dice player_dice">
							    {
							    	[0,0,0,0,0,0,0,0,0].map(function(dot, dotIndex){
							    		var css = "dot val" + GetDiceDots(dice, dotIndex)

		        						return <div className={ css }>

		        						</div>
		    						})
		    					}
		    					</div>
    						})
    					}	
					</div>	
				</div>	

				<div className="GameRow">
					<div className="left width_long">
						<div className={ (shake ? "hidden" : "speechballoon") }>
							{ playerDialog }
							<div id="playerDashboard">
								<div id="guessDashboard">
									<div className="left width_long">
										<div className="left width_half">
											{ guessQty }
										</div>
										<div className="right width_half">
											{ guessDice }
										</div>
									</div>
									<div className="right width_short">
										<button>{ GetLabels("guess", lang) } &#8634;</button>
									</div>
								</div>
								<button>{ GetLabels("openup", lang) } &#8634;</button>
								<button>{ GetLabels("restart", lang) } &#8634;</button>
								<button>{ GetLabels("startnewround", lang) }&#9658;</button>
							</div>
						</div>
					</div>	

					<div className="right width_short">
						<div className="portrait"></div>
						<br />
						<div className="meter">
							<div className="metervalue"></div>
						</div>
					</div>				
				</div>					
			</div>
		</div>	    	 
	);
}

export default Game;