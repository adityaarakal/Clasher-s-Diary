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
    let header = new HttpHeaders();
    header.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4OTk0YTg3LTYyMjktNGIzNS05OWUyLTNiMmUxZWFmZDk5NyIsImlhdCI6MTU4MjAyMTk0MCwic3ViIjoiZGV2ZWxvcGVyLzQzMDBjYmFlLWRlMDgtMzM2Yi0zYjZhLTdiYTRlMTI1NDJhMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Ny4zMy4xMjEuMjIwIl0sInR5cGUiOiJjbGllbnQifV19.mZnRfLPfiqmhkM3NKAvi9D01yO4pjhXV4wsOU3Mf75B5qLPsCSRmfef-6uzWf0LE1DzDYG0glmeVxpqRnNjiDg");
    this.httpClient.post("https://api.clashofclans.com/v1/clans/", header)
      .subscribe(
        data => console.log("coc data => ", data)
      )
  }

}
