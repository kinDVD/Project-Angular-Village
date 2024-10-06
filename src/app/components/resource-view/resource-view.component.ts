import { Component, Input } from '@angular/core';
import { ResourceLineComponent } from '../resource-line/resource-line.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-view',
  standalone: true,
  imports: [ResourceLineComponent, CommonModule],
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.css'],
})
export class ResourceViewComponent {
  @Input() resources: Map<string, number> = new Map();
}
