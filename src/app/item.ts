import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { Item as ItemModel } from './models/item';

@Component({
  selector: 'item',
  templateUrl: './item.html',
  styleUrls: ['./app.component.css']
})
export class Item {

    // défini l'item qui sera affiché dans le parent
    // => communication parent => enfant
    @Input() item: ItemModel;

    // défini l'événement onGetDetails
    // => communication enfant => parent
    @Output() onGetDetails = new EventEmitter();

    getDetails(event: Event) {
      
      // Empêche le rechargement de la page lorsque l'on clique sur le lien
      event.preventDefault();

      // Émet l'événement 'onGetDetails' en passant l'item courant en paramètre.
      this.onGetDetails.emit(this.item);
      
    }
    
    changeState(event: Event, state: number) {
      event.preventDefault();
      this.item.state = state;
    }
}