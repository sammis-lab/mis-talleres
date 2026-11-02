import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html'
})
export class AccountPageComponent {
  title: string;
  description: string;

  constructor(route: ActivatedRoute) {
    this.title = route.snapshot.data['title'];
    this.description = route.snapshot.data['description'];
  }
}
