import {NgModule} from '@angular/core';
import {RouteRoutingModule} from './routes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ArticleComponent} from './article/article.component';
import {SearchComponent} from './search/search.component';
import { TopicComponent } from './topic/topic.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    ArticleComponent,
    SearchComponent,
    TopicComponent,
  ]
})
export class RoutesModule { }
