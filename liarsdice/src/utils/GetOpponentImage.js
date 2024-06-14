const GetOpponentImage = (stage, intoxication) => {	
	var tiers = [100, 75, 50, 25];

	for (var i = 0; i < tiers.length; i++) {
		if (intoxication >= tiers[i]) {
			return "opponent" + stage + "_" + tiers[i];
		}
	}
}

export default GetOpponentImage;	