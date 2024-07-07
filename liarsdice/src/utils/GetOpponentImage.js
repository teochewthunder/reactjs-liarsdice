const GetOpponentImage = (stage, intoxication) => {	
	if (intoxication === 0) {
		return "opponent" + stage + "_0";
	} 

	if (intoxication > 0 && intoxication <= 25) {
		return "opponent" + stage + "_25";
	} 	

	if (intoxication > 25 && intoxication <= 50) {
		return "opponent" + stage + "_50";
	} 	

	if (intoxication > 50) {
		return "opponent" + stage + "_75";
	} 	
}

export default GetOpponentImage;	