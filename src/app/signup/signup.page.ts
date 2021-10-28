import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  isPage: string

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location ) {
       
   }

  ngOnInit() {
    
  }

  backPage() {
    this.router.navigate(['/login'])
  }

}
