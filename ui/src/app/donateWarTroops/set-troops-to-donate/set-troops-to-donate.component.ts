import { Component, OnInit, Input } from '@angular/core';
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
  troops: Array<object> = [
    { "troop": "Dragon", "housing_space": 20, "fillable": 0, "perFilling": 1 },
    { "troop": "Baby Dragon", "housing_space": 10, "fillable": 0, "perFilling": 1 },
    { "troop": "Electro Dragon", "housing_space": 30, "fillable": 0, "perFilling": 1 },
    { "troop": "Witch", "housing_space": 12, "fillable": 0, "perFilling": 2 }
  ];
  ccList: Array<any> = [];
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
        this.ccList.push(capacity)
      }
    )
  }

  fillables() {
    this.numberOfTroops = this.troops.length;
    let spacePerTroop = Math.floor(this.totalHousingSpaceAvailable / this.numberOfTroops);
    this.troops.forEach(
      troop => {
        troop['fillable'] = Math.floor(spacePerTroop / troop['housing_space'])
        this.donateWarTroopsService.postCC(this.clanCastle);
      }
    )
    this.hideFillable = false;
  }

  getCombinations() {
    this.troops.sort((x, y) => {
      return y['housing_space'] - x['housing_space'];
    }).forEach(
      element => {
        while (element['fillable'] > 0) {
          this.donateTroopToCC(element['troop'], element['housing_space']);
          element['fillable']--;
        }
      }
    )
    console.log(this.clanCastle, "I am done");
  }

  donateTroopToCC(troop, housing_space) {
    let randomIndex = Math.floor(Math.random() * this.clanCastle.length);
    let remaingHousingSpace = this.clanCastle[randomIndex]['capacity'] - this.clanCastle[randomIndex]['filled'];
    if (remaingHousingSpace >= housing_space) {
      /* put the updated data in ccList */
      this.clanCastle[randomIndex]['troops'].push(troop);
      this.clanCastle[randomIndex]['filled'] += housing_space;
    }
  }
}
