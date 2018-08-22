import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PlantsListPage } from './plants-list.page';
import { PlantsDetailPage } from './plants-detail.page';
import { PlantsEditPage } from './plants-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlantsListPage
      },
      {
        path: ':id',
        component: PlantsDetailPage
      },
      {
        path: ':id/edit',
        component: PlantsEditPage
      }
    ])
  ],
  declarations: [PlantsListPage, PlantsDetailPage, PlantsEditPage]
})
export class PlantsPageModule {}
