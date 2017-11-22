import { Component } from '@angular/core';
import { Event } from '_debugger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;
  private version: string;
  private collection: [any];

  constructor() {

    this.title = 'Salut à tous !';
    this.version = '1.0';
    this.collection = [
      {reference: '1234', name: 'Greg', state: 0},
      {reference: '3456', name: 'Elodie', state: 1},
      {reference: '3456', name: 'Julien', state: 2},
    ]
  }

  getDetails(event: Event, parameter: string) {

    // Empêche le rechargement de la page 
    // lorsque l'on clique sur le lien
    event.preventDefault();

    // exemple de passage d'info supplémentaire 
    // en ajoutant un paramètre
    console.log(parameter);

    // Astuce pour récupérer la référence d'une commande 
    // dans le html la référence est placée dans l'attribut id
    // et ici on récupère la valeur de l'attribut id.
    // Mais c'est de la bidouille ... l'utilisation des modèles est la version recommandée
    let element = event.target || event.srcElement || event.currentTarget;
    console.log("La réféence de l'objet est: ", element.attributes.id.value);

  }

  createCommand() {
    let command = {reference: '9999', name: 'Julien', state: 2};
    this.collection.push(command);
  }
}
