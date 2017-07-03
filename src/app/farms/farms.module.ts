import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { StarRatingModule } from 'angular-star-rating';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { FormsModule } from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { FarmItemComponent } from './farm-item.component';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms.component';
import { FarmDetailComponent } from './farm-detail.component';
import { FarmCommentsComponent } from './farm-comments.component';

import { ImageModalModule } from '../images/image.module';

import { InfoFormComponent } from './info-form.component';

@NgModule({
  imports: [
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FarmsRoutingModule,
    TabsModule,
    MomentModule,
    StarRatingModule,
    ImageModalModule,
    FormsModule
  ],
  declarations: [
    FarmsComponent,
    FarmItemComponent,
    FarmDetailComponent,
    FarmCommentsComponent,
    InfoFormComponent
  ]
})
export class FarmsModule { }
