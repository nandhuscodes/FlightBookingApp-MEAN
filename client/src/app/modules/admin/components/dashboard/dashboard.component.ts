import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  yes:any = 45;
  flights: any[] = []
  bookings: any[] = []
  users: any[] = []
  isLoading = false
  constructor(private http:HttpClient){
    this.isLoading = true
    this.http.get<any[]>('http://localhost:5100/flights').subscribe((res) => {
      this.flights = res
    })

    this.http.get<any[]>('http://localhost:5100/bookings').subscribe((res) => {
      this.bookings = res
    })

    this.http.get<any[]>('http://localhost:5100/users').subscribe((res) => {
      this.users = res
      this.isLoading = false
    })
  }

}
