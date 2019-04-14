import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-pant',
  template: `
  <div class="d-flex justify-content-around space">
  <div class="width">
  <app-section-lunch></app-section-lunch>
  </div>
  <div class="width">
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