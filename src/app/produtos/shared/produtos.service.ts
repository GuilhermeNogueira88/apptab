import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebasePath } from '../../core/shared/firebase-path';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private db:AngularFireDatabase) { }

  getAll(categoriaKey:string = null){
    return this.db.list(FirebasePath.PRODUTOS, q => {
    if(categoriaKey){
     return q.orderByChild('categoriaKey').equalTo(categoriaKey)
    }else{
      return q.orderByChild('nome');
    }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }))
      }
        )
    )

  
  }

  
  getCategoriasAll() {
    return this.db.list(FirebasePath.CATEGORIAS).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }))
           })
    )
     }

}
