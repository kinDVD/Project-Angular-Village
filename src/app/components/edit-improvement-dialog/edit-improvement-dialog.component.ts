import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';


@Component({
  selector: 'app-edit-improvement-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-improvement-dialog.component.html',
  styleUrl: './edit-improvement-dialog.component.css'
})
export class EditImprovementDialogComponent {

  userImprovements: Improvements[] = [];


  constructor(private villageService: VillageService){}
  ngOnIt(){
  this.userImprovements = this.villageService.getImprovements();
  }

  // editImprovement():Improvements{
    
  // }


}
