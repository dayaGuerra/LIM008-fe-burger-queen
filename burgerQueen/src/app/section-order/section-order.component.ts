import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../services/menu-data.service';


@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.css']
})
export class SectionOrderComponent implements OnInit {
 
  fecha : any;
  date: any;
  pedidoDelDia = [];
  totalProducto: number;
  cliente: string;
  mesa:any;


  constructor(public menuDataService: MenuDataService) {  
    this.funcionDePedidosConCopia();
    this.getTotal()
  }

  ngOnInit() {
   this.fecha = new Date();
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

  enviarData(cliente, mesa: any, date){
 
     // fecha: this.date,
    

    this.menuDataService.objetoAenviar(cliente, mesa, date);
  }

}
