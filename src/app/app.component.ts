import { Component } from '@angular/core';
import { default as data } from './src/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'comments-section';
  constructor() {
    console.log(data);
  }
}
