import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { HealthRecordsComponent } from './health-records/health-records.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    HealthRecordsComponent,
    AppointmentsComponent,
    HomeComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
