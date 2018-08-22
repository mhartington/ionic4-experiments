import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PlantsListPage } from './plants-list.page';
import { PlantsDetailPage } from './plants-detail.page';

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
      }
    ])
  ],
  declarations: [PlantsListPage, PlantsDetailPage]
})
export class PlantsPageModule {}
