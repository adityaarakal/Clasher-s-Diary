import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(private httpClient: HttpClient/* , private clans: clans */) { }

  ngOnInit() {
    this.httpClient.get("https://api.clashofclans.com/v1/clans")
      .subscribe(
        data => console.log("coc data => ", data)
      )
  }

}
