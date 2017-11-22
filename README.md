# Livraison

## Installer l'environnement de développement

Commençons par générer notre projet :

ng new livraison

Se placer dans le répertoire livraison.

cd livraison

Ensuite on doit installer les librairies :

npm install 

Cette commande lit le fichier package.json et install toutes les librairies présentes dans ce fichier.

Ensuite on lance notre server :

ng serve --open

La page http://localhost:4200/ se lance dans votre navigateur.

On est prêt pour commencer à coder !

## bases 

On a vue comment modifier le AppComponent :
- créer des attributs avec des types et de l'accessibilité (private, public, protected)
- un construteur

On a vue dans le template :
- passer des variables au template {{ }}
- *ngFor
- *ngIf
- parcourir un objet dans le template

On a vue comment gérer les styles css.

## Événements

Exemple de 2 événements :
- createCommand()
- getDetails()

la notation () permet de communiquer du template vers le composant

## Modèles et data-binding

la notation [] permet de communiquer du composant vers le template
la notation [(ngModel)] permet de faire du binding dans les 2 sens (data binding)

Pour faire fonctionner le binding dans les 2 sens,
j'ai du ajouter au fichier 'app.module.ts' :
import { FormsModule } from '@angular/forms';
et ajouter FormsModule ici :
 imports: [
    BrowserModule, FormsModule
  ],

## Gestion des constantes

Centraliser les constantes dans un fichier de config.ts

## Angular readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
