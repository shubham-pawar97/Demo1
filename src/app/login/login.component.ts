import { Component, OnInit } from '@angular/core';
import { Login }  from '../login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public  log = new Login();
 public submited=false;
 
 onSubmit(){
   this.submited=true;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
