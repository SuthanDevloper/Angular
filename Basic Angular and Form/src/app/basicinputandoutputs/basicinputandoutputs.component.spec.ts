import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinputandoutputsComponent } from './basicinputandoutputs.component';

describe('BasicinputandoutputsComponent', () => {
  let component: BasicinputandoutputsComponent;
  let fixture: ComponentFixture<BasicinputandoutputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicinputandoutputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinputandoutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
