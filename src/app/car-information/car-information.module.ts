import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarInformationPageRoutingModule } from './car-information-routing.module';

import { CarInformationPage } from './car-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarInformationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CarInformationPage]
})
export class CarInformationPageModule {}
