const GetPhrases = (personality, phraseName, lang) => {
	let labels = [
		{ personality: 1, phraseName: "intro", lang: "en", value: "Hello, I'm Little Grass. Please go easy on me!"},
		{ personality: 1, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 1, phraseName: "intro", lang: "en", value: "Hello, I'm Little Grass. I'm new at this. Shall we begin?"},
		{ personality: 1, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 2, phraseName: "intro", lang: "en", value: "My name is Chanel. Let's play!"},
		{ personality: 2, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 2, phraseName: "intro", lang: "en", value: "I'm Chanel. Are you familiar with this game?"},
		{ personality: 2, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 3, phraseName: "intro", lang: "cn", value: "Hi handsome! Please call me Lulu. Shall we begin?"},
		{ personality: 3, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 3, phraseName: "intro", lang: "cn", value: "How are you, handsome? I'm Lulu. Let's play!"},
		{ personality: 3, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 4, phraseName: "intro", lang: "cn", value: "How do you do? I'm happy to meet you. I am Gongsun Lan."},
		{ personality: 4, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 4, phraseName: "intro", lang: "cn", value: "Welcome! I am Gongsun Lan, and I will be your opponent this round."},
		{ personality: 4, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 5, phraseName: "intro", lang: "cn", value: "Hey, I'm Big Sister Spring. Are you here to play?"},
		{ personality: 5, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 5, phraseName: "intro", lang: "cn", value: "I'm the famous Big Sister Spring. You want to play? Let's go!"},
		{ personality: 5, phraseName: "intro", lang: "cn", value: ""}
	];

	let match = phrases.filter((x)=> { return (x.phraseName === phraseName && x.lang === lang && (x.personality == null || x.personality === personality)); });

	if (match.length === 0) return "";
	if (match.length > 1) {
		var r = Math.foor(Math.rand() * match.length) + 1;
		return match[r].value;
	}

	return match[0].value;
}

export default GetPhrases;	