import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('clickedState',[
      state('default',style({
        // backgroundColor: "red",
        // width: "100px",
        // height: "100px"
        'transform':'translateX(400px)'
      })),
      state('clicked',style({
        // backgroundColor: "orange",
        // width: "500px",
        // height: "100px"
        // 'transform':'translateY(50px)'
      })),
      transition('void=>default',
      [
        animate("3s",keyframes([
          style({'transform':'translateX(0)'}),
          style({'transform':'translateX(400px)'}),
          style({'transform':'translateX(400px) rotate(8deg)'}),
          style({'transform':'translateX(400px) rotate(-8deg)'}),
          style({'transform':'translateX(400px) rotate(8deg)'}),
          style({'transform':'translateX(400px) rotate(-8deg)'})
        ]))
        // style({
        //   backgroundColor: "blue",
        //   'transform':'translateX(-100%)'
        //   'opacity':'0',
        //   'transform':'rotate(0deg)'
        //   'width':'0px'
        //    transform: 'translateX(50px)', opacity: 0
        //   'visibility': 'hidden'
        // }),
        // group([
        //   // animate("2s",style({'transform':'translateX(400px)'}))
        //   animate('2s 0.1s ease', style({
        //     transform: 'translateX(100px)',
        //     width: 120
        //   })),
        //   animate('2s ease', style({
        //     opacity: 1
        //   }))
        // ])
      // animate(".3s",style({'opacity':'1','visibility': 'visible'}))  
      // animate("2s",style({'transform':'rotate(90deg)'})),
      // animate("2s",style({'transform':'rotate(30deg)'}))
      ]),
      transition(':leave',[
        // style({
        //   'transform':'translateX(40px)'
        // }),
        animate(".1s",style({'opacity':'0','visibility': 'hidden'}))
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  clickInfo=false;
  clickInfo2;

  constructor() { }

  ngOnInit(): void {
  }

  animate()
  {
    // this.clickInfo==="default" ? this.clickInfo="clicked" : this.clickInfo="default";
    this.clickInfo = !this.clickInfo;
    this.clickInfo2 = 'default';
  }

  getPos(e)
  {
    console.log(e.clientX);
    console.log(e.pageX);
    console.log(e.offsetX)
    console.log(e);
  }

}
