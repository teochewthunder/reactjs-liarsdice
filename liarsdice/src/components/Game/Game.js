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
	let gameStarted = props.gameStarted;
	let setGameStarted = props.setGameStarted;
	let lang = props.lang;
	let dialogSpeed = props.dialogSpeed;

	const [playerIntoxication, setPlayerIntoxication] = useState(100);
	const [opponentIntoxication, setOpponentIntoxication] = useState(100);
	const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
	const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
	const [opponentDialog, setOpponentDialog] = useState("");
	const [playerGuessQty, setPlayerGuessQty] = useState(4);
	const [playerGuessDice, setPlayerGuessDice] = useState(2);
	const [guessQty, setGuessQty] = useState(4);
	const [guessDice, setGuessDice] = useState(2);
	const [shake, setShake] = useState(false);
	const [show, setShow] = useState(false);
	const [isPlayerTurn, setIsPlayerTurn] = useState(false);
	const [round, setRound] = useState(0);
	const [stageStarted, setStageStarted] = useState(false);
	const [roundStarted, setRoundStarted] = useState(false);
	const [turns, setTurns] = useState(0);

	if (stage === 0) {
		return (
			<div id="Game">

			</div>	    	 
		);	
	} 

	if (stage === 6) {
		return (
			<div id="Champion">
				<h1>YOU ARE THE CHAMPION!</h1>
				<div className="final">
					<div className={ "profile " + GetOpponentImage(1, 0) }></div>
					<div className="words"><b>{ GetLabels("opponent1", lang) }</b><br />"{ GetPhrases(1, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(2, 0) }></div>
					<div className="words"><b>{ GetLabels("opponent2", lang) }</b><br />"{ GetPhrases(2, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(3, 0) }></div>
					<div className="words"><b>{ GetLabels("opponent3", lang) }</b><br />"{ GetPhrases(3, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(4, 0) }></div>
					<div className="words"><b>{ GetLabels("opponent4", lang) }</b><br />"{ GetPhrases(4, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(5, 0) }></div>
					<div className="words"><b>{ GetLabels("opponent5", lang) }</b><br />"{ GetPhrases(5, "stagelose", lang) }"</div>
				</div>
				<p>
					<button className="btnQuit"  onClick={ ()=>{ quit(); } }>{ GetLabels("quit", lang) } &#9650;</button>
				</p>
			</div>	    	 
		);	
	} 

	function quit() {
		setStage(0);
		setRoundStarted(false);
		setStageStarted(false);
		setGameStarted(false);
	}

	const startStage = function() {
		setPlayerIntoxication(100);
		setOpponentIntoxication(100);
		setGuessQty(4);
		setGuessDice(2);
		setPlayerGuessQty(4);
		setPlayerGuessDice(2);
		setOpponentDice([1, 1, 1, 1, 1]);
		setPlayerDice([1, 1, 1, 1, 1]);
		setRound(1);
		setTurns(0);
		setShow(false);
		setStageStarted(true);

		setOpponentDialog(GetPhrases(stage, "newround", lang));
	};

	const startNewRound = function() {
		setShow(true);
		setShake(true);
		setRoundStarted(true);
		setIsPlayerTurn(!isPlayerTurn);
		
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
				setRound(round + 1);
				setTurns(0);
				
console.log('test new round', isPlayerTurn)
				if (isPlayerTurn) {
					setOpponentDialog(GetPhrases(stage, "yourturn", lang));
				} else {
					opponentAction(guessQty, guessDice);
				}
			},
			1000
		);	
	};

	const endRound = function() {
		setGuessQty(4);
		setGuessDice(2);
		setPlayerGuessQty(4);
		setPlayerGuessDice(2);
		setRoundStarted(false);
		setShow(false);

		if (opponentIntoxication > 0) {
			setOpponentDialog(GetPhrases(stage, "newround", lang));
		} else {
			setStage(stage + 1);
			setStageStarted(false);
			setRound(0);
			setTurns(0);
			setPlayerIntoxication(100);
			setOpponentIntoxication(100);
			setOpponentDialog(GetPhrases(stage, "intro", lang));
		}
	}

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

	const isHighlightedDice = function(dice) {
		return (!shake && show && (dice === guessDice || dice === 1));
	};

	const opponentAction = function(currentGuessQty, currentGuessDice) {
		console.log(currentGuessQty, currentGuessDice);
		var action = GetActions(stage, turns, currentGuessQty, currentGuessDice, opponentDice, opponentIntoxication);
		setTurns(turns + 1);

		if (action.type === "open") {
			var dialogStr = (GetPhrases(stage, "myturn", lang) + "\n" + GetPhrases(stage, "openup", lang));
			var dialog = dialogStr.split('\n').map(i => {
				return <p>{i}</p>
			});

			setOpponentDialog(dialog);
			setShow(true);
			window.setTimeout(()=> {
				checkWin(false, currentGuessQty, currentGuessDice);
			}, dialogSpeed * 2);
		}

		if (action.type === "guess") {
			setGuessQty(action.qty);
			setGuessDice(action.dice);
			setPlayerGuessQty(action.qty);
			setPlayerGuessDice(action.dice);

			window.setTimeout(()=> {
				var dialogStr = (GetPhrases(stage, "myturn", lang) + " " + GetPhrases(stage, "guess", lang) + " " + GetLabels(action.qty + "dice", lang) + GetLabels(action.dice + "s", lang) + "! \n" + GetPhrases(stage, "yourturn", lang));
				var dialog = dialogStr.split('\n').map(i => {
					return <p>{i}</p>
				});
				setOpponentDialog(dialog);
				setIsPlayerTurn(true);
			}, dialogSpeed * 2);
		}
	};

	const guess = function() {
		setOpponentDialog(GetPhrases(stage, "doubt", lang));

		window.setTimeout(()=> {
			setTurns(turns + 1);
			setGuessQty(playerGuessQty);
			setGuessDice(playerGuessDice);
			setIsPlayerTurn(false);
			opponentAction(playerGuessQty, playerGuessDice);
		}, dialogSpeed);
	};

	const openup = function() {
		setOpponentDialog(GetPhrases(stage, "doubt", lang));

		window.setTimeout(()=> {
			setShow(true);
			checkWin(true, guessQty, guessDice);
		}, dialogSpeed);
	};

	const checkWin = function(isPlayerOpen, currentGuessQty, currentGuessDice) {
		var diceQty = 0;
		for (var i = 0; i < 5; i++) {
			if (opponentDice[i] === 1 || opponentDice[i] === currentGuessDice) diceQty++;
			if (playerDice[i] === 1 || playerDice[i] === currentGuessDice) diceQty++;
		}

		var correctGuess = (diceQty >= currentGuessQty);
		console.log('diceqty',diceQty, 'guessqty', currentGuessQty, 'guessdice', currentGuessDice);
		console.log('isPlayerOpen', isPlayerOpen, 'correctGuess', correctGuess);
		var playerWin = true;
		if (isPlayerOpen && correctGuess) playerWin = false;
		if (!isPlayerOpen && !correctGuess) playerWin = false;

		if (playerWin) {
			setOpponentDialog(GetPhrases(stage, "lose", lang));
			var intoxication = opponentIntoxication - (40 - (stage * 5));
			if (intoxication < 0) intoxication = 0;
			setOpponentIntoxication(intoxication);

			if (intoxication == 0) 	setOpponentDialog(GetPhrases(stage, "stagelose", lang));
		} else {
			setOpponentDialog(GetPhrases(stage, "win", lang));
			var intoxication = playerIntoxication - 10;
			if (intoxication < 0) intoxication = 0;
			setPlayerIntoxication(intoxication);
		}
	};

	return (
		<div id="Main">
		    <div id="Opponent" className={ GetOpponentImage(stage, opponentIntoxication) }>
		    	<button onClick={ ()=>{	console.log('guess',guessQty,guessDice);console.log('playeruess',playerGuessQty,playerGuessDice);} } >Test</button>
		    	<button onClick={ ()=>{	console.log('stage',stage,'round',round, 'isPlayerTurn', isPlayerTurn);} } >Stage</button>
		    	<button onClick={ ()=>{	console.log(opponentDice, playerDice, show, shake);} } >Diice</button>
		    	
		    	<button className={ gameStarted ? "btnQuit" : "hidden" }  onClick={ ()=>{ quit(); } }>{ GetLabels("quit", lang) } &#9650;</button>
	        </div> 

	        <div id="OpponentIntro" className={ stageStarted ? "hidden" : "" }>
	        	<p>{ GetPhrases(stage, "intro", lang) }</p>
	        	<button className="btnStartStage" onClick={ ()=>{ startStage(); } }>{ GetLabels("startstage", lang) } &#8634;</button>
	        </div>

			<div id="Game" className={ stageStarted ? "" : "hidden" }>
				<div className="GameRow">
					<div className="left width_long">
						<div className={ (opponentDialog === "" ? "hidden" : "speechballoon " + lang) }>
							{ opponentDialog }
						</div>
					</div>	

					<div className="right width_short">
						<div className={ "portrait " + GetOpponentImage(stage, 100) }></div>
						<br />
						<div className="meter">
							<div className="metervalue" style={{ marginLeft: "-" + (100 - opponentIntoxication) + "px" }}></div>
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
        						return <div className={ "dice opponent_dice " + (isHighlightedDice(dice) ? "highlighted_dice" : "") }>
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
        						return <div className={ "dice player_dice " + (isHighlightedDice(dice) ? "highlighted_dice" : "") }>
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
							<div id="playerDashboard" className={ (isPlayerTurn && roundStarted ? "" : "invisible") }>
								<div id="guessDashboard" className={ (!show && !shake && isPlayerTurn ? "" : "hidden") }>
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
										<button onClick={ ()=>{ guess(); } } disabled={ (isValidGuess(playerGuessQty, playerGuessDice) ? "" : "disabled") }>{ GetLabels("guess", lang) }</button>
										<button onClick={ ()=>{ openup(); } } disabled={ ((guessQty === 4 && guessDice === 2) || show ? "disabled" : "") }>{ GetLabels("openup", lang) }</button>
									</div>
								</div>
							</div>

							<button onClick={ ()=>{	endRound();} } className={ (roundStarted && show ? "" : "hidden") }>End Round</button>
							<button onClick={ ()=>{ startNewRound(); } } className={ (roundStarted || !stageStarted ? "hidden" : "") }>{ GetLabels("startnewround", lang) }&#9658;</button>
						</div>
					</div>	

					<div className="right width_short">
						<div className="portrait"></div>
						<br />
						<div className="meter">
							<div className="metervalue" style={{ marginLeft: "-" + (100 - playerIntoxication) + "px" }}></div>
						</div>
					</div>				
				</div>					
			</div>
		</div>	    	 
	);
}

export default Game;