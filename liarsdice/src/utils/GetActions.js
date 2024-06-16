const GetActions = (stage, turns, qty, dice, ownDice, intoxication) => {
	let action = { "type": "open", "qty": 0, "dice": 0};

	if ((qty === 4 && dice === 2) || turns === 0) { //generic response
		action.type = "guess";
		var newQty = Math.floor(Math.random() * 2 + 1) + qty;
		var newDice = Math.floor(Math.random() * 2) + dice;

		action.qty = newQty;
		action.dice = (newDice > 6 ? 6 : newDice);
		return action;
	}

	var intelligence = (stage * 10) + intoxication;
	//use inteligence to determine actions

	return action;
}

export default GetActions;	