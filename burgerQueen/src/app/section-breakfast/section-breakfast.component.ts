import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-section-breakfast',
  templateUrl: './section-breakfast.component.html',
  styleUrls: ['./section-breakfast.component.css']
})
export class SectionBreakfastComponent implements OnInit {

  data = [];

  constructor( public DataApiService: DataApiService
  ) { }

  // inicialización del componente
  ngOnInit() {
    this.DataApiService.getData().subscribe( data => {

     const filterData =  data.filter((obj: any ) => {
        if(obj.tipo != 'almuerzo'){
          return obj;
        }
      });
    
    this.data = filterData;
  });

}
}