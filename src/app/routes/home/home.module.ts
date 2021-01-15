import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { ShowCssComponent } from '../show-css/show-css.component';
import {effectComponents} from '../show-css/effects';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ShowCssComponent,
    ...effectComponents
  ],
  entryComponents: [
    ...effectComponents
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
