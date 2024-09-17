import { Component, Input } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements, Resources } from '../../models/improvement';
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

  //@Input() improvementArray: Improvements[] = [];

  ngOnInit(){

   console.log(this.getUserImprovements()); 
   console.log("User resources array: ", this.getUserResources());

  }
  getUserImprovements():Improvements[]{
    
      //this.improvementArray = [...this.villageService.userImprovements];

     return this.villageService.userImprovements;
  }
  
    onClick(i:number){
      let tile = this.getUserImprovements()[i];
      console.log("Tile at index", i, tile);
      console.log("User resources array: ", this.getUserResources());
       if (tile === undefined){
        this.router.navigate(['/AddImprovement', i])
      }
      else{
        this.router.navigate(['/EditImprovement', i])
      }
  }

  getUserResources():Resources{
    return this.villageService.userResources;
  }

}
