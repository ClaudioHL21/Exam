import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Imagen1Page } from '../pages/imagen1/imagen1';
import { Nombre1Page } from '../pages/nombre1/nombre1';
import { Album1Page } from '../pages/album1/album1';
import { Reseñas1Page } from '../pages/rese\u00F1as1/rese\u00F1as1';
import { Nombre2Page } from '../pages/nombre2/nombre2';
import { Imagen2Page } from '../pages/imagen2/imagen2';
import { Album2Page } from '../pages/album2/album2';
import { Reseñas2Page } from '../pages/rese\u00F1as2/rese\u00F1as2';
import { Imagen3Page } from '../pages/imagen3/imagen3';
import { Nombre3Page } from '../pages/nombre3/nombre3';
import { AlbumPage } from '../pages/album/album';
import { Reseñas3Page } from '../pages/rese\u00F1as3/rese\u00F1as3';
import { Imagen4Page } from '../pages/imagen4/imagen4';
import { Nombre4Page } from '../pages/nombre4/nombre4';
import { Album4Page } from '../pages/album4/album4';
import { Reseñas4Page } from '../pages/rese\u00F1as4/rese\u00F1as4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Imagen1Page,
    Nombre1Page,
    Album1Page,
    Reseñas1Page,
    Nombre2Page,
    Imagen2Page,
    Album2Page,
    Reseñas2Page,
    Imagen3Page,
    Nombre3Page,
    AlbumPage,
    Reseñas3Page,
    Imagen4Page,
    Nombre4Page,
    Album4Page,
    Reseñas4Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Imagen1Page,
    Nombre1Page,
    Album1Page,
    Reseñas1Page,
    Nombre2Page,
    Imagen2Page,
    Album2Page,
    Reseñas2Page,
    Imagen3Page,
    Nombre3Page,
    AlbumPage,
    Reseñas3Page,
    Imagen4Page,
    Nombre4Page,
    Album4Page,
    Reseñas4Page,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
