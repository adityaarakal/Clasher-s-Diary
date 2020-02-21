import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerCRUDService {

  constructor(private httpClient: HttpClient) { }

  /* aws web server hit */
/*   createPlayer(body) {
    let httpHeaders = new HttpHeaders().set("CONTENT-TYPE", "application/json");
    return this.httpClient.post("https://eqc7ppu9m2.execute-api.us-west-2.amazonaws.com/dev/players/create", body, { headers: httpHeaders });
  } */
  
  /* aws web server hit */
/*   getAllPlayers(){
    return this.httpClient.get("https://eqc7ppu9m2.execute-api.us-west-2.amazonaws.com/dev/players/readAll");
  } */

  createPlayer(body){
    
  }
}
