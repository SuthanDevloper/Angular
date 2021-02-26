import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaageCardComponent } from './mesaage-card.component';

describe('MesaageCardComponent', () => {
  let component: MesaageCardComponent;
  let fixture: ComponentFixture<MesaageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
