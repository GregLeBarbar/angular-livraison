import { Item as ItemModel } from './models/item';

export class Config {
    public static get APP_TITLE(): string { return 'Application de livraison' };
    public static get APP_VERSION(): string { return '1.0' };
    public static get APP_FAKE_COLLECTIOn(): [ItemModel] { return [
        new ItemModel({reference: '1234', name: 'Greg', state: 0}),
        new ItemModel({reference: '3456', name: 'Elodie', state: 1}),
        new ItemModel({reference: '3456', name: 'Julien', state: 2}),
      ] };
}