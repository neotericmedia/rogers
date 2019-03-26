import { Component, OnInit, OnChanges } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { stringify } from '@angular/core/src/util';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: false } }
  ]
})
export class AppComponent {
  selected: string;
  cities: string[] = [
    'Alberta, Edmonton',
    'British Columbia, Victoria',
    'Manitoba, Winnipeg',
    'New Brunswick, Fredericton',
    'Newfoundland and Labrador, St. John\'s',
    'Nova Scotia, Halifax',
    'Ontario, Toronto',
    'Prince Edward Island, Charlottetown',
    'Quebec	Quebec, City',
    'Saskatchewan, Regina',
    'Northwest Territories, Yellowknife',
    'Nunavut, Iqaluit',
    'Yukon'
  ];

  // images for slider, right card
  slides = [
    { image: 'assets/img1.jpg' },
    { image: 'assets/img1.jpg' },
    { image: 'assets/img1.jpg' },
  ];

  // injecting data service in construtor
  //  retrieves data from service
  constructor( private dataService: DataService ) {}

  selectedOption: any = this.dataService.weather[0].name;

  // selection method for cities
  onSelect(event: TypeaheadMatch): void {
    // pass event as argument, assign it to the selectedOption variable
    this.selectedOption = event.item;
    // map to the data service using the name as argument
    this.dataService.weather.map(name => {
      // check if the selectedOption matches the city object passed from the data service
      if (this.selectedOption.includes(name.name)) {
        // clear the data service object
        this.dataService.weather = [];
        // push the new city payload to data object
        this.dataService.weather.push(name);
        // log results
        console.log(this.dataService.weather);
        this.reset();
      }
    });
  }

  reset(): void {
    // this.dataService.weather;
  }

  // ngOnInit() {
  //   this.newData = this.getWeather;
  // }

  // ngOnChanges() {
  // }



}
