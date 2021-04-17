import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('green');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }


}
