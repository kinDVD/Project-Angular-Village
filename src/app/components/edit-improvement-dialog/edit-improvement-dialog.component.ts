import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-edit-improvement-dialog',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './edit-improvement-dialog.component.html',
  styleUrl: './edit-improvement-dialog.component.css'
})
export class EditImprovementDialogComponent {

  userImprovements: Improvements[] = [];


  constructor(private villageService: VillageService){}
  ngOnInit(){
  this.userImprovements = this.villageService.getImprovements();
  }

  // editImprovement():Improvements{
    
  // }


}
