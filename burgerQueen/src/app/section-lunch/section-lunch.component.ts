import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { MenuDataService } from '../services/menu-data.service';
@Component({
  selector: 'app-section-lunch',
  templateUrl: './section-lunch.component.html',
  styleUrls: ['./section-lunch.component.css']
})
export class SectionLunchComponent implements OnInit {
   data = [];
   valordedatomenu = {};

  constructor( public DataApiService: DataApiService,
     public MenuDataService: MenuDataService) {
      this.MenuDataService.desayunos.subscribe( menuDelDia => {
      this.valordedatomenu = menuDelDia;
   })
   
  }

  // inicialización del componente
  ngOnInit() { }

  // Funcion de filtrado
  filtrarMenu(typeMenu : string){
    this.DataApiService.getData().subscribe( data => {
          // se crea una variable de tipo string donde se va a guardar el valor
      const filterData =  data.filter((obj: any ) => {

         if(obj.tipo === typeMenu){
            return obj;
         }
       });
     
     this.data = filterData;
   });
  }

  // Funcion de envio de obj a servicio
  menuDesayunoData(valor:string){
    const valorDeMenu = valor;
    this.MenuDataService.menuDesayunoData(valorDeMenu);
  }

}