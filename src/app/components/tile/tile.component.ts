import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvements } from '../../models/improvement';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {

displayTile(){
  if(){}
}

}
