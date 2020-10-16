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
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            //game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            //game.flipCard();
        });
    });
};

if(document.readyState === loading) {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

let audioController = new AudioController();