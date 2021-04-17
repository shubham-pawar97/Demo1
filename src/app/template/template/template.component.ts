import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent  {
 public heads = ['Explore Color','HomeOwner','Professional','Product','Account'];
 public footers = ['Company','Career','Press Room','Contact Us','Social Media Policy','Private Policy','CA Supply','Chains Act'];
 public dealers = ['Falcon Paints - Hacienda Heights, CA','Colorama Paint & Supply - San Diego, CA','Cross Country Supply -Atlanta, GA'] ;
 public stories = ['Mansfield, TX','Windsor, CA','Yukon, OK'];
 public tops = ['Color','SDS/TDS','Login'];
 public msg = '' ;
 public status = false ;
 public name= '';
message( msg : string ){
  alert(msg+" "+"successfully")
}
see(){
  this.status = true ;
  this.isBlue = !this.isBlue;
}
hide(){
  this.status = false;
  this.isBlue = !this.isBlue;
}
dis(msg:string){
  alert(msg);
}
 public img1 = "https://build.clouzerindia.com/assets/images/templates/KellyMoore/maindivimg.jpg";
 public img2 = "https://build.clouzerindia.com/assets/images/templates/KellyMoore/div1img1.jpg" ;
 public img3 = "https://build.clouzerindia.com/assets/images/templates/KellyMoore/div1img2.jpg" ;
 public img4 = "https://build.clouzerindia.com/assets/images/templates/KellyMoore/div1img3.jpg" ;
 public img5 = "https://build.clouzerindia.com/assets/images/templates/KellyMoore/div2img1.jpg" ;
 public img6 = "https://build.clouzerindia.com/assets/images/templates/KellyMoore/div3img1.png" ;
public isBlue = true;
public nam = '';
 constructor() { }

  

}
