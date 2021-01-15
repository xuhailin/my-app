import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'show-css',
  templateUrl: './show-css.component.html',
  styleUrls: ['./show-css.component.scss'],
})
export class ShowCssComponent implements OnInit {
  range: number[] = [];
  showNavState: string = 'hidden';
  showNavIcon = faAngleDoubleDown;
  codes: any = {};

  constructor(
    private http: HttpClient,
    private router: Router) {
    let i = 365;
    while (i > 1) {
      this.range.push(Math.floor(Math.random() * 3));
      i--;
    }
    this.loadCodes();
  }

  ngOnInit() {
  }

  goBack() {
     this.router.navigate(['/search']);
  }

  showNav() {
    if (this.showNavState === 'show') {
      this.showNavState = 'hidden';
      this.showNavIcon = faAngleDoubleDown;
    } else {
      this.showNavState = 'show';
      this.showNavIcon = faAngleDoubleUp;
    }
  }

  viewTopicById(id: string) {
    this.router.navigate(['/topic', id]);
  }


  async loadCodes(): Promise<void> {
   const data =  await this.http.get('assets/data/effect.json')
     .toPromise();
   const result = {};
   Object.keys(data)
     .forEach(async (key) => {
       result[key] = {
         title: data[key],
         components: [],
       };
       result[key].components = await import(`./effects/${key}.component`)
        .then((component) => component.default);
     })
   this.codes = result;
  }
}