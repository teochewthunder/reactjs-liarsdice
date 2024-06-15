const GetActions = (stage, qty, dice, ownDice, intoxication) => {
	let action = { "type": "open", "qty": 0, "dice": 0};

	if (qty < 5) { //generic response
		action.type = "guess";
		var newQty = Math.floor(Math.random() * 2 + 1) + qty;
		var newDice = Math.floor(Math.random() * 2) + dice;

		action.qty = newQty;
		action.dice = (newDice > 6 ? 6 : newDice);
		return action;
	}

	if (stage === 1) {

	}

	if (stage === 2) {
		
	}

	if (stage === 3) {
		
	}

	if (stage === 4) {
		
	}

	if (stage === 5) {
		
	}

	return action;
}

export default GetActions;	