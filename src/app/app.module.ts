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
    IonicModule.forRoot(MyApp)
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
