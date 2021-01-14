import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { ShowCssComponent } from 'src/app/routes/show-css/show-css.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ShowCssComponent
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
