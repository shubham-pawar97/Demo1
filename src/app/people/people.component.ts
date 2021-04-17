import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

 users:any =[];
  constructor(private _use:FirstServiceService) {  }

  ngOnInit(): void {
    this.users = this._use.emprecordFun();
  }

}
