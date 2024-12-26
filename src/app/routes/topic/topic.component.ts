import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of, Observable, Observer } from 'rxjs';
import { Location } from '@angular/common';
import marked from 'marked';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  articleName: string;
  articleContent;
  error = null;
  constructor (
    private location: Location,
    private router: Router,
    private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('id')))
    ).subscribe(d => {
      this.loadArticle(d);
    });

  }

  goBack() {
    this.location.back();
  }

  loadArticle(id: string) {
    fetch(`./assets/data/articles/${id}.md`)
      .then(data => data.text())
      .then(text => {
        const content = text.trim();
        this.parseFrontMatter(content);
      });
  }

  parseFrontMatter(content: string) {
    // Override function
    const tokenizer = {
      codespan(src) {
        const match = src.match(/\$+([^\$\n]+?)\$+/);
        if (match) {
          return {
            type: 'codespan',
            raw: match[0],
            text: match[1].trim()
          };
        }
        return false;
      }
    };
    //  marked.use({ tokenizer });
    console.log(marked);
    this.articleContent = marked(content);
  }
}
