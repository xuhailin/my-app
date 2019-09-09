import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
