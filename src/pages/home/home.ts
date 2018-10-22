import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Imagen1Page } from '../imagen1/imagen1';
import { Nombre1Page } from '../nombre1/nombre1';
import { Album1Page } from '../album1/album1';
import { Reseñas1Page } from '../rese\u00F1as1/rese\u00F1as1';
import { Nombre2Page } from '../nombre2/nombre2';
import { Imagen2Page } from '../imagen2/imagen2';
import { Album2Page } from '../album2/album2';
import { Reseñas2Page } from '../rese\u00F1as2/rese\u00F1as2';
import { Imagen3Page } from '../imagen3/imagen3';
import { Nombre3Page } from '../nombre3/nombre3';
import { AlbumPage } from '../album/album';
import { Reseñas3Page } from '../rese\u00F1as3/rese\u00F1as3';
import { Imagen4Page } from '../imagen4/imagen4';
import { Nombre4Page } from '../nombre4/nombre4';
import { Album4Page } from '../album4/album4';
import { Reseñas4Page } from '../rese\u00F1as4/rese\u00F1as4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagen1 = Imagen1Page;
  name1 = Nombre1Page;
  album1 = Album1Page;
  reseña1 = Reseñas1Page;
  name2 = Nombre2Page;
  imagen2 = Imagen2Page;
  album2 =Album2Page;
  reseña2 = Reseñas2Page;
  imagen3 = Imagen3Page;
  name3 = Nombre3Page;
  album3 = AlbumPage;
  reseña3= Reseñas3Page;
  imagen4 = Imagen4Page;
  name4 = Nombre4Page;
  album4 = Album4Page;
  reseña4 = Reseñas4Page;

  constructor(public navCtrl: NavController) {

  }

  i1()
  {
    this.navCtrl.push(this.imagen1);
  }

  n1()
  {
    this.navCtrl.push(this.name1);
  }
  a1()
  {
    this.navCtrl.push(this.album1);
  }
  r1()
  {
    this.navCtrl.push(this.reseña1);
  }

  i2()
  {
    this.navCtrl.push(this.imagen2);
  }

  n2()
  {
    this.navCtrl.push(this.name2);
  }
  a2()
  {
    this.navCtrl.push(this.album2);
  }
  r2()
  {
    this.navCtrl.push(this.reseña2);
  }

  i3()
  {
    this.navCtrl.push(this.imagen3);
  }

  n3()
  {
    this.navCtrl.push(this.name3);
  }
  a3()
  {
    this.navCtrl.push(this.album3);
  }
  r3()
  {
    this.navCtrl.push(this.reseña3);
  }

  i4()
  {
    this.navCtrl.push(this.imagen4);
  }

  n4()
  {
    this.navCtrl.push(this.name4);
  }
  a4()
  {
    this.navCtrl.push(this.album4);
  }
  r4()
  {
    this.navCtrl.push(this.reseña4);
  }
}
