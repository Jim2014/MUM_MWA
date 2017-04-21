import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  constructor() { }
  @Input() data;
  ngOnInit() {
  }

}
