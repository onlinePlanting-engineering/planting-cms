import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-list',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss', './image-modal.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input('imgGroup') public imgGroup: any;
  constructor() { }

  ngOnInit() {
  }

}
