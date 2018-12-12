import { Component } from '@angular/core';
import { ReportesPage } from '../reportes/reportes';
import { VotosPage } from '../votos/votos';
import { NoticiasPage } from '../noticias/noticias';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Tabs</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content></ion-content>
  `
})
class InicioContentPage {
  
  constructor() { 
      
  }
}

@Component({
  template: `
  <ion-tabs selectedIndex="2">
  <ion-tab tabIcon="home" tabTitle ="Noticias" [root]="noticiasPage"></ion-tab>
  <ion-tab tabIcon="list-box" tabTitle ="Reportes"[root]="reportesPage"></ion-tab>
  <ion-tab tabIcon="star" tabTitle ="Votos"[root]="votosPage"></ion-tab>
  </ion-tabs>`
})
export class InicioPage {
  noticiasPage = NoticiasPage;
  reportesPage = ReportesPage;
  votosPage = VotosPage;
   constructor(){
    
    
   }
  
}
