import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-war-troops',
  templateUrl: './donate-war-troops.component.html',
  styleUrls: ['./donate-war-troops.component.css']
})
export class DonateWarTroopsComponent implements OnInit {  
  clanCastle: Array<object>;
  constructor() { }

  ngOnInit() {
  }
}
