import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../services/menu-data.service';
import { DataApiService } from '../services/data-api.service'


@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.css']
})
export class SectionOrderComponent implements OnInit {
 
  fecha : any;
  date: any;
  pedidoDelDia = [];
  dataPedidos = [];
  numeroDePedidos: number;
  totalProducto: number;
  cliente: string;
  mesero:string;
  mesa:number;
  numeroDeOrden:string;


  constructor(public menuDataService: MenuDataService, public dataApiService: DataApiService) {  
    this.funcionDePedidosConCopia();
    this.getTotal()
    this.registrarNumeroDeOrden()
  }

  ngOnInit() {
   this.fecha = new Date();
  }

  registrarNumeroDeOrden(){
    this.dataApiService.getDataNumeroDePedidos().subscribe( dataPedidos => {
     this.numeroDePedidos = dataPedidos.length + 1;
     })
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

  enviarData(){

   if((this.cliente === '') || (this.mesa === 0) || (this.date === '') || (this.mesero === '')){
    
    console.log('puta data');
   
    }else if((this.cliente !== '') || (this.mesa !== 0) || (this.date !== '') || (this.mesero !== '')){

      const obj = 
    {
      mesero:this.mesero,
      cliente: this.cliente,
      mesa: this.mesa,
      fecha: this.fecha,
      orden: this.numeroDePedidos
    }
    this.menuDataService.objetoAenviar(obj); 
    }

}

  

}

/*if((cliente !== '') || (mesa !== 0) || (date !== '')){
      this.menuDataService.objetoAenviar(cliente, mesa, date, pedido);
      this.cliente = '';
      this.mesa = 0;
      this.date = '';
     }else{
       alert('No se pueden enviar datos vacios')
     } */