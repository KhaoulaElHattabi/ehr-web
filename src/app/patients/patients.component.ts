import {Component, OnInit, signal} from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../model/patient";
import {PatientServiceService} from "../services/patient-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css', '../../styles.css']
})
export class PatientsComponent  implements  OnInit {

  selectedPatient: Patient | null = null; // Add this variable to store the selected patient
  patients!: Patient[]
  patientForm!: FormGroup
  editingPatient: boolean = false; // Add this variable to track edit mode
  patientFormEdit!: FormGroup;


  constructor(private fb: FormBuilder,private patientService: PatientServiceService,private router : Router, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.handlePatientList();

    this.patientForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      date_of_birth: [''],
      phone_number: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.patientFormEdit = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      date_of_birth: [''],
      phone_number: ['', Validators.required],
      address: ['', Validators.required],
    });

  }
  handlePatientList()  {
    this.patientService.getPatients()
      .subscribe(patients => this.patients = patients);
  }


  onSubmit() {

      // Assuming you have a PatientService for handling form submissions
      this.patientService.addPatient(this.patientForm.value).subscribe(
        (response) => {
         // console.log('Patient added successfully:', response);
          // Redirect or navigate to another page after successful form submission
          this.patientForm.reset();

          this.handlePatientList()
          //this.router.navigate(['/patients']);
        },
        (error) => {
          console.error('Error adding patient:', error);
        }
      );

  }


  onDelete(patientId: number) {
      this.patientService.deletePatient(patientId).subscribe(
        () => {
          console.log('Patient deleted successfully.');
          this.handlePatientList(); // Refresh the patient list after deletion
          this

        },
        (error) => {
          console.error('Error deleting patient:', error);
        }
      );
    }

  viewPatient(patient: Patient) {
    this.selectedPatient = patient;
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';
  }
   //edit

  loadSelectedPatient(): void {
    // Assuming you have a selectedPatient property in your component
    // that is set when a user clicks the "Modify Patient" button
    if (this.selectedPatient) {
      this.patientFormEdit.patchValue({
        first_name: this.selectedPatient.first_name,
        last_name: this.selectedPatient.last_name,
        date_of_birth: this.selectedPatient.date_of_birth,
        phone_number: this.selectedPatient.phone_number,
        address: this.selectedPatient.address
      });

    }
  }


  onModifyPatient(patient: Patient): void {
    this.selectedPatient = patient;
    this.loadSelectedPatient();
  }
// In your patients.component.ts
  onSaveChanges(): void {
    const updatedPatientData = this.patientFormEdit.value;

    if (this.selectedPatient && this.selectedPatient.id) {
      const patientId = this.selectedPatient.id;
      this.patientService.updatePatient(patientId, updatedPatientData)
        .subscribe(
          (updatedPatient) => {
            console.log('Patient updated successfully:', updatedPatient);
            this.handlePatientList();
            this.patientForm.reset();
          },
          (error) => {
            console.error('Error updating patient:', error);
          }
        );
    }
  }

}
