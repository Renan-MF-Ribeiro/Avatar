import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaModelComponent } from './historia-model.component';

describe('HistoriaModelComponent', () => {
  let component: HistoriaModelComponent;
  let fixture: ComponentFixture<HistoriaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
