import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  template: `
    <ul><li *ngFor="let val of values"> {{val}} </li> </ul>  
    <p appUpper> change to upper case </p>
    hide the element <span appMyvisibility> hidden content</span>
    <p appMycolor>click me to change clolor</p>
  `
})
export class CustomComponent implements OnInit {
  values = ['a','b','c'];
  constructor() { }

  ngOnInit() {
  }

}
