import React from 'react';
import './Dice.css';

function Dice(props) {
	let dice = props.dice;
	let diceIndex = props.diceIndex;
	let classPrefix = props.classPrefix;
	let highlight = props.highlight;
	let show = props.show;

	var dots = [
		[
			0, 0, 0,
			0, 1, 0,
			0, 0, 0
		],
		[
			0, 0, 1,
			0, 0, 0,
			1, 0, 0
		],
		[
			0, 0, 1,
			0, 1, 0,
			1, 0, 0
		],
		[
			1, 0, 1,
			0, 0, 0,
			1, 0, 1
		],
		[
			1, 0, 1,
			0, 1, 0,
			1, 0, 1
		],
		[
			1, 0, 1,
			1, 0, 1,
			1, 0, 1
		]
	];

	return <div className={ "dice " + classPrefix + " " + (highlight ? "highlighted_dice" : "") } key={ classPrefix + diceIndex }>
    {
    	dots[dice - 1].map(function(dot, dotIndex){
    		var css = (show ? "dot val" + dot : "dot hideDice");

			return <div className={ css } title={ css } key={ classPrefix + diceIndex + "_" + dotIndex }>

			</div>
		})
	}
	</div>
}

export default Dice;