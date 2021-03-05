import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

// 1


@Component({
  selector: 'bg-and-border-1',
  template: `
    <div class="bg-and-border-1">
      <span>Can I haz semi-transparent borders? Pretty please?</span>
    </div>
  `,
  styleUrls: ['../styles/bg-and-border.component.scss'],
})
export class BgAndBorder1Component {
  static title = "半透明边框"
}

@Component({
  selector: 'bg-and-border-2',
  template: `<div></div>`,
  styleUrls: ['../styles/bg-and-border.component.scss'],
  styles: [
    `
     :host div {
      width: 100px;
      height: 80px;
      top: 20px;
      position: relative;
      margin: 0px auto;
      background: #F4F1BB;
      box-shadow: 0 0 0 10px #ED6A5A, 0 0 0 15px #F4F1BB, 0 2px 5px 20px #ED6A5A;
     }
    `
  ],
})
export class BgAndBorder2Component {
  static title = "多重边框"
}

@Component({
  selector: 'bg-and-border-3',
  template: `<div></div>`,
  styleUrls: ['../styles/bg-and-border.component.scss'],
  styles: [
    `
    :host div {
      width: 100px;
      height: 100px;
      position: relative;
      top: 0.6em;
      margin: 0px auto;
      background: #F4F1BB;
      border-radius: .8em;
      padding: 1em;
      box-shadow: 0 0 0 0.6em #ED6A5A;
      outline: 0.7em solid #ED6A5A;
    }
    `
  ],
})
export class BgAndBorder3Component {
  static title = "边框内圆角"
}

@Component({
  selector: 'bg-and-border-4',
  template: `<div></div>`,
  styleUrls: ['../styles/bg-and-border.component.scss'],
  styles: [
    `
    :host div {
      position: relative;
      width: 100%;
      height: 100%;
      /*background: linear-gradient(90deg,#5CA4A9 15%,#ED6A5A 0,#ED6A5A 40%,#9BC1BC 0,#9BC1BC 65%,#E6EBE0 0); */
      background: #E6EBE0;
      background-image: linear-gradient(90deg, #5CA4A9 11px, transparent 0),
        linear-gradient(90deg, #ED6A5A 23px, transparent 0),
        linear-gradient(90deg, #7bc96f 41px, transparent 0);
      background-size: 41px 100%, 61px 100%, 83px 100%;
    }
    `
  ],
})
export class BgAndBorder4Component {
  static title = "伪随机背景"
}

@Component({
  selector: 'bg-and-border-5',
  template: `
   <div class="bg-and-border-5">
    <div class="example">
    </div>
  </div>`,
  styleUrls: ['../styles/bg-and-border.component.scss'],
})
export class BgAndBorder5Component {
  static title = "连续的图像边框"
}

@Component({
  selector: 'bg-and-border-6',
  template: `
   <div class="bg-and-border-6">
      <div class="example-1">
      </div>
      <div class="example-2">
      </div>
      <div class="example-3">
      </div>
      <div class="example-4">
      </div>
    </div>`,
  styleUrls: ['../styles/bg-and-border.component.scss'],
})
export class BgAndBorder6Component {
  static title = "条纹背景"
}

@Component({
  selector: 'bg-and-border-7',
  template: `
   <div class="bg-and-border-7">
     <div class="example-1">
     </div>
     <div class="example-2">
    </div>
    <div class="example-3">
    </div>
    <div class="example-4">
    </div>
  </div>`,
  styleUrls: ['../styles/bg-and-border.component.scss'],
})
export class BgAndBorder7Component {
  static title = "复杂背景图案"
}


export const bgAndBorderComponents = [
  BgAndBorder1Component,
  BgAndBorder2Component,
  BgAndBorder3Component,
  BgAndBorder4Component,
  BgAndBorder5Component,
  BgAndBorder6Component,
  BgAndBorder7Component
];

export default bgAndBorderComponents;