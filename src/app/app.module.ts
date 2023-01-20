import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentAddComponent } from './comment-add/comment-add.component';

@NgModule({
  declarations: [		
    AppComponent,
      CommentSectionComponent,
      CommentAddComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
