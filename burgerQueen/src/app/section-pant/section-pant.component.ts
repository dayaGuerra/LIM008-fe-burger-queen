import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-pant',
  template: `
  <div class="d-flex justify-content-around space">
  <div class="width">
  <div class="navbar navbar-light bg-light">
    <button class="btn btn-outline-success"  (click)="showLunch()" type="button">Desayuno</button>
    <button class="btn btn-outline-success" (click)="showBreakfast()" type="button">Almuerzo</button>
  </div>
  <router-outlet></router-outlet>
  </div>
  <div class="width">
  <app-section-order></app-section-order>
  </div>
  </div>
  `,
  styleUrls: ['./section-pant.component.css']
})
export class SectionPantComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
  }

  showLunch(){
    this.router.navigate(['desayuno'], { relativeTo: this.route });
  }

  showBreakfast(){
    this.router.navigate(['almuerzo'], { relativeTo: this.route });
  }
}