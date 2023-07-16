import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})
export class OwnerRegisterComponent {
  regForm: FormGroup;

  constructor(private http: HttpClient, private route: Router) {
    this.regForm = new FormGroup({
      airline: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (jwtToken) {
      this.route.navigate(['/admin/dashboard'])
    }
    const token = localStorage.getItem("jwtToken")
    if (token) {
      this.route.navigate(['/'])
    }
  }

  onSubmit(details: {  airline: string, email: string, password: string }): void {
    this.http.post('http://localhost:5100/airline-register', details).subscribe(
      (response) => {
        window.alert('Airline Registered Successfully!');
        this.route.navigate(['/airline-login']);
      },
      (error) => {
        if (error.status === 400) {
          window.alert('Airline already exists');
        } else {
          window.alert('Registration Failed!');
        }
        console.log(error);
      }
    );
  }
  passwordType = 'password';
  name: string = '';
  password: string = '';
  errorMessage: string = '';
  isPasswordVisible = false;
  togglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordType = this.isPasswordVisible ? 'text' : 'password';
}
}
