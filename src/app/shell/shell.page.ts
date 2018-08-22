import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: 'shell.page.html'
})
export class ShellPage {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sync',
      url: '/sync',
      icon: 'sync'
    }
  ];
}
