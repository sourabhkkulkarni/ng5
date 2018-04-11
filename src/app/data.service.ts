import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';// RxJs behaviour subject library to SHARE DATA BETWEEN COMPONENTS

@Injectable()
export class DataService {
  private goals=new BehaviorSubject<any>(['The Initial Goal','Another silly life goal']);
  goal=this.goals.asObservable();
  constructor() { }
  
  changeGoal(goal){
    this.goals.next(goal);
  }
}
