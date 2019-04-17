import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../services/menu-data.service';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.css']
})
export class SectionOrderComponent implements OnInit {
  date: any
 // fecha : Timestamp <1>;
  pedidoDelDia = [];
  totalProducto: number;
  cliente: string;
  mesa:string;


  constructor(public menuDataService: MenuDataService) {  
    this.funcionDePedidosConCopia();
    this.getTotal()
  }

  ngOnInit() {
   this.date = new Date();
  }

  cantPedido(event, valores:number){
    this.menuDataService.acumuladorDePedidos(event,valores);
  }

  
  funcionDePedidosConCopia(){
    this.menuDataService.desayunos.subscribe((menu: any) => {
       this.pedidoDelDia = menu; 
        })
  }

  getTotal(){
    this.menuDataService.totalPedidos.subscribe((total:number) => {
      this.totalProducto = total;
    })
  }

  eliminar(id: any){
    this.menuDataService.eliminarProducto(id);//lafuncion(ingresa el id)
  }

  objetoAenviar(){
    const obj = {
      cliente: this.cliente,
      mesa: this.mesa,
     // fecha: this.date,
    }
  }

}
