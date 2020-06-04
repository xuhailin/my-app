import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any = {};
  shapeData = [];
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles(): void {
    this.http.get('assets/data/topic.json')
      .subscribe((data: any[]) => {
        const keys = Object.keys(data).slice(0, 5);
        const newData = {};
        keys.forEach((key) => {
          newData[key] = data[key];
        });
        this.articles = newData;
      });
  }
}
