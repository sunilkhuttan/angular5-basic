import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: number = 5;
  btnText: string = 'Add an item';
  goalText: string = 'My first Life goal';
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.items = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.items = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
