import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  

  constructor() { }

  emprecordFun(){
   let data = [           
      {empid:'001', fname: 'Pratik', lname:'Rao', dept:'Mantainance' },
      {empid:'002', fname: 'Shubham', lname:'Pawar', dept:'Mantainance' },
      {empid:'003', fname: 'Amit', lname:'Rathi', dept:'Mantainance' },
      {empid:'004', fname: 'Rohit', lname:'Raut', dept:'Mantainance' },
      {empid:'005', fname: 'Sagar', lname:'Salunke', dept:'QA' },
      {empid:'006', fname: 'Pooja', lname:'Pawar', dept:'QA' },
      {empid:'007', fname: 'Akash', lname:'Shinde', dept:'QA' },
      {empid:'008', fname: 'Chetan', lname:'Mane', dept:'Development' },
      {empid:'009', fname: 'Aniket', lname:'Kashid', dept:'Development' },
      {empid:'010', fname: 'Pratik', lname:'Pawar', dept:'Development' },
                 
    ]; 
    return data;
  }
}
