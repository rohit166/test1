import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  exportAs: 'hello'
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open()
  {
    console.log("hello its working");
  }

}
