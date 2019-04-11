import { Injectable } from '@angular/core';

// firebase
import { AngularFirestore } from '@angular/fire/firestore';

// observable rxjs extenciones reactivas para js
import { Observable } from 'rxjs'

// clase o modelo de data
import { DataApi } from './data-api.model'

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

// utilizo mi models para describir mejor mis datos.
// cuando le de un valor tiene que coincidir con el tipo de valor que le estoy asignando
productsCollection;
products: Observable<DataApi[]>;
productDoc;

  // enlazo con firebase todo lo que quiero obtener de su base de datos
  constructor(public firestore: AngularFirestore) { 
    
  }

  getData(){
  return this.firestore.collection('menu').valueChanges();
  }

}

