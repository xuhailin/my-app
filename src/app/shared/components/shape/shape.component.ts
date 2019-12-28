import { Component, OnInit, Input } from '@angular/core';
import { ShapeType } from './model';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  @Input() type: ShapeType;
  constructor() { }

  ngOnInit() {
  }

}
