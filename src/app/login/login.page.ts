import { Location } from '@angular/common';
import { SignupPage } from './../signup/signup.page';
import { User } from './data-user/user';
import { AuthService } from './../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user: User = new User();

  isTela: any = '';
  error: any = false
  textError: String = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.isTela = this.activatedRoute.component
    

  }

  login() {
    this.authService.login(this.user)

   if(!this.authService.userAuthenticated){
    this.error = this.authService.resultError
    this.textError = 'Dados incorretos. Tente novamente!'
   
    if(this.user.email == "" || this.user.password == ""){
      this.error = this.authService.resultError
      this.textError = 'Os campos são obrigatório!'
      
    }
    
  }   

  }



  signupPage() {
    this.router.navigate(['/signup'])

  }


}













