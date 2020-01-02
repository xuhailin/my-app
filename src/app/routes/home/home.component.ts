import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any[] = [];
  shapeData = [];
  constructor() {
    this._initShapeData();
   }

  ngOnInit() {
  }

  private _initShapeData(): void {
    this.shapeData = [{
      type: 'circle',
      data: `{cx:100, cy: 100, r: 40, style: 'fill: red'}`,
    }];
  }
}
