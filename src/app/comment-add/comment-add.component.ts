import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss'],
})
export class CommentAddComponent implements OnInit {
  @Input() data: any;
  newComment: object = {};
  commentContent: string = '';
  replyNum: number = 0;

  // LSD is localStorage data
  ngOnInit() {
    let LSD = localStorage.getItem('data');
    if (LSD) {
      this.data = JSON.parse(LSD);
    }
  }

  addComment() {
    if (this.commentContent) {
      const newComment = {
        id: this.data.comments.length + 1,
        content: this.commentContent,
        createdAt: '1 second ago',
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
}
