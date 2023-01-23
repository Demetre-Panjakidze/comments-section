import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent {
  @Output() onNewReply = new EventEmitter<any>();
  @Input() data: any;
  @Input() index: number = -1;
  order66: boolean = true;
  main_user: string = 'juliusomo';
  upvoteDisabled: boolean = false;
  downvoteDisabled: boolean = false;
  hasVoted: boolean = false;
  hasDownvoted: boolean = false;

  upvote() {
    if (this.hasVoted) {
      this.upvoteDisabled = true;
      this.downvoteDisabled = false;
    } else {
      this.hasVoted = true;
      this.hasDownvoted = false;
      this.data.comments[this.index].score++;
      localStorage.setItem('data', JSON.stringify(this.data));
    }
  }

  downvote() {
    if (this.hasDownvoted) {
      this.downvoteDisabled = true;
      this.upvoteDisabled = false;
    } else {
      this.hasDownvoted = true;
      this.hasVoted = false;
      this.data.comments[this.index].score--;
      localStorage.setItem('data', JSON.stringify(this.data));
    }
  }

  replyClicked: boolean = false;
  replyContent: string = '';
  arrayOfText: string[] = [];
  content: string = '';
  bla: any;

  replyAdd() {
    this.replyContent = `@${this.data.comments[this.index].user.username}, `;
    if (!this.replyClicked) {
      this.replyClicked = true;
    } else {
      this.replyClicked = false;
    }
  }

  submit() {
    this.arrayOfText = this.replyContent.split(', ');
    this.bla = this.arrayOfText.shift();
    this.content = this.arrayOfText.join(', ');

    if (this.replyContent) {
      this.onNewReply.emit({
        id: this.data.comments.length + 1,
        content: this.content,
        createdAt: '1 seconds ago',
        score: 0,
        replyingTo: this.bla.slice(1),
        user: this.data.currentUser,
        replies: [],
      });

      this.replyClicked = false;
    }
  }

  backgroundAppear:boolean = false;

  deleteComment() {
    this.backgroundAppear = !this.backgroundAppear;
  }

  noCancel() {
    this.backgroundAppear = !this.backgroundAppear;
  }

  yesDelete() {
    this.backgroundAppear = !this.backgroundAppear;
    delete this.data.comments[this.index];
    this.data.comments.splice(this.index, 1);
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
