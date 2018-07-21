import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([]);
  goal = this.goals.asObservable();
  constructor() { }

  chnageGoal(goal)
  {
    this.goals.next(goal);
  }
}
