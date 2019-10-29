import { SharedModule } from 'src/app/core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaProdutoPedidoPage } from './lista-produto-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutoPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutoPedidoPage]
})
export class ListaProdutoPedidoPageModule {}
