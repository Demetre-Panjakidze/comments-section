import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent {
  @Input() data: any;
  @Input() comment: any;
  @Input() index: any;

  constructor() {
    console.log(this.comment);
  }
}
