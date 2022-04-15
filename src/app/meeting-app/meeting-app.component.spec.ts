import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingAppComponent } from './meeting-app.component';

describe('MeetingAppComponent', () => {
  let component: MeetingAppComponent;
  let fixture: ComponentFixture<MeetingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
