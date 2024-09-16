import { Component } from '@angular/core';
import { Improvements } from '../../models/improvement';
import { VillageService } from '../../services/village.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-add-improvement-dialog',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './add-improvement-dialog.component.html',
  styleUrl: './add-improvement-dialog.component.css'
})
export class AddImprovementDialogComponent {

  userImprovements: Improvements[] = [];

  constructor(private villageService: VillageService, private router: Router){}
  ngOnInit(){
  this.userImprovements = this.villageService.getImprovements();
  console.log("App component is working!")

  this.villageService.addImprovement("House", 0);
  }

  


}
