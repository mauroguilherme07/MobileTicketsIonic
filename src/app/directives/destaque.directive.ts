import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'blue';
    this.el.nativeElement.style.fontWeight = 'bold';
  }

}