const GetActions = (stage, turns, qty, dice, ownDice, intoxication) => {
	let action = { "type": "open", "qty": 0, "dice": 0};

	if (qty === 4 && dice === 2) { //if minimal, always guess
		action.type = "guess";
	} else {
		var intelligence = (stage * 10) + intoxication;

		if (intelligence >= 50) {
			//most reasonable
			var ownQty = ownDice.filter((x) => { return x === 1 || x === dice; } ).length;

			action.type = (qty <= ownQty + 3 ? "guess" : "open");
		} else {
			var rand = Math.floor(Math.random() * 2);
			action.type = (rand == 0 ? "guess" : "open");
		}

		if (qty >= 8) action.type = "open"; //last reset
	}

	if (action.type === "guess") {
		var newQty = Math.floor(Math.random() * 2 + 1) + qty;
		var newDice = Math.floor(Math.random() * 3) + dice;

		action.qty = (newQty > 10 ? 10 : newQty);
		action.dice = (newDice > 6 ? 6 : newDice);
		return action;
	}

	return action; //open by default
}

export default GetActions;	