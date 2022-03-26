import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  num: number=0;
  msgSource = new BehaviorSubject(this.num);
  currentData = this.msgSource.asObservable()

  constructor() { }

  changeValue(value: number) {
    this.msgSource.next(value+1)
  }
}
