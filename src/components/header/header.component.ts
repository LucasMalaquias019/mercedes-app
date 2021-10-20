import { ProfilePage } from './../../app/profile/profile.page';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() isPage: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }



  backPage() {
    this.location.back()
  }
}