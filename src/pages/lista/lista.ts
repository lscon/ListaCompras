import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
import { ListaEditPage } from '../lista-edit/lista-edit';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  listas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public listaProvider: ListaProvider
    , private toast: ToastController) {
      this.getLista();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  ionViewWillEnter() {
    this.getLista();
  }

  getLista() {
    this.listaProvider.findAll()
    .then(data => {
      this.listas = data;
      console.log(this.listas);
    });
  }
  removeLista(id: number) {
    this.listaProvider.deleteById(id)
      .then( () => {
        this.getLista();
        this.toast.create({ message: 'Lista removida.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editLista(id: number) {
    this.navCtrl.push(ListaEditPage, {id: id});
  }

  addLista() {
    this.navCtrl.push(ListaEditPage);
  }

}
