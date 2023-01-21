import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentRepliesComponent } from "./comment-section/comment-replies/comment-replies.component";

@NgModule({
    declarations: [
        AppComponent,
        CommentSectionComponent,
        CommentAddComponent,
        CommentRepliesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule
    ]
})
export class AppModule {

}
