import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMagiasComponent } from './selector-magias.component';

describe('SelectorMagiasComponent', () => {
  let component: SelectorMagiasComponent;
  let fixture: ComponentFixture<SelectorMagiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorMagiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorMagiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
