import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent implements OnInit{
  @Input() data: any;
  @Input() comment: any;
  @Input() index: number = -1;
  main_user: string = "juliusomo";

  ngOnInit() {
    let LSD = localStorage.getItem('data');
    if (LSD) {
      this.data = JSON.parse(LSD);
    }
  }

  upvote () {
    this.data.comments[this.index].score++;
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  downvote() {
    this.data.comments[this.index].score--;
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
