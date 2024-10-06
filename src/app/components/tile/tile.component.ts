import { Component, Input } from '@angular/core';
import { AddImprovementComponent } from '../add-improvement/add-improvement.component';
import { Improvement } from '../../models/improvement';
import { EditImprovementComponent } from '../edit-improvement/edit-improvement.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [AddImprovementComponent, EditImprovementComponent, NgIf, CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent {
  @Input() improvement: Improvement = {} as Improvement;
  @Input() index: number = -1;

  displayPanel: boolean = false;
}
