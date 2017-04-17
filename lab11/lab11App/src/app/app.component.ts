import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter (counterChange)="setCounterValue($event)"></app-counter>
  <p>Component Counter Value: {{ComponentCounterValue}} </p>
  `
})
export class AppComponent {
  title = 'app works!';
  ComponentCounterValue = '0';
  setCounterValue(data){
    this.ComponentCounterValue=data;
  }
}
