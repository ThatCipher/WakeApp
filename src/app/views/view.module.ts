import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRoutingModule } from './view-routing.module';
import { ComponentsModule } from '../components/components.module';

// Views
import { HomePage } from './home/home.page';
import { HomeSettingsComponent } from './home/components/home-settings/home-settings.component';


@NgModule({
  declarations: [HomePage, HomeSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ViewModule { }
