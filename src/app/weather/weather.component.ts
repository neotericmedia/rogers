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
  @Output() selectedCity: EventEmitter<any> = new EventEmitter<any>();

  selectedOption: string;
  getImageVal = [];

  // inject data service
  constructor(private dataService: DataService) { }

  // method to match typeahead results to data
  onSelect(event: TypeaheadMatch): void {
    // selected city
    this.selectedOption = event.item;
    // map to data
    this.dataService.weather.map(name => {
      // if the selection matches payload name
      if (this.selectedOption.includes(name.name)) {
        // reset getData array (on second call)
        this.getData = [];
        // push selected payload to getData
        this.getData.push(name);
        // reset getImage array (on second call)
        this.getImageVal = [];
        // push selected image name to getImage
        this.getImageVal.push(name.image);
      }
    });
    // emit getImage to parent inturn passes to gallery child component
    this.selectedCity.emit(this.getImageVal);
  }

}
