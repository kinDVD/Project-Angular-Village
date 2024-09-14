import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Resources } from '../../models/improvement';

@Component({
  selector: 'app-resoure-line',
  standalone: true,
  imports: [],
  templateUrl: './resoure-line.component.html',
  styleUrl: './resoure-line.component.css'
})
export class ResoureLineComponent {
  constructor(private villageService: VillageService){}


  singleResource: Resources = this.getResources();

  getResources():Resources{
    return this.villageService.userResources;
  }


}
