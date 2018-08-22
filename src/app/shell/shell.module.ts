import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShellPage } from './shell.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, IonicModule],
  declarations: [ShellPage],
  exports: [ShellPage]
})
export class ShellPageModule {}
