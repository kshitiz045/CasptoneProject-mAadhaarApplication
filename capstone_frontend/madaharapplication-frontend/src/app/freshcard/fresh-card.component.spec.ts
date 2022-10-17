import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshCardComponent } from './fresh-card.component';

describe('FreshCardComponent', () => {
  let component: FreshCardComponent;
  let fixture: ComponentFixture<FreshCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
