import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import { ShapeComponent } from './components/shape/shape.component';
import { HtmlPipe } from './pipes/html.pipe';

const MODULES = [
  CommonModule,
  RouterModule,
  MaterialModule,
];

const COMPONENTS = [
  ShapeComponent,
  HtmlPipe,
];
@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ],
  declarations: [
  ...COMPONENTS]
})
export class SharedModule { }
