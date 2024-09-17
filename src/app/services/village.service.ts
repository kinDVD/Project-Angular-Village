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
      type: "Lumber-Mill",
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
      people: 1
  }
    
  userImprovements: any[] = new Array(36);

  cost: Resources = {} as Resources;

  //Adds improvement by taking in the improvementType the user wishes to upgrade
  addImprovement(improvementType: String, id: number){
    let improvement = this.improvements.find(i => i.type === improvementType);

    if(improvement !== undefined){
      console.log(improvement);
      this.cost = improvement.cost

      //Only add improvement if user has enough resources
      if(this.reduceResources(this.cost) === true){
        this.userImprovements[id] = {...improvement};
        this.addToResources(improvement);
        console.log("Improvement added: at index ${id}", this.userImprovements[id]);
        
      }
      else{
        console.log("You don't have enough resources dummy");
      }
    
     
    }
    
    console.log("User improvements array: ", this.userImprovements);
    
  }

  addToResources(improvement:Improvements){
    if(improvement.type == "House"){
      this.userResources.people += 5;
    }
    if(improvement.type == "Field"){
      this.userResources.grain += 10;
    }
    if(improvement.type == "Pasture"){
      this.userResources.sheep += 5;
    }
    if(improvement.type == "Lumber-Mill"){
      this.userResources.lumber += 10;
    }
    if(improvement.type == "Well"){
      this.userResources.water += 10;
    }
  }

  removeResources(improvement:Improvements){

      if(improvement.type == "House"){
        this.userResources.people -= (5);
      }
      if(improvement.type == "Field"){
        this.userResources.grain -= (10);
      }
      if(improvement.type == "Pasture"){
        this.userResources.sheep -= (5);
      }
      if(improvement.type == "Lumber-Mill"){
        this.userResources.lumber -= (10);
      }
      if(improvement.type == "Well"){
        this.userResources.water -= (10);
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

  reduceResources(cost: Resources):boolean{
    // Reduces resources from user's resource
    if(this.canAffordImprovement(this.cost) == true){
      this.userResources.lumber -= cost.lumber;
      this.userResources.grain -= cost.grain;
      this.userResources.water -= cost.water;
      this.userResources.sheep -= cost.sheep;
      this.userResources.people -= cost.people;
      console.log("User resources array after reduction: ", this.userResources);
      return true;
    }
    else{
      return false;
    }
    
    
  }
  
  // Upgrades user's improvement by a level
  upgradeImprovement(id: number){
   
    if (this.userImprovements[id] !== undefined){
      this.cost = this.userImprovements[id].cost;
      if(this.reduceResources(this.cost) === true){
        this.userImprovements[id].level += 1;
        this.addToResources(this.userImprovements[id]);
      }
      else{
        console.log("You don't have enough resources dummy")
      }
    }
  }

  // Reduces user's improvement by a level
  downgradeImprovement(id: number){
    //let userImprovement = this.userImprovements.find(i => i === improvement)

    
    if (this.userImprovements[id] !== undefined && this.userImprovements[id].level > 1){
      this.cost = this.userImprovements[id].cost
      this.userResources.lumber += this.cost.lumber;
      this.userResources.grain += this.cost.grain;
      this.userResources.sheep += this.cost.sheep;
      this.userResources.water += this.cost.water;
      this.userResources.people += this.cost.people;
      this.removeResources(this.userImprovements[id]);
      console.log("User resources array after adding: ", this.userResources);
      this.userImprovements[id].level -= 1;
    }
  }

  removeImprovement(id: number){
    if (this.userImprovements[id] !== undefined){
      this.cost = this.userImprovements[id].cost;

      this.userResources.grain += (this.cost.grain * this.userImprovements[id].level);
      this.userResources.lumber += (this.cost.grain * this.userImprovements[id].level);
      this.userResources.people += (this.cost.people * this.userImprovements[id].level);
      this.userResources.sheep += (this.cost.sheep * this.userImprovements[id].level);
      this.userResources.water += (this.cost.water * this.userImprovements[id].level);
      for (let i = 0; i < this.userImprovements[id].level; i++){
        this.removeResources(this.userImprovements[id]);

      }

    }

    this.userImprovements[id] = undefined;
  }

  getImprovements():Improvements[]{
    return this.userImprovements;
  }



}
