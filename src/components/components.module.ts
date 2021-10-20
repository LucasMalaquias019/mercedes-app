import { QuickControlComponent } from './quick-control/quick-control.component';
import { StatusComponent } from './status/status.component';
import { ListInformationComponent } from './list-information/list-information.component';
import { ListSettingsComponent } from './list-settings/list-settings.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { IonicModule } from '@ionic/angular';
import { SlideLoginComponent } from './slide-login/slide-login.component';
import { SlideCarComponent } from './slide-car/slide-car.component';
import { ButtonSingupComponent } from './button-singup/button-singup.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { ButtonGoogleComponent } from './button-google/button-google.component';
import { ButtonFacebookComponent } from './button-facebook/button-facebook.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        ButtonFacebookComponent,
        ButtonGoogleComponent,
        ButtonLoginComponent,
        ButtonSingupComponent,
        HeaderComponent,
        HeaderLoginComponent,
        ListInformationComponent,
        ListSettingsComponent,
        SlideCarComponent,
        SlideLoginComponent,
        StatusComponent,
        QuickControlComponent
       



    ],

    imports: [
       IonicModule
    ],

    exports: [
        ButtonFacebookComponent,
        ButtonGoogleComponent,
        ButtonLoginComponent,
        ButtonSingupComponent,
        HeaderLoginComponent,
        HeaderComponent,
        ListInformationComponent,
        ListSettingsComponent,
        SlideCarComponent,
        SlideLoginComponent,
        StatusComponent,
        QuickControlComponent
        
    ]
})

export class ComponentsModule {}