import { Component } from '@angular/core';

@Component({
  selector: 'visual-1',
  template: `
  
  <div id="singleSideShadow-1"></div>
                    <div id="singleSideShadow-2"></div>
                    <div id="singleSideShadow-3"></div>
                    `,
  styles: [
    `
    #singleSideShadow {

      &-1,
      &-2,
      &-3 {
        width: 46%;
        height: 46%;
        margin: 2%;
        background: #ED6A5A;
        float: left;
      }
    
      &-1 {
        box-shadow: 0px 6px 6px -3px #555;
        /*第四个参数会根据你指定的值去扩大或者缩小投影的尺寸*/
      }
    
      &-2 {
        box-shadow: 6px 6px 6px -3px #555;
      }
    
      &-3 {
        box-shadow: 6px 0px 6px -3px #555, -6px 0px 6px -3px #555;
      }
    `
  ],
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
  styles: [
    `
    #irregular {
      border: 12px dotted #ED6A5A;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
      text-align: center;
      line-height: 100px;
      font-size: 20px;
    }
    `
  ],
})
export class Visual2Component {
  static title = "不规则投影"
}


@Component({
  selector: 'visual-3',
  template: ` <div id="dyeingEffect" class="fullBg"></div>  `,
  styles: [
    `
    /*
滤镜
#dyeingEffect{
    transition: .5s filter;
    filter:sepia(1) saturate(4) hue-rotate(295deg);
}

#dyeingEffect:hover,#dyeingEffect:focus{
    filter:none;
}*/

/*混合模式*/
#dyeingEffect {
  background-size: cover;
  // background-image: url("../../assets/images/search/effectImg1.png");
  background-color: #ED6A5A;
  background-blend-mode: luminosity;
  transition: 1s background-color;

  &:hover,
  &:focus {
    background-color: transparent;
  }
}

    `
  ],
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
  styles: [
    `
    #woolGlassEffect {
      position: relative;
      //   background-image: url("../../assets/images/search/effectImg1.png");
      background-size: cover;
    
      >div {
        position: relative;
        width: 80%;
        height: 80%;
        top: 10%;
        margin: auto;
        display: block;
        color: white;
        padding: 1em;
        background: rgba(230, 235, 224, 0.3);
        overflow: hidden;
        z-index: 0;
    
        &:before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          //  background-image: url("../../assets/images/search/effectImg1.png");
          background-size: cover;
          z-index: -1;
          filter: blur(5px);
          margin: -10px;
        }
      }
    }
    `
  ],
})
export class Visual4Component {
  static title = "毛玻璃效果"
}
@Component({
  selector: 'visual-5',
  template: `<div id="angleEffect" class="fullBg">
  </div>`,
  styles: [
    `
    #angleEffect {
      background: #ED6A5A;
      background:
        linear-gradient(-150deg, transparent 1.4em, #ED6A5A 0);
      /*2/根号2 得来的1.4*/
      border-radius: .5em;
    
      &:before {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.4)) no-repeat 100% 0;
        width: 1.73em;
        height: 3em;
        transform: translateY(-1.3em) rotate(-30deg);
        transform-origin: bottom right;
        border-bottom-left-radius: inherit;
        box-shadow: -.2em .2em .3em -.1em rgba(0, 0, 0, .15);
      }
    }
    `
  ],
})
export class Visual5Component {
  static title = "折角效果"
}

export const visualComponents = [
  Visual1Component,
  Visual2Component,
  Visual3Component,
  Visual4Component,
  Visual5Component,
];

export default visualComponents;