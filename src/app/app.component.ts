import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;
  private version: string;
  private collection: [any];

  constructor() {
    this.title = 'Salut à tous !';
    this.version = '1.0';
    this.collection = [
      {reference: '1234', name: 'Greg', state: 0},
      {reference: '3456', name: 'Elodie', state: 1},
      {reference: '3456', name: 'Julien', state: 2},
    ]
  }
}
