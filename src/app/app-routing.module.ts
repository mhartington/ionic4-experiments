import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellPage } from './shell/shell.page';

const routes: Routes = [
  {
    path: 'sync',
    loadChildren: './sync/sync.module#SyncPageModule'
  },
  {
    path: '',
    component: ShellPage,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
      },
      {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
