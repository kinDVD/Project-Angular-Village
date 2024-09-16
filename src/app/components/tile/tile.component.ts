import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { MapComponent } from '../map/map.component';
import { Tile } from '../../models/board';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  tile: Tile = {} as Tile;
  constructor(private villageService: VillageService){}

  getTile():number{
    return this.tile.id;
  }

  getTileStatus():boolean{
    return this.tile.empty;
  }

  getUserImprovements(userImprovements: Improvements[]):void{
    userImprovements = this.villageService.userImprovements;
 }

}
