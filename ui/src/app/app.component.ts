import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("https://34mi6cmmc8.execute-api.us-east-2.amazonaws.com/dev/todos")
      .subscribe(
        data => console.log("dynamoDB", data)
      )
  }

}
