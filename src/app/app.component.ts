import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VillageService } from './services/village.service';
import { Improvements, Resources } from './models/improvement';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Angular';

  improvementArray:Improvements[] = [];
  resourceArray:Resources[] = [];
  constructor(private villageService: VillageService) {}

  ngOnInit(){
    this.improvementArray = this.villageService.improvements;
    this.resourceArray = this.villageService.userResources;
  }
}
