class Pipe implements Renderable{
  loaded: boolean;
  private main: MainRenderer;
  private s: [number,number];
  private ph: number;
  pipeLane: number;
  private laneColor = ['blue','orange','green'];
  constructor(main: MainRenderer, lane: number){
    this.main = main;
    this.s = main.getSize();
    this.ph = 35;
    this.pipeLane = lane;
  }
  render(delta: number, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.laneColor[this.pipeLane];
    ctx.fillRect(0,(this.s[1]*2/3)+(this.ph*this.pipeLane),this.s[0], this.ph);
  }
  load(callback: Function): void {
    return callback();
  }
}

class PipeContainer implements Renderable{
  loaded: boolean;
  private pipes: Array<Pipe>;
  private main: MainRenderer;
  private lanes: number;
  private pipesLoaded: number;
  constructor(main: MainRenderer, n: number){
    this.main = main;
    this.lanes = n;
    this.pipes = new Array<Pipe>();
    for (let i = 0; i < n; i++) {
      this.pipes.push(new Pipe(main, i));
    }
  }
  render(delta: number, ctx: CanvasRenderingContext2D): void {
    this.pipes.forEach((p) => {
      p.render(delta,ctx);
    });
  }
  load(callback: Function): void {
    return callback();
    this.pipes.forEach((p) => {
      p.load(() => this.loadAll(callback) );
    })
  }
  loadAll(callback: Function): void{
    this.pipesLoaded++;
    if(this.pipesLoaded >= this.lanes){
      callback();
    }
  }
}