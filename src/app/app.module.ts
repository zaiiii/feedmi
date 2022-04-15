import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingAppComponent } from './meeting-app/meeting-app.component';
import { StudentConsoleComponent } from './student-console/student-console.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    MeetingAppComponent,
    StudentConsoleComponent,
    InstructorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
