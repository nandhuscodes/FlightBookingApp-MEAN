import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-header',
  templateUrl: './owner-header.component.html',
  styleUrls: ['./owner-header.component.css']
})
export class OwnerHeaderComponent {
  onLogout() {
    localStorage.clear()
    window.alert("Logout Successful!")
  }
}
