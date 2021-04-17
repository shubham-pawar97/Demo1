import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  grpForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    city : new FormControl(''),
  });

 show(){
   alert(this.grpForm)
 }
  constructor() { }

  ngOnInit(): void {
  }

}
