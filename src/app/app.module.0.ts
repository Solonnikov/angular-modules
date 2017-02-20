import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
// import { AppComponent }  from './app.component';
import { AppComponent }  from './app.component.0';

import {
  HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';



@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    HighlightDirective,
    TitleComponent,

    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  providers: [ ContactService, UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

