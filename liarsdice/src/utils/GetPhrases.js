const GetPhrases = (personality, phraseName, lang) => {
	let phrases = [
		{ personality: 1, phraseName: "intro", lang: "en", value: "Hello, I'm Little Grass. Please go easy on me!"},
		{ personality: 1, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 1, phraseName: "intro", lang: "en", value: "Hello, I'm Little Grass. I'm new at this. Pease show me the ropes!"},
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
		{ personality: 5, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 1, phraseName: "newround", lang: "en", value: "I'm so excited. Let's begin!"},
		{ personality: 1, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 1, phraseName: "newround", lang: "en", value: "Please go slow!"},
		{ personality: 1, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 2, phraseName: "newround", lang: "en", value: "Shall we begin?"},
		{ personality: 2, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 2, phraseName: "newround", lang: "en", value: "Come, let's play!"},
		{ personality: 2, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 3, phraseName: "newround", lang: "cn", value: "Darling, let's begin."},
		{ personality: 3, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 3, phraseName: "newround", lang: "cn", value: "Let's shake the dice!"},
		{ personality: 3, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 4, phraseName: "newround", lang: "cn", value: "Please shake the dice!"},
		{ personality: 4, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 4, phraseName: "newround", lang: "cn", value: "Time to start a new round!"},
		{ personality: 4, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 5, phraseName: "newround", lang: "cn", value: "Why so slow? Shake the damn dice!"},
		{ personality: 5, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 5, phraseName: "newround", lang: "cn", value: "Are you ready to lose? Let's go!"},
		{ personality: 5, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 1, phraseName: "doubt", lang: "en", value: "Are we supposed to play like that?"},
		{ personality: 1, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 1, phraseName: "doubt", lang: "en", value: "Let me think..."},
		{ personality: 1, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 2, phraseName: "doubt", lang: "en", value: "Are you sure about this?"},
		{ personality: 2, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 2, phraseName: "doubt", lang: "en", value: "That is an odd way to play..."},
		{ personality: 2, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 3, phraseName: "doubt", lang: "en", value: "Handsome, are you sure?"},
		{ personality: 3, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 3, phraseName: "doubt", lang: "en", value: "Darling, your moves are strange!"},
		{ personality: 3, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 4, phraseName: "doubt", lang: "en", value: "Is that what you really want to do?"},
		{ personality: 4, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 4, phraseName: "doubt", lang: "en", value: "Interesting, interesting!"},
		{ personality: 4, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 5, phraseName: "doubt", lang: "en", value: "Do you know how to play or not?!"},
		{ personality: 5, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 5, phraseName: "doubt", lang: "en", value: "Are you crazy?"},
		{ personality: 1, phraseName: "shake", lang: "en", value: ""},
		{ personality: 1, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 1, phraseName: "shake", lang: "en", value: ""},
		{ personality: 1, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 2, phraseName: "shake", lang: "en", value: ""},
		{ personality: 2, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 2, phraseName: "shake", lang: "en", value: ""},
		{ personality: 2, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 3, phraseName: "shake", lang: "en", value: ""},
		{ personality: 3, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 3, phraseName: "shake", lang: "en", value: ""},
		{ personality: 3, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 4, phraseName: "shake", lang: "en", value: ""},
		{ personality: 4, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 4, phraseName: "shake", lang: "en", value: ""},
		{ personality: 4, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 5, phraseName: "shake", lang: "en", value: ""},
		{ personality: 5, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 5, phraseName: "shake", lang: "en", value: ""},
		{ personality: 5, phraseName: "shake", lang: "cn", value: ""},	
		{ personality: 5, phraseName: "shake", lang: "cn", value: ""},
		{ personality: 1, phraseName: "myturn", lang: "en", value: "I think it's my turn."},
		{ personality: 1, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 1, phraseName: "myturn", lang: "en", value: "I should make a decision."},
		{ personality: 1, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 2, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 2, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 3, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 3, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 4, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 4, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 5, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "myturn", lang: "en", value: ""},
		{ personality: 5, phraseName: "myturn", lang: "cn", value: ""},	
		{ personality: 5, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 1, phraseName: "yourturn", lang: "en", value: "It's your turn, right?"},
		{ personality: 1, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 1, phraseName: "yourturn", lang: "en", value: "It's your turn. Please make a decision!"},
		{ personality: 1, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 2, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 2, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 3, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 3, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 4, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 4, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 5, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "yourturn", lang: "en", value: ""},
		{ personality: 5, phraseName: "yourturn", lang: "cn", value: ""},	
		{ personality: 5, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 1, phraseName: "guess", lang: "en", value: "Let me see... I guess"},
		{ personality: 1, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 1, phraseName: "guess", lang: "en", value: "I'm guessing..."},
		{ personality: 1, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 2, phraseName: "guess", lang: "en", value: ""},
		{ personality: 2, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 2, phraseName: "guess", lang: "en", value: ""},
		{ personality: 2, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 3, phraseName: "guess", lang: "en", value: ""},
		{ personality: 3, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 3, phraseName: "guess", lang: "en", value: ""},
		{ personality: 3, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 4, phraseName: "guess", lang: "en", value: ""},
		{ personality: 4, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 4, phraseName: "guess", lang: "en", value: ""},
		{ personality: 4, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 5, phraseName: "guess", lang: "en", value: ""},
		{ personality: 5, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 5, phraseName: "guess", lang: "en", value: ""},
		{ personality: 5, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 1, phraseName: "openup", lang: "en", value: "Can you show me your dice?"},
		{ personality: 1, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 1, phraseName: "openup", lang: "en", value: "I think we should open up!"},
		{ personality: 1, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 2, phraseName: "openup", lang: "en", value: ""},
		{ personality: 2, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 2, phraseName: "openup", lang: "en", value: ""},
		{ personality: 2, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 3, phraseName: "openup", lang: "en", value: ""},
		{ personality: 3, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 3, phraseName: "openup", lang: "en", value: ""},
		{ personality: 3, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 4, phraseName: "openup", lang: "en", value: ""},
		{ personality: 4, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 4, phraseName: "openup", lang: "en", value: ""},
		{ personality: 4, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 5, phraseName: "openup", lang: "en", value: ""},
		{ personality: 5, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 5, phraseName: "openup", lang: "en", value: ""},
		{ personality: 5, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 5, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 1, phraseName: "win", lang: "en", value: "Looks like I've won! Please have a drink."},
		{ personality: 1, phraseName: "win", lang: "cn", value: ""},
		{ personality: 1, phraseName: "win", lang: "en", value: "I was lucky!"},
		{ personality: 1, phraseName: "win", lang: "cn", value: ""},
		{ personality: 2, phraseName: "win", lang: "en", value: ""},
		{ personality: 2, phraseName: "win", lang: "cn", value: ""},
		{ personality: 2, phraseName: "win", lang: "en", value: ""},
		{ personality: 2, phraseName: "win", lang: "cn", value: ""},
		{ personality: 3, phraseName: "win", lang: "en", value: ""},
		{ personality: 3, phraseName: "win", lang: "cn", value: ""},
		{ personality: 3, phraseName: "win", lang: "en", value: ""},
		{ personality: 3, phraseName: "win", lang: "cn", value: ""},
		{ personality: 4, phraseName: "win", lang: "en", value: ""},
		{ personality: 4, phraseName: "win", lang: "cn", value: ""},
		{ personality: 4, phraseName: "win", lang: "en", value: ""},
		{ personality: 4, phraseName: "win", lang: "cn", value: ""},
		{ personality: 5, phraseName: "win", lang: "en", value: ""},
		{ personality: 5, phraseName: "win", lang: "cn", value: ""},
		{ personality: 5, phraseName: "win", lang: "en", value: ""},
		{ personality: 5, phraseName: "win", lang: "cn", value: ""},	
		{ personality: 5, phraseName: "win", lang: "cn", value: ""},
		{ personality: 1, phraseName: "lose", lang: "en", value: "Does this mean I lose?"},
		{ personality: 1, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 1, phraseName: "lose", lang: "en", value: "Please be gentle! I'll drink."},
		{ personality: 1, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 2, phraseName: "lose", lang: "en", value: ""},
		{ personality: 2, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 2, phraseName: "lose", lang: "en", value: ""},
		{ personality: 2, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 3, phraseName: "lose", lang: "en", value: ""},
		{ personality: 3, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 3, phraseName: "lose", lang: "en", value: ""},
		{ personality: 3, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 4, phraseName: "lose", lang: "en", value: ""},
		{ personality: 4, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 4, phraseName: "lose", lang: "en", value: ""},
		{ personality: 4, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 5, phraseName: "lose", lang: "en", value: ""},
		{ personality: 5, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 5, phraseName: "lose", lang: "en", value: ""},
		{ personality: 5, phraseName: "lose", lang: "cn", value: ""},	
		{ personality: 5, phraseName: "lose", lang: "cn", value: ""},
		{ personality: 1, phraseName: "stagewin", lang: "en", value: "I can't believe I won!"},
		{ personality: 1, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 1, phraseName: "stagewin", lang: "en", value: "Thank you for going easy on me!"},
		{ personality: 1, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 2, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 2, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 2, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 2, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 3, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 3, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 3, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 3, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 4, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 4, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 4, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 4, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 5, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 5, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 5, phraseName: "stagewin", lang: "en", value: ""},
		{ personality: 5, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 5, phraseName: "stagewin", lang: "cn", value: ""},
		{ personality: 1, phraseName: "stagelose", lang: "en", value: "Oh, I think I drank too much..."},
		{ personality: 1, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 1, phraseName: "stagelose", lang: "en", value: "You're too good at this! I can't beat you."},
		{ personality: 1, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 2, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 2, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 2, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 2, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 3, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 3, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 3, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 3, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 4, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 4, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 4, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 4, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 5, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 5, phraseName: "stagelose", lang: "cn", value: ""},
		{ personality: 5, phraseName: "stagelose", lang: "en", value: ""},
		{ personality: 5, phraseName: "stagelose", lang: "cn", value: ""}
	];

	let match = phrases.filter((x)=> { return (x.phraseName === phraseName && x.lang === lang && (x.personality == null || x.personality === personality)); });

	if (match.length === 0) return "";
	if (match.length > 1) {
		var r = Math.floor(Math.random() * match.length);
		return match[r].value;
	}

	return match[0].value;
}

export default GetPhrases;	