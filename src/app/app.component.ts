import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VillageService } from './services/village.service';
import { Improvements, Resources } from './models/improvement';
import { MapComponent } from "./components/map/map.component";
import { ResourcesViewsComponent } from "./components/resources-views/resources-views.component";
import { AddImprovementDialogComponent } from './components/add-improvement-dialog/add-improvement-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddImprovementDialogComponent, ResourcesViewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Angular';

  improvementArray:Improvements[] = [];
  resourceArray:Resources = {} as Resources;
  constructor(private villageService: VillageService) {}

  ngOnInit(){
    this.improvementArray = this.villageService.improvements;
    this.resourceArray = this.villageService.userResources;
  }

  
}
