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

         if(obj.subtipo === typeMenu){
            return obj;
         }
       });
     
     this.data = filterData;
   });
  }

  // Funcion de envio de obj a servicio
  // la cantidad del servicio va a inicializar en 1;
  //  para que cuando le haga click en una propiedad ya este inicializado en 1.
  menuDesayunoData(valor: any){
    
    const valorDeMenu = {
      ...valor,
      cantidad: 1,
      subTotal: valor.precio,
    };

    this.MenuDataService.menuDesayunoData(valorDeMenu);
  }

}
