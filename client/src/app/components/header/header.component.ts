import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isAdmin = false
  adminToken = false
  passengerToken= false
  ownerToken = false

  constructor(private route: Router) {
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (jwtToken) {
      this.adminToken = true
    }
    const token = localStorage.getItem("jwtToken")
    if (token) {
      this.passengerToken = true
    }
    const agentToken = localStorage.getItem("ownerToken")
    if (agentToken) {
      this.ownerToken = true
    }
  }
  ngOnInit(): void {
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (jwtToken) {
      this.adminToken = true
    }
    const token = localStorage.getItem("jwtToken")
    if (token) {
      this.passengerToken = true
    }
    const agentToken = localStorage.getItem("ownerToken")
    if (agentToken) {
      this.ownerToken = true
    }
  }

  onLogout() {
    localStorage.clear()
    window.alert("Logout Successful!")
    this.ngOnInit()
    this.route.navigate(['/'])
    this.adminToken = false
  this.passengerToken= false
  this.ownerToken = false
  }
  @ViewChild('homeSection', { static: false }) homeSection!: ElementRef;
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;
  @ViewChild('airlinesSection', { static: false }) airlinesSection!: ElementRef;
  @ViewChild('contactSection', { static: false }) contactSection!: ElementRef;
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
