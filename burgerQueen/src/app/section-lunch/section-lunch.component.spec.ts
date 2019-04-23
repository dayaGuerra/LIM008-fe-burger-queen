import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLunchComponent } from './section-lunch.component';

describe('SectionLunchComponent', () => {
  let component: SectionLunchComponent;
  let fixture: ComponentFixture<SectionLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
