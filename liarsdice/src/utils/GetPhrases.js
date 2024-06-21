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
		{ personality: 3, phraseName: "intro", lang: "en", value: "Hi handsome! Please call me Lulu. Shall we begin?"},
		{ personality: 3, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 3, phraseName: "intro", lang: "en", value: "How are you, handsome? I'm Lulu. Let's play!"},
		{ personality: 3, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 4, phraseName: "intro", lang: "en", value: "How do you do? I'm happy to meet you. I am Gongsun Lan."},
		{ personality: 4, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 4, phraseName: "intro", lang: "en", value: "Welcome! I am Gongsun Lan, and I will be your opponent this round."},
		{ personality: 4, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 5, phraseName: "intro", lang: "en", value: "Hey, I'm Big Sister Spring. Are you here to play?"},
		{ personality: 5, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 5, phraseName: "intro", lang: "en", value: "I'm the famous Big Sister Spring. You want to play? Let's go!"},
		{ personality: 5, phraseName: "intro", lang: "cn", value: ""},
		{ personality: 1, phraseName: "newround", lang: "en", value: "I'm so excited. Let's begin!"},
		{ personality: 1, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 1, phraseName: "newround", lang: "en", value: "Please go slow!"},
		{ personality: 1, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 2, phraseName: "newround", lang: "en", value: "Shall we begin?"},
		{ personality: 2, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 2, phraseName: "newround", lang: "en", value: "Come, let's play!"},
		{ personality: 2, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 3, phraseName: "newround", lang: "en", value: "Darling, let's begin."},
		{ personality: 3, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 3, phraseName: "newround", lang: "en", value: "Let's shake the dice!"},
		{ personality: 3, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 4, phraseName: "newround", lang: "en", value: "Please shake the dice!"},
		{ personality: 4, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 4, phraseName: "newround", lang: "en", value: "Time to start a new round!"},
		{ personality: 4, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 5, phraseName: "newround", lang: "en", value: "Why so slow? Shake the damn dice!"},
		{ personality: 5, phraseName: "newround", lang: "cn", value: ""},
		{ personality: 5, phraseName: "newround", lang: "en", value: "Are you ready to lose? Let's go!"},
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
		{ personality: 5, phraseName: "doubt", lang: "cn", value: ""},
		{ personality: 1, phraseName: "myturn", lang: "en", value: "I think it's my turn."},
		{ personality: 1, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 1, phraseName: "myturn", lang: "en", value: "I should make a decision... hmmm..."},
		{ personality: 1, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "myturn", lang: "en", value: "Oooh. My turn!"},
		{ personality: 2, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "myturn", lang: "en", value: "Give me a moment. I need to think."},
		{ personality: 2, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "myturn", lang: "en", value: "Daring, I'm taking my turn now!"},
		{ personality: 3, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "myturn", lang: "en", value: "It's my turn, handsome!"},
		{ personality: 3, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "myturn", lang: "en", value: "Let me see..."},
		{ personality: 4, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "myturn", lang: "en", value: "What should I do?"},
		{ personality: 4, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "myturn", lang: "en", value: "Hmph! I'm gonna make a move!"},
		{ personality: 5, phraseName: "myturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "myturn", lang: "en", value: "My turn now. Guess or open up?"},
		{ personality: 5, phraseName: "myturn", lang: "cn", value: ""},	
		{ personality: 1, phraseName: "yourturn", lang: "en", value: "It's your turn, right?"},
		{ personality: 1, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 1, phraseName: "yourturn", lang: "en", value: "Are you going to make a guess, or open up?"},
		{ personality: 1, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "yourturn", lang: "en", value: "It's your turn!"},
		{ personality: 2, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 2, phraseName: "yourturn", lang: "en", value: "Time for your move!"},
		{ personality: 2, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "yourturn", lang: "en", value: "Handsome, what are you going to do?"},
		{ personality: 3, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 3, phraseName: "yourturn", lang: "en", value: "Baby, please make your move!"},
		{ personality: 3, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "yourturn", lang: "en", value: "Your turn. Please!"},
		{ personality: 4, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 4, phraseName: "yourturn", lang: "en", value: "What do you think you should do?"},
		{ personality: 4, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "yourturn", lang: "en", value: "Hurry up and make a move!"},
		{ personality: 5, phraseName: "yourturn", lang: "cn", value: ""},
		{ personality: 5, phraseName: "yourturn", lang: "en", value: "Damn kid, it's your turn!"},
		{ personality: 5, phraseName: "yourturn", lang: "cn", value: ""},	
		{ personality: 1, phraseName: "guess", lang: "en", value: "Let me see... I guess"},
		{ personality: 1, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 1, phraseName: "guess", lang: "en", value: "I'm guessing..."},
		{ personality: 1, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 2, phraseName: "guess", lang: "en", value: "Let me guess..."},
		{ personality: 2, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 2, phraseName: "guess", lang: "en", value: "I'm going to guess!"},
		{ personality: 2, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 3, phraseName: "guess", lang: "en", value: "I guess..."},
		{ personality: 3, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 3, phraseName: "guess", lang: "en", value: "I think..."},
		{ personality: 3, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 4, phraseName: "guess", lang: "en", value: "Interesting..."},
		{ personality: 4, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 4, phraseName: "guess", lang: "en", value: "This is my guess."},
		{ personality: 4, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 5, phraseName: "guess", lang: "en", value: "You can't fool me."},
		{ personality: 5, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 5, phraseName: "guess", lang: "en", value: "Damn!"},
		{ personality: 5, phraseName: "guess", lang: "cn", value: ""},
		{ personality: 1, phraseName: "openup", lang: "en", value: "Can you show me your dice?"},
		{ personality: 1, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 1, phraseName: "openup", lang: "en", value: "I think we should open up!"},
		{ personality: 1, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 2, phraseName: "openup", lang: "en", value: "Time to open up"},
		{ personality: 2, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 2, phraseName: "openup", lang: "en", value: "Please show your dice!"},
		{ personality: 2, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 3, phraseName: "openup", lang: "en", value: "Show your dice! Show your dice!"},
		{ personality: 3, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 3, phraseName: "openup", lang: "en", value: "Let's see your dice!"},
		{ personality: 3, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 4, phraseName: "openup", lang: "en", value: "Let us reveal all."},
		{ personality: 4, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 4, phraseName: "openup", lang: "en", value: "I'd like to see the dice. Open up, please."},
		{ personality: 4, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 5, phraseName: "openup", lang: "en", value: "I just don't believe you. Open up!"},
		{ personality: 5, phraseName: "openup", lang: "cn", value: ""},
		{ personality: 5, phraseName: "openup", lang: "en", value: "Show your damn dice!"},
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