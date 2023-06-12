

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrls: ['./customer-portal.component.css']
})
export class CustomerPortalComponent {
  slotForm: FormGroup;
  slots: any[] = []; 
  selectedSlots: any[] = []; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.slotForm = this.formBuilder.group({
      date: [''],
      time: [''],
      // add more reservationfields
    });
  }


  searchSlots(): void {
    // mock data
    const mockSlots = [
      { id: 1, time: '9:00 AM', isAvailable: true },
      { id: 2, time: '10:00 AM', isAvailable: false },
      { id: 3, time: '11:00 AM', isAvailable: true },
      // Add more mock data as needed
    ];
  
    this.slots = mockSlots;
  }
  
  reserveSlot(slot: any): void {
    
    console.log('Slot reserved successfully!');
    this.selectedSlots.push(slot);
  }


  // Api related end point

  // searchSlots(): void {
  //   const date = this.slotForm.get('date').value;
  //   const time = this.slotForm.get('time').value;

  //   // Perform API call to retrieve available slots based on date and time
  //   replace with end point of what I create in backend
  //   this.http.get<any[]>(`API_ENDPOINT?date=${date}&time=${time}`)
  //     .subscribe(slots => {
  //       this.slots = slots;
  //     });
  // }

  // reserveSlot(slot: any): void {
  //   replace with end point of what I create in backend

  //   this.http.post('API_ENDPOINT/reserve', slot)
  //     .subscribe(() => {
  //       // Handle successful reservation
  //       console.log('Slot reserved successfully!');
  //     });
  // }



}
