import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

// 1


@Component({
  selector: 'bg-and-border-1',
  template: `
    <div class="text">
      <span>Can I haz semi-transparent borders? Pretty please?</span>
    </div>
  `,
  styles: [
    `:host .text {
      border: 8px solid rgba(255, 255, 255, 0.3);
      background: #000;
      background-clip: padding-box;
      width: 150px;
      height: 100px;
      text-align: center;
      padding: 5px;
      display: flex;
      align-items: center;
   }
    `
  ],
})
export class BgAndBorder1Component {
  static title = "半透明边框"
}

@Component({
  selector: 'bg-and-border-2',
  template: `<div></div>`,
  styles: [
    `
     :host div {
      width: 160px;
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
  styles: [
    `
    :host div {
      width: calc(100% - 1.3em);
      height: calc(100% - 1.3em);
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
  template: `<div id="borderImage-2">
  <div id="borderImage-1">
  </div>
</div>`,
  styles: [
    `
    #borderImage {

      &-1,
      &-2 {
        position: relative;
        margin: 0 auto;
        border: 1em solid transparent;
        height: 100%;
        padding: 1em;
      }
    
      &-1 {
        width: calc(95% - 1em);
        background: linear-gradient(#E6EBE0, #E6EBE0) padding-box,
          repeating-linear-gradient(-45deg, #ED6A5A 0, #ED6A5A 12.5%, transparent 0, transparent 25%, #5CA4A9 0, #5CA4A9 37.5%, transparent 0, transparent 50%) 0/5em 5em;
      }
    
      &-2 {
        width: calc(100% - 1px);
        background: linear-gradient(#F4F1BB, #F4F1BB) padding-box,
          repeating-linear-gradient(-45deg, #ED6A5A 0, #ED6A5A 25%, #E6EBE0 0, #E6EBE0 50%) 0/.6em .6em;
        animation: ants 12s linear infinite;
        /*infinite 动画连续播放*/
      }
    }

    @keyframes ants {
      to {
        background-position: 100%
      }
    }
    `
  ],
})
export class BgAndBorder5Component {
  static title = "连续的图像边框"
}

@Component({
  selector: 'bg-and-border-6',
  template: ` <div class="effect-show" style="display: inline-block">
  <div id="bgStripe-C">
  </div>

</div>
<div class="effect-show" style="display: inline-block">
  <div id="bgStripe-R">
  </div>
</div>
<div class="effect-show" style="display: inline-block">
  <div id="bgStripe-S">
  </div>
</div>
<div class="effect-show" style="display: inline-block">
  <div id="bgStripe-L">
  </div>
</div>`,
  styles: [
    `
    /*

linear-gradient(c1 b1,c2 b2)
b1和b2是色标比例，越小产生的过度区域就越小 大于等于1就相当于没了过渡区

如果色标的位置比整个列表中在它之前的色标位置值都要小，那么会被设置为他前面所有色标位置值得最大值
*/
#bgStripe {

  &-R,
  &-C,
  &-S,
  &-L {
    position: relative;
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }

  &-R {
    background: linear-gradient(to right, #5CA4A9 33.3%, #ED6A5A 0, #ED6A5A 66.6%, #E6EBE0 0);
    background-size: 45px 100%;
  }

  &-C {
    background: linear-gradient(#5CA4A9 33.3%, #ED6A5A 0, #ED6A5A 66.6%, #E6EBE0 0);
    background-size: 100% 45px;
    /*背景宽高，默认会重复，所以就是条纹了*/
  }

  &-S {
    /* background: linear-gradient(45deg,
                    #5CA4A9 16.65%,#ED6A5A 0,
                    #ED6A5A 33.3%,#E6EBE0 0,
                    #E6EBE0 49.95%,#5CA4A9 0,
                    #5CA4A9 66.6%, #ED6A5A 0,
                    #ED6A5A 83.25%,#E6EBE0 0
        );*/
    /*background: repeating-linear-gradient(45deg,
        #5CA4A9 0,#5CA4A9 16.65%,
        #ED6A5A 0,#ED6A5A 33.33%,
        #E6EBE0 0,#E6EBE0 49.98%);*/
    background: repeating-linear-gradient(45deg, #ED6A5A 0, #ED6A5A 25%, #E6EBE0 0, #E6EBE0 50%);
    background-size: 42.426406871px 42.426406871px;
    /*宽度如果想要15px 则就是15px根号2*2 背景宽高，默认会重复，所以就是条纹了*/
  }

  /**
      相似的条纹图案
    */
  &-L {
    background: #ED6A5A;
    background-image: repeating-linear-gradient(30deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
  }
}
    `
  ],
})
export class BgAndBorder6Component {
  static title = "条纹背景"
}

@Component({
  selector: 'bg-and-border-7',
  template: `<div class="effect-show" style="display: inline-block">
  <!--http://lea.verou.me/css3patterns-->
  <!--http://bytesizematters.com 文件大小-->
  <div id="advancedBg-1">
  </div>
</div>
<div class="effect-show" style="display: inline-block">
  <div id="advancedBg-2">
  </div>
</div>
<div class="effect-show" style="display: inline-block">
  <div id="advancedBg-3">
  </div>
</div>
<div class="effect-show" style="display: inline-block">
  <div id="advancedBg-4">
  </div>
</div>`,
  styles: [
    `
    #advancedBg {

      &-1,
      &-2,
      &-3,
      &-4 {
        position: relative;
        width: 95%;
        height: 100%;
        margin: 0 auto;
      }
    
      &-1 {
        background: #E6EBE0;
        background-image: linear-gradient(90deg, rgba(237, 106, 90, 0.8) 50%, transparent 0), linear-gradient(rgba(237, 106, 90, 0.8) 50%, transparent 0);
        background-size: 30px 30px;
      }
    
      &-2 {
        background: #ED6A5A;
        background-image:
          linear-gradient(#E6EBE0 2px, transparent 0),
          linear-gradient(90deg, #E6EBE0 2px, transparent 0),
          linear-gradient(hsla(0, 0%, 100%, .3) 1px, transparent 0),
          linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0);
        background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
      }
    
      &-3 {
        background: #ED6A5A;
        background-image: radial-gradient(#E6EBE0 30%, transparent 0), radial-gradient(#E6EBE0 30%, transparent 0);
        background-size: 30px 30px;
        background-position: 0 0, 15px 15px;
      }
    
      &-4 {
        background: #ED6A5A;
        background-image:
          linear-gradient(45deg, #E6EBE0 26%, transparent 0, transparent 75%, #E6EBE0 0),
          linear-gradient(45deg, #E6EBE0 26%, transparent 0, transparent 75%, #E6EBE0 0);
        background-size: 30px 30px;
        background-position: 0 0, 15px 15px;
      }
    }
    `
  ],
})
export class BgAndBorder7Component {
  static title = "复杂背景图案"
}

export default [
  BgAndBorder1Component,
  BgAndBorder2Component,
  BgAndBorder3Component,
  BgAndBorder4Component,
  BgAndBorder5Component,
  BgAndBorder6Component,
  BgAndBorder7Component
];