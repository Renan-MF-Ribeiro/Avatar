import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlaComponent } from './atla.component';

describe('AtlaComponent', () => {
  let component: AtlaComponent;
  let fixture: ComponentFixture<AtlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
