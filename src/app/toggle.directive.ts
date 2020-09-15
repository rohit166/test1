import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  @Input()
  appToggle;

  constructor() { 
    // console.log(this.appToggle);
  }

}
