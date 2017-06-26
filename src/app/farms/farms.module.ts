import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { StarRatingModule } from 'angular-star-rating';

import { FarmItemComponent } from './farm-item.component';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms.component';
import { FarmDetailComponent } from './farm-detail.component';
import { FarmCommentsComponent } from './farm-comments.component';

import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    FarmsRoutingModule,
    TabsModule,
    MomentModule,
    StarRatingModule
  ],
  declarations: [
    FarmsComponent,
    FarmItemComponent,
    FarmDetailComponent,
    FarmCommentsComponent,
  ]
})
export class FarmsModule { }
