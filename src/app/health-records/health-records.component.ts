import { Component } from '@angular/core';

@Component({
  selector: 'app-health-records',
  templateUrl: './health-records.component.html',
  styleUrls: ['./health-records.component.css', '../../styles.css']
})
export class HealthRecordsComponent {
ehrs : Array<any> = [
  {id: 1, patientId : Math.floor(Math.random() * 1000), diagnosis : "diagnosis1", prescriptionNumber : 2, appointmentsNumber: 4, createdAt: "01/02/2000"},
  {id: 2, patientId : Math.floor(Math.random() * 1000), diagnosis : "diagnosis2", prescriptionNumber : 2, appointmentsNumber: 4, createdAt: "01/02/2000"},
  {id: 3, patientId : Math.floor(Math.random() * 1000), diagnosis : "diagnosis3", prescriptionNumber : 2, appointmentsNumber: 4, createdAt: "01/02/2000"},
  {id: 4, patientId : Math.floor(Math.random() * 1000), diagnosis : "diagnosis4", prescriptionNumber : 2, appointmentsNumber: 4, createdAt: "01/02/2000"},
    ]
}
