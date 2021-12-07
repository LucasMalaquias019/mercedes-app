import { CommonModule } from '@angular/common';
import { QuickControlComponent } from './quick-control/quick-control.component';
import { StatusComponent } from './status/status.component';
import { ListInformationComponent } from './list-information/list-information.component';
import { ListSettingsComponent } from './list-settings/list-settings.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { IonicModule } from '@ionic/angular';
import { SlideLoginComponent } from './slide-login/slide-login.component';
import { SlideCarComponent } from './slide-car/slide-car.component';

import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
       
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
       IonicModule,
       CommonModule
    ],

    exports: [

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