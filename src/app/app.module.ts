import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Item as ItemComponent } from './item';
import { ItemForm as ItemFormComponent } from './item.form';
import { ItemPipe } from './pipes/item.filter';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemFormComponent,
    ItemPipe,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
