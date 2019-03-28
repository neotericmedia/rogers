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
      'image': './assets/img1.jpg',
      'current': [
        {
          'id': 800,
          'main': '27',
          'high': '28',
          'low': '24',
          'description': 'Partly Cloudy',
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
      'image': './assets/img2.jpg',
      'current': [
        {
          'id': 800,
          'main': '24',
          'high': '26',
          'low': '22',
          'description': 'Sunny',
          'icon': './assets/sun-wh.png'
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
    },
    {
      'id': 1907296,
      'name': 'Calgary',
      'image': './assets/img3.jpg',
      'current': [
        {
          'id': 800,
          'main': '29',
          'high': '30',
          'low': '24',
          'description': 'Mainly Sunny',
          'icon': './assets/partly-cloudy.png'
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
          'temp': 24
        },
        {
          'day': 'TU',
          'icon': './assets/sun-dk.png',
          'temp': 22
        },
        {
          'day': 'WE',
          'icon': './assets/sun-dk.png',
          'temp': 21
        },
        {
          'day': 'TH',
          'icon': './assets/crs-alt-dk.png',
          'temp': 27
        },
        {
          'day': 'FR',
          'icon': './assets/cloud-dk.png',
          'temp': 26
        },
        {
          'day': 'SA',
          'icon': './assets/cds-dk.png',
          'temp': 25
        }
      ]
    },
    {
      'id': 1907296,
      'name': 'Ottawa',
      'image': './assets/img3.jpg',
      'current': [
        {
          'id': 800,
          'main': '31',
          'high': '31',
          'low': '21',
          'description': 'Cloudy',
          'icon': './assets/partly-cloudy.png'
        }
      ],
      'upcoming': [
        {
          'day': 'SU',
          'icon': './assets/cloud-dk.png',
          'temp': 23
        },
        {
          'day': 'MO',
          'icon': './assets/cloud-dk.png',
          'temp': 24
        },
        {
          'day': 'TU',
          'icon': './assets/crs-alt-dk.png',
          'temp': 26
        },
        {
          'day': 'WE',
          'icon': './assets/cds-dk.png',
          'temp': 19
        },
        {
          'day': 'TH',
          'icon': './assets/sun-dk.png',
          'temp': 30
        },
        {
          'day': 'FR',
          'icon': './assets/cloud-dk.png',
          'temp': 24
        },
        {
          'day': 'SA',
          'icon': './assets/crs-alt-dk.png',
          'temp': 22
        }
      ]
    },
    {
      'id': 1907296,
      'name': 'Montreal',
      'image': './assets/img4.jpg',
      'current': [
        {
          'id': 800,
          'main': '32',
          'high': '32',
          'low': '28',
          'description': 'Sunny',
          'icon': './assets/sun-wh.png'
        }
      ],
      'upcoming': [
        {
          'day': 'SU',
          'icon': './assets/crs-alt-dk.png',
          'temp': 29
        },
        {
          'day': 'MO',
          'icon': './assets/cloud-dk.png',
          'temp': 28
        },
        {
          'day': 'TU',
          'icon': './assets/cds-dk.png',
          'temp': 29
        },
        {
          'day': 'WE',
          'icon': './assets/crs-alt-dk.png',
          'temp': 30
        },
        {
          'day': 'TH',
          'icon': './assets/sun-dk.png',
          'temp': 26
        },
        {
          'day': 'FR',
          'icon': './assets/sun-dk.png',
          'temp': 25
        },
        {
          'day': 'SA',
          'icon': './assets/cloud-dk.png',
          'temp': 30
        }
      ]
    }
  ];
}
