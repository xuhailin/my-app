import { Component } from '@angular/core';

@Component({
  selector: 'clip-path-1',
  template: `
   <div class="clip-path-1">
    <div class="example-1"></div>
    <div class="example-2"></div>
   </div>
  `,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath1Component {
  static title = "边框动画"
}

@Component({
  selector: 'clip-path-2',
  template: `<div class="clip-path-2">Example</div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath2Component {
  static title = "聚光灯"
}

@Component({
  selector: 'clip-path-3',
  template: `<div class="clip-path-3"></div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath3Component {
  static title = "旋转"
}

@Component({
  selector: 'clip-path-4',
  template: `<div class="clip-path-4"></div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath4Component {
  static title = "插槽"
}

@Component({
  selector: 'clip-path-5',
  template: `<div class="clip-path-5">Hover me</div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath5Component {
  static title = "百叶窗"
}

@Component({
  selector: 'clip-path-6',
  template: `<div class="clip-path-6"></div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath6Component {
  static title = "星"
}

export const clipPathComponents = [
  ClipPath1Component,
  ClipPath2Component,
  ClipPath3Component,
  ClipPath4Component,
  ClipPath5Component,
  ClipPath6Component,
];

export default clipPathComponents;