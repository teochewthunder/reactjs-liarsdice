# reactjs-liarsdice (in progress)
 Game of deceit written using ReactJS

## App
- Props
  - `lang`: "en" or "cn". Used to determine the language used in the labels of the interface.
  - `dialogSpeed`: Numerical. 100, 200 or 500. Used to determine the delay between dialogs.
  - `stage`: Numerical. Range 1 to 6. Determines progress in the game, and current opponent.
  - `gameStarted`: Boolean. `false` by default, `true` only when game is started by user.
- Functions
  - xx
  - xx
  - xx
  - xx

 ## Game
- Props
  - xx
  - xx
  - xx
  - xx
- Functions
  - xx
  - xx
  - xx
  - xx

 ## Dice
- Props
  - xx
  - xx
  - xx
  - xx
- Functions
  - xx
  - xx
  - xx
  - xx

### Utilities
- `GetLabels`: Uses a label type and language to obtain a match from an array, returning a string value.
- `GetPhrases`: Uses a phrase type, language and stage to obtain matches from an array, then randomly picks one element and returns the string value.
- `GetAction`: Returns an object that dictates the next action - open up or guess. If it is a guess, quantity and dice are also specified. The decision is based on stage, intoxication level, the current guess quantoty and dice, and the opponent's dice.
- `GetOpponentImage`: Returns a CSS string for a background image based on the stage and intoxication level.
