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

  private user: User = new User() ;
 
  isTela: any = '';
  @Input() error: boolean = false;
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

   //console.log(document.querySelector('input-control').style.border = ' 1px solid rgb(255, 73, 6)')

    }

  signupPage() {
    this.router.navigate(['/signup'])

  }

  
    }



    
  

  



  


