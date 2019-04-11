import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBreakfastComponent } from './section-breakfast.component';

describe('SectionBreakfastComponent', () => {
  let component: SectionBreakfastComponent;
  let fixture: ComponentFixture<SectionBreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
