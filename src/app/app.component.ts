import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';

items = ['ParentItem1', 'ParentItem2', 'ParentItem3', 'ParentItem4'];

addItem(newItem: string) {
  this.items.push(newItem);
}

  
  
  constructor() { }
}
