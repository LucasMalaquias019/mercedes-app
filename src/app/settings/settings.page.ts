import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage  {

  constructor(
  private router: Router
  ) { }

  pageProfile() {
    this.router.navigate(['/profile']);
   }
   
   pageInformationCar() {
     this.router.navigate(['/car-information'])
   }

   pagePayment() {
     this.router.navigate(['/payment'])
   }

}
