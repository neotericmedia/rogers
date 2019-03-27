import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
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

  // retrieves data from service
  constructor(private dataService: DataService) { }

  // get the weather location name
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

  ngOnInit() {
  }

}
