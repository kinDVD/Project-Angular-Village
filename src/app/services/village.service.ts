import { Injectable } from '@angular/core';
import { Improvement } from '../models/improvement';
import { ImprovementByType } from '../models/improvement-by-type';

@Injectable({
  providedIn: 'root'
})

export class VillageService {
  improvements: Improvement[] = Array.from({ length: 36 }, (_, index) => ({ type: '', level: 0 }));
  resources: Map<string, number> = this.starterPack();
  improvementByType: ImprovementByType[] = this.improvementStore();

  improvementStore(): ImprovementByType[] {
    return [
      {
        type: 'House',
        cost: new Map([
          ['Lumber', 5],
          ['Grain', 5],
          ['Water', 5],
          ['Sheep', 1]
        ]),
        effect: new Map([
          ['People', 5]
        ])
      },
      {
        type: 'Field',
        cost: new Map([
          ['People', 1],
          ['Water', 2]
        ]),
        effect: new Map([
          ['Grain', 10]
        ])
      },
      {
        type: 'Pasture',
        cost: new Map([
          ['People', 1],
          ['Grain', 2],
          ['Water', 2]
        ]),
        effect: new Map([
          ['Sheep', 5]
        ])
      },
      {
        type: 'Lumber Mill',
        cost: new Map([
          ['People', 1]
        ]),
        effect: new Map([
          ['Lumber', 10]
        ])
      },
      {
        type: 'Well',
        cost: new Map([
          ['People', 1],
          ['Lumber', 2]
        ]),
        effect: new Map([
          ['Water', 10]
        ])
      }
    ];
  }

  starterPack(): Map<string, number> {
    return new Map([
      ['Lumber', 5],
      ['Grain', 5],
      ['Water', 5],
      ['Sheep', 1],
      ['People', 1]
    ]);
  }

  addImprovement(type: string, index: number): void {
    this.improvements[index] = { type, level: 1 };
  }

  removeImprovement(index: number): void {
    this.improvements[index] = { type: '', level: 0 };
  }

  upgradeImprovement(index: number): void {
    const improvement = this.improvements[index];
    if (improvement.level) {
      improvement.level += 1;
    }
  }

  downgradeImprovement(index: number): void {
    const improvement = this.improvements[index];
    if (improvement.level > 1) {
      improvement.level -= 1;
    }
  }

  addResources(requisites: Map<string, number>): void {
    requisites.forEach((value, key) => {
      const currentAmount = this.resources.get(key) ?? 0;
      this.resources.set(key, currentAmount + value);
    });
  }

  removeResources(requisites: Map<string, number>): void {
    requisites.forEach((value, key) => {
      const currentAmount = this.resources.get(key) ?? 0;
      this.resources.set(key, currentAmount - value);
    });
  }

  getImprovementByType(): ImprovementByType[] {
    return this.improvementByType;
  }

  getImprovementByName(type: string): ImprovementByType | undefined {
    return this.improvementByType.find(item => item.type === type);
  }

  getImprovements(): Improvement[] {
    return this.improvements;
  }
}
