import { Component } from '@angular/core';

@Component({
  selector: 'clip-path-1',
  template: `
   <div class="clip-path-1">Hover me</div>
  `,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath1Component {
  static title = "聚焦动画"
}

@Component({
  selector: 'clip-path-2',
  template: `<div class="clip-path-2">Hover me</div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath2Component {
  static title = "环绕动画"
}

@Component({
  selector: 'clip-path-2',
  template: `<div class="clip-path-3">Hover me</div>`,
  styleUrls: ['../styles/clip-path.component.scss'],
})
export class ClipPath3Component {
  static title = ""
}
// 聚光灯 https://css-tricks.com/animating-with-clip-path/
// 旋转
// 插槽
// 百叶窗
// 星
// 路径形状
export const clipPathComponents = [
  ClipPath1Component,
  ClipPath2Component,
  ClipPath3Component
];



export default clipPathComponents;