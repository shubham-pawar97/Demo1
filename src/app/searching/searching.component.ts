import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {

  
  public search='';
 public employees = [
    { fname:'Shubham',
      lname: 'Pawar',
      city: 'Satara'
    },
    {
      fname:'Pratik',
      lname: 'Pawar',
      city: 'Pune'
    },
    {
      fname:'Sagar',
      lname: 'Gaikwade',
      city: 'Mumbai'
    },
    {
      fname:'Amit',
      lname: 'Salunke',
      city: 'Karad'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
