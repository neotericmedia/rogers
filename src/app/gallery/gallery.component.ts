import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: false } }
  ]
})
export class GalleryComponent implements OnInit {

  // images for slider, right card
  slides = [
    { image: 'assets/img1.jpg' },
    { image: 'assets/img1.jpg' },
    { image: 'assets/img1.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
