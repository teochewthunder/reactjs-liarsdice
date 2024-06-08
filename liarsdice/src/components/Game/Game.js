import React, { useState } from 'react';
import './Game.css';

import GetOpponentImage from '../../utils/GetOpponentImage';
import GetDiceDots from '../../utils/GetDiceDots';

function Game(props) {
	const [playerIntoxication, setPlayerIntoxication] = useState(0);
	const [opponentIntoxication, setOpponentIntoxication] = useState(0);
	const [playerDice, setPlayerDice] = useState([1, 1, 1, 1, 1]);
	const [opponentDice, setOpponentDice] = useState([1, 1, 1, 1, 1]);
	const [playerDialog, setPlayerDialog] = useState("");
	const [opponentDialog, setOpponentDialog] = useState("");
	const [guessQty, setGuessQty] = useState(3);
	const [guessDice, setGuessDice] = useState(2);

	let stage = props.stage;

	if (stage === 0) {
		return (
			<div id="Game">

			</div>	    	 
		);	
	}

	return (
		<div id="Main">
		    <div id="Opponent" style={ GetOpponentImage(stage, opponentIntoxication) }>

	        </div> 

			<div id="Game">
				<div className="GameRow">
					<div className="left width_long">
						<div className="speechballoon">test</div>
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
						<div className="shaker"></div>
					</div>	

					<div className="right width_long">
					    {
					    	opponentDice.map(function(dice, diceIndex){
        						return <div className="dice opponent_dice">
							    {
							    	[0,0,0,0,0,0,0,0,0].map(function(dot, dotIndex){
							    		var css = "dot val" + GetDiceDots(dice, dotIndex)
							    		console.log(dice, dotIndex, css);
		        						return <div className={{ css }}>

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
						<div className="shaker"></div>
					</div>	

					<div className="right width_long">
					    {
					    	playerDice.map(function(dice, diceIndex){
        						return <div className="dice player_dice"></div>
							    {
							    	[0,0,0,0,0,0,0,0,0].map(function(dot, dotIndex){
							    		var css = "dot val" + GetDiceDots(dice, dotIndex)
							    		console.log(dice, dotIndex, css);
		        						return <div className={{ css }}>

		        						</div>
		    						})
		    					}
    						})
    					}	
					</div>	
				</div>	

				<div className="GameRow">
					<div className="left width_long">
						<div className="speechballoon">test</div>
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