import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { WindowHeaderComponent } from './window/window-header/window-header.component';

@NgModule({
  declarations: [
    WindowComponent,
    WindowHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WindowComponent
  ]
})
export class ComponentsModule { }
