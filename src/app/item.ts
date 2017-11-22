import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { Item as ItemModel } from './models/item';

@Component({
  selector: 'item',
  templateUrl: './item.html'
})
export class Item {
    @Input() item: Item;
    @Output() onGetDetails = new EventEmitter();

    getDetails(event: Event) {
      
      // Empêche le rechargement de la page 
      // lorsque l'on clique sur le lien
      event.preventDefault();
      this.onGetDetails.emit(this.item);
      
    } 
}