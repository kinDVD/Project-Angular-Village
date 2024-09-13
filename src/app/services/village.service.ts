import { Injectable } from '@angular/core';
import { Improvements } from '../models/improvement';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  improvements: Improvements[] = [
    {
      type: "House",
      level: 1,
      cost:[
        {
          lumber: 5, 
          grain:5, 
          water: 5, 
          sheep: 1, 
          people: 0
        }
      ]
    },
    {
      type: "Field",
      level: 1,
      cost: [
        {
          lumber: 0,
          grain: 0,
          water: 2,
          sheep: 0,
          people: 1
        }
      ]
    },
    {
      type: "Pasture",
      level: 1,
      cost: [
        {
          lumber: 0,
          grain: 2,
          water: 2,
          sheep: 0,
          people: 1
        }
      ]
    },
    {
      type: "Lumber Mill",
      level: 1,
      cost: [
        {
          lumber: 0,
          grain: 0,
          water: 0,
          sheep: 0,
          people: 1
        }
      ]
    },
    {
      type: "Well",
      level: 1,
      cost: [
        {
          lumber: 2,
          grain: 0,
          water: 0,
          sheep: 0,
          people: 1
        }
      ]
    }
  ]

  constructor() { }



}
