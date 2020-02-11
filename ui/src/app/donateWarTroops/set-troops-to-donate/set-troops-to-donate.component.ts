import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { DonateWarTroopsService } from '../donate-war-troops.service';
import { reduce } from 'rxjs/operators';
@Component({
  selector: 'app-set-troops-to-donate',
  templateUrl: './set-troops-to-donate.component.html',
  styleUrls: ['./set-troops-to-donate.component.css']
})
export class SetTroopsToDonateComponent implements OnInit {
  hideFillable = true;
  totalHousingSpaceAvailable: number;
  numberOfTroops: number;
  callStackCount: number = 0;
  totalFillables;
  troops: Array<object> = [
    { "troop": "Barbarians", "housing_space": 1, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Archers", "housing_space": 1, "fillable": 0, "perFilling": 5, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/3/34/Archer_info.png/revision/latest/scale-to-width-down/340?cb=20170927230509" },
    { "troop": "Giants", "housing_space": 5, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Goblins", "housing_space": 1, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Wall Breakers", "housing_space": 2, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Balloons", "housing_space": 5, "fillable": 0, "perFilling": 1, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/2/2f/Balloon_info.png/revision/latest/scale-to-width-down/340?cb=20170927230730" },
    { "troop": "Wizards", "housing_space": 4, "fillable": 0, "perFilling": 0, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/1/14/Wizard_info.png/revision/latest/scale-to-width-down/340?cb=20170927230801" },
    { "troop": "Healers", "housing_space": 14, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Dragons", "housing_space": 20, "fillable": 0, "perFilling": 2, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/2/28/Dragon_info.png/revision/latest/scale-to-width-down/340?cb=20170927230914" },
    { "troop": "Pekka", "housing_space": 25, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Baby Dragon", "housing_space": 10, "fillable": 0, "perFilling": 1, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/4/44/Baby_Dragon_info.png/revision/latest/scale-to-width-down/340?cb=20180109183158" },
    { "troop": "Miners", "housing_space": 6, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Electro Dragon", "housing_space": 30, "fillable": 0, "perFilling": 1, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/0/00/Electro_Dragon_info.png/revision/latest/scale-to-width-down/340?cb=20180608130641" },
    { "troop": "Yeti", "housing_space": 18, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Minions", "housing_space": 2, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Hog Riders", "housing_space": 5, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Valkyrie", "housing_space": 8, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Golem", "housing_space": 30, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Witch", "housing_space": 24, "fillable": 0, "perFilling": 0, "filled": 0, "imageLink": "https://vignette.wikia.nocookie.net/clashofclans/images/4/4a/Witch_info.png/revision/latest/scale-to-width-down/340?cb=20170927231327" },
    { "troop": "Lava Hound", "housing_space": 30, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Bowlers", "housing_space": 6, "fillable": 0, "perFilling": 0, "filled": 0 },
    { "troop": "Ice Golem", "housing_space": 15, "fillable": 0, "perFilling": 1, "filled": 0 }
  ];
  ccList: Array<object> = [];
  /*   clanCastle: Array<object> = [
      { "capacity": 45, "count": 0, "troops": [], "filled":0 }, put count-arrays in troops
      { "capacity": 40, "count": 0, "troops": [], "filled":0 },
      { "capacity": 35, "count": 0, "troops": [], "filled":0 },
      { "capacity": 30, "count": 0, "troops": [], "filled":0 },
      { "capacity": 25, "count": 0, "troops": [], "filled":0 },
    ] */
  clanCastle: Array<object>;
  localData;
  constructor(private donateWarTroopsService: DonateWarTroopsService) { }

  ngOnInit() {

    this.localData = this.donateWarTroopsService.getCC()
      .subscribe(
        data => {
          if (data) {
            if (data instanceof Array) {
              this.hideFillable = true;
              this.clanCastle = data;
              this.totalHousingSpaceAvailable = 0;
              this.clanCastle.forEach(
                element => {
                  this.totalHousingSpaceAvailable += element["capacity"] * element['count'];
                }
              )
            }
          }
        }
      )

    this.donateWarTroopsService.getCapacity().subscribe(
      capacity => {
        this.ccList.push({
          "capacity": capacity,
          "troops": {},
          "unfilled": capacity
        })
      }
    )
  }

  fillables() {
    this.numberOfTroops = this.troops.length;
    let spacePerTroop = Math.ceil(this.totalHousingSpaceAvailable / this.numberOfTroops);
    this.troops.forEach(
      troop => {
        troop['fillable'] = Math.ceil(spacePerTroop / troop['housing_space']);
        this.donateWarTroopsService.postCC(this.clanCastle);
      }
    )
    this.hideFillable = false;
    this.generateSums();
  }

  generateSums() {
    console.log(this.troops.reduce(
      (accumulator, currentValue) => ({
        "fillable": accumulator["fillable"] + currentValue["fillable"]
      })
    ));

  }
  getCombinations() {
    this.troops.sort((x, y) => {
      return y['housing_space'] - x['housing_space'];
    }).forEach(
      element => {
        while (element['fillable'] > 0) {
          this.donateTroopToCC(element['troop'], element['housing_space'], element['perFilling']);
          element['fillable']--;
          element['filled']++;
        }
      }
    )
    console.log(this.ccList.reduce(
      (accumulator, currentValue) => ({
        "unfilled": accumulator["unfilled"] + currentValue["unfilled"]
      })
    ));
  }

  donateTroopToCC(troop, housing_space, perFilling) {
    let randomIndex = Math.floor(Math.random() * this.ccList.length);
    let remaingHousingSpace = this.ccList[randomIndex]['unfilled'];
    if (remaingHousingSpace >= housing_space) {
      this.callStackCount++;
      if (this.ccList[randomIndex]['troops'][troop]) {
        if (this.ccList[randomIndex]['troops'][troop]['count'] < perFilling) {
          this.ccList[randomIndex]['troops'][troop]['count']++;
          this.ccList[randomIndex]['unfilled'] -= housing_space;
        }/* else{
          this.donateTroopToCC(troop, housing_space, perFilling);          
        } */
      }
      else {
        this.ccList[randomIndex]['troops'][troop] = { "troop name": troop, "count": 1 }
        this.ccList[randomIndex]['unfilled'] -= housing_space;
      }
    } else {
      this.donateTroopToCC(troop, housing_space, perFilling);
    }
  }

}
