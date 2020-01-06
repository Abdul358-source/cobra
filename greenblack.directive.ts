import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreenblack]'
})
export class GreenblackDirective {

  constructor(private el : ElementRef) {
    el.nativeElement.style.background="green";
    el.nativeElement.style.color="white";
    el.nativeElement.style.padding="20px";
    el.nativeElement.style.fontweight="bold";
    el.nativeElement.style.align="center";
   }

}
