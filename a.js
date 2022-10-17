var arr = ["Rock", "Scissors", "Paper"];
gameImage = ["./img/rock.png", "./img/scissors.png", "./img/paper.png"];

var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var result = document.querySelector("#result");
var p1Score = document.querySelector("#p1-score");
var p2Score = document.querySelector("#p2-score");
var autoPlaySelector = document.querySelector("#autoPlay");

class Game {
  constructor() {
    this.p1 = {
      value: 0,
      score: 0,
    };
    this.p2 = {
      value: 0,
      score: 0,
    };
    this.autoPlay = false;
  }

  zarla() {
    return Math.floor(Math.random() * 3);
  }

  check() {
    if (this.p1.value == this.p2.value) {
      return "Draw";
    } else if (this.p1.value == 0 && this.p2.value == 1) {
      return 1;
    } else if (this.p1.value == 0 && this.p2.value == 2) {
      return 2;
    } else if (this.p1.value == 1 && this.p2.value == 0) {
      return 2;
    } else if (this.p1.value == 1 && this.p2.value == 2) {
      return 1;
    } else if (this.p1.value == 2 && this.p2.value == 0) {
      return 1;
    } else if (this.p1.value == 2 && this.p2.value == 1) {
      return 2;
    }
  }
  play() {
    this.p1.value = this.zarla();
    this.p2.value = this.zarla();

    p1.src = gameImage[this.p1.value];
    p2.src = gameImage[this.p2.value];

    result.value =
      this.check() != "Draw"
        ? this.check() == 1
          ? "P1 Kazandı"
          : "P2 Kazandı "
        : this.check();

    this.check() == 1
      ? (p1Score.textContent = ++this.p1.score)
      : this.check() == 2
      ? (p2Score.textContent = ++this.p2.score)
      : "Draw";
  }
}

var game = new Game();

var autoTime;

const autoPlay = () => {
  if (!game.autoPlay) {
    autoPlaySelector.textContent = "Durdur"
    autoTime = setInterval(() => {
      game.play();
    }, 1500);
    game.autoPlay = true;
  } else {
    autoPlaySelector.textContent = "Auto Play"
    clearInterval(autoTime);
    game.autoPlay = false;
  }
};
