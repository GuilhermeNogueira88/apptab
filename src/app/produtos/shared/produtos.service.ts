import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebasePath } from '../../core/shared/firebase-path';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private db: AngularFireDatabase) { }

  // este metôdo apesar de ser um "getAll" ele tem parametros dentro dos parenteses,
  // se string estiver null traz tudo, se não traz o que estiver em categoriaKey
  getAll(categoriaKey: string = null) {
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
    );

  
  }

  
  getCategoriasAll() {
    return this.db.list(FirebasePath.CATEGORIAS).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }))
           })
    )
     }


     //buscar  produto por uma key//
    // ela pega o path = "/produtos" e concactena com a key//
    //exemplo "/produtos" + "15n64n13s4ng65s"
    // "/produtos/15n64n13s4ng65s"//
     getByKey(key: string){
       const path =`${FirebasePath.PRODUTOS}${key}`
       return this.db.object(path).snapshotChanges().pipe(
         map(change => {
           return ({ key: change.key, ...change.payload.val() });
         })
       )
     }
}
