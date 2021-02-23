import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "William Evan C14180222";
  barisText = 0;
  kolomText = 0;
  horizontalCounter1 = 0;
  horizontalCounter2 = 0;
  verticalCounter1 = 0;
  verticalCounter2 = 0;
  player1Win = 0;
  player2Win = 0;
  winner = "";
  mainArray = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  playerCounter = 0;
  answer() {
    if (this.playerCounter % 2 == 0) {
      this.mainArray[this.barisText - 1][this.kolomText - 1] = "1";
    } else if (this.playerCounter % 2 == 1) {
      this.mainArray[this.barisText - 1][this.kolomText - 1] = "2";
    }

    //check horizontal
    for (let i = 0; i < 5; i++) {
      this.horizontalCounter1 = 0;
      this.horizontalCounter2 = 0;
      for (let j = 0; j < 5; j++) {
        if (this.mainArray[i][j] == "1") {
          this.horizontalCounter1 = this.horizontalCounter1 + 1;
          if (this.horizontalCounter1 == 4) {
            this.winner = "Player1 Horizontal Win";
          }
        } else if (this.mainArray[i][j] == "2") {
          this.horizontalCounter2 = this.horizontalCounter2 + 1;
          if (this.horizontalCounter2 == 4) {
            this.winner = "Player2 Horizontal Win";
          }
        }
      }
    }

    //check vertical
    for (let i = 0; i < 5; i++) {
      this.verticalCounter1 = 0;
      this.verticalCounter2 = 0;
      for (let j = 0; j < 5; j++) {
        if (this.mainArray[j][i] == "1") {
          this.verticalCounter1 = this.verticalCounter1 + 1;
          if (this.verticalCounter1 == 4) {
            this.winner = "Player1 Vertical Win";
          }
        } else if (this.mainArray[j][i] == "2") {
          this.verticalCounter2 = this.verticalCounter2 + 1;
          if (this.verticalCounter2 == 4) {
            this.winner = "Player2 Vertical Win";
          }
        }
      }
    }
    this.playerCounter = this.playerCounter + 1;
  }
}
