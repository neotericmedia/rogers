import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() getData: any = [];
  @Input() getCities: any = [];
  @Output() selectCity: EventEmitter<string> = new EventEmitter<string>();

  selectedOption: string;

  constructor(private dataService: DataService) { }

  // method to match typeahead results to data
  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    this.selectCity.emit(this.selectedOption);
    this.dataService.weather.map(name => {
      if (this.selectedOption.includes(name.name)) {
        this.getData = [];
        this.getData.push(name);
      }
    });
  }

}
