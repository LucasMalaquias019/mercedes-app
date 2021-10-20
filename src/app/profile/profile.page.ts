import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {

userName: string = 'Lucas Malaquias'
email: string = 'malaka2314@gmail.com'
address: string = 'Twin Oaks, Springfield, EUA'
phoneNumber: string = '+1 334-752-8219'
licenseDriving: string = '3546583'
isPage: string 

  constructor(
    private router: Router
  ) { }

  
}
