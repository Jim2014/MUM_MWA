import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="dec()" type="button">-</button>
    {{counterValue}}
    <button (click)="inc()" type="button">+</button>
  `
})
export class CounterComponent implements OnInit {
  counterValue:number;
  @Output() counterChange:EventEmitter<string>;
  constructor() { 
    this.counterValue = 0 ; 
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
  }

  inc(){
    this.counterValue+=1;
    this.counterChange.emit(this.counterValue.toString());
  }
  dec(){
    this.counterValue-=1;
    this.counterChange.emit(this.counterValue.toString());
  }

}
