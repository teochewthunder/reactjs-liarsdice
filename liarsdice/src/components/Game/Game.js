import React, { useState } from 'react';
import './Game.css';
import Dice from '../../components/Dice';

import GetOpponentImage from '../../utils/GetOpponentImage';
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
	const [playerGuessQty, setPlayerGuessQty] = useState(3);
	const [playerGuessDice, setPlayerGuessDice] = useState(2);
	const [guessQty, setGuessQty] = useState(3);
	const [guessDice, setGuessDice] = useState(2);
	const [shake, setShake] = useState(false);
	const [show, setShow] = useState(false);
	const [isPlayerTurn, setIsPlayerTurn] = useState(true);
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
			<div id="Champion" data-testid="game-champion">
				<h1>{ GetLabels("final", lang) }</h1>
				<p>
					<button className="btnFinalQuit actionButton"  onClick={ ()=>{ quit(); } }>{ GetLabels("quit", lang) } &#9650;</button>
				</p>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(1, 0) }></div>
					<div className="words"><span className="opponentName">{ GetLabels("opponent1", lang) }</span><br />"{ GetPhrases(1, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(2, 0) }></div>
					<div className="words"><span className="opponentName">{ GetLabels("opponent2", lang) }</span><br />"{ GetPhrases(2, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(3, 0) }></div>
					<div className="words"><span className="opponentName">{ GetLabels("opponent3", lang) }</span><br />"{ GetPhrases(3, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(4, 0) }></div>
					<div className="words"><span className="opponentName">{ GetLabels("opponent4", lang) }</span><br />"{ GetPhrases(4, "stagelose", lang) }"</div>
				</div>

				<div className="final">
					<div className={ "profile " + GetOpponentImage(5, 0) }></div>
					<div className="words"><span className="opponentName">{ GetLabels("opponent5", lang) }</span><br />"{ GetPhrases(5, "stagelose", lang) }"</div>
				</div>
			</div>	    	 
		);	
	} 

	function quit() {
		setStage(0);
		setRoundStarted(false);
		setStageStarted(false);
		setGameStarted(false);
	}

	const restartStage = function() {
		setPlayerIntoxication(100);
		setOpponentIntoxication(100);
		setGuessQty(3);
		setGuessDice(2);
		setPlayerGuessQty(3);
		setPlayerGuessDice(2);
		setIsPlayerTurn(true);
		setStageStarted(false);
		setRoundStarted(false);
	}; 

	const startStage = function() {
		setPlayerIntoxication(100);
		setOpponentIntoxication(100);
		setGuessQty(3);
		setGuessDice(2);
		setPlayerGuessQty(3);
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
		
		var shaking = setInterval(()=>{
			var values_opponent = [];
			var values_player = [];

			for (var i = 0; i < 5; i++) {
				var val = Math.floor(Math.random() * 6) + 1;
				values_opponent.push(val);
				val = Math.floor(Math.random() * 6) + 1;
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
				setIsPlayerTurn(true);

				if (isPlayerTurn) {
					setOpponentDialog(GetPhrases(stage, "yourturn", lang));
				} else {
					opponentAction(4, 2);
				}
			},
			1000
		);	
	};

	const endRound = function() {
		setGuessQty(3);
		setGuessDice(2);
		setPlayerGuessQty(3);
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
		return ((qty > guessQty || dice > guessDice) && qty > 3);
	};

	const isHighlightedDice = function(dice) {
		return (!shake && show && (dice === guessDice || dice === 1));
	};

	const opponentAction = function(currentGuessQty, currentGuessDice) {
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
		setTurns(turns + 1);

		window.setTimeout(()=> {
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

		var playerWin = true;
		if (isPlayerOpen && correctGuess) playerWin = false;
		if (!isPlayerOpen && !correctGuess) playerWin = false;

		if (playerWin) {
			setOpponentDialog(GetPhrases(stage, "lose", lang));
			var intoxication = opponentIntoxication - (35 - (stage * 5));
			if (intoxication < 0) intoxication = 0;
			setOpponentIntoxication(intoxication);

			if (intoxication === 0) setOpponentDialog(GetPhrases(stage, "stagelose", lang));
		} else {
			setOpponentDialog(GetPhrases(stage, "win", lang));
			var intoxication = playerIntoxication - 35;
			if (intoxication < 0) intoxication = 0;
			setPlayerIntoxication(intoxication);

			if (intoxication === 0) setOpponentDialog(GetPhrases(stage, "stagewin", lang));
		}
	};

	if (stage >= 1 && stage <= 5) {
		return (
			<div id="Main">
			    <div id="Opponent" className={ GetOpponentImage(stage, opponentIntoxication) }  data-testid="opponent-image">
			    	<button className={ gameStarted ? "btnQuit actionButton" : "hidden" }  onClick={ ()=>{ quit(); } }>{ GetLabels("quit", lang) } &#9650;</button>
		        </div> 

		        <div id="OpponentIntro" className={ stageStarted ? "hidden" : "" }>
		        	<p>"{ GetPhrases(stage, "intro", lang) }"</p>
		        	<button className="btnStartStage actionButton" onClick={ ()=>{ startStage(); } }>{ GetLabels("startstage", lang) } &#9658;</button>
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
	        						return (
	        							<Dice
	        								dice = { dice }
	        								diceIndex = { diceIndex }
	        								classPrefix = "opponentDice"
	        								highlight = { isHighlightedDice(dice) }
	        								show = { show }
	        							/>
	        						);
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
	        						return (
	        							<Dice
	        								dice = { dice }
	        								diceIndex = { diceIndex }
	        								classPrefix = "playerDice"
	        								highlight = { isHighlightedDice(dice) }
	        								show = { true }
	        							/>
	        						);
	    						})
	    					}	
						</div>	
					</div>	

					<div className="GameRow">
						<div className="left width_long">
							<div className={ (shake ? "hidden" : "speechballoon") }>
								<div id="playerDashboard" className={ (isPlayerTurn && roundStarted ? "" : "hidden") }>
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
												<div className="left width_long">
				        							<Dice
				        								dice = { playerGuessDice }
				        								diceIndex = "0"
				        								classPrefix = "guessDice"
				        								highlight = { false }
				        								show = { true }
				        							/>
												</div>
												<div className="guessButtons right width_short">
													<button onClick={ ()=>{ adjustPlayerGuessDice(1); } }>&#9650;</button>
													<br />
													<button onClick={ ()=>{ adjustPlayerGuessDice(-1); } }>&#9660;</button>
												</div>
											</div>
										</div>
										<div className="right width_short">
											<button onClick={ ()=>{ guess(); } } disabled={ (isValidGuess(playerGuessQty, playerGuessDice) ? "" : "disabled") } className="actionButton">{ GetLabels("guess", lang) }</button>
											<button onClick={ ()=>{ openup(); } } disabled={ ((guessQty === 3 && guessDice === 2) || show ? "disabled" : "") } className="actionButton">{ GetLabels("openup", lang) }</button>
										</div>
									</div>
								</div>

								<button onClick={ ()=>{	endRound();} } className={ (roundStarted && show && playerIntoxication > 0 ? "actionButton" : "hidden") }>{ GetLabels("endround", lang) } &#9673;</button>
								<button onClick={ ()=>{ startNewRound(); } } className={ (roundStarted || !stageStarted || playerIntoxication === 0 ? "hidden" : "actionButton") }>{ GetLabels("startnewround", lang) } &#9658;</button>
								<button onClick={ ()=>{ restartStage(); } } className={ (playerIntoxication === 0 ? "actionButton" : "hidden") }>{ GetLabels("restartstage", lang) } &#9658;</button>
							</div>
						</div>	

						<div className="right width_short">
							<div className="portrait player"></div>
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
}

export default Game;