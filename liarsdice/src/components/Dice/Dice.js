import React from 'react';
import './Dice.css';

import GetDiceDots from '../../utils/GetDiceDots';

function Dice(props) {
	let dice = props.dice;
	let diceIndex = props.diceIndex;
	let classPrefix = props.classPrefix;
	let highlight = props.highlight;
	let show = props.show;

	return <div className={ "dice " + classPrefix + " " + (highlight ? "highlighted_dice" : "") } key={ classPrefix + diceIndex }>
    {
    	[0,0,0,0,0,0,0,0,0].map(function(dot, dotIndex){
    		var css = (show ? "dot val" + GetDiceDots(dice, dotIndex) : "dot hideDice");

			return <div className={ css } title={ css } key={ classPrefix + diceIndex + "_" + dotIndex }>

			</div>
		})
	}
	</div>
}

export default Dice;