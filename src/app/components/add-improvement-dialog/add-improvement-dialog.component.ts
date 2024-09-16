import { Component } from '@angular/core';
import { Improvements } from '../../models/improvement';
import { VillageService } from '../../services/village.service';


@Component({
  selector: 'app-add-improvement-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-improvement-dialog.component.html',
  styleUrl: './add-improvement-dialog.component.css'
})
export class AddImprovementDialogComponent {

  userImprovements: Improvements[] = [];

  constructor(private villageService: VillageService){}
  ngOnInit(){
  this.userImprovements = this.villageService.getImprovements();
  console.log("App component is working!")
  this.villageService.addImprovement("House", 0);
  }

  


}
