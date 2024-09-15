import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Resources } from '../../models/improvement';

@Component({
  selector: 'app-resources-views',
  standalone: true,
  imports: [],
  templateUrl: './resources-views.component.html',
  styleUrl: './resources-views.component.css'
})
export class ResourcesViewsComponent {
  
  constructor(private villageService: VillageService){ }

  getResources():Resources{
    return this.villageService.userResources;
  }
  
  

}
