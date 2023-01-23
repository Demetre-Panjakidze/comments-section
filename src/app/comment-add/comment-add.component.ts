import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss'],
})
export class CommentAddComponent {
  @Input() data: any;
  @Output() onNewComment = new EventEmitter<any>();
  commentContent: string = '';

  addComment() {
    this.onNewComment.emit({
      id: this.data.comments.length + 1,
      content: this.commentContent,
      createdAt: '1 second ago',
      score: 0,
      user: this.data.currentUser,
      replies: [],
      username: this.data.currentUser.username,
    });

    this.commentContent = '';
  }
}
