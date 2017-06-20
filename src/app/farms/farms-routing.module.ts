import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmsComponent } from './farms.component'
import { FarmDetailComponent } from './farm-detail.component';

const routes: Routes = [
  {
    path: 'myfarms',
    component: FarmsComponent,
    data: {
      title: '我的农场列表'
    },
  },
  {
    path: 'myfarms/:id',
    component: FarmDetailComponent,
    data: {
      title: '具体农场名'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmsRoutingModule { }
