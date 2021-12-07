import { AlertController } from '@ionic/angular';
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

  isPage: String;

  constructor(
    private alertController: AlertController,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }


ngOnInit() {
  this.isPage = this.activedRoute.routeConfig.component.name
  
}

async presentAlertExit() {
  const alert = await this.alertController.create({
    cssClass: 'alert-style',
    message: `<img src="../../assets/logo.svg" width="35px" height="35px">
    <p>Deseja realmente sair ?</p>`,
    buttons: [{
      text:'Sim',
      cssClass:'button-alert',
      handler: () => {
  
        this.router.navigate(['/login'])
      }
    },
  
  {
    text: 'Não',
    cssClass: 'button-alert'
  }]
});

  
  await alert.present();
}
  


  backPage() {
    this.location.back()
  }

  exit() {
    this.presentAlertExit()
   // this.router.navigate(['/login'])
  }


}