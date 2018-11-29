import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-plants-detail',
  templateUrl: 'plants-detail.page.html'
})
export class PlantsDetailPage implements OnInit {
  public id;
  constructor(
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }
}
