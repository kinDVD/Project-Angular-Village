import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-edit-improvement-dialog',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './edit-improvement-dialog.component.html',
  styleUrl: './edit-improvement-dialog.component.css'
})
export class EditImprovementDialogComponent {

  userImprovements: Improvements[] = [];
  tileID!: number;

  
  constructor(private villageService: VillageService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(){
  this.tileID = Number(this.route.snapshot.paramMap.get('id'));
  this.userImprovements = this.villageService.getImprovements();
  }

  upgradeAnImprovement(){
    this.villageService.upgradeImprovement(this.tileID);
    console.log("This is the current level: ", this.villageService.userImprovements[this.tileID].level)
    this.router.navigate(['/']);
  }

  downgradeAnImprovement(){
    this.villageService.downgradeImprovement(this.tileID);
    console.log("This is the current level: ", this.villageService.userImprovements[this.tileID].level);
    this.router.navigate(['/']);
  }

  removeAnImprovement(){
    this.villageService.removeImprovement(this.tileID);
    console.log("Value at tile: ", this.villageService.userImprovements[this.tileID])
    this.router.navigate(['/']);
  }



}
