import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    images:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.loadImages()
  }


  loadImages(){
    this.images = ['IMG-20230824-WA0031.jpg', 'IMG-20230825-WA0019.jpg','IMG-20230825-WA0020.jpg','IMG-20230825-WA0023.jpg', 'IMG-20230825-WA0024.jpg']
  }
}
