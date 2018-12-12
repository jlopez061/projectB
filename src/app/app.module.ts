import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { InicioPage } from '../pages/inicio/inicio';
import { ReportesPage } from '../pages/reportes/reportes';
import { VotosPage } from '../pages/votos/votos';
import { NoticiasPage } from '../pages/noticias/noticias';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = 
{
  apiKey: "AIzaSyCCVMajJIuRbpC2Rhu2Zob6x-2aWIyavoc",
  authDomain: "proyectobruno-4b693.firebaseapp.com",
  databaseURL: "https://proyectobruno-4b693.firebaseio.com",
  projectId: "proyectobruno-4b693",
  storageBucket: "proyectobruno-4b693.appspot.com",
  messagingSenderId: "339913430550"

};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    InicioPage,
    ReportesPage,
    VotosPage,
    NoticiasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'projectB'),
    AngularFireDatabaseModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    InicioPage,
    ReportesPage,
    VotosPage,
    NoticiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
