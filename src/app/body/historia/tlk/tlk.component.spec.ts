import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlkComponent } from './tlk.component';

describe('TlkComponent', () => {
  let component: TlkComponent;
  let fixture: ComponentFixture<TlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
