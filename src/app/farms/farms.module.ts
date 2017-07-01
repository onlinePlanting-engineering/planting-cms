import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { StarRatingModule } from 'angular-star-rating';
import { TabsModule } from 'ng2-bootstrap/tabs';

import { FarmItemComponent } from './farm-item.component';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms.component';
import { FarmDetailComponent } from './farm-detail.component';
import { FarmCommentsComponent } from './farm-comments.component';

import { ImageModalModule } from '../images/image.module';

@NgModule({
  imports: [
    CommonModule,
    FarmsRoutingModule,
    TabsModule,
    MomentModule,
    StarRatingModule,
    ImageModalModule
  ],
  declarations: [
    FarmsComponent,
    FarmItemComponent,
    FarmDetailComponent,
    FarmCommentsComponent,
  ]
})
export class FarmsModule { }
