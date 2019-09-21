import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {  RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValorComponent } from '../../share/valor/valor.component';

@NgModule({
  declarations: [ValorComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ValorComponent,
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  entryComponents:[ValorComponent]
})
export class SharedModule { }
