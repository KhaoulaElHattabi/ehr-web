import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css', '../../styles.css']
})
export class PatientsComponent {
  patients : Array<any> = [
    {id : 1, fullName : "hasan faris",
      dateBirth : "01/02/2000", adresse : "bd zfzafi",
      phoneNumber: '+212 6123457890'},
    {id : 2, fullName : "hasan fatis", dateBirth : "01/02/2000", adresse : "bd zfzafi", phoneNumber: '+212 6123457890'},
    {id : 3, fullName : "hasan fatis", dateBirth : "01/02/2000", adresse : "bd zfzafi", phoneNumber: '+212 6123457890'},
    {id : 4, fullName : "hasan fatis", dateBirth : "01/02/2000", adresse : "bd zfzafi", phoneNumber: '+212 6123457890'},
  ]
}
