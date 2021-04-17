import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIndex]'
})
export class IndexDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }



}
