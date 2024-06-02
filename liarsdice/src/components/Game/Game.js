import './Game.css';

function Game(props) {

	let stage = props.stage;

	if (stage === 0) {
		return (
			<div id="Game">

			</div>	    	 
		);	
	}

	return (
		<div id="Game">
			<div className="GameRow">
				
			</div>				
		</div>	    	 
	);
}

export default Game;