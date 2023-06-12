import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {
  slots: any[] = [];
  reservations: any[] = [];
  customers: any[] = [];
  newSlot: any = {};

  constructor() {
    this.slots = [
      { id: 1, date: '2023-06-15', time: '09:00 AM' },
      { id: 2, date: '2023-06-15', time: '10:00 AM' },
      { id: 3, date: '2023-06-15', time: '11:00 AM' }
    ];
   //mock data
    this.reservations = [
      { id: 1, customerName: 'Ali', date: '2023-06-15', time: '09:00 AM' },
      { id: 2, customerName: 'Hamza', date: '2023-06-15', time: '10:00 AM' }
    ];

    this.customers = [
      { id: 1, name: 'Ali', email: 'ali@gmail.com' },
      { id: 2, name: 'Hamza', email: 'Hamza@gmail.com' }
    ];
  }

  addSlot(): void {
    const newSlotId = this.slots.length + 1;
    this.newSlot.id = newSlotId;

    // Add 
    this.slots.push(this.newSlot);

    // Reset theslot
    this.newSlot = {};
  }

  deleteSlot(slot: any): void {
    // Remove the slot from the array
    this.slots = this.slots.filter(s => s.id !== slot.id);
  }

  deleteReservation(reservation: any): void {
    // Remove the reservation from the array
    this.reservations = this.reservations.filter(r => r.id !== reservation.id);
  }




  // API DATA


  // fetchSlots(): void {
    // here replace with own api to fetch slots
  //   this.http.get<any[]>('API_ENDPOINT/slots').subscribe(
  //     slots => {
  //       this.slots = slots;
  //     },
  //     error => {
  //       console.log('Errorfetching slots:', error);
  //     }
  //   );
  // }

  // fetchReservations(): void {
  //   // here replace with own api endpoint to fetch reservations
  //   this.http.get<any[]>('API_ENDPOINT/reservations').subscribe(
  //     reservations => {
  //       this.reservations = reservations;
  //     },
  //     error => {
  //       console.log('Errorfetching reservations:', error);
  //     }
  //   );
  // }

  // deleteSlot(slot: any): void {
  //   // herereplace with own api endpoint to fetch reservations endpoint to delete a slot
  //   this.http.delete(`API_ENDPOINT/slots/${slot.id}`).subscribe(
  //     () => {
  //       // Remove the slot 
  //       this.slots = this.slots.filter(s => s.id !== slot.id);
  //       console.log('Slot deleted successfully!');
  //     },
  //     error => {
  //       console.log('Error deleting slot:', error);
  //     }
  //   );
  // }

  // deleteReservation(reservation: any): void {
  //   // Perform API call to delete the reservation
  //   // Replace 'API_ENDPOINT/reservations' with your actual API endpoint to delete a reservation
  //   this.http.delete(`API_ENDPOINT/reservations/${reservation.id}`).subscribe(
  //     () => {
  //       // Remove the reservation 
  //       this.reservations = this.reservations.filter(r => r.id !== reservation.id);
  //       console.log('Reservation deleted successfully!');
  //     },
  //     error => {
  //       console.log('Error deleting reservation:', error);
  //     }
  //   );
  // }
}
