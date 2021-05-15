'use strict';
/*--------------Code written following the walkthrough tutorial mentioned in the README file*/

/*--------------------------------------------------------------------AudioController Class*/
class AudioController {
    constructor() {
        this.bgMusic = new Audio("assets/audio/new-horizons.mp3");
        this.flipSound = new Audio("assets/audio/click.mp3");
        this.matchSound = new Audio("assets/audio/match.mp3");
        this.victorySound = new Audio("assets/audio/victory.mp3");
        this.gameOverSound = new Audio("assets/audio/game-over.mp3");
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }

    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
/*--------------------------------------------------------------------Code written by me*/
    mute() {
        document.getElementById("mute").addEventListener("click", () => {
            this.bgMusic.muted = true;
            this.matchSound.muted = true;
            this.flipSound.muted = true;
            this.victorySound.muted = true;
            this.gameOverSound.muted = true;
        });
    }
    unmute() {
        document.getElementById("unmute").addEventListener("click", () => {
            this.bgMusic.muted = false;
            this.matchSound.muted = false;
            this.flipSound.muted = false;
            this.victorySound.muted = false;
            this.gameOverSound.muted = false;
        });
    }
}

/*----------------------------------------------------------------------End code written by me*/

/*---------------------------------------------------------------------------PlanetShift Class*/

class PlanetShift {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById("time-remaining");
        this.ticker = document.getElementById("flips");
        this.audioController = new AudioController();
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
         }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
        this.audioController.mute();
        this.audioController.unmute();
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove("visible");
            card.classList.remove("matched");
        });
    }

    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add("visible");

            if(this.cardToCheck)
                this.checkForCardMatch(card);
            else 
                this.cardToCheck = card;
        }
    }

    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add("matched");
        card2.classList.add("matched");
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove("visible");
            card2.classList.remove("visible");
            this.busy = false;
        }, 1000);
    }

    getCardType(card) {
        return card.getElementsByClassName("card-value")[0].src;
    }

    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
            this.gameOver();
        }, 1000);
    }

    gameOver() {
        clearInterval(this.countdown);
        this.audioController.gameOver();
        document.getElementById("game-over-text").classList.add("visible");
        this.hideCards();
    }

    victory() {
        clearInterval(this.countdown);
        this.audioController.victory();
        document.getElementById("victory-text").classList.add("visible");
        this.hideCards();
    }

    shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }

    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

       
/*-------------------------------------------------------------------------------------------------readyState function */

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new PlanetShift(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            game.flipCard(card);
        });
    });
}

/*---------------------------------------------------------------------------------------------modal-box*/

const button = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
button.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";   
    }
};

