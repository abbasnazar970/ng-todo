import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  /*animations : [
    trigger('goals', [
      transition('*=>*', [
        query(':enter', style({opacity: 0}), { optional: true}),
        query(':enter', stagger('300ms', [
          animate('0.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset : 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset : .3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))
        ]),{optional:true})
      ])
    ])
  ]*/
})
export class HomeComponent implements OnInit {

  btnText= "";
  goals = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.goal.subscribe(res => this.goals = res);
    this.data.chnageGoal(this.goals);
  }

  addItem() {
    if(this.btnText!="")
    {
      this.goals.push(this.btnText);
      this.btnText = "";
      this.data.chnageGoal(this.goals);
    }
  }

  removeItem(i)
  {
    this.goals.splice(i, 1);
    this.data.chnageGoal(this.goals);
  }
}
