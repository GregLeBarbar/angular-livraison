import { Component } from '@angular/core'; 
import { Item } from './models/item';
import { Config } from './config';

/**
 * Le composant AppComponent est le composant principal.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private collection: [Item];

  constructor() {
    this.collection = Config.APP_FAKE_COLLECTION;
  }

  /**
   * Cette méthode illustre la communication d'un enfant vers un parent.
   * Pour l'instant, on fait simplement un consol.log pour confirmer que l'on a bien les éléments d'un item.
   * Dès que nous aurons étudié le router, on pourra définir une nouvelle URL pour afficher la commande en détail.
   * 
   * @param item 
   */
  onGetDetails(item: Item) {
    console.log(item);
  }

  /**
   * Cette méthode illustre la communication d'un enfant vers un parent.
   * Pour cela l'enfant émet un événement onCreateItem.
   * @param item 
   */
  onCreateItem(item: Item) {
    this.collection.unshift(item);
  }

  onDeleteItem(item: Item) {

    item.animateState = 'removed';
        
    setTimeout( () => {
      const index = this.collection.indexOf(item);
      this.collection.splice(index, 1);  
    }, 3000);
    
  }
}
