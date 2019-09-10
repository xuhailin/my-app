import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
}
