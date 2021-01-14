import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {SearchComponent} from './search/search.component';
import { TopicComponent } from './topic/topic.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'search', component: SearchComponent },
      { path: 'topic/:id', component: TopicComponent },
      { path: '**', redirectTo: ''},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
