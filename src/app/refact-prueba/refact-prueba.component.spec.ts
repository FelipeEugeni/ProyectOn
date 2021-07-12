import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactPruebaComponent } from './refact-prueba.component';

describe('RefactPruebaComponent', () => {
  let component: RefactPruebaComponent;
  let fixture: ComponentFixture<RefactPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
