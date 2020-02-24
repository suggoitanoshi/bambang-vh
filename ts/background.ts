class ParallaxBackground implements Renderable{
  public loaded = false;
  private main: MainRenderer;
  private size: [number, number];
  private posX = 0;

  constructor(main: MainRenderer){
    this.main = main;
    this.size = main.getSize();
  }
  
  public render(delta,ctx){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,this.size[0], this.size[1]);
  }
  public load(callback){
    return callback();
    // let i = new Image();
    // i.src = '/assets/assets.flying.rocket.png';
    // i.onload = () => {
    //     createImageBitmap(i).then((s) => {
    //         callback();
    //     });
    // };
  }
}