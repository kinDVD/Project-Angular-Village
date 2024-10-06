// resource-line.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-line',
  standalone: true,
  templateUrl: './resource-line.component.html',
  styleUrls: ['./resource-line.component.css'],
})
export class ResourceLineComponent {
  @Input() type: string = '';
  @Input() quantity: number = 0;
}
