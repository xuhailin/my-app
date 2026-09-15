import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any = {};
  shapeData = [];
  constructor (
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles(): void {
    this.http.get('assets/data/articles.json')
      .subscribe((data: any[]) => {
        this.articles = data.slice(0, 5);
      });
  }

  gotoArticles() {
    this.router.navigate(['/articles']);
  }
}
