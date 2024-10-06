import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { ImprovementByType } from '../../models/improvement-by-type';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-add-improvement',
  imports: [FormsModule, CommonModule, NgFor],
  standalone: true,
  templateUrl: './add-improvement.component.html',
  styleUrls: ['./add-improvement.component.css'],
})
export class AddImprovementComponent {
  @Input() index: number = -1;
  @Output() built: EventEmitter<void> = new EventEmitter();

  type: string = '';
  improvementOptions: ImprovementByType[] = [];

  constructor(private villageService: VillageService) {}

  ngOnInit(): void {
    this.improvementOptions = this.villageService.getImprovementByType();
  }

  getRequirements(): Map<string, number> {
    return this.villageService.getImprovementByName(this.type)?.cost ?? new Map();
  }

  addImprovement(): void {
    if (this.type) {
      this.villageService.addImprovement(this.type, this.index);
      this.built.emit();
    }
  }
}
