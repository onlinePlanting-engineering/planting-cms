import {Component, Input,Output,ElementRef,EventEmitter,OnInit} from '@angular/core';

import { baseUrl } from '../_settings/index';

@Component({
    selector: 'img-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @Input('modalImages') modalImages:any;
  @Input('imagePointer') imagePointer:number;
  @Output('cancelEvent') cancelEvent = new EventEmitter<any>();
   
   public _element:any;
   public opened:boolean = false;
   public imgSrc:string;
   public currentImageIndex:number;
   public loading:boolean= false;
   public showRepeat:boolean= false;
   public baseUrl: string = baseUrl;
  
  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnInit() {
      this.loading = true;
      if(this.imagePointer >= 0) {
      this.showRepeat = false;
      this.openGallery(this.imagePointer);
      } else {
        this.showRepeat = true;
      }
  }
  closeGallery() {
    this.opened = false;
    this.cancelEvent.emit(null);
  }
  prevImage() {
    this.loading = true;
    this.currentImageIndex--;
    if(this.currentImageIndex < 0) {
      this.currentImageIndex = this.modalImages.length-1  ;
    }
    this.openGallery(this.currentImageIndex);
  }
  nextImage() {
    this.loading = true;
    this.currentImageIndex++;
    if(this.modalImages.length === this.currentImageIndex) {
      this.currentImageIndex = 0;
    }
    this.openGallery(this.currentImageIndex);

  }
  openGallery(index) {
    if(!index) {
    this.currentImageIndex = 1;
    }
    this.currentImageIndex = index;
      this.opened = true;
     for (var i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex ) {
              this.imgSrc = this.modalImages[i].img;
              this.loading = false;
              break;
            }
       }
  }
  
  OpenImageModel(imageSrc,images) {
    //alert('OpenImages');
    var imageModalPointer;
    for (var i = 0; i < images.length; i++) {
          if (imageSrc === images[i].img) {
            imageModalPointer = i;
            console.log('jhhl',i);
            break;
          }
      }
    this.opened = true;
    this.modalImages = images;
    this.imagePointer  = imageModalPointer;
  }

  cancelImageModel() {
    this.opened = false;
  }
}
