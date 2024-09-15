import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor(private villageService: VillageService){}

  userImprovements: Improvements[] = [];

  getUserImprovements(userImprovements: Improvements[]):void{
     userImprovements = this.villageService.userImprovements;
  }

}
