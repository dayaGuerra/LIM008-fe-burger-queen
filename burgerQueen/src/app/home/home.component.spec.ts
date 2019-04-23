import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('h1').textContent).toContain('Burger Queen');
  }); 

  it('should render title in a p tag', () => {
    const compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('p').textContent).toContain('"La verdadera hamburguesa"');
  }); 

  it('should render title in a tag', () => {
    const compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('a').textContent).toContain('Iniciar ventas');
  }); 


});
