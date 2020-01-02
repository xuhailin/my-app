import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import { HtmlPipe } from './pipes/html.pipe';
import { ShapeDirective } from './directives/shape.directive';

const MODULES = [
  CommonModule,
  RouterModule,
  MaterialModule,
];

const COMPONENTS = [
  ShapeDirective,
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
