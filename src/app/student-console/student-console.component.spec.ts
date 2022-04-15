import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentConsoleComponent } from './student-console.component';

describe('StudentConsoleComponent', () => {
  let component: StudentConsoleComponent;
  let fixture: ComponentFixture<StudentConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
