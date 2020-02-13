import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerCRUDService {

  constructor(private http: HttpClient) { }

  createPlayer(body) {
    console.log(body);
    this.http.post("https://4nrpo9ezi8.execute-api.us-east-2.amazonaws.com/dev/players", body)
      .subscribe(
        response => console.log(response)
      )
  }
}
