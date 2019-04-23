import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPantComponent } from './section-pant.component';

describe('SectionPantComponent', () => {
  let component: SectionPantComponent;
  let fixture: ComponentFixture<SectionPantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
