import { Injectable } from '@angular/core';
// Creacion del servicio con Behavior de rxjs 
import { BehaviorSubject } from 'rxjs';
import { DataApiService } from './data-api.service';


// Creo el servicio para exportar el orden de la creación de la data
// Aqui se crea el modelo de objeto en el que se va a almacenar la información

export interface SectionOrder {
  cliente: string,
  mesa: string,
  fecha: any,
  productos : Productos[],
  totalSectionOrder: number,
};


export interface Productos {
 id: string,
 nombre: string,
 precio: number,
 cantidad: number,
 subTotal: number,
};


@Injectable({
  providedIn: 'root'
})

export class MenuDataService {
  // observable que envia data a desayuno
public menuDesayuno = new BehaviorSubject([]);
desayunos = this.menuDesayuno.asObservable();

// nuevo observable envia la data total
public totalData = new BehaviorSubject(0);
totalPedidos = this.totalData.asObservable();



arrOrden: Productos[] = [];
arrCalculate: number;

// inicializar data del pedido
public objMenuCliente: SectionOrder = {
  cliente: '',
  mesa: '',
  fecha: 0,
  productos : [],
  totalSectionOrder: 0,
};

  // para trabajar todo el cambio de data a travez de un Obsrvable
  constructor(public DataApiService: DataApiService) { }
  // Crear un metodo que capture el valor y lo guarde.
  menuDesayunoData(value){
    // sacar una copia de valu12 aqui, para empezar a mandar la data IMPORTANTE.
    this.arrOrden.push(value);
    this.menuDesayuno.next(this.arrOrden);
    // lo va a guardar en la variable 
    this.totalDePedidos();
  }

  acumuladorDePedidos(obj, cantidadModificada){
 this.arrOrden = this.arrOrden.map( elementObj => {
   if( elementObj.id === obj.id){
    
    const objNuevo = { 
      ...elementObj,
      cantidad: parseInt(cantidadModificada),
      subTotal: parseInt(cantidadModificada)*obj.precio,
    }    
    return objNuevo;
   }
  return elementObj;
})
 
 
 this.menuDesayuno.next(this.arrOrden);
 this.totalDePedidos();
}

totalDePedidos(){
  this.arrCalculate = this.arrOrden.reduce((acum, obj) => {
   
       return acum + obj.subTotal;
   
     }, 0);
     this.totalData.next(this.arrCalculate);
 }

 eliminarProducto(id){
   this.arrOrden = this.arrOrden.filter(objArrOrden => {
     return objArrOrden.id !== id;
     });
     this.menuDesayuno.next(this.arrOrden);
     this.totalDePedidos()
 }

 objetoAenviar(nmbreCliente, numeroMesa, fechaCliente){

  const dataAEnviar = this.objMenuCliente = {
    ...this.objMenuCliente,
    cliente: nmbreCliente,
    mesa: numeroMesa,
    fecha:fechaCliente,
    productos:this.arrOrden,
    totalSectionOrder: this.arrCalculate
  }
  this.DataApiService.agregarDataFirestore(dataAEnviar);
 }
 
}
