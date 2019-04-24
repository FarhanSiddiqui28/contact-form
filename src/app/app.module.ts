import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ToDoViewComponent } from './to-do-view/to-do-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ContactFormComponent,
    ToDoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
