import { Component } from '@angular/core';

@Component({
  selector: 'mask-1',
  template: `
   <div class="mask-1">
     <div class="example-1"></div>
     <div class="example-2"></div>
     <div class="example-3"></div>
     <div class="example-4"></div>
   </div>
  `,
  styleUrls: ['../styles/mask.component.scss'],
})
export class Mask1Component {
  static title = "MaskImage"
}

@Component({
  selector: 'mask-2',
  template: `
  <div class="mask-2">
  </div>`,
  styleUrls: ['../styles/mask.component.scss'],
})
export class Mask2Component {
  static title = "CrossFade"
}

@Component({
  selector: 'mask-3',
  template: `
  <div id="test">cross-fade和mask-image</div>
  <div class="mask-3"></div>`,
  styleUrls: ['../styles/mask.component.scss'],
})
export class Mask3Component {
  static title = "旋转"
}

@Component({
  selector: 'mask-4',
  template: `<div class="mask-4"></div>`,
  styleUrls: ['../styles/mask.component.scss'],
})
export class Mask4Component {
  static title = "插槽"
}

@Component({
  selector: 'mask-5',
  template: `<div class="mask-5">Hover me</div>`,
  styleUrls: ['../styles/mask.component.scss'],
})
export class Mask5Component {
  static title = "百叶窗"
}

@Component({
  selector: 'mask-6',
  template: `<div class="mask-6"></div>`,
  styleUrls: ['../styles/mask.component.scss'],
})
export class Mask6Component {
  static title = "星"
}

export const maskComponents = [
  Mask1Component,
  Mask2Component,
  Mask3Component,
  Mask4Component,
  Mask5Component,
  Mask6Component,
];

export default maskComponents;