import { User } from './data-user/user';
import { AuthService } from './../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user: User = new User() ;
 
  isTela: any = '';
  error: boolean = false;
  nomeTeste: string = 'Lucas'
  logoWarning = ""

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController
    
  ) {}
 
  ngOnInit() {
    this.isTela = this.activatedRoute.component
   
  }

  login() {
   this.authService.login(this.user)
    this.error = true

    alert('clicou!')
    }

    
    onSignIn(googleUser) {
      let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
    }



    
  

  



  


