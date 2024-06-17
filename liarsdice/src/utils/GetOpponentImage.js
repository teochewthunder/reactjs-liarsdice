const GetOpponentImage = (stage, intoxication) => {	
	var tiers = [75, 50, 25, 0];
	var imageStr = "";

	for (var i = 0; i < tiers.length; i++) {
		if (intoxication - 25 <= tiers[i]) {
			imageStr = "opponent" + stage + "_" + tiers[i];
		}
	}

	return imageStr;
}

export default GetOpponentImage;	