import { Component } from '@angular/core';
import json from '../assets/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any | undefined;
  constructor() {
    this.checkData();
  }

  checkData() {
    let LSD = localStorage.getItem('data');
    if (LSD) {
      this.data = JSON.parse(LSD);
    } else {
      this.data = json;
    }
  }

  onNewCommentHandler(newComment: any) {
    this.data.comments.push(newComment);
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
