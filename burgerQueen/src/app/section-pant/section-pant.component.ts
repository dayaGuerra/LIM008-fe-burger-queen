import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-pant',
  template: `
  
<div class="nav margin"><h1 class="font-burger">Burguer Queen</h1></div>

  <div class="d-flex margin-top justify-content-around space">
  <div class="width">
  <app-section-lunch></app-section-lunch>
  </div>
  <div class="width-order">
  <app-section-order></app-section-order>
  </div>
  </div>
  `,
  styleUrls: ['./section-pant.component.css']
})
export class SectionPantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

}