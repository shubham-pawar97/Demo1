import { Component, OnInit } from '@angular/core';
import { Output,Input,EventEmitter } from '@angular/core'

@Component({
  selector: 'app-user2-child',
  templateUrl: './user2-child.component.html',
  styleUrls: ['./user2-child.component.css']
})
export class User2ChildComponent implements OnInit {
  @Input() items: any=[]; 
  @Output() alrt = new EventEmitter<string>();

  send(value:string){
    
    this.alrt.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
