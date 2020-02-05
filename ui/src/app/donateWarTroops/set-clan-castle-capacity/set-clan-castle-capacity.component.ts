import { Component, OnInit } from '@angular/core';
import { DonateWarTroopsService } from '../donate-war-troops.service';

@Component({
  selector: 'app-set-clan-castle-capacity',
  templateUrl: './set-clan-castle-capacity.component.html',
  styleUrls: ['./set-clan-castle-capacity.component.css']
})
export class SetClanCastleCapacityComponent implements OnInit {

  clanCastle: Array<object> = [
    { "capacity": 45, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 40, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 35, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 30, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 25, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 20, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 15, "count": 0, "troops": {}, "filled": 0 },
    { "capacity": 10, "count": 0, "troops": {}, "filled": 0 },
  ]

  constructor(private donateWarTroopsService: DonateWarTroopsService) { }

  ngOnInit() {

  }

  emitClanCastle(ccCap) {
    this.donateWarTroopsService.postCC(this.clanCastle);
    this.donateWarTroopsService.postCapacity(ccCap);
  }

}
