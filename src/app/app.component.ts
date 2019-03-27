import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('cardA', [
      state('void', style({
        'transform': 'translateY(-100%)',
        'opacity': 0
      })),
      state('nop', style({
        'transform': 'translateY(100%)',
        'opacity': 1
      })),
      transition('* => *', animate('.65s 0s cubic-bezier(0.455, 0.06, 0.515, 0.955)'))
    ]),
    trigger('cardB', [
      state('void', style({
        'transform': 'translateY(-100%)',
        'opacity': 0
      })),
      state('nop', style({
        'transform': 'translateY(100%)',
        'opacity': 1
      })),
      transition('* => *', animate('1.05s 0s cubic-bezier(0.455, 0.06, 0.515, 0.955)'))
    ])
  ]
})
export class AppComponent {

  constructor() { }

}
