import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-settings',
  templateUrl: './list-settings.component.html',
  styleUrls: ['./list-settings.component.scss'],
})
export class ListSettingsComponent {

  constructor(
    private router: Router
  ) { }

  pageProfile() {
    this.router.navigate(['/profile']);
   }
   
   pageInformationCar() {
     this.router.navigate(['/car-information'])
   }

}
