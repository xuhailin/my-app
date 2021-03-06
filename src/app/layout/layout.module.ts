import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {SharedModule} from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
