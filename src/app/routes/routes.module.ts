import {NgModule} from '@angular/core';
import {RouteRoutingModule} from './routes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ArticleComponent} from './article/article.component';
import {SearchComponent} from './search/search.component';
import { TopicComponent } from './topic/topic.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowCssComponent } from './search/show-css/show-css.component';

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  declarations: [
    ArticleComponent,
    SearchComponent,
    TopicComponent,
    ShowCssComponent,
  ]
})
export class RoutesModule { }
