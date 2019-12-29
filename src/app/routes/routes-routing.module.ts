import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {SearchComponent} from './search/search.component';
import { TopicComponent } from './topic/topic.component';
import { ShowCssComponent } from './search/show-css/show-css.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'search', component: SearchComponent },
      { path: 'search/show-css', component: ShowCssComponent },
      { path: 'topic', component: TopicComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
