import { Directive, Input, ElementRef } from '@angular/core';

export enum ShapeType {
  Square = 'square', // 正方形
  Rectangle = 'rectangle', // 矩形
  Triangle = 'triangle', // 三角形
  Circle = 'circle', // 圆形
  Heart = 'heart', // 心形
  Star = 'star', // 星形
  Sector = 'sector', // 扇形
  Crescent = 'crescent', // 月形-弦月
  Ellipse = 'ellipse', // 椭圆形
  Trapezium = 'trapezium', // 梯形
  Polygon = 'polygon', // 多边形
  Cylinder = 'cylinder', // 圆柱体
  Dimond = 'dimond', // 菱形 lozenge
  Rhombus = 'rhombus', // 菱形、斜方形
  Prism = 'prism', // 角柱体
  Pentagon = 'pentagon', // 五边形
  Parallelogram = 'parallelogram', // 平行四边形
  Cube = 'cube', // 正方体
  Cone = 'cone', // 圆锥体
  Pyramid = 'pyramid', // 三角锥体
  Sphere = 'sphere', // 球形
}

@Directive({
  selector: '[appShape]',
})
export class ShapeDirective {
  constructor(private _elementRef: ElementRef) { }

  @Input('shapData')
  public set shapeData(shapeData: any) {
    const container = this._elementRef.nativeElement;
    const svgDom = this._createSvgDom('300', '200');
    shapeData.forEach((item) => {
      const { type, data } = item;
      switch (type) {
        case ShapeType.Circle:
          const { cx, cy, r, style } = data;
          svgDom.appendChild(this._createCircle(cx, cy, r, style));
          break;
        case ShapeType.Triangle:
          break;
        default:
      }
    });
    container.appendChild(svgDom);
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
