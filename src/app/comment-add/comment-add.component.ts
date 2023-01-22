import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss'],
})
export class CommentAddComponent {
  @Input() data: any;
  newComment: object = {};
  commentContent: string = "";

  addComment() {
    const newComment = {
      id: this.data.comments.length + 1,
      content: this.commentContent,
      createdAt: "1 second ago",
      score: 0,
      user: this.data.currentUser,
      replies: [],
    };
    
    this.data.comments.push(newComment);
    localStorage.setItem('data', JSON.stringify(this.data));
    this.newComment = {};
    this.commentContent = '';
  }
}
