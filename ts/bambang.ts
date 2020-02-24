class Bambang extends Collidable implements Renderable, Listener, Asset{
  loaded: boolean = false;
  private main: MainRenderer;
  private bambangRender: ImageBitmap;
  constructor(main: MainRenderer, x: number, y: number){
    super();
    this.position = [main.getSize()[0]/6,main.getSize()[1]*2/3];
    this.size = [50,50];
    this.mask = 0b11;
    this.id = 'player';
    this.main = main;
  }
  public checkCollision(other: Collidable): boolean{
    return false;
  }
  public onCollide(other: Collidable): void{
    if(other.mask == 0b01) this.main.GameOver();
  }
  public render(delta, ctx): void{
    if(this.main.isDebug()){
      ctx.beginPath();
      ctx.strokeStyle = 'red';
      ctx.rect(this.position[0], this.position[1], this.size[0], this.size[1]);
      ctx.stroke();
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position[0], this.position[1], this.size[0], this.size[1]);
    // ctx.drawImage(this.bambangRender, this.position[0], this.position[1], this.size[0], this.size[1]);
  }
  public startClick(){
  }
  public endClick(){}
  public load(callback: Function){
    let i = new Image();
    i.src = '/assets/assets.flying.rocket.png';
    i.onload = () => {
      createImageBitmap(i).then((s)=>{
        this.bambangRender = s;
        let h = this.main.getSize()[1]/15
        this.size = [s.width/s.height*h,h];
        callback();
      });
    }
  }
  public reset(){
    this.position[1] = this.main.getSize()[1]/2-10;
  }
}