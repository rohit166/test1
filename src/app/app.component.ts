import { Component, ViewEncapsulation } from '@angular/core';
import { ok } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'test';

  open(ok1,ok2)
  {
    ok2.close();
    ok1.open();
  }
}
