import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks: any = [{
    label: '首页',
    path: '/home',
  }, {
    label: '分类',
    path: '/search',
  }];
  constructor (private router: Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['']);
  }
}
