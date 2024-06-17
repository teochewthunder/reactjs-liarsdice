const GetLabels = (labelName, lang) => {
	let labels = [
		{ labelName: "start", lang: "en", value: "BEGIN"},
		{ labelName: "start", lang: "cn", value: "开始"},
		{ labelName: "startstage", lang: "en", value: "Start Stage"},
		{ labelName: "startstage", lang: "cn", value: "开始"},
		{ labelName: "restartstage", lang: "en", value: "Restart Stage"},
		{ labelName: "restartstage", lang: "cn", value: "重新开始"},
		{ labelName: "startnewround", lang: "en", value: "Start New Round"},
		{ labelName: "startnewround", lang: "cn", value: "重阶段开始"},
		{ labelName: "quit", lang: "en", value: "Quit"},
		{ labelName: "quit", lang: "cn", value: "退出"},
		{ labelName: "language", lang: "en", value: "Language"},
		{ labelName: "language", lang: "cn", value: "语言"},
		{ labelName: "stage1", lang: "en", value: "STAGE ONE"},
		{ labelName: "stage1", lang: "cn", value: "第一阶段"},
		{ labelName: "stage2", lang: "en", value: "STAGE TWO"},
		{ labelName: "stage2", lang: "cn", value: "第二阶段"},
		{ labelName: "stage3", lang: "en", value: "STAGE THREE"},
		{ labelName: "stage3", lang: "cn", value: "第三阶段"},
		{ labelName: "stage4", lang: "en", value: "STAGE FOUR"},
		{ labelName: "stage4", lang: "cn", value: "第四阶段"},
		{ labelName: "stage5", lang: "en", value: "STAGE FIVE"},
		{ labelName: "stage5", lang: "cn", value: "第五阶段"},	
		{ labelName: "opponent1", lang: "en", value: "LITTLE GRASS"},
		{ labelName: "opponent1", lang: "cn", value: "小草"},
		{ labelName: "opponent2", lang: "en", value: "CHANEL"},
		{ labelName: "opponent2", lang: "cn", value: "CHANEL"},
		{ labelName: "opponent3", lang: "en", value: "LULU"},
		{ labelName: "opponent3", lang: "cn", value: "鹿鹿"},
		{ labelName: "opponent4", lang: "en", value: "GONGSUN LAN"},
		{ labelName: "opponent4", lang: "cn", value: "公孙蓝"},
		{ labelName: "opponent5", lang: "en", value: "BIG SISTER SPRING"},
		{ labelName: "opponent5", lang: "cn", value: "春姐"},	
		{ labelName: "guess", lang: "en", value: "Guess"},
		{ labelName: "guess", lang: "cn", value: "猜"},	
		{ labelName: "openup", lang: "en", value: "Open Up!"},
		{ labelName: "openup", lang: "cn", value: "开!"},
		{ labelName: "1s", lang: "en", value: " ones"},
		{ labelName: "1s", lang: "cn", value: "一"},
		{ labelName: "2s", lang: "en", value: " twos"},
		{ labelName: "2s", lang: "cn", value: "二"},
		{ labelName: "3s", lang: "en", value: " threes"},
		{ labelName: "3s", lang: "cn", value: "三"},
		{ labelName: "4s", lang: "en", value: " fours"},
		{ labelName: "4s", lang: "cn", value: "四"},
		{ labelName: "5s", lang: "en", value: " fives"},
		{ labelName: "5s", lang: "cn", value: "五"},
		{ labelName: "6s", lang: "en", value: " sixes"},
		{ labelName: "6s", lang: "cn", value: "六"},	
		{ labelName: "1dice", lang: "en", value: "One"},
		{ labelName: "1dice", lang: "cn", value: "一个"},
		{ labelName: "2dice", lang: "en", value: "Two"},
		{ labelName: "2dice", lang: "cn", value: "两个"},
		{ labelName: "3dice", lang: "en", value: "Three"},
		{ labelName: "3dice", lang: "cn", value: "三个"},
		{ labelName: "4dice", lang: "en", value: "Four"},
		{ labelName: "4dice", lang: "cn", value: "四个"},
		{ labelName: "5dice", lang: "en", value: "Five"},
		{ labelName: "5dice", lang: "cn", value: "五个"},
		{ labelName: "6dice", lang: "en", value: "Six"},
		{ labelName: "6dice", lang: "cn", value: "六个"},	
		{ labelName: "7dice", lang: "en", value: "Seven"},
		{ labelName: "7dice", lang: "cn", value: "七个"},
		{ labelName: "8dice", lang: "en", value: "Eight"},
		{ labelName: "8dice", lang: "cn", value: "八个"},
		{ labelName: "9dice", lang: "en", value: "Nine"},
		{ labelName: "9dice", lang: "cn", value: "九个"},
		{ labelName: "10dice", lang: "en", value: "Ten"},
		{ labelName: "10dice", lang: "cn", value: "十个"},	
		{ labelName: "", lang: "", value: ""}
	];

	let match = labels.filter((x)=> { return (x.labelName === labelName && x.lang === lang); });

	if (match.length === 0) return "";
	return match[0].value;
}

export default GetLabels;	