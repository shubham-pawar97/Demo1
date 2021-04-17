import { DomSanitizer } from '@angular/platform-browser'
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: string,search: string): any {
    let v = value.toLowerCase();
    let s = search.toLowerCase(); 
    if(v===s){
      var go =`<span style="background-color: lightgreen"> ${value} </span>`;
    return this.sanitizer.bypassSecurityTrustHtml(go);
    }
    else{
      return value;
    }
  }

}
