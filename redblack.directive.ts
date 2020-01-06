import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "white";
    el.nativeElement.style.backgroundColor = "red";
    el.nativeElement.style.padding = "25px";
    el.nativeElement.style.margin = "25px";
   }

}
