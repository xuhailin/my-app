import { Component } from '@angular/core'

@Component({
  selector: 'text-1',
  template: `<div class="text1">Loading</div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text1Component {
  static title = "等宽字体 & step"
}

@Component({
  selector: 'text-2',
  template: `<div class="text2">
    <svg width="2em" height="60px">
      <use xlink:href="#text2-css"></use>
      <text id="text2-css" y="1em">loading</text>
    </svg>
    <span class="text-mask">loading</span>
  </div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text2Component {
  static title = "覆盖 & linear-gradient"
}

@Component({
  selector: 'text-3',
  template: `<div class="text3">
  <span>l</span>
  <span>o</span>
  <span>a</span>
  <span>d</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
  </div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text3Component {
  static title = "text-shadow & delay & 多标签"
}

@Component({
  selector: 'text-4',
  template: `<div class="text4">Loading</div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text4Component {
  static title = "clip & linear-gradient & filter"
}

@Component({
  selector: 'text-5',
  template: `<div class="text5" data-title="Loading">Loading</div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text5Component {
  static title = "覆盖 & position"
}

@Component({
  selector: 'text-6',
  template: `
  <div class="text6">
    <svg viewBox="0 0 100 100">
      <path fill="none" d="M 0,50 a 50,50 0 1,1 0,1 z" id="text-6-circle">
      </path>
      <text> 
        <textPath fill="#fff" xlink:href="#text-6-circle">loading</textPath> 
      </text> 
     </svg>
   </div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text6Component {
  static title = "textPath & rotate"
}

@Component({
  selector: 'text-7',
  template: `<div class="text7">
  <span>hi</span>
  <span>loading</span>
  </div>`,
  styleUrls: ['../styles/text.component.scss'],
})
export class Text7Component {
  static title = "filter: contrast & blur"
}

export const textComponents = [
  Text1Component,
  Text2Component,
  Text3Component,
  Text4Component,
  Text5Component,
  Text6Component,
  Text7Component,
];

export default textComponents;