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

  onGetDetails(item: Item) {
    console.log(item);
  }

  onCreateItem(item: Item) {
    this.collection.push(item);
  }
}
