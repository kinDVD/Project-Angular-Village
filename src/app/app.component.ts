import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VillageService } from './services/village.service';
import { Improvements, Resources } from './models/improvement';
import { ResourcesViewsComponent } from "./components/resources-views/resources-views.component";
import { AddImprovementDialogComponent } from './components/add-improvement-dialog/add-improvement-dialog.component';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddImprovementDialogComponent, ResourcesViewsComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Angular';

  improvementArray:Improvements[] = [];
  resourceArray:Resources = {} as Resources;
  constructor(public villageService: VillageService) {}

  ngOnInit(){
    this.resourceArray = this.villageService.userResources;
    console.log(this.resourceArray);
  }

  
}
