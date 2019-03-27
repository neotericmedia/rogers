import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  getData: any = [];
  getCities: any = [];
  show: Boolean = false;
  selected: string;
  selectedOption: string;
  index: number;

  constructor(private dataService: DataService) { }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    // console.log(this.selectedOption);
    this.dataService.weather.map(name => {
      if (this.selectedOption.includes(name.name)) {
        this.show = true;
        // this.dataService.weather = [];
        // this.dataService.weather.push(name);
        // console.log(this.dataService.weather);
      }
    });
  }

  ngOnInit() {
    this.index = 1;
    this.dataService.weather.map(name => {
      this.getData.push(name);
      this.getCities.push(name.name);
    });
    console.log(this.getCities);
  }

}
