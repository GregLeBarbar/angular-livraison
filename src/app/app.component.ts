import { Component } from '@angular/core'; 
import { Item } from './models/item';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;
  private version: string;
  private collection: [Item];
  private newItem: Item;

  constructor() {

    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = Config.APP_FAKE_COLLECTIOn;
    this.newItem = this.resetNewItem();
  }

  resetNewItem() {
    return new Item({reference: '', name: '', state: 0});
  }

  getDetails(event: Event, parameter: string) {

    // Empêche le rechargement de la page 
    // lorsque l'on clique sur le lien
    event.preventDefault();

    // Exemple de passage d'info supplémentaire 
    // en ajoutant un paramètre
    console.log(parameter);

    // Astuce pour récupérer la référence d'une commande 
    // dans le html la référence est placée dans l'attribut id
    // et ici on récupère la valeur de l'attribut id.
    // Mais c'est de la bidouille ... l'utilisation des modèles est la version recommandée
    let element = event.target || event.srcElement || event.currentTarget;
    //console.log("La référence de l'objet est: ", element.attributes.id.value);

  }

  createCommand() {
    this.collection.push(this.newItem);
    this.resetNewItem();
  }
}
