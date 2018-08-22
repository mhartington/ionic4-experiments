import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plants-list',
  templateUrl: 'plants-list.page.html'
})
export class PlantsListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{
    id: number;
    title: string;
    note: string;
    icon: string;
  }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        id: i + 1,
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
