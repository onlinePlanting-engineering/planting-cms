import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModalComponent } from './image-modal.component';
import { ImagesComponent } from './images.component';

import { UrlSerializePipe } from '../_pipes/serialize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageModalComponent,
    ImagesComponent,
    UrlSerializePipe
  ],
  exports: [
    ImageModalComponent,
    ImagesComponent
  ]
})
export class ImageModalModule {
  
}
