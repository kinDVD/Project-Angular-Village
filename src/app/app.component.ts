import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VillageService } from './services/village.service';
import { Improvement } from './models/improvement';
import { MapComponent } from './components/map/map.component';
import { ResourceViewComponent } from './components/resource-view/resource-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, ResourceViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AJSGame';
  improvementArray: Improvement[] = [];
  resourceArray: Map<string, number> = new Map();

  constructor(private villageService: VillageService) {}

  ngOnInit(): void {
    this.resourceArray = this.villageService.starterPack();
    console.log(this.resourceArray);
  }
}
