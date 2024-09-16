import { Injectable } from '@angular/core';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  board: Board = {} as Board;
  id: number = 0;

  generateBoard(size: number = 5): Board{
    this.board.tiles = [];
    for(let x = 0; x < size; x++){
      this.board.tiles[x] = [];
      for(let y = 0; y< size; y++){
        this.board.tiles[x] = {id: this.id, empty: true, improvement: ""};
        this.id++;
      }
    }   
    return this.board;
  }

  getBoard(): Board{
    return this.board;
  }

}
