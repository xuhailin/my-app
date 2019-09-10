import {NgModule} from '@angular/core';
import {RouteRoutingModule} from './routes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ArticleComponent} from './article/article.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
  ],
  declarations: [ArticleComponent, SearchComponent]
})
export class RoutesModule { }
