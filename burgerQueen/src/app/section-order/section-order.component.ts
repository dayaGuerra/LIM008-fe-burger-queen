import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../services/menu-data.service';

@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.css']
})
export class SectionOrderComponent implements OnInit {
  contador:number = 0;

  public pedidoDelDia = {};
  fecha : any;

  constructor(public menuDataService: MenuDataService) {
    this.menuDataService.desayunos.subscribe((menu: any) => {
 
    this.pedidoDelDia = menu;
    })

   }
  ngOnInit() {
   this.fecha = new Date();
  }

}
