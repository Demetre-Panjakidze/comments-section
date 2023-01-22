import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent implements OnInit {
  @Input() data: any;
  @Input() comment: any;
  @Input() index: number = -1;
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
    }
    if (this.hasVoted) {
      this.upvoteDisabled = true;
    }
  }

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
}
