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
  main_user: string = "juliusomo";

  ngOnInit() {
    // this.i = this.index;
    // this.main_user = this.data.comments[this.i].user.username;
  }
}
