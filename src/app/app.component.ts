import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = "angular--ssp_jpdr"

  player = {
    enemy: "ENEMY Player",
    user: "YOU"
  }

  availablePlays = {
    PAPER: "assets/svg/paper.svg",
    SCISSORS: "assets/svg/scissors.svg",
    ROCK: "assets/svg/rock.svg"
  }

  availableResultMessage = {
    PLAYER_WINS: "YOU WIN !!!",
    TIE: "TIE",
    ENEMY_WINS: "ENEMY WINS :("
  }

  startGameData: any
  startGame: boolean = false
  showInstructions: boolean = true

  enemyMove: string = " "
  enemyMoveImage?: any
  resultMessage: string = " "
  playerMoveImage?: any

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get("http://localhost:8080/game/start")
      .subscribe(
        responseData => this.startGameData = responseData
      )
  }

  onStartGame() {
    this.startGame = true
    this.showInstructions = false
  }

  setResultData(resultData: any) {
    this.enemyMove = resultData.enemyMove
    this.resultMessage = this.availableResultMessage[resultData.gameOutcomeValue as keyof typeof this.availableResultMessage]
    this.enemyMoveImage = this.availablePlays[resultData.enemyMove as keyof typeof this.availablePlays]
  }

  setPlayerMoveImage(playerMove: any) {
    this.playerMoveImage = this.availablePlays[playerMove as keyof typeof this.availablePlays]
  }
}