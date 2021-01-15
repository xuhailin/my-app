import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import { HtmlPipe } from './pipes/html.pipe';
import { ShapeDirective } from './directives/shape.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectTagDirective } from './directives/effect-tag.directive';

const MODULES = [
  CommonModule,
  RouterModule,
  MaterialModule,
  FontAwesomeModule,
];

const COMPONENTS = [
  ShapeDirective,
  HtmlPipe,
  EffectTagDirective,
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
