import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rogers';

  days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  weather = [
    {
      'id': 1907296,
      'name': 'Toronto',
      'current': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }
      ],
      'upcoming': [
        {
          'SU': {
            'icon': '',
            'temp': 31
          },
          'MO': {
            'icon': '',
            'temp': 31
          },
          'TU': {
            'icon': '',
            'temp': 31
          },
          'WE': {
            'icon': '',
            'temp': 31
          },
          'TH': {
            'icon': '',
            'temp': 31
          },
          'FR': {
            'icon': '',
            'temp': 31
          },
          'SA': {
            'icon': '',
            'temp': 31
          }
        }
      ]
    },
    {
      'id': 1907296,
      'name': 'Vancouver',
      'cod': {
        'lon': 139.01,
        'lat': 35.02
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }
      ]
    }
  ];



  myInterval = 1500;
  activeSlideIndex = 0;

  slides = [
    { image: 'assets/img1.jpg' },
    { image: 'assets/img1.jpg' },
    { image: 'assets/img1.jpg' },
  ];




}
