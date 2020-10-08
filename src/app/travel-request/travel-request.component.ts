import { Component, OnInit } from '@angular/core';
import { travelForm } from '../travelForm';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent {

  d: Date = new Date();
  model = new travelForm(null, null, null,  null, null)
  submitted = false;

  onSubmit()
   {
      this.model.total = this.model.travelerAmount * 150;
   }



  newRequest() {
    this.model = new travelForm(' ', '', this.d, 0, null);
  }

}
