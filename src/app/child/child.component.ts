import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @Input()
  data:ElementRef;

  @Input()
  data2;

  // @ViewChild(this.data2) data4:ElementRef;
  showSidenav = false;

  constructor(private ren: Renderer2) { }
  ngAfterViewInit(): void {
    console.log(this.data.nativeElement);
    // this.ren.setStyle(this.data2,"display","none");
  }

  show(component)
  {

  }

  ngOnInit(): void {

    // console.log(this.data4.nativeElement);
  }

  open()
  {
    console.log('working');
    this.showSidenav = !this.showSidenav;
  }

  close()
  {
    this.showSidenav = false;
  }

}
