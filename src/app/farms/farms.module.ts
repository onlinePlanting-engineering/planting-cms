import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmItemComponent } from './farm-item.component';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms.component';
import { FarmDetailComponent } from './farm-detail.component'

@NgModule({
  imports: [
    CommonModule,
    FarmsRoutingModule
  ],
  declarations: [
    FarmsComponent,
    FarmItemComponent,
    FarmDetailComponent
  ]
})
export class FarmsModule { }
