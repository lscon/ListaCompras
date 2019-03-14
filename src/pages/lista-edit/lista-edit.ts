import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Lista, ListaProvider } from '../../providers/lista/lista';

@IonicPage()
@Component({
  selector: 'page-lista-edit',
  templateUrl: 'lista-edit.html',
})
export class ListaEditPage {
  lista: Lista;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private listaProvider: ListaProvider) {
      this.lista = new Lista();

      if (this.navParams.data.id) {
        this.listaProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.lista = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEditPage');
  }

  save() {
    this.listaProvider.save(this.lista)
      .then(() => {
        this.toast.create({ message: 'Lista salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar .', duration: 3000, position: 'botton' }).present();
      });
  }

}
