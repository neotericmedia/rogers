import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataService } from './data.service';

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
export class AppComponent implements OnInit {
  getData: any = [];
  getCities: any = [];
  city: string;

  constructor(private dataService: DataService) { }

  getCity(val) {
    this.city = val;
    console.log('city is', val);
  }

  ngOnInit() {
    this.dataService.weather.map(name => {
      this.getData.push(name);
      this.getCities.push(name.name);
    });
  }

}
