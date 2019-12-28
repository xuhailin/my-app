import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import { ShapeComponent } from './components/shape/shape.component';

const MODULES = [
  CommonModule,
  RouterModule,
  MaterialModule,
];
@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: [
  ShapeComponent]
})
export class SharedModule { }
