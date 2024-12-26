import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articles = {};

  public colors: string[] = [
    // 橙色相关
    '#ff8a00',
    '#ff9d29',
    '#ff6600',
    '#ff3d00',
    '#ffbf80',
    '#ff9933',
    '#f57c00',

    // 粉红色相关
    '#e52e71',
    '#f04f79',
    '#d51e5c',
    '#d50056',
    '#f15b89',
    '#9c1f56',
    '#f8bbd0'
  ];
  public icons: string[] = [
    'sentiment_very_satisfied',
    'pets',
    'star',
    'cloud',
    'favorite',
    'mood',
    'face',
    'grade',
    'lightbulb',
    'umbrella',
    'alarm',
    'emoji_objects'
  ];

  isLinear = false;
  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles(): void {
    this.http.get('assets/data/topic.json')
      .subscribe((data: any[]) => {
        const keys = Object.keys(data).slice();
        const newData = {};
        keys.forEach((key) => {
          newData[key] = data[key];
          const [icon, iconColor] = this.getRandomIcon();
          newData[key]['icon'] = icon;
          newData[key]['iconColor'] = iconColor;
        });
        this.articles = newData;
      });
  }

  public getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    const colorRandomIndex = Math.floor(Math.random() * this.colors.length);
    const icon = this.icons[randomIndex];
    const iconColor = this.colors[colorRandomIndex];
    return [icon, iconColor];
  }

}
