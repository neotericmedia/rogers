import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  weather = [
    {
      'id': 1907296,
      'name': 'Toronto',
      'current': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': './assets/partly-cloudy.png'
        }
      ],
      'upcoming': [
        {
          'day': 'SU',
          'icon': './assets/sun-dk.png',
          'temp': 31
        },
        {
          'day': 'MO',
          'icon': './assets/cs-dk.png',
          'temp': 20
        },
        {
          'day': 'TU',
          'icon': './assets/cds-dk.png',
          'temp': 25
        },
        {
          'day': 'WE',
          'icon': './assets/crs-alt-dk.png',
          'temp': 23
        },
        {
          'day': 'TH',
          'icon': './assets/sun-dk.png',
          'temp': 29
        },
        {
          'day': 'FR',
          'icon': './assets/cloud-dk.png',
          'temp': 32
        },
        {
          'day': 'SA',
          'icon': './assets/sun-dk.png',
          'temp': 24
        }
      ]
    },
    {
      'id': 1907296,
      'name': 'Edmonton',
      'current': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'Sunny',
          'icon': './assets/sun-dk.png'
        }
      ],
      'upcoming': [
        {
          'day': 'SU',
          'icon': './assets/cs-dk.png',
          'temp': 23
        },
        {
          'day': 'MO',
          'icon': './assets/sun-dk.png',
          'temp': 40
        },
        {
          'day': 'TU',
          'icon': './assets/crs-alt-dk.png',
          'temp': 35
        },
        {
          'day': 'WE',
          'icon': './assets/cds-dk.png',
          'temp': 26
        },
        {
          'day': 'TH',
          'icon': './assets/sun-dk.png',
          'temp': 32
        },
        {
          'day': 'FR',
          'icon': './assets/sun-dk.png',
          'temp': 29
        },
        {
          'day': 'SA',
          'icon': './assets/cloud-dk.png',
          'temp': 21
        }
      ]
    }
  ];

}
