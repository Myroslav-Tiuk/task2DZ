import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './servises/user.service';
import { UserComponent } from './components/user/user.component';
import {CommentService} from './servises/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
