import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonateWarTroopsService {

  postData = new Subject();
  postData$ = this.postData.asObservable();

  capacity = new Subject();
  capacity$ = this.capacity.asObservable();

  clanCastle: Array<object>;
  constructor() { }

  postCapacity(cap) {
    this.capacity.next(cap);
  }
  getCapacity() {
    return this.capacity$;
  }
  
  postCC(cc) {
    this.postData.next(cc);
  }

  getCC() {
    return this.postData$;
  }
}
