class DLXHTMLCanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }
  createEmptyCanvas = (width: number, height: number) => {
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext('2d');
    if (this.ctx) {
      this.ctx.fillStyle = '#123456';
      this.ctx.fillRect(0,0,width,height);
    }

  }
}


export default DLXHTMLCanvas;