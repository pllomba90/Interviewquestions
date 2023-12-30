function guessingGame() {
    let secretNum = Math.floor((Math.random() * 100));
    let isOver = false;
    let guesses = 0;

    return(
        function guessingGame(guess) {
            if (isOver === true){
                return "The game is over, you already won!"
            }
            guesses++;
            if (guess < secretNum){
                return(`${guess} is too low!`);
            } else if (guess > secretNum){
                return (`${guess} is too high!`);
            } else {
                isOver = true;
                return (`You win! You found ${secretNum} in ${guesses} guesses.`);
            }
        }
    );


}

module.exports = { guessingGame };
