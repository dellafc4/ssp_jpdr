import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    this.enemyMove = resultData.enemyOption
    this.resultMessage = resultData.gameEndOption
    this.enemyMoveImage = this.availablePlays[resultData.enemyOption as keyof typeof this.availablePlays]
  }

  setPlayerMoveImage(playerMove: any) {
    this.playerMoveImage = this.availablePlays[playerMove as keyof typeof this.availablePlays]
  }
}