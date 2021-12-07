import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  name: String = ''
  email: string = ''
  password: String = ''
  confirmPassword: String = ''

  error: Boolean = false
  errorPassword: Boolean = false
  isPage: string;
  textError: String = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-style',
      message: 
      `<img src="../../assets/logo.svg" width="35px" height="35px">
        <p>Conta criada com Sucesso!</p>`,
      buttons: [{
        text:'OK',
        cssClass:'button-alert',
        handler: () => {
          this.authService.userAuthenticated == true
          this.router.navigate(['/home'])
        }
      }, 

      
    ] 
      
    });

    await alert.present();
  }


  backPage() {
  this.location.back()
  }

  signIn() {

    if (
      this.name == "" ||
      this.email == "" ||
      this.password == "" ||
      this.confirmPassword == ""
    ) {
      this.error = true
      this.textError = 'Os campos são obrigatório'
    }

    if (
      this.name !== "" &&
      this.email !== "" &&
      this.password !== this.confirmPassword) {

      this.errorPassword = true
      this.textError = 'Senhas não conferem!'
    }

    if(
      this.name !== "" &&
      this.email !== "" &&
      this.password == this.confirmPassword) {
        this.presentAlert()
    }

  }





}
