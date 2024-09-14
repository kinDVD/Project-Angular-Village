import { Injectable } from '@angular/core';
import { Improvements, Resources } from '../models/improvement';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  improvements: Improvements[] = [
    {
      type: "House",
      level: 1,
      cost:
        {
          lumber: 5, 
          grain:5, 
          water: 5, 
          sheep: 1, 
          people: 0
        }
    },
    {
      type: "Field",
      level: 1,
      cost:
        {
          lumber: 0,
          grain: 0,
          water: 2,
          sheep: 0,
          people: 1
        }
    },
    {
      type: "Pasture",
      level: 1,
      cost:
        {
          lumber: 0,
          grain: 2,
          water: 2,
          sheep: 0,
          people: 1
        }
    },
    {
      type: "Lumber Mill",
      level: 1,
      cost:
        {
          lumber: 0,
          grain: 0,
          water: 0,
          sheep: 0,
          people: 1
        }
    },
    {
      type: "Well",
      level: 1,
      cost:
        {
          lumber: 2,
          grain: 0,
          water: 0,
          sheep: 0,
          people: 1
        }
    }
  ]
  userResources:Resources = {

      lumber: 5,
      grain: 5,
      water: 5,
      sheep: 5,
      people: 0
  }
  userImprovements: Improvements[] = [];

  cost: Resources = {} as Resources;

  //Adds improvement by taking in the improvementType the user wishes to upgrade
  addImprovement(improvementType: string){
    let improvement = this.improvements.find(i => i.type === improvementType);

    //Validates if the user can afford the improvement
    if(improvement !== undefined){
      this.reduceResources(improvement.cost);
      this.userImprovements.push(improvement);
    }
  }

  //Method that checks if user can afford improvement
  canAffordImprovement(cost: Resources): Boolean{
    let resources = this.userResources;
    return ((resources.lumber >= cost.lumber) &&
            (resources.grain >= cost.grain) &&
            (resources.water >= cost.water) &&
            (resources.sheep >= cost.sheep) &&
            (resources.people >= cost.people));
  }

  reduceResources(cost: Resources){
    // Reduces resources from user's resource
    let resources = this.userResources;
    resources.lumber -= cost.lumber;
    resources.grain -= cost.grain;
    resources.water -= cost.water;
    resources.sheep -= cost.sheep;
    resources.people -= cost.people;
  }
  
  // Upgrades user's improvement by a level
  upgradeImprovement(improvement: Improvements){
    let userImprovement = this.userImprovements.find(i => i === improvement)

    if (userImprovement !== undefined){
      this.cost = userImprovement.cost;
      this.reduceResources(this.cost);
      userImprovement.level += 1;
    }
  }

  // Reduces user's improvement by a level
  downgradeImprovement(improvement: Improvements){
    let userImprovement = this.userImprovements.find(i => i === improvement)

    if (userImprovement !== undefined){
      this.cost = userImprovement.cost
      this.cost.lumber += this.userResources.lumber;
      this.cost.grain += this.userResources.grain;
      this.cost.sheep += this.userResources.sheep;
      this.cost.water += this.userResources.water;
      this.cost.people += this.userResources.people;

      userImprovement.level -= 1;
    }
  }

  removeImprovement(){

  }

  constructor() { }


}
