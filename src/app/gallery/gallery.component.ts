import { Component, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: false } }
  ]
})
export class GalleryComponent {
  @Input() city: string;

  slides = [
    { image: 'assets/img1.jpg' },
  ];

  constructor() { }

}
