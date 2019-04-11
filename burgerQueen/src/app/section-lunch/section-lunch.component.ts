import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-section-lunch',
  templateUrl: './section-lunch.component.html',
  styleUrls: ['./section-lunch.component.css']
})
export class SectionLunchComponent implements OnInit {

   data = [];

  constructor( public DataApiService: DataApiService
  ) { }

  // inicialización del componente
  ngOnInit() {
    this.DataApiService.getData().subscribe( data => {

     const filterData =  data.filter((obj: any ) => {
        if(obj.tipo != 'desayuno'){
          return obj;
        }
      });
    
    this.data = filterData;
  });

}
}
