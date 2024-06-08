const GetDiceDots = (diceval, dotindex) => {
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

	return dots[diceval - 1][dotindex];
}

export default GetDiceDots;	