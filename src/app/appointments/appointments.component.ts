import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css', '../../styles.css']
})
export class AppointmentsComponent {
appoints : Array<any> = [
  {id:1, appointmentDate : "01/02/2000", patientId : 1, prescriptionId:1, medicationNum : 5 , status:"SCHEDULED"},
  {id:2, appointmentDate : "01/02/2000", patientId : 2, status:"CANCELED", prescriptionId: 2, medicationNum : 5},
  {id:3, appointmentDate : "01/02/2000", patientId : 3, status:"COMPLETED", prescriptionId: 3, medicationNum : 5},
  {id:4, appointmentDate : "01/02/2000", patientId : 4, status:"SCHEDULED", prescriptionId: 4, medicationNum : 5},
  ]
}
