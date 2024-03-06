import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  constructor() { }

  incrementCounter(): void {
    const currentValue = this.counterSubject.getValue();
    this.counterSubject.next(currentValue + 1);
    }

  getCounter(){
    return this.counterSubject.asObservable();
  }
}
