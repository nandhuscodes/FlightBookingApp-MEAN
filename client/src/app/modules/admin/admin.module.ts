import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlightsComponent } from './components/flights/flights.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    BookingsComponent,
    AddFlightComponent,
    DashboardComponent,
    FlightsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
