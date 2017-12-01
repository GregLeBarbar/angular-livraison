import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Item as ItemComponent } from './item';
import { ItemForm as ItemFormComponent } from './item.form';
import { ItemPipe } from './pipes/item.filter';

/**
 * Dans ce module, on déclare toutes les composants, les pipes (=filtres), etc.
 * A noter que pour pouvoir importer, il faut avoir exporter = mis le mot clef export devant chaque composant, pipe, etc 
 */
@NgModule({
  declarations: [
    AppComponent, // Composant principal
    ItemComponent, // Composant enfant représentant un item
    ItemFormComponent, // Composant enfant représentant un formulaire permettant d'ajouter un item
    ItemPipe, // Pipe pour filtrer les éléments sur le nom du client
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
