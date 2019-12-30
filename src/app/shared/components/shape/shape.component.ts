import { Component, OnInit, Input } from '@angular/core';
import { ShapeType } from './model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  @Input() data: any = {};
  public content: SVGElement;
  constructor(private _hostElement: Element) { }

  ngOnInit() {
  }

  @Input('type')
  public set shapeType(type: ShapeType) {
    let childDom;
    switch (type) {
      case ShapeType.Circle:
        const { cx, cy, r, style } = this.data;
        childDom = this._createCircle(cx, cy, r, style);
        break;
      case ShapeType.Triangle:
        break;
      default:
    }
    if (childDom) {
      const svgDom = this._createSvgDom('300', '200');
      svgDom.appendChild(childDom);
      this._hostElement.appendChild(svgDom);
      // this.content = svgDom;
    }
  }

  private _createSvgDom(width: string, height: string): SVGElement {
    const svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgDom.setAttribute('width', width);
    svgDom.setAttribute('height', height);
    return svgDom;
  }

  /**
   * 创建多边形
   *
   * @param points 点
   * @param style 样式
   */
  private _createPolygon(points: string, style: string): SVGElement {
    const dom = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    dom.setAttribute('points', points);
    dom.setAttribute('style', style);
    return dom;
  }

  private _createEllipse(cx: string, cy: string, rx: string, ry: string, style: any): SVGElement {
    const dom = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    dom.setAttribute('cx', cx);
    dom.setAttribute('cy', cy);
    dom.setAttribute('rx', rx);
    dom.setAttribute('ry', ry);
    dom.setAttribute('style', style);
    return dom;
  }

  private _createCircle(cx: string, cy: string, r: string, style: string): SVGElement {
    const dom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dom.setAttribute('cx', cx);
    dom.setAttribute('cy', cy);
    dom.setAttribute('r', r);
    dom.setAttribute('style', style);
    return dom;
  }

}
