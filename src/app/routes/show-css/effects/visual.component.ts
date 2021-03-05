import { Component } from '@angular/core';

@Component({
  selector: 'visual-1',
  template: `<div id="singleSideShadow-1"></div>
                    <div id="singleSideShadow-2"></div>
                    <div id="singleSideShadow-3"></div>
                    `,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual1Component {
  static title = "单侧投影"
}

@Component({
  selector: 'visual-2',
  template: `
  <div id="irregular" class="fullBg">
  <span>Dotted border</span>
</div>
  `,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual2Component {
  static title = "不规则投影"
}


@Component({
  selector: 'visual-3',
  template: ` <div id="dyeingEffect" class="fullBg"></div>  `,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual3Component {
  static title = "染色效果"
}

@Component({
  selector: 'visual-4',
  template: `
  <div id="woolGlassEffect" class="fullBg">
                        <div>
                            <span>毛玻璃效果展示</span>
                        </div>
                    </div>
  `,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual4Component {
  static title = "毛玻璃效果"
}

@Component({
  selector: 'visual-5',
  template: `<div id="angleEffect" class="fullBg">
  </div>`,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual5Component {
  static title = "折角效果"
}

@Component({
  selector: 'visual-6',
  template: `
  <div class="visual-6">
     <svg viewBox="0 0 100 100">
      <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
      <text> 
        <textPath xlink:href="#circle"> xuhailin xuhailin jimi xuhailin </textPath> </text> 
     </svg>
  </div>`,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual6Component {
  static title = "环形文字";
  // 借助svg实现
}

//   mix-blend-mode: normal;         // 正常
//   mix-blend-mode: multiply;       // 正片叠底
//   mix-blend-mode: screen;         // 滤色
//   mix-blend-mode: overlay;        // 叠加
//   mix-blend-mode: darken;         // 变暗
//   mix-blend-mode: lighten;        // 变亮
//   mix-blend-mode: color-dodge;    // 颜色减淡
//   mix-blend-mode: color-burn;     // 颜色加深
//   mix-blend-mode: hard-light;     // 强光
//   mix-blend-mode: soft-light;     // 柔光
//   mix-blend-mode: difference;     // 差值
//   mix-blend-mode: exclusion;      // 排除
//   mix-blend-mode: hue;            // 色相
//   mix-blend-mode: saturation;     // 饱和度
//   mix-blend-mode: color;          // 颜色
//   mix-blend-mode: luminosity;     // 亮度
@Component({
  selector: 'visual-7',
  template: `
  <div class="visual-7">
    <div class="header">
      <div class="header-title">
        <svg viewBox="0 0 150 150">
          <path d="M -10, 80 A 86 86 0 0 0 160 80" fill="none" id="circle1" />
          <text fill="#fff" style="letter-spacing: 4px;">
            <textPath xlink:href="#circle1"> HAILIN'S HOMEPAGE </textPath>
          </text>
        </svg>
      </div>
    </div>
  </div>`,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual7Component {
  static title = "背景和字体混合";
  // 借助svg实现
}

export const visualComponents = [
  Visual1Component,
  Visual2Component,
  Visual3Component,
  Visual4Component,
  Visual5Component,
  Visual6Component,
  Visual7Component,
];

export default visualComponents;