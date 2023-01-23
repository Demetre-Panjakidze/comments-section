import { Component, OnInit, Input } from '@angular/core';
import json from '../../../assets/data/data.json';

@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrls: ['./comment-replies.component.scss'],
})
export class CommentRepliesComponent implements OnInit {
  @Input() data: any;
  @Input() replies_index: number = -1;
  @Input() comments_index: number = -1;
  main_user: string = 'juliusomo';
  
  upvoteDisabled: boolean = false;
  downvoteDisabled: boolean = false;
  hasVoted: boolean = false;
  hasDownvoted: boolean = false;

  // LSD is localStorage data
  ngOnInit() {
    let LSD = localStorage.getItem('data');
    if (LSD) {
      this.data = JSON.parse(LSD);
    } else {
      this.data = json;
    }
  }

  upvote() {
    if (this.hasVoted) {
      this.upvoteDisabled = true;
      this.downvoteDisabled = false;
    } else {
      this.hasVoted = true;
      this.hasDownvoted = false;
      this.data.comments[this.comments_index].replies[this.replies_index].score++;
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
      this.data.comments[this.comments_index].replies[this.replies_index].score--;
      localStorage.setItem('data', JSON.stringify(this.data));
    }
  }
}
