import { Component, OnInit } from '@angular/core';
import { PlayerCRUDService } from '../../Services/player-crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playersList;
  keysList;
  constructor(private playerCRUDService: PlayerCRUDService) { }

  ngOnInit() {
    this.playerCRUDService.getAllPlayers().subscribe(
      responseText => {
        this.playersList = responseText;
        this.keysList = Object.keys(this.playersList[0]);
      }
    )
  }

}
