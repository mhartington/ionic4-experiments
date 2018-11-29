import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // redirect here if the app is not synced
    // or not logged in
    path: 'sync',
    loadChildren: './sync/sync.module#SyncPageModule'
  },

  {
    path: 'plants',
    loadChildren: './plants/plants.module#PlantsPageModule'
  },

  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
