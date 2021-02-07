import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicreactiveformComponent } from './basicreactiveform.component';

describe('BasicreactiveformComponent', () => {
  let component: BasicreactiveformComponent;
  let fixture: ComponentFixture<BasicreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
