import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingAppComponent } from './meeting-app/meeting-app.component';

const routes: Routes = [
  {path: 'join-meeting', component: MeetingAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
