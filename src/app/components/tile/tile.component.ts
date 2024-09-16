import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';


@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  constructor(private villageService: VillageService){}

  // getTile():number[]{
  //   return this.villageService.getImprovements()
  // }

  // getTileStatus():boolean{
  //   return this.tile.empty;
  // }

  getUserImprovements(userImprovements: Improvements[]):void{
    userImprovements = this.villageService.userImprovements;
 }

}
