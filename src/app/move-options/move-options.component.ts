import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-move-options',
  templateUrl: './move-options.component.html',
  styleUrls: ['./move-options.component.css']
})
export class MoveOptionsComponent {

  @Input()
  player?: string

  @Input()
  moveOptions: any
  
  
  @Output()
  resultEvent = new EventEmitter<Object>();

  @Output()
  playerMoveEvent = new EventEmitter<string>();

  resultData: any
  playerMove?: string

  constructor(private http : HttpClient){
  }

  onMoveClicked(move : string) {
    this.playerMove = move

    this.http.post<any>('http://localhost:8080/game/result', { playerMove: move }).subscribe(data => {
      this.resultData = data
      this.addresultDataToParent()
    })    
  }

  addresultDataToParent() {
    this.resultEvent.emit(this.resultData)
    this.playerMoveEvent.emit(this.playerMove)
  }

}
