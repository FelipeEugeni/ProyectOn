import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EstadisticaCarismaComponent} from './estadistica-carisma.component';

describe('EstadisticaCarismaComponent', () => {
  let component: EstadisticaCarismaComponent;
  let fixture: ComponentFixture<EstadisticaCarismaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaCarismaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaCarismaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
