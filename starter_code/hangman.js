let hangman;

class Hangman {
  constructor() {
    this.words = ["Alberto", "aa"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if ((keyCode <= 90) && (keyCode >= 65)) {
      return true;
    } else {
      return false;
    }
  };

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) !== -1) {
      return false;
    } else {
      return true;
    }
  };


  addCorrectLetter(i) {
this.letters.push(this.secretWord[i]);
this.guessedLetter += this.secretWord[i].toUpperCase();
this.checkWinner;
  }

  addWrongLetter(letter) {
this.letters.push(letter);
this.errorsLeft -=1;
this.checkGameOver();
  }

  checkGameOver() {
return (this.errorsLeft === 0);
  }

  checkWinner() {
if (this.guessedLetter.length !== this.secretWord.length)
return false;
else{
  for ( var i= 0 ; i < this.secretWord.length ;i++){
    if (this.guessedLetter.toLowerCase().indexOf(this.secretWord[i]) !== -1){
    return false;
    }
  }
  return true;
}
  };
}




document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
