import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPjComponent } from './data-pj.component';

describe('DataPjComponent', () => {
  let component: DataPjComponent;
  let fixture: ComponentFixture<DataPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
