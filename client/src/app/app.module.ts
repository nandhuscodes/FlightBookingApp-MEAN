import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HomeComponent } from './components/home/home.component';
import { OwnerLoginComponent } from './components/owner-login/owner-login.component';
import { OwnerRegisterComponent } from './components/owner-register/owner-register.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { OwnerHeaderComponent } from './components/owner-header/owner-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingsComponent,
    HomeComponent,
    OwnerLoginComponent,
    OwnerRegisterComponent,
    RegisterComponent,
    LoginComponent,
    AdminHeaderComponent,
    OwnerHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
