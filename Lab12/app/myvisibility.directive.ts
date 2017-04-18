import { Directive,HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  constructor() {
    this.visibility = 'hidden';
   }
      @HostBinding('style.visibility') visibility; 
}
