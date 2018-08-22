import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-plants-edit',
  templateUrl: 'plants-edit.page.html'
})
export class PlantsEditPage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async saveAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Success',
      message: 'Changes saved successfully',
      buttons: ['OK']
    });

    await alert.present();
  }
}
