import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import { AppComponent }       from './app.component';

/* Featured Modules */
import { ContactModule }      from './contact/contact.module';
import { CoreModule }      from './core/core.module';

// Routing NgModule
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    ContactModule, 
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
