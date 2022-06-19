import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { WindowHeaderComponent } from './window/window-header/window-header.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    WindowComponent,
    WindowHeaderComponent,
    ClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WindowComponent,
    ClockComponent
  ]
})
export class ComponentsModule { }
