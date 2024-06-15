import React, { useState } from 'react';
import './Game.css';

import GetOpponentImage from '../../utils/GetOpponentImage';
import GetDiceDots from '../../utils/GetDiceDots';
import GetLabels from '../../utils/GetLabels';
import GetPhrases from '../../utils/GetPhrases';
import GetActions from '../../utils/GetActions';

function Game(props) {
	let stage = props.stage;
	let setStage = props.setStage;
	let round = props.round;
	let setRound = props.setRound;
	let lang = props.lang;
	let setLang = props.setLang;

	const [playerIntoxication, setPlayerIntoxication] = useState(100);
	const [opponentIntoxication, setOpponentIntoxication] = useState(100);
	const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
	const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
	const [opponentDialog, setOpponentDialog] = useState(GetPhrases(stage, "intro", lang));
	const [playerGuessQty, setPlayerGuessQty] = useState(4);
	const [playerGuessDice, setPlayerGuessDice] = useState(2);
	const [guessQty, setGuessQty] = useState(4);
	const [guessDice, setGuessDice] = useState(2);
	const [shake, setShake] = useState(false);
	const [show, setShow] = useState(true);
	const [isPlayerTurn, setIsPlayerTurn] = useState(false);

	if (stage === 0) {
		return (
			<div id="Game">

			</div>	    	 
		);	
	} 

	const startStage = function() {
		setPlayerIntoxication(100);
		setOpponentIntoxication(100);
		setGuessQty(4);
		setGuessDice(2);
		setPlayerGuessQty(4);
		setPlayerGuessDice(2);
		setRound(0.5);
		setShow(true);

		setOpponentDialog(GetPhrases(1, "intro", lang));
	};

	const startNewRound = function() {
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
				setRound(round + 1 - 0.5);
				setIsPlayerTurn(false);
				var action = GetActions(stage, guessQty, guessDice, opponentDice, opponentIntoxication);
				
				if (action.type === "open") {
					setOpponentDialog(GetLabels("open", lang));
					setShow(true);
					//check win condition
				}

				if (action.type === "guess") {
					setGuessQty(action.qty);
					setGuessDice(action.dice);
					setPlayerGuessQty(action.qty);
					setPlayerGuessDice(action.dice);

					setOpponentDialog(GetLabels(action.qty + "dice", lang) + GetLabels(action.dice + "s", lang) + "!");
					setIsPlayerTurn(true);
				}
			},
			1000
		);
	};

	const endRound = function() {
		setRound(round + 0.5);
	};

	const adjustPlayerGuessQty = function(inc) {
		var finalQty = playerGuessQty + inc;
		if (finalQty < guessQty || finalQty > 10) return;

		setPlayerGuessQty(finalQty);
	};

	const adjustPlayerGuessDice = function(inc) {
		var finalDice = playerGuessDice + inc;
		if (finalDice < guessDice || finalDice > 6) return;

		setPlayerGuessDice(finalDice);
	};

	const isValidGuess = function(qty, dice) {
		return (qty > guessQty || dice > guessDice);
	};

	const isMaximumGuess = function(qty, dice) {
		return (qty === 6 && dice === 6);
	};

	return (
		<div id="Main">
		    <div id="Opponent" className={ GetOpponentImage(stage, opponentIntoxication) }>

	        </div> 

			<div id="Game">
				<div className="GameRow">
					<div className="left width_long">
						<div className={ (opponentDialog === "" ? "hidden" : "speechballoon") }>
							{ opponentDialog }
						</div>
					</div>	

					<div className="right width_short">
						<div className={ "portrait " + GetOpponentImage(stage, 100) }></div>
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
							<div id="playerDashboard" className={ (isPlayerTurn ? "" : "invisible") }>
								<div id="guessDashboard" className={ (round < 1 ? "hidden" : "") }>
									<div className="left width_long">
										<div className="left width_half">
											<div className="guessQty left width_long">
												{ playerGuessQty }
											</div>
											<div className="guessButtons right width_short">
												<button onClick={ ()=>{ adjustPlayerGuessQty(1); } }>&#9650;</button>
												<br />
												<button onClick={ ()=>{ adjustPlayerGuessQty(-1); } }>&#9660;</button>
											</div>
										</div>
										<div className="right width_half">
											<div className="guessDice left width_long">
												<div className="dice opponent_dice">
											    {
											    	[0,0,0,0,0,0,0,0,0].map(function(dot, dotIndex){
											    		var css = "dot val" + GetDiceDots(playerGuessDice, dotIndex);

						        						return <div className={ css }>

						        						</div>
						    						})
						    					}
						    					</div>
											</div>
											<div className="guessButtons right width_short">
												<button onClick={ ()=>{ adjustPlayerGuessDice(1); } }>&#9650;</button>
												<br />
												<button onClick={ ()=>{ adjustPlayerGuessDice(-1); } }>&#9660;</button>
											</div>
										</div>
									</div>
									<div className="right width_short">
										<button disabled={ (isValidGuess(playerGuessQty, playerGuessDice) ? "" : "disabled") }>{ GetLabels("guess", lang) }</button>
										<button>{ GetLabels("openup", lang) }</button>
									</div>
								</div>
							</div>

							<button onClick={ ()=>{ startStage(); } }>{ GetLabels("restart", lang) } &#8634;</button>
							<button onClick={ ()=>{ startNewRound(); } } disabled={ (show ? "" : "disabled") }>{ GetLabels("startnewround", lang) }&#9658;</button>
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