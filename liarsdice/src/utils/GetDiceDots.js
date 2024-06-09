const GetDiceDots = (diceVal, dotIndex) => {
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

	return dots[diceVal - 1][dotIndex];
}

export default GetDiceDots;	