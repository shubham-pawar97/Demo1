import { Component, OnInit } from '@angular/core'; 
import { Output,EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  pass(value:string){
    this.newItemEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
