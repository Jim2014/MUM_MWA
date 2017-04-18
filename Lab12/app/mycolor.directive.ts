import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  Rainbows  = ['red','orange','yellow', 'green', 'blue','indigo','violet'];
  index = 0;
  constructor(private e: ElementRef, private r: Renderer) { }
  @HostListener('click') foo() {
    this.e.nativeElement.style.color = this.Rainbows [this.index];
    this.index = (this.index + 1) % this.Rainbows.length;
  }
}
