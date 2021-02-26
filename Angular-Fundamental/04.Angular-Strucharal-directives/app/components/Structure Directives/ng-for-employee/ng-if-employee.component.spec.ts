import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfEmployeeComponent } from './ng-if-employee.component';

describe('NgIfEmployeeComponent', () => {
  let component: NgIfEmployeeComponent;
  let fixture: ComponentFixture<NgIfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
