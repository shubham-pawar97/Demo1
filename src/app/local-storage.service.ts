import { Injectable } from '@angular/core';
declare var db :any
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storagename = "codetodo";

  constructor() { }

add(keyname: any,value: any){

if(db != undefined){

  const request = db.transation([this.storagename],"readwrite")
  .objectstorage(this.storagename).put(value,keyname);

  request.onsuccess = function(event: { target: { result: any; }; }){
    if(event.target.result){
  console.log("success");
    }
    else{
  console.log("error");
    }
  }  
}


}

get(){

}

delete(){

}


}
