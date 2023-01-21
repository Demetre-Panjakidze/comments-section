import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrls: ['./comment-replies.component.scss'],
})
export class CommentRepliesComponent {
  @Input() data: any;
  @Input() replies_index: number = -1;
  @Input() comments_index: number = -1;
  main_user: string = "juliusomo";
}
