import { Component } from '@angular/core';
import { Improvements } from '../../models/improvement';
import { VillageService } from '../../services/village.service';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/board';

@Component({
  selector: 'app-add-improvement-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-improvement-dialog.component.html',
  styleUrl: './add-improvement-dialog.component.css'
})
export class AddImprovementDialogComponent {

  userImprovements: Improvements[] = [];
  userBoard: Board = {} as Board;

  constructor(private villageService: VillageService, private boardService: BoardService){}
  ngOnIt(){
  this.userImprovements = this.villageService.getImprovements();
  this.userBoard = this.boardService.getBoard();
  }

  


}
