import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicdrivenformsComponent } from './basicdrivenforms.component';

describe('BasicdrivenformsComponent', () => {
  let component: BasicdrivenformsComponent;
  let fixture: ComponentFixture<BasicdrivenformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicdrivenformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicdrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
