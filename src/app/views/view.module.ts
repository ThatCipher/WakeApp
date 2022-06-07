import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ViewRoutingModule } from './view-routing.module';
import { ComponentsModule } from '../components/components.module';

// Views
import { HomePage } from './home/home.page';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRoutingModule,
    ComponentsModule
  ]
})
export class ViewModule { }
