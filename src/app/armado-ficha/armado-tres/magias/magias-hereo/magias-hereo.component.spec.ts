import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagiasHereoComponent } from './magias-hereo.component';

describe('MagiasHereoComponent', () => {
  let component: MagiasHereoComponent;
  let fixture: ComponentFixture<MagiasHereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagiasHereoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagiasHereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
