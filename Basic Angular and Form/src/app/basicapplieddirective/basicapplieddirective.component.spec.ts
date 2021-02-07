import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicapplieddirectiveComponent } from './basicapplieddirective.component';

describe('BasicapplieddirectiveComponent', () => {
  let component: BasicapplieddirectiveComponent;
  let fixture: ComponentFixture<BasicapplieddirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicapplieddirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicapplieddirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
