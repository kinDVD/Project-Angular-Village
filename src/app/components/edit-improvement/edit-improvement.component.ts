import { Component, Input } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { Improvement } from '../../models/improvement';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-improvement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-improvement.component.html',
  styleUrls: ['./edit-improvement.component.css']
})
export class EditImprovementComponent {
  @Input() index: number = -1;

  constructor(private villageService: VillageService) {}

  getImprovement(): Improvement {
    return this.villageService.improvements[this.index];
  }

}
