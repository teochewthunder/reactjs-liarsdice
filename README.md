# reactjs-liarsdice (in progress)
 Game of deceit written using ReactJS

## App
- Data
  - `lang`: "en" or "cn". Used to determine the language used in the labels of the interface.
  - `dialogSpeed`: Integer. 100, 200 or 500. Used to determine the delay between dialogs.
  - `stage`: Integer. Range 1 to 6. Determines progress in the game, and current opponent.
  - `gameStarted`: Boolean. `false` by default, `true` only when game is started by user.
- Functions
  - `start()`: Set `stage` to 1 and (after a delay) `gameStarted1 to `true`.

 ## Game
- Props
  - `lang`: "en" or "cn". Used to determine the language used in the labels of the interface.
  - `dialogSpeed`: Integer. 100, 200 or 500. Used to determine the delay between dialogs.
  - `stage`: Integer. Range 1 to 6. Determines progress in the game, and current opponent.
  - `gameStarted`: Boolean. `false` by default, `true` only when game is started by user.
- Data
  - `playerIntoxication`: Integer. Range 0 to 100. Starts at 100 at the start of every stage, and when it reaches 0, the player loses.
  - `opponentIntoxication`: Integer. Range 0 to 100. Starts at 100 at the start of every stage, and when it reaches 0, the player wins.
  - `playerDice`: Array of five integers. Range 1 to 6.
  - `opponentDice`: Array of five integers. Range 1 to 6.
  - `opponentDialog`: String.
  - `playerGuessQty`: Integer. Range 3 to 10.
  - `playerGuessDice`: Integer. Range 2 to 6.
  - `guessQty`: Integer. Range 3 to 10.
  - `guessDice`: Integer. Range 2 to 6.
  - `shake`: Boolean. Controls whether to display shaking animation.
  - `show`: Boolean. Controls whether to show values of opponent's dice.
  - `isPlayerTurn`: Boolean. Controls whether or not to display player's dashboard.
  - `round`: Integer. Starts at 0.
  - `stageStarted`: Boolean. `false` by default. Set to `true` to indicate that stage has started.
  - `roundStarted`: Boolean. `false` by default. Set to `true` to indicate that round has started.
  - `turns`: Integer. 0 at the start of every round.

- Functions
  - `quit()`: Reset `stage` and `gameStarted` so that user ends up at the Intro screen.
  - `restartStage()`: Reset intoxication levels, guesses and `stageStarted`.
  - `startStage()`: Reset intoxication levels, guesses and other flags. Sets `stageStarted` to `true`. Sets `opponentDialog`.
  - `startNewRound()`: Set `roundStarted` to `true`. Activate shaking and dice rolling animations. After a delay, reset `turns`, increment `round`. Ensure player goes first and set `opponentDialog` to reflect this.
  - `endRound()`: Reset guesses and `roundtarted`. If `opponentIntoxication` has reached 0, go on to next stage by incrementing `stage`. Otherwise, continue by setting `opponentDialog`.
  - `adjustPlayerGuessQty()`: Adjust `playerGuessQty` up or down, but within a range.
  - `adjustPlayerGuessDice()`: Adjust `playerGuessDice` up or down, but within a range.
  - `isValidGuess()`: Check if the projected guess quantity and dice value is valid.
  - `isHighlightedDice()`: Against the guessed dice, return `true` if the dice value is 1 or matches the gussed dice value, and `false` otherwise.
  - `getMeterColor()`: Return a CSS class based on the numerical value of the meter.
  - `opponentAction()`: Use a series of arguments - intoxication, current dice, current guess, stage - to determine next action, which can be opening up or a counter-guess.
  - `guess()`: Increment `turns`, and set `opponentDialog`. After a delay, replace the values of `guessQty` and `guessDice`, and set `opponentDialog`.
  - `openup()`: Set `opponentDialog`. After a delay, set `show` to `true` and check win conditions.
  - `checkWin()`: Check if player or opponent has won, and set `opponentDialog` accordingly, then decrement either opponent or player's intoxication level.

 ## Dice
- Props
  - `dice`: Array of five integers. Range 1 to 6.
  - `diceIndex`: Integer. Range 0 to 5.
  - `classPrefix`: String. Determines CSS class.
  - `highlight`: Boolean. Determines CSS class.
  - `show`: Boolean. Determines CSS class.


### Utilities
- `GetLabels`: Uses a label type and language to obtain a match from an array, returning a string value.
- `GetPhrases`: Uses a phrase type, language and stage to obtain matches from an array, then randomly picks one element and returns the string value.
- `GetAction`: Returns an object that dictates the next action - open up or guess. If it is a guess, quantity and dice are also specified. The decision is based on stage, intoxication level, the current guess quantoty and dice, and the opponent's dice.
- `GetOpponentImage`: Returns a CSS string for a background image based on the stage and intoxication level.
