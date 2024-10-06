import { Component } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvement } from '../../models/improvement';
import { TileComponent } from '../tile/tile.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [TileComponent, NgFor, CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent {
  constructor(private villageService: VillageService) {}

  getImprovements(): Improvement[] {
    return this.villageService.improvements;
  }

  getTileDelay(index: number): number {
    return index % 7 + Math.floor(index / 7);
  }
}
