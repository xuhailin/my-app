import { Component } from '@angular/core';

@Component({
  selector: 'shape-1',
  template: `
  <div id="autoResizeOval-1">
                    </div>
                    <div id="autoResizeOval-2">
                    </div>
                    <div id="autoResizeOval-3">
                    </div>
  `,
  styles: [
    `

    #autoResizeOval {

      &-1,
      &-2,
      &-3 {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 40px;
        background: #ED6A5A;
        margin: 10px;
      }
    
      &-1 {
        border-radius: 50% / 100% 100% 0 0;
      }
    
      &-2 {
        border-radius: 100% 0 0 100% / 50%;
      }
    
      &-3 {
        border-radius: 100% 0 0 0;
        /*第一个角横竖半径都为100% 其他都为0 就没有必要再用斜杠写法了*/
      }
    }
    `
  ],
})
export class Shape1Component {
  static title = "自适应的椭圆"
}

@Component({
  selector: 'shape-2',
  template: `<div id="parallelogram">
  字体不要倾斜
</div>`,
  styles: [
    `
    #parallelogram {
      position: relative;
      width: 120px;
      height: 100%;
      margin: 0 auto;
      padding: 1em;
      z-index: 0;
      color: #E6EBE0;
    
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background: #ED6A5A;
        transform: skew(20deg);
      }
    }
    
    `
  ],
})
export class Shape2Component {
  static title = "平行四边形"
}


@Component({
  selector: 'shape-3',
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
export class Shape3Component {
  static title = "菱形图片"
}
@Component({
  selector: 'shape-4',
  template: `
  <div id="cornerCut-1"></div>
  <div id="cornerCut-2"></div>`,
  styles: [
    `
    #cornerCut {

      &-1,
      &-2 {
        width: 100%;
        height: 48%;
        background: #ED6A5A;
      }
    
      &-1 {
        background:
          linear-gradient(135deg, transparent 10px, #ED6A5A 0) top left,
          linear-gradient(-135deg, transparent 10px, #ED6A5A 0) top right,
          linear-gradient(-45deg, transparent 10px, #ED6A5A 0) bottom right,
          linear-gradient(45deg, transparent 10px, #ED6A5A 0) bottom left;
        background-size: 51% 51%;
        background-repeat: no-repeat;
      }
    
      &-2 {
        margin-top: 2%;
        background:
          radial-gradient(circle at top left, transparent 15px, #ED6A5A 0) top left,
          radial-gradient(circle at top right, transparent 15px, #ED6A5A 0) top right,
          radial-gradient(circle at bottom right, transparent 15px, #ED6A5A 0) bottom right,
          radial-gradient(circle at bottom left, transparent 15px, #ED6A5A 0) bottom left;
        background-size: 51% 51%;
        background-repeat: no-repeat;
      }
    }
    
    `
  ],
})
export class Shape4Component {
  static title = "切角效果"
}


@Component({
  selector: 'shape-5',
  template: `
  <ul id="echelon">
  <li><a>Home</a></li>
  <li><a>Projects</a></li>
  <li><a>About</a></li>
</ul>
  `,
  styles: [
    `
    #echelon {
      width: 100%;
      height: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;
    
      li>a {
        position: relative;
        display: inline-block;
        padding: 1.3em 1em 0;
        color: #E6EBE0;
        z-index: 0;
    
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: #ED6A5A;
          background-image: linear-gradient(rgba(237, 106, 90, 0.6), rgba(237, 106, 90, 0));
          border: 1px solid #ED6A5A;
          border-bottom: 0;
          border-radius: .5em .5em 0 0;
          box-shadow: 0 0.15em #E6EBE0 inset;
          transform: perspective(.5em) rotateX(5deg);
          transform-origin: bottom;
        }
      }
    
    }
    `
  ],
})
export class Shape5Component {
  static title = "梯形标签页"
}
@Component({
  selector: 'shape-6',
  template: `
  <div id="pieChart-1">
  <span>css</span>
</div>
<div id="pieChart-2">
  <svg viewBox="0 0 32 32">
      <circle r="16" cx="16" cy="16" />
  </svg>
  <span>svg</span>
</div>
  `,
  styles: [
    `
    #pieChart {

      &-1,
      &-2 {
        position: relative;
        width: 80px;
        line-height: 80px;
        height: 80px;
        top: 20px;
        text-align: center;
    
        span {
          position: absolute;
          color: #E6EBE0;
          top: 0px;
          font-weight: bold;
          left: 30px;
        }
      }
    
      &-1 {
        float: left;
        border-radius: 50%;
        background: #ED6A5A;
        background-image: linear-gradient(to right, transparent 50%, #9BC1BC 0);
    
        &:before {
          content: '';
          display: block;
          margin-left: 50%;
          width: 50%;
          height: 100%;
          border-radius: 0 100% 100% 0 / 50%;
          background-color: inherit;
          transform-origin: left;
          animation: pie-spin 3s linear infinite, pie-bg 6s step-end infinite;
        }
      }
    
      &-2 {
        float: right;
    
        svg {
          border-radius: 50%;
          transform: rotate(-90deg);
          background: #ED6A5A;
          width: 80px;
          height: 80px;
    
          circle {
            fill: #ED6A5A;
            stroke: #9BC1BC;
            stroke-width: 32px;
            stroke-dasharray: 0 100;
            animation: fillup 5s linear infinite;
          }
        }
      }
    }
    
    @keyframes pie-spin {
      100% {
        transform: rotate(.5turn);
      }
    }
    
    @keyframes pie-bg {
      50% {
        background: #9BC1BC
      }
    }
    
    @keyframes fillup {
      to {
        stroke-dasharray: 100 100
      }
    }
    `
  ],
})
export class Shape6Component {
  static title = "饼图"
}

export const shapeComponents = [
  Shape1Component,
  Shape2Component,
  Shape3Component,
  Shape4Component,
  Shape5Component,
  Shape6Component,
];

export default shapeComponents;