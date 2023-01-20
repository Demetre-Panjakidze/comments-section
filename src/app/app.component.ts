import { Component } from '@angular/core';
import json from '../assets/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = json;
  constructor() {
    console.log(this.data);
  }
}
