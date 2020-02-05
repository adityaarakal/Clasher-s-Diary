import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-filler-troops',
  templateUrl: './set-filler-troops.component.html',
  styleUrls: ['./set-filler-troops.component.css']
})
export class SetFillerTroopsComponent implements OnInit {
troops:Array<object>=[
  { "troop": "Barbarian", "housing_space": 1 },
  { "troop": "Archer", "housing_space": 1 },
  { "troop": "Giant", "housing_space": 5 },
  { "troop": "Goblin", "housing_space": 1 },
  { "troop": "Wall Breaker", "housing_space": 2 },
  { "troop": "Wizard", "housing_space": 4 },
  { "troop": "Miner", "housing_space": 6 },
  { "troop": "Minion", "housing_space": 2 },
  { "troop": "Hog Rider", "housing_space": 5 },
  { "troop": "Bowler", "housing_space": 6 },
]
  constructor() { }

  ngOnInit() {
  }

}
