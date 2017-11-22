import { Component, Output, EventEmitter } from '@angular/core'; 
import { Item as ItemModel } from './models/item';

@Component({
  selector: 'item-form',
  templateUrl: './item.form.html'
})
export class ItemForm {

  private item: ItemModel;
  @Output() onCreateItem = new EventEmitter();

  constructor(){
    this.resetItem();
  }

  resetItem() {
    this.item = new ItemModel({reference: '', name: '', state: 0})
  }

  createItem() {
    this.onCreateItem.emit(this.item);
    this.resetItem();
  } 
}  