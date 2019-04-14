import { Injectable } from '@angular/core';
// Creacion del servicio con Behavior de rxjs 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
public menuDesayuno = new BehaviorSubject([]);
desayunos = this.menuDesayuno.asObservable();

arrOrden: object[] = [];

 // para trabajar todo el cambio de data a travez de un Obsrvable
  constructor() { }
  // Crear un metodo que capture el valor y lo guarde.
  menuDesayunoData(value){
    this.arrOrden.push(value);
    this.menuDesayuno.next(this.arrOrden);
    // lo va a guardar en la variable 
  }
}
