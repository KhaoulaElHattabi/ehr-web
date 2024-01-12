import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HealthRecordsComponent} from "./health-records/health-records.component";
import {PatientsComponent} from "./patients/patients.component";
import {AppointmentsComponent} from "./appointments/appointments.component";

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "ehr", component : HealthRecordsComponent},
  {path : "patients", component : PatientsComponent},
  {path : "appointments", component : AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
