import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEditPage } from './lista-edit';

@NgModule({
  declarations: [
    ListaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEditPage),
  ],
})
export class ListaEditPageModule {}
