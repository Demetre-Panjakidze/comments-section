import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import json from '../../../assets/data/data.json';

@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrls: ['./comment-replies.component.scss'],
})
export class CommentRepliesComponent {
  @Input() reply: any;
  @Input() currentuser: any;
  @Output() deleteReply = new EventEmitter<any>();

  upvoteDisabled: boolean = false;
  downvoteDisabled: boolean = false;
  hasVoted: boolean = false;
  hasDownvoted: boolean = false;

  upvote() {
    // if (this.hasVoted) {
    //   this.upvoteDisabled = true;
    //   this.downvoteDisabled = false;
    // } else {
    //   this.hasVoted = true;
    //   this.hasDownvoted = false;
    //   this.data.comments[this.comments_index].replies[this.replies_index]
    //     .score++;
    //   localStorage.setItem('data', JSON.stringify(this.data));
    // }
  }

  downvote() {
    // if (this.hasDownvoted) {
    //   this.downvoteDisabled = true;
    //   this.upvoteDisabled = false;
    // } else {
    //   this.hasDownvoted = true;
    //   this.hasVoted = false;
    //   this.data.comments[this.comments_index].replies[this.replies_index]
    //     .score--;
    //   localStorage.setItem('data', JSON.stringify(this.data));
    // }
  }

  backgroundAppear: boolean = false;
  deleteComment() {
    this.backgroundAppear = !this.backgroundAppear;
  }

  noCancel() {
    this.backgroundAppear = !this.backgroundAppear;
  }

  yesDelete() {
    this.backgroundAppear = !this.backgroundAppear;
    this.deleteReply.emit();
  }
}
