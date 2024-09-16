import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { AppComponent } from '../../app.component';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [AppComponent, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(private villageService: VillageService, private router: Router){}

  improvementArray: Improvements[] = [];

  ngOnInit(){

    for(let i = 0; i<36; i++){
      this.improvementArray[i] = {} as Improvements;
    }

    console.log(this.improvementArray);
   this.getUserImprovements(this.improvementArray); 
  }
  getUserImprovements(userImprovements: Improvements[]):void{
     userImprovements = this.villageService.userImprovements;
  }
  
    onClick(i:number): void{
      let test = this.improvementArray[i];
      console.log(this.improvementArray[i]);
       if (JSON.stringify(test) === "{}"){
        this.router.navigate(['/AddImprovement', i])
      }
      else{
        this.router.navigate(['/EditImprovement', i])
      }
  }

}
