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
				<div className="left width_long">
x
				</div>	

				<div className="right width_short">
x
				</div>		
			</div>	

			<div className="GameRow">
				<div className="left width_short">
x
				</div>	

				<div className="right width_long">
x
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
	);
}

export default Game;