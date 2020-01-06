import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueblack]'
})
export class BlueblackDirective {

  constructor(private el : ElementRef) { 
    el.nativeElement.style.background="red";
    el.nativeElement.style.color="white";
    el.nativeElement.style.padding="20px";
  }

}
