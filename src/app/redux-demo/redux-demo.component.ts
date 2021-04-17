import { Component, OnInit } from '@angular/core';
import {  select, Store } from '@ngrx/store';
import { Login } from '../login';
import { add } from '../Store/action';



@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {
  
    log = new Login();
    ret = new Login();
  submited=false;

 onSubmit(){
      
   this.store.dispatch(add({name:this.log.name,email:this.log.email,city:this.log.city}));
   alert(this.ret.name + " "+ this.ret.email + " "+ this.ret.city)
   
 }
 
  constructor(private store: Store<{data:{name:string,email:string,city:string}}>) {
     this.store.select('data').subscribe(dta=>this.ret=dta);
    console.log(this.ret)
   }

  ngOnInit(): void {
   
  }

}
