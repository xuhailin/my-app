import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {SearchComponent} from './search/search.component';
import {ArticleComponent} from './article/article.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'search', component: SearchComponent },
      { path: 'article', component: ArticleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
