import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, Directive, OnInit } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, merge, Observable, of, zip } from 'rxjs';
import { delay, filter, last, map, mergeMap, pluck, repeatWhen, take, takeLast, takeUntil, tap, withLatestFrom } from 'rxjs/operators';

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
  selector: 'visual-41',
  template: `<img id="diamond" src="assets/images/search/effectImg1.png" />`,
  styles: [
    `
    #diamond {
      position: relative;
      width: 200px;
      height: 150px;
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
      /*polygon 多边形裁剪*/
      transition: 1s clip-path;
    
      &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
    `
  ],
})
export class Visual41Component {
  static title = "菱形图片"
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
          <text fill="#000" style="letter-spacing: 4px;">
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
  selector: 'visual-8',
  template: `
  <div class="visual-8">
    <div class="container" #target>
      <div class="item" dir="left" state="leave" origin="top left">X</div>
      <div class="item" dir="left" state="leave" origin="top left">H</div>
      <div class="item" dir="left" state="leave" origin="top left">L</div>
      <div class="item" dir="left" state="leave" origin="top left">A</div>
    </div>
  </div>`,
  styleUrls: ['../styles/visual.component.scss'],
})
export class Visual8Component implements AfterViewInit {
  static title = '鼠标方向特效';
  static href = 'http://101.200.60.78/archives/css%E7%BF%BB%E8%BD%AC%E6%A0%B7%E5%BC%8F';
  @ViewChild('target', { static: false }) target: ElementRef;
  private currentPos: string;
  private dirs = ['top left', 'top right', 'bottom left', 'bottom right'];

  constructor (private render: Renderer2) { }
  public ngAfterViewInit(): void {
    const element = this.target.nativeElement;
    const enter$ = fromEvent(element, 'mouseover');
    const leave$ = fromEvent(element, 'mouseout');
    const move$ = fromEvent(document, 'mousemove')
      .pipe(
        map((event: MouseEvent) => { return { x: event.x, y: event.y } }),
      );
    // 每当进入一个新的点时，获取最新的move坐标
    this.stateChange(enter$, move$, 'enter')
      .subscribe();
    this.stateChange(leave$, move$, 'leave')
      .subscribe();
  }

  private stateChange(source$: Observable<any>, fromSource$: Observable<any>, state: string): any {
    const element$ = source$.pipe(pluck('target'),
      filter((target: HTMLElement) => target.classList.contains('item')));
    return this.dir(element$, fromSource$)
      .pipe(map(([target, dir]) => {
        (target as HTMLElement).style.setProperty('--visual8-transition', 'none');
        this.render.setAttribute(target, 'dir', dir);
        this.render.setAttribute(target, 'origin', this._calcOrigin(dir));
        setTimeout(() => {
          // 重新开启transition
          (target as HTMLElement).style.removeProperty('--visual8-transition');
          this.render.setAttribute(target, 'state', state);
        });
        return target;
      }),
        // delay(500),
        // tap((target) =>  this.render.setAttribute(target, 'state', 'pause'))
      );
  }

  private dir(source$: Observable<any>, fromSource$: Observable<any>): any {
    return source$.pipe(
      withLatestFrom(fromSource$),
      map(([dom, pointB]) => {
        const pointA = this._getDomCenterPoint(dom);
        const dir = this._calcDirection([pointA, pointB]);
        return [dom, dir];
      }));
  }

  private _getDomCenterPoint(dom: HTMLElement): { x: number, y: number } {
    const rect = dom.getBoundingClientRect();
    const { x, y, height, width } = rect as DOMRect;
    return { x: x + width / 2, y: y + height / 2 };
  }

  private _calcDirection([pointA, pointB]): string {
    const { x, y } = pointA;
    const { x: x1, y: y1 } = pointB;
    const sy = y - y1;
    const sx = x - x1;
    const k = sy / sx;
    let result;
    // 斜率大于1 在上或者下， 负责左右
    if (Math.abs(k) >= 1) {
      // 判断上还是下
      result = sy >= 0 ? 0 : 1;
    } else {
      result = sx >= 0 ? 2 : 3;
    }
    const directions = ['top', 'bottom', 'left', 'right'];
    return directions[result];
  }

  private _calcOrigin(dir: string): string {
    if (!this.currentPos) {
      this.currentPos = this.dirs.find((item) => item.includes(dir));
    } else {
      const validDirs = this.dirs.filter((item) => item.includes(dir));
      if (validDirs[0] === this.currentPos || validDirs[1] === this.currentPos) {
        this.currentPos = validDirs[0] === this.currentPos ? validDirs[0] : validDirs[1];
      } else {
        const values = this.currentPos.split(' ');
        this.currentPos = validDirs[0].includes(values[0]) || validDirs[0].includes(values[1]) ? validDirs[0] : validDirs[1];
      }
    }
    return this.currentPos;
  }

}

export const visualComponents = [
  Visual1Component,
  Visual2Component,
  Visual3Component,
  Visual4Component,
  Visual41Component,
  Visual5Component,
  Visual6Component,
  Visual7Component,
  Visual8Component,
  Mask1Component
];

export default visualComponents;