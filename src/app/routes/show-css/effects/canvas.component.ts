import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'canvas-1',
  template: `
    <canvas #canvas></canvas>
    <div #target></div>
    `,
  styles: [
    `:host {
      display: flex;
      width: 500px;
      gap: 20px;
    }`
  ]
})
export class Canvas1Component implements AfterViewInit {
  @ViewChild('canvas', { static: true }) public canvas: ElementRef;
  @ViewChild('target', { static: true }) public target: ElementRef;
  static title = "box-shadow像素画";
  private _width = 150;
  private _height = 150;
  private _content: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this._startDraw();
  }

  private _startDraw(): void {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    canvas.width = this._width;
    canvas.height = this._height;
    this._content = canvas.getContext('2d');
    this._loadImage();
  }

  private _loadImage(): void {
    const image = new Image();
    image.src = 'assets/images/icon.png';
    image.onload = (e) => {
      this._content.drawImage(image, 0, 0, this._width, this._height);
      const imageData = this._content.getImageData(0, 0, this._width, this._height);
      const data: Uint8ClampedArray = imageData.data;
      const boxShadow = this._getBoxShadow(data);
      const target = this.target.nativeElement;
      target.style.width = '1px';
      target.style.height = '1px';
      target.style.boxShadow = boxShadow;
    };
  }


  private _getBoxShadow(data: Uint8ClampedArray): string {
    const column = this._width;
    const row =  this._height;
    const result = [];
    let index = 0;
    let toRight = false;

    const calc = (i, j) => {
      const rgba = data.slice(index, index + 4);
      rgba[3] = rgba[3] / 255;
      result.push(`${j* 2}px ${i}px rgba(${rgba.join(',')})`)
      index += 4;
      toRight = !toRight;
    }

    for (let i = 0; i< row; i++) {
      if (toRight) {
        for (let j = 0; j < column; j++) {
          calc(i, j);
        }
      } else {
        for (let j = column - 1; j >=0; j--) {
          calc(i, j);
        }
      }
    }
    return result.join(',');
  }
}


export const canvasComponents = [
  Canvas1Component,
];

export default canvasComponents;