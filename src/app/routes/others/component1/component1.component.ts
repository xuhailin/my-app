import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class OtherComponent1 implements OnInit {
  title="canvas 波动的圆"
  constructor() { }

  ngOnInit() {

  }
}
