import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/board';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(private villageService: VillageService, private boardService: BoardService){}

  userImprovements: Improvements[] = [];
  userBoard: Board = {} as Board;

  ngOnInit(){
    this.userBoard = this.boardService.getBoard();
  }
  
  getUserImprovements(userImprovements: Improvements[]):void{
     userImprovements = this.villageService.userImprovements;
  }
  

}
