import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";
import {environement} from "../../env/environement.prod";
import {Environement} from "../../env/environement";

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http : HttpClient) { }

  public getPatients() : Observable<Patient[]>{
    return this.http.get<Patient[]>(Environement.backendBase+"/patient-service/patientsProjection")
  }
   addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(Environement.backendBase+"/patient-service/new-patient",patient);
  }

  deletePatient(patientId: number): Observable<void> {
    return this.http.delete<void>(`${Environement.backendBase}/patient-service/delete-patient/${patientId}`);
  }

  public editPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(Environement.backendBase + `/patient-service/update-patient`, patient);
  }

}
