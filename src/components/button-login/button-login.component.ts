import { AuthService } from './../../app/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss'],
})
export class ButtonLoginComponent implements OnInit {


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {}






}
