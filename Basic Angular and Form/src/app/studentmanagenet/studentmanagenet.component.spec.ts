import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmanagenetComponent } from './studentmanagenet.component';

describe('StudentmanagenetComponent', () => {
  let component: StudentmanagenetComponent;
  let fixture: ComponentFixture<StudentmanagenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmanagenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmanagenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
