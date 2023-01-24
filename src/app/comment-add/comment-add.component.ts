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

  postAmount: number = 0;
  addComment() {
    this.data.comments.forEach((comment: any) => {
      comment.replies.forEach(() => {
        this.postAmount++;
      });
    });
    this.onNewComment.emit({
      id: this.data.comments.length + this.postAmount + 1,
      content: this.commentContent,
      createdAt: '1 second ago',
      score: 0,
      user: this.data.currentUser,
      replies: [],
      username: this.data.currentUser.username,
    });

    this.postAmount = 0;
    this.commentContent = '';
  }
}
