import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DidComponentComponent } from './components/Did/did-component/did-component.component';
import { NavbarComponentComponent } from './components/navbar/navbar-component/navbar-component.component';
import { ToDoComponentComponent } from './components/ToDo/to-do-component/to-do-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DidComponentComponent,
    NavbarComponentComponent,
    ToDoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
