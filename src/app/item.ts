import { Component, Input, Output, EventEmitter} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Item as ItemModel } from './models/item';

@Component({
  selector: 'item',
  templateUrl: './item.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('itemAnimationState', [
      state('inactive', style({color: 'red'})),
      state('active', style({color: 'blue'})),

      // Je ne parviens pas à faire fonctionner la transition inactive <=> active
      // cela devrait passer du rouge => au bleu puis du bleu => au rouge
      // Mais cela ne marche que si je click une deuxième fois 


      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ]),
    ])
  ]
})
export class Item {

    // défini l'item qui sera affiché dans le parent
    // => communication parent => enfant
    @Input() item: ItemModel;

    // défini l'événement onGetDetails
    // => communication enfant => parent
    @Output() onGetDetails = new EventEmitter();
    @Output() onDeleteItem = new EventEmitter();

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

    deleteItem(event: Event) {
      event.preventDefault();
      this.onDeleteItem.emit(this.item)
    }

}