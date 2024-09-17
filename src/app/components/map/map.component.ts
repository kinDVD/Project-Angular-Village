import { Component, Input } from '@angular/core';
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

  @Input() improvementArray: Improvements[] = [];

  ngOnInit(){

    console.log("Current improvementArray", this.improvementArray);
   this.getUserImprovements(); 
   console.log("improvementArray post method", this.improvementArray);
  }
  getUserImprovements(){
    if(this.villageService.userImprovements.length > 0){
      this.improvementArray = [...this.villageService.userImprovements];
    }
     console.log(this.villageService.userImprovements);
     console.log("Current list of improvements: ", this.improvementArray);
  }
  
    onClick(i:number){
      let tile = this.improvementArray[i];
      console.log("Tile at index", i, tile);
       if (tile === undefined){
        this.router.navigate(['/AddImprovement', i])
      }
      else{
        this.router.navigate(['/EditImprovement', i])
      }
  }

}
