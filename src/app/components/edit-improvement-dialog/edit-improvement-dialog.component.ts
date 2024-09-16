import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { Board } from '../../models/board';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-edit-improvement-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-improvement-dialog.component.html',
  styleUrl: './edit-improvement-dialog.component.css'
})
export class EditImprovementDialogComponent {

  userImprovements: Improvements[] = [];
  userBoard: Board = {} as Board;

  constructor(private villageService: VillageService, private boardService: BoardService){}
  ngOnIt(){
  this.userImprovements = this.villageService.getImprovements();
  this.userBoard = this.boardService.getBoard();
  }

  editImprovement():Improvements{
  
  }


}
